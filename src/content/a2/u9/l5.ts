import type { Lesson } from "@/types/content";

/**
 * A2 U9 L5 — Planiramo put (planning a trip; unit review)
 * Spec: curriculum/A2/unit-9.md · grammar-reference §9.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new grammar — integrates future I (L1–L2) + GEN prepositions
 * (L3) + travel chunks (L4) into a full trip plan. krenuti (krenem) and stići
 * (stignem; perfekt stigao/stigla) are presented as chunks with their future
 * forms. večeras added to the L5 set per the spec correction (2026-07-23);
 * izlet recycled from U8, restoran from U4.
 */
export const a2u9l5: Lesson = {
  id: "a2u9l5",
  unitId: "a2u9",
  title: "Planiramo put",
  titleEn: "We're planning a trip — unit review",
  grammarTags: ["future-1", "genitive-prepositions", "trip-planning"],
  estMinutes: 20,
  vocab: [
    { id: "a2u9.odmor", hr: "odmor", en: "holiday / rest", pos: "noun", gender: "m", icon: "🏖️", exampleHr: "Ovo je plan za odmor.", exampleEn: "This is the plan for the holiday." },
    { id: "a2u9.spakirati", hr: "spakirati", en: "to pack (spakiram)", pos: "verb", icon: "🧳", exampleHr: "Spakirat ću kovčeg večeras.", exampleEn: "I'll pack the suitcase tonight." },
    { id: "a2u9.krenuti", hr: "krenuti", en: "to set off (krenem)", pos: "verb", icon: "🚦", exampleHr: "Krenut ćemo rano ujutro.", exampleEn: "We'll set off early in the morning." },
    { id: "a2u9.stici", hr: "stići", en: "to arrive (stignem)", pos: "verb", icon: "🏁", exampleHr: "Stići ćemo u Split u podne.", exampleEn: "We'll arrive in Split at noon." },
    { id: "a2u9.vodic", hr: "vodič", en: "guide / guidebook", pos: "noun", gender: "m", icon: "📖", exampleHr: "Imam vodič i plan.", exampleEn: "I have a guidebook and a plan." },
    { id: "a2u9.veceras", hr: "večeras", en: "tonight / this evening", pos: "adv", icon: "🌆", exampleHr: "Večeras ću spakirati ruksak.", exampleEn: "Tonight I'll pack the backpack." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Planiramo put",
      subtitle: "Plan a whole trip in Croatian — out loud, start to finish.",
      emoji: "🗺️",
      items: [
        { emoji: "⏱️", label: "The timeline", hint: "spakirat ću → krenut ćemo → stići ćemo" },
        { emoji: "👫", label: "Tom & Ana plan", hint: "the story trip, previewed" },
        { emoji: "🔁", label: "Unit review", hint: "everything from L1–L4, mixed" },
        { emoji: "🎤", label: "Your own plan", hint: "three sentences, out loud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Pack, set off, arrive",
      subtitle: "Three verbs put your whole trip on a timeline.",
      emoji: "⏱️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday vs tomorrow" },
        { emoji: "🧳", label: "spakirati · krenuti · stići", hint: "with their future forms" },
        { emoji: "✅", label: "Quick check", hint: "order the timeline" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the time triangle",
      items: [
        {
          prompt: "Unit 8 vs now: »Jučer sam radio. Sutra ću ___.«",
          options: ["raditi", "radio", "radim"],
          correctIndex: 0,
          explanation: "Past takes the participle, future takes the infinitive: Sutra ću raditi.",
        },
        {
          prompt: "Unit 6 time: »Ručam ___.« (at noon)",
          options: ["u podne", "u podnu", "na podne"],
          correctIndex: 0,
          explanation: "u podne = at noon — you'll arrive in Split at exactly that time today.",
        },
        {
          prompt: "Listen — when does the train depart? (L2)",
          tts: "Vlak polazi u devet sati.",
          options: ["at nine", "at ten", "at noon"],
          correctIndex: 0,
          explanation: "u devet sati = at nine o'clock.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the setting-off words",
      vocabIds: ["a2u9.odmor", "a2u9.spakirati", "a2u9.krenuti", "a2u9.stici", "a2u9.vodic", "a2u9.veceras"],
    },
    {
      id: "s05",
      type: "teach",
      title: "The trip timeline: spakirat ću → krenut ćemo → stići ćemo",
      body:
        "Every trip is three future beats in a row:\n\n1. **spakirati** (spakiram) — pack: *Spakirat ću kovčeg večeras.*\n2. **krenuti** (krenem) — set off: *Krenut ćemo rano ujutro.*\n3. **stići** (stignem) — arrive: *Stići ćemo u Split u podne.*\n\nSpelling check from L1: *spakirat ću* and *krenut ću* cut the -ti ✂️, but **stići ću keeps its -ći** ✅. (Past tense, for later: *stigao / stigla*.)",
      diagram: {
        kind: "flow",
        steps: [
          { label: "večeras 🕗", emoji: "🧳", example: "Spakirat ću kovčeg." },
          { label: "rano ujutro 🕕", emoji: "🚦", example: "Krenut ćemo iz Zagreba." },
          { label: "u podne 🕛", emoji: "🏁", example: "Stići ćemo u Split." },
        ],
      },
      examples: [
        { hr: "Spakirat ću kovčeg večeras.", en: "I'll pack the suitcase tonight." },
        { hr: "Krenut ćemo rano ujutro.", en: "We'll set off early in the morning." },
        { hr: "Stići ćemo u Split u podne.", en: "We'll arrive in Split at noon." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the timeline verbs",
      items: [
        {
          prompt: "Put the trip in order:",
          options: [
            "spakirati → krenuti → stići",
            "stići → spakirati → krenuti",
            "krenuti → stići → spakirati",
          ],
          correctIndex: 0,
          explanation: "Pack, set off, arrive — spakirati → krenuti → stići.",
        },
        {
          prompt: "Verb-first future of krenuti (mi):",
          options: ["Krenut ćemo.", "Krenuti ćemo.", "Krenem ćemo."],
          correctIndex: 0,
          explanation: "-ti verbs cut the -i when the verb comes first: krenut ćemo.",
        },
        {
          prompt: "Verb-first future of stići (mi):",
          options: ["Stići ćemo.", "Stić ćemo.", "Stignut ćemo."],
          correctIndex: 0,
          explanation: "-ći verbs keep everything: stići ćemo.",
        },
      ],
    },
    {
      id: "s07",
      type: "example",
      title: "A whole plan, out loud — tap to hear",
      items: [
        { hr: "Ovo je plan za odmor!", en: "This is the plan for the holiday!" },
        { hr: "Večeras ću spakirati kovčeg i ruksak.", en: "Tonight I'll pack the suitcase and the backpack." },
        { hr: "Sutra ćemo krenuti rano ujutro iz Zagreba.", en: "Tomorrow we'll set off early in the morning from Zagreb.", highlight: { text: "Zagreba", caseId: "GEN" } },
        { hr: "Stići ćemo u Split u podne — imam vodič, kartu i plan!", en: "We'll arrive in Split at noon — I have a guidebook, a ticket and a plan!" },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Večeras ću ___ kovčeg. (pack)",
      blanks: [["spakirati"]],
      translation: "Tonight I'll pack the suitcase.",
      wordBank: ["spakirati", "krenuti", "stići"],
      explanation: "Clitic earlier → full infinitive: Večeras ću spakirati kovčeg.",
    },
    {
      id: "s09",
      type: "fill",
      text: "___ ćemo rano ujutro. (set off — mind the spelling!)",
      blanks: [["Krenut", "krenut"]],
      translation: "We'll set off early in the morning.",
      wordBank: ["Krenut", "Krenuti", "Krenem"],
      explanation: "Verb first → cut the -ti: Krenut ćemo.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Stići ___ u Split u podne. (we)",
      blanks: [["ćemo"]],
      translation: "We'll arrive in Split at noon.",
      wordBank: ["ćemo", "ću", "ćete"],
      explanation: "mi → ćemo, right behind the verb.",
    },
    {
      id: "s11",
      type: "reorder",
      words: ["Sutra", "ćemo", "krenuti", "iz", "hotela"],
      answers: ["Sutra ćemo krenuti iz hotela.", "Sutra ćemo krenuti iz hotela"],
      en: "Tomorrow we'll set off from the hotel.",
      explanation: "Time word → clitic second → full infinitive → iz + GEN: Sutra ćemo krenuti iz hotela.",
    },
    {
      id: "s12",
      type: "reorder",
      words: ["Stići", "ćemo", "u", "podne"],
      answers: ["Stići ćemo u podne.", "Stići ćemo u podne"],
      en: "We'll arrive at noon.",
      explanation: "Verb first (stići keeps -ći) + ćemo: Stići ćemo u podne.",
    },
    {
      id: "s13",
      type: "section",
      title: "Part 2 · Tom & Ana plan the trip",
      subtitle: "The story trip, previewed — with your grammar doing the work.",
      emoji: "👫",
      items: [
        { emoji: "🗣️", label: "Their plan", hint: "future + genitive combined" },
        { emoji: "🎧", label: "Dictation ×2", hint: "pack & set off" },
        { emoji: "🎤", label: "YOUR plan", hint: "three sentences out loud" },
      ],
    },
    {
      id: "s14",
      type: "quiz-set",
      review: true,
      title: "Integration: Tom & Ana's plan",
      items: [
        {
          prompt: "Ana says: »Sutra ćemo putovati na more!« What are they planning?",
          options: ["a trip to the seaside tomorrow", "a museum visit yesterday", "a dinner tonight"],
          correctIndex: 0,
          explanation: "sutra + ćemo putovati + na more = a seaside trip tomorrow.",
        },
        {
          prompt: "Unit 4 flashback: Marko radi u restoranu ___ plaže. (near the beach)",
          options: ["blizu", "bez", "kod"],
          correctIndex: 0,
          explanation: "blizu + GEN: blizu plaže. (restoran — your Unit 4 word.)",
        },
        {
          prompt: "Listen — when will they arrive in Split?",
          tts: "Krenut ćemo rano iz Zagreba i stići ćemo u Split u podne.",
          options: ["at noon", "at nine", "in the evening"],
          correctIndex: 0,
          explanation: "…stići ćemo u Split u podne — at noon.",
        },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Spakirat ću kovčeg večeras.",
      explanation: "Spakirat ću kovčeg večeras — I'll pack the suitcase tonight.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Krenut ćemo rano ujutro.",
      explanation: "Krenut ćemo rano ujutro — we'll set off early in the morning.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Večeras ću spakirati kovčeg. Sutra ćemo krenuti rano. Stići ćemo u podne.",
      targetEn: "say YOUR three-sentence trip plan — Tonight I'll pack the suitcase. Tomorrow we'll set off early. We'll arrive at noon.",
      phonetic: "VEH-cheh-ras choo spa-KEE-ra-tee KOV-cheg",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · The whole unit, mixed",
      subtitle: "Futures, questions, prepositions, counter phrases — everything from L1–L4.",
      emoji: "🔁",
      items: [
        { emoji: "🔩", label: "Clitics & spelling", hint: "L1–L2" },
        { emoji: "🧭", label: "The six preps", hint: "L3" },
        { emoji: "🎫", label: "Counter phrases", hint: "L4" },
        { emoji: "🧩", label: "Vocab sweep", hint: "the whole unit" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Unit review I: the future machine",
      items: [
        {
          prompt: "»Sutra ___ posjetiti baku.« (ja)",
          options: ["ću", "ćeš", "će"],
          correctIndex: 0,
          explanation: "ja → ću (L1).",
        },
        {
          prompt: "Which spelling is right?",
          options: ["Putovat ću sutra.", "Putovati ću sutra.", "Putujat ću sutra."],
          correctIndex: 0,
          explanation: "-ti drops the -i when the verb is first: putovat ću (L1).",
        },
        {
          prompt: "Ask Ana if she'll come:",
          options: ["Hoćeš li doći?", "Ćeš li doći?", "Hoćeš doći li?"],
          correctIndex: 0,
          explanation: "Full form + li: Hoćeš li doći? (L2).",
        },
        {
          prompt: "“We won't fly” = ?",
          options: ["Nećemo letjeti.", "Ne ćemo letjeti.", "Nećemo letimo."],
          correctIndex: 0,
          explanation: "Fused nećemo + infinitive (L2, L4).",
        },
      ],
    },
    {
      id: "s20",
      type: "fill",
      text: "Putujem ___ Zagreba ___ Splita.",
      blanks: [["iz"], ["do"]],
      translation: "I'm travelling from Zagreb to Split.",
      wordBank: ["iz", "do", "od", "bez"],
      explanation: "iz + start, do + goal — both GEN (L3).",
    },
    {
      id: "s21",
      type: "match",
      prompt: "Unit vocab sweep — match Croatian to English",
      pairs: [
        { a: "putovnica", b: "passport" },
        { a: "povratna karta", b: "return ticket" },
        { a: "soba", b: "room" },
        { a: "odmor", b: "holiday" },
        { a: "vodič", b: "guidebook" },
      ],
    },
    {
      id: "s22",
      type: "reorder",
      words: ["Hoćeš", "li", "rezervirati", "sobu"],
      answers: ["Hoćeš li rezervirati sobu?", "Hoćeš li rezervirati sobu"],
      en: "Will you book a room?",
      explanation: "Full form + li + infinitive + ACC (L2, L4).",
    },
    {
      id: "s23",
      type: "listen-type",
      tts: "Jednu kartu do Splita, molim.",
      explanation: "Jednu kartu do Splita, molim — one ticket to Split, please (L4).",
    },
    {
      id: "s24",
      type: "type",
      prompt: "Write it in Croatian: “I will book a room.”",
      answers: ["Rezervirat ću sobu.", "Rezervirat ću sobu", "Ja ću rezervirati sobu.", "Ja ću rezervirati sobu"],
      hint: "verb-first spelling cuts the -ti",
      explanation: "Rezervirat ću sobu. (or: Ja ću rezervirati sobu.)",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Unit 9 complete — you can plan a trip!**\n\n**The timeline:** *Spakirat ću kovčeg večeras. → Krenut ćemo rano ujutro. → Stići ćemo u Split u podne.*\n\n**One card, the whole unit:**\n- Future I: **ću ćeš će ćemo ćete će** + infinitive · verb-first cuts -ti (*putovat ću*) but not -ći (*stići ću*)\n- Questions & no: **Hoćeš li…? · Hoću. / Neću** (+ nećeš, neće…)\n- Six GEN preps: **iz · do · od · kod · bez · blizu** — green light every time\n- Counter chunks: *Jednu kartu do…, molim. · Imate li sobu? · Gdje je recepcija?*\n\nWords tonight: **odmor, spakirati, krenuti, stići, vodič, večeras**.\n\nNext: the story — Tom and Ana take this exact trip. Sretan put!",
      vocabIds: ["a2u9.odmor", "a2u9.spakirati", "a2u9.krenuti", "a2u9.stici", "a2u9.vodic", "a2u9.veceras"],
    },
  ],
  srsCloze: [
    { front: "krenuti → ___ ćemo (verb-first spelling)", answers: ["krenut"], back: "krenuti → krenut ćemo (-ti cuts)", tts: "Krenut ćemo rano ujutro." },
    { front: "stići → ___ ćemo (verb-first spelling)", answers: ["stići", "stici"], back: "stići → stići ćemo (-ći keeps)", tts: "Stići ćemo u podne." },
    { front: "L1 model: »Sutra ću ___ u Split.« (travel)", answers: ["putovati"], back: "Sutra ću putovati u Split.", tts: "Sutra ću putovati u Split." },
    { front: "L2 model: »___ li doći? — Neću.« (will you)", answers: ["Hoćeš", "hoćeš", "Hoces", "hoces"], back: "Hoćeš li doći? — Neću.", tts: "Hoćeš li doći?" },
    { front: "L3 model: »Putujemo iz Zagreba ___ Splita.«", answers: ["do"], back: "Putujemo iz Zagreba do Splita.", tts: "Putujemo iz Zagreba do Splita." },
    { front: "L4 model: »Jednu kartu do Splita, ___.«", answers: ["molim"], back: "Jednu kartu do Splita, molim.", tts: "Jednu kartu do Splita, molim." },
    { front: "L5 model: »Spakirat ću kovčeg ___.« (tonight)", answers: ["večeras", "veceras"], back: "Spakirat ću kovčeg večeras.", tts: "Spakirat ću kovčeg večeras." },
    { front: "to set off = ___ (krenem)", answers: ["krenuti"], back: "krenuti (krenem) = to set off.", tts: "krenuti" },
  ],
  notes: {
    inOneSentence: {
      en: "No new grammar — the future clitics, the six genitive prepositions and the travel chunks combine into a complete trip plan: pack, set off, arrive.",
      exampleHr: "Spakirat ću kovčeg večeras. Krenut ćemo rano ujutro. Stići ćemo u Split u podne.",
    },
    deepDive: [
      {
        title: "The timeline, reproduced",
        body:
          "Three verbs carry any trip:\n\n- **spakirati** (spakiram) — perfective packer: *Spakirat ću kovčeg.*\n- **krenuti** (krenem) — set off: *Krenut ćemo iz hotela.* (often + iz/od + GEN for the starting point)\n- **stići** (stignem) — arrive: *Stići ćemo u Split.* (+ u/na + ACC for the goal; past: *stigao / stigla*)\n\nNote how the unit's two halves snap together: the **future clitic** drives the verb, and a **GEN preposition** pins the route.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "večeras", emoji: "🧳", example: "Spakirat ću kovčeg." },
            { label: "rano ujutro", emoji: "🚦", example: "Krenut ćemo iz Zagreba." },
            { label: "u podne", emoji: "🏁", example: "Stići ćemo u Split." },
          ],
        },
      },
      {
        title: "The unit on one card",
        body: "Everything Unit 9 added, in one look:",
        table: {
          caption: "Unit 9 recap grid",
          headers: ["machine", "forms", "model sentence"],
          rows: [
            ["future I", "ću ćeš će ćemo ćete će + inf", "Sutra ću putovati u Split."],
            ["spelling", "-ti → -t ✂️ · -ći stays ✅", "Putovat ću. · Stići ću."],
            ["questions", "hoću/hoćeš… + li", "Hoćeš li doći?"],
            ["negation", "neću nećeš neće…", "Neću putovati sutra."],
            ["GEN preps", "iz do od kod bez blizu", "Putujemo iz Zagreba do Splita."],
            ["chunks", "counter & check-in", "Jednu kartu do Splita, molim."],
          ],
        },
      },
      {
        title: "The time triangle is yours",
        body:
          "One verb, three time zones — say all three in one breath:\n\n- **Radio sam.** (U8 — past)\n- **Radim.** (U4 — present)\n- **Radit ću.** (U9 — future)\n\nThat triangle is the backbone of every story you'll tell from now on. A2 will spend the next units filling in the corners (dative, modals, instrumental…), but the tenses are done.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ću krenuti rano.",
        right: "Krenut ću rano. / Rano ću krenuti.",
        why: "The clitic still can't come first — the unit's oldest rule.",
      },
      {
        wrong: "Krenuti ćemo rano.",
        right: "Krenut ćemo rano.",
        why: "Verb first → -ti cuts to -t: krenut ćemo (but stići ćemo keeps -ći).",
      },
      {
        wrong: "Ne putujem bez putovnica.",
        right: "Ne putujem bez putovnice.",
        why: "bez (like all six) takes GEN: putovnica → putovnice.",
      },
      {
        wrong: "Stignut ćemo u podne.",
        right: "Stići ćemo u podne.",
        why: "The future uses the INFINITIVE stići — stignem is only for the present (stignem sutra ujutro).",
      },
    ],
    memoryHooks: [
      "Trip rhythm: spakirati → krenuti → stići (pack → go → land) — say it like a drumbeat.",
      "Past-present-future triangle: Radio sam · Radim · Radit ću.",
      "krenut ću ✂️ but stići ću ✅ — the L1 scissors rule never sleeps.",
      "večeras = this evening: večer (evening, U1) + -as, like danas from dan.",
    ],
    connects: [
      { label: "Future I & the spelling rule (Unit 9 L1)", lessonId: "a2u9l1" },
      { label: "The six GEN prepositions (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Counter & check-in chunks (Unit 9 L4)", lessonId: "a2u9l4" },
      { label: "Where the past began (Unit 8 L1)", lessonId: "a1u8l1" },
    ],
    selfCheck: [
      { q: "Say the three-beat trip plan.", a: "Spakirat ću kovčeg večeras. Krenut ćemo rano ujutro. Stići ćemo u Split u podne." },
      { q: "Why krenut ću but stići ću?", a: "Verb-first future cuts -ti to -t, but -ći infinitives never change." },
      { q: "All six GEN prepositions?", a: "iz, do, od, kod, bez, blizu." },
      { q: "One verb in all three tenses (raditi)?", a: "Radio sam · Radim · Radit ću." },
      { q: "“We'll set off from the hotel tomorrow” = ?", a: "Sutra ćemo krenuti iz hotela." },
    ],
  },
};
