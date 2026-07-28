import type { Lesson } from "@/types/content";

/**
 * A2 U13 L2 — Koliko? (quantities + numbers with GEN pl)
 * Spec: curriculum/A2/unit-13.md · grammar-reference §13.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The U7 fixed counting pattern, now fully explained: 1 → NOM sg, 2–4 → GEN sg,
 * 5+ → GEN pl, 21+ by last digit. Recycled: pas/mačka/ptica (U3), riba (U4),
 * puno (U7), malo (U2), numbers & prices (U2/U7), otok (U9). ovca and medvjed
 * added per the 2026-07-23 spec correction (6-word floor / story connection).
 */
export const a2u13l2: Lesson = {
  id: "a2u13l2",
  unitId: "a2u13",
  title: "Koliko?",
  titleEn: "How many? — the whole counting system",
  grammarTags: ["number-government", "gen-plural", "quantity-words"],
  estMinutes: 18,
  vocab: [
    { id: "a2u13.zivotinja", image: "/img/zivotinja.png", hr: "životinja", en: "animal", pos: "noun", gender: "f", icon: "🐾", exampleHr: "U šumi ima puno životinja.", exampleEn: "There are a lot of animals in the forest." },
    { id: "a2u13.konj", image: "/img/konj.png", hr: "konj", en: "horse", pos: "noun", gender: "m", icon: "🐴", exampleHr: "Konj je velik i brz.", exampleEn: "The horse is big and fast." },
    { id: "a2u13.krava", image: "/img/krava.png", hr: "krava", en: "cow", pos: "noun", gender: "f", icon: "🐄", exampleHr: "Krava je na polju.", exampleEn: "The cow is in the field." },
    { id: "a2u13.ovca", image: "/img/ovca.png", hr: "ovca", en: "sheep (GEN pl ovaca!)", pos: "noun", gender: "f", icon: "🐑", exampleHr: "Baka ima pet ovaca.", exampleEn: "Grandma has five sheep." },
    { id: "a2u13.medvjed", image: "/img/medvjed.png", hr: "medvjed", en: "bear", pos: "noun", gender: "m", icon: "🐻", exampleHr: "Medvjed živi u šumi.", exampleEn: "The bear lives in the forest." },
    { id: "a2u13.nekoliko", image: "/img/nekoliko.png", hr: "nekoliko", en: "a few / several (+ GEN pl)", pos: "adv", icon: "🔢", exampleHr: "Baka ima nekoliko ovaca.", exampleEn: "Grandma has a few sheep." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Koliko?",
      subtitle: "How many islands does Croatia have? Over a thousand — say it right.",
      emoji: "🔢",
      items: [
        { emoji: "🌳", label: "The bracket", hint: "1 · 2–4 · 5+" },
        { emoji: "🐄", label: "Farm & forest", hint: "konj, krava, ovca, medvjed" },
        { emoji: "⚖️", label: "puno / malo / nekoliko", hint: "all take GEN pl" },
        { emoji: "🎤", label: "Your pets, counted", hint: "Imam dva psa…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The counting bracket",
      subtitle: "You've SAID pet kuna-style phrases since Unit 7. Today you see the machine.",
      emoji: "🌳",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "numbers & yesterday's -a" },
        { emoji: "📐", label: "1 · 2–4 · 5+", hint: "three branches, three forms" },
        { emoji: "🐾", label: "New animals", hint: "to count with" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: numbers you own, endings from yesterday",
      items: [
        {
          prompt: "Listen (U6): what did you hear?",
          tts: "Imam dvadeset godina.",
          options: ["I am twenty years old", "I have twenty kuna", "It's twenty o'clock"],
          correctIndex: 0,
          explanation: "Imam dvadeset godina — literally \"I have twenty of years\": GEN plural, today's machine!",
        },
        {
          prompt: "Unit 7 prices: »Kruh košta dva ___.« (euro)",
          options: ["eura", "euro", "eurima"],
          correctIndex: 0,
          explanation: "dva + GEN sg: dva eura. (Why singular after 2? Today explains.)",
        },
        {
          prompt: "Yesterday: »U parku nema ___.« (pas — plural)",
          options: ["pasa", "psa", "pse"],
          correctIndex: 0,
          explanation: "GEN pl pasa — the returned a. It's about to meet the numbers.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the animals (and a counter word)",
      vocabIds: [
        "a2u13.zivotinja", "a2u13.konj", "a2u13.krava",
        "a2u13.ovca", "a2u13.medvjed", "a2u13.nekoliko",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The bracket: 1 · 2–4 · 5+",
      body:
        "Croatian numbers pick the noun's form — always the same three branches:\n\n1. **1** agrees like an adjective: *jedan pas, jedna krava, jedno jezero*\n2. **2–4** take **GEN singular**: *dva psa, tri konja, četiri jezera* — and two is gendered: **dva** (m/n) / **dvije** (f): *dvije krave*\n3. **5+** (and all of 11–20) take **GEN plural**: *pet pasa, šest krava, jedanaest studenata*\n\n**Compound numbers follow their LAST digit**: *dvadeset jedan pas* (like 1) · *dvadeset dva psa* (like 2) · *dvadeset pet pasa* (like 5).",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "1 — jedan / jedna / jedno", rule: "NOM sg (agrees)", example: "jedan pas · jedna krava", caseId: "NOM" },
          { label: "2–4 — dva/dvije, tri, četiri", rule: "GEN singular", example: "dva psa · dvije krave · tri konja", caseId: "GEN" },
          { label: "5+ — pet, šest… (and 11–20)", rule: "GEN plural", example: "pet pasa · šest krava · deset ovaca", caseId: "GEN" },
          { label: "21, 32, 101… — last digit rules", rule: "follow the final digit", example: "dvadeset jedan pas · dvadeset dva psa" },
        ],
      },
      examples: [
        { hr: "Na plaži ima puno ljudi.", en: "There are a lot of people on the beach.", highlight: { text: "ljudi", caseId: "GEN" } },
        { hr: "Baka Marija ima dva psa i pet mačaka.", en: "Grandma Marija has two dogs and five cats.", highlight: { text: "mačaka", caseId: "GEN" } },
        { hr: "Koliko otoka ima Hrvatska?", en: "How many islands does Croatia have?", note: "over a thousand!", highlight: { text: "otoka", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: which branch?",
      items: [
        {
          prompt: "dva ___ (pas)",
          options: ["psa", "pasa", "pas"],
          correctIndex: 0,
          explanation: "2–4 → GEN singular: dva psa.",
        },
        {
          prompt: "pet ___ (pas)",
          options: ["pasa", "psa", "pse"],
          correctIndex: 0,
          explanation: "5+ → GEN plural: pet pasa.",
        },
        {
          prompt: "dvadeset jedan ___ (pas)",
          options: ["pas", "pasa", "psa"],
          correctIndex: 0,
          explanation: "Last digit is 1 → NOM sg: dvadeset jedan pas.",
        },
        {
          prompt: "dvije ___ (krava)",
          options: ["krave", "krava", "kravu"],
          correctIndex: 0,
          explanation: "2 feminine = dvije + GEN sg: dvije krave.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "puno, malo, nekoliko, koliko — the quantity family",
      body:
        "Quantity words work exactly like 5+ — they demand **GEN plural**:\n\n- **puno** (a lot of) → *puno životinja*\n- **malo** (few) → *malo turista*? No — you know *malo* with singulars too: *malo mlijeka* (a little milk, U7). With PLURALS it means \"few\": *malo ljudi*\n- **nekoliko** (a few, several) → *nekoliko ovaca*\n- **koliko?** (how many?) → *Koliko konja imaš?*",
      table: {
        caption: "Quantity word + GEN plural",
        headers: ["word", "meaning", "example"],
        colCase: [null, null, "GEN"],
        rows: [
          ["puno", "a lot of", "puno životinja"],
          ["malo", "few / a little", "malo ljudi · malo mlijeka (sg = mass)"],
          ["nekoliko", "a few, several", "nekoliko ovaca"],
          ["koliko?", "how many?", "Koliko konja imaš?"],
        ],
      },
      examples: [
        { hr: "U šumi ima puno životinja.", en: "There are a lot of animals in the forest.", highlight: { text: "životinja", caseId: "GEN" } },
        { hr: "U šumi ima medvjeda!", en: "There are bears in the forest!", note: "a preview of this unit's story…", highlight: { text: "medvjeda", caseId: "GEN" } },
        { hr: "Na polju ima nekoliko krava.", en: "There are a few cows in the field.", highlight: { text: "krava", caseId: "GEN" } },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Count everything",
      subtitle: "Horses, cows, sheep — your hands do the counting now.",
      emoji: "🐄",
      items: [
        { emoji: "⌨️", label: "Type the counts", hint: "tri konja, deset krava" },
        { emoji: "✏️", label: "Fill the farm", hint: "puno + GEN pl" },
        { emoji: "🔀", label: "Build a beach line", hint: "puno ljudi" },
      ],
    },
    {
      id: "s09",
      type: "type",
      prompt: "three horses = tri ___",
      answers: ["konja"],
      hint: "2–4 → GEN singular",
      explanation: "tri konja — 2–4 take GEN sg.",
    },
    {
      id: "s10",
      type: "type",
      prompt: "ten cows = deset ___",
      answers: ["krava"],
      hint: "5+ → GEN plural",
      explanation: "deset krava — 5+ takes GEN pl (bare -a).",
    },
    {
      id: "s11",
      type: "fill",
      text: "U šumi ima puno ___. (ptica)",
      blanks: [["ptica"]],
      translation: "There are a lot of birds in the forest.",
      wordBank: ["ptica", "ptice", "pticu"],
      explanation: "puno + GEN pl: ptica.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Baka ima nekoliko ___. (ovca — mind the cluster!)",
      blanks: [["ovaca"]],
      translation: "Grandma has a few sheep.",
      wordBank: ["ovaca", "ovce", "ovca"],
      explanation: "nekoliko + GEN pl with the inserted a: ovaca (like mačaka).",
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Na", "plaži", "ima", "puno", "ljudi"],
      answers: ["Na plaži ima puno ljudi.", "Na plaži ima puno ljudi"],
      en: "There are a lot of people on the beach.",
      explanation: "na + LOC (plaži) + ima + puno + GEN pl (ljudi).",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 3 · Ears, voice & flashbacks",
      subtitle: "Catch the inserted a by ear, then count your own pets.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "pet pasa · puno ljudi" },
        { emoji: "🎤", label: "Your pets", hint: "Imam dva psa i…" },
        { emoji: "🔗", label: "Prices & big numbers", hint: "U7 comes counting" },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "pet pasa",
      explanation: "pet pasa — five dogs. Two a's: pa-sa.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "puno ljudi",
      explanation: "puno ljudi — a lot of people (čovjek → ljudi).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Imam dva psa i pet mačaka.",
      targetEn: "say how many pets you have — I have two dogs and five cats. (adjust to your real pets!)",
      phonetic: "EE-mam dva psa ee pet MA-cha-ka",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: prices, big numbers, the story world",
      items: [
        {
          prompt: "Listen (U7 prices): how much does the juice cost?",
          tts: "Sok košta tri eura.",
          options: ["3 euros", "13 euros", "30 euros"],
          correctIndex: 0,
          explanation: "tri eura — 2–4 + GEN sg (the bracket was hiding in prices all along).",
        },
        {
          prompt: "Listen (U7 big numbers): which number is it?",
          tts: "sto pedeset",
          options: ["150", "115", "550"],
          correctIndex: 0,
          explanation: "sto pedeset = 150.",
        },
        {
          prompt: "Ana kaže: »Kod bake ima puno životinja: dvije krave, tri konja i pet ovaca.« How many horses?",
          options: ["three", "two", "five"],
          correctIndex: 0,
          explanation: "tri konja — three horses (GEN sg after 2–4).",
        },
      ],
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The counting bracket, complete:**\n\n- **1** agrees: *jedan pas, jedna krava*\n- **2–4** → GEN sg: *dva psa, dvije krave, tri konja*\n- **5+** → GEN pl: *pet pasa, deset krava, šest ovaca*\n- **21, 32…** follow the last digit: *dvadeset jedan pas*\n\n**Quantity words = 5+**: *puno / malo / nekoliko / koliko* + GEN pl (*puno životinja, nekoliko ovaca*).\n\nWords tonight: **životinja, konj, krava, ovca, medvjed, nekoliko**.",
      vocabIds: [
        "a2u13.zivotinja", "a2u13.konj", "a2u13.krava",
        "a2u13.ovca", "a2u13.medvjed", "a2u13.nekoliko",
      ],
    },
  ],
  srsCloze: [
    { front: "dva ___ (pas)", answers: ["psa"], back: "dva psa — 2–4 take GEN singular.", tts: "dva psa" },
    { front: "pet ___ (pas)", answers: ["pasa"], back: "pet pasa — 5+ takes GEN plural.", tts: "pet pasa" },
    { front: "puno ___ (čovjek)", answers: ["ljudi"], back: "puno ljudi — irregular plural.", tts: "puno ljudi" },
    { front: "dvadeset jedan ___ (pas)", answers: ["pas"], back: "dvadeset jedan pas — the last digit (1) rules.", tts: "dvadeset jedan pas" },
    { front: "nekoliko ___ (ovca)", answers: ["ovaca"], back: "nekoliko ovaca — inserted a, like mačaka.", tts: "nekoliko ovaca" },
    { front: "two cows = ___ krave (two is gendered!)", answers: ["dvije"], back: "dvije krave — dva (m/n) / dvije (f).", tts: "dvije krave" },
    { front: "bear = ___ (m; lives u šumi)", answers: ["medvjed"], back: "medvjed = bear (Medvjed živi u šumi.)", tts: "Medvjed živi u šumi." },
    { front: "horse = ___ (m; tri ___a)", answers: ["konj"], back: "konj = horse (tri konja).", tts: "Konj je velik i brz." },
  ],
  notes: {
    inOneSentence: {
      en: "Numbers pick the noun's form — 1 agrees, 2–4 take GEN singular, 5+ and all quantity words (puno, malo, nekoliko, koliko) take GEN plural, and compounds follow their last digit.",
      exampleHr: "jedan pas · dva psa · pet pasa · puno životinja",
    },
    deepDive: [
      {
        title: "The bracket, with a dozen worked examples",
        body:
          "Since Unit 7 you've been USING this machine (*pet kuna, kilogram sira, dvadeset godina*) — now you own the manual. Three branches, no exceptions:\n\nThe only twist: **dva** is gendered — *dva psa / dva jezera* (m/n) but *dvije krave / dvije mačke* (f). Three and four are not: *tri konja, četiri krave*.",
        table: {
          caption: "One noun per gender, all three branches",
          headers: ["", "1 (NOM sg)", "2–4 (GEN sg)", "5+ (GEN pl)"],
          colCase: [null, "NOM", "GEN", "GEN"],
          rows: [
            ["pas (m)", "jedan pas", "dva psa", "pet pasa"],
            ["krava (f)", "jedna krava", "dvije krave", "šest krava"],
            ["ovca (f)", "jedna ovca", "tri ovce", "deset ovaca"],
            ["jezero (n)", "jedno jezero", "četiri jezera", "šesnaest jezera"],
          ],
        },
      },
      {
        title: "Compound numbers: the last digit is the boss",
        body:
          "*dvadeset jedan pas* (21 dogs — but grammatically \"twenty one-dog\") · *trideset dva psa* (32) · *sto pet pasa* (105).\n\nThis is why ages work the way they do: *Imam dvadeset jednu godinu* vs *Imam dvadeset pet godina*. You met **Koliko godina imaš?** long ago — it's koliko + GEN pl, the same machine.",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "…jedan (21, 31, 101)", rule: "NOM sg", example: "dvadeset jedan pas", caseId: "NOM" },
            { label: "…dva/tri/četiri (22–24, 33…)", rule: "GEN sg", example: "dvadeset dva psa", caseId: "GEN" },
            { label: "…pet+ (25–30, 105…)", rule: "GEN pl", example: "dvadeset pet pasa", caseId: "GEN" },
          ],
        },
      },
      {
        title: "malo's two lives",
        body:
          "With a **singular mass noun**, *malo* = a little: *malo mlijeka, malo sira* (U7).\n\nWith a **plural**, *malo* = few: *malo ljudi, malo turista*.\n\nSame word, same case (GEN) — the noun's number carries the meaning. *puno* mirrors it: *puno posla* (a lot of work) / *puno pasa* (many dogs).",
      },
    ],
    commonMistakes: [
      {
        wrong: "dvadeset jedan pasa",
        right: "dvadeset jedan pas",
        why: "Compounds follow the LAST digit — 1 → NOM sg, however big the number.",
      },
      {
        wrong: "tri pasa",
        right: "tri psa",
        why: "2–4 take GEN SINGULAR (psa); GEN plural (pasa) starts at 5.",
      },
      {
        wrong: "dva krave",
        right: "dvije krave",
        why: "Two is gendered: dva (m/n) but dvije (f).",
      },
      {
        wrong: "Koliko godine imaš?",
        right: "Koliko godina imaš?",
        why: "koliko demands GEN plural: godina.",
      },
    ],
    memoryHooks: [
      "The bracket chant: JEDAN pas — DVA psa — PET pasa. Say it like a countdown.",
      "5+ is the 'of' zone: pet pasa = five OF dogs — English almost does it too (a lot OF dogs).",
      "Last digit is the boss: 21 dogs = twenty one-dog.",
      "dvije for the ladies: dvije krave, dvije mačke, dvije sestre.",
    ],
    connects: [
      { label: "Number government as a fixed pattern (Unit 7 L3)", lessonId: "a1u7l3" },
      { label: "Yesterday: GEN plural forms (Unit 13 L1)", lessonId: "a2u13l1" },
      { label: "Next: comparatives — toplije i hladnije (Unit 13 L3)", lessonId: "a2u13l3" },
    ],
    selfCheck: [
      { q: "1, 3, and 7 dogs?", a: "jedan pas, tri psa, sedam pasa." },
      { q: "Why »dvadeset jedan pas« and not »pasa«?", a: "Compound numbers follow the last digit — 1 takes NOM sg." },
      { q: "two cats (f)?", a: "dvije mačke (dvije for feminine, GEN sg after 2)." },
      { q: "»How many islands does Croatia have?«", a: "Koliko otoka ima Hrvatska?" },
      { q: "a few sheep = ?", a: "nekoliko ovaca (inserted a in the cluster)." },
    ],
  },
};
