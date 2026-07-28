# CroLearn vocab art — 2×2 grid batch plan

Every generation produces ONE image containing four illustrations, which
`scripts/split_grid.py` cuts into four 512×512 cream-backed jpgs.

## Prompt template

```
Generate an image. A 2x2 grid of four separate flat cartoon vector illustrations
sharing one completely plain flat cream #F5F0E6 background. No dividing lines,
no borders, no frames, no text, no letters, no labels. All four drawn in the
identical style: thick clean outlines, bright saturated colors, simple shapes,
soft cel shading. Each object is centered inside its own quadrant with generous
empty margin, roughly equal size, nothing touching or overlapping between
quadrants. Top-left: <TL>. Top-right: <TR>. Bottom-left: <BL>.
Bottom-right: <BR>. Square composition.
```

For grids containing numerals (ordinals, prices, clock times) append:
`Numerals are allowed; no words.`

Split command:
`python scripts/split_grid.py public\img\ai-generated\_gridNN.jpg <tl> <tr> <bl> <br>`

---

## a1u5 — places, directions, transport (48 words, 12 grids)

### g01 — DONE
trg | a town square with a stone fountain
muzej | a museum building with tall columns
crkva | a church with a steeple and a cross
posta | a post office building with a yellow envelope emblem

### g02 — generated, capture pending
banka | a bank building with columns and a gold coin emblem
park | a park with a green tree, a wooden bench and a lamppost
centar | a cluster of tall city center buildings
kino | a cinema building with a marquee and a film reel

### g03
kolodvor | a train station building with a train at the platform
zracnaluka | an airport control tower with an airplane beside it
kazaliste | a theatre stage with red curtains and comedy and tragedy masks
hotel | a hotel building with a bellhop luggage cart out front

### g04
zgrada | a tall apartment building
stan | a cutaway apartment interior with a sofa, a lamp and a rug
most | a stone arch bridge over blue water
fakultet | a university building with a graduation cap floating above it

### g05
tramvaj | a blue and white city tram
autobus | a city bus seen from the front three-quarter angle
stanica | a bus stop with a shelter, a bench and a blank sign post
posao | a brown briefcase standing in front of an office tower

### g06
lijevo | a large bold arrow pointing left
desno | a large bold arrow pointing right
ravno | a large bold arrow pointing straight ahead and upward
skrenite | a road that bends sharply to the right with a curved arrow following it

### g07
gdje | a large question mark floating above a red map pin
kamo | a red map pin with a long curved arrow travelling toward it
ovdje | a red map pin planted on a spot with concentric rings around it
tamo | a hand pointing into the distance at a small far away map pin

### g08
blizu | two map pins side by side very close with a short double arrow between them
daleko | two map pins far apart with a long double arrow between them
ici | a person walking forward with motion lines behind them
idite | a walking person figure inside a green circle with an arrow ahead

### g09 — Numerals are allowed; no words.
prvi | a gold first place medal on a ribbon showing the digit 1
drugi | a silver medal on a ribbon showing the digit 2
treci | a bronze medal on a ribbon showing the digit 3
cetvrti | a round elevator button showing the digit 4

### g10 — Numerals are allowed; no words.
peti | a round elevator button showing the digit 5
sesti | a round elevator button showing the digit 6
sedmi | a round elevator button showing the digit 7
osmi | a round elevator button showing the digit 8

### g11 — Numerals are allowed; no words.
deveti | a round elevator button showing the digit 9
deseti | a round elevator button showing the digits 10
kat | a cutaway building showing three stacked floors with the middle one highlighted
prizemlje | a building with the ground floor level highlighted in bright yellow

### g12
adresa | an envelope with squiggly address lines and a red location pin on it
zivjeti | a person standing happily in the doorway of a small house
ulica | a city street with buildings on both sides and a crosswalk
koncert | a stage with a microphone stand, a guitar and colorful stage lights

---

## a1u6 — daily routine, time, weekdays, media (50 words, 13 grids)

### g13
buditise | a person in bed waking up and stretching with an alarm clock ringing
ustajati | a person getting out of bed and standing up
tusiratise | a person showering under a shower head with water drops
oblacitise | a person pulling on a shirt while getting dressed

