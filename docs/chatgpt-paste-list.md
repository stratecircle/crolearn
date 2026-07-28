# ChatGPT paste list — vocab images

## Message 1 — paste this first (locks the style)

```
You're going to generate a series of images for me, one per message. Use EXACTLY
this style for every single one, never varying it: clean modern flat cartoon
illustration, single clearly recognizable centered subject, bold simple shapes
with smooth soft shading, friendly and approachable but not childish, easy to
understand at a glance, gentle warm lighting, warm cream background, subtle soft
shadow under the subject, pastel-warm color palette, square 1:1, no text, no
letters, no watermark, no logo, no border. People should be friendly and generic.
Reply "ready" and wait for the first subject.
```

## Then paste these one at a time (each = one image)

1. sunrise over a calm horizon, warm golden sky
2. bright daytime sky with a cheerful sun and one white cloud
3. dusk sky in orange and purple, first star visible
4. deep-blue starry night sky with a crescent moon
5. a cup of black coffee on a saucer, wisp of steam
6. a clear glass of water
7. a glass cup of amber tea with a teabag string
8. a friendly adult man, waist-up, neutral casual clothes
9. a schoolkid with a backpack walking to school, seen from behind
10. close-up of a jeans pocket
11. a sunny beach with turquoise sea and a beach umbrella
12. a friendly school building with a flag and a schoolyard
13. a friendly adult woman, waist-up, neutral casual clothes
14. an old Adriatic coastal town with red roofs and city walls by a blue sea
15. a young man studying with a laptop and notebook
16. a young woman studying with a laptop and notebook
17. a distinguished older gentleman in a suit, warm smile
18. an elegant older lady in refined clothes, warm smile
19. planet Earth seen from space
20. a European old-town cityscape with a cathedral and red roofs
21. a small hilltop village with stone houses and vineyards
22. open blue sea meeting the sky, small waves
23. a turquoise mountain lake with pine forest and snowy peaks
24. the Brandenburg Gate in Berlin
25. Big Ben with a red double-decker bus
26. the Statue of Liberty
27. the Eiffel Tower
28. a male teacher at a blank whiteboard, gesturing warmly
29. a female teacher at a blank whiteboard, gesturing warmly
30. a male doctor in a white coat with a stethoscope
31. a female doctor in a white coat with a stethoscope
32. a male waiter carrying a tray with coffee cups
33. a waitress with an apron carrying a tray
34. a male engineer in a hard hat holding blueprints
35. a female engineer in a hard hat holding blueprints
36. a male chef in a chef's hat stirring a pot
37. a female chef in a chef's hat stirring a pot

## Saving — the easy way

Download every image into: `public/img/incoming/` (any filenames — whatever
ChatGPT gives them; do NOT rename anything). When you're done, tell Claude
"images are in" — Claude will look at each one, identify it, rename it to the
right card, wire it, and flag any that need a regenerate.

---

# Regenerate list — visual QA pass, 2026-07-22 (6 of 37 flagged)

Same drill: style lock first, then paste these; download into
`public/img/incoming/` and tell Claude "images are in" — the old files get
replaced. Target filename first so nothing gets mixed up.

1. `zena` — a friendly adult woman shown waist-up, smiling warmly at the viewer, casual modern clothing, generic and approachable
   _(current file is a crescent-moon night scene — wrong image entirely, got misfiled during the first triage)_
2. `caj` — a clear glass cup of warm amber tea with a teabag steeping inside, its string and paper tag draped over the rim, gentle wisps of steam rising
   _(current one has a stray beige blob artifact from background removal)_
3. `dan` — a bright daytime scene of a glowing yellow sun with soft rays high in a clear light-blue sky with one small white cloud, no face on the sun
   _(current sun has a smiley face — too childish; ragged cut-out edges)_
4. `dzep` — close-up of a single blue denim jeans back pocket with contrast stitching, filling the frame
   _(current one is a photorealistic photo, not flat cartoon — jarring next to the set)_
5. `voda` — a clear drinking glass filled with fresh water, with a visible light-blue tint and a clearly defined glass outline so it reads against a white background
   _(current glass is so pale its top half is invisible on light backgrounds)_
6. `zemlja` — planet Earth seen from space, blue oceans and green continents with a few small white clouds, no face and no facial features
   _(current Earth has a smiling cartoon face — too childish)_

Minor, no action needed (noted for completeness): small background-removal
artifacts on kuhar/skola, soft halo edges on noc/vecer sky cutouts.

---

# Batch 2 — every remaining word (no more emoji anywhere)

Same drill: paste Message 1 (the style lock) in a fresh conversation, then these
one at a time, download all to `public/img/incoming/` in order. These are the
abstract/function words, so the images are concept gestures — the target
filename is listed so nothing gets mixed up. One exception to the style block:
for the NUMBER words (65–84), a big friendly 3D numeral IS the subject — digits
are allowed there (they're what's being learned), still no other text.

