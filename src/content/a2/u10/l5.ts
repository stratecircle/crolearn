import type { Lesson } from "@/types/content";

/**
 * A2 U10 L5 — Moj stan (my home; unit review)
 * Spec: curriculum/A2/unit-10.md · grammar-reference §3, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new grammar — rooms (LOC), furniture (NOM/ACC), sviđa mi se
 * (L2) and DAT receivers (L1) integrated. The adjective-LOC room names
 * (u spavaćoj sobi, u dnevnom boravku) are taught as fixed chunks — adjective
 * declension beyond NOM/ACC is not yet in scope. The spec's "clickable floor
 * plan" is realized as a flow diagram + TTS chips.
 */
export const a2u10l5: Lesson = {
  id: "a2u10l5",
  unitId: "a2u10",
  title: "Moj stan",
  titleEn: "My home — the grand tour & unit review",
  grammarTags: ["rooms-furniture", "dative-singular", "svidati-se"],
  estMinutes: 20,
  vocab: [
    { id: "a2u10.kupaonica", image: "/img/kupaonica.png", hr: "kupaonica", en: "bathroom", pos: "noun", gender: "f", icon: "🛁", exampleHr: "Perem rublje u kupaonici.", exampleEn: "I wash the laundry in the bathroom." },
    { id: "a2u10.spavaca-soba", image: "/img/spavacasoba.png", hr: "spavaća soba", en: "bedroom", pos: "phrase", icon: "🛏️", exampleHr: "Sviđa mi se spavaća soba.", exampleEn: "I like the bedroom." },
    { id: "a2u10.dnevni-boravak", image: "/img/dnevniboravak.png", hr: "dnevni boravak", en: "living room", pos: "phrase", icon: "🛋️", exampleHr: "U dnevnom boravku je velik stol.", exampleEn: "In the living room there's a big table." },
    { id: "a2u10.hodnik", image: "/img/hodnik.png", hr: "hodnik", en: "hallway", pos: "noun", gender: "m", icon: "🚪", exampleHr: "U hodniku je velik ormar.", exampleEn: "In the hallway there's a big wardrobe." },
    { id: "a2u10.namjestaj", image: "/img/namjestaj.png", hr: "namještaj", en: "furniture", pos: "noun", gender: "m", icon: "🪑", exampleHr: "Namještaj je nov.", exampleEn: "The furniture is new." },
    { id: "a2u10.krevet", image: "/img/krevet.png", hr: "krevet", en: "bed", pos: "noun", gender: "m", icon: "🛏️", exampleHr: "Krevet je u spavaćoj sobi.", exampleEn: "The bed is in the bedroom." },
    { id: "a2u10.ormar", image: "/img/ormar.png", hr: "ormar", en: "wardrobe / closet", pos: "noun", gender: "m", icon: "🚪", exampleHr: "Ormar je velik.", exampleEn: "The wardrobe is big." },
    { id: "a2u10.stol", image: "/img/stol.png", hr: "stol", en: "table", pos: "noun", gender: "m", icon: "🪵", exampleHr: "Stol je u kuhinji.", exampleEn: "The table is in the kitchen." },
    { id: "a2u10.stolica", image: "/img/stolica.png", hr: "stolica", en: "chair", pos: "noun", gender: "f", icon: "🪑", exampleHr: "Stolica je stara.", exampleEn: "The chair is old." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moj stan",
      subtitle: "Walk someone through your home — room by room, in Croatian.",
      emoji: "🏠",
      items: [
        { emoji: "🗺️", label: "The floor plan", hint: "ulaz → hodnik → four rooms" },
        { emoji: "🪑", label: "Furniture", hint: "krevet, ormar, stol, stolica" },
        { emoji: "👵", label: "Tom calls baka", hint: "the tour, story-world style" },
        { emoji: "🔁", label: "Unit review", hint: "DAT · sviđa mi se · chores · rent" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Room by room",
      subtitle: "Every room is a U5 location — you've had the grammar for months.",
      emoji: "🗺️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "locations & likes" },
        { emoji: "🗺️", label: "The floor plan", hint: "four rooms + hallway" },
        { emoji: "🪑", label: "What goes where", hint: "furniture in its rooms" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: locations and likes",
      items: [
        {
          prompt: "Unit 5 machinery: »Stol je u ___.« (kuhinja)",
          options: ["kuhinji", "kuhinju", "kuhinja"],
          correctIndex: 0,
          explanation: "Location → LOC: u kuhinji. Every room today runs on this.",
        },
        {
          prompt: "L2: »___ mi se balkon.« (I like it)",
          options: ["Sviđa", "Sviđam", "Sviđaju"],
          correctIndex: 0,
          explanation: "Sviđa mi se balkon — one thing, singular verb.",
        },
        {
          prompt: "Listen (U3 adjectives): what's the flat like?",
          tts: "Stan je velik i krasan.",
          options: ["big and wonderful", "small and old", "new and small"],
          correctIndex: 0,
          explanation: "velik i krasan — U3 adjectives describing today's rooms.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the rooms & furniture",
      vocabIds: [
        "a2u10.kupaonica", "a2u10.spavaca-soba", "a2u10.dnevni-boravak", "a2u10.hodnik",
        "a2u10.namjestaj", "a2u10.krevet", "a2u10.ormar", "a2u10.stol", "a2u10.stolica",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The floor plan — walk it with your ears",
      body:
        "Enter at the **ulaz**, walk down the **hodnik**, and four doors open: **kuhinja**, **dnevni boravak**, **spavaća soba**, **kupaonica**.\n\nTwo room names carry an adjective, so their location forms are chunks for now: **u spavaćoj sobi** (in the bedroom), **u dnevnom boravku** (in the living room). Learn them whole — the adjective machinery arrives later.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "ulaz", emoji: "🚪", example: "the entrance" },
          { label: "hodnik", emoji: "🚶", example: "u hodniku je ormar" },
          { label: "kuhinja · dnevni boravak", emoji: "🍳🛋️", example: "u kuhinji · u dnevnom boravku" },
          { label: "spavaća soba · kupaonica", emoji: "🛏️🛁", example: "u spavaćoj sobi · u kupaonici" },
        ],
      },
      ttsChips: ["kupaonica", "spavaća soba", "dnevni boravak", "hodnik", "kuhinja"],
      examples: [
        { hr: "U dnevnom boravku je velik stol.", en: "In the living room there's a big table.", note: "chunk: u dnevnom boravku" },
        { hr: "Sviđa mi se spavaća soba.", en: "I like the bedroom." },
        { hr: "Pokazat ću Ani novi stan.", en: "I'll show Ana the new flat.", highlight: { text: "Ani", caseId: "DAT" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Furniture in its rooms",
      body:
        "**namještaj** is the umbrella word — the furniture as a whole. Under it live your four movables: **krevet** (bed), **ormar** (wardrobe), **stol** (table), **stolica** (chair).\n\n(Careful: **stol** = table, **stolica** = chair — sneaky siblings.)",
      table: {
        caption: "What lives where",
        headers: ["room", "typical furniture"],
        rows: [
          ["spavaća soba", "krevet, ormar"],
          ["dnevni boravak", "stol, stolica"],
          ["kuhinja", "stol, stolica, suđe"],
          ["kupaonica", "rublje (na pranju!)"],
          ["hodnik", "ormar"],
        ],
      },
      examples: [
        { hr: "U spavaćoj sobi su krevet i ormar.", en: "In the bedroom there are a bed and a wardrobe." },
        { hr: "Namještaj je nov — sviđa mi se!", en: "The furniture is new — I like it!" },
        { hr: "Stol je u kuhinji, a stolica je u dnevnom boravku.", en: "The table is in the kitchen, and the chair is in the living room." },
      ],
    },
    {
      id: "s07",
      type: "match",
      prompt: "Match the thing to its room",
      pairs: [
        { a: "krevet", b: "spavaća soba" },
        { a: "suđe", b: "kuhinja" },
        { a: "rublje", b: "kupaonica" },
        { a: "ulaz", b: "hodnik" },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Krevet je u spavaćoj ___.",
      blanks: [["sobi"]],
      translation: "The bed is in the bedroom.",
      wordBank: ["sobi", "sobu", "soba"],
      explanation: "The chunk: u spavaćoj sobi (location → LOC).",
    },
    {
      id: "s09",
      type: "fill",
      text: "U ___ su stol i stolica. (kuhinja)",
      blanks: [["kuhinji"]],
      translation: "In the kitchen there are a table and a chair.",
      wordBank: ["kuhinji", "kuhinju", "kuhinja"],
      explanation: "u + LOC: u kuhinji. Two things → su.",
    },
    {
      id: "s10",
      type: "fill",
      text: "U hodniku je velik ___. (wardrobe)",
      blanks: [["ormar"]],
      translation: "In the hallway there's a big wardrobe.",
      wordBank: ["ormar", "krevet", "stol"],
      explanation: "ormar = wardrobe (subject → NOM).",
    },
    {
      id: "s11",
      type: "type",
      prompt: "Write it in Croatian: “I like the bedroom.”",
      answers: ["Sviđa mi se spavaća soba.", "Sviđa mi se spavaća soba"],
      hint: "the L2 flip + the two-word room",
      explanation: "Sviđa mi se spavaća soba.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “The table is in the kitchen.”",
      answers: ["Stol je u kuhinji.", "Stol je u kuhinji"],
      hint: "u + LOC",
      explanation: "Stol je u kuhinji.",
    },
    {
      id: "s13",
      type: "section",
      title: "Part 2 · Tom calls baka Marija",
      subtitle: "The story-world tour — with your grammar doing all the work.",
      emoji: "👵",
      items: [
        { emoji: "📞", label: "The phone tour", hint: "which room does Tom like?" },
        { emoji: "🎧", label: "Dictation ×2", hint: "rooms in your ears" },
        { emoji: "🎤", label: "YOUR tour", hint: "three sentences out loud" },
      ],
    },
    {
      id: "s14",
      type: "quiz-set",
      review: true,
      title: "Integration: the phone tour",
      items: [
        {
          prompt: "Listen — which room does Tom like?",
          tts: "Sviđa mi se dnevni boravak — velik je i krasan!",
          options: ["the living room", "the bathroom", "the hallway"],
          correctIndex: 0,
          explanation: "dnevni boravak = living room; velik i krasan = big and wonderful.",
        },
        {
          prompt: "Unit 9 future returns: »___ ću ti novi stan.« (show)",
          options: ["Pokazat", "Pokazati", "Pokažem"],
          correctIndex: 0,
          explanation: "Verb-first future cuts -ti: Pokazat ću ti novi stan. (ti = to you — the L2 chunk.)",
        },
        {
          prompt: "Unit 6 time: when does Tom call baka?",
          tts: "Tom navečer telefonira baki.",
          options: ["in the evening", "in the morning", "at noon"],
          correctIndex: 0,
          explanation: "navečer = in the evening (U6); baki = DAT — the receiver of the call. (telefonirati = to phone — a cognate gift.)",
        },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Sviđa mi se dnevni boravak.",
      explanation: "Sviđa mi se dnevni boravak — I like the living room.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "U spavaćoj sobi su krevet i ormar.",
      explanation: "U spavaćoj sobi su krevet i ormar — in the bedroom there are a bed and a wardrobe.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Ovo je moj stan. U kuhinji je stol. Sviđa mi se spavaća soba.",
      targetEn: "give a 3-sentence tour of your home — This is my flat. In the kitchen there's a table. I like the bedroom.",
      phonetic: "O-vo yeh moy stan",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · The whole unit, mixed",
      subtitle: "Receivers, likes, chores and rent — everything from L1–L4.",
      emoji: "🔁",
      items: [
        { emoji: "🟠", label: "DAT receivers", hint: "L1" },
        { emoji: "❤️", label: "sviđa mi se", hint: "L2" },
        { emoji: "🎨", label: "Red vs orange", hint: "L3" },
        { emoji: "🔑", label: "Renting", hint: "L4" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Unit review I: the dative machine",
      items: [
        {
          prompt: "»Dajem ___ poklon.« (sestra)",
          options: ["sestri", "sestru", "sestre"],
          correctIndex: 0,
          explanation: "Receiver → DAT: sestri (L1).",
        },
        {
          prompt: "»Sviđa ___ se stan.« (I like it)",
          options: ["mi", "me", "ja"],
          correctIndex: 0,
          explanation: "The dative liker chunk: mi (L2).",
        },
        {
          prompt: "Red or orange? »Pomažem ___.« (susjed)",
          options: ["susjedu", "susjeda", "susjed"],
          correctIndex: 0,
          explanation: "pomagati serves a person → DAT susjedu (L3).",
        },
        {
          prompt: "»Ana ___ preselila u novi stan.« (moved — watch the clitics)",
          options: ["se", "se je", "je se"],
          correctIndex: 0,
          explanation: "se eats je: Ana se preselila (L4, U8 rule).",
        },
      ],
    },
    {
      id: "s20",
      type: "fill",
      text: "Poslala sam ___ pismo. (baka)",
      blanks: [["baki"]],
      translation: "I sent grandma a letter.",
      explanation: "Receiver → DAT: baki (L1).",
    },
    {
      id: "s21",
      type: "match",
      prompt: "Unit vocab sweep — match Croatian to English",
      pairs: [
        { a: "poklon", b: "present" },
        { a: "stanarina", b: "monthly rent" },
        { a: "suđe", b: "dishes" },
        { a: "vlasnik", b: "landlord" },
        { a: "prozor", b: "window" },
      ],
    },
    {
      id: "s22",
      type: "reorder",
      words: ["Pomažem", "baki", "svaki", "dan"],
      answers: ["Pomažem baki svaki dan.", "Pomažem baki svaki dan"],
      en: "I help grandma every day.",
      explanation: "pomagati + DAT (baki) + the U6 frequency phrase.",
    },
    {
      id: "s23",
      type: "listen-type",
      tts: "Perem suđe u kuhinji.",
      explanation: "Perem suđe u kuhinji — I'm washing the dishes in the kitchen (L3).",
    },
    {
      id: "s24",
      type: "type",
      prompt: "Write it in Croatian: “I'm giving Ana the key.”",
      answers: ["Dajem Ani ključ.", "Dajem Ani ključ"],
      hint: "receiver DAT + thing ACC",
      explanation: "Dajem Ani ključ. (Ani 🟠 + ključ 🔴)",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Unit 10 complete — you live here now!**\n\n**One card, the whole unit:**\n- **DAT sg** (the receiver): m/n **-u**, f **-i** — *Dajem mami poklon. Pomažem bratu.* (k→c: *majci*)\n- **sviđa mi se + NOM** — *Sviđa mi se stan. Ani se sviđa balkon. Sviđaju mi se prozori.*\n- **prema/k + DAT** — *prema zgradi, k baki* (vs *kod bake*, GEN)\n- **Valence:** red = thing (*čistim kuhinju*), orange = person (*pomažem baki*), both = *dajem Ani ključ*\n- **Renting:** *Kolika je stanarina? · Stanujem u stanu. · Marko se preselio.*\n\nWords tonight: **kupaonica, spavaća soba, dnevni boravak, hodnik, namještaj, krevet, ormar, stol, stolica**.\n\nNext: the story — Ana's new flat, and Tom's aching arms. Onda test!",
      vocabIds: [
        "a2u10.kupaonica", "a2u10.spavaca-soba", "a2u10.dnevni-boravak", "a2u10.hodnik",
        "a2u10.namjestaj", "a2u10.krevet", "a2u10.ormar", "a2u10.stol", "a2u10.stolica",
      ],
    },
  ],
  srsCloze: [
    { front: "Krevet je u spavaćoj ___. (the chunk)", answers: ["sobi"], back: "u spavaćoj sobi (LOC chunk)", tts: "Krevet je u spavaćoj sobi." },
    { front: "living room = dnevni ___ (»u dnevnom boravku«)", answers: ["boravak"], back: "dnevni boravak = living room.", tts: "dnevni boravak" },
    { front: "L1 model: »Dajem ___ poklon.« (mama)", answers: ["mami"], back: "Dajem mami poklon.", tts: "Dajem mami poklon." },
    { front: "L2 model: »Sviđa ___ se stan.«", answers: ["mi"], back: "Sviđa mi se stan.", tts: "Sviđa mi se stan." },
    { front: "L3 model: »Perem ___ u kuhinji.« (dishes)", answers: ["suđe", "sude"], back: "Perem suđe u kuhinji.", tts: "Perem suđe u kuhinji." },
    { front: "L4 model: »___ je stanarina?«", answers: ["Kolika", "kolika"], back: "Kolika je stanarina?", tts: "Kolika je stanarina?" },
    { front: "bathroom = ___", answers: ["kupaonica"], back: "kupaonica = bathroom.", tts: "kupaonica" },
    { front: "table = ___ · chair = stolica (don't swap!)", answers: ["stol"], back: "stol = table, stolica = chair.", tts: "stol i stolica" },
  ],
  notes: {
    inOneSentence: {
      en: "No new grammar — rooms take LOC, furniture takes NOM/ACC, likes run on sviđa mi se, and receivers stay dative: the whole unit in one home tour.",
      exampleHr: "U dnevnom boravku je velik stol. · Sviđa mi se spavaća soba. · Pokazat ću Ani novi stan.",
    },
    deepDive: [
      {
        title: "The floor plan, complete",
        body:
          "Room names and their location forms — two are one-word LOCs you can build yourself, two are adjective chunks to memorize whole:\n\n- kuhinja → **u kuhinji** · kupaonica → **u kupaonici** · hodnik → **u hodniku**\n- spavaća soba → **u spavaćoj sobi** (chunk) · dnevni boravak → **u dnevnom boravku** (chunk)\n- and outside: balkon → **na balkonu** (na-word!)",
        table: {
          caption: "Rooms & their LOC forms",
          headers: ["room", "in it (LOC)"],
          colCase: [null, "LOC"],
          rows: [
            ["kuhinja", "u kuhinji"],
            ["kupaonica", "u kupaonici"],
            ["hodnik", "u hodniku"],
            ["spavaća soba", "u spavaćoj sobi (chunk)"],
            ["dnevni boravak", "u dnevnom boravku (chunk)"],
            ["balkon", "na balkonu"],
          ],
        },
      },
      {
        title: "Furniture — and the stol/stolica trap",
        body:
          "**namještaj** (furniture, singular umbrella) covers **krevet, ormar, stol, stolica** and friends.\n\nThe trap: **stol = table**, **stolica = chair** — English speakers expect *stolica* to be a small table; it isn't. Hook: you SIT on the -ica.\n\nAll four are ordinary U2-gender nouns: describe them with U3 adjectives (*velik ormar, stara stolica, nov krevet*) and place them with U5 locations.",
      },
      {
        title: "The unit, at a glance",
        body: "Everything Unit 10 added:",
        table: {
          caption: "Unit 10 recap grid",
          headers: ["machine", "forms", "model sentence"],
          rows: [
            ["DAT sg", "m/n -u · f -i (k→c)", "Dajem mami poklon."],
            ["DAT verbs", "pomagati, davati, poslati, pokazati", "Pomažem bratu."],
            ["sviđati se", "DAT liker + NOM thing", "Sviđa mi se stan."],
            ["prema / k", "+ DAT", "prema zgradi · k baki"],
            ["valence", "ACC thing · DAT person", "Čistim kuhinju. Pomažem baki."],
            ["renting", "chunks", "Kolika je stanarina?"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Vrata je velika.",
        right: "Vrata su velika.",
        why: "vrata is plural-only (L2) — always plural agreement.",
      },
      {
        wrong: "u balkonu",
        right: "na balkonu",
        why: "balkon is a na-word (open platform); rooms take u (u kuhinji).",
      },
      {
        wrong: "Sjedni na stolica… wait — »stolica« is a small table?",
        right: "stol = table, stolica = chair",
        why: "False-friend shape: -ica makes it look like “little stol”, but it's the chair.",
      },
      {
        wrong: "u spavaća soba",
        right: "u spavaćoj sobi",
        why: "Location → LOC; the adjective follows along — learn the chunk whole for now.",
      },
    ],
    memoryHooks: [
      "You SIT on the -ica: stolica = chair; stol keeps the food.",
      "The tour script: Ovo je… · U kuhinji je… · Sviđa mi se… — three beats, any home.",
      "spavaća soba = the sleeping room (spavati, U6) — Croatian names rooms by their job.",
      "namještaj = what's been namješteno (arranged) — the arranged stuff.",
    ],
    connects: [
      { label: "Locations u/na + LOC (Unit 5 L1)", lessonId: "a1u5l1" },
      { label: "sviđa mi se (Unit 10 L2)", lessonId: "a2u10l2" },
      { label: "The dative receiver (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "Where the cases go next: INS in Unit 12", lessonId: "a2u10l4" },
    ],
    selfCheck: [
      { q: "Name the four rooms + hallway.", a: "kuhinja, dnevni boravak, spavaća soba, kupaonica + hodnik." },
      { q: "“In the bedroom there are a bed and a wardrobe” = ?", a: "U spavaćoj sobi su krevet i ormar." },
      { q: "stol vs stolica?", a: "stol = table, stolica = chair." },
      { q: "“I'll show Ana the new flat” = ?", a: "Pokazat ću Ani novi stan." },
      { q: "One DAT model sentence per lesson?", a: "Dajem mami poklon (L1) · Sviđa mi se stan (L2) · Pomažem baki (L3) · Kolika je stanarina? (L4 chunk)." },
    ],
  },
};
