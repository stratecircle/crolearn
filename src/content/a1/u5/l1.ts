import type { Lesson } from "@/types/content";

/**
 * A1 U5 L1 — Gdje si? Lokativ (LOC with u/na: location)
 * Spec: curriculum/A1/unit-5.md · grammar-reference §3 (LOC rows), §14 (u/na rule).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run the native proofread pass before relying on it.
 *
 * Level guard: LOC is the SECOND case (after ACC in U4). It NEVER stands without
 * u/na and answers gdje? Endings: m/n → -u (grad→gradu, kino→kinu), f -a → -i
 * (škola→školi); sibilarization trap banka→banci (k→c). Direction (u/na + ACC)
 * is L2 — here everything is at-rest location. »gdje« is glossed (its systematic
 * intro with kamo is L2). ići forms are NOT used yet.
 */
export const a1u5l1: Lesson = {
  id: "a1u5l1",
  unitId: "a1u5",
  title: "Gdje si? Lokativ",
  titleEn: "Where am I? — the locative",
  grammarTags: ["locative", "location"],
  estMinutes: 18,
  vocab: [
    { id: "a1u5.trg", hr: "trg", en: "square", pos: "noun", gender: "m", icon: "🏙️", exampleHr: "Muzej je na trgu.", exampleEn: "The museum is on the square." },
    { id: "a1u5.ulica", hr: "ulica", en: "street", pos: "noun", gender: "f", icon: "🛣️", exampleHr: "Pošta je u ulici.", exampleEn: "The post office is on the street." },
    { id: "a1u5.muzej", hr: "muzej", en: "museum", pos: "noun", gender: "m", icon: "🏛️", exampleHr: "Tom je u muzeju.", exampleEn: "Tom is in the museum." },
    { id: "a1u5.crkva", hr: "crkva", en: "church", pos: "noun", gender: "f", icon: "⛪", exampleHr: "Crkva je na trgu.", exampleEn: "The church is on the square." },
    { id: "a1u5.posta", hr: "pošta", en: "post office", pos: "noun", gender: "f", icon: "📮", exampleHr: "Pošta je u ulici.", exampleEn: "The post office is on the street." },
    { id: "a1u5.banka", hr: "banka", en: "bank", pos: "noun", gender: "f", icon: "🏦", exampleHr: "Tata je u banci.", exampleEn: "Dad is at the bank." },
    { id: "a1u5.park", hr: "park", en: "park", pos: "noun", gender: "m", icon: "🌳", exampleHr: "Djeca su u parku.", exampleEn: "The children are in the park." },
    { id: "a1u5.centar", hr: "centar", en: "centre / downtown", pos: "noun", gender: "m", icon: "📍", exampleHr: "Muzej je u centru.", exampleEn: "The museum is in the centre." },
    { id: "a1u5.zivjeti", hr: "živjeti", en: "to live (živim, živiš…)", pos: "verb", icon: "🏡", exampleHr: "Živim u Zagrebu.", exampleEn: "I live in Zagreb." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Gdje si? Lokativ",
      subtitle: "One new ending, and you can say where anything is — u Zagrebu, na trgu, u parku.",
      emoji: "📍",
      items: [
        { emoji: "🔑", label: "The LOC ending", hint: "m/n → -u · f → -i" },
        { emoji: "🏙️", label: "Places in a city", hint: "trg, ulica, muzej, crkva…" },
        { emoji: "🃏", label: "The k→c trap", hint: "banka → u banci" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say your city" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The location case",
      subtitle: "LOC answers gdje? (where?) — and it NEVER goes without u or na.",
      emoji: "🔑",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "u kafiću, from Unit 4" },
        { emoji: "🚹", label: "m / n → -u", hint: "grad → u gradu · kino → u kinu" },
        { emoji: "🚺", label: "f → -i", hint: "škola → u školi" },
        { emoji: "✅", label: "Quick check", hint: "pick the location form" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: a phrase you already say (Unit 4)",
      items: [
        {
          prompt: "From Unit 4: »Marko je u kafiću« means Marko is…",
          options: ["at the café", "going to the café", "from the café"],
          correctIndex: 0,
          explanation: "u kafiću = at the café — a fixed phrase you've used. Today the LOCATIVE case explains it, and you can say it for any place.",
        },
        {
          prompt: "From Unit 4: kava is feminine, so »I'd like a coffee« is »Želim ___, molim«.",
          options: ["kavu", "kava", "kave"],
          correctIndex: 0,
          explanation: "A direct object → accusative kavu (Unit 4). Today a DIFFERENT ending answers »where?«.",
        },
        {
          prompt: "Listen: what does she want?",
          tts: "Želim jednu juhu, molim.",
          options: ["soup", "coffee", "water"],
          correctIndex: 0,
          explanation: "juha = soup (Unit 4); jednu juhu is the ACC you already know.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's city words",
      vocabIds: [
        "a1u5.trg", "a1u5.ulica", "a1u5.muzej", "a1u5.crkva", "a1u5.posta",
        "a1u5.banka", "a1u5.park", "a1u5.centar", "a1u5.zivjeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Lokativ — the “where is it?” case",
      body:
        "To say **where** something is, Croatian uses the **locative** — and it always rides on **u** (inside) or **na** (on / open space). One question, one case: *gdje?* (where?) → LOC.\n\nThe ending is easy:\n\n- masculine & neuter → **-u**: grad → u grad**u**, muzej → u muzej**u**, kino → u kin**u**, more → na mor**u**\n- feminine -a → **-i**: škola → u škol**i**\n\nThe golden rule of this case: **LOC never stands alone.** There is always a u or na in front of it.",
      diagram: {
        kind: "usage-map",
        caseId: "LOC",
        boxes: [
          { label: "Where is it? (gdje?)", examples: [{ hr: "Muzej je u centru.", en: "The museum is in the centre." }] },
          { label: "Where do you live?", examples: [{ hr: "Živim u Zagrebu.", en: "I live in Zagreb." }] },
          { label: "u = inside · na = on / open space", examples: [{ hr: "Ana pije kavu na trgu.", en: "Ana drinks coffee on the square." }] },
        ],
      },
      table: {
        caption: "Lokativ singular — always after u / na",
        headers: ["", "NOM", "LOC (u / na + …)"],
        colCase: [null, "NOM", "LOC"],
        rows: [
          ["m: grad", "grad", "u gradu (-u)"],
          ["m: muzej", "muzej", "u muzeju (-u)"],
          ["f: škola", "škola", "u školi (-i)"],
          ["n: kino", "kino", "u kinu (-u)"],
          ["n: more", "more", "na moru (-u)"],
        ],
      },
      examples: [
        { hr: "Živim u Zagrebu.", en: "I live in Zagreb.", note: "grad-type m → -u", highlight: { text: "Zagrebu", caseId: "LOC" } },
        { hr: "Tom je u muzeju.", en: "Tom is in the museum.", note: "muzej → muzeju", highlight: { text: "muzeju", caseId: "LOC" } },
        { hr: "Ana pije kavu na trgu.", en: "Ana drinks coffee on the square.", note: "kavu = ACC object; na trgu = LOC place", highlight: { text: "trgu", caseId: "LOC" } },
        { hr: "Park je u centru.", en: "The park is in the centre.", note: "centar drops its a → centru", highlight: { text: "centru", caseId: "LOC" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the location form",
      items: [
        {
          prompt: "Marko je u ___. (grad — where he is)",
          options: ["gradu", "grad", "grada"],
          correctIndex: 0,
          explanation: "»Where?« → LOC: masculine → -u → u gradu.",
        },
        {
          prompt: "Tom je u ___. (muzej)",
          options: ["muzeju", "muzej", "muzeja"],
          correctIndex: 0,
          explanation: "muzej is masculine → u muzeju.",
        },
        {
          prompt: "Djeca su u ___. (park)",
          options: ["parku", "park", "parka"],
          correctIndex: 0,
          explanation: "park (m) → u parku.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Feminine -a → -i, and the k→c trap",
      body:
        "Feminine -a words swap -a for **-i**: škola → u škol**i**, ulica → u ulic**i**, crkva → u crkv**i**, pošta → u pošt**i**.\n\nOne trap: when the stem ends in **k**, that k turns into **c** before the -i. So **banka → u banci** — never »u banki«. (The same swap will hit knjiga → knjizi and ruka → ruci later; for now just memorize *u banci*.)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The sibilarization trap ⚠️",
        text: "banka → u banci: before the -i, k becomes c. Say »u banci«, never »u banki«.",
      },
      table: {
        caption: "Feminine -a → -i (and the banka trap)",
        headers: ["NOM", "LOC", "note"],
        colCase: ["NOM", "LOC", null],
        rows: [
          ["škola", "u školi", "-a → -i"],
          ["ulica", "u ulici", "-a → -i"],
          ["crkva", "u crkvi", "-a → -i"],
          ["banka", "u banci", "k → c!"],
        ],
      },
      examples: [
        { hr: "Tata je u banci.", en: "Dad is at the bank.", note: "banka → banci (k → c)", highlight: { text: "banci", caseId: "LOC" } },
        { hr: "Ana je u školi.", en: "Ana is at school.", note: "škola → školi", highlight: { text: "školi", caseId: "LOC" } },
        { hr: "Pošta je u ulici.", en: "The post office is on the street.", note: "ulica → ulici", highlight: { text: "ulici", caseId: "LOC" } },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each city place to English",
      pairs: [
        { a: "trg", b: "square" },
        { a: "ulica", b: "street" },
        { a: "crkva", b: "church" },
        { a: "banka", b: "bank" },
        { a: "centar", b: "centre" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "Put the ending to work — then dictation and one line about you.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the ending", hint: "u banci · na trgu · u centru" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Živim u Zagrebu…" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say your city", hint: "Gdje živiš? — Živim u…" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Tata je u ___. (banka)",
      blanks: [["banci"]],
      translation: "Dad is at the bank.",
      wordBank: ["banci", "banka", "banku"],
      explanation: "banka → u banci: the k becomes c before -i.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana pije kavu na ___. (trg)",
      blanks: [["trgu"]],
      translation: "Ana drinks coffee on the square.",
      wordBank: ["trgu", "trg", "trga"],
      explanation: "trg is masculine → na trgu (kavu is the ACC object).",
    },
    {
      id: "s12",
      type: "fill",
      text: "Muzej je u ___. (centar)",
      blanks: [["centru"]],
      translation: "The museum is in the centre.",
      wordBank: ["centru", "centar", "centra"],
      explanation: "centar drops its a before the ending → u centru.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I live in Zagreb.”",
      answers: ["Živim u Zagrebu.", "Živim u Zagrebu", "živim u zagrebu"],
      explanation: "živjeti → živim; Zagreb (m) → u Zagrebu.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “The church is in the centre.”",
      answers: ["Crkva je u centru.", "Crkva je u centru", "crkva je u centru"],
      explanation: "crkva is the subject (NOM); centar → u centru (LOC).",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Pošta je u ulici.",
      explanation: "Pošta je u ulici — the post office is on the street (ulica → ulici).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Tom je u muzeju.",
      explanation: "Tom je u muzeju — Tom is in the museum (muzej → muzeju).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Živim u Zagrebu.",
      targetEn: "answer »Gdje živiš?« (Where do you live?) — say your own city.",
      phonetic: "ZHEE-veem oo ZAH-greh-boo",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 2–4",
      items: [
        {
          prompt: "From Unit 3: »moja obitelj« — obitelj is…",
          options: ["feminine", "masculine", "neuter"],
          correctIndex: 0,
          explanation: "obitelj is the feminine consonant-final type → moja obitelj.",
        },
        {
          prompt: "Listen: what does she have?",
          tts: "Imam brata i sestru.",
          options: ["a brother and a sister", "a mother and a father", "a son"],
          correctIndex: 0,
          explanation: "brata i sestru — the ACC objects after imam (Units 3–4).",
        },
        {
          prompt: "From Unit 2: the number »deset« is…",
          options: ["10", "2", "20"],
          correctIndex: 0,
          explanation: "deset = 10 — you'll count floors with it in Lesson 4.",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: what does she love?",
      tts: "Volim kavu i čaj.",
      options: ["coffee and tea", "water and juice", "soup and bread"],
      correctIndex: 0,
      explanation: "volim + ACC: kavu, čaj (Units 1 & 4).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Today's key:** the **locative** answers *gdje?* (where?) and never stands without **u** or **na**. Endings: **m / n → -u** (u gradu, u muzeju, u kinu, na moru) · **f -a → -i** (u školi).\n\nThe trap: **banka → u banci** (k → c before -i).\n\nNext lesson: the same u/na — but **one letter changes the meaning**: *u grad* (going there) vs *u gradu* (already there).",
      vocabIds: [
        "a1u5.trg", "a1u5.ulica", "a1u5.muzej", "a1u5.crkva", "a1u5.posta",
        "a1u5.banka", "a1u5.park", "a1u5.centar", "a1u5.zivjeti",
      ],
    },
  ],
  srsCloze: [
    { front: "Živim u ___. (Zagreb — where)", answers: ["zagrebu"], back: "Živim u Zagrebu. (masculine → -u)", tts: "Živim u Zagrebu." },
    { front: "Ana je u ___. (škola)", answers: ["školi"], back: "Ana je u školi. (feminine -a → -i)", tts: "Ana je u školi." },
    { front: "Tata je u ___. (banka — k→c!)", answers: ["banci"], back: "Tata je u banci. (k → c before -i)", tts: "Tata je u banci." },
    { front: "Tom je u ___. (muzej)", answers: ["muzeju"], back: "Tom je u muzeju.", tts: "Tom je u muzeju." },
    { front: "Muzej je u ___. (centar)", answers: ["centru"], back: "Muzej je u centru. (centar drops the a)", tts: "Muzej je u centru." },
    { front: "Ana pije kavu na ___. (trg)", answers: ["trgu"], back: "Ana pije kavu na trgu.", tts: "Ana pije kavu na trgu." },
    { front: "The locative always needs a ___ in front of it (u / na).", answers: ["preposition"], back: "LOC never stands alone — always u or na." },
  ],
  notes: {
    inOneSentence: {
      en: "The locative says where something is, always after u or na: m/n take -u, feminine -a takes -i (with banka → banci).",
      exampleHr: "u gradu · na trgu · u školi · u banci",
    },
    deepDive: [
      {
        title: "One case, one question: gdje?",
        body:
          "The **locative** is the course's second case (after the accusative in Unit 4). It has one job — saying **where** something is at rest — and one iron rule: **it never appears without a preposition.** In A1 that preposition is **u** (inside/in) or **na** (on / an open space).\n\nEndings in the singular: **masculine and neuter → -u** (grad → gradu, muzej → muzeju, selo → selu, more → moru), **feminine -a → -i** (žena → ženi, škola → školi). Nouns with a fleeting a drop it first: centar → u **centru**, but that's a spelling detail, not a new ending.",
        table: {
          caption: "Lokativ singular — full picture",
          headers: ["gender", "NOM", "LOC", "with u/na"],
          colCase: [null, "NOM", "LOC", "LOC"],
          rows: [
            ["masculine", "grad, muzej", "gradu, muzeju", "u gradu, u muzeju"],
            ["feminine -a", "škola, ulica", "školi, ulici", "u školi, u ulici"],
            ["neuter", "kino, more", "kinu, moru", "u kinu, na moru"],
          ],
        },
      },
      {
        title: "The k → c trap (sibilarization)",
        body:
          "When a feminine -a noun's stem ends in **k**, that k softens to **c** before the locative -i. The A1 word to memorize is **banka → u banci**. (The same rule turns g → z and h → s: noga → nozi, knjiga → knjizi, ruka → ruci — you'll meet those in later units.)",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Memorize the one A1 case",
          text: "banka → u banci. Not »u banki«. The k becomes c before -i.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "u Zagreb sam",
        right: "u Zagrebu sam",
        why: "After u for a location you need the LOC ending -u, not the bare NOM: u Zagrebu.",
      },
      {
        wrong: "Gradu je lijep. (LOC with no preposition)",
        right: "Grad je lijep. / Živim u gradu.",
        why: "The locative can never stand alone — it only appears after u/na. A bare subject stays in the nominative (grad).",
      },
      {
        wrong: "u banki",
        right: "u banci",
        why: "The stem k softens to c before -i (sibilarization): banka → banci.",
      },
    ],
    memoryHooks: [
      "LOC = “parked somewhere”. The car is parked; it isn't moving. Always tied to u/na, like a parking spot to a lot.",
      "m/n take -u (u gradu, u kinu); feminine -a takes -i (u školi).",
      "One trap word to burn in: u banci (k→c).",
    ],
    connects: [
      { label: "u kafiću — the set phrase this case explains (Unit 4 L5)", lessonId: "a1u4l5" },
      { label: "The accusative, the first case (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "Next: u grad vs u gradu — direction vs location (Unit 5 L2)", lessonId: "a1u5l2" },
    ],
    selfCheck: [
      { q: "What ending does a masculine noun take in the locative?", a: "-u: grad → u gradu, muzej → u muzeju." },
      { q: "What is »I live in Zagreb«?", a: "Živim u Zagrebu." },
      { q: "Why is it »u banci« and not »u banki«?", a: "The stem k softens to c before the -i (sibilarization)." },
      { q: "Can the locative appear without u or na?", a: "Never — it always follows a preposition (u/na in A1)." },
      { q: "How do you say »The post office is on the street«?", a: "Pošta je u ulici (ulica → ulici)." },
    ],
  },
};