1. `da` — a big friendly thumbs-up hand
2. `ne` — a big thumbs-down hand
3. `i` — a red apple and a green apple joined by a plus sign
4. `dobro` — an OK hand gesture (thumb and index finger circle)
5. `njegov` — a man holding a coffee mug close to his chest, pointing at it
6. `cao` — a single waving hand, close-up
7. `ja` — a person pointing at their own chest
8. `ti` — a person pointing straight at the viewer
9. `on` — a man standing, full figure, hands in pockets
10. `ona` — a woman standing, full figure
11. `ono` — a plain wooden cube on the floor
12. `mi` — three people with arms around each other's shoulders, seen from behind
13. `vi` — two people facing the viewer, waving together
14. `oni` — a small group of people walking together, seen from a distance
15. `sretan` — a man jumping for joy
16. `umoran` — a man yawning with drooping eyes
17. `kako` — a person shrugging with palms up
18. `tko` — a mysterious person silhouette lit by a spotlight
19. `sto` — a closed cardboard mystery box with a soft glow
20. `ime` — a blank name-tag sticker on a shirt
21. `prijatelj` — two men high-fiving
22. `prijateljica` — two women laughing together
23. `drago-mi-je` — a friendly handshake, close-up
24. `zovem-se` — a person pointing at the blank name tag on their chest
25. `hvala` — a person with hand on heart, grateful little bow
26. `molim` — two open palms held out politely
27. `oprostite` — a person with a hand raised apologetically, slight bow
28. `izvolite` — a waiter presenting with an open upturned hand
29. `dovidenja` — a person waving goodbye in an open doorway
30. `bok` — two friends fist-bumping
31. `laku-noc` — a person asleep in bed under a crescent moon
32. `vidimo-se` — two people waving to each other across a street
33. `dobrodosli` — an open front door with a doormat and warm light spilling out
34. `odlicno` — two enthusiastic thumbs up
35. `lose` — a person with slumped shoulders under a small rain cloud
36. `moze` — a winking person giving an OK sign
37. `jezik` — two people with speech bubbles between them
38. `iz` — a traveler with a suitcase walking away from a small house
39. `ili` — a person at a fork in a path choosing between two directions
40. `hrvat` — a smiling man holding a small Croatian flag
41. `hrvatica` — a smiling woman holding a small Croatian flag
42. `kanadanin` — a smiling man holding a small Canadian flag
43. `kanadanka` — a smiling woman holding a small Canadian flag
44. `nijemac` — a smiling man holding a small German flag
45. `njemica` — a smiling woman holding a small German flag
46. `englez` — a smiling man holding a small English flag (red cross on white)
47. `engleskinja` — a smiling woman holding a small English flag
48. `amerikanac` — a smiling man holding a small American flag
49. `amerikanka` — a smiling woman holding a small American flag
50. `odakle` — a traveler with a backpack looking at a map, shrugging
51. `ali` — two bold arrows pointing in opposite directions
52. `koliko` — a hand holding coins above an open palm
53. `broj` — a blue house-door plaque with the numeral 42
54. `hrvatski` — a speech bubble filled with the red-white checkerboard pattern
55. `engleski` — a speech bubble filled with the Union Jack pattern
56. `njemacki` — a speech bubble in black-red-gold horizontal stripes
57. `francuski` — a speech bubble in blue-white-red vertical stripes
58. `govoriti` — a person speaking with sound waves coming from their mouth
59. `razumijem` — a person with a bright lightbulb above their head
60. `malo` — a hand pinching thumb and forefinger almost together
61. `jako` — a strong flexed bicep arm
62. `jedan` — a big friendly 3D numeral 1
63. `dva` — a big friendly 3D numeral 2
64. `tri` — a big friendly 3D numeral 3
65. `cetiri` — a big friendly 3D numeral 4
66. `pet` — a big friendly 3D numeral 5
67. `sest` — a big friendly 3D numeral 6
68. `sedam` — a big friendly 3D numeral 7
69. `osam` — a big friendly 3D numeral 8
70. `devet` — a big friendly 3D numeral 9
71. `deset` — a big friendly 3D numeral 10
72. `jedanaest` — a big friendly 3D numeral 11
73. `dvanaest` — a big friendly 3D numeral 12
74. `trinaest` — a big friendly 3D numeral 13
75. `cetrnaest` — a big friendly 3D numeral 14
76. `petnaest` — a big friendly 3D numeral 15
77. `sesnaest` — a big friendly 3D numeral 16
78. `sedamnaest` — a big friendly 3D numeral 17
79. `osamnaest` — a big friendly 3D numeral 18
80. `devetnaest` — a big friendly 3D numeral 19
81. `dvadeset` — a big friendly 3D numeral 20

## Batch 2 addendum — 3 U2 words the list above missed

82. `dobar` — a shiny perfect red apple with a little sparkle
83. `los` — a bruised, wrinkled rotten apple
84. `nov` — a brand-new sparkling sneaker with a big red gift bow

---

# Batch 3 — Unit 3 vocab (family, pets, possessives, adjectives) — 40 words

Same drill: paste Message 1 (the style lock) in a fresh conversation, then these
one at a time, download all to `public/img/incoming/`. (`njegov` is already in
Batch 2 — not repeated here.) People should stay friendly and generic; keep
family members visually distinct by age.

1. `obitelj` — a happy family of four (mother, father, boy, girl) standing together
2. `majka` — a mother holding a baby in her arms
3. `otac` — a father carrying a small child on his shoulders
4. `brat` — two boys, the taller one with his arm around the smaller one's shoulders
5. `sestra` — two girls, the taller one with her arm around the smaller one's shoulders
6. `sin` — a father with his hand proudly on a small boy's shoulder
7. `kci` — a mother with her hand proudly on a small girl's shoulder
8. `roditelji` — a mother and father standing arm in arm
9. `baka` — a friendly grandmother with gray hair in a bun and glasses, knitting
10. `djed` — a friendly grandfather with a white mustache and a cane
11. `unuk` — a grandmother hugging a small boy
12. `unuka` — a grandfather hugging a small girl
13. `muz` — a smiling groom in a suit with a boutonniere, waving
14. `dijete` — one happy toddler holding a toy block
15. `djeca` — three small children playing with a ball together
16. `beba` — a baby in a onesie sitting and smiling
17. `ljudi` — a small diverse crowd of people, seen from a slight distance
18. `osoba` — one friendly neutral person standing, hands relaxed
19. `pas` — a happy dog sitting with its tongue out
20. `macka` — a cat sitting with its tail curled around its paws
21. `ptica` — a small bird perched on a branch
22. `kuca` — a cozy house with a red roof and a chimney
23. `auto` — a small friendly rounded car
24. `moj` — a child hugging a teddy bear tightly to their chest
25. `tvoj` — a person offering a gift box out toward the viewer
26. `nas` — three people together holding one big picnic basket
27. `njezin` — a woman holding a handbag close and pointing at it
28. `njihov` — three people standing around one big suitcase, each with a hand on it
29. `ciji` — three people shrugging, puzzled, around a lone umbrella on a coat rack
30. `imati` — a smiling person with arms full of shopping bags and boxes
31. `velik` — a big friendly elephant
32. `mali` — a tiny mouse with lots of empty space around it
33. `star` — an old gnarled oak tree
34. `mlad` — a small green sapling sprouting from the ground
35. `visok` — a very tall thin man, head near the top of the frame
36. `nizak` — a short man with lots of empty space above him
37. `jak` — a strongman lifting a heavy barbell
38. `pametan` — an owl wearing glasses perched on a stack of books
39. `lijep` — a beautiful blooming rose
40. `zdravo-note` — SKIP — placeholder line, do not generate (keeps numbering stable if you re-run)

---

# Batch 4 — Unit 4 vocab (food & café) — 38 words

From the Unit 4 spec (`curriculum/A1/unit-4.md`). Unit 4 lessons are still being
authored, but the vocab list comes from the spec, so these are safe to generate
now. Same drill: style lock first, then one at a time into `public/img/incoming/`.
No text anywhere — menus/receipts use wordless squiggle lines, cartons and
bottles have no labels.

