# Vocab image generation — status & resume guide

_Last updated: 2026-07-28_

## Status

- **Unit 3 (a1u3): COMPLETE.** 33 images generated, background-removed, wired, validated.
- **Unit 4 (a1u4): COMPLETE.** All 38 vocab words have a uniform flat-cartoon
  transparent PNG, wired into the lessons and passing content validation.
  Audit: `python scripts/_u4audit.py` → `TOTAL 38 / NO_JPG - / NO_PNG - / OK 38`.
- Background removal across the whole raw folder: **71 jpgs → 71 cut-outs, 0 full-scene.**
- Content validation: `npm run validate:content` → "80 lessons, 2 checkpoint(s),
  all stories and tests OK".
- **GitHub:** https://github.com/stratecircle/crolearn (public, `main`).
- **Vercel:** still needs a one-time manual import at https://vercel.com/new
  (pick `stratecircle/crolearn`, framework Vite, no other config — the app uses
  HashRouter so it is a pure static SPA and needs no rewrite rules).

## The two fixes that made style consistent

Earlier batches drifted into photorealistic / painterly output. Root cause was
conversation-level context degradation, not prompt wording. Both halves of the
fix are required:

1. **Bake the full style description into EVERY prompt.** Do not rely on a
   "style lock" message earlier in the thread — it stops being honored once the
   conversation grows long.
2. **Use a FRESH ChatGPT conversation.** The old thread
   (`6a6262d0-…`, "Image Generation Instructions") grew enormous, ignored the
   style lock, and eventually stalled entirely (prompt submitted, zero reply).
   A brand-new conversation produced correct output on the first try and held
   style for 30+ consecutive images.

### Working prompt template

```
Generate an image. Flat cartoon vector illustration, thick clean outlines,
bright saturated colors, simple shapes, soft cel shading, one single centered
subject on a completely plain flat cream #F5F0E6 background, no scenery,
no room, no table, no text: <SUBJECT>. Square composition.
```

Swap `no table` → `no street, no sky` for buildings, or → `no floor` for people.
If a product label keeps appearing, extend to
`absolutely no text, no letters, no words, no writing, no labels anywhere`
and describe the object as "blank unlabeled" (this is how `mlijeko` was fixed —
the first version had "MILK" printed on the carton).

## Capture pipeline

1. Open the fresh ChatGPT chat tab. Install `window.__capGen` (see below) —
   **it must be reinstalled after every navigation or reload.**
2. Before typing: remove the stale copy bar and focus the composer.
3. Type the prompt, verify `document.querySelector('#prompt-textarea').innerText`
   is non-empty, then press Return.
4. Wait ~100s, then poll `await window.__capGen()` until it returns `READY:…`.
5. Click the full-width red COPY bar at **(760, 55)** — this is a real user
   gesture, which the clipboard API requires.
6. `python "C:\Users\noahn\Downloads\clip_to_jpg.py" <word>` writes
   `public/img/ai-generated/<word>.jpg`.

Then, once a batch is done:

```
python scripts/bg_jpgs.py          # jpg → transparent public/img/<word>.png
python scripts/wire_images.py a1u4 # inject image: "/img/<word>.png" into lessons
npm run validate:content
git add -A && git commit && git push
```

### `window.__capGen`

Selects generated images by `alt` starting with `"Generated image"`, scoped to
images appearing after the last `[data-message-author-role="user"]` node, then
`fetch()`es the URL directly. The direct fetch matters: in this Chrome the
generated `<img>` elements stay permanently undecoded (`naturalWidth === 0`
forever), so anything that reads from the element itself fails.

