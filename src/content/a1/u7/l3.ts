import type { Lesson } from "@/types/content";

/**
 * A1 U7 L3 — Dva piva, pet kava (Numbers govern cases)
 * Spec: curriculum/A1/unit-7.md · grammar-reference §13 (number government), §3.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: number government as a drilled pattern — 1 → NOM sg · 2–4 → GEN sg
 * · 5+ → GEN pl. GEN pl forms (eura, kava, piva, sati, centi) given as vocabulary.
 * Payoff: U6's "pet sati" decoded. dva (m/n) vs dvije (f) flagged. Price question
 * frames Koliko košta?/koštaju wait for L4 — here only 3sg košta in statements.
 * račun recycled (U4). platiti carded but light; Želim platiti glossed on-slide.
 */
export const a1u7l3: Lesson = {
  id: "a1u7l3",
  unitId: "a1u7",
  title: "Dva piva, pet kava",
  titleEn: "Numbers govern the noun",
  grammarTags: ["number-government", "genitive"],
  estMinutes: 18,
  vocab: [
    { id: "a1u7.novac", hr: "novac", en: "money", pos: "noun", gender: "m", icon: "💰", exampleHr: "Nema novca.", exampleEn: "There's no money." },
    { id: "a1u7.cijena", hr: "cijena", en: "price", pos: "noun", gender: "f", icon: "🏷️", exampleHr: "Cijena je dobra.", exampleEn: "The price is good." },
    { id: "a1u7.euro", hr: "euro", en: "euro", pos: "noun", gender: "m", icon: "💶", exampleHr: "Pet eura.", exampleEn: "Five euros." },
    { id: "a1u7.cent", hr: "cent", en: "cent", pos: "noun", gender: "m", icon: "🪙", exampleHr: "Pedeset centi.", exampleEn: "Fifty cents." },
    { id: "a1u7.kostati", hr: "koštati", en: "to cost (košta)", pos: "verb", icon: "💲", exampleHr: "Pivo košta dva eura.", exampleEn: "The beer costs two euros." },
    { id: "a1u7.platiti", hr: "platiti", en: "to pay", pos: "verb", icon: "💳", exampleHr: "Želim platiti.", exampleEn: "I want to pay." },
    { id: "a1u7.jeftin", hr: "jeftin", en: "cheap (jeftina f, jeftino n)", pos: "adj", icon: "🤑", exampleHr: "Kava je jeftina.", exampleEn: "The coffee is cheap." },
    { id: "a1u7.skup", hr: "skup", en: "expensive (skupa f, skupo n)", pos: "adj", icon: "💎", exampleHr: "Vino je skupo.", exampleEn: "The wine is expensive." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dva piva, pet kava",
      subtitle: "Numbers boss the noun around. Learn the 1 · 2–4 · 5+ bracket once — it's everywhere.",
      emoji: "🍺",
      items: [
        { emoji: "🔢", label: "The number bracket", hint: "1 · 2–4 · 5+ pick the form" },
        { emoji: "💰", label: "Money words", hint: "novac, cijena, euro, cent" },
        { emoji: "✍️", label: "Count & pay", hint: "order two beers, five coffees" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The number bracket",
      subtitle: "Three brackets, three forms — the pattern behind dva eura and pet eura.",
      emoji: "🔢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "nema + genitive (L2)" },
        { emoji: "📐", label: "1 · 2–4 · 5+", hint: "NOM sg · GEN sg · GEN pl" },
        { emoji: "✅", label: "Quick check", hint: "number → pick the form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: there isn't any (L2)",
      items: [
        {
          prompt: "From L2: There's no bread — Nema ___.",
          options: ["kruha", "kruh", "kruhu"],
          correctIndex: 0,
          explanation: "nema + genitive: kruh → kruha.",
        },
        {
          prompt: "From L2: “from Canada” — iz ___.",
          options: ["Kanade", "Kanada", "Kanadu"],
          correctIndex: 0,
          explanation: "iz + genitive: Kanada → Kanade.",
        },
        {
          prompt: "Listen: what's missing?",
          tts: "Nema mlijeka.",
          options: ["milk", "bread", "water"],
          correctIndex: 0,
          explanation: "Nema mlijeka — there's no milk.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's money words",
      vocabIds: [
        "a1u7.novac", "a1u7.cijena", "a1u7.euro", "a1u7.cent",
        "a1u7.kostati", "a1u7.platiti", "a1u7.jeftin", "a1u7.skup",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The number bracket: 1 · 2–4 · 5+",
      body:
        "In Croatian the **number** decides the noun's form. Learn it as one fixed pattern:\n\n- **1** → **NOM singular**: jedan euro, jedna kava, jedno pivo\n- **2, 3, 4** → **GEN singular**: dva eura, tri piva, četiri eura\n- **5 and up** → **GEN plural**: pet eura, pet kava, pet piva\n\nAnd the gender split you must not miss: **dva** for masculine/neuter (dva eura, dva piva) but **dvije** for feminine (**dvije** kave).",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "1", rule: "NOM singular", example: "jedan euro", caseId: "NOM" },
          { label: "2 · 3 · 4", rule: "GEN singular", example: "dva eura", caseId: "GEN" },
          { label: "5 +", rule: "GEN plural", example: "pet eura", caseId: "GEN" },
        ],
      },
      table: {
        caption: "The bracket across three nouns",
        headers: ["", "1 (NOM sg)", "2–4 (GEN sg)", "5+ (GEN pl)"],
        colCase: [null, "NOM", "GEN", "GEN"],
        rows: [
          ["euro (m)", "jedan euro", "dva eura", "pet eura"],
          ["kava (f)", "jedna kava", "dvije kave", "pet kava"],
          ["pivo (n)", "jedno pivo", "dva piva", "pet piva"],
        ],
      },
      examples: [
        { hr: "Jedan euro.", en: "One euro.", note: "1 → NOM sg", highlight: { text: "euro", caseId: "NOM" } },
        { hr: "Dva eura.", en: "Two euros.", note: "2–4 → GEN sg", highlight: { text: "eura", caseId: "GEN" } },
        { hr: "Pet eura.", en: "Five euros.", note: "5+ → GEN pl", highlight: { text: "eura", caseId: "GEN" } },
        { hr: "Dvije kave, molim.", en: "Two coffees, please.", note: "feminine → dvije + kave", highlight: { text: "kave", caseId: "GEN" } },
        { hr: "Pet kava, molim.", en: "Five coffees, please.", note: "5+ → GEN pl kava", highlight: { text: "kava", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: number → form",
      items: [
        {
          prompt: "dva ___ (two beers)",
          options: ["piva", "pivo", "pive"],
          correctIndex: 0,
          explanation: "2–4 → GEN sg: pivo → piva.",
        },
        {
          prompt: "pet ___ (five euros)",
          options: ["eura", "euro", "eurima"],
          correctIndex: 0,
          explanation: "5+ → GEN pl: eura.",
        },
        {
          prompt: "Two coffees — dva or dvije?",
          options: ["dvije kave", "dva kave", "dva kava"],
          correctIndex: 0,
          explanation: "kava is feminine → dvije kave.",
        },
        {
          prompt: "jedno ___ (one beer)",
          options: ["pivo", "piva", "pive"],
          correctIndex: 0,
          explanation: "1 → NOM sg: jedno pivo.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Money words: novac, cijena, jeftin, skup",
      body:
        "Now the money vocabulary that rides on the bracket. **novac** (money), **cijena** (price), **euro** and **cent** — *jedan euro, dva eura, pet eura*; *pet centi*.\n\nThe verb **koštati** (to cost): *Pivo **košta** dva eura.* Prices are **jeftin** (cheap) or **skup** (expensive) — adjectives that agree: kava je **jeftina**, vino je **skupo**.\n\nAnd **platiti** (to pay): *Želim **platiti**, molim.* (Želim + verb = *I want to* — like Želim jednu kavu, now with an action.)",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "dva piva looks like pet piva — but it's not luck",
        text: "For pivo, GEN sg and GEN pl happen to match (piva). For kava they differ: dvije kave (GEN sg) vs pet kava (GEN pl). Always check the number.",
      },
      examples: [
        { hr: "Pivo košta dva eura.", en: "The beer costs two euros.", note: "košta + 2–4 → eura" },
        { hr: "Kava je jeftina, vino je skupo.", en: "The coffee is cheap, the wine is expensive.", note: "jeftina (f), skupo (n)" },
        { hr: "Nema novca.", en: "There's no money.", note: "novac → novca (nema + GEN)" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the money word to English",
      pairs: [
        { a: "novac", b: "money" },
        { a: "cijena", b: "price" },
        { a: "koštati", b: "to cost" },
        { a: "jeftin", b: "cheap" },
        { a: "skup", b: "expensive" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Count & pay",
      subtitle: "Order in twos and fives, take dictation, and decode Unit 6's clock.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the count", hint: "dva piva · dvije kave · pet kava" },
        { emoji: "⌨️", label: "Type two orders", hint: "tri piva · pet kava" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🕔", label: "pet sati decoded", hint: "Unit 6's time, explained" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Dva ___, molim.",
      blanks: [["piva"]],
      translation: "Two beers, please.",
      wordBank: ["piva", "pivo", "pive"],
      explanation: "2–4 → GEN sg: pivo → piva.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Pet ___, molim.",
      blanks: [["kava"]],
      translation: "Five coffees, please.",
      wordBank: ["kava", "kave", "kavu"],
      explanation: "5+ → GEN pl: kava.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Dvije ___, molim.",
      blanks: [["kave"]],
      translation: "Two coffees, please.",
      wordBank: ["kave", "kava", "kavu"],
      explanation: "2–4 → GEN sg, and feminine → dvije: dvije kave.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “three beers”",
      answers: ["tri piva", "Tri piva"],
      explanation: "3 → GEN sg: tri piva.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “five coffees”",
      answers: ["pet kava", "Pet kava"],
      explanation: "5+ → GEN pl: pet kava.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Dva piva, molim.",
      explanation: "Dva piva, molim — two beers, please (2–4 → piva).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Dvije kave i jedno pivo.",
      explanation: "Dvije kave i jedno pivo — two coffees and one beer (dvije kave, jedno pivo).",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: Unit 6's clock, decoded",
      items: [
        {
          prompt: "Unit 6: “five o'clock” is pet sati. Why sati?",
          options: ["5+ takes the genitive plural", "it's the accusative", "sati is just the singular"],
          correctIndex: 0,
          explanation: "pet is 5+ → GEN pl → sati. The chunk is now explained!",
        },
        {
          prompt: "“two o'clock” — dva ___.",
          options: ["sata", "sati", "sat"],
          correctIndex: 0,
          explanation: "2–4 → GEN sg: dva sata (just like dva eura).",
        },
        {
          prompt: "Listen: how much does Ana have?",
          tts: "Ana ima pet eura.",
          options: ["five euros", "two euros", "one euro"],
          correctIndex: 0,
          explanation: "pet eura = five euros (5+ → GEN pl).",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: how much does the beer cost?",
      tts: "Pivo košta dva eura.",
      options: ["two euros", "five euros", "one euro"],
      correctIndex: 0,
      explanation: "košta dva eura = costs two euros.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Dva piva, molim.",
      targetEn: "order two beers aloud — Two beers, please.",
      phonetic: "dvah PEE-vah, MO-leem",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key — the number bracket:**\n\n- **1** → NOM sg (jedan euro)\n- **2–4** → GEN sg (dva eura, dvije kave)\n- **5+** → GEN pl (pet eura, pet kava)\n\nMind the gender split: **dva** (m/n) vs **dvije** (f). And Unit 6's **pet sati** is now explained — 5+ → genitive plural.\n\nNext lesson: bigger numbers to 1000 and real price tags — **Koliko košta?**",
      vocabIds: [
        "a1u7.novac", "a1u7.cijena", "a1u7.euro", "a1u7.cent",
        "a1u7.kostati", "a1u7.platiti", "a1u7.jeftin", "a1u7.skup",
      ],
    },
  ],
  srsCloze: [
    { front: "Dva ___. (pivo)", answers: ["piva"], back: "Dva piva. (2–4 → GEN sg)", tts: "Dva piva." },
    { front: "Dvije ___. (kava)", answers: ["kave"], back: "Dvije kave. (2–4 → GEN sg; feminine → dvije)", tts: "Dvije kave." },
    { front: "Pet ___. (kava)", answers: ["kava"], back: "Pet kava. (5+ → GEN pl)", tts: "Pet kava." },
    { front: "Pet ___. (euro)", answers: ["eura"], back: "Pet eura. (5+ → GEN pl)", tts: "Pet eura." },
    { front: "Jedan ___. (euro)", answers: ["euro"], back: "Jedan euro. (1 → NOM sg)", tts: "Jedan euro." },
    { front: "Pet ___. (sat — o'clock)", answers: ["sati"], back: "Pet sati. (5+ → GEN pl — Unit 6's clock decoded)", tts: "Pet sati." },
    { front: "Dva ___. (sat — o'clock)", answers: ["sata"], back: "Dva sata. (2–4 → GEN sg)", tts: "Dva sata." },
    { front: "Two coffees — dva or dvije? ___ kave", answers: ["dvije"], back: "dvije kave — kava is feminine, so dvije, not dva." },
    { front: "Nema ___. (novac)", answers: ["novca"], back: "Nema novca. (novac → novca, fleeting a)", tts: "Nema novca." },
  ],
  notes: {
    inOneSentence: {
      en: "A number sets the noun's form: 1 → NOM sg, 2–4 → GEN sg, 5+ → GEN pl (with dva for m/n, dvije for f).",
      exampleHr: "jedan euro · dva eura · pet eura · dvije kave",
    },
    deepDive: [
      {
        title: "The number-government bracket",
        body:
          "Croatian numbers govern the following noun. Memorize it as a bracket, not a theory:\n\n- **1** (jedan/jedna/jedno) → **nominative singular**, agreeing like an adjective\n- **2, 3, 4** → **genitive singular** (the historical “dual”): dva eura, tri piva, četiri kave\n- **5 and above** (and 11–20) → **genitive plural**: pet eura, deset kava\n\nThe genitive-plural forms are given here as vocabulary — eura, kava, piva, sati, centi — so you can use the pattern before the full GEN-plural rules arrive in A2. Note: euro's GEN sg and GEN pl are both **eura**, and pivo's are both **piva**, so those two hide the difference — but **kava** shows it clearly: **dvije kave** (2–4) vs **pet kava** (5+).",
        table: {
          caption: "The bracket in full",
          headers: ["number", "form", "euro", "kava", "pivo"],
          rows: [
            ["1", "NOM sg", "jedan euro", "jedna kava", "jedno pivo"],
            ["2 · 3 · 4", "GEN sg", "dva eura", "dvije kave", "dva piva"],
            ["5 +", "GEN pl", "pet eura", "pet kava", "pet piva"],
          ],
        },
      },
      {
        title: "dva vs dvije, and Unit 6's clock",
        body:
          "**Only the number 2 shows gender**: **dva** with masculine/neuter (dva eura, dva piva, dva sata), **dvije** with feminine (dvije kave, dvije boce). 3 and 4 don't change (tri, četiri).\n\nThis pattern silently powers Unit 6's clock: *jedan sat* (1:00), *dva/tri/četiri **sata*** (2–4:00), *pet+ **sati*** (5:00 and up). It's the same bracket — sat → sata (GEN sg) → sati (GEN pl).",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "1", rule: "NOM sg", example: "jedan sat (1:00)", caseId: "NOM" },
            { label: "2–4", rule: "GEN sg", example: "dva sata (2:00)", caseId: "GEN" },
            { label: "5+", rule: "GEN pl", example: "pet sati (5:00)", caseId: "GEN" },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "dva kave",
        right: "dvije kave",
        why: "kava is feminine, so the number 2 is dvije, not dva.",
      },
      {
        wrong: "pet eura is wrong because it looks singular",
        right: "pet eura is correct",
        why: "eura here is the GEN plural of euro (it just looks like the GEN sg) — 5+ always takes GEN pl.",
      },
      {
        wrong: "tri pivo",
        right: "tri piva",
        why: "2–4 take the genitive singular: pivo → piva.",
      },
      {
        wrong: "pet euri / pet euro",
        right: "pet eura",
        why: "The GEN plural of euro is eura; use it for 5 and above.",
      },
    ],
    memoryHooks: [
      "Bracket chant: “one nominative, two-three-four genitive-singular, five-plus genitive-plural.”",
      "Only 2 dresses for gender: dva (m/n), dvije (f).",
      "pet sati was never a mystery — it's just 5+ → genitive plural.",
    ],
    connects: [
      { label: "The genitive endings the bracket uses (Unit 7 L1)", lessonId: "a1u7l1" },
      { label: "Unit 6's time chunks this decodes (Unit 6 L2)", lessonId: "a1u6l2" },
      { label: "Next: big numbers & prices (Unit 7 L4)", lessonId: "a1u7l4" },
    ],
    selfCheck: [
      { q: "What form does 1 take? And 2–4? And 5+?", a: "1 → NOM sg; 2–4 → GEN sg; 5+ → GEN pl." },
      { q: "How do you say “two coffees”?", a: "dvije kave — feminine, so dvije + GEN sg kave." },
      { q: "How do you say “five euros”?", a: "pet eura — 5+ → GEN pl eura." },
      { q: "Why is Unit 6's pet sati genitive plural?", a: "pet is 5+, which governs the genitive plural: sati." },
      { q: "When is 2 dva and when dvije?", a: "dva with masculine/neuter, dvije with feminine." },
    ],
  },
};
