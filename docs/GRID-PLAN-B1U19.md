# b1u19 "Mišljenja" — 2x2 grid batch plan (41 images, 11 grids)

Prompt template: see docs/GRID-PLAN.md. Bake the full style block into EVERY
prompt; never rely on an earlier style-lock message.

Split command:
`python scripts\split_grid.py public\img\ai-generated\_b19gNN.jpg <tl> <tr> <bl> <br>`

---

## Why 41 and not 40

`npx tsx scripts/_allaudit.ts` reports **b1u19: total 41 · have 1 · missing 40 ·
UNWIRED 1**. The one it already "has" is `da` — but that file is the a1u1 image
for **da = yes** (a green check and a nodding face, grid g124). B1 U19 cards a
different word that happens to be spelled the same: the **conjunction da**, the
"that" English lets you drop. Wiring the yes-image onto it would teach the wrong
thing, so this unit generates a **separate** file, `dakonj.png`, and it is
**hand-wired** into `src/content/b1/u19/l1.ts` before `wire_images.py` runs.
`wire_images.py` skips any vocab entry that already carries an `image:` key, so
the hand-wire survives every later re-run, and `_allaudit.ts` folds `hr` (not the
id) so the entry still resolves cleanly to have=true, wired=true.

This is the first deliberate slug de-collision in the project. The existing
`sto` collision (a1u1 `što` = what vs a1u7 `sto` = 100, both pointing at
`/img/sto.png`) is the precedent for what happens if you *don't* do this — see
§6 of IMAGE-GRIND-STATUS.md.

## Collision notes for this unit

This is the most abstract vocabulary set in the course, so nearly every concept
below was rewritten at least once to stay clear of an image that already exists.
Rejected first drafts, and what they collided with:

- `grupa` — "four people standing together" collided with `tim` (a2u12 g78) and
  `drustvo` (a2u14 g97). Now five colored circles inside one ring: abstract.
- `generacija` — "three figures growing from small to tall" **is** `odrasti`
  (a2u16 g118). Now three framed portraits.
- `netko` — "a question mark inside a person silhouette" **is** `tko`
  (a1u1 g128). Now one highlighted figure among three identical grey ones.
- `slagati se` and `poznavati` — both drafted as "two people shaking hands",
  which is `upoznati` (a2u16 g119) and `zaposlitise` (a2u12 g85). Rewritten.
- `rasprava` — "two chat bubbles going back and forth" is `dopisivatise`
  (a2u15 g113); "two people across a desk" is `razgovorzaposao` (a2u12 g84).
  Now a table from above with four bubbles pointing in.
- `vjerovati` — "two hands clasped with a glowing star" is `nadatise`
  (a2u16 g120). Now one hand on the heart, eyes closed.
- `naravno` — every draft wanted a green check, which is already `da`
  (g124), `moze` (g128) and `dobro` (g124). The check is gone; it is a gesture.
- `dakonj` — "two chain links" is `veza` (a2u15 g113). Now two speech bubbles
  welded by a connector bar, which is what the conjunction actually does.
- `protiv` — "two arrows meeting at a barrier" is `ali` (a1u2 g136). Now a
  person physically bracing against an arrow.
- `zakljucak` — "a card with a green check" is `rezervacija` (a2u9 g50). Now a
  gavel on its block.

`iako` and `ipak` are a deliberate matched pair — same grey wall, arrow **around**
it for the concession, arrow **over** it for the reversal. They are meant to be
learned against each other, so they share a grid (g10).

---

### g01 — L1 opinion verbs
misljenje | a thought bubble with a single glowing lightbulb inside it
misliti | a head in profile with three small circles rising into a thought bubble
smatrati | a balance scale tilted down on one side by a single weight
cinimise | a face with one raised eyebrow beside a dotted-outline thought bubble containing a small question mark

### g02 — L1 hedges
tema | a plain unlabeled paper folder standing open with a magnifying glass hovering over it
istina | a magnifying glass with a bright green check mark inside the lens
mozda | a coin spinning upright on its edge with motion arcs around it
naravno | a person with both palms turned up in an obvious gesture and three small sparkle lines above their head

### g03 — L2 knowing and believing
poznavati | a person pointing in recognition at a framed portrait photograph, a small spark above their head
poznat | a smiling person standing in a bright spotlight beam with a gold star above them
vjerovati | a person with one hand over their heart and their eyes closed, a soft warm glow around them
sumnjati | a person with folded arms and a skeptical frown, a red question mark beside their head

### g04 — L2 reasons
razlog | a bold curved arrow leading back from a small exclamation mark to a glowing lightbulb
primjer | a hand lifting one single item out of a neat row of identical items
ideja | a bright lightbulb bursting with radiating rays
o | a bold circular arrow orbiting all the way around one small central object

### g05 — L3 stance
stav | a person standing firmly with their feet planted and their arms crossed, a small flag planted in the ground beside them
tvrditi | a person with one index finger raised and a bold exclamation mark inside a speech bubble
drzava | a domed parliament building with a blank plain flag on a pole above it
svijet | a globe of the earth with green continents on blue oceans

### g06 — L3 topics
promet | a line of cars bumper to bumper behind a traffic light
vazan | a bold gold star badge with a red exclamation mark on its face
jasan | a clear polished lens with a straight beam of light passing through it and a sparkle
rasprava | a round table seen from above with four speech bubbles pointing inward toward its center

### g07 — L4 debate nouns
argument | a single speech bubble containing one bold upward pointing arrow
grupa | five circles in different bright colors gathered together inside one bold ring
generacija | three framed portrait photographs in a row, a child, a parent and a grandparent
odnos | two person icons connected by a bold double headed arrow between them

### g08 — L4 into L5
jednostavan | a single straight clean line with a green check mark beside a tangled scribbled knot
netko | three identical grey person silhouettes in a row with the middle one highlighted in bright color
slagatise | two speech bubbles side by side, each containing an identical green check mark
tako | a bold equals sign standing between two identical small shapes

### g09 — L5 weighing
siguran | a confident standing person beside a solid shield with a green check mark on it
prednost | a bold green arrow pointing up with a large plus sign at its tip
nedostatak | a bold red arrow pointing down with a large minus sign at its tip
strana | two open palms held out side by side, one tilted to the left and one tilted to the right

### g10 — L5 concession
zakljucak | a wooden judge's gavel resting on its round sound block
iako | a bold arrow bending around a small grey wall and continuing forward
ipak | a bold arrow leaping up and over the top of the same small grey wall
protiv | a person braced with both palms pushed forward against a large arrow, stopping it

### g11 (single image)
dakonj | two speech bubbles joined into one by a short bold connector bar welded between them

---

## After the split

1. `python scripts\bg_jpgs.py` — writes `public/img/<word>.png`.
2. `python scripts\qa_png.py` then `scripts\qa_zoom.py` — inspect over magenta.
3. `python scripts\edge_audit.py` → `python scripts\debleed.py --apply` for any
   tile that picked up a neighbour's ink at the split seam.
4. **Hand-wire `dakonj` first**, into `src/content/b1/u19/l1.ts`:
   `{ id: "b1u19.da", image: "/img/dakonj.png", hr: "da", ... }`
5. `python scripts\wire_images.py b1u19` — fills the other 40.
6. `npx tsx scripts/_allaudit.ts` — must read `b1u19 total 41 have 41 missing 0`
   with no UNWIRED line.
7. `npm run validate:content` and `npm run build` before committing.
