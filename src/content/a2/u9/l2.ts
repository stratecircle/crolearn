import type { Lesson } from "@/types/content";

/**
 * A2 U9 L2 — Hoćeš li doći? (Future I: questions & negation)
 * Spec: curriculum/A2/unit-9.md · grammar-reference §6 (htjeti), §9, §15.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: builds only on L1's affirmative future. GEN prepositions are
 * L3; travel verbs putovati/letjeti conjugation is L4. "vlak" (L4 vocab) and
 * "soba" (L4 vocab) appear glossed ahead of their lesson because the spec
 * mandates the timetable/hotel example sentences here; "polazi/dolazi" are
 * taught as chunks tied to polazak/dolazak on the timetable slide.
 */
export const a2u9l2: Lesson = {
  id: "a2u9l2",
  unitId: "a2u9",
  title: "Hoćeš li doći?",
  titleEn: "Will you come? — future questions & neću",
  grammarTags: ["future-1", "future-questions", "future-negation"],
  estMinutes: 18,
  vocab: [
    { id: "a2u9.karta", hr: "karta", en: "ticket", pos: "noun", gender: "f", icon: "🎫", exampleHr: "Kupit ću kartu.", exampleEn: "I'll buy a ticket." },
    { id: "a2u9.povratna-karta", hr: "povratna karta", en: "return ticket", pos: "phrase", icon: "🔁", exampleHr: "Hoćete li kupiti povratnu kartu?", exampleEn: "Will you buy a return ticket?" },
    { id: "a2u9.rezervirati", hr: "rezervirati", en: "to book / reserve (rezerviram)", pos: "verb", icon: "📝", exampleHr: "Rezervirat ću sjedalo.", exampleEn: "I'll book a seat." },
    { id: "a2u9.rezervacija", hr: "rezervacija", en: "reservation", pos: "noun", gender: "f", icon: "📌", exampleHr: "Imam rezervaciju.", exampleEn: "I have a reservation." },
    { id: "a2u9.polazak", hr: "polazak", en: "departure", pos: "noun", gender: "m", icon: "🛫", exampleHr: "Polazak je u devet sati.", exampleEn: "The departure is at nine." },
    { id: "a2u9.dolazak", hr: "dolazak", en: "arrival", pos: "noun", gender: "m", icon: "🛬", exampleHr: "Dolazak je u deset sati.", exampleEn: "The arrival is at ten." },
    { id: "a2u9.sjedalo", hr: "sjedalo", en: "seat", pos: "noun", gender: "n", icon: "💺", exampleHr: "Ovo je moje sjedalo.", exampleEn: "This is my seat." },
    { id: "a2u9.red-voznje", hr: "red vožnje", en: "timetable", pos: "phrase", icon: "🕘", exampleHr: "Gdje je red vožnje?", exampleEn: "Where is the timetable?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Hoćeš li doći?",
      subtitle: "Ask about the future, refuse politely — and survive a ticket counter.",
      emoji: "🎫",
      items: [
        { emoji: "❓", label: "Hoćeš li…?", hint: "future questions with li" },
        { emoji: "🚫", label: "neću, nećeš…", hint: "the fused future 'no'" },
        { emoji: "🕘", label: "Tickets & timetables", hint: "karta, polazak, sjedalo" },
        { emoji: "🎤", label: "Answer out loud", hint: "Hoću! / Neću!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Asking with li",
      subtitle: "You've flipped »jesi li« since Unit 2 — hoćeš li is the same move, pointed forward.",
      emoji: "❓",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "L1 clitics + the old jesi li" },
        { emoji: "🎟️", label: "Ticket words", hint: "meet them before the counter" },
        { emoji: "🗣️", label: "The counter dialogue", hint: "this is you by the end" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's future & an old question",
      items: [
        {
          prompt: "From L1: »Sutra ___ putovati u Split.« (ja)",
          options: ["ću", "ćeš", "će"],
          correctIndex: 0,
          explanation: "ja → ću. Today you'll turn sentences like this into questions.",
        },
        {
          prompt: "Unit 2 flashback — ask “are you from Canada?”",
          options: ["Jesi li iz Kanade?", "Si li iz Kanade?", "Li jesi iz Kanade?"],
          correctIndex: 0,
          explanation: "Full form + li: Jesi li…? Hoćeš li…? works exactly the same way.",
        },
        {
          prompt: "Listen — what will she do?",
          tts: "Sutra ću planirati putovanje.",
          options: ["plan a trip", "buy a ticket", "visit the island"],
          correctIndex: 0,
          explanation: "planirati putovanje = to plan a trip (L1 words).",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the ticket-counter words",
      vocabIds: [
        "a2u9.karta", "a2u9.povratna-karta", "a2u9.rezervirati", "a2u9.rezervacija",
        "a2u9.polazak", "a2u9.dolazak", "a2u9.sjedalo", "a2u9.red-voznje",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "At the counter — this is you by the end",
      body:
        "Listen to the whole exchange first. Every line is built from things you know or meet today:\n\n*(vlak = train — it gets its own lesson in L4; polazak → **Vlak polazi u devet.** = the train departs at nine.)*",
      examples: [
        { hr: "Dobar dan! Hoćete li kupiti povratnu kartu?", en: "Good day! Will you buy a return ticket?", note: "Vi-form — polite, like at any counter" },
        { hr: "Hoću. Kada je polazak?", en: "I will. When is the departure?" },
        { hr: "Polazak je u devet sati, a dolazak u deset.", en: "Departure is at nine, and arrival at ten." },
        { hr: "Hvala! Rezervirat ću sjedalo.", en: "Thanks! I'll book a seat." },
      ],
      diagram: {
        kind: "flow",
        steps: [
          { label: "Greet", emoji: "👋", example: "Dobar dan!" },
          { label: "Ask / answer", emoji: "❓", example: "Hoćete li…? — Hoću." },
          { label: "Check the time", emoji: "🕘", example: "Kada je polazak?" },
          { label: "Book it", emoji: "💺", example: "Rezervirat ću sjedalo." },
        ],
      },
    },
    {
      id: "s06",
      type: "teach",
      title: "Questions: the FULL form + li",
      body:
        "The little clitic **ću can't carry a question**. To ask, bring out the **full forms of htjeti** and add **li** — the exact move you know from *Jesi li…?*:\n\n- *Putovat ćeš.* → **Hoćeš li putovati?** = Will you travel?\n\nThe verb that follows stays an **infinitive**, and the full infinitive at that — no -t cutting in questions.",
      table: {
        caption: "Full forms + li (the question row)",
        headers: ["person", "question"],
        rows: [
          ["ja", "Hoću li putovati?"],
          ["ti", "Hoćeš li putovati?"],
          ["on / ona", "Hoće li putovati?"],
          ["mi", "Hoćemo li putovati?"],
          ["vi", "Hoćete li putovati?"],
          ["oni / one", "Hoće li putovati?"],
        ],
      },
      examples: [
        { hr: "Hoćeš li rezervirati sobu?", en: "Will you book a room?", note: "soba = room — L4 will make it official" },
        { hr: "Hoće li Ana doći na kolodvor?", en: "Will Ana come to the station?" },
        { hr: "Hoćemo li kupiti karte danas?", en: "Shall we buy the tickets today?" },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Saying no: neću — one fused word",
      body:
        "The future 'no' is **fused**: *ne + ću* → **neću** (never ~~ne ću~~). It's one of only three fused negatives in Croatian: **nisam, neću, nemam**.\n\nShort answers use the full/fused forms alone:\n\n- *Hoćeš li doći?* — **Hoću.** (I will.) / **Neću.** (I won't.)",
      table: {
        caption: "The mirror table — will vs won't",
        headers: ["person", "will ✅", "won't ❌"],
        rows: [
          ["ja", "hoću", "neću"],
          ["ti", "hoćeš", "nećeš"],
          ["on / ona", "hoće", "neće"],
          ["mi", "hoćemo", "nećemo"],
          ["vi", "hoćete", "nećete"],
          ["oni / one", "hoće", "neće"],
        ],
      },
      examples: [
        { hr: "Neću putovati sutra; putovat ću u subotu.", en: "I won't travel tomorrow; I'll travel on Saturday." },
        { hr: "Ana neće kupiti povratnu kartu.", en: "Ana won't buy a return ticket." },
        { hr: "Hoćeš li doći? — Neću, oprosti.", en: "Will you come? — I won't, sorry." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: ask it, refuse it",
      items: [
        {
          prompt: "Turn it into a question: »Putovat ćeš sutra.«",
          options: ["Hoćeš li putovati sutra?", "Ćeš li putovati sutra?", "Putovat ćeš li sutra?"],
          correctIndex: 0,
          explanation: "Questions need the FULL form + li: Hoćeš li…? (ćeš can't carry a question).",
        },
        {
          prompt: "“I won't buy a ticket” = ?",
          options: ["Neću kupiti kartu.", "Ne ću kupiti kartu.", "Neću kupim kartu."],
          correctIndex: 0,
          explanation: "neću is one fused word + infinitive: Neću kupiti kartu.",
        },
        {
          prompt: "»Hoćete li rezervirati sjedalo?« — the natural YES is:",
          options: ["Hoću.", "Da.", "Jesam."],
          correctIndex: 0,
          explanation: "Answer with the verb: Hoću. (Bare »Da« sounds flat; jesam answers past questions.)",
        },
        {
          prompt: "Hoće li Tom i Ana doći? — No, they won't:",
          options: ["Neće.", "Nećemo.", "Neću."],
          correctIndex: 0,
          explanation: "oni → neće: Neće (doći).",
        },
      ],
    },
    {
      id: "s09",
      type: "example",
      title: "Reading the timetable — tap to hear",
      items: [
        { hr: "Vlak polazi u devet sati.", en: "The train departs at nine o'clock.", note: "polazak → polazi (the verb hiding in the noun)" },
        { hr: "Dolazak je u deset sati.", en: "The arrival is at ten o'clock." },
        { hr: "Red vožnje je na kolodvoru.", en: "The timetable is at the station." },
        { hr: "Imam rezervaciju i povratnu kartu.", en: "I have a reservation and a return ticket." },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "»___ li kupiti povratnu kartu?« — »Hoću.«",
      blanks: [["Hoćete", "hoćete"]],
      translation: "\"Will you (polite) buy a return ticket?\" — \"I will.\"",
      wordBank: ["Hoćete", "Ćete", "Jeste"],
      explanation: "Polite Vi + full form + li: Hoćete li…?",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ne, ___ putovati sutra. Putovat ću u subotu.",
      blanks: [["neću"]],
      translation: "No, I won't travel tomorrow. I'll travel on Saturday.",
      wordBank: ["neću", "ne ću", "nisam"],
      explanation: "Fused: neću (never »ne ću«).",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ li Ana doći na kolodvor?",
      blanks: [["Hoće", "hoće"]],
      translation: "Will Ana come to the station?",
      wordBank: ["Hoće", "Će", "Hoćeš"],
      explanation: "ona → hoće: Hoće li Ana doći…?",
    },
    {
      id: "s13",
      type: "section",
      title: "Part 2 · Your turn at the counter",
      subtitle: "Type, build and speak — questions and refusals.",
      emoji: "🗣️",
      items: [
        { emoji: "⌨️", label: "Type a refusal", hint: "»I won't travel tomorrow«" },
        { emoji: "🔀", label: "Build a question", hint: "hoćeš + li + doći" },
        { emoji: "🎧", label: "Dictation ×2", hint: "timetable ears" },
        { emoji: "🎤", label: "Answer the question", hint: "Hoću! …" },
      ],
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I won't travel tomorrow.”",
      answers: ["Neću putovati sutra.", "Neću putovati sutra", "Sutra neću putovati.", "Sutra neću putovati"],
      hint: "fused negative + infinitive",
      explanation: "Neću putovati sutra. — neću is one word, followed by the infinitive.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Ask a friend: “Will you book a seat?”",
      answers: ["Hoćeš li rezervirati sjedalo?", "Hoćeš li rezervirati sjedalo"],
      hint: "full form + li + infinitive",
      explanation: "Hoćeš li rezervirati sjedalo?",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Vlak polazi u devet sati.",
      explanation: "Vlak polazi u devet sati — the train departs at nine.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Hoćeš li kupiti kartu?",
      explanation: "Hoćeš li kupiti kartu? — will you buy a ticket?",
    },
    {
      id: "s18",
      type: "reorder",
      words: ["Hoćeš", "li", "doći", "sutra"],
      answers: ["Hoćeš li doći sutra?", "Hoćeš li doći sutra"],
      en: "Will you come tomorrow?",
      explanation: "Full form first, li glued right behind it: Hoćeš li doći sutra?",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Saturdays, prices and old questions",
      items: [
        {
          prompt: "Unit 6 days: »Neću putovati sutra; putovat ću u ___.« (on Saturday)",
          options: ["subotu", "subota", "suboti"],
          correctIndex: 0,
          explanation: "u + ACC for 'on (a day)': u subotu (like u srijedu from U6).",
        },
        {
          prompt: "Unit 7 at the counter: how do you ask the price of the ticket?",
          options: ["Koliko košta karta?", "Gdje je karta?", "Kada je karta?"],
          correctIndex: 0,
          explanation: "Koliko košta…? = how much does … cost (U7).",
        },
        {
          prompt: "Listen — is this question about the PAST or the FUTURE?",
          tts: "Jesi li kupio kartu?",
          options: ["past", "future", "present"],
          correctIndex: 0,
          explanation: "Jesi li + participle (kupio) = past (U8). The future version: Hoćeš li kupiti kartu?",
        },
      ],
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Hoću! Putovat ću na more.",
      targetEn: "Answer »Hoćeš li putovati na more?« (Will you travel to the seaside?) — I will! I'll travel to the seaside.",
      phonetic: "HO-choo! POO-to-vat choo na MO-reh",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Questions:** full form + **li** + infinitive — *Hoćeš li doći? Hoće li Ana putovati?* (clitics can't ask).\n\n**Negation:** fused **neću, nećeš, neće, nećemo, nećete, neće** + infinitive — *Neću putovati sutra.* One of just three fused negatives: *nisam, neću, nemam*.\n\n**Short answers:** *Hoću. / Neću.* — answer with the verb, not a bare *da*.\n\nTicket words tonight: **karta, povratna karta, rezervirati, rezervacija, polazak, dolazak, sjedalo, red vožnje**.\n\nNext lesson: six little words — *iz, do, od, kod, bez, blizu* — and every route in Croatia opens up.",
      vocabIds: [
        "a2u9.karta", "a2u9.povratna-karta", "a2u9.rezervirati", "a2u9.rezervacija",
        "a2u9.polazak", "a2u9.dolazak", "a2u9.sjedalo", "a2u9.red-voznje",
      ],
    },
  ],
  srsCloze: [
    { front: "___ li doći sutra? (you, singular)", answers: ["Hoćeš", "hoćeš", "Hoces", "hoces"], back: "Hoćeš li doći sutra? (full form + li)", tts: "Hoćeš li doći sutra?" },
    { front: "ne + future, one word: »___ putovati sutra.« (I won't)", answers: ["Neću", "neću", "Necu", "necu"], back: "Neću putovati sutra. (fused — never »ne ću«)", tts: "Neću putovati sutra." },
    { front: "Hoćeš li doći? — Yes: »___.«", answers: ["Hoću", "hoću", "Hocu", "hocu"], back: "Hoću. (answer with the verb, not »da«)", tts: "Hoću." },
    { front: "___ li Ana doći na kolodvor? (she)", answers: ["Hoće", "hoće", "Hoce", "hoce"], back: "Hoće li Ana doći na kolodvor?", tts: "Hoće li Ana doći na kolodvor?" },
    { front: "departure = ___ (m; »___ je u devet sati«)", answers: ["polazak"], back: "polazak = departure. Polazak je u devet sati.", tts: "Polazak je u devet sati." },
    { front: "return ticket = povratna ___", answers: ["karta"], back: "povratna karta = return ticket.", tts: "povratna karta" },
  ],
  notes: {
    inOneSentence: {
      en: "Future questions use the FULL forms of htjeti + li (Hoćeš li doći?), and future negation is the fused neću + infinitive.",
      exampleHr: "Hoćeš li doći? — Hoću. / Neću putovati sutra.",
    },
    deepDive: [
      {
        title: "Why »Ćeš li« is impossible",
        body:
          "Clitics (ću, ćeš…) are leaners — they can't stand at the front of a question. For questions Croatian switches to the **stressed, full forms** of htjeti and glues **li** behind them, exactly the *jesi li* pattern from Unit 2:\n\n- *Jesi li iz Kanade?* (U2) → *Hoćeš li doći?* (today)\n\nThe following verb is always a **full infinitive**: *Hoćeš li putovati?* — no -t cutting inside questions.",
        table: {
          caption: "The three faces of htjeti",
          headers: ["person", "clitic (statements)", "full (questions)", "negative"],
          rows: [
            ["ja", "ću", "hoću (li)", "neću"],
            ["ti", "ćeš", "hoćeš (li)", "nećeš"],
            ["on / ona", "će", "hoće (li)", "neće"],
            ["mi", "ćemo", "hoćemo (li)", "nećemo"],
            ["vi", "ćete", "hoćete (li)", "nećete"],
            ["oni / one", "će", "hoće (li)", "neće"],
          ],
        },
      },
      {
        title: "The transformation card",
        body: "One sentence, three moods — watch the machinery move:",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Statement", emoji: "💬", example: "Putovat ćeš." },
            { label: "Question", emoji: "❓", example: "Hoćeš li putovati?" },
            { label: "Negation", emoji: "🚫", example: "Nećeš putovati." },
          ],
        },
      },
      {
        title: "Short answers — answer with the verb",
        body:
          "Croatian prefers echoing the verb over a bare *da/ne*:\n\n- *Hoćeš li doći?* — **Hoću.** / **Neću.**\n- (Past, for contrast, U8: *Jesi li došao?* — *Jesam.* / *Nisam.*)\n\nColloquial speech sometimes drops li (*Hoćeš doći?*) — you'll HEAR it in Croatia, but the course (and any exam) wants **Hoćeš li**.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ne ću putovati.",
        right: "Neću putovati.",
        why: "ne + ću fuses into one word — neću. Only three negatives fuse: nisam, neću, nemam.",
      },
      {
        wrong: "Hoćeš li doći? — Da.",
        right: "Hoćeš li doći? — Hoću.",
        why: "The natural short answer repeats the verb: Hoću / Neću. A bare »da« sounds unfinished.",
      },
      {
        wrong: "Ćeš li doći?",
        right: "Hoćeš li doći?",
        why: "Clitics can't open a question — use the full form: hoćeš + li.",
      },
      {
        wrong: "Hoćeš li došao?",
        right: "Hoćeš li doći?",
        why: "After hoćeš li comes the INFINITIVE (doći) — the participle došao belongs to the past.",
      },
    ],
    memoryHooks: [
      "Same flip as jesi li: full form + li — Jesi li? → Hoćeš li?",
      "The fused three: NIsam, NEću, NEmam — Croatian's only glued negatives.",
      "Answer with the verb: Hoćeš li? → Hoću! (echo it back).",
      "polazak/dolazak = departure/arrival — od-LAZ-ak & do-LAZ-ak share the 'going' root laz.",
    ],
    connects: [
      { label: "jesi li — the original li question (Unit 2 L2)", lessonId: "a1u2l2" },
      { label: "Future I statements (Unit 9 L1)", lessonId: "a2u9l1" },
      { label: "Next: iz, do, od, kod, bez, blizu + GEN (Unit 9 L3)", lessonId: "a2u9l3" },
    ],
    selfCheck: [
      { q: "Ask a friend if they'll come tomorrow.", a: "Hoćeš li doći sutra?" },
      { q: "Why is »Ne ću« wrong?", a: "ne + ću fuses into one word: neću (like nisam and nemam)." },
      { q: "»Hoćete li kupiti povratnu kartu?« — say yes naturally.", a: "Hoću. (echo the verb, not a bare da)" },
      { q: "“Ana won't travel on Saturday” = ?", a: "Ana neće putovati u subotu." },
      { q: "What's the difference between polazak and dolazak?", a: "polazak = departure, dolazak = arrival. (Polazak je u devet, dolazak u deset.)" },
    ],
  },
};