```js
window.__capGen=async function(){
  var ums=[...document.querySelectorAll('[data-message-author-role="user"]')];
  if(!ums.length)return 'NOUSER';
  var lastU=ums[ums.length-1];
  var a=[...document.querySelectorAll('img')]
    .filter(i=>(lastU.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING))
    .filter(i=>(i.alt||'').indexOf('Generated image')===0);
  if(!a.length)return 'WAIT';
  for(var k=0;k<a.length;k++){
   try{
    var u=a[k].currentSrc||a[k].src;
    var resp=await fetch(u,{cache:'force-cache'});
    if(!resp.ok)return 'HTTP'+resp.status;
    var bmp=await createImageBitmap(await resp.blob());
    if(bmp.width<700){continue;}
    var S=512,c=document.createElement('canvas');c.width=S;c.height=S;
    var ctx=c.getContext('2d');ctx.fillStyle='#f5f0e6';ctx.fillRect(0,0,S,S);
    var sc=Math.min(S/bmp.width,S/bmp.height),w=bmp.width*sc,h=bmp.height*sc;
    ctx.drawImage(bmp,(S-w)/2,(S-h)/2,w,h);
    var d=ctx.getImageData(0,0,S,S).data,sum=0,sum2=0,n=0;
    for(var p=0;p<d.length;p+=28){var L=0.299*d[p]+0.587*d[p+1]+0.114*d[p+2];sum+=L;sum2+=L*L;n++;}
    var mean=sum/n,sd=Math.sqrt(Math.max(0,sum2/n-mean*mean));
    if(sd<8)continue;                       // blank-image guard
    window.__b64=c.toDataURL('image/jpeg',0.9).split(',')[1];
    var b=document.getElementById('__copybar');
    if(!b){b=document.createElement('div');b.id='__copybar';
      b.style.cssText='position:fixed;top:0;left:0;width:100%;height:140px;background:#e00;color:#fff;font:700 34px sans-serif;display:flex;align-items:center;justify-content:center;z-index:2147483647;cursor:pointer';
      b.onclick=function(){navigator.clipboard.writeText(window.__b64).then(function(){b.textContent='COPIED';});};
      document.body.appendChild(b);}
    b.textContent='COPY';
    return 'READY:'+window.__b64.length+':'+bmp.width+':idx'+k+':sd'+sd.toFixed(1);
   }catch(e){ return 'ERR:'+(e.message||''+e).slice(0,80); }
  }
  return 'ALLSMALL';
};
```

### Poll snippet (keep the loop ≤22s — `javascript_tool` hard-times-out at 45s)

```js
var t0=Date.now(); var r='WAIT';
while(Date.now()-t0<22000){
  r=await window.__capGen();
  if(r.slice(0,5)==='READY')break;
  if(document.body.innerText.indexOf('Image generation failed')>=0){r='FAILED';break;}
  await new Promise(rs=>setTimeout(rs,3500));
} r
```

### Pre-type snippet (run before every `computer type`)

```js
var b=document.getElementById('__copybar'); if(b)b.remove();
var el=document.querySelector('#prompt-textarea')||document.querySelector('div[contenteditable="true"]');
el.scrollIntoView({block:'center'}); el.focus(); 'focused:'+(document.activeElement===el)
```

## QA

`scripts/qa_sheet.py <out.png> <word> [<word> …]` builds a 4-column contact
sheet from the raw jpgs. This is the primary visual-QA instrument — read the
sheet and regenerate anything that is painterly, has text, or has a
non-cream background.

Get the authoritative word list from `npx tsx scripts/_u4list.ts a1u4` rather
than guessing it; a guessed list once produced a bogus 43-word QA sheet.

**Write each montage to a FRESH filename** — the Read tool caches by path, so
reusing a filename shows you the previous sheet.

## Gotchas learned

- Async IIFE in `javascript_tool` returns `{}` — define a `window` function and
  call it with top-level `await` instead.
- After typing into a freshly-navigated chatgpt.com the composer can silently
  reset (page finishes loading after `focus()`). Click the composer first, then
  type, then verify `innerText` before pressing Return.
- Printing an image `src` trips `[BLOCKED: Cookie/query string data]` — print
  only `new URL(...).hostname` and `.pathname.slice(0,60)`.
- The "Instant" model returns 256px previews; the 700px minimum-width guard in
  `__capGen` skips them.
- PowerShell strips `$` and mangles nested quotes — use script files, or
  `python -c` with single quotes only.
- Same-byte-size output file = the clipboard had stale data; verify with md5.
- Cloud `Bash` defaults to a 120s timeout — pass an explicit `timeout` for
  longer sleeps.
- `bg_jpgs.py` deliberately processes **only** `.jpg` files so hand-made
  transparent PNGs are never clobbered.
- Never commit API keys; the app keeps the key in browser localStorage only.

## Next up

Units beyond a1u4 have no images yet. Same pipeline: get the word list with
`npx tsx scripts/_u4list.ts <unitId>`, generate with the baked style prompt in a
fresh chat, `bg_jpgs.py`, `wire_images.py <unitId>`, validate, push.
