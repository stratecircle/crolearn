import type { Lesson } from "@/types/content";

/**
 * A1 U7 L5 — U trgovini (Shop dialogues & colours — integration)
 * Spec: curriculum/A1/unit-7.md · grammar-reference §4 (adj agreement), §15 (li).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: no new grammar machinery — the full shopping script. Imate li…?
 * (li recycled U2). Mogu li probati? is a chunk (mogu waits for A2 U11) — glossed.
 * Molim Vas glossed. Colours recycle from L4, now with NOM & ACC agreement
 * (crna jakna → Tražim crnu jaknu — the lesson's focus). Ends with an 8-item
 * whole-unit review sweep (L1–L4).
 */
export const a1u7l5: Lesson = {
  id: "a1u7l5",
  unitId: "a1u7",
  title: "U trgovini",
  titleEn: "At the shop — the shopping script",
  grammarTags: ["shopping-script", "adjective-agreement", "review"],
  estMinutes: 19,
  vocab: [
    { id: "a1u7.majica", hr: "majica", en: "t-shirt", pos: "noun", gender: "f", icon: "👕", exampleHr: "Tražim majicu.", exampleEn: "I'm looking for a t-shirt." },
    { id: "a1u7.hlace", hr: "hlače", en: "trousers (plural-only)", pos: "noun", gender: "f", icon: "👖", exampleHr: "Plave hlače koštaju trideset eura.", exampleEn: "The blue trousers cost thirty euros." },
    { id: "a1u7.cipele", hr: "cipele", en: "shoes (plural-only)", pos: "noun", gender: "f", icon: "👟", exampleHr: "Nosim crne cipele.", exampleEn: "I'm wearing black shoes." },
    { id: "a1u7.jakna", hr: "jakna", en: "jacket", pos: "noun", gender: "f", icon: "🧥", exampleHr: "Tražim crnu jaknu.", exampleEn: "I'm looking for a black jacket." },
    { id: "a1u7.haljina", hr: "haljina", en: "dress", pos: "noun", gender: "f", icon: "👗", exampleHr: "Zelena haljina je lijepa.", exampleEn: "The green dress is nice." },
    { id: "a1u7.kosulja", hr: "košulja", en: "shirt", pos: "noun", gender: "f", icon: "👔", exampleHr: "Bijela košulja.", exampleEn: "A white shirt." },
    { id: "a1u7.velicina", hr: "veličina", en: "size", pos: "noun", gender: "f", icon: "📏", exampleHr: "Moja veličina je M.", exampleEn: "My size is M." },
    { id: "a1u7.nositi", hr: "nositi", en: "to wear (nosim)", pos: "verb", icon: "🧍", exampleHr: "Nosim plavu majicu.", exampleEn: "I'm wearing a blue t-shirt." },
    { id: "a1u7.probati", hr: "probati", en: "to try on (probam)", pos: "verb", icon: "🔄", exampleHr: "Želim probati jaknu.", exampleEn: "I want to try on the jacket." },
    { id: "a1u7.kupovati", hr: "kupovati", en: "to buy (kupujem)", pos: "verb", icon: "🛍️", exampleHr: "Kupujem plavu majicu.", exampleEn: "I'm buying a blue t-shirt." },
    { id: "a1u7.traziti", hr: "tražiti", en: "to look for (tražim)", pos: "verb", icon: "🔎", exampleHr: "Tražim majicu.", exampleEn: "I'm looking for a t-shirt." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "U trgovini",
      subtitle: "Everything from this unit, in one shop: ask, try on, hear the price, pay.",
      emoji: "🛍️",
      items: [
        { emoji: "🗺️", label: "The shopping script", hint: "Tražim… · Imate li…? · Koliko košta?" },
        { emoji: "🎨", label: "Colours + clothes", hint: "crnu jaknu, plave hlače" },
        { emoji: "🎯", label: "Whole-unit sweep", hint: "L1–L4 in one go" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The shopping script",
      subtitle: "Six lines take you from “hello” to “thank you” — you'll play both roles.",
      emoji: "🗺️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "prices & numbers (L4)" },
        { emoji: "🔎", label: "Tražim… / Imate li…?", hint: "look for it, ask for it" },
        { emoji: "🎨", label: "Colours agree", hint: "crna jakna → crnu jaknu" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: prices (L4)",
      items: [
        {
          prompt: "From L4: 56 = pedeset ___",
          options: ["šest", "šesnaest", "šezdeset"],
          correctIndex: 0,
          explanation: "pedeset šest = 56 (ten first, then the one).",
        },
        {
          prompt: "From L4: apples cost — Jabuke ___ tri eura.",
          options: ["koštaju", "košta", "koštate"],
          correctIndex: 0,
          explanation: "Plural subject → koštaju.",
        },
        {
          prompt: "Listen: what's the price?",
          tts: "Četrdeset pet eura.",
          options: ["45 euros", "54 euros", "40 euros"],
          correctIndex: 0,
          explanation: "četrdeset pet = 45.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's clothes words",
      vocabIds: [
        "a1u7.majica", "a1u7.hlace", "a1u7.cipele", "a1u7.jakna", "a1u7.haljina",
        "a1u7.kosulja", "a1u7.velicina", "a1u7.nositi", "a1u7.probati",
        "a1u7.kupovati", "a1u7.traziti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The shopping script — both roles",
      body:
        "Everything you need in a **trgovina**, in six lines:\n\n1. **Dobar dan!** (greet)\n2. **Tražim majicu.** (I'm looking for a t-shirt) — or ask: **Imate li majicu?** (Do you have a t-shirt? — *li* from Unit 2)\n3. **Mogu li probati?** (*Can I try it on?* — a set phrase for now)\n4. **Koliko košta?** (how much?)\n5. **Želim platiti.** / **Račun, molim.** (pay)\n6. **Hvala! Doviđenja!** (thank & leave)\n\nUseful softener: **Molim Vas…** (*Excuse me / please…*). The verbs: **tražiti** (tražim), **probati** (probam), **kupovati** (kupujem), **nositi** (nosim).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Greet", emoji: "👋", example: "Dobar dan!" },
          { label: "Ask", emoji: "🔎", example: "Tražim majicu. / Imate li majicu?" },
          { label: "Try on", emoji: "🔄", example: "Mogu li probati?" },
          { label: "Price", emoji: "🏷️", example: "Koliko košta?" },
          { label: "Pay & thank", emoji: "💳", example: "Želim platiti. Hvala!" },
        ],
      },
      examples: [
        { hr: "Dobar dan! Tražim majicu.", en: "Good day! I'm looking for a t-shirt." },
        { hr: "Imate li plavu majicu?", en: "Do you have a blue t-shirt?", note: "Imate li… = do you have… (Unit 2 li-question)" },
        { hr: "Mogu li probati?", en: "Can I try it on?", note: "set phrase — mogu comes in A2" },
        { hr: "Kupujem plavu majicu.", en: "I'm buying a blue t-shirt.", note: "kupovati → kupujem" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the script",
      items: [
        {
          prompt: "Ask if the shop has a t-shirt:",
          options: ["Imate li majicu?", "Imam majicu.", "Majica je tu."],
          correctIndex: 0,
          explanation: "Imate li…? = do you have…? (li-question, Unit 2).",
        },
        {
          prompt: "Say you're looking for a jacket:",
          options: ["Tražim jaknu.", "Jakna je tu.", "Imate jaknu."],
          correctIndex: 0,
          explanation: "Tražim + accusative: Tražim jaknu.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Colours agree — and decline with the noun",
      body:
        "Colours are adjectives, so they **agree** (Units 2–3): **crven → crvena** (f) / **crveno** (n). So *crvena majica*, *crveno vino*, *crna kava*, *plave hlače*.\n\nThe new twist: when the clothing becomes an **object** (accusative), the colour declines **with** it. Feminine ACC takes **-u** on both words: *crna jakna* → **Tražim crnu jaknu.** Never leave the colour in the nominative: ~~Tražim crna jaknu~~ ❌.",
      diagram: {
        kind: "contrast",
        left: {
          title: "NOM — it is…",
          emoji: "🏷️",
          caseId: "NOM",
          lines: [
            { hr: "Crna jakna.", en: "A black jacket." },
            { hr: "Plava majica.", en: "A blue t-shirt." },
          ],
        },
        right: {
          title: "ACC — I want it",
          emoji: "🔎",
          caseId: "ACC",
          lines: [
            { hr: "Tražim crnu jaknu.", en: "I'm looking for a black jacket." },
            { hr: "Kupujem plavu majicu.", en: "I'm buying a blue t-shirt." },
          ],
        },
      },
      table: {
        caption: "Colour agreement (NOM singular)",
        headers: ["colour", "m", "f", "n"],
        rows: [
          ["red", "crven", "crvena", "crveno"],
          ["blue", "plav", "plava", "plavo"],
          ["black", "crn", "crna", "crno"],
          ["white", "bijel", "bijela", "bijelo"],
        ],
      },
      examples: [
        { hr: "Crvena majica košta trideset eura.", en: "The red t-shirt costs thirty euros.", note: "crvena + majica (f, NOM)" },
        { hr: "Tražim crnu jaknu.", en: "I'm looking for a black jacket.", note: "ACC: crna → crnu, jakna → jaknu", highlight: { text: "crnu jaknu", caseId: "ACC" } },
        { hr: "Plave hlače koštaju trideset eura.", en: "The blue trousers cost thirty euros.", note: "hlače is plural → plave + koštaju" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the colour + clothing to English",
      pairs: [
        { a: "crvena majica", b: "red t-shirt" },
        { a: "plave hlače", b: "blue trousers" },
        { a: "crna jakna", b: "black jacket" },
        { a: "bijela košulja", b: "white shirt" },
        { a: "zelena haljina", b: "green dress" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Try it on & pay",
      subtitle: "Run the script yourself, then sweep the whole unit.",
      emoji: "🎯",
      items: [
        { emoji: "🧩", label: "Fill the dialogue", hint: "Imate li… · crnu jaknu" },
        { emoji: "⌨️", label: "Say what you want", hint: "Tražim crnu jaknu." },
        { emoji: "🛍️", label: "Shop for the cast", hint: "buy an outfit for Ana & Tom" },
        { emoji: "🔁", label: "Whole-unit sweep", hint: "L1–L4 review" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Dobar dan! ___ li majicu?",
      blanks: [["Imate"]],
      translation: "Good day! Do you have a t-shirt?",
      wordBank: ["Imate", "Imam", "Ima"],
      explanation: "Imate li…? = do you have…? (formal 2nd person + li, from Unit 2).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Tražim ___ jaknu.",
      blanks: [["crnu"]],
      translation: "I'm looking for a black jacket.",
      wordBank: ["crnu", "crna", "crno"],
      explanation: "Accusative feminine: crna → crnu, agreeing with jaknu.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I'm looking for a black jacket.”",
      answers: ["Tražim crnu jaknu.", "Tražim crnu jaknu", "tražim crnu jaknu", "Trazim crnu jaknu."],
      explanation: "tražiti + ACC; the colour agrees: crnu jaknu.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “How much does the blue t-shirt cost?”",
      answers: ["Koliko košta plava majica?", "Koliko košta plava majica", "Koliko kosta plava majica?", "koliko košta plava majica"],
      explanation: "Koliko košta + plava majica (NOM subject).",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Tražim", "crnu", "jaknu"],
      answers: ["Tražim crnu jaknu.", "Tražim crnu jaknu"],
      en: "I'm looking for a black jacket.",
      explanation: "tražiti + accusative, colour agreeing: Tražim crnu jaknu.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Tražim majicu.",
      explanation: "Tražim majicu — I'm looking for a t-shirt (majica → majicu).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Koliko košta plava majica?",
      explanation: "Koliko košta plava majica? — How much does the blue t-shirt cost?",
    },
    {
      id: "s17",
      type: "quiz-set",
      title: "Shop for the cast",
      items: [
        {
          prompt: "Ana wants a red t-shirt. She says: Tražim ___.",
          options: ["crvenu majicu", "crvena majica", "crven majica"],
          correctIndex: 0,
          explanation: "ACC feminine: crvenu majicu.",
        },
        {
          prompt: "The blue trousers — how much? Koliko ___ plave hlače?",
          options: ["koštaju", "košta", "koštam"],
          correctIndex: 0,
          explanation: "hlače is plural → koštaju.",
        },
        {
          prompt: "Tom wants to try a jacket. He asks:",
          options: ["Mogu li probati?", "Koliko košta?", "Imam jaknu."],
          correctIndex: 0,
          explanation: "Mogu li probati? = Can I try it on? (set phrase).",
        },
      ],
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Koliko košta plava majica?",
      targetEn: "ask a shop price aloud — How much does the blue t-shirt cost?",
      phonetic: "KO-lee-ko KOSH-ta PLA-va MA-yee-tsa",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep · L1–L2",
      items: [
        {
          prompt: "L1: čaša ___ (a glass of water)",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "Quantity → GEN: voda → vode.",
        },
        {
          prompt: "L1: kilogram ___ (a kilo of cheese)",
          options: ["sira", "sir", "siru"],
          correctIndex: 0,
          explanation: "sir → sira (masc -a).",
        },
        {
          prompt: "L2: There's no bread — Nema ___.",
          options: ["kruha", "kruh", "kruhu"],
          correctIndex: 0,
          explanation: "nema + GEN: kruha.",
        },
        {
          prompt: "L2: “from Canada” — iz ___.",
          options: ["Kanade", "Kanada", "Kanadu"],
          correctIndex: 0,
          explanation: "iz + GEN: Kanade.",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep · L3–L4",
      items: [
        {
          prompt: "L3: two coffees — dva or dvije?",
          options: ["dvije kave", "dva kave", "dva kava"],
          correctIndex: 0,
          explanation: "kava is feminine → dvije kave.",
        },
        {
          prompt: "L3: pet ___ (five euros)",
          options: ["eura", "euro", "eurima"],
          correctIndex: 0,
          explanation: "5+ → GEN pl: eura.",
        },
        {
          prompt: "L4: Kava ___ dva eura. (costs)",
          options: ["košta", "koštaju", "koštam"],
          correctIndex: 0,
          explanation: "One thing → košta.",
        },
        {
          prompt: "Listen: what's the price?",
          tts: "Trideset pet eura.",
          options: ["35 euros", "53 euros", "30 euros"],
          correctIndex: 0,
          explanation: "trideset pet = 35.",
        },
      ],
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Unit 7 complete — you can shop in Croatian!** The script: *Dobar dan! Tražim crnu jaknu. Imate li…? Mogu li probati? Koliko košta? — Želim platiti. Hvala!*\n\nColours agree and decline with the noun: **crna jakna → Tražim crnu jaknu**, **plave hlače koštaju…**.\n\nYou now own the **genitive** (čaša vode, nema kruha, iz Kanade), the **number bracket** (dva eura, pet kava), and **prices to 1000**.\n\nNext: the market with baka Marija — the unit **story**, then the **test**.",
      vocabIds: [
        "a1u7.majica", "a1u7.hlace", "a1u7.cipele", "a1u7.jakna", "a1u7.haljina",
        "a1u7.kosulja", "a1u7.velicina", "a1u7.nositi", "a1u7.probati",
        "a1u7.kupovati", "a1u7.traziti",
      ],
    },
  ],
  srsCloze: [
    { front: "Tražim ___. (majica — I'm looking for a t-shirt)", answers: ["majicu"], back: "Tražim majicu. (tražiti + ACC)", tts: "Tražim majicu." },
    { front: "Tražim ___ jaknu. (black — ACC)", answers: ["crnu"], back: "Tražim crnu jaknu. (crna → crnu, agreeing with jaknu)", tts: "Tražim crnu jaknu." },
    { front: "___ li majicu? (do you have)", answers: ["imate"], back: "Imate li majicu? (li-question, Unit 2)", tts: "Imate li majicu?" },
    { front: "Koliko košta ___ majica? (blue)", answers: ["plava"], back: "Koliko košta plava majica? (plava + majica, NOM)", tts: "Koliko košta plava majica?" },
    { front: "Plave ___ koštaju trideset eura. (trousers)", answers: ["hlače", "hlace"], back: "Plave hlače koštaju trideset eura. (plural → koštaju)", tts: "Plave hlače koštaju trideset eura." },
    { front: "Mogu li ___? (try on)", answers: ["probati"], back: "Mogu li probati? — Can I try it on? (set phrase)", tts: "Mogu li probati?" },
    { front: "Kupujem ___ majicu. (blue — ACC)", answers: ["plavu"], back: "Kupujem plavu majicu. (ACC: plava → plavu)", tts: "Kupujem plavu majicu." },
    { front: "Nosim ___. (shoes)", answers: ["cipele"], back: "Nosim cipele. (cipele is plural-only)", tts: "Nosim cipele." },
  ],
  notes: {
    inOneSentence: {
      en: "The shopping script (Tražim…, Imate li…?, Koliko košta?) runs on known grammar, with colours agreeing and declining with the clothes.",
      exampleHr: "Tražim crnu jaknu. · Imate li plavu majicu? · Koliko koštaju hlače?",
    },
    deepDive: [
      {
        title: "The shopping script (both roles)",
        body:
          "No new machinery — just assembly. Greet (**Dobar dan!**), state your need (**Tražim + ACC**: Tražim majicu / jaknu) or ask (**Imate li + ACC?**: Imate li majicu?), request to try (**Mogu li probati?** — a set phrase; the modal *mogu* is analyzed in A2), ask the price (**Koliko košta?** / **koštaju?**), pay (**Želim platiti** / **Račun, molim**), and thank (**Hvala! Doviđenja!**). **Molim Vas** softens any request.\n\nThe verbs: tražiti (tražim), probati (probam), kupovati (**kupujem** — irregular), nositi (nosim).",
        table: {
          caption: "Clothes & their accusative",
          headers: ["NOM", "ACC (Tražim / Kupujem…)"],
          colCase: ["NOM", "ACC"],
          rows: [
            ["majica", "majicu"],
            ["jakna", "jaknu"],
            ["haljina", "haljinu"],
            ["hlače (pl)", "hlače"],
            ["cipele (pl)", "cipele"],
          ],
        },
      },
      {
        title: "Colours: agree in NOM, decline in ACC",
        body:
          "A colour is an adjective and copies its noun. In the **nominative** (naming/describing): crven → **crvena** (f) / **crveno** (n) — crvena majica, crveno vino, plave hlače. When the item is a direct **object**, the colour goes into the **accusative** with the noun — feminine takes **-u** on both: crna jakna → **crnu jaknu**, plava majica → **plavu majicu**. Leaving the colour in the nominative (Tražim crna jaknu ❌) is the #1 error here.\n\nPlural-only nouns stay plural everywhere and take the plural verb: **Plave hlače koštaju…**, **Cipele koštaju…**.",
        diagram: {
          kind: "contrast",
          left: {
            title: "NOM (it is)",
            emoji: "🏷️",
            caseId: "NOM",
            lines: [{ hr: "Crna jakna.", en: "A black jacket." }],
          },
          right: {
            title: "ACC (I want it)",
            emoji: "🔎",
            caseId: "ACC",
            lines: [{ hr: "Tražim crnu jaknu.", en: "I'm looking for a black jacket." }],
          },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Tražim crna jakna",
        right: "Tražim crnu jaknu",
        why: "tražiti takes the accusative, and the colour must decline with the noun: crnu jaknu.",
      },
      {
        wrong: "crven majica",
        right: "crvena majica",
        why: "majica is feminine, so the colour agrees as crvena.",
      },
      {
        wrong: "Hlače košta trideset eura",
        right: "Hlače koštaju trideset eura",
        why: "hlače is plural-only, so it takes the plural verb koštaju.",
      },
      {
        wrong: "Imaš li majicu? (to a shop assistant)",
        right: "Imate li majicu?",
        why: "Use the formal Vi form with strangers/service: Imate li…?",
      },
    ],
    memoryHooks: [
      "Script spine: Tražim… → Imate li…? → Mogu li probati? → Koliko košta? → Želim platiti.",
      "The colour rides shotgun: wherever the noun goes (crnu jaknu), the colour goes too.",
      "hlače & cipele are always plural — always koštaju.",
    ],
    connects: [
      { label: "The li-question this reuses (Unit 2 L2)", lessonId: "a1u2l2" },
      { label: "Prices & colours introduced (Unit 7 L4)", lessonId: "a1u7l4" },
      { label: "The café script this echoes (Unit 4 L5)", lessonId: "a1u4l5" },
    ],
    selfCheck: [
      { q: "How do you ask if a shop has a blue t-shirt?", a: "Imate li plavu majicu?" },
      { q: "How do you say “I'm looking for a black jacket”?", a: "Tražim crnu jaknu — the colour declines with the noun." },
      { q: "Why koštaju, not košta, with hlače?", a: "hlače is plural-only, so it takes the plural verb." },
      { q: "How do you ask to try something on?", a: "Mogu li probati? (a set phrase for now)." },
      { q: "What's the accusative of plava majica?", a: "plavu majicu." },
    ],
  },
};
