# b1u22 "Kultura i povijest" — 2×2 grid batch plan (40 images, 10 grids)

Prompt template: see `docs/GRID-PLAN.md`. Bake the full style block into EVERY
prompt; never rely on an earlier style-lock message.

Split command:
`python scripts\split_grid.py public\img\ai-generated\_b22gNN.jpg <tl> <tr> <bl> <br>`

---

## Why 40, and no hand-wires

`npx tsx scripts/_allaudit.ts` reports **b1u22: total 40 · have 0 · missing 40**,
with no `UNWIRED` line — the binding number (`IMAGE-GRIND-STATUS.md` §6).

**No slug de-collision is needed.** All forty `fold(hr)` slugs are unique against
the 764 PNGs already in `public/img/`. `scripts/wire_images.py b1u22` runs
unattended after the split.

Slugs worth checking by eye after the split:
- **tvrđava → `tvrdava`** · **ruševine → `rusevine`** · **naslijeđe → `naslijede`**
  (đ → d, no diacritic)
- **stoljeće → `stoljece`** · **izložba → `izlozba`** · **nošnja → `nosnja`**
- **pripremiti se → `pripremitise`** and **odmoriti se → `odmoritise`** — the
  reflexive is part of the slug, no space
- **čim → `cim`** · **običaj → `obicaj`** · **nekadašnji → `nekadasnji`**

## Three words that carry an `icon` only

**čim · drevni · nekadašnji** have nothing concrete to draw on their own. They
ship with an emoji icon and no `image:` key, leaving **37 to draw**. Grid g10
therefore carries three real images and one spare quadrant — generate it anyway
and discard the spare, because re-rolling a partial grid costs more than one
wasted illustration and breaks the style lock.

## ⚠️ The design constraint that matters most in the whole B1 block

**The four buildings must be drawn as a contrasting SET**, because the contrast
is the only thing separating them and the unit test's first item asks the learner
to tell them apart on exactly that basis:

| word | draw it as | what makes it different |
|---|---|---|
| **dvorac** | a castle with pointed roofs and windows, intact | somebody lived here |
| **tvrđava** | a squat stone fort, thick low walls, no roof detail | built for war |
| **kula** | one tall round tower, alone, nothing around it | a single vertical |
| **ruševine** | broken walls with grass through them, no roof at all | it is gone |

Generate all four **in the same grid (g03)** so the model holds one style and one
scale across them. If any two come back looking alike, re-roll the whole grid
rather than patching one quadrant.

**Two more pairs that must share an object:**
- **spomenik ‖ kip** — spomenik is **a stone obelisk with a blank plaque**; kip is
  **a carved human figure on a plinth**. Different silhouettes, deliberately.
- **ulaznica ‖ karta** — *karta* already exists (a2u9) as a printed travel ticket.
  *ulaznica* must be **a torn-stub ticket held at a doorway**, and the doorway is
  the content that separates them.

## Collision notes for this unit

Checked against the description bank in `docs/GRID-PLAN.md` and
`docs/chatgpt-paste-list.md` (3+ shared content words = a collision):

- **muzej / crkva / zgrada** all exist (a1u5). None of the four buildings above
  may be drawn as a generic building with columns — each needs its distinguishing
  feature doing the work.
- **knjiga** exists (a1u6). *povijest* must not be a plain book — it is **an open
  book with a timeline drawn across the page**, and the timeline is the content.
  *djelo* is **a signed canvas**, not a book.
- **slika** exists (a2u15). *galerija* is **several framed pictures on a wall**
  (plural, and the wall), *izložba* is **a plinth with a rope barrier and a small
  blank label**, and *umjetnik* is **a figure holding a palette**.
- **kiša / sunce / oblak** exist (a1u8). Nothing in this unit may be weather.
- **spomenik** does not collide with anything; **kip** does not either.

---

## g01 — history and war (L1)

