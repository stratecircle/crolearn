import type { Lesson } from "@/types/content";

/**
 * A1 U6 L4 — Svaki dan (Days of the week & frequency)
 * Spec: curriculum/A1/unit-6.md · grammar-reference §14 (u + ACC), §3 (ACC fem -u).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u6` and review the Croatian before relying on it.
 *
 * Level guard: no new case. Days are a CLOSED SET (vocabPolicy: closed-set). »on a
 * day« = u + ACC — the ACC payoff (u srijedu, u subotu for feminine days). Frequency
 * adverbs sit before the verb; nikad forces the mandatory double negative with ne.
 * Deviation from spec: the spec marks »Ne učim nikad« ❌, but that order is in fact
 * grammatical; this lesson teaches the target »Nikad ne učim« and frames the REAL
 * error as dropping ne (»Nikad učim« ❌). Noted in curriculum/A1/unit-6.md.
 */
export const a1u6l4: Lesson = {
  id: "a1u6l4",
  unitId: "a1u6",
  title: "Svaki dan",
  titleEn: "Days of the week & how often",
  grammarTags: ["days-of-week", "u-plus-acc", "frequency-adverbs", "double-negative"],
  estMinutes: 19,
  vocabPolicy: "closed-set",
  vocab: [
    { id: "a1u6.ponedjeljak", image: "/img/ponedjeljak.png", hr: "ponedjeljak", en: "Monday", pos: "noun", gender: "m", icon: "🗓️", exampleHr: "U ponedjeljak idem na posao.", exampleEn: "On Monday I go to work." },
    { id: "a1u6.utorak", image: "/img/utorak.png", hr: "utorak", en: "Tuesday", pos: "noun", gender: "m", icon: "📆", exampleHr: "U utorak učim hrvatski.", exampleEn: "On Tuesday I study Croatian." },
    { id: "a1u6.srijeda", image: "/img/srijeda.png", hr: "srijeda", en: "Wednesday", pos: "noun", gender: "f", icon: "📅", exampleHr: "U srijedu gledam filmove.", exampleEn: "On Wednesday I watch films." },
    { id: "a1u6.cetvrtak", image: "/img/cetvrtak.png", hr: "četvrtak", en: "Thursday", pos: "noun", gender: "m", icon: "🗓️", exampleHr: "U četvrtak slušam pjesme.", exampleEn: "On Thursday I listen to songs." },
    { id: "a1u6.petak", image: "/img/petak.png", hr: "petak", en: "Friday", pos: "noun", gender: "m", icon: "🎉", exampleHr: "U petak gledam serije.", exampleEn: "On Friday I watch series." },
    { id: "a1u6.subota", image: "/img/subota.png", hr: "subota", en: "Saturday", pos: "noun", gender: "f", icon: "🛌", exampleHr: "U subotu se odmaram.", exampleEn: "On Saturday I rest." },
    { id: "a1u6.nedjelja", image: "/img/nedjelja.png", hr: "nedjelja", en: "Sunday", pos: "noun", gender: "f", icon: "⛪", exampleHr: "U nedjelju spavam.", exampleEn: "On Sunday I sleep." },
    { id: "a1u6.uvijek", image: "/img/uvijek.png", hr: "uvijek", en: "always", pos: "adv", icon: "🔥", exampleHr: "Uvijek pijem kavu ujutro.", exampleEn: "I always drink coffee in the morning." },
    { id: "a1u6.cesto", image: "/img/cesto.png", hr: "često", en: "often", pos: "adv", icon: "🔆", exampleHr: "Često gledam filmove.", exampleEn: "I often watch films." },
    { id: "a1u6.ponekad", image: "/img/ponekad.png", hr: "ponekad", en: "sometimes", pos: "adv", icon: "🔁", exampleHr: "Ponekad slušam vijesti.", exampleEn: "Sometimes I listen to the news." },
    { id: "a1u6.rijetko", image: "/img/rijetko.png", hr: "rijetko", en: "rarely / seldom", pos: "adv", icon: "🌙", exampleHr: "Rijetko gledam sport.", exampleEn: "I rarely watch sport." },
    { id: "a1u6.nikad", image: "/img/nikad.png", hr: "nikad", en: "never (needs ne!)", pos: "adv", icon: "❄️", exampleHr: "Nikad ne učim navečer.", exampleEn: "I never study in the evening." },
    { id: "a1u6.svaki-dan", image: "/img/svakidan.png", hr: "svaki dan", en: "every day (chunk)", pos: "phrase", icon: "🔄", exampleHr: "Svaki dan pijem kavu.", exampleEn: "Every day I drink coffee.", tags: ["chunk"] },
    { id: "a1u6.tjedan", image: "/img/tjedan.png", hr: "tjedan", en: "week", pos: "noun", gender: "m", icon: "📆", exampleHr: "Tjedan ima sedam dana.", exampleEn: "A week has seven days." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Svaki dan",
      subtitle: "Name every day of the week — and say what you do, and how often.",
      emoji: "📆",
      items: [
        { emoji: "📅", label: "The seven days", hint: "ponedjeljak … nedjelja" },
        { emoji: "🔴", label: "»on…« = u + ACC", hint: "u srijedu, u subotu" },
        { emoji: "🌡️", label: "How often", hint: "uvijek → nikad" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say your week" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The seven days",
      subtitle: "Lowercase always — and »on a day« is another job for the accusative.",
      emoji: "📅",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's plurals" },
        { emoji: "📅", label: "pon – ned", hint: "no capital letters!" },
        { emoji: "🔴", label: "u + ACC", hint: "u srijedu (not u srijeda)" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's plural objects",
      items: [
        {
          prompt: "From L3: Gledam ___. (film — plural)",
          options: ["filmove", "filmovi", "film"],
          correctIndex: 0,
          explanation: "Masculine ACC plural → -e: filmove.",
        },
        {
          prompt: "From L3: Slušam ___. (pjesma — plural)",
          options: ["pjesme", "pjesma", "pjesmu"],
          correctIndex: 0,
          explanation: "Feminine ACC plural = NOM plural: pjesme.",
        },
        {
          prompt: "Listen. What does she study?",
          tts: "Uči jezike.",
          options: ["languages", "songs", "the news"],
          correctIndex: 0,
          explanation: "jezike = languages (masc plural → -e).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the week & the frequency words",
      vocabIds: [
        "a1u6.ponedjeljak", "a1u6.utorak", "a1u6.srijeda", "a1u6.cetvrtak", "a1u6.petak",
        "a1u6.subota", "a1u6.nedjelja", "a1u6.uvijek", "a1u6.cesto", "a1u6.ponekad",
        "a1u6.rijetko", "a1u6.nikad", "a1u6.svaki-dan", "a1u6.tjedan",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The days — and »on a day« = u + accusative",
      body:
        "The seven days of the **tjedan** (week) — and remember, Croatian days are **lowercase**:\n\nponedjeljak · utorak · srijeda · četvrtak · petak · subota · nedjelja.\n\nTo say **on** a day, use **u + the accusative** — another payoff for the ACC. The masculine days don't change (u ponedjeljak), but the **feminine** days (srijeda, subota, nedjelja) take **-u**: *u srijedu, u subotu, u nedjelju.*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "ponedjeljak", emoji: "🗓️", example: "Mon" },
          { label: "utorak", emoji: "📆", example: "Tue" },
          { label: "srijeda", emoji: "📅", example: "Wed" },
          { label: "četvrtak", emoji: "🗓️", example: "Thu" },
          { label: "petak", emoji: "🎉", example: "Fri" },
          { label: "subota", emoji: "🛌", example: "Sat" },
          { label: "nedjelja", emoji: "⛪", example: "Sun" },
        ],
      },
      table: {
        caption: "»on [day]« = u + accusative",
        headers: ["day", "u + day (on…)"],
        colCase: [null, "ACC"],
        rows: [
          ["ponedjeljak (m)", "u ponedjeljak"],
          ["utorak (m)", "u utorak"],
          ["srijeda (f)", "u srijedu"],
          ["četvrtak (m)", "u četvrtak"],
          ["petak (m)", "u petak"],
          ["subota (f)", "u subotu"],
          ["nedjelja (f)", "u nedjelju"],
        ],
      },
      examples: [
        { hr: "U ponedjeljak idem na posao.", en: "On Monday I go to work.", note: "masc — no change" },
        { hr: "U srijedu učim hrvatski.", en: "On Wednesday I study Croatian.", note: "srijeda → u srijedu", highlight: { text: "srijedu", caseId: "ACC" } },
        { hr: "U subotu se odmaram.", en: "On Saturday I rest.", note: "subota → u subotu", highlight: { text: "subotu", caseId: "ACC" } },
        { hr: "Svaki dan pijem kavu.", en: "Every day I drink coffee.", note: "svaki dan = every day" },
      ],
    },
    {
      id: "s06",
      type: "match",
      prompt: "Match the day to its »on…« form",
      pairs: [
        { a: "srijeda", b: "u srijedu" },
        { a: "subota", b: "u subotu" },
        { a: "nedjelja", b: "u nedjelju" },
        { a: "ponedjeljak", b: "u ponedjeljak" },
        { a: "petak", b: "u petak" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the »on…« form",
      items: [
        {
          prompt: "On Wednesday = ___",
          options: ["u srijedu", "u srijeda", "u srijedi"],
          correctIndex: 0,
          explanation: "srijeda is feminine → ACC -u: u srijedu.",
        },
        {
          prompt: "On Saturday = ___",
          options: ["u subotu", "u subota", "u suboti"],
          correctIndex: 0,
          explanation: "subota → u subotu (ACC -u).",
        },
        {
          prompt: "On Monday = ___",
          options: ["u ponedjeljak", "u ponedjeljku", "u ponedjeljka"],
          correctIndex: 0,
          explanation: "Masculine day — no change: u ponedjeljak.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · How often?",
      subtitle: "From always to never — and the never that needs a helper.",
      emoji: "🌡️",
      items: [
        { emoji: "🌡️", label: "The frequency scale", hint: "uvijek → često → nikad" },
        { emoji: "⚠️", label: "nikad + ne", hint: "double negative is a must" },
        { emoji: "🔀", label: "Build & type", hint: "your week in sentences" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "How often — and the double negative",
      body:
        "Say **how often** with an adverb, usually placed **right before the verb**:\n\n🔥 **uvijek** (always) → 🔆 **često** (often) → 🔁 **ponekad** (sometimes) → 🌙 **rijetko** (rarely) → ❄️ **nikad** (never).\n\n*Uvijek pijem kavu ujutro. Često gledam filmove. Ponekad slušam vijesti.*\n\n**The trap:** **nikad** needs its helper **ne** on the verb — Croatian uses a **double negative**. Say **Nikad ne učim navečer** ✅ — never *~~Nikad učim~~* ❌ (you must keep the ne).",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "nikad NEEDS ne",
        text: "»Nikad ne učim navečer« ✅ (never study in the evening). Dropping ne — »Nikad učim« ❌ — is wrong: nikad always travels with ne.",
      },
      table: {
        caption: "The frequency scale (place before the verb)",
        headers: ["adverb", "meaning", "example"],
        rows: [
          ["uvijek", "always", "Uvijek pijem kavu."],
          ["često", "often", "Često gledam filmove."],
          ["ponekad", "sometimes", "Ponekad slušam vijesti."],
          ["rijetko", "rarely", "Rijetko gledam sport."],
          ["nikad", "never (+ ne)", "Nikad ne učim navečer."],
        ],
      },
      examples: [
        { hr: "Uvijek pijem kavu ujutro.", en: "I always drink coffee in the morning." },
        { hr: "Često gledam filmove.", en: "I often watch films." },
        { hr: "Nikad ne učim navečer.", en: "I never study in the evening.", note: "nikad + ne" },
        { hr: "Ponekad slušam vijesti.", en: "Sometimes I listen to the news." },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: frequency & the double negative",
      items: [
        {
          prompt: "Nikad ___ učim navečer. (never study in the evening)",
          options: ["ne", "se", "je"],
          correctIndex: 0,
          explanation: "nikad forces the double negative: Nikad ne učim.",
        },
        {
          prompt: "Which word means “often”?",
          options: ["često", "ponekad", "rijetko"],
          correctIndex: 0,
          explanation: "često = often; ponekad = sometimes; rijetko = rarely.",
        },
        {
          prompt: "“I always drink coffee.” — natural order:",
          options: ["Uvijek pijem kavu.", "Pijem kavu uvijek.", "Kavu uvijek pijem."],
          correctIndex: 0,
          explanation: "The frequency adverb sits before the verb: Uvijek pijem kavu.",
        },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "U ___ učim hrvatski. (srijeda)",
      blanks: [["srijedu"]],
      translation: "On Wednesday I study Croatian.",
      wordBank: ["srijedu", "srijeda", "srijedi"],
      explanation: "srijeda is feminine → u srijedu (ACC -u).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Nikad ___ pijem kavu navečer.",
      blanks: [["ne"]],
      translation: "I never drink coffee in the evening.",
      wordBank: ["ne", "se", "je"],
      explanation: "nikad requires the double negative — keep ne on the verb.",
    },
    {
      id: "s13",
      type: "fill",
      text: "U ___ se odmaram. (subota)",
      blanks: [["subotu"]],
      translation: "On Saturday I rest.",
      wordBank: ["subotu", "subota", "suboti"],
      explanation: "subota → u subotu (feminine ACC -u).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “On Wednesday I study Croatian.”",
      answers: ["U srijedu učim hrvatski.", "U srijedu učim hrvatski", "u srijedu učim hrvatski"],
      explanation: "u srijedu (ACC) + učim + hrvatski.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Nikad", "ne", "pijem", "kavu", "navečer"],
      answers: ["Nikad ne pijem kavu navečer.", "Nikad ne pijem kavu navečer"],
      en: "I never drink coffee in the evening.",
      explanation: "nikad first, ne on the verb: Nikad ne pijem kavu navečer.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "U petak gledam filmove.",
      explanation: "U petak gledam filmove — On Friday I watch films.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Nikad ne učim navečer.",
      explanation: "Nikad ne učim navečer — I never study in the evening (double negative).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "U subotu se odmaram.",
      targetEn: "say what you do on Saturday — On Saturday I rest",
      phonetic: "oo SOO-bo-too seh OD-ma-ram",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: put it together (Units 4–5)",
      items: [
        {
          prompt: "From Unit 5: Idem ___ posao. (to work)",
          options: ["na", "u", "iz"],
          correctIndex: 0,
          explanation: "na posao = to work (a na-word from Unit 5).",
        },
        {
          prompt: "From Unit 4 + today: Često ___ kavu ujutro. (drink)",
          options: ["pijem", "piješ", "piju"],
          correctIndex: 0,
          explanation: "piti → pijem; često sits before the verb.",
        },
        {
          prompt: "Listen. Which day does she rest?",
          tts: "U nedjelju se odmara.",
          options: ["Sunday", "Saturday", "Friday"],
          correctIndex: 0,
          explanation: "u nedjelju = on Sunday.",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen. How often does he study Croatian?",
      tts: "Svaki dan uči hrvatski.",
      options: ["every day", "never", "on Sunday"],
      correctIndex: 0,
      explanation: "svaki dan = every day.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The days (lowercase!):** ponedjeljak · utorak · srijeda · četvrtak · petak · subota · nedjelja.\n\n**»on a day« = u + ACC:** masculine days don't change (u ponedjeljak), but feminine days take **-u**: *u srijedu, u subotu, u nedjelju.*\n\n**How often:** uvijek → često → ponekad → rijetko → nikad, placed before the verb. **nikad needs ne** — *Nikad ne učim navečer.*\n\nNext lesson: your whole day, start to finish — **Moj tipičan dan**.",
      vocabIds: [
        "a1u6.ponedjeljak", "a1u6.utorak", "a1u6.srijeda", "a1u6.cetvrtak", "a1u6.petak",
        "a1u6.subota", "a1u6.nedjelja", "a1u6.uvijek", "a1u6.cesto", "a1u6.ponekad",
        "a1u6.rijetko", "a1u6.nikad", "a1u6.svaki-dan", "a1u6.tjedan",
      ],
    },
  ],
  srsCloze: [
    { front: "On Wednesday = u ___", answers: ["srijedu"], back: "u srijedu (srijeda → -u, feminine ACC).", tts: "u srijedu" },
    { front: "On Saturday = u ___", answers: ["subotu"], back: "u subotu (subota → -u).", tts: "u subotu" },
    { front: "On Sunday = u ___", answers: ["nedjelju"], back: "u nedjelju (nedjelja → -u).", tts: "u nedjelju" },
    { front: "On Monday = u ___", answers: ["ponedjeljak"], back: "u ponedjeljak (masculine — no change).", tts: "u ponedjeljak" },
    { front: "Nikad ___ učim navečer. (double negative)", answers: ["ne"], back: "Nikad ne učim navečer. — nikad always travels with ne.", tts: "Nikad ne učim navečer." },
    { front: "»always« (before the verb): ___ pijem kavu.", answers: ["uvijek"], back: "Uvijek pijem kavu. — uvijek = always.", tts: "Uvijek pijem kavu." },
    { front: "»sometimes« = ___", answers: ["ponekad"], back: "ponekad = sometimes (uvijek > često > ponekad > rijetko > nikad).", tts: "ponekad" },
    { front: "every day (chunk): ___ učim hrvatski.", answers: ["svaki dan"], back: "Svaki dan učim hrvatski. — svaki dan = every day.", tts: "Svaki dan učim hrvatski." },
  ],
  notes: {
    inOneSentence: {
      en: "Days are lowercase, »on a day« = u + accusative (u srijedu), and frequency adverbs sit before the verb — with nikad always paired with ne.",
      exampleHr: "U subotu se odmaram. · Nikad ne učim navečer.",
    },
    deepDive: [
      {
        title: "The days and u + accusative",
        body:
          "The seven days are **not capitalised** in Croatian (unlike English). To say **on** a given day, use **u** followed by the **accusative** — the same case you've been building since Unit 4.\n\nMasculine days (ponedjeljak, utorak, četvrtak, petak) are inanimate, so their accusative = nominative — nothing changes. The three **feminine** days (srijeda, subota, nedjelja) take the feminine accusative **-u**: srijedu, subotu, nedjelju.",
        table: {
          caption: "All seven days + »on…«",
          headers: ["day", "gender", "u + ACC"],
          colCase: [null, null, "ACC"],
          rows: [
            ["ponedjeljak", "m", "u ponedjeljak"],
            ["utorak", "m", "u utorak"],
            ["srijeda", "f", "u srijedu"],
            ["četvrtak", "m", "u četvrtak"],
            ["petak", "m", "u petak"],
            ["subota", "f", "u subotu"],
            ["nedjelja", "f", "u nedjelju"],
          ],
        },
      },
      {
        title: "Frequency adverbs and the double negative",
        body:
          "Frequency adverbs answer *how often?* and normally sit **just before the verb**: *Često gledam filmove. Uvijek pijem kavu.* The scale runs uvijek (always) → često (often) → ponekad (sometimes) → rijetko (rarely) → nikad (never).\n\n**nikad** (never) is special: Croatian requires a **double negative**, so the verb still carries **ne**. *Nikad ne učim navečer.* English drops the second negative (“I never study”), but Croatian keeps it — dropping ne (*Nikad učim*) is ungrammatical.",
        diagram: {
          kind: "contrast",
          left: { title: "English (one negative)", emoji: "🇬🇧", lines: [{ hr: "I never study.", en: "no second »not«" }] },
          right: { title: "Croatian (double negative)", emoji: "🇭🇷", lines: [{ hr: "Nikad ne učim.", en: "nikad + ne together" }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "u Srijedu / u Ponedjeljak",
        right: "u srijedu / u ponedjeljak",
        why: "Croatian days are lowercase — don't capitalise them like in English.",
      },
      {
        wrong: "u srijeda",
        right: "u srijedu",
        why: "»on a day« needs the accusative; feminine srijeda → srijedu.",
      },
      {
        wrong: "Nikad učim navečer.",
        right: "Nikad ne učim navečer.",
        why: "nikad requires the double negative — the verb keeps ne.",
      },
      {
        wrong: "u subota / u nedjelja",
        right: "u subotu / u nedjelju",
        why: "The feminine days take ACC -u: subotu, nedjelju.",
      },
    ],
    memoryHooks: [
      "Feminine days end in -a → »on« them ends in -u: srijeda→srijedu, subota→subotu, nedjelja→nedjelju.",
      "nikad never travels alone — it always brings ne: Nikad ne…",
      "Frequency scale like a thermometer: uvijek 🔥 → često → ponekad → rijetko → nikad ❄️.",
    ],
    connects: [
      { label: "u + ACC for direction/on (Unit 5 L2)", lessonId: "a1u5l2" },
      { label: "Feminine ACC -u — Volim kavu (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "Next: my typical day — Moj tipičan dan (Unit 6 L5)", lessonId: "a1u6l5" },
    ],
    selfCheck: [
      { q: "How do you write the days — capital or lowercase?", a: "Lowercase: ponedjeljak, utorak, srijeda…" },
      { q: "How do you say “on Wednesday”?", a: "u srijedu — feminine day takes ACC -u." },
      { q: "How do you say “on Monday”?", a: "u ponedjeljak — masculine, no change." },
      { q: "Why »Nikad ne učim«, not »Nikad učim«?", a: "nikad needs the double negative — the verb keeps ne." },
      { q: "Where does a frequency adverb usually go?", a: "Right before the verb: Često gledam…, Uvijek pijem…" },
    ],
  },
};