### g14
odmaratise | a person relaxing on a sofa with their feet up
icispavati | a person walking toward a bed in pyjamas holding a candle
spavati | a person asleep in bed with sleep bubbles above them
zatim | two arrows in sequence, one leading into the next

### g15 — Numerals are allowed; no words.
rano | a sunrise with a clock showing an early morning time
kasno | a night sky with a moon and a clock showing a late time
sat | a round wall clock
minuta | a clock face with the minute hand highlighted in red

### g16 — Numerals are allowed; no words.
pola | a clock face showing half past the hour with the half highlighted
podne | a clock showing twelve with a bright sun above it
ponoc | a clock showing twelve with a moon and stars above it
vrijeme | an hourglass with sand running through it

### g17
ujutro | a sun rising over a horizon with a coffee cup
prijepodne | a sun climbing in a clear sky
popodne | a bright sun high overhead casting a short shadow
navecer | a sunset with an orange sky and a lit street lamp

### g18
film | a film clapperboard with a strip of film beside it
knjiga | an open book with colorful pages
pjesma | a musical note with sound waves around it
zadaca | a notebook with a pencil and a checked homework page

### g19
vijesti | a television screen showing a news presenter at a desk
sport | a football, a tennis racket and a running shoe together
serija | a television with a play button on the screen
slusati | a person wearing headphones with music notes floating around

### g20
uciti | a student at a desk reading a book with a lightbulb above their head
ponedjeljak | a calendar page with the first day square circled in red
utorak | a calendar page with the second day square circled in orange
srijeda | a calendar page with the third day square circled in yellow

### g21
cetvrtak | a calendar page with the fourth day square circled in green
petak | a calendar page with the fifth day square circled in blue
subota | a calendar page with the sixth day square circled in purple
nedjelja | a calendar page with the seventh day square circled in pink

### g22
uvijek | a filled circle completely coloured in green with a check mark
cesto | a row of five dots with four of them filled in
ponekad | a row of five dots with two of them filled in
rijetko | a row of five dots with one of them filled in

### g23
nikad | a circle with a red diagonal slash through it
svakidan | a calendar with every square marked with a small check
tjedan | a calendar week strip of seven squares in a row
doruckovati | a person eating breakfast at a small table with a coffee cup

### g24
pocinjati | a green flag waving at a starting line
zavrsavati | a checkered finish line flag
obicno | a row of five dots with four filled and a small clock beside it
prvo | a signpost with a single arrow pointing forward and one dot filled

### g25
onda | a signpost with a second arrow following the first
nakraju | a finish line ribbon being broken by a runner
_extra_ | -
_extra_ | -

---

## a1u7 — shopping, money, colors, clothes (52 words, 13 grids)

### g26
casa | an empty drinking glass
boca | a glass bottle with a cork
salica | a ceramic cup on a saucer
kilogram | a kitchen scale with a weight on it

### g27
litra | a measuring jug filled with liquid
komad | a single slice cut away from a round pie
puno | a basket overflowing with fruit
dosta | a hand held up flat in a stop gesture beside a half full basket

### g28
previse | a shopping bag bursting open with items spilling out
trgovina | a small shop building with an awning and a window display
trznica | a market stall with crates of vegetables under a striped canopy
pekarnica | a bakery shop front with bread and pastries in the window

### g29
nema | an empty shelf with a red circle slash over it
novac | a stack of coins beside folded banknotes
cijena | a blank price tag on a string
kostati | a hand holding a coin above a price tag

### g30 — Numerals are allowed; no words.
euro | a gold euro coin
cent | a small copper cent coin
platiti | a hand passing a banknote to another hand
jeftin | a price tag with a downward green arrow on it

### g31
skup | a price tag with an upward red arrow on it
crven | a solid red paint blob with a red apple beside it
plav | a solid blue paint blob with a blue ball beside it
zelen | a solid green paint blob with a green leaf beside it

