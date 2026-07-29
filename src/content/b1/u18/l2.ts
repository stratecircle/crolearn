import type { Lesson } from "@/types/content";

/**
 * B1 U18 L2 — Molim Vas… (polite requests, offers and wishes)
 * Spec: curriculum/B1/unit-18.md · grammar-reference §10 "Conditional I" + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The politeness ladder is the spine: Daj mi… → Možeš li mi dati…? → Biste li mi
 * mogli dati…? The one register mistake a Croatian actually notices is
 * Bi li Vi…? instead of Biste li…?
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U18 cut-outs exist.
 */
export const b1u18l2: Lesson = {
  id: "b1u18l2",
  unitId: "b1u18",
  title: "Molim Vas…",
  titleEn: "Asking nicely — the politeness ladder",
  grammarTags: ["conditional-1", "register", "clitics"],
  estMinutes: 20,
  vocab: [
    { id: "b1u18.tecaj", image: "/img/tecaj.png", hr: "tečaj", en: "course", pos: "noun", gender: "m", icon: "📘", exampleHr: "Htio bih upisati tečaj hrvatskog.", exampleEn: "I'd like to enrol in a Croatian course." },
    { id: "b1u18.prijava", image: "/img/prijava.png", hr: "prijava", en: "application / sign-up form", pos: "noun", gender: "f", icon: "📝", exampleHr: "Gdje je prijava za tečaj?", exampleEn: "Where is the application for the course?" },
    { id: "b1u18.raspored", image: "/img/raspored.png", hr: "raspored", en: "timetable / schedule", pos: "noun", gender: "m", icon: "📅", exampleHr: "Biste li mi mogli objasniti raspored?", exampleEn: "Could you explain the timetable to me?" },
    { id: "b1u18.biljeznica", image: "/img/biljeznica.png", hr: "bilježnica", en: "notebook / exercise book", pos: "noun", gender: "f", icon: "📓", exampleHr: "Zaboravio sam bilježnicu.", exampleEn: "I forgot my notebook." },
    { id: "b1u18.upisati", image: "/img/upisati.png", hr: "upisati", en: "to enrol / sign up (pf; upišem)", pos: "verb", icon: "✍️", exampleHr: "Želio bih upisati tečaj.", exampleEn: "I'd like to enrol in the course." },
    { id: "b1u18.objasniti", image: "/img/objasniti.png", hr: "objasniti", en: "to explain (pf; objasnim)", pos: "verb", icon: "💬", exampleHr: "Profesor je objasnio raspored.", exampleEn: "The teacher explained the timetable." },
    { id: "b1u18.ponoviti", image: "/img/ponoviti.png", hr: "ponoviti", en: "to repeat / revise (pf; ponovim)", pos: "verb", icon: "🔁", exampleHr: "Bi li mi ponovila pitanje?", exampleEn: "Would you repeat the question for me?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Molim Vas…",
      subtitle: "Yesterday you built the form. Today you learn what Croatians actually use it for — nine times out of ten, this.",
      emoji: "🙏",
      items: [
        { emoji: "🪜", label: "The ladder", hint: "blunt → neutral → formal" },
        { emoji: "💭", label: "Htio bih…", hint: "I'd like…" },
        { emoji: "❓", label: "Biste li…?", hint: "Could you…?" },
        { emoji: "📝", label: "Office words", hint: "tečaj, prijava, raspored…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Tri stepenice",
      subtitle: "There is a way to ask for something that makes a stranger want to help you. It is one syllable long.",
      emoji: "🪜",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "yesterday's clitics" },
        { emoji: "🃏", label: "New words", hint: "the enrolment seven" },
        { emoji: "🪜", label: "The ladder", hint: "who gets which rung" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's clitics",
      items: [
        {
          prompt: "L1: »Ja ___ studirao u Zagrebu.«",
          options: ["bih", "bi", "bismo"],
          correctIndex: 0,
          explanation: "ja → bih. The -h is the first-person fingerprint.",
        },
        {
          prompt: "L1: »Mi ___ to naučili.«",
          options: ["bismo", "biste", "bi"],
          correctIndex: 0,
          explanation: "mi → bismo. Today you meet its partner biste, which belongs to vi/Vi.",
        },
        {
          prompt: "U11: »___ li mi pomoći?« (can you help me — neutral, to a friend)",
          options: ["Možeš", "Mogu", "Moći"],
          correctIndex: 0,
          explanation: "Možeš li…? is the neutral middle rung. Today we add the rung above it.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The enrolment seven",
      vocabIds: [
        "b1u18.tecaj", "b1u18.prijava", "b1u18.raspored", "b1u18.biljeznica",
        "b1u18.upisati", "b1u18.objasniti", "b1u18.ponoviti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The politeness ladder 🪜",
      body:
        "Croatian softens a request the same way English does — by making it longer and less direct. Three rungs, and you already own two of them:\n\n**Daj mi bilježnicu.** → give me the notebook. Imperative. Friends and family only; to a stranger it lands like an order.\n**Možeš li mi dati bilježnicu?** → can you give me the notebook? Neutral, *ti*, perfectly polite among people your age.\n**Biste li mi mogli dati bilježnicu?** → could you give me the notebook? Formal *Vi*, and the register you use in an office, a bank or a professor's room.\n\nThe conditional is what buys you the top rung. Nothing else changes.",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "🔨 blunt", rule: "imperative — friends, family, children", example: "Daj mi bilježnicu." },
          { label: "🙂 neutral", rule: "možeš li + inf — anyone you say ti to", example: "Možeš li mi dati bilježnicu?" },
          { label: "🎩 formal", rule: "biste li mogli + inf — anyone you say Vi to", example: "Biste li mi mogli dati bilježnicu?" },
        ],
      },
      table: {
        caption: "The four frames",
        headers: ["frame", "literally", "when to use"],
        rows: [
          ["Htio bih / Htjela bih + noun/inf", "I would want", "your default »I'd like…« in any shop or office"],
          ["Želio bih / Željela bih + noun/inf", "I would wish", "the same, a shade more formal"],
          ["Mogao bih / Mogla bih + inf", "I could", "offering to do something yourself"],
          ["Bi li mogao…? / Biste li mogli…?", "would you be able…?", "asking someone else — ti / Vi"],
        ],
      },
      examples: [
        { hr: "Htio bih upisati tečaj hrvatskog.", en: "I'd like to enrol in a Croatian course.", note: "A woman says Htjela bih." },
        { hr: "Željela bih vidjeti prijavu.", en: "I'd like to see the application form." },
        { hr: "Biste li mi mogli objasniti raspored?", en: "Could you explain the timetable to me?", note: "Vi → biste. To a classmate: Bi li mi mogao objasniti raspored?" },
        { hr: "Bi li mi ponovila pitanje?", en: "Would you repeat the question for me?", note: "ponovila — you are asking a woman." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "ti ili Vi? The one mistake Croatians notice",
      body:
        "*Bi li…?* and *Biste li…?* are not stylistic twins. **Bi li** is the *ti* form; **Biste li** is the *Vi* form. Say *Bi li Vi mogli…?* and you have put a formal pronoun on an informal clitic — the listener hears the mismatch instantly.\n\nInside these frames the clitic order from Unit 15 runs unchanged: **aux → dative → accusative**.\n\n*Htio **bih vam** objasniti raspored.* — bih (aux), vam (DAT).\n*Biste li **mi** mogli dati bilježnicu?* — li, biste, mi.\n\nAnd one small trap from the vocabulary: you enrol *in* something with a plain accusative — **upisati tečaj**, no preposition at all.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Bi li = ti · Biste li = Vi",
        text: "Match the clitic to the pronoun you are already using. Bi li Vi mogli…? ❌ · Biste li mogli…? ✅ — and once you have chosen ti or Vi, stay there for the whole conversation.",
      },
      examples: [
        { hr: "Htio bih vam objasniti raspored.", en: "I'd like to explain the timetable to you.", note: "aux bih, then DAT vam — the U15 order, untouched." },
        { hr: "Biste li mi mogli dati bilježnicu?", en: "Could you give me the notebook?" },
        { hr: "Želim upisati tečaj.", en: "I want to enrol in the course.", note: "upisati + ACC, never *upisati se tečaj." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the rung",
      items: [
        {
          prompt: "You are asking your professor to explain the timetable. Which one?",
          options: [
            "Biste li mi mogli objasniti raspored?",
            "Bi li mi mogao objasniti raspored?",
            "Objasni mi raspored.",
          ],
          correctIndex: 0,
          explanation: "Professor → Vi → biste li. The other two are for a classmate and a close friend.",
        },
        {
          prompt: "Your classmate, same age, sitting next to you:",
          options: [
            "Bi li mi mogao objasniti raspored?",
            "Biste li mi mogli objasniti raspored?",
            "Htio bih da mi objasnite raspored.",
          ],
          correctIndex: 0,
          explanation: "ti → Bi li…? The Vi form would sound stiff, almost sarcastic, between classmates.",
        },
        {
          prompt: "»I'd like to enrol in a Croatian course.« (said by a woman)",
          options: [
            "Htjela bih upisati tečaj hrvatskog.",
            "Htio bih upisati tečaj hrvatskog.",
            "Htjela bi upisati tečaj hrvatskog.",
          ],
          correctIndex: 0,
          explanation: "The participle agrees with the speaker (htjela), the clitic stays bih.",
        },
        {
          prompt: "Which is wrong?",
          options: ["Bi li Vi mogli doći?", "Biste li mogli doći?", "Bi li mogao doći?"],
          correctIndex: 0,
          explanation: "Vi takes biste. Bi li Vi…? mixes an informal clitic with a formal pronoun.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · U uredu",
      subtitle: "Now use it where you would actually need it: signing up for a course you cannot yet pronounce the name of.",
      emoji: "🏢",
      items: [
        { emoji: "🔁", label: "Turn it polite", hint: "imperative → conditional" },
        { emoji: "🧩", label: "Fills + reorder", hint: "the clitic cluster" },
        { emoji: "🎤", label: "Ask for three things", hint: "at the office" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ li mi mogli objasniti raspored? (to a professor)",
      blanks: [["Biste"]],
      translation: "Could you explain the timetable to me?",
      wordBank: ["Biste", "Bi", "Bismo"],
      explanation: "Professor → Vi → Biste li…?",
    },
    {
      id: "s10",
      type: "fill",
      text: "Htio bih ___ objasniti raspored. (to you, formal)",
      blanks: [["vam"]],
      translation: "I'd like to explain the timetable to you.",
      wordBank: ["vam", "vas", "vi"],
      explanation: "Dative clitic vam, sitting right behind the auxiliary bih — the U15 order.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Htjela ___ upisati tečaj hrvatskog.",
      blanks: [["bih"]],
      translation: "I'd like to enrol in a Croatian course. (a woman speaking)",
      wordBank: ["bih", "bi", "biste"],
      explanation: "The participle went feminine (htjela); the clitic is still bih.",
    },
    {
      id: "s12",
      type: "mc",
      prompt: "»Daj mi bilježnicu.« — to whom can you say this?",
      options: ["a close friend or a family member", "a professor", "someone in a university office"],
      correctIndex: 0,
      explanation: "The bare imperative is the bottom rung. For the other two, climb: Možeš li…? / Biste li mogli…?",
    },
    {
      id: "s13",
      type: "mc",
      prompt: "Which sentence asks a friend to repeat the question?",
      options: [
        "Bi li mi ponovila pitanje?",
        "Biste li mi ponovili pitanje?",
        "Ponovila bih pitanje.",
      ],
      correctIndex: 0,
      explanation: "Bi li = ti. The third one means »I would repeat the question« — a statement, not a request.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Htio", "bih", "vam", "objasniti", "raspored"],
      answers: ["Htio bih vam objasniti raspored"],
      en: "I'd like to explain the timetable to you.",
      explanation: "Participle first (a clitic can't open), then the cluster in U15 order: aux bih → DAT vam. Then the infinitive and its object.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Turn »Daj mi bilježnicu.« into the formal request (Could you give me the notebook?)",
      answers: [
        "Biste li mi mogli dati bilježnicu?",
        "Biste li mi mogli dati biljeznicu?",
        "Biste li mi mogli dati bilježnicu",
        "Biste li mi mogli dati biljeznicu",
      ],
      hint: "Biste li mi mogli…",
      explanation: "Biste li mi mogli dati bilježnicu? — three rungs up from the imperative.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "»I'd like to enrol in a course.« (a man speaking) = ___",
      answers: [
        "Htio bih upisati tečaj.",
        "Htio bih upisati tecaj.",
        "Htio bih upisati tečaj",
        "Htio bih upisati tecaj",
        "Želio bih upisati tečaj.",
        "Zelio bih upisati tecaj.",
      ],
      hint: "Htio bih…",
      explanation: "Htio bih upisati tečaj. (Željela/Htjela bih for a woman.)",
    },
    {
      id: "s17",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear both rungs, then walk into the office and ask for three things.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "wish · request" },
        { emoji: "🎤", label: "At the office", hint: "three requests" },
        { emoji: "🔗", label: "Flashbacks", hint: "U2 · U15" },
      ],
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Htio bih upisati tečaj hrvatskog.",
      explanation: "Htio bih upisati tečaj hrvatskog — I'd like to enrol in a Croatian course.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Biste li mi mogli objasniti raspored?",
      explanation: "Biste li mi mogli objasniti raspored? — the formal request in full. Word by word: Biste · li · mi · mogli · objasniti · raspored.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Dobar dan! Htio bih upisati tečaj hrvatskog. Biste li mi mogli objasniti raspored?",
      targetEn: "walk into the office — greet, say what you'd like, ask for the timetable politely",
      phonetic: "DOH-bar dan! HTEE-oh beeh oo-PEE-sa-tee TEH-chai HR-vat-skog. BEE-steh lee mee MOH-glee ob-YAS-nee-tee RAS-po-red",
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: politeness was always there",
      items: [
        {
          prompt: "U2: you meet your professor for the first time. Which greeting?",
          options: ["Dobar dan!", "Bok!", "Ćao!"],
          correctIndex: 0,
          explanation: "Formal Vi starts before the request does — Dobar dan, then Biste li…?",
        },
        {
          prompt: "Listen — friend or professor?",
          tts: "Bi li mi mogao dati bilježnicu?",
          options: ["a friend", "a professor", "impossible to tell"],
          correctIndex: 0,
          explanation: "Bi li + mogao (m sg, ti) = the informal rung.",
        },
        {
          prompt: "U15: what sits directly behind the auxiliary in »Htio bih vam objasniti«?",
          options: ["the dative clitic vam", "the infinitive", "the accusative"],
          correctIndex: 0,
          explanation: "aux → DAT → ACC. The train order never changes, whatever rides in the aux seat.",
        },
      ],
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**The ladder**: *Daj mi…* (friends) → *Možeš li mi…?* (neutral, ti) → *Biste li mi mogli…?* (formal, Vi).\n\n**Four frames**: *Htio bih / Htjela bih…* (I'd like) · *Želio bih / Željela bih…* (a shade more formal) · *Mogao bih / Mogla bih…* (I could — offering) · *Bi li mogao…? / Biste li mogli…?* (could you).\n\n**The register rule**: **Bi li = ti · Biste li = Vi**. Pick one and stay there.\n\n**Clitic order is unchanged**: *Htio bih vam objasniti raspored.* — aux, then dative.\n\nWords tonight: tečaj, prijava, raspored, bilježnica, upisati, objasniti, ponoviti.\n\nNext: the conditional stops being polite and starts being hypothetical — *ako* vs *da*.",
      vocabIds: [
        "b1u18.tecaj", "b1u18.prijava", "b1u18.raspored", "b1u18.biljeznica",
        "b1u18.upisati", "b1u18.objasniti", "b1u18.ponoviti",
      ],
    },
  ],
  srsCloze: [
    { front: "___ li mi mogli objasniti raspored? (to a professor)", answers: ["Biste", "biste"], back: "Biste li…? — Vi. To a friend: Bi li…?", tts: "Biste li mi mogli objasniti raspored?" },
    { front: "»I'd like to enrol in a course« → Htio bih ___ tečaj.", answers: ["upisati"], back: "upisati + ACC — no preposition.", tts: "Htio bih upisati tečaj." },
    { front: "Htio bih ___ objasniti raspored. (to you, formal)", answers: ["vam"], back: "DAT clitic vam, right behind the aux bih.", tts: "Htio bih vam objasniti raspored." },
    { front: "course = ___", answers: ["tečaj", "tecaj"], back: "tečaj (m) — tečaj hrvatskog.", tts: "Htio bih upisati tečaj hrvatskog." },
    { front: "timetable / schedule = ___", answers: ["raspored"], back: "raspored (m).", tts: "Gdje je raspored?" },
    { front: "application / sign-up form = ___", answers: ["prijava"], back: "prijava (f).", tts: "Gdje je prijava za tečaj?" },
    { front: "to explain (pf) = ___", answers: ["objasniti"], back: "objasniti, objasnim.", tts: "Profesor je objasnio raspored." },
    { front: "to repeat / revise (pf) = ___", answers: ["ponoviti"], back: "ponoviti, ponovim.", tts: "Bi li mi ponovila pitanje?" },
    { front: "notebook = ___", answers: ["bilježnica", "biljeznica"], back: "bilježnica (f).", tts: "Zaboravio sam bilježnicu." },
  ],
  notes: {
    inOneSentence: {
      en: "The conditional's everyday job is taking the edge off: Htio bih… for what you want, Biste li mogli…? for what you need someone else to do — and Bi li is ti while Biste li is Vi.",
      exampleHr: "Htio bih upisati tečaj. Biste li mi mogli objasniti raspored?",
    },
    deepDive: [
      {
        title: "The ladder, rung by rung",
        body:
          "Every language has a way of buying distance between a request and an order. Croatian buys it with length. The bare imperative is not rude *in itself* — parents, friends and waiters use it constantly — it simply assumes a closeness. Between strangers that assumption is the rudeness.\n\nThe middle rung, *Možeš li…?*, is the workhorse: neutral, *ti*, and correct with anyone you are on first-name terms with. The top rung swaps *možeš* for the conditional *biste li mogli* and is what you use in an office, with a professor, with anyone visibly older, and with anyone whose job it is to help you.",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "🔨 blunt", rule: "imperative", example: "Daj mi bilježnicu." },
            { label: "🙂 neutral", rule: "možeš li + infinitive", example: "Možeš li mi dati bilježnicu?" },
            { label: "🎩 formal", rule: "biste li mogli + infinitive", example: "Biste li mi mogli dati bilježnicu?" },
          ],
        },
      },
      {
        title: "The four frames",
        body:
          "*Htio bih* and *Želio bih* both mean »I'd like«; *željeti* is the slightly more formal of the two, which is why you hear *Želio bih* in banks and *Htio bih* in cafés. Both take either a noun (*Htio bih kavu*) or an infinitive (*Htio bih upisati tečaj*).\n\n*Mogao bih* is the offering frame — you volunteering — and *Bi li mogao…? / Biste li mogli…?* is its mirror, someone else volunteering.\n\nRemember that the participle agrees with **whoever the verb belongs to**: the speaker in the first three (*Htio bih* / *Htjela bih*), the person being asked in the last (*Bi li mogao…?* to a man, *Bi li mogla…?* to a woman).",
        table: {
          caption: "Frames and their register",
          headers: ["frame", "who it is about", "register"],
          rows: [
            ["Htio bih / Htjela bih", "the speaker", "neutral, everywhere"],
            ["Želio bih / Željela bih", "the speaker", "a shade more formal"],
            ["Mogao bih / Mogla bih", "the speaker (offering)", "neutral"],
            ["Bi li mogao / mogla…?", "the listener (ti)", "informal"],
            ["Biste li mogli…?", "the listener (Vi)", "formal"],
          ],
        },
      },
      {
        title: "Clitics inside the frames",
        body:
          "Nothing about Unit 15 is suspended. The auxiliary comes first in the cluster, then the dative, then the accusative:\n\n*Htio **bih vam** objasniti raspored.* — bih (aux) + vam (DAT).\n*Biste li **mi** mogli dati bilježnicu?* — `li` is the only thing that stands ahead of the auxiliary, and it does so only in yes/no questions.\n\nOne vocabulary trap worth repeating: **upisati** takes a plain accusative. You *upisati tečaj*, *upisati fakultet* — no preposition, no *se*.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Bi li Vi mogli doći?",
        right: "Biste li mogli doći?",
        why: "Vi takes biste. Mixing the informal clitic with the formal pronoun is the one register slip a Croatian will notice immediately.",
      },
      {
        wrong: "Htio bih da mi objasnite raspored.",
        right: "Biste li mi mogli objasniti raspored?",
        why: "The da-clause is a different construction (Unit 21). At B1 the request frame does the job on its own.",
      },
      {
        wrong: "Htjela bih upisati se tečaj.",
        right: "Htjela bih upisati tečaj.",
        why: "upisati takes a bare accusative — no se, no preposition.",
      },
      {
        wrong: "Daj mi raspored. (to a university officer)",
        right: "Biste li mi mogli dati raspored?",
        why: "The imperative assumes closeness; with a stranger that assumption is what reads as rude.",
      },
    ],
    memoryHooks: [
      "One rung up for every stranger: friend → imperative, acquaintance → možeš li, stranger → biste li mogli.",
      "biste rhymes with ste — the Vi ending you have used since »Kako ste?« in Unit 2.",
      "Htio bih is the café version, Želio bih is the bank version. Same meaning, different building.",
      "li is the only passenger allowed in front of the auxiliary — and only when you are asking a yes/no question.",
    ],
    connects: [
      { label: "How the form is built (Unit 18 L1)", lessonId: "b1u18l1" },
      { label: "Formal Vi from the very first lesson (Unit 2 L1)", lessonId: "a1u2l1" },
      { label: "Next: real vs unreal conditions (Unit 18 L3)", lessonId: "b1u18l3" },
    ],
    selfCheck: [
      { q: "Give the three rungs for »give me the notebook«.", a: "Daj mi bilježnicu. → Možeš li mi dati bilježnicu? → Biste li mi mogli dati bilježnicu?" },
      { q: "Bi li or Biste li — for your professor?", a: "Biste li. Bi li belongs to ti." },
      { q: "A woman says »I'd like to enrol in a course«.", a: "Htjela bih upisati tečaj. (or Željela bih…)" },
      { q: "Where does the dative clitic go in »I'd like to explain the timetable to you«?", a: "Right behind the auxiliary: Htio bih vam objasniti raspored." },
      { q: "What preposition does upisati take?", a: "None — plain accusative: upisati tečaj, upisati fakultet." },
    ],
  },
};
