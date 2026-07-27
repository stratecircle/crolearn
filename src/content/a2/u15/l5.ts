import type { Lesson } from "@/types/content";

/**
 * A2 U15 L5 — Ostanimo u vezi (review & integrated practice)
 * Spec: curriculum/A2/unit-15.md — no new grammar; every task forces a clitic
 * choice AND a placement choice at once.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Vocab = original L5 set + the internet words reallocated from the orphaned
 * "L3 (internet)" spec set (2026-07-23 correction) — exactly 12. »Ostanimo u
 * vezi« glossed as a chunk (ostati untaught).
 */
export const a2u15l5: Lesson = {
  id: "a2u15l5",
  unitId: "a2u15",
  title: "Ostanimo u vezi",
  titleEn: "Let's stay in touch — clitics under pressure",
  grammarTags: ["clitic-order", "acc-clitics", "dat-clitics", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a2u15.veza", hr: "veza", en: "connection (Ostanimo u vezi! = let's stay in touch)", pos: "noun", gender: "f", icon: "🔗", exampleHr: "Ostanimo u vezi!", exampleEn: "Let's stay in touch!" },
    { id: "a2u15.objava", hr: "objava", en: "post (on social media)", pos: "noun", gender: "f", icon: "📣", exampleHr: "Sviđa mi se objava.", exampleEn: "I like the post." },
    { id: "a2u15.pratiti", hr: "pratiti", en: "to follow (pratim)", pos: "verb", icon: "👣", exampleHr: "Tom prati Anu na internetu.", exampleEn: "Tom follows Ana online." },
    { id: "a2u15.dopisivatise", hr: "dopisivati se", en: "to text back and forth (dopisujem se)", pos: "verb", icon: "💬", exampleHr: "Dopisujemo se svaki dan.", exampleEn: "We text each other every day." },
    { id: "a2u15.videopoziv", hr: "video-poziv", en: "video call", pos: "noun", gender: "m", icon: "🎥", exampleHr: "Imamo video-poziv u osam.", exampleEn: "We have a video call at eight." },
    { id: "a2u15.dijeliti", hr: "dijeliti", en: "to share (dijelim)", pos: "verb", icon: "🤝", exampleHr: "Dijelim slike s Anom.", exampleEn: "I share pictures with Ana." },
    { id: "a2u15.internet", hr: "internet", en: "internet", pos: "noun", gender: "m", icon: "🌐", exampleHr: "Internet ne radi!", exampleEn: "The internet isn't working!" },
    { id: "a2u15.mreza", hr: "mreža", en: "network", pos: "noun", gender: "f", icon: "📶", exampleHr: "Mreža je spora.", exampleEn: "The network is slow." },
    { id: "a2u15.lozinka", hr: "lozinka", en: "password", pos: "noun", gender: "f", icon: "🔑", exampleHr: "Moja lozinka je tajna.", exampleEn: "My password is a secret." },
    { id: "a2u15.stranica", hr: "stranica", en: "page / website", pos: "noun", gender: "f", icon: "🖥️", exampleHr: "Gledam stranicu.", exampleEn: "I'm looking at the page." },
    { id: "a2u15.aplikacija", hr: "aplikacija", en: "app", pos: "noun", gender: "f", icon: "📲", exampleHr: "Aplikacija je dobra.", exampleEn: "The app is good." },
    { id: "a2u15.objaviti", hr: "objaviti", en: "to post / publish (objavim)", pos: "verb", icon: "🚀", exampleHr: "Ana je objavila sliku.", exampleEn: "Ana posted a picture." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Ostanimo u vezi",
      subtitle: "Baka Marija has a mobitel now. Someone has to answer her.",
      emoji: "🔗",
      items: [
        { emoji: "🌐", label: "Internet words", hint: "mreža, lozinka, objava…" },
        { emoji: "⚡", label: "Speed round", hint: "clitic + placement at once" },
        { emoji: "📞", label: "Answer the call", hint: "the full script, live" },
        { emoji: "🏔️", label: "Unit review", hint: "8 questions, L1–L4" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Get online",
      subtitle: "Twelve words and the whole internet is yours — u vezi, na mreži.",
      emoji: "🌐",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "yesterday's frames" },
        { emoji: "📶", label: "The online words", hint: "12 new" },
        { emoji: "⚡", label: "Then: pressure", hint: "speed round" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the unit so far",
      items: [
        {
          prompt: "Vidim Anu → with a clitic:",
          options: ["Vidim je.", "Vidim ga.", "Je vidim."],
          correctIndex: 0,
          explanation: "her → je, never first (L1).",
        },
        {
          prompt: "»Get in touch with me!« =",
          options: ["Javi mi se!", "Javi se mi!", "Mi se javi!"],
          correctIndex: 0,
          explanation: "DAT before se (L2).",
        },
        {
          prompt: "Listen (U10): what does she like?",
          tts: "Sviđa mi se objava.",
          options: ["the post", "the app", "the picture"],
          correctIndex: 0,
          explanation: "objava = post — today's vocab, U10's frame, L2's mi.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The online words",
      vocabIds: [
        "a2u15.veza", "a2u15.objava", "a2u15.pratiti", "a2u15.dopisivatise",
        "a2u15.videopoziv", "a2u15.dijeliti", "a2u15.internet", "a2u15.mreza",
        "a2u15.lozinka", "a2u15.stranica", "a2u15.aplikacija", "a2u15.objaviti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Staying in touch — the online register",
      body:
        "The internet vocabulary is friendly territory — half of it is cognate (*internet, aplikacija, video-poziv*). The grammar around it is everything this unit built:\n\n*Nazvat ću **je** večeras. · Jesi li **mi** poslao poruku? · Ana je objavila sliku — Tom **je** prati.* (je = her — the clitic remembers Ana!)\n\n*(Ostanimo u vezi! = let's stay in touch — a fixed chunk; dopisivati se: dopisujem se, the -ujem family from U7.)*",
      table: {
        caption: "The unit on one card",
        headers: ["person", "ACC (whom)", "DAT (to whom)"],
        colCase: [null, "ACC", "DAT"],
        rows: [
          ["ja / ti", "me / te", "mi / ti"],
          ["on / ona", "ga / je", "mu / joj"],
          ["mi / vi / oni", "nas / vas / ih", "nam / vam / im"],
          ["the train", "li → aux → DAT → ACC → se → je", "je last · se eats je"],
        ],
      },
      examples: [
        { hr: "Nazvat ću je večeras.", en: "I'll call her tonight.", highlight: { text: "je", caseId: "ACC" } },
        { hr: "Jesi li mi poslao poruku?", en: "Did you send me the message?", highlight: { text: "mi", caseId: "DAT" } },
        { hr: "Dopisujemo se svaki dan.", en: "We text each other every day." },
        { hr: "Ana je objavila sliku, a Tom je prati.", en: "Ana posted a picture, and Tom follows her.", note: "the second je = her!" },
        { hr: "Mreža je spora, ali video-poziv radi.", en: "The network is slow, but the video call works." },
        { hr: "Imamo video-poziv u osam — javi mi se!", en: "We have a video call at eight — text me!", highlight: { text: "mi", caseId: "DAT" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Speed round I — meaning under pressure",
      items: [
        {
          prompt: "»Nazvat ću je večeras.« — who gets called?",
          options: ["her", "him", "them"],
          correctIndex: 0,
          explanation: "je = her (ACC clitic riding after ću).",
        },
        {
          prompt: "You forgot your lozinka. What can't you do?",
          options: ["log in", "make a call", "charge the phone"],
          correctIndex: 0,
          explanation: "lozinka = password.",
        },
        {
          prompt: "»Mreža je spora.« means…",
          options: ["the network is slow", "the page is down", "the app is old"],
          correctIndex: 0,
          explanation: "mreža + U13's spor.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Speed round",
      subtitle: "Clitic choice AND placement, every single time.",
      emoji: "⚡",
      items: [
        { emoji: "🔀", label: "Two trains", hint: "reorder fast" },
        { emoji: "✏️", label: "Three fills", hint: "mi · je · se" },
        { emoji: "🎧", label: "Two dictations", hint: "clitics at speed" },
      ],
    },
    {
      id: "s08",
      type: "reorder",
      words: ["Nazvat", "ću", "je", "večeras"],
      answers: ["Nazvat ću je večeras.", "Nazvat ću je večeras"],
      en: "I'll call her tonight.",
      explanation: "engine (Nazvat) + aux (ću) + ACC (je).",
    },
    {
      id: "s09",
      type: "reorder",
      words: ["Jesi", "li", "mi", "poslao", "poruku"],
      answers: ["Jesi li mi poslao poruku?", "Jesi li mi poslao poruku"],
      en: "Did you send me the message?",
      explanation: "jesi + li + DAT mi — the question train.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Sviđa ___ se objava. (to me)",
      blanks: [["mi"]],
      translation: "I like the post.",
      wordBank: ["mi", "me", "mu"],
      explanation: "sviđati se + DAT: mi (before se!).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana je objavila sliku — Tom ___ prati. (her)",
      blanks: [["je"]],
      translation: "Ana posted a picture — Tom follows her.",
      wordBank: ["je", "joj", "ga"],
      explanation: "pratiti + ACC: je = her.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Dopisujemo ___ svaki dan. (the reflexive)",
      blanks: [["se"]],
      translation: "We text each other every day.",
      wordBank: ["se", "si", "smo"],
      explanation: "dopisivati SE — the se rides second position.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Shrink it: »Pratim Anu i Marka na internetu.« → »Pratim ___ na internetu.«",
      answers: ["ih"],
      hint: "them",
      explanation: "Anu i Marka → ih.",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Nazvat ću je večeras.",
      explanation: "Nazvat ću je večeras — I'll call her tonight.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Dopisujemo se svaki dan.",
      explanation: "Dopisujemo se svaki dan — we text every day.",
    },
    {
      id: "s16",
      type: "speak",
      targetHr: "Halo? Ovdje Tom. Čujem te!",
      targetEn: "the phone rings — answer with the full script: Hello? This is Tom. I can hear you! (your name, of course)",
      phonetic: "HA-lo? OV-dyeh Tom. CHOO-yem teh",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "The story world, extremely online",
      items: [
        {
          prompt: "»Ana dijeli slike, a Tom ih prati.« What's happening?",
          options: [
            "Ana shares pictures and Tom follows them",
            "Tom shares pictures with Ana",
            "Ana follows Tom's pictures",
          ],
          correctIndex: 0,
          explanation: "dijeliti + ACC pl → ih.",
        },
        {
          prompt: "Listen (L2 + U10): what did grandma do?",
          tts: "Baka nam je poslala sliku torte.",
          options: [
            "sent us a picture of the cake",
            "baked us a cake",
            "called us about the cake",
          ],
          correctIndex: 0,
          explanation: "nam (DAT) je (caboose) poslala — the train carrying cake pictures.",
        },
        {
          prompt: "Baka texts everyone after the party: »Hvala! Javite ___ se!« — get in touch with HER",
          options: ["mi", "nam", "joj"],
          correctIndex: 0,
          explanation: "She's the receiver → mi (get in touch with ME). javite is the vi-imperative — she's writing to the whole group.",
        },
      ],
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · The whole line — unit review",
      subtitle: "Eight questions across L1–L4. Story and test next.",
      emoji: "🏔️",
      items: [
        { emoji: "🔴", label: "ACC & DAT clitics", hint: "L1–L2 sample" },
        { emoji: "🚂", label: "Order & register", hint: "L3–L4 sample" },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Review I — the little words (L1–L2)",
      items: [
        {
          prompt: "Vidim Marka. → Vidim ___.",
          options: ["ga", "mu", "je"],
          correctIndex: 0,
          explanation: "him (ACC) → ga.",
        },
        {
          prompt: "Šaljem poruku Ani. → Šaljem ___ poruku.",
          options: ["joj", "je", "ju"],
          correctIndex: 0,
          explanation: "to her (DAT) → joj.",
        },
        {
          prompt: "Which is legal?",
          options: ["Vidim ga.", "Ga vidim.", "both"],
          correctIndex: 0,
          explanation: "Clitics never stand first.",
        },
        {
          prompt: "»I'll answer you tomorrow« (friend):",
          options: ["Odgovorit ću ti sutra.", "Odgovorit ću te sutra.", "Odgovorit ću tebi? Fine but clunky"],
          correctIndex: 0,
          explanation: "odgovoriti + DAT clitic ti.",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      title: "Review II — order & register (L3–L4)",
      items: [
        {
          prompt: "She gave it to him:",
          options: ["Dala mu ga je.", "Dala je mu ga.", "Dala ga mu je."],
          correctIndex: 0,
          explanation: "DAT → ACC → je-caboose.",
        },
        {
          prompt: "Ana got in touch:",
          options: ["Javila se.", "Javila se je.", "Je se javila."],
          correctIndex: 0,
          explanation: "se + je → je drops.",
        },
        {
          prompt: "Formal e-mail opening:",
          options: ["Poštovana gospođo Kovač,", "Halo, gospođo Kovač,", "Draga gospođo,"],
          correctIndex: 0,
          explanation: "Poštovana + title + surname; halo is phone-only.",
        },
        {
          prompt: "Formal writing: »Javit ću ___ se.«",
          options: ["Vam", "vam", "ti"],
          correctIndex: 0,
          explanation: "Capital Vam.",
        },
      ],
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The unit, in one thread**: *Vidim je → Javi mi se → Dala mu ga je → Poštovana gospođo, javljam Vam se…*\n\n- ACC clitics (*me te ga je nas vas ih*) · DAT clitics (*mi ti mu joj nam vam im*)\n- the train: **li → aux → DAT → ACC → se → je** (je last; se eats je)\n- call script + e-mail skeletons (capital Vam!)\n\nWords tonight: **veza, objava, pratiti, dopisivati se, video-poziv, dijeliti, internet, mreža, lozinka, stranica, aplikacija, objaviti**.\n\nNext: the story — «Baka Marija i mobitel» — then the unit test.",
      vocabIds: [
        "a2u15.veza", "a2u15.objava", "a2u15.pratiti", "a2u15.dopisivatise",
        "a2u15.videopoziv", "a2u15.dijeliti", "a2u15.internet", "a2u15.mreza",
        "a2u15.lozinka", "a2u15.stranica", "a2u15.aplikacija", "a2u15.objaviti",
      ],
    },
  ],
  srsCloze: [
    { front: "Nazvat ću ___ večeras. (her)", answers: ["je"], back: "je — ACC after the aux ću.", tts: "Nazvat ću je večeras." },
    { front: "Jesi ___ mi poslao poruku?", answers: ["li"], back: "li rides right after jesi.", tts: "Jesi li mi poslao poruku?" },
    { front: "Sviđa ___ se objava. (to me)", answers: ["mi"], back: "mi before se — the L2 order.", tts: "Sviđa mi se objava." },
    { front: "Let's stay in touch! = Ostanimo u ___!", answers: ["vezi"], back: "Ostanimo u vezi! (veza → LOC vezi)", tts: "Ostanimo u vezi!" },
    { front: "password = ___ (f)", answers: ["lozinka"], back: "lozinka (Moja lozinka je tajna.)", tts: "Moja lozinka je tajna." },
    { front: "to text back & forth = ___ se (dopisujem)", answers: ["dopisivati"], back: "dopisivati se — Dopisujemo se svaki dan.", tts: "Dopisujemo se svaki dan." },
    { front: "Ana je objavila sliku — Tom ___ prati. (her)", answers: ["je"], back: "pratiti + ACC je.", tts: "Tom je prati." },
  ],
  notes: {
    inOneSentence: {
      en: "No new grammar — every sentence forces both choices at once: WHICH clitic (ACC ga/je vs DAT mu/joj) and WHERE it rides (second position, train order, je last).",
      exampleHr: "Nazvat ću je večeras. · Jesi li mi poslao poruku? · Ostanimo u vezi!",
    },
    deepDive: [
      {
        title: "The mega-recap — both grids + the train",
        body:
          "Everything on one card:",
        table: {
          caption: "The clitic system at A2",
          headers: ["person", "ACC (whom)", "DAT (to whom)"],
          colCase: [null, "ACC", "DAT"],
          rows: [
            ["ja", "me", "mi"],
            ["ti", "te", "ti"],
            ["on/ono", "ga", "mu"],
            ["ona", "je (ju)", "joj"],
            ["mi", "nas", "nam"],
            ["vi", "vas", "vam"],
            ["oni/one", "ih", "im"],
          ],
        },
        diagram: {
          kind: "train",
          wagons: [
            { label: "li", items: ["li"] },
            { label: "aux", items: ["sam ću…"], note: "not je!" },
            { label: "DAT", items: ["mi ti mu joj nam vam im"] },
            { label: "ACC", items: ["me te ga je nas vas ih"] },
            { label: "se", items: ["se"] },
            { label: "je", items: ["je"], note: "caboose" },
          ],
        },
      },
      {
        title: "Reading the double je",
        body:
          "*Ana **je** objavila sliku, a Tom **je** prati.*\n\nTwo je's, two jobs: the first is the aux (Ana JE objavila — perfekt), the second the pronoun her (Tom follows HER). How to tell: the aux je pairs with an l-participle (objavila); the pronoun je pairs with a present verb that already has its subject (Tom prati). Croatian readers do this instantly — now you can too.",
      },
      {
        title: "The internet speaks Croatian too",
        body:
          "Half the online words are guests that learned the local grammar: *internet* (m, LOC *na internetu*), *e-mail* (m), *aplikacija* (f, like every -ija), *video-poziv* (m, declines on poziv).\n\nThe native ones pull their weight: **mreža** (net — also a fishing net!), **stranica** (page — from strana, side), **lozinka**, **objava/objaviti**, **dijeliti** (share — also 'divide'), **pratiti** (follow — also literally, down the street).",
      },
    ],
    commonMistakes: [
      {
        wrong: "Nazvat ću ju večeras. (default)",
        right: "Nazvat ću je večeras.",
        why: "je is the default 'her'; ju appears mainly next to the aux je (Vidio ju je).",
      },
      {
        wrong: "Tom joj prati.",
        right: "Tom je prati.",
        why: "pratiti takes ACC (follow WHOM) → je; joj would be 'to her'.",
      },
      {
        wrong: "Dopisujemo svaki dan.",
        right: "Dopisujemo se svaki dan.",
        why: "dopisivati SE — the reflexive se is part of the verb.",
      },
      {
        wrong: "Ostanimo u veza!",
        right: "Ostanimo u vezi!",
        why: "u + LOC: veza → vezi (the chunk keeps the case).",
      },
    ],
    memoryHooks: [
      "Two questions, every sentence: WHICH little word? WHERE does it sit?",
      "The double je: aux je + l-participle; pronoun je + present verb.",
      "mreža catches fish AND wifi.",
      "Ostanimo u vezi — the unit's goodbye is its own grammar drill (u + LOC).",
    ],
    connects: [
      { label: "ACC clitics (Unit 15 L1)", lessonId: "a2u15l1" },
      { label: "The train (Unit 15 L3)", lessonId: "a2u15l3" },
      { label: "Next unit: verb aspect — the last A2 boss (Unit 16 L1)", lessonId: "a2u16l1" },
    ],
    selfCheck: [
      { q: "»I'll call her tonight« = ?", a: "Nazvat ću je večeras." },
      { q: "»Did you send me the message?« = ?", a: "Jesi li mi poslao poruku?" },
      { q: "Both grids from memory: on/ona, ACC and DAT?", a: "ga/je (ACC) · mu/joj (DAT)." },
      { q: "Why »Tom je prati« ≠ »Tom is following«?", a: "That je is the ACC pronoun her — pratiti + je = follows HER." },
      { q: "Let's stay in touch = ?", a: "Ostanimo u vezi!" },
    ],
  },
};
