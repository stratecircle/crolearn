import type { Lesson } from "@/types/content";

/**
 * A1 U1 L2 — Slova i glasovi II (The 8 "new" letters: č ć dž đ lj nj š ž)
 * Spec: curriculum/A1/unit-1.md · Style: follows the a1u1l1 exemplar.
 */
export const a1u1l2: Lesson = {
  id: "a1u1l2",
  unitId: "a1u1",
  title: "Slova i glasovi II",
  titleEn: "The 8 new letters",
  grammarTags: ["phonetics", "alphabet", "digraphs"],
  estMinutes: 17,
  vocab: [
    { id: "a1u1.caj", image: "/img/caj.png", hr: "čaj", en: "tea", pos: "noun", gender: "m", icon: "🍵", image: "/img/caj.png", exampleHr: "Čaj i kava.", exampleEn: "Tea and coffee." },
    { id: "a1u1.covjek", image: "/img/covjek.png", hr: "čovjek", en: "person / man", pos: "noun", gender: "m", icon: "🧍", image: "/img/covjek.png", exampleHr: "Žena i čovjek.", exampleEn: "A woman and a man." },
    { id: "a1u1.dak", image: "/img/dak.png", hr: "đak", en: "pupil", pos: "noun", gender: "m", icon: "🎒", image: "/img/dak.png", exampleHr: "On je đak.", exampleEn: "He is a pupil." },
    { id: "a1u1.dzep", image: "/img/dzep.png", hr: "džep", en: "pocket", pos: "noun", gender: "m", icon: "👖", image: "/img/dzep.png", exampleHr: "Njegov džep.", exampleEn: "His pocket." },
    { id: "a1u1.ljeto", image: "/img/ljeto.png", hr: "ljeto", en: "summer", pos: "noun", gender: "n", icon: "☀️", image: "/img/ljeto.png", exampleHr: "To je ljeto.", exampleEn: "That is summer." },
    { id: "a1u1.njegov", hr: "njegov", en: "his", pos: "pron", exampleHr: "Njegov čaj.", exampleEn: "His tea." },
    { id: "a1u1.skola", image: "/img/skola.png", hr: "škola", en: "school", pos: "noun", gender: "f", icon: "🏫", image: "/img/skola.png", exampleHr: "To je škola.", exampleEn: "That is a school." },
    { id: "a1u1.zena", image: "/img/zena.png", hr: "žena", en: "woman / wife", pos: "noun", gender: "f", icon: "👩", image: "/img/zena.png", exampleHr: "Žena i čovjek.", exampleEn: "A woman and a man." },
    { id: "a1u1.cao", hr: "ćao", en: "hi / bye (casual)", pos: "interj", icon: "👋", exampleHr: "Ćao! Kako si?", exampleEn: "Hi! How are you?", tags: ["greeting"] },
    { id: "a1u1.hrvatska", image: "/img/hrvatska.png", hr: "Hrvatska", en: "Croatia", pos: "noun", gender: "f", icon: "🇭🇷", image: "/img/hrvatska.png", exampleHr: "To je Hrvatska.", exampleEn: "That is Croatia." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Slova i glasovi II",
      subtitle: "The 8 letters English doesn't have — and then you can read anything.",
      emoji: "🏁",
      items: [
        { emoji: "🎩", label: "The new sounds", hint: "š ž č ć dž đ — hats and tails" },
        { emoji: "👂", label: "lj & nj + full dictation", hint: "ljeto, čovjek, džep, Hrvatska…" },
        { emoji: "✍️", label: "Put it to work", hint: "žena, čaj — write, fill, build" },
        { emoji: "🎯", label: "Recap + 10 new flashcards" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The new sounds: š ž č ć dž đ",
      subtitle: "Two easy sounds, then four on a hard↔soft slider.",
      emoji: "🎩",
      items: [
        { emoji: "👟", label: "š & ž — sounds you already make", hint: "shoe, measure" },
        { emoji: "🪨", label: "Hard: č and dž", hint: "čaj, džep" },
        { emoji: "🪶", label: "Soft: ć and đ", hint: "ćao, đak" },
        { emoji: "🔎", label: "Spot the right spelling", hint: "listen-and-choose checks" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u1.caj", "a1u1.covjek", "a1u1.dak", "a1u1.dzep", "a1u1.ljeto",
        "a1u1.njegov", "a1u1.skola", "a1u1.zena", "a1u1.cao", "a1u1.hrvatska",
      ],
    },
    {
      id: "s04",
      type: "match",
      prompt: "Connect the picture to the word — every one hides a special letter. Say them out loud!",
      pairs: [
        { a: "/img/caj.png", b: "čaj" },
        { a: "/img/skola.png", b: "škola" },
        { a: "/img/zena.png", b: "žena" },
        { a: "/img/ljeto.png", b: "ljeto" },
        { a: "/img/dak.png", b: "đak" },
        { a: "/img/dzep.png", b: "džep" },
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Eight new letters — starting with š and ž",
      body:
        "Last lesson you got the golden rule; today you get the last **8 letters** English doesn't have: **č ć dž đ lj nj š ž** — after this deck you can read *any* Croatian word ever written.\n\nFirst, two sounds you already make in English every day. The little hat (kvačica ˇ) is not decoration: **s ≠ š**. It changes the letter completely.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Still one letter = one sound",
        text: "Each of the 8 — even the two-character ones lj, nj, dž — is ONE letter with ONE sound. The golden rule never breaks.",
      },
      table: {
        caption: "š and ž",
        headers: ["letter", "sound", "as in…", "example"],
        rows: [
          ["š", "sh", "**sh**oe", "**š**kola (school)"],
          ["ž", "zh", "mea**s**ure, vi**si**on", "**ž**ena (woman)"],
        ],
      },
      examples: [
        { hr: "škola", en: "school", note: "ŠKO-la — š = sh" },
        { hr: "žena", en: "woman", note: "ŽE-na — ž like the s in “measure”" },
        { hr: "Dobra večer!", en: "Good evening!", note: "review from L1 — and now you can hear that č properly" },
      ],
      ttsChips: ["škola", "žena"],
    },
    {
      id: "s06",
      type: "listen-type",
      tts: "škola",
      explanation: "škola — school. The hat makes it sh.",
    },
    {
      id: "s07",
      type: "listen-type",
      tts: "žena",
      explanation: "žena — woman. ž = the s in “measure”.",
    },
    {
      id: "s08",
      type: "teach",
      title: "č vs ć, dž vs đ — hard and soft",
      body:
        "Two “ch” letters and two “j” letters, on a hard↔soft slider.\n\n**Learner's secret:** many native speakers barely distinguish these pairs in speech. Get the *spelling* right, say something in between, and relax.",
      diagram: {
        kind: "contrast",
        left: {
          title: "HARD",
          emoji: "🪨",
          lines: [
            { hr: "č — čaj", en: "hard ch as in “church” — tea" },
            { hr: "dž — džep", en: "hard j as in “judge” — pocket" },
          ],
        },
        right: {
          title: "SOFT",
          emoji: "🪶",
          lines: [
            { hr: "ć — ćao", en: "soft ch, t + y-ish — hi/bye" },
            { hr: "đ — đak", en: "soft j, d + y-ish — pupil" },
          ],
        },
      },
      examples: [
        { hr: "čaj", en: "tea", note: "hard č — CHai" },
        { hr: "Ćao!", en: "Hi! / Bye! (casual)", note: "soft ć — Croatia's favourite Italian import" },
        { hr: "džep", en: "pocket", note: "dž is ONE letter — hard j" },
        { hr: "đak", en: "pupil", note: "soft đ — d + y-ish" },
      ],
      ttsChips: ["čaj", "ćao", "džep", "đak"],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: spot the right spelling",
      items: [
        {
          prompt: "Listen. Which spelling is correct? (tea)",
          tts: "čaj",
          options: ["čaj", "ćaj"],
          correctIndex: 0,
          explanation: "Tea is čaj with hard č. Spelling is fixed per word — when in doubt, learn the word's letter with the word.",
        },
        {
          prompt: "Listen. Which spelling is correct? (hi/bye)",
          tts: "ćao",
          options: ["ćao", "čao"],
          correctIndex: 0,
          explanation: "Ćao is spelled with soft ć — like Italian “ciao”, its ancestor.",
        },
        {
          prompt: "Listen. Which spelling is correct? (pupil)",
          tts: "đak",
          options: ["đak", "džak"],
          correctIndex: 0,
          explanation: "đak — soft đ. Hear the d + y flavour and pick đ, not the hard dž.",
        },
      ],
    },
    {
      id: "s10",
      type: "section",
      title: "Part 2 · lj, nj — and reading everything",
      subtitle: "The last two letters, then dictation on real words.",
      emoji: "👂",
      items: [
        { emoji: "🗣️", label: "lj & nj — one sound each", hint: "million, canyon" },
        { emoji: "🎧", label: "Listen & type", hint: "ljeto, čovjek, džep, Hrvatska" },
        { emoji: "🧲", label: "Match letters to sounds" },
        { emoji: "🎤", label: "Speak: čaj, ljeto" },
      ],
    },
    {
      id: "s11",
      type: "teach",
      title: "lj and nj — two characters, one sound",
      body:
        "The last two letters look like pairs but are **single sounds** — say the consonant and y at the exact same time.",
      table: {
        caption: "lj and nj",
        headers: ["letter", "sound", "as in…", "example"],
        rows: [
          ["lj", "l+y together", "mi**lli**on", "**lj**eto (summer)"],
          ["nj", "n+y together", "ca**ny**on", "**nj**egov (his)"],
        ],
      },
      examples: [
        { hr: "ljeto", en: "summer", note: "LJE-to — lj is one letter" },
        { hr: "njegov džep", en: "his pocket", note: "nj as in “canyon”" },
        { hr: "čovjek", en: "person / man", note: "ČO-vjek — č + the je you already know" },
        { hr: "Hrvatska", en: "Croatia", note: "syllabic r from L1 — HR-vat-ska" },
      ],
      ttsChips: ["ljeto", "njegov"],
    },
    {
      id: "s12",
      type: "listen-type",
      tts: "ljeto",
      explanation: "ljeto — summer. lj = the lli in “million”.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "čovjek",
      explanation: "čovjek — person. Hard č, then o-v-j-e-k, every letter pronounced.",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "džep",
      explanation: "džep — pocket. dž is one letter: the j in “judge”.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Hrvatska",
      answers: ["Hrvatska", "hrvatska"],
      explanation: "Hrvatska — Croatia. No helper vowel: HR-vat-ska.",
    },
    {
      id: "s16",
      type: "match",
      prompt: "Match the letter to its sound",
      pairs: [
        { a: "š", b: "sh (shoe)" },
        { a: "ž", b: "s (measure)" },
        { a: "č", b: "hard ch (church)" },
        { a: "lj", b: "lli (million)" },
        { a: "nj", b: "ny (canyon)" },
      ],
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "čaj",
      targetEn: "tea",
      phonetic: "chai",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "ljeto",
      targetEn: "summer",
      phonetic: "LYEH-to (l+y as one sound)",
    },
    {
      id: "s19",
      type: "section",
      title: "Part 3 · Put it to work",
      subtitle: "Write, fill and build with your new letters — plus a Lesson 1 flashback.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the gaps", hint: "Žena i čovjek · Čaj i kava" },
        { emoji: "⌨️", label: "Write žena — diacritics included" },
        { emoji: "🔁", label: "Lesson 1 review", hint: "voda, Dobro jutro!" },
        { emoji: "🔀", label: "Build: Dobar dan, Hrvatska!" },
      ],
    },
    {
      id: "s20",
      type: "fill",
      text: "Žena i ___.",
      blanks: [["čovjek"]],
      translation: "A woman and a man.",
      wordBank: ["čovjek", "džep", "čaj"],
      explanation: "žena = woman, čovjek = person/man.",
    },
    {
      id: "s21",
      type: "fill",
      text: "___ i kava.",
      blanks: [["Čaj", "čaj"]],
      translation: "Tea and coffee.",
      wordBank: ["Čaj", "Džep", "Đak"],
      explanation: "čaj = tea. Hard č — and now you can spell it.",
    },
    {
      id: "s22",
      type: "type",
      prompt: "Write it in Croatian: “woman”",
      answers: ["žena"],
      explanation: "žena — mind the ž: the hat is part of the letter.",
    },
    {
      id: "s23",
      type: "type",
      prompt: "Write it in Croatian: “his pocket”",
      answers: ["njegov džep"],
      explanation: "njegov džep — nj is one sound (canyon), dž is one letter (judge). njegov = his: a set phrase for now — possessives are formally Unit 3's topic.",
    },
    {
      id: "s24",
      type: "type",
      review: true,
      prompt: "Write it in Croatian: “water” (from Lesson 1)",
      answers: ["voda"],
      explanation: "voda — pure vowels, VO-da. L1 material stays warm.",
    },
    {
      id: "s25",
      type: "listen-type",
      review: true,
      tts: "Dobro jutro!",
      answers: ["Dobro jutro", "dobro jutro"],
      explanation: "Dobro jutro! — good morning, straight from Lesson 1.",
    },
    {
      id: "s26",
      type: "reorder",
      words: ["Dobar", "dan", "Hrvatska"],
      answers: ["Dobar dan Hrvatska", "Dobar dan, Hrvatska!"],
      en: "Good day, Croatia!",
      explanation: "You just read (and built) a sentence with a syllabic r — the alphabet is officially yours.",
    },
    {
      id: "s27",
      type: "recap",
      summary:
        "**The alphabet is complete:** š = sh, ž = “measure”, č/dž hard vs ć/đ soft (natives barely split them — spell right, relax), lj and nj are single sounds (million, canyon).\n\nYou can now read **every Croatian word that exists**. Next lesson we start actually *saying things*: Ja sam… — who you are, in three words.",
      vocabIds: [
        "a1u1.caj", "a1u1.covjek", "a1u1.dak", "a1u1.dzep", "a1u1.ljeto",
        "a1u1.njegov", "a1u1.skola", "a1u1.zena", "a1u1.cao", "a1u1.hrvatska",
      ],
    },
  ],
  notes: {
    inOneSentence: {
      en: "The 8 letters English lacks — č ć dž đ lj nj š ž — are each ONE letter with ONE fixed sound, and with them the 30-letter alphabet is complete.",
      exampleHr: "Čaj, žena, škola, ljeto — sve možeš pročitati.",
    },
    deepDive: [
      {
        title: "The 8 new letters — complete chart",
        body:
          "Croatian's alphabet has 30 letters; 22 you can already read with Lesson 1's rules (remember: j = y, c = ts). These are the other 8. Note that **lj, nj, dž** are written with two characters but count (and alphabetize) as single letters.",
        table: {
          caption: "All 8, with anchors",
          headers: ["letter", "sound", "as in…", "example"],
          rows: [
            ["š", "sh", "shoe", "škola"],
            ["ž", "zh", "measure", "žena"],
            ["č", "hard ch", "church", "čaj, čovjek"],
            ["ć", "soft ch (t+y)", "—", "ćao"],
            ["dž", "hard j", "judge", "džep"],
            ["đ", "soft j (d+y)", "—", "đak"],
            ["lj", "l+y as one", "million", "ljeto"],
            ["nj", "n+y as one", "canyon", "njegov"],
          ],
        },
      },
      {
        title: "č vs ć and dž vs đ — how much should you worry?",
        body:
          "Hard (č, dž) uses the flat of the tongue further back; soft (ć, đ) presses the tongue toward the palate, with a y-flavour. In much of Croatia the spoken difference is tiny.\n\nYour contract as a learner: **spell each word correctly** (that part is binary), pronounce something reasonable in between (that part is forgiving).",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Priorities",
          text: "Spelling č/ć/dž/đ correctly matters everywhere (it's letters, not accents). Pronouncing them distinctly is a lifelong polish item — not an A1 blocker.",
        },
      },
      {
        title: "lj and nj — one sound, not two",
        body:
          "Don't say l…then j. Say them **simultaneously**: *ljeto* is LJE-to (2 syllables), not li-JE-to (3). Same for nj: *njegov* = NJE-gov.\n\nWith these, every Croatian word is now readable: **čovjek** (short je — ijekavian), **Hrvatska** (syllabic r), **doviđenja** (coming in Lesson 5 — read it now, you can!).",
      },
    ],
    commonMistakes: [
      { wrong: "Reading š as plain s (skola)", right: "ŠKO-la (sh)", why: "The kvačica ˇ makes a different letter, not a decorated s." },
      { wrong: "ljeto as “li-JE-to” (l + j separately)", right: "LJE-to — lj is one sound", why: "lj/nj/dž are single letters written with two characters." },
      { wrong: "Typing c for č/ć because “close enough”", right: "čaj, ćao — exact letters", why: "Diacritics are letters, not decoration; c, č and ć are three different letters." },
      { wrong: "Panicking about hearing č vs ć", right: "Spell correctly, say something in between", why: "Many natives barely distinguish them in speech — spelling is what's fixed." },
    ],
    memoryHooks: [
      "Hat ˇ = harder/noisier (č, š, ž, dž); ć's acute ´ and đ's crossbar = softer, y-flavoured.",
      "lj = million, nj = canyon — two English words that already contain the sounds.",
      "ćao ← Italian ciao: soft, casual, Mediterranean.",
      "dž is the judge: džep (pocket) is where the judge keeps the verdict.",
    ],
    connects: [
      { label: "Slova i glasovi I (vowels, golden rule)", lessonId: "a1u1l1" },
      { label: "Ja sam… (your first sentences)", lessonId: "a1u1l3" },
    ],
    selfCheck: [
      { q: "How many letters does the Croatian alphabet have, and how many sounds can each make?", a: "30 letters; exactly one sound each — including lj, nj, dž." },
      { q: "What's the difference between č and ć?", a: "č is hard (church), ć is soft (t+y-ish) — and many natives barely distinguish them in speech; spelling is what's fixed." },
      { q: "How many syllables does ljeto have?", a: "Two: LJE-to. lj is a single sound." },
      { q: "Spell “woman” and “school” in Croatian.", a: "žena, škola — with ž and š." },
      { q: "Read aloud: Dobar dan, Hrvatska!", a: "DO-bar DAN, HR-vat-ska — syllabic r, every letter pronounced." },
    ],
  },
};
