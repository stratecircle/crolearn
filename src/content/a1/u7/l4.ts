import type { Lesson } from "@/types/content";

/**
 * A1 U7 L4 — Koliko košta? (Big numbers & prices)
 * Spec: curriculum/A1/unit-7.md · grammar-reference §13 (numbers), §4 (adj agreement).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * vocabPolicy: closed-set (tens 20–1000 + 6 colours = 16 items; listening-priority).
 * Grammar: tens & compounds (dvadeset pet); price frames Koliko košta? / koštaju
 * (sg/pl verb); Košta pet eura i pedeset centi. Colours introduced as NOM-sg
 * adjectives (agreement recycled U2/U3), full ACC agreement in L5.
 *
 * Spec deviation (no-surprise-material): the spec drills košta/koštaju and colours
 * on clothes (majica, hlače), but clothes are taught in L5 — so L4 uses already-
 * taught nouns instead: sg košta with kava/kruh, pl koštaju with jabuke/knjige;
 * colours on vino/kava/jabuka/sir/more. Clothes + colour agreement land in L5.
 * See curriculum/A1/unit-7.md L4 note.
 */
export const a1u7l4: Lesson = {
  id: "a1u7l4",
  unitId: "a1u7",
  title: "Koliko košta?",
  titleEn: "Big numbers & prices",
  grammarTags: ["numbers-20-1000", "prices", "adjective-agreement"],
  estMinutes: 18,
  vocabPolicy: "closed-set",
  vocab: [
    { id: "a1u7.dvadeset", image: "/img/dvadeset.png", hr: "dvadeset", en: "twenty (20)", pos: "num", icon: "🔢", exampleHr: "Dvadeset eura.", exampleEn: "Twenty euros." },
    { id: "a1u7.trideset", image: "/img/trideset.png", hr: "trideset", en: "thirty (30)", pos: "num", icon: "🔢", exampleHr: "Trideset eura.", exampleEn: "Thirty euros." },
    { id: "a1u7.cetrdeset", image: "/img/cetrdeset.png", hr: "četrdeset", en: "forty (40)", pos: "num", icon: "🔢", exampleHr: "Četrdeset centi.", exampleEn: "Forty cents." },
    { id: "a1u7.pedeset", image: "/img/pedeset.png", hr: "pedeset", en: "fifty (50)", pos: "num", icon: "🔢", exampleHr: "Pedeset centi.", exampleEn: "Fifty cents." },
    { id: "a1u7.sezdeset", image: "/img/sezdeset.png", hr: "šezdeset", en: "sixty (60)", pos: "num", icon: "🔢", exampleHr: "Šezdeset eura.", exampleEn: "Sixty euros." },
    { id: "a1u7.sedamdeset", image: "/img/sedamdeset.png", hr: "sedamdeset", en: "seventy (70)", pos: "num", icon: "🔢", exampleHr: "Sedamdeset eura.", exampleEn: "Seventy euros." },
    { id: "a1u7.osamdeset", image: "/img/osamdeset.png", hr: "osamdeset", en: "eighty (80)", pos: "num", icon: "🔢", exampleHr: "Osamdeset eura.", exampleEn: "Eighty euros." },
    { id: "a1u7.devedeset", image: "/img/devedeset.png", hr: "devedeset", en: "ninety (90)", pos: "num", icon: "🔢", exampleHr: "Devedeset devet eura.", exampleEn: "Ninety-nine euros." },
    { id: "a1u7.sto", image: "/img/sto.png", hr: "sto", en: "one hundred (100)", pos: "num", icon: "💯", exampleHr: "Sto eura.", exampleEn: "One hundred euros." },
    { id: "a1u7.tisuca", image: "/img/tisuca.png", hr: "tisuća", en: "one thousand (1000)", pos: "num", icon: "🔢", exampleHr: "Tisuća eura.", exampleEn: "One thousand euros." },
    { id: "a1u7.crven", image: "/img/crven.png", hr: "crven", en: "red (crvena f, crveno n)", pos: "adj", icon: "🔴", exampleHr: "Crveno vino.", exampleEn: "Red wine." },
    { id: "a1u7.plav", image: "/img/plav.png", hr: "plav", en: "blue (plava f, plavo n)", pos: "adj", icon: "🔵", exampleHr: "Plavo more.", exampleEn: "The blue sea." },
    { id: "a1u7.zelen", image: "/img/zelen.png", hr: "zelen", en: "green (zelena f, zeleno n)", pos: "adj", icon: "🟢", exampleHr: "Zelena jabuka.", exampleEn: "A green apple." },
    { id: "a1u7.zut", image: "/img/zut.png", hr: "žut", en: "yellow (žuta f, žuto n)", pos: "adj", icon: "🟡", exampleHr: "Sir je žut.", exampleEn: "The cheese is yellow." },
    { id: "a1u7.crn", image: "/img/crn.png", hr: "crn", en: "black (crna f, crno n)", pos: "adj", icon: "⚫", exampleHr: "Crna kava.", exampleEn: "Black coffee." },
    { id: "a1u7.bijel", image: "/img/bijel.png", hr: "bijel", en: "white (bijela f, bijelo n)", pos: "adj", icon: "⚪", exampleHr: "Bijelo vino.", exampleEn: "White wine." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Koliko košta?",
      subtitle: "Count to a thousand and read real price tags — Košta pet eura i pedeset centi.",
      emoji: "🏷️",
      items: [
        { emoji: "🔢", label: "Tens to 1000", hint: "dvadeset … sto, tisuća" },
        { emoji: "🏷️", label: "Prices & colours", hint: "Koliko košta? · crveno / bijelo" },
        { emoji: "✍️", label: "Read & write prices", hint: "€45, €99, €5,50" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Numbers to a thousand",
      subtitle: "Tens plus ones — dvadeset pet — and your ear gets the workout (numbers are heard, not read).",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "the number bracket (L3)" },
        { emoji: "🧱", label: "Build the number", hint: "pedeset + šest = 56" },
        { emoji: "🎧", label: "Dictation ×3", hint: "type the number you hear" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the bracket (L3)",
      items: [
        {
          prompt: "From L3: pet ___ (five euros)",
          options: ["eura", "euro", "eurima"],
          correctIndex: 0,
          explanation: "5+ → GEN pl: eura.",
        },
        {
          prompt: "From L3: two coffees — dva or dvije?",
          options: ["dvije kave", "dva kave", "dva kava"],
          correctIndex: 0,
          explanation: "kava is feminine → dvije kave.",
        },
        {
          prompt: "Listen: how much does it cost?",
          tts: "Košta dva eura.",
          options: ["two euros", "five euros", "twelve euros"],
          correctIndex: 0,
          explanation: "dva eura = two euros (2–4 → GEN sg).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the tens & colours",
      vocabIds: [
        "a1u7.dvadeset", "a1u7.trideset", "a1u7.cetrdeset", "a1u7.pedeset",
        "a1u7.sezdeset", "a1u7.sedamdeset", "a1u7.osamdeset", "a1u7.devedeset",
        "a1u7.sto", "a1u7.tisuca",
        "a1u7.crven", "a1u7.plav", "a1u7.zelen", "a1u7.zut", "a1u7.crn", "a1u7.bijel",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Tens to 1000, and building compounds",
      body:
        "The tens: **dvadeset** (20), **trideset** (30), **četrdeset** (40), **pedeset** (50), **šezdeset** (60), **sedamdeset** (70), **osamdeset** (80), **devedeset** (90), **sto** (100), **tisuća** (1000).\n\nBuild anything in between by saying the **ten, then the one**: pedeset + šest = **pedeset šest** (56), dvadeset + pet = **dvadeset pet** (25), devedeset + devet = **devedeset devet** (99).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Numbers are an ear skill",
        text: "You'll hear prices far more than read them. Say the ten first, then the one — no “and”: dvadeset pet, not dvadeset i pet.",
      },
      table: {
        caption: "Number builder: tens + ones",
        headers: ["tens", "+ ones", "= number"],
        rows: [
          ["dvadeset (20)", "pet (5)", "dvadeset pet (25)"],
          ["pedeset (50)", "šest (6)", "pedeset šest (56)"],
          ["devedeset (90)", "devet (9)", "devedeset devet (99)"],
        ],
      },
      examples: [
        { hr: "Trideset sedam.", en: "Thirty-seven (37).", note: "trideset + sedam" },
        { hr: "Pedeset dva.", en: "Fifty-two (52).", note: "pedeset + dva" },
        { hr: "Sto eura.", en: "One hundred euros." },
        { hr: "Tisuća eura.", en: "One thousand euros." },
        { hr: "Osamdeset centi.", en: "Eighty cents." },
      ],
    },
    {
      id: "s06",
      type: "listen-type",
      tts: "Trideset sedam",
      answers: ["trideset sedam", "37"],
      explanation: "trideset sedam = 37.",
    },
    {
      id: "s07",
      type: "listen-type",
      tts: "Devedeset devet",
      answers: ["devedeset devet", "99"],
      explanation: "devedeset devet = 99.",
    },
    {
      id: "s08",
      type: "listen-type",
      tts: "Pedeset šest",
      answers: ["pedeset šest", "pedeset sest", "56"],
      explanation: "pedeset šest = 56.",
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Prices & colours",
      subtitle: "Ask a price, understand the answer, and describe things by colour.",
      emoji: "🏷️",
      items: [
        { emoji: "❓", label: "Koliko košta?", hint: "and koštaju for plurals" },
        { emoji: "🎨", label: "Colour agreement", hint: "crveno vino · crna kava" },
        { emoji: "⌨️", label: "Write prices", hint: "Košta 45 eura." },
      ],
    },
    {
      id: "s10",
      type: "teach",
      title: "Koliko košta? — prices & colours",
      body:
        "Ask a price with **Koliko košta?** (how much does it cost?) for one thing, **Koliko koštaju?** for several — the verb agrees:\n\n- Kava **košta** dva eura. (singular)\n- Jabuke **koštaju** tri eura. (plural)\n\nRead a price like a local: **Košta pet eura i pedeset centi** (€5,50 — a comma, not a point!).\n\n**Colours** are adjectives and agree just like *dobar/dobra/dobro*: **crven** → crvena (f) / crveno (n). So **crveno vino**, **bijelo vino**, **crna kava**, **zelena jabuka**, **žut sir**, **plavo more**.",
      diagram: {
        kind: "contrast",
        left: {
          title: "one thing → košta",
          emoji: "☕",
          lines: [
            { hr: "Kava košta dva eura.", en: "The coffee costs two euros." },
            { hr: "Koliko košta kruh?", en: "How much is the bread?" },
          ],
        },
        right: {
          title: "several → koštaju",
          emoji: "🍎",
          lines: [
            { hr: "Jabuke koštaju tri eura.", en: "The apples cost three euros." },
            { hr: "Koliko koštaju knjige?", en: "How much are the books?" },
          ],
        },
      },
      examples: [
        { hr: "Košta pet eura i pedeset centi.", en: "It costs five euros and fifty cents (€5,50)." },
        { hr: "Crveno vino košta deset eura.", en: "The red wine costs ten euros.", note: "crveno + vino (n)" },
        { hr: "Crna kava je jeftina.", en: "Black coffee is cheap.", note: "crna + kava (f)" },
        { hr: "Koliko koštaju jabuke?", en: "How much are the apples?", note: "plural → koštaju" },
      ],
    },
    {
      id: "s11",
      type: "quiz-set",
      title: "Quick check: košta or koštaju?",
      items: [
        {
          prompt: "Kava ___ dva eura. (costs — one thing)",
          options: ["košta", "koštaju", "koštam"],
          correctIndex: 0,
          explanation: "One thing → košta.",
        },
        {
          prompt: "Jabuke ___ tri eura. (cost — several)",
          options: ["koštaju", "košta", "koštate"],
          correctIndex: 0,
          explanation: "Plural subject → koštaju.",
        },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "Košta ___ eura i pedeset centi.",
      blanks: [["pet"]],
      translation: "It costs five euros and fifty cents (€5,50).",
      wordBank: ["pet", "petnaest", "pedeset"],
      explanation: "€5,50 = pet eura i pedeset centi.",
    },
    {
      id: "s13",
      type: "fill",
      text: "___ vino košta deset eura.",
      blanks: [["Crveno"]],
      translation: "Red wine costs ten euros.",
      wordBank: ["Crveno", "Crvena", "Crven"],
      explanation: "vino is neuter → crveno (the -o ending).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “It costs 45 euros.” (Košta …)",
      answers: ["Košta četrdeset pet eura.", "Košta četrdeset pet eura", "košta četrdeset pet eura", "Kosta cetrdeset pet eura."],
      explanation: "45 = četrdeset pet; 5+ → eura (GEN pl).",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “The books cost 20 euros.” (Knjige …)",
      answers: ["Knjige koštaju dvadeset eura.", "Knjige koštaju dvadeset eura", "knjige koštaju dvadeset eura", "Knjige kostaju dvadeset eura."],
      explanation: "Plural subject → koštaju; 20 = dvadeset; eura (GEN pl).",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Koliko", "koštaju", "knjige"],
      answers: ["Koliko koštaju knjige?", "Koliko koštaju knjige"],
      en: "How much do the books cost?",
      explanation: "Koliko + koštaju (plural verb) + knjige.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: the bracket under bigger numbers (L3)",
      items: [
        {
          prompt: "dvadeset dva ___ (22 euros — last digit is 2)",
          options: ["eura", "euro", "eurima"],
          correctIndex: 0,
          explanation: "The last digit rules: 2 → GEN sg, so dvadeset dva eura.",
        },
        {
          prompt: "dvadeset jedan ___ (21 euros — last digit is 1)",
          options: ["euro", "eura", "eurima"],
          correctIndex: 0,
          explanation: "Last digit 1 → NOM sg: dvadeset jedan euro.",
        },
        {
          prompt: "Listen: what's the price?",
          tts: "Sedamdeset pet eura.",
          options: ["75 euros", "57 euros", "65 euros"],
          correctIndex: 0,
          explanation: "sedamdeset pet = 75.",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: how much does the wine cost?",
      tts: "Vino košta osamnaest eura.",
      options: ["18 euros", "80 euros", "8 euros"],
      correctIndex: 0,
      explanation: "osamnaest = 18 (careful: not osamdeset = 80).",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Koliko košta kava?",
      targetEn: "ask the price aloud — How much does the coffee cost?",
      phonetic: "KO-lee-ko KOSH-ta KA-va",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key:** tens to 1000 — **dvadeset, trideset … devedeset, sto, tisuća** — built as ten-then-one (**pedeset šest** = 56).\n\nPrices: **Koliko košta?** (one) vs **Koliko koštaju?** (several); **Košta pet eura i pedeset centi** (€5,50).\n\n**Colours** agree like adjectives: crven → crvena/crveno (crveno vino, crna kava).\n\nNext lesson: put it all together in the shop — **U trgovini** — trying on clothes and haggling.",
      vocabIds: [
        "a1u7.dvadeset", "a1u7.trideset", "a1u7.cetrdeset", "a1u7.pedeset",
        "a1u7.sezdeset", "a1u7.sedamdeset", "a1u7.osamdeset", "a1u7.devedeset",
        "a1u7.sto", "a1u7.tisuca",
        "a1u7.crven", "a1u7.plav", "a1u7.zelen", "a1u7.zut", "a1u7.crn", "a1u7.bijel",
      ],
    },
  ],
  srsCloze: [
    { front: "Number 56 = pedeset ___", answers: ["šest", "sest"], back: "pedeset šest (56) — ten first, then the one.", tts: "Pedeset šest." },
    { front: "Number 99 = devedeset ___", answers: ["devet"], back: "devedeset devet (99).", tts: "Devedeset devet." },
    { front: "Kava ___ dva eura. (costs — one thing)", answers: ["košta", "kosta"], back: "Kava košta dva eura.", tts: "Kava košta dva eura." },
    { front: "Jabuke ___ tri eura. (cost — several)", answers: ["koštaju", "kostaju"], back: "Jabuke koštaju tri eura. (plural → koštaju)", tts: "Jabuke koštaju tri eura." },
    { front: "€5,50 = pet eura i pedeset ___", answers: ["centi"], back: "pet eura i pedeset centi (5+ → centi, GEN pl).", tts: "Pet eura i pedeset centi." },
    { front: "Red wine (neuter vino): ___ vino", answers: ["crveno"], back: "crveno vino — vino is neuter, so -o.", tts: "Crveno vino." },
    { front: "Black coffee (feminine kava): ___ kava", answers: ["crna"], back: "crna kava — kava is feminine, so -a.", tts: "Crna kava." },
    { front: "100 = ___", answers: ["sto"], back: "sto = 100." },
    { front: "1000 = ___", answers: ["tisuća", "tisuca"], back: "tisuća = 1000." },
  ],
  notes: {
    inOneSentence: {
      en: "Tens combine with ones (pedeset šest); ask prices with Koliko košta?/koštaju, and colours agree like adjectives.",
      exampleHr: "dvadeset pet · Koliko košta? · crveno vino",
    },
    deepDive: [
      {
        title: "Tens to a thousand & compounds",
        body:
          "The tens are **dvadeset (20), trideset (30), četrdeset (40), pedeset (50), šezdeset (60), sedamdeset (70), osamdeset (80), devedeset (90)**, then **sto (100)** and **tisuća (1000)**. Compounds are simply ten-then-one, no “and”: **dvadeset pet** (25), **pedeset šest** (56), **devedeset devet** (99).\n\nWatch the classic ear-trap: **osamnaest** (18) vs **osamdeset** (80), **sedamnaest** (17) vs **sedamdeset** (70) — one syllable decides ten-times the price.",
        table: {
          caption: "Tens & a few compounds",
          headers: ["number", "Croatian"],
          rows: [
            ["20 / 25", "dvadeset / dvadeset pet"],
            ["50 / 56", "pedeset / pedeset šest"],
            ["90 / 99", "devedeset / devedeset devet"],
            ["100 / 1000", "sto / tisuća"],
          ],
        },
      },
      {
        title: "Prices, the verb switch & colours",
        body:
          "**Koliko košta?** asks the price of one thing; **Koliko koštaju?** of several — the verb koštati agrees with the subject (Kava **košta** / Jabuke **koštaju**). Croatian writes decimals with a comma: **€5,50** is spoken *pet eura i pedeset centi*. Remember the bracket still applies inside a compound: the **last digit** rules — dvadeset jedan **euro** (21), dvadeset dva **eura** (22).\n\n**Colours** are ordinary adjectives (agreement from Units 2–3): crven → **crvena** (f) / **crveno** (n). In L5 they'll decline into the accusative with clothes (crnu jaknu).",
        diagram: {
          kind: "contrast",
          left: {
            title: "singular → košta",
            emoji: "☕",
            lines: [{ hr: "Kava košta dva eura.", en: "The coffee costs two euros." }],
          },
          right: {
            title: "plural → koštaju",
            emoji: "🍎",
            lines: [{ hr: "Jabuke koštaju tri eura.", en: "The apples cost three euros." }],
          },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "dvadeset i pet",
        right: "dvadeset pet",
        why: "Croatian compounds don't insert “and” between the ten and the one.",
      },
      {
        wrong: "osamdeset (for 18)",
        right: "osamnaest",
        why: "18 is osamnaest; osamdeset is 80 — listen for the -naest vs -deset ending.",
      },
      {
        wrong: "Jabuke košta tri eura",
        right: "Jabuke koštaju tri eura",
        why: "A plural subject takes the plural verb koštaju.",
      },
      {
        wrong: "crven vino",
        right: "crveno vino",
        why: "vino is neuter, so the colour agrees as crveno (-o).",
      },
    ],
    memoryHooks: [
      "Ten first, then the one — dvadeset pet, no “and”.",
      "-naest = teen (osamnaest 18), -deset = ten-times (osamdeset 80).",
      "One thing košta, many things koštaju.",
    ],
    connects: [
      { label: "The 1 · 2–4 · 5+ bracket these prices ride on (Unit 7 L3)", lessonId: "a1u7l3" },
      { label: "Numbers 1–20 this builds on (Unit 2 L4)", lessonId: "a1u2l4" },
      { label: "Next: colours + clothes in the shop (Unit 7 L5)", lessonId: "a1u7l5" },
    ],
    selfCheck: [
      { q: "How do you say 56?", a: "pedeset šest — ten first, then the one." },
      { q: "How do you ask the price of one thing vs several?", a: "Koliko košta? (one) / Koliko koštaju? (several)." },
      { q: "How do you read €5,50 aloud?", a: "pet eura i pedeset centi." },
      { q: "What's 18 vs 80 in Croatian?", a: "osamnaest (18) vs osamdeset (80)." },
      { q: "How does “red” agree with vino and kava?", a: "crveno vino (neuter -o), crvena kava (feminine -a)." },
    ],
  },
};
