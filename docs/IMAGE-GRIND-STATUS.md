# Vocab image generation — status & resume guide

_Last updated: 2026-07-29_

This is the operating manual for the vocab-illustration grind. Read the
**Resume checklist** at the bottom if you just want to start working.

---

## 1. Where the numbers stand

Authoritative audit — run it, never guess:

```
npx tsx scripts/_allaudit.ts
```

It walks the live content registry, folds every `hr` to a filename slug, and
reports per unit: `total / have / missing`, plus `UNWIRED` for words that have
a PNG on disk but no `image:` property in the lesson file.

Current state (2026-07-29): **808 vocab entries · 768 have images · 40
missing · 1 unwired.** Every unit from a1u1 through b1u18 is complete. The
entire remaining backlog is **b1u19**, authored 2026-07-29, with no image
generated for it yet.

| Unit  | total | have | missing | notes                                             |
| ----- | ----- | ---- | ------- | ------------------------------------------------- |
| a1u1  | 54    | 54   | **0**   | COMPLETE (backfill finished)                      |
| a1u2  | 67    | 67   | **0**   | COMPLETE (backfill finished)                      |
| a1u3  | 42    | 42   | **0**   | COMPLETE (backfill finished)                      |
| a1u4  | 38    | 38   | **0**   | COMPLETE                                          |
| a1u5  | 49    | 49   | **0**   | COMPLETE — `pa` got a symbol after all, see §6     |
| a1u6  | 50    | 50   | **0**   | COMPLETE                                          |
| a1u7  | 52    | 52   | **0**   | COMPLETE                                          |
| a1u8  | 41    | 41   | **0**   | COMPLETE                                          |
| a2u9  | 36    | 36   | **0**   | COMPLETE                                          |
| a2u10 | 39    | 39   | **0**   | COMPLETE                                          |
| a2u11 | 39    | 39   | **0**   | COMPLETE                                          |
| a2u12 | 37    | 37   | **0**   | COMPLETE                                          |
| a2u13 | 38    | 38   | **0**   | COMPLETE                                          |
| a2u14 | 47    | 47   | **0**   | COMPLETE                                          |
| a2u15 | 32    | 32   | **0**   | COMPLETE                                          |
| a2u16 | 32    | 32   | **0**   | COMPLETE                                          |
| b1u17 | 37    | 37   | **0**   | COMPLETE                                          |
| b1u18 | 37    | 37   | **0**   | COMPLETE                                          |
| b1u19 | 41    | 1    | 40      | **the active front** — see docs/GRID-PLAN-B1U19.md |

That single "have" on b1u19 is a false positive. It is `da`, which resolves to
the a1u1 image for **da = yes**, while b1u19 cards the **conjunction** da
("that"). The unit therefore generates its own `dakonj.png` and hand-wires it.
See the top of `docs/GRID-PLAN-B1U19.md`.

Content validation: `npm run validate:content` → "95 lessons, 2 checkpoint(s),
all stories and tests OK".

**GitHub:** https://github.com/stratecircle/crolearn (public, `main`).
**Vercel:** still needs a one-time manual import at https://vercel.com/new
(pick `stratecircle/crolearn`, framework Vite, no other config — the app uses
HashRouter, so it is a pure static SPA and needs no rewrite rules).

---

## 2. The pipeline, end to end

```
ChatGPT (user's own browser)
   → 1024×1024 image containing a 2×2 grid of four illustrations
   → window.__capGrid fetches + splits + letterboxes each tile
   → red COPY bar → clipboard → clip_to_jpg.py
   → public/img/ai-generated/<word>.jpg      (raw capture)
   → scripts/bg_jpgs.py
   → public/img/<word>.png                   (transparent cut-out)
   → scripts/wire_images.py <unitId>
   → image: "/img/<word>.png" injected into the lesson source
```

Three file locations, and they must not be confused:

- `public/img/ai-generated/<word>.jpg` — the raw capture, cream background.
- `public/img/<word>.png` — the background-removed transparent version. **This
  is what the app serves.**
- The lesson `.ts` files under `src/content/<level>/<unit>/` — reference
  `/img/<word>.png`.

`bg_jpgs.py` deliberately processes **only `.jpg`**, so hand-made or
hand-corrected transparent PNGs are never clobbered by a re-run.

---

## 3. The 2×2 grid workflow (current — ~4× throughput)

