import type { Lesson } from "@/types/content";

/**
 * A1 U3 L3 — Braća i sestre (NOM plural -i / -e / -a)
 * Spec: curriculum/A1/unit-3.md · grammar-reference §3 (NOM pl), §4 (adj pl).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u3` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: NOM only. Irregular trio brat→braća, dijete→djeca, čovjek→ljudi;
 * braća/djeca take -a agreement (Djeca su mala) with a plural verb (su).
 */
export const a1u3l3: Lesson = {
  id: "a1u3l3",
  unitId: "a1u3",
  title: "Braća i sestre",
  titleEn: "More than one — NOM plural",
  grammarTags: ["nom-plural", "adjective-agreement"],
  estMinutes: 18,
  vocab: [
    { id: "a1u3.djeca", image: "/img/djeca.png", hr: "djeca", en: "children (collective — takes -a agreement)", pos: "noun", gender: "f", icon: "🧒", exampleHr: "Djeca su dobra.", exampleEn: "The children are good." },
    { id: "a1u3.braca", image: "/img/braca.png", hr: "braća", en: "brothers (collective — takes -a agreement)", pos: "noun", gender: "f", icon: "👬", exampleHr: "Moja braća su mlada.", exampleEn: "My brothers are young." },
    { id: "a1u3.ljudi", image: "/img/ljudi.png", hr: "ljudi", en: "people", pos: "noun", gender: "m", icon: "👥", exampleHr: "Ljudi su dobri.", exampleEn: "The people are good." },
    { id: "a1u3.velik", image: "/img/velik.png", hr: "velik", en: "big", pos: "adj", icon: "🐘", exampleHr: "Grad je velik.", exampleEn: "The city is big." },
    { id: "a1u3.mali", image: "/img/mali.png", hr: "mali", en: "small (malen / mali)", pos: "adj", icon: "🐜", exampleHr: "Selo je malo.", exampleEn: "The village is small." },
    { id: "a1u3.mlad", image: "/img/mlad.png", hr: "mlad", en: "young", pos: "adj", icon: "🌱", exampleHr: "Moj brat je mlad.", exampleEn: "My brother is young." },
    { id: "a1u3.star", image: "/img/star.png", hr: "star", en: "old", pos: "adj", icon: "🌳", exampleHr: "Njegov djed je star.", exampleEn: "His grandpa is old." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Braća i sestre",
      subtitle: "One brother is brat. Two are… not brati. Meet the plural.",
      emoji: "👨‍👩‍👧‍👦",
      items: [
        { emoji: "🔢", label: "The -i / -e / -a rule", hint: "studenti · sestre · sela" },
        { emoji: "🃏", label: "The irregular trio", hint: "braća · djeca · ljudi" },
        { emoji: "📏", label: "Size & age words", hint: "velik, mali, mlad, star" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say a plural" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The plural endings",
      subtitle: "Masculine → -i, feminine → -e, neuter → -a. Adjectives follow.",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "possessives from L1–L2" },
        { emoji: "♂️", label: "m → -i", hint: "student → studenti" },
        { emoji: "♀️", label: "f → -e", hint: "sestra → sestre" },
        { emoji: "⚪", label: "n → -a", hint: "selo → sela" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: whose was it again?",
      items: [
        {
          prompt: "From L2: Ana's grandpa — his or her?",
          options: ["njezin djed", "njegov djed", "njihov djed"],
          correctIndex: 0,
          explanation: "Owner Ana (ona) → njezin. Today possessives grow plural endings too.",
        },
        {
          prompt: "From L1: tata is masculine, so “our dad” is…",
          options: ["naš tata", "naša tata", "naše tata"],
          correctIndex: 0,
          explanation: "The -a is a lie — tata is masculine (L1 trap word).",
        },
        {
          prompt: "Listen: what is his wife?",
          tts: "Njegova žena je Engleskinja.",
          options: ["English", "German", "Croatian"],
          correctIndex: 0,
          explanation: "Engleskinja (Unit 2) — and njegova žena = his wife (L2).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u3.djeca", "a1u3.braca", "a1u3.ljudi", "a1u3.velik",
        "a1u3.mali", "a1u3.mlad", "a1u3.star",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "One → many: -i / -e / -a",
      body:
        "To make a noun plural in the nominative:\n\n- masculine → **-i**: student → student**i**, grad → grad**ovi** (short m-words add -ov-)\n- feminine → **-e**: sestra → sestr**e**, žena → žen**e**\n- neuter → **-a**: selo → sel**a**, more → mor**a**\n\nAdjectives and possessives take the **same** plural endings: **moji** studenti, **moje** sestre, **stara** sela; and the verb becomes **su** (are).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "masculine", emoji: "♂️", example: "student → studenti (sin → sinovi)" },
          { label: "feminine", emoji: "♀️", example: "sestra → sestre" },
          { label: "neuter", emoji: "⚪", example: "selo → sela" },
        ],
      },
      table: {
        caption: "NOM plural — noun + adjective agree",
        headers: ["gender", "singular", "plural", "with adjective"],
        rows: [
          ["m → -i", "student", "studenti", "moji studenti"],
          ["f → -e", "sestra", "sestre", "moje sestre su mlade"],
          ["n → -a", "selo", "sela", "stara sela"],
        ],
      },
      examples: [
        { hr: "Mi smo studenti.", en: "We are students.", note: "m plural → -i" },
        { hr: "Moje sestre su mlade.", en: "My sisters are young.", note: "f plural: sestre + moje + mlade" },
        { hr: "Njegovi roditelji su stari.", en: "His parents are old.", note: "m plural: roditelji + njegovi + stari" },
        { hr: "Sela su mala.", en: "The villages are small.", note: "n plural → -a everywhere" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: make it plural",
      items: [
        {
          prompt: "žena (woman) → ?",
          options: ["žene", "ženi", "žena"],
          correctIndex: 0,
          explanation: "Feminine → -e: žene.",
        },
        {
          prompt: "student (student) → ?",
          options: ["studenti", "studente", "studenta"],
          correctIndex: 0,
          explanation: "Masculine → -i: studenti.",
        },
        {
          prompt: "selo (village) → ?",
          options: ["sela", "sele", "seli"],
          correctIndex: 0,
          explanation: "Neuter → -a: sela.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Three that break the rule: braća · djeca · ljudi",
      body:
        "Three everyday plurals are irregular — memorize them:\n\n- **brat** → **braća** (brothers)\n- **dijete** → **djeca** (children)\n- **čovjek** → **ljudi** (people)\n\nWatch the agreement: **braća** and **djeca** take **-a** adjectives but a **plural verb**: *Djeca **su** dobr**a***, *Moja braća su mlad**a***. (ljudi is a normal masculine plural: *dobr**i** ljudi*.)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The irregular trio",
        text: "brat→braća, dijete→djeca, čovjek→ljudi. Djeca su mala (–a, but plural su!). Ljudi su dobri.",
      },
      table: {
        caption: "Irregular plurals",
        headers: ["singular", "plural", "agreement"],
        rows: [
          ["brat", "braća", "Moja braća su mlada."],
          ["dijete", "djeca", "Djeca su dobra."],
          ["čovjek", "ljudi", "Ljudi su dobri."],
        ],
      },
      examples: [
        { hr: "Djeca su mala.", en: "The children are small.", note: "djeca → -a adjective, su verb" },
        { hr: "Ljudi su dobri.", en: "The people are good.", note: "ljudi → normal m plural (-i)" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match singular to its plural",
      pairs: [
        { a: "student", b: "studenti" },
        { a: "sestra", b: "sestre" },
        { a: "selo", b: "sela" },
        { a: "brat", b: "braća" },
        { a: "dijete", b: "djeca" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Build plurals, take dictation, and say one out loud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the plural", hint: "djeca · sestre · roditelji" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Ljudi su dobri · Moja braća su mlada" },
        { emoji: "🔀", label: "Build a sentence", hint: "moje · sestre · su · mlade" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say a plural", hint: "Mi smo studenti." },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Naša ___ su mala.",
      blanks: [["djeca"]],
      translation: "Our children are small.",
      wordBank: ["djeca", "braća", "ljudi"],
      explanation: "children = djeca (irregular); it takes -a agreement (mala) and su.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Moje ___ su mlade.",
      blanks: [["sestre"]],
      translation: "My sisters are young.",
      wordBank: ["sestre", "sestra", "sestri"],
      explanation: "feminine plural: sestra → sestre (with moje, mlade).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Njegovi ___ su stari.",
      blanks: [["roditelji"]],
      translation: "His parents are old.",
      wordBank: ["roditelji", "roditelj", "roditelja"],
      explanation: "roditelji (parents) is masculine plural → njegovi … stari.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “The people are good.”",
      answers: ["Ljudi su dobri.", "Ljudi su dobri", "ljudi su dobri"],
      explanation: "ljudi (people) → masculine plural, so dobri and su.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “My brothers are young.”",
      answers: ["Moja braća su mlada.", "Moja braća su mlada", "moja braća su mlada"],
      explanation: "braća takes -a agreement: moja braća su mlada.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Moje", "sestre", "su", "mlade"],
      answers: ["Moje sestre su mlade.", "Moje sestre su mlade"],
      en: "My sisters are young.",
      explanation: "Plural agreement all the way through: moje + sestre + su + mlade.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Moje sestre su mlade.",
      explanation: "Moje sestre su mlade — my sisters are young (feminine plural).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ljudi su dobri.",
      explanation: "Ljudi su dobri — the people are good.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Mi smo studenti.",
      targetEn: "say a plural sentence about yourselves — We are students.",
      phonetic: "mee smoh stoo-DEN-tee",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–2",
      items: [
        {
          prompt: "From Unit 1: one student (m) is a student — two are…",
          options: ["studenti", "studente", "studentice"],
          correctIndex: 0,
          explanation: "student → studenti (masculine plural).",
        },
        {
          prompt: "Listen: are these people good?",
          tts: "Dobri ljudi.",
          options: ["yes — good people", "no — bad people", "they are tired"],
          correctIndex: 0,
          explanation: "dobar → plural dobri; dobri ljudi = good people.",
        },
        {
          prompt: "From Unit 2: Hrvat (a Croat man) — the plural “Croats” is…",
          options: ["Hrvati", "Hrvate", "Hrvatica"],
          correctIndex: 0,
          explanation: "Hrvat → Hrvati (masculine plural -i).",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen: how are the children?",
      tts: "Djeca su dobra.",
      options: ["good", "small", "young"],
      correctIndex: 0,
      explanation: "Djeca su dobra — the children are good (djeca takes -a, verb su).",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**NOM plural:** masculine → **-i** (studenti; short words add -ov-: sin→sinovi) · feminine → **-e** (sestre) · neuter → **-a** (sela). Adjectives and possessives match, and the verb is **su**.\n\n**The irregular trio:** brat→**braća**, dijete→**djeca**, čovjek→**ljudi**. braća and djeca take **-a** agreement (Djeca su mala) with a plural verb.\n\nNext lesson: your second verb — **imati** (to have) — and who you have (Imam brata i sestru).",
      vocabIds: [
        "a1u3.djeca", "a1u3.braca", "a1u3.ljudi", "a1u3.velik",
        "a1u3.mali", "a1u3.mlad", "a1u3.star",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "brat → ___ (the plural)", answers: ["braća"], back: "brat → braća (irregular collective).", tts: "braća" },
    { front: "dijete → ___ (the plural)", answers: ["djeca"], back: "dijete → djeca (irregular collective).", tts: "djeca" },
    { front: "čovjek → ___ (the plural)", answers: ["ljudi"], back: "čovjek → ljudi (a different word entirely).", tts: "ljudi" },
    { front: "sin → ___ (the plural)", answers: ["sinovi"], back: "sin → sinovi (short m-words add -ov-).", tts: "sinovi" },
    { front: "sestra → ___ (the plural)", answers: ["sestre"], back: "sestra → sestre (f → -e).", tts: "sestre" },
    { front: "Djeca su ___. (small)", answers: ["mala"], back: "Djeca su mala. (djeca → -a agreement, plural su)", tts: "Djeca su mala." },
  ],
  notes: {
    inOneSentence: {
      en: "Nominative plural is masculine -i, feminine -e, neuter -a — with three irregulars: braća, djeca, ljudi.",
      exampleHr: "studenti · sestre · sela · (braća, djeca, ljudi)",
    },
    deepDive: [
      {
        title: "The regular endings",
        body:
          "In the nominative plural: **m → -i**, **f → -e**, **n → -a**. Many short masculine nouns insert **-ov-** (or **-ev-** after č ć đ š ž j lj nj): sin → sin**ov**i, grad → grad**ov**i, muž → muž**ev**i.\n\nEverything in the noun phrase agrees: possessives moji/moje/moja, adjectives mladi/mlade/mlada, stari/stare/stara — and biti becomes **su**.",
        table: {
          caption: "Plural agreement across genders",
          headers: ["", "masculine", "feminine", "neuter"],
          rows: [
            ["noun", "studenti", "sestre", "sela"],
            ["possessive (my)", "moji", "moje", "moja"],
            ["adjective (old)", "stari", "stare", "stara"],
          ],
        },
      },
      {
        title: "The irregular trio",
        body:
          "**brat → braća**, **dijete → djeca**, **čovjek → ljudi**. braća and djeca are collective forms that look singular but mean plural: they take a **plural verb** (su) yet **-a** adjectives — *Djeca su dobra*, *Moja braća su mlada*. **ljudi** behaves like a normal masculine plural — *dobri ljudi*, *Ljudi su dobri*.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Memorize the three shapes",
          text: "braća / djeca → “su … -a” · ljudi → “su … -i”. Never brati, djece (as subject), or čovjeci.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "brati / bratovi (for “brothers”)",
        right: "braća",
        why: "brat has the irregular collective plural braća.",
      },
      {
        wrong: "Djeca je dobra",
        right: "Djeca su dobra",
        why: "djeca means several children — the verb is plural (su), even though the word looks singular.",
      },
      {
        wrong: "Moje sestre je mlade",
        right: "Moje sestre su mlade",
        why: "Plural subject → plural verb su, and the adjective takes the plural ending -e.",
      },
      {
        wrong: "čovjeci (for “people”)",
        right: "ljudi",
        why: "čovjek has the suppletive plural ljudi.",
      },
    ],
    memoryHooks: [
      "m -i, f -e, n -a — the same three endings run through noun, possessive and adjective.",
      "The trio to memorize: braća, djeca, ljudi — brothers, children, people.",
      "braća & djeca: plural verb (su) but -a adjective — “su … -a”.",
    ],
    connects: [
      { label: "Noun gender (Unit 2 L1) — the singular that these pluralize", lessonId: "a1u2l1" },
      { label: "Possessives (Unit 3 L1–L2) — now in the plural (moji, njihova)", lessonId: "a1u3l1" },
      { label: "Next: imati + who you have (Unit 3 L4)", lessonId: "a1u3l4" },
    ],
    selfCheck: [
      { q: "What is the plural of sestra?", a: "sestre (feminine → -e)." },
      { q: "What is the plural of selo?", a: "sela (neuter → -a)." },
      { q: "How do you say “brothers” and “children”?", a: "braća and djeca — irregular collectives." },
      { q: "Is it “Djeca je” or “Djeca su”?", a: "Djeca su — plural meaning takes a plural verb." },
      { q: "What is the plural of čovjek?", a: "ljudi (a suppletive plural)." },
    ],
  },
};
