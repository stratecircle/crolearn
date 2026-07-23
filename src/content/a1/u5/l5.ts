import type { Lesson } from "@/types/content";

/**
 * A1 U5 L5 — Oprostite, gdje je…? (Asking & giving directions, unit review)
 * Spec: curriculum/A1/unit-5.md · grammar-reference §14, §15 (Je li…?).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Level guard: NO new grammar machinery. Direction-giving is memorized CHUNKS:
 * Idite ravno. Skrenite lijevo/desno. — the imperative is deferred to A2 Unit 14
 * (flagged »chunk, not yet analyzed«, exactly like izvolite in U1). Question frame
 * Oprostite, gdje je…? + answers with blizu/daleko/tamo. Part 2 doubles as the
 * unit-review sweep across L1–L4 (LOC, u grad/u gradu, ići, ordinals).
 */
export const a1u5l5: Lesson = {
  id: "a1u5l5",
  unitId: "a1u5",
  title: "Oprostite, gdje je…?",
  titleEn: "Asking & giving directions",
  grammarTags: ["directions", "chunks", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a1u5.lijevo", hr: "lijevo", en: "left", pos: "adv", icon: "⬅️", exampleHr: "Skrenite lijevo.", exampleEn: "Turn left." },
    { id: "a1u5.desno", hr: "desno", en: "right", pos: "adv", icon: "➡️", exampleHr: "Skrenite desno.", exampleEn: "Turn right." },
    { id: "a1u5.ravno", hr: "ravno", en: "straight (ahead)", pos: "adv", icon: "⬆️", exampleHr: "Idite ravno.", exampleEn: "Go straight." },
    { id: "a1u5.pa", hr: "pa", en: "then / and then", pos: "conj", icon: "➕", exampleHr: "Idite ravno, pa skrenite lijevo.", exampleEn: "Go straight, then turn left." },
    { id: "a1u5.most", hr: "most", en: "bridge", pos: "noun", gender: "m", icon: "🌉", exampleHr: "Skrenite desno na mostu.", exampleEn: "Turn right at the bridge." },
    { id: "a1u5.hotel", hr: "hotel", en: "hotel", pos: "noun", gender: "m", icon: "🏨", exampleHr: "Hotel je na trgu.", exampleEn: "The hotel is on the square." },
    { id: "a1u5.idite", hr: "idite", en: "go! (polite command — a chunk)", pos: "phrase", icon: "🚶", exampleHr: "Idite ravno.", exampleEn: "Go straight.", tags: ["chunk"] },
    { id: "a1u5.skrenite", hr: "skrenite", en: "turn! (polite command — a chunk)", pos: "phrase", icon: "↩️", exampleHr: "Skrenite lijevo.", exampleEn: "Turn left.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Oprostite, gdje je…?",
      subtitle: "Lost in Zagreb? After this lesson, never.",
      emoji: "🧭",
      items: [
        { emoji: "🗣️", label: "Ask the way", hint: "Oprostite, gdje je…?" },
        { emoji: "↔️", label: "left · right · straight", hint: "lijevo, desno, ravno" },
        { emoji: "🎭", label: "Tom in the city", hint: "he asks a gospođa" },
        { emoji: "🎯", label: "Whole-unit review", hint: "LOC · ići · ordinals" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Ask & give directions",
      subtitle: "Three arrow-words and one polite question carry the whole exchange.",
      emoji: "🧭",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "floors from L4" },
        { emoji: "🧭", label: "ravno · lijevo · desno", hint: "the three arrows" },
        { emoji: "🃏", label: "Idite / Skrenite", hint: "chunks — grammar in A2" },
        { emoji: "✅", label: "Quick check", hint: "follow the words" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: floors from L4",
      items: [
        {
          prompt: "From L4: »I live on the third floor« — Živim na ___ katu. (3.)",
          options: ["trećem", "trećom", "treći"],
          correctIndex: 0,
          explanation: "treći is soft → na trećem katu.",
        },
        {
          prompt: "From L4: the ground floor is…",
          options: ["prizemlje", "prvi kat", "kat"],
          correctIndex: 0,
          explanation: "prizemlje → u prizemlju (the ground floor).",
        },
        {
          prompt: "Listen: which floor?",
          tts: "Živim na drugom katu.",
          options: ["second", "first", "third"],
          correctIndex: 0,
          explanation: "na drugom katu = on the second floor.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's direction words",
      vocabIds: [
        "a1u5.lijevo", "a1u5.desno", "a1u5.ravno", "a1u5.pa",
        "a1u5.most", "a1u5.hotel", "a1u5.idite", "a1u5.skrenite",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Three arrow-words: ravno, lijevo, desno",
      body:
        "Directions run on three words: **ravno** (straight), **lijevo** (left), **desno** (right) — chained with **pa** (then).\n\nThe commands come as ready-made chunks: **Idite ravno.** (Go straight.) · **Skrenite lijevo / desno.** (Turn left / right.) These are polite imperatives — say them whole; how they're built is an A2 topic, exactly like *izvolite* back in Unit 1.\n\nTo ask, one frame does it all: **Oprostite, gdje je…?** (Excuse me, where is…?) — answered with blizu/daleko/tamo.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "ravno", emoji: "⬆️", example: "Idite ravno. (go straight)" },
          { label: "lijevo", emoji: "⬅️", example: "Skrenite lijevo. (turn left)" },
          { label: "desno", emoji: "➡️", example: "Skrenite desno. (turn right)" },
        ],
      },
      examples: [
        { hr: "Oprostite, gdje je pošta? — Idite ravno, pa skrenite lijevo.", en: "Excuse me, where is the post office? — Go straight, then turn left." },
        { hr: "Je li daleko? — Ne, blizu je.", en: "Is it far? — No, it's near." },
        { hr: "Hotel je tamo, na trgu.", en: "The hotel is there, on the square." },
        { hr: "Idite ravno.", en: "Go straight." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: follow the words",
      items: [
        {
          prompt: "»Skrenite lijevo« means…",
          options: ["turn left", "turn right", "go straight"],
          correctIndex: 0,
          explanation: "lijevo = left.",
        },
        {
          prompt: "»Idite ravno« means…",
          options: ["go straight", "turn left", "stop here"],
          correctIndex: 0,
          explanation: "ravno = straight ahead.",
        },
        {
          prompt: "»Skrenite desno« means…",
          options: ["turn right", "turn left", "go back"],
          correctIndex: 0,
          explanation: "desno = right.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The direction dialogue — and the chunk warning",
      body:
        "The whole exchange has four beats: **Oprostite** (excuse me) → **gdje je…?** (where is…?) → the directions → **Hvala! / Molim.** Notice *gdje je* is followed by the plain nominative: *gdje je **pošta**? gdje je **kolodvor**?*\n\nRemember: **Idite** and **Skrenite** are frozen chunks. Don't try to change their endings — the imperative machinery waits for A2 Unit 14.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Oprostite", emoji: "🙋", example: "Oprostite! (excuse me)" },
          { label: "gdje je…?", emoji: "❓", example: "Gdje je muzej?" },
          { label: "directions", emoji: "🧭", example: "Idite ravno, pa skrenite desno." },
          { label: "Hvala!", emoji: "🙏", example: "Hvala! — Molim." },
        ],
      },
      table: {
        caption: "Chunk alert 🃏 — polite commands (grammar in A2)",
        headers: ["chunk", "meaning", "note"],
        rows: [
          ["Idite!", "Go!", "2pl imperative → A2 U14"],
          ["Skrenite!", "Turn!", "2pl imperative → A2 U14"],
          ["Oprostite!", "Excuse me!", "known chunk since Unit 1"],
        ],
      },
      examples: [
        { hr: "Oprostite, gdje je kolodvor?", en: "Excuse me, where is the station?" },
        { hr: "Idite ravno, pa skrenite desno.", en: "Go straight, then turn right." },
        { hr: "Muzej je na trgu, blizu.", en: "The museum is on the square, nearby." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match each word to English",
      pairs: [
        { a: "lijevo", b: "left" },
        { a: "desno", b: "right" },
        { a: "ravno", b: "straight" },
        { a: "most", b: "bridge" },
        { a: "hotel", b: "hotel" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Practice & unit review",
      subtitle: "Run a dialogue, help Tom — then sweep the whole unit.",
      emoji: "🎯",
      items: [
        { emoji: "🧩", label: "Cloze the dialogue", hint: "ravno · blizu · desno" },
        { emoji: "🔀", label: "Build directions", hint: "idite · ravno · pa…" },
        { emoji: "🎤", label: "Give directions", hint: "to the museum" },
        { emoji: "🔁", label: "Unit-wide sweep", hint: "LOC · u grad/gradu · ići · ordinals" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Oprostite, gdje je pošta? — Idite ___, pa skrenite lijevo.",
      blanks: [["ravno"]],
      translation: "Excuse me, where is the post office? — Go straight, then turn left.",
      wordBank: ["ravno", "lijevo", "desno"],
      explanation: "ravno = straight ahead.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Je li daleko? — Ne, ___ je.",
      blanks: [["blizu"]],
      translation: "Is it far? — No, it's near.",
      wordBank: ["blizu", "daleko", "tamo"],
      explanation: "The opposite of daleko (far) is blizu (near) — from L2.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Skrenite ___ na mostu. (right)",
      blanks: [["desno"]],
      translation: "Turn right at the bridge.",
      wordBank: ["desno", "lijevo", "ravno"],
      explanation: "desno = right; na mostu = at the bridge (most → mostu, LOC).",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “Go straight.”",
      answers: ["Idite ravno.", "Idite ravno", "idite ravno"],
      explanation: "The chunk: Idite ravno.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “Turn left.”",
      answers: ["Skrenite lijevo.", "Skrenite lijevo", "skrenite lijevo"],
      explanation: "The chunk: Skrenite lijevo.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["idite", "ravno", "pa", "skrenite", "lijevo"],
      answers: ["Idite ravno, pa skrenite lijevo.", "Idite ravno pa skrenite lijevo", "idite ravno pa skrenite lijevo"],
      en: "Go straight, then turn left.",
      explanation: "The classic direction chain: Idite ravno, pa skrenite lijevo.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Skrenite desno na mostu.",
      explanation: "Skrenite desno na mostu — turn right at the bridge (most → mostu).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Hotel je tamo, na trgu.",
      explanation: "Hotel je tamo, na trgu — the hotel is there, on the square.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Idite ravno, pa skrenite lijevo. Muzej je tamo.",
      targetEn: "give directions to the museum — Go straight, then turn left. The museum is there.",
      phonetic: "EE-dee-teh RAV-no, pa SKREH-nee-teh LYEH-vo",
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "Tom in the city",
      items: [
        {
          prompt: "Tom is lost and stops a gospođa (a lady). He starts with…",
          options: ["Oprostite!", "Bok!", "Živjeli!"],
          correctIndex: 0,
          explanation: "Oprostite = excuse me (Unit 1) — always before asking a stranger.",
        },
        {
          prompt: "Tom wants the station. He asks »Oprostite, gdje je ___?«",
          options: ["kolodvor", "kolodvoru", "kolodvora"],
          correctIndex: 0,
          explanation: "gdje je + nominative: gdje je kolodvor? (where is the station?)",
        },
        {
          prompt: "The gospođa answers: »Idite ravno, pa skrenite ___.« (left)",
          options: ["lijevo", "desno", "ravno"],
          correctIndex: 0,
          explanation: "lijevo = left.",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Unit review · sweep I (L1–L4)",
      items: [
        {
          prompt: "L1: »at the bank« is u ___.",
          options: ["banci", "banki", "banka"],
          correctIndex: 0,
          explanation: "banka → u banci (k → c).",
        },
        {
          prompt: "L2: at rest — »Where are you? In the city« — U ___.",
          options: ["gradu", "grad", "grada"],
          correctIndex: 0,
          explanation: "gdje → LOC: u gradu.",
        },
        {
          prompt: "L3: Oni ___ na koncert. (go)",
          options: ["idu", "idemo", "ide"],
          correctIndex: 0,
          explanation: "ići: oni → idu.",
        },
        {
          prompt: "L4: 3. = ?",
          options: ["treći", "tri", "trina"],
          correctIndex: 0,
          explanation: "3rd = treći.",
        },
      ],
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Unit review · sweep II (L1–L4)",
      items: [
        {
          prompt: "L1: »I live in Zagreb« — Živim u ___.",
          options: ["Zagrebu", "Zagreb", "Zagreba"],
          correctIndex: 0,
          explanation: "Location → LOC: u Zagrebu.",
        },
        {
          prompt: "L2: moving — »Kamo ideš? Idem u ___« (cinema).",
          options: ["kino", "kinu", "kina"],
          correctIndex: 0,
          explanation: "kamo → ACC: u kino.",
        },
        {
          prompt: "L3: is it »u fakultet« or »na fakultet«?",
          options: ["na fakultet", "u fakultet", "za fakultet"],
          correctIndex: 0,
          explanation: "fakultet is a na-word (institution).",
        },
        {
          prompt: "Listen (L4): which floor is the apartment on?",
          tts: "Stan je na petom katu.",
          options: ["fifth", "first", "second"],
          correctIndex: 0,
          explanation: "na petom katu = on the fifth floor.",
        },
      ],
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Unit 5 complete — you can navigate a Croatian city!** Ask with **Oprostite, gdje je…?** and follow **Idite ravno, pa skrenite lijevo / desno.** (chunks — the imperative itself is A2).\n\nAcross the unit you built the **locative** (u gradu, na trgu, u banci), the **direction ↔ location** pair (u grad / u gradu), the verb **ići** (idem…idu) with its **u/na destinations**, and **ordinals + floors** (na trećem katu).\n\nNext: the story »Tom traži muzej«, then the unit test.",
      vocabIds: [
        "a1u5.lijevo", "a1u5.desno", "a1u5.ravno", "a1u5.pa",
        "a1u5.most", "a1u5.hotel", "a1u5.idite", "a1u5.skrenite",
      ],
    },
  ],
  srsCloze: [
    { front: "Oprostite, gdje je pošta? — Idite ___, pa skrenite lijevo.", answers: ["ravno"], back: "Idite ravno, pa skrenite lijevo.", tts: "Idite ravno, pa skrenite lijevo." },
    { front: "Skrenite ___. (left)", answers: ["lijevo"], back: "Skrenite lijevo. (turn left)", tts: "Skrenite lijevo." },
    { front: "Skrenite ___. (right)", answers: ["desno"], back: "Skrenite desno. (turn right)", tts: "Skrenite desno." },
    { front: "Je li daleko? — Ne, ___ je. (near)", answers: ["blizu"], back: "Ne, blizu je. (blizu = near)", tts: "Ne, blizu je." },
    { front: "Before asking a stranger, say »___«. (excuse me)", answers: ["oprostite"], back: "Oprostite! = excuse me (Unit 1).", tts: "Oprostite!" },
    { front: "»___ ravno« = go straight. (the go! chunk)", answers: ["idite"], back: "Idite ravno. (idite = go — a polite command; grammar in A2)", tts: "Idite ravno." },
  ],
  notes: {
    inOneSentence: {
      en: "Ask directions with Oprostite, gdje je…? and give them with the fixed chunks Idite ravno / Skrenite lijevo·desno, chained by pa.",
      exampleHr: "Oprostite, gdje je muzej? — Idite ravno, pa skrenite desno.",
    },
    deepDive: [
      {
        title: "The direction dialogue (a route map)",
        body:
          "A direction exchange is four fixed beats. You provide **Oprostite** + **gdje je [place]?**; the other person gives the route with **Idite ravno** and **Skrenite lijevo/desno**, chained by **pa** (then), and you close with **Hvala! — Molim.**\n\nThe question keeps the place in the plain nominative: *gdje je pošta / muzej / kolodvor?* Distances come from L2: **blizu** (near), **daleko** (far), **tamo** (there).",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Oprostite", emoji: "🙋", example: "Oprostite!" },
            { label: "gdje je…?", emoji: "❓", example: "Gdje je hotel?" },
            { label: "route", emoji: "🧭", example: "Idite ravno, pa skrenite lijevo." },
            { label: "Hvala!", emoji: "🙏", example: "Hvala! — Molim." },
          ],
        },
      },
      {
        title: "Idite / Skrenite are chunks (for now)",
        body:
          "**Idite** (go!) and **Skrenite** (turn!) are polite (2nd-person plural) imperatives. In this course they are learned as **whole, unanalyzed chunks** — like *izvolite* in Unit 1 — because the imperative is formally taught in **A2 Unit 14**. Do not change their endings or try to derive a *ti*-form yet.",
        table: {
          caption: "Direction chunks",
          headers: ["chunk", "meaning", "status"],
          rows: [
            ["Idite ravno.", "Go straight.", "chunk — A2 U14"],
            ["Skrenite lijevo.", "Turn left.", "chunk — A2 U14"],
            ["Skrenite desno.", "Turn right.", "chunk — A2 U14"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "translating »turn left« word-by-word (e.g. »okreni lijevo«)",
        right: "Skrenite lijevo.",
        why: "Learn the whole phrase; direction-giving is idiomatic, and the imperative isn't analyzed until A2.",
      },
      {
        wrong: "Gdje je muzej? (to a stranger, with no opener)",
        right: "Oprostite, gdje je muzej?",
        why: "Croatian expects Oprostite before asking a stranger — the register you learned in Unit 1.",
      },
      {
        wrong: "swapping lijevo and desno under pressure",
        right: "lijevo = left · desno = right",
        why: "The two look and sound similar; drill the pair until it's automatic (lijevo has an L, like Left).",
      },
    ],
    memoryHooks: [
      "lijevo = Left (both start with an L sound).",
      "The route chain: Idite ravno, PA skrenite… — pa is the “then” that links the steps.",
      "Idite / Skrenite are frozen chunks — say them whole, like izvolite.",
    ],
    connects: [
      { label: "blizu / daleko / tamo, and gdje (Unit 5 L2)", lessonId: "a1u5l2" },
      { label: "Oprostite / Hvala / Molim — the courtesy loop (Unit 1 L5)", lessonId: "a1u1l5" },
      { label: "izvolite — the first frozen-imperative chunk (Unit 1)", lessonId: "a1u1l5" },
    ],
    selfCheck: [
      { q: "How do you politely ask where the museum is?", a: "Oprostite, gdje je muzej?" },
      { q: "Give directions: straight, then left.", a: "Idite ravno, pa skrenite lijevo." },
      { q: "What do blizu and daleko mean?", a: "near and far." },
      { q: "Why don't we change the ending of »Idite«?", a: "It's a frozen chunk; the imperative is taught in A2 Unit 14." },
      { q: "Which word is »right« and which is »left«?", a: "desno = right, lijevo = left." },
    ],
  },
};
