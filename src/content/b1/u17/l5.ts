import type { Lesson } from "@/types/content";

/**
 * B1 U17 L5 — Moji mediji (consolidation + the first B1 writing task)
 * Spec: curriculum/B1/unit-17.md.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * All four formation patterns interleaved across past/future; media-day
 * planner; writing-rehearsal slide scaffolds the test's 80–150-word task
 * "Što sam jučer čitao i gledao". Model text uses taught vocab only (no
 * o+LOC "about" — topics expressed as direct objects).
 */
export const b1u17l5: Lesson = {
  id: "b1u17l5",
  unitId: "b1u17",
  title: "Moji mediji",
  titleEn: "My media — consolidation & your first B1 writing",
  grammarTags: ["aspect-consolidation", "writing-prep"],
  estMinutes: 21,
  vocab: [
    { id: "b1u17.mediji", hr: "mediji", en: "the media (m pl; sg medij)", pos: "noun", gender: "m", icon: "📱", exampleHr: "Mediji su danas brzi.", exampleEn: "The media are fast these days." },
    { id: "b1u17.casopis", hr: "časopis", en: "magazine", pos: "noun", gender: "m", icon: "📖", exampleHr: "Čitam časopis svaki tjedan.", exampleEn: "I read a magazine every week." },
    { id: "b1u17.intervju", hr: "intervju", en: "interview", pos: "noun", gender: "m", icon: "🎤", exampleHr: "Novinar je napravio intervju s Markom.", exampleEn: "The journalist did an interview with Marko." },
    { id: "b1u17.reklama", hr: "reklama", en: "advertisement / commercial", pos: "noun", gender: "f", icon: "📢", exampleHr: "Reklama je bila duga.", exampleEn: "The ad was long." },
    { id: "b1u17.drustvene-mreze", hr: "društvene mreže", en: "social media (f pl)", pos: "phrase", icon: "🌐", exampleHr: "Tom voli društvene mreže.", exampleEn: "Tom likes social media." },
    { id: "b1u17.voditi", hr: "voditi", en: "to host / lead (impf; vodim) — the verb inside voditelj!", pos: "verb", icon: "🎙️", exampleHr: "Voditeljica vodi emisiju.", exampleEn: "The presenter hosts the show." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moji mediji",
      subtitle: "Four machines, forty verbs, one skill — and your first B1 writing task.",
      emoji: "📱",
      items: [
        { emoji: "🗂️", label: "The grand table", hint: "all four bins, one page" },
        { emoji: "🗓️", label: "Your media day", hint: "ujutro 📻 · navečer 📺" },
        { emoji: "🏆", label: "Unit review", hint: "L1–L4 sampler" },
        { emoji: "✍️", label: "Writing rehearsal", hint: "80–150 words, scaffolded" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Sve četiri mašine",
      subtitle: "Prefix, -nuti, stem change, suppletive — sort fast, choose faster.",
      emoji: "🗂️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "spine + comparatives" },
        { emoji: "🃏", label: "New words", hint: "the media six" },
        { emoji: "🗂️", label: "Grand table", hint: "your printable" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: spine + an old friend",
      items: [
        {
          prompt: "L4: »Dok je baka ___ radio, Tom je došao.«",
          options: ["slušala", "poslušala", "sluša"],
          correctIndex: 0,
          explanation: "dok = background → imperfective slušala.",
        },
        {
          prompt: "U13 comparative: »Radio je ___ od televizije.« (faster)",
          options: ["brži", "brz", "najbrži"],
          correctIndex: 0,
          explanation: "brz → brži; od + GEN for the comparison.",
        },
        {
          prompt: "L1: »Danas sam ___ dug članak.« (finished it)",
          options: ["pročitao", "čitao", "čitam"],
          correctIndex: 0,
          explanation: "One article, done → perfective.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The media six",
      vocabIds: [
        "b1u17.mediji", "b1u17.casopis", "b1u17.intervju",
        "b1u17.reklama", "b1u17.drustvene-mreze", "b1u17.voditi",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The grand table 🗂️",
      body:
        "Every pair you own, sorted into its bin. This is the unit's printable — and your writing-task cheat sheet:\n\nBonus decode: **voditi** (to lead/host) is the verb inside *voditelj* — *Voditeljica **vodi** emisiju.*",
      table: {
        caption: "All four machines (grammar-reference §11)",
        headers: ["machine", "pairs you own"],
        rows: [
          ["1 · prefix", "pisati→napisati · čitati→pročitati · gledati→pogledati · slušati→poslušati · učiti→naučiti · piti→popiti · jesti→pojesti"],
          ["2 · -nuti", "dizati→dignuti (digao!) · kretati→krenuti"],
          ["3 · stem change", "kupovati→kupiti · davati→dati · počinjati→početi · završavati→završiti · objavljivati→objaviti · prenositi→prenijeti"],
          ["4 · suppletive", "govoriti→reći · dolaziti→doći · odlaziti→otići · uzimati→uzeti"],
        ],
      },
      examples: [
        { hr: "Novinar je napravio intervju s Markom.", en: "The journalist did an interview with Marko.", note: "s + INS — the U12 rule" },
        { hr: "Voditeljica vodi emisiju.", en: "The presenter hosts the show." },
        { hr: "Navečer ću pogledati jednu emisiju.", en: "Tonight I'll watch one show — through to the end." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: mixed machines, mixed tenses",
      items: [
        {
          prompt: "uzeti was built by…",
          options: ["no machine — suppletive", "prefix", "-nuti"],
          correctIndex: 0,
          explanation: "uzimati/uzeti — one of the brute-memorize four.",
        },
        {
          prompt: "»Sutra ću ___ novine na putu.« (one quick buy)",
          options: ["kupiti", "kupovati", "kupujem"],
          correctIndex: 0,
          explanation: "One purchase tomorrow → perfective kupiti (future I: ću + infinitive).",
        },
        {
          prompt: "»Reklame ne volim — uvijek su ___.« (long, f pl)",
          options: ["duge", "duga", "dug"],
          correctIndex: 0,
          explanation: "reklame (f pl) → duge. U13 adjectives still on duty.",
        },
        {
          prompt: "»Voditelj je ___ intervju i otišao.« (napraviti/raditi)",
          options: ["napravio", "radio", "napravi"],
          correctIndex: 0,
          explanation: "One finished interview, then he left — two clean pins.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Moj medijski dan",
      subtitle: "Morning radio, evening TV — your day, aspect-correct.",
      emoji: "🗓️",
      items: [
        { emoji: "🗓️", label: "The day planner", hint: "habits + achievements" },
        { emoji: "✏️", label: "Production drills", hint: "past & future" },
        { emoji: "🎤", label: "Say your day", hint: "4+ sentences" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "The media-day planner 🗓️",
      body:
        "Your writing task will ask for BOTH kinds of sentence — habits (impf) and finished events (pf). Practice thinking in slots:",
      diagram: {
        kind: "flow",
        steps: [
          { label: "ujutro 📻", emoji: "🌅", example: "Ujutro slušam radio. (habit 〰️)" },
          { label: "danas 📰", emoji: "📍", example: "Danas sam pročitao dug članak. (done ✅)" },
          { label: "navečer 📺", emoji: "🌆", example: "Navečer gledam televiziju. (habit 〰️)" },
          { label: "večeras 🎯", emoji: "🚀", example: "Večeras ću pogledati jednu emisiju. (plan ✅)" },
        ],
      },
      examples: [
        { hr: "Ujutro čitam portale, a navečer gledam televiziju.", en: "In the morning I read news sites, and in the evening I watch TV." },
        { hr: "Čitam časopis svaki tjedan.", en: "I read a magazine every week." },
        { hr: "Tom voli društvene mreže, ali baka voli radio.", en: "Tom likes social media, but grandma likes the radio." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Jučer sam ___ jednu emisiju. (gledati/pogledati — watched it through)",
      blanks: [["pogledao", "pogledala"]],
      translation: "Yesterday I watched one show (to the end).",
      wordBank: ["pogledao", "gledao", "gledam"],
      explanation: "One show, finished → perfective pogledao/pogledala.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Večeras ću ___ cijeli članak. (čitati/pročitati)",
      blanks: [["pročitati", "procitati"]],
      translation: "Tonight I'll read the whole article.",
      wordBank: ["pročitati", "čitati", "pročitam"],
      explanation: "cijeli članak, to the end → perfective; future I takes the infinitive.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ne volim ___. (ads — ACC pl)",
      blanks: [["reklame"]],
      translation: "I don't like ads.",
      wordBank: ["reklame", "reklama", "reklami"],
      explanation: "voljeti + ACC; reklame (f pl ACC).",
    },
    {
      id: "s12",
      type: "type",
      prompt: "»magazine« = ___",
      answers: ["časopis", "casopis"],
      hint: "čas (time) + pis(ati) — 'time-writing'",
      explanation: "časopis (m) — Čitam časopis svaki tjedan.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "»the media« (plural) = ___",
      answers: ["mediji"],
      hint: "sg medij",
      explanation: "mediji (m pl) — Mediji su danas brzi.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Novinar", "je", "napravio", "intervju", "s", "Markom"],
      answers: ["Novinar je napravio intervju s Markom."],
      en: "The journalist did an interview with Marko.",
      explanation: "je second; s + INS (Markom) closes the sentence.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Sve zajedno + pisanje",
      subtitle: "Tom's media day, the unit sampler — and your writing scaffold.",
      emoji: "✍️",
      items: [
        { emoji: "🧑‍🤝‍🧑", label: "Tom's day", hint: "listen & answer" },
        { emoji: "🏆", label: "Unit sampler", hint: "7 quick ones" },
        { emoji: "✍️", label: "The scaffold", hint: "your test writing, rehearsed" },
      ],
    },
    {
      id: "s16",
      type: "quiz-set",
      title: "Integration: Tomov medijski dan",
      items: [
        {
          prompt: "Listen: what does Tom do in the morning?",
          tts: "Tom ujutro čita portale, a navečer gleda vijesti na televiziji.",
          options: ["reads news sites", "watches TV", "listens to the radio"],
          correctIndex: 0,
          explanation: "Ujutro čita portale — navečer is TV time.",
        },
        {
          prompt: "Listen: what was Tom doing when Ana arrived?",
          tts: "Dok je Tom gledao vijesti, Ana je došla.",
          options: ["watching the news", "reading a magazine", "leaving the house"],
          correctIndex: 0,
          explanation: "dok + gledao — the background; Ana's arrival is the pin.",
        },
      ],
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Unit sampler I: the four machines",
      items: [
        {
          prompt: "čitati → pf, and which machine?",
          options: ["pročitati — prefix", "pročitati — stem change", "čitnuti — -nuti"],
          correctIndex: 0,
          explanation: "Machine 1: pro- + čitati.",
        },
        {
          prompt: "dignuti — the standard past for »she«:",
          options: ["digla", "dignula", "dizala"],
          correctIndex: 0,
          explanation: "The -nu- drops: digao, digla.",
        },
        {
          prompt: "govoriti → pf:",
          options: ["reći", "kazati", "izgovoriti"],
          correctIndex: 0,
          explanation: "The suppletive pair: govoriti/reći (rekao, rekla).",
        },
        {
          prompt: "»Svaki dan ___ novine.«",
          options: ["kupujem", "kupim", "kupio sam"],
          correctIndex: 0,
          explanation: "Habits are ALWAYS imperfective.",
        },
      ],
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Unit sampler II: the spine",
      items: [
        {
          prompt: "»Dok je baka ___ radio, Tom je došao.«",
          options: ["slušala", "poslušala", "sluša"],
          correctIndex: 0,
          explanation: "dok = background → imperfective.",
        },
        {
          prompt: "»Odjednom je ___ kiša.«",
          options: ["počela", "počinjala", "počinje"],
          correctIndex: 0,
          explanation: "odjednom pins a perfective event.",
        },
        {
          prompt: "U16: »___ sam se u Kanadi.« (roditi se)",
          options: ["Rodio", "Rodila sam", "Rođen"],
          correctIndex: 0,
          explanation: "Rodio sam se (m) / Rodila sam se (f) — your biography opener from U16.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Ujutro slušam radio. Jučer sam pročitao dug članak.",
      targetEn: "your media day in two sentences — habit first, then yesterday's finished read.",
      phonetic: "OO-yoo-tro SLOO-sham RA-dee-oh. YOO-cher sam pro-CHEE-ta-oh doog CHLA-nak",
    },
    {
      id: "s20",
      type: "teach",
      title: "✍️ Writing rehearsal: »Što sam jučer čitao i gledao«",
      body:
        "The unit test ends with your **first B1 writing task**: 80–150 words about your media day yesterday. Build it from this scaffold:\n\n1. **Opening habits** (impf ×2): *Obično ujutro čitam portale…*\n2. **Yesterday, finished** (pf ×2): *Jučer sam pročitao… / pogledala sam…*\n3. **One dok-sentence**: *Dok sam gledao emisiju, …je došla / je počela kiša.*\n4. **Tonight's plan** (future I, pf): *Večeras ću poslušati… / napisat ću…*\n\nModel text (~90 words) — read it aloud, then note every aspect choice:\n\n> Obično ujutro čitam portale na mobitelu, a navečer gledam televiziju. Uvijek slušam radio dok pijem kavu. Jučer sam pročitao jako dug članak. Naslov je bio kratak, ali članak je bio dug. Onda sam pogledao jednu emisiju na televiziji. Dok sam gledao emisiju, Ana je došla. Odjednom je počela kiša, i onda smo zajedno gledali vijesti. Voditelj je bio jako dobar. Večeras ću poslušati jednu emisiju na radiju i napisat ću poruku prijatelju.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "habits 〰️", emoji: "1️⃣", example: "Obično ujutro čitam…" },
          { label: "yesterday ✅✅", emoji: "2️⃣", example: "Jučer sam pročitao…" },
          { label: "dok-sentence 〰️+📍", emoji: "3️⃣", example: "Dok sam gledao…, … je došla." },
          { label: "tonight 🎯", emoji: "4️⃣", example: "Večeras ću poslušati…" },
        ],
      },
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Unit 17 complete.** You now:\n\n- sort any pair into its machine (prefix · -nuti · stem change · suppletive)\n- keep habits imperfective and pin events perfectively\n- narrate with the spine: *dok + impf, then the pf chain*\n- own the newsroom: *novine, članak, portal, emisija, voditelj, mediji…*\n\nWords tonight: mediji, časopis, intervju, reklama, društvene mreže, voditi.\n\n**Next**: the story «Vijest dana», the unit test — and at its end, your first B1 writing task. The scaffold from the writing-rehearsal slide is waiting in your notes.",
      vocabIds: [
        "b1u17.mediji", "b1u17.casopis", "b1u17.intervju",
        "b1u17.reklama", "b1u17.drustvene-mreze", "b1u17.voditi",
      ],
    },
  ],
  srsCloze: [
    { front: "the media (pl) = ___", answers: ["mediji"], back: "mediji (sg medij).", tts: "Mediji su danas brzi." },
    { front: "magazine = ___", answers: ["časopis", "casopis"], back: "časopis (m).", tts: "Čitam časopis svaki tjedan." },
    { front: "Novinar je napravio intervju ___ Markom. (with)", answers: ["s", "sa"], back: "s + INS — intervju s Markom.", tts: "Novinar je napravio intervju s Markom." },
    { front: "advertisement = ___", answers: ["reklama"], back: "reklama (f).", tts: "Reklama je bila duga." },
    { front: "social media = ___ (two words)", answers: ["društvene mreže", "drustvene mreze"], back: "društvene mreže (f pl).", tts: "Tom voli društvene mreže." },
    { front: "voditelj is the person who ___ (verb!)", answers: ["vodi"], back: "voditi — Voditeljica vodi emisiju.", tts: "Voditeljica vodi emisiju." },
    { front: "Večeras ću ___ (pogledati/gledati) jednu emisiju.", answers: ["pogledati"], back: "One show, through → perfective.", tts: "Večeras ću pogledati jednu emisiju." },
  ],
  notes: {
    inOneSentence: {
      en: "Consolidation: sort any pair into its machine, keep habits imperfective, pin events perfectively — then write 80–150 words about your media day from the four-slot scaffold.",
      exampleHr: "Ujutro slušam radio. Jučer sam pročitao dug članak.",
    },
    deepDive: [
      {
        title: "The grand pattern table (your printable)",
        body:
          "One page, every pair from U16–U17. If you can place a verb in its bin, you can usually guess its partner's shape:",
        table: {
          caption: "U16–U17 pairs by machine",
          headers: ["machine", "how to spot it", "pairs"],
          rows: [
            ["1 · prefix", "pf = prefix + impf", "napisati · pročitati · pogledati · poslušati · naučiti · popiti · pojesti · napraviti(!)"],
            ["2 · -nuti", "pf ends -nuti; past often drops -nu-", "dignuti (digao) · krenuti (krenuo)"],
            ["3 · stem change", "impf has -ova-/-ava-/-inja-", "kupiti · dati · početi · završiti · objaviti · prenijeti"],
            ["4 · suppletive", "no shared stem — memorize", "reći · doći · otići · uzeti"],
          ],
        },
      },
      {
        title: "The writing scaffold, annotated",
        body:
          "Four slots, four grammar jobs:\n\n1. **Habits** — imperfective present + a magnet (*obično, ujutro, uvijek, svaki dan*)\n2. **Yesterday's achievements** — perfective perfekt with U8 agreement (*pročitao/pročitala sam*)\n3. **The dok-sentence** — impf background + pf pin, je second in each clause\n4. **Tonight** — future I with an aspect choice (*ću pogledati* = through to the end; *ću gledati* = will be watching)\n\nWord-count strategy: 2 sentences per slot ≈ 100 words. Stay inside vocabulary you've been taught — the grader knows what you know.",
      },
      {
        title: "Common aspect traps in compositions",
        body:
          "The four errors the AI grader will hunt for:\n\n- habit with a perfective (*Svaki dan pročitam…* ❌)\n- duration with a perfective (*Napisao sam poruku cijelo jutro* ❌)\n- dok + perfective for background (*Dok je Marko došao…* ❌)\n- aspect-blind future (*Večeras ću gledati jednu emisiju do kraja* → *pogledat ću* ✅)",
      },
    ],
    commonMistakes: [
      {
        wrong: "Svaki tjedan pročitam časopis.",
        right: "Svaki tjedan čitam časopis.",
        why: "Weekly habit → imperfective, no matter that each read completes.",
      },
      {
        wrong: "Pročitao sam časopis cijelo jutro.",
        right: "Čitao sam časopis cijelo jutro.",
        why: "cijelo jutro stretches — a perfective point can't cover a duration.",
      },
      {
        wrong: "Večeras ću pogledati televiziju.",
        right: "Večeras ću gledati televiziju. / Večeras ću pogledati jednu emisiju.",
        why: "You finish a SHOW (pogledati emisiju), not \"the TV\" — open-ended watching stays imperfective.",
      },
      {
        wrong: "Volim društvenih mreža.",
        right: "Volim društvene mreže.",
        why: "voljeti takes ACC: društvene mreže. (GEN pl belongs after nema/puno.)",
      },
    ],
    memoryHooks: [
      "Writing scaffold = 4 slots: habits → done-yesterday → dok → tonight. Two sentences each and you're at 100 words.",
      "Before writing any sentence, ask the one question: pattern or pin?",
      "voditelj finally decoded: voditi + -telj — the one who leads the show.",
      "mediji, portali, kanali — the media love the plural (like novine, vijesti).",
    ],
    connects: [
      { label: "The story spine you'll write with (Unit 17 L4)", lessonId: "b1u17l4" },
      { label: "Aspect in the future (Unit 16 L3)", lessonId: "a2u16l3" },
      { label: "Machine 1 — where this unit began (Unit 17 L1)", lessonId: "b1u17l1" },
    ],
    selfCheck: [
      { q: "The four writing-scaffold slots, in order?", a: "Habits (impf) → yesterday's finished events (pf) → one dok-sentence → tonight's plan (future I)." },
      { q: "»Tonight I'll watch one show (through)« = ?", a: "Večeras ću pogledati jednu emisiju." },
      { q: "Why is »Večeras ću pogledati televiziju« odd?", a: "Open-ended TV-watching is imperfective; you pogledati a bounded thing (jednu emisiju)." },
      { q: "Name one pair from each machine.", a: "e.g. čitati/pročitati · dizati/dignuti · davati/dati · govoriti/reći." },
      { q: "What does the AI grader check beyond vocabulary?", a: "Aspect choice (habit/duration/dok/future), perfekt agreement, clitic position." },
    ],
  },
};
