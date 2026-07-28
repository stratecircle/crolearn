import type { Lesson } from "@/types/content";

/**
 * A2 U15 L2 — Javi mi se! (DAT clitic pronouns)
 * Spec: curriculum/A2/unit-15.md · grammar-reference §5, §12.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * ostaviti moved here from L4 per the 2026-07-23 spec correction. slati/šaljem
 * untaught → all send-sentences use poslati (U10). Full cluster order is L3 —
 * here only the DAT-before-se preview (Javi mi se!).
 */
export const a2u15l2: Lesson = {
  id: "a2u15l2",
  unitId: "a2u15",
  title: "Javi mi se!",
  titleEn: "Text me! — dative clitic pronouns",
  grammarTags: ["dat-clitics", "verb-valence", "second-position"],
  estMinutes: 19,
  vocab: [
    { id: "a2u15.odgovoriti", image: "/img/odgovoriti.png", hr: "odgovoriti", en: "to answer (+ DAT: odgovorim ti)", pos: "verb", icon: "↩️", exampleHr: "Odgovorit ću ti sutra.", exampleEn: "I'll answer you tomorrow." },
    { id: "a2u15.odgovor", image: "/img/odgovor.png", hr: "odgovor", en: "answer", pos: "noun", gender: "m", icon: "✅", exampleHr: "Čekam odgovor.", exampleEn: "I'm waiting for an answer." },
    { id: "a2u15.pitanje", image: "/img/pitanje.png", hr: "pitanje", en: "question", pos: "noun", gender: "n", icon: "❓", exampleHr: "Imam pitanje.", exampleEn: "I have a question." },
    { id: "a2u15.vijest", image: "/img/vijest.png", hr: "vijest", en: "news item (f — an -i noun!)", pos: "noun", gender: "f", icon: "📰", exampleHr: "Imam dobru vijest!", exampleEn: "I have good news!" },
    { id: "a2u15.slika", image: "/img/slika.png", hr: "slika", en: "picture / photo", pos: "noun", gender: "f", icon: "🖼️", exampleHr: "Pošalji mi sliku!", exampleEn: "Send me the picture!" },
    { id: "a2u15.ostaviti", image: "/img/ostaviti.png", hr: "ostaviti", en: "to leave (a message; ostavim)", pos: "verb", icon: "📩", exampleHr: "Ostavi poruku!", exampleEn: "Leave a message!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Javi mi se!",
      subtitle: "»Text me!« »I'll answer you tomorrow.« — Croatian does this in one syllable.",
      emoji: "🧡",
      items: [
        { emoji: "🧡", label: "mi ti mu joj…", hint: "the little TO-words" },
        { emoji: "🚂", label: "The train grows", hint: "DAT rides before se" },
        { emoji: "💬", label: "Answer & send", hint: "odgovoriti, poslati + DAT" },
        { emoji: "🎤", label: "Pošalji mi sliku!", hint: "demand your photo" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The TO-words",
      subtitle: "U10 gave nouns the orange ending. Today the pronouns shrink to one syllable.",
      emoji: "🧡",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "dajem mami · čestitam ti" },
        { emoji: "💬", label: "Answer words", hint: "6 new" },
        { emoji: "📊", label: "The DAT grid", hint: "meni → mi, njemu → mu" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the orange case you own",
      items: [
        {
          prompt: "U10: »Dajem ___ poklon.« (mama)",
          options: ["mami", "mamu", "mamo"],
          correctIndex: 0,
          explanation: "Receiver → DAT mami. Today: dajem JOJ poklon — one syllable.",
        },
        {
          prompt: "U14 chunk: »Čestitam ___ rođendan!« (to a friend)",
          options: ["ti", "te", "tebi? Also possible — but pick the everyday one"],
          correctIndex: 0,
          explanation: "čestitam ti — you've used a DAT clitic for a whole unit. Today it becomes a system.",
        },
        {
          prompt: "Listen (yesterday): what can't he do?",
          tts: "Ne vidim ga.",
          options: ["see it", "hear it", "send it"],
          correctIndex: 0,
          explanation: "ga — yesterday's ACC clitic. Today's mi/ti/mu ride the same train.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Answer & send words",
      vocabIds: [
        "a2u15.odgovoriti", "a2u15.odgovor", "a2u15.pitanje",
        "a2u15.vijest", "a2u15.slika", "a2u15.ostaviti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The DAT clitics: mi, ti, mu, joj, nam, vam, im",
      body:
        "The TO-words — one syllable each, orange:\n\n*Dajem mami poklon → Dajem **joj** poklon. · Čestitam **ti**! · Javi **mi** se!*\n\nThe train gains a second wagon — and **DAT rides IN FRONT of ACC and se**:",
      table: {
        caption: "Full form ↔ clitic (DAT, orange)",
        headers: ["person", "full (stressed)", "clitic"],
        colCase: [null, "DAT", "DAT"],
        rows: [
          ["to me / to you", "meni / tebi", "mi / ti"],
          ["to him, it", "njemu", "mu"],
          ["to her", "njoj", "joj"],
          ["to us / to you (pl)", "nama / vama", "nam / vam"],
          ["to them", "njima", "im"],
        ],
      },
      diagram: {
        kind: "train",
        wagons: [
          { label: "🚂 first word(s)", items: ["Javi", "Odgovorit ću", "Baka"], note: "the engine" },
          { label: "DAT clitic", items: ["mi", "ti", "mu", "joj", "nam", "vam", "im"], note: "NEW — rides before ACC & se" },
          { label: "ACC / se", items: ["ga", "je", "se"], note: "yesterday's wagon + se" },
        ],
      },
      examples: [
        { hr: "Javi mi se!", en: "Get in touch with me! / Text me!", note: "DAT before se!", highlight: { text: "mi", caseId: "DAT" } },
        { hr: "Odgovorit ću ti sutra.", en: "I'll answer you tomorrow.", highlight: { text: "ti", caseId: "DAT" } },
        { hr: "Pošalji joj sliku!", en: "Send her the picture!", highlight: { text: "joj", caseId: "DAT" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The verbs that love the dative",
      body:
        "Three communication verbs come with an orange slot built in:\n\n- **javiti se + DAT** — *Javi **mi** se! Javit ću **vam** se.* (the U12 chunk, now explained!)\n- **odgovoriti + DAT** — *Odgovori **mu**! Odgovorit ću **ti** sutra.*\n- **poslati + DAT + ACC** — *Baka **nam** je poslala čestitku.* (send TO someone A thing)\n\nAnd U10's giving verbs upgrade automatically: *dajem **joj**, pomažem **mu**, pišem **im***.",
      diagram: {
        kind: "contrast",
        left: {
          title: "U10 — noun receivers",
          emoji: "🧾",
          caseId: "DAT",
          lines: [
            { hr: "Dajem mami poklon.", en: "I give mum a present." },
            { hr: "Šefica odgovara Tomu.", en: "The boss answers Tom." },
          ],
        },
        right: {
          title: "today — one syllable",
          emoji: "🧡",
          caseId: "DAT",
          lines: [
            { hr: "Dajem joj poklon.", en: "I give her a present." },
            { hr: "Šefica mu odgovara.", en: "The boss answers him." },
          ],
        },
      },
      examples: [
        { hr: "Baka nam je poslala čestitku.", en: "Grandma sent us a card.", highlight: { text: "nam", caseId: "DAT" } },
        { hr: "Imam pitanje — odgovori mi!", en: "I have a question — answer me!", highlight: { text: "mi", caseId: "DAT" } },
        { hr: "Tom im je poslao poruku.", en: "Tom sent them a message.", highlight: { text: "im", caseId: "DAT" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the TO-word",
      items: [
        {
          prompt: "to him = ?",
          options: ["mu", "ga", "mi"],
          correctIndex: 0,
          explanation: "mu = to him (ga = him, ACC — different wagon!).",
        },
        {
          prompt: "Šaljem poruku Ani. → Šaljem ___ poruku.",
          options: ["joj", "je", "ju"],
          correctIndex: 0,
          explanation: "to her → joj (je = her as an OBJECT).",
        },
        {
          prompt: "Javi ___ ___! (get in touch with ME — mind the order)",
          options: ["mi se", "se mi", "me se"],
          correctIndex: 0,
          explanation: "DAT rides before se: Javi mi se!",
        },
        {
          prompt: "Odgovorit ću ___ sutra. (to you — a friend)",
          options: ["ti", "te", "tebi? Fine, but pick the everyday one"],
          correctIndex: 0,
          explanation: "odgovoriti + DAT: ti (te would be ACC — wrong slot).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Send it to everyone",
      subtitle: "Her, him, us, them — one orange syllable at a time.",
      emoji: "📮",
      items: [
        { emoji: "✏️", label: "Three fills", hint: "nam · ti · joj" },
        { emoji: "⌨️", label: "Two swaps", hint: "mami → joj" },
        { emoji: "🔀", label: "Build the order", hint: "Javi mi se!" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Baka ___ je poslala čestitku. (to us)",
      blanks: [["nam"]],
      translation: "Grandma sent us a card.",
      wordBank: ["nam", "nas", "im"],
      explanation: "to us → DAT nam (nas is ACC).",
    },
    {
      id: "s10",
      type: "fill",
      text: "Odgovorit ću ___ sutra. (to you — a friend)",
      blanks: [["ti"]],
      translation: "I'll answer you tomorrow.",
      wordBank: ["ti", "te", "vam"],
      explanation: "odgovoriti + DAT: ti.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Pošalji ___ sliku! (to her)",
      blanks: [["joj"]],
      translation: "Send her the picture!",
      wordBank: ["joj", "je", "mu"],
      explanation: "to her → joj.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Shrink it: »Dajem mami poklon.« → »Dajem ___ poklon.«",
      answers: ["joj"],
      hint: "to her",
      explanation: "mami → joj.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "to them (the DAT clitic) = ___",
      answers: ["im"],
      hint: "njima → …",
      explanation: "im — Tom im je poslao poruku.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Javi", "mi", "se"],
      answers: ["Javi mi se!", "Javi mi se"],
      en: "Get in touch with me!",
      explanation: "imperative engine + DAT + se — DAT always before se.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "The TO-words fly by fast — catch them, then demand your picture.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "mi se · ti" },
        { emoji: "🎤", label: "Demand the photo", hint: "Pošalji mi sliku!" },
        { emoji: "🔗", label: "U10 upgrade", hint: "mami → joj everywhere" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Javi mi se!",
      explanation: "Javi mi se! — text me / get in touch!",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Odgovorit ću ti sutra.",
      explanation: "Odgovorit ću ti sutra — I'll answer you tomorrow.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Pošalji mi sliku!",
      targetEn: "tell a friend to send you the picture — Send me the photo!",
      phonetic: "PO-sha-lyee mee SLEE-koo",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: every giving verb upgrades",
      items: [
        {
          prompt: "U10: »Pomažem bratu.« → with a clitic:",
          options: ["Pomažem mu.", "Pomažem ga.", "Pomažem mi."],
          correctIndex: 0,
          explanation: "pomagati + DAT (never ACC — the U10 law): mu.",
        },
        {
          prompt: "U14, now explained: why is it »Čestitam TI« and not »te«?",
          options: [
            "congratulations go TO someone — DAT slot",
            "ti sounds friendlier",
            "te is only for questions",
          ],
          correctIndex: 0,
          explanation: "čestitati + DAT — ti is the DAT clitic. The chunk was grammar all along.",
        },
        {
          prompt: "Listen (U10 + today): who gets the flat?",
          tts: "Sviđa joj se stan.",
          options: ["she likes the flat", "he likes the flat", "they like the flat"],
          correctIndex: 0,
          explanation: "sviđa JOJ se — to her. (And note the order: joj before se!)",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**DAT clitics — the TO-words**: *mi, ti, **mu**, **joj**, nam, vam, **im*** — *Dajem joj poklon. Odgovorit ću ti sutra.*\n\n**The order preview**: DAT rides **before se** (*Javi mi se!*) and before ACC — the full train assembles next lesson.\n\n**Valence upgrades**: *javiti se + DAT, odgovoriti + DAT, poslati + DAT + ACC* — and every U10 giving verb: *pomažem mu, pišem im*.\n\nWords tonight: **odgovoriti, odgovor, pitanje, vijest, slika, ostaviti**.",
      vocabIds: [
        "a2u15.odgovoriti", "a2u15.odgovor", "a2u15.pitanje",
        "a2u15.vijest", "a2u15.slika", "a2u15.ostaviti",
      ],
    },
  ],
  srsCloze: [
    { front: "Šaljem poruku Ani. → Šaljem ___ poruku.", answers: ["joj"], back: "to her → joj.", tts: "Šaljem joj poruku." },
    { front: "Javi ___ ___! (to me + se — order!)", answers: ["mi se"], back: "Javi mi se! — DAT before se.", tts: "Javi mi se!" },
    { front: "to him (DAT) = ___", answers: ["mu"], back: "mu (ga is ACC).", tts: "Odgovori mu!" },
    { front: "Baka ___ je poslala čestitku. (to us)", answers: ["nam"], back: "nam — DAT; nas is ACC.", tts: "Baka nam je poslala čestitku." },
    { front: "Odgovorit ću ___ sutra. (to you, friend)", answers: ["ti"], back: "odgovoriti + DAT ti.", tts: "Odgovorit ću ti sutra." },
    { front: "question = ___ (n)", answers: ["pitanje"], back: "pitanje (Imam pitanje.)", tts: "Imam pitanje." },
    { front: "news item = ___ (f, -i noun)", answers: ["vijest"], back: "vijest (Imam dobru vijest!)", tts: "Imam dobru vijest!" },
  ],
  notes: {
    inOneSentence: {
      en: "The dative clitics — mi, ti, mu, joj, nam, vam, im — are the one-syllable TO-words; they ride second position before ACC clitics and before se (Javi mi se!).",
      exampleHr: "Odgovorit ću ti sutra. · Pošalji joj sliku! · Javi mi se!",
    },
    deepDive: [
      {
        title: "The DAT grid, complete",
        body:
          "Same architecture as yesterday: a stressed full form (for contrast and after prepositions like prema/k) and an everyday clitic.",
        table: {
          caption: "DAT pronouns: full ↔ clitic",
          headers: ["", "full", "clitic", "example"],
          colCase: [null, "DAT", "DAT", null],
          rows: [
            ["ja", "meni", "mi", "Javi mi se!"],
            ["ti", "tebi", "ti", "Odgovorit ću ti."],
            ["on/ono", "njemu", "mu", "Pošalji mu sliku!"],
            ["ona", "njoj", "joj", "Dajem joj poklon."],
            ["mi", "nama", "nam", "Baka nam je poslala čestitku."],
            ["vi", "vama", "vam", "Javit ću vam se."],
            ["oni/one", "njima", "im", "Tom im je poslao poruku."],
          ],
        },
      },
      {
        title: "The chunks were grammar all along",
        body:
          "Half your Croatian has been dative clitics in disguise:\n\n- *drago **mi** je* (U1) — it is dear TO ME\n- *sviđa **mi** se* (U10) — it pleases TO ME\n- *loše **mi** je · treba **mi** odmor* (U11) — TO ME\n- *čestitam **ti** · želim **ti** puno sreće* (U14) — TO YOU\n- *Danas **mi** je bolje* (U13) — TO ME\n\nOne orange syllable, five units of chunks — now you can swap any person in: *drago **joj** je, sviđa **im** se, treba **mu** odmor*.",
      },
      {
        title: "mu vs ga — two wagons, two jobs",
        body:
          "The classic confusion pair:\n\n- **ga** = him/it as the OBJECT (ACC — red wagon): *Vidim ga. Nazvat ću ga.*\n- **mu** = TO him (DAT — orange wagon): *Odgovorit ću mu. Pošalji mu sliku!*\n\nTest: expand the sentence. If the full form would be *njega* (whom?) → ga. If *njemu* (to whom?) → mu. Same test for je (her) vs joj (to her).",
        diagram: {
          kind: "contrast",
          left: { title: "ACC — whom?", emoji: "🔴", caseId: "ACC", lines: [{ hr: "Vidim ga. · Nazvat ću je.", en: "I see him. · I'll call her." }] },
          right: { title: "DAT — to whom?", emoji: "🧡", caseId: "DAT", lines: [{ hr: "Odgovorit ću mu. · Pošalji joj sliku!", en: "I'll answer him. · Send her the photo!" }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Javi se mi!",
        right: "Javi mi se!",
        why: "DAT rides BEFORE se in the cluster — always mi se, never se mi.",
      },
      {
        wrong: "Odgovorit ću te sutra.",
        right: "Odgovorit ću ti sutra.",
        why: "odgovoriti takes a DAT person — ti, not ACC te.",
      },
      {
        wrong: "Pošalji je sliku!",
        right: "Pošalji joj sliku!",
        why: "TO her = joj; je = her as a direct object (and would collide with the picture).",
      },
      {
        wrong: "Mi je poslala čestitku.",
        right: "Poslala mi je čestitku.",
        why: "Clitics never stand first — the engine (a stressed word) must lead.",
      },
    ],
    memoryHooks: [
      "mi-ti-mu-joj-nam-vam-im — chant it as three pairs and a tail: mi/ti · mu/joj · nam/vam · im.",
      "DAT before se: »Javi MI se« — me first, then myself.",
      "mu = to hiM, joj = to her (j for jenny, twice).",
      "Every -mi- chunk since U1 was this lesson in disguise: drago mi je, sviđa mi se, treba mi.",
    ],
    connects: [
      { label: "DAT nouns — the orange case (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "ACC clitics — yesterday's wagon (Unit 15 L1)", lessonId: "a2u15l1" },
      { label: "Next: the full train — Dala mu ga je (Unit 15 L3)", lessonId: "a2u15l3" },
    ],
    selfCheck: [
      { q: "The seven DAT clitics?", a: "mi, ti, mu, joj, nam, vam, im." },
      { q: "»Send her the picture!« = ?", a: "Pošalji joj sliku!" },
      { q: "Why »Javi mi se« and not »Javi se mi«?", a: "DAT clitics ride before se in the fixed order." },
      { q: "mu vs ga?", a: "mu = to him (DAT), ga = him (ACC)." },
      { q: "Upgrade »Dajem mami poklon« with a clitic.", a: "Dajem joj poklon." },
    ],
  },
};
