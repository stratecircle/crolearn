import type { Lesson } from "@/types/content";

/**
 * A2 U16 L4 — Životna priča (narrating a life)
 * Spec: curriculum/A2/unit-16.md — no new machinery; the biography schema:
 * perfective milestones on an imperfective background + sequencers.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * životopis & iskustvo recycled (U12); uspjeh promoted from U12 story gloss
 * to taught vocab.
 */
export const a2u16l4: Lesson = {
  id: "a2u16l4",
  unitId: "a2u16",
  title: "Životna priča",
  titleEn: "A life story — milestones on a timeline",
  grammarTags: ["biography-schema", "aspect-past", "sequencers"],
  estMinutes: 19,
  vocab: [
    { id: "a2u16.zivot", hr: "život", en: "life", pos: "noun", gender: "m", icon: "🌍", exampleHr: "Moj život je u Zagrebu.", exampleEn: "My life is in Zagreb." },
    { id: "a2u16.vjencanje", hr: "vjenčanje", en: "wedding", pos: "noun", gender: "n", icon: "💒", exampleHr: "Vjenčanje je u svibnju.", exampleEn: "The wedding is in May." },
    { id: "a2u16.vjencatise", hr: "vjenčati se", en: "to get married (pf)", pos: "verb", icon: "💍", exampleHr: "Vjenčali su se prošle godine.", exampleEn: "They got married last year." },
    { id: "a2u16.zavrsiti", hr: "završiti", en: "to finish (pf; završim)", pos: "verb", icon: "🎓", exampleHr: "Završila sam školu.", exampleEn: "I finished school." },
    { id: "a2u16.uspjeh", hr: "uspjeh", en: "success", pos: "noun", gender: "m", icon: "🏆", exampleHr: "To je velik uspjeh!", exampleEn: "That's a big success!" },
    { id: "a2u16.brak", hr: "brak", en: "marriage", pos: "noun", gender: "m", icon: "💞", exampleHr: "Njihov brak je sretan.", exampleEn: "Their marriage is a happy one." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Životna priča",
      subtitle: "Born, grew up, finished school, moved — this is the shape of every biography in Croatian.",
      emoji: "📖",
      items: [
        { emoji: "📌", label: "Milestones = pins", hint: "perfective points" },
        { emoji: "〰️", label: "Decades = waves", hint: "imperfective stretches" },
        { emoji: "🪜", label: "The frame ladder", hint: "Rodio sam se u…" },
        { emoji: "🎤", label: "Your first lines", hint: "say your own start" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The life timeline",
      subtitle: "One line, pinned events, shaded decades — a whole biography at a glance.",
      emoji: "📌",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "iz Kanade · u Zagrebu · se" },
        { emoji: "📖", label: "Hear a life", hint: "the 5-sentence model" },
        { emoji: "🪜", label: "The frames", hint: "with both gender forms" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the pieces of a biography",
      items: [
        {
          prompt: "U2/U9 origin: »Tom je ___ Kanade.« (from)",
          options: ["iz", "od", "do"],
          correctIndex: 0,
          explanation: "iz + GEN — the origin line of every life story.",
        },
        {
          prompt: "U15 collision: »Ana se ___ u Zagreb.« (preseliti, perfekt)",
          options: ["preselila", "preselila je", "je preselila"],
          correctIndex: 0,
          explanation: "se + je → je drops: Ana se preselila.",
        },
        {
          prompt: "Listen (yesterday): what's her goal?",
          tts: "Moj cilj je naučiti hrvatski.",
          options: ["to learn Croatian", "to study daily", "to teach Croatian"],
          correctIndex: 0,
          explanation: "cilj + perfective infinitive naučiti.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The biography words",
      vocabIds: [
        "a2u16.zivot", "a2u16.vjencanje", "a2u16.vjencatise",
        "a2u16.zavrsiti", "a2u16.uspjeh", "a2u16.brak",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "A life is pins on a wavy line",
      body:
        "Every biography is the same machine: **perfective milestones** (pins 📌) on an **imperfective background** (waves 〰️), stitched with the sequencers you've had since U6: *prvo, onda, poslije, na kraju*.\n\n*PRVO sam se rodio… ONDA sam odrastao… POSLIJE sam završio školu… NA KRAJU sam se preselio.*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "rodio se 👶", emoji: "👶", example: "Rodio sam se u Kanadi." },
          { label: "odrastao 🌱", emoji: "🌱", example: "Odrastao sam u Torontu." },
          { label: "završio školu 🎓", emoji: "🎓", example: "Završio sam školu." },
          { label: "upoznao 🤝 · vjenčao se 💍", emoji: "💍", example: "Upoznao sam Anu…" },
          { label: "preselio se 📦", emoji: "📦", example: "Preselio sam se u Zagreb." },
        ],
      },
      examples: [
        { hr: "Rodio sam se u Kanadi.", en: "I was born in Canada." },
        { hr: "Baka Marija je odrasla u Slavoniji.", en: "Grandma Marija grew up in Slavonia." },
        { hr: "Ana je završila školu i preselila se u Zagreb.", en: "Ana finished school and moved to Zagreb.", note: "one je serves both — and se eats the second one" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The frame ladder — and the wavy decades",
      body:
        "The pins get frames (both gender forms — pick YOURS):\n\nBetween the pins stretch the wavy decades: *Živio sam u Torontu deset godina. Radila je u školi.* — background, duration, imperfective.\n\nCV words for later: **životopis** (U12!) is exactly this lesson in formal dress — *iskustvo, uspjeh, brak*.",
      table: {
        caption: "The biography frames",
        headers: ["milestone", "m says", "f says"],
        rows: [
          ["birth", "Rodio sam se u…", "Rodila sam se u…"],
          ["growing up", "Odrastao sam u…", "Odrasla sam u…"],
          ["school", "Završio sam školu.", "Završila sam školu."],
          ["meeting", "Upoznao sam…", "Upoznala sam…"],
          ["marriage", "Vjenčao sam se.", "Vjenčala sam se."],
          ["the move", "Preselio sam se u…", "Preselila sam se u…"],
        ],
      },
      examples: [
        { hr: "Živio sam u Torontu deset godina.", en: "I lived in Toronto for ten years.", note: "the wavy background — imperfective" },
        { hr: "Vjenčali su se prošle godine.", en: "They got married last year." },
        { hr: "Njihov brak je sretan — to je velik uspjeh!", en: "Their marriage is happy — that's a big success!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pin or wave?",
      items: [
        {
          prompt: "»___ sam u Torontu deset godina.« (the wavy decade)",
          options: ["Živio", "Preselio se", "Rodio se"],
          correctIndex: 0,
          explanation: "Ten years of background → imperfective živio.",
        },
        {
          prompt: "»Ana je ___ školu.« (finished it)",
          options: ["završila", "završavala", "završi"],
          correctIndex: 0,
          explanation: "One milestone → perfective završila.",
        },
        {
          prompt: "The natural order of a biography:",
          options: [
            "rodio se → odrastao → završio školu → preselio se",
            "preselio se → rodio se → odrastao",
            "završio školu → rodio se → odrastao",
          ],
          correctIndex: 0,
          explanation: "Pins in life order — prvo, onda, poslije, na kraju.",
        },
        {
          prompt: "»Vjenčali su se.« means…",
          options: ["they got married", "they are getting married", "they will marry"],
          correctIndex: 0,
          explanation: "Perfekt of vjenčati se — a done milestone.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Build the biographies",
      subtitle: "The cast's lives first, then the opening lines of yours.",
      emoji: "🪜",
      items: [
        { emoji: "✏️", label: "Cast biographies", hint: "three fills" },
        { emoji: "⌨️", label: "Your own lines", hint: "two sentences" },
        { emoji: "🔀", label: "One life, ordered", hint: "reorder the milestones" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Baka se ___ u Slavoniji. (vjenčati)",
      blanks: [["vjenčala", "vjencala"]],
      translation: "Grandma got married in Slavonia.",
      wordBank: ["vjenčala", "vjenčao", "vjenčati"],
      explanation: "baka (f) → vjenčala; se+je → no je.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Marko je ___ školu u Splitu. (završiti)",
      blanks: [["završio", "zavrsio"]],
      translation: "Marko finished school in Split.",
      wordBank: ["završio", "završila", "završiti"],
      explanation: "Marko (m) → završio.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana se ___ u Zagreb i sada radi kao učiteljica. (preseliti)",
      blanks: [["preselila"]],
      translation: "Ana moved to Zagreb and now works as a teacher.",
      wordBank: ["preselila", "preselio", "preseliti"],
      explanation: "Milestone (pf) + the U12 raditi kao present.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Line one of YOUR story: “I was born in Canada.” (your participle form)",
      answers: ["Rodio sam se u Kanadi.", "Rodila sam se u Kanadi.", "Rodio sam se u Kanadi", "Rodila sam se u Kanadi"],
      hint: "roditi SE",
      explanation: "Rodio/Rodila sam se u Kanadi.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Line two: “I grew up in Toronto.”",
      answers: ["Odrastao sam u Torontu.", "Odrasla sam u Torontu.", "Odrastao sam u Torontu", "Odrasla sam u Torontu"],
      hint: "odrastao/odrasla + u + LOC",
      explanation: "Odrastao/Odrasla sam u Torontu.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Završila", "je", "školu", "i", "preselila", "se"],
      answers: ["Završila je školu i preselila se.", "Završila je školu i preselila se"],
      en: "She finished school and moved.",
      explanation: "je after the first participle; the second clause keeps only se.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears, voice & the cast's lives",
      subtitle: "Hear two biographies, then start telling yours.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "rodila se · završio" },
        { emoji: "🎤", label: "Your opening", hint: "two lines, out loud" },
        { emoji: "🔗", label: "U12 echo", hint: "životopis = this, formalized" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Baka Marija je odrasla u Slavoniji.",
      explanation: "Baka Marija je odrasla u Slavoniji — grandma grew up in Slavonia.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ana je završila školu i preselila se u Zagreb.",
      explanation: "Ana je završila školu i preselila se u Zagreb — two milestones, one je.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Rodio sam se u Kanadi. Odrastao sam u Torontu.",
      targetEn: "say the first two sentences of YOUR life story (f: Rodila sam se… Odrasla sam…)",
      phonetic: "RO-dee-o sam se oo ka-NA-dee",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the cast's stories click into place",
      items: [
        {
          prompt: "U12 flashback: what is a »životopis«, really?",
          options: [
            "your life story in formal dress — a CV",
            "a biography of someone famous",
            "a wedding invitation",
          ],
          correctIndex: 0,
          explanation: "životopis = život + pisati — today's frames, formalized. Tom wrote one in U12!",
        },
        {
          prompt: "Listen (U8 + today): what did Tom do last year?",
          tts: "Tom je prošle godine počeo učiti hrvatski.",
          options: [
            "started learning Croatian",
            "finished learning Croatian",
            "taught Croatian",
          ],
          correctIndex: 0,
          explanation: "počeo (pf of početi!) + učiti — the course's own origin story.",
        },
        {
          prompt: "U10 + U16: »Marko se preselio u Split i radi u restoranu.« — pin and wave?",
          options: [
            "preselio se = pin, radi = wave",
            "both pins",
            "both waves",
          ],
          correctIndex: 0,
          explanation: "One milestone (moved), then ongoing background (works).",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The biography schema**: perfective pins (*rodio sam se → odrastao → završio školu → upoznao → vjenčao se → preselio se*) on imperfective waves (*živio sam…, radila je…*), stitched with *prvo, onda, poslije, na kraju*.\n\n**Guard rails**: never drop the se (*rodio sam SE*), se eats je (*preselila se*), participles agree with YOU (*rodio/rodila*).\n\nWords tonight: **život, vjenčanje, vjenčati se, završiti, uspjeh, brak**.\n\nNext: the capstone — your WHOLE story, past → present → plans.",
      vocabIds: [
        "a2u16.zivot", "a2u16.vjencanje", "a2u16.vjencatise",
        "a2u16.zavrsiti", "a2u16.uspjeh", "a2u16.brak",
      ],
    },
  ],
  srsCloze: [
    { front: "Rodio sam ___ u Kanadi. (never drop it!)", answers: ["se"], back: "roditi se — Rodio sam se u Kanadi.", tts: "Rodio sam se u Kanadi." },
    { front: "Ana je završila školu i preselila ___. (watch the collision)", answers: ["se"], back: "…i preselila se — se alone, je already served.", tts: "Ana je završila školu i preselila se." },
    { front: "to get married = ___ se (pf)", answers: ["vjenčati", "vjencati"], back: "vjenčati se (Vjenčali su se prošle godine.)", tts: "Vjenčali su se prošle godine." },
    { front: "I finished school (f): ___ sam školu.", answers: ["Završila", "završila", "Zavrsila"], back: "Završila sam školu.", tts: "Završila sam školu." },
    { front: "marriage = ___ (m) · wedding = vjenčanje", answers: ["brak"], back: "brak (Njihov brak je sretan.)", tts: "Njihov brak je sretan." },
    { front: "success = ___ (m)", answers: ["uspjeh"], back: "uspjeh (To je velik uspjeh!)", tts: "To je velik uspjeh!" },
    { front: "life = ___ (m; ___opis = CV!)", answers: ["život", "zivot"], back: "život — životopis = life-writing.", tts: "Moj život je u Zagrebu." },
  ],
  notes: {
    inOneSentence: {
      en: "A biography is perfective milestones (rodio sam se, završio sam školu, preselio sam se) pinned onto imperfective background decades (živio sam, radila je), ordered with prvo/onda/poslije/na kraju.",
      exampleHr: "Rodila sam se u Slavoniji. Završila sam školu i preselila se u Zagreb.",
    },
    deepDive: [
      {
        title: "The full frame ladder, printable",
        body:
          "Your story's skeleton — memorize YOUR column:",
        table: {
          caption: "Biography frames, both genders",
          headers: ["beat", "m", "f"],
          rows: [
            ["👶 birth", "Rodio sam se u [LOC].", "Rodila sam se u [LOC]."],
            ["🌱 childhood", "Odrastao sam u [LOC].", "Odrasla sam u [LOC]."],
            ["〰️ background", "Živio sam tamo [X] godina.", "Živjela sam tamo [X] godina."],
            ["🎓 school", "Završio sam školu.", "Završila sam školu."],
            ["🤝 meeting", "Upoznao sam [ACC].", "Upoznala sam [ACC]."],
            ["💍 marriage", "Vjenčao sam se.", "Vjenčala sam se."],
            ["📦 the move", "Preselio sam se u [ACC].", "Preselila sam se u [ACC]."],
          ],
        },
      },
      {
        title: "Case check: u + LOC vs u + ACC in a biography",
        body:
          "The old U5 direction/location pair runs the whole story:\n\n- born/grew up/lived somewhere = LOCATION → **u + LOC**: *Rodila sam se u Slavoniji. Odrastao sam u Torontu.*\n- moved TO somewhere = DIRECTION → **u + ACC**: *Preselio sam se u Zagreb.*\n\nAnd origins stay U2/U9: *Tom je iz Kanade* (iz + GEN).",
      },
      {
        title: "One je to rule them all",
        body:
          "Chained milestones share the auxiliary:\n\n*Ana **je** završila školu i preselila **se** u Zagreb.*\n\nThe first clause carries je; the second would need *se je* — and the U15 collision law deletes the je. Result: a clean chain of participles with the little words exactly where the train puts them. This is the sentence shape of every Croatian life story.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Rodio sam u Zagrebu.",
        right: "Rodio sam se u Zagrebu.",
        why: "roditi se never drops its se.",
      },
      {
        wrong: "Preselio sam se je u Split.",
        right: "Preselio sam se u Split.",
        why: "sam is the aux here — and se+je never co-exist anyway.",
      },
      {
        wrong: "(a woman writing) Rodio sam se u Kanadi.",
        right: "Rodila sam se u Kanadi.",
        why: "The participle agrees with the speaker — rodila for f.",
      },
      {
        wrong: "Preselila sam se u Zagrebu.",
        right: "Preselila sam se u Zagreb.",
        why: "Moving is direction → u + ACC (u Zagrebu = already there, LOC).",
      },
    ],
    memoryHooks: [
      "A life = a clothesline: wavy rope, wooden pins. Rope = živio sam, pins = rodio se, završio, preselio se.",
      "se is part of being born — you can't rodi-ti without it.",
      "One je per chain: the first milestone pays for the whole sentence.",
      "životopis = život + pisati — writing your life. You've been rehearsing since U12.",
    ],
    connects: [
      { label: "Aspect in the past — pins & waves (Unit 16 L2)", lessonId: "a2u16l2" },
      { label: "The CV & interview (Unit 12 L5)", lessonId: "a2u12l5" },
      { label: "Next: the capstone — your whole story (Unit 16 L5)", lessonId: "a2u16l5" },
    ],
    selfCheck: [
      { q: "The six milestone frames, in order?", a: "rodio se → odrastao → završio školu → upoznao → vjenčao se → preselio se." },
      { q: "»She finished school and moved to Zagreb« = ?", a: "Završila je školu i preselila se u Zagreb." },
      { q: "Why u Zagreb but u Zagrebu?", a: "preseliti se = direction → ACC; living there = LOC." },
      { q: "Which parts of a biography are imperfective?", a: "The background stretches — živio sam, radila je deset godina." },
      { q: "wedding vs marriage?", a: "vjenčanje (the event) vs brak (the state)." },
    ],
  },
};