### g32
zut | a solid yellow paint blob with a yellow lemon beside it
crn | a solid black paint blob with a black cat silhouette beside it
bijel | a solid white paint blob with a white cloud beside it
majica | a short sleeved t-shirt

### g33
hlace | a pair of blue trousers
cipele | a pair of brown leather shoes
jakna | a zipped up winter jacket
haljina | a red dress on a hanger

### g34
kosulja | a buttoned collared shirt
velicina | three t-shirts side by side, small, medium and large
nositi | a person wearing a coat and a scarf
probati | a person trying on a jacket in front of a mirror

### g35
kupovati | a person pushing a shopping cart full of goods
traziti | a person looking through clothes on a rack with a magnifying glass
dvadeset | two bundles of ten coins stacked together
trideset | three bundles of ten coins stacked together

### g36 — Numerals are allowed; no words.
cetrdeset | a price tag showing the number 40
pedeset | a price tag showing the number 50
sezdeset | a price tag showing the number 60
sedamdeset | a price tag showing the number 70

### g37 — Numerals are allowed; no words.
osamdeset | a price tag showing the number 80
devedeset | a price tag showing the number 90
sto | a banknote showing the number 100
tisuca | a thick stack of banknotes showing the number 1000

---

## a1u8 — past time, leisure, weather (41 words, 11 grids)

### g38
jucer | a calendar with yesterday's square circled and an arrow pointing back
danas | a calendar with today's square circled in bright red
sutra | a calendar with tomorrow's square circled and an arrow pointing forward
vikend | a calendar with the last two squares of the week highlighted

### g39
sinoc | a night scene with a moon and a clock, an arrow pointing backward
vec | a check mark inside a speech bubble with a small clock
proslitjedan | a calendar week strip with a backward arrow over it
proslegodine | a yearly calendar with a large backward arrow over it

### g40
putovati | a rolling suitcase with an airplane flying above it
posjetiti | a person knocking at a friend's front door with flowers
setati | a person strolling along a path with a dog
plesati | two people dancing together

### g41
pjevati | a person singing into a microphone with music notes
citati | a person reading an open book
pisati | a hand writing with a pen in a notebook
kupiti | a hand holding a shopping bag with a receipt

### g42
igrati | two children playing with a ball
nogomet | a black and white football
utakmica | a football pitch seen from above with a scoreboard
izlet | a backpack, a map and hiking boots together

### g43
rodendan | a birthday cake with lit candles
zabava | colorful balloons, confetti and a party hat
gost | a person arriving at a door holding a gift
sunce | a bright smiling sun

### g44
kisa | a grey cloud with rain drops falling
snijeg | a cloud with snowflakes falling
vjetar | a swirl of wind lines bending a small tree
oblak | a fluffy white cloud

### g45
suncano | a bright sun in a clear blue sky
oblacno | several grey clouds covering the sky
toplo | a thermometer showing a warm level with a small sun
hladno | a thermometer showing a low level with a snowflake

### g46
vruce | a thermometer bursting at the top with a blazing sun
padati | rain drops falling with downward motion arrows
krasno | a bright sun over a rainbow with sparkles
grozno | a dark storm cloud with lightning and rain

### g47
dosadno | a person slumped at a desk yawning with a droopy cloud above
zanimljivo | a person leaning forward wide eyed with a lightbulb above
zabavno | a person laughing joyfully with confetti around them
cijelidan | a sun arcing across the sky from sunrise to sunset

---

## a2u9 — travel (36 words, 9 grids)

### g48
putovanje | a rolling suitcase with a globe and an airplane above it
put | a winding road going toward the horizon
plan | a clipboard with a checklist and a pencil
planirati | a hand marking dates on a wall calendar

### g49
otok | a small tropical island with a palm tree in blue water
plaza | a sandy beach with a striped umbrella and a beach ball
karta | a paper travel ticket with a torn stub
povratnakarta | two paper tickets with a circular double arrow around them

### g50
rezervirati | a hand pressing a booking button on a screen with a calendar
rezervacija | a booking confirmation card with a green check mark
polazak | a train leaving a platform with a forward arrow
dolazak | a train arriving at a platform with an arrow pointing in

