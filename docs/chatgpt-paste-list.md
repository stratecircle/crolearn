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
