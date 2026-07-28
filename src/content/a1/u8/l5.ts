import type { Lesson } from "@/types/content";

/**
 * A1 U8 L5 — Moj vikend (My weekend — the A1 capstone)
 * Spec: curriculum/A1/unit-8.md · grammar-reference §8, §12 (+ all A1 cases).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: NO new grammar — past-tense narration with sequencers (prvo,
 * zatim, onda, na kraju — U6) across the whole A1 toolkit: perfekt + LOC + ACC
 * + GEN + times + weather. New vocab = evaluative adverbs only.
 */
export const a1u8l5: Lesson = {
  id: "a1u8l5",
  unitId: "a1u8",
  title: "Moj vikend",
  titleEn: "My weekend — A1 capstone",
  grammarTags: ["perfekt", "narration", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a1u8.krasno", image: "/img/krasno.png", hr: "krasno", en: "wonderful / lovely", pos: "adv", icon: "😍", exampleHr: "Bilo je krasno!", exampleEn: "It was wonderful!" },
    { id: "a1u8.grozno", image: "/img/grozno.png", hr: "grozno", en: "terrible / awful", pos: "adv", icon: "😖", exampleHr: "Bilo je grozno.", exampleEn: "It was terrible." },
    { id: "a1u8.dosadno", image: "/img/dosadno.png", hr: "dosadno", en: "boring", pos: "adv", icon: "😴", exampleHr: "Bilo je dosadno.", exampleEn: "It was boring." },
    { id: "a1u8.zanimljivo", image: "/img/zanimljivo.png", hr: "zanimljivo", en: "interesting", pos: "adv", icon: "🤔", exampleHr: "Bilo je zanimljivo.", exampleEn: "It was interesting." },
    { id: "a1u8.zabavno", image: "/img/zabavno.png", hr: "zabavno", en: "fun", pos: "adv", icon: "🥳", exampleHr: "Bilo je zabavno.", exampleEn: "It was fun." },
    { id: "a1u8.cijeli-dan", image: "/img/cijelidan.png", hr: "cijeli dan", en: "all day (chunk)", pos: "phrase", icon: "🕛", exampleHr: "Padala je kiša cijeli dan.", exampleEn: "It rained all day.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moj vikend",
      subtitle: "Everything you've learned, in one story about your weekend. This is the A1 finish line.",
      emoji: "🏁",
      items: [
        { emoji: "🎧", label: "Ana's weekend", hint: "listen to a full past story" },
        { emoji: "🗣️", label: "Build your own", hint: "where, weather, what you did" },
        { emoji: "🎯", label: "The A1 sweep", hint: "perfekt · LOC · GEN · numbers" },
        { emoji: "🗺️", label: "Achievement map", hint: "four cases done!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Ana's weekend",
      subtitle: "One story ties it all together: past + weather + places + sequencers.",
      emoji: "🎧",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "weather from L4" },
        { emoji: "😍", label: "How was it?", hint: "krasno · grozno · dosadno" },
        { emoji: "📖", label: "Listen & understand", hint: "Ana narrates her weekend" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: weather (L4)",
      items: [
        {
          prompt: "From L4: “It was sunny yesterday.” =",
          options: ["Jučer je bilo sunčano.", "Jučer je sunčano.", "Jučer bilo sunčano."],
          correctIndex: 0,
          explanation: "Past weather → neuter bilo: Jučer je bilo sunčano.",
        },
        {
          prompt: "From L4: Jučer je ___ kiša. (padati)",
          options: ["padala", "padao", "padalo"],
          correctIndex: 0,
          explanation: "kiša is feminine → padala.",
        },
        {
          prompt: "Listen: what's the weather?",
          tts: "Danas je hladno i pada snijeg.",
          options: ["cold and snowing", "hot and sunny", "warm and cloudy"],
          correctIndex: 0,
          explanation: "hladno + pada snijeg = cold and snowing.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words — how was it?",
      vocabIds: [
        "a1u8.krasno", "a1u8.grozno", "a1u8.dosadno",
        "a1u8.zanimljivo", "a1u8.zabavno", "a1u8.cijeli-dan",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "How was it? + telling a story in order",
      body:
        "To judge your weekend, use **Bilo je + adverb**: *Bilo je krasno!* (wonderful) · *Bilo je zabavno.* (fun) · *Bilo je zanimljivo.* (interesting) · *Bilo je dosadno.* (boring) · *Bilo je grozno.* (terrible).\n\nTo tell events **in order**, reuse your Unit 6 sequencers: **prvo** (first) → **zatim** (then) → **onda** (then) → **na kraju** (in the end). String past sentences together and you're narrating!",
      diagram: {
        kind: "flow",
        steps: [
          { label: "prvo", emoji: "1️⃣", example: "Prvo sam se budio." },
          { label: "zatim", emoji: "2️⃣", example: "Zatim sam doručkovao." },
          { label: "onda", emoji: "3️⃣", example: "Onda smo šetali." },
          { label: "na kraju", emoji: "🏁", example: "Na kraju smo gledali film." },
        ],
      },
      examples: [
        { hr: "Bilo je krasno!", en: "It was wonderful!" },
        { hr: "Bilo je zabavno i zanimljivo.", en: "It was fun and interesting." },
        { hr: "Bilo je dosadno.", en: "It was boring." },
        { hr: "Prvo sam doručkovao, zatim sam čitao knjigu.", en: "First I had breakfast, then I read a book." },
      ],
    },
    {
      id: "s06",
      type: "example",
      title: "Ana's weekend — tap each line to hear it",
      items: [
        { hr: "U subotu sam se budila rano.", en: "On Saturday I woke up early." },
        { hr: "Bilo je sunčano i toplo.", en: "It was sunny and warm." },
        { hr: "Prvo sam doručkovala, zatim sam čitala knjigu.", en: "First I had breakfast, then I read a book." },
        { hr: "Popodne smo Tom i ja šetali u parku i pili kavu.", en: "In the afternoon Tom and I strolled in the park and drank coffee." },
        { hr: "Navečer smo gledali film. Bilo je krasno!", en: "In the evening we watched a film. It was wonderful!" },
        { hr: "U nedjelju je padala kiša cijeli dan.", en: "On Sunday it rained all day." },
        { hr: "Bilo je dosadno, ali sam učila hrvatski i pisala zadaću.", en: "It was boring, but I studied Croatian and wrote my homework." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Did you follow Ana's weekend?",
      items: [
        {
          prompt: "Kakvo je vrijeme bilo u subotu? (What was Saturday's weather?)",
          options: ["sunčano i toplo", "hladno i kiša", "pada snijeg"],
          correctIndex: 0,
          explanation: "»Bilo je sunčano i toplo.«",
        },
        {
          prompt: "Zašto je nedjelja bila dosadna? (Why was Sunday boring?)",
          options: ["jer je padala kiša cijeli dan", "jer je bilo vruće", "jer je išla na koncert"],
          correctIndex: 0,
          explanation: "Rain all day kept her in — »padala je kiša cijeli dan«.",
        },
        {
          prompt: "Što su Ana i Tom radili popodne? (What did Ana and Tom do in the afternoon?)",
          options: ["šetali u parku i pili kavu", "gledali utakmicu", "kuhali ribu"],
          correctIndex: 0,
          explanation: "»…šetali u parku i pili kavu.«",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "U nedjelju je ___ kiša cijeli dan. (padati)",
      blanks: [["padala"]],
      translation: "On Sunday it rained all day.",
      wordBank: ["padala", "padao", "bilo"],
      explanation: "kiša (f) → padala.",
    },
    {
      id: "s09",
      type: "reorder",
      words: ["Onda", "smo", "šetali", "i", "pili", "kavu"],
      answers: ["Onda smo šetali i pili kavu.", "Onda smo šetali i pili kavu"],
      en: "Then we strolled and drank coffee.",
      explanation: "Sequencer first, then the clitic »smo« in second position.",
    },
    {
      id: "s10",
      type: "section",
      title: "Part 2 · Build YOUR weekend",
      subtitle: "Three sentences, three units: where you were, the weather, what you did.",
      emoji: "🗣️",
      items: [
        { emoji: "📍", label: "Where (LOC)", hint: "U subotu sam bio u…" },
        { emoji: "🌦️", label: "Weather", hint: "Bilo je sunčano…" },
        { emoji: "🎬", label: "What you did", hint: "Gledao sam film…" },
        { emoji: "🎤", label: "Say it aloud", hint: "two sentences of your weekend" },
      ],
    },
    {
      id: "s11",
      type: "type",
      prompt: "Your weekend, sentence 1 (where): write “On Saturday I was in the park.”",
      answers: ["U subotu sam bio u parku.", "U subotu sam bila u parku.", "U subotu sam bio u parku", "U subotu sam bila u parku"],
      explanation: "u subotu (U6) + perfekt of biti + u parku (LOC, U5).",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Sentence 2 (weather): write “It was sunny and warm.”",
      answers: ["Bilo je sunčano i toplo.", "Bilo je sunčano i toplo", "Bilo je toplo i sunčano."],
      explanation: "Past weather → neuter bilo (L4).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Sentence 3 (what you did): write “I watched a film and drank coffee.”",
      answers: ["Gledao sam film i pio kavu.", "Gledala sam film i pila kavu.", "Gledao sam film i pio kavu", "Gledala sam film i pila kavu"],
      explanation: "Perfekt (L2) + ACC objects (U4): film, kavu.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Vikend je bio super. Bilo je ___! (wonderful)",
      blanks: [["krasno"]],
      translation: "The weekend was great. It was wonderful!",
      wordBank: ["krasno", "grozno", "dosadno"],
      explanation: "krasno = wonderful.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["U", "subotu", "sam", "gledao", "film"],
      answers: ["U subotu sam gledao film.", "U subotu sam gledao film"],
      en: "On Saturday I watched a film.",
      explanation: "Time phrase »U subotu« first, clitic »sam« second.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Onda smo šetali i pili kavu.",
      explanation: "Onda smo šetali i pili kavu — then we strolled and drank coffee.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "U nedjelju je padala kiša.",
      explanation: "U nedjelju je padala kiša — on Sunday it was raining.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "U subotu sam bio u gradu. Bilo je sunčano.",
      targetEn: "two sentences of your weekend — On Saturday I was in the city. It was sunny. (female: Bila sam)",
      phonetic: "oo SOO-bo-too sam BEE-o oo GRAH-doo · BEE-lo ye SOON-cha-no",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Gledao sam film i pio kavu.",
      targetEn: "one more — I watched a film and drank coffee. (female: Gledala sam film i pila kavu.)",
      phonetic: "GLEH-da-o sam film ee PEE-o KAH-voo",
    },
    {
      id: "s20",
      type: "section",
      title: "Part 3 · The whole-A1 sweep",
      subtitle: "One last lap across everything you built — Units 1 to 8.",
      emoji: "🎯",
      items: [
        { emoji: "⏮️", label: "The past (U8)", hint: "biti · verbs · se/je" },
        { emoji: "📍", label: "Cases (U4–U7)", hint: "ACC · LOC · GEN" },
        { emoji: "🔢", label: "Numbers & days", hint: "U6 · U7" },
      ],
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Sweep I: the past tense (U8)",
      items: [
        {
          prompt: "L1: Ana je ___ u školi. (biti)",
          options: ["bila", "bio", "bili"],
          correctIndex: 0,
          explanation: "Ana (she) → bila.",
        },
        {
          prompt: "L2: Mi smo ___ u Split. (putovati)",
          options: ["putovali", "putovala", "putujali"],
          correctIndex: 0,
          explanation: "putovati → putovali.",
        },
        {
          prompt: "L3: which is correct?",
          options: ["Zvao se Marko.", "Zvao se je Marko.", "Zvao je se Marko."],
          correctIndex: 0,
          explanation: "se + je → je drops.",
        },
        {
          prompt: "Listen: what did they do?",
          tts: "Gledali smo film navečer.",
          options: ["watched a film in the evening", "played football", "cooked dinner"],
          correctIndex: 0,
          explanation: "Gledali smo film navečer.",
        },
      ],
    },
    {
      id: "s22",
      type: "quiz-set",
      review: true,
      title: "Sweep II: cases (U4–U7)",
      items: [
        {
          prompt: "U4 (ACC): Pijem ___. (kava)",
          options: ["kavu", "kava", "kave"],
          correctIndex: 0,
          explanation: "Feminine ACC: kava → kavu.",
        },
        {
          prompt: "U5 (LOC): Živim u ___. (Zagreb)",
          options: ["Zagrebu", "Zagreb", "Zagreba"],
          correctIndex: 0,
          explanation: "Location → LOC: u Zagrebu.",
        },
        {
          prompt: "U7 (GEN): Molim čašu ___. (voda)",
          options: ["vode", "voda", "vodu"],
          correctIndex: 0,
          explanation: "Quantity → GEN: čaša vode.",
        },
        {
          prompt: "U7 (numbers): Pet ___. (euro)",
          options: ["eura", "euro", "euri"],
          correctIndex: 0,
          explanation: "5+ → GEN pl: pet eura.",
        },
      ],
    },
    {
      id: "s23",
      type: "quiz-set",
      review: true,
      title: "Sweep III: days, verbs & more",
      items: [
        {
          prompt: "U6 (day): U ___ idem na posao. (Monday)",
          options: ["ponedjeljak", "ponedjeljka", "ponedjeljku"],
          correctIndex: 0,
          explanation: "»on Monday« = u + ACC: u ponedjeljak (masc, no change).",
        },
        {
          prompt: "U4 (verb): Oni ___ vino. (piti)",
          options: ["piju", "pije", "pijaju"],
          correctIndex: 0,
          explanation: "-em class, 3pl → piju.",
        },
        {
          prompt: "U8 (weather): Danas je ___. (it's cold)",
          options: ["hladno", "hladan", "hladna"],
          correctIndex: 0,
          explanation: "Weather frame: Danas je hladno.",
        },
        {
          prompt: "Listen: where was he?",
          tts: "Bio sam na moru.",
          options: ["at the sea", "at school", "at the market"],
          correctIndex: 0,
          explanation: "na moru = at the sea (LOC).",
        },
      ],
    },
    {
      id: "s24",
      type: "teach",
      title: "🗺️ A1 achievement map — four cases done!",
      body:
        "Look how far you've come. You started at zero; you can now **talk about yesterday, order food, shop, and find your way** — and you own **four of the seven cases**. DAT, INS and VOC are waiting for you in A2.\n\n**A1 grammar is complete. The Checkpoint Exam is unlocked.** 🎉",
      table: {
        caption: "Your case table at the end of A1",
        headers: ["Case (colour)", "Status", "Example"],
        rows: [
          ["NOM · blue", "✓ done", "Ana je studentica."],
          ["ACC · red", "✓ done", "Pijem kavu."],
          ["GEN · green", "✓ done", "čaša vode · pet eura"],
          ["LOC · purple", "✓ done", "Živim u Zagrebu."],
          ["DAT · orange", "→ A2", "(coming soon)"],
          ["INS · teal", "→ A2", "(coming soon)"],
          ["VOC · pink", "→ A2", "(coming soon)"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "success",
        title: "Spine badges earned",
        text: "biti · gender · NOM · present tense · ACC · LOC · GEN · perfekt — the whole A1 spine. Bravo!",
      },
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**A1 complete!** You narrated a weekend using everything: perfekt (*Bio sam…, Gledali smo…*), the clitic *se/je* (*Zvao se…*), weather (*Bilo je sunčano, padala je kiša*), places (LOC), objects (ACC), quantities (GEN), days and times — tied together with **prvo, zatim, onda, na kraju**.\n\nHow was it? **Bilo je krasno.** 😍\n\nNext up: the **A1 Checkpoint Exam** — then A2 opens with the future tense and three new cases.",
      vocabIds: [
        "a1u8.krasno", "a1u8.grozno", "a1u8.dosadno",
        "a1u8.zanimljivo", "a1u8.zabavno", "a1u8.cijeli-dan",
      ],
    },
  ],
  srsCloze: [
    { front: "Bilo je ___! (wonderful)", answers: ["krasno"], back: "Bilo je krasno! — it was wonderful.", tts: "Bilo je krasno!" },
    { front: "Bilo je ___. (boring)", answers: ["dosadno"], back: "Bilo je dosadno. — it was boring.", tts: "Bilo je dosadno." },
    { front: "Bilo je ___. (fun)", answers: ["zabavno"], back: "Bilo je zabavno. — it was fun.", tts: "Bilo je zabavno." },
    { front: "Padala je kiša ___. (all day)", answers: ["cijeli dan"], back: "Padala je kiša cijeli dan. — it rained all day.", tts: "Padala je kiša cijeli dan." },
    { front: "Order: ___, zatim, onda, na kraju. (first)", answers: ["prvo"], back: "prvo → zatim → onda → na kraju (the sequencers).", tts: "prvo, zatim, onda, na kraju" },
    { front: "U subotu sam ___ u parku. (biti, m)", answers: ["bio"], back: "U subotu sam bio u parku. (perfekt + LOC)", tts: "U subotu sam bio u parku." },
  ],
  notes: {
    inOneSentence: {
      en: "Narrate the past by stringing perfekt sentences with sequencers (prvo/zatim/onda/na kraju) and judging it with Bilo je + adverb — no new grammar, all of A1.",
      exampleHr: "Prvo sam doručkovao, zatim smo šetali. Bilo je krasno!",
    },
    deepDive: [
      {
        title: "The A1 cheat sheet (your Checkpoint study page)",
        body:
          "Everything A1 asks of you, on one page:\n\n- **biti**: sam/si/je/smo/ste/su · negative nisam · past bio/bila/bilo…\n- **htjeti**: hoću…hoće · neću · future is A2\n- **present classes**: -am (gledam), -im (volim), -em (pijem)\n- **perfekt**: biti-clitic + l-participle (chop -ti, add -o/-la/-li); irregulars išao, jeo, htio\n- **clitics**: second position; se + je → je drops (Zvao se Marko)\n- **numbers**: 1 → NOM sg · 2–4 → GEN sg · 5+ → GEN pl",
        table: {
          caption: "The four A1 cases",
          headers: ["Case", "Use", "Example"],
          rows: [
            ["NOM", "the subject", "Ana je studentica."],
            ["ACC", "direct object; motion u/na", "Pijem kavu. Idem u grad."],
            ["GEN", "quantity, nema, iz/od/do", "čaša vode · nema kruha"],
            ["LOC", "location, always with u/na/o", "u Zagrebu · na trgu"],
          ],
        },
      },
      {
        title: "Telling a story in order",
        body:
          "Narration is just past sentences in sequence, glued with **prvo → zatim → onda → na kraju**. Set the scene with weather (*Bilo je sunčano*), place events (*u parku, na moru*), and close with a verdict (*Bilo je krasno / dosadno*). That's a complete A1 story.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Scene", emoji: "🌦️", example: "Bilo je sunčano." },
            { label: "Events", emoji: "🎬", example: "Prvo…, zatim…, onda…" },
            { label: "Verdict", emoji: "😍", example: "Bilo je krasno!" },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Bio je sunčano.",
        right: "Bilo je sunčano.",
        why: "Weather is subjectless → neuter bilo, not bio.",
      },
      {
        wrong: "Gledao sam film, pio sam kavu, šetao sam. (no glue)",
        right: "Prvo sam gledao film, zatim sam pio kavu, onda sam šetao.",
        why: "Sequencers turn a list into a story — use prvo/zatim/onda/na kraju.",
      },
      {
        wrong: "U subotu sam bio u grad.",
        right: "U subotu sam bio u gradu.",
        why: "»Where I was« is location → LOC (u gradu), not the ACC direction form.",
      },
    ],
    memoryHooks: [
      "A story = past sentences + prvo/zatim/onda/na kraju + a verdict (Bilo je krasno).",
      "Four cases down (NOM/ACC/GEN/LOC), three to go in A2 (DAT/INS/VOC).",
      "How was it? Bilo je + feeling: krasno, zabavno, dosadno, grozno.",
    ],
    connects: [
      { label: "Sequencers & routine narration (Unit 6 L5)", lessonId: "a1u6l5" },
      { label: "Perfekt of biti and of verbs (Unit 8 L1–L2)", lessonId: "a1u8l1" },
      { label: "Weather frames (Unit 8 L4)", lessonId: "a1u8l4" },
      { label: "The A1 story: «Vikend u Splitu»", lessonId: "a1u8l5" },
    ],
    selfCheck: [
      { q: "Judge your weekend two ways.", a: "Bilo je krasno! / Bilo je dosadno. (Bilo je + adverb.)" },
      { q: "Name the four sequencers.", a: "prvo, zatim, onda, na kraju." },
      { q: "Which four cases did A1 teach?", a: "NOM, ACC, GEN, LOC (DAT/INS/VOC come in A2)." },
      { q: "Say “On Saturday I was in the park; it was sunny.”", a: "U subotu sam bio/bila u parku. Bilo je sunčano." },
      { q: "Put »Pada kiša cijeli dan« into the past.", a: "Padala je kiša cijeli dan." },
    ],
  },
};
