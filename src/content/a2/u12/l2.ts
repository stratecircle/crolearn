import type { Lesson } from "@/types/content";

/**
 * A2 U12 L2 — Idem vlakom (INS of means — NO s!)
 * Spec: curriculum/A2/unit-12.md · grammar-reference §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: bare-INS means (transport & tools) — THE unit trap is drilled
 * hard (s vlakom ❌). Transport nouns recycled: vlak/avion (U9), tramvaj/
 * autobus (U5), auto (U3). pješice is an adverb (no case). This lesson pays
 * off the ban placed in U5/U9 ("how you travel waits for U12").
 */
export const a2u12l2: Lesson = {
  id: "a2u12l2",
  unitId: "a2u12",
  title: "Idem vlakom",
  titleEn: "I go by train — bare instrumental",
  grammarTags: ["instrumental-means", "bare-instrumental", "transport"],
  estMinutes: 18,
  vocab: [
    { id: "a2u12.bicikl", hr: "bicikl", en: "bicycle", pos: "noun", gender: "m", icon: "🚲", exampleHr: "Idem na posao biciklom.", exampleEn: "I go to work by bike." },
    { id: "a2u12.racunalo", hr: "računalo", en: "computer", pos: "noun", gender: "n", icon: "💻", exampleHr: "Radim računalom.", exampleEn: "I work with a computer." },
    { id: "a2u12.olovka", hr: "olovka", en: "pencil", pos: "noun", gender: "f", icon: "✏️", exampleHr: "Pišem olovkom.", exampleEn: "I write with a pencil." },
    { id: "a2u12.mobitel", hr: "mobitel", en: "mobile phone", pos: "noun", gender: "m", icon: "📱", exampleHr: "Plaćam mobitelom.", exampleEn: "I pay with my phone." },
    { id: "a2u12.pjesice", hr: "pješice", en: "on foot (an adverb — no case!)", pos: "adv", icon: "🚶", exampleHr: "Ana ide pješice.", exampleEn: "Ana goes on foot." },
    { id: "a2u12.stanica", hr: "stanica", en: "(bus/tram) stop", pos: "noun", gender: "f", icon: "🚏", exampleHr: "Čekam autobus na stanici.", exampleEn: "I'm waiting for the bus at the stop." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Idem vlakom",
      subtitle: "Banned since Unit 5 — unlocked today. This is why we waited.",
      emoji: "🚆",
      items: [
        { emoji: "🔓", label: "The ban lifts", hint: "idem vlakom, autom, biciklom" },
        { emoji: "🚫", label: "NO s!", hint: "s vlakom ❌ — the unit trap" },
        { emoji: "✏️", label: "Tools too", hint: "pišem olovkom, radim računalom" },
        { emoji: "🎤", label: "Your commute", hint: "Idem na posao tramvajem." },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · WITH vs BY",
      subtitle: "Yesterday: s Anom (with). Today: vlakom (by) — and the s disappears.",
      emoji: "🚫",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's s-phrases" },
        { emoji: "⚖️", label: "The contrast card", hint: "shake hands? keep the s" },
        { emoji: "✅", label: "s or no s?", hint: "the judgment drill" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the ban, remembered",
      items: [
        {
          prompt: "Unit 5 taught you to say ONLY: »Čekam ___.« (the tram)",
          options: ["tramvaj", "tramvajem", "s tramvajem"],
          correctIndex: 0,
          explanation: "čekam tramvaj (ACC object) — »by tram« was banned… until this very slide.",
        },
        {
          prompt: "L1: »Radim ___ kolegom.« (with)",
          options: ["s", "sa", "—"],
          correctIndex: 0,
          explanation: "Company keeps its s: s kolegom. Hold that thought.",
        },
        {
          prompt: "Listen (U9): how does the sentence avoid saying »by train«?",
          tts: "Vlak polazi u devet, a ja putujem u Split.",
          options: ["vlak is the subject, the speaker just travels", "it uses vlakom", "it uses s vlakom"],
          correctIndex: 0,
          explanation: "U9's workaround: vlak as subject. From today you can finally say putujem vlakom!",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the means & tools",
      vocabIds: ["a2u12.bicikl", "a2u12.racunalo", "a2u12.olovka", "a2u12.mobitel", "a2u12.pjesice", "a2u12.stanica"],
    },
    {
      id: "s05",
      type: "teach",
      title: "Bare INS: the by-means case — NO s!",
      body:
        "Job #2 of the instrumental: **means/instrument** — how you travel, what you work with. Just the **-om/-em form, with NO preposition**:\n\n- *Putujem **vlakom**.* — I travel by train\n- *Pišem **olovkom**.* — I write with a pencil\n\nEnglish says “with a pencil”, so your hand wants an s — resist! The rule of thumb: **if you can't shake hands with it, drop the s.**\n\nOne exception walks: **pješice** (on foot) — an adverb, no case at all.",
      diagram: {
        kind: "contrast",
        left: {
          title: "s + INS = WITH someone",
          emoji: "🧑‍🤝‍🧑",
          caseId: "INS",
          lines: [
            { hr: "Radim s Anom.", en: "I work with Ana." },
            { hr: "Kava s mlijekom.", en: "coffee with milk" },
          ],
        },
        right: {
          title: "bare INS = BY means",
          emoji: "🚆",
          caseId: "INS",
          lines: [
            { hr: "Putujem vlakom.", en: "I travel by train — ~~s vlakom~~ ❌" },
            { hr: "Pišem olovkom.", en: "I write with a pencil" },
          ],
        },
      },
      examples: [
        { hr: "Putujem vlakom u Split.", en: "I travel to Split by train.", highlight: { text: "vlakom", caseId: "INS" } },
        { hr: "Idem na posao biciklom.", en: "I go to work by bike.", highlight: { text: "biciklom", caseId: "INS" } },
        { hr: "Ana ide pješice.", en: "Ana goes on foot.", note: "pješice — the caseless exception" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The whole garage — and the toolbox",
      body:
        "Every vehicle you've met since U3 now gets its INS form (mind **tramvajem** — soft j → -em!). Tools work identically: *radim računalom, pišem olovkom, plaćam mobitelom*.",
      table: {
        caption: "Transport & tools in INS",
        headers: ["NOM", "INS (by/with)"],
        colCase: ["NOM", "INS"],
        rows: [
          ["vlak 🚆", "vlakom"],
          ["auto 🚗", "autom"],
          ["autobus 🚌", "autobusom"],
          ["tramvaj 🚊", "tramvajem (soft!)"],
          ["bicikl 🚲 · avion ✈️", "biciklom · avionom"],
          ["računalo 💻 · olovka ✏️ · mobitel 📱", "računalom · olovkom · mobitelom"],
        ],
      },
      examples: [
        { hr: "Idem u centar tramvajem.", en: "I go to the centre by tram.", highlight: { text: "tramvajem", caseId: "INS" } },
        { hr: "Pišem zadaću računalom, a ne olovkom.", en: "I write my homework with a computer, not a pencil." },
        { hr: "Čekam autobus na stanici.", en: "I'm waiting for the bus at the stop.", note: "stanica — where the bus finds you" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "The judgment drill: s or no s?",
      items: [
        {
          prompt: "»Idem na posao ___ autom.«",
          options: ["— (nothing!)", "s", "sa"],
          correctIndex: 0,
          explanation: "Means → bare INS: idem autom. You can't shake hands with a car.",
        },
        {
          prompt: "»Idem u kino ___ Markom.«",
          options: ["s", "— (nothing)", "sa"],
          correctIndex: 0,
          explanation: "Marko is a person → s Markom.",
        },
        {
          prompt: "»Putujem u Split ___ vlakom.«",
          options: ["— (nothing!)", "s", "sa"],
          correctIndex: 0,
          explanation: "Transport → bare INS: putujem vlakom. (s vlakom is THE trap.)",
        },
        {
          prompt: "How does Ana go, with no vehicle at all?",
          options: ["pješice", "pješicom", "s pješice"],
          correctIndex: 0,
          explanation: "pješice is an adverb — no case, no s, no ending games.",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Putujem u Split ___. (vlak)",
      blanks: [["vlakom"]],
      translation: "I travel to Split by train.",
      wordBank: ["vlakom", "s vlakom", "vlak"],
      explanation: "Bare INS — no s: vlakom.",
    },
    {
      id: "s09",
      type: "fill",
      text: "Pišem ___. (olovka)",
      blanks: [["olovkom"]],
      translation: "I write with a pencil.",
      wordBank: ["olovkom", "s olovkom", "olovku"],
      explanation: "Tool → bare INS: olovkom.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Idem u centar ___. (tramvaj — soft stem!)",
      blanks: [["tramvajem"]],
      translation: "I go to the centre by tram.",
      wordBank: ["tramvajem", "tramvajom", "s tramvajem"],
      explanation: "Soft j → -em, and no s: tramvajem.",
    },
    {
      id: "s11",
      type: "section",
      title: "Part 2 · Your commute",
      subtitle: "Type it, build it, hear it — then tell us how you get to work.",
      emoji: "🚏",
      items: [
        { emoji: "⌨️", label: "Type two rides", hint: "plane · car with Marko" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🔮", label: "Future rides", hint: "Putovat ću vlakom (U9+U12!)" },
        { emoji: "🎤", label: "Your commute", hint: "Idem na posao…" },
      ],
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I travel by plane.”",
      answers: ["Putujem avionom.", "Putujem avionom"],
      hint: "bare INS — no s!",
      explanation: "Putujem avionom.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I'm going with Marko by car.” (both INS jobs in one sentence!)",
      answers: ["Idem s Markom autom.", "Idem s Markom autom", "Idem autom s Markom.", "Idem autom s Markom"],
      hint: "person keeps s, car drops it",
      explanation: "Idem s Markom autom — s Markom (with), autom (by).",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Idem na posao biciklom.",
      explanation: "Idem na posao biciklom — I go to work by bike.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Ana ide pješice, a Tom ide tramvajem.",
      explanation: "Ana ide pješice, a Tom ide tramvajem — Ana walks, Tom takes the tram.",
    },
    {
      id: "s16",
      type: "quiz-set",
      review: true,
      title: "Flashback: futures and old vehicles",
      items: [
        {
          prompt: "U9 + today, combined: »Sutra ___ putovati vlakom.« (I will)",
          options: ["ću", "ćeš", "sam"],
          correctIndex: 0,
          explanation: "Future I + bare INS: Sutra ću putovati vlakom — the full travel toolkit.",
        },
        {
          prompt: "Listen (U5 station world): where is she waiting?",
          tts: "Čekam tramvaj na stanici.",
          options: ["at the stop", "at the office", "at the airport"],
          correctIndex: 0,
          explanation: "na stanici = at the stop (LOC).",
        },
        {
          prompt: "U3's auto, now in motion: »Marko ide na posao ___.«",
          options: ["autom", "s autom", "auto"],
          correctIndex: 0,
          explanation: "Bare INS: autom. (auto is masculine — remember U3's surprise.)",
        },
      ],
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Idem", "na", "posao", "tramvajem"],
      answers: ["Idem na posao tramvajem.", "Idem na posao tramvajem"],
      en: "I go to work by tram.",
      explanation: "na + ACC destination, then the bare-INS means.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Idem na posao tramvajem.",
      targetEn: "say your commute — I go to work by tram. (or: autom / biciklom / pješice…)",
      phonetic: "EE-dem na PO-sao tram-VA-yem",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The ban lifts:** means take the **bare instrumental** — *putujem vlakom, idem biciklom, pišem olovkom, radim računalom, plaćam mobitelom* — **NO s, ever** (~~s vlakom~~ ❌).\n\n**The rule of thumb:** if you can't shake hands with it, drop the s. People keep it: *s Markom autom* — both jobs, one sentence.\n\n**The walker:** *pješice* — adverb, no case.\n\nWords tonight: **bicikl, računalo, olovka, mobitel, pješice, stanica**.\n\nNext lesson: *Radim kao konobar* — professions, and a case-free kao.",
      vocabIds: ["a2u12.bicikl", "a2u12.racunalo", "a2u12.olovka", "a2u12.mobitel", "a2u12.pjesice", "a2u12.stanica"],
    },
  ],
  srsCloze: [
    { front: "Putujem ___. (vlak — by train, NO s!)", answers: ["vlakom"], back: "Putujem vlakom. (bare INS)", tts: "Putujem vlakom." },
    { front: "Idem u centar ___. (tramvaj — soft!)", answers: ["tramvajem"], back: "tramvajem (soft j → -em)", tts: "Idem u centar tramvajem." },
    { front: "Pišem ___. (olovka)", answers: ["olovkom"], back: "Pišem olovkom. (tool → bare INS)", tts: "Pišem olovkom." },
    { front: "on foot = ___ (no case!)", answers: ["pješice", "pjesice"], back: "pješice — an adverb, no ending.", tts: "Idem pješice." },
    { front: "»I'm going with Marko by car« = Idem s ___ ___.", answers: ["Markom autom"], back: "Idem s Markom autom. (s for the person, bare for the car)", tts: "Idem s Markom autom." },
    { front: "Idem na posao ___. (autobus — by bus, no s!)", answers: ["autobusom"], back: "Idem na posao autobusom. (bare INS — never »s autobusom«)", tts: "Idem na posao autobusom." },
  ],
  notes: {
    inOneSentence: {
      en: "Means and tools take the bare instrumental with no preposition — putujem vlakom, pišem olovkom — while people keep s (s Markom); pješice is a caseless adverb.",
      exampleHr: "Putujem vlakom u Split. · Idem na posao biciklom. · Ana ide pješice.",
    },
    deepDive: [
      {
        title: "WITH vs BY — the printable card",
        body:
          "The instrumental's two jobs, side by side. English uses »with« for both, which is exactly why the trap exists:\n\n- **s + INS** — accompaniment: someone (or something) alongside you: *s Anom, s kolegom, kava s mlijekom*\n- **bare INS** — the means/instrument doing the job: *vlakom, autom, olovkom, računalom*\n\nTest any noun: could it walk beside you and hold a conversation (even the milk is IN your company at the table)? Keep s. Is it the tool/vehicle you use? Drop it.",
        diagram: {
          kind: "contrast",
          left: { title: "WITH — keep s", emoji: "🧑‍🤝‍🧑", caseId: "INS", lines: [{ hr: "Radim s Anom.", en: "with Ana" }, { hr: "kava s mlijekom", en: "with milk" }] },
          right: { title: "BY — drop s", emoji: "🚆", caseId: "INS", lines: [{ hr: "Putujem vlakom.", en: "by train" }, { hr: "Pišem olovkom.", en: "with a pencil" }] },
        },
      },
      {
        title: "Why the course banned »by train« until now",
        body:
          "In U5 you learned *čekam tramvaj* (object) and in U9 the workaround *vlak polazi / kupujem kartu*. The ban existed because English speakers who learn »by train« early invariably produce ~~s vlakom~~ — the preposition-with habit is that strong. Now you have both jobs of INS in separate mental boxes, learned a day apart, with the contrast drilled between them. The ban did its job.",
      },
      {
        title: "The full garage + toolbox table",
        body: "All your vehicles and tools, ready to roll:",
        table: {
          caption: "Bare-INS inventory",
          headers: ["thing", "INS", "sentence"],
          colCase: [null, "INS", null],
          rows: [
            ["vlak", "vlakom", "Putujem vlakom."],
            ["auto (m!)", "autom", "Idem autom."],
            ["autobus", "autobusom", "Idem autobusom."],
            ["tramvaj", "tramvajem ⚠️", "Idem tramvajem."],
            ["bicikl / avion", "biciklom / avionom", "Idem biciklom."],
            ["računalo / olovka / mobitel", "računalom / olovkom / mobitelom", "Radim računalom."],
            ["(walking)", "pješice — adverb", "Idem pješice."],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Idem s vlakom u Split.",
        right: "Idem vlakom u Split.",
        why: "Means take bare INS — the s belongs only to company (s Markom).",
      },
      {
        wrong: "Idem tramvajom.",
        right: "Idem tramvajem.",
        why: "Soft stem j → -em: tramvajem (like prijateljem).",
      },
      {
        wrong: "Idem pješicom.",
        right: "Idem pješice.",
        why: "pješice is an adverb — it never declines.",
      },
      {
        wrong: "Idem na autu na posao.",
        right: "Idem autom na posao.",
        why: "English »on the bus/car« interference — Croatian means = bare INS, no na.",
      },
    ],
    memoryHooks: [
      "Can't shake hands with it? Drop the s: vlakom, autom, olovkom.",
      "tramvajem rhymes with prijateljem — the soft -em club.",
      "pješice = feet only, grammar-free: no case, no s, no problem.",
      "The double line: s Markom autom — person keeps s, machine goes bare.",
    ],
    connects: [
      { label: "s + INS company (Unit 12 L1)", lessonId: "a2u12l1" },
      { label: "čekam tramvaj — the U5 object days", lessonId: "a1u5l3" },
      { label: "Travel sentences that waited (Unit 9 L4)", lessonId: "a2u9l4" },
      { label: "Next: Radim kao konobar (Unit 12 L3)", lessonId: "a2u12l3" },
    ],
    selfCheck: [
      { q: "“I travel to Split by train” = ?", a: "Putujem vlakom u Split. (no s!)" },
      { q: "Why is »s vlakom« wrong?", a: "Means take the bare instrumental; s is only for company." },
      { q: "“by tram” — mind the stem?", a: "tramvajem (soft j → -em)." },
      { q: "“I'm going with Marko by car” = ?", a: "Idem s Markom autom." },
      { q: "“on foot” = ?", a: "pješice — an adverb, no case." },
    ],
  },
};
