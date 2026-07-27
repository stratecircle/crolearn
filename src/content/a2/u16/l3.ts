import type { Lesson } from "@/types/content";

/**
 * A2 U16 L3 — Radit ću / napravit ću (aspect in the future)
 * Spec: curriculum/A2/unit-16.md · grammar-reference §11, §9.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * plan/planirati recycled (U9). san re-presented with its DREAM meaning
 * (U11 taught it as sleep — recept-style two-meanings beat, per the
 * 2026-07-27 spec correction).
 */
export const a2u16l3: Lesson = {
  id: "a2u16l3",
  unitId: "a2u16",
  title: "Radit ću / napravit ću",
  titleEn: "I'll be working / I'll get it done — aspect in the future",
  grammarTags: ["aspect-future", "future-1", "plans"],
  estMinutes: 19,
  vocab: [
    { id: "a2u16.odluciti", hr: "odlučiti", en: "to decide (pf; odlučim)", pos: "verb", icon: "⚖️", exampleHr: "Odlučio sam: idem u Hrvatsku!", exampleEn: "I've decided: I'm going to Croatia!" },
    { id: "a2u16.buducnost", hr: "budućnost", en: "future (f — an -i noun)", pos: "noun", gender: "f", icon: "🔮", exampleHr: "Moja budućnost je u Hrvatskoj.", exampleEn: "My future is in Croatia." },
    { id: "a2u16.cilj", hr: "cilj", en: "goal", pos: "noun", gender: "m", icon: "🎯", exampleHr: "Moj cilj je naučiti hrvatski.", exampleEn: "My goal is to learn Croatian." },
    { id: "a2u16.san2", hr: "san", en: "dream (also = sleep, U11!)", pos: "noun", gender: "m", icon: "💭", exampleHr: "Imam san: živjeti u Hrvatskoj.", exampleEn: "I have a dream: to live in Croatia." },
    { id: "a2u16.nadatise", hr: "nadati se", en: "to hope (nadam se)", pos: "verb", icon: "🤞", exampleHr: "Nadam se!", exampleEn: "I hope so!" },
    { id: "a2u16.uspjeti", hr: "uspjeti", en: "to succeed (pf; uspijem, uspio/uspjela)", pos: "verb", icon: "🏆", exampleHr: "Uspjet ću!", exampleEn: "I will succeed!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Radit ću / napravit ću",
      subtitle: "Your plans deserve the right aspect: will you be working, or will you get it DONE?",
      emoji: "🎯",
      items: [
        { emoji: "〰️", label: "Radit ću cijelo ljeto", hint: "will be doing" },
        { emoji: "🚩", label: "Napravit ću plan", hint: "will get it done" },
        { emoji: "📋", label: "The plans board", hint: "cilj, san, budućnost" },
        { emoji: "🎤", label: "One real plan", hint: "say yours aloud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The future, both ways",
      subtitle: "Same magnets as yesterday — now pointing forward.",
      emoji: "🔮",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "future I spelling & do + GEN" },
        { emoji: "📈", label: "Future timeline", hint: "wavy horizon vs flag" },
        { emoji: "📋", label: "Plans words", hint: "6 new" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the future you built in U9",
      items: [
        {
          prompt: "U9 spelling: (pisati) »___ ću ti sutra.«",
          options: ["Pisat", "Pisati", "Piše"],
          correctIndex: 0,
          explanation: "pisat ću — the -ti drops its i before ću.",
        },
        {
          prompt: "U9 deadline: »do ___« (by Friday)",
          options: ["petka", "petak", "petku"],
          correctIndex: 0,
          explanation: "do + GEN: do petka. Deadlines love perfectives — today's point.",
        },
        {
          prompt: "Listen (U15): what's the promise?",
          tts: "Javit ću vam se iz Splita.",
          options: [
            "I'll get in touch with you from Split",
            "I'll answer them in Split",
            "I moved to Split",
          ],
          correctIndex: 0,
          explanation: "ću vam se — the future cluster (U15's train, U9's ću).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The plans board words",
      vocabIds: [
        "a2u16.odluciti", "a2u16.buducnost", "a2u16.cilj",
        "a2u16.san2", "a2u16.nadatise", "a2u16.uspjeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Wavy horizon or planted flag",
      body:
        "Future I (ću/ćeš + infinitive, U9) accepts BOTH aspects — and the choice is your whole message:\n\n- **〰️ imperfective future** = will be doing / regularly: *Radit ću cijelo ljeto. Učit ću svaki dan.*\n- **🚩 perfective future** = will get it DONE: *Napravit ću plan. Knjigu ću pročitati do subote.*\n\nSpelling holds from U9: *pisat ću, pročitat ću* (-ti drops i) but *doći ću* (-ći keeps everything).",
      diagram: {
        kind: "contrast",
        left: {
          title: "〰️ will be doing",
          emoji: "〰️",
          lines: [
            { hr: "Radit ću cijelo ljeto.", en: "I'll be working all summer." },
            { hr: "Učit ću hrvatski svaki dan.", en: "I'll study Croatian every day." },
          ],
        },
        right: {
          title: "🚩 will get it done",
          emoji: "🚩",
          lines: [
            { hr: "Napravit ću plan do petka.", en: "I'll have a plan made by Friday." },
            { hr: "Naučit ću hrvatski!", en: "I WILL learn Croatian!" },
          ],
        },
      },
      examples: [
        { hr: "Radit ću cijelo ljeto.", en: "I'll be working all summer." },
        { hr: "Napravit ću plan do petka.", en: "I'll have a plan made by Friday." },
        { hr: "Knjigu ću pročitati do subote.", en: "I'll finish the book by Saturday.", note: "fronted object — ću still second position!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The plans board — cilj, san, budućnost",
      body:
        "Croatian plan-talk runs on three sticky notes:\n\n🎯 **cilj** — *Moj cilj je naučiti hrvatski.* (goal + perfective infinitive!)\n💭 **san** — *Moj san je živjeti u Hrvatskoj.* — yes, the U11 sleep word: **san = sleep AND dream**, like English!\n📋 **plan** (U9) — *Odlučio sam. Imam plan. Uspjet ću!*\n\n*nadati se* seals every plan: *Nadam se!* (I hope so!)",
      diagram: {
        kind: "flow",
        steps: [
          { label: "cilj 🎯", emoji: "🎯", example: "Moj cilj je naučiti hrvatski." },
          { label: "san 💭", emoji: "💭", example: "Moj san je živjeti u Hrvatskoj." },
          { label: "plan 📋", emoji: "📋", example: "Napravit ću plan do petka." },
          { label: "Uspjet ću! 🏆", emoji: "🏆", example: "…i uspjet ću!" },
        ],
      },
      examples: [
        { hr: "Odlučio sam: idem u Hrvatsku!", en: "I've decided: I'm going to Croatia!" },
        { hr: "Moj san je živjeti u Hrvatskoj.", en: "My dream is to live in Croatia.", note: "san — sleep (U11) AND dream, one word" },
        { hr: "Nadam se — i uspjet ću!", en: "I hope so — and I will succeed!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the future",
      items: [
        {
          prompt: "»___ cijelo ljeto.« (I'll be working — all summer long)",
          options: ["Radit ću", "Napravit ću", "Radim"],
          correctIndex: 0,
          explanation: "Duration ahead → imperfective: radit ću.",
        },
        {
          prompt: "»___ plan do petka.« (it WILL exist by Friday)",
          options: ["Napravit ću", "Radit ću", "Napravim"],
          correctIndex: 0,
          explanation: "Deadline + result → perfective: napravit ću.",
        },
        {
          prompt: "»Učit ću hrvatski svaki dan« vs »Naučit ću hrvatski« — the second one means…",
          options: [
            "I'll master it (get it learned)",
            "I'll study it daily",
            "I'm studying it now",
          ],
          correctIndex: 0,
          explanation: "naučiti = the achieved goal; učiti = the routine.",
        },
        {
          prompt: "Spelling check: doći → »___ ću sutra.«",
          options: ["Doći", "Doć", "Dojt"],
          correctIndex: 0,
          explanation: "-ći verbs keep everything: doći ću (only -ti drops its i).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Plan it right",
      subtitle: "Habits get wavy futures, deadlines get flags.",
      emoji: "📋",
      items: [
        { emoji: "✏️", label: "Three fills", hint: "Učit · Napravit · pročitati" },
        { emoji: "⌨️", label: "Two promises", hint: "both aspects accepted" },
        { emoji: "🔀", label: "Build the deadline", hint: "do petka" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ ću hrvatski svaki dan. (učiti/naučiti?)",
      blanks: [["Učit", "učit", "Ucit"]],
      translation: "I'll study Croatian every day.",
      wordBank: ["Učit", "Naučit", "Učiti"],
      explanation: "svaki dan = routine → imperfective učit ću.",
    },
    {
      id: "s10",
      type: "fill",
      text: "___ ću plan do petka. (raditi/napraviti?)",
      blanks: [["Napravit", "napravit"]],
      translation: "I'll have the plan made by Friday.",
      wordBank: ["Napravit", "Radit", "Napraviti"],
      explanation: "do petka + result → perfective napravit ću.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Knjigu ću ___ do subote. (čitati/pročitati?)",
      blanks: [["pročitati", "procitati"]],
      translation: "I'll finish the book by Saturday.",
      wordBank: ["pročitati", "čitati", "pročitat"],
      explanation: "Deadline → perfective; after ću comes the full infinitive: pročitati.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Promise it: “I'll write to you tomorrow.” (either aspect is fine — feedback explains)",
      answers: ["Pisat ću ti sutra.", "Napisat ću ti sutra.", "Pisat ću ti sutra", "Napisat ću ti sutra"],
      hint: "…ću ti sutra",
      explanation: "Pisat ću ti (I'll write — general promise) / Napisat ću ti (you'll HAVE my reply) — both correct, different flavour.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "»I've decided« (male speaker): »___ sam.«",
      answers: ["Odlučio", "odlučio", "Odlucio"],
      hint: "odlučiti — one clean decision",
      explanation: "Odlučio sam. (f: Odlučila sam.)",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Napravit", "ću", "plan", "do", "petka"],
      answers: ["Napravit ću plan do petka.", "Napravit ću plan do petka"],
      en: "I'll have a plan made by Friday.",
      explanation: "perfective future + do + GEN deadline.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears, voice & your real plan",
      subtitle: "Hear the flags planted, then plant one of your own.",
      emoji: "🎤",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "cijelo ljeto · do petka" },
        { emoji: "🎤", label: "One real plan", hint: "Moj cilj je…" },
        { emoji: "🔗", label: "U9/U15 rails", hint: "spelling & clitics forward" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Radit ću cijelo ljeto.",
      explanation: "Radit ću cijelo ljeto — I'll be working all summer (〰️).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Napravit ću plan do petka.",
      explanation: "Napravit ću plan do petka — I'll get the plan done by Friday (🚩).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Moj cilj je naučiti hrvatski. Učit ću svaki dan!",
      targetEn: "say one real plan — My goal is to learn Croatian. I'll study every day! (goal = perfective, routine = imperfective)",
      phonetic: "moy tseely ye na-OO-chee-tee HR-vat-skee",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: futures with baggage",
      items: [
        {
          prompt: "U9 + U16: »Sutra ću pisati zadaću do kraja.« — better aspect?",
          options: [
            "Sutra ću napisati zadaću. (do kraja = finish it!)",
            "keep pisati — it's tomorrow",
            "Sutra napišem zadaću.",
          ],
          correctIndex: 0,
          explanation: "do kraja (to the end) wants the flag: napisat ću / ću napisati.",
        },
        {
          prompt: "U15 cluster forward: »Javit ću ___ ___ iz Splita.« (to you all + se)",
          options: ["vam se", "se vam", "vas se"],
          correctIndex: 0,
          explanation: "DAT before se: ću vam se.",
        },
        {
          prompt: "Listen (U13 + today): what's the comparison?",
          tts: "Život u Hrvatskoj bit će ljepši.",
          options: [
            "life in Croatia will be more beautiful",
            "life in Croatia was more beautiful",
            "life in Croatia is the most beautiful",
          ],
          correctIndex: 0,
          explanation: "bit će + ljepši — future + U13 comparative.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Future, both ways**: 〰️ *Radit ću cijelo ljeto* (will be doing) vs 🚩 *Napravit ću plan do petka* (will get it done). Same magnets as the past — *svaki dan/cijelo ljeto* → wavy, *do petka/do kraja* → flag.\n\n**Spelling** (U9 refresher): *pisat ću, pročitat ću* — but *doći ću*.\n\n**The plans board**: *cilj 🎯 · san 💭 (sleep AND dream!) · plan 📋 — Odlučio sam. Nadam se. Uspjet ću!*\n\nWords tonight: **odlučiti, budućnost, cilj, san (dream), nadati se, uspjeti**.\n\nNext: a whole life on one timeline.",
      vocabIds: [
        "a2u16.odluciti", "a2u16.buducnost", "a2u16.cilj",
        "a2u16.san2", "a2u16.nadatise", "a2u16.uspjeti",
      ],
    },
  ],
  srsCloze: [
    { front: "___ ću cijelo ljeto. (raditi/napraviti?)", answers: ["Radit", "radit"], back: "Duration → imperfective: radit ću.", tts: "Radit ću cijelo ljeto." },
    { front: "___ ću plan do petka. (raditi/napraviti?)", answers: ["Napravit", "napravit"], back: "Deadline + result → napravit ću.", tts: "Napravit ću plan do petka." },
    { front: "Moj cilj je ___ hrvatski. (learn it fully)", answers: ["naučiti", "nauciti"], back: "Goals take the perfective: naučiti.", tts: "Moj cilj je naučiti hrvatski." },
    { front: "dream (and sleep!) = ___ (m, GEN sna)", answers: ["san"], back: "san — Moj san je živjeti u Hrvatskoj.", tts: "Moj san je živjeti u Hrvatskoj." },
    { front: "I hope so! = ___ se!", answers: ["Nadam", "nadam"], back: "Nadam se!", tts: "Nadam se!" },
    { front: "I will succeed! = ___ ću!", answers: ["Uspjet", "uspjet"], back: "Uspjet ću! (uspjeti — pf)", tts: "Uspjet ću!" },
    { front: "future = ___ (f, -i noun)", answers: ["budućnost", "buducnost"], back: "budućnost (Moja budućnost je u Hrvatskoj.)", tts: "Moja budućnost je u Hrvatskoj." },
  ],
  notes: {
    inOneSentence: {
      en: "Future I takes both aspects — imperfective for will-be-doing (Radit ću cijelo ljeto), perfective for will-get-done (Napravit ću plan do petka) — with the U9 spelling intact.",
      exampleHr: "Radit ću cijelo ljeto. · Napravit ću plan do petka. · Knjigu ću pročitati do subote.",
    },
    deepDive: [
      {
        title: "The same magnets, pointing forward",
        body:
          "Yesterday's context magnets work unchanged in the future:",
        table: {
          caption: "Future magnets",
          headers: ["context", "aspect", "example"],
          rows: [
            ["cijelo ljeto / svaki dan", "〰️ imperfective", "Radit ću cijelo ljeto. Učit ću svaki dan."],
            ["do petka / do kraja / do ljeta", "🚩 perfective", "Napravit ću plan do petka."],
            ["one clean act ahead", "🚩 perfective", "Nazvat ću je. Odlučit ću sutra."],
            ["ongoing state ahead", "〰️ imperfective", "Živjet ću u Zagrebu."],
          ],
        },
      },
      {
        title: "Spelling & placement — two U9/U15 refreshers",
        body:
          "1. **Spelling**: -ti infinitives drop the i before ću (*pisat ću, napravit ću, učit ću*), -ći keep everything (*doći ću, ići ću*). In writing both orders are fine: *Napravit ću plan* / *Ja ću napraviti plan* — but never double the clitic (~~napravit ću ću~~).\n2. **Placement**: ću is an aux clitic — it rides the U15 train: *Javit **ću vam se** iz Splita.* (aux → DAT → se), *Knjigu **ću** pročitati do subote* (fronted object = engine).",
      },
      {
        title: "san — one word, two nights",
        body:
          "U11 taught *san* as sleep (*Treba ti san!*). The same word is a DREAM — both the sleeping kind and the life-goal kind, exactly like English:\n\n*Imam san. Moj san je živjeti u Hrvatskoj.*\n\nGEN sg *sna* (the fleeting a — *bez sna* = sleepless). The plans board trio: **cilj** (measurable), **san** (big), **plan** (written down) — feed them perfective infinitives: *Moj cilj je **naučiti**, **završiti**, **uspjeti**…*",
      },
    ],
    commonMistakes: [
      {
        wrong: "Sutra ću pisati zadaću do kraja.",
        right: "Sutra ću napisati zadaću (do kraja).",
        why: "do kraja promises completion — the flag verb delivers it.",
      },
      {
        wrong: "Napravit ću ću plan.",
        right: "Napravit ću plan. / Ja ću napraviti plan.",
        why: "One ću only — pick a position, never both.",
      },
      {
        wrong: "Naučit ću hrvatski svaki dan.",
        right: "Učit ću hrvatski svaki dan.",
        why: "svaki dan = routine → imperfective (naučiti is the one-time achievement).",
      },
      {
        wrong: "Radit ću plan do petka.",
        right: "Napravit ću plan do petka.",
        why: "raditi = be working on it; the deadline wants it DONE — napraviti.",
      },
    ],
    memoryHooks: [
      "Wavy horizon 〰️ vs planted flag 🚩 — every plan is one or the other.",
      "do + deadline = flag time: do petka, do subote, do ljeta.",
      "cilj-san-plan: measure it, dream it, write it down — then Uspjet ću!",
      "san works nights and days: sleep by night, dream by ambition.",
    ],
    connects: [
      { label: "Future I — the machine (Unit 9 L1)", lessonId: "a2u9l1" },
      { label: "Aspect in the past — the same magnets (Unit 16 L2)", lessonId: "a2u16l2" },
      { label: "Next: a whole life on one timeline (Unit 16 L4)", lessonId: "a2u16l4" },
    ],
    selfCheck: [
      { q: "»I'll be working all summer« vs »I'll make a plan by Friday«?", a: "Radit ću cijelo ljeto. · Napravit ću plan do petka." },
      { q: "Which aspect after »Moj cilj je…«?", a: "Perfective infinitive — naučiti, završiti, uspjeti." },
      { q: "Spelling: pisati + ću, doći + ću?", a: "pisat ću (i drops) · doći ću (keeps everything)." },
      { q: "Both futures of 'write to you tomorrow' — and the nuance?", a: "Pisat ću ti (I'll write) / Napisat ću ti (you'll have it — finished)." },
      { q: "The two meanings of san?", a: "Sleep (U11) and dream — same word, GEN sna." },
    ],
  },
};
