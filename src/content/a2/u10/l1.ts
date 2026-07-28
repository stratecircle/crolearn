import type { Lesson } from "@/types/content";

/**
 * A2 U10 L1 — Dajem baki poklon (DAT singular: the receiver)
 * Spec: curriculum/A2/unit-10.md · grammar-reference §3 (declension), §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: DAT singular only — prema/k and sviđati se are L2 (previewed on
 * the usage map only); the ACC/DAT valence drill is L3. stan recycled from U5,
 * family receivers from U3, kupiti from U8. The "sentence X-ray drag" visual is
 * realized as a role-identification quiz-set (no drag slide type exists).
 */
export const a2u10l1: Lesson = {
  id: "a2u10l1",
  unitId: "a2u10",
  title: "Dajem baki poklon",
  titleEn: "I'm giving grandma a present — dative singular",
  grammarTags: ["dative-singular", "dative-verbs", "sibilarization"],
  estMinutes: 18,
  vocab: [
    { id: "a2u10.susjed", image: "/img/susjed.png", hr: "susjed", en: "neighbour (m)", pos: "noun", gender: "m", icon: "🧔", exampleHr: "Tom pomaže susjedu.", exampleEn: "Tom helps the neighbour." },
    { id: "a2u10.susjeda", image: "/img/susjeda.png", hr: "susjeda", en: "neighbour (f)", pos: "noun", gender: "f", icon: "👩", exampleHr: "Susjeda je jako dobra.", exampleEn: "The neighbour is very nice." },
    { id: "a2u10.poklon", image: "/img/poklon.png", hr: "poklon", en: "present / gift", pos: "noun", gender: "m", icon: "🎁", exampleHr: "Dajem mami poklon.", exampleEn: "I'm giving mum a present." },
    { id: "a2u10.pismo", image: "/img/pismo.png", hr: "pismo", en: "letter", pos: "noun", gender: "n", icon: "✉️", exampleHr: "Poslala sam baki pismo.", exampleEn: "I sent grandma a letter." },
    { id: "a2u10.davati", image: "/img/davati.png", hr: "davati", en: "to give (dajem)", pos: "verb", icon: "🤲", exampleHr: "Dajem susjedu ključ.", exampleEn: "I'm giving the neighbour the key." },
    { id: "a2u10.pomagati", image: "/img/pomagati.png", hr: "pomagati", en: "to help (pomažem + DAT)", pos: "verb", icon: "🤝", exampleHr: "Pomažem baki.", exampleEn: "I'm helping grandma." },
    { id: "a2u10.poslati", image: "/img/poslati.png", hr: "poslati", en: "to send (pošaljem; poslao/poslala)", pos: "verb", icon: "📮", exampleHr: "Poslat ću bratu pismo.", exampleEn: "I'll send my brother a letter." },
    { id: "a2u10.pokazati", image: "/img/pokazati.png", hr: "pokazati", en: "to show (pokažem; pokazao/pokazala)", pos: "verb", icon: "👉", exampleHr: "Pokazat ću Ani stan.", exampleEn: "I'll show Ana the flat." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dajem baki poklon",
      subtitle: "One ending answers “to whom?” — and you secretly know it already.",
      emoji: "🎁",
      items: [
        { emoji: "🟠", label: "The dative", hint: "case #5 — the receiver" },
        { emoji: "👯", label: "LOC's twin", hint: "same endings, new job" },
        { emoji: "🤝", label: "Give, send, help", hint: "dajem · pošaljem · pomažem" },
        { emoji: "🎤", label: "Who do you help?", hint: "Pomažem mami." },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The receiver's case",
      subtitle: "»Živim u Zagrebu« gave you the endings in U5 — today they get a second job.",
      emoji: "🟠",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "LOC forms & family words" },
        { emoji: "📊", label: "The DAT table", hint: "-u · -i, orange everywhere" },
        { emoji: "🗺️", label: "When to use it", hint: "give → komu? help → komu?" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: forms you already own",
      items: [
        {
          prompt: "Unit 5: »Živim u ___.« (Zagreb)",
          options: ["Zagrebu", "Zagreb", "Zagreba"],
          correctIndex: 0,
          explanation: "Location → LOC: u Zagrebu. Remember that -u — it's about to get a second job.",
        },
        {
          prompt: "Unit 3 family: which word means grandma?",
          options: ["baka", "sestra", "majka"],
          correctIndex: 0,
          explanation: "baka = grandma. Today's receivers are the U3 family: mama, brat, sestra, baka.",
        },
        {
          prompt: "Listen (U8 perfekt): what did she buy?",
          tts: "Kupila sam poklon.",
          options: ["a present", "a letter", "a key"],
          correctIndex: 0,
          explanation: "poklon = present — today you'll say WHO it's for.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the giving words",
      vocabIds: [
        "a2u10.susjed", "a2u10.susjeda", "a2u10.poklon", "a2u10.pismo",
        "a2u10.davati", "a2u10.pomagati", "a2u10.poslati", "a2u10.pokazati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The dative: -u and -i, LOC's twin",
      body:
        "Case #5, the **dative** (orange), marks **the receiver** — the person you give, send, show or tell something TO.\n\nThe gift: **DAT singular looks exactly like LOC singular** (U5). You already produce every form — you're just giving it a new job:\n\n- *Živim u Zagreb**u*** (LOC, where) → *Dajem brat**u** poklon* (DAT, to whom)\n\nWatch the k→c switch in some feminines: *majka → majci, knjiga → knjizi* (but kinship *baka → baki* stays cosy).",
      table: {
        caption: "DAT singular — the receiver's endings",
        headers: ["gender", "ending", "example"],
        colCase: [null, "DAT", "DAT"],
        rows: [
          ["masculine", "-u", "brat → bratu · susjed → susjedu"],
          ["neuter", "-u", "dijete → djetetu"],
          ["feminine -a", "-i", "mama → mami · Ana → Ani · baka → baki"],
          ["fem. k/g → c/z", "-i", "majka → majci · knjiga → knjizi"],
        ],
      },
      examples: [
        { hr: "Dajem mami poklon.", en: "I'm giving mum a present.", highlight: { text: "mami", caseId: "DAT" } },
        { hr: "Tom pomaže susjedu.", en: "Tom helps the neighbour.", highlight: { text: "susjedu", caseId: "DAT" } },
        { hr: "Poslala sam baki pismo.", en: "I sent grandma a letter.", highlight: { text: "baki", caseId: "DAT" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "When do I go orange? The usage map",
      body:
        "The question word is **komu?** — *to whom?* Every box below answers it. (The last two are previews — L2 makes them official.)\n\nAnd the full sentence X-ray: three colors, three jobs:",
      diagram: {
        kind: "usage-map",
        caseId: "DAT",
        boxes: [
          { label: "give → komu?", examples: [{ hr: "Dajem mami poklon.", en: "I give mum a present." }] },
          { label: "send → komu?", examples: [{ hr: "Poslat ću bratu pismo.", en: "I'll send my brother a letter." }] },
          { label: "show → komu?", examples: [{ hr: "Pokazat ću Ani stan.", en: "I'll show Ana the flat." }] },
          { label: "help → komu? (no object!)", examples: [{ hr: "Pomažem baki.", en: "I help grandma." }] },
          { label: "toward — prema/k (L2)", examples: [{ hr: "prema gradu", en: "towards the city" }] },
          { label: "liking — sviđa mi se (L2)", examples: [{ hr: "Sviđa mi se stan.", en: "I like the flat." }] },
        ],
      },
      examples: [
        { hr: "Tom daje Ani ključ.", en: "Tom (subject) gives Ana (receiver) the key (object).", note: "Tom = NOM 🔵 · Ani = DAT 🟠 · ključ = ACC 🔴" },
        { hr: "Kupila sam bratu poklon.", en: "I bought my brother a present.", highlight: { text: "bratu", caseId: "DAT" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the dative",
      items: [
        {
          prompt: "Pokazat ću ___ novi stan. (Ana)",
          options: ["Ani", "Anu", "Ane"],
          correctIndex: 0,
          explanation: "Receiver → DAT: Ana → Ani. (Anu is ACC, Ane is GEN.)",
        },
        {
          prompt: "Pomažem ___. (brat)",
          options: ["bratu", "brata", "brat"],
          correctIndex: 0,
          explanation: "pomagati takes DAT: bratu. (Not ACC brata — »help« serves a person.)",
        },
        {
          prompt: "Dajem ___ knjigu. (majka — careful!)",
          options: ["majci", "majki", "majku"],
          correctIndex: 0,
          explanation: "k → c before -i: majka → majci.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Giving, sending, showing — tap to hear",
      items: [
        { hr: "Dajem susjedu ključ.", en: "I'm giving the neighbour the key.", highlight: { text: "susjedu", caseId: "DAT" } },
        { hr: "Poslat ću mami pismo.", en: "I'll send mum a letter.", highlight: { text: "mami", caseId: "DAT" } },
        { hr: "Pokazala sam susjedi stan.", en: "I showed the neighbour (f) the flat.", highlight: { text: "susjedi", caseId: "DAT" } },
        { hr: "Tko pomaže baki? — Tom pomaže baki.", en: "Who helps grandma? — Tom helps grandma." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Dajem ___ poklon. (mama)",
      blanks: [["mami"]],
      translation: "I'm giving mum a present.",
      wordBank: ["mami", "mamu", "mame"],
      explanation: "Receiver → DAT: mama → mami.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Pomažem ___. (brat)",
      blanks: [["bratu"]],
      translation: "I'm helping my brother.",
      wordBank: ["bratu", "brata", "bratom"],
      explanation: "pomagati + DAT: brat → bratu.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Poslala sam ___ pismo. (baka)",
      blanks: [["baki"]],
      translation: "I sent grandma a letter.",
      wordBank: ["baki", "baku", "bake"],
      explanation: "Receiver → DAT: baka → baki (kinship k stays: baki, not baci).",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · X-ray, build & say",
      subtitle: "Color the roles, type the receivers, then say who YOU help.",
      emoji: "🩻",
      items: [
        { emoji: "🩻", label: "Sentence X-ray", hint: "blue · orange · red" },
        { emoji: "⌨️", label: "Type two receivers", hint: "»I help Ana«" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Who do you help?", hint: "Pomažem mami." },
      ],
    },
    {
      id: "s13",
      type: "quiz-set",
      title: "Sentence X-ray: color the roles",
      items: [
        {
          prompt: "»Tom daje Ani ključ.« — who RECEIVES (orange, DAT)?",
          options: ["Ani", "Tom", "ključ"],
          correctIndex: 0,
          explanation: "Ani is the receiver — DAT orange. Tom = subject (NOM), ključ = the thing (ACC).",
        },
        {
          prompt: "»Poslala sam bratu poklon.« — which word is the THING (red, ACC)?",
          options: ["poklon", "bratu", "sam"],
          correctIndex: 0,
          explanation: "poklon is what gets sent (ACC); bratu is the receiver (DAT).",
        },
        {
          prompt: "»Ana pomaže susjedu.« — why is there no red word?",
          options: [
            "pomagati takes only a DAT person — no ACC object",
            "susjedu is the ACC object",
            "the sentence is wrong",
          ],
          correctIndex: 0,
          explanation: "»Help« serves a person (DAT) and has no thing-object — that's pomagati's habit.",
        },
      ],
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I'm helping Ana.”",
      answers: ["Pomažem Ani.", "Pomažem Ani"],
      hint: "pomagati + DAT",
      explanation: "Pomažem Ani. (Ana → Ani — receiver in the dative.)",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “I'm giving mum a present.”",
      answers: ["Dajem mami poklon.", "Dajem mami poklon", "Mami dajem poklon.", "Mami dajem poklon"],
      explanation: "Dajem mami poklon. — receiver DAT (mami) + thing ACC (poklon).",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Poslat", "ću", "baki", "pismo"],
      answers: ["Poslat ću baki pismo.", "Poslat ću baki pismo"],
      en: "I'll send grandma a letter.",
      explanation: "Verb-first future (U9!) + receiver DAT + thing ACC: Poslat ću baki pismo.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Dajem mami poklon.",
      explanation: "Dajem mami poklon — I'm giving mum a present.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Tom pomaže susjedu.",
      explanation: "Tom pomaže susjedu — Tom helps the neighbour.",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: the twin, the shop and the future",
      items: [
        {
          prompt: "»Živim u Zagrebu« vs »Dajem bratu poklon« — the endings -u/-u are:",
          options: [
            "the same shape doing two jobs (LOC location · DAT receiver)",
            "a coincidence — different endings",
            "both accusative",
          ],
          correctIndex: 0,
          explanation: "DAT sg = LOC sg in form; the CASE is decided by the job (where? vs to whom?).",
        },
        {
          prompt: "Listen (U8 shopping): what did she buy, and for whom?",
          tts: "Kupila sam bratu poklon.",
          options: ["a present for her brother", "a letter for grandma", "a key for the neighbour"],
          correctIndex: 0,
          explanation: "Kupila sam bratu poklon — bratu (DAT) = for her brother.",
        },
        {
          prompt: "Unit 9 future: »Sutra ću ___ baki pismo.«",
          options: ["poslati", "poslala", "pošaljem"],
          correctIndex: 0,
          explanation: "ću + INFINITIVE: Sutra ću poslati baki pismo.",
        },
      ],
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Pomažem mami.",
      targetEn: "say who you help at home — I help mum. (or: Pomažem bratu / sestri / baki…)",
      phonetic: "po-MAH-zhem MA-mee",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Case #5 unlocked: the dative — the receiver.** Endings: **m/n → -u** (bratu, djetetu), **f → -i** (mami, Ani, baki; k→c: majci). It's **LOC's twin**: same shapes since U5, brand-new job.\n\n**Verbs that go orange:** *dajem komu što · pošaljem komu što · pokažem komu što · pomažem komu* (help has NO red object!). The question word: **komu?**\n\nWords tonight: **susjed, susjeda, poklon, pismo, davati, pomagati, poslati, pokazati**.\n\nNext lesson: *Sviđa mi se!* — in Croatian, things are pleasing TO you.",
      vocabIds: [
        "a2u10.susjed", "a2u10.susjeda", "a2u10.poklon", "a2u10.pismo",
        "a2u10.davati", "a2u10.pomagati", "a2u10.poslati", "a2u10.pokazati",
      ],
    },
  ],
  srsCloze: [
    { front: "Dajem ___ poklon. (mama)", answers: ["mami"], back: "Dajem mami poklon. (receiver → DAT mami)", tts: "Dajem mami poklon." },
    { front: "Pomažem ___. (brat)", answers: ["bratu"], back: "Pomažem bratu. (pomagati + DAT)", tts: "Pomažem bratu." },
    { front: "Poslala sam ___ pismo. (baka)", answers: ["baki"], back: "Poslala sam baki pismo. (baka → baki)", tts: "Poslala sam baki pismo." },
    { front: "majka → dajem ___ (k→c!)", answers: ["majci"], back: "majka → majci (sibilarization k→c before -i)", tts: "Dajem majci knjigu." },
    { front: "Pokazat ću ___ stan. (Ana)", answers: ["Ani"], back: "Pokazat ću Ani stan. (Ana → Ani)", tts: "Pokazat ću Ani stan." },
    { front: "Tom daje ___ ključ. (susjed)", answers: ["susjedu"], back: "Tom daje susjedu ključ. (susjed → susjedu)", tts: "Tom daje susjedu ključ." },
    { front: "to help (+ DAT) = ___ (ja: pomažem)", answers: ["pomagati"], back: "pomagati (pomažem) — helps a DAT person.", tts: "pomagati" },
    { front: "the DAT question word: »___?« (to whom)", answers: ["komu", "Komu"], back: "komu? = to whom? — the dative's question.", tts: "Komu?" },
  ],
  notes: {
    inOneSentence: {
      en: "The dative singular (m/n -u, f -i) marks the receiver — the person you give, send, show something to, or help.",
      exampleHr: "Dajem mami poklon. · Tom pomaže susjedu. · Poslala sam baki pismo.",
    },
    deepDive: [
      {
        title: "The full table — and the LOC twin trick",
        body:
          "Dative singular endings are **identical to locative singular** (U5). One shape, two jobs: after u/na answering *where?* it's LOC; marking the receiver answering *komu? (to whom?)* it's DAT. Croatian children never notice the difference — you get the same discount.\n\nSibilarization applies exactly as in LOC: **k→c, g→z** before -i (*majka→majci, knjiga→knjizi, noga→nozi*) — but kinship names and hypocoristics resist it: *baka→baki*, *seka→seki*.",
        table: {
          caption: "DAT singular — complete",
          headers: ["type", "NOM", "DAT"],
          colCase: [null, "NOM", "DAT"],
          rows: [
            ["masculine", "brat / susjed / grad", "bratu / susjedu / gradu"],
            ["neuter", "dijete / pismo", "djetetu / pismu"],
            ["feminine -a", "mama / Ana / sestra", "mami / Ani / sestri"],
            ["fem. k/g → c/z", "majka / knjiga / noga", "majci / knjizi / nozi"],
            ["fem. -i type", "noć / stvar", "noći / stvari"],
          ],
        },
      },
      {
        title: "The three-color sentence",
        body:
          "A full giving-sentence has three roles, each in its own case color:\n\n**Tom** (🔵 NOM, the giver) **daje** **Ani** (🟠 DAT, the receiver) **ključ** (🔴 ACC, the thing).\n\nThe order is flexible (*Dajem mami poklon* / *Mami dajem poklon*), but the CASES never budge — that's how Croatian knows who gets what, with no word-order police.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "giver — NOM 🔵", emoji: "🧍", example: "Tom" },
            { label: "daje", emoji: "🤲", example: "gives" },
            { label: "receiver — DAT 🟠", emoji: "🙋", example: "Ani" },
            { label: "thing — ACC 🔴", emoji: "🔑", example: "ključ" },
          ],
        },
      },
      {
        title: "pomagati — the verb with no red",
        body:
          "English *help someone* takes a direct object, so anglophones reach for the accusative — but Croatian **pomagati serves a DAT person**: *Pomažem bratu* (never ~~pomažem brata~~). Think of help as given TO someone.\n\nPresent: pomažem, pomažeš, pomaže, pomažemo, pomažete, pomažu. The same orange habit will return with *sviđati se* (L2) and the U11 experiencer constructions.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Dajem mamu poklon.",
        right: "Dajem mami poklon.",
        why: "The receiver is DAT (mami), not ACC — the ACC slot belongs to the present (poklon).",
      },
      {
        wrong: "Pomažem brata.",
        right: "Pomažem bratu.",
        why: "pomagati is a DAT verb — English »help sb« misleads you into the accusative.",
      },
      {
        wrong: "Dajem majki knjigu.",
        right: "Dajem majci knjigu.",
        why: "k→c before -i: majka → majci (but kinship baka → baki resists).",
      },
      {
        wrong: "»u Zagrebu« and »bratu« are different endings to memorize separately",
        right: "One shape, two jobs: LOC (where?) and DAT (to whom?) share their singular forms",
        why: "Recognizing the twin halves your memorization — only the JOB is new.",
      },
    ],
    memoryHooks: [
      "DAT is LOC's twin with a different job — same uniform, new badge.",
      "Orange = the person served: give TO, send TO, show TO, help TO.",
      "komu? = to whom? — if the answer fits, the word goes orange.",
      "majka→majci, knjiga→knjizi (k→c, g→z) — but baka stays baki: grandmas resist change.",
    ],
    connects: [
      { label: "LOC endings — the same shapes (Unit 5 L1)", lessonId: "a1u5l1" },
      { label: "Family receivers: mama, brat, baka (Unit 3 L1)", lessonId: "a1u3l1" },
      { label: "Next: sviđa mi se & prema/k (Unit 10 L2)", lessonId: "a2u10l2" },
    ],
    selfCheck: [
      { q: "“I'm giving mum a present” = ?", a: "Dajem mami poklon." },
      { q: "Why is »Pomažem brata« wrong?", a: "pomagati takes the dative: Pomažem bratu." },
      { q: "majka and knjiga in the dative?", a: "majci, knjizi (k→c, g→z before -i)." },
      { q: "Which earlier case shares DAT's singular endings?", a: "The locative (U5) — same forms, different job." },
      { q: "“I sent grandma a letter” (female speaker) = ?", a: "Poslala sam baki pismo." },
    ],
  },
};
