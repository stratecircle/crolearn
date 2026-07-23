import type { Lesson } from "@/types/content";

/**
 * A1 U3 L2 — Njegov, njezin, njihov + čiji (his / her / their + whose)
 * Spec: curriculum/A1/unit-3.md · grammar-reference §4 (agreement), §15 (čiji).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u3` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: NOM only. njegov/njezin/njihov are the HARD type → neuter -o
 * (njegovo). The owner picks the word; the noun's gender picks the ending.
 */
export const a1u3l2: Lesson = {
  id: "a1u3l2",
  unitId: "a1u3",
  title: "Njegov, njezin, njihov",
  titleEn: "His, her, their + whose",
  grammarTags: ["possessives", "ciji"],
  estMinutes: 18,
  vocab: [
    { id: "a1u3.baka", image: "/img/baka.png", hr: "baka", en: "grandma", pos: "noun", gender: "f", icon: "👵", exampleHr: "To je njegova baka.", exampleEn: "That is his grandma." },
    { id: "a1u3.djed", image: "/img/djed.png", hr: "djed", en: "grandpa", pos: "noun", gender: "m", icon: "👴", exampleHr: "To je njezin djed.", exampleEn: "That is her grandpa." },
    { id: "a1u3.muz", image: "/img/muz.png", hr: "muž", en: "husband", pos: "noun", gender: "m", icon: "🤵", exampleHr: "Njezin muž je konobar.", exampleEn: "Her husband is a waiter." },
    { id: "a1u3.dijete", image: "/img/dijete.png", hr: "dijete", en: "child", pos: "noun", gender: "n", icon: "🧒", exampleHr: "Njihovo dijete je tu.", exampleEn: "Their child is here." },
    { id: "a1u3.unuk", image: "/img/unuk.png", hr: "unuk", en: "grandson", pos: "noun", gender: "m", icon: "👦", exampleHr: "To je njihov unuk.", exampleEn: "That is their grandson." },
    { id: "a1u3.unuka", image: "/img/unuka.png", hr: "unuka", en: "granddaughter", pos: "noun", gender: "f", icon: "👧", exampleHr: "To je njihova unuka.", exampleEn: "That is their granddaughter." },
    { id: "a1u3.njegov", hr: "njegov", en: "his (njegov / njegova / njegovo)", pos: "pron", icon: "👨", exampleHr: "Njegov brat je student.", exampleEn: "His brother is a student." },
    { id: "a1u3.njezin", hr: "njezin", en: "her (njezin / njezina / njezino)", pos: "pron", icon: "👩", exampleHr: "Njezina sestra je liječnica.", exampleEn: "Her sister is a doctor." },
    { id: "a1u3.njihov", hr: "njihov", en: "their (njihov / njihova / njihovo)", pos: "pron", icon: "👨‍👩‍👧", exampleHr: "Njihovo dijete je tu.", exampleEn: "Their child is here." },
    { id: "a1u3.ciji", hr: "čiji", en: "whose (čiji / čija / čije)", pos: "pron", icon: "❓", exampleHr: "Čiji je to brat?", exampleEn: "Whose brother is that?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Njegov, njezin, njihov",
      subtitle: "His and her — the trap every English speaker falls into. Dodge it today.",
      emoji: "👪",
      items: [
        { emoji: "🎯", label: "The two-step rule", hint: "owner picks the word, noun picks the ending" },
        { emoji: "👵", label: "Grandparents & more", hint: "baka, djed, muž, dijete…" },
        { emoji: "❓", label: "Whose? — čiji", hint: "čiji / čija / čije" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + answer aloud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The two-step rule",
      subtitle: "Step 1: who owns it? Step 2: what gender is the thing?",
      emoji: "🎯",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "moj/moja from L1" },
        { emoji: "1️⃣", label: "Owner → word", hint: "on→njegov · ona→njezin · oni→njihov" },
        { emoji: "2️⃣", label: "Noun → ending", hint: "-∅ / -a / -o" },
        { emoji: "✅", label: "Quick check", hint: "pick his vs her" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's possessives",
      items: [
        {
          prompt: "From L1: sestra is feminine, so “my sister” is…",
          options: ["moja sestra", "moj sestra", "moje sestra"],
          correctIndex: 0,
          explanation: "The possessive copies the noun's gender — today his/her/their will do the same.",
        },
        {
          prompt: "From Unit 1: on = he, ona = she, oni = …",
          options: ["they", "we", "you"],
          correctIndex: 0,
          explanation: "oni = they. Today each of these picks its own possessive: on→njegov, ona→njezin, oni→njihov.",
        },
        {
          prompt: "Listen: whose dad is an engineer?",
          tts: "Naš tata je inženjer.",
          options: ["ours", "mine", "yours"],
          correctIndex: 0,
          explanation: "naš = our (L1) — and tata is masculine, so naš.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u3.baka", "a1u3.djed", "a1u3.muz", "a1u3.dijete", "a1u3.unuk",
        "a1u3.unuka", "a1u3.njegov", "a1u3.njezin", "a1u3.njihov", "a1u3.ciji",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Owner picks the word · noun picks the ending",
      body:
        "Two steps, never one:\n\n**Step 1 — who owns it?** on → **njegov** (his), ona → **njezin** (her), oni → **njihov** (their).\n\n**Step 2 — what gender is the thing owned?** add the ending: m → -∅, f → -a, n → -o.\n\nSo *Ana's brother* = **njezin brat** (her, + masculine brat). The English trap: don't match the ending to the owner — match it to the thing. These are the **hard type**, so neuter is **-o** (njegovo), unlike moje/naše.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Whose?", emoji: "👤", example: "on→njegov · ona→njezin · oni→njihov" },
          { label: "Gender of the thing?", emoji: "🚻", example: "m -∅ · f -a · n -o" },
          { label: "Put together", emoji: "🔗", example: "Ana + brat → njezin brat" },
        ],
      },
      table: {
        caption: "njegov / njezin / njihov agree with the noun (NOM sg)",
        headers: ["owner", "m: brat", "f: sestra", "n: dijete"],
        rows: [
          ["on → njegov (his)", "njegov brat", "njegova sestra", "njegovo dijete"],
          ["ona → njezin (her)", "njezin brat", "njezina sestra", "njezino dijete"],
          ["oni → njihov (their)", "njihov brat", "njihova sestra", "njihovo dijete"],
        ],
      },
      examples: [
        { hr: "To je njegova sestra.", en: "That is his sister.", note: "on + sestra (f) → njegova" },
        { hr: "Njezin muž je konobar.", en: "Her husband is a waiter.", note: "ona + muž (m) → njezin" },
        { hr: "Njihovo dijete je tu.", en: "Their child is here.", note: "oni + dijete (n) → njihovo (-o)" },
        { hr: "Njegov brat je student.", en: "His brother is a student.", note: "on + brat (m) → njegov" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: his or her?",
      items: [
        {
          prompt: "Ana ima brata. To je ___ brat. (Ana's brother)",
          options: ["njezin", "njegov", "njihov"],
          correctIndex: 0,
          explanation: "The owner is Ana (ona) → njezin. (brat is masculine → base form njezin.)",
        },
        {
          prompt: "Marko ima sestru. To je ___ sestra. (Marko's sister)",
          options: ["njegova", "njezina", "njihova"],
          correctIndex: 0,
          explanation: "Owner Marko (on) → njegov; sestra is feminine → njegova.",
        },
        {
          prompt: "Ana i Marko imaju dijete. To je ___ dijete. (their child)",
          options: ["njihovo", "njegovo", "njezino"],
          correctIndex: 0,
          explanation: "Owner is they (oni) → njihov; dijete is neuter → njihovo (-o).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Asking “whose?” — čiji / čija / čije",
      body:
        "To ask **whose?**, use **čiji** — and it agrees with the noun just like a possessive: **čiji** (m), **čija** (f), **čije** (n).\n\n*Čiji je to brat?* (Whose brother is that?) · *Čija je to baka?* · *Čije je to dijete?* — answer with njegov/njezin/njihov.\n\nMore family: **baka** (grandma), **djed** (grandpa), **muž** (husband), **unuk/unuka** (grandson/granddaughter). Note **žena** now also means *wife*.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "čiji agrees too",
        text: "čiji brat? (m) · čija sestra? (f) · čije dijete? (n) — endings -i / -a / -e.",
      },
      table: {
        caption: "čiji + answer",
        headers: ["question", "example answer"],
        rows: [
          ["Čiji je to djed?", "To je njezin djed."],
          ["Čija je to baka?", "To je njegova baka."],
          ["Čije je to dijete?", "Njihovo."],
        ],
      },
      examples: [
        { hr: "Čija je to baka? — To je njegova baka.", en: "Whose grandma is that? — That is his grandma." },
        { hr: "Čije je to dijete? — Njihovo.", en: "Whose child is that? — Theirs." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each question to its answer (the endings tell you)",
      pairs: [
        { a: "Čiji je to djed?", b: "Njezin." },
        { a: "Čija je to baka?", b: "Njegova." },
        { a: "Čije je to dijete?", b: "Njihovo." },
        { a: "Odakle si?", b: "Iz Kanade." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Answer “whose?”, take dictation, and reply out loud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill his/her/their", hint: "njegov / njezin / njihov" },
        { emoji: "⌨️", label: "Type two phrases", hint: "njezin djed · njihovo dijete" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Answer aloud", hint: "Čiji je to brat?" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Čija je to baka? To je ___ baka. (Ana's)",
      blanks: [["njezina"]],
      translation: "Whose grandma is that? That is her grandma.",
      wordBank: ["njezin", "njezina", "njezino"],
      explanation: "Owner Ana (ona) → njezin; baka is feminine → njezina.",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ muž je konobar. (Ana's)",
      blanks: [["Njezin"]],
      translation: "Her husband is a waiter.",
      wordBank: ["Njezin", "Njezina", "Njezino"],
      explanation: "Owner Ana (ona) → njezin; muž is masculine → base form Njezin.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ dijete je tu. (Marko's)",
      blanks: [["Njegovo"]],
      translation: "His child is here.",
      wordBank: ["Njegov", "Njegova", "Njegovo"],
      explanation: "Owner Marko (on) → njegov; dijete is neuter → Njegovo (-o).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “her grandpa”",
      answers: ["njezin djed", "Njezin djed"],
      explanation: "Owner = her (njezin); djed is masculine → njezin djed.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “their child”",
      answers: ["njihovo dijete", "Njihovo dijete"],
      explanation: "Owner = they (njihov); dijete is neuter → njihovo dijete.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Njegova žena je Njemica.",
      explanation: "Njegova žena je Njemica — his wife is a German (žena = wife; Njemica from Unit 2).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "To je njihova unuka.",
      explanation: "To je njihova unuka — that is their granddaughter (unuka is feminine → njihova).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "To je njegov brat.",
      targetEn: "answer “Čiji je to brat?” → That is his brother.",
      phonetic: "toh yeh NYEH-gov braht",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–2",
      items: [
        {
          prompt: "Listen: what nationality is his wife?",
          tts: "Njegova žena je Hrvatica.",
          options: ["Croatian", "German", "English"],
          correctIndex: 0,
          explanation: "Hrvatica = a Croatian woman (Unit 2).",
        },
        {
          prompt: "From Unit 1: which word asks WHO someone is?",
          options: ["tko", "čiji", "kako"],
          correctIndex: 0,
          explanation: "tko = who (Unit 1); today's new question word is čiji = whose.",
        },
        {
          prompt: "Listen: what does her husband do?",
          tts: "Njezin muž je liječnik.",
          options: ["a doctor", "a teacher", "a waiter"],
          correctIndex: 0,
          explanation: "liječnik = doctor (Unit 2).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: whose sister is a student, and is she his or hers?",
      tts: "Njegova sestra je studentica.",
      options: ["his sister", "her sister", "their sister"],
      correctIndex: 0,
      explanation: "njegova → his (studentica = student, Unit 2).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Two steps:** the OWNER picks the word — on→**njegov**, ona→**njezin**, oni→**njihov** — and the NOUN picks the ending (m -∅ · f -a · n **-o**). So Ana's brother = **njezin brat**.\n\nAsk *whose?* with **čiji / čija / čije**, agreeing with the noun.\n\nDon't fall for the English trap: *njegova sestra* = **his** sister (the -a follows sestra, not him!).\n\nNext lesson: more than one — **NOM plurals** (sestre, studenti, sela).",
      vocabIds: [
        "a1u3.baka", "a1u3.djed", "a1u3.muz", "a1u3.dijete", "a1u3.unuk",
        "a1u3.unuka", "a1u3.njegov", "a1u3.njezin", "a1u3.njihov", "a1u3.ciji",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "To je ___ sestra. (his)", answers: ["njegova"], back: "To je njegova sestra. (sestra f → -a, but still HIS sister)", tts: "To je njegova sestra." },
    { front: "To je ___ muž. (her)", answers: ["njezin"], back: "To je njezin muž.", tts: "To je njezin muž." },
    { front: "To je ___ dijete. (their)", answers: ["njihovo"], back: "To je njihovo dijete. (hard type → -o)", tts: "To je njihovo dijete." },
    { front: "___ je to baka? (whose)", answers: ["čija"], back: "Čija je to baka? (baka f → čija)", tts: "Čija je to baka?" },
  ],
  notes: {
    inOneSentence: {
      en: "The owner chooses the word (njegov/njezin/njihov); the noun's gender chooses the ending.",
      exampleHr: "njegova sestra · njezin muž · njihovo dijete",
    },
    deepDive: [
      {
        title: "Two steps, in this order",
        body:
          "**Step 1 (word):** who is the owner? on → njegov, ona → njezin, oni/one → njihov.\n\n**Step 2 (ending):** what gender is the thing owned? m → -∅, f → -a, n → -o.\n\nThese three are the **hard** possessive type (like the adjective *nov*), so the neuter ending is **-o**: njegovo, njezino, njihovo — different from moje/tvoje/naše/vaše, which are soft (-e).",
        table: {
          caption: "his / her / their — NOM singular",
          headers: ["", "masculine", "feminine", "neuter"],
          rows: [
            ["njegov (his)", "njegov", "njegova", "njegovo"],
            ["njezin (her)", "njezin", "njezina", "njezino"],
            ["njihov (their)", "njihov", "njihova", "njihovo"],
          ],
        },
      },
      {
        title: "čiji — the “whose?” word",
        body:
          "**čiji** asks about ownership and agrees with the noun just like a possessive: čiji (m), čija (f), čije (n). *Čiji je to djed? Čija je to baka? Čije je to dijete?* Answer with njegov/njezin/njihov, agreeing the same way.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Question and answer agree",
          text: "Čija je to sestra? → njegova / njezina. The -a runs through both because sestra is feminine.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ana's brother = njegov brat",
        right: "njezin brat",
        why: "The owner is Ana (ona) → njezin; don't pick the word from the noun's gender.",
      },
      {
        wrong: "his sister = njegov sestra",
        right: "njegova sestra",
        why: "The ending follows the thing owned; sestra is feminine → njegova.",
      },
      {
        wrong: "njihove dijete",
        right: "njihovo dijete",
        why: "njegov/njezin/njihov are the hard type — neuter ending is -o, not -e.",
      },
      {
        wrong: "čiji dijete",
        right: "čije dijete",
        why: "čiji agrees with the noun; dijete is neuter → čije.",
      },
    ],
    memoryHooks: [
      "Owner picks the WORD, thing picks the ENDING — say it before every guess.",
      "njegovA sestra is still HIS sister — the -a is the sister's, not his.",
      "Hard type = hard -o ending: njegovo, njezino, njihovo (vs soft moje, naše).",
    ],
    connects: [
      { label: "moj/tvoj/naš + agreement (Unit 3 L1)", lessonId: "a1u3l1" },
      { label: "Adjective agreement dobar/dobra/dobro (Unit 2 L3)", lessonId: "a1u2l3" },
      { label: "Next: NOM plural -i / -e / -a (Unit 3 L3)", lessonId: "a1u3l3" },
    ],
    selfCheck: [
      { q: "Ana has a sister — how do you say “her sister”?", a: "njezina sestra (ona → njezin; sestra f → njezina)." },
      { q: "Why is “his sister” njegova and not njegov?", a: "The ending follows sestra (feminine), not the owner." },
      { q: "What is “their child”?", a: "njihovo dijete — dijete is neuter, hard type → -o." },
      { q: "How do you ask “whose grandma is that?”", a: "Čija je to baka? (baka is feminine → čija)." },
      { q: "Which possessive words are soft (-e neuter) and which are hard (-o)?", a: "Soft: moj/tvoj/naš/vaš (moje…). Hard: njegov/njezin/njihov (njegovo…)." },
    ],
  },
};
