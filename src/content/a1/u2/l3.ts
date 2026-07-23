import type { Lesson } from "@/types/content";

/**
 * A1 U2 L3 — Dobar, dobra, dobro (Adjective agreement, NOM sg)
 * Spec: curriculum/A1/unit-2.md · grammar-reference §4 (NOM row only).
 */
export const a1u2l3: Lesson = {
  id: "a1u2l3",
  unitId: "a1u2",
  title: "Dobar, dobra, dobro",
  titleEn: "Adjectives copy the noun's gender",
  grammarTags: ["adjective-agreement-nom"],
  estMinutes: 17,
  vocab: [
    { id: "a1u2.ucitelj", hr: "učitelj", en: "teacher (m)", pos: "noun", gender: "m", icon: "👨‍🏫", image: "/img/ucitelj.png", exampleHr: "On je učitelj.", exampleEn: "He is a teacher." },
    { id: "a1u2.uciteljica", hr: "učiteljica", en: "teacher (f)", pos: "noun", gender: "f", icon: "👩‍🏫", image: "/img/uciteljica.png", exampleHr: "Ona je dobra učiteljica.", exampleEn: "She is a good teacher." },
    { id: "a1u2.lijecnik", hr: "liječnik", en: "doctor (m)", pos: "noun", gender: "m", icon: "👨‍⚕️", image: "/img/lijecnik.png", exampleHr: "On je liječnik.", exampleEn: "He is a doctor." },
    { id: "a1u2.lijecnica", hr: "liječnica", en: "doctor (f)", pos: "noun", gender: "f", icon: "👩‍⚕️", image: "/img/lijecnica.png", exampleHr: "Ana je nova liječnica.", exampleEn: "Ana is a new doctor." },
    { id: "a1u2.konobar", hr: "konobar", en: "waiter", pos: "noun", gender: "m", icon: "🤵", image: "/img/konobar.png", exampleHr: "Marko je konobar.", exampleEn: "Marko is a waiter." },
    { id: "a1u2.konobarica", hr: "konobarica", en: "waitress", pos: "noun", gender: "f", icon: "💁‍♀️", image: "/img/konobarica.png", exampleHr: "Ona je konobarica.", exampleEn: "She is a waitress." },
    { id: "a1u2.inzenjer", hr: "inženjer", en: "engineer (m)", pos: "noun", gender: "m", icon: "👷", image: "/img/inzenjer.png", exampleHr: "On je inženjer.", exampleEn: "He is an engineer." },
    { id: "a1u2.inzenjerka", hr: "inženjerka", en: "engineer (f)", pos: "noun", gender: "f", icon: "👷‍♀️", image: "/img/inzenjerka.png", exampleHr: "Ona je inženjerka.", exampleEn: "She is an engineer." },
    { id: "a1u2.dobar", hr: "dobar", en: "good", pos: "adj", icon: "👍", exampleHr: "Čaj je dobar.", exampleEn: "The tea is good." },
    { id: "a1u2.los", hr: "loš", en: "bad", pos: "adj", icon: "👎", exampleHr: "On je loš učitelj.", exampleEn: "He is a bad teacher." },
    { id: "a1u2.nov", hr: "nov", en: "new", pos: "adj", icon: "✨", exampleHr: "Grad je nov.", exampleEn: "The city is new." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dobar, dobra, dobro",
      subtitle: "You've been doing agreement since day 1: dobar dan, dobra večer, dobro jutro.",
      emoji: "🎨",
      items: [
        { emoji: "🪞", label: "Adjectives mirror the noun", hint: "-∅ / -a / -o by gender" },
        { emoji: "🫥", label: "The fleeting a", hint: "dobar → dobra (the a vanishes)" },
        { emoji: "👩‍⚕️", label: "Professions m/f", hint: "učitelj/učiteljica…" },
        { emoji: "🗣️", label: "Drills, ear & voice", hint: "then recap" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The pattern you already know",
      subtitle: "The Unit 1 greetings secretly taught you the whole rule.",
      emoji: "🪞",
      items: [
        { emoji: "🌤️", label: "dobar dan — m" },
        { emoji: "🌆", label: "dobra večer — f" },
        { emoji: "🌅", label: "dobro jutro — n" },
        { emoji: "🧩", label: "Quick checks" },
      ],
    },
    {
      id: "s03",
      type: "mc",
      review: true,
      prompt: "Warm-up from Unit 1: which greeting goes with jutro (morning)?",
      options: ["Dobro jutro!", "Dobra večer!", "Dobar dan!"],
      correctIndex: 0,
      explanation: "jutro → dobro jutro. The three greetings already agree by gender — that's today's whole lesson.",
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u2.ucitelj", "a1u2.uciteljica", "a1u2.lijecnik", "a1u2.lijecnica",
        "a1u2.konobar", "a1u2.konobarica", "a1u2.inzenjer", "a1u2.inzenjerka",
        "a1u2.dobar", "a1u2.los", "a1u2.nov",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Adjectives copy the noun's gender",
      body:
        "An adjective **mirrors the gender** of the noun it describes: **-∅** for m, **-a** for f, **-o** for n. You've chanted the paradigm daily since Unit 1: *dobar dan · dobra večer · dobro jutro*.\n\nWatch the **fleeting a**: *dob__a__r* keeps its *a* only in the masculine — *dobra*, *dobro* drop it. (After š, ž, č… the neuter takes **-e**: *loše*.)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The fleeting a",
        text: "dobar → dobra, dobro — the a before r vanishes outside the masculine. Never “dobara”! Same story: sretan → sretna, umoran → umorna.",
      },
      table: {
        caption: "Agreement in the nominative singular",
        headers: ["gender", "ending", "good", "new", "bad"],
        rows: [
          ["m (grad, dan)", "-∅", "dobar", "nov", "loš"],
          ["f (kava, večer)", "-a", "dobra", "nova", "loša"],
          ["n (jutro, selo)", "-o / -e", "dobro", "novo", "loše (soft -e!)"],
        ],
      },
      examples: [
        { hr: "Čaj je dobar.", en: "The tea is good.", note: "čaj m → dobar" },
        { hr: "Kava je dobra.", en: "The coffee is good.", note: "kava f → dobra" },
        { hr: "Jutro je dobro.", en: "The morning is good.", note: "jutro n → dobro" },
        { hr: "Tom je dobar student, a Ana je dobra studentica.", en: "Tom is a good student, and Ana is a good student." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the matching form",
      items: [
        {
          prompt: "Ona je ___ učiteljica.",
          options: ["dobra", "dobar", "dobro"],
          correctIndex: 0,
          explanation: "učiteljica is feminine → dobra.",
        },
        {
          prompt: "Grad je ___. (new)",
          options: ["nov", "nova", "novo"],
          correctIndex: 0,
          explanation: "grad is masculine → nov (bare form).",
        },
        {
          prompt: "Selo je ___. (new)",
          options: ["novo", "nov", "nova"],
          correctIndex: 0,
          explanation: "selo is neuter → novo.",
        },
        {
          prompt: "Listen: which form did you hear?",
          tts: "Škola je nova.",
          options: ["nova", "nov", "novo"],
          correctIndex: 0,
          explanation: "škola f → nova. Your ear caught the -a.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Professions come in m/f pairs",
      body:
        "Like nationalities, professions pair up — the feminine usually adds **-ica** or **-ka**.\n\n(Lowercase, unlike nationalities: *konobar*, but *Hrvat*.)",
      table: {
        caption: "Professions — he / she",
        headers: ["profession", "he is…", "she is…"],
        rows: [
          ["teacher", "učitelj", "učiteljica"],
          ["doctor", "liječnik", "liječnica"],
          ["waiter/waitress", "konobar", "konobarica"],
          ["engineer", "inženjer", "inženjerka"],
          ["cook", "kuhar", "kuharica"],
        ],
      },
      examples: [
        { hr: "Marko je konobar, nije kuhar.", en: "Marko is a waiter, he is not a cook." },
        { hr: "On je inženjer, a ona je inženjerka.", en: "He is an engineer, and she is an engineer." },
        { hr: "Ana je nova liječnica.", en: "Ana is a new doctor." },
      ],
      ttsChips: ["učitelj", "učiteljica", "liječnik", "liječnica", "konobar", "konobarica", "inženjer", "inženjerka", "kuhar", "kuharica"],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match him to her: profession pairs",
      pairs: [
        { a: "učitelj", b: "učiteljica" },
        { a: "liječnik", b: "liječnica" },
        { a: "konobar", b: "konobarica" },
        { a: "inženjer", b: "inženjerka" },
        { a: "kuhar", b: "kuharica" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Agreement drills",
      subtitle: "Fill, type and build until the endings come automatically.",
      emoji: "🏋️",
      items: [
        { emoji: "🧩", label: "Fill the endings", hint: "watch the trap nouns!" },
        { emoji: "⌨️", label: "Type full sentences" },
        { emoji: "🔀", label: "Build a sentence" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Marko je ___ konobar. (good)",
      blanks: [["dobar"]],
      translation: "Marko is a good waiter.",
      wordBank: ["dobar", "dobra", "dobro"],
      explanation: "konobar m → dobar.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Večer je ___. (good)",
      blanks: [["dobra"]],
      translation: "The evening is good.",
      wordBank: ["dobra", "dobar", "dobro"],
      explanation: "Trap noun! večer is feminine → dobra (as in Dobra večer!).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ime je ___. (new)",
      blanks: [["novo"]],
      translation: "The name is new.",
      wordBank: ["novo", "nov", "nova"],
      explanation: "ime is neuter (the -me type) → novo.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Translate: “Ana is a new doctor.”",
      answers: ["Ana je nova liječnica.", "Ana je nova liječnica"],
      hint: "doctor (f) = liječnica → the adjective takes -a.",
      explanation: "Ana je nova liječnica — feminine noun, feminine adjective.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Translate: “He is a bad cook.”",
      answers: ["On je loš kuhar.", "On je loš kuhar", "Loš je kuhar.", "Loš je kuhar"],
      hint: "bad = loš; cook (m) = kuhar.",
      explanation: "On je loš kuhar — masculine bare form loš.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Ana", "je", "dobra", "studentica"],
      answers: ["Ana je dobra studentica.", "Ana je dobra studentica"],
      en: "Ana is a good student.",
      explanation: "Adjective right before its noun, both feminine.",
    },
    {
      id: "s16",
      type: "section",
      title: "Part 3 · Ear, voice & review",
      subtitle: "Hear the endings, describe yourself — then a Unit 1 flashback.",
      emoji: "🗣️",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "listen for -a vs -o vs -∅" },
        { emoji: "🎤", label: "Describe yourself", hint: "two adjectives" },
        { emoji: "🔁", label: "Unit 1 words, now inflected", hint: "sretan → sretna" },
        { emoji: "🎯", label: "Recap", hint: "11 words to your deck" },
      ],
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Kava je dobra.",
      explanation: "Kava je dobra — the coffee is good (f + -a).",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "On je dobar kuhar.",
      explanation: "On je dobar kuhar — he is a good cook (m, bare form).",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Sretan sam i nisam umoran.",
      targetEn: "I'm happy and I'm not tired. (Women: Sretna sam i nisam umorna.)",
      phonetic: "SRE-tan sam ee NI-sam U-mo-ran",
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Unit 1 words, now with endings",
      items: [
        {
          prompt: "Ana je ___. (happy — Unit 1 word, new form!)",
          options: ["sretna", "sretan", "sretno"],
          correctIndex: 0,
          explanation: "Fleeting a: sretan → sretna for Ana (f).",
        },
        {
          prompt: "Unit 1 taught you loše (badly). The coffee is BAD — Kava je ___.",
          options: ["loša", "loš", "loše"],
          correctIndex: 0,
          explanation: "The adjective agrees: kava f → loša. (loše is the adverb — and the neuter form.)",
        },
        {
          prompt: "Listen: is the speaker a man or a woman?",
          tts: "Umorna sam.",
          options: ["a woman", "a man", "you can't tell"],
          correctIndex: 0,
          explanation: "Umorna (-a) is the feminine form — the ending gives the speaker away!",
        },
        {
          prompt: "Kako si? — you're feeling GREAT. Your Unit 1 answer?",
          options: ["Odlično!", "Loše.", "Molim?"],
          correctIndex: 0,
          explanation: "odlično = excellent (Unit 1) — the upbeat answer to Kako si?",
        },
      ],
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "Why is it Dobra večer — not “Dobro večer”?",
      tts: "Dobra večer!",
      options: [
        "večer is feminine — a trap noun from L1",
        "večer is neuter",
        "dobra is the only form of the adjective",
      ],
      correctIndex: 0,
      explanation: "večer ends in a consonant but is feminine → dobra večer. The greeting was the clue all along.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Agreement, nominative singular:** the adjective mirrors the noun — **-∅** m (dobar dan), **-a** f (dobra večer), **-o/-e** n (dobro jutro, loše…).\n\n**Fleeting a:** dobar → dobra · sretan → sretna · umoran → umorna.\n\nPlus five profession pairs: učitelj/učiteljica, liječnik/liječnica, konobar/konobarica, inženjer/inženjerka, kuhar/kuharica.\n\nNext lesson: numbers 1–20 — counting only!",
      vocabIds: [
        "a1u2.ucitelj", "a1u2.uciteljica", "a1u2.lijecnik", "a1u2.lijecnica",
        "a1u2.konobar", "a1u2.konobarica", "a1u2.inzenjer", "a1u2.inzenjerka",
        "a1u2.dobar", "a1u2.los", "a1u2.nov",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "Kava je ___. (good)", answers: ["dobra"], back: "Kava je dobra. (kava f → -a)", tts: "Kava je dobra." },
    { front: "Selo je ___. (new)", answers: ["novo"], back: "Selo je novo. (selo n → -o)", tts: "Selo je novo." },
    { front: "Dan je ___. (bad)", answers: ["loš"], back: "Dan je loš. (dan m → no ending)", tts: "Dan je loš." },
  ],
  notes: {
    inOneSentence: {
      en: "An adjective copies the gender of its noun: -∅ for masculine, -a for feminine, -o (or soft -e) for neuter — dobar dan, dobra večer, dobro jutro.",
      exampleHr: "Čaj je dobar. Kava je dobra. Jutro je dobro.",
    },
    deepDive: [
      {
        title: "The NOM singular agreement row (full)",
        body:
          "This is the nominative-singular row of the full adjective table (the other six cases arrive one at a time, Units 4–14). Two wrinkles worth owning now:\n\n1. **Fleeting a** — masculine forms like *dobar, sretan, umoran* hide an *a* that disappears in every other form: *dobra, sretna, umorna*.\n2. **Soft-consonant neuter -e** — after š, ž, č, ć, đ, j, lj, nj the neuter ending is **-e**, not -o: *loše* (bad), later *vruće* (hot).",
        table: {
          caption: "NOM sg agreement — all A1 U2 adjectives + Unit 1 friends",
          headers: ["adjective", "m", "f", "n"],
          rows: [
            ["good", "dobar", "dobra", "dobro"],
            ["bad", "loš", "loša", "loše (soft -e)"],
            ["new", "nov", "nova", "novo"],
            ["happy", "sretan", "sretna", "sretno"],
            ["tired", "umoran", "umorna", "umorno"],
          ],
        },
      },
      {
        title: "The fleeting a — spot it, drop it",
        body:
          "Masculine adjectives ending in **-ar, -an** (and later -ak) usually carry a fleeting a: it exists **only** in the bare masculine form.\n\ndob**a**r → dobra, dobro · sret**a**n → sretna · umor**a**n → umorna.\n\nIf you hear yourself saying ~~dobara~~ or ~~sretana~~ — the a snuck back in. It never survives outside the masculine.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Never “dobara”",
          text: "The a in dobar exists only in the masculine. Feminine and neuter squeeze it out: dobra, dobro.",
        },
      },
      {
        title: "Professions: pairs + the speaker's gender leaks",
        body:
          "učitelj → učiteljica · liječnik → liječnica · konobar → konobarica · inženjer → inženjerka · kuhar → kuharica. Feminine usually adds **-ica** or **-ka** (same trick as studentica and Hrvatica).\n\nFun consequence: a lone sentence like *Umorna sam* reveals the speaker is a woman — the adjective ending carries the information English puts nowhere.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ana je dobar učiteljica. (default masculine everywhere)",
        right: "Ana je dobra učiteljica.",
        why: "The adjective must copy the noun's gender — feminine noun, -a adjective.",
      },
      {
        wrong: "dobra jutro",
        right: "dobro jutro",
        why: "jutro is neuter → -o. (And večer is feminine → dobra večer.)",
      },
      {
        wrong: "dobara / sretana (re-inserting the a)",
        right: "dobra / sretna",
        why: "The fleeting a lives only in the bare masculine form.",
      },
      {
        wrong: "Kava je loše.",
        right: "Kava je loša. (loše = the adverb “badly”, or the neuter form)",
        why: "Describing a noun takes the agreeing adjective; loše as “badly” describes actions.",
      },
    ],
    memoryHooks: [
      "The three greetings ARE the paradigm: dobar dan (m), dobra večer (f), dobro jutro (n) — you've been drilling agreement since day 1.",
      "Fleeting a = a shy guest: appears only when the masculine hosts, leaves when -a or -o arrive.",
      "-ica / -ka turn him into her: učitelj→učiteljica, kuhar→kuharica, inženjer→inženjerka.",
      "Umorna sam = “I'm tired — and I'm a woman”: endings carry hidden info.",
    ],
    connects: [
      { label: "Noun gender — the key this lesson cashes in (L1)", lessonId: "a1u2l1" },
      { label: "Unit 1 courtesy greetings (the secret paradigm)", lessonId: "a1u1l5" },
      { label: "Possessives agree the same way (Unit 3)", lessonId: "a1u3l1" },
    ],
    selfCheck: [
      { q: "The tea is good — say it in Croatian.", a: "Čaj je dobar." },
      { q: "Why dobra večer and not dobro večer?", a: "večer is feminine (trap noun) → the adjective takes -a." },
      { q: "What happens to the a of dobar in the feminine?", a: "It vanishes (fleeting a): dobra." },
      { q: "Neuter of loš — and why?", a: "loše — after a soft consonant (š) the neuter takes -e instead of -o." },
      { q: "She is a waitress — say it in Croatian.", a: "Ona je konobarica." },
    ],
  },
};