1. `kruh` — a crusty loaf of bread
2. `sir` — a wedge of yellow cheese with holes
3. `jabuka` — a single shiny red apple with a leaf
4. `juha` — a steaming bowl of soup with a spoon
5. `salata` — a bowl of green salad with tomato slices
6. `riba` — a whole cooked fish on an oval plate with a lemon slice
7. `meso` — a steak and a drumstick on a plate
8. `mlijeko` — a glass of milk next to a plain white carton (no label)
9. `sok` — a glass of orange juice with a straw and an orange beside it
10. `gledati` — a person on a sofa watching a TV that shows a simple landscape
11. `kuhati` — a home cook in an apron (no chef hat) stirring a pan at a home stove
12. `cekati` — a person checking their wristwatch at a bus stop
13. `rucati` — a person eating a plate of food at a table, midday sun in the window
14. `vecerati` — a person eating at a table in the evening, crescent moon in the window
15. `dorucak` — a breakfast spread: bowl of cereal, croissant, and orange juice
16. `rucak` — a hearty lunch plate: meat, potatoes, and salad
17. `vecera` — an evening dinner table with a bowl of soup, bread, and a lit candle
18. `piti` — a person drinking from a glass, head tilted back
19. `jesti` — a person happily eating a sandwich, mid-bite
20. `voljeti` — a person hugging a big red heart
21. `zeljeti` — a person gazing dreamily at a thought bubble containing an ice-cream sundae
22. `pivo` — a mug of golden beer with a foam head
23. `vino` — a glass of red wine next to an unlabeled bottle
24. `voce` — a fruit basket with an apple, a banana, and grapes
25. `povrce` — a basket of vegetables: carrot, tomato, broccoli
26. `htjeti` — a child at a bakery window pointing eagerly at a cake
27. `gladan` — a person holding a knife and fork over an empty plate, tummy rumble lines
28. `zedan` — a parched person holding an upside-down empty glass, sweat drops
29. `kolac` — a slice of layered cake with a cherry on top
30. `sladoled` — an ice-cream cone with two scoops
31. `cokolada` — a chocolate bar with one piece broken off (no wrapper text)
32. `jelovnik` — an open menu card with wordless squiggle lines
33. `racun` — a paper receipt with wordless squiggle lines and a few coins
34. `kafic` — a cozy café storefront with an outdoor table and umbrella
35. `restoran` — an elegant restaurant storefront with an awning
36. `jos` — a hand holding out an empty glass toward a pitcher for a refill
37. `dobar-tek` — a smiling person with a napkin tucked in, knife and fork raised over a full plate
38. `zivjeli` — two beer mugs clinking together with a little splash

---

# Batch 5 — Unit 5 vocab (city, locative, directions) — 49 words

Style-lock message first, then these one at a time into `public/img/incoming/`.
Places are literal buildings/objects; direction & function words are concept
gestures; ordinals are award ribbons with the numeral (digits allowed, like the
number words). No text/letters anywhere.

1. `banka` — a classic bank building with tall columns and a coin slot
2. `crkva` — a church with a bell tower and a cross
3. `fakultet` — a grand old university building with a dome and steps
4. `hotel` — a tall hotel building with a bellhop and a luggage cart out front
5. `kazaliste` — a grand theatre facade with red curtains and columns
6. `kino` — a cinema with a glowing marquee and a film reel (no text)
7. `kolodvor` — a train-station platform with a big round clock and a waiting train
8. `koncert` — a concert stage with bright lights, a guitar and a microphone
9. `muzej` — a museum building with columns, wide steps and a banner (no text)
10. `most` — an arched stone bridge over a blue river
11. `park` — a green park with trees, a winding path and a bench
12. `posta` — a post office building with a bright yellow mailbox out front
13. `trg` — a town square with a fountain and cobblestones
14. `ulica` — a charming European street lined with colourful buildings
15. `zgrada` — a tall modern apartment building
16. `stan` — a cozy apartment interior with a sofa, lamp and window
17. `centar` — a lively downtown street corner with shops and people
18. `adresa` — a sealed envelope with a red map location-pin on it (no readable text)
19. `stanica` — a bus-stop shelter with a bench and a blank signpost
20. `autobus` — a friendly rounded city bus
21. `tramvaj` — a cheerful blue city tram on its rails
22. `zracna-luka` — an airport terminal with a control tower and a plane taking off
23. `kat` — a cutaway of a building showing three stacked floors with an upward arrow
24. `prizemlje` — a cutaway of a building with the bottom (ground) floor glowing
25. `posao` — a briefcase and a yellow hard hat side by side
26. `lijevo` — a big bold arrow curving to the left
27. `desno` — a big bold arrow curving to the right
28. `ravno` — a big bold arrow pointing straight ahead down a road
29. `blizu` — two red map-pins very close together
30. `daleko` — two red map-pins far apart joined by a long dotted line
31. `ovdje` — a single glowing red map-pin planted on the ground with a person beside it
32. `tamo` — a person pointing off into the distance toward a far building
33. `gdje` — a puzzled person shrugging beside a big question mark on a folded map
34. `kamo` — a wooden signpost with arrows pointing in several directions
35. `ici` — a person walking briskly to the right with a motion arrow
36. `idite` — a green walking-person crosswalk symbol with a forward arrow
37. `skrenite` — a road with a bold arrow bending around a corner
38. `pa` — two arrows linked end to end, left flowing into right (a sequence)
39. `zivjeti` — a happy person standing in the open doorway of a cozy home
40. `prvi` — a gold first-place medal on a ribbon
41. `drugi` — a silver second-place medal on a ribbon
42. `treci` — a bronze third-place medal on a ribbon
43. `cetvrti` — an award rosette ribbon with a big friendly 3D numeral 4
44. `peti` — an award rosette ribbon with a big friendly 3D numeral 5
45. `sesti` — an award rosette ribbon with a big friendly 3D numeral 6
46. `sedmi` — an award rosette ribbon with a big friendly 3D numeral 7
47. `osmi` — an award rosette ribbon with a big friendly 3D numeral 8
48. `deveti` — an award rosette ribbon with a big friendly 3D numeral 9
49. `deseti` — an award rosette ribbon with a big friendly 3D numeral 10

---

# Batch 6 — Unit 6 vocab (daily routine, time, days) — 50 words

Days of the week are a week-strip of seven cells with one cell highlighted (no
readable text); routine verbs are the person doing it; frequency words are
concept gestures. No text anywhere.

