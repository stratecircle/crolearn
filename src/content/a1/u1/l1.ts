import type { Lesson } from "@/types/content";

/**
 * A1 U1 L1 — Slova i glasovi I (The alphabet: read as written)
 * Spec: curriculum/A1/unit-1.md · CONTENT EXEMPLAR — all lessons follow this style.
 */
export const a1u1l1: Lesson = {
  id: "a1u1l1",
  unitId: "a1u1",
  title: "Slova i glasovi I",
  titleEn: "The alphabet: read as written",
  grammarTags: ["phonetics", "alphabet", "vowels"],
  estMinutes: 16,
  vocab: [
    { id: "a1u1.da", hr: "da", en: "yes", pos: "interj", icon: "👍", exampleHr: "Da, dobro je.", exampleEn: "Yes, it's good." },
    { id: "a1u1.ne", hr: "ne", en: "no", pos: "interj", icon: "👎", exampleHr: "Kava? — Ne, voda!", exampleEn: "Coffee? — No, water!" },
    { id: "a1u1.i", hr: "i", en: "and", pos: "conj", exampleHr: "Kava i voda.", exampleEn: "Coffee and water." },
    { id: "a1u1.dobro", hr: "dobro", en: "good / well", pos: "adv", icon: "✨", exampleHr: "Dobro jutro!", exampleEn: "Good morning!" },
    { id: "a1u1.jutro", image: "/img/jutro.png", hr: "jutro", en: "morning", pos: "noun", gender: "n", icon: "🌅", image: "/img/jutro.png", exampleHr: "Dobro jutro!", exampleEn: "Good morning!" },
    { id: "a1u1.dan", image: "/img/dan.png", hr: "dan", en: "day", pos: "noun", gender: "m", icon: "🌤️", image: "/img/dan.png", exampleHr: "Dobar dan!", exampleEn: "Good day! (hello)" },
    { id: "a1u1.vecer", image: "/img/vecer.png", hr: "večer", en: "evening", pos: "noun", gender: "f", icon: "🌆", image: "/img/vecer.png", exampleHr: "Dobra večer!", exampleEn: "Good evening!" },
    { id: "a1u1.noc", image: "/img/noc.png", hr: "noć", en: "night", pos: "noun", gender: "f", icon: "🌙", image: "/img/noc.png", exampleHr: "Dan i noć.", exampleEn: "Day and night." },
    { id: "a1u1.kava", image: "/img/kava.png", hr: "kava", en: "coffee", pos: "noun", gender: "f", icon: "☕", image: "/img/kava.png", exampleHr: "Kava i voda.", exampleEn: "Coffee and water." },
    { id: "a1u1.voda", image: "/img/voda.png", hr: "voda", en: "water", pos: "noun", gender: "f", icon: "💧", image: "/img/voda.png", exampleHr: "Voda i kava.", exampleEn: "Water and coffee." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Slova i glasovi I",
      subtitle: "The alphabet, read exactly as written — your first Croatian superpower.",
      emoji: "🔤",
      items: [
        { emoji: "🥇", label: "The golden rule", hint: "one letter = one sound, forever" },
        { emoji: "🎵", label: "The five pure vowels", hint: "a e i o u — no shape-shifting" },
        { emoji: "👂", label: "Ear training", hint: "hear real words, type what you hear" },
        { emoji: "✍️", label: "Your first words", hint: "kava, voda, dobro jutro…" },
        { emoji: "🎤", label: "Say it out loud", hint: "your first spoken Croatian" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The golden rule",
      subtitle: "Why Croatian spelling never lies — and the five vowels that prove it.",
      emoji: "🥇",
      items: [
        { emoji: "📜", label: "One letter, one sound" },
        { emoji: "🎵", label: "Vowels: a e i o u" },
        { emoji: "🔎", label: "Letters that trick English speakers", hint: "j, c … and vowel-r!" },
        { emoji: "🧩", label: "Quick checks along the way" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u1.da", "a1u1.ne", "a1u1.i", "a1u1.dobro", "a1u1.jutro",
        "a1u1.dan", "a1u1.vecer", "a1u1.noc", "a1u1.kava", "a1u1.voda",
      ],
    },
    {
      id: "s04",
      type: "match",
      prompt: "Connect the picture to the word — say each one out loud as you match",
      pairs: [
        { a: "/img/kava.png", b: "kava" },
        { a: "/img/voda.png", b: "voda" },
        { a: "/img/jutro.png", b: "jutro" },
        { a: "/img/noc.png", b: "noć" },
        { a: "/img/dan.png", b: "dan" },
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "One letter, one sound — and the 5 pure vowels",
      body:
        "Croatian is **100% phonetic** — no \"tough/though/through\" nonsense. After this lesson and the next, you'll pronounce **every Croatian word you ever see**.\n\nThe 5 vowels are always pure and identical in quality wherever they appear. Stress is never on the last syllable — most often the **first**.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The golden rule",
        text: "Read exactly as written. Every letter is pronounced, every letter always sounds the same.",
      },
      table: {
        caption: "The vowels — always the same sound",
        headers: ["letter", "sound", "as in…", "example"],
        rows: [
          ["a", "ah", "f**a**ther", "d**a**n, k**a**v**a**"],
          ["e", "eh", "b**e**d", "n**e**, v**e**čer"],
          ["i", "ee", "mach**i**ne", "**i** (= and)"],
          ["o", "oh", "n**o**te (short)", "d**o**br**o**, v**o**da"],
          ["u", "oo", "r**u**le", "j**u**tro"],
        ],
      },
      examples: [
        { hr: "voda", en: "water", note: "VO-da — stress on the first syllable" },
        { hr: "kava", en: "coffee", note: "both a's identical — KA-va" },
        { hr: "jutro", en: "morning", note: "j = English y: YU-tro" },
        { hr: "Dobro jutro!", en: "Good morning!" },
        { hr: "Da, kava i voda.", en: "Yes, coffee and water." },
        { hr: "dan", en: "day" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the sounds",
      items: [
        {
          prompt: "Which English sound does Croatian j make?",
          options: ["y as in “yes”", "j as in “jam”", "h as in “hat”"],
          correctIndex: 0,
          explanation: "j = y, always. That's why jutro sounds like “YU-tro”.",
        },
        {
          prompt: "And Croatian c — which sound is it (always)?",
          options: ["ts as in “cats”", "k as in “cat”", "s as in “city”"],
          correctIndex: 0,
          explanation: "c = ts, every single time.",
        },
        {
          prompt: "kava — how do the two a's sound?",
          tts: "kava",
          options: ["Both identical: “ah”", "First long, second like “uh”", "Like English “cave”"],
          correctIndex: 0,
          explanation: "Vowels never reduce — KA-va.",
        },
        {
          prompt: "ne (no) — the e sounds like…",
          tts: "ne",
          options: ["“eh” as in bed", "“ee” as in see", "silent"],
          correctIndex: 0,
          explanation: "e = eh, always. No letter is ever silent.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The whole alphabet at a glance",
      body:
        "Here it is — all **30 letters**. With today's rules you can already read 22 of them. The **⭐ eight** (č ć dž đ lj nj š ž) are next lesson's whole job.\n\nAnd the vowels? Say them with your mouth, not your memory:",
      table: {
        caption: "The Croatian alphabet — ⭐ = new letters, taught next lesson",
        headers: ["a", "b", "c", "č ⭐", "ć ⭐", "d"],
        rows: [
          ["dž ⭐", "đ ⭐", "e", "f", "g", "h"],
          ["i", "j", "k", "l", "lj ⭐", "m"],
          ["n", "nj ⭐", "o", "p", "r", "s"],
          ["š ⭐", "t", "u", "v", "z", "ž ⭐"],
        ],
      },
      diagram: {
        kind: "flow",
        steps: [
          { label: "a", emoji: "👄", example: "open wide — “ah”" },
          { label: "e", emoji: "🙂", example: "relaxed — “eh”" },
          { label: "i", emoji: "😁", example: "smile — “ee”" },
          { label: "o", emoji: "😮", example: "round — “oh”" },
          { label: "u", emoji: "😗", example: "pucker — “oo”" },
        ],
      },
    },
    {
      id: "s08",
      type: "teach",
      title: "Bonus: r can be a vowel!",
      body:
        "Croatian **r can act as a vowel** — some words have no “normal” vowel at all and still work fine: **prst** (finger), **trg** (square), **Hrvatska** (Croatia).\n\nRoll the r a little and let it carry the syllable: *Hr-vat-ska*.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Don't insert a vowel",
        text: "Hrvatska is HR-vat-ska, not “Her-vatska”. Trust the r!",
      },
      ttsChips: ["prst", "trg", "Hrvatska"],
    },
    {
      id: "s09",
      type: "match",
      prompt: "Match the letter to its sound",
      pairs: [
        { a: "j", b: "y (yes)" },
        { a: "c", b: "ts (cats)" },
        { a: "i", b: "ee (machine)" },
        { a: "e", b: "eh (bed)" },
        { a: "u", b: "oo (rule)" },
      ],
    },
    {
      id: "s10",
      type: "section",
      title: "Part 2 · Train your ear and fingers",
      subtitle: "Dictation is the fastest way to own a phonetic language.",
      emoji: "👂",
      items: [
        { emoji: "🎧", label: "Listen & type — 4 real words", hint: "slow-replay button included" },
        { emoji: "⌨️", label: "Type Croatian yourself", hint: "č ć đ š ž buttons are under the box" },
        { emoji: "🧩", label: "Fill the gaps" },
        { emoji: "🔀", label: "Build your first sentence", hint: "Da, kava i voda." },
      ],
    },
    {
      id: "s11",
      type: "listen-type",
      tts: "voda",
      explanation: "voda — water. Pure vowels: VO-da.",
    },
    {
      id: "s12",
      type: "listen-type",
      tts: "dan",
      explanation: "dan — day.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "kava",
      explanation: "kava — coffee. Both a's identical.",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "jutro",
      explanation: "jutro — morning. j = y!",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “coffee”",
      answers: ["kava"],
      explanation: "kava — your most important Croatian word ☕",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Write it in Croatian: “good morning”",
      answers: ["dobro jutro"],
      explanation: "Dobro jutro! — jutro is neuter, so it's dobro (you'll see why in Unit 2).",
    },
    {
      id: "s17",
      type: "fill",
      text: "Dobro ___!",
      blanks: [["jutro"]],
      translation: "Good morning!",
      wordBank: ["jutro", "voda", "dan"],
      explanation: "Dobro jutro — THE morning greeting.",
    },
    {
      id: "s18",
      type: "fill",
      text: "Kava ___ voda.",
      blanks: [["i"]],
      translation: "Coffee and water.",
      wordBank: ["i", "da", "ne"],
      explanation: "i = and. One letter, pronounced “ee”.",
    },
    {
      id: "s19",
      type: "fill",
      text: "Dan i ___.",
      blanks: [["noć"]],
      translation: "Day and night.",
      wordBank: ["noć", "večer", "jutro"],
      explanation: "noć = night. Dan i noć — day and night.",
    },
    {
      id: "s20",
      type: "reorder",
      words: ["Da", "kava", "i", "voda"],
      answers: ["Da kava i voda", "Da, kava i voda."],
      en: "Yes, coffee and water.",
      explanation: "Your first Croatian sentence — and you can read every letter of it.",
    },
    {
      id: "s21",
      type: "section",
      title: "Part 3 · Real phrases & your voice",
      subtitle: "Two evening words, then your first Croatian out loud.",
      emoji: "🎤",
      items: [
        { emoji: "🌆", label: "večer & noć", hint: "evening and night" },
        { emoji: "🗣️", label: "Speak: dan · Dobro jutro!", hint: "mic or self-check — never blocked" },
        { emoji: "🎯", label: "Recap + your first flashcards", hint: "10 words head for your review deck" },
      ],
    },
    {
      id: "s22",
      type: "quiz-set",
      title: "Quick check: your first words in action",
      items: [
        {
          prompt: "Someone offers you coffee — and you definitely want it. What do you say?",
          options: ["Da!", "Ne!", "I!"],
          correctIndex: 0,
          explanation: "da = yes, ne = no, i = and.",
        },
        {
          prompt: "Listen: what does večer mean?",
          tts: "večer",
          options: ["evening", "morning", "water"],
          correctIndex: 0,
          explanation: "večer = evening (č is officially taught next lesson — your ear already caught it).",
        },
        {
          prompt: "Listen: Dan i noć — what does it mean?",
          tts: "dan i noć",
          options: ["Day and night", "Morning and evening", "Coffee and water"],
          correctIndex: 0,
          explanation: "dan = day, noć = night, i = and.",
        },
      ],
    },
    {
      id: "s23",
      type: "speak",
      targetHr: "dan",
      targetEn: "day",
      phonetic: "dahn",
    },
    {
      id: "s24",
      type: "speak",
      targetHr: "Dobro jutro!",
      targetEn: "Good morning!",
      phonetic: "DO-bro YU-tro",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Today's superpower:** Croatian is fully phonetic — read exactly as written, vowels always pure (a e i o u), j = y, c = ts, r can be a vowel (Hrvatska!), stress never on the last syllable.\n\nNext lesson: the 8 “new” letters (č ć dž đ lj nj š ž) — and then you can read *anything*.",
      vocabIds: [
        "a1u1.da", "a1u1.ne", "a1u1.i", "a1u1.dobro", "a1u1.jutro",
        "a1u1.dan", "a1u1.vecer", "a1u1.noc", "a1u1.kava", "a1u1.voda",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "The Croatian letter j sounds like the English ___ (as in \"jutro\").", answers: ["y"], back: "j = the English \"y\" sound: ja, jutro.", tts: "jutro" },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian spelling is a promise: one letter, one sound, every time — so you can already pronounce any word you see.",
      exampleHr: "Dobro jutro! Kava i voda.",
    },
    deepDive: [
      {
        title: "The vowel system (complete)",
        body:
          "English vowels shape-shift (*a* in cat/car/cake); Croatian vowels **never** do. Five sounds, five letters, zero exceptions. There is also no vowel reduction: unstressed vowels stay crisp — *voda* is VO-da, never “VO-duh”.",
        table: {
          caption: "Vowels — the whole story",
          headers: ["letter", "sound", "example", "pronounced"],
          rows: [
            ["a", "ah (father)", "kava", "KA-va"],
            ["e", "eh (bed)", "večer", "VE-cher"],
            ["i", "ee (machine)", "i", "ee"],
            ["o", "oh (short)", "dobro", "DO-bro"],
            ["u", "oo (rule)", "jutro", "YU-tro"],
          ],
        },
      },
      {
        title: "Consonants that trick English speakers",
        body:
          "- **j = y** (jutro = YU-tro). Never English “j”.\n- **c = ts** (think *cesta* “road” = TSEH-sta). Never “k”, never “s”.\n- **r** can be a syllable's vowel: prst, trg, Hrvatska.\n- Nothing is silent. Every letter earns its place.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "The #1 habit to break",
          text: "Reading Croatian words with English letter-sounds. When in doubt: vowels pure, j = y, read every letter.",
        },
      },
      {
        title: "Stress (naglasak) — the easy version",
        body:
          "Two rules cover you at A1:\n- **Never** the last syllable.\n- Usually the **first** syllable (JU-tro, KA-va, DO-bro, VE-čer).\n\nPitch details exist (Croatian has tonal accents) but natives will understand you perfectly with first-syllable stress — file it under “later”.",
      },
    ],
    commonMistakes: [
      { wrong: "jutro read as “JUH-troh” (English j)", right: "YU-tro", why: "j is always English y." },
      { wrong: "voda as “VOH-duh”", right: "VO-da (clean final a)", why: "Croatian has no vowel reduction — unstressed vowels stay pure." },
      { wrong: "Hrvatska as “Her-vatska”", right: "HR-vat-ska", why: "r carries the syllable itself; don't insert a helper vowel." },
      { wrong: "kavá (stressing the end)", right: "KA-va", why: "Stress never falls on the last syllable." },
    ],
    memoryHooks: [
      "“What you see is what you say” — Croatian spelling never lies.",
      "j = y: think “ja” = “ya”.",
      "The vowels are the Spanish/Italian five: a e i o u, pure and crisp.",
      "r is a tiny motor: brrr — prst, trg, Hrvatska.",
    ],
    connects: [
      { label: "Slova i glasovi II (č ć dž đ lj nj š ž)", lessonId: "a1u1l2" },
    ],
    selfCheck: [
      { q: "How many sounds can the letter a make in Croatian?", a: "Exactly one — “ah”. Every vowel has exactly one sound." },
      { q: "How do you pronounce j in jutro?", a: "Like English y: YU-tro." },
      { q: "What does c always sound like?", a: "ts, as in “cats”." },
      { q: "Where does stress never fall?", a: "On the last syllable (usually it's on the first)." },
      { q: "Say “Yes, coffee and water” in Croatian.", a: "Da, kava i voda." },
    ],
  },
};
