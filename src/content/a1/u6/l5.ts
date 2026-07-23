import type { Lesson } from "@/types/content";

/**
 * A1 U6 L5 — Moj tipičan dan (My typical day — integration & review)
 * Spec: curriculum/A1/unit-6.md · grammar-reference §7 (doručkovati → doručkujem).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u6` and review the Croatian before relying on it.
 *
 * Level guard: NO new grammar — full-day narration combining reflexives (L1) + times
 * (L2) + ACC plural (L3) + days & frequency (L4). New material is only lexical:
 * meal verb doručkovati, počinjati/završavati, obično, and the sequencers prvo/onda/
 * na kraju (zatim came in L1). ručati/večerati are Unit-4 review words, not re-carded.
 */
export const a1u6l5: Lesson = {
  id: "a1u6l5",
  unitId: "a1u6",
  title: "Moj tipičan dan",
  titleEn: "My typical day — integration",
  grammarTags: ["integration", "sequencers", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a1u6.doruckovati", hr: "doručkovati", en: "to have breakfast — doručkujem", pos: "verb", icon: "🥐", exampleHr: "Doručkujem u pola osam.", exampleEn: "I have breakfast at 7:30." },
    { id: "a1u6.pocinjati", hr: "počinjati", en: "to begin — počinje", pos: "verb", icon: "▶️", exampleHr: "Posao počinje u devet.", exampleEn: "Work begins at nine." },
    { id: "a1u6.zavrsavati", hr: "završavati", en: "to finish / end — završava", pos: "verb", icon: "⏹️", exampleHr: "Posao završava u pet.", exampleEn: "Work ends at five." },
    { id: "a1u6.obicno", hr: "obično", en: "usually", pos: "adv", icon: "🔁", exampleHr: "Obično večeram u sedam.", exampleEn: "I usually have dinner at seven." },
    { id: "a1u6.prvo", hr: "prvo", en: "first (of all)", pos: "adv", icon: "1️⃣", exampleHr: "Prvo se budim.", exampleEn: "First I wake up." },
    { id: "a1u6.onda", hr: "onda", en: "then / next", pos: "adv", icon: "➡️", exampleHr: "Onda doručkujem.", exampleEn: "Then I have breakfast." },
    { id: "a1u6.na-kraju", hr: "na kraju", en: "finally / at the end (chunk)", pos: "phrase", icon: "🏁", exampleHr: "Na kraju idem spavati.", exampleEn: "Finally I go to bed.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moj tipičan dan",
      subtitle: "Everything from this unit, woven into one story — yours by the end.",
      emoji: "🌅",
      items: [
        { emoji: "🍽️", label: "Meal verbs", hint: "doručkujem, ručam, večeram" },
        { emoji: "➡️", label: "Sequencers", hint: "prvo → zatim → onda → na kraju" },
        { emoji: "🧩", label: "Build a day", hint: "Ana's, Tom's, then yours" },
        { emoji: "🎯", label: "Whole-unit sweep", hint: "clock · se · ACC pl · nikad ne" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Meals & sequencers",
      subtitle: "Line up the day with prvo, zatim, onda, na kraju.",
      emoji: "➡️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's days & frequency" },
        { emoji: "🥐", label: "doručkujem…", hint: "the three meals" },
        { emoji: "🎧", label: "Ana's whole day", hint: "hear it, then build it" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's week",
      items: [
        {
          prompt: "From L4: On Wednesday = u ___",
          options: ["srijedu", "srijeda", "srijedi"],
          correctIndex: 0,
          explanation: "Feminine day → ACC -u: u srijedu.",
        },
        {
          prompt: "From L4: Nikad ___ učim navečer. (never)",
          options: ["ne", "se", "je"],
          correctIndex: 0,
          explanation: "nikad needs the double negative — keep ne.",
        },
        {
          prompt: "Listen. Which day does she rest?",
          tts: "U subotu se odmara.",
          options: ["Saturday", "Sunday", "Monday"],
          correctIndex: 0,
          explanation: "u subotu = on Saturday.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the meal verbs & sequencers",
      vocabIds: [
        "a1u6.doruckovati", "a1u6.pocinjati", "a1u6.zavrsavati", "a1u6.obicno",
        "a1u6.prvo", "a1u6.onda", "a1u6.na-kraju",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Three meals and four sequencers",
      body:
        "The three meal verbs: **doručkovati** (have breakfast → *doručkujem*), **ručati** (have lunch → *ručam*, Unit 4), **večerati** (have dinner → *večeram*, Unit 4).\n\nString the day together with **sequencers**: **prvo** (first) → **zatim** (then, L1) → **onda** (then/next) → **na kraju** (finally). And use **obično** (usually) for your routine: *Obično večeram u sedam.*\n\nTwo more for the clock: **počinjati** (begin → *počinje*) and **završavati** (finish → *završava*): *Posao počinje u devet i završava u pet.*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "prvo", emoji: "1️⃣", example: "Prvo se budim." },
          { label: "zatim", emoji: "2️⃣", example: "Zatim doručkujem." },
          { label: "onda", emoji: "3️⃣", example: "Onda idem na posao." },
          { label: "na kraju", emoji: "🏁", example: "Na kraju idem spavati." },
        ],
      },
      examples: [
        { hr: "Prvo se budim, zatim doručkujem.", en: "First I wake up, then I have breakfast." },
        { hr: "Doručkujem u pola osam.", en: "I have breakfast at 7:30." },
        { hr: "Obično večeram u sedam navečer.", en: "I usually have dinner at seven in the evening." },
        { hr: "Posao počinje u devet i završava u pet.", en: "Work begins at nine and ends at five." },
      ],
    },
    {
      id: "s06",
      type: "example",
      title: "Ana's typical day (listen)",
      items: [
        { hr: "Prvo se budim u sedam.", en: "First I wake up at seven." },
        { hr: "Zatim se tuširam i oblačim se.", en: "Then I shower and get dressed." },
        { hr: "Doručkujem u pola osam.", en: "I have breakfast at 7:30." },
        { hr: "Onda idem na posao.", en: "Then I go to work." },
        { hr: "Obično večeram u sedam navečer.", en: "I usually have dinner at seven in the evening." },
        { hr: "Na kraju gledam serije i idem spavati.", en: "Finally I watch series and go to bed." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: Ana's day & the sequencers",
      items: [
        {
          prompt: "In Ana's day, when does she wake up?",
          options: ["at seven", "at 7:30", "at nine"],
          correctIndex: 0,
          explanation: "»Prvo se budim u sedam« — at seven. (Breakfast is at 7:30.)",
        },
        {
          prompt: "What does »na kraju« mean?",
          options: ["finally / at the end", "first", "usually"],
          correctIndex: 0,
          explanation: "na kraju = finally, at the end of the sequence.",
        },
        {
          prompt: "“Then / next” — which sequencer?",
          options: ["onda", "prvo", "obično"],
          correctIndex: 0,
          explanation: "onda = then/next; prvo = first; obično = usually.",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Prvo ___ budim, zatim se tuširam.",
      blanks: [["se"]],
      translation: "First I wake up, then I shower.",
      wordBank: ["se", "sam", "je"],
      explanation: "buditi se is reflexive; prvo is first, so se takes second position.",
    },
    {
      id: "s09",
      type: "fill",
      text: "Obično ___ u sedam navečer. (večerati)",
      blanks: [["večeram"]],
      translation: "I usually have dinner at seven in the evening.",
      wordBank: ["večeram", "ručam", "doručkujem"],
      explanation: "večerati → večeram (have dinner).",
    },
    {
      id: "s10",
      type: "reorder",
      words: ["Prvo", "se", "budim", "u", "sedam"],
      answers: ["Prvo se budim u sedam.", "Prvo se budim u sedam"],
      en: "First I wake up at seven.",
      explanation: "prvo first → se second, then u sedam: Prvo se budim u sedam.",
    },
    {
      id: "s11",
      type: "reorder",
      words: ["Na", "kraju", "idem", "spavati"],
      answers: ["Na kraju idem spavati.", "Na kraju idem spavati"],
      en: "Finally I go to bed.",
      explanation: "na kraju (finally) + idem spavati (go to bed).",
    },
    {
      id: "s12",
      type: "listen-type",
      tts: "Doručkujem u pola osam.",
      explanation: "Doručkujem u pola osam — I have breakfast at 7:30.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "Večeram u sedam navečer.",
      explanation: "Večeram u sedam navečer — I have dinner at seven in the evening.",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 2 · Build a day & unit sweep",
      subtitle: "Slot in Tom's day, then say your own — and sweep the whole unit.",
      emoji: "🎯",
      items: [
        { emoji: "🧩", label: "Build Tom's day", hint: "one sentence at a time" },
        { emoji: "🎤", label: "Say YOUR day", hint: "two sentences aloud" },
        { emoji: "🔁", label: "Whole-unit sweep", hint: "clock · se · ACC pl · nikad ne" },
      ],
    },
    {
      id: "s15",
      type: "fill",
      text: "Tom obično ___ u sedam navečer. (večerati — on)",
      blanks: [["večera"]],
      translation: "Tom usually has dinner at seven in the evening.",
      wordBank: ["večera", "večeram", "večeraju"],
      explanation: "on → večera (3rd person singular of večerati).",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Write a sentence of your day: “In the evening I watch films.”",
      answers: ["Navečer gledam filmove.", "Navečer gledam filmove", "navečer gledam filmove"],
      explanation: "navečer + gledam + filmove (ACC plural).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Prvo se budim, zatim doručkujem.",
      targetEn: "start narrating your day — First I wake up, then I have breakfast",
      phonetic: "PR-vo seh BOO-dim, ZA-tim do-ROOCH-koo-yem",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Obično večeram u sedam navečer.",
      targetEn: "finish narrating your day — I usually have dinner at seven in the evening",
      phonetic: "O-bich-no VEH-che-ram oo SEH-dam NA-veh-cher",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep I",
      items: [
        {
          prompt: "L2: »pola devet« is…",
          options: ["8:30", "9:30", "9:00"],
          correctIndex: 0,
          explanation: "pola looks forward: halfway to nine = 8:30.",
        },
        {
          prompt: "L1: Ana ___ budi rano. (reflexive clitic)",
          options: ["se", "sam", "je"],
          correctIndex: 0,
          explanation: "buditi se is reflexive; se in second position.",
        },
        {
          prompt: "L3: Gledam ___. (film — plural)",
          options: ["filmove", "filmovi", "film"],
          correctIndex: 0,
          explanation: "Masculine ACC plural → -e: filmove.",
        },
        {
          prompt: "L4: On Saturday = u ___",
          options: ["subotu", "subota", "suboti"],
          correctIndex: 0,
          explanation: "subota → u subotu (feminine ACC).",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep II",
      items: [
        {
          prompt: "L4: Nikad ___ učim navečer. (never)",
          options: ["ne", "se", "je"],
          correctIndex: 0,
          explanation: "nikad needs the double negative — keep ne.",
        },
        {
          prompt: "Listen (L2). What time is it?",
          tts: "Pet je sati.",
          options: ["5:00", "2:00", "12:00"],
          correctIndex: 0,
          explanation: "Pet je sati = 5 o'clock.",
        },
        {
          prompt: "L1: which order is WRONG?",
          options: ["Se budim rano.", "Budim se rano.", "Rano se budim."],
          correctIndex: 0,
          explanation: "se can never be first: »Se budim« ❌.",
        },
        {
          prompt: "Listen (L3). What does she listen to?",
          tts: "Sluša pjesme.",
          options: ["songs", "the news", "films"],
          correctIndex: 0,
          explanation: "pjesme = songs (feminine plural).",
        },
      ],
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "Listen. When does he have breakfast?",
      tts: "Obično doručkuje u pola osam.",
      options: ["at 7:30", "at 8:30", "at seven"],
      correctIndex: 0,
      explanation: "u pola osam = at 7:30 (half TO eight).",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Unit 6 complete — you can narrate your whole day!** *Prvo se budim u sedam, zatim doručkujem. Obično večeram u sedam navečer. Na kraju gledam serije i idem spavati.*\n\nYou now own: **reflexive verbs** (se in second position), **telling the time** (pola osam = 7:30, u + time), **ACC plural** (filmove, pjesme), and **days + frequency** (u subotu, nikad ne učim). New verbs: **doručkujem, počinje, završava**; sequencers **prvo · zatim · onda · na kraju**.\n\nNext: the story «Tipičan dan», then the unit test.",
      vocabIds: [
        "a1u6.doruckovati", "a1u6.pocinjati", "a1u6.zavrsavati", "a1u6.obicno",
        "a1u6.prvo", "a1u6.onda", "a1u6.na-kraju",
      ],
    },
  ],
  srsCloze: [
    { front: "___ u pola osam. (I have breakfast)", answers: ["doručkujem"], back: "Doručkujem u pola osam. (doručkovati → doručkujem)", tts: "Doručkujem u pola osam." },
    { front: "Obično ___ u sedam navečer. (I have dinner)", answers: ["večeram"], back: "Obično večeram u sedam navečer.", tts: "Obično večeram u sedam navečer." },
    { front: "Posao ___ u devet. (begins)", answers: ["počinje"], back: "Posao počinje u devet. (počinjati → počinje)", tts: "Posao počinje u devet." },
    { front: "Posao ___ u pet. (ends)", answers: ["završava"], back: "Posao završava u pet. (završavati → završava)", tts: "Posao završava u pet." },
    { front: "»first« (of all): ___ se budim.", answers: ["prvo"], back: "Prvo se budim. — prvo = first.", tts: "Prvo se budim." },
    { front: "»finally / at the end«: ___ idem spavati.", answers: ["na kraju"], back: "Na kraju idem spavati. — na kraju = finally.", tts: "Na kraju idem spavati." },
    { front: "»usually«: ___ večeram u sedam.", answers: ["obično"], back: "Obično večeram u sedam. — obično = usually.", tts: "Obično večeram u sedam." },
  ],
  notes: {
    inOneSentence: {
      en: "Narrate a whole day by chaining reflexives, times, ACC plurals and frequency with the sequencers prvo, zatim, onda, na kraju.",
      exampleHr: "Prvo se budim, zatim doručkujem, na kraju idem spavati.",
    },
    deepDive: [
      {
        title: "Meal verbs and sequencers",
        body:
          "The three meals: **doručkovati** (breakfast) conjugates like kupovati → **doručkujem**; **ručati → ručam** and **večerati → večeram** you already know from Unit 4.\n\n**Sequencers** turn a list of actions into a narrative — always place them at the **start** of the clause, and remember a reflexive se still slides to second position after them: *Prvo* **se** *budim. Zatim* **se** *tuširam.*\n\n**obično** (usually) marks your default routine; **počinjati** (begin) and **završavati** (finish) describe schedules: *Posao počinje u devet i završava u pet.*",
        table: {
          caption: "The sequencer chain",
          headers: ["sequencer", "meaning", "example"],
          rows: [
            ["prvo", "first", "Prvo se budim."],
            ["zatim", "then", "Zatim doručkujem."],
            ["onda", "then / next", "Onda idem na posao."],
            ["na kraju", "finally", "Na kraju idem spavati."],
          ],
        },
      },
      {
        title: "Everything from Unit 6 in one day",
        body:
          "This lesson is a weave, not a new thread. A single day's narration pulls in every point of the unit:\n\n- **reflexive se** (L1): *Prvo se budim.*\n- **telling time + u** (L2): *Doručkujem u pola osam.*\n- **ACC plural** (L3): *Gledam filmove i serije.*\n- **days & frequency** (L4): *Obično u subotu ne radim.*\n\nUse this note as your unit-test study sheet — if you can narrate your own day out loud, you're ready.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "budim se", emoji: "⏰", example: "u sedam" },
            { label: "doručkujem", emoji: "🥐", example: "u pola osam" },
            { label: "idem na posao", emoji: "💼", example: "u osam" },
            { label: "večeram", emoji: "🍽️", example: "u sedam navečer" },
            { label: "idem spavati", emoji: "🌙", example: "u ponoć" },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Budim se. Tuširam se. Doručkujem. (a bare list)",
        right: "Prvo se budim, zatim se tuširam, onda doručkujem.",
        why: "A day is a sequence — use prvo/zatim/onda/na kraju to connect the actions.",
      },
      {
        wrong: "Prvo budim se.",
        right: "Prvo se budim.",
        why: "With a sequencer first, the reflexive se still takes second position — right after prvo.",
      },
      {
        wrong: "Doručkujem u osam i pol.",
        right: "Doručkujem u pola osam.",
        why: "Croatian half-hours use pola + the next hour: pola osam = 7:30 — not an “eight and a half” phrase.",
      },
      {
        wrong: "Doručkam u pola osam.",
        right: "Doručkujem u pola osam.",
        why: "doručkovati follows the kupovati pattern → doručkujem, not a plain -am form.",
      },
    ],
    memoryHooks: [
      "prvo → zatim → onda → na kraju: the four pins that hang your whole day together.",
      "-ovati verbs swap in -uj-: kupovati→kupujem, doručkovati→doručkujem.",
      "If you can say your own day out loud with a sequencer in each sentence, you've passed the unit.",
    ],
    connects: [
      { label: "Reflexive se (Unit 6 L1)", lessonId: "a1u6l1" },
      { label: "Telling the time (Unit 6 L2)", lessonId: "a1u6l2" },
      { label: "Meals & the café — ručam/večeram (Unit 4 L2)", lessonId: "a1u4l2" },
    ],
    selfCheck: [
      { q: "Name the four sequencers in order.", a: "prvo, zatim, onda, na kraju." },
      { q: "How do you say “I have breakfast at 7:30”?", a: "Doručkujem u pola osam." },
      { q: "Why »Prvo se budim«, not »Prvo budim se«?", a: "se is a second-position clitic — after prvo it comes right away." },
      { q: "How does doručkovati conjugate for “I”?", a: "doručkujem (like kupovati → kupujem)." },
      { q: "How do you say “Work begins at nine and ends at five”?", a: "Posao počinje u devet i završava u pet." },
    ],
  },
};
