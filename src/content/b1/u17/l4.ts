import type { Lesson } from "@/types/content";

/**
 * B1 U17 L4 — Vijest dana (aspect in past narration — the story spine)
 * Spec: curriculum/B1/unit-17.md · grammar-reference §11 "narration spine" anchor.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * dok + imperfective = background; perfective chain = events. objavljivati is
 * the impf of U15's objaviti (-iva → -ujem flagged); prenositi/prenijeti new
 * full pair; javljati mentioned as pair of U12's javiti se (teach-table only).
 */
export const b1u17l4: Lesson = {
  id: "b1u17l4",
  unitId: "b1u17",
  title: "Vijest dana",
  titleEn: "The news item of the day — narrating with aspect",
  grammarTags: ["aspect-narration", "dok-clauses"],
  estMinutes: 20,
  vocab: [
    { id: "b1u17.dogoditi-se", image: "/img/dogoditise.png", hr: "dogoditi se", en: "to happen (pf)", pos: "verb", icon: "💥", exampleHr: "Što se dogodilo?", exampleEn: "What happened?" },
    { id: "b1u17.dogadaj", image: "/img/dogadaj.png", hr: "događaj", en: "event (m)", pos: "noun", gender: "m", icon: "📅", exampleHr: "Događaj je počeo u devet.", exampleEn: "The event started at nine." },
    { id: "b1u17.dok", image: "/img/dok.png", hr: "dok", en: "while (opens the background)", pos: "conj", icon: "⏳", exampleHr: "Dok je Ana gledala vijesti, Marko je došao.", exampleEn: "While Ana was watching the news, Marko arrived." },
    { id: "b1u17.odjednom", image: "/img/odjednom.png", hr: "odjednom", en: "suddenly", pos: "adv", icon: "⚡", exampleHr: "Odjednom je počela kiša.", exampleEn: "Suddenly it started raining." },
    { id: "b1u17.napokon", image: "/img/napokon.png", hr: "napokon", en: "finally / at last", pos: "adv", icon: "🏁", exampleHr: "Portal je napokon objavio vijest.", exampleEn: "The news site finally published the story." },
    { id: "b1u17.objavljivati", image: "/img/objavljivati.png", hr: "objavljivati", en: "to publish (impf; objavljujem!) — pair of objaviti", pos: "verb", icon: "🚀", exampleHr: "Novinari objavljuju članke svaki dan.", exampleEn: "Journalists publish articles every day." },
    { id: "b1u17.prenositi", image: "/img/prenositi.png", hr: "prenositi", en: "to broadcast / carry (impf; prenosim)", pos: "verb", icon: "📡", exampleHr: "Radio prenosi koncert.", exampleEn: "The radio is broadcasting a concert." },
    { id: "b1u17.prenijeti", image: "/img/prenijeti.png", hr: "prenijeti", en: "to broadcast (once) — pf; prenesem, prenio/prenijela", pos: "verb", icon: "📦", exampleHr: "Televizija je prenijela vijest.", exampleEn: "The TV carried the story." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Vijest dana",
      subtitle: "Narration has a grammar: the background hums along imperfectively — until something perfective HAPPENS.",
      emoji: "📅",
      items: [
        { emoji: "〰️", label: "The background", hint: "dok + imperfective" },
        { emoji: "📍", label: "The event pins", hint: "perfective chain" },
        { emoji: "🧲", label: "Magnet words", hint: "odjednom · napokon" },
        { emoji: "📰", label: "News verbs", hint: "objavljivati · prenositi" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The story spine",
      subtitle: "Every news item, anecdote and biography is a wavy band with pins in it.",
      emoji: "〰️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "suppletives + U16 past" },
        { emoji: "🃏", label: "New words", hint: "the narration eight" },
        { emoji: "🎧", label: "Hear the spine", hint: "background… event!" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the pieces of a story",
      items: [
        {
          prompt: "L3: past of doći, for Marko?",
          options: ["došao je", "dolazio je", "dođem"],
          correctIndex: 0,
          explanation: "doći → došao. Events arrive perfectively.",
        },
        {
          prompt: "U16 magnet: »Pisao sam pismo ___.« — which phrase fits the imperfective?",
          options: ["cijelo jutro", "i onda", "napokon"],
          correctIndex: 0,
          explanation: "Duration stretches → imperfective. (i onda / napokon push perfective.)",
        },
        {
          prompt: "L2: davati → pf?",
          options: ["dati", "davao", "dignuti"],
          correctIndex: 0,
          explanation: "Machine 3: stretchy davati → short dati.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The narration eight",
      vocabIds: [
        "b1u17.dogoditi-se", "b1u17.dogadaj", "b1u17.dok", "b1u17.odjednom",
        "b1u17.napokon", "b1u17.objavljivati", "b1u17.prenositi", "b1u17.prenijeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The story spine: 〰️ band + 📍 pins",
      body:
        "Past narration runs on two rails:\n\n- **dok + imperfective** opens the background — what was going on\n- the **perfective chain** carries the plot — what happened, one pin after another\n\n*Dok je Ana gledala vijesti, Marko je došao.*\n\n⚠️ Clitic check: **each clause owns its own second position** — *je* sits second inside the dok-clause AND second in the main clause.",
      diagram: {
        kind: "contrast",
        left: {
          title: "background 〰️ (dok + impf)",
          emoji: "〰️",
          lines: [
            { hr: "Dok je Ana gledala vijesti…", en: "While Ana was watching the news…" },
            { hr: "Dok je baka slušala radio…", en: "While grandma was listening to the radio…" },
          ],
        },
        right: {
          title: "events 📍 (pf chain)",
          emoji: "📍",
          lines: [
            { hr: "…Marko je došao.", en: "…Marko arrived." },
            { hr: "…odjednom je počela kiša.", en: "…suddenly it started raining." },
          ],
        },
      },
      examples: [
        { hr: "Dok je Ana gledala vijesti, Marko je došao.", en: "While Ana was watching the news, Marko arrived." },
        { hr: "Odjednom je počela kiša.", en: "Suddenly it started raining." },
        { hr: "Portal je napokon objavio vijest.", en: "The news site finally published the story." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: background or event?",
      items: [
        {
          prompt: "»Dok je Tom čitao novine…« — this part of the story is…",
          options: ["the background 〰️", "an event 📍", "a future plan"],
          correctIndex: 0,
          explanation: "dok + imperfective = the scenery.",
        },
        {
          prompt: "»…odjednom je počela kiša.« — and this is…",
          options: ["an event 📍", "the background 〰️", "a habit"],
          correctIndex: 0,
          explanation: "odjednom + perfective = a pin in the story.",
        },
        {
          prompt: "Which verb goes in the dok-slot? »Dok je baka ___ radio…«",
          options: ["slušala", "poslušala", "posluša"],
          correctIndex: 0,
          explanation: "dok wants the ongoing background → imperfective slušala.",
        },
        {
          prompt: "»What happened?« =",
          options: ["Što se dogodilo?", "Što se događa?", "Što je dogodilo?"],
          correctIndex: 0,
          explanation: "dogoditi se, past — and se+je drops the je (U15): Što se dogodilo?",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Glagoli redakcije",
      subtitle: "The newsroom's own pairs: publish and broadcast, ongoing and done.",
      emoji: "📰",
      items: [
        { emoji: "🚀", label: "objavljivati → objaviti", hint: "the -iva → -ujem shift" },
        { emoji: "📡", label: "prenositi → prenijeti", hint: "prenio, prenijela!" },
        { emoji: "✏️", label: "Build a news item", hint: "choose every aspect" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "objavljivati / prenositi — the newsroom pairs",
      body:
        "**objavljivati 〰️ / objaviti ✅** — you've had *objaviti* since U15 (*Ana je objavila sliku*); its imperfective carries the -iva- stretch and the U7 present shift: ***objavljujem*** (like *kupujem*).\n\n**prenositi 〰️ / prenijeti ✅** — to carry/broadcast: *prenosim* · pf *prenesem*, past ***prenio, prenijela*** (ijekavian switch!).\n\nSame family, mentioned for recognition: *javljati se 〰️ / javiti se ✅* — U12's *Javit ću se!* was the perfective all along.",
      table: {
        caption: "The newsroom pairs",
        headers: ["〰️ imperfective", "✅ perfective", "watch out"],
        rows: [
          ["objavljivati (objavljujem)", "objaviti (objavim)", "-iva- → -ujem present"],
          ["prenositi (prenosim)", "prenijeti (prenesem)", "past: prenio, prenijela"],
          ["javljati se", "javiti se (U12!)", "recognition — se rules apply"],
        ],
      },
      examples: [
        { hr: "Novinari objavljuju članke svaki dan.", en: "Journalists publish articles every day. (habit → impf)" },
        { hr: "Portal je objavio vijest, a televizija je vijest prenijela navečer.", en: "The site published the story, and the TV carried it in the evening." },
        { hr: "Radio prenosi koncert.", en: "The radio is broadcasting a concert. (live, ongoing → impf)" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: the newsroom chooses aspect",
      items: [
        {
          prompt: "»Novinarka ___ članke svaki tjedan.« (objavljivati/objaviti)",
          options: ["objavljuje", "objavi", "objavila"],
          correctIndex: 0,
          explanation: "Weekly routine → imperfective objavljuje (-ujem shift).",
        },
        {
          prompt: "»Televizija je sinoć ___ koncert.« (one broadcast, done)",
          options: ["prenijela", "prenosila", "prenosi"],
          correctIndex: 0,
          explanation: "One completed broadcast → prenijela. (sinoć = last night, from U8.)",
        },
        {
          prompt: "The present of objavljivati is…",
          options: ["objavljujem", "objavljivam", "objavim"],
          correctIndex: 0,
          explanation: "-ivati → -ujem, the kupujem shift. (objavim = pf present.)",
        },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "___ je Ana gledala televiziju, Marko je došao. (while)",
      blanks: [["Dok", "dok"]],
      translation: "While Ana was watching TV, Marko arrived.",
      wordBank: ["Dok", "Odjednom", "Napokon"],
      explanation: "dok opens the imperfective background.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Odjednom je ___ kiša. (počinjati/početi)",
      blanks: [["počela", "pocela"]],
      translation: "Suddenly it started raining.",
      wordBank: ["počela", "počinjala", "počinje"],
      explanation: "odjednom pins an event → perfective počela.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Portal je napokon ___ vijest. (objavljivati/objaviti)",
      blanks: [["objavio"]],
      translation: "The site finally published the story.",
      wordBank: ["objavio", "objavljivao", "objavljuje"],
      explanation: "napokon = the awaited completion → perfective objavio.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Novinari ___ članke svaki dan. (objavljivati/objaviti)",
      blanks: [["objavljuju"]],
      translation: "Journalists publish articles every day.",
      wordBank: ["objavljuju", "objave", "objavili"],
      explanation: "Daily routine → imperfective objavljuju.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Dok", "je", "Ana", "gledala", "vijesti,", "Marko", "je", "došao"],
      answers: ["Dok je Ana gledala vijesti, Marko je došao."],
      en: "While Ana was watching the news, Marko arrived.",
      explanation: "je second in BOTH clauses — each clause owns its own train.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear the spine sentence until it's music, then tell one of your own.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "the spine sentence" },
        { emoji: "🎤", label: "Your mini-story", hint: "dok + odjednom" },
        { emoji: "🔗", label: "Weather flashback", hint: "U8 kiša" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Dok je Ana gledala vijesti, Marko je došao.",
      explanation: "Dok je Ana gledala vijesti, Marko je došao — THE spine sentence of the unit.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Odjednom je počela kiša.",
      explanation: "Odjednom je počela kiša — suddenly it started raining.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Dok sam čitao novine, Ana je došla.",
      targetEn: "narrate it — While I was reading the paper, Ana arrived.",
      phonetic: "dok sam CHEE-ta-oh NO-vee-neh, A-na yeh DOSH-la",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: clitics and weather",
      items: [
        {
          prompt: "U15: »Dok je Ana gledala vijesti…« — why is je right after dok?",
          options: [
            "clitics sit in 2nd position of THEIR clause — dok counts as slot 1",
            "je always follows dok by a special rule",
            "word order is free here",
          ],
          correctIndex: 0,
          explanation: "Each clause has its own train; dok is the engine of its clause.",
        },
        {
          prompt: "Listen (U8): what was the weather doing?",
          tts: "Jučer je padala kiša cijeli dan.",
          options: ["raining all day (ongoing)", "it rained once and stopped", "it was sunny"],
          correctIndex: 0,
          explanation: "padala + cijeli dan — an imperfective background stretch.",
        },
        {
          prompt: "U16: »Ana je pročitala knjigu za dva dana.« — why pročitala?",
          options: [
            "whole book finished in a bounded time → perfective",
            "knjiga is feminine",
            "za forces the perfective",
          ],
          correctIndex: 0,
          explanation: "\"in two days, done\" = one wrapped-up whole.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The story spine**: *dok + imperfective* = background band 〰️ · perfective chain = event pins 📍. *Dok je Ana gledala vijesti, Marko je došao.*\n\n**Magnets**: *dok, cijeli dan, svaki dan* → 〰️ · *odjednom, napokon, i onda* → ✅.\n\n**Newsroom pairs**: *objavljivati (objavljujem!) / objaviti · prenositi / prenijeti (prenio, prenijela)*.\n\n**Clitics**: each clause owns its own second position.\n\nWords tonight: the narration eight.\n\nNext: everything together — your media day, and B1's first writing task.",
      vocabIds: [
        "b1u17.dogoditi-se", "b1u17.dogadaj", "b1u17.dok", "b1u17.odjednom",
        "b1u17.napokon", "b1u17.objavljivati", "b1u17.prenositi", "b1u17.prenijeti",
      ],
    },
  ],
  srsCloze: [
    { front: "___ je Ana gledala vijesti, Marko je došao. (while)", answers: ["Dok", "dok"], back: "dok + imperfective = the background.", tts: "Dok je Ana gledala vijesti, Marko je došao." },
    { front: "Odjednom je ___ (početi) kiša.", answers: ["počela", "pocela"], back: "Event pin → perfective počela.", tts: "Odjednom je počela kiša." },
    { front: "Što se ___ (dogoditi)? (What happened?)", answers: ["dogodilo"], back: "Što se dogodilo? — se+je → je drops.", tts: "Što se dogodilo?" },
    { front: "suddenly = ___", answers: ["odjednom"], back: "odjednom — a perfective magnet.", tts: "Odjednom je počela kiša." },
    { front: "finally / at last = ___", answers: ["napokon"], back: "napokon — a perfective magnet.", tts: "Portal je napokon objavio vijest." },
    { front: "objavljivati, present = ___ (the kupujem shift)", answers: ["objavljujem"], back: "-ivati → -ujem.", tts: "Novinari objavljuju članke svaki dan." },
    { front: "prenijeti, past (f) = ___ (ijekavian switch!)", answers: ["prenijela"], back: "prenio, prenijela.", tts: "Televizija je prenijela vijest." },
    { front: "event (noun) = ___", answers: ["događaj", "dogadaj"], back: "događaj (m).", tts: "Događaj je počeo u devet." },
  ],
  notes: {
    inOneSentence: {
      en: "Past narration = an imperfective background band (dok + impf) with perfective event pins on top — and each clause keeps its clitics in its own second position.",
      exampleHr: "Dok je Ana gledala vijesti, Marko je došao.",
    },
    deepDive: [
      {
        title: "The magnet table, completed",
        body:
          "U16 gave you the first magnets; the narration set completes them. When one of these words appears, it pulls its aspect toward it:",
        table: {
          caption: "Context magnets v2",
          headers: ["magnet", "pulls", "example"],
          rows: [
            ["dok", "〰️ (in the dok-clause)", "Dok je baka slušala radio…"],
            ["cijeli dan / cijelo jutro", "〰️", "Pisao sam cijelo jutro."],
            ["svaki dan / uvijek / obično", "〰️", "Novinari objavljuju članke svaki dan."],
            ["odjednom", "✅", "Odjednom je počela kiša."],
            ["napokon", "✅", "Napokon je objavio vijest."],
            ["i onda / za dva dana", "✅", "Pročitala je knjigu za dva dana."],
          ],
        },
      },
      {
        title: "dok-clauses and the clitic train",
        body:
          "*dok* opens a clause — and **that clause gets its own second position**:\n\n- *Dok **je** Ana gledala vijesti, Marko **je** došao.* — two clauses, two trains, je second in each\n- ❌ *Dok Ana je gledala…* — je missed its slot\n\nThe same happens with the U15 rules you know: *Dok se Ana odmarala…* (se second), and se+je still drops the je: *Što se dogodilo?*",
      },
      {
        title: "prenijeti's ijekavian switch (and friends)",
        body:
          "*prenijeti* shows a jat alternation in the participle: **prenio** (m — short i) but **prenijela** (f — ije returns). You know this shape from *htio/htjela*: the masculine squeezes the syllable, the feminine restores it.\n\nThe -iva-/-ava- family keeps growing: *objavljivati → objavljujem* joins *kupovati → kupujem* (U7) and *putovati → putujem* (U9). See -ivati/-ovati, think -ujem.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Dok je Marko došao, Ana je gledala vijesti.",
        right: "Dok je Ana gledala vijesti, Marko je došao.",
        why: "dok frames the BACKGROUND (imperfective); the perfective event belongs in the main clause.",
      },
      {
        wrong: "Dok Ana je gledala vijesti…",
        right: "Dok je Ana gledala vijesti…",
        why: "je must be second in its clause — right after dok.",
      },
      {
        wrong: "Napisao sam članak cijeli dan.",
        right: "Pisao sam članak cijeli dan.",
        why: "A point can't stretch across a whole day — duration takes the imperfective.",
      },
      {
        wrong: "Što je se dogodilo?",
        right: "Što se dogodilo?",
        why: "se + je → the je drops (U15). And the order would be se…je anyway, never je se.",
      },
    ],
    memoryHooks: [
      "Draw every story first: one wavy band, then push pins into it. Band = dok-verbs, pins = events.",
      "odjednom = lightning ⚡ — it strikes once, perfectively.",
      "napokon = the finish-line flag 🏁 — you only wave it over a completed thing.",
      "Two clauses, two trains: dok's carriage has its own je in seat #2.",
      "prenio/prenijela = htio/htjela — the masculine shrinks, the feminine sings.",
    ],
    connects: [
      { label: "Aspect in the past + first magnets (Unit 16 L2)", lessonId: "a2u16l2" },
      { label: "The clitic train & se+je drop (Unit 15 L3)", lessonId: "a2u15l3" },
      { label: "Next: consolidation + the writing task (Unit 17 L5)", lessonId: "b1u17l5" },
    ],
    selfCheck: [
      { q: "The two rails of past narration?", a: "dok + imperfective background; perfective chain of events." },
      { q: "Say the spine sentence from memory.", a: "Dok je Ana gledala vijesti, Marko je došao." },
      { q: "Three perfective magnets?", a: "odjednom, napokon, i onda (also za + time: za dva dana)." },
      { q: "Present of objavljivati — and the pattern it follows?", a: "objavljujem — the -ivati/-ovati → -ujem shift (kupujem, putujem)." },
      { q: "»What happened?« — and which clitic rule hides in it?", a: "Što se dogodilo? — se+je drops the je." },
    ],
  },
};