One ChatGPT image carries four illustrations on a shared cream `#F5F0E6`
field with **no dividing lines**, then gets split locally into four 512×512
tiles.

### Prompt template

Bake the full style description into **every** prompt. Do not rely on a "style
lock" message earlier in the thread — it stops being honored as the
conversation grows.

```
Generate one square image containing exactly four separate illustrations
arranged in a 2x2 grid, evenly spaced, on ONE continuous completely plain flat
cream #F5F0E6 background with NO dividing lines, NO borders, NO frames, NO
grid lines and NO text anywhere. Every illustration in the same style: flat
cartoon vector illustration, thick clean outlines, bright saturated colors,
simple shapes, soft cel shading, one single centered subject, no scenery,
no room, no floor, no shadow on the ground.
Top-left: <A>. Top-right: <B>. Bottom-left: <C>. Bottom-right: <D>.
```

Variants: swap `no floor` → `no street, no sky` for buildings. If a product
label keeps appearing, extend to `absolutely no text, no letters, no words,
no writing, no labels anywhere` and describe the object as "blank unlabeled"
— this is how `mlijeko` was fixed (the first version had "MILK" printed on
the carton).

### Splitting

```
python scripts/split_grid.py <captured.jpg> <wordTL> <wordTR> <wordBL> <wordBR>
```

Writes four `public/img/ai-generated/<word>.jpg` files. Inspect the montage
before trusting it — the model occasionally merges two cells into one wide
illustration, in which case regenerate rather than split.

---

## 4. Browser capture

### `window.__capGrid`

Must be **reinstalled after every navigation or reload.** It selects generated
images by `alt` starting with `"Generated image"`, scoped to images appearing
after the last `[data-message-author-role="user"]` node, then `fetch()`es the
URL directly.

**The direct fetch is mandatory.** In this Chrome the generated `<img>`
elements stay permanently undecoded (`naturalWidth === 0` forever), so
anything that reads pixels from the element itself fails silently.

