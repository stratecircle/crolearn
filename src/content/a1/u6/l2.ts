import type { Lesson } from "@/types/content";

/**
 * A1 U6 L2 — Koliko je sati? (Telling the time)
 * Spec: curriculum/A1/unit-6.md · grammar-reference §13 (numbers & case government).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u6` and review the Croatian before relying on it.
 *
 * Level guard: no new case. Full hours are taught as fixed CHUNKS by number
 * (Jedan je sat · Dva su sata · Pet je sati) — the GEN pattern behind sata/sati is
 * only analysed in Unit 7, so nothing here explains it. The #1 trap of the unit:
 * »pola osam« = 7:30 (half TO eight), NOT 8:30. "At" = u + time.
 * Deviation from spec: the two dictation slides take the spoken Croatian time
 * sentence (the app's listen-type is "type what you hear"); the hear→digits skill
 * is drilled as a TTS multiple-choice battery instead. Noted in the unit spec.
 */
export const a1u6l2: Lesson = {
  id: "a1u6l2",
  unitId: "a1u6",
  title: "Koliko je sati?",
  titleEn: "Telling the time",
  grammarTags: ["telling-time", "pola", "u-plus-time"],
  estMinutes: 19,
  vocab: [
    { id: "a1u6.sat", hr: "sat", en: "hour / o'clock / clock", pos: "noun", gender: "m", icon: "🕐", exampleHr: "Jedan je sat.", exampleEn: "It's one o'clock." },
    { id: "a1u6.minuta", hr: "minuta", en: "minute", pos: "noun", gender: "f", icon: "⏱️", exampleHr: "Jedna minuta.", exampleEn: "One minute." },
    { id: "a1u6.pola", hr: "pola", en: "half (to the next hour!)", pos: "noun", icon: "🕧", exampleHr: "Pola osam je 7:30.", exampleEn: "»Pola osam« is 7:30." },
    { id: "a1u6.podne", hr: "podne", en: "noon / midday", pos: "noun", gender: "n", icon: "☀️", exampleHr: "Ručam u podne.", exampleEn: "I have lunch at noon." },
    { id: "a1u6.ponoc", hr: "ponoć", en: "midnight", pos: "noun", gender: "f", icon: "🌑", exampleHr: "Idem spavati u ponoć.", exampleEn: "I go to bed at midnight." },
    { id: "a1u6.vrijeme", hr: "vrijeme", en: "time (also: weather)", pos: "noun", gender: "n", icon: "⏰", exampleHr: "Koliko je sati? — Vrijeme je za kavu!", exampleEn: "What time is it? — It's time for coffee!" },
    { id: "a1u6.ujutro", hr: "ujutro", en: "in the morning", pos: "adv", icon: "🌄", exampleHr: "Budim se rano ujutro.", exampleEn: "I wake up early in the morning." },
    { id: "a1u6.prijepodne", hr: "prijepodne", en: "in the (late) morning / before noon", pos: "adv", icon: "🌤️", exampleHr: "Prijepodne pijem kavu.", exampleEn: "Before noon I drink coffee." },
    { id: "a1u6.popodne", hr: "popodne", en: "in the afternoon", pos: "adv", icon: "🌇", exampleHr: "Popodne se odmaram.", exampleEn: "In the afternoon I rest." },
    { id: "a1u6.navecer", hr: "navečer", en: "in the evening", pos: "adv", icon: "🌆", exampleHr: "Navečer idem spavati.", exampleEn: "In the evening I go to bed." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Koliko je sati?",
      subtitle: "Tell the time in Croatian — and dodge the one trap that fools every learner.",
      emoji: "🕐",
      items: [
        { emoji: "🕐", label: "Full hours", hint: "Jedan je sat · Pet je sati" },
        { emoji: "🕧", label: "The pola trap", hint: "pola osam = 7:30, NOT 8:30!" },
        { emoji: "⏰", label: "»at« = u + time", hint: "Budim se u sedam" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say your times" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Full hours",
      subtitle: "One question, twelve answers — learn them as ready-made chunks.",
      emoji: "🕐",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's se clitic" },
        { emoji: "❓", label: "Koliko je sati?", hint: "what time is it?" },
        { emoji: "🌗", label: "The day arc", hint: "ujutro → podne → navečer" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's se clitic",
      items: [
        {
          prompt: "From L1: Ana ___ budi rano. (reflexive clitic)",
          options: ["se", "sam", "je"],
          correctIndex: 0,
          explanation: "buditi se is reflexive; Ana is first, so se takes second position.",
        },
        {
          prompt: "From L1: which order is correct?",
          options: ["Tuširam se ujutro.", "Se tuširam ujutro.", "Tuširam ujutro."],
          correctIndex: 0,
          explanation: "Verb first → se second; and don't drop se.",
        },
        {
          prompt: "Listen. When does he get up?",
          tts: "Ustaje rano.",
          options: ["early", "late", "at night"],
          correctIndex: 0,
          explanation: "rano = early; ustajati takes no se.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's time words",
      vocabIds: [
        "a1u6.sat", "a1u6.minuta", "a1u6.pola", "a1u6.podne", "a1u6.ponoc",
        "a1u6.vrijeme", "a1u6.ujutro", "a1u6.prijepodne", "a1u6.popodne", "a1u6.navecer",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Koliko je sati? — full hours",
      body:
        "Ask the time with **Koliko je sati?** (literally “how many is it of hours?”). The answer changes shape with the number — memorise these as **chunks** (the grammar behind sat/sata/sati waits for Unit 7):\n\n- **1** → *Jedan je sat.*\n- **2, 3, 4** → *Dva / tri / četiri su sata.*\n- **5–12** → *Pet / šest … dvanaest je sati.*\n\nAnd two special points on the clock: **podne** (noon) and **ponoć** (midnight). Across the day: **ujutro** (morning) → **prijepodne** (before noon) → **podne** → **popodne** (afternoon) → **navečer** (evening) → **noć** → **ponoć**.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "ujutro", emoji: "🌄", example: "morning" },
          { label: "prijepodne", emoji: "🌤️", example: "before noon" },
          { label: "podne", emoji: "☀️", example: "noon" },
          { label: "popodne", emoji: "🌇", example: "afternoon" },
          { label: "navečer", emoji: "🌆", example: "evening" },
          { label: "ponoć", emoji: "🌑", example: "midnight" },
        ],
      },
      table: {
        caption: "Koliko je sati? — learn as chunks",
        headers: ["clock", "Croatian"],
        rows: [
          ["1:00", "Jedan je sat."],
          ["2:00", "Dva su sata."],
          ["3:00", "Tri su sata."],
          ["4:00", "Četiri su sata."],
          ["5:00", "Pet je sati."],
          ["12:00", "Dvanaest je sati."],
        ],
      },
      examples: [
        { hr: "Koliko je sati?", en: "What time is it?" },
        { hr: "Jedan je sat.", en: "It's one o'clock.", note: "1 → sat" },
        { hr: "Dva su sata.", en: "It's two o'clock.", note: "2–4 → sata" },
        { hr: "Sedam je sati.", en: "It's seven o'clock.", note: "5–12 → sati" },
      ],
    },
    {
      id: "s06",
      type: "listen-type",
      tts: "Pet je sati.",
      explanation: "Pet je sati — it's five o'clock (5–12 → sati).",
    },
    {
      id: "s07",
      type: "listen-type",
      tts: "Dva su sata.",
      explanation: "Dva su sata — it's two o'clock (2–4 → sata).",
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: hear the hour, pick the clock",
      items: [
        {
          prompt: "Listen. What time is it?",
          tts: "Sedam je sati.",
          options: ["7:00", "5:00", "9:00"],
          correctIndex: 0,
          explanation: "sedam = 7 → 7:00.",
        },
        {
          prompt: "Listen. What time is it?",
          tts: "Dvanaest je sati.",
          options: ["12:00", "2:00", "10:00"],
          correctIndex: 0,
          explanation: "dvanaest = 12 → 12:00.",
        },
        {
          prompt: "Listen. What time is it?",
          tts: "Tri su sata.",
          options: ["3:00", "4:00", "13:00"],
          correctIndex: 0,
          explanation: "tri = 3 → 3:00 (2–4 → sata).",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · The pola trap & »at«",
      subtitle: "Half hours look FORWARD — then pin actions to a time with u.",
      emoji: "🕧",
      items: [
        { emoji: "⚠️", label: "pola = half TO", hint: "pola osam = 7:30" },
        { emoji: "⏰", label: "»at« = u + time", hint: "u sedam · u pola devet" },
        { emoji: "✅", label: "Beat the trap", hint: "spot 7:30 vs 8:30" },
      ],
    },
    {
      id: "s10",
      type: "teach",
      title: "pola osam = 7:30 (half TO eight!)",
      body:
        "This is **the #1 trap of the whole unit.** Croatian **pola** (half) looks **FORWARD** to the next hour. So **pola osam** is *half on the way to eight* = **7:30**, not 8:30.\n\nJust name the **hour you're heading toward**: at 7:30 you're heading to eight → **pola osam**. At 12:30 you're heading to one → **pola jedan**.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "pola looks FORWARD",
        text: "»pola osam« = 7:30, NOT 8:30. It means »halfway to eight«. English half-past-seven → Croatian pola OSAM.",
      },
      table: {
        caption: "pola = half to the NEXT hour",
        headers: ["clock", "Croatian", "literally"],
        rows: [
          ["6:30", "pola sedam", "half to seven"],
          ["7:30", "pola osam", "half to eight"],
          ["8:30", "pola devet", "half to nine"],
          ["12:30", "pola jedan", "half to one"],
        ],
      },
      examples: [
        { hr: "Koliko je sati? — Pola osam.", en: "What time is it? — 7:30." },
        { hr: "Pola devet.", en: "8:30.", note: "heading to nine → pola devet" },
        { hr: "Pola jedan.", en: "12:30.", note: "heading to one → pola jedan" },
      ],
    },
    {
      id: "s11",
      type: "quiz-set",
      title: "Beat the pola trap",
      items: [
        {
          prompt: "»pola osam« is…",
          options: ["7:30", "8:30", "8:00"],
          correctIndex: 0,
          explanation: "pola looks forward: pola osam = halfway to eight = 7:30.",
        },
        {
          prompt: "How do you say 8:30?",
          options: ["pola devet", "pola osam", "pola sedam"],
          correctIndex: 0,
          explanation: "8:30 heads toward nine → pola devet.",
        },
        {
          prompt: "»pola jedan« is…",
          options: ["12:30", "1:30", "1:00"],
          correctIndex: 0,
          explanation: "heading to one → 12:30.",
        },
        {
          prompt: "6:30 in Croatian is…",
          options: ["pola sedam", "pola šest", "pola osam"],
          correctIndex: 0,
          explanation: "6:30 heads toward seven → pola sedam.",
        },
      ],
    },
    {
      id: "s12",
      type: "teach",
      title: "“At” a time = u + time",
      body:
        "To say **at** what time you do something, use **u + the time** — pairing perfectly with yesterday's reflexives:\n\n**Budim se u sedam. Tuširam se u osam. Ručam u pola jedan. Idem spavati u ponoć.**\n\nu works with full hours (*u sedam*), half hours (*u pola devet*), and the fixed points (*u podne*, *u ponoć*).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "u = at (a time)",
        text: "u sedam = at seven · u pola devet = at 8:30 · u podne = at noon · u ponoć = at midnight.",
      },
      examples: [
        { hr: "Budim se u sedam.", en: "I wake up at seven." },
        { hr: "Tuširam se u osam.", en: "I shower at eight." },
        { hr: "Ručam u pola jedan.", en: "I have lunch at 12:30." },
        { hr: "Idem spavati u ponoć.", en: "I go to bed at midnight." },
      ],
    },
    {
      id: "s13",
      type: "section",
      title: "Part 3 · Say when you do things",
      subtitle: "Fill, build, type and say your own daily clock.",
      emoji: "⏰",
      items: [
        { emoji: "🧩", label: "Fill the time", hint: "u sedam · pola jedan" },
        { emoji: "🔀", label: "Build a sentence", hint: "ručam · u · pola · jedan" },
        { emoji: "⌨️", label: "Type two times", hint: "at eight · at 12:30" },
        { emoji: "🎤", label: "Say your times", hint: "Budim se u…" },
      ],
    },
    {
      id: "s14",
      type: "fill",
      text: "Budim se ___ sedam.",
      blanks: [["u"]],
      translation: "I wake up at seven.",
      wordBank: ["u", "na", "iz"],
      explanation: "“at a time” = u + time: u sedam.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Koliko je sati? — ___ osam. (7:30)",
      blanks: [["Pola"]],
      translation: "What time is it? — 7:30.",
      wordBank: ["Pola", "Podne", "Ponoć"],
      explanation: "7:30 = pola osam (half TO eight).",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Ručam", "u", "pola", "jedan"],
      answers: ["Ručam u pola jedan.", "Ručam u pola jedan"],
      en: "I have lunch at 12:30.",
      explanation: "u + pola jedan = at 12:30 (heading to one).",
    },
    {
      id: "s17",
      type: "type",
      prompt: "Write it in Croatian: “I shower at eight.”",
      answers: ["Tuširam se u osam.", "Tuširam se u osam", "tuširam se u osam"],
      explanation: "Reflexive tuširati se + u osam: Tuširam se u osam.",
    },
    {
      id: "s18",
      type: "type",
      prompt: "Write it in Croatian: “I have lunch at half past twelve.” (12:30)",
      answers: ["Ručam u pola jedan.", "Ručam u pola jedan", "ručam u pola jedan"],
      explanation: "12:30 heads toward one → u pola jedan.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Idem spavati u ponoć.",
      explanation: "Idem spavati u ponoć — I go to bed at midnight.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Budim se u sedam i idem spavati u ponoć.",
      targetEn: "say your own times — I wake up at seven and go to bed at midnight",
      phonetic: "BOO-dim seh oo SEH-dam ee EE-dem SPA-va-ti oo PO-noch",
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Flashback: numbers & the routine",
      items: [
        {
          prompt: "From Unit 2: which number is »sedam«?",
          options: ["7", "6", "17"],
          correctIndex: 0,
          explanation: "sedam = 7 (Unit 2). The clock rides on the numbers you know.",
        },
        {
          prompt: "From L1: Budim se, ___ se tuširam. (then)",
          options: ["zatim", "kasno", "rano"],
          correctIndex: 0,
          explanation: "zatim = then/next (L1).",
        },
        {
          prompt: "Listen. When is lunch?",
          tts: "Ručam u podne.",
          options: ["at noon", "at midnight", "in the evening"],
          correctIndex: 0,
          explanation: "u podne = at noon.",
        },
      ],
    },
    {
      id: "s22",
      type: "mc",
      review: true,
      prompt: "Listen. What time does she wake up?",
      tts: "Budi se u pola osam.",
      options: ["7:30", "8:30", "8:00"],
      correctIndex: 0,
      explanation: "u pola osam = at 7:30 (half TO eight).",
    },
    {
      id: "s23",
      type: "recap",
      summary:
        "**Full hours (chunks):** *Jedan je sat · Dva/tri/četiri su sata · Pet…dvanaest je sati.* Plus **podne** (noon), **ponoć** (midnight).\n\n**The trap:** **pola** looks FORWARD — **pola osam = 7:30**, not 8:30. Name the hour you're heading toward.\n\n**“At” a time = u + time:** *Budim se u sedam. Ručam u pola jedan. Idem spavati u ponoć.*\n\nNext lesson: **Volim filmove** — liking things in the plural (ACC plural).",
      vocabIds: [
        "a1u6.sat", "a1u6.minuta", "a1u6.pola", "a1u6.podne", "a1u6.ponoc",
        "a1u6.vrijeme", "a1u6.ujutro", "a1u6.prijepodne", "a1u6.popodne", "a1u6.navecer",
      ],
    },
  ],
  srsCloze: [
    { front: "Koliko je sati? — Jedan je ___. (1:00)", answers: ["sat"], back: "Jedan je sat. (1 → sat)", tts: "Jedan je sat." },
    { front: "Koliko je sati? — Pet je ___. (5:00)", answers: ["sati"], back: "Pet je sati. (5–12 → sati)", tts: "Pet je sati." },
    { front: "Koliko je sati? — Dva su ___. (2:00)", answers: ["sata"], back: "Dva su sata. (2–4 → sata)", tts: "Dva su sata." },
    { front: "7:30 in Croatian: pola ___", answers: ["osam"], back: "pola osam = 7:30 (half TO eight!)", tts: "pola osam" },
    { front: "12:30 in Croatian: pola ___", answers: ["jedan"], back: "pola jedan = 12:30 (heading to one).", tts: "pola jedan" },
    { front: "»at seven« = ___ sedam", answers: ["u"], back: "u sedam = at seven (u + time).", tts: "u sedam" },
    { front: "Budim se ___ pola osam. (at 7:30)", answers: ["u"], back: "Budim se u pola osam. — at 7:30.", tts: "Budim se u pola osam." },
    { front: "noon = ___", answers: ["podne"], back: "podne = noon; ponoć = midnight.", tts: "podne" },
  ],
  notes: {
    inOneSentence: {
      en: "Tell full hours as chunks (Jedan je sat, Pet je sati), remember pola osam = 7:30 (half TO eight), and pin actions to a time with u.",
      exampleHr: "Koliko je sati? — Pola osam. · Budim se u sedam.",
    },
    deepDive: [
      {
        title: "Full hours — chunks now, grammar in Unit 7",
        body:
          "**Koliko je sati?** = “what time is it?”. The counted word (sat) changes shape with the number, and for now you learn each as a fixed phrase:\n\n- **1** → *Jedan je sat.*\n- **2–4** → *Dva/tri/četiri su sata.*\n- **5–12** → *Pet … dvanaest je sati.*\n\nThe pattern (2–4 take one form, 5+ another) is the genitive number rule — you'll meet it properly in Unit 7. Until then: memorise. Two fixed points need no number: **podne** (noon) and **ponoć** (midnight).",
        table: {
          caption: "Full hours 1–12",
          headers: ["number", "form", "example"],
          rows: [
            ["1", "sat", "Jedan je sat."],
            ["2–4", "sata", "Dva/tri/četiri su sata."],
            ["5–12", "sati", "Pet/…/dvanaest je sati."],
            ["—", "podne / ponoć", "Podne je. · Ponoć je."],
          ],
        },
      },
      {
        title: "The pola trap and “at” with u",
        body:
          "**pola + [next hour]** = half **to** that hour. English “half past seven” (7:30) becomes **pola osam** — because 7:30 is on the way to eight. Watch the mismatch: the English number and the Croatian number differ by one!\n\nTo say **at** a time, use **u**: *u sedam* (at 7), *u pola devet* (at 8:30), *u podne* (at noon), *u ponoć* (at midnight). It slots straight onto the reflexive routine from L1: *Budim se u sedam.*",
        diagram: {
          kind: "contrast",
          left: { title: "English", emoji: "🇬🇧", lines: [{ hr: "half past seven", en: "7:30" }, { hr: "half past eight", en: "8:30" }] },
          right: { title: "Croatian (look forward!)", emoji: "🇭🇷", lines: [{ hr: "pola osam", en: "7:30" }, { hr: "pola devet", en: "8:30" }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "pola osam = 8:30",
        right: "pola osam = 7:30",
        why: "pola looks forward to the NEXT hour, so pola osam is halfway to eight = 7:30.",
      },
      {
        wrong: "Osam sati je. (for 8:00, wrong order)",
        right: "Osam je sati.",
        why: "je is a clitic — it sits in second position: Osam je sati.",
      },
      {
        wrong: "Budim se na sedam.",
        right: "Budim se u sedam.",
        why: "“at a time” uses u, not na.",
      },
      {
        wrong: "Pet je sata.",
        right: "Pet je sati.",
        why: "5–12 take sati; only 2–4 take sata.",
      },
    ],
    memoryHooks: [
      "pola looks FORWARD: 7:30 is reaching for eight → pola osam. Croatian number = English number + 1.",
      "1 sat · 2–4 sata · 5+ sati — the vowel climbs a-a-i as the number grows.",
      "u = at: u sedam, u podne, u ponoć — the same u you park in for location, now for time.",
    ],
    connects: [
      { label: "The reflexive routine these times attach to (Unit 6 L1)", lessonId: "a1u6l1" },
      { label: "Numbers 1–20 (Unit 2 L4)", lessonId: "a1u2l4" },
      { label: "Next: ACC plural — Volim filmove (Unit 6 L3)", lessonId: "a1u6l3" },
    ],
    selfCheck: [
      { q: "How do you ask “what time is it?”", a: "Koliko je sati?" },
      { q: "What is »pola osam« in digits?", a: "7:30 — half TO eight, not 8:30." },
      { q: "How do you say 8:30?", a: "pola devet (heading toward nine)." },
      { q: "How do you say “I have lunch at noon”?", a: "Ručam u podne." },
      { q: "Why »Pet je sati« but »Dva su sata«?", a: "5–12 take sati; 2–4 take sata (and the verb agrees: je vs su)." },
    ],
  },
};
