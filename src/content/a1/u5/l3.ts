import type { Lesson } from "@/types/content";

/**
 * A1 U5 L3 — Idem na kavu (ići + idiomatic u/na destinations)
 * Spec: curriculum/A1/unit-5.md · grammar-reference §7 (irregular ići), §14 (na-words).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: ići fully conjugated (idem, ideš, ide, idemo, idete, idu — the
 * infinitive does NOT predict it). na-word list (events / open spaces /
 * institutions: na posao, na fakultet, na koncert, na trg, na more, na kavu) vs
 * u-words (enclosed: u kino, u školu, u muzej, u kazalište). posao → LOC na
 * poslu (fleeting a). NO instrumental »tramvajem« yet — say čekam tramvaj.
 * čekati is reused from U4 (not re-carded). zračna luka is recognition-only
 * (never a derived-ending answer); danas is glossed on reuse. See spec deviation notes.
 */
export const a1u5l3: Lesson = {
  id: "a1u5l3",
  unitId: "a1u5",
  title: "Idem na kavu",
  titleEn: "Going places — ići",
  grammarTags: ["ici", "u-na-destinations"],
  estMinutes: 19,
  vocab: [
    { id: "a1u5.ici", hr: "ići", en: "to go (idem, ideš…)", pos: "verb", icon: "🚶", exampleHr: "Idem na kavu.", exampleEn: "I'm going for a coffee." },
    { id: "a1u5.posao", hr: "posao", en: "job / work (na posao; LOC na poslu)", pos: "noun", gender: "m", icon: "💼", exampleHr: "Marko ide na posao.", exampleEn: "Marko is going to work." },
    { id: "a1u5.fakultet", hr: "fakultet", en: "university / faculty", pos: "noun", gender: "m", icon: "🎓", exampleHr: "Ana je na fakultetu.", exampleEn: "Ana is at university." },
    { id: "a1u5.kazaliste", hr: "kazalište", en: "theatre", pos: "noun", gender: "n", icon: "🎭", exampleHr: "Idemo u kazalište.", exampleEn: "We are going to the theatre." },
    { id: "a1u5.koncert", hr: "koncert", en: "concert", pos: "noun", gender: "m", icon: "🎵", exampleHr: "Idem na koncert.", exampleEn: "I'm going to a concert." },
    { id: "a1u5.zracna-luka", hr: "zračna luka", en: "airport", pos: "noun", gender: "f", icon: "✈️", exampleHr: "Zračna luka je daleko.", exampleEn: "The airport is far." },
    { id: "a1u5.tramvaj", hr: "tramvaj", en: "tram", pos: "noun", gender: "m", icon: "🚊", exampleHr: "Čekam tramvaj.", exampleEn: "I'm waiting for the tram." },
    { id: "a1u5.autobus", hr: "autobus", en: "bus", pos: "noun", gender: "m", icon: "🚌", exampleHr: "Autobus je na stanici.", exampleEn: "The bus is at the stop." },
    { id: "a1u5.stanica", hr: "stanica", en: "stop", pos: "noun", gender: "f", icon: "🚏", exampleHr: "Čekam na stanici.", exampleEn: "I'm waiting at the stop." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Idem na kavu",
      subtitle: "Your first real motion verb — ići — and the most Croatian sentence there is.",
      emoji: "🚶",
      items: [
        { emoji: "🔢", label: "ići, all six forms", hint: "idem · ideš · ide · idemo · idete · idu" },
        { emoji: "🗺️", label: "u or na?", hint: "buildings u · events/open spaces na" },
        { emoji: "🚊", label: "Getting around", hint: "tramvaj, autobus, stanica" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say where you go" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The verb ići",
      subtitle: "Its endings look normal — but the infinitive won't warn you it's idem.",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "u grad / u gradu from L2" },
        { emoji: "🚶", label: "idem … idu", hint: "the six forms" },
        { emoji: "☕", label: "Idem na kavu!", hint: "the classic line" },
        { emoji: "✅", label: "Quick check", hint: "pick the right form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: moving vs parked (L2)",
      items: [
        {
          prompt: "From L2: »Kamo ideš?« asks…",
          options: ["where to (moving)", "where (at rest)", "where from"],
          correctIndex: 0,
          explanation: "kamo? = where to? → accusative answer. Today the verb behind ideš is fully revealed.",
        },
        {
          prompt: "From L2: at rest — »I am in the city« is Ja sam u ___.",
          options: ["gradu", "grad", "grada"],
          correctIndex: 0,
          explanation: "At rest → LOC: u gradu.",
        },
        {
          prompt: "Listen: where is she going?",
          tts: "Idem u kino.",
          options: ["to the cinema", "at the cinema", "from the cinema"],
          correctIndex: 0,
          explanation: "u kino = to the cinema (moving → ACC).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u5.ici", "a1u5.posao", "a1u5.fakultet", "a1u5.kazaliste", "a1u5.koncert",
        "a1u5.zracna-luka", "a1u5.tramvaj", "a1u5.autobus", "a1u5.stanica",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "ići — to go (idem, ideš, ide…)",
      body:
        "Your first proper motion verb. The endings are the normal ones — but the infinitive **ići** would never let you guess the stem is **id-**. Learn it as a set:\n\n**idem, ideš, ide, idemo, idete, idu.**\n\nUse it with the u/na + ACC direction you learned in L2: *Idem u grad. Idemo na kavu. Ana i Tom idu u kino.*",
      table: {
        caption: "ići — to go (present tense)",
        headers: ["person", "form"],
        rows: [
          ["ja", "idem"],
          ["ti", "ideš"],
          ["on / ona", "ide"],
          ["mi", "idemo"],
          ["vi", "idete"],
          ["oni", "idu"],
        ],
      },
      examples: [
        { hr: "Idemo na kavu!", en: "Let's go for a coffee!", note: "na kavu (kava → kavu, ACC)" },
        { hr: "Marko ide na posao.", en: "Marko is going to work.", note: "na posao — a na-word" },
        { hr: "Ana i Tom idu u kino.", en: "Ana and Tom are going to the cinema.", note: "oni → idu" },
        { hr: "Idem na fakultet.", en: "I'm going to university.", note: "na fakultet" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the right form of ići",
      items: [
        {
          prompt: "Mi ___ u kazalište. (we go)",
          options: ["idemo", "idete", "idu"],
          correctIndex: 0,
          explanation: "mi → idemo.",
        },
        {
          prompt: "Oni ___ na koncert. (they go)",
          options: ["idu", "idemo", "ide"],
          correctIndex: 0,
          explanation: "oni → idu.",
        },
        {
          prompt: "Ti ___ na posao. (you go)",
          options: ["ideš", "idem", "ide"],
          correctIndex: 0,
          explanation: "ti → ideš.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "u or na? — memorize the na-word list",
      body:
        "Both mean roughly *to/at*, but each place picks one and keeps it. The rule of thumb: **enclosed buildings take u**, **events, open spaces and institutions take na** — but the safest path is to **memorize the na-words**, because logic only helps halfway.\n\n**na-words:** na **posao**, na **fakultet**, na **trg**, na **koncert**, na **more**, na **kavu**, na **kolodvor**, na **stanicu**.\n**u-words:** u **školu**, u **kino**, u **crkvu**, u **muzej**, u **kazalište**, u **park**, u **banku**.\n\nWatch **posao**: it drops its a in the locative → *na poslu* (at work).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "If in doubt…",
        text: "Buildings → u (u kino, u muzej). Events & open spaces → na (na koncert, na trg, na more). When unsure, trust the memorized na-list.",
      },
      table: {
        caption: "na (events / open / institutions) vs u (enclosed places)",
        headers: ["na …", "u …"],
        rows: [
          ["na posao (work)", "u školu (school)"],
          ["na fakultet (uni)", "u kino (cinema)"],
          ["na koncert (concert)", "u kazalište (theatre)"],
          ["na trg (square)", "u muzej (museum)"],
          ["na more (sea)", "u crkvu (church)"],
        ],
      },
      examples: [
        { hr: "Idem na koncert.", en: "I'm going to a concert.", note: "koncert → na" },
        { hr: "Marko je na poslu.", en: "Marko is at work.", note: "posao → na poslu (drops the a)" },
        { hr: "Idemo u kazalište.", en: "We are going to the theatre.", note: "kazalište → u" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each place to its destination phrase (u or na?)",
      pairs: [
        { a: "posao", b: "na posao" },
        { a: "kino", b: "u kino" },
        { a: "koncert", b: "na koncert" },
        { a: "muzej", b: "u muzej" },
        { a: "fakultet", b: "na fakultet" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Pick u or na, take dictation, and say where you go today.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "u or na?", hint: "na koncert · na fakultetu" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Idemo na more · Čekam tramvaj" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Kamo ideš danas?", hint: "say your destination" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Idem ___ koncert.",
      blanks: [["na"]],
      translation: "I'm going to a concert.",
      wordBank: ["na", "u", "za"],
      explanation: "koncert is a na-word (an event): na koncert.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana je ___ fakultetu.",
      blanks: [["na"]],
      translation: "Ana is at university.",
      wordBank: ["na", "u", "iz"],
      explanation: "fakultet is a na-word (institution): na fakultetu (LOC, at rest).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Mi ___ u kazalište. (go)",
      blanks: [["idemo"]],
      translation: "We are going to the theatre.",
      wordBank: ["idemo", "idete", "idu"],
      explanation: "mi → idemo; kazalište is a u-word.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “We are going to the sea.”",
      answers: ["Idemo na more.", "Idemo na more", "idemo na more"],
      explanation: "ići: mi → idemo; more is a na-word → na more.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I am waiting for the tram.”",
      answers: ["Čekam tramvaj.", "Čekam tramvaj", "čekam tramvaj"],
      explanation: "čekati (Unit 4) takes a direct object, no preposition: čekam tramvaj. (»idem tramvajem« comes much later.)",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Idem na posao.",
      explanation: "Idem na posao — I'm going to work (posao is a na-word).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Oni idu u kino.",
      explanation: "Oni idu u kino — they are going to the cinema (oni → idu).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Idem na fakultet.",
      targetEn: "answer »Kamo ideš danas?« (Where are you going today? — danas = today) — say a destination.",
      phonetic: "EE-dem na FAH-kool-tet",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–4",
      items: [
        {
          prompt: "From Unit 2: »tramvaj broj pet« — which tram?",
          options: ["number 5", "number 2", "number 10"],
          correctIndex: 0,
          explanation: "pet = 5 (Unit 2 numbers); broj = number.",
        },
        {
          prompt: "From Unit 4: »I want to go to a concert« — Hoću ___ na koncert.",
          options: ["ići", "idem", "idu"],
          correctIndex: 0,
          explanation: "After hoću, the second verb stays in the infinitive: Hoću ići na koncert.",
        },
        {
          prompt: "Listen: where are they going?",
          tts: "Idemo na kavu.",
          options: ["for a coffee", "to the museum", "to work"],
          correctIndex: 0,
          explanation: "na kavu = for a coffee (kava → kavu, ACC).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: how many brothers does she have?",
      tts: "Imam dva brata.",
      options: ["two", "one", "three"],
      correctIndex: 0,
      explanation: "dva = 2 (Unit 2); brata is the ACC after imam (Units 3–4).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**ići — to go:** idem, ideš, ide, idemo, idete, idu (the infinitive hides the id- stem!).\n\n**u or na?** enclosed buildings take **u** (u kino, u muzej, u kazalište); events, open spaces and institutions take **na** (na posao, na fakultet, na koncert, na trg, na more, na kavu). Memorize the na-list. And **posao → na poslu** in the locative.\n\nGetting around: **čekam tramvaj / autobus**, **na stanici** (»idem tramvajem« is for a later unit).\n\nNext lesson: which floor? Ordinals 1–10, and living na trećem katu.",
      vocabIds: [
        "a1u5.ici", "a1u5.posao", "a1u5.fakultet", "a1u5.kazaliste", "a1u5.koncert",
        "a1u5.zracna-luka", "a1u5.tramvaj", "a1u5.autobus", "a1u5.stanica",
      ],
    },
  ],
  srsCloze: [
    { front: "Ja ___ na kavu. (go)", answers: ["idem"], back: "Idem na kavu. (ići: ja → idem)", tts: "Idem na kavu." },
    { front: "Mi ___ u kino. (go)", answers: ["idemo"], back: "Idemo u kino. (mi → idemo)", tts: "Idemo u kino." },
    { front: "Oni ___ na koncert. (go)", answers: ["idu"], back: "Oni idu na koncert. (oni → idu)", tts: "Oni idu na koncert." },
    { front: "Idem ___ posao. (u or na?)", answers: ["na"], back: "Idem na posao. (posao is a na-word)", tts: "Idem na posao." },
    { front: "Idem ___ kino. (u or na?)", answers: ["u"], back: "Idem u kino. (kino is a u-word)", tts: "Idem u kino." },
    { front: "Idem ___ fakultet. (u or na?)", answers: ["na"], back: "Idem na fakultet. (institution → na)", tts: "Idem na fakultet." },
    { front: "Marko je na ___. (posao — LOC, drops the a)", answers: ["poslu"], back: "Marko je na poslu. (posao → poslu)", tts: "Marko je na poslu." },
    { front: "I'm waiting for the tram: Čekam ___.", answers: ["tramvaj"], back: "Čekam tramvaj. (direct object, no preposition)", tts: "Čekam tramvaj." },
  ],
  notes: {
    inOneSentence: {
      en: "ići conjugates idem…idu (the infinitive hides the id- stem), and each destination fixes u (enclosed) or na (events/open/institutions).",
      exampleHr: "Idem na kavu. · Idemo u kino. · Marko je na poslu.",
    },
    deepDive: [
      {
        title: "ići — an irregular you'll use daily",
        body:
          "The infinitive **ići** gives no hint of the present stem **id-**. The endings themselves are the ordinary -em set:\n\n**idem, ideš, ide, idemo, idete, idu.**\n\nPair it with the L2 direction rule: to a place → u/na + accusative (Idem u grad, Idemo na more).",
        table: {
          caption: "ići — full present tense",
          headers: ["person", "ići", "person", "ići"],
          rows: [
            ["ja", "idem", "mi", "idemo"],
            ["ti", "ideš", "vi", "idete"],
            ["on/ona/ono", "ide", "oni/one/ona", "idu"],
          ],
        },
      },
      {
        title: "The u-word / na-word split",
        body:
          "Croatian assigns each place either **u** or **na**, and it stays fixed for both direction (ACC) and location (LOC). Enclosed buildings mostly take **u**; events, open spaces and many institutions take **na**. The reliable move is to memorize the na-list, since intuition only covers half.\n\n**na:** na posao/poslu (note the fleeting a), na fakultet(u), na trg(u), na koncert(u), na more/moru, na kavu/kavi, na kolodvor(u), na stanicu/stanici. (Also na otok/otoku, island — a preview word, not drilled yet.)\n**u:** u kino/kinu, u školu/školi, u crkvu/crkvi, u muzej(u), u kazalište/kazalištu, u park(u), u banku/banci, u centar/centru.\n\nNote on transport: for now say **čekam tramvaj** / **čekam autobus** (direct object). Saying *idem tramvajem* (by tram) needs the instrumental, which arrives in A2 Unit 12.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "The two classic slips",
          text: "»u posao« ❌ → na posao ✅. »na kino« ❌ → u kino ✅. And never build ići from its infinitive: »ićim« ❌ → idem ✅.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "u posao / u fakultet",
        right: "na posao / na fakultet",
        why: "posao and fakultet are na-words (workplace / institution).",
      },
      {
        wrong: "na kino",
        right: "u kino",
        why: "kino is an enclosed building → u kino.",
      },
      {
        wrong: "ićim / idim (built from the infinitive)",
        right: "idem",
        why: "ići is irregular: the present stem is id-, so ja idem.",
      },
    ],
    memoryHooks: [
      "Idem na kavu — the most Croatian sentence there is. Anchor the na-words to it.",
      "ići hides its stem: the infinitive is ići, but you go idem.",
      "Buildings you enter → u; things you attend / open spaces → na.",
    ],
    connects: [
      { label: "Direction (u/na + ACC) vs location (Unit 5 L2)", lessonId: "a1u5l2" },
      { label: "The three present-tense classes (Unit 4 L3)", lessonId: "a1u4l3" },
      { label: "Next: ordinals + floors — na trećem katu (Unit 5 L4)", lessonId: "a1u5l4" },
    ],
    selfCheck: [
      { q: "Conjugate ići for ja, mi and oni.", a: "idem, idemo, idu." },
      { q: "Is it »u posao« or »na posao«?", a: "na posao — posao is a na-word (and na poslu in the locative)." },
      { q: "Is it »u kino« or »na kino«?", a: "u kino — kino is an enclosed building." },
      { q: "How do you say »We are going to the sea«?", a: "Idemo na more." },
      { q: "How do you say »I'm waiting for the tram«, and why no »by tram«?", a: "Čekam tramvaj — the instrumental »tramvajem« (by tram) is a later unit." },
    ],
  },
};
