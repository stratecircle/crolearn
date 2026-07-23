import type { Lesson } from "@/types/content";

/**
 * A1 U2 L5 — Govorim hrvatski (govoriti + languages, unit review)
 * Spec: curriculum/A1/unit-2.md · grammar-reference §7 (-im class preview; formal
 * class treatment comes in Unit 4). Ends with the unit-review run over L1–L4.
 */
export const a1u2l5: Lesson = {
  id: "a1u2l5",
  unitId: "a1u2",
  title: "Govorim hrvatski",
  titleEn: "Your first full verb + unit review",
  grammarTags: ["govoriti-present", "languages"],
  estMinutes: 20,
  vocab: [
    { id: "a1u2.hrvatski", hr: "hrvatski", en: "Croatian (language)", pos: "noun", gender: "m", icon: "🇭🇷", exampleHr: "Govorim malo hrvatski.", exampleEn: "I speak a little Croatian." },
    { id: "a1u2.engleski", hr: "engleski", en: "English (language)", pos: "noun", gender: "m", icon: "🇬🇧", exampleHr: "Govorim engleski.", exampleEn: "I speak English." },
    { id: "a1u2.njemacki", hr: "njemački", en: "German (language)", pos: "noun", gender: "m", icon: "🇩🇪", exampleHr: "Govoriš li njemački?", exampleEn: "Do you speak German?" },
    { id: "a1u2.francuski", hr: "francuski", en: "French (language)", pos: "noun", gender: "m", icon: "🇫🇷", exampleHr: "Ne govorim francuski.", exampleEn: "I don't speak French." },
    { id: "a1u2.govoriti", hr: "govoriti", en: "to speak (govorim)", pos: "verb", icon: "💬", exampleHr: "Govorim hrvatski i engleski.", exampleEn: "I speak Croatian and English." },
    { id: "a1u2.razumijem", hr: "razumijem", en: "I understand (chunk: ne razumijem = I don't understand)", pos: "verb", icon: "💡", exampleHr: "Ne razumijem. Molim?", exampleEn: "I don't understand. Pardon?", tags: ["chunk"] },
    { id: "a1u2.malo", hr: "malo", en: "a little", pos: "adv", icon: "🤏", exampleHr: "Govorim malo hrvatski.", exampleEn: "I speak a little Croatian." },
    { id: "a1u2.jako", hr: "jako", en: "very", pos: "adv", icon: "💪", exampleHr: "Govoriš jako dobro!", exampleEn: "You speak very well!" },
    { id: "a1u2.kuhar", hr: "kuhar", en: "cook (m)", pos: "noun", gender: "m", icon: "👨‍🍳", image: "/img/kuhar.png", exampleHr: "Marko nije kuhar, konobar je.", exampleEn: "Marko is not a cook, he's a waiter." },
    { id: "a1u2.kuharica", hr: "kuharica", en: "cook (f)", pos: "noun", gender: "f", icon: "👩‍🍳", image: "/img/kuharica.png", exampleHr: "Ona je dobra kuharica.", exampleEn: "She is a good cook." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Govorim hrvatski",
      subtitle: "The most useful sentence a learner owns: Govorim malo hrvatski.",
      emoji: "💬",
      items: [
        { emoji: "🔧", label: "govoriti — your first full verb", hint: "-m -š ∅ -mo -te -e" },
        { emoji: "🗺️", label: "Country → person → language", hint: "Hrvatska → Hrvatica → hrvatski" },
        { emoji: "🆘", label: "Survival chunk", hint: "Ne razumijem. Molim?" },
        { emoji: "🏁", label: "Unit review run", hint: "L1–L4 in 8 quick hits" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Your first full verb",
      subtitle: "Six forms, one rhythm — and it repeats for every verb you'll ever learn.",
      emoji: "🔧",
      items: [
        { emoji: "📊", label: "The govoriti table", hint: "endings mirror biti's rhythm" },
        { emoji: "🗺️", label: "Languages (lowercase!)", hint: "hrvatski, engleski…" },
        { emoji: "🧩", label: "Quick checks" },
      ],
    },
    {
      id: "s03",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u2.hrvatski", "a1u2.engleski", "a1u2.njemacki", "a1u2.francuski",
        "a1u2.govoriti", "a1u2.razumijem", "a1u2.malo", "a1u2.jako",
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "govoriti — to speak",
      body:
        "Your first fully conjugated verb. Drop the **-ti**, add the endings: **-m, -š, ∅, -mo, -te, -e** — the same rhythm you already know from *sam, si, je, smo, ste, su*.\n\nThis is a **preview of the -im class** — the formal tour of verb classes comes in Unit 4. And remember pro-drop: *Govorim hrvatski*, not ~~Ja govorim hrvatski~~ (unless you're stressing the I).",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The rhythm that never leaves you",
        text: "-m · -š · ∅ · -mo · -te · -e — these person endings repeat, with tiny variations, in EVERY Croatian verb class.",
      },
      table: {
        caption: "govoriti — present tense",
        headers: ["person", "form", "ending"],
        rows: [
          ["ja", "govorim", "-m"],
          ["ti", "govoriš", "-š"],
          ["on / ona / ono", "govori", "∅"],
          ["mi", "govorimo", "-mo"],
          ["vi", "govorite", "-te"],
          ["oni", "govore", "-e"],
        ],
      },
      examples: [
        { hr: "Govorim hrvatski i engleski.", en: "I speak Croatian and English." },
        { hr: "Govoriš li njemački? — Ne, ali govorim francuski.", en: "Do you speak German? — No, but I speak French.", note: "the li question works on any verb!" },
        { hr: "Ana govori hrvatski, a Tom govori engleski.", en: "Ana speaks Croatian, and Tom speaks English." },
      ],
    },
    {
      id: "s05",
      type: "quiz-set",
      title: "Quick check: the right form",
      items: [
        {
          prompt: "Oni ___ engleski.",
          options: ["govore", "govorimo", "govoriš"],
          correctIndex: 0,
          explanation: "oni → -e: govore. Jako dobro!",
        },
        {
          prompt: "Mi ___ hrvatski.",
          options: ["govorimo", "govorim", "govore"],
          correctIndex: 0,
          explanation: "mi → -mo: govorimo.",
        },
        {
          prompt: "Listen: what are you being asked?",
          tts: "Govoriš li njemački?",
          options: ["whether YOU speak German", "whether HE speaks German", "whether you speak French"],
          correctIndex: 0,
          explanation: "-š = ti → the question is about you. njemački = German.",
        },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Country → person → language",
      body:
        "Three word families, three spellings: **Hrvatska** (country, capital) → **Hrvat/Hrvatica** (person, capital) → **hrvatski** (language, **lowercase!**).\n\nAfter *govoriti* the language word just sits there unchanged: **govorim hrvatski**. (Why that works is a pattern for a later unit — for now, use it as-is.)\n\nAnd your survival chunk: **Ne razumijem. Molim?** — I don't understand. Pardon?",
      table: {
        caption: "Country → he/she → language",
        headers: ["country", "person (m/f)", "language"],
        rows: [
          ["Hrvatska 🇭🇷", "Hrvat / Hrvatica", "hrvatski"],
          ["Engleska 🇬🇧", "Englez / Engleskinja", "engleski"],
          ["Njemačka 🇩🇪", "Nijemac / Njemica", "njemački"],
          ["Francuska 🇫🇷", "— (pair comes later)", "francuski"],
          ["Kanada 🇨🇦", "Kanađanin / Kanađanka", "engleski i francuski"],
        ],
      },
      examples: [
        { hr: "Ana je Hrvatica i govori hrvatski.", en: "Ana is a Croat and speaks Croatian." },
        { hr: "Ne razumijem. Molim?", en: "I don't understand. Pardon?", note: "your survival chunk — deploy freely" },
        { hr: "Govoriš jako dobro!", en: "You speak very well!", note: "jako = very" },
      ],
      ttsChips: ["hrvatski", "engleski", "njemački", "francuski", "Ne razumijem. Molim?"],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: languages",
      items: [
        {
          prompt: "Ana je Hrvatica. Ona govori ___.",
          options: ["hrvatski", "njemački", "francuski"],
          correctIndex: 0,
          explanation: "Hrvatica → hrvatski (lowercase for the language).",
        },
        {
          prompt: "Which one is a language, not a country?",
          options: ["francuski", "Francuska", "Engleska"],
          correctIndex: 0,
          explanation: "Lowercase -ski = language; capital -ska = country.",
        },
        {
          prompt: "Which one is a PERSON, not a language?",
          options: ["kuharica", "njemački", "engleski"],
          correctIndex: 0,
          explanation: "kuharica = a cook (f) — one of the L3 profession pairs.",
        },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      review: true,
      title: "Unit 1 flashback: the survival kit",
      items: [
        {
          prompt: "You want a stranger's attention — and you're lost. The polite combo?",
          options: ["Oprostite! Ne razumijem.", "Hvala! Doviđenja!", "Bok! Laku noć!"],
          correctIndex: 0,
          explanation: "oprostite (Unit 1 courtesy) + ne razumijem (today's chunk) — the combo that saves every conversation.",
        },
        {
          prompt: "»Kako se zoveš?« — what are you being asked? (Unit 1)",
          options: ["your name", "which languages you speak", "where you are from"],
          correctIndex: 0,
          explanation: "Kako se zoveš? = What's your name? (Unit 1 chunk). Answer: Zovem se… / Ja sam…",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Say it, hear it",
      subtitle: "Drill the forms, then use your own mouth and ears.",
      emoji: "🗣️",
      items: [
        { emoji: "🧩", label: "Fill & type", hint: "production first" },
        { emoji: "🔀", label: "Build a question", hint: "Govoriš li njemački?" },
        { emoji: "🎧", label: "Dictation ×2" },
        { emoji: "🎤", label: "Your languages, out loud" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Tom govori engleski i malo ___.",
      blanks: [["hrvatski"]],
      translation: "Tom speaks English and a little Croatian.",
      wordBank: ["hrvatski", "Hrvatska", "Hrvat"],
      explanation: "The language is lowercase -ski: hrvatski (Hrvatska = the country, Hrvat = the man).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Nijemac govori ___.",
      blanks: [["njemački"]],
      translation: "A German speaks German.",
      wordBank: ["njemački", "Njemačka", "engleski"],
      explanation: "Nijemac (the person) → njemački (the language).",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Translate: “We speak English.”",
      answers: ["Govorimo engleski.", "Govorimo engleski", "Mi govorimo engleski.", "Mi govorimo engleski"],
      hint: "mi → -mo, and pro-drop lets you skip mi.",
      explanation: "Govorimo engleski — pro-drop preferred; Mi govorimo engleski only for emphasis.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Translate: “I speak a little Croatian.”",
      answers: ["Govorim malo hrvatski.", "Govorim malo hrvatski", "Ja govorim malo hrvatski.", "Ja govorim malo hrvatski"],
      explanation: "Govorim malo hrvatski — THE sentence every learner needs first.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Govoriš", "li", "njemački"],
      answers: ["Govoriš li njemački?", "Govoriš li njemački"],
      en: "Do you speak German?",
      explanation: "Verb + li — the L2 question flip works on every verb, not just biti.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Govorim malo hrvatski.",
      explanation: "Govorim malo hrvatski — I speak a little Croatian.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ne razumijem.",
      explanation: "Ne razumijem — I don't understand. (Plain ne + verb; only biti fuses into nisam.)",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Govorim engleski i malo hrvatski.",
      targetEn: "I speak English and a little Croatian. (Adjust to YOUR languages!)",
      phonetic: "GO-vo-rim EN-gle-ski ee MA-lo HR-vat-ski",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · Unit review — Ja sam iz…",
      subtitle: "Eight quick hits across the whole unit: gender, nisam, agreement, numbers.",
      emoji: "🏁",
      items: [
        { emoji: "🔑", label: "Gender (L1)" },
        { emoji: "🙅", label: "nisam & Jesi li (L2)" },
        { emoji: "🎨", label: "Agreement (L3)" },
        { emoji: "🔢", label: "Numbers (L4)" },
        { emoji: "☕", label: "The story cast", hint: "Tom, Ana, Marko" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Unit review I",
      items: [
        {
          prompt: "selo (L1) — which gender?",
          options: ["neuter", "feminine", "masculine"],
          correctIndex: 0,
          explanation: "-o ending → neuter.",
        },
        {
          prompt: "Mi ___ iz Njemačke. (We are NOT from Germany — L2.)",
          options: ["nismo", "nije", "niste"],
          correctIndex: 0,
          explanation: "mi → nismo.",
        },
        {
          prompt: "Kava je ___. (good — L3)",
          options: ["dobra", "dobar", "dobro"],
          correctIndex: 0,
          explanation: "kava f → dobra.",
        },
        {
          prompt: "Listen (L4): which number?",
          tts: "petnaest",
          options: ["15", "5", "50"],
          correctIndex: 0,
          explanation: "petnaest = 15.",
        },
      ],
    },
    {
      id: "s20",
      type: "fill",
      review: true,
      text: "Marko ___ iz Zagreba — on je iz Splita.",
      blanks: [["nije"]],
      translation: "Marko is not from Zagreb — he is from Split.",
      wordBank: ["nije", "nisam", "nisu"],
      explanation: "on → nije (L2), with the L1 iz-chunks.",
    },
    {
      id: "s21",
      type: "mc",
      prompt: "Je li Marko kuhar? (Is Marko a cook?)",
      tts: "Je li Marko kuhar?",
      options: ["Ne, nije — on je konobar.", "Da, on je kuhar.", "On je liječnik."],
      correctIndex: 0,
      explanation: "Marko is the waiter (konobar) of our story — not the kuhar (cook)!",
    },
    {
      id: "s22",
      type: "mc",
      prompt: "Odakle je Tom? (Where is our story's Tom from?)",
      tts: "Odakle je Tom?",
      options: ["Iz Kanade.", "Iz Splita.", "Iz Njemačke."],
      correctIndex: 0,
      explanation: "Tom je Kanađanin — iz Kanade. You'll read his story next!",
    },
    {
      id: "s23",
      type: "listen-type",
      review: true,
      tts: "sedamnaest",
      explanation: "sedamnaest = 17 (L4 — numbers are an ear skill).",
    },
    {
      id: "s24",
      type: "recap",
      summary:
        "**govoriti**: govorim, govoriš, govori, govorimo, govorite, govore — endings **-m -š ∅ -mo -te -e**, the rhythm of every future verb.\n\n**Languages are lowercase**: hrvatski, engleski, njemački, francuski — and after *govoriti* they just sit there: *Govorim malo hrvatski.*\n\n**Survival chunk:** Ne razumijem. Molim?\n\n🏁 **Unit 2 complete!** You can say where you're from, negate, ask yes/no questions, agree adjectives, count to 20 and name your languages. Next: the story «Odakle je Tom?» and the unit test.",
      vocabIds: [
        "a1u2.hrvatski", "a1u2.engleski", "a1u2.njemacki", "a1u2.francuski",
        "a1u2.govoriti", "a1u2.razumijem", "a1u2.malo", "a1u2.jako",
        "a1u2.kuhar", "a1u2.kuharica",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "Ja ___ hrvatski. (speak)", answers: ["govorim"], back: "Ja govorim hrvatski.", tts: "Ja govorim hrvatski." },
    { front: "Ti ___ engleski. (speak)", answers: ["govoriš"], back: "Ti govoriš engleski.", tts: "Ti govoriš engleski." },
    { front: "Ana ___ njemački. (speaks)", answers: ["govori"], back: "Ana govori njemački.", tts: "Ana govori njemački." },
    { front: "Mi ___ hrvatski. (speak)", answers: ["govorimo"], back: "Mi govorimo hrvatski.", tts: "Mi govorimo hrvatski." },
    { front: "Vi ___ engleski. (speak)", answers: ["govorite"], back: "Vi govorite engleski.", tts: "Vi govorite engleski." },
    { front: "Oni ___ francuski. (speak)", answers: ["govore"], back: "Oni govore francuski.", tts: "Oni govore francuski." },
    { front: "Njemačka → the language: ___", answers: ["njemački"], back: "Njemačka → njemački (Nijemac govori njemački)." },
  ],
  notes: {
    inOneSentence: {
      en: "govoriti conjugates with the endings -m, -š, ∅, -mo, -te, -e — and language names (lowercase!) follow it unchanged: Govorim malo hrvatski.",
      exampleHr: "Govorim hrvatski. Govoriš li njemački?",
    },
    deepDive: [
      {
        title: "govoriti — the full table, and why it matters beyond this verb",
        body:
          "This is your **-im class preview** (the formal tour of the three present-tense classes -am/-im/-em comes in Unit 4). The person endings **-m, -š, ∅, -mo, -te, -e** are the skeleton of the entire Croatian verb system — only the vowel before them changes by class.\n\nEverything you learned about *biti* transfers: the **li question** (*Govoriš li hrvatski?*), plain **ne** negation (*ne govorim* — no fusion here, only biti/htjeti/imati fuse), and **pro-drop** (*Govorim hrvatski*, no *ja* needed).",
        table: {
          caption: "govoriti — present",
          headers: ["person", "form"],
          rows: [
            ["ja", "govorim"],
            ["ti", "govoriš"],
            ["on/ona/ono", "govori"],
            ["mi", "govorimo"],
            ["vi", "govorite"],
            ["oni", "govore"],
          ],
        },
      },
      {
        title: "Country → person → language: three spellings, one family",
        body:
          "**Hrvatska → Hrvat/Hrvatica → hrvatski.** Countries and people are capitalized; **languages are lowercase**. After *govoriti*, the language word appears in its bare -ski form and doesn't visibly change: *govorim hrvatski, govorimo engleski*. (There's a case story hiding here — parked until much later; use the pattern as-is.)\n\nCanada's languages: *Kanađanin govori engleski i francuski* — no “kanadski” language exists!",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Hrvatska 🇭🇷", example: "country — capital letter" },
            { label: "Hrvat / Hrvatica", example: "person — capital letter" },
            { label: "hrvatski", example: "language — lowercase!" },
          ],
        },
      },
      {
        title: "razumijem — the survival chunk",
        body:
          "**Razumijem** = I understand · **Ne razumijem** = I don't understand · **Ne razumijem. Molim?** = the polite full emergency kit (Unit 1's *molim* doing its “pardon?” job).\n\nIt's the 1st-person form of *razumjeti* — taught as a chunk for now; its full conjugation joins the -em class story later. Note the ijekavian split: razum**ije**m (long) but razum**je**ti (short).",
      },
    ],
    commonMistakes: [
      {
        wrong: "govorim hrvatskom / govorim na hrvatski",
        right: "govorim hrvatski",
        why: "After govoriti the bare -ski form just sits there — no preposition, no ending change (at A1).",
      },
      {
        wrong: "Ja govorim, ti govoriš… (pronoun before every verb)",
        right: "Govorim. Govoriš. — drop the pronoun",
        why: "Pro-drop (Unit 1): the ending already says who; pronouns only for contrast/emphasis.",
      },
      {
        wrong: "Govorim Hrvatski. (capital H)",
        right: "govorim hrvatski (lowercase)",
        why: "Languages are lowercase in Croatian; only countries and people take capitals.",
      },
      {
        wrong: "Razumiješ? answered with “Razumiješ.”",
        right: "Razumiješ? (do YOU understand?) → Razumijem! (I understand)",
        why: "-š asks about you; -m answers about me — swap the ending when you answer.",
      },
    ],
    memoryHooks: [
      "-m -š ∅ -mo -te -e: hum it like a scale — it repeats for every verb class in the language.",
      "Capital = place or person, lowercase = language: Hrvatska, Hrvat, hrvatski.",
      "Ne razumijem. Molim? — your parachute. Pull it early, pull it often.",
      "govore = they talk — -e is the “they” ending, sitting exactly where biti has su.",
    ],
    connects: [
      { label: "Yes/no questions with li — now on any verb (L2)", lessonId: "a1u2l2" },
      { label: "Nationalities the languages grew from (L2)", lessonId: "a1u2l2" },
      { label: "The three present-tense classes, formally (Unit 4)", lessonId: "a1u4l2" },
    ],
    selfCheck: [
      { q: "Conjugate govoriti for mi and oni.", a: "govorimo (mi), govore (oni)." },
      { q: "Ask a friend if they speak German.", a: "Govoriš li njemački?" },
      { q: "Why is “govorim Hrvatski” misspelled?", a: "Languages are lowercase: govorim hrvatski." },
      { q: "You didn't catch what someone said. Your two-word emergency kit?", a: "Ne razumijem. (Molim?)" },
      { q: "What does a Kanađanin speak?", a: "engleski i francuski — there's no “kanadski” language." },
    ],
  },
};