### g51
sjedalo | a padded travel seat with a headrest
redvoznje | a departures board panel with blank rows and a clock
granica | a striped border barrier gate across a road
putovnica | a burgundy passport booklet

### g52
prtljaga | a stack of suitcases and travel bags
kovceg | a hard shell rolling suitcase
ruksak | a blue backpack with straps
carina | a customs inspection desk with an open suitcase on it

### g53
obala | a rocky coastline meeting blue sea
kod | a red map pin sitting right beside a small house
bez | an empty circle with a red diagonal slash through it
vlak | a green and yellow passenger train

### g54
avion | a white passenger airplane
let | an airplane flying along a dotted curved flight path
letjeti | an airplane taking off steeply with motion lines
recepcija | a hotel reception desk with a service bell

### g55
soba | a hotel room with a bed, a lamp and a window
kljuc | a golden hotel key with a tag
odmor | a beach lounge chair under a palm tree with sunglasses
spakirati | an open suitcase with folded clothes being placed inside

### g56
krenuti | a person setting off with a suitcase and a forward arrow
stici | a person arriving at a destination flag
vodic | a tour guide holding a small flag and a map
veceras | an evening city skyline with a moon and a clock

---

## a2u10 — home, furniture, neighbours (39 words, 10 grids)

### g57
susjed | a friendly man waving over a garden fence
susjeda | a friendly woman waving over a garden fence
poklon | a wrapped gift box with a ribbon
pismo | a sealed letter envelope with a stamp

### g58
davati | a hand passing a small box to another hand
pomagati | one person helping another carry a heavy box
poslati | an envelope flying toward a mailbox with motion lines
pokazati | a hand pointing at a picture on a board

### g59
svidatise | a red heart floating above a smiling face
ulaz | a doorway with a bold arrow pointing inward
dizalo | an elevator with open doors and up and down arrows
prozor | a window with curtains and a view of sky

### g60
vrata | a closed wooden door with a handle
balkon | a small balcony with a railing and potted plants
cistiti | a hand wiping a surface with a cloth and sparkles
pospremati | a tidy shelf with items neatly arranged and a hand placing one

### g61
prati | a washing machine with soap bubbles
sude | a stack of clean plates with a bowl and a cup
rublje | laundry hanging on a clothesline
smece | a garbage bin with a full bag beside it

### g62
pod | a wooden plank floor seen in perspective
kuhinja | a kitchen with a counter, a stove and cupboards
stanovati | a person standing in front of an apartment building holding a key
iznajmiti | a house with a for rent sign board and a key

### g63
najam | a rental agreement paper with a key lying on it
stanarina | a hand placing banknotes beside a small house
cimer | two young men sharing an apartment sofa
cimerica | two young women sharing an apartment sofa

### g64
vlasnik | a person holding a large key in front of a house
preselitise | a moving truck with cardboard boxes
kupaonica | a bathroom with a bathtub, a sink and a mirror
spavacasoba | a bedroom with a bed, a nightstand and a lamp

### g65
dnevniboravak | a living room with a sofa, a coffee table and a television
hodnik | a hallway with doors on both sides in perspective
namjestaj | a sofa, a table and a chair grouped together
krevet | a single bed with a pillow and a blanket

### g66
ormar | a wooden wardrobe with the doors slightly open
stol | a wooden dining table
stolica | a simple wooden chair
ja | a smiling person pointing at their own chest with a thumb

---

## a2u11 — body, health (39 words, 10 grids)

### g67
glava | a cartoon human head in profile
ruka | a human arm and hand
noga | a human leg and foot
oko | a large cartoon eye

### g68
uho | a human ear
zub | a white tooth with a sparkle
grlo | a throat outline with a red sore spot
trbuh | a rounded belly outline on a torso

### g69
leda | a person's back seen from behind
srce | a red cartoon heart
boljeti | a person wincing with red pain lines at their shoulder
morati | a finger pointing sternly beside an exclamation mark

### g70
moci | a flexed strong arm with a green check mark
smjeti | a green circle with a check mark beside an open gate
trebati | an empty hand reaching toward a needed item
lezati | a person lying down on a bed resting

