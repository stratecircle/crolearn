import type { Lesson } from "@/types/content";

/**
 * A1 U5 L2 — U grad ili u gradu? (Direction ACC vs location LOC)
 * Spec: curriculum/A1/unit-5.md · grammar-reference §14 (the u/na rule pair).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: same prepositions u/na, two cases — motion/direction (kamo?) → ACC
 * (Idem u grad), location (gdje?) → LOC (Ja sam u gradu). idem/ideš/ide appear
 * ONLY as preview chunks (full ići paradigm is L3). No new verb machinery.
 */
export const a1u5l2: Lesson = {
  id: "a1u5l2",
  unitId: "a1u5",
  title: "U grad ili u gradu?",
  titleEn: "To the city or in the city?",
  grammarTags: ["accusative", "locative", "direction-vs-location"],
  estMinutes: 18,
  vocab: [
    { id: "a1u5.gdje", hr: "gdje", en: "where (at rest)", pos: "adv", icon: "📍", exampleHr: "Gdje si?", exampleEn: "Where are you?" },
    { id: "a1u5.kamo", hr: "kamo", en: "where to (direction)", pos: "adv", icon: "➡️", exampleHr: "Kamo ideš?", exampleEn: "Where are you going?" },
    { id: "a1u5.ovdje", hr: "ovdje", en: "here", pos: "adv", icon: "📌", exampleHr: "Ovdje sam.", exampleEn: "I am here." },
    { id: "a1u5.tamo", hr: "tamo", en: "there", pos: "adv", icon: "👉", exampleHr: "Muzej je tamo.", exampleEn: "The museum is there." },
    { id: "a1u5.kino", hr: "kino", en: "cinema", pos: "noun", gender: "n", icon: "🎬", exampleHr: "Idem u kino.", exampleEn: "I am going to the cinema." },
    { id: "a1u5.kolodvor", hr: "kolodvor", en: "(train/bus) station", pos: "noun", gender: "m", icon: "🚉", exampleHr: "Tom je na kolodvoru.", exampleEn: "Tom is at the station." },
    { id: "a1u5.blizu", hr: "blizu", en: "near / close", pos: "adv", icon: "🤏", exampleHr: "Pošta je blizu.", exampleEn: "The post office is near." },
    { id: "a1u5.daleko", hr: "daleko", en: "far", pos: "adv", icon: "🔭", exampleHr: "Kolodvor je daleko.", exampleEn: "The station is far." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "U grad ili u gradu?",
      subtitle: "One letter changes everything: u grad = going there, u gradu = already there.",
      emoji: "🔀",
      items: [
        { emoji: "➡️", label: "Kamo? → moving (ACC)", hint: "Idem u grad" },
        { emoji: "📍", label: "Gdje? → at rest (LOC)", hint: "Ja sam u gradu" },
        { emoji: "🧭", label: "here, there, near, far", hint: "ovdje, tamo, blizu, daleko" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + answer two questions" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Moving vs parked",
      subtitle: "Same u/na, two cases. Moving → red (ACC). Parked → purple (LOC).",
      emoji: "🔀",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "LOC endings from L1" },
        { emoji: "❓", label: "kamo? ↔ gdje?", hint: "where to ↔ where" },
        { emoji: "🔴", label: "Direction = ACC", hint: "u grad · u kino" },
        { emoji: "🟣", label: "Location = LOC", hint: "u gradu · u kinu" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's location endings",
      items: [
        {
          prompt: "From L1: »I live in Zagreb« — Živim u ___.",
          options: ["Zagrebu", "Zagreb", "Zagreba"],
          correctIndex: 0,
          explanation: "Location → LOC: masculine → -u → u Zagrebu.",
        },
        {
          prompt: "From L1: »at the bank« is u ___.",
          options: ["banci", "banki", "banka"],
          correctIndex: 0,
          explanation: "banka → u banci (k → c before -i).",
        },
        {
          prompt: "Listen: where is the museum?",
          tts: "Muzej je u centru.",
          options: ["in the centre", "on the square", "at school"],
          correctIndex: 0,
          explanation: "u centru = in the centre (centar → centru).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u5.gdje", "a1u5.kamo", "a1u5.ovdje", "a1u5.tamo",
        "a1u5.kino", "a1u5.kolodvor", "a1u5.blizu", "a1u5.daleko",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "u grad vs u gradu — one letter, two meanings",
      body:
        "The prepositions **u** and **na** do double duty. What changes is the **case** of the noun:\n\n- **Moving toward** a place — question **kamo?** (where to?) → **accusative** (the U4 case): *Idem u grad.* *Idem u kino.*\n- **Being at** a place — question **gdje?** (where?) → **locative** (the L1 case): *Ja sam u gradu.* *Ja sam u kinu.*\n\nSo *u grad* = going there (red, ACC) and *u gradu* = already there (purple, LOC).\n\n*(idem, ideš, ide = “I/you/he go” — take them as whole words for now; the full verb comes next lesson.)*",
      diagram: {
        kind: "contrast",
        left: { title: "Kamo? → moving (ACC)", emoji: "➡️", caseId: "ACC", lines: [{ hr: "Idem u grad.", en: "I'm going to the city." }, { hr: "Idem u kino.", en: "I'm going to the cinema." }] },
        right: { title: "Gdje? → at rest (LOC)", emoji: "📍", caseId: "LOC", lines: [{ hr: "Ja sam u gradu.", en: "I am in the city." }, { hr: "Ja sam u kinu.", en: "I am in the cinema." }] },
      },
      table: {
        caption: "Same preposition, two cases",
        headers: ["", "Kamo? (ACC)", "Gdje? (LOC)"],
        colCase: [null, "ACC", "LOC"],
        rows: [
          ["grad", "u grad", "u gradu"],
          ["kino", "u kino", "u kinu"],
          ["kolodvor", "na kolodvor", "na kolodvoru"],
          ["škola", "u školu", "u školi"],
        ],
      },
      examples: [
        { hr: "Idem u grad.", en: "I'm going to the city.", note: "kamo? → ACC (u grad = NOM form for a thing)", highlight: { text: "u grad", caseId: "ACC" } },
        { hr: "Ja sam u gradu.", en: "I am in the city.", note: "gdje? → LOC (u gradu)", highlight: { text: "u gradu", caseId: "LOC" } },
        { hr: "Tom ide na kolodvor.", en: "Tom is going to the station.", note: "moving → ACC", highlight: { text: "na kolodvor", caseId: "ACC" } },
        { hr: "Tom je na kolodvoru.", en: "Tom is at the station.", note: "at rest → LOC", highlight: { text: "na kolodvoru", caseId: "LOC" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: moving or parked?",
      items: [
        {
          prompt: "Ana je u ___. (kino — she's there now)",
          options: ["kinu", "kino", "kina"],
          correctIndex: 0,
          explanation: "»Where is she?« gdje → LOC: u kinu.",
        },
        {
          prompt: "Idem u ___. (škola — going there)",
          options: ["školu", "školi", "škola"],
          correctIndex: 0,
          explanation: "»Where to?« kamo → ACC: u školu.",
        },
        {
          prompt: "Ja sam u ___. (grad — I'm there)",
          options: ["gradu", "grad", "grada"],
          correctIndex: 0,
          explanation: "At rest → LOC: u gradu.",
        },
        {
          prompt: "Kamo ideš? — U ___! (kino — going there)",
          options: ["kino", "kinu", "kina"],
          correctIndex: 0,
          explanation: "Moving → ACC: u kino (= NOM form, kino is neuter).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "kamo ↔ gdje, and here / there / near / far",
      body:
        "Two question words now sit side by side: **gdje?** asks *where* (at rest → LOC answer), **kamo?** asks *where to* (moving → ACC answer). Keep them apart and the case falls out by itself.\n\nAnd four location words that don't decline: **ovdje** (here), **tamo** (there), **blizu** (near), **daleko** (far).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Two questions, two cases",
        text: "gdje? (where?) → LOC: »u gradu«. kamo? (where to?) → ACC: »u grad«.",
      },
      table: {
        caption: "The where-words and location adverbs",
        headers: ["word", "meaning", "example"],
        rows: [
          ["gdje?", "where? (at rest)", "Gdje si? — U gradu."],
          ["kamo?", "where to? (moving)", "Kamo ideš? — U grad."],
          ["ovdje / tamo", "here / there", "Muzej je tamo."],
          ["blizu / daleko", "near / far", "Kolodvor je daleko."],
        ],
      },
      examples: [
        { hr: "Kino je blizu.", en: "The cinema is near." },
        { hr: "Kolodvor je daleko.", en: "The station is far." },
        { hr: "Muzej je tamo, na trgu.", en: "The museum is there, on the square." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each word to English",
      pairs: [
        { a: "gdje", b: "where" },
        { a: "kamo", b: "where to" },
        { a: "ovdje", b: "here" },
        { a: "tamo", b: "there" },
        { a: "blizu", b: "near" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Choose the case, take dictation, and answer both questions aloud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill: moving or parked", hint: "u grad / u gradu" },
        { emoji: "🔀", label: "Build a sentence", hint: "idem · u · kino" },
        { emoji: "🎧", label: "Dictation ×2", hint: "the contrast pair" },
        { emoji: "🎤", label: "Gdje si? Kamo ideš?", hint: "answer both" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Kamo ideš? Idem u ___. (grad — going there)",
      blanks: [["grad"]],
      translation: "Where are you going? I'm going to the city.",
      wordBank: ["grad", "gradu", "grada"],
      explanation: "Moving → ACC. grad is a thing, so ACC = NOM: u grad.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Gdje si? U ___. (grad — at rest)",
      blanks: [["gradu"]],
      translation: "Where are you? In the city.",
      wordBank: ["gradu", "grad", "grada"],
      explanation: "At rest → LOC: u gradu.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Tom je na ___. (kolodvor — at rest)",
      blanks: [["kolodvoru"]],
      translation: "Tom is at the station.",
      wordBank: ["kolodvoru", "kolodvor", "kolodvora"],
      explanation: "»Where is he?« → LOC: na kolodvoru.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I am going to the cinema.”",
      answers: ["Idem u kino.", "Idem u kino", "idem u kino"],
      explanation: "Moving → ACC: u kino (kino is neuter, so ACC = NOM).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I am in the city.”",
      answers: ["Ja sam u gradu.", "Ja sam u gradu", "U gradu sam.", "u gradu sam", "ja sam u gradu"],
      explanation: "At rest → LOC: u gradu.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["idem", "u", "kino"],
      answers: ["Idem u kino.", "Idem u kino", "idem u kino"],
      en: "I am going to the cinema.",
      explanation: "Moving to a place → ACC: u kino.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Idem u grad.",
      explanation: "Idem u grad — I'm going to the city (moving → ACC, u grad).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ja sam u gradu.",
      explanation: "Ja sam u gradu — I am in the city (at rest → LOC, u gradu).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "U gradu sam. Idem u kino.",
      targetEn: "answer »Gdje si?« and »Kamo ideš?« — I'm in the city. I'm going to the cinema.",
      phonetic: "oo GRAH-doo sam — EE-dem oo KEE-no",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–2",
      items: [
        {
          prompt: "From Unit 2: »Odakle si?« asks…",
          options: ["where you're from", "where you are", "where you're going"],
          correctIndex: 0,
          explanation: "odakle = from where. Now you have all three: odakle (from), gdje (where), kamo (where to).",
        },
        {
          prompt: "From Unit 1: to say goodbye you say…",
          options: ["Doviđenja!", "Dobar dan!", "Molim?"],
          correctIndex: 0,
          explanation: "Doviđenja = goodbye (Unit 1) — you'll close every mini-dialogue with it.",
        },
        {
          prompt: "Listen: where is she going?",
          tts: "Idem na more.",
          options: ["to the sea", "to the city", "to the cinema"],
          correctIndex: 0,
          explanation: "na more = to the sea (more, Unit 2) — moving → ACC (more is neuter, = NOM).",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen: where is she going?",
      tts: "Idem u školu.",
      options: ["to school", "to the bank", "to the museum"],
      correctIndex: 0,
      explanation: "u školu = to school (moving → ACC, škola → školu).",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The single most useful minimal pair in early Croatian:** same u/na, two cases.\n\n- **Moving** (question *kamo?*) → **accusative**: *Idem u grad. Idem u kino.*\n- **At rest** (question *gdje?*) → **locative**: *Ja sam u gradu. Ja sam u kinu.*\n\nRemember the colors: **moving = red (ACC), parked = purple (LOC).** Plus ovdje/tamo (here/there) and blizu/daleko (near/far).\n\nNext lesson: your first real motion verb, fully conjugated — **ići** (idem, ideš, ide…) — and the na-word list.",
      vocabIds: [
        "a1u5.gdje", "a1u5.kamo", "a1u5.ovdje", "a1u5.tamo",
        "a1u5.kino", "a1u5.kolodvor", "a1u5.blizu", "a1u5.daleko",
      ],
    },
  ],
  srsCloze: [
    { front: "Kamo ideš? Idem u ___. (grad — going)", answers: ["grad"], back: "Idem u grad. (moving → ACC = NOM for a thing)", tts: "Idem u grad." },
    { front: "Gdje si? U ___. (grad — at rest)", answers: ["gradu"], back: "U gradu sam. (at rest → LOC)", tts: "Ja sam u gradu." },
    { front: "Idem u ___. (kino — going)", answers: ["kino"], back: "Idem u kino. (moving → ACC)", tts: "Idem u kino." },
    { front: "Ana je u ___. (kino — at rest)", answers: ["kinu"], back: "Ana je u kinu. (at rest → LOC)", tts: "Ana je u kinu." },
    { front: "Tom je na ___. (kolodvor — at rest)", answers: ["kolodvoru"], back: "Tom je na kolodvoru.", tts: "Tom je na kolodvoru." },
    { front: "»Where to?« in Croatian is ___ (one word).", answers: ["kamo"], back: "kamo? = where to? (moving). gdje? = where? (at rest)." },
    { front: "»Where?« (at rest) in Croatian is ___ (one word).", answers: ["gdje"], back: "gdje? = where? → LOC answer." },
  ],
  notes: {
    inOneSentence: {
      en: "The same u/na takes the accusative for movement toward a place (Idem u grad) and the locative for being at a place (Ja sam u gradu).",
      exampleHr: "Idem u grad. — Ja sam u gradu.",
    },
    deepDive: [
      {
        title: "One rule pair, two questions",
        body:
          "u and na don't pick a case by themselves — the **meaning** does. If there is **motion toward** the place (you can ask *kamo?*, where to?), the noun goes into the **accusative**. If it is **at rest** (you can ask *gdje?*, where?), it goes into the **locative**.\n\nBecause you already own both cases, this lesson adds no endings — only the choice between them. For masculine/neuter *things* the accusative looks identical to the nominative (u grad, u kino), so the contrast is clearest with the locative's extra ending: u grad → u gradu.",
        table: {
          caption: "Direction (ACC) vs location (LOC)",
          headers: ["noun", "Kamo? → ACC", "Gdje? → LOC"],
          colCase: [null, "ACC", "LOC"],
          rows: [
            ["grad", "Idem u grad.", "Ja sam u gradu."],
            ["kino", "Idem u kino.", "Ja sam u kinu."],
            ["škola", "Idem u školu.", "Ja sam u školi."],
            ["kolodvor", "Idem na kolodvor.", "Ja sam na kolodvoru."],
          ],
        },
      },
      {
        title: "gdje, kamo — and idem as a preview",
        body:
          "**gdje?** (where?) expects a locative answer; **kamo?** (where to?) expects an accusative one. English blurs both into *where*, which is exactly the trap.\n\nThe verb **idem / ideš / ide** (I/you/he go) appears here as a whole-word preview so you can build real sentences; its full six-form paradigm is Lesson 3.",
        diagram: {
          kind: "contrast",
          left: { title: "kamo? → ACC", emoji: "➡️", caseId: "ACC", lines: [{ hr: "Kamo ideš? — U grad.", en: "Where to? — To the city." }] },
          right: { title: "gdje? → LOC", emoji: "📍", caseId: "LOC", lines: [{ hr: "Gdje si? — U gradu.", en: "Where? — In the city." }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Kamo ideš? — U kinu.",
        right: "Kamo ideš? — U kino.",
        why: "kamo is motion → accusative. u kinu (LOC) answers gdje, not kamo.",
      },
      {
        wrong: "Gdje si? — U grad.",
        right: "Gdje si? — U gradu.",
        why: "gdje is at-rest → locative. u grad (ACC) answers kamo.",
      },
      {
        wrong: "using gdje for »where to«",
        right: "kamo for »where to«, gdje for »where«",
        why: "English »where« covers both; Croatian keeps them separate and the case depends on the choice.",
      },
    ],
    memoryHooks: [
      "Moving = red (ACC), parked = purple (LOC). Picture a red arrow vs a purple parking sign.",
      "kAmo has an A → Accusative. gdjE ends the pair with the locative (already there).",
      "u grad = get in the car; u gradu = you've arrived.",
    ],
    connects: [
      { label: "The locative endings themselves (Unit 5 L1)", lessonId: "a1u5l1" },
      { label: "The accusative, first met in Unit 4 (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "Next: ići fully conjugated + the na-word list (Unit 5 L3)", lessonId: "a1u5l3" },
    ],
    selfCheck: [
      { q: "Which case answers kamo? and which answers gdje?", a: "kamo? → accusative (u grad); gdje? → locative (u gradu)." },
      { q: "»I'm going to the cinema« vs »I'm at the cinema«?", a: "Idem u kino (ACC) vs Ja sam u kinu (LOC)." },
      { q: "Why does »u grad« look the same as the nominative?", a: "For masculine/neuter things the accusative equals the nominative — no ending is added." },
      { q: "Translate »Where are you? In the city.«", a: "Gdje si? U gradu." },
      { q: "What do ovdje, tamo, blizu, daleko mean?", a: "here, there, near, far." },
    ],
  },
};
