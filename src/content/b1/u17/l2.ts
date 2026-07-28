import type { Lesson } from "@/types/content";

/**
 * B1 U17 L2 — Na televiziji (aspect pair formation II: -nu- perfectives & stem changes)
 * Spec: curriculum/B1/unit-17.md · grammar-reference §11 "Pair-formation patterns" #2–3.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Machines 2 (-nuti: dizati→dignuti, kretati→krenuti — U9's krenuti explained)
 * and 3 (stem change: kupovati→kupiti, davati→dati, počinjati→početi,
 * završavati→završiti). digao/digla participle callout. dati finally carded.
 */
export const b1u17l2: Lesson = {
  id: "b1u17l2",
  unitId: "b1u17",
  title: "Na televiziji",
  titleEn: "On TV — two more machines",
  grammarTags: ["aspect-formation", "aspect-nu-perfectives", "aspect-stem-change"],
  estMinutes: 20,
  vocab: [
    { id: "b1u17.televizija", hr: "televizija", en: "television", pos: "noun", gender: "f", icon: "📺", exampleHr: "Gledam vijesti na televiziji.", exampleEn: "I watch the news on TV." },
    { id: "b1u17.emisija", hr: "emisija", en: "TV show / programme", pos: "noun", gender: "f", icon: "🎬", exampleHr: "Voditelj je počeo emisiju u osam.", exampleEn: "The host started the show at eight." },
    { id: "b1u17.program", hr: "program", en: "programming / schedule", pos: "noun", gender: "m", icon: "🗓️", exampleHr: "Večeras je program dobar.", exampleEn: "Tonight the programming is good." },
    { id: "b1u17.kanal", hr: "kanal", en: "channel", pos: "noun", gender: "m", icon: "📡", exampleHr: "Koji kanal gledaš?", exampleEn: "Which channel are you watching?" },
    { id: "b1u17.voditelj", hr: "voditelj", en: "host / presenter (m; voditeljica f)", pos: "noun", gender: "m", icon: "🎙️", exampleHr: "Voditelj je jako dobar.", exampleEn: "The host is very good." },
    { id: "b1u17.gledatelj", hr: "gledatelj", en: "viewer (m)", pos: "noun", gender: "m", icon: "👀", exampleHr: "Gledatelji vole emisiju.", exampleEn: "The viewers love the show." },
    { id: "b1u17.dizati", hr: "dizati", en: "to raise / lift (impf; dižem)", pos: "verb", icon: "🏋️", exampleHr: "Marko diže čašu.", exampleEn: "Marko is raising his glass." },
    { id: "b1u17.dignuti", hr: "dignuti", en: "to raise (once) — pf; digao/digla!", pos: "verb", icon: "⬆️", exampleHr: "Digla je ruku.", exampleEn: "She raised her hand." },
    { id: "b1u17.dati", hr: "dati", en: "to give (pf of davati; dam, dao)", pos: "verb", icon: "🎁", exampleHr: "Baka mi je dala novine.", exampleEn: "Grandma gave me the newspaper." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Na televiziji",
      subtitle: "Two more machines — and you already own half their output.",
      emoji: "📺",
      items: [
        { emoji: "⚙️", label: "-nuti perfectives", hint: "dizati → dignuti" },
        { emoji: "🔧", label: "Stem changes", hint: "kupovati → kupiti, at last!" },
        { emoji: "📺", label: "TV words", hint: "emisija, voditelj, kanal…" },
        { emoji: "⚠️", label: "digao, not dignuo", hint: "the participle trap" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Machine 2: -nuti",
      subtitle: "A -nu- snap in the middle makes an action happen ONCE.",
      emoji: "⚙️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "yesterday's prefixes" },
        { emoji: "🃏", label: "New words", hint: "the TV nine" },
        { emoji: "⬆️", label: "dizati → dignuti", hint: "and U9's krenuti decoded" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: machine 1 still running?",
      items: [
        {
          prompt: "Yesterday's machine: slušati → ___",
          options: ["poslušati", "naslušati", "slušam"],
          correctIndex: 0,
          explanation: "po- + slušati. Machine 1: prefix + old friend.",
        },
        {
          prompt: "»Svaki dan ___ novine.« (habit!)",
          options: ["čitam", "pročitam", "pročitao"],
          correctIndex: 0,
          explanation: "Habits are imperfective, always.",
        },
        {
          prompt: "Listen (U6): what is she doing?",
          tts: "Navečer gledam vijesti.",
          options: ["watching the news in the evening", "reading the paper", "listening to the radio"],
          correctIndex: 0,
          explanation: "gledam vijesti — your U6 phrase, tonight's topic.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The TV nine",
      vocabIds: [
        "b1u17.televizija", "b1u17.emisija", "b1u17.program", "b1u17.kanal",
        "b1u17.voditelj", "b1u17.gledatelj", "b1u17.dizati", "b1u17.dignuti", "b1u17.dati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Machine 2: the -nu- snap ⚙️",
      body:
        "Some perfectives are built with **-nuti** on the stem — the action snaps shut, done once:\n\n- *dizati* 〰️ (be lifting) → ***dignuti*** ✅ (lift once) — *dignem, dignеš…*\n- *kretati* 〰️ (be moving off) → ***krenuti*** ✅ — **you've said *Krenut ćemo rano* since U9!**\n\n⚠️ **The participle trap**: in the standard past, -nuti verbs often DROP the -nu-: *dignuti → **digao, digla*** (you'll hear *dignuo* on the street — write *digao*). But *krenuti → krenuo, krenula* keeps it. Learn the participle with the verb.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "digao, digla — not dignuo",
        text: "Digla je ruku. ✅ · Dignula je ruku ❌ (heard, but not standard writing). krenuti keeps it: Krenuli smo rano. ✅",
      },
      examples: [
        { hr: "Marko diže čašu.", en: "Marko is raising his glass. (mid-lift — imperfective)" },
        { hr: "Digao je čašu i popio vodu.", en: "He raised his glass and drank up the water. (two clean events)" },
        { hr: "Krenuli smo rano ujutro.", en: "We set off early in the morning.", note: "U9's krenuti — a -nu- perfective all along (impf: kretati)" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: snap or stretch?",
      items: [
        {
          prompt: "dizati → the do-it-once version:",
          options: ["dignuti", "dizanuti", "podizati"],
          correctIndex: 0,
          explanation: "Machine 2: stem + -nuti → dignuti.",
        },
        {
          prompt: "She raised her hand (standard writing):",
          options: ["Digla je ruku.", "Dignula je ruku.", "Dizala je ruku."],
          correctIndex: 0,
          explanation: "digao/digla — the -nu- drops in the standard participle. (Dizala = was raising, different meaning.)",
        },
        {
          prompt: "U9's krenuti is the perfective of ___",
          options: ["kretati", "krenuo", "ići"],
          correctIndex: 0,
          explanation: "kretati/krenuti — you used the pf for two units without knowing it.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Machine 3: stem change",
      subtitle: "The pairs that puzzled you since U7 — kupovati/kupiti, davati/dati — finally explained.",
      emoji: "🔧",
      items: [
        { emoji: "🔧", label: "The stretchy stem", hint: "-ava-/-ova- = imperfective" },
        { emoji: "🎁", label: "dati, carded at last", hint: "dam · dao · dala" },
        { emoji: "🧩", label: "Sort the bins", hint: "which machine built it?" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "Machine 3: the stretchy stem 🔧",
      body:
        "In these pairs nobody added a prefix — the **imperfective carries a longer, stretchy stem** (-ova-, -ava-, -inja-) and the perfective is short:\n\n| stretchy 〰️ | short ✅ |\n\nRemember the U7 present-tense shift: *kupovati → kupujem* (-ova- → -uje-). The perfective is plain: *kupim, dam, počnem, završim*.",
      table: {
        caption: "Machine 3 — pairs you already half-know",
        headers: ["〰️ imperfective (stretchy)", "✅ perfective (short)", "since"],
        rows: [
          ["kupovati (kupujem)", "kupiti (kupim)", "U7 / U8"],
          ["davati (dajem)", "dati (dam, dao) 🆕", "U10 / today"],
          ["počinjati (počinjem)", "početi (počnem, počeo)", "U6 / U16"],
          ["završavati (završava)", "završiti (završim)", "U6 / U16"],
        ],
      },
      examples: [
        { hr: "Ana gleda vijesti na televiziji.", en: "Ana is watching the news on TV." },
        { hr: "Voditelj je počeo emisiju u osam.", en: "The host started the show at eight." },
        { hr: "Baka mi je dala novine.", en: "Grandma gave me the newspaper.", note: "one handover → dati; the habit would be daje" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Sort it: which machine built this pair?",
      items: [
        {
          prompt: "pročitati was built by…",
          options: ["prefix (machine 1)", "-nuti (machine 2)", "stem change (machine 3)"],
          correctIndex: 0,
          explanation: "pro- + čitati.",
        },
        {
          prompt: "dignuti was built by…",
          options: ["-nuti (machine 2)", "prefix (machine 1)", "stem change (machine 3)"],
          correctIndex: 0,
          explanation: "dizati → dig-nuti.",
        },
        {
          prompt: "dati was built by…",
          options: ["stem change (machine 3)", "prefix (machine 1)", "-nuti (machine 2)"],
          correctIndex: 0,
          explanation: "davati (stretchy -ava-) → dati (short).",
        },
        {
          prompt: "poslušati was built by…",
          options: ["prefix (machine 1)", "-nuti (machine 2)", "stem change (machine 3)"],
          correctIndex: 0,
          explanation: "po- + slušati — yesterday's machine.",
        },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Baka mi je ___ novine. (one handover — davati/dati)",
      blanks: [["dala"]],
      translation: "Grandma gave me the newspaper.",
      wordBank: ["dala", "davala", "daje"],
      explanation: "One completed handover → perfective dala. (davala = used to give / was giving.)",
    },
    {
      id: "s11",
      type: "fill",
      text: "Voditelj je ___ emisiju u osam. (počinjati/početi)",
      blanks: [["počeo", "poceo"]],
      translation: "The host started the show at eight.",
      wordBank: ["počeo", "počinjao", "počinje"],
      explanation: "One clean start at 8:00 → perfective počeo.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Svaki dan baka ___ Tomu novine. (the habit)",
      blanks: [["daje"]],
      translation: "Every day grandma gives Tom the paper.",
      wordBank: ["daje", "dala", "dati"],
      explanation: "svaki dan = habit → imperfective davati → daje.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "kupiti → the habit-half = ___ (you've conjugated it since U7!)",
      answers: ["kupovati"],
      hint: "kupujem is its present",
      explanation: "kupovati (kupujem) 〰️ / kupiti ✅ — machine 3.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Voditelj", "je", "počeo", "emisiju", "u", "osam"],
      answers: ["Voditelj je počeo emisiju u osam."],
      en: "The host started the show at eight.",
      explanation: "je rides second position, right after the subject.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear the machines at work, then talk about tonight's TV.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "dala · televizija" },
        { emoji: "🎤", label: "Tonight's plan", hint: "pogledat ću…" },
        { emoji: "🔗", label: "Clitic flashback", hint: "why mi je, not je mi" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Baka mi je dala novine.",
      explanation: "Baka mi je dala novine — grandma gave me the newspaper.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Gledam vijesti na televiziji.",
      explanation: "Gledam vijesti na televiziji — I watch the news on TV.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Navečer gledam televiziju. Večeras ću pogledati jednu emisiju.",
      targetEn: "your habit + tonight's plan — In the evenings I watch TV. Tonight I'll watch one show (through).",
      phonetic: "NA-veh-cher GLEH-dam teh-leh-VEE-zee-yoo. VEH-cheh-ras choo po-GLEH-da-tee YED-noo eh-MEE-see-yoo",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the train and the -ujem shift",
      items: [
        {
          prompt: "U15: »Baka mi je dala novine.« — why mi je and never je mi?",
          options: [
            "je (the 3sg aux) always rides LAST in the cluster",
            "mi is stressed so it goes first",
            "either order is fine",
          ],
          correctIndex: 0,
          explanation: "The U15 train: DAT (mi) before je — je is the caboose.",
        },
        {
          prompt: "Listen (U6): when does work end?",
          tts: "Posao završava u pet.",
          options: ["at five", "at nine", "at eight"],
          correctIndex: 0,
          explanation: "završavati 〰️ — and now you know its short partner: završiti.",
        },
        {
          prompt: "U7: kupovati in the present = ",
          options: ["kupujem", "kupovam", "kupim"],
          correctIndex: 0,
          explanation: "-ovati → -ujem. (kupim is the PERFECTIVE's present — not \"now\"!)",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Machine 2 — -nuti**: *dizati→dignuti* (⚠️ participle **digao/digla**), *kretati→krenuti* (U9 decoded).\n\n**Machine 3 — stretchy stem**: long impf, short pf: *kupovati→kupiti · davati→**dati** 🆕 · počinjati→početi · završavati→završiti*.\n\n**TV words**: televizija, emisija, program, kanal, voditelj(ica), gledatelj.\n\nWords tonight: the TV nine.\n\nNext: the pairs no machine built — **govoriti/reći, dolaziti/doći** — and why habits are ALWAYS imperfective.",
      vocabIds: [
        "b1u17.televizija", "b1u17.emisija", "b1u17.program", "b1u17.kanal",
        "b1u17.voditelj", "b1u17.gledatelj", "b1u17.dizati", "b1u17.dignuti", "b1u17.dati",
      ],
    },
  ],
  srsCloze: [
    { front: "dizati → pf ___ (machine 2)", answers: ["dignuti"], back: "dignuti — participle digao/digla!", tts: "Digla je ruku." },
    { front: "She raised her hand: ___ je ruku. (standard!)", answers: ["Digla", "digla"], back: "digao/digla — the -nu- drops in the standard past.", tts: "Digla je ruku." },
    { front: "davati → pf ___", answers: ["dati"], back: "dati (dam; dao, dala).", tts: "Baka mi je dala novine." },
    { front: "Baka mi je ___ (dati) novine.", answers: ["dala"], back: "One handover → dala.", tts: "Baka mi je dala novine." },
    { front: "krenuti (U9) is the pf of ___", answers: ["kretati"], back: "kretati/krenuti — machine 2.", tts: "Krenuli smo rano ujutro." },
    { front: "TV show / programme = ___", answers: ["emisija"], back: "emisija (f).", tts: "Voditelj je počeo emisiju u osam." },
    { front: "host / presenter (m) = ___", answers: ["voditelj"], back: "voditelj (f: voditeljica).", tts: "Voditelj je jako dobar." },
    { front: "viewer = ___ (the -telj people!)", answers: ["gledatelj"], back: "gledatelj — gledati + -telj (like voditelj).", tts: "Gledatelji vole emisiju." },
  ],
  notes: {
    inOneSentence: {
      en: "Two more perfective machines: -nuti snaps an action shut once (dizati→dignuti — but past digao/digla!), and stretchy-stem pairs put the length in the imperfective (kupovati→kupiti, davati→dati).",
      exampleHr: "Baka mi je dala novine. Voditelj je počeo emisiju u osam.",
    },
    deepDive: [
      {
        title: "The three machines side by side",
        body:
          "You now own all three regular ways Croatian builds pairs. Sorting a new pair into its bin takes a second and locks it into memory:",
        table: {
          caption: "Machines 1–3 (grammar-reference §11 #1–3)",
          headers: ["machine", "how it works", "examples"],
          rows: [
            ["1 · prefix", "prefix + impf", "na-pisati · pro-čitati · po-slušati"],
            ["2 · -nuti", "stem + -nuti = once", "dizati→dignuti · kretati→krenuti"],
            ["3 · stem change", "long impf, short pf", "kupovati→kupiti · davati→dati · počinjati→početi · završavati→završiti"],
          ],
        },
      },
      {
        title: "The digao/digla rule",
        body:
          "-nuti verbs split in the past participle:\n\n- **drop the -nu-** (standard for many): *dignuti → digao, digla, digli* — you will hear *dignuo/dignula* in speech; standard writing prefers *digao*\n- **keep the -nu-**: *krenuti → krenuo, krenula* — no short form exists\n\nThere's no shortcut: learn the participle as part of the verb — the same habit L3's suppletives will demand (*rekao/rekla, došao/došla*).",
      },
      {
        title: "dati — small verb, big presence",
        body:
          "*dati* (pf of *davati*) is one of the most common verbs in the language and slightly irregular: present *dam, daš, da, damo, date, daju*; past *dao, dala*.\n\nIt loves the U15 clitic train: *Baka **mi je** dala novine.* (DAT mi → je last). In U15 you already built *Dala **mu ga je**.* — now you know why the verb was *dala*: one completed gift.\n\nThe -telj words: *voditelj* (voditi + -telj — L5 gives you the verb), *gledatelj*, *slušatelj* (L3) — the person who does the action, feminine in -ica: *voditeljica*.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Dignula je ruku. (in writing)",
        right: "Digla je ruku.",
        why: "Standard participle drops the -nu-: digao/digla. (dignuo is heard, not written.)",
      },
      {
        wrong: "Baka mi je davala novine jučer. (one handover)",
        right: "Baka mi je dala novine jučer.",
        why: "One completed handover → perfective dati. davala = repeatedly / was giving.",
      },
      {
        wrong: "Kupim kruh svaki dan.",
        right: "Kupujem kruh svaki dan.",
        why: "Habit → imperfective kupovati (kupujem). kupim never means a habit — and never \"now\".",
      },
      {
        wrong: "Voditelj je počinjao emisiju u osam. (last night's show)",
        right: "Voditelj je počeo emisiju u osam.",
        why: "One clean start → perfective početi. počinjao = used to start / was starting.",
      },
    ],
    memoryHooks: [
      "-nuti = a finger snap 🫰: dig-NU-ti — up it goes, once.",
      "digao lost its -nu- in the past — the snap is over, the syllable left with it.",
      "Machine 3 = a rubber band: stretch the stem for the ongoing (kup-OVA-ti), let it snap short for done (kupiti).",
      "dam-daš-da: dati conjugates like a drum roll — three beats, no vowel changes.",
      "-telj = '-er person': voditelj (host-er), gledatelj (view-er), slušatelj (listen-er).",
    ],
    connects: [
      { label: "Machine 1: prefixation (Unit 17 L1)", lessonId: "b1u17l1" },
      { label: "The clitic train mi/je order (Unit 15 L2)", lessonId: "a2u15l2" },
      { label: "Next: suppletive pairs & the habit rule (Unit 17 L3)", lessonId: "b1u17l3" },
    ],
    selfCheck: [
      { q: "Machine 2 in one line — and its past-tense trap?", a: "Stem + -nuti = do it once (dignuti); standard participle drops -nu-: digao, digla." },
      { q: "Which machine built davati/dati?", a: "Machine 3 — stretchy stem imperfective, short perfective." },
      { q: "»Grandma gave me the paper« with the clitics in order?", a: "Baka mi je dala novine. (DAT mi before je; je last.)" },
      { q: "Why kupujem for habits but kupim after moram?", a: "Habits take the imperfective (kupovati→kupujem); kupim is the perfective present — fine after modals, never \"now\"." },
      { q: "krenuti — which machine, which imperfective?", a: "Machine 2 (-nuti); its imperfective is kretati." },
    ],
  },
};
