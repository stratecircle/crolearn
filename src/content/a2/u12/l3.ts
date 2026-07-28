import type { Lesson } from "@/types/content";

/**
 * A2 U12 L3 — Radim kao konobar (professions & raditi kao)
 * Spec: curriculum/A2/unit-12.md · grammar-reference §2.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: raditi kao + NOM (no case after kao — the anti-INS-overreach
 * lesson). Professions recycled from U2 (konobar, kuhar, učitelj, liječnik/
 * liječnica); the -ica feminine derivation is the taught pattern, so
 * derived feminines (učiteljica, kuharica) are fair game after the grid.
 * "postati" is a glossed preview chunk (Želim postati…).
 */
export const a2u12l3: Lesson = {
  id: "a2u12l3",
  unitId: "a2u12",
  title: "Radim kao konobar",
  titleEn: "I work as a waiter — professions",
  grammarTags: ["raditi-kao", "profession-pairs", "present-tense-ujem"],
  estMinutes: 18,
  vocab: [
    { id: "a2u12.radnik", image: "/img/radnik.png", hr: "radnik", en: "worker (m)", pos: "noun", gender: "m", icon: "👷", exampleHr: "Radnik radi u tvrtki.", exampleEn: "The worker works at a company." },
    { id: "a2u12.radnica", image: "/img/radnica.png", hr: "radnica", en: "worker (f)", pos: "noun", gender: "f", icon: "👷‍♀️", exampleHr: "Ana je dobra radnica.", exampleEn: "Ana is a good worker." },
    { id: "a2u12.prodavac", image: "/img/prodavac.png", hr: "prodavač", en: "shop assistant (m)", pos: "noun", gender: "m", icon: "🛒", exampleHr: "Prodavač radi u trgovini.", exampleEn: "The shop assistant works in a shop." },
    { id: "a2u12.prodavacica", image: "/img/prodavacica.png", hr: "prodavačica", en: "shop assistant (f)", pos: "noun", gender: "f", icon: "🛍️", exampleHr: "Prodavačica je ljubazna.", exampleEn: "The shop assistant is kind." },
    { id: "a2u12.vozac", image: "/img/vozac.png", hr: "vozač", en: "driver (m)", pos: "noun", gender: "m", icon: "🚌", exampleHr: "Vozač vozi autobus.", exampleEn: "The driver drives the bus." },
    { id: "a2u12.vozacica", image: "/img/vozacica.png", hr: "vozačica", en: "driver (f)", pos: "noun", gender: "f", icon: "🚕", exampleHr: "Vozačica radi noću.", exampleEn: "The driver works at night." },
    { id: "a2u12.programer", image: "/img/programer.png", hr: "programer", en: "programmer (m)", pos: "noun", gender: "m", icon: "💻", exampleHr: "Programer radi računalom.", exampleEn: "A programmer works with a computer." },
    { id: "a2u12.programerica", image: "/img/programerica.png", hr: "programerica", en: "programmer (f)", pos: "noun", gender: "f", icon: "👩‍💻", exampleHr: "Programerica zarađuje dobro.", exampleEn: "The programmer earns well." },
    { id: "a2u12.zaradivati", image: "/img/zaradivati.png", hr: "zarađivati", en: "to earn (zarađujem)", pos: "verb", icon: "💰", exampleHr: "Zarađujem dobro.", exampleEn: "I earn well." },
    { id: "a2u12.placa", image: "/img/placa.png", hr: "plaća", en: "salary / pay", pos: "noun", gender: "f", icon: "💶", exampleHr: "Plaća je dobra.", exampleEn: "The salary is good." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Radim kao konobar",
      subtitle: "Say what you do — and relax: after kao, NO case games.",
      emoji: "🧑‍🍳",
      items: [
        { emoji: "🟢", label: "kao + NOM", hint: "the case-free zone" },
        { emoji: "👥", label: "The pair grid", hint: "the -ica feminines" },
        { emoji: "💰", label: "Workday frames", hint: "počinjem, zarađujem, plaća" },
        { emoji: "🎤", label: "Your line", hint: "Radim kao… / Studiram." },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · kao — the green flag",
      subtitle: "After two lessons of -om endings, kao asks for… nothing at all.",
      emoji: "🟢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "U2 professions return" },
        { emoji: "🟢", label: "raditi kao + NOM", hint: "plain dictionary form" },
        { emoji: "👥", label: "m/f pairs", hint: "the -ica pattern" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the U2 job parade",
      items: [
        {
          prompt: "Unit 2: »Marko je ___.« (the waiter — his day job since U2!)",
          options: ["konobar", "konobara", "konobarom"],
          correctIndex: 0,
          explanation: "Marko je konobar — plain NOM after biti. kao works the same way.",
        },
        {
          prompt: "Unit 2 pairs: liječnik → and the woman is…?",
          options: ["liječnica", "liječnika", "liječnikica"],
          correctIndex: 0,
          explanation: "liječnik/liječnica — today the -ica pattern becomes a system.",
        },
        {
          prompt: "Listen (L2): what does the programmer work with?",
          tts: "Programer radi računalom.",
          options: ["a computer", "a pencil", "a phone"],
          correctIndex: 0,
          explanation: "računalom — bare INS from yesterday, already at work.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the professions",
      vocabIds: [
        "a2u12.radnik", "a2u12.radnica", "a2u12.prodavac", "a2u12.prodavacica",
        "a2u12.vozac", "a2u12.vozacica", "a2u12.programer", "a2u12.programerica",
        "a2u12.zaradivati", "a2u12.placa",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "raditi kao + NOM — the case-free zone",
      body:
        "To say what you do: **raditi kao + plain NOM** — no endings, no games:\n\n- *Radim kao konobar.* — I work as a waiter\n- *Ana radi kao učiteljica.* — Ana works as a teacher\n\nAfter two INS lessons your hand wants ~~kao konobarom~~ — resist! **kao is a green flag: dictionary form only.** Same for the dream version: *Želim postati liječnik.* (postati = to become — a chunk for now.)",
      diagram: {
        kind: "callout",
        tone: "success",
        title: "kao = NOM, always",
        text: "Radim kao konobar ✅ · ~~Radim kao konobarom~~ ❌ — after kao, the profession stays in its dictionary form.",
      },
      examples: [
        { hr: "Marko radi kao konobar.", en: "Marko works as a waiter." },
        { hr: "Ana će raditi kao učiteljica.", en: "Ana will work as a teacher." },
        { hr: "Želim postati programer.", en: "I want to become a programmer.", note: "postati = to become (chunk)" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The pair grid — and the workday frames",
      body:
        "Croatian professions come in pairs; the feminine is built with **-ica** (colloquially you may also hear -ka: programerka):\n\nAnd the workday frames that go with any job: *Počinjem u osam. Moram raditi u subotu. **Zarađujem** dobro — plaća je dobra!* (zarađivati → zarađujem — the -ivati verbs join your -ujem family.)",
      table: {
        caption: "The m/f pair grid",
        headers: ["masculine", "feminine", "pattern"],
        rows: [
          ["radnik", "radnica", "-ik → -ica"],
          ["prodavač", "prodavačica", "+ -ica"],
          ["vozač", "vozačica", "+ -ica"],
          ["učitelj (U2)", "učiteljica", "+ -ica"],
          ["kuhar (U2)", "kuharica", "+ -ica"],
          ["programer", "programerica", "+ -ica"],
        ],
      },
      examples: [
        { hr: "Počinjem u osam, a završavam u četiri.", en: "I start at eight and finish at four." },
        { hr: "Moram raditi u subotu.", en: "I have to work on Saturday." },
        { hr: "Programerica zarađuje dobro — plaća je velika.", en: "The programmer earns well — the salary is big." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: kao & the pairs",
      items: [
        {
          prompt: "»Radim kao ___.« (waiter)",
          options: ["konobar", "konobarom", "konobara"],
          correctIndex: 0,
          explanation: "kao + NOM: konobar.",
        },
        {
          prompt: "vozač → the woman driving is…?",
          options: ["vozačica", "vozačka", "vozača"],
          correctIndex: 0,
          explanation: "+ -ica: vozačica.",
        },
        {
          prompt: "programer → and she is…?",
          options: ["programerica", "programerka", "programera"],
          correctIndex: 0,
          explanation: "Standard Croatian prefers -ica: programerica. (You'll also hear programerka.)",
        },
        {
          prompt: "zarađivati → »Ja ___ dobro.«",
          options: ["zarađujem", "zarađivam", "zaradim"],
          correctIndex: 0,
          explanation: "-ivati → -ujem: zarađujem (kupujem's cousin).",
        },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the profession to the workplace",
      pairs: [
        { a: "kuhar", b: "restoran" },
        { a: "učiteljica", b: "škola" },
        { a: "prodavačica", b: "trgovina" },
        { a: "vozač", b: "autobus" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Marko radi ___ konobar.",
      blanks: [["kao"]],
      translation: "Marko works as a waiter.",
      wordBank: ["kao", "s", "za"],
      explanation: "raditi kao + NOM.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ana radi kao ___. (teacher, f)",
      blanks: [["učiteljica", "uciteljica"]],
      translation: "Ana works as a teacher.",
      wordBank: ["učiteljica", "učiteljicom", "učitelj"],
      explanation: "kao + NOM, feminine pair: učiteljica.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Radim puno i ___ dobro. (earn)",
      blanks: [["zarađujem", "zaradujem"]],
      translation: "I work a lot and earn well.",
      wordBank: ["zarađujem", "zarađivam", "zaradim"],
      explanation: "zarađivati → zarađujem.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Your job line",
      subtitle: "Type it, hear it, say it — the sentence you'll use at every party.",
      emoji: "💬",
      items: [
        { emoji: "⌨️", label: "Type two jobs", hint: "doctor & dream job" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Radim kao…", hint: "your real answer" },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “She works as a doctor.”",
      answers: ["Ona radi kao liječnica.", "Ona radi kao liječnica", "Radi kao liječnica.", "Radi kao liječnica"],
      hint: "kao + NOM (f)",
      explanation: "Ona radi kao liječnica.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I want to become a programmer.” (postati = to become)",
      answers: ["Želim postati programer.", "Želim postati programer", "Želim postati programerica.", "Želim postati programerica"],
      hint: "željeti + infinitive + NOM",
      explanation: "Želim postati programer / programerica. (postati + NOM — same green flag as kao)",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Ana radi kao učiteljica.",
      explanation: "Ana radi kao učiteljica — Ana works as a teacher.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Marko zarađuje dobro.",
      explanation: "Marko zarađuje dobro — Marko earns well.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: modals, dative and the case zoo",
      items: [
        {
          prompt: "U11 modals at work: »Bolestan sam — ne ___ raditi danas.« (I can't)",
          options: ["mogu", "smijem", "moram"],
          correctIndex: 0,
          explanation: "ne mogu raditi = I can't work. (ne smijem = mustn't — the doctor's version.)",
        },
        {
          prompt: "U11 + U10: »Moram ići ___.« (to the doctor — DAT of goal)",
          options: ["liječniku", "liječnika", "liječnikom"],
          correctIndex: 0,
          explanation: "Idem/moram ići liječniku — DAT (kod liječnika = being there).",
        },
        {
          prompt: "Listen — three cases in one workday line. Who does Ana work WITH?",
          tts: "Ana radi s kolegicom u uredu.",
          options: ["a colleague (f)", "the boss", "a driver"],
          correctIndex: 0,
          explanation: "s kolegicom (INS) u uredu (LOC) — yesterday and U5 shaking hands.",
        },
      ],
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Radim kao programer.",
      targetEn: "say your line — I work as a programmer. (or your real job: Radim kao… / Studiram.)",
      phonetic: "RA-deem kao pro-GRA-mer",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The green flag:** *raditi kao + NOM* — *Radim kao konobar. Ana radi kao učiteljica.* No case after kao, ever (and *postati* works the same: *Želim postati programer*).\n\n**The pair grid:** masculine + **-ica** (radnica, vozačica, učiteljica, kuharica) .\n\n**Workday frames:** *Počinjem u osam. Moram raditi u subotu. Zarađujem dobro. Plaća je dobra.*\n\nWords tonight: **radnik/radnica, prodavač/prodavačica, vozač/vozačica, programer/programerica, zarađivati, plaća**.\n\nNext lesson: *Na fakultetu* — exams, lectures and the library.",
      vocabIds: [
        "a2u12.radnik", "a2u12.radnica", "a2u12.prodavac", "a2u12.prodavacica",
        "a2u12.vozac", "a2u12.vozacica", "a2u12.programer", "a2u12.programerica",
        "a2u12.zaradivati", "a2u12.placa",
      ],
    },
  ],
  srsCloze: [
    { front: "»I work as a waiter« = Radim ___ konobar.", answers: ["kao"], back: "Radim kao konobar. (kao + NOM — no case!)", tts: "Radim kao konobar." },
    { front: "vozač → the feminine is ___", answers: ["vozačica", "vozacica"], back: "vozačica (+ -ica)", tts: "vozačica" },
    { front: "programer → the feminine is ___", answers: ["programerica"], back: "programerica (+ -ica)", tts: "programerica" },
    { front: "zarađivati → ja ___", answers: ["zarađujem", "zaradujem"], back: "zarađujem (-ivati → -ujem)", tts: "Zarađujem dobro." },
    { front: "salary = ___ (f)", answers: ["plaća", "placa"], back: "plaća = salary.", tts: "Plaća je dobra." },
    { front: "»I want to become a doctor« = Želim ___ liječnik.", answers: ["postati"], back: "Želim postati liječnik. (postati + NOM)", tts: "Želim postati liječnik." },
  ],
  notes: {
    inOneSentence: {
      en: "raditi kao takes the plain nominative — Radim kao konobar — and profession pairs build their feminines with -ica.",
      exampleHr: "Radim kao konobar. · Ana radi kao učiteljica. · Zarađujem dobro.",
    },
    deepDive: [
      {
        title: "kao — the anti-case",
        body:
          "After two lessons of instrumental endings, **kao** is a vacation: whatever follows it stays in the **nominative**, because kao makes an equation, not a relation: *ja = konobar*.\n\nThe same green flag flies over **postati** (to become) and, as you've known since U2, over **biti**: *Marko je konobar. Radim kao konobar. Želim postati konobar.* Three frames, one plain form.\n\nEnglish trap: »work AS« tempts nobody, but »work LIKE« does — *Radim kao konj* (I work like a horse) also exists, same kao, same NOM. Croatian doesn't split as/like.",
      },
      {
        title: "The feminine factory",
        body:
          "Croatian derives professional feminines productively — almost always **-ica** (colloquially you will also hear -ka: programerka):\n\nThe pattern is live: meet a new masculine profession, and you can usually build the feminine yourself. (A few resist or vary — jezik lives!)",
        table: {
          caption: "The derivation patterns",
          headers: ["pattern", "examples"],
          rows: [
            ["-ik → -ica", "radnik → radnica · liječnik → liječnica"],
            ["+ -ica", "učitelj → učiteljica · vozač → vozačica · kuhar → kuharica"],
            ["colloquial -ka", "programerka — standard: programerica"],
            ["suppletive-ish", "konobar → konobarica"],
          ],
        },
      },
      {
        title: "Workday frames — everything recycled",
        body:
          "A full work-life paragraph uses only old machinery:\n\n- **Times (U6):** *Počinjem u osam, završavam u četiri.*\n- **Modals (U11):** *Moram raditi u subotu. Ne mogu doći na sastanak.*\n- **Future (U9):** *Sutra ću raditi s timom.*\n- **INS (L1/L2):** *Radim s kolegama? — careful, that's plural (U13 preview); for now: s kolegom, računalom.*\n- **Earning:** *Zarađujem dobro. Plaća je dobra.* (plaća = the money; plaćati = the paying — U7's verb.)",
      },
    ],
    commonMistakes: [
      {
        wrong: "Radim kao konobarom.",
        right: "Radim kao konobar.",
        why: "kao takes NOM — the INS habit from L1/L2 must not leak here.",
      },
      {
        wrong: "Radim kao učiteljicom. (said by a woman)",
        right: "Radim kao učiteljica.",
        why: "Same green flag for feminines: plain NOM.",
      },
      {
        wrong: "Ana je učitelj.",
        right: "Ana je učiteljica.",
        why: "Use the feminine pair for a woman — the -ica forms are standard, not optional.",
      },
      {
        wrong: "plaća vs plaćati mixed: »Moja plaćam je dobra.«",
        right: "Moja plaća je dobra. / Plaćam karticom.",
        why: "plaća = the salary (noun); plaćati = to pay (verb).",
      },
    ],
    memoryHooks: [
      "kao = equals sign: ja = konobar, no endings on an equation.",
      "-ica is the feminine uniform: radnica, vozačica, učiteljica.",
      "zarađujem joins the -ujem payroll: kupujem, putujem, stanujem, zarađujem.",
      "plaća pays, plaćati is paying — the noun keeps the money.",
    ],
    connects: [
      { label: "Professions & gender (Unit 2 L3)", lessonId: "a1u2l3" },
      { label: "The -ujem family (Unit 7 L5)", lessonId: "a1u7l5" },
      { label: "INS — what kao must NOT copy (Unit 12 L1)", lessonId: "a2u12l1" },
      { label: "Next: Na fakultetu (Unit 12 L4)", lessonId: "a2u12l4" },
    ],
    selfCheck: [
      { q: "“I work as a waiter” = ?", a: "Radim kao konobar. (kao + NOM)" },
      { q: "Why is »kao konobarom« wrong?", a: "kao takes the nominative — no instrumental after it." },
      { q: "Feminines of vozač and programer?", a: "vozačica, programerica." },
      { q: "“I earn well” = ?", a: "Zarađujem dobro." },
      { q: "“I want to become a teacher (f)” = ?", a: "Želim postati učiteljica." },
    ],
  },
};