### g71
ostati | a seated person with an anchor beside them
bolestan | a person in bed with a thermometer and a sad face
zdrav | a smiling person with a green check mark and an apple
prehlada | a person sneezing into a tissue with a red nose

### g72
kasalj | a person coughing with sound lines from their mouth
temperatura | a thermometer showing a high red level
glavobolja | a person holding their head with jagged pain lines
muka | a person with a green tinted queasy face holding their stomach

### g73
slab | a thin drooping arm with a downward arrow
pomoc | a red cross inside a circle with helping hands
ljekarna | a pharmacy shop front with a green cross sign
lijek | a bottle of medicine with pills beside it

### g74
recept | a prescription slip with a pen
pregled | a doctor with a stethoscope examining a patient
cekaonica | a row of waiting room chairs with a plant
tableta | two round pills beside a blister pack

### g75
zdravlje | a heart with a pulse line and a green leaf
vjezbati | a person lifting a dumbbell
trcati | a person running with motion lines
hodati | a person walking calmly along a path

### g76
san | a person asleep with a dream cloud above them
dovoljno | a measuring cup filled exactly to a marked line with a check
brinutise | a person with a worried face and a swirl above their head
ti | a hand pointing forward at the viewer

---

## a2u12 — work, office, study (36 grids-worth; `stanica` reuses a1u5)

### g77
ured | an office room with a desk, a chair and a computer
tvrtka | an office tower with a blank sign board
kolega | a man in office clothes holding a folder
kolegica | a woman in office clothes holding a folder

### g78
sef | a man in a suit sitting at a big desk
sefica | a woman in a suit sitting at a big desk
sastanak | a meeting table with chairs and a presentation board
tim | four people standing together in a group

### g79
zajedno | three hands stacked together in a team gesture
bicikl | a city bicycle
racunalo | a desktop computer with a monitor and a keyboard
olovka | a yellow pencil

### g80
mobitel | a smartphone
pjesice | a pair of walking legs with footprints behind them
radnik | a workman in overalls with a toolbox
radnica | a workwoman in overalls with a toolbox

### g81
prodavac | a male shop assistant behind a counter
prodavacica | a female shop assistant behind a counter
vozac | a man driving a car seen from the front
vozacica | a woman driving a car seen from the front

### g82
programer | a man at a laptop with code brackets floating above
programerica | a woman at a laptop with code brackets floating above
zaradivati | a hand receiving coins with an upward arrow
placa | a pay envelope stuffed with banknotes

### g83
ispit | an exam paper with a pencil and a clock
predavanje | a lecture hall with a speaker at a podium
zadatak | a checklist with one task being ticked off
knjiznica | library shelves full of books

### g84
studirati | a student at a desk surrounded by open books
polozitiispit | an exam paper with a large green check mark
zivotopis | a resume document with a small photo and ruled lines
razgovorzaposao | two people facing each other across a desk in an interview

### g85
iskustvo | a rising bar chart with a star above it
prilika | an open door with bright light coming through it
zaposlitise | a hand shaking another hand beside an office building
javitise | a person raising their hand with a speech bubble

---

## a2u13 — nature, seasons, adjectives (38 words, 10 grids)

### g86
priroda | rolling green hills with trees and a sun
planina | a snow capped mountain peak
rijeka | a winding blue river between green banks
jezero | a calm blue lake surrounded by trees

### g87
suma | a dense group of green trees
polje | a wide flat field of golden wheat
zivotinja | a friendly generic four legged animal
konj | a brown horse standing

### g88
krava | a black and white cow
ovca | a fluffy white sheep
medvjed | a brown bear standing
nekoliko | three small filled dots grouped together beside many faded ones

### g89
proljece | a tree covered in pink blossoms with flowers below
jesen | a tree with orange and red leaves falling
zima | a bare tree covered in snow
godisnjedoba | a circle divided into four seasonal quarters with a tree in each

### g90
topao | a thermometer at a pleasant warm level with a small sun
hladan | a thermometer at a low level with a snowflake
vruc | a thermometer at the top with a blazing sun and heat waves
svjez | a green leaf with dew drops and a cool breeze swirl

