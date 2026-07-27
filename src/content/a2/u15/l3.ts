import type { Lesson } from "@/types/content";

/**
 * A2 U15 L3 — Dala mu ga je (clitic placement & the basic cluster)
 * Spec: curriculum/A2/unit-15.md · grammar-reference §12.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * grammar-only lesson (spec: "none new — pure grammar drill"). Drilled subset:
 * aux + DAT + ACC (+ se/je edges). li-cluster and GEN clitics stay receptive
 * (B1 U23 per spec). dati's l-participle (dao/dala) presented here as the
 * flagship example — perfective pair-work itself is U16.
 */
export const a2u15l3: Lesson = {
  id: "a2u15l3",
  unitId: "a2u15",
  title: "Dala mu ga je",
  titleEn: "She gave it to him — the clitic train",
  grammarTags: ["clitic-order", "clitic-cluster", "second-position"],
  estMinutes: 19,
  vocabPolicy: "grammar-only",
  vocab: [],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dala mu ga je",
      subtitle: "Four words, three of them clitics, one rigid order. All aboard.",
      emoji: "🚂",
      items: [
        { emoji: "🚂", label: "The full train", hint: "li · aux · DAT · ACC · se · je" },
        { emoji: "🚨", label: "je is the caboose", hint: "ALWAYS last" },
        { emoji: "💥", label: "se + je collide", hint: "je falls off" },
        { emoji: "🎤", label: "The chant", hint: "say it to the rhythm" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Assemble the train",
      subtitle: "You know every wagon. Today you couple them in the only legal order.",
      emoji: "🚂",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "je-last & ću from U8/U9" },
        { emoji: "🚃", label: "Wagon by wagon", hint: "the fixed order" },
        { emoji: "🧲", label: "Longer engines", hint: "Sutra ću ti…" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the laws you already obey",
      items: [
        {
          prompt: "U8: »Gledala ___ film.« (she watched)",
          options: ["je", "se", "ju"],
          correctIndex: 0,
          explanation: "The aux je in second position — today you'll see where it sits when it has company.",
        },
        {
          prompt: "U8: his name was Marko =",
          options: ["Zvao se Marko.", "Zvao se je Marko.", "Se zvao Marko."],
          correctIndex: 0,
          explanation: "se + je → je drops. Today that's a named law: the se+je collision.",
        },
        {
          prompt: "Listen (U9): when will she send the answer?",
          tts: "Sutra ću ti poslati odgovor.",
          options: ["tomorrow", "tonight", "next week"],
          correctIndex: 0,
          explanation: "Sutra ću ti… — engine, aux, DAT: the train in action.",
        },
      ],
    },
    {
      id: "s04",
      type: "teach",
      title: "THE train: li → aux → DAT → ACC → se → je",
      body:
        "Every Croatian clitic has an assigned wagon, coupled in this order behind the **first stressed word** (the engine):\n\n*Dao **sam mu ga**.* — aux → DAT → ACC\n*Jesi **li mi** poslao poruku?* — li → (aux in jesi) → DAT\n\nYou never choose the order. The train does.",
      diagram: {
        kind: "train",
        wagons: [
          { label: "li", items: ["li"], note: "question particle" },
          { label: "aux", items: ["sam si smo ste su", "ću ćeš će ćemo ćete"], note: "…but NOT je!" },
          { label: "DAT", items: ["mi ti mu joj", "nam vam im"], note: "to-words" },
          { label: "ACC", items: ["me te ga je", "nas vas ih"], note: "object words" },
          { label: "se", items: ["se"], note: "the reflexive" },
          { label: "je 🚨", items: ["je"], note: "the caboose — ALWAYS last" },
        ],
      },
      examples: [
        { hr: "Dao sam mu ga.", en: "I gave it to him.", note: "dati = to give (done) — dao/dala" },
        { hr: "Jesi li mi poslao poruku?", en: "Did you send me the message?" },
        { hr: "Sutra ću ti poslati odgovor.", en: "I'll send you the answer tomorrow." },
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Two special laws: the caboose and the collision",
      body:
        "**Law 1 — je is the caboose.** The 3sg aux *je* refuses its aux wagon and couples LAST:\n\n*Dala **mu ga je**.* (not ~~je mu ga~~)\n\n**Law 2 — se + je collide.** When se and je would touch, **je falls off**:\n\n*Ana **se javila** baki.* (never ~~se je javila~~) — the U8 rule *Zvao se Marko*, now explained.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "je: last or gone",
        text: "Dala mu ga JE ✅ (je last) · Javila SE ✅ (se+je → je drops) · ❌ Dala je mu ga · ❌ Javila se je",
      },
      examples: [
        { hr: "Dala mu ga je.", en: "She gave it to him.", note: "je — the caboose" },
        { hr: "Ana se javila baki.", en: "Ana got in touch with grandma.", note: "se+je → je drops" },
        { hr: "Sviđa joj se objava.", en: "She likes the post.", note: "DAT joj before se — L2's rule holds" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: legal or illegal?",
      items: [
        {
          prompt: "She gave it to him:",
          options: ["Dala mu ga je.", "Dala je mu ga.", "Dala ga mu je."],
          correctIndex: 0,
          explanation: "DAT (mu) → ACC (ga) → je last.",
        },
        {
          prompt: "I gave it to him:",
          options: ["Dao sam mu ga.", "Dao sam ga mu.", "Dao mu sam ga."],
          correctIndex: 0,
          explanation: "aux (sam) → DAT (mu) → ACC (ga).",
        },
        {
          prompt: "Ana got in touch:",
          options: ["Ana se javila.", "Ana se je javila.", "Ana je se javila."],
          correctIndex: 0,
          explanation: "se + je → je drops.",
        },
        {
          prompt: "Did you send me the message?",
          options: ["Jesi li mi poslao poruku?", "Jesi mi li poslao poruku?", "Li jesi mi poslao poruku?"],
          correctIndex: 0,
          explanation: "li couples right after the verb form jesi, then DAT mi.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Couple the wagons yourself",
      subtitle: "Reorder, fill, translate — the order must become muscle memory.",
      emoji: "🚃",
      items: [
        { emoji: "🔀", label: "Three trains to build", hint: "sam mu ga · mu ga je" },
        { emoji: "✏️", label: "Two fills", hint: "the missing wagon" },
        { emoji: "⌨️", label: "One translation", hint: "yesterday + her + it" },
      ],
    },
    {
      id: "s08",
      type: "reorder",
      words: ["Dao", "sam", "mu", "ga"],
      answers: ["Dao sam mu ga.", "Dao sam mu ga"],
      en: "I gave it to him.",
      explanation: "engine (Dao) + aux (sam) + DAT (mu) + ACC (ga).",
    },
    {
      id: "s09",
      type: "reorder",
      words: ["Dala", "mu", "ga", "je"],
      answers: ["Dala mu ga je.", "Dala mu ga je"],
      en: "She gave it to him.",
      explanation: "DAT → ACC → je (the caboose).",
    },
    {
      id: "s10",
      type: "reorder",
      words: ["Sutra", "ću", "ti", "poslati", "odgovor"],
      answers: ["Sutra ću ti poslati odgovor.", "Sutra ću ti poslati odgovor"],
      en: "I'll send you the answer tomorrow.",
      explanation: "Sutra is the engine — the clitics (ću ti) couple right behind it.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Dala ___ ga je. (to him)",
      blanks: [["mu"]],
      translation: "She gave it to him.",
      wordBank: ["mu", "ga", "joj"],
      explanation: "DAT wagon before ACC: mu ga je.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ana se ___ baki. (javiti — perfekt; watch the collision!)",
      blanks: [["javila"]],
      translation: "Ana got in touch with grandma.",
      wordBank: ["javila", "javila je", "je javila"],
      explanation: "se + je → je drops: Ana se javila.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Translate: “I sent it (the letter, n) to her yesterday.” (male speaker)",
      answers: ["Jučer sam joj ga poslao.", "Jučer sam joj ga poslao"],
      hint: "Jučer + aux + DAT + ACC + …",
      explanation: "Jučer (engine) sam (aux) joj (DAT) ga (ACC) poslao.",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 3 · Ears, voice & the chant",
      subtitle: "The train has a rhythm. Ride it.",
      emoji: "🎶",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "mu ga je · se javila" },
        { emoji: "🎤", label: "The chant", hint: "Dala-mu-ga-JE" },
        { emoji: "🔗", label: "U8/U9 rails", hint: "same law, more wagons" },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Dala mu ga je.",
      explanation: "Dala mu ga je — she gave it to him. Hear the caboose je.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ana se javila baki.",
      explanation: "Ana se javila baki — se, no je (the collision law).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Dala mu ga je.",
      targetEn: "say it to the train rhythm — She gave it to him. (chant: DAT-ACC-JE!)",
      phonetic: "DA-la moo ga YE",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the rails were always there",
      items: [
        {
          prompt: "U8's law, upgraded — why is »Zvao se Marko« correct?",
          options: [
            "se sits second and je dropped in the se+je collision",
            "se always follows zvao",
            "Marko pushes se forward",
          ],
          correctIndex: 0,
          explanation: "Second position + the collision — both laws in one old sentence.",
        },
        {
          prompt: "Listen (U9 + L2): what will he do?",
          tts: "Javit ću vam se sutra.",
          options: [
            "get in touch with you tomorrow",
            "answer them tomorrow",
            "send you a letter today",
          ],
          correctIndex: 0,
          explanation: "ću (aux) → vam (DAT) → se — the full order, politely.",
        },
        {
          prompt: "U13 chunk on the train: »Danas mi je bolje.« — why this order?",
          options: [
            "Danas is the engine; mi (DAT) rides before the caboose je",
            "mi always follows danas",
            "je must touch bolje",
          ],
          correctIndex: 0,
          explanation: "Engine + DAT + je-caboose — the feeling chunks obey the train too.",
        },
      ],
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The train**: engine (first stressed word) + **li → aux → DAT → ACC → se → je** — you never choose the order.\n\n**Law 1**: *je* is the caboose — ALWAYS last: *Dala mu ga **je**.*\n**Law 2**: se + je collide — je falls off: *Ana **se javila**.*\n\nDrilled today: aux + DAT + ACC (*Dao sam mu ga · Jučer sam joj ga poslao · Sutra ću ti poslati odgovor*).\n\nNo new words tonight — the SRS gets order cards instead. Next: phones ring and e-mails open — *Halo? Poštovani…*",
      vocabIds: [],
    },
  ],
  srsCloze: [
    { front: "Dala ___ ___ ___. (je · mu · ga — couple them!)", answers: ["mu ga je"], back: "Dala mu ga je — DAT → ACC → je-caboose.", tts: "Dala mu ga je." },
    { front: "Dao ___ ___ ___. (ga · sam · mu)", answers: ["sam mu ga"], back: "Dao sam mu ga — aux → DAT → ACC.", tts: "Dao sam mu ga." },
    { front: "Javila ___. (se je — or just se?)", answers: ["se"], back: "se + je → je drops: Javila se.", tts: "Javila se." },
    { front: "Jesi ___ mi poslao poruku? (the question particle)", answers: ["li"], back: "Jesi li mi poslao poruku? — li couples first.", tts: "Jesi li mi poslao poruku?" },
    { front: "Sutra ___ ti poslati odgovor. (future aux, ja)", answers: ["ću", "cu"], back: "Sutra ću ti poslati odgovor.", tts: "Sutra ću ti poslati odgovor." },
    { front: "The clitic order chant: li → aux → DAT → ACC → se → ___", answers: ["je"], back: "…je — the caboose, always last.", tts: "Dala mu ga je." },
  ],
  notes: {
    inOneSentence: {
      en: "Clitics couple behind the first stressed word in the fixed order li → aux → DAT → ACC → se → je, where je always goes last and drops entirely after se.",
      exampleHr: "Dao sam mu ga. · Dala mu ga je. · Ana se javila baki.",
    },
    deepDive: [
      {
        title: "THE train, full width",
        body:
          "This diagram is the unit. Everything from *drago mi je* (U1) to *Nazvat ću je večeras* (L5) is wagons on these rails:\n\n**engine** (any first stressed element: a verb, *sutra*, *jučer*, a subject) → **li** → **aux** (sam si smo ste su · ću ćeš će ćemo ćete · bih bi…) → **DAT** (mi ti mu joj nam vam im) → **ACC** (me te ga je nas vas ih) → **se** → **je**.\n\nThe subset you must PRODUCE at A2: **aux + DAT + ACC** (and the two je laws). The li-cluster and GEN clitics are recognized here, mastered at B1.",
        table: {
          caption: "Trains you can already drive",
          headers: ["engine", "clitics", "rest"],
          rows: [
            ["Dao", "sam mu ga", "— (I gave it to him)"],
            ["Dala", "mu ga je", "— (she gave it to him)"],
            ["Sutra", "ću ti", "poslati odgovor"],
            ["Jučer", "sam joj ga", "poslao"],
            ["Ana", "se", "javila baki (je dropped)"],
            ["Sviđa", "joj se", "objava"],
          ],
        },
      },
      {
        title: "Why je is special",
        body:
          "Historically *je* is the lightest of all clitics — so light it slides to the very end of the cluster, and vanishes entirely after se.\n\nBonus: when the ACC pronoun *je* (her) and the aux *je* would collide, Croatian swaps the pronoun to **ju**: *Vidio **ju** je.* (He saw her.) Recognize this; production practice comes at B1.",
      },
      {
        title: "Second position, not second word",
        body:
          "The engine can be LONG — clitics come after the first stressed PHRASE or simply after the verb:\n\n- *Sutra **ću ti** poslati odgovor.* (after sutra)\n- *Baka Marija **nam je** poslala čestitku.* (after the whole name)\n\nWhat they can't do is come first, or scatter: the cluster travels as ONE block, wagons touching.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Dala je mu ga.",
        right: "Dala mu ga je.",
        why: "je is the caboose — it couples LAST, after DAT and ACC.",
      },
      {
        wrong: "Dao sam ga mu.",
        right: "Dao sam mu ga.",
        why: "DAT before ACC — mu ga, never ga mu.",
      },
      {
        wrong: "Javila se je baki.",
        right: "Javila se baki.",
        why: "se + je collide — je drops.",
      },
      {
        wrong: "Mu ga je dala.",
        right: "Dala mu ga je.",
        why: "The cluster can't lead — an engine (stressed word) must come first.",
      },
    ],
    memoryHooks: [
      "Chant it like train wheels: li-aux-DAT-ACC-se-JE, li-aux-DAT-ACC-se-JE.",
      "je is the caboose 🚨 — last wagon, red light, always.",
      "se eats je: Javila se(je) — the je never survives the collision.",
      "DAT before ACC = give TO someone first, THEN the thing: mu ga.",
    ],
    connects: [
      { label: "Second-position je & se — the original rails (Unit 8 L3)", lessonId: "a1u8l3" },
      { label: "The DAT wagon (Unit 15 L2)", lessonId: "a2u15l2" },
      { label: "Next: phone calls & e-mails (Unit 15 L4)", lessonId: "a2u15l4" },
    ],
    selfCheck: [
      { q: "The full wagon order?", a: "li → aux → DAT → ACC → se → je (je always last)." },
      { q: "»She gave it to him« = ?", a: "Dala mu ga je." },
      { q: "Why »Javila se« and not »Javila se je«?", a: "se + je → je drops." },
      { q: "»I'll send you the answer tomorrow« = ?", a: "Sutra ću ti poslati odgovor." },
      { q: "Fix it: »Dao sam ga mu.«", a: "Dao sam mu ga. (DAT before ACC)" },
    ],
  },
};
