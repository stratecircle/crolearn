import type { Lesson } from "@/types/content";

/**
 * A2 U9 L3 — Iz Zagreba do Splita (the GEN preposition system)
 * Spec: curriculum/A2/unit-9.md · grammar-reference §3 (GEN sg), §14 (preps).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: GEN singular only (endings from U7 L1). kod & bez are the two
 * genuinely NEW prepositions; iz/od/do/blizu were taught in U7 L2 and are
 * consolidated here into the six-word travel system. "putujemo/putujem" is
 * used as a glossed chunk (full putovati conjugation is L4); "krenuti" is
 * previewed by TTS only (taught in L5) — both per the unit spec.
 */
export const a2u9l3: Lesson = {
  id: "a2u9l3",
  unitId: "a2u9",
  title: "Iz Zagreba do Splita",
  titleEn: "From Zagreb to Split — genitive prepositions",
  grammarTags: ["genitive-prepositions", "genitive-singular"],
  estMinutes: 18,
  vocab: [
    { id: "a2u9.granica", hr: "granica", en: "border", pos: "noun", gender: "f", icon: "🛂", exampleHr: "Na granici je carina.", exampleEn: "At the border there is customs." },
    { id: "a2u9.putovnica", hr: "putovnica", en: "passport", pos: "noun", gender: "f", icon: "🛂", exampleHr: "Ne putujem bez putovnice.", exampleEn: "I don't travel without a passport." },
    { id: "a2u9.prtljaga", hr: "prtljaga", en: "luggage", pos: "noun", gender: "f", icon: "🧳", exampleHr: "Moja prtljaga je velika.", exampleEn: "My luggage is big." },
    { id: "a2u9.kovceg", hr: "kovčeg", en: "suitcase", pos: "noun", gender: "m", icon: "💼", exampleHr: "Kovčeg je velik.", exampleEn: "The suitcase is big." },
    { id: "a2u9.ruksak", hr: "ruksak", en: "backpack", pos: "noun", gender: "m", icon: "🎒", exampleHr: "Putovnica je u ruksaku.", exampleEn: "The passport is in the backpack." },
    { id: "a2u9.carina", hr: "carina", en: "customs", pos: "noun", gender: "f", icon: "🛃", exampleHr: "Carina je na granici.", exampleEn: "Customs is at the border." },
    { id: "a2u9.obala", hr: "obala", en: "coast", pos: "noun", gender: "f", icon: "🌅", exampleHr: "Split je na obali.", exampleEn: "Split is on the coast." },
    { id: "a2u9.kod", hr: "kod", en: "at somebody's place (+ genitive)", pos: "prep", icon: "🏡", exampleHr: "Spavat ćemo kod bake Marije.", exampleEn: "We'll sleep at grandma Marija's place." },
    { id: "a2u9.bez", hr: "bez", en: "without (+ genitive)", pos: "prep", icon: "🚫", exampleHr: "Ne putujem bez putovnice.", exampleEn: "I don't travel without a passport." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Iz Zagreba do Splita",
      subtitle: "Six little words unlock every travel sentence.",
      emoji: "🗺️",
      items: [
        { emoji: "🧭", label: "iz · do · od · kod · bez · blizu", hint: "all green — all genitive" },
        { emoji: "🛂", label: "Border words", hint: "putovnica, granica, carina" },
        { emoji: "🛣️", label: "Your route", hint: "iz Zagreba —— do Splita" },
        { emoji: "🎤", label: "Say it aloud", hint: "Putujem iz… do…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Six doors, one key",
      subtitle: "Unit 7 gave you the genitive endings — today you get the doors they open.",
      emoji: "🧭",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "čaša vode & iz Kanade" },
        { emoji: "🗺️", label: "The usage map", hint: "six boxes, all + GEN" },
        { emoji: "✅", label: "Quick check", hint: "pick the right preposition" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the genitive you already own (Unit 7)",
      items: [
        {
          prompt: "U7 quantities: »čaša ___« (a glass of water)",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "Quantity → GEN: voda → vode. The same endings power today's prepositions.",
        },
        {
          prompt: "U7 preps: »Tom je ___ Kanade.« (from Canada)",
          options: ["iz", "u", "na"],
          correctIndex: 0,
          explanation: "iz + GEN = from/out of. Today iz gets five teammates.",
        },
        {
          prompt: "Listen — what ISN'T there? (U7 nema)",
          tts: "Nema kruha.",
          options: ["bread", "milk", "water"],
          correctIndex: 0,
          explanation: "Nema kruha — no bread. nema + GEN, the U7 classic.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the border & luggage words",
      vocabIds: [
        "a2u9.granica", "a2u9.putovnica", "a2u9.prtljaga", "a2u9.kovceg",
        "a2u9.ruksak", "a2u9.carina", "a2u9.obala", "a2u9.kod", "a2u9.bez",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The usage map: six prepositions, one case",
      body:
        "All six take the **genitive** — green light, every time. Four are U7 friends (**iz, od, do, blizu**); two are new: **kod** (at somebody's place) and **bez** (without).",
      diagram: {
        kind: "usage-map",
        caseId: "GEN",
        boxes: [
          { label: "iz — from / out of", examples: [{ hr: "iz Zagreba", en: "from Zagreb" }, { hr: "iz Kanade", en: "from Canada" }] },
          { label: "do — to / as far as", examples: [{ hr: "do Splita", en: "to Split" }, { hr: "do plaže", en: "to the beach" }] },
          { label: "od — from (a point/person)", examples: [{ hr: "od kolodvora", en: "from the station" }, { hr: "od Ane", en: "from Ana" }] },
          { label: "kod — at sb's place", examples: [{ hr: "kod bake", en: "at grandma's" }, { hr: "kod Marka", en: "at Marko's" }] },
          { label: "bez — without", examples: [{ hr: "bez putovnice", en: "without a passport" }, { hr: "bez plana", en: "without a plan" }] },
          { label: "blizu — near", examples: [{ hr: "blizu mora", en: "near the sea" }, { hr: "blizu granice", en: "near the border" }] },
        ],
      },
      examples: [
        { hr: "Hotel je blizu mora.", en: "The hotel is near the sea.", highlight: { text: "mora", caseId: "GEN" } },
        { hr: "Ne putujem bez putovnice.", en: "I don't travel without a passport.", highlight: { text: "putovnice", caseId: "GEN" } },
        { hr: "Spavat ćemo kod bake Marije.", en: "We'll sleep at grandma Marija's.", highlight: { text: "bake Marije", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Your route: iz Zagreba —— do Splita",
      body:
        "A whole journey in one line: **iz** (out of the start) … **do** (as far as the goal). The endings are the U7 refresher strip: **m → -a, f → -e, n → -a**.\n\n*(putujemo = we travel — putovati's present tense gets its own lesson in L4.)*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "iz Zagreba", emoji: "🏙️", example: "out of Zagreb (start)" },
          { label: "— put —", emoji: "🛣️", example: "the journey between" },
          { label: "do Splita", emoji: "🌅", example: "as far as Split (goal)" },
        ],
      },
      table: {
        caption: "GEN singular refresher (U7)",
        headers: ["gender", "ending", "example"],
        colCase: [null, "GEN", "GEN"],
        rows: [
          ["masculine", "-a", "Zagreb → iz Zagreba · grad → do grada"],
          ["feminine", "-e", "plaža → do plaže · baka → kod bake"],
          ["neuter", "-a", "more → blizu mora"],
        ],
      },
      examples: [
        { hr: "Putujemo iz Zagreba do Splita.", en: "We're travelling from Zagreb to Split.", note: "putujemo — glossed for now, conjugated in L4" },
        { hr: "Idemo od kolodvora do hotela.", en: "We're going from the station to the hotel." },
        { hr: "Split je na obali, blizu mora.", en: "Split is on the coast, near the sea." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the preposition",
      items: [
        {
          prompt: "»Putujemo ___ Zagreba ___ Splita.« (from … to …)",
          options: ["iz … do", "do … iz", "od … bez"],
          correctIndex: 0,
          explanation: "iz (out of the start) … do (as far as the goal).",
        },
        {
          prompt: "»Hotel je ___ mora.« (near the sea)",
          options: ["blizu", "bez", "kod"],
          correctIndex: 0,
          explanation: "blizu + GEN = near: blizu mora.",
        },
        {
          prompt: "»Spavat ćemo ___ bake Marije.« (at grandma's place)",
          options: ["kod", "iz", "do"],
          correctIndex: 0,
          explanation: "kod + GEN = at somebody's place: kod bake.",
        },
        {
          prompt: "»Ne putujem ___ putovnice.« (without)",
          options: ["bez", "blizu", "od"],
          correctIndex: 0,
          explanation: "bez + GEN = without: bez putovnice.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "At the border — tap to hear",
      items: [
        { hr: "Na granici je carina.", en: "At the border there is customs." },
        { hr: "Putovnica je u ruksaku.", en: "The passport is in the backpack." },
        { hr: "Kovčeg je velik, a ruksak je malen.", en: "The suitcase is big and the backpack is small." },
        { hr: "Moja prtljaga je bez kovčega — samo ruksak!", en: "My luggage is without a suitcase — just a backpack!", highlight: { text: "kovčega", caseId: "GEN" } },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Spavat ćemo ___ bake Marije.",
      blanks: [["kod"]],
      translation: "We'll sleep at grandma Marija's place.",
      wordBank: ["kod", "iz", "bez"],
      explanation: "kod + GEN = at somebody's place.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ne putujem bez ___. (putovnica)",
      blanks: [["putovnice"]],
      translation: "I don't travel without a passport.",
      explanation: "bez + GEN: putovnica → putovnice (f → -e).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Putujemo iz ___ do ___. (Zagreb → Split)",
      blanks: [["Zagreba"], ["Splita"]],
      translation: "We're travelling from Zagreb to Split.",
      explanation: "Both prepositions take GEN: iz Zagreba, do Splita (m → -a).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Hotel je blizu ___. (more)",
      blanks: [["mora"]],
      translation: "The hotel is near the sea.",
      explanation: "blizu + GEN: more → mora (n → -a).",
    },
    {
      id: "s13",
      type: "section",
      title: "Part 2 · Route & border, out loud",
      subtitle: "Type it, match it, hear it — then say your own route.",
      emoji: "🛂",
      items: [
        { emoji: "⌨️", label: "Type two lines", hint: "near the sea · without a passport" },
        { emoji: "🧩", label: "Match the six", hint: "preposition ↔ meaning" },
        { emoji: "🎧", label: "Dictation ×2", hint: "route & grandma's place" },
        { emoji: "🎤", label: "Your route", hint: "Putujem iz… do…" },
      ],
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “The hotel is near the sea.”",
      answers: ["Hotel je blizu mora.", "Hotel je blizu mora"],
      hint: "more → GEN mora",
      explanation: "Hotel je blizu mora. (blizu + GEN)",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “I don't travel without a passport.”",
      answers: ["Ne putujem bez putovnice.", "Ne putujem bez putovnice"],
      hint: "bez + GEN (f → -e)",
      explanation: "Ne putujem bez putovnice.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Putujemo iz Zagreba do Splita.",
      explanation: "Putujemo iz Zagreba do Splita — we're travelling from Zagreb to Split.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Spavat ćemo kod bake Marije.",
      explanation: "Spavat ćemo kod bake Marije — we'll sleep at grandma Marija's.",
    },
    {
      id: "s18",
      type: "match",
      prompt: "Match the preposition to its meaning",
      pairs: [
        { a: "iz", b: "from / out of" },
        { a: "do", b: "to / as far as" },
        { a: "kod", b: "at somebody's place" },
        { a: "bez", b: "without" },
        { a: "blizu", b: "near" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Integration: future + genitive (and two old friends)",
      items: [
        {
          prompt: "Listen — where will they set off from? (krenuti = to set off, your L5 verb)",
          tts: "Krenut ćemo iz hotela u osam sati.",
          options: ["from the hotel", "from the beach", "from the border"],
          correctIndex: 0,
          explanation: "iz hotela = from the hotel — future clitic ćemo + GEN preposition in one sentence.",
        },
        {
          prompt: "Unit 2 chunk, now decoded: »Ja sam ___ Kanade.«",
          options: ["iz", "kod", "do"],
          correctIndex: 0,
          explanation: "iz + GEN — you've been saying this since Unit 2; now you own the grammar.",
        },
        {
          prompt: "Unit 5 city words: »Idem do ___.« (to the square)",
          options: ["trga", "trg", "trgu"],
          correctIndex: 0,
          explanation: "do + GEN: trg → trga.",
        },
      ],
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Putujem iz Zagreba do Splita.",
      targetEn: "say your route out loud — I'm travelling from Zagreb to Split. (putujem = I travel)",
      phonetic: "POO-too-yem eez ZAH-greh-ba do SPLEE-ta",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Six prepositions, one case:** **iz** (from/out of) · **do** (to/as far as) · **od** (from a point/person) · **kod** (at sb's place) · **bez** (without) · **blizu** (near) — all **+ genitive**, green light every time.\n\nEndings from U7: **m → -a** (iz Zagreb**a**), **f → -e** (bez putovnic**e**), **n → -a** (blizu mor**a**).\n\nBorder words tonight: **granica, putovnica, prtljaga, kovčeg, ruksak, carina, obala** + the preps **kod, bez**.\n\nNext lesson: buying tickets and checking in — *Jednu kartu do Splita, molim!*",
      vocabIds: [
        "a2u9.granica", "a2u9.putovnica", "a2u9.prtljaga", "a2u9.kovceg",
        "a2u9.ruksak", "a2u9.carina", "a2u9.obala", "a2u9.kod", "a2u9.bez",
      ],
    },
  ],
  srsCloze: [
    { front: "Tom je ___ Kanade. (from / out of)", answers: ["iz"], back: "Tom je iz Kanade. (iz + GEN)", tts: "Tom je iz Kanade." },
    { front: "Putujemo iz Zagreba ___ Splita. (as far as)", answers: ["do"], back: "Putujemo iz Zagreba do Splita. (do + GEN)", tts: "Putujemo iz Zagreba do Splita." },
    { front: "Idemo ___ kolodvora do hotela. (from — starting point)", answers: ["od"], back: "Idemo od kolodvora do hotela. (od + GEN)", tts: "Idemo od kolodvora do hotela." },
    { front: "Spavat ćemo ___ bake Marije. (at her place)", answers: ["kod"], back: "Spavat ćemo kod bake Marije. (kod + GEN)", tts: "Spavat ćemo kod bake Marije." },
    { front: "Ne putujem ___ putovnice. (without)", answers: ["bez"], back: "Ne putujem bez putovnice. (bez + GEN)", tts: "Ne putujem bez putovnice." },
    { front: "Hotel je ___ mora. (near)", answers: ["blizu"], back: "Hotel je blizu mora. (blizu + GEN)", tts: "Hotel je blizu mora." },
    { front: "»at grandma Marija's« = kod ___ Marije", answers: ["bake"], back: "kod bake Marije (baka → GEN bake)", tts: "kod bake Marije" },
    { front: "passport = ___ (f; »bez ___« = without it)", answers: ["putovnica"], back: "putovnica = passport; bez putovnice.", tts: "putovnica" },
  ],
  notes: {
    inOneSentence: {
      en: "Six prepositions — iz, do, od, kod, bez, blizu — all take the genitive singular, whose endings you learned in Unit 7.",
      exampleHr: "Putujemo iz Zagreba do Splita. · Hotel je blizu mora. · Ne putujem bez putovnice.",
    },
    deepDive: [
      {
        title: "The usage map — green light after all six",
        body:
          "Unit 7 taught the genitive for quantities (*čaša vode*) and introduced *iz, od, do, blizu*. Today the set completes with **kod** and **bez**, and becomes a system: after any of the six, the noun goes green — **genitive**, no exceptions.\n\n- **iz** = from *inside* a place: *iz Zagreba, iz Kanade, iz hotela*\n- **do** = up to / as far as: *do Splita, do plaže, do centra* (centar → centra — the fleeting a!)\n- **od** = from a point or person: *od kolodvora, od Ane*\n- **kod** = at somebody's place (French *chez*): *kod bake, kod Marka*\n- **bez** = without: *bez putovnice, bez plana*\n- **blizu** = near: *blizu mora, blizu granice*",
        diagram: {
          kind: "usage-map",
          caseId: "GEN",
          boxes: [
            { label: "iz — from / out of", examples: [{ hr: "iz Zagreba", en: "from Zagreb" }] },
            { label: "do — to / as far as", examples: [{ hr: "do Splita", en: "to Split" }] },
            { label: "od — from (point/person)", examples: [{ hr: "od Ane", en: "from Ana" }] },
            { label: "kod — at sb's place", examples: [{ hr: "kod bake", en: "at grandma's" }] },
            { label: "bez — without", examples: [{ hr: "bez putovnice", en: "without a passport" }] },
            { label: "blizu — near", examples: [{ hr: "blizu mora", en: "near the sea" }] },
          ],
        },
      },
      {
        title: "iz vs od — two kinds of “from”",
        body:
          "**iz** pulls you out of an enclosed place you were IN: *iz Zagreba* (you were in Zagreb), *iz ruksaka* (out of the backpack).\n\n**od** starts from a point or a person you were AT: *od kolodvora* (from the station onwards), *od Ane* (from Ana — people always take od, never iz!).\n\nRoute formula: **od/iz + start … do + goal**: *Idemo od kolodvora do hotela.*",
        table: {
          caption: "iz or od?",
          headers: ["you were…", "preposition", "example"],
          rows: [
            ["INSIDE it (city, country, bag)", "iz", "iz Zagreba, iz Kanade"],
            ["AT it (point, building as landmark)", "od", "od kolodvora do hotela"],
            ["with a PERSON", "od", "od Ane, od bake"],
          ],
        },
      },
      {
        title: "kod — Croatian's “chez”",
        body:
          "**kod + GEN of a person** = at that person's place: *Spavat ćemo kod bake Marije.* — we'll sleep at grandma Marija's.\n\nIt is NOT “beside”. For nearness use **blizu**: *Hotel je blizu mora.* You've also met the frozen phrase *kod kuće* (at home) since Unit 8 — same kod, now decoded.",
      },
    ],
    commonMistakes: [
      {
        wrong: "bez putovnica",
        right: "bez putovnice",
        why: "bez takes the GENITIVE, not the dictionary form: putovnica → putovnice.",
      },
      {
        wrong: "iz Ane (for “from Ana”)",
        right: "od Ane",
        why: "People take od; iz is only for places you were inside (iz Zagreba).",
      },
      {
        wrong: "kod mora (for “near the sea”)",
        right: "blizu mora",
        why: "kod means at somebody's place (kod bake); nearness is blizu.",
      },
      {
        wrong: "do Split",
        right: "do Splita",
        why: "All six prepositions demand the genitive: Split → Splita.",
      },
    ],
    memoryHooks: [
      "Green light 🟢 = GEN after all six: iz, do, od, kod, bez, blizu.",
      "kod = French chez: kod bake = chez grandma.",
      "Route formula: iz/od + start —— do + goal (iz Zagreba do Splita).",
      "People are od-people: od Ane, od Marka — never iz Ane.",
    ],
    connects: [
      { label: "GEN endings & iz/od/do/blizu intro (Unit 7 L2)", lessonId: "a1u7l2" },
      { label: "kod kuće — the U8 chunk, now decoded", lessonId: "a1u8l1" },
      { label: "Next: tickets, hotels & travel verbs (Unit 9 L4)", lessonId: "a2u9l4" },
    ],
    selfCheck: [
      { q: "“We're travelling from Zagreb to Split” = ?", a: "Putujemo iz Zagreba do Splita." },
      { q: "Why od Ane and not iz Ane?", a: "People take od; iz is only for places you were inside." },
      { q: "“We'll sleep at grandma Marija's” = ?", a: "Spavat ćemo kod bake Marije. (kod + GEN)" },
      { q: "What case do all six prepositions take?", a: "The genitive — m → -a, f → -e, n → -a in the singular." },
      { q: "“The hotel is near the sea, and I don't travel without a plan” = ?", a: "Hotel je blizu mora, a ja ne putujem bez plana." },
    ],
  },
};
