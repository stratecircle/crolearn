import type { Lesson } from "@/types/content";

/**
 * A2 U13 L4 — Najviša planina (superlatives + od/nego comparisons)
 * Spec: curriculum/A2/unit-13.md · grammar-reference §4.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * širok added per the 2026-07-23 spec correction (6-word floor); visok/nizak
 * recycled from U3 L5. dulji AND duži both accepted (both standard). The
 * »od potoka« fill standard swapped to »od jezera« (potok untaught).
 */
export const a2u13l4: Lesson = {
  id: "a2u13l4",
  unitId: "a2u13",
  title: "Najviša planina",
  titleEn: "The highest mountain — superlatives, od & nego",
  grammarTags: ["superlatives", "od-nego-comparison", "comparatives"],
  estMinutes: 19,
  vocab: [
    { id: "a2u13.dubok", image: "/img/dubok.png", hr: "dubok", en: "deep (comp. dublji)", pos: "adj", icon: "🌊", exampleHr: "Jezero je duboko.", exampleEn: "The lake is deep." },
    { id: "a2u13.dug", image: "/img/dug.png", hr: "dug", en: "long (comp. dulji/duži)", pos: "adj", icon: "📏", exampleHr: "Rijeka je duga.", exampleEn: "The river is long." },
    { id: "a2u13.kratak", image: "/img/kratak.png", hr: "kratak", en: "short (comp. kraći)", pos: "adj", icon: "✂️", exampleHr: "Zimi je dan kratak.", exampleEn: "In winter the day is short." },
    { id: "a2u13.brz", image: "/img/brz.png", hr: "brz", en: "fast (comp. brži)", pos: "adj", icon: "🐇", exampleHr: "Konj je brz.", exampleEn: "The horse is fast." },
    { id: "a2u13.spor", image: "/img/spor.png", hr: "spor", en: "slow (comp. sporiji)", pos: "adj", icon: "🐢", exampleHr: "Vlak je spor.", exampleEn: "The train is slow." },
    { id: "a2u13.sirok", image: "/img/sirok.png", hr: "širok", en: "wide (comp. širi)", pos: "adj", icon: "↔️", exampleHr: "Rijeka je široka.", exampleEn: "The river is wide." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Najviša planina",
      subtitle: "What's the highest mountain in Croatia? After this lesson you can argue about it.",
      emoji: "🏔️",
      items: [
        { emoji: "🥇", label: "naj- = the most", hint: "visok → viši → najviši" },
        { emoji: "🛤️", label: "od or nego", hint: "two roads, same meaning" },
        { emoji: "🐇", label: "Fast & slow words", hint: "brz, spor, dubok, širok…" },
        { emoji: "🎤", label: "Argue a ranking", hint: "Zagreb je veći od Splita!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · To the top of the podium",
      subtitle: "Yesterday you compared. Today you crown a winner — and name the loser it beat.",
      emoji: "🥇",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "od…do & GEN retrieval" },
        { emoji: "🏆", label: "naj- prefix", hint: "glue it on, done" },
        { emoji: "🛤️", label: "od + GEN / nego + NOM", hint: "the twin tracks" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the genitive tools you'll need",
      items: [
        {
          prompt: "Unit 9: »Putujemo od hotela ___ plaže.«",
          options: ["do", "od", "iz"],
          correctIndex: 0,
          explanation: "od…do = from…to. Today od gets a second job: the comparison standard.",
        },
        {
          prompt: "Unit 7: »kilogram ___« (cheese)",
          options: ["sira", "sir", "siru"],
          correctIndex: 0,
          explanation: "GEN sg sira — the same endings follow od in comparisons.",
        },
        {
          prompt: "Listen (U12): how is he going to work?",
          tts: "Idem na posao vlakom.",
          options: ["by train", "by car", "on foot"],
          correctIndex: 0,
          explanation: "vlakom — bare INS. (Today you'll hear the train race the car.)",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The measuring words",
      vocabIds: [
        "a2u13.dubok", "a2u13.dug", "a2u13.kratak",
        "a2u13.brz", "a2u13.spor", "a2u13.sirok",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "naj- : glue it on, crown a winner",
      body:
        "The superlative is pure Lego: **naj- + comparative**, always:\n\n*viši → **najviši** · bolji → **najbolji** · ljepši → **najljepši** · toplije → **najtoplije***\n\nIt declines exactly like the comparative it contains: *najviša planina, najbolja kava*.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "visok", emoji: "🥉", example: "high" },
          { label: "viši", emoji: "🥈", example: "higher" },
          { label: "NAJviši", emoji: "🥇", example: "the highest" },
        ],
      },
      examples: [
        { hr: "Dinara je najviša planina u Hrvatskoj.", en: "Dinara is the highest mountain in Croatia." },
        { hr: "Ljeto je najtoplije godišnje doba.", en: "Summer is the warmest season." },
        { hr: "Marko je najbrži konobar u Splitu.", en: "Marko is the fastest waiter in Split." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Bigger than WHAT? od + GEN, or nego + NOM",
      body:
        "Two roads to name what you're beating — same meaning, pick either:\n\n1. **od + genitive** (your U9 friend, new job): *Zagreb je veći **od Splita**.*\n2. **nego + nominative** (no case change at all): *Zagreb je veći **nego Split**.*\n\nThe trap: don't mix the tracks. After **od** the genitive is mandatory; after **nego** the word stays in plain NOM.",
      diagram: {
        kind: "contrast",
        left: {
          title: "od + GEN",
          emoji: "🟢",
          caseId: "GEN",
          lines: [
            { hr: "veći od Splita", en: "bigger than Split" },
            { hr: "toplije od rijeke", en: "warmer than the river" },
          ],
        },
        right: {
          title: "nego + NOM",
          emoji: "🔵",
          caseId: "NOM",
          lines: [
            { hr: "veći nego Split", en: "bigger than Split" },
            { hr: "toplije nego rijeka", en: "warmer than the river" },
          ],
        },
      },
      examples: [
        { hr: "More je toplije od rijeke.", en: "The sea is warmer than the river.", highlight: { text: "rijeke", caseId: "GEN" } },
        { hr: "Zagreb je veći nego Split.", en: "Zagreb is bigger than Split.", highlight: { text: "Split", caseId: "NOM" } },
        { hr: "Konj je brži od krave.", en: "A horse is faster than a cow.", highlight: { text: "krave", caseId: "GEN" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: which track, which form?",
      items: [
        {
          prompt: "Zagreb je veći ___ Splita.",
          options: ["od", "nego", "iz"],
          correctIndex: 0,
          explanation: "Splita is GENITIVE → the od track.",
        },
        {
          prompt: "Zagreb je veći nego ___.",
          options: ["Split", "Splita", "Splitu"],
          correctIndex: 0,
          explanation: "nego keeps plain NOM: nego Split.",
        },
        {
          prompt: "More je dublje ___ jezera.",
          options: ["od", "nego", "do"],
          correctIndex: 0,
          explanation: "jezera is GEN → od jezera.",
        },
        {
          prompt: "the best = ?",
          options: ["najbolji", "najdobriji", "više bolji"],
          correctIndex: 0,
          explanation: "naj- + the IRREGULAR comparative: najbolji (dobar → bolji → najbolji).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · The measuring words",
      subtitle: "Deep lakes, long rivers, fast horses — comparatives included.",
      emoji: "🐇",
      items: [
        { emoji: "📊", label: "Six new adjectives", hint: "with their comparatives" },
        { emoji: "⌨️", label: "Build & fill", hint: "dublje od jezera" },
        { emoji: "🔀", label: "Sea vs river", hint: "one reorder" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "The comparison kit — pairs and their comparatives",
      body:
        "Today's adjectives live in pairs — and most belong to the short **mutation family** from yesterday:\n\n*dubok → **dublji** · kratak → **kraći** · brz → **brži** · širok → **širi*** — plus your U3 friends *visok → **viši***, *nizak → **niži***.\n\n**dug** has TWO standard comparatives: **dulji** and **duži** — both correct, use either. Only *spor* takes the default road: **sporiji**.",
      table: {
        caption: "The kit",
        headers: ["pair", "comparatives"],
        rows: [
          ["visok ⛰️ / nizak", "viši / niži"],
          ["dubok 🌊 / — ", "dublji"],
          ["dug 📏 / kratak ✂️", "dulji (duži) / kraći"],
          ["brz 🐇 / spor 🐢", "brži / sporiji"],
          ["širok ↔️ / —", "širi"],
        ],
      },
      examples: [
        { hr: "Jezero je duboko, a more je dublje.", en: "The lake is deep, and the sea is deeper." },
        { hr: "Auto je brži od vlaka.", en: "A car is faster than a train.", highlight: { text: "vlaka", caseId: "GEN" } },
      ],
    },
    {
      id: "s10",
      type: "type",
      prompt: "deeper than the lake (the 'it' form): »___ od jezera«",
      answers: ["dublje", "Dublje"],
      hint: "dubok → dublji, neuter…",
      explanation: "dublje od jezera — neuter comparative + od + GEN.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "naj + bolji = ___",
      answers: ["najbolji"],
      hint: "one word, glued on",
      explanation: "najbolji — naj- always welds straight onto the comparative.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Rijeka je ___ od jezera. (dug — feminine; two right answers!)",
      blanks: [["dulja", "duža"]],
      translation: "The river is longer than the lake.",
      explanation: "dulja AND duža are both standard — pick your favourite.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Dinara je ___ planina u Hrvatskoj. (visok — superlative, feminine)",
      blanks: [["najviša", "najvisa"]],
      translation: "Dinara is the highest mountain in Croatia.",
      wordBank: ["najviša", "viša", "najvisok"],
      explanation: "naj + viša = najviša (agrees with planina, f).",
    },
    {
      id: "s14",
      type: "fill",
      text: "Zimi je dan ___. (kratak — comparative, masculine)",
      blanks: [["kraći", "kraci"]],
      translation: "In winter the day is shorter.",
      wordBank: ["kraći", "kratkiji", "najkraći"],
      explanation: "kratak → kraći (mutation family; kratkiji doesn't exist).",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["More", "je", "toplije", "od", "rijeke"],
      answers: ["More je toplije od rijeke.", "More je toplije od rijeke"],
      en: "The sea is warmer than the river.",
      explanation: "comparative + od + GEN: toplije od rijeke.",
    },
    {
      id: "s16",
      type: "section",
      title: "Part 3 · Ears, voice & rankings",
      subtitle: "Hear the comparisons, then start an argument about two cities.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "toplije od · najviša" },
        { emoji: "🎤", label: "Your ranking", hint: "veći od Splita!" },
        { emoji: "🔗", label: "Trains & futures", hint: "U12 + U9 flashbacks" },
      ],
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "More je toplije od rijeke.",
      explanation: "More je toplije od rijeke — the sea is warmer than the river.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Dinara je najviša planina.",
      explanation: "Dinara je najviša planina — Dinara is the highest mountain.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Zagreb je veći od Splita.",
      targetEn: "compare two cities you know — Zagreb is bigger than Split. (or your own pair!)",
      phonetic: "ZA-greb ye VEH-chee od SPLEE-ta",
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: trains, futures & a friendly argument",
      items: [
        {
          prompt: "Listen (U12 instrumental meets today): what's the claim?",
          tts: "Vlakom je brže nego autom.",
          options: [
            "By train it's faster than by car",
            "The train is slower than the car",
            "Go by car, not by train",
          ],
          correctIndex: 0,
          explanation: "vlakom/autom (bare INS, U12) + brže nego — comparison of two ways to travel.",
        },
        {
          prompt: "Unit 9 future: »Sutra će biti toplije.« means…",
          options: ["Tomorrow will be warmer", "Yesterday was warmer", "It's warm today"],
          correctIndex: 0,
          explanation: "će biti + comparative: tomorrow will be warmer.",
        },
        {
          prompt: "Ana: »Split je ljepši nego Zagreb!« Marko: »Ne, Zagreb je najljepši grad!« What are they arguing about?",
          options: [
            "which city is more beautiful",
            "which city is bigger",
            "where the sea is warmer",
          ],
          correctIndex: 0,
          explanation: "ljepši / najljepši — a beauty contest between cities.",
        },
      ],
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Superlative = naj- + comparative**, welded into one word: *najviši, najbolji, najljepši* — and it declines: *najviša planina*.\n\n**Two roads to \"than\"**: **od + GEN** (*veći od Splita*) or **nego + NOM** (*veći nego Split*) — never mix the tracks.\n\n**The kit**: *dubok→dublji, dug→dulji/duži, kratak→kraći, brz→brži, spor→sporiji, širok→širi* (+ *viši, niži* from U3).\n\nWords tonight: **dubok, dug, kratak, brz, spor, širok**.",
      vocabIds: [
        "a2u13.dubok", "a2u13.dug", "a2u13.kratak",
        "a2u13.brz", "a2u13.spor", "a2u13.sirok",
      ],
    },
  ],
  srsCloze: [
    { front: "naj + bolji = ___", answers: ["najbolji"], back: "najbolji — naj- welds onto the comparative.", tts: "najbolji" },
    { front: "veći ___ Splita (od/nego?)", answers: ["od"], back: "od + GEN: veći od Splita.", tts: "Zagreb je veći od Splita." },
    { front: "veći ___ Split (od/nego?)", answers: ["nego"], back: "nego + NOM: veći nego Split.", tts: "Zagreb je veći nego Split." },
    { front: "visok → viši → ___", answers: ["najviši", "najvisi"], back: "the podium: visok → viši → najviši.", tts: "najviši" },
    { front: "dubok → ___ (deeper)", answers: ["dublji"], back: "dubok → dublji (mutation family).", tts: "dublji" },
    { front: "kratak → ___ (shorter)", answers: ["kraći", "kraci"], back: "kratak → kraći.", tts: "kraći" },
    { front: "brz → ___ (faster)", answers: ["brži", "brzi"], back: "brz → brži.", tts: "brži" },
    { front: "slow = ___ (comp. sporiji)", answers: ["spor"], back: "spor = slow (Vlak je spor.)", tts: "Vlak je spor." },
  ],
  notes: {
    inOneSentence: {
      en: "naj- glued onto the comparative makes the superlative (najviši), and the thing you beat comes either as od + genitive or nego + nominative.",
      exampleHr: "Dinara je najviša planina u Hrvatskoj. · More je toplije od rijeke. · Zagreb je veći nego Split.",
    },
    deepDive: [
      {
        title: "od + GEN vs nego + NOM — side by side",
        body:
          "Both mean *than*; the only difference is the case machinery:\n\n- **od** is a genitive preposition (U9's *od hotela* — same word, new job): *toplije **od rijeke**, veći **od Splita**, brži **od krave***.\n- **nego** is a conjunction, not a preposition — the noun after it stays **nominative**, as if starting a new mini-sentence: *veći **nego Split*** (= bigger than Split [is]).\n\nWhen in doubt, **od + GEN is the safer everyday default**; nego is obligatory when comparing whole phrases (*Vlakom je brže nego autom*).",
        table: {
          caption: "The twin tracks",
          headers: ["track", "case after", "example"],
          colCase: [null, null, null],
          rows: [
            ["od", "GEN (green)", "More je toplije od rijeke."],
            ["nego", "NOM (blue)", "More je toplije nego rijeka."],
          ],
        },
      },
      {
        title: "The full mutation set, now complete",
        body:
          "Yesterday previewed *ljepši* and *viši*. Today's kit fills in the family — short, ancient adjectives whose final consonant softens before -i:\n\n*dubok → **dublji** (b+lj) · kratak → **kraći** (t→ć) · brz → **brži** (z→ž) · širok → **širi** · nizak → **niži** (z→ž) · visok → **viši** (s→š)*\n\n**dug** is the special one: **dulji** and **duži** are BOTH standard. The -ok/-ak endings drop before mutating (dub-ok → dublji, krat-ak → kraći) — the same trimming you saw in *topao → topliji* and *pas → psa*.",
        table: {
          caption: "Mutation family — today's members",
          headers: ["positive", "comparative", "superlative"],
          rows: [
            ["dubok", "dublji", "najdublji"],
            ["dug", "dulji / duži", "najdulji / najduži"],
            ["kratak", "kraći", "najkraći"],
            ["brz", "brži", "najbrži"],
            ["širok", "širi", "najširi"],
            ["visok / nizak", "viši / niži", "najviši / najniži"],
            ["spor (default -iji)", "sporiji", "najsporiji"],
          ],
        },
      },
      {
        title: "Croatia's podium — facts to argue with",
        body:
          "*Dinara* (1831 m) je **najviša** planina u Hrvatskoj. *Sava* je **najdulja** rijeka. Hrvatska ima više od tisuću otoka — a *Cres* i *Krk* su **najveći**.\n\nSuperlatives + GEN plural is exactly how you'll describe your favourite place in L5: *najljepše mjesto s puno otoka*.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Zagreb je veći od Split.",
        right: "Zagreb je veći od Splita.",
        why: "od is a GEN preposition — od Splita, always.",
      },
      {
        wrong: "Zagreb je veći nego Splita.",
        right: "Zagreb je veći nego Split.",
        why: "nego takes plain NOM — no case change.",
      },
      {
        wrong: "kratkiji",
        right: "kraći",
        why: "kratak belongs to the mutation family: -ak drops, t→ć.",
      },
      {
        wrong: "naj viši / naj-viši",
        right: "najviši",
        why: "naj- welds on: one word, no space, no hyphen.",
      },
    ],
    memoryHooks: [
      "naj- is superglue: naj+bolji, naj+viši — one word, every time.",
      "od = 'off of' → measuring FROM the loser: veći od Splita (GEN).",
      "nego = 'than [it is]' → the mini-sentence keeps NOM: nego Split.",
      "dug is generous: dulji or duži, both correct — the only adjective that lets you choose.",
    ],
    connects: [
      { label: "Comparatives — yesterday's machine (Unit 13 L3)", lessonId: "a2u13l3" },
      { label: "od/do and the GEN prepositions (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Next: describe your favourite place (Unit 13 L5)", lessonId: "a2u13l5" },
    ],
    selfCheck: [
      { q: "highest / the best / most beautiful?", a: "najviši, najbolji, najljepši." },
      { q: "»The sea is warmer than the river« — both tracks?", a: "More je toplije od rijeke. / More je toplije nego rijeka." },
      { q: "Why »od Splita« but »nego Split«?", a: "od is a GEN preposition; nego is a conjunction + NOM." },
      { q: "Comparatives of dubok, kratak, dug?", a: "dublji, kraći, dulji/duži (both standard)." },
      { q: "The highest mountain in Croatia?", a: "Dinara — Dinara je najviša planina u Hrvatskoj." },
    ],
  },
};
