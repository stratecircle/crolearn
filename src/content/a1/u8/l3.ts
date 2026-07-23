import type { Lesson } from "@/types/content";

/**
 * A1 U8 L3 — Zvao se Marko (Clitic je and the second position)
 * Spec: curriculum/A1/unit-8.md · grammar-reference §12 (clitic order), §8 (perfekt).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: descriptive clitic cluster only — (1) clitics sit in second
 * position (known since U1), (2) with sam/si/smo/ste the order is aux → se
 * (Budio sam se), (3) in the 3rd person se + je → je DROPS (Zvao se Marko,
 * Ana se tuširala). Weather is L4. Reflexive verbs are recycled from U6.
 */
export const a1u8l3: Lesson = {
  id: "a1u8l3",
  unitId: "a1u8",
  title: "Zvao se Marko",
  titleEn: "His name was Marko — the clitic je",
  grammarTags: ["clitics", "second-position", "je-drop", "perfekt"],
  estMinutes: 19,
  vocab: [
    { id: "a1u8.igrati", hr: "igrati", en: "to play (igrao)", pos: "verb", icon: "🎮", exampleHr: "Igrali smo nogomet.", exampleEn: "We played football." },
    { id: "a1u8.nogomet", hr: "nogomet", en: "football / soccer", pos: "noun", gender: "m", icon: "⚽", exampleHr: "Volim nogomet.", exampleEn: "I love football." },
    { id: "a1u8.utakmica", hr: "utakmica", en: "match / game", pos: "noun", gender: "f", icon: "🏟️", exampleHr: "Gledali smo utakmicu.", exampleEn: "We watched the match." },
    { id: "a1u8.izlet", hr: "izlet", en: "trip / outing", pos: "noun", gender: "m", icon: "🚌", exampleHr: "Bili smo na izletu.", exampleEn: "We were on a trip." },
    { id: "a1u8.rodendan", hr: "rođendan", en: "birthday", pos: "noun", gender: "m", icon: "🎂", exampleHr: "Ana je imala rođendan.", exampleEn: "Ana had a birthday." },
    { id: "a1u8.zabava", hr: "zabava", en: "party", pos: "noun", gender: "f", icon: "🎈", exampleHr: "Bili smo na zabavi.", exampleEn: "We were at a party." },
    { id: "a1u8.gost", hr: "gost", en: "guest", pos: "noun", gender: "m", icon: "🧑", exampleHr: "Imali smo gosta.", exampleEn: "We had a guest." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Zvao se Marko",
      subtitle: "Kako se zvao? Zvao se Marko. Where did the »je« go? Today's mystery.",
      emoji: "🚂",
      items: [
        { emoji: "🪑", label: "Clitics sit second", hint: "never first — the U1 rule" },
        { emoji: "🔁", label: "se in the past", hint: "Budio sam se rano" },
        { emoji: "🙈", label: "The shy je", hint: "se + je → je vanishes" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say when you woke" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Where the little words sit",
      subtitle: "sam, si, je, se — they couple up in second position, in a fixed order.",
      emoji: "🪑",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "participles from L2" },
        { emoji: "🚂", label: "The clitic train", hint: "aux → se, second position" },
        { emoji: "🙈", label: "je-drop rule", hint: "Zvao se Marko" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: making participles (L2)",
      items: [
        {
          prompt: "From L2: Ana je ___ knjigu. (čitati)",
          options: ["čitala", "čitao", "čita"],
          correctIndex: 0,
          explanation: "čitati → čitala (she).",
        },
        {
          prompt: "From L2: ___ sam u školu. (ići, male)",
          options: ["Išao", "Idao", "Išla"],
          correctIndex: 0,
          explanation: "ići → išao (irregular).",
        },
        {
          prompt: "Listen: what did they do?",
          tts: "Putovali smo u Split.",
          options: ["traveled to Split", "cooked lunch", "watched a film"],
          correctIndex: 0,
          explanation: "putovati → putovali.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's weekend words",
      vocabIds: [
        "a1u8.igrati", "a1u8.nogomet", "a1u8.utakmica", "a1u8.izlet",
        "a1u8.rodendan", "a1u8.zabava", "a1u8.gost",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The clitic train: second position, fixed order",
      body:
        "You've placed clitics since Unit 1 — they can't come first, they sit in **second position**. In the past, a reflexive **se** joins the same cluster, and the pieces couple in a fixed order: **aux (sam/si/je/smo/ste/su) → se**.\n\n- *Budio sam se rano.* = I woke up early → **sam se**\n- *Tuširao si se navečer.* = you showered in the evening → **si se**\n- *Odmarali smo se u subotu.* = we rested on Saturday → **smo se**\n\nThe first slot can be the participle (*Budio sam se…*) or a subject/time word (*Ana se budila…*, *Jučer smo se odmarali…*).",
      diagram: {
        kind: "train",
        wagons: [
          { label: "1 · first word", items: ["Budio", "Ana", "Jučer"], note: "participle, subject, or time word" },
          { label: "2 · aux", items: ["sam · si · je", "smo · ste · su"], note: "the biti-clitic" },
          { label: "3 · se", items: ["se"], note: "the reflexive rides last" },
        ],
      },
      examples: [
        { hr: "Budio sam se rano.", en: "I woke up early.", note: "aux → se: sam se" },
        { hr: "Tuširao si se navečer.", en: "You showered in the evening.", note: "si se" },
        { hr: "Odmarali smo se u subotu.", en: "We rested on Saturday.", note: "smo se" },
        { hr: "Ana se budila kasno.", en: "Ana woke up late.", note: "subject first, then se" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: where does se go?",
      items: [
        {
          prompt: "Which is correct?",
          options: ["Budio sam se rano.", "Se budio sam rano.", "Budio se sam rano."],
          correctIndex: 0,
          explanation: "Second position, order aux → se: Budio sam se rano.",
        },
        {
          prompt: "Which is correct?",
          options: ["Ana se budila kasno.", "Se Ana budila kasno.", "Ana budila se kasno."],
          correctIndex: 0,
          explanation: "First the subject »Ana«, then the clitic »se« in second position.",
        },
        {
          prompt: "Listen: when did they rest?",
          tts: "Odmarali smo se u subotu.",
          options: ["on Saturday", "on Monday", "on Sunday"],
          correctIndex: 0,
          explanation: "u subotu = on Saturday.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The shy je: se + je → je disappears",
      body:
        "In the **3rd person singular** the auxiliary is **je** (*Ana je čitala*). But when a reflexive **se** is present, Croatian doesn't say ~~se je~~ — the **je simply drops**:\n\n- *Ana se (je) tuširala.* → **Ana se tuširala.**\n- *Zvao se (je) Marko.* → **Zvao se Marko.**\n- *Zvala se (je) Ana.* → **Zvala se Ana.**\n\nNo se? Then je stays: *Ana **je** čitala.* The je only vanishes when it bumps into se.\n\n🎉 Payoff: this is why Unit 1's *Kako se zoveš?* becomes *Kako se zvao?* — no stray je.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "3rd person + se → je disappears",
        text: "Zvao se Marko ✓ (not ~~Zvao se je Marko~~) · Ana se tuširala ✓ (not ~~Ana se je tuširala~~).",
      },
      table: {
        caption: "je stays — unless se is there",
        headers: ["situation", "form"],
        rows: [
          ["3rd sg, no se", "Ana je čitala. (je stays)"],
          ["3rd sg, with se", "Ana se tuširala. (je drops)"],
          ["name + se", "Zvao se Marko. (je drops)"],
        ],
      },
      examples: [
        { hr: "Zvao se Marko.", en: "His name was Marko." },
        { hr: "Ana se tuširala.", en: "Ana showered." },
        { hr: "Kako se zvao? — Zvao se Ivan.", en: "What was his name? — His name was Ivan." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Correct or not? (the je-drop trap)",
      items: [
        {
          prompt: "Which is correct?",
          options: ["Zvao se Marko.", "Zvao se je Marko.", "Zvao je se Marko."],
          correctIndex: 0,
          explanation: "3rd person + se → je drops: Zvao se Marko.",
        },
        {
          prompt: "Which is correct?",
          options: ["Ana se tuširala.", "Ana je se tuširala.", "Ana se je tuširala."],
          correctIndex: 0,
          explanation: "se is there → no je: Ana se tuširala.",
        },
        {
          prompt: "Which is correct?",
          options: ["Zvala se Ana.", "Zvala se je Ana.", "Zvala je se Ana."],
          correctIndex: 0,
          explanation: "je drops after se: Zvala se Ana.",
        },
        {
          prompt: "No se here — which is correct?",
          options: ["Ana je čitala knjigu.", "Ana čitala knjigu.", "Ana se čitala knjigu."],
          correctIndex: 0,
          explanation: "No reflexive verb → the 3rd-person je stays: Ana je čitala.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Build, hear & say",
      subtitle: "Assemble the cluster yourself — then dictation and one out-loud line.",
      emoji: "✍️",
      items: [
        { emoji: "🔀", label: "Build sentences", hint: "se / je in the right seat" },
        { emoji: "🧩", label: "Fill the clitic", hint: "Zvao ___ Marko → se" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say when you woke", hint: "Budio/Budila sam se u…" },
      ],
    },
    {
      id: "s10",
      type: "reorder",
      words: ["Ana", "se", "tuširala"],
      answers: ["Ana se tuširala.", "Ana se tuširala"],
      en: "Ana showered.",
      explanation: "Subject first, then se — and NO je (se + je → se).",
    },
    {
      id: "s11",
      type: "reorder",
      words: ["Zvao", "se", "Marko"],
      answers: ["Zvao se Marko.", "Zvao se Marko"],
      en: "His name was Marko.",
      explanation: "Participle first, then se; the 3rd-person je has dropped.",
    },
    {
      id: "s12",
      type: "reorder",
      words: ["Budio", "sam", "se", "rano"],
      answers: ["Budio sam se rano.", "Budio sam se rano"],
      en: "I woke up early.",
      explanation: "Order in the cluster: aux »sam« then »se«.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Zvao ___ Marko.",
      blanks: [["se"]],
      translation: "His name was Marko.",
      wordBank: ["se", "se je", "je se"],
      explanation: "Just se — the 3rd-person je drops next to se.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Ana ___ tuširala.",
      blanks: [["se"]],
      translation: "Ana showered.",
      wordBank: ["se", "je se", "se je"],
      explanation: "se alone; never se je.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Ana se budila kasno.",
      explanation: "Ana se budila kasno — Ana woke up late.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Zvao se Ivan.",
      explanation: "Zvao se Ivan — his name was Ivan (no je!).",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: Unit 1 & Unit 6",
      items: [
        {
          prompt: "Unit 1's »Kako se zoveš?« — in the past, »Kako se ___?« (he was called)",
          options: ["zvao", "zove", "zvala"],
          correctIndex: 0,
          explanation: "zvati se → zvao; Kako se zvao? = What was his name?",
        },
        {
          prompt: "Unit 6 reflexive, in the past: »Jučer sam ___ tuširao.« (fill the clitic)",
          options: ["se", "me", "je"],
          correctIndex: 0,
          explanation: "Reflexive clitic is se: Jučer sam se tuširao.",
        },
        {
          prompt: "Listen: how did Ana wake up?",
          tts: "Ana se budila rano.",
          options: ["early", "late", "at noon"],
          correctIndex: 0,
          explanation: "rano = early.",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: what did they play, and where?",
      tts: "Igrali smo nogomet u parku.",
      options: ["football in the park", "a match at the stadium", "cards at home"],
      correctIndex: 0,
      explanation: "Igrali smo nogomet u parku — we played football in the park.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Budio sam se u sedam.",
      targetEn: "say when you woke up today — I woke up at seven. (female: Budila sam se u sedam.)",
      phonetic: "BOO-dee-o sam se oo SEH-dam",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The clitic cluster, A1 edition.** Little words sit in **second position** and couple in a fixed order — **aux → se**: *Budio sam se rano.*\n\nThe headline rule: in the **3rd person, se + je → je drops**. *Zvao se Marko.* *Ana se tuširala.* (No se? je stays: *Ana je čitala.*)\n\nAnd the Unit 1 payoff lands: *Kako se zoveš?* → *Kako se zvao?*\n\nNext lesson: weather, today and yesterday — *Bilo je sunčano. Padala je kiša.*",
      vocabIds: [
        "a1u8.igrati", "a1u8.nogomet", "a1u8.utakmica", "a1u8.izlet",
        "a1u8.rodendan", "a1u8.zabava", "a1u8.gost",
      ],
    },
  ],
  srsCloze: [
    { front: "Zvao ___ Marko. (clitic)", answers: ["se"], back: "Zvao se Marko. (se + je → je drops)", tts: "Zvao se Marko." },
    { front: "Ana ___ tuširala. (clitic)", answers: ["se"], back: "Ana se tuširala. (never »se je«)", tts: "Ana se tuširala." },
    { front: "Budio sam ___ rano. (reflexive clitic)", answers: ["se"], back: "Budio sam se rano. (order aux → se)", tts: "Budio sam se rano." },
    { front: "Ana ___ čitala knjigu. (3rd person, NO se — clitic)", answers: ["je"], back: "Ana je čitala knjigu. (no se → je stays)", tts: "Ana je čitala knjigu." },
    { front: "Kako se ___? (he — what was his name?)", answers: ["zvao"], back: "Kako se zvao? — Zvao se Marko.", tts: "Kako se zvao?" },
    { front: "Odmarali ___ se u subotu. (we — clitic)", answers: ["smo"], back: "Odmarali smo se u subotu. (mi → smo, then se)", tts: "Odmarali smo se u subotu." },
    { front: "Bili smo na ___. (zabava — LOC)", answers: ["zabavi"], back: "Bili smo na zabavi. (na + LOC)", tts: "Bili smo na zabavi." },
  ],
  notes: {
    inOneSentence: {
      en: "Clitics sit in second position in the order aux → se, and in the 3rd person se + je makes je disappear (Zvao se Marko).",
      exampleHr: "Budio sam se rano. · Zvao se Marko. · Ana se tuširala.",
    },
    deepDive: [
      {
        title: "Second position, fixed order",
        body:
          "Clitics (unstressed sam/si/je…, se, and later object pronouns) cluster in **second position** in the clause — the same rule you've used since Unit 1. In the past reflexive, the order inside the cluster is **auxiliary then se**: *Budio **sam se***, *Odmarali **smo se***.\n\n»Second position« means after the first word OR the first phrase: *Ana **se** budila.* / *Moja sestra **se** budila.*",
        table: {
          caption: "Reflexive perfekt of buditi se (wake up)",
          headers: ["person", "form"],
          rows: [
            ["ja (m/f)", "budio / budila sam se"],
            ["ti", "budio / budila si se"],
            ["on / ona", "budio se / budila se (je dropped)"],
            ["mi", "budili / budile smo se"],
            ["vi", "budili / budile ste se"],
            ["oni / one", "budili / budile su se"],
          ],
        },
      },
      {
        title: "The je-drop (»je is shy«)",
        body:
          "The 3rd-person-singular auxiliary **je** is the one clitic that normally goes LAST — but next to reflexive **se** it drops out entirely. So a reflexive 3rd-singular perfekt has **se and no je**: *Zvao se Marko.*, *Ana se tuširala.*, *Nasmijala se.*\n\nRemember the contrast: without se, je stays put — *Ana **je** čitala knjigu.* The disappearance is triggered only by se.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "je is shy — se scares it away",
          text: "se + je → just se. Zvao se Marko. Ana se tuširala. But: Ana je čitala (no se, je stays).",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Zvao se je Marko.",
        right: "Zvao se Marko.",
        why: "In the 3rd person, se + je → je drops. Never say se je.",
      },
      {
        wrong: "Ana je se tuširala.",
        right: "Ana se tuširala.",
        why: "Same rule: the reflexive se pushes the 3rd-person je out.",
      },
      {
        wrong: "Se budio sam rano.",
        right: "Budio sam se rano.",
        why: "A clitic can't be first, and the order is aux → se: sam se.",
      },
      {
        wrong: "Ana čitala knjigu.",
        right: "Ana je čitala knjigu.",
        why: "No reflexive here, so the 3rd-person auxiliary je must stay.",
      },
    ],
    memoryHooks: [
      "je is shy: the moment se shows up, je hides (se + je → se).",
      "Cluster order: AUX first, se second — Budio SAM SE.",
      "Kako se zvao? — the Unit 1 phrase, finally with a past.",
    ],
    connects: [
      { label: "Reflexive se and second position (Unit 6 L1)", lessonId: "a1u6l1" },
      { label: "Kako se zoveš? — the original chunk (Unit 1 L4)", lessonId: "a1u1l4" },
      { label: "Perfekt of ordinary verbs (Unit 8 L2)", lessonId: "a1u8l2" },
      { label: "Next: weather, today & yesterday (Unit 8 L4)", lessonId: "a1u8l4" },
    ],
    selfCheck: [
      { q: "Why is »Zvao se je Marko« wrong?", a: "3rd person + se → je drops. It's Zvao se Marko." },
      { q: "Where does se sit in »Ana ___ budila«?", a: "Second position: Ana se budila." },
      { q: "In »Budio sam se«, what's the order of the clitics?", a: "Auxiliary first (sam), then se." },
      { q: "Does je drop in »Ana je čitala knjigu«?", a: "No — there's no se, so the 3rd-person je stays." },
      { q: "Put »Kako se zoveš?« into the past (about him).", a: "Kako se zvao?" },
    ],
  },
};
