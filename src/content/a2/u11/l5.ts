import type { Lesson } from "@/types/content";

/**
 * A2 U11 L5 — Zdrave navike (healthy habits; unit review)
 * Spec: curriculum/A2/unit-11.md · grammar-reference §7, §9, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new grammar — habits in present + U6 frequency adverbs,
 * modals (L2), future I resolutions (U9), brinuti se o + LOC as a chunk.
 * "bolje" still absent (comparatives = U13). The spec's healthy/unhealthy
 * drag-sort is realized as a quiz-set (no sort slide type exists).
 */
export const a2u11l5: Lesson = {
  id: "a2u11l5",
  unitId: "a2u11",
  title: "Zdrave navike",
  titleEn: "Healthy habits — and the unit review",
  grammarTags: ["habits", "modals", "future-1"],
  estMinutes: 20,
  vocab: [
    { id: "a2u11.zdravlje", image: "/img/zdravlje.png", hr: "zdravlje", en: "health", pos: "noun", gender: "n", icon: "💚", exampleHr: "Brinem se o zdravlju.", exampleEn: "I take care of my health." },
    { id: "a2u11.vjezbati", image: "/img/vjezbati.png", hr: "vježbati", en: "to exercise (vježbam)", pos: "verb", icon: "🏋️", exampleHr: "Od sutra ću vježbati!", exampleEn: "From tomorrow I'll exercise!" },
    { id: "a2u11.trcati", image: "/img/trcati.png", hr: "trčati", en: "to run (trčim)", pos: "verb", icon: "🏃", exampleHr: "Trčim svaki dan.", exampleEn: "I run every day." },
    { id: "a2u11.hodati", image: "/img/hodati.png", hr: "hodati", en: "to walk (hodam)", pos: "verb", icon: "🚶", exampleHr: "Hodam na posao.", exampleEn: "I walk to work." },
    { id: "a2u11.san", image: "/img/san.png", hr: "san", en: "sleep (GEN: sna)", pos: "noun", gender: "m", icon: "😴", exampleHr: "Treba ti san!", exampleEn: "You need sleep!" },
    { id: "a2u11.dovoljno", image: "/img/dovoljno.png", hr: "dovoljno", en: "enough", pos: "adv", icon: "⚖️", exampleHr: "Dovoljno spavam.", exampleEn: "I sleep enough." },
    { id: "a2u11.brinuti-se", image: "/img/brinutise.png", hr: "brinuti se", en: "to take care (brinem se o + LOC)", pos: "verb", icon: "🫶", exampleHr: "Moraš se brinuti o zdravlju.", exampleEn: "You have to take care of your health." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Zdrave navike",
      subtitle: "Baka Marija's rules for a long life — do you agree?",
      emoji: "💚",
      items: [
        { emoji: "📅", label: "The healthy week", hint: "trčati, hodati, spavati" },
        { emoji: "👵", label: "Baka's rules", hint: "healthy or not?" },
        { emoji: "➡️", label: "Resolutions", hint: "Od sutra ću vježbati!" },
        { emoji: "🔁", label: "Unit review", hint: "boli me · modals · mi-chunks" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The healthy week",
      subtitle: "Habits = verbs + U6 frequency words. You've had both for months.",
      emoji: "📅",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "often, never, from tomorrow" },
        { emoji: "🏃", label: "The habit verbs", hint: "trčim · hodam · vježbam" },
        { emoji: "✅", label: "Baka's board", hint: "sort the habits" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: frequency, futures and musts",
      items: [
        {
          prompt: "Unit 6 frequency: which word means »often«?",
          options: ["često", "nikad", "uvijek"],
          correctIndex: 0,
          explanation: "često = often (uvijek = always, nikad = never) — today's habit glue.",
        },
        {
          prompt: "Unit 9: »___ sutra ću vježbati.« (FROM tomorrow)",
          options: ["Od", "Do", "Iz"],
          correctIndex: 0,
          explanation: "od sutra = from tomorrow — the resolution starter.",
        },
        {
          prompt: "Listen (L2): what must Tom do?",
          tts: "Tom mora ležati i piti čaj.",
          options: ["lie down and drink tea", "run and exercise", "work and study"],
          correctIndex: 0,
          explanation: "mora ležati i piti čaj — modal + two infinitives.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the habit words",
      vocabIds: [
        "a2u11.zdravlje", "a2u11.vjezbati", "a2u11.trcati", "a2u11.hodati",
        "a2u11.san", "a2u11.dovoljno", "a2u11.brinuti-se",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The healthy week — verbs on a planner",
      body:
        "Habits are just **present tense + frequency** (U6): *Trčim svaki dan. Često hodam. Uvijek dovoljno spavam.*\n\nThe caretaker verb: **brinuti se o + LOC** — *Brinem se o zdravlju.* (o = about, your U5 friend na/u's quiet cousin — chunk it for now.)\n\nAnd resolutions point forward with U9's future: **Od sutra ću vježbati!**",
      table: {
        caption: "📅 A healthy week (baka-approved)",
        headers: ["day", "habit"],
        rows: [
          ["ponedjeljak", "Trčim ujutro. 🏃"],
          ["srijeda", "Vježbam. 🏋️"],
          ["petak", "Hodam na posao. 🚶"],
          ["svaki dan", "Dovoljno spavam. 😴"],
        ],
      },
      examples: [
        { hr: "Trčim svaki dan i dovoljno spavam.", en: "I run every day and I sleep enough." },
        { hr: "Moraš se brinuti o zdravlju.", en: "You have to take care of your health.", highlight: { text: "zdravlju", caseId: "LOC" } },
        { hr: "Od sutra ću vježbati!", en: "From tomorrow I'll exercise!" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Baka's board: healthy or not?",
      items: [
        {
          prompt: "»Dovoljno spavati« — baka says:",
          options: ["✅ zdravo!", "❌ nije zdravo!"],
          correctIndex: 0,
          explanation: "Sleeping enough — very zdravo. Treba ti san!",
        },
        {
          prompt: "»Piti puno kave navečer« — baka says:",
          options: ["❌ nije zdravo!", "✅ zdravo!"],
          correctIndex: 0,
          explanation: "Lots of evening coffee — baka disapproves. Ne smiješ!",
        },
        {
          prompt: "»Hodati na posao svaki dan« — baka says:",
          options: ["✅ zdravo!", "❌ nije zdravo!"],
          correctIndex: 0,
          explanation: "Walking to work daily — baka's favourite.",
        },
        {
          prompt: "»Nikad se ne odmarati« — baka says:",
          options: ["❌ nije zdravo!", "✅ zdravo!"],
          correctIndex: 0,
          explanation: "Never resting is a straight road to the čekaonica.",
        },
      ],
    },
    {
      id: "s07",
      type: "example",
      title: "Habits in the wild — tap to hear",
      items: [
        { hr: "Ana trči ujutro, a navečer vježba.", en: "Ana runs in the morning and exercises in the evening." },
        { hr: "Hodam na posao — ne trebam tramvaj.", en: "I walk to work — I don't need the tram.", note: "tramvaj — a transparent cognate" },
        { hr: "San je važan za zdravlje.", en: "Sleep is important for health.", note: "važan = important — a bonus adjective, glossed here" },
        { hr: "Baka se brine o zdravlju — i zdrava je!", en: "Grandma takes care of her health — and she's healthy!" },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Brinem se ___ zdravlju. (about)",
      blanks: [["o"]],
      translation: "I take care of my health.",
      wordBank: ["o", "za", "na"],
      explanation: "brinuti se o + LOC — the chunk (not za!).",
    },
    {
      id: "s09",
      type: "fill",
      text: "Od sutra ___ vježbati! (I will)",
      blanks: [["ću", "cu"]],
      translation: "From tomorrow I'll exercise!",
      wordBank: ["ću", "ćeš", "sam"],
      explanation: "Future I resolution: od sutra ću vježbati.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Trčim ___ dan. (every)",
      blanks: [["svaki"]],
      translation: "I run every day.",
      wordBank: ["svaki", "svaka", "svako"],
      explanation: "svaki dan — the U6 frequency phrase (dan is masculine).",
    },
    {
      id: "s11",
      type: "type",
      prompt: "Write it in Croatian: “I run every day.”",
      answers: ["Trčim svaki dan.", "Trčim svaki dan"],
      explanation: "Trčim svaki dan.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I sleep enough.”",
      answers: ["Dovoljno spavam.", "Dovoljno spavam", "Spavam dovoljno.", "Spavam dovoljno"],
      explanation: "Dovoljno spavam. / Spavam dovoljno.",
    },
    {
      id: "s13",
      type: "section",
      title: "Part 2 · Baka's advice line",
      subtitle: "Story-world integration — then your own resolutions.",
      emoji: "👵",
      items: [
        { emoji: "📞", label: "Baka advises Tom", hint: "modals with love" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Two resolutions", hint: "Od sutra ću…" },
      ],
    },
    {
      id: "s14",
      type: "quiz-set",
      review: true,
      title: "Integration: baka Marija advises Tom",
      items: [
        {
          prompt: "Listen — what is baka's first rule?",
          tts: "Moraš dovoljno spavati i piti čaj svaki dan.",
          options: ["sleep enough and drink tea daily", "run a marathon", "work more"],
          correctIndex: 0,
          explanation: "Moraš dovoljno spavati i piti čaj — modal + infinitives (with U1's čaj).",
        },
        {
          prompt: "Baka continues: »Ne ___ piti puno kave!« (mustn't)",
          options: ["smiješ", "moraš", "trebaš"],
          correctIndex: 0,
          explanation: "ne smiješ = forbidden (the L2 traffic light — baka enforces it).",
        },
        {
          prompt: "Listen (U9 future): what does Tom promise?",
          tts: "Od sutra ću trčati i vježbati!",
          options: ["to run and exercise from tomorrow", "to sleep all week", "to visit the doctor"],
          correctIndex: 0,
          explanation: "Od sutra ću trčati i vježbati — a classic resolution.",
        },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Trčim svaki dan i dovoljno spavam.",
      explanation: "Trčim svaki dan i dovoljno spavam — I run every day and sleep enough.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Moraš se brinuti o zdravlju.",
      explanation: "Moraš se brinuti o zdravlju — you have to take care of your health.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Od sutra ću vježbati i dovoljno spavati.",
      targetEn: "say two healthy resolutions in the future — From tomorrow I'll exercise and sleep enough.",
      phonetic: "od SOO-tra choo VYEZH-ba-tee",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · The whole unit, mixed",
      subtitle: "Aches, modals, feelings and the clinic — everything from L1–L4.",
      emoji: "🔁",
      items: [
        { emoji: "🤕", label: "boli / bole", hint: "L1" },
        { emoji: "🚦", label: "The modal light", hint: "L2" },
        { emoji: "🌡️", label: "mi-chunks", hint: "L3" },
        { emoji: "🩺", label: "The visit", hint: "L4" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Unit review I: the health machine",
      items: [
        {
          prompt: "»___ me oči.« (L1)",
          options: ["Bole", "Boli", "Bolim"],
          correctIndex: 0,
          explanation: "oči is plural → bole.",
        },
        {
          prompt: "»Bolestan si. ___ ići na posao.« (it's forbidden — L2)",
          options: ["Ne smiješ", "Ne moraš", "Nećeš"],
          correctIndex: 0,
          explanation: "Forbidden → ne smiješ (ne moraš would just cancel the obligation).",
        },
        {
          prompt: "»Treba ___ odmor.« (I need — L3)",
          options: ["mi", "me", "se"],
          correctIndex: 0,
          explanation: "The needer is DAT: treba mi odmor.",
        },
        {
          prompt: "»Ne mogu kupiti lijek bez ___.« (L4)",
          options: ["recepta", "recept", "receptu"],
          correctIndex: 0,
          explanation: "bez + GEN: recepta.",
        },
      ],
    },
    {
      id: "s20",
      type: "fill",
      text: "___ me noge. (both legs!)",
      blanks: [["Bole", "bole"]],
      translation: "My legs hurt.",
      explanation: "noge is plural → bole (L1).",
    },
    {
      id: "s21",
      type: "match",
      prompt: "Unit vocab sweep — match Croatian to English",
      pairs: [
        { a: "prehlada", b: "a cold" },
        { a: "lijek", b: "medicine" },
        { a: "zdravlje", b: "health" },
        { a: "čekaonica", b: "waiting room" },
        { a: "san", b: "sleep" },
      ],
    },
    {
      id: "s22",
      type: "reorder",
      words: ["Moram", "ležati", "i", "piti", "čaj"],
      answers: ["Moram ležati i piti čaj.", "Moram ležati i piti čaj"],
      en: "I have to lie down and drink tea.",
      explanation: "One modal, two frozen infinitives (L2).",
    },
    {
      id: "s23",
      type: "listen-type",
      tts: "glavobolja",
      explanation: "glavobolja = headache (glava + boljeti — the word explains itself).",
    },
    {
      id: "s24",
      type: "type",
      prompt: "Write it in Croatian: “I need a rest.” (the experiencer lane)",
      answers: ["Treba mi odmor.", "Treba mi odmor"],
      hint: "the L3 flip",
      explanation: "Treba mi odmor.",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Unit 11 complete — zdravlje unlocked!**\n\n**One card, the whole unit:**\n- **boli me + NOM**: *Boli me glava · Bole me leđa* (oči, uši, leđa — plural!)\n- **Modals**: *moram → trebam → mogu → smijem* + infinitive · *ne moraš* 🟢 ≠ *ne smiješ* 🔴\n- **mi-family**: *loše/muka/hladno mi je · treba mi odmor* (and *boli ME* vs *loše MI je*)\n- **The visit**: *čekaonica → pregled → recept → ljekarna · dva puta na dan*\n- **Habits**: *Trčim svaki dan. Brinem se o zdravlju. Od sutra ću vježbati!*\n\nWords tonight: **zdravlje, vježbati, trčati, hodati, san, dovoljno, brinuti se**.\n\nNext: the story — Tom je bolestan (and coffee is forbidden). Onda test!",
      vocabIds: [
        "a2u11.zdravlje", "a2u11.vjezbati", "a2u11.trcati", "a2u11.hodati",
        "a2u11.san", "a2u11.dovoljno", "a2u11.brinuti-se",
      ],
    },
  ],
  srsCloze: [
    { front: "Brinem se ___ zdravlju. (about)", answers: ["o"], back: "brinuti se o + LOC: Brinem se o zdravlju.", tts: "Brinem se o zdravlju." },
    { front: "Od sutra ___ vježbati! (resolution)", answers: ["ću", "cu"], back: "Od sutra ću vježbati! (future I)", tts: "Od sutra ću vježbati!" },
    { front: "to run = ___ (trčim)", answers: ["trčati", "trcati"], back: "trčati (trčim) = to run.", tts: "Trčim svaki dan." },
    { front: "enough = ___ (»___ spavam«)", answers: ["dovoljno"], back: "dovoljno = enough; Dovoljno spavam.", tts: "Dovoljno spavam." },
    { front: "sleep (noun) = ___ (»Treba ti ___!«)", answers: ["san"], back: "san = sleep; Treba ti san! (GEN: sna)", tts: "Treba ti san!" },
    { front: "L1 model: »___ me leđa.«", answers: ["Bole", "bole"], back: "Bole me leđa.", tts: "Bole me leđa." },
    { front: "L2 model: mustn't = »ne ___«", answers: ["smiješ", "smijes"], back: "ne smiješ (≠ ne moraš!)", tts: "Ne smiješ piti kavu." },
    { front: "L3 model: »___ mi je.« (I feel bad)", answers: ["Loše", "loše", "Lose", "lose"], back: "Loše mi je.", tts: "Loše mi je." },
  ],
  notes: {
    inOneSentence: {
      en: "Healthy habits are present-tense verbs plus U6 frequency words, care is brinuti se o + LOC, and resolutions use future I — no new grammar, the unit consolidated.",
      exampleHr: "Trčim svaki dan i dovoljno spavam. · Moraš se brinuti o zdravlju. · Od sutra ću vježbati!",
    },
    deepDive: [
      {
        title: "The habit formula",
        body:
          "**[habit verb] + [frequency word]** — that's the whole grammar:\n\n- verbs: *trčim, hodam, vježbam, spavam, odmaram se* (U6)\n- frequency: *svaki dan, često, uvijek, ponekad, nikad* (U6) — usually BEFORE the verb: *često trčim*\n- negative habits need the double negative: *Nikad **ne** vježbam.* (Croatian stacks its negatives happily)",
        table: {
          caption: "Building habit sentences",
          headers: ["frequency", "example"],
          rows: [
            ["svaki dan", "Trčim svaki dan."],
            ["često", "Često hodam na posao."],
            ["ponekad", "Ponekad vježbam navečer."],
            ["nikad + ne", "Nikad ne spavam dovoljno. 😴"],
          ],
        },
      },
      {
        title: "brinuti se o + LOC",
        body:
          "The caretaker chunk: **brinem se o + LOC** — *Brinem se o zdravlju. Baka se brine o Tomu.*\n\nColloquial Croatian also says *brinuti se za*, but the course standard is **o + LOC** (the same o you'll meet more formally with »talking about« verbs in B1). Note the se keeps its second-position manners: *Moraš **se** brinuti o zdravlju.*",
      },
      {
        title: "The unit, at a glance",
        body: "Everything Unit 11 added:",
        table: {
          caption: "Unit 11 recap grid",
          headers: ["machine", "forms", "model sentence"],
          rows: [
            ["boli me + NOM", "boli (sg) / bole (pl)", "Boli me glava. Bole me leđa."],
            ["modals", "moram · trebam · mogu · smijem + inf", "Moram ležati."],
            ["negated modals", "ne moraš 🟢 · ne smiješ 🔴", "Ne smiješ piti kavu."],
            ["mi-family", "loše/muka/hladno mi je · treba mi", "Treba mi odmor."],
            ["the visit", "k liječniku · kod liječnika · bez recepta", "Idem liječniku jer me boli grlo."],
            ["habits", "verb + frequency · o + LOC", "Brinem se o zdravlju."],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Brinem se za zdravlje.",
        right: "Brinem se o zdravlju.",
        why: "Colloquial za exists, but the course standard is o + LOC.",
      },
      {
        wrong: "Trčim dan svaki.",
        right: "Trčim svaki dan.",
        why: "svaki sits before its noun; the phrase usually follows the verb.",
      },
      {
        wrong: "Od sutra vježbat ću… wait — Od sutra ću vježbati",
        right: "Od sutra ću vježbati.",
        why: "With a phrase up front, the clitic slots second and the infinitive stays whole (U9).",
      },
      {
        wrong: "Nikad vježbam.",
        right: "Nikad ne vježbam.",
        why: "Croatian needs the double negative: nikad + ne.",
      },
    ],
    memoryHooks: [
      "Habit = verb + frequency: trčim + svaki dan. Two LEGO bricks, infinite routines.",
      "brinem se O — care wraps around (o) what it protects.",
      "san/sna — sleep is so precious it loses a letter when you reach for it (GEN sna).",
      "Baka's board: spavati ✅, kava navečer ❌ — sort any habit in her voice.",
    ],
    connects: [
      { label: "Daily routine & frequency adverbs (Unit 6 L4)", lessonId: "a1u6l4" },
      { label: "Future I resolutions (Unit 9 L1)", lessonId: "a2u9l1" },
      { label: "The modals (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "Comparatives — »bolje mi je« arrives in U13", lessonId: "a2u11l3" },
    ],
    selfCheck: [
      { q: "“I run every day and sleep enough” = ?", a: "Trčim svaki dan i dovoljno spavam." },
      { q: "“You have to take care of your health” = ?", a: "Moraš se brinuti o zdravlju." },
      { q: "A future-I resolution starting with od sutra?", a: "Od sutra ću vježbati! (or: ću trčati / dovoljno spavati)" },
      { q: "“I never exercise” — with the required double negative?", a: "Nikad ne vježbam." },
      { q: "One model sentence per lesson of the unit?", a: "Boli me glava (L1) · Moram ležati (L2) · Treba mi odmor (L3) · Idem liječniku (L4) · Trčim svaki dan (L5)." },
    ],
  },
};
