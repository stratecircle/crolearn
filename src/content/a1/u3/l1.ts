import type { Lesson } from "@/types/content";

/**
 * A1 U3 L1 — Moja obitelj (Possessives moj/tvoj/naš + agreement)
 * Spec: curriculum/A1/unit-3.md · grammar-reference §4 (agreement), §2 (traps).
 *
 * ⚠️ DRAFT — authored autonomously overnight; structurally validated but NOT yet
 * run through the native proofread pass. Run `npm run proofread -- a1u3` and
 * review before relying on it (see docs/NOAH-TODO.md).
 *
 * Level guard: NOM only; possessives agree in the singular (m -∅ / f -a / n -e).
 * njegov/njezin/njihov are L2; plural possessives (moji…) are L3.
 */
export const a1u3l1: Lesson = {
  id: "a1u3l1",
  unitId: "a1u3",
  title: "Moja obitelj",
  titleEn: "My family — possessives",
  grammarTags: ["possessives", "agreement"],
  estMinutes: 18,
  vocab: [
    { id: "a1u3.obitelj", image: "/img/obitelj.png", hr: "obitelj", en: "family (f — a consonant-final trap!)", pos: "noun", gender: "f", icon: "👨‍👩‍👧‍👦", exampleHr: "To je moja obitelj.", exampleEn: "That is my family." },
    { id: "a1u3.majka", image: "/img/majka.png", hr: "majka", en: "mother (also: mama)", pos: "noun", gender: "f", icon: "👩", exampleHr: "Moja majka je učiteljica.", exampleEn: "My mother is a teacher." },
    { id: "a1u3.otac", image: "/img/otac.png", hr: "otac", en: "father (also: tata)", pos: "noun", gender: "m", icon: "👨", exampleHr: "Moj otac je inženjer.", exampleEn: "My father is an engineer." },
    { id: "a1u3.brat", image: "/img/brat.png", hr: "brat", en: "brother", pos: "noun", gender: "m", icon: "👦", exampleHr: "Moj brat je student.", exampleEn: "My brother is a student." },
    { id: "a1u3.sestra", image: "/img/sestra.png", hr: "sestra", en: "sister", pos: "noun", gender: "f", icon: "👧", exampleHr: "Moja sestra je studentica.", exampleEn: "My sister is a student." },
    { id: "a1u3.sin", image: "/img/sin.png", hr: "sin", en: "son", pos: "noun", gender: "m", icon: "🧒", exampleHr: "To je moj sin.", exampleEn: "That is my son." },
    { id: "a1u3.kci", image: "/img/kci.png", hr: "kći", en: "daughter (f — irregular)", pos: "noun", gender: "f", icon: "👧", exampleHr: "To je moja kći.", exampleEn: "That is my daughter." },
    { id: "a1u3.roditelji", image: "/img/roditelji.png", hr: "roditelji", en: "parents (plural)", pos: "noun", gender: "m", icon: "👪", exampleHr: "Roditelji su tu.", exampleEn: "The parents are here." },
    { id: "a1u3.moj", image: "/img/moj.png", hr: "moj", en: "my (moj / moja / moje)", pos: "pron", icon: "🙋", exampleHr: "Moj brat je tu.", exampleEn: "My brother is here." },
    { id: "a1u3.tvoj", image: "/img/tvoj.png", hr: "tvoj", en: "your (tvoj / tvoja / tvoje)", pos: "pron", icon: "👉", exampleHr: "Tvoj otac je dobar.", exampleEn: "Your father is good." },
    { id: "a1u3.nas", image: "/img/nas.png", hr: "naš", en: "our (naš / naša / naše)", pos: "pron", icon: "👥", exampleHr: "Naš tata je inženjer.", exampleEn: "Our dad is an engineer." },
    { id: "a1u3.vas", image: "/img/vas.png", hr: "vaš", en: "your — plural/formal (vaš / vaša / vaše)", pos: "pron", icon: "🙇", exampleHr: "Vaše ime, molim?", exampleEn: "Your name, please?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moja obitelj",
      subtitle: "Three little words — moj, moja, moje — and the whole family is yours.",
      emoji: "👨‍👩‍👧‍👦",
      items: [
        { emoji: "🔑", label: "The agreement rule", hint: "moj / moja / moje follow the noun" },
        { emoji: "👪", label: "Family words", hint: "majka, otac, brat, sestra…" },
        { emoji: "🃏", label: "Trap words", hint: "tata is m · obitelj & kći are f" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say two relatives" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The agreement rule",
      subtitle: "One owner, three endings — the possessive copies the gender of the thing owned.",
      emoji: "🔑",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "dobar/dobra/dobro, from Unit 2" },
        { emoji: "🚻", label: "-∅ / -a / -e", hint: "moj brat · moja sestra · moje ime" },
        { emoji: "✅", label: "Quick check", hint: "pick the right ending" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the endings you already own (Unit 2)",
      items: [
        {
          prompt: "From Unit 2: kava is feminine, so “good coffee” is…",
          options: ["dobra kava", "dobar kava", "dobro kava"],
          correctIndex: 0,
          explanation: "Adjectives copy the noun's gender: f → -a. Today possessives do exactly the same thing.",
        },
        {
          prompt: "»___ jutro!« (Good morning!)",
          options: ["Dobro", "Dobar", "Dobra"],
          correctIndex: 0,
          explanation: "jutro is neuter → dobro. You've said this since Unit 1 — today the same slots get moj/moja/moje.",
        },
        {
          prompt: "Listen: what is Ana?",
          tts: "Ana je dobra studentica.",
          options: ["a good student", "a good teacher", "a good doctor"],
          correctIndex: 0,
          explanation: "studentica (Unit 1) + dobra (Unit 2 agreement).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u3.obitelj", "a1u3.majka", "a1u3.otac", "a1u3.brat", "a1u3.sestra",
        "a1u3.sin", "a1u3.kci", "a1u3.roditelji", "a1u3.moj", "a1u3.tvoj", "a1u3.nas", "a1u3.vas",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The possessive copies the noun's gender",
      body:
        "**moj** = *my*. But like *dobar/dobra/dobro* in Unit 2, it changes ending to match the **thing owned** — not the owner:\n\n- masculine noun → **moj** (no ending): *moj brat*\n- feminine noun → **moja** (-a): *moja sestra*\n- neuter noun → **moje** (-e): *moje ime*\n\n**tvoj** (your), **naš** (our) and **vaš** (your, when speaking to *vi* — several people or formal) work exactly the same way. Careful: the neuter ending is **-e** here (moje, tvoje, naše, vaše), not -o.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The one rule",
        text: "Look at the noun's gender, then pick the ending: m → -∅ · f → -a · n → -e.",
      },
      table: {
        caption: "moj / tvoj / naš agree with the noun (NOM singular)",
        headers: ["", "m: brat", "f: sestra", "n: ime"],
        rows: [
          ["moj (my)", "moj brat", "moja sestra", "moje ime"],
          ["tvoj (your)", "tvoj brat", "tvoja sestra", "tvoje ime"],
          ["naš (our)", "naš brat", "naša sestra", "naše ime"],
          ["vaš (your, pl/formal)", "vaš brat", "vaša sestra", "vaše ime"],
        ],
      },
      examples: [
        { hr: "Moj otac je inženjer.", en: "My father is an engineer.", note: "otac (m) → moj" },
        { hr: "Moja majka je učiteljica.", en: "My mother is a teacher.", note: "majka (f) → moja" },
        { hr: "Moje ime je Tom.", en: "My name is Tom.", note: "ime (n) → moje (-e!)" },
        { hr: "Naš brat je student.", en: "Our brother is a student.", note: "naš + brat (m)" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the ending",
      items: [
        {
          prompt: "___ sestra je studentica. (my)",
          options: ["moja", "moj", "moje"],
          correctIndex: 0,
          explanation: "sestra is feminine → moja.",
        },
        {
          prompt: "___ otac je inženjer. (my)",
          options: ["moj", "moja", "moje"],
          correctIndex: 0,
          explanation: "otac is masculine → moj (no ending).",
        },
        {
          prompt: "___ ime je Tom. (my)",
          options: ["moje", "moj", "moja"],
          correctIndex: 0,
          explanation: "ime is neuter → moje (the -e ending).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The family — and three trap words",
      body:
        "Now the people. Two everyday words have a formal and a familiar form: **majka / mama** (mother), **otac / tata** (father).\n\nWatch three traps: **tata** ends in -a but is **masculine** (he's a dad!) → *naš tata*. **obitelj** (family) ends in a consonant but is **feminine** → *moja obitelj*. **kći** (daughter) is also **feminine** → *moja kći*.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Don't trust the ending here",
        text: "tata = m (naš tata ✓, not naša). obitelj = f (moja obitelj). kći = f (moja kći).",
      },
      table: {
        caption: "Trap words",
        headers: ["word", "the ending suggests…", "actually"],
        rows: [
          ["tata (dad)", "-a → feminine?", "masculine — naš tata"],
          ["obitelj (family)", "consonant → masculine?", "feminine — moja obitelj"],
          ["kći (daughter)", "consonant → masculine?", "feminine — moja kći"],
        ],
      },
      examples: [
        { hr: "Naš tata je inženjer.", en: "Our dad is an engineer.", note: "tata is m → naš" },
        { hr: "Moja kći je studentica.", en: "My daughter is a student.", note: "kći is f → moja" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each family word to English",
      pairs: [
        { a: "majka", b: "mother" },
        { a: "otac", b: "father" },
        { a: "brat", b: "brother" },
        { a: "sestra", b: "sister" },
        { a: "roditelji", b: "parents" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Put the endings to work — then dictation and one out-loud line.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the ending", hint: "moj / moja / naš…" },
        { emoji: "⌨️", label: "Type two phrases", hint: "moj brat · naša obitelj" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say two relatives", hint: "moj brat, moja sestra" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "___ sestra je liječnica.",
      blanks: [["Tvoja"]],
      translation: "Your sister is a doctor.",
      wordBank: ["Tvoj", "Tvoja", "Tvoje"],
      explanation: "sestra is feminine → Tvoja.",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ obitelj je tu.",
      blanks: [["Moja"]],
      translation: "My family is here.",
      wordBank: ["Moj", "Moja", "Moje"],
      explanation: "obitelj is feminine (a trap!) → Moja.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ tata je inženjer.",
      blanks: [["Naš"]],
      translation: "Our dad is an engineer.",
      wordBank: ["Naš", "Naša", "Naše"],
      explanation: "tata is masculine (a trap!) → Naš.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “my brother”",
      answers: ["moj brat", "Moj brat"],
      explanation: "brat is masculine → moj brat.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “our family”",
      answers: ["naša obitelj", "Naša obitelj"],
      explanation: "obitelj is feminine → naša obitelj.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Moja majka je učiteljica.",
      explanation: "Moja majka je učiteljica — my mother is a teacher.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Naš tata je inženjer.",
      explanation: "Naš tata je inženjer — our dad is an engineer (tata is masculine → naš).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "moj brat, moja sestra",
      targetEn: "my brother, my sister — name two relatives with moj/moja",
      phonetic: "moy braht — MO-ya SES-tra",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–2",
      items: [
        {
          prompt: "Listen: what does the father do?",
          tts: "Moj otac je liječnik.",
          options: ["a doctor", "a teacher", "a cook"],
          correctIndex: 0,
          explanation: "liječnik = doctor (Unit 2) — and otac (m) → moj.",
        },
        {
          prompt: "obitelj is feminine, so “my family” is…",
          options: ["moja obitelj", "moj obitelj", "moje obitelj"],
          correctIndex: 0,
          explanation: "feminine noun → moja.",
        },
        {
          prompt: "Listen: how is the brother?",
          tts: "Naš brat je sretan.",
          options: ["happy", "tired", "sad"],
          correctIndex: 0,
          explanation: "sretan = happy (Unit 1).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: what is the sister?",
      tts: "Moja sestra je studentica.",
      options: ["a student", "a teacher", "a doctor"],
      correctIndex: 0,
      explanation: "studentica = a (female) student, from Unit 2.",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key:** moj/tvoj/naš/vaš copy the gender of the thing owned — **m → moj** (moj brat) · **f → moja** (moja sestra) · **n → moje** (moje ime). Same shape as dobar/dobra, but neuter is **-e**, not -o.\n\nTrap words: **tata is masculine** (naš tata), **obitelj and kći are feminine** (moja obitelj, moja kći).\n\nNext lesson: his, her, and their — **njegov, njezin, njihov** — and “whose?” (čiji).",
      vocabIds: [
        "a1u3.obitelj", "a1u3.majka", "a1u3.otac", "a1u3.brat", "a1u3.sestra",
        "a1u3.sin", "a1u3.kci", "a1u3.roditelji", "a1u3.moj", "a1u3.tvoj", "a1u3.nas", "a1u3.vas",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "___ brat je student. (my)", answers: ["moj"], back: "Moj brat je student. (brat m → moj)", tts: "Moj brat je student." },
    { front: "___ sestra je studentica. (my)", answers: ["moja"], back: "Moja sestra je studentica. (sestra f → moja)", tts: "Moja sestra je studentica." },
    { front: "___ ime je Tom. (my)", answers: ["moje"], back: "Moje ime je Tom. (ime n → moje — soft -e!)", tts: "Moje ime je Tom." },
    { front: "___ tata je inženjer. (our)", answers: ["naš"], back: "Naš tata je inženjer. (tata is m!)", tts: "Naš tata je inženjer." },
    { front: "___ obitelj je tu. (our)", answers: ["naša"], back: "Naša obitelj je tu. (obitelj is f!)", tts: "Naša obitelj je tu." },
    { front: "tata — which gender? m / f / n → ___", answers: ["m"], back: "tata = m → moj/naš tata." },
    { front: "obitelj — which gender? m / f / n → ___", answers: ["f"], back: "obitelj = f → moja obitelj." },
  ],
  notes: {
    inOneSentence: {
      en: "A possessive (moj, tvoj, naš) takes the gender-ending of the noun it owns, not of the owner.",
      exampleHr: "moj brat · moja sestra · moje ime",
    },
    deepDive: [
      {
        title: "The agreement rule (it's just an adjective)",
        body:
          "moj/tvoj/naš/vaš behave like the adjectives from Unit 2: they agree with the noun in gender. In the nominative singular that means one of three endings — **-∅ (m), -a (f), -e (n)**.\n\nThe only thing to watch: these four possessives are the *soft* type, so their neuter ends in **-e** (moje, tvoje, naše, vaše) — not -o like *dobro/novo*. (njegov/njezin/njihov, coming in L2, are the hard type and DO take -o: njegovo.)",
        table: {
          caption: "moj / tvoj / naš / vaš — NOM singular",
          headers: ["", "masculine", "feminine", "neuter"],
          rows: [
            ["moj (my)", "moj", "moja", "moje"],
            ["tvoj (your)", "tvoj", "tvoja", "tvoje"],
            ["naš (our)", "naš", "naša", "naše"],
            ["vaš (your, pl/formal)", "vaš", "vaša", "vaše"],
          ],
        },
      },
      {
        title: "The trap words",
        body:
          "Three family words don't look like their gender:\n\n- **tata** (dad) ends in -a but is **masculine** — male-person nouns in -a stay masculine (like *kolega*). Say *naš tata*, never *naša tata*.\n- **obitelj** (family) ends in a consonant but is **feminine** (the feminine -i type, like *noć* and *večer* from Unit 2). Say *moja obitelj*.\n- **kći** (daughter) is **feminine** and irregular — for now just *moja kći*.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Memorize the three",
          text: "tata = m · obitelj = f · kći = f. Everything else in this lesson follows the ending normally.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "moj sestra",
        right: "moja sestra",
        why: "The possessive agrees with the THING owned; sestra is feminine → moja.",
      },
      {
        wrong: "moja tata / naša tata",
        right: "moj tata / naš tata",
        why: "tata is masculine despite the -a — male-person nouns in -a stay masculine.",
      },
      {
        wrong: "moj obitelj",
        right: "moja obitelj",
        why: "obitelj is feminine (consonant-final -i type), so it takes moja.",
      },
      {
        wrong: "mojo ime",
        right: "moje ime",
        why: "moj/tvoj/naš are the soft type — their neuter ending is -e, not -o.",
      },
    ],
    memoryHooks: [
      "Possessives are adjectives in disguise: moj/moja/moje = dobar/dobra/dobro (just neuter -e).",
      "The trap trio: tata the dad in a dress (-a but m), and the two feminine consonant-words obitelj & kći.",
      "Owner is always the same (I/you/we) — only the noun's gender moves the ending.",
    ],
    connects: [
      { label: "Noun gender & the trap nouns (Unit 2 L1)", lessonId: "a1u2l1" },
      { label: "Adjective agreement dobar/dobra/dobro (Unit 2 L3)", lessonId: "a1u2l3" },
      { label: "Next: njegov/njezin/njihov + čiji (Unit 3 L2)", lessonId: "a1u3l2" },
    ],
    selfCheck: [
      { q: "How do you say “my sister”?", a: "moja sestra — sestra is feminine, so moj → moja." },
      { q: "Why is it naš tata, not naša tata?", a: "tata is masculine despite ending in -a." },
      { q: "What gender is obitelj, and what's “my family”?", a: "Feminine → moja obitelj." },
      { q: "Why is it moje ime and not mojo ime?", a: "moj is the soft type; its neuter ending is -e." },
      { q: "Which possessives are taught in this lesson?", a: "moj (my), tvoj (your), naš (our), vaš (your, plural/formal). njegov/njezin/njihov come next." },
    ],
  },
};
