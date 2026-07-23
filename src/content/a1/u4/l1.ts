import type { Lesson } from "@/types/content";

/**
 * A1 U4 L1 — Akuzativ! (ACC singular: fem -u; masc/neut inanimate = NOM)
 * Spec: curriculum/A1/unit-4.md · grammar-reference §3 (ACC rows).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u4` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: ACC singular only — feminine -a → -u; masculine/neuter INANIMATE
 * = NOM (no change). Animate masculine (-a) is deferred to L4.
 */
export const a1u4l1: Lesson = {
  id: "a1u4l1",
  unitId: "a1u4",
  title: "Akuzativ!",
  titleEn: "The accusative — direct objects",
  grammarTags: ["accusative", "acc-singular"],
  estMinutes: 18,
  vocab: [
    { id: "a1u4.kruh", image: "/img/kruh.png", hr: "kruh", en: "bread", pos: "noun", gender: "m", icon: "🍞", exampleHr: "Imam kruh.", exampleEn: "I have bread." },
    { id: "a1u4.sir", image: "/img/sir.png", hr: "sir", en: "cheese", pos: "noun", gender: "m", icon: "🧀", exampleHr: "Imam kruh i sir.", exampleEn: "I have bread and cheese." },
    { id: "a1u4.jabuka", image: "/img/jabuka.png", hr: "jabuka", en: "apple", pos: "noun", gender: "f", icon: "🍎", exampleHr: "Imam jabuku.", exampleEn: "I have an apple." },
    { id: "a1u4.juha", image: "/img/juha.png", hr: "juha", en: "soup", pos: "noun", gender: "f", icon: "🍲", exampleHr: "Juhu, molim!", exampleEn: "Soup, please!" },
    { id: "a1u4.salata", image: "/img/salata.png", hr: "salata", en: "salad", pos: "noun", gender: "f", icon: "🥗", exampleHr: "Imam salatu.", exampleEn: "I have a salad." },
    { id: "a1u4.riba", image: "/img/riba.png", hr: "riba", en: "fish", pos: "noun", gender: "f", icon: "🐟", exampleHr: "Imam ribu.", exampleEn: "I have fish." },
    { id: "a1u4.meso", image: "/img/meso.png", hr: "meso", en: "meat", pos: "noun", gender: "n", icon: "🍖", exampleHr: "Imam meso.", exampleEn: "I have meat." },
    { id: "a1u4.mlijeko", image: "/img/mlijeko.png", hr: "mlijeko", en: "milk", pos: "noun", gender: "n", icon: "🥛", exampleHr: "Imam mlijeko.", exampleEn: "I have milk." },
    { id: "a1u4.sok", image: "/img/sok.png", hr: "sok", en: "juice", pos: "noun", gender: "m", icon: "🧃", exampleHr: "Imam sok.", exampleEn: "I have juice." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Akuzativ!",
      subtitle: "Since Unit 1 you've said “Kavu, molim.” Today you find out WHY it's kavu.",
      emoji: "🎯",
      items: [
        { emoji: "🔴", label: "The ACC rule", hint: "feminine -a → -u" },
        { emoji: "🍞", label: "…and the “no change” half", hint: "kruh, sok, meso stay the same" },
        { emoji: "🍎", label: "Foods", hint: "kruh, sir, jabuka, juha…" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + order two things" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The accusative rule",
      subtitle: "The case for the direct object — and only feminine words change shape.",
      emoji: "🔴",
      items: [
        { emoji: "♀️", label: "feminine -a → -u", hint: "kava → kavu, juha → juhu" },
        { emoji: "🗺️", label: "When do I use it?", hint: "things you have / ask for" },
        { emoji: "✅", label: "Quick check", hint: "pick the right form" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's foods",
      vocabIds: [
        "a1u4.kruh", "a1u4.sir", "a1u4.jabuka", "a1u4.juha", "a1u4.salata",
        "a1u4.riba", "a1u4.meso", "a1u4.mlijeko", "a1u4.sok",
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "The accusative: the direct-object case",
      body:
        "The **accusative (ACC)** marks the thing an action lands on — the thing you *have*, *ask for*, *drink*, *eat*. You've been using it since day one: **Kav**u**, molim!** and **Imam sestr**u**.**\n\nThe rule is friendlier than it sounds: **feminine -a nouns change -a → -u** (kava → kav**u**). **Masculine and neuter things don't change at all** — that's the next slide.",
      diagram: {
        kind: "usage-map",
        caseId: "ACC",
        boxes: [
          { label: "the thing you HAVE (imati)", examples: [{ hr: "Imam jabuku.", en: "I have an apple." }] },
          { label: "the thing you ASK FOR (molim)", examples: [{ hr: "Juhu, molim!", en: "Soup, please!" }] },
          { label: "the thing a verb acts on (Unit 4)", examples: [{ hr: "Pijem kavu.", en: "I drink coffee." }] },
        ],
      },
      table: {
        caption: "ACC singular — only feminine changes",
        headers: ["gender", "NOM", "ACC"],
        colCase: [null, "NOM", "ACC"],
        rows: [
          ["feminine -a", "kava", "kavu"],
          ["masc. inanimate", "kruh", "kruh (=NOM)"],
          ["neuter", "meso", "meso (=NOM)"],
        ],
      },
      examples: [
        { hr: "Imam jabuku.", en: "I have an apple.", note: "jabuka → jabuku (-a → -u)", highlight: { text: "jabuku", caseId: "ACC" } },
        { hr: "Juhu, molim!", en: "Soup, please!", note: "juha → juhu", highlight: { text: "Juhu", caseId: "ACC" } },
        { hr: "Imam salatu i sok.", en: "I have a salad and juice.", note: "salatu changes; sok doesn't", highlight: { text: "salatu", caseId: "ACC" } },
        { hr: "Imam kruh i sir.", en: "I have bread and cheese.", note: "both masculine — no change" },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: the feminine -u",
      items: [
        {
          prompt: "Molim ___! (salad)",
          options: ["salatu", "salata", "salate"],
          correctIndex: 0,
          explanation: "salata is feminine → ACC salatu.",
        },
        {
          prompt: "Imam ___. (fish)",
          options: ["ribu", "riba", "ribo"],
          correctIndex: 0,
          explanation: "riba → ribu (-a → -u).",
        },
        {
          prompt: "___, molim! (soup)",
          options: ["Juhu", "Juha", "Juhe"],
          correctIndex: 0,
          explanation: "juha → juhu in the accusative.",
        },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The “no change” half: masc & neuter things",
      body:
        "Here's the easy part: **masculine and neuter inanimate nouns look exactly the same in the accusative as in the nominative.** *Imam kruh* — same *kruh*. *Pijem mlijeko* — same *mlijeko*.\n\nThat's the rule, not an exception: only feminine -a nouns take a visible ending. (Masculine **people/animals** are a special case — that's L4.)",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Fem changes, things don't",
        text: "kava → kavu ✅ · but kruh → kruh, sok → sok, meso → meso, mlijeko → mlijeko (no change).",
      },
      table: {
        caption: "Masculine & neuter inanimate: ACC = NOM",
        headers: ["word", "NOM", "ACC"],
        rows: [
          ["bread (m)", "kruh", "kruh"],
          ["juice (m)", "sok", "sok"],
          ["meat (n)", "meso", "meso"],
          ["milk (n)", "mlijeko", "mlijeko"],
        ],
      },
      examples: [
        { hr: "Imam kruh i sir.", en: "I have bread and cheese.", note: "masculine — unchanged" },
        { hr: "Pijem mlijeko.", en: "I drink milk.", note: "neuter — unchanged" },
      ],
    },
    {
      id: "s07",
      type: "match",
      prompt: "Match the food to English",
      pairs: [
        { a: "kruh", b: "bread" },
        { a: "sir", b: "cheese" },
        { a: "jabuka", b: "apple" },
        { a: "riba", b: "fish" },
        { a: "meso", b: "meat" },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Put the -u to work (and leave the others alone), then order aloud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the object", hint: "ribu · Juhu · sok" },
        { emoji: "⌨️", label: "Type two phrases", hint: "Imam jabuku · Juhu, molim" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Order two things", hint: "Juhu i kruh, molim!" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Imam ___.",
      blanks: [["ribu"]],
      translation: "I have fish.",
      wordBank: ["ribu", "riba", "ribe"],
      explanation: "riba is feminine → ACC ribu.",
    },
    {
      id: "s10",
      type: "fill",
      text: "___, molim!",
      blanks: [["Juhu"]],
      translation: "Soup, please!",
      wordBank: ["Juhu", "Juha", "Juhe"],
      explanation: "juha → juhu (feminine -a → -u).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Imam ___ i kruh.",
      blanks: [["sok"]],
      translation: "I have juice and bread.",
      wordBank: ["sok", "soku", "soka"],
      explanation: "sok is masculine inanimate → no change (still sok).",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I have an apple.”",
      answers: ["Imam jabuku.", "Imam jabuku", "imam jabuku"],
      explanation: "jabuka → jabuku (-a → -u).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “Soup, please.”",
      answers: ["Juhu, molim.", "Juhu, molim", "juhu molim", "Juhu molim"],
      explanation: "juha → juhu; the classic café accusative.",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Imam salatu i sok.",
      explanation: "Imam salatu i sok — salatu changes (f), sok doesn't (m).",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Juhu, molim!",
      explanation: "Juhu, molim! — soup, please (juha → juhu).",
    },
    {
      id: "s16",
      type: "speak",
      targetHr: "Juhu i kruh, molim!",
      targetEn: "order two things aloud — Soup and bread, please!",
      phonetic: "YOO-hoo ee krooh, MO-leem",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1 & 3",
      items: [
        {
          prompt: "From Unit 1 — “Kavu, molim!” Why kavu, not kava?",
          options: ["it's the accusative (the thing asked for)", "it's plural", "it's a typo"],
          correctIndex: 0,
          explanation: "kava → kavu: it's the ACC object of molim — the chunk you've said all along.",
        },
        {
          prompt: "Listen: what does she have?",
          tts: "Imam sestru i brata.",
          options: ["a sister and a brother", "a soup and bread", "a salad and juice"],
          correctIndex: 0,
          explanation: "Imam sestru (Unit 3 chunk) — now you know sestru is the accusative of sestra.",
        },
        {
          prompt: "Listen: which is being asked for?",
          tts: "Juhu, molim.",
          options: ["soup", "juice", "milk"],
          correctIndex: 0,
          explanation: "Juhu = the accusative of juha (soup).",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: what does he have?",
      tts: "Imam jabuku i mlijeko.",
      options: ["an apple and milk", "bread and cheese", "fish and salad"],
      correctIndex: 0,
      explanation: "jabuku (f, changed) and mlijeko (n, unchanged).",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The accusative** is the case for the direct object — the thing you have, ask for, drink or eat. The rule: **feminine -a → -u** (kava → kav**u**, juha → juh**u**, riba → rib**u**). **Masculine and neuter things don't change** (kruh, sok, meso, mlijeko stay the same).\n\nThose Unit 1 and Unit 3 chunks — *Kavu, molim*, *Imam sestru* — were the accusative all along.\n\nNext lesson: your workhorse verb class, **-am** (gledam, kuham, čekam).",
      vocabIds: [
        "a1u4.kruh", "a1u4.sir", "a1u4.jabuka", "a1u4.juha", "a1u4.salata",
        "a1u4.riba", "a1u4.meso", "a1u4.mlijeko", "a1u4.sok",
      ],
    },
  ],
  srsCloze: [
    { front: "Pijem ___. (kava)", answers: ["kavu"], back: "Pijem kavu. (kava f → -u)", tts: "Pijem kavu." },
    { front: "Imam ___. (jabuka)", answers: ["jabuku"], back: "Imam jabuku. (jabuka f → -u)", tts: "Imam jabuku." },
    { front: "___, molim! (soup)", answers: ["juhu"], back: "Juhu, molim! (juha f → -u)", tts: "Juhu, molim!" },
    { front: "Imam ___. (riba)", answers: ["ribu"], back: "Imam ribu. (riba f → -u)", tts: "Imam ribu." },
    { front: "Imam ___ i kruh. (sok)", answers: ["sok"], back: "Imam sok i kruh. (sok m inanimate → no change)", tts: "Imam sok i kruh." },
    { front: "Jedem ___. (meso)", answers: ["meso"], back: "Jedem meso. (meso n → no change)", tts: "Jedem meso." },
  ],
  notes: {
    inOneSentence: {
      en: "The accusative marks the direct object; feminine -a nouns take -u, while masculine and neuter inanimate nouns are unchanged.",
      exampleHr: "kava → kavu · but kruh → kruh, meso → meso",
    },
    deepDive: [
      {
        title: "The rule, and the payoff",
        body:
          "The accusative is the direct-object case. In the singular only **feminine -a** nouns show a change: **-a → -u** (kava→kavu, juha→juhu, riba→ribu, jabuka→jabuku, salata→salatu). **Masculine and neuter inanimate** nouns are identical to the nominative (kruh, sir, sok, meso, mlijeko). Masculine **animate** nouns (people, animals) are the one remaining piece — they take -a, and that's Lesson 4.\n\nThis lesson is the payoff for months of chunks: *Kavu, molim* (Unit 1), *Imam sestru*, *Imam mačku* (Unit 3) were all accusatives — now you can build them yourself.",
        table: {
          caption: "ACC singular — the full picture",
          headers: ["gender", "NOM", "ACC", "changes?"],
          colCase: [null, "NOM", "ACC", null],
          rows: [
            ["feminine -a", "kava, juha, riba", "kavu, juhu, ribu", "yes → -u"],
            ["masc. inanimate", "kruh, sok, sir", "kruh, sok, sir", "no"],
            ["neuter", "meso, mlijeko", "meso, mlijeko", "no"],
            ["masc. animate (→ L4)", "konobar, brat", "konobara, brata", "yes → -a"],
          ],
        },
      },
      {
        title: "Where the accusative shows up",
        body:
          "So far: the thing you **have** (imati) and the thing you **ask for** (molim). From the next lessons it's also the thing a verb **acts on** — you drink (pijem), eat (jedem), cook (kuham), wait for (čekam). Whenever a noun is on the receiving end of the action, it's accusative.",
        diagram: {
          kind: "usage-map",
          caseId: "ACC",
          boxes: [
            { label: "have", examples: [{ hr: "Imam jabuku.", en: "I have an apple." }] },
            { label: "ask for", examples: [{ hr: "Salatu, molim.", en: "Salad, please." }] },
            { label: "act on (verbs)", examples: [{ hr: "Jedem juhu.", en: "I eat soup." }] },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Pijem kava",
        right: "Pijem kavu",
        why: "kava is the direct object → accusative kavu (-a → -u).",
      },
      {
        wrong: "Pijem soku / Imam soku",
        right: "Pijem sok / Imam sok",
        why: "sok is masculine inanimate — the accusative is identical to the nominative; don't add -u.",
      },
      {
        wrong: "Jedem mesu",
        right: "Jedem meso",
        why: "meso is neuter — no change in the accusative.",
      },
      {
        wrong: "Imam jabuka",
        right: "Imam jabuku",
        why: "jabuka is feminine → accusative jabuku.",
      },
    ],
    memoryHooks: [
      "Fem changes, things don't: -a → -u for feminine; masculine/neuter stay put.",
      "Every “___, molim!” you've said (Kavu, Juhu) was the accusative in disguise.",
      "Red case = accusative — the thing the action lands on.",
    ],
    connects: [
      { label: "“Kavu, molim” — the chunk from Unit 1", lessonId: "a1u1l5" },
      { label: "Imam sestru / mačku — Unit 3 chunks, now explained", lessonId: "a1u3l4" },
      { label: "Next: the -am verb class (Unit 4 L2)", lessonId: "a1u4l2" },
    ],
    selfCheck: [
      { q: "How do you say “I have a salad”?", a: "Imam salatu (salata → salatu)." },
      { q: "What is the accusative of sok?", a: "sok — masculine inanimate, no change." },
      { q: "Why is it “Kavu, molim” and not “Kava, molim”?", a: "kava is the accusative object of molim." },
      { q: "Which gender changes in the accusative singular, and to what?", a: "Feminine -a → -u." },
      { q: "What is the accusative of meso?", a: "meso — neuter, unchanged." },
    ],
  },
};
