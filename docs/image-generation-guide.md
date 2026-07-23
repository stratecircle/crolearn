# CroLearn vocab-image generation guide

Goal: one uniform, AI-generated image set for every vocab word.
Generate each image with the SAME style block + the per-word subject, then
**remove the background** so the subject sits on transparency, and save it as a
transparent **PNG** (~512×512) over the exact filename in `public/img/` — refresh
the app and the cards pick them up automatically (the `image` fields point to
`/img/<word>.png`).

Background removal: every vocab image must have its background removed
(transparent PNG). Run `scripts/remove-bg.py` over the freshly generated images
(it flood-fills the uniform cream background to transparency; full-scene images
with no uniform background are passed through unchanged). Deps:
`pip install pillow numpy scipy`.

## The style block (paste this into EVERY prompt, never change it)

> Clean modern flat cartoon illustration, single clearly recognizable centered
> subject, bold simple shapes with smooth soft shading, friendly and approachable
> but not childish, easy to understand at a glance, gentle warm lighting, warm
> cream background (#faf6f0), subtle soft shadow under the subject, pastel-warm
> color palette, square 1:1 composition, no text, no letters, no watermark, no
> logo, no border.

Consistency tips: generate the whole set in ONE session/model with the same
settings; if the tool supports style-reference/seed locking, lock it after the
first image you like. Faces: prefer friendly, generic, non-celebrity people.

## Per-word prompts

Format: **filename** — subject (append the style block to each).

### Unit 1
- **jutro.png** — sunrise over a calm horizon, warm golden sky
- **dan.png** — bright daytime sky with a cheerful sun and one white cloud
- **vecer.png** — dusk sky in orange and purple, first star visible
- **noc.png** — deep-blue starry night sky with a crescent moon
- **kava.png** — a cup of black coffee on a saucer, wisp of steam
- **voda.png** — a clear glass of water
- **caj.png** — a glass cup of amber tea with a teabag string
- **covjek.png** — a friendly adult man, waist-up, neutral casual clothes
- **dak.png** — a schoolkid with a backpack walking to school, seen from behind
- **dzep.png** — close-up of a jeans pocket
- **ljeto.png** — a sunny beach with turquoise sea and a beach umbrella
- **skola.png** — a friendly school building with a flag and a schoolyard
- **zena.png** — a friendly adult woman, waist-up, neutral casual clothes
- **hrvatska.png** — an old Adriatic coastal town with red roofs and city walls by a blue sea (Dubrovnik-like)
- **student.png** — a young man studying with a laptop and notebook
- **studentica.png** — a young woman studying with a laptop and notebook
- **gospodin.png** — a distinguished older gentleman in a suit, warm smile
- **gospoda.png** — an elegant older lady in refined clothes, warm smile

### Unit 2
- **zemlja.png** — planet Earth seen from space
- **grad.png** — a European old-town cityscape with a cathedral and red roofs (Zagreb-like)
- **selo.png** — a small hilltop village with stone houses and vineyards
- **more.png** — open blue sea meeting the sky, small waves
- **kanada.png** — a turquoise mountain lake with pine forest and snowy peaks (Canadian Rockies)
- **njemacka.png** — the Brandenburg Gate
- **engleska.png** — Big Ben and a red double-decker bus
- **amerika.png** — the Statue of Liberty
- **francuska.png** — the Eiffel Tower
- **ucitelj.png** — a male teacher at a whiteboard, gesturing warmly (blank whiteboard)
- **uciteljica.png** — a female teacher at a whiteboard, gesturing warmly (blank whiteboard)
- **lijecnik.png** — a male doctor in a white coat with a stethoscope
- **lijecnica.png** — a female doctor in a white coat with a stethoscope
- **konobar.png** — a male waiter carrying a tray with coffee cups
- **konobarica.png** — a waitress with an apron carrying a tray
- **inzenjer.png** — a male engineer in a hard hat holding blueprints
- **inzenjerka.png** — a female engineer in a hard hat holding blueprints
- **kuhar.png** — a male chef in a chef's hat stirring a pot
- **kuharica.png** — a female chef in a chef's hat stirring a pot

### No emoji, ever (Noah's rule, 2026-07-22)
EVERY vocab word gets a generated image — including function/grammar words
(concept-gesture images) and numbers (big 3D numerals; the digits exception).
See "Batch 2" in `chatgpt-paste-list.md` for the full remaining list. Until a
word's image lands, the app shows a neutral letter tile — never an emoji.

## Workflow for every FUTURE unit

1. Generate images for ALL of the new unit's vocab words with the same style
   block (filenames = vocab id's word part, ASCII-folded: č→c, ž→z, đ→d, š→s).
2. Run `scripts/remove-bg.py`, drop the transparent PNGs in `public/img/`.
3. Tell Claude — wiring the `image:` fields + validation is automated.
