import type { Lesson } from "@/types/content";

/**
 * A2 U14 L1 — Ivane! Bako! (the vocative — case #7 of 7)
 * Spec: curriculum/A2/unit-14.md · grammar-reference §3 (VOC rows).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * gospođica added per the 2026-07-23 spec correction (6-word floor + the -ice
 * showcase). Recycled: rođendan/gost (U8), susjed (U10), gospodin/gospođa/
 * prijatelj/prijateljica (U1), baka (U3). Imperatives (dođi!) deliberately
 * absent — that's L2; all example commands here are statements or questions.
 */
export const a2u14l1: Lesson = {
  id: "a2u14l1",
  unitId: "a2u14",
  title: "Ivane! Bako!",
  titleEn: "The vocative — the calling case",
  grammarTags: ["vocative", "register"],
  estMinutes: 18,
  vocab: [
    { id: "a2u14.proslava", image: "/img/proslava.png", hr: "proslava", en: "celebration / party", pos: "noun", gender: "f", icon: "🎉", exampleHr: "Proslava je u subotu.", exampleEn: "The party is on Saturday." },
    { id: "a2u14.slaviti", image: "/img/slaviti.png", hr: "slaviti", en: "to celebrate (slavim)", pos: "verb", icon: "🥳", exampleHr: "Slavimo rođendan.", exampleEn: "We're celebrating a birthday." },
    { id: "a2u14.dragi", image: "/img/dragi.png", hr: "dragi", en: "dear (dragi m / draga f)", pos: "adj", icon: "💌", exampleHr: "Draga bako, kako si?", exampleEn: "Dear grandma, how are you?" },
    { id: "a2u14.momak", image: "/img/momak.png", hr: "momak", en: "young man (GEN momka)", pos: "noun", gender: "m", icon: "🧑", exampleHr: "Ivan je dobar momak.", exampleEn: "Ivan is a good guy." },
    { id: "a2u14.drustvo", image: "/img/drustvo.png", hr: "društvo", en: "company / group of friends", pos: "noun", gender: "n", icon: "👥", exampleHr: "Imamo dobro društvo.", exampleEn: "We have good company." },
    { id: "a2u14.gospodica", image: "/img/gospodica.png", hr: "gospođica", en: "Miss / young lady", pos: "noun", gender: "f", icon: "👩", exampleHr: "Gospođica Kovač je učiteljica.", exampleEn: "Miss Kovač is a teacher." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Ivane! Bako!",
      subtitle: "The last case of Croatian — and it's the friendliest one.",
      emoji: "📣",
      items: [
        { emoji: "💗", label: "Case #7: vocative", hint: "for people you talk TO" },
        { emoji: "🔤", label: "-e, -u, -o, -ice", hint: "four little endings" },
        { emoji: "🏷️", label: "Names behave", hint: "Ana! Marko! (unchanged)" },
        { emoji: "🏆", label: "All 7 collected", hint: "the case table is FULL" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The calling case",
      subtitle: "Seven units of talking ABOUT people. Today you finally call them.",
      emoji: "💗",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "register & greetings" },
        { emoji: "🎉", label: "Party people", hint: "6 new words" },
        { emoji: "📊", label: "The VOC table", hint: "pink endings" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the people-talk you already own",
      items: [
        {
          prompt: "U1 register: talking to Mr. Horvat (an older stranger), you use…",
          options: ["Vi", "ti", "oni"],
          correctIndex: 0,
          explanation: "Formal register = Vi. Today you'll learn to CALL him too: gospodine!",
        },
        {
          prompt: "Listen (U1): what does she say?",
          tts: "Drago mi je!",
          options: ["Pleased to meet you", "I'm tired", "See you soon"],
          correctIndex: 0,
          explanation: "drago mi je — it is dear to me. Today drag becomes an adjective: dragi/draga.",
        },
        {
          prompt: "U8 flashback: »Ana je imala rođendan.« means…",
          options: ["Ana had a birthday", "Ana is having a birthday", "Ana forgot a birthday"],
          correctIndex: 0,
          explanation: "imala je — perfekt. This unit throws her the party.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the party people",
      vocabIds: [
        "a2u14.proslava", "a2u14.slaviti", "a2u14.dragi",
        "a2u14.momak", "a2u14.drustvo", "a2u14.gospodica",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Case #7: the vocative — pink is for people you talk TO",
      body:
        "Every case so far talks ABOUT things. The **vocative** talks **TO** people:\n\n- masculine consonant → **-e**: *Ivan → **Ivane!***, *gospodin → **gospodine!***, *susjed → **susjede!***\n- masculine palatal (j, lj, nj, š…) → **-u**: *prijatelj → **prijatelju!***\n- **k/g mutate**: *momak → **momče!***, *Bog → **Bože!***\n- feminine -a → **-o**: *žena → **ženo!***, *baka → **bako!***, *gospođa → **gospođo!***\n- feminine -ica → **-ice**: *gospođice!*, *prijateljice!*",
      table: {
        caption: "VOC endings",
        headers: ["type", "NOM", "VOC"],
        colCase: [null, "NOM", "VOC"],
        rows: [
          ["masc consonant", "Ivan · gospodin · susjed", "Ivane! · gospodine! · susjede!"],
          ["masc palatal", "prijatelj", "prijatelju!"],
          ["masc k/g → č/ž", "momak · Bog", "momče! · Bože!"],
          ["fem -a", "žena · baka · gospođa", "ženo! · bako! · gospođo!"],
          ["fem -ica", "gospođica · prijateljica", "gospođice! · prijateljice!"],
        ],
      },
      diagram: {
        kind: "usage-map",
        caseId: "VOC",
        boxes: [
          { label: "calling someone", examples: [{ hr: "Ivane, kava je tu!", en: "Ivan, the coffee's here!" }] },
          { label: "greeting", examples: [{ hr: "Dobar dan, susjede!", en: "Good day, neighbour!" }] },
          { label: "letters & messages", examples: [{ hr: "Draga bako, kako si?", en: "Dear grandma, how are you?" }] },
          { label: "wishes (L5!)", examples: [{ hr: "Bako, sretan rođendan!", en: "Grandma, happy birthday!" }] },
        ],
      },
      examples: [
        { hr: "Ivane, kava je tu!", en: "Ivan, the coffee's here!", highlight: { text: "Ivane", caseId: "VOC" } },
        { hr: "Dobar dan, susjede!", en: "Good day, neighbour!", highlight: { text: "susjede", caseId: "VOC" } },
        { hr: "Bako, kako si?", en: "Grandma, how are you?", highlight: { text: "Bako", caseId: "VOC" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Names — and the full collection",
      body:
        "Names are relaxed:\n\n- **-a names usually keep NOM**: *Ana!* (though *Ano!* exists)\n- **-o names and foreign names don't change**: *Marko! Tom!*\n- **surnames stay put**: *gospodine Horvat!* (not Horvate)\n\nLetter openings pair **dragi/draga + VOC**: *Draga bako, … · Dragi Ivane, …*\n\n🏆 **That's all SEVEN cases collected** — NOM ACC LOC GEN DAT INS VOC. The Croatian case table is complete!",
      diagram: {
        kind: "callout",
        tone: "success",
        title: "All 7 cases collected!",
        text: "NOM (who) · ACC (whom) · LOC (where) · GEN (of) · DAT (to whom) · INS (with) · VOC (hey you!) — every ending from here on is review.",
      },
      examples: [
        { hr: "Ana, gdje si?", en: "Ana, where are you?", note: "-a names usually stay NOM" },
        { hr: "Marko, kava je tu!", en: "Marko, the coffee's here!", note: "-o names never change" },
        { hr: "Dragi Ivane, kako si?", en: "Dear Ivan, how are you?", note: "the letter opening", highlight: { text: "Ivane", caseId: "VOC" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: call them",
      items: [
        {
          prompt: "gospodin → ?",
          options: ["gospodine!", "gospodinu!", "gospodino!"],
          correctIndex: 0,
          explanation: "Masculine consonant → -e: gospodine!",
        },
        {
          prompt: "baka → ?",
          options: ["bako!", "bake!", "baki!"],
          correctIndex: 0,
          explanation: "Feminine -a → -o: bako!",
        },
        {
          prompt: "prijatelj → ?",
          options: ["prijatelju!", "prijatelje!", "prijatelja!"],
          correctIndex: 0,
          explanation: "Palatal lj → -u: prijatelju!",
        },
        {
          prompt: "momak → ?",
          options: ["momče!", "momake!", "momku!"],
          correctIndex: 0,
          explanation: "k mutates to č: momče! (like Bog → Bože)",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Call the whole cast",
      subtitle: "Type it, match it, fill it — everyone gets called today.",
      emoji: "🗣️",
      items: [
        { emoji: "⌨️", label: "Call three people", hint: "Ivane! Momče! Bako!" },
        { emoji: "🧩", label: "NOM ↔ VOC pairs", hint: "match them up" },
        { emoji: "✏️", label: "Greetings & letters", hint: "susjede · draga bako" },
      ],
    },
    {
      id: "s09",
      type: "type",
      prompt: "Call Ivan: »___, kava je tu!«",
      answers: ["Ivane"],
      hint: "masculine consonant → -e",
      explanation: "Ivane! — the vocative -e.",
    },
    {
      id: "s10",
      type: "type",
      prompt: "Call the young man (momak): »___!«",
      answers: ["Momče", "momče", "Momce"],
      hint: "the k mutates…",
      explanation: "Momče! — k → č before the vocative -e.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "Call grandma: »___, kako si?«",
      answers: ["Bako", "bako"],
      hint: "feminine -a → -o",
      explanation: "Bako, kako si?",
    },
    {
      id: "s12",
      type: "match",
      prompt: "Match the name to its calling form",
      pairs: [
        { a: "gospodin", b: "gospodine!" },
        { a: "gospođa", b: "gospođo!" },
        { a: "gospođica", b: "gospođice!" },
        { a: "prijatelj", b: "prijatelju!" },
        { a: "sestra", b: "sestro!" },
      ],
    },
    {
      id: "s13",
      type: "fill",
      text: "Dobar dan, ___! (susjed)",
      blanks: [["susjede"]],
      translation: "Good day, neighbour!",
      wordBank: ["susjede", "susjedu", "susjed"],
      explanation: "Calling him → VOC -e: susjede! (susjedu is DAT — giving TO him.)",
    },
    {
      id: "s14",
      type: "fill",
      text: "Draga ___, kako si? (baka)",
      blanks: [["bako"]],
      translation: "Dear grandma, how are you?",
      wordBank: ["bako", "baka", "baki"],
      explanation: "The letter opening: draga + VOC bako.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "Hear the calls, then call the cast yourself.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "Ivane · bako" },
        { emoji: "🎤", label: "Your turn to call", hint: "Bako, kako si?" },
        { emoji: "🔗", label: "DAT vs VOC", hint: "-u gives, -e calls" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ivane, kava je tu!",
      explanation: "Ivane, kava je tu! — Ivan, the coffee's here!",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Bako, kako si?",
      explanation: "Bako, kako si? — Grandma, how are you?",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Bako, kako si?",
      targetEn: "call two cast members aloud — Grandma, how are you? (then try: Ivane, kava je tu!)",
      phonetic: "BA-ko, KA-ko see",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: one neighbour, two cases",
      items: [
        {
          prompt: "Which sentence talks TO the neighbour?",
          options: [
            "Susjede, dobar dan!",
            "Susjedu dajem poklon.",
            "Susjed je dobar momak.",
          ],
          correctIndex: 0,
          explanation: "VOC -e calls him; DAT -u (U10) gives TO him; NOM talks about him.",
        },
        {
          prompt: "Greet Mrs. Kovač politely:",
          options: [
            "Dobar dan, gospođo Kovač!",
            "Dobar dan, gospođa Kovač!",
            "Dobar dan, gospođu Kovač!",
          ],
          correctIndex: 0,
          explanation: "gospođa → gospođo (VOC); the surname stays put.",
        },
        {
          prompt: "Listen (U9 + U8): where are they celebrating?",
          tts: "Slavimo rođendan kod bake.",
          options: ["at grandma's", "at a restaurant", "at the neighbour's"],
          correctIndex: 0,
          explanation: "kod + GEN (U9): kod bake — at grandma's place.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Case #7, the vocative — for people you talk TO**: masc **-e** (*Ivane! susjede!*), palatals **-u** (*prijatelju!*), k/g mutate (*momče! Bože!*), fem **-o** (*bako! gospođo!*), -ica → **-ice** (*gospođice!*).\n\n**Names**: -a names usually stay NOM (*Ana!*), -o and foreign names never change (*Marko! Tom!*), surnames stay put.\n\n🏆 **All 7 cases collected.** Letters open with *Dragi Ivane, / Draga bako,*.\n\nWords tonight: **proslava, slaviti, dragi, momak, društvo, gospođica**.\n\nNext lesson: you learn to boss people around — *Dođi na proslavu!*",
      vocabIds: [
        "a2u14.proslava", "a2u14.slaviti", "a2u14.dragi",
        "a2u14.momak", "a2u14.drustvo", "a2u14.gospodica",
      ],
    },
  ],
  srsCloze: [
    { front: "Ivan → »___, kava je tu!«", answers: ["Ivane"], back: "Ivane! — masc consonant takes VOC -e.", tts: "Ivane, kava je tu!" },
    { front: "baka → »___, kako si?«", answers: ["Bako", "bako"], back: "Bako! — fem -a takes VOC -o.", tts: "Bako, kako si?" },
    { front: "gospođa → »Dobar dan, ___!«", answers: ["gospođo"], back: "gospođo! — fem -a → -o.", tts: "Dobar dan, gospođo!" },
    { front: "momak → »___!« (the k mutates)", answers: ["Momče", "momče", "Momce"], back: "Momče! — k → č + -e.", tts: "Momče!" },
    { front: "prijatelj → »___!« (palatal stem)", answers: ["Prijatelju", "prijatelju"], back: "prijatelju! — palatals take -u.", tts: "Prijatelju!" },
    { front: "celebration / party = ___ (f)", answers: ["proslava"], back: "proslava (Proslava je u subotu.)", tts: "Proslava je u subotu." },
    { front: "to celebrate = ___ (slavim)", answers: ["slaviti"], back: "slaviti — Slavimo rođendan.", tts: "Slavimo rođendan." },
  ],
  notes: {
    inOneSentence: {
      en: "The vocative — the case for calling people — ends in -e for most masculines (Ivane!), -u after palatals (prijatelju!), -o for feminine -a nouns (bako!), and -ice for -ica nouns (gospođice!); most names stay unchanged.",
      exampleHr: "Ivane, kava je tu! · Dobar dan, susjede! · Draga bako, kako si?",
    },
    deepDive: [
      {
        title: "The master table — all seven cases",
        body:
          "With the vocative in place, the collection is complete. One masculine and one feminine, all the way down:",
        table: {
          caption: "grad (m) and žena (f), all 7 cases (sg)",
          headers: ["case", "grad", "žena", "job"],
          rows: [
            ["NOM", "grad", "žena", "subject"],
            ["ACC", "grad", "ženu", "object / direction"],
            ["LOC", "gradu", "ženi", "location (u/na/o)"],
            ["GEN", "grada", "žene", "of / quantities / od-do"],
            ["DAT", "gradu", "ženi", "receiver / towards"],
            ["INS", "gradom", "ženom", "with / by means of"],
            ["VOC", "grade!", "ženo!", "calling"],
          ],
        },
      },
      {
        title: "The mutation corner: momče, Bože",
        body:
          "Before the vocative **-e**, velars soften: **k → č** (*momak → momče* — the fleeting a leaves first, as always), **g → ž** (*Bog → Bože* — you'll hear *Bože moj!* = my God! everywhere).\n\nPalatal stems dodge the issue by taking **-u** instead: *prijatelju!, mužu!* — no mutation needed.",
      },
      {
        title: "When Croatians DON'T use the vocative",
        body:
          "Real-life caveats:\n\n- **-a personal names usually keep NOM**: *Ana! Marija!* (*Ano!* exists but sounds rustic for most names — *mamo!* and *bako!* however are universal)\n- **-o/-e names never change**: *Marko! Tom!*\n- **surnames stay NOM**: *gospodine Horvat!* — only the title declines\n- colloquially you'll HEAR plain NOM as a call (*Ivan, dođi!*) — understand it, but write the vocative.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ivan, kava je tu!",
        right: "Ivane, kava je tu!",
        why: "Calling a masculine name takes VOC -e (colloquial NOM is heard, but write the vocative).",
      },
      {
        wrong: "Dobar dan, gospodine Horvate!",
        right: "Dobar dan, gospodine Horvat!",
        why: "Only the title takes VOC — surnames stay in NOM.",
      },
      {
        wrong: "Bako! → written to grandma as: Draga baka,",
        right: "Draga bako,",
        why: "Letter openings use the vocative too — draga + bako.",
      },
      {
        wrong: "Momake!",
        right: "Momče!",
        why: "momak drops the fleeting a AND mutates k → č before -e.",
      },
    ],
    memoryHooks: [
      "Pink = people you're talking TO. Every other case talks ABOUT.",
      "-e for the men, -o for the women: Ivane! ženo!",
      "Bože moj! — you already know a vocative from every Croatian film ever.",
      "DAT -u gives TO him, VOC -e calls him: susjedu (here's a gift) vs susjede! (hello!).",
    ],
    connects: [
      { label: "ti/Vi register & gospodin/gospođa (Unit 1 L5)", lessonId: "a1u1l5" },
      { label: "DAT receivers — the contrast ending (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "Next: the imperative — Dođi! (Unit 14 L2)", lessonId: "a2u14l2" },
    ],
    selfCheck: [
      { q: "Call: Ivan, baka, prijatelj?", a: "Ivane! Bako! Prijatelju!" },
      { q: "Why momče and not momake?", a: "The fleeting a drops and k mutates to č before VOC -e." },
      { q: "How do you address Mrs. Kovač?", a: "Gospođo Kovač! (title declines, surname stays)" },
      { q: "Do Ana and Marko change when called?", a: "Usually not — Ana! Marko! (-a names may take Ano!, -o names never change)." },
      { q: "Open a letter to your friend Ivan.", a: "Dragi Ivane, …" },
    ],
  },
};
