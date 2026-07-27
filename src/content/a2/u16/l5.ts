import type { Lesson } from "@/types/content";

/**
 * A2 U16 L5 — Moja priča (my story & plans — unit AND level review)
 * Spec: curriculum/A2/unit-16.md — the A2 exit performance: one connected
 * narrative, past (aspect-correct) → present → future (aspect-correct).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 */
export const a2u16l5: Lesson = {
  id: "a2u16l5",
  unitId: "a2u16",
  title: "Moja priča",
  titleEn: "My story — the A2 capstone",
  grammarTags: ["capstone", "aspect", "review"],
  estMinutes: 21,
  vocab: [
    { id: "a2u16.prica", hr: "priča", en: "story", pos: "noun", gender: "f", icon: "📖", exampleHr: "Ovo je moja priča.", exampleEn: "This is my story." },
    { id: "a2u16.pocetak", hr: "početak", en: "beginning (GEN početka)", pos: "noun", gender: "m", icon: "🌅", exampleHr: "To je početak priče.", exampleEn: "That's the beginning of the story." },
    { id: "a2u16.kraj", hr: "kraj", en: "end (na kraju = in the end)", pos: "noun", gender: "m", icon: "🌇", exampleHr: "Kraj je sretan!", exampleEn: "The ending is happy!" },
    { id: "a2u16.sjecatise", hr: "sjećati se", en: "to remember (+ GEN!)", pos: "verb", icon: "💭", exampleHr: "Sjećam se djetinjstva.", exampleEn: "I remember my childhood." },
    { id: "a2u16.proslost", hr: "prošlost", en: "the past (f — an -i noun)", pos: "noun", gender: "f", icon: "⏪", exampleHr: "Ne živim u prošlosti.", exampleEn: "I don't live in the past." },
    { id: "a2u16.sadasnjost", hr: "sadašnjost", en: "the present (f)", pos: "noun", gender: "f", icon: "📍", exampleHr: "Sadašnjost je lijepa.", exampleEn: "The present is beautiful." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moja priča",
      subtitle: "Sixteen units ago you couldn't read »dobar dan«. Today you tell your life story in Croatian.",
      emoji: "🏆",
      items: [
        { emoji: "⏪", label: "PROŠLOST", hint: "pins & waves" },
        { emoji: "📍", label: "SADAŠNJOST", hint: "who you are now" },
        { emoji: "🎯", label: "BUDUĆNOST", hint: "flags ahead" },
        { emoji: "🏔️", label: "A2 victory lap", hint: "everything, one review" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The three panels",
      subtitle: "Every story you'll ever tell fits three panels: was, is, will be.",
      emoji: "📖",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "yesterday's frames" },
        { emoji: "🖼️", label: "The arc", hint: "PROŠLOST · SADAŠNJOST · BUDUĆNOST" },
        { emoji: "🃏", label: "Story words", hint: "6 new" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the frames from yesterday",
      items: [
        {
          prompt: "Your line one: »___ sam se u Kanadi.« (roditi, m)",
          options: ["Rodio", "Rodila", "Rodi"],
          correctIndex: 0,
          explanation: "Rodio sam se — the first pin of every story.",
        },
        {
          prompt: "U13 comparative: »Život u Hrvatskoj je ___.« (more beautiful)",
          options: ["ljepši", "najljepši", "lijep"],
          correctIndex: 0,
          explanation: "ljepši — you'll want it for your plans panel.",
        },
        {
          prompt: "Listen (U9 + U15): what's the promise?",
          tts: "Javit ću vam se iz Splita.",
          options: [
            "I'll get in touch with you from Split",
            "I'm calling you to Split",
            "I got in touch from Split",
          ],
          correctIndex: 0,
          explanation: "ću vam se — future + the clitic train, both yours now.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The storyteller's words",
      vocabIds: [
        "a2u16.prica", "a2u16.pocetak", "a2u16.kraj",
        "a2u16.sjecatise", "a2u16.proslost", "a2u16.sadasnjost",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The three-panel arc",
      body:
        "One connected story, three panels — each with its frames:\n\n**sjećati se + GEN** opens memories: *Sjećam se **djetinjstva**.* And the panels' names decline like old friends: *u prošlosti, u sadašnjosti* (-i nouns, like noć).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "PROŠLOST ⏪", emoji: "⏪", example: "Rodio sam se… Odrastao sam… Završio sam…" },
          { label: "SADAŠNJOST 📍", emoji: "📍", example: "Sada živim u… Radim kao… Učim hrvatski." },
          { label: "BUDUĆNOST 🎯", emoji: "🎯", example: "Planiram… Preselit ću se… Moj san je…" },
        ],
      },
      examples: [
        { hr: "Planiram naučiti hrvatski do ljeta.", en: "I plan to learn Croatian by the summer." },
        { hr: "Moj san je živjeti u Hrvatskoj.", en: "My dream is to live in Croatia." },
        { hr: "Sljedeće godine preselit ću se u Split.", en: "Next year I'll move to Split." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The A2 victory lap 🏆",
      body:
        "Look what's on your table now — ALL of it earned:\n\n- **7 cases** — NOM ACC LOC GEN DAT INS VOC, singular and (GEN) plural\n- **3 tenses** — present, perfekt, future I — now aspect-aware 〰️✅\n- **the clitic train** — *li → aux → DAT → ACC → se → je*\n- **the people-tools** — vocative, imperative, wishes, registers, e-mails\n\nThe checkpoint exam after this unit is a lap of THIS list — nothing new, everything yours.",
      diagram: {
        kind: "callout",
        tone: "success",
        title: "A2, complete",
        text: "7 cases · 3 aspect-aware tenses · the clitic train · counting & comparing · a life story told — the checkpoint exam is your victory lap.",
      },
      examples: [
        { hr: "Sjećam se početka: »Dobar dan! Ja sam Tom.«", en: "I remember the beginning: \"Good day! I'm Tom.\"", note: "your literal first lesson" },
        { hr: "Sada pišem, čitam i govorim hrvatski.", en: "Now I write, read and speak Croatian." },
        { hr: "Ovo nije kraj — ovo je početak!", en: "This isn't the end — it's the beginning!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: the storyteller's kit",
      items: [
        {
          prompt: "»Sjećam se ___.« (djetinjstvo)",
          options: ["djetinjstva", "djetinjstvo", "djetinjstvu"],
          correctIndex: 0,
          explanation: "sjećati se + GEN: djetinjstva.",
        },
        {
          prompt: "The three panels, in Croatian:",
          options: [
            "prošlost, sadašnjost, budućnost",
            "početak, priča, kraj",
            "jučer, danas, sutra",
          ],
          correctIndex: 0,
          explanation: "past, present, future — your story's architecture.",
        },
        {
          prompt: "»na kraju« means…",
          options: ["in the end", "at the beginning", "next year"],
          correctIndex: 0,
          explanation: "kraj = end; na kraju = in the end (your U8 chunk, now owned).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Build YOUR story",
      subtitle: "Guided first, then free — seven blanks, then your own three panels.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "The story builder", hint: "one fill, three panels" },
        { emoji: "⌨️", label: "Three own lines", hint: "one per panel" },
        { emoji: "🎧", label: "Hear two dreams", hint: "dictation" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Rodio sam se u Kanadi. ___ sam u Torontu. (odrasti, m) Sada ___ hrvatski svaki dan. (učiti — the habit!) Moj cilj je ___ hrvatski do ljeta. (learn it fully!) Sljedeće godine ___ ću se u Hrvatsku. (preseliti)",
      blanks: [["Odrastao", "odrastao"], ["učim", "ucim"], ["naučiti", "nauciti"], ["preselit"]],
      translation: "I was born in Canada. I grew up in Toronto. Now I study Croatian every day. My goal is to learn Croatian by the summer. Next year I'll move to Croatia.",
      explanation: "Past pins → present habit (impf!) → goal (pf!) → future flag. The whole arc in five sentences.",
    },
    {
      id: "s10",
      type: "type",
      prompt: "PROŠLOST — one true sentence about your past (model: »Rodio sam se u Kanadi.«)",
      answers: ["Rodio sam se u Kanadi.", "Rodila sam se u Kanadi.", "Odrastao sam u Torontu.", "Odrasla sam u Torontu.", "Rodio sam se u Kanadi", "Rodila sam se u Kanadi"],
      hint: "any milestone frame — graded against the models",
      explanation: "Any pin works: Rodio/Rodila sam se u…, Odrastao/Odrasla sam u…, Završio/Završila sam školu.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "SADAŠNJOST — one sentence about now (model: »Učim hrvatski svaki dan.«)",
      answers: ["Učim hrvatski svaki dan.", "Učim hrvatski svaki dan", "Ucim hrvatski svaki dan.", "Sada učim hrvatski svaki dan."],
      hint: "present + a habit — imperfective!",
      explanation: "Učim hrvatski svaki dan — the present panel runs on imperfectives.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "BUDUĆNOST — one plan (model: »Preselit ću se u Hrvatsku.«)",
      answers: ["Preselit ću se u Hrvatsku.", "Preselit ću se u Hrvatsku", "Preselit cu se u Hrvatsku.", "Naučit ću hrvatski.", "Napravit ću plan."],
      hint: "future I + the right aspect",
      explanation: "Preselit ću se u Hrvatsku — a flag planted ahead.",
    },
    {
      id: "s21",
      type: "reorder",
      words: ["Sljedeće", "godine", "preselit", "ću", "se", "u", "Hrvatsku"],
      answers: ["Sljedeće godine preselit ću se u Hrvatsku.", "Sljedeće godine preselit ću se u Hrvatsku"],
      en: "Next year I'll move to Croatia.",
      explanation: "Time engine + preselit + ću se (aux → se) + u + ACC.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "Moj san je živjeti u Hrvatskoj.",
      explanation: "Moj san je živjeti u Hrvatskoj — my dream is to live in Croatia.",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Planiram naučiti hrvatski do ljeta.",
      explanation: "Planiram naučiti hrvatski do ljeta — I plan to learn Croatian by summer.",
    },
    {
      id: "s15",
      type: "speak",
      targetHr: "Rodio sam se u Kanadi. Odrastao sam u Torontu. Sada živim u Zagrebu i učim hrvatski. Moj cilj je naučiti hrvatski. Sljedeće godine preselit ću se u Split.",
      targetEn: "tell YOUR story in 5+ sentences — past pins, present habits, future flags. The model is Tom's; swap in your own life.",
      phonetic: "speak slowly — pins first, then waves, then flags",
    },
    {
      id: "s16",
      type: "quiz-set",
      review: true,
      title: "Tom's story — the course's own arc",
      items: [
        {
          prompt: "Tom's PROŠLOST: »Tom je prošle godine počeo učiti hrvatski.« — which unit was that, in real life?",
          options: ["Unit 1 — Dobar dan!", "Unit 8", "Unit 12"],
          correctIndex: 0,
          explanation: "You were there: Dobar dan! Ja sam Tom. — the beginning of the priča.",
        },
        {
          prompt: "Tom's SADAŠNJOST: »Radi kao učitelj engleskog i dopisuje se s Anom.« What does he do?",
          options: [
            "works as an English teacher and texts with Ana",
            "studies English and calls Marko",
            "works in a café and writes a CV",
          ],
          correctIndex: 0,
          explanation: "radi kao + NOM (U12) · dopisuje se s + INS (U15/U12).",
        },
        {
          prompt: "Listen — Tom's BUDUĆNOST:",
          tts: "Sljedeće godine preselit ću se u Hrvatsku. Ovdje je moj život.",
          options: [
            "he'll move to Croatia — his life is here",
            "he moved to Croatia last year",
            "he dreams of visiting Croatia once",
          ],
          correctIndex: 0,
          explanation: "preselit ću se — the flag is planted. (The story after this lesson tells the rest.)",
        },
      ],
    },
    {
      id: "s17",
      type: "section",
      title: "Part 3 · The victory lap — unit & level review",
      subtitle: "Eight questions: U16 first, then a taste of U13–15. The checkpoint exam awaits.",
      emoji: "🏔️",
      items: [
        { emoji: "〰️", label: "Aspect sweep", hint: "L1–L4 sample" },
        { emoji: "🏆", label: "A2 sampler", hint: "cases · clitics · comparisons" },
      ],
    },
    {
      id: "s18",
      type: "quiz-set",
      title: "Review I — the aspect unit (L1–L4)",
      items: [
        {
          prompt: "»Jučer sam ___ knjigu cijeli dan.«",
          options: ["čitao", "pročitao", "čitam"],
          correctIndex: 0,
          explanation: "cijeli dan → imperfective.",
        },
        {
          prompt: "»___ ću plan do petka.«",
          options: ["Napravit", "Radit", "Napravim"],
          correctIndex: 0,
          explanation: "Deadline → perfective future.",
        },
        {
          prompt: "pisati → its done-partner:",
          options: ["napisati", "pisao", "pišem"],
          correctIndex: 0,
          explanation: "napisati.",
        },
        {
          prompt: "»Ana je završila školu i preselila ___.«",
          options: ["se", "se je", "je se"],
          correctIndex: 0,
          explanation: "se alone — je already served the chain.",
        },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Review II — the A2 sampler (U13–15)",
      items: [
        {
          prompt: "U13: »Zagreb je veći ___ Splita.«",
          options: ["od", "nego", "iz"],
          correctIndex: 0,
          explanation: "od + GEN.",
        },
        {
          prompt: "U13: pet ___ (mačka)",
          options: ["mačaka", "mačke", "mački"],
          correctIndex: 0,
          explanation: "GEN pl with the inserted a.",
        },
        {
          prompt: "U14: »Božić je dvadeset petog ___.«",
          options: ["prosinca", "prosinac", "prosincu"],
          correctIndex: 0,
          explanation: "Dates in bare GEN.",
        },
        {
          prompt: "U15: She gave it to him =",
          options: ["Dala mu ga je.", "Dala je mu ga.", "Dala ga mu je."],
          correctIndex: 0,
          explanation: "DAT → ACC → je-caboose.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Your story, in three panels**: PROŠLOST (pins & waves: *rodio sam se, živio sam*) → SADAŠNJOST (*učim, radim, dopisujem se*) → BUDUĆNOST (*preselit ću se, naučit ću*).\n\n**A2 is complete**: 7 cases · 3 aspect-aware tenses · the clitic train · counting, comparing, calling, commanding, wishing, writing.\n\nWords tonight: **priča, početak, kraj, sjećati se, prošlost, sadašnjost**.\n\nNext: the story — «Priča bake Marije» — the unit test, and then the **A2 checkpoint exam**. Ovo nije kraj — ovo je početak!",
      vocabIds: [
        "a2u16.prica", "a2u16.pocetak", "a2u16.kraj",
        "a2u16.sjecatise", "a2u16.proslost", "a2u16.sadasnjost",
      ],
    },
  ],
  srsCloze: [
    { front: "Sjećam se ___. (djetinjstvo — mind the case!)", answers: ["djetinjstva"], back: "sjećati se + GEN: djetinjstva.", tts: "Sjećam se djetinjstva." },
    { front: "the three panels: prošlost · ___ · budućnost", answers: ["sadašnjost", "sadasnjost"], back: "sadašnjost — the present.", tts: "prošlost, sadašnjost, budućnost" },
    { front: "beginning = ___ (m, GEN početka)", answers: ["početak", "pocetak"], back: "početak (To je početak priče.)", tts: "To je početak priče." },
    { front: "in the end = na ___", answers: ["kraju"], back: "na kraju — kraj in LOC.", tts: "na kraju" },
    { front: "story = ___ (f)", answers: ["priča", "prica"], back: "priča (Ovo je moja priča.)", tts: "Ovo je moja priča." },
    { front: "My story, line 1 (m): ___ sam se u Kanadi.", answers: ["Rodio", "rodio"], back: "Rodio sam se u Kanadi.", tts: "Rodio sam se u Kanadi." },
    { front: "My story, last line: Sljedeće godine ___ ću se u Hrvatsku.", answers: ["preselit"], back: "preselit ću se — the future flag.", tts: "Sljedeće godine preselit ću se u Hrvatsku." },
  ],
  notes: {
    inOneSentence: {
      en: "The capstone: one connected story in three panels — past milestones with correct aspect, present habits, future plans — rehearsing exactly what the A2 checkpoint's speaking and writing tasks will ask.",
      exampleHr: "Rodio sam se u Kanadi. Sada učim hrvatski. Sljedeće godine preselit ću se u Hrvatsku.",
    },
    deepDive: [
      {
        title: "The three-panel frame set",
        body:
          "Copy, personalize, rehearse — this page is your checkpoint study sheet:",
        table: {
          caption: "Frames per panel",
          headers: ["panel", "frames"],
          rows: [
            ["PROŠLOST ⏪", "Rodio/Rodila sam se u [LOC] · Odrastao/Odrasla sam u [LOC] · Živio/Živjela sam tamo [X] godina · Završio/Završila sam školu · Preselio/Preselila sam se u [ACC]"],
            ["SADAŠNJOST 📍", "Sada živim u [LOC] · Radim kao [NOM] · Učim hrvatski svaki dan · Sviđa mi se [NOM]"],
            ["BUDUĆNOST 🎯", "Planiram [pf infinitive] · [pf]-t ću … do [GEN] · Moj cilj/san je [infinitive] · Nadam se — uspjet ću!"],
          ],
        },
      },
      {
        title: "The A2 exit checklist",
        body:
          "Everything the checkpoint samples, and where you earned it:\n\n- **Cases**: NOM/ACC (U2–U6) · LOC (U5) · GEN sg (U7) + pl (U13) · DAT (U10) · INS (U12) · VOC (U14)\n- **Tenses**: present (U2–U7) · perfekt + clitic law (U8) · future I (U9) — with aspect (U16)\n- **Systems**: counting bracket (U13) · comparatives/superlatives (U13) · dates (U14) · imperative & wishes (U14) · clitic train (U15) · registers & e-mail (U15)\n- **Performances**: order food (U4) · shop (U7) · directions (U5) · doctor (U11) · interview (U12) · phone call (U15) · life story (U16)",
      },
      {
        title: "sjećati se — the memory verb",
        body:
          "*sjećati se* takes the GENITIVE — you remember OF something (like nema + GEN):\n\n*Sjećam se **djetinjstva**. Sjećam se **početka**. Sjećaš li se **mora**?*\n\nIt's imperfective (memories are wavy by nature) and its se rides the train: *Sjećam **ga se*** (I remember it) is a B1 cluster — for now keep the noun: *Sjećam se početka.*",
      },
    ],
    commonMistakes: [
      {
        wrong: "Sjećam se djetinjstvo.",
        right: "Sjećam se djetinjstva.",
        why: "sjećati se governs the genitive.",
      },
      {
        wrong: "Sada naučim hrvatski svaki dan.",
        right: "Sada učim hrvatski svaki dan.",
        why: "Present habits are imperfective — naučiti is the finish line, not the routine.",
      },
      {
        wrong: "Moj cilj je učiti hrvatski. (meaning: master it by summer)",
        right: "Moj cilj je naučiti hrvatski (do ljeta).",
        why: "A goal is a completed result → perfective naučiti.",
      },
      {
        wrong: "Preselit ću se u Hrvatskoj.",
        right: "Preselit ću se u Hrvatsku.",
        why: "Moving = direction → u + ACC.",
      },
    ],
    memoryHooks: [
      "Three panels, three verb moods: pins ⏪, habits 📍, flags 🎯.",
      "prošlost–sadašnjost–budućnost: the -ost sisters (all feminine -i nouns).",
      "sjećati SE + GEN — memories are 'of' things.",
      "Ovo nije kraj — ovo je početak: the A2 exit line worth memorizing whole.",
    ],
    connects: [
      { label: "The biography frames (Unit 16 L4)", lessonId: "a2u16l4" },
      { label: "Future plans, aspect-correct (Unit 16 L3)", lessonId: "a2u16l3" },
      { label: "The A2 checkpoint exam — your victory lap", lessonId: "a2u16l5" },
    ],
    selfCheck: [
      { q: "Tell your story's first, middle and last line.", a: "Rodio/Rodila sam se u… · Sada učim hrvatski svaki dan. · Sljedeće godine preselit ću se u…" },
      { q: "»I remember my childhood« = ?", a: "Sjećam se djetinjstva. (GEN!)" },
      { q: "Which aspect for present habits? For goals?", a: "Imperfective (učim svaki dan); perfective (cilj je naučiti)." },
      { q: "The -ost trio?", a: "prošlost, sadašnjost, budućnost — all feminine -i nouns." },
      { q: "What comes after this unit?", a: "The story, the unit test, and the A2 checkpoint exam." },
    ],
  },
};
