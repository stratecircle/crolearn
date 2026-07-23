# Vocab image generation — status & resume guide

## Done
- **Unit 3: COMPLETE.** All 33 depictable vocab words have cartoon images,
  background-removed (transparent PNG in `public/img/<word>.png`) AND wired
  (`image: "/img/<word>.png"`) into the lesson files. `npm run validate:content` passes.
  - 8 early-session images were WRONG and were regenerated: baka, majka, otac,
    sestra, obitelj, nizak, osoba, mali.
- **Unit 4: IN PROGRESS.** Done so far: kruh, sir, jabuka, juha.

## Remaining Unit 4 words to generate (depictable)
Food/objects: salata, riba, meso, mlijeko, sok, dorucak, rucak, vecera, pivo,
vino, voce, povrce, kolac, sladoled, cokolada, jelovnik, racun, kafic, restoran.
Verbs (person doing action): gledati, kuhati, cekati, rucati, vecerati, piti,
jesti, voljeti.
Adjectives: gladan, zedan. Scenes: zivjeli (toast), dobartek (plate of food).
Skip (grammar/abstract, keep emoji): htjeti, zeljeti, jos.

## Pipeline (per word) — ChatGPT tab 1311388354 ("Image Style Request")
1. Focus composer via JS `document.querySelector('#prompt-textarea').focus()`,
   then computer.type the prompt + Return. Prompt style: "a cartoon <thing>,
   ... plain cream background, square composition, same uniform cartoon style".
2. Wait ~200-260s (ChatGPT image gen is slow/throttled), poll `window.__capVisible()`
   until it returns `READY:...` (WAIT = not ready; scoped to first >=700px img after
   the last user msg; blank-detects via luminance stdev).
3. Click the full-width red COPY bar at screenshot coord (760,55) — writes b64 to clipboard.
4. `python "C:\Users\noahn\Downloads\clip_to_jpg.py" <word>` → saves
   `public/img/ai-generated/<word>.jpg`.
- If page reloads, reinstall helpers (capVisible v7 + mkbtn top-bar). Composer JS-focus
  avoids coordinate drift (window width toggles 1568/1920).

## Finish steps (after all u4 jpgs saved)
1. `python scripts/bg_jpgs.py` — bg-remove all jpgs -> transparent public/img PNGs.
2. Rebuild montage (`scripts/montage.py`), copy to a FRESH name, stage+Read to QA
   (Read caches by path — always use a new filename). Redo any wrong/opaque ones.
3. `python scripts/wire_images.py a1u4` — inject image fields into u4 vocab.
4. `npm run validate:content` and `npm run build`.
