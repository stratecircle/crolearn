import type { Lesson } from "@/types/content";

/**
 * A1 U3 L4 — Imam brata i sestru (imati + fixed-phrase objects)
 * Spec: curriculum/A1/unit-3.md · grammar-reference §6 (imati/nemam), §7 (-am class).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u3` and review. See docs/NOAH-TODO.md.
 *
 * Level guard: imati fully conjugated (§6); its OBJECTS are memorized CHUNKS —
 * the accusative endings (brata, sestru, psa, mačku, kćer) are NOT analyzed here
 * (that is Unit 4's ACC). Flag as chunks; do not build them from parts.
 */
export const a1u3l4: Lesson = {
  id: "a1u3l4",
  unitId: "a1u3",
  title: "Imam brata i sestru",
  titleEn: "imati — to have",
  grammarTags: ["imati", "have"],
  estMinutes: 18,
  vocab: [
    { id: "a1u3.imati", hr: "imati", en: "to have (imam, imaš…)", pos: "verb", icon: "🤲", exampleHr: "Imam brata i sestru.", exampleEn: "I have a brother and a sister." },
    { id: "a1u3.pas", image: "/img/pas.png", hr: "pas", en: "dog", pos: "noun", gender: "m", icon: "🐶", exampleHr: "Imam psa.", exampleEn: "I have a dog." },
    { id: "a1u3.macka", image: "/img/macka.png", hr: "mačka", en: "cat", pos: "noun", gender: "f", icon: "🐱", exampleHr: "Imaš li mačku?", exampleEn: "Do you have a cat?" },
    { id: "a1u3.beba", image: "/img/beba.png", hr: "beba", en: "baby", pos: "noun", gender: "f", icon: "👶", exampleHr: "Oni imaju bebu.", exampleEn: "They have a baby." },
    { id: "a1u3.ptica", image: "/img/ptica.png", hr: "ptica", en: "bird", pos: "noun", gender: "f", icon: "🐦", exampleHr: "Ana ima pticu.", exampleEn: "Ana has a bird." },
    { id: "a1u3.kuca", image: "/img/kuca.png", hr: "kuća", en: "house", pos: "noun", gender: "f", icon: "🏠", exampleHr: "Imamo kuću.", exampleEn: "We have a house." },
    { id: "a1u3.auto", image: "/img/auto.png", hr: "auto", en: "car (m — despite -o!)", pos: "noun", gender: "m", icon: "🚗", exampleHr: "On ima auto.", exampleEn: "He has a car." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Imam brata i sestru",
      subtitle: "Talk about who and what you HAVE — your second real verb.",
      emoji: "🤲",
      items: [
        { emoji: "🔢", label: "imati, all six forms", hint: "imam · imaš · ima · imamo · imate · imaju" },
        { emoji: "🚫", label: "…and nemam", hint: "the fused negative (like nisam)" },
        { emoji: "🐶", label: "Who & what — chunks", hint: "brata, sestru, psa, mačku…" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + answer truthfully" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · imati & nemam",
      subtitle: "A regular -am verb — same rhythm as govoriti — plus its fused negative.",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "plurals from L3" },
        { emoji: "✅", label: "imam…imaju", hint: "the -m -š -∅ -mo -te -ju rhythm" },
        { emoji: "🚫", label: "nemam…nemaju", hint: "one word, not “ne imam”" },
        { emoji: "🧠", label: "Quick check", hint: "pick the right form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: plurals from yesterday",
      items: [
        {
          prompt: "From L3: brat → two of them are…",
          options: ["braća", "brati", "bratovi"],
          correctIndex: 0,
          explanation: "The irregular trio: braća, djeca, ljudi.",
        },
        {
          prompt: "From L3: Djeca ___ dobra.",
          options: ["su", "je", "smo"],
          correctIndex: 0,
          explanation: "djeca means several children → plural su.",
        },
        {
          prompt: "Listen: who is young?",
          tts: "Moje sestre su mlade.",
          options: ["my sisters", "my brothers", "my parents"],
          correctIndex: 0,
          explanation: "sestre = sisters (feminine plural -e).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u3.imati", "a1u3.pas", "a1u3.macka", "a1u3.beba",
        "a1u3.ptica", "a1u3.kuca", "a1u3.auto",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "imati (to have) — and its fused negative nemam",
      body:
        "Your second verb, and it's regular (the -am class, same shape as govoriti):\n\n**imam, imaš, ima, imamo, imate, imaju.**\n\nTo say you DON'T have something, Croatian fuses *ne + imam* into one word — **nemam** — just like *ne + jesam → nisam*: **nemam, nemaš, nema, nemamo, nemate, nemaju.**",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "One word, not two",
        text: "“I don't have” = nemam (NOT “ne imam”). Same fused family as nisam and neću.",
      },
      table: {
        caption: "imati — have / not have",
        headers: ["", "have", "not have"],
        rows: [
          ["ja", "imam", "nemam"],
          ["ti", "imaš", "nemaš"],
          ["on / ona", "ima", "nema"],
          ["mi", "imamo", "nemamo"],
          ["vi", "imate", "nemate"],
          ["oni", "imaju", "nemaju"],
        ],
      },
      examples: [
        { hr: "Imam brata i sestru.", en: "I have a brother and a sister." },
        { hr: "Imaš li psa?", en: "Do you have a dog?", note: "yes/no question with li" },
        { hr: "Nemam psa, imam mačku.", en: "I don't have a dog, I have a cat." },
        { hr: "Oni imaju bebu.", en: "They have a baby." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the right form",
      items: [
        {
          prompt: "Mi ___ mačku. (we have)",
          options: ["imamo", "imate", "imaju"],
          correctIndex: 0,
          explanation: "mi → imamo.",
        },
        {
          prompt: "Ja ___ psa. (I don't have)",
          options: ["nemam", "ne imam", "nemamo"],
          correctIndex: 0,
          explanation: "“I don't have” is the fused nemam — one word.",
        },
        {
          prompt: "Oni ___ bebu. (they have)",
          options: ["imaju", "imamo", "ima"],
          correctIndex: 0,
          explanation: "oni → imaju.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Who & what you have — memorize the chunk",
      body:
        "After *imam*, the thing you have changes its ending a little: *Imam brat**a**, sestr**u**, ps**a**, mačk**u***. That's the **accusative case** — and it arrives in **Unit 4**. For now, learn each phrase **as a whole chunk**, the way you learned *iz Kanade*.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Chunk alert 🧩",
        text: "Imam brata / sestru / sina / kćer / psa / mačku / bebu / pticu / kuću / auto. Memorize the shape — Unit 4 explains the -a / -u.",
      },
      table: {
        caption: "The chunk list (why? → Unit 4)",
        headers: ["you have…", "chunk"],
        rows: [
          ["a brother / sister", "brata / sestru"],
          ["a son / daughter", "sina / kćer"],
          ["a dog / cat", "psa / mačku"],
          ["a baby / bird", "bebu / pticu"],
          ["a house / car", "kuću / auto"],
        ],
      },
      examples: [
        { hr: "Imam sina i kćer.", en: "I have a son and a daughter.", note: "chunks — memorize whole" },
        { hr: "Imamo kuću i auto.", en: "We have a house and a car." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the animal/thing to English",
      pairs: [
        { a: "pas", b: "dog" },
        { a: "mačka", b: "cat" },
        { a: "beba", b: "baby" },
        { a: "ptica", b: "bird" },
        { a: "kuća", b: "house" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Say what you have (and don't), take dictation, and answer aloud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the verb", hint: "ima / imamo / imam" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Imam sestru · Nemamo psa" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Answer truthfully", hint: "Imaš li brata ili sestru?" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Ana ___ brata.",
      blanks: [["ima"]],
      translation: "Ana has a brother.",
      wordBank: ["ima", "imam", "imaju"],
      explanation: "Ana (ona) → ima.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Mi ___ kuću i auto.",
      blanks: [["imamo"]],
      translation: "We have a house and a car.",
      wordBank: ["imamo", "imate", "ima"],
      explanation: "mi → imamo.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ja ___ mačku, nemam psa.",
      blanks: [["imam"]],
      translation: "I have a cat, I don't have a dog.",
      wordBank: ["imam", "ima", "imaju"],
      explanation: "ja → imam (and the fused nemam for “don't have”).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I have a sister.”",
      answers: ["Imam sestru.", "Imam sestru", "imam sestru"],
      explanation: "imam + the chunk sestru.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “We don't have a dog.”",
      answers: ["Nemamo psa.", "Nemamo psa", "nemamo psa"],
      explanation: "fused negative nemamo + the chunk psa.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Imaš li brata ili sestru?",
      explanation: "Imaš li brata ili sestru? — Do you have a brother or a sister?",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Oni imaju bebu.",
      explanation: "Oni imaju bebu — they have a baby.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Imam sestru.",
      targetEn: "answer “Imaš li brata ili sestru?” truthfully — e.g. I have a sister.",
      phonetic: "EE-mam SES-troo",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 1–2",
      items: [
        {
          prompt: "From Unit 2: “Imaš li brata ___ sestru?” (or)",
          options: ["ili", "i", "a"],
          correctIndex: 0,
          explanation: "ili = or (Unit 2).",
        },
        {
          prompt: "Listen: how many brothers does she say she has? (Koliko?)",
          tts: "Imam dva brata.",
          options: ["two", "one", "three"],
          correctIndex: 0,
          explanation: "dva = 2 (Unit 2 numbers).",
        },
        {
          prompt: "From Unit 1: someone offers you coffee — you accept with…",
          options: ["Hvala!", "Molim?", "Doviđenja!"],
          correctIndex: 0,
          explanation: "Hvala = thank you (Unit 1 courtesy words).",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: what does she have?",
      tts: "Imam mačku i pticu.",
      options: ["a cat and a bird", "a dog and a cat", "a baby and a bird"],
      correctIndex: 0,
      explanation: "mačku = cat, pticu = bird (both chunks after imam).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**imati (to have):** imam, imaš, ima, imamo, imate, imaju. The negative fuses into one word — **nemam, nemaš, nema…** (like nisam).\n\n**Who & what you have are chunks:** Imam brat**a**, sestr**u**, ps**a**, mačk**u**, kćer… Memorize the shapes; the accusative behind them is Unit 4.\n\nNext lesson: describe your people (visok, mlad, lijep) and wrap up the unit.",
      vocabIds: [
        "a1u3.imati", "a1u3.pas", "a1u3.macka", "a1u3.beba",
        "a1u3.ptica", "a1u3.kuca", "a1u3.auto",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "Ja ___ brata i sestru. (have)", answers: ["imam"], back: "Imam brata i sestru.", tts: "Imam brata i sestru." },
    { front: "Ti ___ psa. (have)", answers: ["imaš"], back: "Ti imaš psa.", tts: "Ti imaš psa." },
    { front: "Ona ___ mačku. (has)", answers: ["ima"], back: "Ona ima mačku.", tts: "Ona ima mačku." },
    { front: "Mi ___ kuću. (have)", answers: ["imamo"], back: "Mi imamo kuću.", tts: "Mi imamo kuću." },
    { front: "Vi ___ auto. (have)", answers: ["imate"], back: "Vi imate auto.", tts: "Vi imate auto." },
    { front: "Oni ___ bebu. (have)", answers: ["imaju"], back: "Oni imaju bebu.", tts: "Oni imaju bebu." },
    { front: "Ja ___ psa. (don't have — one word!)", answers: ["nemam"], back: "Nemam psa. (fused negative, like nisam)", tts: "Nemam psa." },
  ],
  notes: {
    inOneSentence: {
      en: "imati conjugates as a regular -am verb (imam…imaju) with the fused negative nemam; its objects are memorized chunks for now.",
      exampleHr: "Imam brata i sestru. Nemam psa.",
    },
    deepDive: [
      {
        title: "imati and nemam",
        body:
          "imati is a regular **-am** verb, so it shares the rhythm of govoriti (Unit 2): **-m, -š, -∅, -mo, -te, -ju**. The one twist is the negative: Croatian has three fused negatives — **nisam** (biti), **neću** (htjeti), and **nemam** (imati). Everywhere else negation is just *ne + verb* (ne govorim), but never *ne imam*.",
        table: {
          caption: "imati — full present",
          headers: ["person", "have", "not have"],
          rows: [
            ["ja", "imam", "nemam"],
            ["ti", "imaš", "nemaš"],
            ["on/ona/ono", "ima", "nema"],
            ["mi", "imamo", "nemamo"],
            ["vi", "imate", "nemate"],
            ["oni/one/ona", "imaju", "nemaju"],
          ],
        },
      },
      {
        title: "The objects are chunks (accusative, Unit 4)",
        body:
          "After *imam*, the thing changes ending: masculine animate nouns look like the genitive (brat→**brata**, sin→**sina**, pas→**psa**), feminine -a nouns take **-u** (sestra→**sestru**, mačka→**mačku**, kuća→**kuću**), and a few are irregular (kći→**kćer**). This is the **accusative case**, taught fully in **Unit 4**. Until then, learn each *Imam ___* phrase as a fixed chunk.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "The chunk list",
          text: "brata · sestru · sina · kćer · psa · mačku · bebu · pticu · kuću · auto (auto doesn't change).",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "ne imam psa",
        right: "nemam psa",
        why: "imati has the fused negative nemam — one word, like nisam.",
      },
      {
        wrong: "Imam brat",
        right: "Imam brata",
        why: "After imati the object takes its chunk (accusative) form; memorize brata whole.",
      },
      {
        wrong: "Oni ima bebu",
        right: "Oni imaju bebu",
        why: "oni → imaju (the -ju ending), not the 3sg ima.",
      },
      {
        wrong: "Imam sestra",
        right: "Imam sestru",
        why: "Feminine -a chunks take -u after imati: sestra→sestru, mačka→mačku.",
      },
    ],
    memoryHooks: [
      "imati rhymes with govoriti: -m, -š, -∅, -mo, -te, -ju.",
      "The three fused negatives: nisam · neću · nemam — never “ne + …” for these.",
      "Imam brata, sestru, psa, mačku — sing the chunks, don't spell them (Unit 4 explains why).",
    ],
    connects: [
      { label: "govoriti — the -am/-im rhythm (Unit 2 L5)", lessonId: "a1u2l5" },
      { label: "nisam — the fused negative family (Unit 2 L2)", lessonId: "a1u2l2" },
      { label: "Next: describing your people (Unit 3 L5)", lessonId: "a1u3l5" },
    ],
    selfCheck: [
      { q: "Conjugate imati for mi and oni.", a: "mi imamo, oni imaju." },
      { q: "How do you say “I don't have”?", a: "nemam — one fused word." },
      { q: "Why is it “Imam brata”, not “Imam brat”?", a: "The object takes its accusative chunk form; memorize brata for now (Unit 4 explains it)." },
      { q: "What are the three fused negatives in Croatian?", a: "nisam (biti), neću (htjeti), nemam (imati)." },
      { q: "Say “We have a house and a car.”", a: "Imamo kuću i auto." },
    ],
  },
};