1. `ustajati` — a person stretching as they get out of bed in the morning
2. `buditi-se` — a person sitting up in bed rubbing their eyes, an alarm clock ringing
3. `tusirati-se` — a person showering under a shower head with bubbles
4. `oblaciti-se` — a person pulling on a shirt, getting dressed
5. `doruckovati` — a person eating cereal and toast at a breakfast table
6. `uciti` — a person at a desk studying with an open book and a lightbulb
7. `spavati` — a person peacefully asleep in bed with little "z z z" marks
8. `odmarati-se` — a person relaxing on a sofa, feet up, with a cup of tea
9. `slusati` — a person wearing headphones enjoying music, note symbols around them
10. `ici-spavati` — a person in pyjamas walking toward a bed under a crescent moon
11. `knjiga` — a single open book
12. `film` — a clapperboard and a film reel together
13. `serija` — a TV set showing several little episode thumbnails
14. `pjesma` — a music note inside a speech bubble
15. `sport` — a soccer ball, basketball and tennis ball together
16. `zadaca` — a notebook with a pencil and a few checkmarks
17. `vijesti` — a TV screen with a news lower-third bar (no text) and a small globe
18. `tjedan` — a strip of seven blank calendar cells in a row
19. `vrijeme` — a large friendly round wall clock
20. `sat` — a single round clock face showing an hour
21. `minuta` — a stopwatch with the second hand highlighted
22. `pola` — a clock face with the left half shaded (half)
23. `podne` — a bright sun high above a clock showing twelve
24. `ponoc` — a crescent moon above a clock showing twelve
25. `ujutro` — a sunrise over a horizon with a steaming coffee cup
26. `prijepodne` — a mid-morning sun climbing in a clear sky
27. `popodne` — an afternoon sun past its peak, lengthening shadows
28. `navecer` — a dusk sky with the first stars and a lit lamp
29. `ponedjeljak` — a week-strip with the 1st cell highlighted
30. `utorak` — a week-strip with the 2nd cell highlighted
31. `srijeda` — a week-strip with the 3rd cell highlighted
32. `cetvrtak` — a week-strip with the 4th cell highlighted
33. `petak` — a week-strip with the 5th cell highlighted
34. `subota` — a week-strip with the 6th cell highlighted, plus a tiny sun icon
35. `nedjelja` — a week-strip with the 7th cell highlighted, plus a tiny relaxed icon
36. `uvijek` — a full row of five filled checkmarks (always)
37. `cesto` — four of five checkmarks filled (often)
38. `obicno` — three of five checkmarks filled (usually)
39. `ponekad` — two of five checkmarks filled (sometimes)
40. `rijetko` — one of five checkmarks filled (rarely)
41. `nikad` — a circle-with-a-slash over a checkmark (never)
42. `rano` — a rooster crowing at sunrise (early)
43. `kasno` — a sleepy person under a night sky beside a late clock
44. `prvo` — a hand holding up one finger (first of all)
45. `onda` — an arrow pointing from one step to the next
46. `zatim` — two footprints in sequence joined by an arrow (next)
47. `na-kraju` — a checkered finish-line flag (finally)
48. `svaki-dan` — a calendar with every day marked with a small dot
49. `pocinjati` — a green "go" flag at a start line
50. `zavrsavati` — a checkered flag at a finish line

---

# Batch 7 — Unit 7 vocab (shopping, prices, clothes, colours) — 52 words

Colours are a paint swatch in that colour; number words 20–1000 are big friendly
3D numerals (digits allowed); everything else literal. No text.

1. `trgovina` — a friendly small shop storefront with an awning
2. `pekarnica` — a bakery window full of bread and pastries
3. `trznica` — an open-air market stall with fruit and vegetables
4. `haljina` — a pretty dress on a hanger
5. `kosulja` — a buttoned collared shirt on a hanger
6. `majica` — a plain t-shirt
7. `jakna` — a zip-up jacket
8. `hlace` — a pair of trousers
9. `cipele` — a pair of shoes
10. `boca` — a glass bottle
11. `casa` — a drinking glass
12. `salica` — a coffee cup on a saucer
13. `komad` — a single slice of cake on a plate (a piece)
14. `kilogram` — a kitchen scale with a weight on it
15. `litra` — a one-litre measuring jug of liquid
16. `novac` — a small stack of coins and banknotes (no readable text)
17. `euro` — a shiny gold coin bearing the euro symbol €
18. `cent` — a small copper coin
19. `cijena` — a blank price tag hanging on a string
20. `velicina` — three t-shirts in small, medium and large sizes
21. `kupovati` — a happy person carrying shopping bags
22. `platiti` — a hand tapping a card on a card reader
23. `nositi` — a person modelling a coat, showing off what they wear
24. `probati` — a person trying on a jacket in front of a mirror
25. `traziti` — a person peering through a magnifying glass at a shelf
26. `kostati` — a price tag with a coin beside it
27. `nema` — an empty shelf with a small "poof" cloud (nothing there)
28. `dosta` — a hand held up palm-out, "that is enough"
29. `puno` — an overflowing shopping basket piled high
30. `previse` — a wobbling tower of boxes about to topple (too much)
31. `jeftin` — a price tag with a downward arrow and a happy face (cheap)
32. `skup` — a price tag with an upward arrow and a worried face (expensive)
33. `crven` — a bright red paint swatch
34. `plav` — a blue paint swatch
35. `zelen` — a green paint swatch
36. `zut` — a yellow paint swatch
37. `crn` — a black paint swatch
38. `bijel` — a white paint swatch with a thin grey outline
39. `iz` — a person stepping out through a doorway (out of)
40. `od` — an arrow departing from a single marked point
41. `do` — an arrow arriving at a finish marker (up to)
42. `blizu` — two shopping bags placed close together
43. `dvadeset` — a big friendly 3D numeral 20
44. `trideset` — a big friendly 3D numeral 30
45. `cetrdeset` — a big friendly 3D numeral 40
46. `pedeset` — a big friendly 3D numeral 50
47. `sezdeset` — a big friendly 3D numeral 60
48. `sedamdeset` — a big friendly 3D numeral 70
49. `osamdeset` — a big friendly 3D numeral 80
50. `devedeset` — a big friendly 3D numeral 90
51. `sto` — a big friendly 3D numeral 100
52. `tisuca` — a big friendly 3D numeral 1000

---

# Batch 8 — Unit 8 vocab (past tense, weather, activities) — 41 words