```
povijest  | an open book with a horizontal timeline drawn across both pages
stoljece  | a calendar page showing a large roman numeral C
kralj     | a single gold crown with red jewels
rat       | two crossed swords, drawn in flat grey
```

## g02 — peace and building (L1)

```
mir        | a white dove carrying an olive branch
osnovati   | a hand placing the first cornerstone of a foundation
izgraditi  | a building rising with scaffolding around it
trajati    | an hourglass mid-flow with a long stretch of sand still falling
```

## g03 — ⚠️ THE FOUR BUILDINGS (L2) — generate together, re-roll together

```
dvorac    | a fairytale castle with pointed roofs and small windows, fully intact
tvrdava   | a squat stone fortress with thick low walls and no roof detail
kula      | one tall round stone tower standing alone, nothing else around it
rusevine  | broken stone walls with grass growing through them and no roof at all
```

*If any two of these come back looking alike, re-roll the entire grid. Do not
patch one quadrant — the whole point is that they are compared side by side.*

## g04 — monuments and getting in (L2)

```
spomenik   | a tall stone obelisk with a blank plaque on its front
kip        | a carved human figure standing on a stone plinth
ulaznica   | a torn-stub paper ticket held up at a doorway
razgledati | a figure with head raised walking past three different sights
```

## g05 — planning a route (L3)

```
pripremitise | a packed rucksack beside a ticked checklist
propustiti   | a train leaving a platform with a figure arriving just too late
ruta         | a dotted line looping between three map pins
posjet       | a figure standing at a door holding a small wrapped gift
```

## g06 — resting and seeing (L3/L4)

```
odmoritise    | a figure sitting back on a bench with a coffee cup
znamenitost   | a landmark building with a camera raised in front of it
umjetnost     | a painter's palette with a brush laid across it
umjetnik      | a figure standing holding a palette, seen three-quarter
```

## g07 — the makers (L4)

```
slikar   | a paintbrush touching a canvas on an easel
pisac    | a hand holding a pen over a sheet of paper
pjesnik  | a page with four short handwritten-looking lines on it, arranged as a verse
djelo    | a finished framed canvas with a small signature in the corner
```

*`pjesnik`'s page must read as a shape, not as text — four short marks, no letters.*

## g08 — heritage and freedom (L4)

```
naslijede | one hand passing a small model building into another hand
sloboda   | an open birdcage with the door swung wide and no bird inside
kultura   | a theatre mask, a book and a lyre grouped together
tradicija | an older hand and a younger hand holding the same object between them
```

## g09 — galleries and costume (L5)

```
galerija | several framed pictures hung in a row on a wall
izlozba  | a display plinth with a rope barrier in front and a small blank label
nosnja   | an embroidered folk dress and waistcoat displayed on a stand
obicaj   | the same small ritual hand gesture drawn three times in a row
```

## g10 — the last three, plus one spare

```
narod  | a crowd of small simple figures standing together under one plain flag
drevni | the same stone arch drawn twice side by side, one new and one weathered
—      | (SPARE — leave this quadrant a plain cream square and discard it)
—      | (SPARE — leave this quadrant a plain cream square and discard it)
```

*`drevni` is listed as icon-only in the spec but is worth drawing anyway: the
young-and-weathered pair is genuinely informative and costs nothing here, since
g10 has spare quadrants. If it comes back weak, drop it and keep the icon.*

---

## After the split

1. `python scripts\bg_jpgs.py` — background removal over `public/img/ai-generated/`
2. `npx tsx scripts/_allaudit.ts` — expect **b1u22: total 40 · have 37–38 ·
   missing 2–3** depending on whether `drevni` was kept (`cim` and `nekadasnji`
   never get files)
3. `python scripts\wire_images.py b1u22`
4. `npm run validate:content && npm run build` — both must stay green
5. QA with `python scripts\qa_sheet.py` **to a fresh filename every time** — and
   for this unit specifically, put **dvorac · tvrđava · kula · ruševine** on one
   sheet and look at them together. That is how the learner will meet them.
