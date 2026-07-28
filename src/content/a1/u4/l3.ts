import type { Lesson } from "@/types/content";

/**
 * A1 U4 L3 — Volim, pijem, jedem (-im/-em classes + ACC practice)
 * Spec: curriculum/A1/unit-4.md · grammar-reference §7 (verb classes).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u4` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: -im (volim…vole) and -em (pijem…piju); jesti irregular (jedem…jedu).
 * 3pl traps: vole / piju / jedu (NOT volaju / pijaju). Objects use ACC from L1.
 */
export const a1u4l3: Lesson = {
  id: "a1u4l3",
  unitId: "a1u4",
  title: "Volim, pijem, jedem",
  titleEn: "The -im & -em classes",
  grammarTags: ["present-im", "present-em"],
  estMinutes: 18,
  vocab: [
    { id: "a1u4.piti", hr: "piti", en: "to drink (pijem)", pos: "verb", icon: "🥤", exampleHr: "Pijem kavu.", exampleEn: "I drink coffee." },
    { id: "a1u4.jesti", hr: "jesti", en: "to eat (jedem — irregular)", pos: "verb", icon: "🍴", exampleHr: "Jedem ribu.", exampleEn: "I eat fish." },
    { id: "a1u4.voljeti", hr: "voljeti", en: "to love / like (volim)", pos: "verb", icon: "❤️", exampleHr: "Volim voće.", exampleEn: "I love fruit." },
    { id: "a1u4.zeljeti", hr: "željeti", en: "to want / wish (želim)", pos: "verb", icon: "🙏", exampleHr: "Želim juhu.", exampleEn: "I want soup." },
    { id: "a1u4.pivo", image: "/img/pivo.png", hr: "pivo", en: "beer", pos: "noun", gender: "n", icon: "🍺", exampleHr: "Pijem pivo.", exampleEn: "I drink beer." },
    { id: "a1u4.vino", image: "/img/vino.png", hr: "vino", en: "wine", pos: "noun", gender: "n", icon: "🍷", exampleHr: "Volim vino.", exampleEn: "I love wine." },
    { id: "a1u4.voce", image: "/img/voce.png", hr: "voće", en: "fruit", pos: "noun", gender: "n", icon: "🍇", exampleHr: "Jedem voće.", exampleEn: "I eat fruit." },
    { id: "a1u4.povrce", image: "/img/povrce.png", hr: "povrće", en: "vegetables", pos: "noun", gender: "n", icon: "🥦", exampleHr: "Ne volim povrće.", exampleEn: "I don't like vegetables." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Volim, pijem, jedem",
      subtitle: "Two more ending sets and the whole present tense is yours.",
      emoji: "❤️",
      items: [
        { emoji: "🔢", label: "-im & -em classes", hint: "volim · pijem" },
        { emoji: "⚠️", label: "The 3pl trap", hint: "vole · piju · jedu (not volaju!)" },
        { emoji: "🍷", label: "Food & drink", hint: "pivo, vino, voće, povrće" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + likes & dislikes" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The other two classes",
      subtitle: "The infinitive won't tell you the class — learn the “ja” form with every verb.",
      emoji: "🔢",
      items: [
        { emoji: "❤️", label: "-im: volim…vole", hint: "voljeti, željeti, govoriti" },
        { emoji: "🥤", label: "-em: pijem…piju", hint: "piti, jesti (jedem)" },
        { emoji: "🧠", label: "Quick check", hint: "spot the 3pl" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's verbs & food",
      vocabIds: [
        "a1u4.piti", "a1u4.jesti", "a1u4.voljeti", "a1u4.zeljeti",
        "a1u4.pivo", "a1u4.vino", "a1u4.voce", "a1u4.povrce",
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "Three classes, one present tense",
      body:
        "You know the -am class. Here are the other two: the **-im class** (voljeti → **volim**…vole) and the **-em class** (piti → **pijem**…piju).\n\nThe catch: the infinitive doesn't tell you the class — so **learn the “ja” (1sg) form with every verb**. Watch the **oni** row especially: it's **vole** and **piju**, never “volaju” or “pijaju”.",
      table: {
        caption: "The three present-tense classes",
        headers: ["", "-am: gledati", "-im: voljeti", "-em: piti"],
        rows: [
          ["ja", "gledam", "volim", "pijem"],
          ["ti", "gledaš", "voliš", "piješ"],
          ["on / ona", "gleda", "voli", "pije"],
          ["mi", "gledamo", "volimo", "pijemo"],
          ["vi", "gledate", "volite", "pijete"],
          ["oni", "gledaju", "vole", "piju"],
        ],
      },
      examples: [
        { hr: "Pijem kavu, a Ana pije čaj.", en: "I drink coffee, and Ana drinks tea.", note: "-em: pijem / pije" },
        { hr: "Volim voće, ali ne volim povrće.", en: "I love fruit, but I don't like vegetables.", note: "-im: volim; voće/povrće don't change (n)" },
        { hr: "Oni piju vino.", en: "They drink wine.", note: "3pl → piju (not pijaju!)" },
        { hr: "Djeca vole mlijeko.", en: "The children love milk.", note: "3pl → vole (not volaju!)" },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: the 3pl trap",
      items: [
        {
          prompt: "Oni ___ pivo. (they drink)",
          options: ["piju", "pijemo", "pije"],
          correctIndex: 0,
          explanation: "oni → piju (-em class 3pl).",
        },
        {
          prompt: "Djeca ___ voće. (they love)",
          options: ["vole", "volaju", "voli"],
          correctIndex: 0,
          explanation: "oni/djeca → vole (never “volaju”).",
        },
        {
          prompt: "Ja ___ kavu. (I drink)",
          options: ["pijem", "pijim", "pijam"],
          correctIndex: 0,
          explanation: "piti → pijem (-em class).",
        },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "jesti (jedem) — irregular — and željeti (želim)",
      body:
        "**jesti** (to eat) is irregular but easy: **jedem, jedeš, jede, jedemo, jedete, jedu**.\n\n**željeti** (to want/wish) is a normal -im verb: **želim**. It's the polite “I'd like…” you'll use to order in Lesson 5 (Želim juhu, molim).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Learn the 1sg!",
        text: "piti → pijem · jesti → jedem · voljeti → volim · željeti → želim · govoriti → govorim. The “ja” form is the key to the whole verb.",
      },
      table: {
        caption: "jesti — irregular -em",
        headers: ["", "jesti"],
        rows: [
          ["ja", "jedem"],
          ["ti", "jedeš"],
          ["on / ona", "jede"],
          ["mi", "jedemo"],
          ["vi", "jedete"],
          ["oni", "jedu"],
        ],
      },
      examples: [
        { hr: "Jedeš li meso? — Ne, jedem ribu.", en: "Do you eat meat? — No, I eat fish." },
        { hr: "Želim juhu i kruh.", en: "I want soup and bread." },
      ],
    },
    {
      id: "s07",
      type: "match",
      prompt: "Match to English",
      pairs: [
        { a: "piti", b: "to drink" },
        { a: "jesti", b: "to eat" },
        { a: "voljeti", b: "to love" },
        { a: "vino", b: "wine" },
        { a: "povrće", b: "vegetables" },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Conjugate all three classes, then say what you love and don't.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the verb", hint: "piju · jedem · voće" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Vole vino · Ne pijem pivo" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Likes & dislikes", hint: "Volim… Ne volim…" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Djeca ___ mlijeko.",
      blanks: [["piju"]],
      translation: "The children drink milk.",
      wordBank: ["piju", "pijemo", "pije"],
      explanation: "djeca (3pl) → piju.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ja ___ salatu.",
      blanks: [["jedem"]],
      translation: "I eat a salad.",
      wordBank: ["jedem", "jedeš", "jedu"],
      explanation: "jesti → jedem; salata → salatu (ACC).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Volim ___, ne volim povrće.",
      blanks: [["voće"]],
      translation: "I love fruit, I don't like vegetables.",
      wordBank: ["voće", "voća", "voću"],
      explanation: "voće is neuter — no ACC change.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “They love wine.”",
      answers: ["Vole vino.", "Vole vino", "Oni vole vino.", "vole vino"],
      explanation: "oni → vole (not volaju); vino (n) — no change.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I don't drink beer.”",
      answers: ["Ne pijem pivo.", "Ne pijem pivo", "ne pijem pivo"],
      explanation: "ne pijem (two words) + pivo (n, no change).",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Ana", "pije", "čaj"],
      answers: ["Ana pije čaj.", "Ana pije čaj"],
      en: "Ana drinks tea.",
      explanation: "Ana (ona) → pije; čaj (m) — no change.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Volim juhu i kruh.",
      explanation: "Volim juhu i kruh — I love soup and bread (juhu is ACC).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Oni jedu ribu.",
      explanation: "Oni jedu ribu — they eat fish (jesti 3pl → jedu).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Volim voće, ali ne volim povrće.",
      targetEn: "say one thing you love and one you don't — I love fruit but not vegetables.",
      phonetic: "VO-leem VO-cheh, AH-lee neh VO-leem POV-rcheh",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–3",
      items: [
        {
          prompt: "From Unit 2: “I speak Croatian” — govoriti belongs to which class?",
          options: ["-im (govorim)", "-am (govoram)", "-em (govorem)"],
          correctIndex: 0,
          explanation: "govoriti → govorim, the -im class you met in Unit 2.",
        },
        {
          prompt: "Listen: what does he drink?",
          tts: "Pijem vodu.",
          options: ["water", "wine", "beer"],
          correctIndex: 0,
          explanation: "voda → vodu (ACC); piti → pijem.",
        },
        {
          prompt: "Listen: what do the children eat?",
          tts: "Djeca jedu voće.",
          options: ["fruit", "vegetables", "fish"],
          correctIndex: 0,
          explanation: "djeca (Unit 3) → jedu (3pl); voće = fruit.",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: what does she love and not love?",
      tts: "Volim ribu, ali ne volim meso.",
      options: ["loves fish, not meat", "loves meat, not fish", "loves both"],
      correctIndex: 0,
      explanation: "volim ribu (ACC) … ne volim meso (n, no change).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "The present tense has **three classes**: **-am** (gledam), **-im** (volim…**vole**), **-em** (pijem…**piju**); jesti is irregular (**jedem…jedu**). The infinitive doesn't reveal the class — **learn the “ja” form** with every verb, and watch the 3pl (vole, piju, jedu — never volaju/pijaju).\n\nNext lesson: the last piece of the accusative — **people** (Čekam konobara) — and htjeti (hoću/neću).",
      vocabIds: [
        "a1u4.piti", "a1u4.jesti", "a1u4.voljeti", "a1u4.zeljeti",
        "a1u4.pivo", "a1u4.vino", "a1u4.voce", "a1u4.povrce",
      ],
    },
  ],
  srsCloze: [
    { front: "Oni ___ vino. (piti)", answers: ["piju"], back: "Oni piju vino. (-em class 3pl → piju, not pijaju)", tts: "Oni piju vino." },
    { front: "Djeca ___ voće. (voljeti)", answers: ["vole"], back: "Djeca vole voće. (-im class 3pl → vole, not volaju)", tts: "Djeca vole voće." },
    { front: "Oni ___ ribu. (jesti)", answers: ["jedu"], back: "Oni jedu ribu. (jesti 3pl → jedu)", tts: "Oni jedu ribu." },
    { front: "Oni ___ more. (gledati)", answers: ["gledaju"], back: "Oni gledaju more. (-am class 3pl → gledaju)", tts: "Oni gledaju more." },
    { front: "Pijem ___. (kava)", answers: ["kavu"], back: "Pijem kavu. (piti + ACC kavu)", tts: "Pijem kavu." },
    { front: "Ja ___ ribu. (jesti)", answers: ["jedem"], back: "Ja jedem ribu. (jesti 1sg → jedem)", tts: "Ja jedem ribu." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian present tense has three classes (-am/-im/-em); learn each verb's 1sg, and mind the 3pl (vole, piju, jedu).",
      exampleHr: "volim…vole · pijem…piju · jedem…jedu",
    },
    deepDive: [
      {
        title: "The three-class master table",
        body:
          "Every regular present-tense verb belongs to one of three classes, distinguished by the vowel before the personal ending: **-a-** (gledam), **-i-** (volim), or **-e-** (pijem). The personal endings are shared: -m, -š, -∅, -mo, -te, and the 3pl **-ju** (-am, -em) or bare **-e** (-im). Because the infinitive doesn't reveal the class, memorize the **1sg** with each verb.",
        table: {
          caption: "The three classes side by side",
          headers: ["", "-am gledati", "-im voljeti", "-em piti", "irr. jesti"],
          rows: [
            ["ja", "gledam", "volim", "pijem", "jedem"],
            ["ti", "gledaš", "voliš", "piješ", "jedeš"],
            ["on/ona", "gleda", "voli", "pije", "jede"],
            ["mi", "gledamo", "volimo", "pijemo", "jedemo"],
            ["vi", "gledate", "volite", "pijete", "jedete"],
            ["oni", "gledaju", "vole", "piju", "jedu"],
          ],
        },
      },
      {
        title: "The 3pl trap",
        body:
          "The most common mistake is over-generalizing the -aju ending. The **-im** class takes bare **-e** in the 3pl (vole, govore, žele), and the **-em** class takes **-u** (piju, jedu). So: *oni vole*, *oni piju*, *oni jedu* — never “volaju”, “pijaju”, “jedaju”.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "3pl endings",
          text: "-am → -aju (gledaju) · -im → -e (vole) · -em → -u (piju, jedu).",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Oni volaju vino",
        right: "Oni vole vino",
        why: "The -im class 3pl is bare -e: vole (also govore, žele).",
      },
      {
        wrong: "Oni pijaju",
        right: "Oni piju",
        why: "The -em class 3pl is -u: piju, jedu.",
      },
      {
        wrong: "voljem kavu",
        right: "volim kavu",
        why: "voljeti is an -im verb → volim, not “voljem”.",
      },
      {
        wrong: "Pijem soku",
        right: "Pijem sok",
        why: "sok is masculine inanimate — accusative unchanged (Unit 4 L1).",
      },
    ],
    memoryHooks: [
      "Three garages for verbs: -am, -im, -em — park each verb by its “ja” form.",
      "3pl: -aju (gledaju) · -e (vole) · -u (piju, jedu).",
      "Learn the 1sg and the rest falls out — pijem, jedem, volim, želim.",
    ],
    connects: [
      { label: "govoriti — the -im preview from Unit 2 (Unit 2 L5)", lessonId: "a1u2l5" },
      { label: "The -am class (Unit 4 L2)", lessonId: "a1u4l2" },
      { label: "Next: animate ACC + htjeti (Unit 4 L4)", lessonId: "a1u4l4" },
    ],
    selfCheck: [
      { q: "Conjugate piti for ja and oni.", a: "ja pijem, oni piju." },
      { q: "What is the 3pl of voljeti?", a: "vole (not “volaju”)." },
      { q: "Which class is jesti, and what's the 1sg?", a: "Irregular -em; jedem." },
      { q: "Why learn the 1sg of each verb?", a: "The infinitive doesn't reveal the class; the “ja” form does." },
      { q: "Say “They eat fruit.”", a: "Oni jedu voće (voće is neuter, no ACC change)." },
    ],
  },
};
