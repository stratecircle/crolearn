import type { Lesson } from "@/types/content";

/**
 * A2 U13 L5 — Najljepše mjesto (describing places, unit review)
 * Spec: curriculum/A2/unit-13.md — integration lesson: GEN pl + quantities +
 * comparatives/superlatives in connected description.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * mjesto & više added per the 2026-07-23 spec correction (pattern words the
 * spec's own model sentences need). Pattern: »[Mjesto] je najljepše jer ima
 * puno [GEN pl].« jer recycled (U8), tamo (U5), zelen/plav (U7).
 */
export const a2u13l5: Lesson = {
  id: "a2u13l5",
  unitId: "a2u13",
  title: "Najljepše mjesto",
  titleEn: "The most beautiful place — describe & review",
  grammarTags: ["place-description", "gen-plural", "superlatives", "review"],
  estMinutes: 20,
  vocab: [
    { id: "a2u13.drvo", image: "/img/drvo.png", hr: "drvo", en: "tree", pos: "noun", gender: "n", icon: "🌳", exampleHr: "Drvo u parku je staro.", exampleEn: "The tree in the park is old." },
    { id: "a2u13.cvijet", image: "/img/cvijet.png", hr: "cvijet", en: "flower", pos: "noun", gender: "m", icon: "🌼", exampleHr: "Cvijet je lijep.", exampleEn: "The flower is beautiful." },
    { id: "a2u13.trava", image: "/img/trava.png", hr: "trava", en: "grass", pos: "noun", gender: "f", icon: "🌿", exampleHr: "Trava je zelena.", exampleEn: "The grass is green." },
    { id: "a2u13.nebo", image: "/img/nebo.png", hr: "nebo", en: "sky", pos: "noun", gender: "n", icon: "☁️", exampleHr: "Nebo je plavo.", exampleEn: "The sky is blue." },
    { id: "a2u13.zrak", image: "/img/zrak.png", hr: "zrak", en: "air", pos: "noun", gender: "m", icon: "💨", exampleHr: "Zrak na planini je svjež.", exampleEn: "The air on the mountain is fresh." },
    { id: "a2u13.kamen", image: "/img/kamen.png", hr: "kamen", en: "stone", pos: "noun", gender: "m", icon: "🪨", exampleHr: "Kamen je velik i star.", exampleEn: "The stone is big and old." },
    { id: "a2u13.pogled", image: "/img/pogled.png", hr: "pogled", en: "view", pos: "noun", gender: "m", icon: "🌅", exampleHr: "Pogled na more je predivan.", exampleEn: "The view of the sea is wonderful." },
    { id: "a2u13.predivan", image: "/img/predivan.png", hr: "predivan", en: "wonderful, gorgeous (predivna, predivno)", pos: "adj", icon: "🤩", exampleHr: "Priroda je predivna.", exampleEn: "Nature is wonderful." },
    { id: "a2u13.mjesto", image: "/img/mjesto.png", hr: "mjesto", en: "place", pos: "noun", gender: "n", icon: "📍", exampleHr: "Moje najljepše mjesto je more.", exampleEn: "My most beautiful place is the seaside." },
    { id: "a2u13.vise", image: "/img/vise.png", hr: "više", en: "more (the comparative of puno!)", pos: "adv", icon: "📈", exampleHr: "U gradu ima više ljudi nego u selu.", exampleEn: "There are more people in the city than in the village." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Najljepše mjesto",
      subtitle: "Everything this unit built — spent on describing the place you love.",
      emoji: "🌅",
      items: [
        { emoji: "🏞️", label: "The scene words", hint: "nebo, drvo, trava, kamen…" },
        { emoji: "🧩", label: "The pattern", hint: "…je najljepše jer ima puno…" },
        { emoji: "✍️", label: "Your description", hint: "4 connected sentences" },
        { emoji: "🏔️", label: "Unit review", hint: "8 questions, L1–L4" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · A postcard, out loud",
      subtitle: "Listen to a four-sentence postcard from Plitvice — by the end of today you write one about YOUR place.",
      emoji: "🏞️",
      items: [
        { emoji: "📮", label: "The model", hint: "hear it first" },
        { emoji: "🖼️", label: "Scene vocabulary", hint: "10 new words" },
        { emoji: "📈", label: "puno → više → najviše", hint: "the quantity ladder" },
      ],
    },
    {
      id: "s03",
      type: "teach",
      title: "The postcard — tap each line",
      body:
        "This is where the whole unit was heading. Four sentences: a superlative, a GEN plural, a contrast, a verdict. Hear them — today you build your own.",
      examples: [
        { hr: "Plitvička jezera su najljepše mjesto u Hrvatskoj.", en: "The Plitvice Lakes are the most beautiful place in Croatia." },
        { hr: "Tamo ima šesnaest jezera i puno šuma.", en: "There are sixteen lakes and a lot of forests there.", highlight: { text: "šuma", caseId: "GEN" } },
        { hr: "Voda je hladna, ali zrak je svjež.", en: "The water is cold, but the air is fresh." },
        { hr: "Priroda je predivna!", en: "Nature there is wonderful!" },
      ],
    },
    {
      id: "s04",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the tools you'll spend today",
      items: [
        {
          prompt: "U5: »Ljeti smo ___ planini.« (on the mountain)",
          options: ["na", "u", "od"],
          correctIndex: 0,
          explanation: "na planini — na + LOC for mountains and open spaces.",
        },
        {
          prompt: "Listen (U8 perfekt): what is she remembering?",
          tts: "Prošlog ljeta smo bili na moru.",
          options: [
            "Last summer we were at the seaside",
            "Next summer we'll go to the seaside",
            "The sea was cold last summer",
          ],
          correctIndex: 0,
          explanation: "Prošlog ljeta + smo bili — perfekt narration (U8).",
        },
        {
          prompt: "U4: »Volim ___.« (the sea)",
          options: ["more", "mora", "moru"],
          correctIndex: 0,
          explanation: "voljeti + ACC; neuter ACC = NOM: more.",
        },
      ],
    },
    {
      id: "s05",
      type: "vocab-cards",
      title: "The scene words",
      vocabIds: [
        "a2u13.drvo", "a2u13.cvijet", "a2u13.trava", "a2u13.nebo", "a2u13.zrak",
        "a2u13.kamen", "a2u13.pogled", "a2u13.predivan", "a2u13.mjesto", "a2u13.vise",
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "One scene, labelled",
      body:
        "Picture one place and hang the words on it — sky above, grass underfoot, a view that earns **predivan**:",
      table: {
        caption: "The landscape grid (gender-coloured)",
        headers: ["where", "word", "gender", "meaning"],
        rows: [
          ["up above", "nebo", "n", "sky"],
          ["in the air", "zrak", "m", "air"],
          ["standing tall", "drvo", "n", "tree"],
          ["underfoot", "trava", "f", "grass"],
          ["in the grass", "cvijet", "m", "flower"],
          ["on the path", "kamen", "m", "stone"],
          ["from the top", "pogled", "m", "view"],
        ],
      },
      examples: [
        { hr: "Pogled na more je predivan.", en: "The view of the sea is wonderful." },
        { hr: "Zrak na planini je svjež.", en: "The air on the mountain is fresh." },
        { hr: "Najljepše godišnje doba je proljeće.", en: "The most beautiful season is spring." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The pattern — and the quantity ladder",
      body:
        "Your description machine:\n\n**[Mjesto] je najljepše jer ima puno [GEN pl].**\n*Selo je najljepše jer ima puno šuma i polja.*\n\nAnd **puno** climbs like an adjective — meet its comparative: **više** (+ GEN, like puno):\n\n*puno ljudi → **više** ljudi → **najviše** ljudi*\n\n*U gradu ima **više ljudi nego** u selu.* — more X than Y, the nego track from L4.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "puno", emoji: "🌊", example: "puno jezera" },
          { label: "više", emoji: "📈", example: "više jezera nego rijeka" },
          { label: "najviše", emoji: "🥇", example: "najviše otoka ima Hrvatska" },
        ],
      },
      examples: [
        { hr: "Selo je najljepše jer ima puno šuma.", en: "The village is the most beautiful because it has a lot of forests.", highlight: { text: "šuma", caseId: "GEN" } },
        { hr: "U gradu ima više ljudi nego u selu.", en: "There are more people in the city than in the village.", highlight: { text: "ljudi", caseId: "GEN" } },
        { hr: "Ana voli more više nego planine.", en: "Ana loves the sea more than the mountains." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: scenes & quantities",
      items: [
        {
          prompt: "»Pogled na more je predivan.« means…",
          options: [
            "The view of the sea is wonderful",
            "The sea looks cold",
            "I'd love to see the sea",
          ],
          correctIndex: 0,
          explanation: "pogled na + ACC = view of; predivan = wonderful.",
        },
        {
          prompt: "Which subject fits? »___ je predivan.«",
          options: ["Pogled", "Nebo", "Trava"],
          correctIndex: 0,
          explanation: "predivan is masculine — pogled (nebo → predivno, trava → predivna).",
        },
        {
          prompt: "U gradu ima više ___ nego u selu. (čovjek)",
          options: ["ljudi", "čovjeka", "čovjeci"],
          correctIndex: 0,
          explanation: "više + GEN pl, and čovjek → ljudi.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write your place",
      subtitle: "Guided first, then free — quantity, comparative, superlative, all in.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Guided postcard", hint: "fill the frame" },
        { emoji: "⌨️", label: "Two lines from scratch", hint: "type them whole" },
        { emoji: "🎧", label: "Ears & voice", hint: "dictation + your 3 sentences" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Moje najljepše ___ je na moru. Tamo ima puno ___ (plaža) i nekoliko ___ (otok). More je ___ (topao — comparative!) od jezera.",
      blanks: [["mjesto"], ["plaža"], ["otoka"], ["toplije"]],
      translation: "My most beautiful place is at the seaside. There are a lot of beaches and a few islands there. The sea is warmer than the lake.",
      explanation: "mjesto + GEN plurals (plaža, otoka) + comparative (toplije od).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Zagreb je najljepši grad jer ima puno ___. (park)",
      blanks: [["parkova"]],
      translation: "Zagreb is the most beautiful city because it has a lot of parks.",
      wordBank: ["parkova", "parka", "parkovi"],
      explanation: "puno + GEN pl; short masculine keeps -ov-: parkova.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “The view is wonderful.”",
      answers: ["Pogled je predivan.", "Pogled je predivan"],
      hint: "pogled is masculine",
      explanation: "Pogled je predivan.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "the most beautiful place = najljepše ___",
      answers: ["mjesto"],
      hint: "neuter — that's why najljepšE",
      explanation: "najljepše mjesto — the superlative agrees with the neuter noun.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Pogled", "na", "more", "je", "predivan"],
      answers: ["Pogled na more je predivan.", "Pogled na more je predivan"],
      en: "The view of the sea is wonderful.",
      explanation: "pogled na + ACC (more) + je + predivan.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Zrak na planini je svjež.",
      explanation: "Zrak na planini je svjež — the air on the mountain is fresh.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Najljepše godišnje doba je proljeće.",
      explanation: "Najljepše godišnje doba je proljeće — the most beautiful season is spring.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Moje najljepše mjesto je more. Tamo ima puno plaža. Zrak je svjež i pogled je predivan.",
      targetEn: "describe YOUR favourite place in 3 sentences — use one puno + GEN pl, one adjective, one superlative. The model: My favourite place is the seaside…",
      phonetic: "MO-ye NAI-lyep-she MYES-to ye MO-re",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "The story world ranks its places",
      items: [
        {
          prompt: "»Ana voli more više nego planine.« What does Ana prefer?",
          options: ["the sea", "the mountains", "the lakes"],
          correctIndex: 0,
          explanation: "voli X više nego Y — loves X more than Y (U4 voljeti + today's više nego).",
        },
        {
          prompt: "Tom: »Zagreb je najljepši grad jer ima puno parkova.« Why does Tom love Zagreb?",
          options: [
            "because it has a lot of parks",
            "because it's the biggest city",
            "because the air is fresh",
          ],
          correctIndex: 0,
          explanation: "jer (U8) + ima puno parkova — reasons via jer, quantity via GEN pl.",
        },
        {
          prompt: "Listen: why does baka Marija live in the village?",
          tts: "Baka Marija živi na selu jer voli prirodu i životinje.",
          options: [
            "she loves nature and animals",
            "the village is bigger than the city",
            "her family lives there",
          ],
          correctIndex: 0,
          explanation: "jer voli prirodu i životinje — na selu (U2's živjeti, U5's na).",
        },
      ],
    },
    {
      id: "s19",
      type: "section",
      title: "Part 3 · The whole mountain — unit review",
      subtitle: "Eight questions across L1–L4. The test comes after the story.",
      emoji: "🏔️",
      items: [
        { emoji: "🟢", label: "GEN plural & counting", hint: "L1–L2 sample" },
        { emoji: "📈", label: "Compare & crown", hint: "L3–L4 sample" },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      title: "Review I — forms & counting (L1–L2)",
      items: [
        {
          prompt: "pet ___ (mačka)",
          options: ["mačaka", "mačke", "mački"],
          correctIndex: 0,
          explanation: "5+ → GEN pl with inserted a: mačaka.",
        },
        {
          prompt: "dva ___ (pas)",
          options: ["psa", "pasa", "pas"],
          correctIndex: 0,
          explanation: "2–4 → GEN sg: dva psa.",
        },
        {
          prompt: "puno ___ (čovjek)",
          options: ["ljudi", "čovjeka", "ljudima"],
          correctIndex: 0,
          explanation: "puno + GEN pl; irregular ljudi.",
        },
        {
          prompt: "nekoliko ___ (ovca)",
          options: ["ovaca", "ovce", "ovci"],
          correctIndex: 0,
          explanation: "GEN pl with inserted a: ovaca.",
        },
      ],
    },
    {
      id: "s21",
      type: "quiz-set",
      title: "Review II — compare & crown (L3–L4)",
      items: [
        {
          prompt: "dobar → ? (better)",
          options: ["bolji", "dobriji", "najbolji"],
          correctIndex: 0,
          explanation: "The irregular four: bolji.",
        },
        {
          prompt: "Zagreb je veći ___ Splita.",
          options: ["od", "nego", "iz"],
          correctIndex: 0,
          explanation: "GEN standard → od Splita.",
        },
        {
          prompt: "Zagreb je veći nego ___.",
          options: ["Split", "Splita", "Splitu"],
          correctIndex: 0,
          explanation: "nego + NOM: Split.",
        },
        {
          prompt: "Dinara je ___ planina u Hrvatskoj.",
          options: ["najviša", "viša", "visoka? All three fit"],
          correctIndex: 0,
          explanation: "The crown: najviša — naj + viša.",
        },
      ],
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**The unit, in one postcard**: *[Mjesto] je najljepše jer ima puno [GEN pl]. More je toplije od jezera. Pogled je predivan.*\n\n- GEN plural (-a, fleeting a) → counting everything (1 · 2–4 · 5+)\n- comparatives (-iji, mutations, the irregular four) → superlatives (naj-) → od + GEN / nego + NOM\n- **puno → više → najviše** — the quantity ladder\n\nWords tonight: **drvo, cvijet, trava, nebo, zrak, kamen, pogled, predivan, mjesto, više**.\n\nNext: the story — «Izlet na Plitvička jezera» — then the unit test.",
      vocabIds: [
        "a2u13.drvo", "a2u13.cvijet", "a2u13.trava", "a2u13.nebo", "a2u13.zrak",
        "a2u13.kamen", "a2u13.pogled", "a2u13.predivan", "a2u13.mjesto", "a2u13.vise",
      ],
    },
  ],
  srsCloze: [
    { front: "Selo je najljepše jer ima puno ___. (šuma — plural)", answers: ["šuma", "suma"], back: "puno šuma — the description frame: superlative + jer + puno + GEN pl.", tts: "Selo je najljepše jer ima puno šuma." },
    { front: "puno → ___ → najviše (the quantity ladder)", answers: ["više", "vise"], back: "puno → više → najviše (više + GEN, like puno).", tts: "U gradu ima više ljudi nego u selu." },
    { front: "view = ___ (m; »___ na more je predivan«)", answers: ["pogled"], back: "pogled = view (Pogled na more je predivan.)", tts: "Pogled na more je predivan." },
    { front: "The air is fresh: Zrak je ___.", answers: ["svjež", "svjez"], back: "Zrak je svjež.", tts: "Zrak je svjež." },
    { front: "place = ___ (n; najljepše ___)", answers: ["mjesto"], back: "mjesto = place (najljepše mjesto).", tts: "najljepše mjesto" },
    { front: "wonderful (f): Priroda je ___.", answers: ["predivna"], back: "predivan/predivna/predivno — Priroda je predivna.", tts: "Priroda je predivna." },
    { front: "sky = ___ (n; »___ je plavo«)", answers: ["nebo"], back: "nebo = sky (Nebo je plavo.)", tts: "Nebo je plavo." },
  ],
  notes: {
    inOneSentence: {
      en: "No new machinery — you weld GEN plural, quantities, comparatives and superlatives into a connected description: [Mjesto] je najljepše jer ima puno [GEN pl].",
      exampleHr: "Selo je najljepše jer ima puno šuma. More je toplije od jezera. Pogled je predivan.",
    },
    deepDive: [
      {
        title: "The model paragraph, annotated",
        body:
          "*Moje najljepše **mjesto** je selo blizu **planina**. Tamo ima puno **šuma** i nekoliko **jezera**. Zimi je hladno, ali ljeti je **toplije** nego u gradu. Zrak je svjež i priroda je **predivna**.*\n\nWhat's doing the work:\n- **najljepše mjesto** — superlative agreeing with neuter mjesto\n- **blizu planina · puno šuma · nekoliko jezera** — three GEN plurals (green!)\n- **toplije nego u gradu** — comparative + the nego track (comparing phrases, so nego, not od)\n- **predivna** — the verdict adjective, agreeing with priroda (f)",
        table: {
          caption: "The description frame",
          headers: ["beat", "pattern", "example"],
          rows: [
            ["name it", "Moje najljepše mjesto je…", "…selo blizu planina"],
            ["count it", "Tamo ima puno / nekoliko + GEN pl", "puno šuma, nekoliko jezera"],
            ["compare it", "comparative + od/nego", "ljeti je toplije nego u gradu"],
            ["feel it", "adjective verdict", "Priroda je predivna!"],
          ],
        },
      },
      {
        title: "više — the quantity ladder's middle rung",
        body:
          "**puno** compares like an adjective: *puno → **više** → **najviše*** — and every rung takes GEN:\n\n- *puno ljudi* — a lot of people\n- ***više** ljudi nego u selu* — MORE people than in the village\n- ***najviše** otoka ima Hrvatska* — Croatia has the MOST islands\n\n*više* also boosts verbs: *Ana voli more **više nego** planine* (loves it more). One word, two jobs — both mean \"more\".",
        diagram: {
          kind: "flow",
          steps: [
            { label: "puno", emoji: "🌊", example: "puno jezera" },
            { label: "više", emoji: "📈", example: "više jezera nego rijeka" },
            { label: "najviše", emoji: "🥇", example: "najviše otoka" },
          ],
        },
      },
      {
        title: "Watch out: drveće & cvijeće (recognition only)",
        body:
          "When Croatians talk about MANY trees or flowers together, they usually switch to collective nouns: **drveće** (trees, as a mass) and **cvijeće** (flowers): *U parku ima puno drveća.*\n\nYou only need to RECOGNIZE these for now — in your own sentences, count things this unit taught you to count: *puno šuma, puno ptica, puno slapova*. The collectives get their own lesson later.",
      },
    ],
    commonMistakes: [
      {
        wrong: "najviše lijepo mjesto",
        right: "najljepše mjesto",
        why: "English builds \"the most beautiful\" from two words — Croatian welds naj- onto the comparative: najljepše.",
      },
      {
        wrong: "Selo je najljepše jer ima puno šume.",
        right: "Selo je najljepše jer ima puno šuma.",
        why: "puno + GEN PLURAL for countables: šuma (šume is GEN singular — a lot of ONE forest).",
      },
      {
        wrong: "Pogled je predivna.",
        right: "Pogled je predivan.",
        why: "pogled is masculine — predivan. (priroda je predivna, nebo je predivno.)",
      },
      {
        wrong: "Volim more puno nego planine.",
        right: "Volim more više nego planine.",
        why: "Comparing takes the comparative: više nego, never puno nego.",
      },
    ],
    memoryHooks: [
      "The postcard beats: NAME it → COUNT it → COMPARE it → FEEL it.",
      "više is puno's older sibling — same GEN habit, bigger appetite.",
      "predivan = pre- (super) + divan (marvellous) — 'wonder-FULL'.",
      "pogled NA more — you look ONTO the sea (na + ACC), like na planinu.",
    ],
    connects: [
      { label: "GEN plural — the engine (Unit 13 L1)", lessonId: "a2u13l1" },
      { label: "Superlatives & od/nego (Unit 13 L4)", lessonId: "a2u13l4" },
      { label: "Weather & seasons talk (Unit 8 L4)", lessonId: "a1u8l4" },
    ],
    selfCheck: [
      { q: "The four beats of a place description?", a: "Name it (najljepše mjesto je…), count it (puno + GEN pl), compare it (toplije nego…), feel it (predivno!)." },
      { q: "»more people than in the village« = ?", a: "više ljudi nego u selu." },
      { q: "Why najljepše mjesto, not najljepši?", a: "mjesto is neuter — the superlative agrees: najljepše." },
      { q: "The quantity ladder?", a: "puno → više → najviše (all + GEN)." },
      { q: "»The air is fresh and the view is wonderful« = ?", a: "Zrak je svjež i pogled je predivan." },
    ],
  },
};
