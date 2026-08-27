# b1u20 "Okoliš" — 2×2 grid batch plan (40 images, 10 grids)

Prompt template: see `docs/GRID-PLAN.md`. Bake the full style block into EVERY
prompt; never rely on an earlier style-lock message.

Split command:
`python scripts\split_grid.py public\img\ai-generated\_b20gNN.jpg <tl> <tr> <bl> <br>`

---

## Why 40, and no hand-wires

`npx tsx scripts/_allaudit.ts` reports **b1u20: total 40 · have 0 · missing 40**,
with **no UNWIRED line** — which is the binding number (`docs/IMAGE-GRIND-STATUS.md`
§6: *the unit spec's image count is advisory, the audit's `total` is binding*).

**No slug de-collision is needed for this unit.** Every one of the forty
`fold(hr)` slugs is unique against the 764 PNGs already in `public/img/`, which
is exactly what `have 0` proves — a collision would surface as `have 1` with an
`UNWIRED` line, the way `da` did in U19. So `scripts/wire_images.py b1u20` can
run unattended after the split, with nothing hand-wired first.

Two slugs are worth checking by eye after the split, because they fold in ways
that are easy to mistype:
- **zagađenje → `zagadenje`** and **zagađivati → `zagadivati`** (đ → d, no diacritic)
- **budući da → `buducida`** (two words, one slug, no space)

## Two words that carry an `icon` only

**javni** and **budući da** are function words with nothing to draw. They ship
with an emoji icon and no `image:` key, exactly as U19 did with *da / možda /
naravno*. That means **38 of the 40 need art** — but generate all forty slots
anyway and simply discard the two, because a 2×2 grid with a hole in it wastes
more time than one extra illustration.

*(Correction to the above, applied: the spec's image note says the same thing.
Generate 38. Grids g09 and g10 below are sized to land exactly on 38 + 2 spares
rather than leaving a ragged final grid.)*

## The one design constraint that matters

**kanta and spremnik must be drawn at obviously different SIZES**, because size
is the only thing separating them — a *kanta* is the bin in your kitchen, a
*spremnik* is the wheeled communal container on the street. The unit test's
first vocabulary item asks the learner to tell them apart, so the art has to do
the same work the card does. Draw the kanta with a lid and a household scale
(beside a hand, or a floor line); draw the spremnik large, wheeled, and clearly
street-furniture.

The same applies to the **čist ‖ prljav** pair: draw the *same object* twice —
one clean glass, one smeared — rather than two unrelated things.

## Collision notes for this unit

Checked against the description bank in `docs/GRID-PLAN.md` and
`docs/chatgpt-paste-list.md` (3+ shared content words = a collision):

- **voda / rijeka / more** already exist (a1u1, a2u13) — *zagađivati* must NOT be
  drawn as plain water. It is **a pipe emptying grey into a river**, which shares
  no content words with the existing river drawing.
- **kuća / zgrada** exist (a1u3, a1u5) — *okoliš* must not be a house. It is
  **a house with a leafy ring drawn round it**, and the ring is the content.
- **smeće** exists (a2u10) as a full bin. *otpad* is therefore **a sack with
  mixed rubbish spilling out**, and *kanta* is **a lidded kitchen bin** — three
  different rubbish images, three different objects.
- **baterija** does not exist anywhere; *energija* and *trošiti* both want one,
  so they are split: energija is **a battery with a lightning bolt**, trošiti is
  **a battery draining, three-quarters empty**.

---

## g01 — the recycling four (L1)

```
okolis      | a small house with a green leafy ring drawn in a circle around it
otpad       | an open sack with mixed rubbish spilling out of the top
reciklirati | the three-arrow recycling triangle with a plastic bottle inside it
recikliranje | a bottle going into one end of the recycling triangle and a new bottle coming out the other
```

## g02 — the materials four (L1)

```
plastika | a single crushed clear plastic bottle
staklo   | a green glass jar with a metal lid
papir    | a neat stack of folded newspaper
kanta    | a small lidded kitchen rubbish bin, household size, beside a floor line
```

## g03 — rules and cleanliness (L2)

```
nacin    | a fork in a footpath with two signposted routes leading off
pravilo  | a framed notice on a wall with three blank ruled lines on it
cist     | a sparkling clean drinking glass with a small shine mark
prljav   | the same drinking glass, smeared and dull with fingerprints
```

*Draw `cist` and `prljav` as the **same glass**, twice. The contrast is the card.*

## g04 — sorting and the street (L2)

```
baciti    | a hand releasing a drink can downward over an open bin
odvojiti  | two hands putting a glass jar and a newspaper into two separate bins
spremnik  | a large wheeled communal street container, clearly bigger than a household bin
planet    | the earth seen from space, blue and green
```

*`spremnik` must read as street furniture and must be visibly larger than g02's `kanta`.*

## g05 — the planet four (L3)

```
klima      | a thermometer standing against a sky that is half bright sun, half grey cloud
zagadenje  | a factory chimney pushing out grey smoke
zagadivati | a pipe emptying grey liquid into a blue river
posljedica | a row of dominoes, the first one knocking the second over
```

## g06 — consequences and danger (L3)

```
utjecaj  | a hand tipping one pan of a two-pan balance downward
opasan   | a yellow warning triangle with a black lightning bolt inside it
stetan   | a red downward thumb held over a plastic bottle
koristan | a green upward thumb held over the same plastic bottle
```

*`stetan` and `koristan` share one object and differ only in the thumb. Same pair logic as čist ‖ prljav.*

## g07 — saving and power (L4)

```
stedjeti | a hand turning a tap down until only one drop hangs from it
energija | a battery with a bright lightning bolt on its side
struja   | a plug being pushed into a wall socket
ugasiti  | a finger on a light switch, the room behind it going dark
```

## g08 — using up and cutting down (L4)

```
trositi  | a battery three-quarters drained, only a sliver of charge left
smanjiti | a tall bar shrinking to a short bar, with a downward arrow beside it
vrecica  | a plastic carrier bag with two loop handles
cuvati   | two cupped hands sheltering a small green seedling
```

## g09 — protection and change (L5)

```
zastita  | a shield with a green leaf on its face
rjesenje | a key sliding into a keyhole
promjena | two curved arrows chasing each other in a circle
unistiti | a cracked and shattered pane of glass
```

## g10 — the last four (L5)

```
spasiti | two hands lifting a small bird out of water
zeleni  | a city skyline drawn entirely in green with a leaf above it
mir     | (SPARE — mir belongs to b1u22 g01; leave this quadrant as a plain cream square and discard it)
narod   | (SPARE — narod belongs to b1u22 g10; leave this quadrant as a plain cream square and discard it)
```

*g10 carries two spares because the unit needs 38 drawn images and 38 is not a
multiple of 4. Generate the grid, split it, and delete the two spare quadrants —
that is cheaper than re-rolling a two-image grid, and it keeps the style lock
identical across the whole batch.*

---

## After the split

1. `python scripts\bg_jpgs.py` — background removal over `public/img/ai-generated/`
2. `npx tsx scripts/_allaudit.ts` — expect **b1u20: total 40 · have 38 · missing 2**
   (the two icon-only function words, `javni` and `buducida`, never get files)
3. `python scripts\wire_images.py b1u20` — injects `image:` into the vocab cards
4. `npm run validate:content && npm run build` — both must stay green
5. QA with `python scripts\qa_sheet.py` **to a fresh filename every time** — the
   Read tool caches by path, so re-using `_qa.png` will show you the previous run