Weather words are sky scenes; activity verbs are the person doing it; time words
are calendar/clock concepts; feeling words are faces. No text anywhere.

1. `kisa` — grey clouds with raindrops falling
2. `snijeg` — a snowy scene with falling snowflakes
3. `sunce` — a big cheerful sun with rays
4. `oblak` — a single fluffy white cloud
5. `vjetar` — swirling wind lines bending a small tree
6. `suncano` — a bright clear blue sky with a sun (sunny)
7. `oblacno` — a sky full of grey clouds (cloudy)
8. `toplo` — a thermometer reading high beside a gentle sun (warm)
9. `vruce` — a thermometer near the top with a sweating sun (hot)
10. `hladno` — a thermometer reading low with a snowflake (cold)
11. `padati` — rain falling from a cloud onto the ground
12. `citati` — a person curled up reading a book
13. `pisati` — a hand writing with a pen in a notebook
14. `pjevati` — a person singing happily with music notes
15. `plesati` — a person dancing with motion swirls
16. `igrati` — children playing with a ball in a park
17. `setati` — a person taking a relaxed stroll in a park
18. `putovati` — a person with a suitcase and passport, ready to travel
19. `posjetiti` — a visitor knocking at a friend's door with a gift
20. `kupiti` — a hand receiving a wrapped purchase over a counter
21. `nogomet` — a soccer ball on green grass
22. `utakmica` — a stadium field with a scoreboard
23. `izlet` — a backpack, map and hiking boots for a day trip
24. `rodendan` — a birthday cake with lit candles and a party hat
25. `zabava` — a party scene with balloons, confetti and streamers
26. `vikend` — a calendar with Saturday and Sunday circled and a small sun
27. `danas` — a calendar with today's date circled and a bright sun
28. `jucer` — a calendar page turning back one day, dusk behind it
29. `sinoc` — a night sky with a crescent moon (last night)
30. `sutra` — a calendar page flipping forward one day, sunrise ahead
31. `prosli-tjedan` — a calendar with last week's row shaded and a back-pointing arrow
32. `prosle-godine` — a wall calendar flipping back a whole year
33. `cijeli-dan` — a sun arcing all the way across the sky from dawn to dusk
34. `vec` — a checkmark stamped on a to-do item (already done)
35. `zabavno` — a big laughing happy face (fun)
36. `zanimljivo` — a curious face with a raised eyebrow and a lightbulb (interesting)
37. `dosadno` — a bored, yawning face (boring)
38. `krasno` — a delighted face with sparkles (wonderful)
39. `grozno` — a grimacing unhappy face (terrible)
40. `gost` — a smiling visitor arriving at a door with a small gift
41. `vrijeme` — a sky that is half-sunny, half-cloudy, beside a clock (weather = time)

---

# A2 batches (9–16) — slugs taken from the AUTHORED content files, not the specs

Same drill every time: paste Message 1 (the style lock) in a fresh conversation,
then one line at a time, download everything to `public/img/incoming/`, tell
Claude "images are in". Target filename first. No text/letters anywhere except
where a line explicitly allows digits. Tickets, documents, screens and cards
always use wordless squiggle lines.

---

# Batch 9 — Unit 9 vocab (travel & future) — 36 words