```js
window.__capGrid=async function(){
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
    if(bmp.width<700){continue;}            // "Instant" model 256px previews
    var S=1024,c=document.createElement('canvas');c.width=S;c.height=S;
    var ctx=c.getContext('2d');ctx.fillStyle='#f5f0e6';ctx.fillRect(0,0,S,S);
    var sc=Math.min(S/bmp.width,S/bmp.height),w=bmp.width*sc,h=bmp.height*sc;
    ctx.drawImage(bmp,(S-w)/2,(S-h)/2,w,h);
    var d=ctx.getImageData(0,0,S,S).data,sum=0,sum2=0,n=0;
    for(var p=0;p<d.length;p+=28){var L=0.299*d[p]+0.587*d[p+1]+0.114*d[p+2];sum+=L;sum2+=L*L;n++;}
    var mean=sum/n,sd=Math.sqrt(Math.max(0,sum2/n-mean*mean));
    if(sd<8)continue;                       // blank-image guard
    window.__b64=c.toDataURL('image/jpeg',0.92).split(',')[1];
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

### `window.__fail`

A cheap detector for a refusal or a hard generation error, so a poll loop can
bail out instead of burning its full 22 seconds:

```js
window.__fail=function(){
  var t=document.body.innerText;
  if(t.indexOf('Image generation failed')>=0)return 'FAILED';
  if(t.indexOf("can't help")>=0||t.indexOf('unable to generate')>=0)return 'REFUSED';
  return '';
};
```

### Poll loop

`javascript_tool` hard-times-out at 45000 ms, so cap the internal `while` at
**≤22000 ms** and call it repeatedly rather than waiting inside one call.

```js
var t0=Date.now(); var r='WAIT';
while(Date.now()-t0<22000){
  r=await window.__capGrid();
  if(r.slice(0,5)==='READY')break;
  var f=window.__fail(); if(f){r=f;break;}
  await new Promise(rs=>setTimeout(rs,3500));
} r
```

### Pre-type snippet — run before every `computer type`

```js
var b=document.getElementById('__copybar'); if(b)b.remove();
var el=document.querySelector('#prompt-textarea')||document.querySelector('div[contenteditable="true"]');
el.scrollIntoView({block:'center'}); el.focus(); 'focused:'+(document.activeElement===el)
```

### Getting the pixels out

The clipboard write **must** happen inside a real user gesture, which is what
the red COPY bar is for. Click it at **(760, 55)**, then:

```
python "C:\Users\noahn\Downloads\clip_to_jpg.py" <word>
```

Verify with md5 — an output file with the exact same byte size as the previous
one means the clipboard still held stale data and the click did not land.

---

## 5. Failure modes

### Silent drop (the main one)

A long ChatGPT conversation eventually accepts a prompt and simply never
replies. No error, no spinner, nothing — `__capGrid` returns `WAIT` forever.

**Diagnosis:** take a screenshot. If the composer is empty and the last
message in the thread is your own prompt with no assistant turn under it, the
conversation is exhausted.

**Rule: two silent drops in a row ⇒ start a fresh chat.** Do not keep
retrying; the thread never recovers.

### Fresh-chat recovery sequence

1. Click **"New chat"** at **(57, 63)**.
2. Wait 5 s for the SPA route to settle.
3. **Reinstall `__capGrid` and `__fail`** — navigation wipes them.
4. Click the composer at **(880, 702)**.
5. Type the prompt.
6. Verify `document.querySelector('#prompt-textarea').innerText.length > 0`
   before pressing Return. A freshly-navigated composer can silently reset if
   the page finishes loading after `focus()`.
7. Return.

### Style drift

Earlier batches drifted into photorealistic / painterly output. Root cause was
conversation-level context degradation, not prompt wording. Both halves of the
fix are required: bake the full style description into every prompt, **and**
use a fresh conversation. A brand-new conversation produced correct output on
the first try and held style for 30+ consecutive images.

### Blank / tiny images

`__capGrid` guards both: `bmp.width < 700` skips the "Instant" model's 256px
previews, and a luminance standard deviation below 8 (`sd < 8`) skips a
uniformly flat image.

---

## 6. Deliberate skips

There are now **no deliberate skips left**. `pa` (a1u5) was the long-standing
exception — a discourse particle ("so, well then") with no depictable
referent — but it was eventually given a symbolic treatment like the rest of
the function words, and a1u5 reads `missing 0`. The working rule is now:
**every carded headword gets an image**, and abstractions get a symbol rather
than a skip.

The one thing to watch instead is **slug collisions**. `_allaudit.ts` and
`wire_images.py` both fold the word down to `[a-z0-9]`, so two different words
that fold the same share one file. Known cases:

- `sto` — a1u1 `što` (what) and a1u7 `sto` (100) both point at `/img/sto.png`.
  This one is **unfixed**; whichever image was generated last is what both
  cards show.
- `da` — a1u1 `da` (yes) vs b1u19 `da` (the conjunction "that"). This one **is**
  fixed, by generating `dakonj.png` and hand-wiring it before
  `wire_images.py` runs. That is the pattern to copy for any future collision.

---

## 7. Scripts

| Script                          | What it does                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `scripts/_allaudit.ts`          | The authoritative audit. Per-unit `total/have/missing` + `UNWIRED`. Run before and after every batch.          |
| `scripts/split_grid.py`         | Splits a captured 2×2 grid into four named `ai-generated/*.jpg` tiles.                                        |
| `scripts/bg_jpgs.py`            | Background removal, **`.jpg` only** → transparent `public/img/*.png`. Idempotent.                             |
| `scripts/wire_images.py <unit>` | Injects `image: "/img/<word>.png"` into a unit's vocab. **One unit per invocation.** Idempotent — the regex negative-lookahead skips any object literal that already has an `image:` prop. |
| `scripts/dedupe_image.py`       | Repair tool. Strips duplicate `image:` props from a single object-literal line, keeping the first. Only needed if `wire_images.py`'s guard was ever bypassed. |
| `scripts/qa_sheet.py`           | Builds a 4-column contact sheet from the raw jpgs. The primary visual-QA instrument.                          |
| `scripts/theme_sweep.py`        | Unrelated to images, but same discipline: rewrites color literals in `src/` to `var(--token)` for dark mode. `--check` must report "WOULD REWRITE 0 file(s)". Skips `src/content/` and `src/lib/theme.ts`. |

---

## 8. QA

```
python scripts/qa_sheet.py <FRESH-out.png> <word> <word> …
```

Read the sheet and regenerate anything that is painterly, has text, or has a
non-cream background.

Two hard rules:

- **Write each montage to a FRESH filename.** The Read tool caches by path, so
  reusing a filename shows you the previous sheet and you will "verify" stale
  output.
- **Get the word list from the audit, not from memory.** A guessed list once
  produced a bogus 43-word QA sheet for a 38-word unit.

---

## 9. Environment gotchas

These have each cost real time. They are listed because they are not
discoverable from the error message alone.

**Two separate machines.** The cloud `Bash` tool and the user's Windows box are
different computers. The project lives **only** on Windows, reached through
`Desktop_Commander__start_process`. Cloud `Bash` is useful only for `sleep`
pacing and `/tmp` scratch. `device_bash` is a *third* environment (a Linux VM)
and is **not** where the project lives.

**`device_stage_files` only works inside a Cowork-connected folder.**
`C:\Users\noahn\OneDrive\Desktop\CroLearn\` is connected;
`C:\Users\noahn\Downloads\` is **not**. Write anything that needs staging into
the repo tree.

**PowerShell:**

- `Select-String -Path src\**\*.tsx` does **not** recurse. Use
  `Get-ChildItem -Recurse -File src -Include *.tsx,*.ts | Select-String`.
- PowerShell strips `$` from a `-Command` string, so `$_.Path` inside a
  one-liner becomes `.Path` → *"The term '.Path' is not recognized"*. Never
  use `$_` in a `Desktop_Commander` one-liner; use
  `Select-Object -ExpandProperty Line` or `Select-Object LineNumber, Line`.
- It also mangles an inline `python -c` containing `--` or `\s*`. Use a script
  file instead.
- The console renders repo UTF-8 as mojibake (`â€"`). **This is display-only**
  — the files are fine. `Desktop_Commander__read_file` shows them correctly.
- Git's stderr surfaces as a cosmetic `NativeCommandError`. The push still
  succeeded; check `git status` rather than believing the red text.

**Desktop_Commander:**

- `write_file` refuses to overwrite an existing file without an explicit
  `mode: "rewrite"`.
- `edit_block` fuzzy-matches and *reports* the similarity plus a diff when
  `old_string` doesn't match exactly. Trust the tool's reported actual text
  over any remembered rendering — whitespace and line breaks get normalized in
  summaries.

**Timeouts:** `javascript_tool` hard-times-out at 45000 ms (keep poll loops
≤22000 ms). Cloud `Bash` defaults to 120 s and hard-caps at 600000 ms — pass
an explicit `timeout` for longer sleeps.

**Misc:**

- An async IIFE in `javascript_tool` returns `{}`. Define a `window` function
  and call it with top-level `await` instead.
- Printing an image `src` trips `[BLOCKED: Cookie/query string data]`. Print
  only `new URL(...).hostname` and `.pathname.slice(0, 60)`.
- **Never commit API keys.** The app keeps the key in browser localStorage
  only; `exportBackup()` in `src/lib/db.ts` explicitly excludes
  `crolearn.apiKey` from backups.

---

## 10. Resume checklist

1. `npx tsx scripts/_allaudit.ts` — get the real missing list for the target
   unit. Never work from a remembered list.
2. Open a **fresh** ChatGPT conversation. Install `__capGrid` and `__fail`.
3. Batch the missing words into groups of four. Send the 2×2 grid prompt with
   the full style description baked in.
4. Poll → click COPY at (760, 55) → `clip_to_jpg.py` → `split_grid.py`.
5. Two silent drops in a row → new chat (§5) and reinstall the helpers.
6. After each unit: `bg_jpgs.py` → `wire_images.py <unitId>` →
   `npm run validate:content` → `npx tsx scripts/_allaudit.ts` to confirm the
   unit reads `missing 0 / no UNWIRED`.
7. QA sheet to a fresh filename, eyeball it, regenerate the bad ones.
8. `git add -A && git commit && git push`.

Order of attack: everything through **b1u18** is done. The only open front is
**b1u19** — 40 missing plus the de-collided `dakonj`, laid out as 11 grids in
`docs/GRID-PLAN-B1U19.md`. Done when `_allaudit.ts` reports
`missing images 0` with no `UNWIRED` line anywhere.

After that the grind moves forward with the course: each new B1 unit (u20 →
u24, then the B1 checkpoint) needs its own `GRID-PLAN-B1U<n>.md` written at
the same time the unit's vocab is authored, so image generation can start the
moment the lessons validate.
