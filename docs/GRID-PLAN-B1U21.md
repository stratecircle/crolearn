# b1u21 "Tehnologija" — 2×2 grid batch plan (40 images, 10 grids)

Prompt template: see `docs/GRID-PLAN.md`. Bake the full style block into EVERY
prompt; never rely on an earlier style-lock message.

Split command:
`python scripts\split_grid.py public\img\ai-generated\_b21gNN.jpg <tl> <tr> <bl> <br>`

---

## Why 40, and no hand-wires

`npx tsx scripts/_allaudit.ts` reports **b1u21: total 40 · have 0 · missing 40**,
with no `UNWIRED` line — the binding number (`IMAGE-GRIND-STATUS.md` §6).

**No slug de-collision is needed.** All forty `fold(hr)` slugs are unique against
the 764 PNGs already in `public/img/`; a collision would surface as `have 1` plus
an `UNWIRED` line, the way `da` did in U19. `scripts/wire_images.py b1u21` can run
unattended after the split.

Slugs worth checking by eye after the split:
- **sadržaj → `sadrzaj`** · **čudno → `cudno`** · **mogućnost → `mogucnost`**
- **obećati → `obecati`** · **predložiti → `predloziti`** · **ispričati → `ispricati`**
- **šteta → `steta`** — do **not** confuse with `stetan` (b1u20, «harmful»). Two
  different words, two different files, and both exist after U20 ships.

## Four words that carry an `icon` only

**neka · ozbiljno · čudno · digitalan** have nothing concrete to draw. They ship
with an emoji icon and no `image:` key. That leaves **36 to draw**, which is
exactly nine grids of four — the cleanest batch in the B1 block, with no spares.

## The design constraints that matter

**ponijeti ‖ donijeti.** *donijeti* already exists (a2u14) as bringing something
**to** the speaker. *ponijeti* must be drawn as the opposite motion: **a hand
picking up a bag on the way OUT of a door**, arrow pointing away. If the two
images read the same, the card fails, because the whole point of the entry is
the direction.

**odbiti ‖ pristati** are a pair and must share one object: **the same offered
box**, pushed away in one and accepted in the other. Same logic as U20's
čist ‖ prljav.

**korist ‖ šteta** are also a pair: a green arrow rising out of a box, and the
same box cracked. Keep the box identical.

## Collision notes for this unit

Checked against the description bank in `docs/GRID-PLAN.md` and
`docs/chatgpt-paste-list.md` (3+ shared content words = a collision):

- **mobitel** (a2u12) and **računalo** (a2u12) already exist. *zaslon* must NOT
  be a phone or a laptop — it is **a lit rectangle in a dark bezel**, on its own.
- **aplikacija** (a2u15) exists as an app icon grid. *instalirati* must not be an
  app icon — it is **a box opening with a gear rising out of it**.
- **lozinka** (a2u15) exists as a password field with dots. *sigurnost* must not
  be a password — it is **a padlock on a shield**, and *privatnost* is **a closed
  curtain over a window with a small lock**.
- **poruka** (a2u15) exists as a chat bubble. *komentar* is **a speech bubble
  with a small tail attached to a post**, and *glasina* is **one speech bubble
  whispering into three others** — three bubble images, three distinct content
  descriptions.
- **spremiti** wants a floppy disc; nothing in the bank uses one. Safe.

---

## g01 — the device four (L1)

```
zaslon      | a lit rectangular screen in a dark bezel, on its own, nothing else around it
tipkovnica  | a computer keyboard seen from directly above
korisnik    | a simple person icon inside a rounded square frame
podatak     | one row of a table pulled out and floating above the stack it came from
```

## g02 — what you do with a device (L1)

```
preuzeti    | a downward arrow coming out of a cloud into an open tray
instalirati | a cardboard box opening with a cog rising out of it
spremiti    | a floppy-disc shape with a green checkmark on it
obrisati    | a wastebasket with a file falling into it
```

## g03 — asking and reminding (L2)

```
moliti     | two open hands held together, palms up
podsjetiti | a finger with a piece of red string tied round it
pozuriti   | a running figure leaning forward with motion lines behind it
ponijeti   | a hand picking up a bag while stepping out through a doorway, arrow pointing away
```

*`ponijeti` must point AWAY from the viewer. `donijeti` (a2u14) points toward.*

## g04 — warning, linking, refusing (L2)

```
upozoriti | a raised open hand beside a yellow warning triangle
link      | a chain link with a mouse cursor resting on it
odbiti    | a hand pushing an offered cardboard box away
pristati  | the same hand accepting the same cardboard box
```

*`odbiti` and `pristati` share the box. Draw it identically in both.*

## g05 — asking, checking, rumours (L3)

```
zanimati   | a face with one eyebrow raised beneath a floating question mark
provjeriti | a magnifying glass held over a checkbox
glasina    | one speech bubble whispering into three smaller bubbles in a chain
profil     | a circular avatar with two short bars beneath it
```

## g06 — posts and content (L3)

```
komentar | a speech bubble with a small tail, attached below a post card
sadrzaj  | a page with mixed text lines and image blocks laid out on it
obecati  | a figure with one hand flat on their heart
priznati | a figure with their head down and one hand raised
```

## g07 — the reporting verbs (L4)

```
predloziti   | a lit lightbulb offered on an open palm
spomenuti    | a finger pointing at one single word in a line of text
primijetiti  | an eye catching the one different item in a row of identical ones
obavijestiti | a megaphone with three small lines coming out of it
```

## g08 — telling, and what it costs (L4/L5)

```
ispricati  | a figure talking with a small filmstrip floating above their head
ovisnost   | a hand that cannot let go of a phone, with a faint chain round the wrist
privatnost | a closed curtain across a window with a small padlock on it
sigurnost  | a padlock sitting on the face of a shield
```

## g09 — the last four (L5)

```
stvarnost  | a phone held up in front of a landscape, the picture on the screen not matching what is behind it
mogucnost  | a path forking into three signposted branches
korist     | a green arrow rising up out of an open box
steta      | the same open box, cracked down one side
```

*`korist` and `steta` share the box. Draw it identically in both.*

---

## After the split

1. `python scripts\bg_jpgs.py` — background removal over `public/img/ai-generated/`
2. `npx tsx scripts/_allaudit.ts` — expect **b1u21: total 40 · have 36 · missing 4**
   (the four icon-only words — `neka`, `ozbiljno`, `cudno`, `digitalan` — never get files)
3. `python scripts\wire_images.py b1u21`
4. `npm run validate:content && npm run build` — both must stay green
5. QA with `python scripts\qa_sheet.py` **to a fresh filename every time**