1. `putovanje` — an open suitcase packed with clothes, sunglasses and a camera
2. `put` — a winding road stretching toward the horizon
3. `plan` — a notepad with a route sketched as a dotted line ending at a little flag
4. `planirati` — a person at a table tracing a route on an open map with a pencil
5. `otok` — a small green island with a palm tree in a blue sea
6. `plaza` — a sandy beach with a striped towel and a beach ball
7. `karta` — a single travel ticket with a punched hole and squiggle lines
8. `povratna-karta` — two joined tickets, one with an arrow going right, one with an arrow coming back left
9. `rezervirati` — a hand clicking a glowing highlighted cell on a laptop calendar of blank cells
10. `rezervacija` — a hotel desk bell beside a tag with a big checkmark
11. `polazak` — a train pulling away from a platform with motion lines and a forward arrow
12. `dolazak` — a train arriving at a platform where people wave
13. `sjedalo` — a single cushioned train seat by a window
14. `red-voznje` — a station timetable board with wordless squiggle rows under a big clock
15. `granica` — a road border crossing with a striped barrier and two plain generic flags
16. `putovnica` — a dark-red passport booklet with a plain gold globe emblem, no text
17. `prtljaga` — a pile of suitcases and bags on an airport luggage cart
18. `kovceg` — one rolling suitcase with a telescopic handle
19. `ruksak` — a hiking backpack
20. `carina` — a customs officer at a desk inspecting an open suitcase
21. `obala` — a rocky coastline meeting a blue sea, with a small lighthouse
22. `kod` — a guest and a host having tea together in a cozy living room, host gesturing welcome (at somebody's place)
23. `bez` — a cup of coffee next to a sugar cube crossed out with a red slash (without)
24. `vlak` — a friendly blue passenger train
25. `avion` — a passenger airplane in flight among small clouds
26. `let` — a dotted flight path arcing between two clouds with a tiny plane on it
27. `letjeti` — a plane climbing steeply upward with motion lines
28. `recepcija` — a hotel reception desk with a bell and a friendly receptionist
29. `soba` — a tidy hotel room with a bed and a lamp
30. `kljuc` — a single golden key on a ring with a blank room tag
31. `odmor` — a person relaxing in a hammock between two palm trees
32. `spakirati` — a person pressing down the lid of an overstuffed suitcase to close it
33. `krenuti` — a person stepping out of their front door with a suitcase, bold arrow forward
34. `stici` — a traveler stepping through an arrival gate, arms raised happily, suitcase beside them
35. `vodic` — a tour guide holding up a small pennant with two tourists following
36. `veceras` — a calendar with one day circled and a crescent moon with stars above it (tonight)

---

# Batch 10 — Unit 10 vocab (home, flat, dative) — 39 words

1. `susjed` — a man waving hello over a garden fence
2. `susjeda` — a woman waving hello over a garden fence
3. `poklon` — a wrapped gift box with a red bow
4. `pismo` — an open letter with squiggle lines unfolding from an envelope
5. `davati` — one person handing an apple to another, mid-give
6. `pomagati` — a person helping another carry a heavy box
7. `poslati` — a hand dropping an envelope into a yellow mailbox
8. `pokazati` — a person showing a friend a framed photo, pointing at it
9. `svidati-se` — a person admiring a painting with little hearts floating around them
10. `ulaz` — an apartment building entrance with a green door and an arrow pointing in
11. `dizalo` — open elevator doors with a person inside and a lit up-arrow
12. `prozor` — a single open window with curtains and a flower pot on the sill
13. `vrata` — a wooden front door with a brass handle
14. `balkon` — a small balcony with a railing, a chair and potted plants
15. `cistiti` — a person wiping a window with a cloth, sparkles where it's clean
16. `pospremati` — a person placing books and toys neatly onto a shelf
17. `prati` — a person washing dishes at a sink full of suds
18. `sude` — a stack of clean plates with cups and a few soap bubbles
19. `rublje` — a laundry basket of clothes with a t-shirt hanging on a line
20. `smece` — a tied garbage bag beside a bin with a lid
21. `pod` — a mop and bucket on a shiny wooden floor
22. `kuhinja` — a cozy kitchen with a stove, pots and cabinets
23. `stanovati` — a building cutaway with one warm lit flat where a person is reading
24. `iznajmiti` — a hand handing over a key above a small model house
25. `najam` — a key resting on a contract paper with squiggle lines
26. `stanarina` — a stack of coins beside a small model apartment building and a calendar with one cell highlighted
27. `cimer` — two beds in one room, a young man sitting on one waving
28. `cimerica` — two young women unpacking moving boxes together in a shared flat
29. `vlasnik` — a man in a sweater-vest holding a bunch of keys beside a door with a blank nameplate
30. `preseliti-se` — a moving van with boxes and a person carrying a box toward a new house
31. `kupaonica` — a bathroom with a bathtub, mirror and towels
32. `spavaca-soba` — a bedroom with a made double bed and a bedside lamp
33. `dnevni-boravak` — a living room with a sofa, rug and TV
34. `hodnik` — a hallway with a coat rack and several doors
35. `namjestaj` — a grouped set of furniture: sofa, table, lamp and wardrobe
36. `krevet` — a neatly made bed with two pillows
37. `ormar` — a wooden wardrobe with one door open showing hanging clothes
38. `stol` — a plain wooden dining table
39. `stolica` — a single wooden chair

---

# Batch 11 — Unit 11 vocab (health & body) — 39 words

Body parts: a friendly person outline with the named part glowing warm, or a
clean close-up. Modal verbs are concept gestures.

1. `glava` — a friendly person outline with the head highlighted in a warm glow
2. `ruka` — an arm with an open hand, sleeve rolled up
3. `noga` — a leg with a sneaker, mid-step
4. `oko` — a single friendly open eye with lashes
5. `uho` — a single ear, close-up
6. `zub` — a single shiny white tooth with a sparkle
7. `grlo` — a person outline with the throat highlighted in a warm glow
8. `trbuh` — a person outline with the belly highlighted in a warm glow
9. `leda` — a person seen from behind with the back highlighted in a warm glow
10. `srce` — a bold red heart with a gentle pulse line through it
11. `boljeti` — a person wincing and holding their arm, red zigzag pain flashes
12. `morati` — a person hurrying along with a big red exclamation mark above them (must)
13. `moci` — a person confidently flexing one arm with a bright sparkle (can)
14. `smjeti` — a friendly guard nodding and lifting a barrier for a pedestrian (may / allowed)
15. `trebati` — a person on tiptoes reaching for a glowing jar on a high shelf (need)
16. `lezati` — a person lying on a sofa under a blanket
17. `ostati` — a person staying wrapped in a blanket on the sofa with a steaming mug while rain falls outside the window
18. `bolestan` — a person in bed with a red nose and a thermometer in their mouth
19. `zdrav` — a glowing healthy person giving a thumbs up, apple in the other hand
20. `prehlada` — a person wrapped in a scarf sneezing into a tissue
21. `kasalj` — a person coughing into their elbow with little cough puffs
22. `temperatura` — a person in bed with flushed red cheeks and a thermometer showing a high red reading
23. `glavobolja` — a person holding their head with zigzag flashes at the temples
24. `muka` — a queasy green-tinged person holding their stomach, wavy lines rising
25. `slab` — a drooping person leaning against a wall beside a nearly empty battery icon
26. `pomoc` — one hand firmly pulling another hand up
27. `ljekarna` — a pharmacy storefront with a green cross sign
28. `lijek` — a medicine bottle and a blister pack of pills, no labels
29. `recept` — a doctor's prescription pad with wordless squiggle lines and a round stamp
30. `pregled` — a doctor listening to a patient's chest with a stethoscope
31. `cekaonica` — a waiting room with a row of chairs, a wall clock and one waiting person
32. `tableta` — a single round white pill beside a glass of water
33. `zdravlje` — a red apple, a dumbbell and a heart with a pulse line grouped together
34. `vjezbati` — a person doing stretching exercises on a mat
35. `trcati` — a person jogging with motion lines
36. `hodati` — a person walking briskly on a park path
37. `san` — a fluffy pillow under a crescent moon with little z-shaped sleep marks (sleep)
38. `dovoljno` — a glass filled exactly to a marked line, a level flat hand beside it (enough)
39. `brinuti-se` — a person tucking a blanket around someone ill and bringing them tea

---

# Batch 12 — Unit 12 vocab (work, study, instrumental) — 37 words

1. `ured` — an office room with a desk, computer and swivel chair
2. `tvrtka` — a modern office building with a blank sign panel
3. `kolega` — a man with a blank lanyard badge waving beside an office desk
4. `kolegica` — a woman with a blank lanyard badge waving beside an office desk
5. `sef` — a man in a tie at the head of a desk, gesturing at a wordless wall chart
6. `sefica` — a woman in a blazer at the head of a desk, gesturing at a wordless wall chart
7. `sastanak` — four people around a meeting table with a wordless flip chart
8. `tim` — a group of coworkers stacking their hands together in the middle
9. `zajedno` — three people rowing one boat in perfect sync (together)
10. `bicikl` — a friendly city bicycle with a basket
11. `racunalo` — a desktop computer with keyboard and mouse
12. `olovka` — a single yellow pencil
13. `mobitel` — a smartphone with a colourful home screen of blank app icons
14. `pjesice` — two walking feet with motion lines on a path (on foot)
15. `stanica` — SKIP — already in Batch 5 (`stanica`, the bus-stop shelter); reuse that file
16. `radnik` — a workman in overalls and a hard hat carrying a toolbox
17. `radnica` — a workwoman in overalls and a hard hat carrying a toolbox
18. `prodavac` — a male shop assistant behind a counter handing over a paper bag
19. `prodavacica` — a female shop assistant behind a counter handing over a paper bag
20. `vozac` — a man at a car steering wheel, seen through the windscreen, waving
21. `vozacica` — a woman at a car steering wheel, seen through the windscreen, waving
22. `programer` — a man at dual monitors showing colourful abstract code blocks (no letters)
23. `programerica` — a woman at dual monitors showing colourful abstract code blocks (no letters)
24. `zaradivati` — a person at a workbench with a small stack of coins growing beside them
25. `placa` — an envelope with coins and plain banknotes peeking out
26. `ispit` — a desk with an exam paper of squiggle lines, a pencil and a ticking clock
27. `predavanje` — a lecturer at a podium before seated students, wordless slide behind them
28. `zadatak` — a clipboard checklist with squiggle lines, two boxes ticked
29. `knjiznica` — tall library shelves full of books with a reading lamp
30. `studirati` — a student at a library desk with a stack of books and a graduation cap hanging nearby
31. `poloziti` — a student jumping for joy holding a paper with a big green checkmark
32. `zivotopis` — a CV page with a photo box and wordless squiggle lines
33. `razgovor-za-posao` — two people in an interview across a desk, one holding a squiggle-lined page
34. `iskustvo` — a confident person with a few grey streaks in front of a wall of framed wordless certificates
35. `prilika` — an open door with bright light and a shining star visible through it (opportunity)
36. `zaposliti-se` — a handshake across a desk over a squiggle-lined contract
37. `javiti-se` — a person making the "call me" hand gesture (thumb and pinky) with a small phone beside them

---

# Batch 13 — Unit 13 vocab (nature, seasons, comparatives) — 38 words

Adjective pairs are single objects that embody the quality. Seasons are scenes.

1. `priroda` — a green valley with trees, a river and mountains
2. `planina` — a single snow-capped mountain peak
3. `rijeka` — a winding blue river through green banks
4. `jezero` — a calm turquoise lake ringed by pine trees
5. `suma` — a dense green forest with a path leading in
6. `polje` — a green field with neat rows of crops
7. `zivotinja` — a dog, a cat and a rabbit sitting together in a row (animals)
8. `konj` — a chestnut horse standing in a meadow
9. `krava` — a black-and-white cow in a pasture
10. `ovca` — a fluffy white sheep
11. `medvjed` — a friendly brown bear standing in a forest
12. `nekoliko` — an open hand holding three cherries (a few)
13. `proljece` — a blossoming branch with fresh green leaves and a small bird
14. `jesen` — an autumn tree with orange leaves falling
15. `zima` — a snowy landscape with a snowman
16. `godisnjedoba` — a circle of four mini-scenes: blossom, bright sun, falling leaf, snowflake
17. `topao` — a folded knitted sweater radiating gentle warmth lines
18. `hladan` — a frosty glass of water with ice cubes and frost sparkles
19. `vruc` — a steaming mug glowing red with wavy heat lines
20. `svjez` — a crisp green leaf with dewdrops and a light breeze line
21. `ljeti` — a blazing sun over a beach with flip-flops in the sand (in summer)
22. `zimi` — a pair of mittens and a steaming mug against falling snow (in winter)
23. `dubok` — a cutaway of a deep well with a long rope going far down
24. `dug` — a very long striped scarf trailing across the whole frame
25. `kratak` — a tiny stubby pencil with lots of empty space around it
26. `brz` — a rabbit sprinting with speed lines
27. `spor` — a snail inching along
28. `sirok` — a very wide river spanning the whole frame between tiny banks
29. `drvo` — a single leafy green tree
30. `cvijet` — a single bright daisy
31. `trava` — a tuft of green grass, close-up
32. `nebo` — looking straight up at a blue sky framed by treetops
33. `zrak` — a person on a mountain meadow breathing deeply, gentle transparent swirls around them
34. `kamen` — a smooth grey stone
35. `pogled` — a scenic overlook railing with a vista of a lake and mountains beyond
36. `predivan` — a breathtaking waterfall with a rainbow
37. `mjesto` — a glowing red map pin standing on a small patch of grass (a place)
38. `vise` — two stacks of coins, the right one taller with an up arrow (more)

---

# Batch 14 — Unit 14 vocab (celebrations, months, imperative) — 47 words

Months are a strip of twelve calendar cells with the right cell highlighted plus
a tiny season icon — same device as the Batch 6 week-strips, no text.

1. `proslava` — a festive room with balloons, streamers and a table of treats
2. `slaviti` — people tossing confetti and raising juice glasses around a cake
3. `dragi` — an envelope sealed with a red heart sticker (dear…)
4. `momak` — a friendly young man giving a thumbs up
5. `drustvo` — a group of friends laughing around a café table
6. `gospodica` — a cheerful young woman in a sundress waving politely
7. `pozvati` — a hand holding out a squiggle-lined invitation card to another person
8. `donijeti` — a person arriving at a door carrying a covered dish
9. `otvoriti` — hands lifting the lid off a gift box with light spilling out
10. `glazba` — colourful music notes flowing from a speaker
11. `balon` — a bunch of colourful balloons
12. `ukras` — a paper garland and hanging streamers
13. `torta` — a tall three-layer cream cake with strawberries, no candles
14. `secer` — a bowl of white sugar with a few cubes
15. `brasno` — an open paper sack of flour with a scoop and a little puff of dust, no label
16. `jaje` — one whole brown egg beside one cracked open showing the yolk
17. `dodati` — a hand sprinkling sugar into a mixing bowl
18. `mijesati` — a hand stirring batter in a bowl with a wooden spoon
19. `staviti` — hands sliding a cake pan into an oven
20. `pecnica` — a kitchen oven with a window showing a rising cake
21. `sijecanj` — a twelve-cell strip with the 1st cell highlighted, tiny snowflake
22. `veljaca` — a twelve-cell strip with the 2nd cell highlighted, tiny red heart
23. `ozujak` — a twelve-cell strip with the 3rd cell highlighted, tiny green sprout
24. `travanj` — a twelve-cell strip with the 4th cell highlighted, tiny umbrella with raindrops
25. `svibanj` — a twelve-cell strip with the 5th cell highlighted, tiny blossom
26. `lipanj` — a twelve-cell strip with the 6th cell highlighted, tiny sun
27. `srpanj` — a twelve-cell strip with the 7th cell highlighted, tiny beach ball
28. `kolovoz` — a twelve-cell strip with the 8th cell highlighted, tiny wheat sheaf
29. `rujan` — a twelve-cell strip with the 9th cell highlighted, tiny falling orange leaf
30. `listopad` — a twelve-cell strip with the 10th cell highlighted, tiny bare branch with one leaf
31. `studeni` — a twelve-cell strip with the 11th cell highlighted, tiny grey cloud with fog lines
32. `prosinac` — a twelve-cell strip with the 12th cell highlighted, tiny decorated tree
33. `mjesec` — a wall calendar showing one month grid of blank cells
34. `bozic` — a decorated Christmas tree with wrapped presents beneath
35. `uskrs` — painted eggs in a basket with spring flowers
36. `novagodina` — fireworks bursting over a clock striking midnight
37. `blagdan` — a calendar with one day marked by a small star and confetti around it
38. `datum` — a calendar page with one blank cell circled in red
39. `svijeca` — a single lit candle
40. `cestitka` — a greeting card standing open with a heart and confetti drawn inside, no words
41. `cestitati` — a person shaking hands with a graduate and handing them flowers
42. `pozivnica` — an invitation card with little balloons drawn on it, no words
43. `zelja` — a person blowing out birthday candles with eyes closed, one small star above
44. `sreca` — a four-leaf clover with sparkles
45. `zivjeli` — SKIP — already in Batch 4 (`zivjeli`, the clinking mugs); reuse that file
46. `iznenadenje` — a person bursting out of a giant gift box with confetti flying
47. `veseo` — a beaming person clicking their heels mid-skip

---

# Batch 15 — Unit 15 vocab (phones, e-mail, clitics) — 32 words

Screens show wordless chat bubbles / blank icons; symbols (arrows, hearts,
checkmarks, question marks) are allowed, letters are not.

1. `poziv` — a ringing phone with sound arcs coming off it
2. `poruka` — a phone screen with two wordless chat bubbles
3. `nazvati` — a finger tapping a green handset icon on a phone
4. `zvati` — a person holding a phone to their ear with a small speech bubble
5. `cuti` — a hand cupped behind an ear with sound waves arriving
6. `primiti` — a phone with an incoming envelope icon and a little chime spark
7. `vidjeti` — wide-open friendly eyes with a bright sparkle of noticing
8. `odgovoriti` — two chat bubbles with an arrow curving from the right one back to the left
9. `odgovor` — a single reply chat bubble with a checkmark inside
10. `pitanje` — a big friendly question mark inside a speech bubble
11. `vijest` — a folded newspaper with squiggle headlines beside a small megaphone
12. `slika` — a framed photo of a simple landscape
13. `ostaviti` — a squiggle-lined sticky note being left on a fridge door
14. `halo` — a person answering a ringing phone with raised eyebrows and a small question spark
15. `postovani` — a formal letter with an elegant red wax seal
16. `pozdrav` — a postcard with a small waving hand drawn on it
17. `potpis` — a fountain pen finishing a flourished signature squiggle
18. `hitno` — a red siren light above an envelope with speed lines
19. `zauzet` — a person at a desk buried in papers, palm raised in a "not now" gesture
20. `email` — a laptop screen with an open envelope icon and a send arrow
21. `veza` — two puzzle pieces joining with a bright spark between them (connection)
22. `objava` — a phone screen showing a photo post with a heart icon under it
23. `pratiti` — a phone screen with a friendly profile picture and a green checkmark button beneath it (follow)
24. `dopisivatise` — two phones facing each other with chat bubbles flying between them
25. `videopoziv` — a laptop screen showing a smiling face in a video-call window
26. `dijeliti` — a photo passing from one phone to another along an arrow
27. `internet` — a globe wrapped in a glowing network of connected dots
28. `mreza` — connected glowing dots forming a web pattern
29. `lozinka` — a padlock above a screen field showing a row of dots
30. `stranica` — a browser window with squiggle text and one picture block
31. `aplikacija` — a phone home screen with one big colourful app icon glowing
32. `objaviti` — a finger tapping a big up-arrow send button, the post flying upward off the screen

---

# Batch 16 — Unit 16 vocab (aspect, biography) — 32 words

Perfective verbs are DONE-ness scenes: the finished thing plus a laid-down tool
and/or a checkmark. Life stages are literal.

1. `napisati` — a finished letter with the pen laid down beside it and a big checkmark
2. `procitati` — a closed book with a bookmark at the very last page and a checkmark
3. `pogledati` — a person leaning in for one quick look at a framed picture, single motion arc
4. `napraviti` — a finished birdhouse with the tools laid down beside it and a checkmark
5. `popiti` — an upturned empty glass with one last drop and a checkmark
6. `pojesti` — an empty plate with crumbs and a fork laid down across it
7. `nauciti` — a steady bright lightbulb above a closed notebook with a checkmark
8. `poceti` — a sprinter exploding off the starting blocks
9. `roditise` — a swaddled newborn baby with a tiny blank hospital tag
10. `odrasti` — a wall height chart with marks from small to tall and a grown person at the top mark
11. `djetinjstvo` — a teddy bear, building blocks and a paper boat together
12. `mladost` — a teenager on a skateboard with a backpack
13. `upoznati` — two people shaking hands for the first time, both wearing blank name-tag stickers
14. `promijeniti` — an arrow curving from an old worn chair to a bright new chair
15. `odluciti` — a person at a fork in the road already striding boldly down the chosen path
16. `buducnost` — a road stretching toward a bright sunrise horizon with a forward arrow
17. `cilj` — an archery target with an arrow in the bullseye
18. `san2` — a person gazing at a thought bubble containing a little house by the sea (a dream)
19. `nadatise` — a person with hands clasped hopefully, looking up at a small star
20. `uspjeti` — a climber planting a flag on a mountain summit
21. `zivot` — a footpath winding from a small house through fields toward sunny mountains
22. `vjencanje` — a bride and groom under an arch of flowers
23. `vjencatise` — two hands exchanging rings, close-up
24. `zavrsiti` — a person breaking through a finish-line ribbon with arms raised
25. `uspjeh` — a gold trophy cup with sparkles
26. `brak` — two gold rings interlinked
27. `prica` — an open storybook with a tiny scene popping up from the pages
28. `pocetak` — a green flag planted at the very start of a long winding road
29. `kraj` — a hand placing the final piece into a nearly finished jigsaw puzzle
30. `sjecatise` — a person gazing at a thought bubble holding a faded old photo
31. `proslost` — a sepia-toned framed family photo with an arrow curving back
32. `sadasnjost` — a person standing happily inside a big glowing map pin (the here-and-now)
