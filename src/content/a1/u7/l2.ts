import type { Lesson } from "@/types/content";

/**
 * A1 U7 L2 — Nema kruha! (nema + GEN; iz/od/do/blizu + GEN)
 * Spec: curriculum/A1/unit-7.md · grammar-reference §3 (GEN sg), §14 (GEN preps).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: GEN singular only (L1 endings reused). Existential nema + GEN;
 * the four core GEN prepositions iz/od/do/blizu. Payoff: iz Kanade (U2 chunk)
 * analyzed. No GEN plural, no number government (L3). kruh/mlijeko recycled (U4);
 * blizu recycled (U5). Spec deviation: the reorder uses the taught ovdje (U5)
 * instead of the spec's untaught "danas" — see curriculum/A1/unit-7.md L2 note.
 */
export const a1u7l2: Lesson = {
  id: "a1u7l2",
  unitId: "a1u7",
  title: "Nema kruha!",
  titleEn: "There's no bread — nema + genitive & prepositions",
  grammarTags: ["genitive-singular", "nema", "genitive-prepositions"],
  estMinutes: 18,
  vocab: [
    { id: "a1u7.trgovina", hr: "trgovina", en: "shop / store", pos: "noun", gender: "f", icon: "🏪", exampleHr: "Trgovina je blizu.", exampleEn: "The shop is near." },
    { id: "a1u7.trznica", hr: "tržnica", en: "(open-air) market", pos: "noun", gender: "f", icon: "🧺", exampleHr: "Tržnica je blizu trga.", exampleEn: "The market is near the square." },
    { id: "a1u7.pekarnica", hr: "pekarnica", en: "bakery", pos: "noun", gender: "f", icon: "🥖", exampleHr: "Pekarnica je blizu.", exampleEn: "The bakery is near." },
    { id: "a1u7.nema", hr: "nema", en: "there isn't / there's no (+ genitive)", pos: "verb", icon: "🚫", exampleHr: "Nema kruha.", exampleEn: "There's no bread." },
    { id: "a1u7.iz", hr: "iz", en: "from / out of (+ genitive)", pos: "prep", icon: "📤", exampleHr: "Tom je iz Kanade.", exampleEn: "Tom is from Canada." },
    { id: "a1u7.od", hr: "od", en: "from (a point/person) (+ genitive)", pos: "prep", icon: "↩️", exampleHr: "Daleko od trga.", exampleEn: "Far from the square." },
    { id: "a1u7.do", hr: "do", en: "to / until (+ genitive)", pos: "prep", icon: "➡️", exampleHr: "Idem do trgovine.", exampleEn: "I'm going to the shop." },
    { id: "a1u7.blizu", hr: "blizu", en: "near (+ genitive)", pos: "prep", icon: "📍", exampleHr: "Blizu trga.", exampleEn: "Near the square." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Nema kruha!",
      subtitle: "The genitive that says “there isn't any…” — and where things come from.",
      emoji: "🥖",
      items: [
        { emoji: "🚫", label: "nema + genitive", hint: "Nema kruha. Nema mlijeka." },
        { emoji: "🧭", label: "iz · od · do · blizu", hint: "from, to, near — all genitive" },
        { emoji: "🇨🇦", label: "iz Kanade decoded", hint: "the Unit 2 chunk, explained" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · There isn't any…",
      subtitle: "One little word — nema — plus the genitive you learned yesterday.",
      emoji: "🚫",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "quantities from L1" },
        { emoji: "🍞", label: "Nema + genitive", hint: "kruh → Nema kruha" },
        { emoji: "✅", label: "Quick check", hint: "empty-shelf drill" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: quantities (L1)",
      items: [
        {
          prompt: "From L1: čaša ___ (a glass of water)",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "Quantity → genitive: voda → vode.",
        },
        {
          prompt: "From L1: kilogram ___ (a kilo of cheese)",
          options: ["sira", "sir", "siru"],
          correctIndex: 0,
          explanation: "sir → sira (masc -a).",
        },
        {
          prompt: "Listen: what does she have a lot of?",
          tts: "Imam puno posla.",
          options: ["work", "water", "bread"],
          correctIndex: 0,
          explanation: "puno posla = a lot of work (posao → posla).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u7.trgovina", "a1u7.trznica", "a1u7.pekarnica", "a1u7.nema",
        "a1u7.iz", "a1u7.od", "a1u7.do", "a1u7.blizu",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "nema + genitive = “there isn't any…”",
      body:
        "At the **pekarnica** (bakery) the baker shrugs: »Oprostite, **nema kruha**!« — *Sorry, there's no bread!*\n\n**nema** means *there isn't / there's no*, and whatever is missing goes into the **genitive** — the exact endings from L1:\n\n- Nema **kruha**. (kruh → kruha) · Nema **mlijeka**. (mlijeko → mlijeka) · Nema **vode**. (voda → vode)\n\nIt works for people too: **Nema Ane.** — *Ana isn't here.* (Ana → Ane).",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Empty shelf 🍞❌",
        text: "nema is always followed by the genitive — never the plain word. Nema kruh ❌ → Nema kruha ✅.",
      },
      table: {
        caption: "There is → there isn't (genitive)",
        headers: ["the thing (NOM)", "there's none (nema + GEN)"],
        colCase: ["NOM", "GEN"],
        rows: [
          ["kruh", "Nema kruha."],
          ["mlijeko", "Nema mlijeka."],
          ["voda", "Nema vode."],
          ["Ana", "Nema Ane."],
        ],
      },
      examples: [
        { hr: "Oprostite, nema kruha!", en: "Sorry, there's no bread!", note: "kruh → kruha", highlight: { text: "kruha", caseId: "GEN" } },
        { hr: "Nema mlijeka.", en: "There's no milk.", note: "mlijeko → mlijeka", highlight: { text: "mlijeka", caseId: "GEN" } },
        { hr: "Ovdje nema Ane.", en: "Ana isn't here.", note: "Ana → Ane", highlight: { text: "Ane", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the empty shelf",
      items: [
        {
          prompt: "There's no bread: Nema ___.",
          options: ["kruha", "kruh", "kruhu"],
          correctIndex: 0,
          explanation: "nema + genitive: kruh → kruha.",
        },
        {
          prompt: "There's no milk: Nema ___.",
          options: ["mlijeka", "mlijeko", "mlijeku"],
          correctIndex: 0,
          explanation: "mlijeko → mlijeka (neut -a).",
        },
        {
          prompt: "There's no water: Nema ___.",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "voda → vode (fem -e).",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · From, to & near",
      subtitle: "Four prepositions that all take the genitive — including the one behind iz Kanade.",
      emoji: "🧭",
      items: [
        { emoji: "📤", label: "iz / od — from", hint: "iz Kanade · od trga" },
        { emoji: "➡️", label: "do — to / until", hint: "do trgovine" },
        { emoji: "📍", label: "blizu — near", hint: "blizu tržnice" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "iz · od · do · blizu — all genitive",
      body:
        "Four everyday prepositions all trigger the genitive:\n\n- **iz** = *from / out of* a place → **iz Kanade**, **iz Zagreba**\n- **od** = *from* a point or person → **daleko od trga**\n- **do** = *to / until* → **Idem od kuće do trgovine.** · times: *od sedam do tri*\n- **blizu** = *near* → **Tržnica je blizu trga.**\n\n**The Unit 2 payoff:** you've said *Ja sam iz Kanade* since Unit 2 as a chunk. Now you know why: **iz** takes the genitive, and Kanada → **Kanade**.",
      diagram: {
        kind: "usage-map",
        caseId: "GEN",
        boxes: [
          {
            label: "QUANTITY (L1)",
            examples: [{ hr: "čaša vode", en: "a glass of water" }],
          },
          {
            label: "NEMA — there isn't",
            examples: [{ hr: "Nema kruha.", en: "There's no bread." }],
          },
          {
            label: "FROM / OF — iz, od",
            examples: [
              { hr: "iz Kanade", en: "from Canada" },
              { hr: "daleko od trga", en: "far from the square" },
            ],
          },
          {
            label: "NEAR / TO — blizu, do",
            examples: [
              { hr: "blizu tržnice", en: "near the market" },
              { hr: "do trgovine", en: "to the shop" },
            ],
          },
        ],
      },
      examples: [
        { hr: "Tom je iz Kanade.", en: "Tom is from Canada.", note: "Kanada → Kanade", highlight: { text: "Kanade", caseId: "GEN" } },
        { hr: "Tržnica je blizu trga.", en: "The market is near the square.", note: "trg → trga", highlight: { text: "trga", caseId: "GEN" } },
        { hr: "Idem od kuće do trgovine.", en: "I'm going from home to the shop.", note: "kuća → kuće, trgovina → trgovine", highlight: { text: "trgovine", caseId: "GEN" } },
        { hr: "Pekarnica: od sedam do tri.", en: "Bakery: from seven to three (hours).", note: "od … do frame with times" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: pick the preposition & form",
      items: [
        {
          prompt: "“Tom is from Canada.” — Tom je ___ Kanade.",
          options: ["iz", "do", "blizu"],
          correctIndex: 0,
          explanation: "iz = from/out of a place → iz Kanade.",
        },
        {
          prompt: "“near the square” — blizu ___.",
          options: ["trga", "trg", "trgu"],
          correctIndex: 0,
          explanation: "blizu + genitive: trg → trga.",
        },
        {
          prompt: "“from Zagreb” — iz ___.",
          options: ["Zagreba", "Zagreb", "Zagrebu"],
          correctIndex: 0,
          explanation: "iz + genitive: Zagreb → Zagreba.",
        },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Oprostite, nema ___.",
      blanks: [["mlijeka"]],
      translation: "Sorry, there's no milk.",
      wordBank: ["mlijeka", "mlijeko", "mlijeku"],
      explanation: "nema + genitive: mlijeko → mlijeka.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Tom je iz ___.",
      blanks: [["Kanade"]],
      translation: "Tom is from Canada.",
      wordBank: ["Kanade", "Kanada", "Kanadu"],
      explanation: "iz + genitive: Kanada → Kanade (the Unit 2 chunk, decoded).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Tržnica je blizu ___.",
      blanks: [["trga"]],
      translation: "The market is near the square.",
      wordBank: ["trga", "trg", "trgu"],
      explanation: "blizu + genitive: trg → trga.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “There's no milk.”",
      answers: ["Nema mlijeka.", "Nema mlijeka", "nema mlijeka"],
      explanation: "nema + genitive: mlijeko → mlijeka.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I'm from Canada.”",
      answers: ["Ja sam iz Kanade.", "Ja sam iz Kanade", "Iz Kanade sam.", "iz Kanade sam"],
      explanation: "iz + genitive Kanade. The subject pronoun ja is optional.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Ovdje", "nema", "kruha"],
      answers: ["Ovdje nema kruha.", "Ovdje nema kruha"],
      en: "There's no bread here.",
      explanation: "Ovdje (here) + nema + genitive kruha.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Tom je iz Kanade.",
      explanation: "Tom je iz Kanade — Tom is from Canada (Kanada → Kanade).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Tržnica je blizu trga.",
      explanation: "Tržnica je blizu trga — the market is near the square (trg → trga).",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 2 & 5",
      items: [
        {
          prompt: "Unit 2: “Where are you from?” =",
          options: ["Odakle si?", "Kako si?", "Gdje si?"],
          correctIndex: 0,
          explanation: "Odakle si? — and you answer Ja sam iz + genitive.",
        },
        {
          prompt: "Ana is from Zagreb: Ana je iz ___.",
          options: ["Zagreba", "Zagreb", "Zagrebu"],
          correctIndex: 0,
          explanation: "iz + genitive: Zagreb → Zagreba.",
        },
        {
          prompt: "Listen: where is the museum?",
          tts: "Muzej je blizu parka.",
          options: ["near the park", "near the market", "far from the square"],
          correctIndex: 0,
          explanation: "blizu parka = near the park (park → parka), from Unit 5's city.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Ja sam iz Kanade.",
      targetEn: "answer “Odakle si?” with a full sentence — I'm from Canada.",
      phonetic: "yah sahm eez KAH-nah-deh",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key:** the genitive also means **“there isn't any”** and **“from / near”**.\n\n- **nema + GEN**: Nema **kruha**. Nema **mlijeka**. Nema **vode**.\n- **iz / od / do / blizu + GEN**: iz **Kanade**, daleko od **trga**, do **trgovine**, blizu **tržnice**.\n\nAnd the big payoff: **Ja sam iz Kanade** — a chunk since Unit 2 — is now fully decoded.\n\nNext lesson: numbers take over — **dva piva, pet kava** — and why they change the noun's form.",
      vocabIds: [
        "a1u7.trgovina", "a1u7.trznica", "a1u7.pekarnica", "a1u7.nema",
        "a1u7.iz", "a1u7.od", "a1u7.do", "a1u7.blizu",
      ],
    },
  ],
  srsCloze: [
    { front: "___ kruha! (there's no)", answers: ["nema"], back: "Nema kruha! nema is always followed by the genitive.", tts: "Nema kruha!" },
    { front: "Nema ___. (mlijeko)", answers: ["mlijeka"], back: "Nema mlijeka. (mlijeko → mlijeka)", tts: "Nema mlijeka." },
    { front: "Nema ___. (voda)", answers: ["vode"], back: "Nema vode. (voda → vode)", tts: "Nema vode." },
    { front: "Tom je ___ Kanade. (from / out of)", answers: ["iz"], back: "Tom je iz Kanade. iz + genitive.", tts: "Tom je iz Kanade." },
    { front: "Ja sam iz ___. (Kanada)", answers: ["Kanade"], back: "Ja sam iz Kanade. (Kanada → Kanade)", tts: "Ja sam iz Kanade." },
    { front: "Tržnica je ___ trga. (near)", answers: ["blizu"], back: "Tržnica je blizu trga. blizu + genitive.", tts: "Tržnica je blizu trga." },
    { front: "Idem od kuće ___ trgovine. (to)", answers: ["do"], back: "Idem od kuće do trgovine. do + genitive.", tts: "Idem od kuće do trgovine." },
    { front: "iz + genitive: Zagreb → iz ___", answers: ["Zagreba"], back: "iz Zagreba. (Zagreb → Zagreba)" },
  ],
  notes: {
    inOneSentence: {
      en: "nema and the prepositions iz/od/do/blizu all trigger the genitive — the same L1 endings, new jobs.",
      exampleHr: "Nema kruha. · Tom je iz Kanade. · blizu trga",
    },
    deepDive: [
      {
        title: "Existential nema + genitive",
        body:
          "**ima** = *there is*; **nema** = *there isn't*. What's present or missing sits in the **genitive**: *Ima kruha* → *Nema kruha*. This is a fixed, high-frequency pattern — the shop, the fridge, the schedule: *Nema mlijeka, nema vremena, nema Ane* (a person not being there).\n\nDon't reach for the plain nominative after nema: it must be genitive.",
        table: {
          caption: "nema + genitive",
          headers: ["NOM", "nema + GEN", "English"],
          colCase: ["NOM", "GEN", null],
          rows: [
            ["kruh", "Nema kruha.", "There's no bread."],
            ["mlijeko", "Nema mlijeka.", "There's no milk."],
            ["voda", "Nema vode.", "There's no water."],
            ["Ana", "Nema Ane.", "Ana isn't here."],
          ],
        },
      },
      {
        title: "The genitive prepositions & the four-box map",
        body:
          "Four core prepositions govern the genitive. **iz** = *out of / from* a place (iz Kanade, iz trgovine). **od** = *from* a point or person, and pairs with **do** = *to / until* for ranges (od kuće do trgovine; od sedam do tri). **blizu** = *near* (blizu trga).\n\niz vs od: use **iz** for coming out of a place (iz Zagreba), **od** for a starting point or person (od trga, od Ane).",
        diagram: {
          kind: "usage-map",
          caseId: "GEN",
          boxes: [
            { label: "QUANTITY", examples: [{ hr: "čaša vode", en: "a glass of water" }] },
            { label: "NEMA", examples: [{ hr: "Nema kruha.", en: "There's no bread." }] },
            { label: "FROM / OF (iz, od)", examples: [{ hr: "iz Kanade", en: "from Canada" }] },
            { label: "NEAR / TO (blizu, do)", examples: [{ hr: "blizu trga", en: "near the square" }] },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Nema kruh",
        right: "Nema kruha",
        why: "nema always takes the genitive; kruh → kruha.",
      },
      {
        wrong: "iz Kanada",
        right: "iz Kanade",
        why: "iz governs the genitive; feminine Kanada → Kanade.",
      },
      {
        wrong: "od Kanade (for “out of Canada”)",
        right: "iz Kanade",
        why: "iz = out of a place; od is for a point or person you move away from.",
      },
      {
        wrong: "blizu trg",
        right: "blizu trga",
        why: "blizu is a genitive preposition: trg → trga.",
      },
    ],
    memoryHooks: [
      "nema is a genitive magnet: whatever's missing gets -a/-e.",
      "iz, od, do, blizu — the “from / to / near” crew, all genitive.",
      "iz = out OF a place (iz Zagreba); od = away from a point/person (od trga).",
    ],
    connects: [
      { label: "Where iz Kanade came from — origins as chunks (Unit 2 L1)", lessonId: "a1u2l1" },
      { label: "The genitive endings themselves (Unit 7 L1)", lessonId: "a1u7l1" },
      { label: "Next: numbers govern the genitive (Unit 7 L3)", lessonId: "a1u7l3" },
    ],
    selfCheck: [
      { q: "How do you say “There's no bread”?", a: "Nema kruha — nema + genitive." },
      { q: "Why is it iz Kanade, not iz Kanada?", a: "iz takes the genitive; Kanada → Kanade." },
      { q: "Which four prepositions in this lesson take the genitive?", a: "iz, od, do, blizu." },
      { q: "What's the difference between iz and od?", a: "iz = out of a place (iz Zagreba); od = from a point or person (od trga, od Ane)." },
      { q: "How do you say “near the square”?", a: "blizu trga — trg → trga." },
    ],
  },
};
