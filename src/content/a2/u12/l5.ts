import type { Lesson } from "@/types/content";

/**
 * A2 U12 L5 — Razgovor za posao (the job interview; unit review)
 * Spec: curriculum/A2/unit-12.md.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new grammar — the interview assembles U1/U2 intro, U8
 * perfekt, U11 modals, U9 futur, U12 INS, all in Vi-register. Glossed chunks
 * per the spec correction: godina (dvije godine), početi (počinjem's
 * dictionary form). The "guided chain" is realized as fill+type+speak beats.
 */
export const a2u12l5: Lesson = {
  id: "a2u12l5",
  unitId: "a2u12",
  title: "Razgovor za posao",
  titleEn: "The job interview — integration & unit review",
  grammarTags: ["job-interview", "vi-register", "instrumental-singular"],
  estMinutes: 20,
  vocab: [
    { id: "a2u12.zivotopis", image: "/img/zivotopis.png", hr: "životopis", en: "CV / résumé", pos: "noun", gender: "m", icon: "📄", exampleHr: "Moj životopis je nov i dobar.", exampleEn: "My CV is new and good." },
    { id: "a2u12.razgovor-za-posao", image: "/img/razgovorzaposao.png", hr: "razgovor za posao", en: "job interview (chunk)", pos: "phrase", icon: "🗣️", exampleHr: "Sutra imam razgovor za posao.", exampleEn: "Tomorrow I have a job interview.", tags: ["chunk"] },
    { id: "a2u12.iskustvo", image: "/img/iskustvo.png", hr: "iskustvo", en: "experience", pos: "noun", gender: "n", icon: "🎖️", exampleHr: "Imam iskustvo.", exampleEn: "I have experience." },
    { id: "a2u12.prilika", image: "/img/prilika.png", hr: "prilika", en: "opportunity / chance", pos: "noun", gender: "f", icon: "🚪", exampleHr: "Ovo je velika prilika.", exampleEn: "This is a big opportunity." },
    { id: "a2u12.zaposliti-se", image: "/img/zaposlitise.png", hr: "zaposliti se", en: "to get hired (zaposlim se)", pos: "verb", icon: "🤝", exampleHr: "Tom se želi zaposliti u Zagrebu.", exampleEn: "Tom wants to get hired in Zagreb." },
    { id: "a2u12.javiti-se", image: "/img/javitise.png", hr: "javiti se", en: "to get in touch (chunk: Javit ću se!)", pos: "phrase", icon: "📞", exampleHr: "Hvala na razgovoru — javit ću se!", exampleEn: "Thanks for the interview — I'll be in touch!", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Razgovor za posao",
      subtitle: "Everything A2 has taught you, in one fifteen-minute conversation.",
      emoji: "💼",
      items: [
        { emoji: "🗺️", label: "The interview map", hint: "greet → intro → experience → close" },
        { emoji: "🎩", label: "Vi-mode ON", hint: "formal register throughout" },
        { emoji: "🧰", label: "Your toolkit", hint: "perfekt + modals + futur + INS" },
        { emoji: "🔁", label: "Unit review", hint: "s/sa · vlakom · kao · studiram" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The script",
      subtitle: "Six beats, all in Vi — hear the whole interview first.",
      emoji: "🎩",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "formal hello & the perfekt" },
        { emoji: "🗺️", label: "The flow map", hint: "beat by beat" },
        { emoji: "🔑", label: "Key frames", hint: "iskustvo, početi, javit ću se" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: formal mode & your past",
      items: [
        {
          prompt: "Unit 1 register: you walk into the interview and say…",
          options: ["Dobar dan!", "Bok!", "Hej!"],
          correctIndex: 0,
          explanation: "Formal setting → Dobar dan (bok is for friends).",
        },
        {
          prompt: "Unit 8 perfekt: »___ sam kao konobar.« (I worked — male)",
          options: ["Radio", "Radim", "Raditi"],
          correctIndex: 0,
          explanation: "Radio sam — your experience lives in the perfekt.",
        },
        {
          prompt: "Listen (U12 L2): how does Tom travel to the interview?",
          tts: "Tom putuje tramvajem na razgovor za posao.",
          options: ["by tram", "by car", "on foot"],
          correctIndex: 0,
          explanation: "tramvajem — bare INS, freshly unlocked.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the interview words",
      vocabIds: [
        "a2u12.zivotopis", "a2u12.razgovor-za-posao", "a2u12.iskustvo",
        "a2u12.prilika", "a2u12.zaposliti-se", "a2u12.javiti-se",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The interview map — Vi-mode ON",
      body:
        "Six beats, every line in the polite **Vi** (the U1 register, now under pressure). Walk the map:",
      diagram: {
        kind: "flow",
        steps: [
          { label: "1 · Greet", emoji: "👋", example: "Dobar dan! Drago mi je." },
          { label: "2 · Who you are", emoji: "🧑", example: "Ja sam Tom. Govorim engleski i hrvatski." },
          { label: "3 · Experience", emoji: "🎖️", example: "Radio sam kao konobar dvije godine." },
          { label: "4 · Why you", emoji: "⭐", example: "Imam iskustvo i želim raditi ovdje." },
          { label: "5 · Practicals", emoji: "📅", example: "Mogu početi u ponedjeljak." },
          { label: "6 · Close", emoji: "🤝", example: "Hvala! Javit ću se!" },
        ],
      },
      examples: [
        { hr: "Sutra imam razgovor za posao.", en: "Tomorrow I have a job interview." },
        { hr: "Radio sam kao konobar dvije godine.", en: "I worked as a waiter for two years.", note: "godina = year; dvije godine — the 2-4 rule from U7" },
        { hr: "Mogu početi u ponedjeljak.", en: "I can start on Monday.", note: "početi — počinjem's dictionary form" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The frames that get you hired",
      body:
        "Four frames carry the interview — all built from old parts:\n\n- **Experience:** *Imam iskustvo. Radio sam kao [posao] [koliko dugo].*\n- **Skills:** *Govorim engleski i hrvatski. Radim računalom.*\n- **Availability:** *Mogu početi u ponedjeljak.* (U11 modal + chunk)\n- **The close:** *Ovo je velika prilika. Hvala na razgovoru — **javit ću se**!*\n\nGoal of the day: *Tom se želi **zaposliti** u Zagrebu.* — and by the story, he will.",
      table: {
        caption: "Interviewer → you",
        headers: ["they ask (Vi)", "you answer"],
        rows: [
          ["Imate li iskustvo?", "Imam. Radio sam kao konobar dvije godine."],
          ["Što govorite?", "Govorim engleski i hrvatski."],
          ["Kada možete početi?", "Mogu početi u ponedjeljak."],
          ["Imate li pitanja?", "Kolika je plaća? 😇"],
        ],
      },
      examples: [
        { hr: "Imate li iskustvo? — Imam!", en: "Do you have experience? — I do!" },
        { hr: "Moj životopis je nov, ali dobar.", en: "My CV is new, but good." },
        { hr: "Hvala na razgovoru — javit ću se!", en: "Thanks for the interview — I'll be in touch!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: interview pragmatics",
      items: [
        {
          prompt: "»Imate li iskustvo?« — the best answer:",
          options: [
            "Imam. Radio sam kao konobar dvije godine.",
            "Ne znam.",
            "Bok! Kako si?",
          ],
          correctIndex: 0,
          explanation: "Confirm + perfekt evidence: Imam. Radio sam kao…",
        },
        {
          prompt: "»Kada možete početi?« — you answer:",
          options: ["Mogu početi u ponedjeljak.", "Ne mogu ništa.", "Počinjem jučer."],
          correctIndex: 0,
          explanation: "Modal + infinitive + day: Mogu početi u ponedjeljak.",
        },
        {
          prompt: "The interview ends. Your closing line:",
          options: ["Hvala! Javit ću se!", "Neću!", "Gdje je recepcija?"],
          correctIndex: 0,
          explanation: "Hvala + the chunk: Javit ću se! (I'll be in touch.)",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Šefica: »Imate li ___?« — Tom: »Imam! Radio sam kao konobar.«",
      blanks: [["iskustvo"]],
      translation: "Boss: \"Do you have experience?\" — Tom: \"I do! I worked as a waiter.\"",
      wordBank: ["iskustvo", "iskustva", "prilika"],
      explanation: "imati + ACC: iskustvo (n, ACC = NOM).",
    },
    {
      id: "s09",
      type: "fill",
      text: "Tom: »___ početi u ponedjeljak.« (I can)",
      blanks: [["Mogu", "mogu"]],
      translation: "Tom: \"I can start on Monday.\"",
      wordBank: ["Mogu", "Moram", "Smijem"],
      explanation: "Availability → mogu + infinitive.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Tom: »Hvala na razgovoru — ___ ću se!«",
      blanks: [["javit"]],
      translation: "Tom: \"Thanks for the interview — I'll be in touch!\"",
      wordBank: ["javit", "javiti", "zaposlit"],
      explanation: "Verb-first future cuts -ti: javit ću se.",
    },
    {
      id: "s11",
      type: "section",
      title: "Part 2 · Your interview",
      subtitle: "Build your own lines — then say them like you mean them.",
      emoji: "🧑",
      items: [
        { emoji: "🔀", label: "Build the answers", hint: "experience & start date" },
        { emoji: "⌨️", label: "Type your lines", hint: "worked as… · can start…" },
        { emoji: "🎧", label: "Dictation ×2", hint: "the interviewer speaks" },
        { emoji: "🎤", label: "Say it ×2", hint: "intro + experience, in Vi" },
      ],
    },
    {
      id: "s12",
      type: "reorder",
      words: ["Radio", "sam", "kao", "konobar"],
      answers: ["Radio sam kao konobar.", "Radio sam kao konobar"],
      en: "I worked as a waiter.",
      explanation: "Perfekt (U8) + kao + NOM (L3).",
    },
    {
      id: "s13",
      type: "reorder",
      review: true,
      words: ["Mogu", "početi", "u", "ponedjeljak"],
      answers: ["Mogu početi u ponedjeljak.", "Mogu početi u ponedjeljak"],
      en: "I can start on Monday.",
      explanation: "Modal + infinitive + u + day (U6).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Your experience line: “I worked as a teacher.” (male speaker; female: Radila sam…)",
      answers: ["Radio sam kao učitelj.", "Radio sam kao učitelj", "Radila sam kao učiteljica.", "Radila sam kao učiteljica"],
      hint: "perfekt + kao + NOM",
      explanation: "Radio sam kao učitelj. / Radila sam kao učiteljica.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “Tomorrow I have a job interview.”",
      answers: ["Sutra imam razgovor za posao.", "Sutra imam razgovor za posao"],
      explanation: "Sutra imam razgovor za posao.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Imate li iskustvo?",
      explanation: "Imate li iskustvo? — do you have experience? (Vi-form)",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Javit ću se!",
      explanation: "Javit ću se! — I'll be in touch!",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Dobar dan! Ja sam Tom. Drago mi je.",
      targetEn: "your interview opener, in Vi-register — Good day! I'm Tom. Pleased to meet you. (use your own name!)",
      phonetic: "DO-bar dan! ya sam…",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Radio sam kao konobar dvije godine.",
      targetEn: "your experience line — I worked as a waiter for two years. (adapt to your real experience)",
      phonetic: "RA-dee-o sam kao ko-NO-bar",
    },
    {
      id: "s20",
      type: "section",
      title: "Part 3 · The whole unit, mixed",
      subtitle: "s/sa, bare INS, kao and the campus — everything from L1–L4.",
      emoji: "🔁",
      items: [
        { emoji: "🤝", label: "s / sa + INS", hint: "L1" },
        { emoji: "🚆", label: "bare INS", hint: "L2 — the trap" },
        { emoji: "🟢", label: "kao + NOM", hint: "L3" },
        { emoji: "🎓", label: "studirati", hint: "L4" },
      ],
    },
    {
      id: "s21",
      type: "quiz-set",
      title: "Unit review I: the instrumental machine",
      items: [
        {
          prompt: "»Razgovaram ___ šeficom.« (L1)",
          options: ["sa", "s", "—"],
          correctIndex: 0,
          explanation: "sa before š: sa šeficom.",
        },
        {
          prompt: "»Idem na posao ___ autobusom.« (L2 — THE trap)",
          options: ["— (nothing!)", "s", "sa"],
          correctIndex: 0,
          explanation: "Means → bare INS: autobusom, no s.",
        },
        {
          prompt: "»Radim ___ konobar.« (L3)",
          options: ["kao", "s", "za"],
          correctIndex: 0,
          explanation: "raditi kao + NOM.",
        },
        {
          prompt: "»Ana ___ medicinu.« (L4)",
          options: ["studira", "uči na", "radi"],
          correctIndex: 0,
          explanation: "The major → studirati + ACC.",
        },
      ],
    },
    {
      id: "s22",
      type: "fill",
      text: "Putujem na posao ___. (autobus)",
      blanks: [["autobusom"]],
      translation: "I travel to work by bus.",
      explanation: "Bare INS: autobusom (L2).",
    },
    {
      id: "s23",
      type: "match",
      prompt: "Unit vocab sweep — match Croatian to English",
      pairs: [
        { a: "životopis", b: "CV" },
        { a: "iskustvo", b: "experience" },
        { a: "plaća", b: "salary" },
        { a: "sastanak", b: "meeting" },
        { a: "knjižnica", b: "library" },
      ],
    },
    {
      id: "s24",
      type: "reorder",
      words: ["Idem", "s", "Markom", "autom"],
      answers: ["Idem s Markom autom.", "Idem s Markom autom"],
      en: "I'm going with Marko by car.",
      explanation: "Both INS jobs in one line: s Markom (with) + autom (by).",
    },
    {
      id: "s25",
      type: "listen-type",
      tts: "Radim s kolegom u uredu.",
      explanation: "Radim s kolegom u uredu — I work with a colleague at the office (L1).",
    },
    {
      id: "s26",
      type: "type",
      prompt: "Write it in Croatian: “I travel by tram.” (mind the soft stem!)",
      answers: ["Putujem tramvajem.", "Putujem tramvajem"],
      hint: "bare INS, -em",
      explanation: "Putujem tramvajem.",
    },
    {
      id: "s27",
      type: "recap",
      summary:
        "**Unit 12 complete — you can work in Croatian!**\n\n**One card, the whole unit:**\n- **INS -om/-em** · *s kolegom* (with) · **bare INS** *vlakom, računalom* (by/with a thing — NO s!)\n- **s → sa** before s/š/z/ž (*sa šeficom*) + fixed *sa mnom*\n- **kao + NOM**: *Radim kao konobar* · **studirati + ACC**: *Studiram ekonomiju*\n- **The interview:** *Imam iskustvo. Radio sam kao… Mogu početi u ponedjeljak. Javit ću se!*\n\nWords tonight: **životopis, razgovor za posao, iskustvo, prilika, zaposliti se, javiti se**.\n\nNext: the story — Tom's first Croatian job. Sretno!",
      vocabIds: [
        "a2u12.zivotopis", "a2u12.razgovor-za-posao", "a2u12.iskustvo",
        "a2u12.prilika", "a2u12.zaposliti-se", "a2u12.javiti-se",
      ],
    },
  ],
  srsCloze: [
    { front: "job interview = razgovor ___ posao", answers: ["za"], back: "razgovor za posao (the chunk)", tts: "Sutra imam razgovor za posao." },
    { front: "»I'll be in touch!« = »___ ću se!«", answers: ["Javit", "javit"], back: "Javit ću se! (verb-first future)", tts: "Javit ću se!" },
    { front: "experience = ___ (n; »Imam ___«)", answers: ["iskustvo"], back: "iskustvo = experience.", tts: "Imam iskustvo." },
    { front: "CV = ___", answers: ["životopis", "zivotopis"], back: "životopis = CV/résumé.", tts: "životopis" },
    { front: "»I can start on Monday« = Mogu ___ u ponedjeljak.", answers: ["početi", "poceti"], back: "Mogu početi u ponedjeljak.", tts: "Mogu početi u ponedjeljak." },
    { front: "L2 model: »Putujem ___.« (tram!)", answers: ["tramvajem"], back: "Putujem tramvajem. (bare INS, soft -em)", tts: "Putujem tramvajem." },
    { front: "L1 model: »Radim s ___.« (kolega)", answers: ["kolegom"], back: "Radim s kolegom.", tts: "Radim s kolegom." },
    { front: "opportunity = ___ (f; »velika ___«)", answers: ["prilika"], back: "prilika = opportunity.", tts: "Ovo je velika prilika." },
  ],
  notes: {
    inOneSentence: {
      en: "The job interview assembles the whole A2 toolkit in Vi-register: perfekt experience, modal availability, future-I promises, and both instrumental jobs.",
      exampleHr: "Radio sam kao konobar dvije godine. · Mogu početi u ponedjeljak. · Javit ću se!",
    },
    deepDive: [
      {
        title: "The full script — both roles",
        body:
          "Print this one. Interviewer lines (Vi) on the left, your answers on the right — every construction is machinery you own:",
        table: {
          caption: "The interview, complete",
          headers: ["šefica (Vi)", "you"],
          rows: [
            ["Dobar dan! Izvolite.", "Dobar dan! Ja sam … . Drago mi je."],
            ["Imate li iskustvo?", "Imam. Radio/Radila sam kao … dvije godine."],
            ["Što govorite?", "Govorim engleski i hrvatski."],
            ["Kako putujete na posao?", "Tramvajem. / Autom. / Pješice."],
            ["Kada možete početi?", "Mogu početi u ponedjeljak."],
            ["Imate li pitanja?", "Kolika je plaća?"],
            ["Hvala Vam!", "Hvala na razgovoru — javit ću se!"],
          ],
        },
      },
      {
        title: "Vi-mode — the register checklist",
        body:
          "Formal mode means: **Vi verb forms** (imate, možete, govorite), **Dobar dan** not bok, and no ti-chunks slipping in. Danger spots:\n\n- ~~Imaš li iskustvo?~~ → *Imate li…* (their side, but you'll hear it)\n- your answers stay in ja-forms — it's YOUR experience: *Imam, mogu, radio sam*\n- *Hvala Vam* (DAT Vi chunk) — politeness's own dative\n\nFull register treatment (ti/Vi mastery, formal letters) is a B2 topic; this script is your working kit until then.",
      },
      {
        title: "Everything in one paragraph",
        body:
          "Look what one interview answer carries: *Radio sam (U8 perfekt) kao konobar (L3 kao+NOM) dvije godine (U7 paucal). Sada želim raditi (U4 infinitive) u vašoj tvrtki. Mogu početi (U11 modal) u ponedjeljak (U6) i putovat ću (U9 futur) tramvajem (L2 bare INS).* — six units of grammar, zero new rules. That's what A2 was for.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Radio sam kao konobarom.",
        right: "Radio sam kao konobar.",
        why: "The L3 rule under pressure: kao + NOM, even mid-interview.",
      },
      {
        wrong: "Imaš li iskustvo? (to the interviewer)",
        right: "Imate li iskustvo? — and answer their Vi with your ja",
        why: "Interviews run in Vi-register; ti-forms are for friends.",
      },
      {
        wrong: "Javiti ću se!",
        right: "Javit ću se!",
        why: "Verb-first future cuts the -ti (U9), even in chunks.",
      },
      {
        wrong: "Putujem na posao s tramvajem.",
        right: "Putujem na posao tramvajem.",
        why: "The L2 trap, forever: means take bare INS.",
      },
    ],
    memoryHooks: [
      "The interview is a grammar victory lap: perfekt → kao → modal → futur → INS.",
      "Javit ću se — say it leaving every shop, café and interview; it always fits.",
      "iskustvo = is-KUST-vo: experience is what you've kušao (tasted).",
      "Vi-mode ON: imate, možete, govorite — flip the switch at the door.",
    ],
    connects: [
      { label: "Formal greetings & ti/Vi (Unit 1 L5)", lessonId: "a1u1l5" },
      { label: "Perfekt — your experience tense (Unit 8 L2)", lessonId: "a1u8l2" },
      { label: "Both INS jobs (Unit 12 L1–L2)", lessonId: "a2u12l2" },
      { label: "U16 will build your whole biography on this", lessonId: "a2u12l4" },
    ],
    selfCheck: [
      { q: "Your opener at an interview?", a: "Dobar dan! Ja sam [ime]. Drago mi je." },
      { q: "“I worked as a waiter for two years” = ?", a: "Radio sam kao konobar dvije godine. (f: Radila sam…)" },
      { q: "“I can start on Monday” = ?", a: "Mogu početi u ponedjeljak." },
      { q: "The closing chunk?", a: "Hvala na razgovoru — javit ću se!" },
      { q: "One model per lesson of the unit?", a: "Radim s kolegom (L1) · Putujem vlakom (L2) · Radim kao konobar (L3) · Studiram ekonomiju (L4) · Javit ću se! (L5)." },
    ],
  },
};
