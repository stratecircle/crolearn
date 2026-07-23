import type { Lesson } from "@/types/content";

/**
 * A2 U10 L4 — Gdje stanuješ? (living situations)
 * Spec: curriculum/A2/unit-10.md · grammar-reference §7, §8.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: consolidation — no new endings. stanovati joins the -ovati→-ujem
 * family (kupujem, putujem, stanujem); preseliti se reuses the U8 L3 "se eats
 * je" rule in the perfekt. "Kolika je stanarina?" is a memorized chunk (koliki
 * declension is not taught yet). kod bake + GEN recycled from U9; "kod
 * roditelja" (GEN pl) deliberately avoided until U13 per the spec.
 */
export const a2u10l4: Lesson = {
  id: "a2u10l4",
  unitId: "a2u10",
  title: "Gdje stanuješ?",
  titleEn: "Where do you live? — renting & moving",
  grammarTags: ["present-tense-ujem", "living-situations", "perfekt-se"],
  estMinutes: 18,
  vocab: [
    { id: "a2u10.stanovati", hr: "stanovati", en: "to reside / live somewhere (stanujem)", pos: "verb", icon: "🏠", exampleHr: "Stanujem u stanu u centru grada.", exampleEn: "I live in a flat in the city centre." },
    { id: "a2u10.iznajmiti", hr: "iznajmiti", en: "to rent (iznajmim)", pos: "verb", icon: "🔑", exampleHr: "Ana želi iznajmiti sobu.", exampleEn: "Ana wants to rent a room." },
    { id: "a2u10.najam", hr: "najam", en: "rent / lease", pos: "noun", gender: "m", icon: "📄", exampleHr: "Stan je za najam.", exampleEn: "The flat is for rent." },
    { id: "a2u10.stanarina", hr: "stanarina", en: "(monthly) rent", pos: "noun", gender: "f", icon: "💶", exampleHr: "Kolika je stanarina?", exampleEn: "How much is the rent?" },
    { id: "a2u10.cimer", hr: "cimer", en: "flatmate (m)", pos: "noun", gender: "m", icon: "🧑‍🤝‍🧑", exampleHr: "Imam cimera.", exampleEn: "I have a flatmate." },
    { id: "a2u10.cimerica", hr: "cimerica", en: "flatmate (f)", pos: "noun", gender: "f", icon: "👭", exampleHr: "Moja cimerica je studentica.", exampleEn: "My flatmate is a student." },
    { id: "a2u10.vlasnik", hr: "vlasnik", en: "landlord / owner", pos: "noun", gender: "m", icon: "🧔‍♂️", exampleHr: "Vlasnik je dobar čovjek.", exampleEn: "The landlord is a good man." },
    { id: "a2u10.preseliti-se", hr: "preseliti se", en: "to move house (preselim se; preselio se)", pos: "verb", icon: "📦", exampleHr: "Marko se preselio u Split.", exampleEn: "Marko moved to Split." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Gdje stanuješ?",
      subtitle: "Read a rental ad, call the landlord, describe where you live.",
      emoji: "🔑",
      items: [
        { emoji: "📰", label: "The rental ad", hint: "STAN ZA NAJAM — decode it" },
        { emoji: "🔁", label: "stanujem", hint: "the -ujem family grows again" },
        { emoji: "📦", label: "preselio se", hint: "moving, with the U8 se-rule" },
        { emoji: "🎤", label: "Where YOU live", hint: "two sentences out loud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Reading the ad",
      subtitle: "Floors, prices, grandma's place — everything here is recycled machinery.",
      emoji: "📰",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "floors (U5) & prices (U7)" },
        { emoji: "📰", label: "STAN ZA NAJAM", hint: "a real-style ad, decoded" },
        { emoji: "📊", label: "The verbs", hint: "stanujem · iznajmim · preselim se" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: floors, prices and grandma's place",
      items: [
        {
          prompt: "Unit 5: »Živim na ___ katu.« (third)",
          options: ["trećem", "treći", "tri"],
          correctIndex: 0,
          explanation: "na + LOC: na trećem katu — today's ads are full of floors.",
        },
        {
          prompt: "Unit 9: »Spavam ___ bake.« (at her place)",
          options: ["kod", "k", "prema"],
          correctIndex: 0,
          explanation: "kod + GEN = at somebody's place — one classic living situation.",
        },
        {
          prompt: "Listen (U7 prices): how much is it?",
          tts: "Petsto eura.",
          options: ["500 euros", "50 euros", "15 euros"],
          correctIndex: 0,
          explanation: "petsto = 500 — a very Zagreb stanarina.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the renting words",
      vocabIds: [
        "a2u10.stanovati", "a2u10.iznajmiti", "a2u10.najam", "a2u10.stanarina",
        "a2u10.cimer", "a2u10.cimerica", "a2u10.vlasnik", "a2u10.preseliti-se",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "STAN ZA NAJAM — decode the ad",
      body:
        "Croatian rental ads are telegrams. Here's one, and every line is yours already:\n\nWhen you call, the magic question is the fixed chunk **»Kolika je stanarina?«** — *How much is the rent?* (memorize it whole).",
      table: {
        caption: "📰 STAN ZA NAJAM — Zagreb, centar",
        headers: ["the ad says", "it means"],
        rows: [
          ["stan u centru grada", "flat in the city centre"],
          ["2. kat, zgrada ima dizalo", "2nd floor, the building has a lift"],
          ["velik balkon, nova kuhinja", "big balcony, new kitchen"],
          ["stanarina: petsto eura", "rent: €500"],
        ],
      },
      examples: [
        { hr: "Stan je za najam.", en: "The flat is for rent." },
        { hr: "Kolika je stanarina? — Petsto eura.", en: "How much is the rent? — Five hundred euros.", note: "the chunk — memorize it whole" },
        { hr: "Zgrada ima dizalo, a stan ima velik balkon.", en: "The building has a lift, and the flat has a big balcony." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "stanujem, iznajmim, preselim se",
      body:
        "**stanovati** joins your -ovati → -ujem family — say it with its siblings: *kupujem, putujem, **stanujem***. (živjeti also works — *stanovati* is just more precise: to reside.)\n\n**iznajmiti** (iznajmim) = to rent. **preseliti se** (preselim se) = to move house — and in the past, the U8 L3 law applies: **se eats je**: *Marko **se preselio** u Split.* (never ~~se je preselio~~).",
      table: {
        caption: "The three movers",
        headers: ["verb", "present", "model"],
        rows: [
          ["stanovati", "stanujem (-ujem!)", "Stanujem u stanu."],
          ["iznajmiti", "iznajmim", "Ana želi iznajmiti sobu."],
          ["preseliti se", "preselim se", "Marko se preselio u Split."],
        ],
      },
      examples: [
        { hr: "Stanujem u stanu u centru grada.", en: "I live in a flat in the city centre." },
        { hr: "Ana želi iznajmiti sobu.", en: "Ana wants to rent a room." },
        { hr: "Marko se preselio u Split.", en: "Marko moved to Split.", note: "se + perfekt → je drops (U8)" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: the ad and the verbs",
      items: [
        {
          prompt: "The ad says »2. kat, zgrada ima dizalo«. What do you know?",
          options: [
            "2nd floor and there's a lift",
            "2 rooms and a balcony",
            "ground floor, no lift",
          ],
          correctIndex: 0,
          explanation: "kat = storey, dizalo = lift.",
        },
        {
          prompt: "stanovati → »Ja ___ u Zagrebu.«",
          options: ["stanujem", "stanovam", "stanim"],
          correctIndex: 0,
          explanation: "-ovati → -ujem: stanujem (like kupujem, putujem).",
        },
        {
          prompt: "Which past sentence is correct? (U8 se-rule)",
          options: ["Marko se preselio u Split.", "Marko se je preselio u Split.", "Marko je se preselio u Split."],
          correctIndex: 0,
          explanation: "se + je → je drops: Marko se preselio.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Living situations — tap to hear",
      items: [
        { hr: "Imam cimera. On je student.", en: "I have a flatmate. He's a student.", note: "animate ACC = GEN form (U4): cimera" },
        { hr: "Moja cimerica puno radi.", en: "My flatmate (f) works a lot." },
        { hr: "Vlasnik je dobar čovjek, ali stanarina nije mala.", en: "The landlord is a good man, but the rent isn't small." },
        { hr: "Ana sada stanuje kod bake.", en: "Ana is living at her grandma's for now." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "»___ je stanarina?« — »Petsto eura.«",
      blanks: [["Kolika", "kolika"]],
      translation: "\"How much is the rent?\" — \"Five hundred euros.\"",
      wordBank: ["Kolika", "Koliko", "Koja"],
      explanation: "The fixed chunk: Kolika je stanarina?",
    },
    {
      id: "s10",
      type: "fill",
      text: "Stanujem na trećem ___. (kat)",
      blanks: [["katu"]],
      translation: "I live on the third floor.",
      wordBank: ["katu", "kat", "kata"],
      explanation: "na + LOC (U5, alive and well): na trećem katu.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Marko ___ ___ u Split. (preseliti se, past)",
      blanks: [["se"], ["preselio"]],
      translation: "Marko moved to Split.",
      explanation: "Perfekt + se: se in second position, je dropped — Marko se preselio.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Call the landlord",
      subtitle: "Type it, build it, hear it — then describe your own place.",
      emoji: "📞",
      items: [
        { emoji: "⌨️", label: "Type the basics", hint: "»I live in a flat«" },
        { emoji: "🎧", label: "Dictation ×2", hint: "one has slow replay" },
        { emoji: "🔀", label: "Build the move", hint: "Marko + se + preselio…" },
        { emoji: "🎤", label: "Your place", hint: "two sentences" },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I live in a flat.” (stanovati)",
      answers: ["Stanujem u stanu.", "Stanujem u stanu"],
      hint: "-ovati → -ujem, then u + LOC",
      explanation: "Stanujem u stanu.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “Ana wants to rent a room.”",
      answers: ["Ana želi iznajmiti sobu.", "Ana želi iznajmiti sobu"],
      hint: "željeti + infinitive + ACC",
      explanation: "Ana želi iznajmiti sobu.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Stan je na trećem katu.",
      allowSlow: true,
      explanation: "Stan je na trećem katu — the flat is on the third floor.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Kolika je stanarina?",
      explanation: "Kolika je stanarina? — how much is the rent?",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Marko", "se", "preselio", "u", "Split"],
      answers: ["Marko se preselio u Split.", "Marko se preselio u Split"],
      en: "Marko moved to Split.",
      explanation: "se sits second, je is eaten (U8 rule): Marko se preselio u Split.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: ordinals, prices and the se-rule",
      items: [
        {
          prompt: "Unit 5 ordinals: »Stan je na ___ katu.« (second)",
          options: ["drugom", "dva", "drugi"],
          correctIndex: 0,
          explanation: "na drugom katu — ordinal + LOC, the U5 address kit.",
        },
        {
          prompt: "Listen (U7): how much is the rent?",
          tts: "Stanarina je petsto eura.",
          options: ["500 euros", "300 euros", "150 euros"],
          correctIndex: 0,
          explanation: "petsto eura = 500 euros.",
        },
        {
          prompt: "Unit 8's law, one more time — which is right?",
          options: ["Ana se preselila u Zagreb.", "Ana se je preselila u Zagreb.", "Ana je se preselila u Zagreb."],
          correctIndex: 0,
          explanation: "se + je → je drops: Ana se preselila.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Stanujem u stanu na trećem katu.",
      targetEn: "describe where you live — I live in a flat on the third floor. (add: Imam cimera. / Stanujem kod bake.)",
      phonetic: "sta-NOO-yem oo STAH-noo na TRE-chem KAH-too",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The renting kit:** *Stan je za najam.* · **Kolika je stanarina?** (chunk!) · *Imam cimera / cimericu.* · *Vlasnik je dobar.*\n\n**Verbs:** *stanovati → **stanujem*** (the -ujem family: kupujem, putujem, stanujem) · *iznajmiti → iznajmim* · *preseliti se → preselim se*, past ***se preselio*** — se eats je, exactly as U8 taught.\n\nWords tonight: **stanovati, iznajmiti, najam, stanarina, cimer, cimerica, vlasnik, preseliti se**.\n\nNext lesson: the grand tour — every room and its furniture, plus the whole unit reviewed.",
      vocabIds: [
        "a2u10.stanovati", "a2u10.iznajmiti", "a2u10.najam", "a2u10.stanarina",
        "a2u10.cimer", "a2u10.cimerica", "a2u10.vlasnik", "a2u10.preseliti-se",
      ],
    },
  ],
  srsCloze: [
    { front: "stanovati → ja ___ (I reside)", answers: ["stanujem"], back: "stanovati → stanujem (-ovati → -ujem)", tts: "Stanujem u Zagrebu." },
    { front: "Marko ___ ___ u Split. (moved — watch the se!)", answers: ["se preselio"], back: "Marko se preselio u Split. (se eats je)", tts: "Marko se preselio u Split." },
    { front: "How much is the rent? = »___ je stanarina?«", answers: ["Kolika", "kolika"], back: "Kolika je stanarina? (fixed chunk)", tts: "Kolika je stanarina?" },
    { front: "flatmate (m) = ___ (»Imam ___a«)", answers: ["cimer"], back: "cimer = flatmate; Imam cimera (animate ACC).", tts: "Imam cimera." },
    { front: "landlord / owner = ___", answers: ["vlasnik"], back: "vlasnik = landlord/owner.", tts: "vlasnik" },
    { front: "Ana želi ___ sobu. (to rent)", answers: ["iznajmiti"], back: "Ana želi iznajmiti sobu.", tts: "Ana želi iznajmiti sobu." },
  ],
  notes: {
    inOneSentence: {
      en: "stanovati (stanujem) + the renting vocabulary let you read a rental ad, ask Kolika je stanarina?, and say you moved — Marko se preselio, with se eating je.",
      exampleHr: "Stanujem u stanu u centru grada. · Kolika je stanarina? · Marko se preselio u Split.",
    },
    deepDive: [
      {
        title: "stanovati vs živjeti",
        body:
          "Both mean *to live* somewhere; **živjeti** (U5) is general — life, place, everything — while **stanovati** is precisely *to reside / have your dwelling*. In ads, forms and flat-talk, Croatians reach for *stanovati*:\n\n- *Gdje stanuješ?* — Where do you live (what's your address-ish)?\n- *Živim u Hrvatskoj, stanujem u Zagrebu, u malom stanu.*\n\nIt conjugates in the -ovati → -ujem family you now know cold: **kupujem, putujem, stanujem**.",
      },
      {
        title: "The moving sentence — U8 grammar earning rent",
        body:
          "*preseliti se* in the past runs on two old rules at once:\n\n1. **Perfekt** (U8): clitic + participle → *preselio / preselila*\n2. **se eats je** (U8 L3): *Marko **se preselio*** — never ~~se je preselio~~\n\nFuture (U9): *Preselit ću se u Split.* / *Sutra će se preseliti.* — note the cluster order **će se** (aux before se), the same order train you'll formalize in U15.",
        table: {
          caption: "preseliti se through the tenses",
          headers: ["tense", "form"],
          rows: [
            ["present", "Preselim se u novi stan."],
            ["past", "Marko se preselio. / Ana se preselila."],
            ["future", "Preselit ću se. / Sutra će se preseliti."],
          ],
        },
      },
      {
        title: "Ad-speak: the fixed chunks",
        body:
          "Rental Croatian runs on chunks — learn them whole, analyze later:\n\n- **STAN ZA NAJAM** — flat for rent\n- **Kolika je stanarina?** — how much is the rent? (*koliki/kolika* declines like an adjective — the full system comes later; for now the chunk)\n- **Režije?** — you'll meet utilities-talk in real ads; not tested here\n\nWith U5 floors (*na drugom katu*), U7 prices (*petsto eura*) and today's words, you can already parse a real oglas.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Stanujem u Zagreb.",
        right: "Stanujem u Zagrebu.",
        why: "Location → LOC after u (the U5 rule never retires).",
      },
      {
        wrong: "Marko se je preselio.",
        right: "Marko se preselio.",
        why: "se + je → je drops (U8 L3). se stays, je goes.",
      },
      {
        wrong: "Stanovam u stanu.",
        right: "Stanujem u stanu.",
        why: "-ovati verbs flip to -ujem: stanujem.",
      },
      {
        wrong: "Imam cimer.",
        right: "Imam cimera.",
        why: "cimer is animate masculine — ACC takes the GEN form (U4): cimera.",
      },
    ],
    memoryHooks: [
      "The -ujem family photo: kupujem 🛍️, putujem 🧳, stanujem 🏠.",
      "se eats je — moving day has no room for je in the van.",
      "Kolika je stanarina? — say it to every landlord; it never declines on you if you memorize it whole.",
      "cimer/cimerica — from German »Zimmer« (room): the person who shares your Zimmer.",
    ],
    connects: [
      { label: "kupovati → kupujem — the family founder (Unit 7 L5)", lessonId: "a1u7l5" },
      { label: "se eats je (Unit 8 L3)", lessonId: "a1u8l3" },
      { label: "Next: rooms, furniture & the unit review (Unit 10 L5)", lessonId: "a2u10l5" },
    ],
    selfCheck: [
      { q: "“I live in a flat in the city centre” = ?", a: "Stanujem u stanu u centru grada." },
      { q: "Ask the landlord how much the rent is.", a: "Kolika je stanarina?" },
      { q: "“Marko moved to Split” — and why no je?", a: "Marko se preselio u Split — se eats je (U8 rule)." },
      { q: "“I have a flatmate (m)” = ?", a: "Imam cimera. (animate ACC = GEN form)" },
      { q: "stanovati vs živjeti?", a: "Both = to live; stanovati = to reside (address-talk), conjugated stanujem." },
    ],
  },
};
