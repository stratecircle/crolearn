import type { Lesson } from "@/types/content";

/**
 * A1 U5 L4 — Treći kat (Ordinals 1–10, addresses & floors)
 * Spec: curriculum/A1/unit-5.md · grammar-reference §13 (ordinals), §4 (adj LOC row).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: ordinals prvi–deseti behave like adjectives (prvi/prva/prvo).
 * Floors use na + LOC with the adjective LOC ending -om / -em (na prvom katu;
 * na trećem katu — treći is soft → -em). prizemlje → u prizemlju. Addresses stay
 * simple: name + number (Ilica 15), lived-in as u + LOC. Closed-set vocab policy
 * (10 ordinals + 5 place nouns = 15 items).
 */
export const a1u5l4: Lesson = {
  id: "a1u5l4",
  unitId: "a1u5",
  title: "Treći kat",
  titleEn: "Ordinals, floors & addresses",
  grammarTags: ["ordinals", "floors", "addresses"],
  estMinutes: 19,
  vocabPolicy: "closed-set",
  vocab: [
    { id: "a1u5.prvi", hr: "prvi", en: "first (prva, prvo)", pos: "num", icon: "1️⃣", exampleHr: "Živim na prvom katu.", exampleEn: "I live on the first floor." },
    { id: "a1u5.drugi", hr: "drugi", en: "second (druga, drugo)", pos: "num", icon: "2️⃣", exampleHr: "Stan je na drugom katu.", exampleEn: "The apartment is on the second floor." },
    { id: "a1u5.treci", hr: "treći", en: "third (treća, treće — the odd one)", pos: "num", icon: "3️⃣", exampleHr: "Živim na trećem katu.", exampleEn: "I live on the third floor." },
    { id: "a1u5.cetvrti", hr: "četvrti", en: "fourth (četvrta, četvrto)", pos: "num", icon: "4️⃣", exampleHr: "Ana je na četvrtom katu.", exampleEn: "Ana is on the fourth floor." },
    { id: "a1u5.peti", hr: "peti", en: "fifth (peta, peto)", pos: "num", icon: "5️⃣", exampleHr: "Stan je na petom katu.", exampleEn: "The apartment is on the fifth floor." },
    { id: "a1u5.sesti", hr: "šesti", en: "sixth (šesta, šesto)", pos: "num", icon: "6️⃣", exampleHr: "Muzej je na šestom katu.", exampleEn: "The museum is on the sixth floor." },
    { id: "a1u5.sedmi", hr: "sedmi", en: "seventh (sedma, sedmo)", pos: "num", icon: "7️⃣", exampleHr: "Stan broj sedam je na sedmom katu.", exampleEn: "Apartment number seven is on the seventh floor." },
    { id: "a1u5.osmi", hr: "osmi", en: "eighth (osma, osmo)", pos: "num", icon: "8️⃣", exampleHr: "Živim na osmom katu.", exampleEn: "I live on the eighth floor." },
    { id: "a1u5.deveti", hr: "deveti", en: "ninth (deveta, deveto)", pos: "num", icon: "9️⃣", exampleHr: "Stan je na devetom katu.", exampleEn: "The apartment is on the ninth floor." },
    { id: "a1u5.deseti", hr: "deseti", en: "tenth (deseta, deseto)", pos: "num", icon: "🔟", exampleHr: "Živim na desetom katu.", exampleEn: "I live on the tenth floor." },
    { id: "a1u5.kat", hr: "kat", en: "floor / storey", pos: "noun", gender: "m", icon: "🏢", exampleHr: "Živim na trećem katu.", exampleEn: "I live on the third floor." },
    { id: "a1u5.prizemlje", hr: "prizemlje", en: "ground floor", pos: "noun", gender: "n", icon: "🚪", exampleHr: "Banka je u prizemlju.", exampleEn: "The bank is on the ground floor." },
    { id: "a1u5.zgrada", hr: "zgrada", en: "building", pos: "noun", gender: "f", icon: "🏬", exampleHr: "Zgrada je velika.", exampleEn: "The building is big." },
    { id: "a1u5.stan", hr: "stan", en: "apartment / flat", pos: "noun", gender: "m", icon: "🏠", exampleHr: "Stan je na drugom katu.", exampleEn: "The apartment is on the second floor." },
    { id: "a1u5.adresa", hr: "adresa", en: "address", pos: "noun", gender: "f", icon: "📫", exampleHr: "Moja adresa je Ilica petnaest.", exampleEn: "My address is Ilica fifteen." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Treći kat",
      subtitle: "Which floor? Third. Now you can say it — and live there: na trećem katu.",
      emoji: "🏢",
      items: [
        { emoji: "🔢", label: "Ordinals 1–10", hint: "prvi, drugi, treći… deseti" },
        { emoji: "🛗", label: "Which floor?", hint: "na prvom katu · u prizemlju" },
        { emoji: "📫", label: "Your address", hint: "zgrada, stan, adresa" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say your floor" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Ordinals 1–10",
      subtitle: "First, second, third… they dress like adjectives (prvi / prva / prvo).",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "ići + na-words from L3" },
        { emoji: "🥇", label: "prvi … deseti", hint: "the ten ordinals" },
        { emoji: "🃏", label: "treći is the odd one", hint: "soft stem" },
        { emoji: "✅", label: "Quick check", hint: "digit → ordinal" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: going places (L3)",
      items: [
        {
          prompt: "From L3: »we go« — Mi ___ na koncert.",
          options: ["idemo", "idete", "idu"],
          correctIndex: 0,
          explanation: "ići: mi → idemo.",
        },
        {
          prompt: "From L3: is it »u posao« or »na posao«?",
          options: ["na posao", "u posao", "za posao"],
          correctIndex: 0,
          explanation: "posao is a na-word: na posao (na poslu at rest).",
        },
        {
          prompt: "Listen: where is she going?",
          tts: "Idem na fakultet.",
          options: ["to university", "to the cinema", "to work"],
          correctIndex: 0,
          explanation: "na fakultet = to university (institution → na).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's place words",
      vocabIds: [
        "a1u5.kat", "a1u5.prizemlje", "a1u5.zgrada", "a1u5.stan", "a1u5.adresa",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Ordinals 1–10 — they behave like adjectives",
      body:
        "Ordinals answer *which one?* and, like adjectives, they agree in gender: **prvi / prva / prvo** (first), **drugi / druga / drugo** (second), and so on.\n\nThe ten to know:\n\n**prvi, drugi, treći, četvrti, peti, šesti, sedmi, osmi, deveti, deseti.**\n\nOne to flag: **treći** is the odd one — a *soft* stem, which will matter for its floor ending in a moment.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Ordinals = adjectives",
        text: "prvi kat (m), prva ulica (f), prvo dijete (n). They agree just like nov/nova/novo.",
      },
      table: {
        caption: "Ordinals 1–10",
        headers: ["#", "ordinal", "#", "ordinal"],
        rows: [
          ["1.", "prvi", "6.", "šesti"],
          ["2.", "drugi", "7.", "sedmi"],
          ["3.", "treći", "8.", "osmi"],
          ["4.", "četvrti", "9.", "deveti"],
          ["5.", "peti", "10.", "deseti"],
        ],
      },
      examples: [
        { hr: "Marko je prvi.", en: "Marko is first.", note: "prvi (m)" },
        { hr: "Ana je druga.", en: "Ana is second.", note: "druga (f)" },
        { hr: "To je treći kat.", en: "This is the third floor.", note: "treći + kat (m)" },
        { hr: "Prvi tramvaj je tu.", en: "The first tram is here.", note: "prvi tramvaj (m)" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: digit → ordinal",
      items: [
        {
          prompt: "5. = ?",
          options: ["peti", "petak", "pet"],
          correctIndex: 0,
          explanation: "5th = peti. (pet = the number 5; petak = Friday, coming in Unit 6.)",
        },
        {
          prompt: "3. = ?",
          options: ["treći", "trina", "tri"],
          correctIndex: 0,
          explanation: "3rd = treći (tri = the number 3).",
        },
        {
          prompt: "8. = ?",
          options: ["osmi", "osam", "sedmi"],
          correctIndex: 0,
          explanation: "8th (m) = osmi (osam = the number 8).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Which floor? na + ordinal + katu",
      body:
        "In a **zgrada** (building), floors use the locative — *at rest on a floor*: **na + [ordinal in -om/-em] + katu.** The ordinal takes the adjective locative ending **-om** (na prvom katu, na drugom katu), except the soft **treći → trećem** (na **trećem** katu).\n\nThe ground floor is its own word: **prizemlje → u prizemlju** (not a numbered kat).\n\nAn address is simple: street name + number (*Ilica 15*), and where you live is u + locative (*Živim u Ilici*). A home is a **stan** (apartment); the whole thing your **adresa**.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "prizemlje", emoji: "🚪", example: "u prizemlju (ground floor)" },
          { label: "prvi kat", emoji: "1️⃣", example: "na prvom katu" },
          { label: "drugi kat", emoji: "2️⃣", example: "na drugom katu" },
          { label: "treći kat", emoji: "3️⃣", example: "na trećem katu (soft → -em!)" },
        ],
      },
      table: {
        caption: "Which floor? — na + LOC",
        headers: ["floor", "na + LOC"],
        colCase: [null, "LOC"],
        rows: [
          ["ground", "u prizemlju"],
          ["1st", "na prvom katu"],
          ["2nd", "na drugom katu"],
          ["3rd", "na trećem katu"],
          ["4th", "na četvrtom katu"],
        ],
      },
      examples: [
        { hr: "Živim na trećem katu.", en: "I live on the third floor.", note: "treći → trećem (soft -em)" },
        { hr: "Stan broj sedam je na drugom katu.", en: "Apartment number seven is on the second floor." },
        { hr: "Moja adresa je Ilica petnaest.", en: "My address is Ilica fifteen." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the digit to its ordinal",
      pairs: [
        { a: "1.", b: "prvi" },
        { a: "3.", b: "treći" },
        { a: "5.", b: "peti" },
        { a: "8.", b: "osmi" },
        { a: "10.", b: "deseti" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Say the floor, take an address dictation, and answer aloud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the floor", hint: "na drugom katu · u prizemlju" },
        { emoji: "⌨️", label: "Type two lines", hint: "floor + address" },
        { emoji: "🎧", label: "Dictation ×2", hint: "an address, a floor" },
        { emoji: "🎤", label: "Which floor?", hint: "Živim na … katu" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Banka je u ___. (prizemlje)",
      blanks: [["prizemlju"]],
      translation: "The bank is on the ground floor.",
      wordBank: ["prizemlju", "prizemlje", "prizemlja"],
      explanation: "prizemlje (n) → u prizemlju (at rest → LOC).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Živim na ___ katu. (2.)",
      blanks: [["drugom"]],
      translation: "I live on the second floor.",
      wordBank: ["drugom", "drugi", "druga"],
      explanation: "2nd floor → na drugom katu (adjective LOC -om).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Stan je na ___ katu. (3.)",
      blanks: [["trećem"]],
      translation: "The apartment is on the third floor.",
      wordBank: ["trećem", "trećom", "treći"],
      explanation: "treći is soft → na trećem katu (-em, not -om).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I live on the fourth floor.”",
      answers: ["Živim na četvrtom katu.", "Živim na četvrtom katu", "živim na četvrtom katu"],
      explanation: "4th → na četvrtom katu.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “My address is Ilica nine.”",
      answers: ["Moja adresa je Ilica devet.", "Moja adresa je Ilica devet", "moja adresa je Ilica devet"],
      explanation: "adresa = address; devet = 9 (Unit 2).",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["katu", "na", "živim", "prvom"],
      answers: ["Živim na prvom katu.", "Živim na prvom katu", "živim na prvom katu"],
      en: "I live on the first floor.",
      explanation: "na + prvom (LOC -om) + katu.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ulica broj devet.",
      explanation: "Ulica broj devet — Street number nine (broj = number, Unit 2).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Stan je na petom katu.",
      explanation: "Stan je na petom katu — the apartment is on the fifth floor (peti → petom).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Živim na drugom katu.",
      targetEn: "say which floor you live on — e.g. I live on the second floor.",
      phonetic: "ZHEE-veem na DROO-gom KAH-too",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 2–3",
      items: [
        {
          prompt: "From Unit 2: the number »sedam« is…",
          options: ["7", "6", "9"],
          correctIndex: 0,
          explanation: "sedam = 7 → stan broj sedam.",
        },
        {
          prompt: "From Unit 3: »tvoj stan« means…",
          options: ["your apartment", "my apartment", "his apartment"],
          correctIndex: 0,
          explanation: "tvoj = your (Unit 3); stan = apartment.",
        },
        {
          prompt: "Listen: what does her brother do?",
          tts: "Moj brat je student.",
          options: ["he's a student", "he's a waiter", "he's a doctor"],
          correctIndex: 0,
          explanation: "moj brat (Unit 3), student (Unit 1).",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen: where does she live?",
      tts: "Živim u Zagrebu.",
      options: ["in Zagreb", "in the centre", "at the station"],
      correctIndex: 0,
      explanation: "u Zagrebu = in Zagreb (Lesson 1 locative).",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Ordinals 1–10:** prvi, drugi, treći, četvrti, peti, šesti, sedmi, osmi, deveti, deseti — they agree like adjectives (prvi/prva/prvo).\n\n**Which floor?** na + ordinal + katu, with the LOC ending **-om** (na prvom / drugom / četvrtom katu) — except the soft **treći → na trećem katu**. Ground floor = **u prizemlju**.\n\n**Address:** name + number (Ilica 15); your **stan** in a **zgrada**, your **adresa**.\n\nNext lesson: lost in the city? Asking and giving directions — and the whole unit in review.",
      vocabIds: [
        "a1u5.prvi", "a1u5.drugi", "a1u5.treci", "a1u5.cetvrti", "a1u5.peti",
        "a1u5.sesti", "a1u5.sedmi", "a1u5.osmi", "a1u5.deveti", "a1u5.deseti",
        "a1u5.kat", "a1u5.prizemlje", "a1u5.zgrada", "a1u5.stan", "a1u5.adresa",
      ],
    },
  ],
  srsCloze: [
    { front: "3. → ___ (the ordinal)", answers: ["treći"], back: "3. = treći (the odd one — soft stem).", tts: "treći" },
    { front: "5. → ___ (the ordinal)", answers: ["peti"], back: "5. = peti.", tts: "peti" },
    { front: "7. → ___ (the ordinal)", answers: ["sedmi"], back: "7. = sedmi.", tts: "sedmi" },
    { front: "Živim na ___ katu. (1.)", answers: ["prvom"], back: "Živim na prvom katu.", tts: "Živim na prvom katu." },
    { front: "Živim na ___ katu. (3.)", answers: ["trećem"], back: "Živim na trećem katu. (soft → -em)", tts: "Živim na trećem katu." },
    { front: "Banka je u ___. (prizemlje)", answers: ["prizemlju"], back: "Banka je u prizemlju.", tts: "Banka je u prizemlju." },
    { front: "Moja ___ je Ilica petnaest. (address)", answers: ["adresa"], back: "Moja adresa je Ilica petnaest.", tts: "Moja adresa je Ilica petnaest." },
  ],
  notes: {
    inOneSentence: {
      en: "Ordinals 1–10 agree like adjectives, and floors use na + the ordinal's locative -om/-em + katu (na trećem katu), with u prizemlju for the ground floor.",
      exampleHr: "Živim na trećem katu. · Banka je u prizemlju.",
    },
    deepDive: [
      {
        title: "The ten ordinals",
        body:
          "Ordinals are adjectives: **prvi, drugi, treći, četvrti, peti, šesti, sedmi, osmi, deveti, deseti**, each with -i (m), -a (f), -o (n). Most are hard-stem; **treći** is soft (note the ć), which changes only its case endings, not its meaning.\n\nDon't confuse the ordinal **peti** (fifth) with the number **pet** (five) — or with **petak** (Friday), which arrives in Unit 6.",
        table: {
          caption: "Ordinals 1–10 (masculine base form)",
          headers: ["#", "ordinal", "#", "ordinal"],
          rows: [
            ["1.", "prvi", "6.", "šesti"],
            ["2.", "drugi", "7.", "sedmi"],
            ["3.", "treći", "8.", "osmi"],
            ["4.", "četvrti", "9.", "deveti"],
            ["5.", "peti", "10.", "deseti"],
          ],
        },
      },
      {
        title: "Floors: direction vs location, again",
        body:
          "Being *on* a floor is at-rest → locative: **na + ordinal-LOC + katu**. The ordinal takes the adjective locative ending **-om** (hard) or **-em** (soft): na prvom, drugom, četvrtom, petom… katu, but na **trećem** katu. The ground floor has its own noun: **prizemlje → u prizemlju**.\n\nThe direction-vs-location contrast from L2 still bites: *going up to* the third floor would be na treći kat (ACC), but *living on* it is na trećem katu (LOC).",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Two floor traps",
          text: "Location uses LOC: »na prvom katu« ✅, not »na prvi kat« ❌. And treći is soft: »na trećem katu« ✅, not »na trećom katu« ❌.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Živim na prvi kat.",
        right: "Živim na prvom katu.",
        why: "Living there is at-rest → locative (na prvom katu), not the accusative direction form.",
      },
      {
        wrong: "na trećom katu",
        right: "na trećem katu",
        why: "treći is a soft stem, so its locative ending is -em, not -om.",
      },
      {
        wrong: "peti (for the number 5)",
        right: "pet (5) vs peti (5th)",
        why: "peti is the ordinal; the plain number is pet. (petak = Friday is a different word again.)",
      },
    ],
    memoryHooks: [
      "Ordinals are just adjectives wearing numbers: prvi/prva/prvo like nov/nova/novo.",
      "treći is the troublemaker — soft stem → na trećem katu.",
      "Ground floor isn't “floor zero” — it's its own word: prizemlje (u prizemlju).",
    ],
    connects: [
      { label: "Direction vs location — the same split for floors (Unit 5 L2)", lessonId: "a1u5l2" },
      { label: "Numbers 1–20 (Unit 2 L4)", lessonId: "a1u2l4" },
      { label: "Next: asking & giving directions + unit review (Unit 5 L5)", lessonId: "a1u5l5" },
    ],
    selfCheck: [
      { q: "What are the ordinals 1–5?", a: "prvi, drugi, treći, četvrti, peti." },
      { q: "How do you say »I live on the third floor«?", a: "Živim na trećem katu (soft -em)." },
      { q: "Why »na drugom katu« but »na trećem katu«?", a: "drugi is hard (-om); treći is soft (-em)." },
      { q: "What is the ground floor, and how do you say »on the ground floor«?", a: "prizemlje → u prizemlju." },
      { q: "How do you say »My address is Ilica fifteen«?", a: "Moja adresa je Ilica petnaest." },
    ],
  },
};
