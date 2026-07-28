import type { Lesson } from "@/types/content";

/**
 * A2 U12 L1 — S kolegom u uredu (INS singular: company)
 * Spec: curriculum/A2/unit-12.md · grammar-reference §3, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: s/sa + INS (company) only — bare-INS means is L2 (previewed on
 * the usage map, not drilled). posao recycled (U5). Inline glosses per the
 * spec correction: šećer (the sa-drill needs a word), razgovarati (owned
 * properly with razgovor za posao in L5). "sa mnom" mentioned as a fixed
 * form only.
 */
export const a2u12l1: Lesson = {
  id: "a2u12l1",
  unitId: "a2u12",
  title: "S kolegom u uredu",
  titleEn: "With a colleague at the office — instrumental",
  grammarTags: ["instrumental-singular", "s-sa-company"],
  estMinutes: 18,
  vocab: [
    { id: "a2u12.ured", image: "/img/ured.png", hr: "ured", en: "office", pos: "noun", gender: "m", icon: "🏢", exampleHr: "Radim u uredu.", exampleEn: "I work in an office." },
    { id: "a2u12.tvrtka", image: "/img/tvrtka.png", hr: "tvrtka", en: "company / firm", pos: "noun", gender: "f", icon: "🏛️", exampleHr: "Tvrtka je velika.", exampleEn: "The company is big." },
    { id: "a2u12.kolega", image: "/img/kolega.png", hr: "kolega", en: "colleague (m — but declines like -a!)", pos: "noun", gender: "m", icon: "👨‍💼", exampleHr: "Radim s kolegom.", exampleEn: "I work with a colleague." },
    { id: "a2u12.kolegica", image: "/img/kolegica.png", hr: "kolegica", en: "colleague (f)", pos: "noun", gender: "f", icon: "👩‍💼", exampleHr: "Učim s kolegicom.", exampleEn: "I study with a colleague." },
    { id: "a2u12.sef", image: "/img/sef.png", hr: "šef", en: "boss (m)", pos: "noun", gender: "m", icon: "🧑‍💼", exampleHr: "Imamo sastanak sa šefom.", exampleEn: "We have a meeting with the boss." },
    { id: "a2u12.sefica", image: "/img/sefica.png", hr: "šefica", en: "boss (f)", pos: "noun", gender: "f", icon: "👩‍💼", exampleHr: "Ana razgovara sa šeficom.", exampleEn: "Ana is talking with the boss." },
    { id: "a2u12.sastanak", image: "/img/sastanak.png", hr: "sastanak", en: "meeting", pos: "noun", gender: "m", icon: "📅", exampleHr: "Sastanak je u devet sati.", exampleEn: "The meeting is at nine." },
    { id: "a2u12.tim", image: "/img/tim.png", hr: "tim", en: "team", pos: "noun", gender: "m", icon: "🧑‍🤝‍🧑", exampleHr: "Naš tim radi zajedno.", exampleEn: "Our team works together." },
    { id: "a2u12.zajedno", image: "/img/zajedno.png", hr: "zajedno", en: "together", pos: "adv", icon: "🤝", exampleHr: "Radimo zajedno.", exampleEn: "We work together." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "S kolegom u uredu",
      subtitle: "Radim s Anom. Kava s mlijekom. One ending — huge unlock.",
      emoji: "🏢",
      items: [
        { emoji: "🟦", label: "Case #6: instrumental", hint: "-om (and soft -em)" },
        { emoji: "🤝", label: "s / sa = with", hint: "company & accompaniment" },
        { emoji: "☕", label: "U4 chunk decoded", hint: "kava s mlijekom, finally" },
        { emoji: "🎤", label: "Who do you work with?", hint: "Radim s…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The -om sound",
      subtitle: "The sixth case has one dominant ending. Hum it: kolegOM, AnOM, mlijekOM.",
      emoji: "🟦",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "old chunks & receivers" },
        { emoji: "📊", label: "The INS table", hint: "-om everywhere, -em after soft" },
        { emoji: "🔀", label: "s or sa?", hint: "sa before s, š, z, ž" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: chunks about to be decoded",
      items: [
        {
          prompt: "Unit 4's café chunk: »Molim kavu s ___.« (milk — as you learned it)",
          options: ["mlijekom", "mlijeko", "mlijeka"],
          correctIndex: 0,
          explanation: "s mlijekom — you've ordered it for eight units. Today you learn WHY it ends in -om.",
        },
        {
          prompt: "Unit 10 DAT: »Dajem ___ poklon.« (mama)",
          options: ["mami", "mamu", "mamom"],
          correctIndex: 0,
          explanation: "Receiver → DAT mami. Keep it in mind — today mama gets an -om form for a different job.",
        },
        {
          prompt: "Listen (U5): where is Marko going?",
          tts: "Marko ide na posao.",
          options: ["to work", "to school", "to the office"],
          correctIndex: 0,
          explanation: "na posao (U5) — today you'll meet the people who work there with you.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the office words",
      vocabIds: [
        "a2u12.ured", "a2u12.tvrtka", "a2u12.kolega", "a2u12.kolegica",
        "a2u12.sef", "a2u12.sefica", "a2u12.sastanak", "a2u12.tim", "a2u12.zajedno",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Case #6: the instrumental — with s/sa = WITH",
      body:
        "The **instrumental** (teal) is the friendliest case: **-om** for almost everything, **-em** after soft consonants (č ć đ š ž j lj nj c): *prijatelj → s prijateljem*.\n\nJob #1: **s/sa + INS = with** (company): *Radim s kolegom. Kava s mlijekom.*\n\nNote the sneaky one: **kolega** is masculine but declines like an -a noun → *s kolegom*. (Job #2 — by-means-of, with NO s — is tomorrow's unlock.)",
      table: {
        caption: "INS singular — one hum: -om",
        headers: ["gender", "ending", "example"],
        colCase: [null, "INS", "INS"],
        rows: [
          ["masculine", "-om", "šef → sa šefom · kolega → s kolegom"],
          ["masc. soft stem", "-em", "prijatelj → s prijateljem"],
          ["feminine", "-om", "Ana → s Anom · kolegica → s kolegicom"],
          ["neuter", "-om / -em", "mlijeko → s mlijekom · more → s morem"],
        ],
      },
      examples: [
        { hr: "Radim s kolegom.", en: "I work with a colleague.", highlight: { text: "kolegom", caseId: "INS" } },
        { hr: "Ana razgovara sa šeficom.", en: "Ana is talking with the boss.", note: "razgovarati = to talk (razgovor + -ati)", highlight: { text: "šeficom", caseId: "INS" } },
        { hr: "Tom pije kavu s mlijekom.", en: "Tom drinks coffee with milk.", note: "the U4 chunk — decoded at last!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "s or sa? The pronunciation switch",
      body:
        "**s** becomes **sa** before words starting with **s, š, z, ž** — purely so you can say it:\n\n- **sa š**eficom · **sa s**estrom · **sa z**adaćom\n- but: **s** Anom, **s** kolegom, **s** mlijekom (no switch!)\n\nOne fixed form to memorize: **sa mnom** = with me (always sa).\n\n*(šećer = sugar — kava **sa š**ećerom is the classic sa-word.)*",
      table: {
        caption: "The s/sa switch",
        headers: ["next word starts with…", "use", "example"],
        rows: [
          ["s, š, z, ž", "sa", "sa šefom, sa sestrom, sa šećerom"],
          ["anything else", "s", "s Anom, s kolegom, s mlijekom"],
          ["(fixed)", "sa mnom", "Radiš sa mnom! = You work with me!"],
        ],
      },
      examples: [
        { hr: "Imamo sastanak sa šefom u devet.", en: "We have a meeting with the boss at nine.", highlight: { text: "šefom", caseId: "INS" } },
        { hr: "Pijem čaj sa šećerom.", en: "I drink tea with sugar." },
        { hr: "Naš tim radi zajedno — ja radim s kolegicom Anom.", en: "Our team works together — I work with my colleague Ana." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: forms & the switch",
      items: [
        {
          prompt: "Radim s ___. (prijatelj — soft stem!)",
          options: ["prijateljem", "prijateljom", "prijatelja"],
          correctIndex: 0,
          explanation: "Soft lj → -em: s prijateljem.",
        },
        {
          prompt: "Razgovaram ___ šeficom.",
          options: ["sa", "s", "su"],
          correctIndex: 0,
          explanation: "š starts the next word → sa šeficom.",
        },
        {
          prompt: "kolega (m!) → »Idem na sastanak s ___.«",
          options: ["kolegom", "kolegom? No — kolegu", "kolegi"],
          correctIndex: 0,
          explanation: "kolega declines like an -a noun: s kolegom.",
        },
        {
          prompt: "Pijem kavu ___ mlijekom.",
          options: ["s", "sa", "se"],
          correctIndex: 0,
          explanation: "m starts the word → plain s: s mlijekom.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "A day at the tvrtka — tap to hear",
      items: [
        { hr: "Tvrtka je velika, a naš ured je malen.", en: "The company is big, and our office is small." },
        { hr: "Sastanak je u devet sati.", en: "The meeting is at nine o'clock." },
        { hr: "Naš tim radi zajedno svaki dan.", en: "Our team works together every day." },
        { hr: "Poslije posla pijem kavu s kolegicom.", en: "After work I drink coffee with a colleague.", note: "poslije + GEN — the U11 label chunk, generalized" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Radim s ___. (kolega)",
      blanks: [["kolegom"]],
      translation: "I work with a colleague.",
      wordBank: ["kolegom", "kolegu", "kolegi"],
      explanation: "s + INS: kolega → kolegom (the m! -a noun).",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ana pije kavu ___ mlijekom.",
      blanks: [["s"]],
      translation: "Ana drinks coffee with milk.",
      wordBank: ["s", "sa", "iz"],
      explanation: "Plain s before m: s mlijekom.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Razgovaram ___ ___. (šefica)",
      blanks: [["sa"], ["šeficom", "seficom"]],
      translation: "I'm talking with the boss.",
      explanation: "sa before š + INS: sa šeficom.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Together, out loud",
      subtitle: "Build it, type it, hear it — then say who you work with.",
      emoji: "🤝",
      items: [
        { emoji: "🔀", label: "Build the office line", hint: "s + kolegicom + u uredu" },
        { emoji: "⌨️", label: "Type two withs", hint: "colleague & sugar" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Radim s…", hint: "your partner-in-work" },
      ],
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Radim", "s", "kolegicom", "u", "uredu"],
      answers: ["Radim s kolegicom u uredu.", "Radim s kolegicom u uredu"],
      en: "I work with a colleague at the office.",
      explanation: "s + INS (kolegicom) + u + LOC (uredu).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I work with a colleague (m).”",
      answers: ["Radim s kolegom.", "Radim s kolegom"],
      hint: "kolega is an -a noun",
      explanation: "Radim s kolegom.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “coffee with sugar” (šećer = sugar — watch the s/sa switch!)",
      answers: ["kava sa šećerom", "Kava sa šećerom", "kava sa šećerom.", "Kava sa šećerom."],
      hint: "š triggers sa",
      explanation: "kava sa šećerom — sa before š, INS -om.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Radim s kolegom.",
      explanation: "Radim s kolegom — I work with a colleague.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Pijem kavu s mlijekom.",
      explanation: "Pijem kavu s mlijekom — I drink coffee with milk.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: dative vs instrumental — same people, different jobs",
      items: [
        {
          prompt: "Pick the pair that's BOTH correct: (give TO · work WITH)",
          options: [
            "Dajem kolegi izvještaj? No — Dajem kolegi ključ · Radim s kolegom",
            "Dajem kolegom ključ · Radim s kolegi",
            "Dajem kolegu ključ · Radim s kolegu",
          ],
          correctIndex: 0,
          explanation: "Receiver → DAT kolegi (U10); companion → s + INS kolegom (today).",
        },
        {
          prompt: "Unit 4, eight units later: why does »kava s mlijekom« end in -om?",
          options: [
            "s + instrumental — accompaniment",
            "it's a genitive of quantity",
            "it's just how the chunk goes",
          ],
          correctIndex: 0,
          explanation: "The chunk was INS all along: s + mlijekom.",
        },
        {
          prompt: "Listen (U1's prijatelj, today's case): who is she with?",
          tts: "Ana je u kinu s prijateljem.",
          options: ["a friend", "the boss", "a colleague"],
          correctIndex: 0,
          explanation: "s prijateljem (soft stem -em) = with a friend.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Radim s prijateljem.",
      targetEn: "say who you work (or study) with — I work with a friend. (or: s kolegom / s kolegicom…)",
      phonetic: "RA-deem s pree-YA-teh-lyem",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Case #6 unlocked: the instrumental** — hum the -om: *kolegOM, AnOM, mlijekOM* (soft stems take **-em**: *prijateljem*).\n\n**Job #1: s/sa + INS = with** — *Radim s kolegom. Kava s mlijekom* (decoded after 8 units!). **sa** only before s/š/z/ž (*sa šeficom, sa šećerom*) + fixed *sa mnom*.\n\n**The sneak:** kolega is masculine but declines like -a → *s kolegom*.\n\nWords tonight: **ured, tvrtka, kolega, kolegica, šef, šefica, sastanak, tim, zajedno**.\n\nNext lesson: the ban lifts — *Idem vlakom!* (and why there's NO s).",
      vocabIds: [
        "a2u12.ured", "a2u12.tvrtka", "a2u12.kolega", "a2u12.kolegica",
        "a2u12.sef", "a2u12.sefica", "a2u12.sastanak", "a2u12.tim", "a2u12.zajedno",
      ],
    },
  ],
  srsCloze: [
    { front: "Radim s ___. (kolega)", answers: ["kolegom"], back: "Radim s kolegom. (INS -om; kolega = m -a noun)", tts: "Radim s kolegom." },
    { front: "Radim s ___. (prijatelj — soft!)", answers: ["prijateljem"], back: "s prijateljem (soft stem → -em)", tts: "Radim s prijateljem." },
    { front: "Razgovaram ___ šeficom. (s or sa?)", answers: ["sa"], back: "sa šeficom (sa before s/š/z/ž)", tts: "Razgovaram sa šeficom." },
    { front: "kava ___ mlijekom (s or sa?)", answers: ["s"], back: "s mlijekom (plain s before m)", tts: "kava s mlijekom" },
    { front: "with me = sa ___ (fixed form)", answers: ["mnom"], back: "sa mnom — always sa.", tts: "Radiš sa mnom!" },
    { front: "meeting = ___ (m; »___ je u devet«)", answers: ["sastanak"], back: "sastanak = meeting (GEN sastanka).", tts: "Sastanak je u devet sati." },
    { front: "together = ___", answers: ["zajedno"], back: "zajedno = together.", tts: "Radimo zajedno." },
  ],
  notes: {
    inOneSentence: {
      en: "The instrumental singular ends in -om (soft stems -em), and with s/sa it means WITH someone or something — kava s mlijekom, finally decoded.",
      exampleHr: "Radim s kolegom. · Ana razgovara sa šeficom. · Tom pije kavu s mlijekom.",
    },
    deepDive: [
      {
        title: "Six cases down, one to go",
        body:
          "The case table now has six live columns — only the vocative (U14) remains. INS is the friendliest yet: one hum, **-om**, with **-em** after the soft set (č ć đ š ž j lj nj c): *mužem, prijateljem, morem*.\n\nWatch the masculine -a nouns (kolega, tata): they take the FEMININE-looking path all the way: *s kolegom, s tatom* — but any adjective stays masculine (*s dobrim kolegom* — adjective INS arrives with more adjective work later; recognize it for now).",
        table: {
          caption: "INS singular, complete",
          headers: ["type", "NOM", "INS"],
          colCase: [null, "NOM", "INS"],
          rows: [
            ["masc hard", "šef, vlak", "šefom, vlakom"],
            ["masc soft", "prijatelj, muž", "prijateljem, mužem"],
            ["masc -a", "kolega, tata", "kolegom, tatom"],
            ["feminine", "Ana, kolegica", "Anom, kolegicom"],
            ["fem -i type", "noć", "noći / noću"],
            ["neuter", "mlijeko, more", "mlijekom, morem"],
          ],
        },
      },
      {
        title: "s vs sa — a pronunciation rule, not grammar",
        body:
          "Croatian refuses the tongue-twister *s sestrom*. Before **s, š, z, ž** the preposition grows a vowel: **sa sestrom, sa šefom, sa zadaćom, sa ženom**. Everywhere else it stays lean: *s Anom, s kolegom*.\n\nOne memorized exception: **sa mnom** (with me) — always sa, because *s mnom* is unpronounceable.\n\nDon't over-sa: ~~sa Anom~~ is the #1 slip. If the next word doesn't start with s/š/z/ž, plain s.",
      },
      {
        title: "DAT -i vs INS -om — the feminine fork",
        body:
          "The same office people now have two case lives:\n\n- *Dajem **kolegici** izvještaj* — receiver, DAT (-i)\n- *Radim **s kolegicom*** — companion, INS (-om)\n\nMasculines fork too: *kolegi* (DAT) vs *s kolegom* (INS). Drill the pair aloud — it's the exact contrast the unit test loves.",
        table: {
          caption: "One person, two jobs",
          headers: ["job", "case", "example"],
          rows: [
            ["receiver (give/show/help)", "DAT", "Dajem kolegici ključ."],
            ["companion (with)", "INS", "Radim s kolegicom."],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Radim s kolega.",
        right: "Radim s kolegom.",
        why: "s demands the instrumental: kolega → kolegom.",
      },
      {
        wrong: "Idem u kino sa Anom.",
        right: "Idem u kino s Anom.",
        why: "sa only before s/š/z/ž — A is not in the club.",
      },
      {
        wrong: "Radim s prijateljom.",
        right: "Radim s prijateljem.",
        why: "Soft stems (lj!) take -em, not -om.",
      },
      {
        wrong: "Pijem kavu s mlijekoj. / s mlijeka.",
        right: "Pijem kavu s mlijekom.",
        why: "s + INSTRUMENTAL: mlijeko → mlijekom (not DAT/GEN).",
      },
    ],
    memoryHooks: [
      "Hum the case: kolegOM, AnOM, mlijekOM — INS is the -om hum.",
      "sa before the hissers: s, š, z, ž — the snake letters need a vowel.",
      "sa mnom — the one fixed sa, because s-mnom won't leave your mouth.",
      "kolega wears an -a but is one of the guys: s kolegom, dobar kolega.",
    ],
    connects: [
      { label: "kava s mlijekom — the U4 chunk, decoded", lessonId: "a1u4l5" },
      { label: "DAT receivers — the contrast case (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "Next: idem vlakom — bare INS (Unit 12 L2)", lessonId: "a2u12l2" },
    ],
    selfCheck: [
      { q: "“I work with a colleague (m)” = ?", a: "Radim s kolegom." },
      { q: "When does s become sa?", a: "Before s, š, z, ž (sa šefom, sa sestrom) — plus fixed sa mnom." },
      { q: "“with a friend” — mind the stem?", a: "s prijateljem (soft lj → -em)." },
      { q: "kolegici vs s kolegicom?", a: "kolegici = DAT receiver; s kolegicom = INS companion." },
      { q: "Decode »kava s mlijekom«.", a: "s + instrumental (mlijekom) = with milk — accompaniment." },
    ],
  },
};
