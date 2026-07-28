import type { Lesson } from "@/types/content";

/**
 * B1 U17 L1 — Novine i portali (aspect pair formation I: prefixation)
 * Spec: curriculum/B1/unit-17.md · grammar-reference §11 "Pair-formation patterns" #1.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The first B1 lesson: U16 memorized pairs, today the learner meets the MACHINE
 * (prefix + impf → pf). poslušati is the day's new instance proving the pattern.
 */
export const b1u17l1: Lesson = {
  id: "b1u17l1",
  unitId: "b1u17",
  title: "Novine i portali",
  titleEn: "Newspapers & news sites — the prefix machine",
  grammarTags: ["aspect-formation", "aspect-prefixation"],
  estMinutes: 19,
  vocab: [
    { id: "b1u17.novine", image: "/img/novine.png", hr: "novine", en: "newspaper (f, ALWAYS plural)", pos: "noun", gender: "f", icon: "📰", exampleHr: "Svaki dan čitam novine.", exampleEn: "I read the paper every day." },
    { id: "b1u17.clanak", image: "/img/clanak.png", hr: "članak", en: "article (GEN članka — the a runs away!)", pos: "noun", gender: "m", icon: "📄", exampleHr: "Danas sam pročitao dug članak.", exampleEn: "Today I read a long article (to the end)." },
    { id: "b1u17.naslov", image: "/img/naslov.png", hr: "naslov", en: "headline / title", pos: "noun", gender: "m", icon: "🔠", exampleHr: "Naslov je kratak.", exampleEn: "The headline is short." },
    { id: "b1u17.portal", image: "/img/portal.png", hr: "portal", en: "news site / portal", pos: "noun", gender: "m", icon: "🖥️", exampleHr: "Čitam vijesti na portalu.", exampleEn: "I read the news on the site." },
    { id: "b1u17.novinar", image: "/img/novinar.png", hr: "novinar", en: "journalist (m; novinarka f)", pos: "noun", gender: "m", icon: "🎤", exampleHr: "Novinar je napisao članak.", exampleEn: "The journalist wrote the article." },
    { id: "b1u17.poslusati", image: "/img/poslusati.png", hr: "poslušati", en: "to listen through (once) — pf of slušati", pos: "verb", icon: "🎧", exampleHr: "Poslušaj ovo!", exampleEn: "Listen to this!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Novine i portali",
      subtitle: "Welcome to B1! In U16 you memorized six pairs. Today you get the machine that builds hundreds.",
      emoji: "📰",
      items: [
        { emoji: "⚙️", label: "The prefix machine", hint: "na- · pro- · po-" },
        { emoji: "📰", label: "Newsroom words", hint: "novine, članak, naslov…" },
        { emoji: "🆕", label: "One new pair", hint: "slušati → poslušati" },
        { emoji: "🔁", label: "Habit vs done", hint: "čitam · pročitao sam" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Meet the machine",
      subtitle: "Almost every perfective you know is just prefix + an old friend.",
      emoji: "⚙️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U16 pairs, 60 seconds" },
        { emoji: "🃏", label: "New words", hint: "the newsroom six" },
        { emoji: "⚙️", label: "The pattern", hint: "na-pisati, pro-čitati" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the U16 deck, from memory",
      items: [
        {
          prompt: "U16: the done-partner of pisati?",
          options: ["napisati", "pisao", "pišem"],
          correctIndex: 0,
          explanation: "pisati 〰️ → napisati ✅. Today: WHY na-.",
        },
        {
          prompt: "U8 perfekt: »Ana je ___ knjigu cijelo jutro.« (was reading)",
          options: ["čitala", "pročitala", "čitali"],
          correctIndex: 0,
          explanation: "cijelo jutro = duration → imperfective, and Ana is f sg → čitala.",
        },
        {
          prompt: "Listen — which is it?",
          tts: "Pišem sada.",
          options: ["right now — imperfective", "finished — perfective", "a future plan"],
          correctIndex: 0,
          explanation: "The U16 trap: right-now is always imperfective. Napišem sada ❌.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The newsroom six",
      vocabIds: [
        "b1u17.novine", "b1u17.clanak", "b1u17.naslov",
        "b1u17.portal", "b1u17.novinar", "b1u17.poslusati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The prefix machine ⚙️",
      body:
        "Most perfectives are built one way: **prefix + the imperfective you already know**.\n\nThe prefix is *lexical* — each verb chose its prefix long ago (you memorize WHICH), but the pattern means every new pair now costs you half the effort. Today's new instance: *slušati → **po**slušati* (listen through, once).\n\n⚠️ Still true: perfective present ≠ now.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "imperfective 〰️", emoji: "〰️", example: "pisati · čitati · slušati" },
          { label: "+ prefix", emoji: "⚙️", example: "na- · pro- · po-" },
          { label: "perfective ✅", emoji: "✅", example: "napisati · pročitati · poslušati" },
        ],
      },
      table: {
        caption: "The machine's output so far",
        headers: ["〰️ imperfective", "prefix", "✅ perfective"],
        rows: [
          ["pisati", "na-", "napisati"],
          ["učiti", "na-", "naučiti"],
          ["čitati", "pro-", "pročitati"],
          ["gledati", "po-", "pogledati"],
          ["slušati", "po-", "poslušati  🆕"],
          ["piti · jesti", "po-", "popiti · pojesti"],
        ],
      },
      examples: [
        { hr: "Svaki dan čitam novine.", en: "I read the paper every day. (habit — imperfective)" },
        { hr: "Danas sam pročitao dug članak na portalu.", en: "Today I read a long article on the news site — to the end." },
        { hr: "Novinar je napisao članak i naslov.", en: "The journalist wrote the article and the headline." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: run the machine",
      items: [
        {
          prompt: "Which prefix seals čitati?",
          options: ["pro-", "na-", "po-"],
          correctIndex: 0,
          explanation: "čitati → pročitati (read it through).",
        },
        {
          prompt: "slušati → the listen-once version:",
          options: ["poslušati", "slušam", "naslušati"],
          correctIndex: 0,
          explanation: "po- + slušati = poslušati. (naslušati isn't this pair — the prefix is per-verb!)",
        },
        {
          prompt: "»___ sam cijeli članak.« (finished it!)",
          options: ["Pročitao", "Čitao", "Čitam"],
          correctIndex: 0,
          explanation: "cijeli članak, done → perfective pročitao.",
        },
        {
          prompt: "Habit: »Svaki dan ___ novine.«",
          options: ["čitam", "pročitam", "pročitati"],
          correctIndex: 0,
          explanation: "svaki dan = habit → imperfective čitam. Habits never take the perfective.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Riječi novinara",
      subtitle: "Two quirks hide in the newsroom: a noun that's always plural, and an a that runs away.",
      emoji: "📰",
      items: [
        { emoji: "👯", label: "novine = plural", hint: "Novine SU dobre" },
        { emoji: "🏃", label: "Fleeting a", hint: "članak → članka" },
        { emoji: "🧩", label: "Pair match + fills", hint: "make it stick" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "novine su množina (and članak loses an a)",
      body:
        "1. **novine** is *always plural* — like English \"scissors\". One newspaper, plural grammar: *Novine **su** na stolu.*\n2. **članak** hides a **fleeting a** (like *početak → početka* from U16): GEN *članka*, plural *članci*.\n3. The people: **novinar/novinarka** write for a **portal** or **novine**; you read their **članak** under its **naslov**.",
      table: {
        caption: "The newsroom nouns",
        headers: ["riječ", "rod", "watch out"],
        rows: [
          ["novine", "f pl", "always plural — Novine su dobre"],
          ["članak", "m", "GEN članka · pl članci (fleeting a)"],
          ["naslov", "m", "regular"],
          ["portal", "m", "na portalu (LOC)"],
          ["novinar / novinarka", "m / f", "the -ica/-ka people pattern from U12"],
        ],
      },
      examples: [
        { hr: "Novine su na stolu.", en: "The newspaper is on the table. (plural verb!)" },
        { hr: "Nema novina danas.", en: "There's no paper today.", note: "nema + GEN (U7) — GEN pl novina" },
        { hr: "Čitam dva članka.", en: "I'm reading two articles.", note: "2–4 + GEN sg (U13): članka — there goes the a!" },
      ],
    },
    {
      id: "s09",
      type: "match",
      prompt: "Match each process to its sealed version",
      pairs: [
        { a: "slušati", b: "poslušati" },
        { a: "čitati", b: "pročitati" },
        { a: "gledati", b: "pogledati" },
        { a: "učiti", b: "naučiti" },
        { a: "piti", b: "popiti" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Ujutro ___ vijesti na portalu. (the habit — čitati/pročitati)",
      blanks: [["čitam", "citam"]],
      translation: "In the morning I read the news on the site.",
      wordBank: ["čitam", "pročitam", "pročitati"],
      explanation: "A morning routine = habit → imperfective čitam.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Danas sam ___ jako dug članak. (to the END)",
      blanks: [["pročitao", "procitao", "pročitala", "procitala"]],
      translation: "Today I read a very long article — finished it.",
      wordBank: ["pročitao", "čitao", "čitam"],
      explanation: "One article, completed → perfective pročitao/pročitala.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ ovo! (Listen to this — once, right now!)",
      blanks: [["Poslušaj", "Poslusaj"]],
      translation: "Listen to this!",
      wordBank: ["Poslušaj", "Slušam", "Slušati"],
      explanation: "Perfective imperative, like Pogledaj ovo! (U16) — one complete listen.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "The listen-once partner of slušati = ___",
      answers: ["poslušati", "poslusati"],
      hint: "same prefix as pogledati",
      explanation: "slušati → poslušati (po-).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "»The journalist« (a man) = ___",
      answers: ["novinar"],
      hint: "novine + -ar",
      explanation: "novinar — the newspaper person. A woman: novinarka.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear the aspect choice, then make one about your own reading.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "članak · naslov" },
        { emoji: "🎤", label: "Your media habit", hint: "čitam… pročitao sam!" },
        { emoji: "🔗", label: "Flashbacks", hint: "U7 · U16" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Danas sam pročitao dug članak.",
      explanation: "Danas sam pročitao dug članak — today I read a long article (to the end).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Novinar je napisao naslov.",
      explanation: "Novinar je napisao naslov — the journalist wrote the headline.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Svaki dan čitam portale. Danas sam pročitao dug članak.",
      targetEn: "say your habit + today's finished read — I read news sites every day. Today I read a long article.",
      phonetic: "SVA-kee dan CHEE-tam por-TA-leh. DA-nas sam pro-CHEE-ta-oh doog CHLA-nak",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the machine was always there",
      items: [
        {
          prompt: "U7/U16: kupujem kruh (daily) but moram kupiti tortu (today) — why two verbs?",
          options: [
            "kupovati 〰️ habit · kupiti ✅ one purchase",
            "kupiti is more polite",
            "kupujem is past tense",
          ],
          correctIndex: 0,
          explanation: "Aspect — and note: kupovati/kupiti is NOT a prefix pair. Machine 2 comes tomorrow.",
        },
        {
          prompt: "Listen (U7 grammar):",
          tts: "Nema novina danas.",
          options: ["there's no paper today", "the paper is new today", "buy a paper today"],
          correctIndex: 0,
          explanation: "nema + GEN: novina (GEN pl of novine).",
        },
        {
          prompt: "U16 trap: »I'm reading right now« =",
          options: ["Čitam.", "Pročitam.", "Pročitati."],
          correctIndex: 0,
          explanation: "Perfective present never means now.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Machine 1 — prefixation**: pf = prefix + impf you know. *na-pisati, na-učiti, pro-čitati, po-gledati, po-slušati* 🆕*, po-piti, po-jesti*. The prefix is per-verb — memorize the pair, but the pattern halves the work.\n\n**Newsroom quirks**: *novine* is always plural (*Novine su…*); *članak* drops its a (*dva članka, članci*).\n\nWords tonight: novine, članak, naslov, portal, novinar, poslušati.\n\nNext: two more machines — **-nuti** perfectives and **stem changes** (kupovati→kupiti finally explained).",
      vocabIds: [
        "b1u17.novine", "b1u17.clanak", "b1u17.naslov",
        "b1u17.portal", "b1u17.novinar", "b1u17.poslusati",
      ],
    },
  ],
  srsCloze: [
    { front: "slušati → pf ___ (the po- machine)", answers: ["poslušati", "poslusati"], back: "poslušati — listen through, once.", tts: "Poslušaj ovo!" },
    { front: "Svaki dan ___ (čitati/pročitati) portale.", answers: ["čitam", "citam"], back: "Habit → imperfective čitam.", tts: "Svaki dan čitam portale." },
    { front: "Danas sam ___ (čitati/pročitati) cijeli članak.", answers: ["pročitao", "procitao", "pročitala", "procitala"], back: "Finished → perfective pročitao/pročitala.", tts: "Danas sam pročitao cijeli članak." },
    { front: "newspaper (always plural!) = ___", answers: ["novine"], back: "novine (f pl) — Novine su na stolu.", tts: "Novine su na stolu." },
    { front: "article = ___ (GEN: članka)", answers: ["članak", "clanak"], back: "članak — fleeting a: dva članka.", tts: "Čitam dva članka." },
    { front: "headline / title = ___", answers: ["naslov"], back: "naslov.", tts: "Naslov je kratak." },
    { front: "journalist (m) = ___", answers: ["novinar"], back: "novinar (f: novinarka).", tts: "Novinar je napisao članak." },
  ],
  notes: {
    inOneSentence: {
      en: "Most perfectives are just a prefix glued onto the imperfective you already know (na-, pro-, po- …) — the prefix is per-verb, but the pattern makes every new pair half-price.",
      exampleHr: "Svaki dan čitam novine. Danas sam pročitao dug članak.",
    },
    deepDive: [
      {
        title: "Machine 1: prefixation — the full table",
        body:
          "The single most productive way Croatian builds perfectives. The core meaning doesn't change; the prefix seals the action into a completed whole:",
        table: {
          caption: "Prefix pairs met so far (grammar-reference §11 #1)",
          headers: ["〰️ imperfective", "prefix", "✅ perfective"],
          rows: [
            ["pisati", "na-", "napisati"],
            ["učiti", "na-", "naučiti"],
            ["čitati", "pro-", "pročitati"],
            ["gledati", "po-", "pogledati"],
            ["slušati", "po-", "poslušati"],
            ["piti", "po-", "popiti"],
            ["jesti", "po-", "pojesti"],
          ],
        },
      },
      {
        title: "Why you can't guess the prefix",
        body:
          "The prefix each verb takes was decided centuries ago — *čitati* took **pro-**, *pisati* took **na-**, and swapping them makes different verbs or nothing at all (*napisati* ✅ but ~~*načitati*~~ isn't this pair).\n\nSo the learning move is: **new verb → learn it as a pair**, exactly like you started doing in U16. What the machine buys you is *recognition*: meet *poslušati* in the wild and you instantly parse it — po- (sealed) + slušati (listen) = one complete listen.",
      },
      {
        title: "novine & članak — the two newsroom quirks",
        body:
          "**novine** (newspaper) is a *plurale tantum* — grammatically plural forever: *Novine **su** dobre. Nema **novina**. Čitam **novine**.* (Meanwhile *vijesti* — the news broadcast, from U6 — is also plural: the media love the plural.)\n\n**članak** has a **fleeting a** in its last syllable, the pattern you met with *početak → početka* (U16): GEN sg *članka*, NOM pl *članci* (the k→c shift before -i — recognize it for now, U24 systematizes it).",
      },
    ],
    commonMistakes: [
      {
        wrong: "Napišem sada poruku.",
        right: "Pišem sada poruku.",
        why: "The U16 trap never goes away: perfective present ≠ now.",
      },
      {
        wrong: "Jučer sam čitao cijeli članak za pet minuta.",
        right: "Jučer sam pročitao cijeli članak za pet minuta.",
        why: "\"Whole thing in X minutes\" = completed → perfective.",
      },
      {
        wrong: "Novina je dobra.",
        right: "Novine su dobre.",
        why: "novine is always plural — plural verb, plural adjective.",
      },
      {
        wrong: "naslušati (invented as the pair of slušati)",
        right: "poslušati",
        why: "The prefix is fixed per verb — never invent one; learn the pair.",
      },
    ],
    memoryHooks: [
      "The prefix is finish-line tape: run PRO-čitati THROUGH the article, seal NA-pisati onto the page.",
      "novine = scissors: two blades, one tool; many pages, one paper — always plural.",
      "članak's a is a stagehand: on stage in NOM (članak), gone the moment the show starts (članka, članci).",
      "poslušati rhymes with pogledati — same po-, same one-shot flavour.",
    ],
    connects: [
      { label: "Aspect pairs as vocabulary (Unit 16 L1)", lessonId: "a2u16l1" },
      { label: "Aspect in the past — where the choice bites (Unit 16 L2)", lessonId: "a2u16l2" },
      { label: "Next: -nuti & stem-change machines (Unit 17 L2)", lessonId: "b1u17l2" },
    ],
    selfCheck: [
      { q: "What does machine 1 do, in one line?", a: "Builds perfectives: prefix + known imperfective (na-pisati, pro-čitati, po-slušati)." },
      { q: "Can you predict which prefix a verb takes?", a: "No — it's lexical. Learn each verb as a pair; the pattern helps you RECOGNIZE new pairs." },
      { q: "Why is »Novina je dobra« wrong?", a: "novine is always plural: Novine su dobre." },
      { q: "GEN of članak — and what happened?", a: "članka — the fleeting a dropped (like početak → početka)." },
      { q: "»Listen to this!« (one complete listen) = ?", a: "Poslušaj ovo!" },
    ],
  },
};
