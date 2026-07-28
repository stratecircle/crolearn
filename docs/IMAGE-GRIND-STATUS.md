# Vocab image generation — status & resume guide (updated)

## Done
- **Unit 3: COMPLETE.** All 33 images generated, bg-removed, wired, validated.
- **Unit 4: 28 of 35 done, wired, validated:**
  kruh, sir, jabuka, juha, salata, riba, meso, mlijeko, sok, dorucak, rucak,
  vecera, voce, kolac + (2026-07-27 batch, PHOTOREAL style — see note) povrce,
  sladoled, cokolada, jelovnik, racun, kafic, restoran, pivo, vino, gledati,
  cekati, kuhati, rucati, vecerati.

## ⚠️ Style/content flags on the 2026-07-27 batch (Noah to review)
- The 10 new images are PHOTOREALISTIC, not the locked cartoon style of the
  first 47. Keep or regenerate when the cap resets — Noah's call.
- vino.jpg: bottle is literally labeled "KEDEM Sparkling Concord GRAPE JUICE"
  (English) — misleading for teaching vino = wine. Candidate for regeneration.
- restoran.jpg / racun.jpg: visible English/Italian text ("La Bella Cucina —
  Italian Restaurant", dollar prices). Minor, but noted.
- rucati.jpg: wall sign reads "GOOD FOOD GOOD MOOD" (English). Minor.
- **GitHub:** https://github.com/stratecircle/crolearn (public, main branch).
  Vercel: user still needs to import the repo at vercel.com/new (one click).

## BLOCKED (temporarily): ChatGPT image cap
As of the last run, ChatGPT replies "the image generator failed again" — the
account hit its image-generation rate cap (~290 images in 2 days). It resets
after a cooldown. Retry later in the SAME chat "Image Generation Instructions"
(style is locked there; it replied "ready").

## Remaining Unit 4 words (7)
- Verbs (person doing the action, same cartoon person style): piti (person
  drinking from a glass), jesti (person eating with a fork), voljeti (person
  hugging a heart)
- Adjectives: gladan (hungry person with rumbling belly), zedan (thirsty
  person reaching for water)
- Scenes: zivjeli (two glasses clinking cheers), dobartek (a full plate of
  food, "enjoy your meal")


## Pipeline (unchanged)
Chat tab: "Image Generation Instructions". Prompt = plain subject sentence
(style is locked). Poll `await window.__capWait()` (v8 multi-candidate,
scoped after last user msg) until READY → click full-width red COPY bar at
(760,55) → `python "C:\Users\noahn\Downloads\clip_to_jpg.py" <word>`.
Then: `python scripts/bg_jpgs.py` → `python scripts/wire_images.py a1u4` →
`npm run validate:content` → git add/commit/push.

## Gotchas learned
- Async IIFE in javascript_tool returns {} — define window fn, call with
  top-level await instead.
- After a disconnect, old blob img URLs may fail decode (ERR) — regenerate.
- Same-byte-size file = clipboard had stale data; verify with md5 when in doubt.
- PowerShell strips $ and mangles nested quotes — use script files / python -c
  with single quotes only.
