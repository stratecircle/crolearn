import type { Lesson } from "@/types/content";

/**
 * A2 U14 L4 — Kada je Božić? (dates with GEN + the months)
 * Spec: curriculum/A2/unit-14.md · grammar-reference §13 (ordinals), §3 (GEN).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * SPEC CORRECTION 2026-07-23: months were NEVER taught (U6 taught days only),
 * so this lesson TEACHES them — closed-set policy (12 months + mjesec + 7
 * holiday words = 20 items). The year wheel is first teaching, not review.
 */
export const a2u14l4: Lesson = {
  id: "a2u14l4",
  unitId: "a2u14",
  title: "Kada je Božić?",
  titleEn: "When is Christmas? — months & dates in the genitive",
  grammarTags: ["dates-genitive", "months", "ordinals"],
  estMinutes: 20,
  vocabPolicy: "closed-set",
  vocab: [
    { id: "a2u14.sijecanj", image: "/img/sijecanj.png", hr: "siječanj", en: "January (GEN siječnja)", pos: "noun", gender: "m", icon: "🥶", exampleHr: "Siječanj je prvi mjesec.", exampleEn: "January is the first month." },
    { id: "a2u14.veljaca", image: "/img/veljaca.png", hr: "veljača", en: "February (GEN veljače)", pos: "noun", gender: "f", icon: "❄️", exampleHr: "Veljača je najkraći mjesec.", exampleEn: "February is the shortest month." },
    { id: "a2u14.ozujak", image: "/img/ozujak.png", hr: "ožujak", en: "March (GEN ožujka)", pos: "noun", gender: "m", icon: "🌱", exampleHr: "Proljeće je u ožujku.", exampleEn: "Spring is in March." },
    { id: "a2u14.travanj", image: "/img/travanj.png", hr: "travanj", en: "April (GEN travnja)", pos: "noun", gender: "m", icon: "🌷", exampleHr: "Uskrs je često u travnju.", exampleEn: "Easter is often in April." },
    { id: "a2u14.svibanj", image: "/img/svibanj.png", hr: "svibanj", en: "May (GEN svibnja)", pos: "noun", gender: "m", icon: "🌼", exampleHr: "Svibanj je peti mjesec.", exampleEn: "May is the fifth month." },
    { id: "a2u14.lipanj", image: "/img/lipanj.png", hr: "lipanj", en: "June (GEN lipnja)", pos: "noun", gender: "m", icon: "☀️", exampleHr: "U lipnju je toplo.", exampleEn: "It's warm in June." },
    { id: "a2u14.srpanj", image: "/img/srpanj.png", hr: "srpanj", en: "July (GEN srpnja)", pos: "noun", gender: "m", icon: "🏖️", exampleHr: "U srpnju idemo na more.", exampleEn: "In July we go to the seaside." },
    { id: "a2u14.kolovoz", image: "/img/kolovoz.png", hr: "kolovoz", en: "August (GEN kolovoza)", pos: "noun", gender: "m", icon: "🔥", exampleHr: "Kolovoz je vruć.", exampleEn: "August is hot." },
    { id: "a2u14.rujan", image: "/img/rujan.png", hr: "rujan", en: "September (GEN rujna)", pos: "noun", gender: "m", icon: "🍇", exampleHr: "U rujnu je svježe.", exampleEn: "It's cool in September." },
    { id: "a2u14.listopad", image: "/img/listopad.png", hr: "listopad", en: "October (GEN listopada)", pos: "noun", gender: "m", icon: "🍂", exampleHr: "U listopadu pada kiša.", exampleEn: "In October it rains." },
    { id: "a2u14.studeni", image: "/img/studeni.png", hr: "studeni", en: "November (GEN studenog)", pos: "noun", gender: "m", icon: "🌫️", exampleHr: "Studeni je hladan.", exampleEn: "November is cold." },
    { id: "a2u14.prosinac", image: "/img/prosinac.png", hr: "prosinac", en: "December (GEN prosinca)", pos: "noun", gender: "m", icon: "🎄", exampleHr: "Božić je u prosincu.", exampleEn: "Christmas is in December." },
    { id: "a2u14.mjesec", image: "/img/mjesec.png", hr: "mjesec", en: "month (also: moon)", pos: "noun", gender: "m", icon: "🗓️", exampleHr: "Godina ima dvanaest mjeseci.", exampleEn: "A year has twelve months." },
    { id: "a2u14.bozic", image: "/img/bozic.png", hr: "Božić", en: "Christmas", pos: "noun", gender: "m", icon: "🎄", exampleHr: "Božić je dvadeset petog prosinca.", exampleEn: "Christmas is on December 25th." },
    { id: "a2u14.uskrs", image: "/img/uskrs.png", hr: "Uskrs", en: "Easter", pos: "noun", gender: "m", icon: "🐣", exampleHr: "Uskrs je u proljeće.", exampleEn: "Easter is in spring." },
    { id: "a2u14.novagodina", image: "/img/novagodina.png", hr: "Nova godina", en: "New Year", pos: "phrase", gender: "f", icon: "🎆", exampleHr: "Nova godina je prvog siječnja.", exampleEn: "New Year is on January 1st." },
    { id: "a2u14.blagdan", image: "/img/blagdan.png", hr: "blagdan", en: "holiday", pos: "noun", gender: "m", icon: "📅", exampleHr: "Božić je veliki blagdan.", exampleEn: "Christmas is a big holiday." },
    { id: "a2u14.datum", image: "/img/datum.png", hr: "datum", en: "date", pos: "noun", gender: "m", icon: "🔢", exampleHr: "Koji je datum danas?", exampleEn: "What's the date today?" },
    { id: "a2u14.svijeca", image: "/img/svijeca.png", hr: "svijeća", en: "candle", pos: "noun", gender: "f", icon: "🕯️", exampleHr: "Na torti je pet svijeća.", exampleEn: "There are five candles on the cake." },
    { id: "a2u14.cestitka", image: "/img/cestitka.png", hr: "čestitka", en: "greeting card", pos: "noun", gender: "f", icon: "💌", exampleHr: "Pišem čestitku baki.", exampleEn: "I'm writing grandma a card." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kada je Božić?",
      subtitle: "When's your birthday? Answer like a Croatian — in the genitive.",
      emoji: "🗓️",
      items: [
        { emoji: "🎡", label: "The 12 months", hint: "siječanj → prosinac" },
        { emoji: "🟢", label: "Dates = GEN", hint: "dvadeset petog prosinca" },
        { emoji: "🎄", label: "The blagdani", hint: "Božić, Uskrs, Nova godina" },
        { emoji: "🎤", label: "Your birthday", hint: "Moj rođendan je…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The year wheel",
      subtitle: "Croatian months aren't Latin — they're little nature poems. Meet all twelve.",
      emoji: "🎡",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "ordinals & days" },
        { emoji: "📅", label: "12 months + GEN", hint: "watch the fleeting a" },
        { emoji: "🎄", label: "Holidays pinned", hint: "on the wheel" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: ordinals & the week",
      items: [
        {
          prompt: "U5 ordinals: »Stan je na ___ katu.« (first)",
          options: ["prvom", "prvi", "jedan"],
          correctIndex: 0,
          explanation: "prvi → na prvom katu. Today ordinals get a GEN job: prvog siječnja.",
        },
        {
          prompt: "U6 days: »Proslava je u ___.« (on Saturday)",
          options: ["subotu", "subota", "suboti"],
          correctIndex: 0,
          explanation: "u + ACC for days: u subotu. Dates work differently — today's point!",
        },
        {
          prompt: "Listen (U7): which number?",
          tts: "dvadeset pet",
          options: ["25", "35", "15"],
          correctIndex: 0,
          explanation: "dvadeset pet = 25 — the Christmas number.",
        },
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "The twelve months — nature's calendar",
      body:
        "Croatian ignored the Roman names and named the year after nature: *listopad* = leaf-fall, *travanj* = grass month, *studeni* = the cold one.\n\nWatch the **fleeting a** — five months drop it in the genitive: *siječanj → siječnja, travanj → travnja, lipanj → lipnja, srpanj → srpnja, prosinac → prosinca*. And **studeni** declines like an adjective: *studenog*.",
      table: {
        caption: "The year, with genitives",
        headers: ["#", "month", "GEN (for dates)"],
        colCase: [null, "NOM", "GEN"],
        rows: [
          ["1–3", "siječanj · veljača · ožujak", "siječnja · veljače · ožujka"],
          ["4–6", "travanj · svibanj · lipanj", "travnja · svibnja · lipnja"],
          ["7–9", "srpanj · kolovoz · rujan", "srpnja · kolovoza · rujna"],
          ["10–12", "listopad · studeni · prosinac", "listopada · studenog · prosinca"],
        ],
      },
      examples: [
        { hr: "Siječanj je prvi mjesec.", en: "January is the first month." },
        { hr: "Veljača je najkraći mjesec.", en: "February is the shortest month.", note: "the U13 superlative earns its keep" },
        { hr: "U srpnju idemo na more.", en: "In July we go to the seaside.", note: "in a month = u + LOC: u srpnju" },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: know your wheel",
      items: [
        {
          prompt: "Christmas month?",
          options: ["prosinac", "listopad", "siječanj"],
          correctIndex: 0,
          explanation: "prosinac = December.",
        },
        {
          prompt: "The FIRST month of the year?",
          options: ["siječanj", "veljača", "studeni"],
          correctIndex: 0,
          explanation: "siječanj = January.",
        },
        {
          prompt: "GEN of svibanj?",
          options: ["svibnja", "svibanja", "svibnju"],
          correctIndex: 0,
          explanation: "The a flees: svibnja (like travnja, lipnja, srpnja).",
        },
        {
          prompt: "»leaf-fall« — which month is literally that?",
          options: ["listopad", "rujan", "ožujak"],
          correctIndex: 0,
          explanation: "listopad = list (leaf) + pad (fall) = October.",
        },
      ],
    },
    {
      id: "s06",
      type: "vocab-cards",
      title: "The blagdani — holiday words",
      vocabIds: [
        "a2u14.mjesec", "a2u14.bozic", "a2u14.uskrs", "a2u14.novagodina",
        "a2u14.blagdan", "a2u14.datum", "a2u14.svijeca", "a2u14.cestitka",
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Dates go in the genitive — no preposition!",
      body:
        "English says *ON December 25th*. Croatian just puts the whole date in **GEN**:\n\n**25. prosinac → dvadeset pet*og* prosin*ca***\n\nOrdinal in -og (*prvog, drugog, trećeg, petog*) + month in GEN. Ask with **Kada je…?** or **Koji je datum?**\n\nTime-chunks ride the same green wave: **ove godine** (this year), **sljedeće godine** (next year).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "25. prosinac", emoji: "📅", example: "the raw date" },
          { label: "dvadeset petOG", emoji: "🟢", example: "ordinal → GEN -og" },
          { label: "prosinCA", emoji: "🟢", example: "month → GEN (fleeting a!)" },
        ],
      },
      examples: [
        { hr: "Božić je dvadeset petog prosinca.", en: "Christmas is on December 25th.", highlight: { text: "dvadeset petog prosinca", caseId: "GEN" } },
        { hr: "Moj rođendan je trećeg svibnja.", en: "My birthday is on May 3rd.", highlight: { text: "trećeg svibnja", caseId: "GEN" } },
        { hr: "Kada je Uskrs ove godine?", en: "When is Easter this year?", highlight: { text: "ove godine", caseId: "GEN" } },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: say the date",
      items: [
        {
          prompt: "25.12. = ?",
          options: ["dvadeset petog prosinca", "dvadeset pet prosinac", "na dvadeset peti prosinac"],
          correctIndex: 0,
          explanation: "Both parts in GEN, no preposition.",
        },
        {
          prompt: "1.1. (New Year) = ?",
          options: ["prvog siječnja", "prvi siječanj", "jedan siječnja"],
          correctIndex: 0,
          explanation: "prvog (ordinal GEN) + siječnja.",
        },
        {
          prompt: "»Kada je Nova godina?« —",
          options: ["Prvog siječnja.", "U prvi siječanj.", "Na Novu godinu."],
          correctIndex: 0,
          explanation: "Date answer = bare GEN: prvog siječnja.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Pin your own dates",
      subtitle: "Birthdays, holidays, candles — all in green.",
      emoji: "🎂",
      items: [
        { emoji: "⌨️", label: "Build two dates", hint: "trećeg svibnja" },
        { emoji: "✏️", label: "Fill the calendar", hint: "prosinca · svijeća" },
        { emoji: "🎧", label: "Date dictation", hint: "type what you hear" },
      ],
    },
    {
      id: "s10",
      type: "type",
      prompt: "3.5. → »Moj rođendan je trećeg ___.«",
      answers: ["svibnja"],
      hint: "May, GEN — the a flees",
      explanation: "trećeg svibnja — svibanj → svibnja.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "1.1. → »Nova godina je ___ siječnja.«",
      answers: ["prvog"],
      hint: "ordinal in GEN -og",
      explanation: "prvog siječnja.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Božić je dvadeset petog ___. (prosinac)",
      blanks: [["prosinca"]],
      translation: "Christmas is on December 25th.",
      wordBank: ["prosinca", "prosinac", "prosincu"],
      explanation: "Month in GEN, fleeting a out: prosinca.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Na torti je pet ___. (svijeća)",
      blanks: [["svijeća", "svijeca"]],
      translation: "There are five candles on the cake.",
      wordBank: ["svijeća", "svijeće", "svijeću"],
      explanation: "5+ → GEN pl (U13): pet svijeća.",
    },
    {
      id: "s20",
      type: "reorder",
      words: ["Moj", "rođendan", "je", "trećeg", "svibnja"],
      answers: ["Moj rođendan je trećeg svibnja.", "Moj rođendan je trećeg svibnja"],
      en: "My birthday is on May 3rd.",
      explanation: "subject + je + the date in bare GEN.",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 3 · Ears, voice & old calendars",
      subtitle: "Hear dates, say yours, and let the perfekt remember last year.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Date dictation ×2", hint: "digits or words" },
        { emoji: "🎤", label: "Your birthday", hint: "Moj rođendan je…" },
        { emoji: "🔗", label: "Last year, next year", hint: "perfekt & future" },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Božić je dvadeset petog prosinca.",
      explanation: "Božić je dvadeset petog prosinca — Christmas is on Dec 25th.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Moj rođendan je trećeg svibnja.",
      explanation: "Moj rođendan je trećeg svibnja — my birthday is on May 3rd.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Moj rođendan je trećeg svibnja.",
      targetEn: "say YOUR real birthday — My birthday is on May 3rd. (swap in your ordinal + month GEN)",
      phonetic: "moy RO-jen-dan ye TRE-cheg SVEEB-nya",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: celebrations across the tenses",
      items: [
        {
          prompt: "Listen (U8 perfekt): where did they celebrate last year?",
          tts: "Prošle godine smo slavili kod bake.",
          options: ["at grandma's", "at home", "at the seaside"],
          correctIndex: 0,
          explanation: "Prošle godine (GEN-of-time!) + smo slavili + kod bake (U9).",
        },
        {
          prompt: "U9 future: »Slavit ćemo Novu godinu u Splitu.« means…",
          options: [
            "We'll celebrate New Year in Split",
            "We celebrated New Year in Split",
            "Let's celebrate New Year in Split",
          ],
          correctIndex: 0,
          explanation: "Slavit ćemo — future I with the -t spelling (U9).",
        },
        {
          prompt: "U6 days meet dates: which one is a DATE?",
          options: ["petog svibnja", "u petak", "u subotu"],
          correctIndex: 0,
          explanation: "Days take u + ACC (u petak); dates are bare GEN (petog svibnja).",
        },
      ],
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The year wheel**: siječanj, veljača, ožujak, travanj, svibanj, lipanj, srpanj, kolovoz, rujan, listopad, studeni, prosinac — nature names, and five with a fleeting a in GEN (*siječnja … prosinca*).\n\n**Dates = bare GEN, no preposition**: *Božić je dvadeset petog prosinca. Moj rođendan je trećeg svibnja.* Ask: *Kada je…? Koji je datum?* In a month = *u + LOC* (*u srpnju*). Time chunks: *ove godine, sljedeće godine*.\n\nWords tonight: the 12 months + **mjesec, Božić, Uskrs, Nova godina, blagdan, datum, svijeća, čestitka**.",
      vocabIds: [
        "a2u14.sijecanj", "a2u14.veljaca", "a2u14.ozujak", "a2u14.travanj",
        "a2u14.svibanj", "a2u14.lipanj", "a2u14.srpanj", "a2u14.kolovoz",
        "a2u14.rujan", "a2u14.listopad", "a2u14.studeni", "a2u14.prosinac",
        "a2u14.mjesec", "a2u14.bozic", "a2u14.uskrs", "a2u14.novagodina",
        "a2u14.blagdan", "a2u14.datum", "a2u14.svijeca", "a2u14.cestitka",
      ],
    },
  ],
  srsCloze: [
    { front: "25.12. → dvadeset petog ___", answers: ["prosinca"], back: "prosinca — GEN with the fleeting a.", tts: "dvadeset petog prosinca" },
    { front: "1.1. → ___ siječnja", answers: ["prvog"], back: "prvog siječnja — ordinal GEN -og.", tts: "prvog siječnja" },
    { front: "the month after siječanj = ___", answers: ["veljača", "veljaca"], back: "veljača = February, the shortest month.", tts: "veljača" },
    { front: "Christmas month = ___", answers: ["prosinac"], back: "prosinac = December (Božić je u prosincu).", tts: "Božić je u prosincu." },
    { front: "»in July« = u ___ (LOC)", answers: ["srpnju"], back: "u srpnju — u + LOC for months.", tts: "U srpnju idemo na more." },
    { front: "Uskrs je u ___. (the season)", answers: ["proljeće", "proljece"], back: "u proljeće — the U13 season, ACC temporal.", tts: "Uskrs je u proljeće." },
    { front: "holiday = ___ (m)", answers: ["blagdan"], back: "blagdan (Božić je veliki blagdan.)", tts: "Božić je veliki blagdan." },
    { front: "greeting card = ___ (f)", answers: ["čestitka", "cestitka"], back: "čestitka (Pišem čestitku baki.)", tts: "Pišem čestitku baki." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian dates are bare genitive — ordinal + month, no preposition (Božić je dvadeset petog prosinca) — and the twelve nature-named months are: siječanj through prosinac.",
      exampleHr: "Božić je dvadeset petog prosinca. · Moj rođendan je trećeg svibnja. · U srpnju idemo na more.",
    },
    deepDive: [
      {
        title: "All twelve months, all forms you need",
        body:
          "Every month with its GEN (for dates) and LOC (for \"in ___\"). The fleeting-a five are flagged:",
        table: {
          caption: "The complete wheel",
          headers: ["month", "GEN (dates)", "u + LOC (in…)"],
          colCase: ["NOM", "GEN", "LOC"],
          rows: [
            ["siječanj ⚠️a", "siječnja", "u siječnju"],
            ["veljača", "veljače", "u veljači"],
            ["ožujak ⚠️a", "ožujka", "u ožujku"],
            ["travanj ⚠️a", "travnja", "u travnju"],
            ["svibanj ⚠️a", "svibnja", "u svibnju"],
            ["lipanj ⚠️a", "lipnja", "u lipnju"],
            ["srpanj ⚠️a", "srpnja", "u srpnju"],
            ["kolovoz", "kolovoza", "u kolovozu"],
            ["rujan ⚠️a", "rujna", "u rujnu"],
            ["listopad", "listopada", "u listopadu"],
            ["studeni (adj!)", "studenog", "u studenom"],
            ["prosinac ⚠️a", "prosinca", "u prosincu"],
          ],
        },
      },
      {
        title: "Why the genitive? Three time systems side by side",
        body:
          "Croatian slices time three ways — you now own all three:\n\n1. **Days** → u + ACC: *u subotu, u petak* (U6)\n2. **Months** → u + LOC: *u srpnju, u prosincu* (today)\n3. **Dates** → bare GEN: *petog svibnja, dvadeset petog prosinca* (today)\n\nThe date-GEN is literally \"of the fifth of May\" — English does the same with *the fifth OF May*; Croatian just skips the little words.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "day", emoji: "📆", example: "u subotu (ACC)" },
            { label: "month", emoji: "🗓️", example: "u srpnju (LOC)" },
            { label: "date", emoji: "🟢", example: "petog srpnja (GEN)" },
          ],
        },
      },
      {
        title: "Nature's names — free mnemonics",
        body:
          "The months describe the land:\n\n- **siječanj** — wood-cutting (sjeći) time · **veljača** — the shifting month · **ožujak** — lying winds\n- **travanj** — grass (trava — your U13 word!) · **svibanj** — budding dogwood · **lipanj** — linden bloom\n- **srpanj** — sickle (harvest) · **kolovoz** — cart-driving (harvest home) · **rujan** — deer-rutting / red wine\n- **listopad** — LEAF-FALL (list + padati!) · **studeni** — the cold one · **prosinac** — the sun 'begging through' the dark\n\nEach one is a story — far stickier than \"October\".",
      },
    ],
    commonMistakes: [
      {
        wrong: "Božić je na dvadeset peti prosinac.",
        right: "Božić je dvadeset petog prosinca.",
        why: "No preposition, no nominative — the whole date sits in GEN.",
      },
      {
        wrong: "prvi siječnja",
        right: "prvog siječnja",
        why: "BOTH parts go genitive: ordinal -og + month GEN.",
      },
      {
        wrong: "u svibanj",
        right: "u svibnju",
        why: "\"In a month\" = u + LOC: u svibnju (u + ACC is for days: u subotu).",
      },
      {
        wrong: "GEN of prosinac = prosinaca",
        right: "prosinca",
        why: "The fleeting a leaves: prosinac → prosinca (like momak → momka).",
      },
    ],
    memoryHooks: [
      "listopad = leaf-fall — the one month everyone remembers first.",
      "Dates wear green head to toe: petOG svibNJA — both endings genitive.",
      "The fleeting-a five: siječanj, ožujak, travanj–lipanj–srpanj, rujan, prosinac — the -anj/-ac gang.",
      "Days ACC, months LOC, dates GEN — three time zones, three cases.",
    ],
    connects: [
      { label: "Days of the week — u + ACC (Unit 6 L4)", lessonId: "a1u6l4" },
      { label: "Ordinals — prvi, drugi, treći (Unit 5 L4)", lessonId: "a1u5l4" },
      { label: "Next: wishes & invitations (Unit 14 L5)", lessonId: "a2u14l5" },
    ],
    selfCheck: [
      { q: "Say Christmas's date.", a: "Božić je dvadeset petog prosinca." },
      { q: "The first three months?", a: "siječanj, veljača, ožujak." },
      { q: "»in June« vs »on June 5th«?", a: "u lipnju (LOC) vs petog lipnja (GEN)." },
      { q: "Which months lose an a in GEN?", a: "siječanj, ožujak, travanj, lipanj, srpanj, rujan, prosinac (→ siječnja, ožujka, travnja, lipnja, srpnja, rujna, prosinca)." },
      { q: "October, literally?", a: "listopad — leaf-fall." },
    ],
  },
};
