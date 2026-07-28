import type { Lesson } from "@/types/content";

/**
 * A1 U2 L1 — Rod imenica (Noun gender: -∅ / -a / -o,-e)
 * Spec: curriculum/A1/unit-2.md · grammar-reference §2.
 * Origin phrases ("iz Kanade") are CHUNKS — not analyzed until Unit 7 (GEN).
 */
export const a1u2l1: Lesson = {
  id: "a1u2l1",
  unitId: "a1u2",
  title: "Rod imenica",
  titleEn: "Noun gender: the master key",
  grammarTags: ["noun-gender"],
  estMinutes: 17,
  vocab: [
    { id: "a1u2.zemlja", hr: "zemlja", en: "country / land", pos: "noun", gender: "f", icon: "🌍", image: "/img/zemlja.png", exampleHr: "Kanada je zemlja.", exampleEn: "Canada is a country." },
    { id: "a1u2.grad", hr: "grad", en: "city", pos: "noun", gender: "m", icon: "🏙️", image: "/img/grad.png", exampleHr: "Zagreb je grad.", exampleEn: "Zagreb is a city." },
    { id: "a1u2.selo", hr: "selo", en: "village", pos: "noun", gender: "n", icon: "🏡", image: "/img/selo.png", exampleHr: "To je selo.", exampleEn: "That is a village." },
    { id: "a1u2.more", hr: "more", en: "sea", pos: "noun", gender: "n", icon: "🌊", image: "/img/more.png", exampleHr: "More je tu.", exampleEn: "The sea is here." },
    { id: "a1u2.jezik", hr: "jezik", en: "language; tongue", pos: "noun", gender: "m", icon: "🗣️", exampleHr: "Hrvatski je jezik.", exampleEn: "Croatian is a language." },
    { id: "a1u2.kanada", hr: "Kanada", en: "Canada", pos: "noun", gender: "f", icon: "🇨🇦", image: "/img/kanada.png", exampleHr: "Kanada je zemlja.", exampleEn: "Canada is a country." },
    { id: "a1u2.njemacka", hr: "Njemačka", en: "Germany", pos: "noun", gender: "f", icon: "🇩🇪", image: "/img/njemacka.png", exampleHr: "Njemačka je zemlja.", exampleEn: "Germany is a country." },
    { id: "a1u2.engleska", hr: "Engleska", en: "England", pos: "noun", gender: "f", icon: "🇬🇧", image: "/img/engleska.png", exampleHr: "Engleska je zemlja.", exampleEn: "England is a country." },
    { id: "a1u2.amerika", hr: "Amerika", en: "America", pos: "noun", gender: "f", icon: "🇺🇸", image: "/img/amerika.png", exampleHr: "Amerika je zemlja.", exampleEn: "America is a country." },
    { id: "a1u2.francuska", hr: "Francuska", en: "France", pos: "noun", gender: "f", icon: "🇫🇷", image: "/img/francuska.png", exampleHr: "Francuska je zemlja.", exampleEn: "France is a country." },
    { id: "a1u2.iz", image: "/img/iz.png", hr: "iz", en: "from (for now ONLY in memorized chunks: iz Kanade)", pos: "prep", icon: "📍", exampleHr: "Ja sam iz Kanade.", exampleEn: "I am from Canada.", tags: ["chunk"] },
    { id: "a1u2.ili", hr: "ili", en: "or", pos: "conj", icon: "⚖️", exampleHr: "Kava ili čaj?", exampleEn: "Coffee or tea?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Rod imenica",
      subtitle: "Every noun has a gender — and the word itself tells you which. Learn this once, use it for 7 cases.",
      emoji: "🔑",
      items: [
        { emoji: "🚻", label: "The three genders", hint: "consonant → m · -a → f · -o/-e → n" },
        { emoji: "🃏", label: "The trap nouns", hint: "tata, večer, noć, ime — the liars" },
        { emoji: "🗺️", label: "Countries & the iz-chunk", hint: "Ja sam iz Kanade — memorize whole!" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say a gender triple" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The three genders",
      subtitle: "One look at a noun's last letter and you know its gender — almost always.",
      emoji: "🚻",
      items: [
        { emoji: "🔤", label: "The ending rule", hint: "-∅ / -a / -o,-e" },
        { emoji: "🃏", label: "Trap nouns", hint: "a few words lie about their ending" },
        { emoji: "🧩", label: "Sort Unit 1 words", hint: "kava, dan, jutro… into m/f/n" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u2.zemlja", "a1u2.grad", "a1u2.selo", "a1u2.more", "a1u2.jezik",
        "a1u2.kanada", "a1u2.njemacka", "a1u2.engleska", "a1u2.amerika",
        "a1u2.francuska", "a1u2.iz", "a1u2.ili",
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "The ending tells you the gender",
      body:
        "**Bridge from Unit 1:** you've been using all three genders since day one — *dobar **dan*** (m), *dobra **večer*** (f), *dobro **jutro*** (n). The greetings were hiding a system; today it comes out into the open.\n\nEvery Croatian noun is **masculine (m), feminine (f) or neuter (n)** — grammatical gender, nothing to do with meaning. The last letter almost always gives it away.\n\nWhy care? Because **every case table from here to B2 is organized by gender.** This is the master key.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The one-second gender test",
        text: "Look at the END of the noun: consonant → m · -a → f · -o/-e → n.",
      },
      table: {
        caption: "The three genders — read the last letter",
        headers: ["ending", "gender", "examples"],
        rows: [
          ["consonant (-∅)", "masculine · m", "grad · jezik · dan"],
          ["-a", "feminine · f", "zemlja · kava · Kanada"],
          ["-o / -e", "neuter · n", "selo · jutro · more"],
        ],
      },
      examples: [
        { hr: "Zagreb je grad.", en: "Zagreb is a city.", note: "consonant ending → masculine" },
        { hr: "Kanada je zemlja.", en: "Canada is a country.", note: "-a → feminine" },
        { hr: "To je selo.", en: "That is a village.", note: "-o → neuter" },
        { hr: "More je tu.", en: "The sea is here.", note: "-e → neuter too" },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: read the ending",
      items: [
        {
          prompt: "jezik (language) — which gender?",
          options: ["masculine", "feminine", "neuter"],
          correctIndex: 0,
          explanation: "Ends in a consonant (-k) → masculine.",
        },
        {
          prompt: "zemlja (country) — which gender?",
          options: ["feminine", "masculine", "neuter"],
          correctIndex: 0,
          explanation: "Ends in -a → feminine.",
        },
        {
          prompt: "more (sea) — which gender?",
          options: ["neuter", "feminine", "masculine"],
          correctIndex: 0,
          explanation: "-o AND -e endings are neuter — more is n.",
        },
        {
          prompt: "selo (village) — which gender?",
          options: ["neuter", "masculine", "feminine"],
          correctIndex: 0,
          explanation: "-o → neuter.",
        },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The trap nouns — words that lie",
      body:
        "A few nouns break the ending rule. Meet the liars now, and they'll never trick you:\n\nYour Unit 1 words re-sorted: **dan** (m), **jutro** (n) — honest. **večer** and **noć** — liars: consonant ending, but **feminine** (Dobra večer! Laku noć!). **ime** (name) is the *-me* neuter type.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The ending usually tells the truth",
        text: "…but memorize the liars: tata (m!), večer (f!), noć (f!), ime (n, -me type). More liars join in later units.",
      },
      table: {
        caption: "Trap nouns",
        headers: ["word", "the ending suggests…", "actually"],
        rows: [
          ["tata (dad)", "-a → f?", "m — he's a dad!"],
          ["večer (evening)", "consonant → m?", "f — Dobra večer!"],
          ["noć (night)", "consonant → m?", "f — Laku noć!"],
          ["ime (name)", "-e → n ✓", "n — but the -me type declines specially (later)"],
        ],
      },
      ttsChips: ["tata", "večer", "noć", "ime"],
    },
    {
      id: "s07",
      type: "match",
      review: true,
      prompt: "Sort these Unit 1 words: match each noun to its gender",
      pairs: [
        { a: "dan", b: "m — consonant ending" },
        { a: "škola", b: "f — ends in -a" },
        { a: "jutro", b: "n — ends in -o" },
        { a: "večer", b: "f — trap noun!" },
        { a: "ime", b: "n — the -me type" },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Countries & the iz-chunk",
      subtitle: "Five countries — and the phrase that says where you're from.",
      emoji: "🗺️",
      items: [
        { emoji: "🇨🇦", label: "Five countries", hint: "all feminine — they end in -a" },
        { emoji: "📍", label: "Ja sam iz Kanade", hint: "a CHUNK — memorize it whole" },
        { emoji: "✍️", label: "Write & build", hint: "type, fill, reorder" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "Countries — and “iz …” as a chunk",
      body:
        "All five countries below end in **-a → feminine**, just like Hrvatska.\n\nTo say where you're from: **Ja sam iz Kanade.** Notice the ending changed (Kanad**a** → Kanad**e**) — that's a case called the genitive, coming in **Unit 7**. Until then, memorize each *iz ___* phrase **as a whole chunk**.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Chunk alert 📍",
        text: "iz Kanade, iz Hrvatske, iz Njemačke… Learn them whole, like song lyrics. Do NOT build them letter by letter — the grammar behind them arrives in Unit 7.",
      },
      table: {
        caption: "Countries (all f) and their iz-chunks",
        headers: ["country", "flag", "chunk: “from …”"],
        rows: [
          ["Kanada", "🇨🇦", "iz Kanade"],
          ["Njemačka", "🇩🇪", "iz Njemačke"],
          ["Engleska", "🇬🇧", "iz Engleske"],
          ["Amerika", "🇺🇸", "iz Amerike"],
          ["Francuska", "🇫🇷", "iz Francuske"],
          ["Hrvatska", "🇭🇷", "iz Hrvatske"],
        ],
      },
      examples: [
        { hr: "Ja sam iz Kanade.", en: "I am from Canada.", note: "chunk — memorize whole" },
        { hr: "Ana je iz Hrvatske.", en: "Ana is from Croatia." },
        { hr: "Tom je iz Kanade, a Ana je iz Hrvatske.", en: "Tom is from Canada, and Ana is from Croatia." },
        { hr: "Kava ili čaj? — Kava, molim.", en: "Coffee or tea? — Coffee, please.", note: "ili = or — a little bonus word" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: countries",
      items: [
        {
          prompt: "Listen: which country is this person from?",
          tts: "Ja sam iz Njemačke.",
          options: ["Njemačka", "Engleska", "Francuska"],
          correctIndex: 0,
          explanation: "iz Njemačke = from Germany (Njemačka).",
        },
        {
          prompt: "Which of these is a grad (city), not a zemlja?",
          options: ["Zagreb", "Kanada", "Amerika"],
          correctIndex: 0,
          explanation: "Zagreb je grad; Kanada and Amerika are countries.",
        },
        {
          prompt: "Listen: where am I from?",
          tts: "Ja sam iz Amerike.",
          options: ["Amerika", "Engleska", "Kanada"],
          correctIndex: 0,
          explanation: "iz Amerike = from America.",
        },
        {
          prompt: "»Kava ili čaj?« — what are you being asked?",
          options: ["to choose one", "to say thank you", "to say your name"],
          correctIndex: 0,
          explanation: "ili = or. Coffee or tea? (Kava, molim!)",
        },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Kanada je ___.",
      blanks: [["zemlja"]],
      translation: "Canada is a country.",
      wordBank: ["zemlja", "grad", "selo"],
      explanation: "Kanada is a country — zemlja (f, ends in -a).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Zagreb je ___, a Hrvatska je zemlja.",
      blanks: [["grad"]],
      translation: "Zagreb is a city, and Croatia is a country.",
      wordBank: ["grad", "selo", "more"],
      explanation: "grad = city (m, consonant ending).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “Canada is a country.”",
      answers: ["Kanada je zemlja.", "Kanada je zemlja"],
      explanation: "Kanada je zemlja — both are feminine -a nouns.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “That is a village.”",
      answers: ["To je selo.", "To je selo"],
      explanation: "To je selo — -o ending, neuter.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ear & voice",
      subtitle: "Hear the genders, say the genders — then recap.",
      emoji: "👂",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "type exactly what you hear" },
        { emoji: "🎤", label: "Say a gender triple", hint: "grad — zemlja — selo" },
        { emoji: "🔁", label: "Unit 1 flashback", hint: "greetings meet genders" },
        { emoji: "🎯", label: "Recap", hint: "12 words head to your review deck" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "To je selo.",
      explanation: "To je selo — that is a village (n).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Francuska je zemlja.",
      explanation: "Francuska je zemlja — France is a country (both f).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "grad, zemlja, selo",
      targetEn: "city, country, village — one noun of each gender (m, f, n)",
      phonetic: "grahd — ZEM-lya — SEH-lo",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Unit 1 flashback",
      items: [
        {
          prompt: "Listen: what part of the day is it?",
          tts: "Dobra večer!",
          options: ["evening", "morning", "night"],
          correctIndex: 0,
          explanation: "Dobra večer = good evening — and večer is a feminine trap noun!",
        },
        {
          prompt: "Listen: what are you being wished?",
          tts: "Laku noć!",
          options: ["good night", "good morning", "good evening"],
          correctIndex: 0,
          explanation: "Laku noć = good night (Unit 1) — and noć is one of today's feminine trap nouns!",
        },
        {
          prompt: "ime (name, from Unit 1) — which gender?",
          options: ["neuter", "feminine", "masculine"],
          correctIndex: 0,
          explanation: "ime ends in -e → neuter (the special -me type).",
        },
      ],
    },
    {
      id: "s20",
      type: "reorder",
      words: ["Ja", "sam", "iz", "Kanade"],
      answers: ["Ja sam iz Kanade.", "Ja sam iz Kanade"],
      en: "I am from Canada.",
      explanation: "The iz-chunk in action — memorized whole, analyzed in Unit 7.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Today's key:** every noun is m, f or n — and the last letter tells you which: **consonant → m** (grad, jezik) · **-a → f** (zemlja, Kanada) · **-o/-e → n** (selo, more).\n\nTrap nouns to memorize: **tata (m!) · večer, noć (f!) · ime (n, -me type)**.\n\nAnd your first origin chunk: **Ja sam iz Kanade** — memorize whole, dissect in Unit 7. Bonus word: **ili** (or) — *Kava ili čaj?*\n\nNext lesson: saying NO (nisam) and asking yes/no questions (Jesi li…?).",
      vocabIds: [
        "a1u2.zemlja", "a1u2.grad", "a1u2.selo", "a1u2.more", "a1u2.jezik",
        "a1u2.kanada", "a1u2.njemacka", "a1u2.engleska", "a1u2.amerika",
        "a1u2.francuska", "a1u2.iz", "a1u2.ili",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "noć — which gender? m / f / n → ___", answers: ["f"], back: "noć = f (trap: consonant ending, but feminine — Laku noć!)." },
    { front: "večer — which gender? m / f / n → ___", answers: ["f"], back: "večer = f (trap noun — Dobra večer!)." },
    { front: "tata — which gender? m / f / n → ___", answers: ["m"], back: "tata = m (male person, despite the -a)." },
    { front: "ime — which gender? m / f / n → ___", answers: ["n"], back: "ime = n (the -me neuter type)." },
    { front: "Ja sam iz ___. (Canada)", answers: ["kanade"], back: "Ja sam iz Kanade. (a chunk — the ending is Unit 7's genitive)", tts: "Ja sam iz Kanade." },
  ],
  notes: {
    inOneSentence: {
      en: "Every Croatian noun is masculine, feminine or neuter — and its last letter almost always tells you which.",
      exampleHr: "grad (m) · zemlja (f) · selo (n)",
    },
    deepDive: [
      {
        title: "The ending rule (the master key)",
        body:
          "Gender is **grammatical**, not biological — *selo* isn't “thing-like”, it just ends in -o. Judge by the **ending**, never by the meaning.\n\nWhy this lesson matters more than it looks: every case table in the whole course (7 cases × singular/plural) is organized by these three genders. Nail the sorting reflex now and Units 4–8 get dramatically easier.",
        table: {
          caption: "Gender by ending — full picture",
          headers: ["ending", "gender", "examples", "watch out"],
          rows: [
            ["consonant (-∅)", "masculine", "grad, jezik, dan, čaj, čovjek", "a few -a nouns are m: tata, kolega (see traps)"],
            ["-a", "feminine", "zemlja, kava, škola, studentica, Kanada", "consonant-final f -i type: noć, večer, stvar, ljubav"],
            ["-o / -e", "neuter", "selo, jutro, more", "-me type: ime → imena; vrijeme → vremena"],
          ],
        },
      },
      {
        title: "The liars' club (trap nouns)",
        body:
          "A small club of nouns lies about its ending. The A1 members:\n\n- **tata** (dad) and **kolega** (colleague — preview, taught later) end in -a but are **masculine** — they're men! You'll see in L3: *tata je dobar*, never ~~dobra~~.\n- **večer, noć** (and later *stvar* “thing”, *ljubav* “love”) end in a consonant but are **feminine** — that's why Unit 1 taught you *Dobra večer!* and *Laku noć!*\n- **ime** (name) is honest about being neuter but declines as the special **-me type** (ime → imena) — details much later.",
        table: {
          caption: "A1 trap nouns",
          headers: ["word", "looks", "is"],
          rows: [
            ["tata", "f (-a)", "m"],
            ["kolega (preview)", "f (-a)", "m"],
            ["večer", "m (consonant)", "f"],
            ["noć", "m (consonant)", "f"],
            ["ime", "n (-e) ✓", "n — special -me type"],
          ],
        },
      },
      {
        title: "iz + country = a chunk (not yet grammar)",
        body:
          "**Ja sam iz Kanade. Ana je iz Hrvatske.** The country's ending changes after *iz* (Kanada → Kanad**e**) because *iz* demands the **genitive case — taught in Unit 7**. Until then these are fixed phrases: learn *iz Kanade, iz Hrvatske, iz Njemačke, iz Engleske, iz Amerike, iz Francuske* whole, like lyrics.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Memorize whole, dissect in Unit 7",
          text: "iz Kanade ✓ (chunk) — never build “iz Kanada” from parts. When the genitive arrives in Unit 7, these chunks will suddenly make perfect sense.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Guessing gender from meaning (“kava feels feminine, more feels masculine…”)",
        right: "Judge ONLY by the ending: kava -a → f, more -e → n",
        why: "Croatian gender is grammatical — the word's end tells you, not its meaning.",
      },
      {
        wrong: "tata je dobra (treating tata as feminine)",
        right: "tata je dobar — tata is masculine despite the -a",
        why: "Male-person nouns in -a (tata, kolega) stay masculine; agreement follows the person.",
      },
      {
        wrong: "večer, noć sorted as masculine (consonant ending)",
        right: "večer and noć are feminine — Dobra večer! Laku noć!",
        why: "They belong to the feminine -i type; the Unit 1 greetings already showed you the truth.",
      },
      {
        wrong: "iz Kanada",
        right: "iz Kanade — memorized as a whole chunk",
        why: "iz changes the noun's ending (genitive, Unit 7). Until then, chunks only.",
      },
    ],
    memoryHooks: [
      "Consonant = guy (m), -a = gal (f), -o/-e = thing (n) — right about 95% of the time.",
      "The liars' club: tata the dad in a dress (-a but m), the two lady nights večer & noć (consonant but f).",
      "All six course countries end in -a: Kanada, Njemačka, Engleska, Amerika, Francuska, Hrvatska — one big feminine family.",
      "iz Kanade = song lyrics: sing it whole, don't spell it.",
    ],
    connects: [
      { label: "biti + pronouns (Unit 1) — the sentences we sort genders into", lessonId: "a1u1l3" },
      { label: "Adjective agreement (this unit, L3) — gender cashes in", lessonId: "a1u2l3" },
      { label: "Possessives moj/tvoj agree by gender (Unit 3)", lessonId: "a1u3l1" },
    ],
    selfCheck: [
      { q: "jezik — which gender, and why?", a: "Masculine — it ends in a consonant." },
      { q: "more — which gender?", a: "Neuter — -o AND -e endings are neuter." },
      { q: "Why is večer feminine although it ends in a consonant?", a: "It's a trap noun (feminine -i type) — that's why it's Dobra večer." },
      { q: "What gender is tata?", a: "Masculine — male-person nouns in -a stay masculine." },
      { q: "How do you say “I am from Canada” — and what's special about it?", a: "Ja sam iz Kanade — a memorized chunk; the ending change is the genitive, coming in Unit 7." },
    ],
  },
};
