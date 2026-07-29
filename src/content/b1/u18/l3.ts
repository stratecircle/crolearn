import type { Lesson } from "@/types/content";

/**
 * B1 U18 L3 — Da imam vremena… (real vs unreal conditions)
 * Spec: curriculum/B1/unit-18.md · grammar-reference §10 "Conditional I".
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The unit's conceptual centre. REAL: ako + present → future I. UNREAL:
 * kad bih + participle / da + present → bih + participle. The halves must never
 * be crossed, and *ako bih is the single commonest learner error here.
 *
 * Spec correction applied 2026-07-29: `položiti ispit` is already carded at
 * a2u12, so this lesson cards only the NEW half of the aspect pair, `polagati`,
 * and treats `položiti` as recycled. L3 set = 8 items, not 9.
 *
 * Deferred on purpose: `budem` / Future II in ako-clauses is U22 — named once in
 * the notes as "coming later", never drilled.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U18 cut-outs exist. `ako` and `kad` are
 * function words and stay icon-only forever.
 */
export const b1u18l3: Lesson = {
  id: "b1u18l3",
  unitId: "b1u18",
  title: "Da imam vremena…",
  titleEn: "If I had time — real vs unreal conditions",
  grammarTags: ["conditional-1", "conditions", "conjunctions"],
  estMinutes: 22,
  vocab: [
    { id: "b1u18.ako", hr: "ako", en: "if (REAL condition — it might well happen)", pos: "conj", icon: "🔀", exampleHr: "Ako imam vremena, doći ću.", exampleEn: "If I have time, I'll come." },
    { id: "b1u18.kad", hr: "kad", en: "when; if (with bih — kad bih = if I were to)", pos: "conj", icon: "⏱️", exampleHr: "Kad bih imao vremena, došao bih.", exampleEn: "If I had time, I'd come." },
    { id: "b1u18.ocjena", hr: "ocjena", en: "grade / mark", pos: "noun", gender: "f", icon: "🅰️", exampleHr: "Ima odličnu ocjenu iz hrvatskog.", exampleEn: "He has an excellent grade in Croatian." },
    { id: "b1u18.polagati", hr: "polagati", en: "to sit / take an exam (impf; polažem) — pf is položiti", pos: "verb", icon: "📝", exampleHr: "Sutra polažem ispit.", exampleEn: "Tomorrow I'm sitting the exam." },
    { id: "b1u18.diploma", hr: "diploma", en: "degree / diploma", pos: "noun", gender: "f", icon: "📜", exampleHr: "Ima diplomu iz hrvatskog jezika.", exampleEn: "She has a degree in Croatian." },
    { id: "b1u18.znanje", hr: "znanje", en: "knowledge", pos: "noun", gender: "n", icon: "💡", exampleHr: "Znanje jezika je važno.", exampleEn: "Knowing a language is important." },
    { id: "b1u18.tezak", hr: "težak", en: "difficult; heavy (teška, teško — adv teško)", pos: "adj", icon: "🪨", exampleHr: "Ovaj ispit je težak.", exampleEn: "This exam is difficult." },
    { id: "b1u18.lak", hr: "lak", en: "easy; light (laka, lako — adv lako)", pos: "adj", icon: "🪶", exampleHr: "Prvi predmet je bio lak.", exampleEn: "The first subject was easy." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Da imam vremena…",
      subtitle: "«If I have time» and «if I had time» are one word apart in English. In Croatian they are two different grammars — and the difference is whether it is going to happen.",
      emoji: "🔀",
      items: [
        { emoji: "🛣️", label: "Two roads", hint: "real · unreal" },
        { emoji: "🔀", label: "ako + present", hint: "→ future I" },
        { emoji: "🚧", label: "da / kad bih", hint: "→ bih + participle" },
        { emoji: "📝", label: "Exam words", hint: "polagati, ocjena, diploma…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Dvije ceste",
      subtitle: "One fork you can still take, and one road with a barrier across it.",
      emoji: "🛣️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L2 frames · U17 aspect" },
        { emoji: "🃏", label: "New words", hint: "ako, kad + the exam eight" },
        { emoji: "🛣️", label: "The split", hint: "real vs unreal" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's ladder",
      items: [
        {
          prompt: "L2: to a professor — »Could you explain the timetable?«",
          options: [
            "Biste li mi mogli objasniti raspored?",
            "Bi li mi mogao objasniti raspored?",
            "Objasni mi raspored.",
          ],
          correctIndex: 0,
          explanation: "Vi → biste li. The ladder still stands.",
        },
        {
          prompt: "L2: »I'd like to enrol in a course.« (a woman)",
          options: ["Htjela bih upisati tečaj.", "Htio bih upisati tečaj.", "Htjela bi upisati tečaj."],
          correctIndex: 0,
          explanation: "Participle agrees with the speaker, clitic stays bih.",
        },
        {
          prompt: "U12: »I have to pass the exam.«",
          options: ["Moram položiti ispit.", "Moram polagati ispit.", "Moram ispit."],
          correctIndex: 0,
          explanation: "položiti = pass it (perfective, sealed). Today you meet its imperfective partner polagati = sit it.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "ako, kad — and the exam six",
      vocabIds: [
        "b1u18.ako", "b1u18.kad", "b1u18.ocjena", "b1u18.polagati",
        "b1u18.diploma", "b1u18.znanje", "b1u18.tezak", "b1u18.lak",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Two roads: real and unreal 🛣️",
      body:
        "English uses *if* for both. Croatian splits them, and the split is about **whether the thing can still happen**.\n\n**REAL / open** — it might well happen. **ako + present** in the if-half, **future I** in the other half:\n*Ako imam vremena, doći ću.* → If I have time, I'll come.\nNote the Croatian *present* where you might expect a future. The future goes in the **other** half only.\n\n**UNREAL / hypothetical** — it is not so, and you both know it. The main half is always **bih + participle**:\n*Da imam vremena, došao bih.* → If I had time, I'd come. (But I don't.)\n\nThe two halves belong to each other. Crossing them is the error to avoid.",
      diagram: {
        kind: "contrast",
        left: {
          title: "REAL 🔀 — the fork you can still take",
          emoji: "🔀",
          lines: [
            { hr: "ako + prezent → futur I", en: "if + present → will" },
            { hr: "Ako imam vremena, doći ću.", en: "If I have time, I'll come." },
            { hr: "Ako položim ispit, bit ću sretan.", en: "If I pass the exam, I'll be happy." },
          ],
        },
        right: {
          title: "UNREAL 🚧 — the road with a barrier",
          emoji: "🚧",
          lines: [
            { hr: "da + prezent → bih + particip", en: "if + present → would" },
            { hr: "Da imam vremena, došao bih.", en: "If I had time, I'd come." },
            { hr: "Kad bih imao novca, upisao bih tečaj.", en: "If I had money, I'd enrol in the course." },
          ],
        },
      },
      examples: [
        { hr: "Ako imam vremena, doći ću.", en: "If I have time, I'll come.", note: "Real: present in the ako-half, future in the other." },
        { hr: "Da imam vremena, došao bih.", en: "If I had time, I'd come.", note: "Unreal: present after da, bih + participle in the other half." },
        { hr: "Kad bih imao novca, upisao bih tečaj.", en: "If I had money, I'd enrol in the course.", note: "The same unreal meaning, the other pattern: bih in BOTH halves." },
        { hr: "Ako položim ispit, bit ću sretan.", en: "If I pass the exam, I'll be happy." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The unreal pair — and the one thing you must not write",
      body:
        "The unreal condition has **two interchangeable shapes**:\n\n**kad bih + participle**, … **bih + participle** — *Kad bih imao vremena, došao bih.*\n**da + present**, … **bih + participle** — *Da imam vremena, došao bih.*\n\nThey mean the same thing. *da + present* is the one you hear most in speech; *kad bih* is a touch more deliberate. Either way, **the main half always carries bih + participle**.\n\nOne warning about *da*: here it is the conjunction **»if«**. It is not the *da* that reports what someone said (that construction comes in Unit 21), and it is not a purpose clause. In this lesson, *da* at the front of a sentence means *if*.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Never ako + bih",
        text: "*Ako bih imao vremena ❌ is the single commonest learner error in this unit. ako takes the plain present: Ako imam vremena ✅ (real). If you want the unreal meaning, switch conjunctions: Kad bih imao vremena ✅ or Da imam vremena ✅.",
      },
      table: {
        caption: "polagati ‖ položiti — the exam pair",
        headers: ["〰️ polagati (impf)", "✅ položiti (pf, U12)"],
        rows: [
          ["you are sitting it", "you passed it"],
          ["Sutra polažem ispit.", "Položio sam ispit!"],
          ["Polagao sam tri puta.", "Konačno sam položio."],
          ["the process", "the result"],
        ],
      },
      examples: [
        { hr: "Sutra polažem ispit iz hrvatskog.", en: "Tomorrow I'm sitting the Croatian exam.", note: "polagati = the sitting; položiti = the passing." },
        { hr: "Ovaj ispit je težak, ali prvi je bio lak.", en: "This exam is hard, but the first one was easy." },
        { hr: "Ima odličnu ocjenu iz hrvatskog.", en: "He has an excellent grade in Croatian.", note: "iz + GEN for the subject a grade is in." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: real or unreal?",
      items: [
        {
          prompt: "»Ako imam vremena, ___« (and I might!)",
          options: ["doći ću", "došao bih", "dođem"],
          correctIndex: 0,
          explanation: "Real condition → future I in the main half.",
        },
        {
          prompt: "»Da imam vremena, ___« (but I don't)",
          options: ["došao bih", "doći ću", "dolazim"],
          correctIndex: 0,
          explanation: "Unreal condition → bih + participle. Always.",
        },
        {
          prompt: "Which is NOT Croatian?",
          options: ["Ako bih imao vremena…", "Ako imam vremena…", "Kad bih imao vremena…"],
          correctIndex: 0,
          explanation: "ako never takes bih. Use ako + present, or switch to kad bih / da.",
        },
        {
          prompt: "»Kad bih imao novca, ___ tečaj.«",
          options: ["upisao bih", "upisat ću", "upisujem"],
          correctIndex: 0,
          explanation: "kad bih in one half → bih + participle in the other. Both halves unreal.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Ispiti i ocjene",
      subtitle: "Build both patterns yourself, with the words you'd actually use them about.",
      emoji: "📝",
      items: [
        { emoji: "🧩", label: "Fills ×4", hint: "both halves, both roads" },
        { emoji: "🔀", label: "Reorder", hint: "a kad bih sentence" },
        { emoji: "⌨️", label: "Type ×2", hint: "your own conditions" },
      ],
    },
    {
      id: "s09",
      type: "mc",
      prompt: "Your friend actually might come tonight. Which do you say?",
      options: [
        "Ako imaš vremena, dođi!",
        "Da imaš vremena, došao bi.",
        "Ako bi imao vremena, dođi!",
      ],
      correctIndex: 0,
      explanation: "It can still happen → ako + present. The second one says it won't; the third isn't Croatian.",
    },
    {
      id: "s10",
      type: "mc",
      prompt: "He has no money and both of you know it. Which sentence says so?",
      options: [
        "Kad bih imao novca, upisao bih tečaj.",
        "Ako imam novca, upisat ću tečaj.",
        "Imam novca i upisat ću tečaj.",
      ],
      correctIndex: 0,
      explanation: "The unreal pattern is how Croatian says »but I don't«.",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ imam vremena, doći ću.",
      blanks: [["Ako"]],
      translation: "If I have time, I'll come.",
      wordBank: ["Ako", "Da", "Kad bih"],
      explanation: "Future I in the main half is the giveaway: this is the real road, so ako + present.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Da imam vremena, ___ bih.",
      blanks: [["došao", "dosao", "došla", "dosla"]],
      translation: "If I had time, I'd come.",
      wordBank: ["došao", "doći ću", "dolazim"],
      explanation: "Unreal → bih + l-participle: došao (m) / došla (f).",
    },
    {
      id: "s13",
      type: "fill",
      text: "Kad bih imao novca, ___ bih tečaj.",
      blanks: [["upisao", "upisala"]],
      translation: "If I had money, I'd enrol in the course.",
      wordBank: ["upisao", "upisat ću", "upisujem"],
      explanation: "kad bih in the first half forces bih + participle in the second.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Ako ___ ispit, bit ću sretan.",
      blanks: [["položim", "polozim"]],
      translation: "If I pass the exam, I'll be happy.",
      wordBank: ["položim", "bih položio", "polagao sam"],
      explanation: "Real condition: plain present after ako — and the perfective present is exactly right here, because it is one completed pass.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Kad", "bih", "imao", "vremena,", "učio", "bih", "hrvatski"],
      answers: ["Kad bih imao vremena, učio bih hrvatski"],
      en: "If I had time, I'd study Croatian.",
      explanation: "bih twice — once in each half. Note the second half starts with the participle, because a clitic can't open a clause.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "The conjunction for a REAL condition (it might happen) = ___",
      answers: ["ako"],
      hint: "three letters, never followed by bih",
      explanation: "ako + present → future I. Ako imam vremena, doći ću.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "»I'm sitting the exam tomorrow.« → Sutra ___ ispit.",
      answers: ["polažem", "polazem"],
      hint: "the process, not the result",
      explanation: "polažem — the imperfective. Položim would mean the pass itself.",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear the two roads side by side, then choose one real plan and one impossible wish.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "the minimal pair" },
        { emoji: "🎤", label: "One plan, one wish", hint: "ako… / da…" },
        { emoji: "🔗", label: "Flashbacks", hint: "U9 · U16" },
      ],
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Da imam vremena, došao bih.",
      explanation: "Da imam vremena, došao bih — if I had time, I'd come. (But I don't.)",
    },
    {
      id: "s20",
      type: "listen-type",
      tts: "Ako imam vremena, doći ću.",
      explanation: "Ako imam vremena, doći ću — if I have time, I'll come. Same six syllables of meaning, opposite worlds.",
    },
    {
      id: "s21",
      type: "speak",
      targetHr: "Ako imam vremena, učit ću hrvatski. Da imam više novca, upisao bih tečaj u Zagrebu.",
      targetEn: "say one real plan and one impossible wish — If I have time, I'll study Croatian. If I had more money, I'd enrol in a course in Zagreb.",
      phonetic: "AH-koh EE-mam VREH-meh-na, OO-cheet choo HR-vat-skee. dah EE-mam VEE-sheh NOV-tsa, oo-PEE-sa-oh beeh TEH-chai oo ZAH-greh-boo",
    },
    {
      id: "s22",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the halves you already owned",
      items: [
        {
          prompt: "U9 future I: »I'll come.«",
          options: ["Doći ću.", "Doćiću.", "Ću doći."],
          correctIndex: 0,
          explanation: "Two words, and ću can't open the clause — the same clitic law as bih.",
        },
        {
          prompt: "Listen — does he have the money?",
          tts: "Kad bih imao novca, upisao bih tečaj.",
          options: ["no — that's why it's the conditional", "yes, and he'll enrol", "yes, but he won't enrol"],
          correctIndex: 0,
          explanation: "The unreal pattern is Croatian's way of saying »but I don't«.",
        },
        {
          prompt: "U16 aspect: »Yesterday I sat the exam for three hours.«",
          options: ["Jučer sam polagao ispit tri sata.", "Jučer sam položio ispit tri sata.", "Jučer polažem ispit tri sata."],
          correctIndex: 0,
          explanation: "Duration → imperfective polagao. položio would seal it into a single completed pass.",
        },
      ],
    },
    {
      id: "s23",
      type: "recap",
      summary:
        "**REAL** — it might happen: **ako + present → future I**. *Ako imam vremena, doći ću.*\n\n**UNREAL** — it isn't so: **da + present → bih + participle** or **kad bih + participle → bih + participle**. *Da imam vremena, došao bih.* · *Kad bih imao vremena, došao bih.*\n\n**Never cross the halves**, and **never write ako + bih** — that is the one sentence shape this lesson exists to prevent.\n\n*da* here means **if**. The reported-speech *da* is a different animal, and it lives in Unit 21.\n\nWords tonight: ako, kad, ocjena, polagati, diploma, znanje, težak, lak.\n\nNext: what you'd do in someone else's place — four ways to give advice.",
      vocabIds: [
        "b1u18.ako", "b1u18.kad", "b1u18.ocjena", "b1u18.polagati",
        "b1u18.diploma", "b1u18.znanje", "b1u18.tezak", "b1u18.lak",
      ],
    },
  ],
  srsCloze: [
    { front: "___ imam vremena, doći ću. (it might happen)", answers: ["Ako", "ako"], back: "ako + present → future I. The real road.", tts: "Ako imam vremena, doći ću." },
    { front: "Da imam vremena, ___ bih.", answers: ["došao", "dosao", "došla", "dosla"], back: "Unreal → bih + l-participle.", tts: "Da imam vremena, došao bih." },
    { front: "kad bih + ___ (what follows?)", answers: ["particip", "l-particip", "participle", "l-participle"], back: "kad bih + l-participle — and the other half takes bih + participle too.", tts: "Kad bih imao vremena, došao bih." },
    { front: "✗ Ako bih imao vremena → ✓ ___", answers: ["Ako imam vremena", "Kad bih imao vremena", "ako imam vremena", "kad bih imao vremena"], back: "ako never takes bih. Either Ako imam (real) or Kad bih imao (unreal).", tts: "Ako imam vremena. Kad bih imao vremena." },
    { front: "to sit / take an exam (the process) = ___", answers: ["polagati"], back: "polagati, polažem. The pass itself is položiti.", tts: "Sutra polažem ispit." },
    { front: "grade / mark = ___", answers: ["ocjena"], back: "ocjena (f) — Ima odličnu ocjenu.", tts: "Ima odličnu ocjenu iz hrvatskog." },
    { front: "difficult / heavy = ___ (f: teška)", answers: ["težak", "tezak"], back: "težak — adverb teško.", tts: "Ovaj ispit je težak." },
    { front: "easy / light = ___ (f: laka)", answers: ["lak"], back: "lak — adverb lako.", tts: "Prvi predmet je bio lak." },
    { front: "knowledge = ___", answers: ["znanje"], back: "znanje (n).", tts: "Znanje jezika je važno." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian has two if-sentences: ako + present → future I for something that might still happen, and da + present / kad bih + participle → bih + participle for something that isn't so — and the halves must never be crossed.",
      exampleHr: "Ako imam vremena, doći ću. · Da imam vremena, došao bih.",
    },
    deepDive: [
      {
        title: "The two roads, side by side",
        body:
          "The whole lesson fits in one picture. On the left is a fork you can still walk down: the condition is open, so Croatian uses the plain present after *ako* and puts the future in the other half. On the right is a road with a barrier across it: the condition is closed, and the main half carries *bih* + participle to say so.\n\nEnglish marks the same difference with a tense shift (*if I have* → *if I had*); Croatian marks it with a **conjunction change**, which is why the first instinct — translating *had* — leads straight into the *ako bih* trap.",
        diagram: {
          kind: "contrast",
          left: {
            title: "REAL 🔀",
            emoji: "🔀",
            lines: [
              { hr: "ako + prezent", en: "the if-half" },
              { hr: "→ futur I", en: "the main half" },
              { hr: "Ako položim ispit, bit ću sretan.", en: "If I pass, I'll be happy." },
            ],
          },
          right: {
            title: "UNREAL 🚧",
            emoji: "🚧",
            lines: [
              { hr: "da + prezent · kad bih + particip", en: "the if-half" },
              { hr: "→ bih + particip", en: "the main half" },
              { hr: "Da imam vremena, došao bih.", en: "If I had time, I'd come." },
            ],
          },
        },
      },
      {
        title: "kad bih ⇄ da + present: the same sentence twice",
        body:
          "The unreal condition has two shapes and they are genuinely interchangeable:\n\n*Kad bih imao vremena, došao bih.*\n*Da imam vremena, došao bih.*\n\nSpoken Croatian leans on the *da* version because it is shorter — the if-half stays in the present and only the main half carries the conditional. The *kad bih* version puts *bih* in both halves and sounds a shade more deliberate, which is why you meet it in writing more often.\n\nWhat never varies is the main half: **bih + participle**, agreeing with the subject (*došao / došla / došli*).\n\nOne thing this lesson deliberately does *not* teach: *Kad **budem** imao vremena…* — a real future condition with a special future form. It is correct Croatian and it arrives in Unit 22. Until then, *ako* + present covers every real condition you need.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "kad bih + particip", emoji: "🚧", example: "Kad bih imao vremena…" },
            { label: "= da + prezent", emoji: "🔁", example: "Da imam vremena…" },
            { label: "→ main half: bih + particip", emoji: "🌤️", example: "…došao bih." },
          ],
        },
      },
      {
        title: "polagati ‖ položiti, and the exam vocabulary",
        body:
          "You have owned *položiti ispit* since Unit 12 as a chunk. Now it gets its partner. **polagati** is the imperfective — the sitting, the process, the three hours in the room: *Sutra polažem ispit.* **položiti** is the perfective — the result: *Položio sam!*\n\nIt is a stem-change pair (*polagati → polažem*, *položiti → položim*), the second machine from Unit 17, so nothing about it is new except the words.\n\nThe rest of the set is straightforward: **ocjena** is the mark you get (*odlična ocjena* — excellent), **diploma** is the degree you end with, **znanje** is what you actually keep, and **težak / lak** describe the exam on the way (*težak ispit*, *laka vježba*; adverbs *teško* and *lako*).",
        table: {
          caption: "The exam pair",
          headers: ["", "〰️ polagati", "✅ položiti"],
          rows: [
            ["meaning", "to sit / be taking an exam", "to pass an exam"],
            ["present", "polažem", "položim (not »now«!)"],
            ["past", "polagao / polagala sam", "položio / položila sam"],
            ["typical sentence", "Sutra polažem ispit.", "Položio sam ispit!"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ako bih imao vremena, došao bih.",
        right: "Kad bih imao vremena, došao bih. / Ako imam vremena, doći ću.",
        why: "ako never takes bih. Choose the road first, then the conjunction follows.",
      },
      {
        wrong: "Da imam vremena, doći ću.",
        right: "Da imam vremena, došao bih.",
        why: "The halves are crossed: da opens an unreal condition, so the main half must be bih + participle.",
      },
      {
        wrong: "Ako ću imati vremena, doći ću.",
        right: "Ako imam vremena, doći ću.",
        why: "The ako-half stays in the present. The future goes in the other half only.",
      },
      {
        wrong: "Ana bi došao.",
        right: "Ana bi došla.",
        why: "The participle still agrees, inside a condition just as anywhere else.",
      },
    ],
    memoryHooks: [
      "ako = the fork you can still take · da / kad bih = the road with the barrier.",
      "Croatian changes the CONJUNCTION where English changes the tense — so stop translating »had« and pick a road.",
      "bih in the if-half means bih in the main half too (kad bih…, …bih). One bih attracts the other.",
      "polagati is the three hours in the room; položiti is the moment you see the mark.",
    ],
    connects: [
      { label: "How bih is built (Unit 18 L1)", lessonId: "b1u18l1" },
      { label: "Future I — the real condition's other half (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Next: giving advice (Unit 18 L4)", lessonId: "b1u18l4" },
    ],
    selfCheck: [
      { q: "»If I have time, I'll come.«", a: "Ako imam vremena, doći ću. — present after ako, future in the main half." },
      { q: "»If I had time, I'd come.« — two ways.", a: "Da imam vremena, došao bih. / Kad bih imao vremena, došao bih." },
      { q: "Why is »Ako bih imao vremena« wrong?", a: "ako never combines with bih. Use ako + present, or switch to kad bih / da." },
      { q: "What does da mean at the start of a sentence in this lesson?", a: "»if« — the unreal one. The reported-speech da is Unit 21." },
      { q: "polagati or položiti — »Tomorrow I'm sitting the exam«?", a: "Sutra polažem ispit. (položiti is the passing, not the sitting.)" },
    ],
  },
};