### g91
ljeti | a bright summer sun over a beach umbrella
zimi | a snowy scene with a snowman
dubok | a cross section of deep water with a long downward arrow
dug | a long straight line with arrows at both far ends

### g92
kratak | a very short line with arrows at both close ends
brz | a running rabbit with speed lines
spor | a slow snail with a trail behind it
sirok | a wide rectangle with arrows pointing outward left and right

### g93
drvo | a single leafy green tree
cvijet | a single bright flower with a stem and leaves
trava | a patch of green grass blades
nebo | a blue sky with a few white clouds

### g94
zrak | swirling transparent breeze lines with small white puffs
kamen | a grey rounded stone
pogled | a scenic viewpoint with binoculars looking toward hills
predivan | a beautiful landscape with sparkles and a rainbow

### g95
mjesto | a red map pin planted on a small patch of ground
vise | a stack of three items with an upward arrow beside a stack of one
on | a smiling man with an arrow pointing at him
ona | a smiling woman with an arrow pointing at her

---

## a2u14 — celebrations, baking, months (46 words, 12 grids)

### g96
proslava | a party scene with confetti and streamers
slaviti | people raising glasses in a toast
dragi | a red heart with a ribbon around it
momak | a young man smiling with his hands in his pockets

### g97
drustvo | a group of four friends standing together
gospodica | a young woman in a nice dress smiling
pozvati | a hand holding out an invitation card
donijeti | a person carrying a dish of food toward a table

### g98
otvoriti | hands opening a gift box with the lid lifting off
glazba | musical notes with a speaker and sound waves
balon | three colorful party balloons on strings
ukras | a paper garland with hanging decorations

### g99
torta | a layered birthday cake with frosting
secer | a bowl of white sugar with a spoon
brasno | a paper bag of flour with a scoop
jaje | two eggs, one whole and one cracked open

### g100
dodati | a hand pouring an ingredient into a mixing bowl
mijesati | a whisk stirring batter in a bowl with swirl lines
staviti | hands placing a baking tray into position
pecnica | an oven with the door closed and a warm glow inside

### g101
sijecanj | a snowy calendar page with a snowflake
veljaca | a calendar page with a red heart
ozujak | a calendar page with a green sprout
travanj | a calendar page with a rain cloud and a flower

### g102
svibanj | a calendar page with blooming flowers
lipanj | a calendar page with a bright sun
srpanj | a calendar page with a beach umbrella
kolovoz | a calendar page with an ice cream cone

### g103
rujan | a calendar page with a school backpack and a pencil
listopad | a calendar page with falling orange leaves
studeni | a calendar page with a bare tree and wind lines
prosinac | a calendar page with a decorated fir tree

### g104
mjesec | a wall calendar showing one full month grid
bozic | a decorated Christmas tree with wrapped gifts
uskrs | a decorated Easter egg beside a bunny
novagodina | fireworks bursting over a clock showing midnight

### g105
blagdan | a festive wreath with a ribbon
datum | a calendar page with one square circled in red
svijeca | a lit candle with a warm flame
cestitka | an open greeting card with a heart on it

### g106
cestitati | two hands clapping with sparkles
pozivnica | an invitation card with a decorative border
zelja | a person blowing out a candle with a wish sparkle
sreca | a smiling face with a four leaf clover

### g107
iznenadenje | a gift box popping open with confetti bursting out
veseo | a joyful jumping person with their arms raised
mi | a group of three people standing together waving
oni | a group of three people with an arrow pointing at them

---

## a2u15 — communication, internet (32 words, 8 grids)

### g108
poziv | a ringing phone with sound waves
poruka | a chat message bubble on a phone screen
nazvati | a hand dialing a phone
zvati | a person calling out with a speech bubble and a phone

### g109
cuti | an ear with sound waves coming into it
primiti | an open hand receiving an envelope
vidjeti | an eye with a light beam toward an object
odgovoriti | a speech bubble with a reply arrow

### g110
odgovor | a speech bubble with a check mark inside
pitanje | a speech bubble with a question mark inside
vijest | a rolled newspaper with a megaphone
slika | a framed photograph of a mountain scene

