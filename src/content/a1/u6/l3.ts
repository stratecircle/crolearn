import type { Lesson } from "@/types/content";

/**
 * A1 U6 L3 — Volim filmove (Accusative plural)
 * Spec: curriculum/A1/unit-6.md · grammar-reference §3 (ACC plural).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u6` and review the Croatian before relying on it.
 *
 * Level guard: no new case — ACC plural completes the accusative begun in Unit 4.
 * Masc -e (filmovi→filmove), fem -e (=NOM pl), neut -a (=NOM pl); only masculine
 * visibly changes, and there is NO animate/inanimate split in the plural.
 * Deviation from spec: »jezik« stays a REVIEW word (taught in Unit 2), used to show
 * ACC pl jezike but not re-carded as new U6 vocab. The match drills EN↔ACC-pl forms
 * rather than NOM-pl↔ACC-pl pairs (fem/neut pairs would be identical). Noted in spec.
 */
export const a1u6l3: Lesson = {
  id: "a1u6l3",
  unitId: "a1u6",
  title: "Volim filmove",
  titleEn: "Liking things — accusative plural",
  grammarTags: ["accusative-plural"],
  estMinutes: 18,
  vocab: [
    { id: "a1u6.film", image: "/img/film.png", hr: "film", en: "film / movie", pos: "noun", gender: "m", icon: "🎬", exampleHr: "Gledam filmove.", exampleEn: "I watch films." },
    { id: "a1u6.knjiga", image: "/img/knjiga.png", hr: "knjiga", en: "book", pos: "noun", gender: "f", icon: "📖", exampleHr: "Volim knjige.", exampleEn: "I like books." },
    { id: "a1u6.pjesma", image: "/img/pjesma.png", hr: "pjesma", en: "song", pos: "noun", gender: "f", icon: "🎵", exampleHr: "Slušam pjesme.", exampleEn: "I listen to songs." },
    { id: "a1u6.zadaca", image: "/img/zadaca.png", hr: "zadaća", en: "homework", pos: "noun", gender: "f", icon: "📝", exampleHr: "Imam zadaću.", exampleEn: "I have homework." },
    { id: "a1u6.vijesti", image: "/img/vijesti.png", hr: "vijesti", en: "news (f, always plural)", pos: "noun", gender: "f", icon: "📰", exampleHr: "Navečer gledam vijesti.", exampleEn: "In the evening I watch the news." },
    { id: "a1u6.sport", image: "/img/sport.png", hr: "sport", en: "sport", pos: "noun", gender: "m", icon: "⚽", exampleHr: "Volim sport.", exampleEn: "I like sport." },
    { id: "a1u6.serija", image: "/img/serija.png", hr: "serija", en: "TV series", pos: "noun", gender: "f", icon: "📺", exampleHr: "Ana voli serije.", exampleEn: "Ana likes series." },
    { id: "a1u6.slusati", image: "/img/slusati.png", hr: "slušati", en: "to listen (to) — slušam", pos: "verb", icon: "🎧", exampleHr: "Slušam pjesme.", exampleEn: "I listen to songs." },
    { id: "a1u6.uciti", image: "/img/uciti.png", hr: "učiti", en: "to study / learn — učim", pos: "verb", icon: "📚", exampleHr: "Učim jezike.", exampleEn: "I study languages." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Volim filmove",
      subtitle: "You can say »Volim film«. Today: »Volim filmove« — all of them.",
      emoji: "🎬",
      items: [
        { emoji: "🔴", label: "ACC plural", hint: "filmovi → filmove" },
        { emoji: "👀", label: "Only the boys change", hint: "fem & neut stay put" },
        { emoji: "🎧", label: "slušati & učiti", hint: "listen to / study things" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say what you watch" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Accusative plural",
      subtitle: "The last corner of the accusative — and only masculine moves.",
      emoji: "🔴",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's clock" },
        { emoji: "📋", label: "The -e / -e / -a rule", hint: "filmove · knjige · sela" },
        { emoji: "✅", label: "Quick check", hint: "pick the form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's clock",
      items: [
        {
          prompt: "From L2: »pola osam« is…",
          options: ["7:30", "8:30", "8:00"],
          correctIndex: 0,
          explanation: "pola looks forward — halfway to eight = 7:30.",
        },
        {
          prompt: "From L2: “at seven” = ___ sedam",
          options: ["u", "na", "o"],
          correctIndex: 0,
          explanation: "“at a time” = u + time.",
        },
        {
          prompt: "Listen. What time is it?",
          tts: "Pet je sati.",
          options: ["5:00", "2:00", "12:00"],
          correctIndex: 0,
          explanation: "Pet je sati = 5 o'clock.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u6.film", "a1u6.knjiga", "a1u6.pjesma", "a1u6.zadaca", "a1u6.vijesti",
        "a1u6.sport", "a1u6.serija", "a1u6.slusati", "a1u6.uciti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Accusative plural: only masculine changes",
      body:
        "You already turn one thing into an object: *Volim film, pijem kavu.* Now, **many** things.\n\nThe accusative **plural** endings are easy because two of three genders don't move:\n\n- **masculine → -e**: filmovi → **filmove**, jezici → **jezike** (this is the ONLY visible change)\n- **feminine → -e** (same as NOM plural): knjige → **knjige**, pjesme → **pjesme**\n- **neuter → -a** (same as NOM plural): sela → **sela**\n\nAnd unlike the singular, there's **no animate/inanimate split** in the plural — everything masculine just takes -e.",
      diagram: {
        kind: "contrast",
        left: { title: "Masculine — CHANGES", emoji: "🔴", caseId: "ACC", lines: [{ hr: "filmovi → filmove", en: "films" }, { hr: "jezici → jezike", en: "languages" }, { hr: "sportovi → sportove", en: "sports" }] },
        right: { title: "Fem & neuter — no change", emoji: "🟰", lines: [{ hr: "knjige → knjige", en: "books" }, { hr: "pjesme → pjesme", en: "songs" }, { hr: "sela → sela", en: "villages" }] },
      },
      table: {
        caption: "ACC plural — only masculine visibly changes",
        headers: ["gender", "NOM pl", "ACC pl"],
        colCase: [null, "NOM", "ACC"],
        rows: [
          ["masc: film", "filmovi", "filmove"],
          ["fem: knjiga", "knjige", "knjige"],
          ["neut: selo", "sela", "sela"],
          ["fem: vijesti", "vijesti", "vijesti"],
        ],
      },
      examples: [
        { hr: "Gledam filmove.", en: "I watch films.", note: "filmovi → filmove", highlight: { text: "filmove", caseId: "ACC" } },
        { hr: "Slušam pjesme.", en: "I listen to songs.", note: "fem — same as NOM pl" },
        { hr: "Učim jezike.", en: "I study languages.", note: "jezici → jezike", highlight: { text: "jezike", caseId: "ACC" } },
        { hr: "Ana voli serije.", en: "Ana likes series.", note: "fem — no change" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the plural object",
      items: [
        {
          prompt: "Gledam ___. (film — all of them)",
          options: ["filmove", "filmovi", "film"],
          correctIndex: 0,
          explanation: "Masculine ACC plural → -e: filmove.",
        },
        {
          prompt: "Volim ___. (knjiga — plural)",
          options: ["knjige", "knjiga", "knjigu"],
          correctIndex: 0,
          explanation: "Feminine ACC plural = NOM plural: knjige.",
        },
        {
          prompt: "Učim ___. (jezik — plural)",
          options: ["jezike", "jezici", "jezik"],
          correctIndex: 0,
          explanation: "Masculine → -e: jezici (NOM pl) becomes jezike.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Two verbs that love plurals: slušati & učiti",
      body:
        "Two new verbs take these plural objects all the time:\n\n- **slušati** (to listen to) — *slušam, slušaš, sluša…* (the -am class)\n- **učiti** (to study / learn) — *učim, učiš, uči…* (the -im class)\n\nAdd the ones you know — **gledati** (watch), **voljeti** (like/love) — and you can talk about your whole media life: *Slušam vijesti. Volim knjige i filmove. Navečer gledam serije.*",
      table: {
        caption: "slušati (-am) · učiti (-im)",
        headers: ["", "slušati", "učiti"],
        rows: [
          ["ja", "slušam", "učim"],
          ["ti", "slušaš", "učiš"],
          ["on / ona", "sluša", "uči"],
          ["mi", "slušamo", "učimo"],
          ["vi", "slušate", "učite"],
          ["oni", "slušaju", "uče"],
        ],
      },
      examples: [
        { hr: "Slušam vijesti.", en: "I listen to the news." },
        { hr: "Volim knjige i sport.", en: "I like books and sport." },
        { hr: "Popodne učim jezike.", en: "In the afternoon I study languages." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the accusative-plural form to English",
      pairs: [
        { a: "filmove", b: "films" },
        { a: "pjesme", b: "songs" },
        { a: "serije", b: "series" },
        { a: "vijesti", b: "news" },
        { a: "jezike", b: "languages" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Fill the plural, type two sentences, take dictation and say what you watch.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the plural", hint: "filmove · pjesme · serije" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Gledam serije · Slušamo pjesme" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say what you watch", hint: "Navečer gledam…" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Slušam ___. (pjesma — plural)",
      blanks: [["pjesme"]],
      translation: "I listen to songs.",
      wordBank: ["pjesme", "pjesma", "pjesmu"],
      explanation: "Feminine ACC plural = NOM plural: pjesme.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Gledam ___. (film — plural)",
      blanks: [["filmove"]],
      translation: "I watch films.",
      wordBank: ["filmove", "filmovi", "film"],
      explanation: "Masculine ACC plural → -e: filmove.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ana voli ___. (serija — plural)",
      blanks: [["serije"]],
      translation: "Ana likes series.",
      wordBank: ["serije", "serija", "seriju"],
      explanation: "Feminine ACC plural = NOM plural: serije.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I watch series.”",
      answers: ["Gledam serije.", "Gledam serije", "gledam serije"],
      explanation: "serija → serije (feminine, = NOM plural).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “We listen to songs.”",
      answers: ["Slušamo pjesme.", "Slušamo pjesme", "slušamo pjesme"],
      explanation: "mi → slušamo; pjesma → pjesme.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Slušam pjesme.",
      explanation: "Slušam pjesme — I listen to songs.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Gledamo filmove.",
      explanation: "Gledamo filmove — we watch films (masc plural → filmove).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Navečer gledam vijesti.",
      targetEn: "say what you watch — In the evening I watch the news",
      phonetic: "NA-veh-cher GLEH-dam vee-YES-tee",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: one vs many (Units 3–4)",
      items: [
        {
          prompt: "From Unit 4 (ACC singular): Pijem ___. (kava)",
          options: ["kavu", "kava", "kave"],
          correctIndex: 0,
          explanation: "Feminine ACC singular → -u: kavu. (Plural would be kave.)",
        },
        {
          prompt: "“I like film” → “I like films.” Volim film → Volim ___.",
          options: ["filmove", "filmovi", "filma"],
          correctIndex: 0,
          explanation: "Masculine plural object → filmove.",
        },
        {
          prompt: "Listen. What does he watch?",
          tts: "Gleda vijesti.",
          options: ["the news", "films", "series"],
          correctIndex: 0,
          explanation: "vijesti = news (feminine plural — no change).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen. What does Ana study?",
      tts: "Ana uči jezike.",
      options: ["languages", "songs", "sports"],
      correctIndex: 0,
      explanation: "jezike = languages (masc plural → -e); učiti = to study.",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Accusative plural — the last corner of the accusative:**\n\n- **masculine → -e**: filmovi → **filmove**, jezici → **jezike** (the only visible change)\n- **feminine → -e** (= NOM pl): knjige, pjesme, serije\n- **neuter → -a** (= NOM pl): sela\n- **no animate/inanimate split** in the plural\n\nNew verbs: **slušam** (I listen to), **učim** (I study). *Gledam filmove. Slušam pjesme. Učim jezike.*\n\nNext lesson: the days of the week and how often you do things — **Svaki dan**.",
      vocabIds: [
        "a1u6.film", "a1u6.knjiga", "a1u6.pjesma", "a1u6.zadaca", "a1u6.vijesti",
        "a1u6.sport", "a1u6.serija", "a1u6.slusati", "a1u6.uciti",
      ],
    },
  ],
  srsCloze: [
    { front: "Gledam ___. (film, plural)", answers: ["filmove"], back: "Gledam filmove. (masc → -e)", tts: "Gledam filmove." },
    { front: "Slušam ___. (pjesma, plural)", answers: ["pjesme"], back: "Slušam pjesme. (fem = NOM pl)", tts: "Slušam pjesme." },
    { front: "Učim ___. (jezik, plural)", answers: ["jezike"], back: "Učim jezike. (masc → -e)", tts: "Učim jezike." },
    { front: "Ana voli ___. (serija, plural)", answers: ["serije"], back: "Ana voli serije. (fem = NOM pl)", tts: "Ana voli serije." },
    { front: "___ pjesme. (I listen to)", answers: ["slušam"], back: "Slušam pjesme. (slušati → slušam)", tts: "Slušam pjesme." },
    { front: "___ jezike. (I study)", answers: ["učim"], back: "Učim jezike. (učiti → učim)", tts: "Učim jezike." },
    { front: "Only ___ changes shape in the ACC plural (m/f/n).", answers: ["m", "masculine", "masc"], back: "Only masculine changes (→ -e); fem and neut match NOM plural." },
  ],
  notes: {
    inOneSentence: {
      en: "In the accusative plural only masculine visibly changes (→ -e); feminine and neuter look exactly like the nominative plural.",
      exampleHr: "Gledam filmove. · Slušam pjesme. · Učim jezike.",
    },
    deepDive: [
      {
        title: "The completed accusative (singular + plural)",
        body:
          "Unit 4 gave you the accusative **singular**; this lesson finishes the picture with the **plural**. Put side by side, the plural is the easy half — two of three genders don't move at all:\n\n- **masculine**: -e (filmove, jezike, sportove) — the only visible change\n- **feminine**: = NOM plural (knjige, pjesme, serije)\n- **neuter**: = NOM plural (sela, jutra)\n\nCrucially, the singular's animate/inanimate split (konobar → konobara, but grad → grad) **disappears** in the plural: every masculine plural object is just -e.",
        table: {
          caption: "The whole accusative, both numbers",
          headers: ["gender", "ACC sg", "ACC pl"],
          colCase: [null, "ACC", "ACC"],
          rows: [
            ["masc inanimate", "film", "filmove"],
            ["masc animate", "konobara", "konobare"],
            ["feminine", "knjigu", "knjige"],
            ["neuter", "selo", "sela"],
          ],
        },
      },
      {
        title: "The verbs and the news",
        body:
          "**slušati** (slušam, -am class) = listen to; **učiti** (učim, -im class) = study/learn. Both take direct objects in the accusative: *Slušam pjesme. Učim jezike.*\n\nOne noun to remember: **vijesti** (news) is feminine and **always plural** — there's no singular “a news”. It never changes in the accusative: *Gledam vijesti.*",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Only the boys change",
          text: "ACC plural: masculine → -e (filmove). Feminine (knjige) and neuter (sela) already match the nominative plural — nothing to add.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Volim filmovi.",
        right: "Volim filmove.",
        why: "filmovi is the nominative plural (subject); as an object masculine takes -e → filmove.",
      },
      {
        wrong: "Slušam pjesma.",
        right: "Slušam pjesme.",
        why: "You want the plural “songs”; feminine ACC plural = NOM plural: pjesme.",
      },
      {
        wrong: "Gledam sela (meaning villages, but written selae)",
        right: "Gledam sela.",
        why: "Neuter ACC plural is just -a (= NOM plural) — don't add -e to neuters.",
      },
      {
        wrong: "Učim jezici.",
        right: "Učim jezike.",
        why: "jezici is nominative plural; the object form is jezike.",
      },
    ],
    memoryHooks: [
      "Plural objects: only the boys change (masculine → -e). The girls and the kids stay as they are.",
      "Fem & neut ACC plural = NOM plural — you already know the form, just reuse it.",
      "No animate/inanimate drama in the plural: konobara (sg) but konobare, filmove — all just -e.",
    ],
    connects: [
      { label: "Accusative singular — Volim kavu / Čekam konobara (Unit 4)", lessonId: "a1u4l4" },
      { label: "Nominative plural — the -i/-e/-a forms (Unit 3 L3)", lessonId: "a1u3l3" },
      { label: "Next: days & frequency — Svaki dan (Unit 6 L4)", lessonId: "a1u6l4" },
    ],
    selfCheck: [
      { q: "How do you say “I watch films”?", a: "Gledam filmove — masculine plural object → -e." },
      { q: "Why is »Volim filmovi« wrong?", a: "filmovi is the subject form (NOM pl); the object is filmove." },
      { q: "How do you say “I listen to songs”?", a: "Slušam pjesme — feminine, same as the nominative plural." },
      { q: "Does the animate/inanimate rule apply in the plural?", a: "No — every masculine plural object is just -e." },
      { q: "What is special about »vijesti«?", a: "It's feminine and always plural (the news), and never changes in the accusative." },
    ],
  },
};
