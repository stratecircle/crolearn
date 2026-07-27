import type { Lesson } from "@/types/content";

/**
 * A2 U16 L1 — Dva glagola za jednu radnju (aspect pairs as vocabulary)
 * Spec: curriculum/A2/unit-16.md · grammar-reference §11.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Gentle intro: pairs as VOCABULARY, no formation theory (B1 U17). počinjati
 * recycled from U6 (its pf početi is the new half). »gledam televiziju« →
 * »gledam filmove« per the 2026-07-27 spec correction.
 */
export const a2u16l1: Lesson = {
  id: "a2u16l1",
  unitId: "a2u16",
  title: "Dva glagola za jednu radnju",
  titleEn: "Two verbs, one action — meet aspect",
  grammarTags: ["aspect-pairs", "aspect-intro"],
  estMinutes: 19,
  vocab: [
    { id: "a2u16.napisati", hr: "napisati", en: "to write (and FINISH) — pf of pisati", pos: "verb", icon: "✅", exampleHr: "Želim napisati pismo.", exampleEn: "I want to write the letter (and finish it)." },
    { id: "a2u16.procitati", hr: "pročitati", en: "to read (to the end) — pf of čitati", pos: "verb", icon: "📗", exampleHr: "Danas želim pročitati cijelu knjigu.", exampleEn: "Today I want to read the whole book." },
    { id: "a2u16.pogledati", hr: "pogledati", en: "to take a look — pf of gledati", pos: "verb", icon: "👁️", exampleHr: "Pogledaj ovo!", exampleEn: "Look at this!" },
    { id: "a2u16.napraviti", hr: "napraviti", en: "to make / get done — pf of raditi", pos: "verb", icon: "🛠️", exampleHr: "Moram napraviti plan.", exampleEn: "I have to make a plan." },
    { id: "a2u16.popiti", hr: "popiti", en: "to drink up — pf of piti", pos: "verb", icon: "🥤", exampleHr: "Popij kavu — idemo!", exampleEn: "Drink up your coffee — we're going!" },
    { id: "a2u16.pojesti", hr: "pojesti", en: "to eat up — pf of jesti", pos: "verb", icon: "🍽️", exampleHr: "Tom je pojeo cijelu tortu!", exampleEn: "Tom ate the whole cake!" },
    { id: "a2u16.nauciti", hr: "naučiti", en: "to learn (master it) — pf of učiti", pos: "verb", icon: "🎓", exampleHr: "Želim naučiti hrvatski.", exampleEn: "I want to learn Croatian (all the way)." },
    { id: "a2u16.poceti", hr: "početi", en: "to begin (pf; počnem) — pair of počinjati", pos: "verb", icon: "🚀", exampleHr: "Mogu početi u ponedjeljak.", exampleEn: "I can start on Monday." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dva glagola za jednu radnju",
      subtitle: "Croatian has two verbs where English has one — and the choice tells your listener whether you FINISHED.",
      emoji: "〰️",
      items: [
        { emoji: "〰️", label: "Wavy: the process", hint: "pisati — writing" },
        { emoji: "✅", label: "Point: done", hint: "napisati — written!" },
        { emoji: "🃏", label: "8 pair cards", hint: "old friends, new partners" },
        { emoji: "⚠️", label: "One trap", hint: "perfective present ≠ now" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Wavy line, sharp point",
      subtitle: "Every verb you've learned since U4 was secretly HALF of a pair. Meet the other halves.",
      emoji: "〰️",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "modals + infinitive" },
        { emoji: "📈", label: "The timeline", hint: "THE visual of the unit" },
        { emoji: "🃏", label: "The pair deck", hint: "8 perfective partners" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the rails aspect will ride",
      items: [
        {
          prompt: "U11 modals: »Moram ___ kruh.« (buy)",
          options: ["kupiti", "kupujem", "kupio"],
          correctIndex: 0,
          explanation: "Modal + INFINITIVE: moram kupiti. (And kupiti is a perfective — today explains why it fits here.)",
        },
        {
          prompt: "U14 imperative: gledati → »___ ovo!«",
          options: ["Pogledaj", "Gledajte", "Gledati"],
          correctIndex: 0,
          explanation: "Pogledaj! — the po- makes it 'take a look' (one glance, done). Today's point exactly.",
        },
        {
          prompt: "Listen (U6): when does work begin?",
          tts: "Posao počinje u devet.",
          options: ["at nine", "at seven", "at noon"],
          correctIndex: 0,
          explanation: "počinjati (U6) — today you meet its partner: početi.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The perfective partners",
      vocabIds: [
        "a2u16.napisati", "a2u16.procitati", "a2u16.pogledati", "a2u16.napraviti",
        "a2u16.popiti", "a2u16.pojesti", "a2u16.nauciti", "a2u16.poceti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The timeline: 〰️ process vs ✅ done",
      body:
        "Almost every Croatian verb comes in a pair:\n\n- **imperfective** 〰️ — the process, the habit, the background: *pisati* (to be writing / to write regularly)\n- **perfective** ✅ — the completed whole, the result: *napisati* (to write AND finish)\n\nEnglish hides this choice; Croatian makes it every time. No formation theory today — learn the pairs like vocabulary.",
      diagram: {
        kind: "contrast",
        left: {
          title: "imperfective 〰️",
          emoji: "〰️",
          lines: [
            { hr: "pisati · čitati · piti", en: "writing · reading · drinking" },
            { hr: "Svaki dan čitam knjige.", en: "I read books every day. (habit)" },
          ],
        },
        right: {
          title: "perfective ✅",
          emoji: "✅",
          lines: [
            { hr: "napisati · pročitati · popiti", en: "get written · read to the end · drink up" },
            { hr: "Želim pročitati cijelu knjigu.", en: "I want to read the WHOLE book. (result)" },
          ],
        },
      },
      examples: [
        { hr: "Svaki dan čitam knjige. Danas želim pročitati cijelu knjigu.", en: "I read every day. Today I want to read the whole book — to the end." },
        { hr: "Kupujem kruh svaki dan. Danas moram kupiti i tortu.", en: "I buy bread every day. Today I also have to buy a cake.", note: "kupovati/kupiti — a pair you've used since U7!" },
        { hr: "Navečer gledam filmove. Pogledaj ovo!", en: "In the evenings I watch films. Look at this!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The pair deck — and the one trap",
      body:
        "Today's eight, each the ✅ of an old friend:\n\n**pisati→napisati · čitati→pročitati · gledati→pogledati · raditi→napraviti · piti→popiti · jesti→pojesti · učiti→naučiti · počinjati→početi** (počnem!)\n\n⚠️ **The trap**: a perfective present does NOT mean \"now\". For right-now, use the imperfective (*Pišem.*). Perfectives live happily after modals and želim: *moram **kupiti**, želim **naučiti**, mogu **početi***.",
      table: {
        caption: "The pair deck",
        headers: ["〰️ imperfective", "✅ perfective", "the ✅ flavour"],
        rows: [
          ["pisati", "napisati", "written, done"],
          ["čitati", "pročitati", "read to the end"],
          ["gledati", "pogledati", "take a look"],
          ["raditi", "napraviti", "make / get done"],
          ["piti · jesti", "popiti · pojesti", "drink up · eat up"],
          ["učiti", "naučiti", "master it"],
          ["počinjati", "početi", "begin (once)"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Perfective present ≠ now",
        text: "❌ »Napišem sada.« → ✅ »Pišem sada.« — the ✅ verbs refuse to mean right-now. Their present belongs after moram/mogu/želim: moram napisati.",
      },
      examples: [
        { hr: "Tom je pojeo cijelu tortu!", en: "Tom ate the whole cake!" },
        { hr: "Popij kavu — idemo!", en: "Drink up your coffee — we're going!" },
        { hr: "Mogu početi u ponedjeljak.", en: "I can start on Monday.", note: "the U12 interview line — a perfective all along!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: wavy or point?",
      items: [
        {
          prompt: "»___ knjige svaki dan.« (habit!)",
          options: ["Čitam", "Pročitam", "Pročitati"],
          correctIndex: 0,
          explanation: "Habit = imperfective: čitam.",
        },
        {
          prompt: "»Želim ___ cijelu knjigu danas.« (to the END)",
          options: ["pročitati", "čitati", "čitam"],
          correctIndex: 0,
          explanation: "Whole thing, finished → perfective: pročitati.",
        },
        {
          prompt: "Which verb means 'to make / get it done'?",
          options: ["napraviti", "raditi", "radim"],
          correctIndex: 0,
          explanation: "raditi 〰️ (to work) → napraviti ✅ (to make, complete).",
        },
        {
          prompt: "»I'm writing right now« =",
          options: ["Pišem.", "Napišem.", "Napisati."],
          correctIndex: 0,
          explanation: "Right-now is always imperfective — the trap card!",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Deal the deck",
      subtitle: "Match the pairs, then choose the right half under pressure.",
      emoji: "🃏",
      items: [
        { emoji: "🧩", label: "Pair match", hint: "impf ↔ pf" },
        { emoji: "✏️", label: "Modal fills", hint: "moram + which one?" },
        { emoji: "⌨️", label: "Two swaps", hint: "type the partner" },
      ],
    },
    {
      id: "s09",
      type: "match",
      prompt: "Match each process to its done-version",
      pairs: [
        { a: "pisati", b: "napisati" },
        { a: "čitati", b: "pročitati" },
        { a: "piti", b: "popiti" },
        { a: "jesti", b: "pojesti" },
        { a: "učiti", b: "naučiti" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Moram ___ zadaću do sutra. (napraviti/raditi — get it DONE)",
      blanks: [["napraviti"]],
      translation: "I have to get the homework done by tomorrow.",
      wordBank: ["napraviti", "raditi", "radim"],
      explanation: "Result by a deadline → perfective napraviti.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Želim ___ hrvatski. (learn it — all the way!)",
      blanks: [["naučiti", "nauciti"]],
      translation: "I want to learn Croatian (master it).",
      wordBank: ["naučiti", "učiti", "učim"],
      explanation: "The goal is the finished result → naučiti.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Svaki dan ___ hrvatski. (the habit)",
      blanks: [["učim", "ucim"]],
      translation: "I study Croatian every day.",
      wordBank: ["učim", "naučim", "naučiti"],
      explanation: "svaki dan = habit → imperfective učim.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "The done-partner of pisati = ___",
      answers: ["napisati"],
      hint: "na- + …",
      explanation: "pisati → napisati.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "The process-partner of početi = ___ (you've known it since U6!)",
      answers: ["počinjati", "pocinjati"],
      hint: "Posao ___ u devet.",
      explanation: "počinjati — Posao počinje u devet (U6).",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "Hear the choice, then make one about your own day.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "kupiti · pogledaj" },
        { emoji: "🎤", label: "Habit + goal", hint: "čitam… pročitati!" },
        { emoji: "🔗", label: "Old chunks decoded", hint: "U11/U12 flashbacks" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Danas moram kupiti tortu.",
      explanation: "Danas moram kupiti tortu — today I have to buy a cake (kupiti — one done purchase).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Pogledaj ovo!",
      explanation: "Pogledaj ovo! — look at this! (one glance — perfective).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Svaki dan čitam. Danas želim pročitati cijelu knjigu.",
      targetEn: "say one habit and one today-goal — I read every day. Today I want to read the whole book.",
      phonetic: "SVA-kee dan CHEE-tam. DA-nas ZHE-leem pro-CHEE-ta-tee TSEE-ye-loo KNYEE-goo",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: you've been choosing aspect for weeks",
      items: [
        {
          prompt: "U12 interview: »Mogu početi u ponedjeljak.« — why početi, not počinjati?",
          options: [
            "starting the job is ONE completed event",
            "modals demand perfectives always",
            "počinjati is informal",
          ],
          correctIndex: 0,
          explanation: "One clean start → perfective. (Modals accept both — the meaning chooses.)",
        },
        {
          prompt: "U7: why TWO buy-verbs — kupujem kruh (daily) vs moram kupiti tortu (today)?",
          options: [
            "kupovati 〰️ habit · kupiti ✅ one purchase",
            "kupiti is more polite",
            "kupujem is past tense",
          ],
          correctIndex: 0,
          explanation: "Your U7 shopping was an aspect lesson in disguise.",
        },
        {
          prompt: "Listen (U14 + today): what does baka want?",
          tts: "Pojedi juhu i popij čaj!",
          options: [
            "eat up the soup and drink up the tea",
            "cook soup and make tea",
            "buy soup and tea",
          ],
          correctIndex: 0,
          explanation: "pojedi! popij! — perfective imperatives: finish them.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Two verbs, one action**: imperfective 〰️ = process/habit (*pisati, čitati, kupovati*) · perfective ✅ = completed whole (*napisati, pročitati, kupiti*).\n\n**The deck**: *napisati, pročitati, pogledati, napraviti, popiti, pojesti, naučiti, početi* (počnem).\n\n**The trap**: perfective present ≠ now — *Pišem sada* ✅, *Napišem sada* ❌. Perfectives live after *moram/mogu/želim*.\n\nWords tonight: the 8 perfective partners.\n\nNext: aspect in the PAST — *Pisao sam / Napisao sam* are different mornings.",
      vocabIds: [
        "a2u16.napisati", "a2u16.procitati", "a2u16.pogledati", "a2u16.napraviti",
        "a2u16.popiti", "a2u16.pojesti", "a2u16.nauciti", "a2u16.poceti",
      ],
    },
  ],
  srsCloze: [
    { front: "pisati → pf ___", answers: ["napisati"], back: "napisati — written, done.", tts: "napisati" },
    { front: "čitati → pf ___", answers: ["pročitati", "procitati"], back: "pročitati — read to the end.", tts: "pročitati" },
    { front: "raditi → pf ___ (make/get done)", answers: ["napraviti"], back: "napraviti.", tts: "napraviti" },
    { front: "___ → pf početi (you know the impf from U6!)", answers: ["počinjati", "pocinjati"], back: "počinjati/početi — the begin pair.", tts: "Posao počinje u devet." },
    { front: "Svaki dan ___ novine. (čitati/pročitati?)", answers: ["čitam", "citam"], back: "Habit → imperfective: čitam.", tts: "Svaki dan čitam novine." },
    { front: "Želim ___ cijelu knjigu. (čitati/pročitati?)", answers: ["pročitati", "procitati"], back: "Whole book, finished → pročitati.", tts: "Želim pročitati cijelu knjigu." },
    { front: "»I'm writing right now« = ___ sada. (the trap!)", answers: ["Pišem", "pišem", "Pisem"], back: "Right-now = imperfective. Napišem sada ❌.", tts: "Pišem sada." },
  ],
  notes: {
    inOneSentence: {
      en: "Nearly every verb is a pair — imperfective for the process or habit (pisati), perfective for the completed whole (napisati) — and the perfective present never means 'right now'.",
      exampleHr: "Svaki dan čitam. Danas želim pročitati cijelu knjigu.",
    },
    deepDive: [
      {
        title: "The §11 pair table — your new vocabulary habit",
        body:
          "From today, every verb you learn gets TWO columns in your head. The full reference table:",
        table: {
          caption: "Pairs met so far (grammar-reference §11)",
          headers: ["〰️ imperfective", "✅ perfective", "pattern"],
          rows: [
            ["pisati", "napisati", "prefix na-"],
            ["čitati", "pročitati", "prefix pro-"],
            ["gledati", "pogledati", "prefix po-"],
            ["piti · jesti", "popiti · pojesti", "prefix po-"],
            ["učiti", "naučiti", "prefix na-"],
            ["raditi", "napraviti", "suppletive (new stem)"],
            ["kupovati", "kupiti", "stem change"],
            ["davati", "dati", "stem change"],
            ["počinjati", "početi", "stem change"],
            ["govoriti", "reći", "suppletive (B1 owns reći)"],
          ],
        },
      },
      {
        title: "Why the perfective present can't mean now",
        body:
          "A perfective names a COMPLETED whole. But \"now\" is by definition mid-action — you can't be inside a completed whole. So *napišem* never reports the present moment.\n\nWhere perfective presents DO live:\n- after modals: *moram napisati, mogu početi, želim naučiti*\n- in future/conditional contexts you'll meet at B1 (*kad napišem…* — when I get it written)\n\nMeanwhile, every real \"now\" and every habit is imperfective: *Pišem. Svaki dan čitam.*",
      },
      {
        title: "You've been doing this for weeks",
        body:
          "The course smuggled aspect in long ago:\n\n- U7: *kupujem* (habit) vs *moram kupiti* (one purchase)\n- U10: *davati → dajem* vs U15's *Dala mu ga je* (one completed gift)\n- U12: *Mogu početi odmah!* (one clean start)\n- U14: *Pogledaj! Popij! Pojedi!* — perfective imperatives (do it once, fully)\n\nToday just names the pattern. B1 U17 will teach you to BUILD pairs; for now, collect them.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Napišem sada poruku.",
        right: "Pišem sada poruku.",
        why: "Perfective present ≠ now — right-now actions are imperfective.",
      },
      {
        wrong: "Svaki dan pročitam novine.",
        right: "Svaki dan čitam novine.",
        why: "Habits (svaki dan) take the imperfective.",
      },
      {
        wrong: "Želim učiti hrvatski. (meaning: master it)",
        right: "Želim naučiti hrvatski.",
        why: "učiti = the studying process; the achieved goal is naučiti. (Želim učiti is fine if you mean 'I want to study'.)",
      },
      {
        wrong: "kupim kruh svaki dan",
        right: "kupujem kruh svaki dan",
        why: "kupiti is one done purchase; the daily habit is kupovati → kupujem.",
      },
    ],
    memoryHooks: [
      "〰️ wavy line = the movie; ✅ point = the photo of the finished thing.",
      "Prefix = finish-line tape: na-pisati, pro-čitati, po-piti — run THROUGH to the end.",
      "The trap in one line: you can't be 'now' inside something already finished.",
      "New verb? Two columns, always: pisati | napisati.",
    ],
    connects: [
      { label: "Modals + infinitive — where perfectives live (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "Perfective imperatives — Pogledaj! (Unit 14 L2)", lessonId: "a2u14l2" },
      { label: "Next: aspect in the past (Unit 16 L2)", lessonId: "a2u16l2" },
    ],
    selfCheck: [
      { q: "The pair for čitati, and what each half means?", a: "čitati (be reading / read regularly) · pročitati (read to the end)." },
      { q: "Why is »Napišem sada« wrong?", a: "Perfective present can't mean now — use Pišem." },
      { q: "»I have to get the plan done« = ?", a: "Moram napraviti plan." },
      { q: "Which pair did U7 teach you without saying so?", a: "kupovati (kupujem — habit) / kupiti (one purchase)." },
      { q: "početi — perfective or imperfective? Its partner?", a: "Perfective (počnem); partner počinjati (počinje — U6)." },
    ],
  },
};