### g111
ostaviti | a note being left on a table with a pen
halo | a phone held up with a greeting speech bubble
postovani | a formal letter with a fountain pen
pozdrav | a waving hand with a friendly speech bubble

### g112
potpis | a signature squiggle on a line with a pen
hitno | a red exclamation mark with a flashing alarm
zauzet | a red busy status circle with a clock
email | an envelope with an at symbol on it

### g113
veza | two chain links joined together
objava | a card pinned on a board with a megaphone
pratiti | a person icon with a plus sign and a following arrow
dopisivatise | two chat bubbles going back and forth

### g114
videopoziv | a laptop screen showing a person on a video call
dijeliti | a share arrow branching to two circles
internet | a globe with orbiting connection lines
mreza | connected dots forming a network web

### g115
lozinka | a padlock with round dots above it
stranica | a browser window with a page layout
aplikacija | a rounded app icon tile on a phone screen
objaviti | a hand pressing a publish button with an upward arrow

---

## a2u16 — life story verbs (31 words + filler, 8 grids; `san` reuses a2u11)

### g116
napisati | a hand finishing writing on a page with a check mark
procitati | a closed book with a check mark and reading glasses
pogledati | an eye watching a screen
napraviti | a hammer beside a finished built object with a check mark

### g117
popiti | an empty glass with a straw and a check mark
pojesti | an empty plate with a fork and knife and a check mark
nauciti | a graduation cap above an open book with a lightbulb
poceti | a green start button being pressed

### g118
roditise | a baby wrapped in a blanket with a small star
odrasti | three figures growing from small to tall
djetinjstvo | a child playing with a toy ball and building blocks
mladost | a teenager with a backpack and headphones

### g119
upoznati | two people shaking hands and smiling
promijeniti | two circular arrows swapping two objects
odluciti | a person at a fork in the road choosing one path
buducnost | a road leading toward a bright horizon with a rising sun

### g120
cilj | a target with an arrow in the bullseye
nadatise | two hands clasped with a small glowing star
uspjeti | a person reaching a mountain summit with their arms raised
zivot | a green tree with a heart and a pulse line

### g121
vjencanje | a wedding arch with flowers and two rings
vjencatise | a bride and groom holding hands
zavrsiti | a checkered flag with a check mark
uspjeh | a gold trophy with sparkles

### g122
brak | two interlocking gold wedding rings
prica | an open storybook with a small castle rising from the pages
pocetak | a green flag at a starting line
kraj | a red stop sign at the end of a path

### g123
sjecatise | a person with a thought bubble showing an old photograph
proslost | an old sepia photo with a backward arrow
sadasnjost | a clock showing the present time with a bright highlight ring
vi | two people being pointed at by a hand

---

## a1u1 + a1u3 backfill — greetings, pronouns, possessives (35 words, 9 grids)

### g124
da | a green circle with a large white check mark beside a nodding smiling face
ne | a red circle with a white cross beside a head shaking face
i | a plus sign joining two small shapes together
dobro | a hand giving a thumbs up beside a smiling face

### g125
cao | a hand waving hello with a friendly speech bubble
bok | two people waving at each other
dovidenja | a person waving goodbye as they walk away
lakunoc | a moon with stars and a sleeping cap

### g126
hvala | two hands pressed together in thanks with a small heart
molim | an open palm held out politely with a small sparkle
oprostite | a person with a raised hand and an apologetic expression
izvolite | a hand offering a cup forward

### g127
vidimose | two people waving with a clock and a forward arrow
dobrodosli | an open door with a welcome mat and a small banner
odlicno | a gold star with sparkles and a thumbs up
lose | a thumbs down beside a frowning face

### g128
moze | a green circle with a check mark and an open hand gesture
kako | a large question mark above a gear
tko | a large question mark inside a person silhouette
sto | a large question mark inside a plain box

### g129
ime | a name tag badge with a blank ruled line on it
prijatelj | two young men with their arms around each other's shoulders
prijateljica | two young women with their arms around each other's shoulders
ono | a hand pointing at a small neutral object with a dotted outline

