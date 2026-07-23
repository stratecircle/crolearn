import type { Lesson } from "@/types/content";

/**
 * A1 U3 L5 — Kakva je tvoja obitelj? (Describing people, unit review)
 * Spec: curriculum/A1/unit-3.md · grammar-reference §4 (adjective agreement).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u3` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: no new machinery — integration of possessives + adjectives
 * (sg from U2, pl from L3) + biti + imati chunks. Fleeting a: nizak→niska,
 * pametan→pametna.
 */
export const a1u3l5: Lesson = {
  id: "a1u3l5",
  unitId: "a1u3",
  title: "Kakva je tvoja obitelj?",
  titleEn: "Describing your people",
  grammarTags: ["adjective-agreement", "review"],
  estMinutes: 18,
  vocab: [
    { id: "a1u3.lijep", image: "/img/lijep.png", hr: "lijep", en: "beautiful / nice", pos: "adj", icon: "✨", exampleHr: "Tvoja sestra je lijepa osoba.", exampleEn: "Your sister is a lovely person." },
    { id: "a1u3.visok", image: "/img/visok.png", hr: "visok", en: "tall", pos: "adj", icon: "📏", exampleHr: "Moj brat je visok.", exampleEn: "My brother is tall." },
    { id: "a1u3.nizak", image: "/img/nizak.png", hr: "nizak", en: "short (in height)", pos: "adj", icon: "📐", exampleHr: "Ja sam nizak.", exampleEn: "I am short." },
    { id: "a1u3.osoba", image: "/img/osoba.png", hr: "osoba", en: "person", pos: "noun", gender: "f", icon: "🧍", exampleHr: "Ona je dobra osoba.", exampleEn: "She is a good person." },
    { id: "a1u3.pametan", image: "/img/pametan.png", hr: "pametan", en: "smart (pametna, pametno)", pos: "adj", icon: "🧠", exampleHr: "Moja kći je pametna.", exampleEn: "My daughter is smart." },
    { id: "a1u3.jak", image: "/img/jak.png", hr: "jak", en: "strong", pos: "adj", icon: "💪", exampleHr: "Njegov djed je jak.", exampleEn: "His grandpa is strong." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kakva je tvoja obitelj?",
      subtitle: "This is your family, in one lesson — describe them, then wrap up the unit.",
      emoji: "👨‍👩‍👧‍👦",
      items: [
        { emoji: "↔️", label: "Opposite pairs", hint: "visok ↔ nizak · mlad ↔ star" },
        { emoji: "🖼️", label: "Describe a person", hint: "To je… On je… Ona ima…" },
        { emoji: "🎯", label: "Unit review", hint: "possessives, plurals, imati" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + describe two relatives" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Describing people",
      subtitle: "A handful of adjectives — and they agree, as always.",
      emoji: "↔️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "imati, from L4" },
        { emoji: "📏", label: "tall ↔ short", hint: "visok ↔ nizak" },
        { emoji: "✨", label: "nice, smart, strong", hint: "lijep, pametan, jak" },
        { emoji: "🧍", label: "osoba (person)", hint: "lijepa osoba, dobra osoba" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: imati, from yesterday",
      items: [
        {
          prompt: "From L4: “I don't have” = …",
          options: ["nemam", "ne imam", "nisam"],
          correctIndex: 0,
          explanation: "The fused negative — nemam, one word, like nisam.",
        },
        {
          prompt: "From L4: Oni ___ bebu.",
          options: ["imaju", "imamo", "ima"],
          correctIndex: 0,
          explanation: "oni → imaju.",
        },
        {
          prompt: "Listen: what does she have?",
          tts: "Imam mačku, nemam psa.",
          options: ["a cat but no dog", "a dog but no cat", "a cat and a dog"],
          correctIndex: 0,
          explanation: "mačku ✓, psa ✗ — the chunks after imam/nemam (L4).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u3.lijep", "a1u3.visok", "a1u3.nizak",
        "a1u3.osoba", "a1u3.pametan", "a1u3.jak",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Adjectives to describe people",
      body:
        "Nothing new here — just words, and the agreement you already know: an adjective copies the noun's gender (m -∅ · f -a · n -o, plural -i/-e/-a).\n\nMeet the opposite pairs: **visok ↔ nizak** (tall ↔ short), **mlad ↔ star** (young ↔ old), **velik ↔ malen** (big ↔ small). Plus **lijep** (nice/beautiful), **pametan** (smart), **jak** (strong). Two have a fleeting a: nizak → **niska**, pametan → **pametna**.",
      diagram: {
        kind: "contrast",
        left: { title: "visok", emoji: "📏", lines: [{ hr: "Moj brat je visok.", en: "My brother is tall." }] },
        right: { title: "nizak", emoji: "📐", lines: [{ hr: "Ja sam nizak.", en: "I am short." }] },
      },
      examples: [
        { hr: "Moj brat je visok, a ja sam nizak.", en: "My brother is tall, and I am short." },
        { hr: "Baka Marija je stara i jako dobra.", en: "Grandma Marija is old and very kind." },
        { hr: "Tvoja sestra je lijepa osoba.", en: "Your sister is a lovely person." },
        { hr: "Njegov djed je jak.", en: "His grandpa is strong." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: opposites",
      items: [
        {
          prompt: "visok (tall) ↔ ?",
          options: ["nizak", "mlad", "jak"],
          correctIndex: 0,
          explanation: "tall ↔ short = visok ↔ nizak.",
        },
        {
          prompt: "mlad (young) ↔ ?",
          options: ["star", "nizak", "lijep"],
          correctIndex: 0,
          explanation: "young ↔ old = mlad ↔ star.",
        },
        {
          prompt: "“my daughter is smart” — Moja kći je ___.",
          options: ["pametna", "pametan", "pametno"],
          correctIndex: 0,
          explanation: "kći is feminine → pametna (the fleeting a drops).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Describe a person — the sentence frames",
      body:
        "Put it together with frames you already own:\n\n- **To je…** (This is…) — *To je moja majka.*\n- **On/Ona je…** (He/She is…) — *Ona je visoka i pametna.*\n- **On/Ona ima…** (He/She has…) — *Ona ima brata i sestru.*\n\nStack two or three and you've described a whole person.",
      table: {
        caption: "Frames → a mini description",
        headers: ["frame", "example"],
        rows: [
          ["To je…", "To je moja baka."],
          ["Ona je…", "Ona je stara i dobra."],
          ["Ona ima…", "Ona ima mačku."],
        ],
      },
      examples: [
        { hr: "To je moj otac. On je visok i jak.", en: "This is my father. He is tall and strong." },
        { hr: "Ona je lijepa i pametna osoba.", en: "She is a beautiful and smart person." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each adjective to its opposite",
      pairs: [
        { a: "visok", b: "nizak" },
        { a: "mlad", b: "star" },
        { a: "velik", b: "malen" },
        { a: "dobar", b: "loš" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Unit review",
      subtitle: "Describe the story cast, then a quick sweep of the whole unit.",
      emoji: "🎯",
      items: [
        { emoji: "🖊️", label: "Describe & build", hint: "fills, types, reorder" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Describe two relatives", hint: "two sentences each" },
        { emoji: "🔁", label: "Whole-unit sweep", hint: "possessives · plurals · imati" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Marko je ___ konobar.",
      blanks: [["dobar"]],
      translation: "Marko is a good waiter.",
      wordBank: ["dobar", "dobra", "dobro"],
      explanation: "konobar is masculine → dobar (Unit 2 agreement).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Moja baka je ___.",
      blanks: [["stara"]],
      translation: "My grandma is old.",
      wordBank: ["stara", "star", "staro"],
      explanation: "baka is feminine → stara.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Naša djeca su ___.",
      blanks: [["mala"]],
      translation: "Our children are small.",
      wordBank: ["mala", "mali", "male"],
      explanation: "djeca takes -a agreement → mala (with plural su).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “My grandma is old.”",
      answers: ["Moja baka je stara.", "Moja baka je stara", "moja baka je stara"],
      explanation: "baka (f) → stara.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “Our children are small.”",
      answers: ["Naša djeca su mala.", "Naša djeca su mala", "naša djeca su mala"],
      explanation: "djeca → -a agreement (mala) and plural su.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Ona", "je", "lijepa", "osoba"],
      answers: ["Ona je lijepa osoba.", "Ona je lijepa osoba"],
      en: "She is a lovely person.",
      explanation: "osoba is feminine → lijepa osoba.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Moj brat je visok.",
      explanation: "Moj brat je visok — my brother is tall.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Njezina sestra je lijepa.",
      explanation: "Njezina sestra je lijepa — her sister is beautiful.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Moja majka je lijepa i dobra.",
      targetEn: "describe a relative in two adjectives — My mother is nice and kind.",
      phonetic: "MO-ya MY-ka yeh LYEH-pa ee DOH-bra",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep",
      items: [
        {
          prompt: "obitelj is feminine — “our family” is…",
          options: ["naša obitelj", "naš obitelj", "naše obitelj"],
          correctIndex: 0,
          explanation: "L1: feminine → naša.",
        },
        {
          prompt: "Ana's brother — his or her?",
          options: ["njezin brat", "njegov brat", "njihov brat"],
          correctIndex: 0,
          explanation: "L2: owner Ana (ona) → njezin.",
        },
        {
          prompt: "Listen: what does she have?",
          tts: "Imam brata i sestru.",
          options: ["a brother and a sister", "a dog and a cat", "a son and a daughter"],
          correctIndex: 0,
          explanation: "L4: brata i sestru (chunks after imam).",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep II",
      items: [
        {
          prompt: "Čije je to dijete? — »___.« (Theirs.)",
          options: ["Njihovo", "Njihov", "Njihova"],
          correctIndex: 0,
          explanation: "L2: dijete is neuter, hard type → njihovo.",
        },
        {
          prompt: "čovjek (person) → many of them = …",
          options: ["ljudi", "čovjeci", "čovjeki"],
          correctIndex: 0,
          explanation: "L3: the suppletive plural ljudi.",
        },
        {
          prompt: "Speaking to Vi (formal): “your family” is…",
          options: ["vaša obitelj", "vaš obitelj", "vaše obitelj"],
          correctIndex: 0,
          explanation: "L1: obitelj is feminine (trap word) → vaša.",
        },
      ],
    },
    {
      id: "s21",
      type: "fill",
      review: true,
      text: "Ja ___ psa. (don't have)",
      blanks: [["nemam"]],
      translation: "I don't have a dog.",
      wordBank: ["nemam", "ne imam", "nisam"],
      explanation: "L4: the fused negative nemam — one word.",
    },
    {
      id: "s22",
      type: "mc",
      review: true,
      prompt: "Listen: what is the plural, and how are they?",
      tts: "Djeca su dobra.",
      options: ["the children are good", "the child is good", "the children are small"],
      correctIndex: 0,
      explanation: "L3: djeca (children) → su dobra.",
    },
    {
      id: "s23",
      type: "recap",
      summary:
        "**Unit 3 complete!** You can now say whose someone is (**moja majka, njezin brat**), talk about more than one (**braća, sestre, djeca**), say what you **have** and don't (**Imam sestru, nemam psa**), and **describe** your people (**visok, mlad, lijepa osoba**).\n\nNext unit opens the first real case — the **accusative** — and finally X-rays those *Imam brata* chunks.",
      vocabIds: [
        "a1u3.lijep", "a1u3.visok", "a1u3.nizak",
        "a1u3.osoba", "a1u3.pametan", "a1u3.jak",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "visok ↔ ___ (opposite)", answers: ["nizak"], back: "visok ↔ nizak (tall ↔ short).", tts: "nizak" },
    { front: "mlad ↔ ___ (opposite)", answers: ["star"], back: "mlad ↔ star (young ↔ old).", tts: "star" },
    { front: "velik ↔ ___ (opposite)", answers: ["malen", "mali"], back: "velik ↔ malen / mali (big ↔ small).", tts: "malen" },
    { front: "Moja baka je ___. (old)", answers: ["stara"], back: "Moja baka je stara. (baka f → stara)", tts: "Moja baka je stara." },
  ],
  notes: {
    inOneSentence: {
      en: "Describe people by stacking agreeing adjectives on the frames you already own (To je… / On je… / Ona ima…).",
      exampleHr: "Moj brat je visok, a ja sam nizak.",
    },
    deepDive: [
      {
        title: "Opposite pairs & agreement",
        body:
          "The describing adjectives come in pairs: **visok ↔ nizak**, **mlad ↔ star**, **velik ↔ malen**. All agree with the noun in the usual way (m -∅ / f -a / n -o; plural -i/-e/-a). Two have a **fleeting a** that drops before an ending: nizak → nisk**a**/nisk**o**, pametan → pametn**a**/pametn**o**.",
        table: {
          caption: "Describing adjectives — m / f / n",
          headers: ["adjective", "m", "f", "n"],
          rows: [
            ["tall", "visok", "visoka", "visoko"],
            ["short", "nizak", "niska", "nisko"],
            ["nice", "lijep", "lijepa", "lijepo"],
            ["smart", "pametan", "pametna", "pametno"],
          ],
        },
      },
      {
        title: "Description frames",
        body:
          "Three sentence frames carry a whole description: **To je…** (This is…), **On/Ona je…** (He/She is…), **On/Ona ima…** (He/She has…). Stack them: *To je moja baka. Ona je stara i dobra. Ona ima mačku.* That's Unit 3 in three lines — possessive, adjective agreement, and an imati chunk.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Name them", emoji: "🖼️", example: "To je moja baka." },
            { label: "Describe them", emoji: "✨", example: "Ona je stara i dobra." },
            { label: "What they have", emoji: "🐱", example: "Ona ima mačku." },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Moja majka je visok",
        right: "Moja majka je visoka",
        why: "The adjective agrees with the noun; majka is feminine → visoka.",
      },
      {
        wrong: "Moja kći je pametan",
        right: "Moja kći je pametna",
        why: "Feminine → pametna; the fleeting a drops before the ending.",
      },
      {
        wrong: "Naša djeca su mali",
        right: "Naša djeca su mala",
        why: "djeca takes -a agreement (and a plural verb su).",
      },
    ],
    memoryHooks: [
      "Opposite pairs travel together: visok↔nizak, mlad↔star, velik↔malen.",
      "Fleeting a drops before an ending: nizak→niska, pametan→pametna.",
      "Three frames = a full portrait: To je… / On je… / Ona ima…",
    ],
    connects: [
      { label: "Adjective agreement dobar/dobra/dobro (Unit 2 L3)", lessonId: "a1u2l3" },
      { label: "Possessives (Unit 3 L1–L2)", lessonId: "a1u3l1" },
      { label: "NOM plural agreement (Unit 3 L3)", lessonId: "a1u3l3" },
    ],
    selfCheck: [
      { q: "How do you say “My brother is tall”?", a: "Moj brat je visok." },
      { q: "What is the feminine of nizak and pametan?", a: "niska and pametna — the fleeting a drops." },
      { q: "Describe your grandma in two adjectives.", a: "e.g. Moja baka je stara i dobra." },
      { q: "Why is it “Naša djeca su mala” and not “mali”?", a: "djeca takes -a agreement with a plural verb (su)." },
      { q: "Which three frames build a description?", a: "To je… / On/Ona je… / On/Ona ima…" },
    ],
  },
};
