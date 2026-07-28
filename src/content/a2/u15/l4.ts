import type { Lesson } from "@/types/content";

/**
 * A2 U15 L4 — Halo? Poštovani… (phone calls & writing messages)
 * Spec: curriculum/A2/unit-15.md — pragmatic frames; no new machinery.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * e-mail moved here from the orphaned internet set; ostaviti moved to L2;
 * »Linija je zauzeta« → »Broj je zauzet« (linija untaught); the formal frame
 * »javljam Vam se zbog…« taught as a FIXED chunk with javljam & zbog glossed
 * (2026-07-23 spec correction). ovdje recycled (glossed in U13 story).
 */
export const a2u15l4: Lesson = {
  id: "a2u15l4",
  unitId: "a2u15",
  title: "Halo? Poštovani…",
  titleEn: "Hello? Dear… — phone calls & messages",
  grammarTags: ["phone-script", "email-register", "vi-register"],
  estMinutes: 19,
  vocab: [
    { id: "a2u15.halo", image: "/img/halo.png", hr: "halo", en: "hello? (PHONE ONLY)", pos: "interj", icon: "📞", exampleHr: "Halo, tko je?", exampleEn: "Hello, who is it?" },
    { id: "a2u15.postovani", image: "/img/postovani.png", hr: "poštovani", en: "Dear… (formal; poštovana f)", pos: "adj", icon: "🎩", exampleHr: "Poštovana gospođo Horvat!", exampleEn: "Dear Mrs Horvat! (formal)" },
    { id: "a2u15.pozdrav", image: "/img/pozdrav.png", hr: "pozdrav", en: "greeting / regards", pos: "noun", gender: "m", icon: "👋", exampleHr: "Pozdrav iz Splita!", exampleEn: "Greetings from Split!" },
    { id: "a2u15.potpis", image: "/img/potpis.png", hr: "potpis", en: "signature", pos: "noun", gender: "m", icon: "✍️", exampleHr: "Na kraju je potpis.", exampleEn: "At the end comes the signature." },
    { id: "a2u15.hitno", image: "/img/hitno.png", hr: "hitno", en: "urgent(ly)", pos: "adv", icon: "🚨", exampleHr: "Hitno je! Nazovi me!", exampleEn: "It's urgent! Call me!" },
    { id: "a2u15.zauzet", image: "/img/zauzet.png", hr: "zauzet", en: "busy / engaged (zauzeta, zauzeto)", pos: "adj", icon: "⛔", exampleHr: "Broj je zauzet.", exampleEn: "The number is busy." },
    { id: "a2u15.email", image: "/img/email.png", hr: "e-mail", en: "e-mail", pos: "noun", gender: "m", icon: "📧", exampleHr: "Pišem e-mail šefici.", exampleEn: "I'm writing the boss an e-mail." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Halo? Poštovani…",
      subtitle: "A phone rings, an inbox opens — both ends of the line are yours by tonight.",
      emoji: "📞",
      items: [
        { emoji: "📞", label: "The call script", hint: "Halo → Tko je? → Čujemo se!" },
        { emoji: "📧", label: "E-mail anatomy", hint: "formal vs informal" },
        { emoji: "🔠", label: "Capital Vam", hint: "respect in writing" },
        { emoji: "🎤", label: "Answer the phone", hint: "Halo, ovdje…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The call",
      subtitle: "Six beats, always the same — from zvoni to Čujemo se!",
      emoji: "📞",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "VOC + courtesy + numbers" },
        { emoji: "🗺️", label: "Call flow", hint: "the fixed script" },
        { emoji: "📊", label: "New words", hint: "halo, zauzet, hitno…" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: politeness & digits",
      items: [
        {
          prompt: "U14 vocative: »Draga ___,« (baka — opening a letter)",
          options: ["bako", "baka", "baki"],
          correctIndex: 0,
          explanation: "Letter openings take VOC: Draga bako. Today: the formal version.",
        },
        {
          prompt: "Listen (U1 courtesy): what is she saying?",
          tts: "Oprostite, molim Vas!",
          options: ["Excuse me, please!", "Thank you very much!", "See you tomorrow!"],
          correctIndex: 0,
          explanation: "The polite-Vi toolkit — it runs every formal call and e-mail.",
        },
        {
          prompt: "Listen (U2/U7 digits): which number?",
          tts: "nula devet jedan",
          options: ["091", "901", "019"],
          correctIndex: 0,
          explanation: "nula devet jedan = 091 — a Croatian mobile prefix.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Call & mail words",
      vocabIds: [
        "a2u15.halo", "a2u15.postovani", "a2u15.pozdrav", "a2u15.potpis",
        "a2u15.hitno", "a2u15.zauzet", "a2u15.email",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The call script — six fixed beats",
      body:
        "Croatian phone calls run on rails (like the clitics!). **halo** lives ONLY on the phone — never in writing, never face to face. Identify yourself with **ovdje** (here = this is…):",
      diagram: {
        kind: "flow",
        steps: [
          { label: "📳 zvoni", emoji: "📳", example: "the phone rings" },
          { label: "Halo?", emoji: "📞", example: "picking up" },
          { label: "Tko je?", emoji: "❓", example: "who is it?" },
          { label: "Ovdje Ana.", emoji: "🙋", example: "identify yourself" },
          { label: "the matter", emoji: "💬", example: "Imam pitanje… / Hitno je!" },
          { label: "Čujemo se!", emoji: "👋", example: "talk soon! (lit. we hear each other)" },
        ],
      },
      examples: [
        { hr: "Halo, tko je? — Ovdje Ana.", en: "Hello, who is it? — This is Ana." },
        { hr: "Broj je zauzet.", en: "The number is busy." },
        { hr: "Hitno je! Nazovi me!", en: "It's urgent! Call me!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "E-mail anatomy — two registers, one skeleton",
      body:
        "Opening → body → closing → **potpis**. The register decides every word — and in formal writing, **Vam/Vas takes a capital V** (respect you can see).\n\nThe standard formal opener is a fixed frame: ***javljam Vam se zbog…*** = I'm writing to you about… (*javljam* = I'm getting in touch; *zbog* + GEN = because of).",
      diagram: {
        kind: "contrast",
        left: {
          title: "formal — Vi (capital!)",
          emoji: "🎩",
          lines: [
            { hr: "Poštovana gospođo Horvat,", en: "Dear Mrs Horvat," },
            { hr: "javljam Vam se zbog stana.", en: "I'm writing to you about the flat." },
            { hr: "Srdačan pozdrav, Ana Kovač", en: "Kind regards, Ana Kovač" },
          ],
        },
        right: {
          title: "informal — ti",
          emoji: "😊",
          lines: [
            { hr: "Draga Ana / Bok, Tom!", en: "Dear Ana / Hi Tom!" },
            { hr: "Javi mi se! Čujemo se!", en: "Text me! Talk soon!" },
            { hr: "Pozdrav, Marko", en: "Cheers, Marko" },
          ],
        },
      },
      examples: [
        { hr: "Poštovana gospođo Horvat, javljam Vam se zbog stana.", en: "Dear Mrs Horvat, I'm writing to you about the flat.", note: "the fixed formal frame" },
        { hr: "Poslat ću Vam odgovor sutra. Srdačan pozdrav!", en: "I'll send you the answer tomorrow. Kind regards!" },
        { hr: "Draga Ana, javi mi se! Pozdrav, Tom", en: "Dear Ana, text me! Cheers, Tom" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: which register?",
      items: [
        {
          prompt: "Writing to gospođa Kovač (your landlady), you open with…",
          options: ["Poštovana gospođo Kovač,", "Draga gospođo Kovač,", "Halo, gospođo Kovač,"],
          correctIndex: 0,
          explanation: "Formal = Poštovana. (halo NEVER appears in writing!)",
        },
        {
          prompt: "Texting Ana (your friend), you open with…",
          options: ["Draga Ana / Bok, Ana!", "Poštovana Ana,", "Poštovana gospođo Ana,"],
          correctIndex: 0,
          explanation: "Friends get draga/bok — mixing registers (Poštovana Ana) sounds absurd.",
        },
        {
          prompt: "In a formal e-mail: »Javit ću ___ se sutra.«",
          options: ["Vam", "vam", "ti"],
          correctIndex: 0,
          explanation: "Formal writing capitalizes Vam — respect on paper.",
        },
        {
          prompt: "Where does »halo« belong?",
          options: ["only on the phone", "phone and e-mail", "anywhere"],
          correctIndex: 0,
          explanation: "halo is phone-only — greeting someone in person or in writing with halo is a classic slip.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Write & dial",
      subtitle: "One e-mail skeleton, one text message, one busy number.",
      emoji: "✍️",
      items: [
        { emoji: "✏️", label: "The skeleton fill", hint: "Poštovana → pozdrav" },
        { emoji: "⌨️", label: "Two typed lines", hint: "halo · Vam" },
        { emoji: "🔀", label: "Answer the ring", hint: "Halo, tko je?" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ gospođo Kovač, javljam ___ se zbog stana. Srdačan ___, Ana Horvat (formal opener · capital! · closing)",
      blanks: [["Poštovana"], ["Vam"], ["pozdrav"]],
      translation: "Dear Mrs Kovač, I'm writing to you about the flat. Kind regards, Ana Horvat",
      explanation: "Poštovana + VOC · capital Vam · Srdačan pozdrav + potpis.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Zovem Anu… ništa. Broj je ___. (busy)",
      blanks: [["zauzet"]],
      translation: "I'm calling Ana… nothing. The number is busy.",
      wordBank: ["zauzet", "zauzeta", "hitno"],
      explanation: "broj (m) → zauzet.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "You pick up the phone. Say it: “Hello, who is it?”",
      answers: ["Halo, tko je?", "Halo, tko je"],
      hint: "the phone-only word first",
      explanation: "Halo, tko je?",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Formal writing: “I'll get in touch with you” = »Javit ću ___ se.« (capital!)",
      answers: ["Vam"],
      hint: "respect gets a capital letter",
      explanation: "Javit ću Vam se. — capital Vam in formal writing.",
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Halo", "tko", "je"],
      answers: ["Halo, tko je?", "Halo tko je?", "Halo, tko je", "Halo tko je"],
      en: "Hello, who is it?",
      explanation: "The first two beats of every call.",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "Catch a number by ear, then answer a ringing phone in role.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Number dictation", hint: "digits!" },
        { emoji: "🎤", label: "You pick up", hint: "Halo? Ovdje…" },
        { emoji: "🔗", label: "Courtesy rails", hint: "U1 meets the inbox" },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "nula devet jedan, pet pet pet",
      answers: ["091 555", "091555", "nula devet jedan pet pet pet", "0 9 1 5 5 5"],
      explanation: "091 555 — nula devet jedan, pet pet pet.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Halo, tko je?",
      explanation: "Halo, tko je? — hello, who is it?",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Halo, tko je? — Ovdje Tom.",
      targetEn: "the phone rings — answer it and identify yourself: Hello, who is it? — This is Tom. (use your own name!)",
      phonetic: "HA-lo, tko ye? — OV-dyeh Tom",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: registers everywhere",
      items: [
        {
          prompt: "U14: the formal letter to Mrs Horvat uses which vocative?",
          options: ["Poštovana gospođo Horvat!", "Poštovana gospođa Horvat!", "Draga gospođo!  — to a stranger"],
          correctIndex: 0,
          explanation: "gospođa → VOC gospođo; the surname stays (U14 L1).",
        },
        {
          prompt: "Listen (L2 + today): what does the voicemail say?",
          tts: "Ostavite poruku poslije signala.",
          options: [
            "leave a message after the signal",
            "the number is busy",
            "call back urgently",
          ],
          correctIndex: 0,
          explanation: "Ostavite (Vi-imperative of ostaviti, L2) poruku — the voicemail line. (signal = signal!)",
        },
        {
          prompt: "U1 register logic: your friend's mum answers the phone. You say…",
          options: [
            "Dobar dan, ovdje Tom. Je li Ana tu?",
            "Bok! Daj Anu!",
            "Halo, halo, halo?",
          ],
          correctIndex: 0,
          explanation: "Politeness first: dobar dan + identify + polite question (je li — U2).",
        },
      ],
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The call script**: *zvoni → Halo? → Tko je? → Ovdje [ime] → the matter → Čujemo se!* — halo is PHONE-ONLY. If it fails: *Broj je zauzet. Ostavi poruku!*\n\n**E-mail anatomy**: formal *Poštovana gospođo X, javljam **Vam** se zbog… → Srdačan pozdrav + potpis* (capital Vam!) · informal *Draga Ana / Bok! → Javi mi se! → Pozdrav*.\n\nWords tonight: **halo, poštovani, pozdrav, potpis, hitno, zauzet, e-mail**.",
      vocabIds: [
        "a2u15.halo", "a2u15.postovani", "a2u15.pozdrav", "a2u15.potpis",
        "a2u15.hitno", "a2u15.zauzet", "a2u15.email",
      ],
    },
  ],
  srsCloze: [
    { front: "Formal opening: »___ gospođo Horvat,«", answers: ["Poštovana", "poštovana", "Postovana"], back: "Poštovana gospođo Horvat, — the formal Dear.", tts: "Poštovana gospođo Horvat!" },
    { front: "Formal closing: »Srdačan ___,« + potpis", answers: ["pozdrav"], back: "Srdačan pozdrav — kind regards.", tts: "Srdačan pozdrav!" },
    { front: "Javit ću ___ se. (formal writing — capital!)", answers: ["Vam"], back: "Vam — capitalized in formal writing.", tts: "Javit ću Vam se." },
    { front: "The phone-only greeting: »___, tko je?«", answers: ["Halo", "halo"], back: "Halo — never in writing or in person.", tts: "Halo, tko je?" },
    { front: "The number is busy: »Broj je ___.«", answers: ["zauzet"], back: "zauzet (zauzeta f, zauzeto n).", tts: "Broj je zauzet." },
    { front: "It's urgent! = »___ je!«", answers: ["Hitno", "hitno"], back: "Hitno je! Nazovi me!", tts: "Hitno je!" },
    { front: "signature = ___ (m)", answers: ["potpis"], back: "potpis — the last line of every e-mail.", tts: "Na kraju je potpis." },
  ],
  notes: {
    inOneSentence: {
      en: "Phone calls and e-mails run on fixed frames — Halo?/Tko je?/Ovdje…/Čujemo se! on the phone; Poštovana gospođo → javljam Vam se zbog… → Srdačan pozdrav (capital Vam!) in formal mail.",
      exampleHr: "Halo, tko je? — Ovdje Ana. · Poštovana gospođo Horvat, javljam Vam se zbog stana.",
    },
    deepDive: [
      {
        title: "The two skeletons, printable",
        body:
          "Copy these until they're reflexes:",
        table: {
          caption: "E-mail skeletons",
          headers: ["part", "formal (Vi)", "informal (ti)"],
          rows: [
            ["opening", "Poštovana gospođo Horvat, / Poštovani gospodine Kovač,", "Draga Ana, / Dragi Ivane, / Bok!"],
            ["first line", "javljam Vam se zbog [GEN]", "Kako si? / Imam dobru vijest!"],
            ["ask", "Molim Vas, odgovorite mi.", "Javi mi se!"],
            ["closing", "Srdačan pozdrav,", "Pozdrav, / Čujemo se!"],
            ["potpis", "Ana Kovač", "Ana"],
          ],
        },
      },
      {
        title: "Capital Vam — respect you can see",
        body:
          "In formal WRITING (e-mails, letters, applications), all the Vi-forms take a capital: **Vi, Vam, Vas, Vaš**.\n\n*Javljam **Vam** se… · Molim **Vas**… · **Vaš** stan…*\n\nSpeech doesn't distinguish — this is purely an orthographic bow. Lowercase vam to your landlady reads as careless; capital Vam to your best friend reads as a joke.",
      },
      {
        title: "Phone pragmatics — the unwritten rules",
        body:
          "- **halo** is strictly phone-territory. Face to face: *bok / dobar dan*. In writing: never.\n- Identify with **ovdje**: *Ovdje Ana.* (lit. here [is] Ana)\n- **Čujemo se!** closes calls the way *vidimo se* closes meetings — we'll hear each other.\n- Unreachable? *Broj je zauzet* (busy) · *Ostavite poruku poslije signala* (voicemail — the Vi-imperative of L2's ostaviti).",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Halo?", emoji: "📞", example: "phone only!" },
            { label: "Ovdje Ana", emoji: "🙋", example: "identify" },
            { label: "Čujemo se!", emoji: "👋", example: "hang up happy" },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Poštovana Ana,",
        right: "Draga Ana, (friend) / Poštovana gospođo Kovač, (formal)",
        why: "Registers don't mix — poštovani goes with titles+surnames, dragi with friends.",
      },
      {
        wrong: "javit ću vam se (in a formal e-mail)",
        right: "javit ću Vam se",
        why: "Formal writing capitalizes Vam/Vas/Vaš.",
      },
      {
        wrong: "Halo, gospođo Horvat! (in an e-mail)",
        right: "Poštovana gospođo Horvat,",
        why: "halo exists only on the phone.",
      },
      {
        wrong: "Broj je zauzeta.",
        right: "Broj je zauzet.",
        why: "broj is masculine — zauzet.",
      },
    ],
    memoryHooks: [
      "halo has a cord attached — it can't leave the phone.",
      "Capital Vam = a little bow in ink.",
      "Čujemo se (calls) : vidimo se (meetings) — hear you : see you.",
      "Formal mail formula: Poštovana → zbog → Srdačan pozdrav → potpis. Four stamps, always in order.",
    ],
    connects: [
      { label: "The vocative in salutations (Unit 14 L1)", lessonId: "a2u14l1" },
      { label: "ti/Vi — the original register split (Unit 1 L5)", lessonId: "a1u1l5" },
      { label: "Next: everything at speed (Unit 15 L5)", lessonId: "a2u15l5" },
    ],
    selfCheck: [
      { q: "Open a formal e-mail to Mr Kovač.", a: "Poštovani gospodine Kovač," },
      { q: "The fixed formal first line?", a: "Javljam Vam se zbog… (+ GEN)" },
      { q: "Why capital Vam?", a: "Formal writing capitalizes Vi/Vam/Vas/Vaš as a mark of respect." },
      { q: "Close a call in two words.", a: "Čujemo se!" },
      { q: "Where may »halo« be used?", a: "Only on the phone — never in writing or face to face." },
    ],
  },
};
