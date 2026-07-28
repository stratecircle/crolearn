import type { Lesson } from "@/types/content";

/**
 * A2 U14 L5 — Sretan rođendan! (invitations & wishes, unit review)
 * Spec: curriculum/A2/unit-14.md — integration: VOC + imperative + dates +
 * wish formulas. čestitati + DAT; ti/Vam here are CHUNKS (system = U15).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 */
export const a2u14l5: Lesson = {
  id: "a2u14l5",
  unitId: "a2u14",
  title: "Sretan rođendan!",
  titleEn: "Happy birthday! — wishes, invitations & review",
  grammarTags: ["wishes", "cestitati-dat", "vocative", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a2u14.cestitati", hr: "čestitati", en: "to congratulate (+ DAT)", pos: "verb", icon: "👏", exampleHr: "Čestitam ti rođendan!", exampleEn: "Happy birthday! (I congratulate you.)" },
    { id: "a2u14.pozivnica", hr: "pozivnica", en: "invitation (card)", pos: "noun", gender: "f", icon: "💌", exampleHr: "Tom piše pozivnice.", exampleEn: "Tom is writing the invitations." },
    { id: "a2u14.zelja", hr: "želja", en: "wish", pos: "noun", gender: "f", icon: "🌠", exampleHr: "Imam jednu želju.", exampleEn: "I have one wish." },
    { id: "a2u14.sreca", hr: "sreća", en: "luck / happiness", pos: "noun", gender: "f", icon: "🍀", exampleHr: "Želim ti puno sreće!", exampleEn: "I wish you lots of luck!" },
    { id: "a2u14.zivjeli", image: "/img/zivjeli.png", hr: "Živjeli!", en: "Cheers! (lit. may we live!)", pos: "phrase", icon: "🥂", exampleHr: "Živjeli!", exampleEn: "Cheers!", tags: ["chunk"] },
    { id: "a2u14.iznenadenje", hr: "iznenađenje", en: "surprise", pos: "noun", gender: "n", icon: "🎊", exampleHr: "Proslava je iznenađenje!", exampleEn: "The party is a surprise!" },
    { id: "a2u14.veseo", hr: "veseo", en: "cheerful (vesela, veselo)", pos: "adj", icon: "😄", exampleHr: "Marko je veseo.", exampleEn: "Marko is cheerful." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Sretan rođendan!",
      subtitle: "A pozivnica just arrived. Decode it — then write and say your own wishes.",
      emoji: "🥂",
      items: [
        { emoji: "🎁", label: "The wish formulas", hint: "Sretan! Sretna! Živjeli!" },
        { emoji: "💝", label: "čestitati + DAT", hint: "wishes go TO people" },
        { emoji: "💌", label: "Pozivnica anatomy", hint: "VOC + date + Dođi!" },
        { emoji: "🏔️", label: "Unit review", hint: "8 questions, L1–L4" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The wish system",
      subtitle: "Four formulas cover every Croatian celebration — if the adjective agrees.",
      emoji: "🎁",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "DAT receivers & puno + GEN" },
        { emoji: "🖼️", label: "Formula gallery", hint: "by occasion" },
        { emoji: "💌", label: "The pozivnica", hint: "read one apart" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: giving-to and lots-of",
      items: [
        {
          prompt: "U10 receivers: »Dajem ___ poklon.« (baka)",
          options: ["baki", "baku", "bako"],
          correctIndex: 0,
          explanation: "Receiver → DAT baki. Wishes are gifts too — same case, today.",
        },
        {
          prompt: "U13 quantities: »puno ___« (sreća — luck)",
          options: ["sreće", "sreća", "sreću"],
          correctIndex: 0,
          explanation: "puno + GEN: puno sreće — the heart of every Croatian wish.",
        },
        {
          prompt: "Listen (U10): what does she like?",
          tts: "Sviđa mi se poklon!",
          options: ["the present", "the party", "the cake"],
          correctIndex: 0,
          explanation: "sviđa mi se + NOM: the present pleases me.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The wishing words",
      vocabIds: [
        "a2u14.cestitati", "a2u14.pozivnica", "a2u14.zelja", "a2u14.sreca",
        "a2u14.zivjeli", "a2u14.iznenadenje", "a2u14.veseo",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The formula gallery — agreement does the work",
      body:
        "One adjective, four occasions — **sretan agrees with the thing you're wishing**:\n\n🎂 **Sretan rođendan!** (m) · 🎄 **Sretan Božić!** (m) · 🐣 **Sretan Uskrs!** (m) · 🎆 **Sretna Nova godina!** (f) · 🥂 **Živjeli!**\n\nTwo verbs deliver wishes, both to a DAT person (the U10 giving logic — ti/Vam are chunks for now):\n\n- **čestitati + DAT**: *Čestitam **ti** rođendan!* / *Čestitam **Vam**!*\n- **željeti + DAT + thing**: *Želim **ti** puno **sreće** i **zdravlja**!* (puno + GEN, U13!)",
      table: {
        caption: "Wish formulas by occasion",
        headers: ["occasion", "formula", "why that ending"],
        rows: [
          ["🎂 birthday", "Sretan rođendan!", "rođendan m → sretan"],
          ["🎄 Christmas", "Sretan Božić!", "Božić m → sretan"],
          ["🎆 New Year", "Sretna Nova godina!", "godina f → sretna"],
          ["🥂 a toast", "Živjeli!", "fixed chunk — cheers!"],
        ],
      },
      examples: [
        { hr: "Čestitam ti rođendan!", en: "Happy birthday! (I congratulate you on your birthday.)" },
        { hr: "Želim ti puno sreće i zdravlja!", en: "I wish you lots of luck and health!", highlight: { text: "sreće i zdravlja", caseId: "GEN" } },
        { hr: "Sretna Nova godina!", en: "Happy New Year!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Anatomy of a pozivnica",
      body:
        "Every invitation is this unit in four lines — read one apart:\n\nThe whole unit in one card: **vocative** opening (L1), **date in GEN** (L4), **imperative** (L2), **wish** (today).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "1 · VOC opening", emoji: "💗", example: "Draga Ana!" },
          { label: "2 · date in GEN", emoji: "🟢", example: "Proslava je petog svibnja u sedam sati." },
          { label: "3 · imperative", emoji: "❗", example: "Dođi i donesi glazbu!" },
          { label: "4 · wish closing", emoji: "🥂", example: "Želim ti puno sreće!" },
        ],
      },
      examples: [
        { hr: "Draga Ana! Proslava je petog svibnja.", en: "Dear Ana! The party is on May 5th." },
        { hr: "Dođi u sedam sati i donesi glazbu!", en: "Come at seven and bring music!" },
        { hr: "Proslava je iznenađenje — nemoj govoriti baki!", en: "The party is a surprise — don't tell grandma!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: which wish, which form?",
      items: [
        {
          prompt: "New Year's Eve, midnight. You say…",
          options: ["Sretna Nova godina!", "Sretan Nova godina!", "Sretno Nova godina!"],
          correctIndex: 0,
          explanation: "godina is feminine → Sretna.",
        },
        {
          prompt: "It's your friend's birthday:",
          options: ["Sretan rođendan!", "Sretna rođendan!", "Sretan rođendana!"],
          correctIndex: 0,
          explanation: "rođendan m → Sretan rođendan!",
        },
        {
          prompt: "Čestitam ___ rođendan! (to a friend)",
          options: ["ti", "te", "tebe? No — ti"],
          correctIndex: 0,
          explanation: "čestitati gives congratulations TO you → DAT ti (not ACC te).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Write your pozivnica",
      subtitle: "Fill the card, build the wish, then say it to baka's face.",
      emoji: "💌",
      items: [
        { emoji: "🧩", label: "Complete the card", hint: "VOC + date + Dođi + wish" },
        { emoji: "⌨️", label: "Two wishes typed", hint: "ti · Božić" },
        { emoji: "🎧", label: "Wish dictation", hint: "puno sreće i zdravlja" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ Ana! Moja proslava je ___ svibnja. (dragi, f · 5. → ordinal GEN) Dođi u sedam sati! Želim ti puno ___. (sreća)",
      blanks: [["Draga", "draga"], ["petog"], ["sreće", "srece"]],
      translation: "Dear Ana! My party is on May 5th. Come at seven! I wish you lots of luck.",
      explanation: "The four beats: draga + VOC-zone name, petog svibnja (GEN), imperative, puno sreće (GEN).",
    },
    {
      id: "s10",
      type: "type",
      prompt: "Wish it: “Happy Christmas!”",
      answers: ["Sretan Božić!", "Sretan Božić", "sretan Božić", "Sretan Bozic"],
      hint: "Božić is masculine",
      explanation: "Sretan Božić!",
    },
    {
      id: "s11",
      type: "type",
      prompt: "»Čestitam ___ rođendan!« (to a friend — the little DAT word)",
      answers: ["ti"],
      hint: "give TO — not te!",
      explanation: "Čestitam ti rođendan! — DAT ti.",
    },
    {
      id: "s21",
      type: "type",
      prompt: "Wish it: “Happy New Year!” (watch the agreement)",
      answers: ["Sretna Nova godina!", "Sretna Nova godina", "sretna Nova godina", "Sretna nova godina"],
      hint: "godina is feminine",
      explanation: "Sretna Nova godina! — feminine agreement.",
    },
    {
      id: "s12",
      type: "reorder",
      words: ["Želim", "ti", "puno", "sreće"],
      answers: ["Želim ti puno sreće!", "Želim ti puno sreće"],
      en: "I wish you lots of luck!",
      explanation: "verb + DAT ti + puno + GEN.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "Želim ti puno sreće i zdravlja!",
      explanation: "Želim ti puno sreće i zdravlja — lots of luck and health (both GEN after puno).",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Proslava je petog svibnja u sedam sati.",
      explanation: "Proslava je petog svibnja u sedam sati — the date from the pozivnica.",
    },
    {
      id: "s15",
      type: "speak",
      targetHr: "Bako, sretan rođendan! Želim ti puno sreće i zdravlja!",
      targetEn: "congratulate baka Marija out loud — Grandma, happy birthday! I wish you lots of luck and health!",
      phonetic: "BA-ko, SRE-tan RO-jen-dan",
    },
    {
      id: "s16",
      type: "quiz-set",
      review: true,
      title: "The story world celebrates",
      items: [
        {
          prompt: "Ana: »Marko, donesi tortu! Tom, pozovi susjede!« What is Ana doing?",
          options: [
            "giving party orders to Marko and Tom",
            "congratulating Marko and Tom",
            "inviting Marko and Tom",
          ],
          correctIndex: 0,
          explanation: "Two vocatives + two imperatives = party-prep captain Ana.",
        },
        {
          prompt: "Listen (U9 future): what does Tom promise?",
          tts: "Doći ću sigurno!",
          options: ["I'll definitely come", "I might come", "I can't come"],
          correctIndex: 0,
          explanation: "Doći ću — future I (U9); sigurno = for sure.",
        },
        {
          prompt: "Baka gets her gift: »Sviđa mi se poklon! Hvala ti!« She is…",
          options: ["pleased with the present", "asking for another present", "opening the invitation"],
          correctIndex: 0,
          explanation: "sviđa mi se (U10) + hvala ti — she loves it.",
        },
      ],
    },
    {
      id: "s17",
      type: "section",
      title: "Part 3 · The whole party — unit review",
      subtitle: "Eight questions across L1–L4. Story and test next.",
      emoji: "🏔️",
      items: [
        { emoji: "💗", label: "Vocative & imperative", hint: "L1–L2 sample" },
        { emoji: "🎂", label: "Recipes & dates", hint: "L3–L4 sample" },
      ],
    },
    {
      id: "s18",
      type: "quiz-set",
      title: "Review I — call & command (L1–L2)",
      items: [
        {
          prompt: "Ivan → call him:",
          options: ["Ivane!", "Ivanu!", "Ivan!"],
          correctIndex: 0,
          explanation: "VOC -e: Ivane!",
        },
        {
          prompt: "gospođa → call her:",
          options: ["gospođo!", "gospođa!", "gospođu!"],
          correctIndex: 0,
          explanation: "fem -a → -o: gospođo!",
        },
        {
          prompt: "doći, ti-command:",
          options: ["Dođi!", "Dojdi!", "Dođite!"],
          correctIndex: 0,
          explanation: "Dođi! (Dođite is Vi.)",
        },
        {
          prompt: "otvoriti, Vi-command:",
          options: ["Otvorite!", "Otvori!", "Otvorete!"],
          correctIndex: 0,
          explanation: "-ite for Vi: Otvorite!",
        },
      ],
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Review II — bake & date (L3–L4)",
      items: [
        {
          prompt: "Nemoj ___ tortu!",
          options: ["jesti", "jedi", "jedeš"],
          correctIndex: 0,
          explanation: "nemoj + infinitive.",
        },
        {
          prompt: "three eggs = tri ___",
          options: ["jaja", "jaje", "jajeva"],
          correctIndex: 0,
          explanation: "jaje → jaja.",
        },
        {
          prompt: "25.12. = ?",
          options: ["dvadeset petog prosinca", "dvadeset pet prosinac", "na dvadeset peti prosinac"],
          correctIndex: 0,
          explanation: "Dates = bare GEN.",
        },
        {
          prompt: "GEN of svibanj?",
          options: ["svibnja", "svibanja", "svibnje"],
          correctIndex: 0,
          explanation: "Fleeting a: svibnja.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The wish system**: *Sretan rođendan! Sretan Božić! Sretna Nova godina!* (agreement!) · *Živjeli!* — and wishes travel on the dative: *Čestitam **ti** rođendan! Želim **ti** puno **sreće i zdravlja**!* (puno + GEN).\n\n**The pozivnica** = the whole unit: VOC opening → date in GEN → imperative → wish.\n\nWords tonight: **čestitati, pozivnica, želja, sreća, Živjeli!, iznenađenje, veseo**.\n\nNext: the story — «Iznenađenje za baku Mariju» — then the unit test. (And U15 makes ti/mi/mu a SYSTEM.)",
      vocabIds: [
        "a2u14.cestitati", "a2u14.pozivnica", "a2u14.zelja", "a2u14.sreca",
        "a2u14.zivjeli", "a2u14.iznenadenje", "a2u14.veseo",
      ],
    },
  ],
  srsCloze: [
    { front: "Sretan ___! (Christmas)", answers: ["Božić", "Bozic"], back: "Sretan Božić! (m agreement)", tts: "Sretan Božić!" },
    { front: "Sretna ___ godina! (New Year)", answers: ["Nova", "nova"], back: "Sretna Nova godina! (f agreement)", tts: "Sretna Nova godina!" },
    { front: "Čestitam ___ rođendan! (ti or te?)", answers: ["ti"], back: "čestitati + DAT: čestitam ti.", tts: "Čestitam ti rođendan!" },
    { front: "Želim ti puno ___! (sreća)", answers: ["sreće", "srece"], back: "puno + GEN: puno sreće.", tts: "Želim ti puno sreće!" },
    { front: "Cheers! = ___!", answers: ["Živjeli", "živjeli", "Zivjeli"], back: "Živjeli! — the toast.", tts: "Živjeli!" },
    { front: "surprise = ___ (n)", answers: ["iznenađenje", "iznenadenje"], back: "iznenađenje (Proslava je iznenađenje!)", tts: "Proslava je iznenađenje!" },
    { front: "invitation card = ___ (f)", answers: ["pozivnica"], back: "pozivnica (Tom piše pozivnice.)", tts: "Tom piše pozivnice." },
  ],
  notes: {
    inOneSentence: {
      en: "Wishes agree with what you wish (Sretan Božić, Sretna Nova godina) and travel to a dative person — čestitam ti, želim ti puno sreće (GEN after puno).",
      exampleHr: "Bako, sretan rođendan! Želim ti puno sreće i zdravlja!",
    },
    deepDive: [
      {
        title: "The wish grammar, unpacked",
        body:
          "Every wish is a mini giving-sentence (the U10 valence logic):\n\n- ***čestitam* + DAT (person) + ACC (occasion)**: *Čestitam ti rođendan.* — I congratulate to-you the birthday\n- ***želim* + DAT (person) + thing**: *Želim ti sreću* (one luck, ACC) or — far more common — *Želim ti **puno sreće*** (lots, so puno + GEN, U13)\n\n**ti** (to a friend) and **Vam** (polite) are chunks for now — Unit 15 gives you the entire clitic family (mi, ti, mu, joj, nam, vam, im) as a system.",
        table: {
          caption: "The wish machine",
          headers: ["verb", "to whom (DAT)", "what"],
          rows: [
            ["Čestitam", "ti / Vam", "rođendan (ACC)"],
            ["Želim", "ti / Vam", "puno sreće i zdravlja (puno + GEN)"],
            ["Sretan/Sretna …!", "—", "just agree with the occasion"],
          ],
        },
      },
      {
        title: "Agreement gallery — the Sretan family",
        body:
          "sretan behaves like every adjective you've met since U2 — it just agrees:\n\n- *Sretan rođendan / Božić / Uskrs / put!* (m — sretan put = bon voyage!)\n- *Sretna Nova godina!* (f)\n- *Sretno ljeto!* (n)\n\nThe toast **Živjeli!** is a fossil — literally \"may we live!\" — and never changes.",
        diagram: {
          kind: "contrast",
          left: { title: "m — Sretan", emoji: "🎄", lines: [{ hr: "Sretan Božić! · Sretan rođendan!", en: "Merry Christmas! · Happy birthday!" }] },
          right: { title: "f — Sretna", emoji: "🎆", lines: [{ hr: "Sretna Nova godina!", en: "Happy New Year!" }] },
        },
      },
      {
        title: "The pozivnica — a four-line exam",
        body:
          "Reading or writing an invitation exercises all five lessons at once:\n\n*Draga bako!* (VOC + dragi) → *Proslava je petog svibnja u sedam sati.* (date GEN + time) → *Dođi i donesi kolače!* (imperatives) → *Bit će iznenađenje — nemoj nikome govoriti!* … well, *nikome* is Unit 15. For now: *nemoj govoriti baki!* Close with *Želim ti puno sreće!*",
      },
    ],
    commonMistakes: [
      {
        wrong: "Sretan Nova godina!",
        right: "Sretna Nova godina!",
        why: "godina is feminine — the adjective must agree.",
      },
      {
        wrong: "Čestitam te!",
        right: "Čestitam ti!",
        why: "čestitati gives congratulations TO someone → DAT ti, not ACC te.",
      },
      {
        wrong: "Želim ti puno sreća.",
        right: "Želim ti puno sreće.",
        why: "puno demands the genitive: sreće.",
      },
      {
        wrong: "Živjele! (toasting a mixed group)",
        right: "Živjeli!",
        why: "The toast is a fixed chunk — Živjeli! covers everyone.",
      },
    ],
    memoryHooks: [
      "A wish is a gift: it goes TO someone — čestitam TI, želim TI (dative, U10 logic).",
      "puno sreće — luck comes by the kilo, so it's genitive like sira.",
      "Sretan agrees like any adjective: SretAN Božić, SretNA godina, SretNO ljeto.",
      "Živjeli = 'may we live!' — the whole toast is one fossilized cheer.",
    ],
    connects: [
      { label: "DAT receivers — the giving case (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "puno + GEN — the quantity machine (Unit 13 L2)", lessonId: "a2u13l2" },
      { label: "Next unit: the clitic-pronoun system (Unit 15 L1)", lessonId: "a2u15l1" },
    ],
    selfCheck: [
      { q: "Wish someone a happy New Year.", a: "Sretna Nova godina!" },
      { q: "Why ti and not te in »Čestitam ti«?", a: "čestitati takes a DAT person — congratulations go TO you." },
      { q: "»I wish you lots of luck and health« = ?", a: "Želim ti puno sreće i zdravlja!" },
      { q: "The four beats of a pozivnica?", a: "VOC opening, date in GEN, imperative, wish." },
      { q: "The toast?", a: "Živjeli!" },
    ],
  },
};
