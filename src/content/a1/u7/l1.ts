import type { Lesson } from "@/types/content";

/**
 * A1 U7 L1 — Čaša vode (GEN singular: quantities)
 * Spec: curriculum/A1/unit-7.md · grammar-reference §3 (GEN sg), §13 (quantities).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet run through
 * the native proofread pass. Run `npm run proofread -- a1u7` and review before
 * relying on it.
 *
 * Level guard: GEN singular only. Endings masc/neut -a (sira, mlijeka), fem -e
 * (vode, kave). Use #1 = quantity + GEN. NOM/ACC recycled; no GEN plural, no
 * prepositions yet (iz/od/do land in L2, numbers in L3). Bridge from Unit 6.
 */
export const a1u7l1: Lesson = {
  id: "a1u7l1",
  unitId: "a1u7",
  title: "Čaša vode",
  titleEn: "A glass of water — the genitive (quantities)",
  grammarTags: ["genitive-singular", "quantities"],
  estMinutes: 18,
  vocab: [
    { id: "a1u7.casa", image: "/img/casa.png", hr: "čaša", en: "glass", pos: "noun", gender: "f", icon: "🥛", exampleHr: "Molim čašu vode.", exampleEn: "A glass of water, please." },
    { id: "a1u7.boca", image: "/img/boca.png", hr: "boca", en: "bottle", pos: "noun", gender: "f", icon: "🍾", exampleHr: "Boca vina, molim.", exampleEn: "A bottle of wine, please." },
    { id: "a1u7.salica", image: "/img/salica.png", hr: "šalica", en: "cup", pos: "noun", gender: "f", icon: "☕", exampleHr: "Šalica kave, molim.", exampleEn: "A cup of coffee, please." },
    { id: "a1u7.kilogram", image: "/img/kilogram.png", hr: "kilogram", en: "kilogram", pos: "noun", gender: "m", icon: "⚖️", exampleHr: "Kilogram sira, molim.", exampleEn: "A kilo of cheese, please." },
    { id: "a1u7.litra", image: "/img/litra.png", hr: "litra", en: "litre", pos: "noun", gender: "f", icon: "🧴", exampleHr: "Litra mlijeka.", exampleEn: "A litre of milk." },
    { id: "a1u7.komad", image: "/img/komad.png", hr: "komad", en: "piece", pos: "noun", gender: "m", icon: "🍰", exampleHr: "Komad kruha.", exampleEn: "A piece of bread." },
    { id: "a1u7.puno", image: "/img/puno.png", hr: "puno", en: "a lot / much", pos: "adv", icon: "📚", exampleHr: "Ana ima puno posla.", exampleEn: "Ana has a lot of work." },
    { id: "a1u7.dosta", image: "/img/dosta.png", hr: "dosta", en: "enough", pos: "adv", icon: "👌", exampleHr: "Ovdje je dosta kruha.", exampleEn: "There's enough bread here." },
    { id: "a1u7.previse", image: "/img/previse.png", hr: "previše", en: "too much / too many", pos: "adv", icon: "🚫", exampleHr: "Previše soka!", exampleEn: "Too much juice!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Čaša vode",
      subtitle: "Case #3 arrives — the genitive, the “of” case. Čaša vode = a glass OF water.",
      emoji: "🥛",
      items: [
        { emoji: "🟢", label: "The genitive rule", hint: "masc/neut -a · fem -e" },
        { emoji: "🛒", label: "Quantity words", hint: "čaša, boca, kilogram, puno…" },
        { emoji: "✍️", label: "Write, hear & say", hint: "order a glass of water" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The genitive — the “of” case",
      subtitle: "You've been saying čaša vode-style phrases since the café. Today you see the ending.",
      emoji: "🟢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "your day & the clock (Unit 6)" },
        { emoji: "🟢", label: "-a / -e endings", hint: "sira · mlijeka · vode" },
        { emoji: "✅", label: "Quick check", hint: "pick the genitive form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: your day (Unit 6)",
      items: [
        {
          prompt: "From Unit 6: Ana ___ budi rano. (wakes up)",
          options: ["se", "si", "je"],
          correctIndex: 0,
          explanation: "Reflexive se, in second position: Ana se budi rano.",
        },
        {
          prompt: "From Unit 6: Nikad ___ učim navečer. (I never study in the evening)",
          options: ["ne", "nije", "nema"],
          correctIndex: 0,
          explanation: "nikad needs the double negative: Nikad ne učim.",
        },
        {
          prompt: "Listen: what time does he get up?",
          tts: "Budim se u sedam.",
          options: ["at seven", "at nine", "at noon"],
          correctIndex: 0,
          explanation: "u sedam = at seven. Unit 6's clock, warmed up.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's quantity words",
      vocabIds: [
        "a1u7.casa", "a1u7.boca", "a1u7.salica", "a1u7.kilogram",
        "a1u7.litra", "a1u7.komad", "a1u7.puno", "a1u7.dosta", "a1u7.previse",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The genitive: the “of” case",
      body:
        "Units 1–6 lived in two cases: **NOM** (the doer — blue) and **ACC** (the done-to — red). Meet case #3: the **genitive** (green) — the **“of”** case.\n\nWhen you name a **quantity** of something, the thing goes into the genitive:\n\n- masculine / neuter → **-a**: sir → sir**a**, mlijeko → mlijek**a**\n- feminine → **-e**: voda → vod**e**, kava → kav**e**\n\nSo *a glass of water* = **čaša vode**, *a kilo of cheese* = **kilogram sira**. You already ordered *kavu* (ACC) at the café — now you can also ask for *šalicu kave* (a cup **of** coffee).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The one rule for now",
        text: "“of X” after a quantity → genitive. Masc/neut add -a (sira, mlijeka); feminine swaps -a → -e (vode, kave).",
      },
      table: {
        caption: "The case table grows to three columns (NOM · ACC · GEN)",
        headers: ["", "NOM", "ACC", "GEN (“of”)"],
        colCase: [null, "NOM", "ACC", "GEN"],
        rows: [
          ["masc: sir", "sir", "sir", "sira"],
          ["neut: mlijeko", "mlijeko", "mlijeko", "mlijeka"],
          ["fem: voda", "voda", "vodu", "vode"],
        ],
      },
      examples: [
        { hr: "Čaša vode, molim.", en: "A glass of water, please.", note: "voda → vode (fem -e)", highlight: { text: "vode", caseId: "GEN" } },
        { hr: "Boca vina, molim.", en: "A bottle of wine, please.", note: "vino → vina (neut -a)", highlight: { text: "vina", caseId: "GEN" } },
        { hr: "Kilogram sira.", en: "A kilo of cheese.", note: "sir → sira (masc -a)", highlight: { text: "sira", caseId: "GEN" } },
        { hr: "Šalica kave.", en: "A cup of coffee.", note: "kava → kave (fem -e)", highlight: { text: "kave", caseId: "GEN" } },
        { hr: "Litra mlijeka.", en: "A litre of milk.", note: "mlijeko → mlijeka (neut -a)", highlight: { text: "mlijeka", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the genitive",
      items: [
        {
          prompt: "čaša ___ (a glass of water)",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "voda is feminine → -e: vode.",
        },
        {
          prompt: "kilogram ___ (a kilo of cheese)",
          options: ["sira", "sir", "siru"],
          correctIndex: 0,
          explanation: "sir is masculine → -a: sira.",
        },
        {
          prompt: "boca ___ (a bottle of wine)",
          options: ["vina", "vino", "vinu"],
          correctIndex: 0,
          explanation: "vino is neuter → -a: vina.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Amount words also take the genitive",
      body:
        "The same “of” genitive follows **amount** words — not just containers:\n\n- **puno** (a lot) · **malo** (a little, from Unit 2) · **dosta** (enough) · **previše** (too much)\n\n*puno posla* (a lot of work), *malo vremena* (a little time), *dosta kruha* (enough bread). And **komad** (a piece): *komad kruha*.\n\nWatch the two words whose stem shifts: **vrijeme → vremena** (time) and **posao → posla** (work) — you met both in earlier units.",
      diagram: {
        kind: "usage-map",
        caseId: "GEN",
        boxes: [
          {
            label: "QUANTITY — containers",
            examples: [
              { hr: "čaša vode", en: "a glass of water" },
              { hr: "boca vina", en: "a bottle of wine" },
            ],
          },
          {
            label: "QUANTITY — amounts",
            examples: [
              { hr: "puno posla", en: "a lot of work" },
              { hr: "malo vremena", en: "a little time" },
            ],
          },
        ],
      },
      examples: [
        { hr: "Imam malo vremena.", en: "I have a little time.", note: "vrijeme → vremena", highlight: { text: "vremena", caseId: "GEN" } },
        { hr: "Ana ima puno posla.", en: "Ana has a lot of work.", note: "posao → posla", highlight: { text: "posla", caseId: "GEN" } },
        { hr: "Ovdje je dosta kruha.", en: "There's enough bread here.", note: "kruh → kruha", highlight: { text: "kruha", caseId: "GEN" } },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each quantity phrase to English",
      pairs: [
        { a: "čaša vode", b: "a glass of water" },
        { a: "boca vina", b: "a bottle of wine" },
        { a: "šalica kave", b: "a cup of coffee" },
        { a: "kilogram sira", b: "a kilo of cheese" },
        { a: "litra mlijeka", b: "a litre of milk" },
        { a: "komad kruha", b: "a piece of bread" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Build the phrases, take dictation, and order out loud.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the ending", hint: "vode · sira · vremena" },
        { emoji: "⌨️", label: "Type two phrases", hint: "boca vode · puno vremena" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Order aloud", hint: "Molim čašu vode." },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Molim čašu ___.",
      blanks: [["vode"]],
      translation: "A glass of water, please.",
      wordBank: ["vode", "voda", "vodu"],
      explanation: "After a quantity the thing is genitive: voda → vode. (čašu itself is ACC — the whole phrase decoded!)",
    },
    {
      id: "s11",
      type: "fill",
      text: "Kilogram ___, molim.",
      blanks: [["sira"]],
      translation: "A kilo of cheese, please.",
      wordBank: ["sira", "sir", "siru"],
      explanation: "sir is masculine → genitive -a: sira.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Imam malo ___.",
      blanks: [["vremena"]],
      translation: "I have a little time.",
      wordBank: ["vremena", "vrijeme", "vremenu"],
      explanation: "vrijeme shifts its stem in the genitive: vremena.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “a bottle of water”",
      answers: ["boca vode", "Boca vode"],
      explanation: "boca + genitive of voda → boca vode.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “a lot of time”",
      answers: ["puno vremena", "Puno vremena"],
      explanation: "puno + genitive of vrijeme → puno vremena.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Molim čašu vode.",
      explanation: "Molim čašu vode — a glass of water, please (čašu ACC + vode GEN).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Kilogram sira, molim.",
      explanation: "Kilogram sira, molim — a kilo of cheese, please (sir → sira).",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: object vs quantity (Unit 4)",
      items: [
        {
          prompt: "Unit 4: “I'm drinking water” — Pijem ___.",
          options: ["vodu", "vode", "voda"],
          correctIndex: 0,
          explanation: "A direct object is ACC: vodu.",
        },
        {
          prompt: "But “a glass of water” — čaša ___.",
          options: ["vode", "vodu", "voda"],
          correctIndex: 0,
          explanation: "After a quantity it's genitive: vode. Same word, two cases!",
        },
        {
          prompt: "Listen: what is she ordering?",
          tts: "Molim šalicu kave.",
          options: ["a cup of coffee", "a glass of water", "a bottle of wine"],
          correctIndex: 0,
          explanation: "šalicu kave = a cup of coffee (kava → kave).",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: how much work does Tom have?",
      tts: "Tom ima puno posla.",
      options: ["a lot", "a little", "none"],
      correctIndex: 0,
      explanation: "puno posla = a lot of work (posao → posla).",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Molim čašu vode.",
      targetEn: "order a glass of water aloud — the whole genitive phrase!",
      phonetic: "MO-leem CHAH-shoo VO-deh",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key:** the **genitive** is the “of” case. After a **quantity**, the thing goes genitive — masc/neut **-a** (sir**a**, mlijek**a**), feminine **-e** (vod**e**, kav**e**).\n\nSo **čaša vode**, **kilogram sira**, **puno posla**, **malo vremena**. Amount words (puno, malo, dosta, previše) and pieces (komad) all take it too.\n\nNext lesson: **Nema kruha!** — the genitive for “there isn't any…”, and the prepositions **iz / od / do** (so *iz Kanade* finally makes sense).",
      vocabIds: [
        "a1u7.casa", "a1u7.boca", "a1u7.salica", "a1u7.kilogram",
        "a1u7.litra", "a1u7.komad", "a1u7.puno", "a1u7.dosta", "a1u7.previse",
      ],
    },
  ],
  srsCloze: [
    { front: "Molim čašu ___. (voda)", answers: ["vode"], back: "Molim čašu vode. (voda → vode, fem -e)", tts: "Molim čašu vode." },
    { front: "Kilogram ___, molim. (sir)", answers: ["sira"], back: "Kilogram sira, molim. (sir → sira, masc -a)", tts: "Kilogram sira, molim." },
    { front: "Boca ___. (vino)", answers: ["vina"], back: "Boca vina. (vino → vina, neut -a)", tts: "Boca vina." },
    { front: "Litra ___. (mlijeko)", answers: ["mlijeka"], back: "Litra mlijeka. (mlijeko → mlijeka)", tts: "Litra mlijeka." },
    { front: "Imam malo ___. (vrijeme)", answers: ["vremena"], back: "Imam malo vremena. (vrijeme → vremena)", tts: "Imam malo vremena." },
    { front: "Ana ima puno ___. (posao)", answers: ["posla"], back: "Ana ima puno posla. (posao → posla)", tts: "Ana ima puno posla." },
    { front: "Komad ___. (kruh)", answers: ["kruha"], back: "Komad kruha. (kruh → kruha)", tts: "Komad kruha." },
    { front: "Genitive of the feminine voda is: ___", answers: ["vode"], back: "voda → vode. Feminine -a swaps to -e in the genitive." },
    { front: "Genitive of the masculine sir is: ___", answers: ["sira"], back: "sir → sira. Masculine adds -a in the genitive." },
  ],
  notes: {
    inOneSentence: {
      en: "After a quantity word, the thing named goes into the genitive: masc/neut add -a, feminine changes -a to -e.",
      exampleHr: "čaša vode · kilogram sira · puno posla",
    },
    deepDive: [
      {
        title: "The genitive singular endings",
        body:
          "The **genitive** is Croatian's “of” case (green in this course). Its singular endings are the simplest of all the cases:\n\n- **masculine & neuter → -a**: sir → sir**a**, kruh → kruh**a**, mlijeko → mlijek**a**, vino → vin**a**\n- **feminine → -e**: voda → vod**e**, kava → kav**e**, čaša → čaš**e**\n\nTwo carry-over stems to remember: **vrijeme → vremena** (the -e/-me neuter type) and **posao → posla** (the fleeting a drops). The genitive masculine -a looks exactly like the animate accusative from Unit 4 (Čekam konobar**a**) — same shape, different job.",
        table: {
          caption: "Genitive singular — the full picture",
          headers: ["gender", "NOM", "GEN"],
          colCase: [null, "NOM", "GEN"],
          rows: [
            ["masculine", "sir, kruh", "sira, kruha"],
            ["neuter", "mlijeko, vino", "mlijeka, vina"],
            ["feminine", "voda, kava", "vode, kave"],
            ["special stems", "vrijeme, posao", "vremena, posla"],
          ],
        },
      },
      {
        title: "Use #1 — quantities",
        body:
          "The first and most concrete use of the genitive is **quantity + of**. Any measure — a container, a weight, or an amount word — puts the thing that follows into the genitive.\n\nContainers: **čaša** vode, **boca** vina, **šalica** kave. Weights/measures: **kilogram** sira, **litra** mlijeka. Amount words: **puno** posla, **malo** vremena, **dosta** kruha, **previše** soka. A single unit: **komad** kruha.",
        diagram: {
          kind: "usage-map",
          caseId: "GEN",
          boxes: [
            {
              label: "QUANTITY (this lesson)",
              examples: [
                { hr: "čaša vode", en: "a glass of water" },
                { hr: "kilogram sira", en: "a kilo of cheese" },
                { hr: "puno posla", en: "a lot of work" },
              ],
            },
            {
              label: "NEMA / FROM (next lesson)",
              examples: [
                { hr: "Nema kruha.", en: "There's no bread." },
                { hr: "iz Kanade", en: "from Canada" },
              ],
            },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "čaša voda",
        right: "čaša vode",
        why: "The thing after a quantity is genitive; feminine voda → vode.",
      },
      {
        wrong: "kilogram siro",
        right: "kilogram sira",
        why: "Masculine and neuter take -a in the genitive — never invent an -o form.",
      },
      {
        wrong: "puno vrijeme",
        right: "puno vremena",
        why: "vrijeme is the -me neuter type: its genitive stem is vremen- → vremena.",
      },
      {
        wrong: "boca vodu",
        right: "boca vode",
        why: "vodu is the accusative (an object you drink); after a quantity it's the genitive vode.",
      },
    ],
    memoryHooks: [
      "“of” = a magnet for -a/-e: masc/neut grab -a, feminine flips -a → -e.",
      "You already ordered kavu (ACC). A cup OF coffee is šalica kave (GEN).",
      "Two tricksters: vrijeme → vremena, posao → posla.",
    ],
    connects: [
      { label: "The café ACC these quantities build on (Unit 4 L5)", lessonId: "a1u4l5" },
      { label: "Where vrijeme came from — telling time (Unit 6 L2)", lessonId: "a1u6l2" },
      { label: "Next: Nema kruha + iz/od/do (Unit 7 L2)", lessonId: "a1u7l2" },
    ],
    selfCheck: [
      { q: "How do you say “a glass of water”?", a: "čaša vode — voda is feminine, so -a → -e." },
      { q: "What are the genitive singular endings?", a: "masc/neut -a (sira, mlijeka); feminine -e (vode, kave)." },
      { q: "How do you say “a kilo of cheese”?", a: "kilogram sira — sir is masculine → sira." },
      { q: "Why is it puno vremena and not puno vrijeme?", a: "vrijeme's genitive stem is vremen-, giving vremena." },
      { q: "What's the difference between Pijem vodu and čaša vode?", a: "vodu is the accusative object; vode is the genitive after a quantity." },
    ],
  },
};