### g130
dragomije | two people shaking hands with warm smiles and a small heart
zovemse | a person pointing at a blank name badge on their chest
moj | a hand holding a bag close to the chest with an arrow pointing to it
tvoj | a hand offering a bag toward the viewer with an arrow

### g131
nas | a group of three people with a circle drawn around them
vas | a group of three people with an arrow pointing at them from outside
njegov | a man beside a bag with an arrow from him to the bag
njezin | a woman beside a bag with an arrow from her to the bag

### g132
njihov | a group of people beside a house with an arrow from them to the house
ciji | a bag with a large question mark above it
imati | two open hands holding a small box
_extra_ | -

---

## a1u2 backfill — nationalities, numbers, languages (47 words, 12 grids; `dvadeset` reuses a1u7)

### g133
jezik | a speech bubble with a tongue and sound waves
iz | a bold arrow leading out of an open box
ili | a fork in a path with two arrows diverging
odakle | a question mark above a globe with a curved arrow

### g134
hrvat | a smiling man holding a small red and white checkerboard flag
hrvatica | a smiling woman holding a small red and white checkerboard flag
kanadanin | a smiling man holding a small red maple leaf flag
kanadanka | a smiling woman holding a small red maple leaf flag

### g135
nijemac | a smiling man holding a small black red gold striped flag
njemica | a smiling woman holding a small black red gold striped flag
englez | a smiling man holding a small red white and blue union flag
engleskinja | a smiling woman holding a small red white and blue union flag

### g136
amerikanac | a smiling man holding a small stars and stripes flag
amerikanka | a smiling woman holding a small stars and stripes flag
ali | two arrows pointing in opposite directions meeting at a small barrier
dobar | a bright green thumbs up

### g137
los | a bright red thumbs down
nov | a shiny gift box with a sparkle burst
koliko | a question mark above a stack of coins
broj | a blank rounded card with a hash symbol

### g138 — Numerals are allowed; no words.
jedan | a bright rounded card showing the large numeral 1
dva | a bright rounded card showing the large numeral 2
tri | a bright rounded card showing the large numeral 3
cetiri | a bright rounded card showing the large numeral 4

### g139 — Numerals are allowed; no words.
pet | a bright rounded card showing the large numeral 5
sest | a bright rounded card showing the large numeral 6
sedam | a bright rounded card showing the large numeral 7
osam | a bright rounded card showing the large numeral 8

### g140 — Numerals are allowed; no words.
devet | a bright rounded card showing the large numeral 9
deset | a bright rounded card showing the large numeral 10
jedanaest | a bright rounded card showing the large numeral 11
dvanaest | a bright rounded card showing the large numeral 12

### g141 — Numerals are allowed; no words.
trinaest | a bright rounded card showing the large numeral 13
cetrnaest | a bright rounded card showing the large numeral 14
petnaest | a bright rounded card showing the large numeral 15
sesnaest | a bright rounded card showing the large numeral 16

### g142 — Numerals are allowed; no words.
sedamnaest | a bright rounded card showing the large numeral 17
osamnaest | a bright rounded card showing the large numeral 18
devetnaest | a bright rounded card showing the large numeral 19
_extra_ | -

### g143
hrvatski | an open book with a red and white checkerboard flag on the cover
engleski | an open book with a red white and blue union flag on the cover
njemacki | an open book with a black red gold flag on the cover
francuski | an open book with a blue white and red flag on the cover

### g144
govoriti | a person talking with a speech bubble and sound lines
razumijem | a person with a lightbulb above their head and a green check mark
malo | a tiny drop held between two fingers close together
jako | a flexed muscular arm with impact lines

---

## Reused files (generate once, wired twice)

- `stanica` — a1u5 g05 → also a2u12
- `san` — a2u11 g76 → also a2u16
- `dvadeset` — a1u7 g35 → also a1u2
- `njegov` — g131 → also a1u1 and a1u3
- `zivjeli` — already generated, wired in a2u14

## Deliberately skipped

- `pa` (a1u5) — pure discourse particle, not depictable
