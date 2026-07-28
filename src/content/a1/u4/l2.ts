import type { Lesson } from "@/types/content";

/**
 * A1 U4 L2 — Gledam, kuham, čekam (-am class present tense)
 * Spec: curriculum/A1/unit-4.md · grammar-reference §7 (-am class).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u4` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: the -am class only (gledam…gledaju). Ordinary negation = ne + verb
 * (two words); only nisam/nemam/neću are fused. Objects use ACC from L1
 * (fem -u; masc/neut inanimate unchanged; feminine names like Ana → Anu).
 */
export const a1u4l2: Lesson = {
  id: "a1u4l2",
  unitId: "a1u4",
  title: "Gledam, kuham, čekam",
  titleEn: "The -am verb class",
  grammarTags: ["present-am", "negation"],
  estMinutes: 18,
  vocab: [
    { id: "a1u4.gledati", image: "/img/gledati.png", hr: "gledati", en: "to watch / look at (gledam)", pos: "verb", icon: "👀", exampleHr: "Ana gleda more.", exampleEn: "Ana is looking at the sea." },
    { id: "a1u4.kuhati", hr: "kuhati", en: "to cook (kuham)", pos: "verb", icon: "🍳", exampleHr: "Kuham juhu.", exampleEn: "I am cooking soup." },
    { id: "a1u4.cekati", hr: "čekati", en: "to wait for (čekam)", pos: "verb", icon: "⏳", exampleHr: "Čekam Anu.", exampleEn: "I am waiting for Ana." },
    { id: "a1u4.rucati", hr: "ručati", en: "to have lunch (ručam)", pos: "verb", icon: "🍽️", exampleHr: "Ana ruča.", exampleEn: "Ana is having lunch." },
    { id: "a1u4.vecerati", hr: "večerati", en: "to have dinner (večeram)", pos: "verb", icon: "🌆", exampleHr: "Tom večera ribu.", exampleEn: "Tom is having fish for dinner." },
    { id: "a1u4.dorucak", image: "/img/dorucak.png", hr: "doručak", en: "breakfast", pos: "noun", gender: "m", icon: "☀️", exampleHr: "Kuham doručak.", exampleEn: "I am making breakfast." },
    { id: "a1u4.rucak", image: "/img/rucak.png", hr: "ručak", en: "lunch", pos: "noun", gender: "m", icon: "🌤️", exampleHr: "Kuhamo ručak.", exampleEn: "We are making lunch." },
    { id: "a1u4.vecera", image: "/img/vecera.png", hr: "večera", en: "dinner", pos: "noun", gender: "f", icon: "🌙", exampleHr: "Kuham večeru.", exampleEn: "I am making dinner." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Gledam, kuham, čekam",
      subtitle: "One ending set, hundreds of verbs — the -am class is the workhorse.",
      emoji: "🍳",
      items: [
        { emoji: "🔢", label: "The -am endings", hint: "-am -aš -a -amo -ate -aju" },
        { emoji: "🚫", label: "ne + verb", hint: "ne kuham (two words!)" },
        { emoji: "🍽️", label: "Meals", hint: "doručak ☀️ · ručak 🌤️ · večera 🌙" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say what you're doing" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The -am class",
      subtitle: "The rhythm you already feel from imati and govoriti — now the official pattern.",
      emoji: "🔢",
      items: [
        { emoji: "✅", label: "gledam…gledaju", hint: "-m -š -∅ -mo -te -ju" },
        { emoji: "🥣", label: "cook, watch, wait", hint: "kuham, gledam, čekam" },
        { emoji: "🧠", label: "Quick check", hint: "pick the right form" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's verbs & meals",
      vocabIds: [
        "a1u4.gledati", "a1u4.kuhati", "a1u4.cekati", "a1u4.rucati",
        "a1u4.vecerati", "a1u4.dorucak", "a1u4.rucak", "a1u4.vecera",
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "The -am class: your workhorse verbs",
      body:
        "Croatian verbs come in three present-tense classes. The first — the **-am class** — is the biggest and easiest. Take the verb, add: **-am, -aš, -a, -amo, -ate, -aju.**\n\nIt's the exact rhythm you already know from *imam* and *govorim* — now the full official pattern. gledati, kuhati, čekati, ručati, večerati all follow it.",
      table: {
        caption: "gledati (to watch) — the -am pattern",
        headers: ["", "gledati", "kuhati", "čekati"],
        rows: [
          ["ja", "gledam", "kuham", "čekam"],
          ["ti", "gledaš", "kuhaš", "čekaš"],
          ["on / ona", "gleda", "kuha", "čeka"],
          ["mi", "gledamo", "kuhamo", "čekamo"],
          ["vi", "gledate", "kuhate", "čekate"],
          ["oni", "gledaju", "kuhaju", "čekaju"],
        ],
      },
      examples: [
        { hr: "Kuham juhu.", en: "I am cooking soup.", note: "kuhati → kuham + juhu (ACC)" },
        { hr: "Čekamo Anu.", en: "We are waiting for Ana.", note: "Ana → Anu (feminine object)" },
        { hr: "Tom večera ribu.", en: "Tom is having fish for dinner.", note: "večerati → večera" },
        { hr: "Ana gleda more.", en: "Ana is looking at the sea.", note: "more (n) — no change" },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: the right ending",
      items: [
        {
          prompt: "Mi ___ ručak. (we cook)",
          options: ["kuhamo", "kuhate", "kuhaju"],
          correctIndex: 0,
          explanation: "mi → kuhamo.",
        },
        {
          prompt: "Oni ___ Anu. (they wait for)",
          options: ["čekaju", "čekamo", "čeka"],
          correctIndex: 0,
          explanation: "oni → čekaju.",
        },
        {
          prompt: "Ti ___ juhu. (you cook)",
          options: ["kuhaš", "kuham", "kuha"],
          correctIndex: 0,
          explanation: "ti → kuhaš.",
        },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Saying NO: ne + verb (two words)",
      body:
        "To negate an ordinary verb, put **ne** in front — as **two words**: *ne kuham, ne gledam, ne čekam*. Only three verbs fuse their negative (**nisam, nemam, neću**); everything else is free.\n\nAnd the meals: **doručak** ☀️ (breakfast) → **ručak** 🌤️ (lunch) → **večera** 🌙 (dinner).",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Three fused, everything else free",
        text: "Fused: nisam · nemam · neću. Free (ne + verb): ne kuham, ne gledam, ne čekam — never “nekuham”.",
      },
      table: {
        caption: "The three meals",
        headers: ["meal", "Croatian", "when"],
        rows: [
          ["breakfast", "doručak ☀️", "morning"],
          ["lunch", "ručak 🌤️", "midday"],
          ["dinner", "večera 🌙", "evening"],
        ],
      },
      examples: [
        { hr: "Ana ne kuha meso.", en: "Ana doesn't cook meat.", note: "ne + verb, two words" },
        { hr: "Ne gledam more.", en: "I'm not looking at the sea." },
      ],
    },
    {
      id: "s07",
      type: "match",
      prompt: "Match to English",
      pairs: [
        { a: "kuhati", b: "to cook" },
        { a: "čekati", b: "to wait for" },
        { a: "gledati", b: "to watch" },
        { a: "doručak", b: "breakfast" },
        { a: "večera", b: "dinner" },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Conjugate, negate, and say what you're up to.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the verb", hint: "kuha · čekamo · večera" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Čekam Anu · Kuhamo ručak" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say what you're doing", hint: "Kuham juhu i čekam Anu." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Ana ne ___ meso.",
      blanks: [["kuha"]],
      translation: "Ana doesn't cook meat.",
      wordBank: ["kuha", "kuham", "kuhaju"],
      explanation: "Ana (ona) → kuha; negated with ne (two words).",
    },
    {
      id: "s10",
      type: "fill",
      text: "Mi ___ Anu.",
      blanks: [["čekamo"]],
      translation: "We are waiting for Ana.",
      wordBank: ["čekamo", "čekate", "čeka"],
      explanation: "mi → čekamo (Ana → Anu).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Tom ___ ribu.",
      blanks: [["večera"]],
      translation: "Tom is having fish for dinner.",
      wordBank: ["večera", "večeram", "večeraju"],
      explanation: "Tom (on) → večera; ribu is the ACC object.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I am waiting for Ana.”",
      answers: ["Čekam Anu.", "Čekam Anu", "čekam anu"],
      explanation: "čekati → čekam; Ana → Anu. (No preposition — čekam Anu, not “čekam za Anu”.)",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “We are cooking lunch.”",
      answers: ["Kuhamo ručak.", "Kuhamo ručak", "kuhamo ručak"],
      explanation: "kuhati → kuhamo; ručak (m) — no ACC change.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Baka", "kuha", "juhu"],
      answers: ["Baka kuha juhu.", "Baka kuha juhu"],
      en: "Grandma is cooking soup.",
      explanation: "Baka (ona) → kuha; juha → juhu (ACC).",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Kuham juhu i čekam Anu.",
      explanation: "Kuham juhu i čekam Anu — I'm cooking soup and waiting for Ana.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ana kuha večeru.",
      explanation: "Ana kuha večeru — Ana is cooking dinner (večera → večeru).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Kuham juhu i čekam Anu.",
      targetEn: "say what you're doing — I'm cooking soup and waiting for Ana.",
      phonetic: "KOO-ham YOO-hoo ee CHEH-kam AH-noo",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Unit 3",
      items: [
        {
          prompt: "Listen: who is cooking, and what?",
          tts: "Baka kuha ručak.",
          options: ["grandma is cooking lunch", "mom is cooking dinner", "dad is making breakfast"],
          correctIndex: 0,
          explanation: "baka (Unit 3) + kuha ručak.",
        },
        {
          prompt: "Unit 3: “I have a sister” is…",
          options: ["Imam sestru", "Imam sestra", "Imamo sestru"],
          correctIndex: 0,
          explanation: "imati + ACC sestru — and now you know why it's -u!",
        },
        {
          prompt: "Listen: what is the family doing?",
          tts: "Moja obitelj večera.",
          options: ["my family is having dinner", "my family is cooking", "my family is waiting"],
          correctIndex: 0,
          explanation: "obitelj (Unit 3) + večera (dines).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: what is she doing?",
      tts: "Ne gledam more, kuham juhu.",
      options: ["not watching the sea, cooking soup", "watching the sea", "waiting for Ana"],
      correctIndex: 0,
      explanation: "ne gledam (two-word negation) + kuham juhu.",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The -am class** — the workhorse: **-am, -aš, -a, -amo, -ate, -aju** (gledam, kuham, čekam, ručam, večeram). Negate with **ne + verb**, two words (ne kuham) — only nisam/nemam/neću fuse.\n\nMeals: **doručak** ☀️ → **ručak** 🌤️ → **večera** 🌙. And čekati takes a direct object with no preposition — *čekam Anu*, not “čekam za Anu”.\n\nNext lesson: the other two classes — **-im** (volim) and **-em** (pijem) — and the whole present tense is yours.",
      vocabIds: [
        "a1u4.gledati", "a1u4.kuhati", "a1u4.cekati", "a1u4.rucati",
        "a1u4.vecerati", "a1u4.dorucak", "a1u4.rucak", "a1u4.vecera",
      ],
    },
  ],
  srsCloze: [
    { front: "Ja ___ more. (gledati)", answers: ["gledam"], back: "Ja gledam more.", tts: "Ja gledam more." },
    { front: "Ti ___ more. (gledati)", answers: ["gledaš"], back: "Ti gledaš more.", tts: "Ti gledaš more." },
    { front: "On ___ more. (gledati)", answers: ["gleda"], back: "On gleda more.", tts: "On gleda more." },
    { front: "Mi ___ more. (gledati)", answers: ["gledamo"], back: "Mi gledamo more.", tts: "Mi gledamo more." },
    { front: "Vi ___ more. (gledati)", answers: ["gledate"], back: "Vi gledate more.", tts: "Vi gledate more." },
    { front: "Oni ___ more. (gledati)", answers: ["gledaju"], back: "Oni gledaju more.", tts: "Oni gledaju more." },
    { front: "“I'm not cooking” = ___ kuham", answers: ["ne"], back: "Ne kuham. (ordinary verbs: ne + verb, two words — only nisam/nemam/neću fuse)", tts: "Ne kuham." },
  ],
  notes: {
    inOneSentence: {
      en: "The -am class conjugates -am/-aš/-a/-amo/-ate/-aju, and ordinary verbs negate with a separate ne.",
      exampleHr: "kuham, kuhaš, kuha… · ne kuham",
    },
    deepDive: [
      {
        title: "The -am pattern in full",
        body:
          "The -am class is the largest and most regular. Endings: **-am, -aš, -a, -amo, -ate, -aju**. It's the same rhythm as imati (imam) and govoriti's -im cousin — the personal endings **-m, -š, -∅, -mo, -te** never change; only the class vowel does.",
        table: {
          caption: "-am class — three verbs",
          headers: ["", "gledati", "kuhati", "večerati"],
          rows: [
            ["ja", "gledam", "kuham", "večeram"],
            ["ti", "gledaš", "kuhaš", "večeraš"],
            ["on/ona", "gleda", "kuha", "večera"],
            ["mi", "gledamo", "kuhamo", "večeramo"],
            ["vi", "gledate", "kuhate", "večerate"],
            ["oni", "gledaju", "kuhaju", "večeraju"],
          ],
        },
      },
      {
        title: "Negation: ne + verb",
        body:
          "Ordinary verbs negate with **ne** written as a **separate word**: *ne kuham, ne gledam, ne čekam*. Croatian fuses the negative for exactly three verbs — **nisam** (biti), **nemam** (imati), **neću** (htjeti). For everything else, keep ne separate. Also note čekati takes its object directly: **čekam Anu** (not “čekam za Anu” — that's an English calque).",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Only three fuse",
          text: "nisam · nemam · neću are one word. Everything else: ne + verb (ne kuham, ne gledam).",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "negledam / nekuham",
        right: "ne gledam / ne kuham",
        why: "Ordinary verbs keep ne as a separate word; only nisam/nemam/neću fuse.",
      },
      {
        wrong: "čekam za Anu",
        right: "čekam Anu",
        why: "čekati takes a direct object with no preposition — the “for” is built in.",
      },
      {
        wrong: "Oni kuha ručak",
        right: "Oni kuhaju ručak",
        why: "oni → kuhaju (the -aju ending), not the 3sg kuha.",
      },
    ],
    memoryHooks: [
      "-am class: -am -aš -a -amo -ate -aju — the workhorse rhythm.",
      "Only three negatives fuse (nisam, nemam, neću); everyone else keeps ne apart.",
      "čekati already means “wait FOR” — don't add za.",
    ],
    connects: [
      { label: "imati — the same -m/-š/-mo rhythm (Unit 3 L4)", lessonId: "a1u3l4" },
      { label: "The accusative object these verbs take (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "Next: the -im and -em classes (Unit 4 L3)", lessonId: "a1u4l3" },
    ],
    selfCheck: [
      { q: "Conjugate kuhati for mi and oni.", a: "mi kuhamo, oni kuhaju." },
      { q: "How do you say “I'm not cooking”?", a: "Ne kuham — two words." },
      { q: "Which three verbs have a fused negative?", a: "biti (nisam), imati (nemam), htjeti (neću)." },
      { q: "How do you say “I'm waiting for Ana”?", a: "Čekam Anu — no preposition." },
      { q: "What are the three meals, morning to evening?", a: "doručak, ručak, večera." },
    ],
  },
};
