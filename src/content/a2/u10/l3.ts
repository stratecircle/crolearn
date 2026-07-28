import type { Lesson } from "@/types/content";

/**
 * A2 U10 L3 — Tko kome pomaže? (household verbs; ACC vs DAT contrast)
 * Spec: curriculum/A2/unit-10.md · grammar-reference §3, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new endings — valence/role discipline only. Spec's example
 * "Tom daje cimeru ključ" used L4's cimer → replaced with Ani (correction
 * noted in unit-10.md). Objects recycled from U4 (čaša, stol was NOT taught —
 * avoided; kava world used instead). prati → perem is the lesson's irregular.
 */
export const a2u10l3: Lesson = {
  id: "a2u10l3",
  unitId: "a2u10",
  title: "Tko kome pomaže?",
  titleEn: "Who helps whom? — chores & the red/orange rule",
  grammarTags: ["verb-valence", "acc-dat-contrast", "household-verbs"],
  estMinutes: 18,
  vocab: [
    { id: "a2u10.cistiti", image: "/img/cistiti.png", hr: "čistiti", en: "to clean (čistim + ACC)", pos: "verb", icon: "🧽", exampleHr: "Čistim kuhinju svaki dan.", exampleEn: "I clean the kitchen every day." },
    { id: "a2u10.pospremati", image: "/img/pospremati.png", hr: "pospremati", en: "to tidy (pospremam + ACC)", pos: "verb", icon: "🧹", exampleHr: "Pospremam stan.", exampleEn: "I'm tidying the flat." },
    { id: "a2u10.prati", image: "/img/prati.png", hr: "prati", en: "to wash (perem! + ACC)", pos: "verb", icon: "🫧", exampleHr: "Perem suđe navečer.", exampleEn: "I wash the dishes in the evening." },
    { id: "a2u10.sude", image: "/img/sude.png", hr: "suđe", en: "dishes", pos: "noun", gender: "n", icon: "🍽️", exampleHr: "Suđe je u kuhinji.", exampleEn: "The dishes are in the kitchen." },
    { id: "a2u10.rublje", image: "/img/rublje.png", hr: "rublje", en: "laundry", pos: "noun", gender: "n", icon: "👕", exampleHr: "Perem rublje.", exampleEn: "I'm washing the laundry." },
    { id: "a2u10.smece", image: "/img/smece.png", hr: "smeće", en: "rubbish / garbage", pos: "noun", gender: "n", icon: "🗑️", exampleHr: "Gdje je smeće?", exampleEn: "Where is the rubbish?" },
    { id: "a2u10.pod", image: "/img/pod.png", hr: "pod", en: "floor (the surface)", pos: "noun", gender: "m", icon: "🪵", exampleHr: "Perem pod.", exampleEn: "I'm washing the floor." },
    { id: "a2u10.kuhinja", image: "/img/kuhinja.png", hr: "kuhinja", en: "kitchen", pos: "noun", gender: "f", icon: "🍳", exampleHr: "Kuhinja je mala.", exampleEn: "The kitchen is small." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Tko kome pomaže?",
      subtitle: "Red or orange? Every verb has a color habit.",
      emoji: "🧹",
      items: [
        { emoji: "🔴", label: "čistim ŠTO", hint: "the thing acted on — ACC" },
        { emoji: "🟠", label: "pomažem KOMU", hint: "the person served — DAT" },
        { emoji: "🎨", label: "dajem KOMU ŠTO", hint: "some verbs take both" },
        { emoji: "🎤", label: "Your chores", hint: "Perem suđe i čistim kuhinju." },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Color habits",
      subtitle: "No new endings today — just teaching each verb its colors.",
      emoji: "🎨",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "U4 objects & L1 receivers" },
        { emoji: "📊", label: "The valence table", hint: "što? · komu? · komu što?" },
        { emoji: "✅", label: "Quick check", hint: "red or orange?" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: red things, orange people",
      items: [
        {
          prompt: "Unit 4 objects: »Pijem ___.« (kava)",
          options: ["kavu", "kava", "kavi"],
          correctIndex: 0,
          explanation: "Direct object → ACC: kavu. Red is for things acted on.",
        },
        {
          prompt: "L1 receivers: »Pomažem ___.« (baka)",
          options: ["baki", "baku", "bake"],
          correctIndex: 0,
          explanation: "pomagati + DAT: baki. Orange is for people served.",
        },
        {
          prompt: "Listen (U6 routine): how often does she do it?",
          tts: "Tuširam se svaki dan.",
          options: ["every day", "every evening", "on Saturdays"],
          correctIndex: 0,
          explanation: "svaki dan = every day — today's chores love this phrase.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the chore words",
      vocabIds: [
        "a2u10.cistiti", "a2u10.pospremati", "a2u10.prati", "a2u10.sude",
        "a2u10.rublje", "a2u10.smece", "a2u10.pod", "a2u10.kuhinja",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The valence table: što, komu, or both",
      body:
        "Every verb has a **color habit** — which case it feeds:\n\n- **Red only (ACC — the thing):** *čistim kuhinju · pospremam stan · perem suđe*\n- **Orange only (DAT — the person):** *pomažem baki* (no thing-object at all!)\n- **Both:** *dajem komu što · pokazat ću komu što · poslat ću komu što*\n\nOne irregular to love: **prati → perem** (perem, pereš, pere, peremo, perete, peru).",
      table: {
        caption: "Who takes what",
        headers: ["verb", "što? (ACC)", "komu? (DAT)"],
        colCase: [null, "ACC", "DAT"],
        rows: [
          ["čistiti (čistim)", "kuhinju, pod", "—"],
          ["pospremati (pospremam)", "stan, sobu", "—"],
          ["prati (perem!)", "suđe, rublje, pod", "—"],
          ["pomagati (pomažem)", "—", "baki, susjedu"],
          ["davati (dajem)", "ključ, poklon", "Ani, bratu"],
          ["poslati / pokazati", "pismo, stan", "mami, susjedi"],
        ],
      },
      examples: [
        { hr: "Čistim kuhinju svaki dan.", en: "I clean the kitchen every day.", highlight: { text: "kuhinju", caseId: "ACC" } },
        { hr: "Marko pere suđe, a Ana pomaže susjedi.", en: "Marko washes the dishes and Ana helps the neighbour (f).", highlight: { text: "susjedi", caseId: "DAT" } },
        { hr: "Tom daje Ani ključ.", en: "Tom gives Ana the key.", note: "both colors: Ani 🟠 + ključ 🔴" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The chore world",
      body:
        "Three neuter workhorses do most of Croatian housework: **suđe** (dishes), **rublje** (laundry), **smeće** (rubbish) — all washable, tidyable, red-slot nouns (n: ACC = NOM).\n\nAdd **pod** (the floor you wash — not kat, the storey you live on!) and **kuhinja**, and your chore sentences write themselves.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "perem", emoji: "🫧", example: "suđe · rublje · pod" },
          { label: "čistim", emoji: "🧽", example: "kuhinju · pod" },
          { label: "pospremam", emoji: "🧹", example: "stan · sobu" },
        ],
      },
      examples: [
        { hr: "Perem rublje svaki tjedan.", en: "I wash the laundry every week.", note: "svaki tjedan — like svaki dan (U6)" },
        { hr: "Tko čisti pod? — Ja!", en: "Who cleans the floor? — Me!" },
        { hr: "Smeće nije u kuhinji.", en: "The rubbish is not in the kitchen." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: red or orange?",
      items: [
        {
          prompt: "Pomažem ___. (susjed)",
          options: ["susjedu", "susjeda", "susjed"],
          correctIndex: 0,
          explanation: "pomagati serves a person → DAT: susjedu.",
        },
        {
          prompt: "Čistim ___. (kuhinja)",
          options: ["kuhinju", "kuhinji", "kuhinja"],
          correctIndex: 0,
          explanation: "čistiti acts on a thing → ACC: kuhinju.",
        },
        {
          prompt: "prati — the present tense of ja is:",
          options: ["perem", "pratim", "pram"],
          correctIndex: 0,
          explanation: "prati → perem (irregular — learn the pair).",
        },
        {
          prompt: "»Dajem ___ ___.« (Ana + ključ) — which combination?",
          options: ["Ani ključ", "Anu ključ", "Ani ključu"],
          correctIndex: 0,
          explanation: "Receiver DAT (Ani) + thing ACC (ključ).",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Čistim ___ svaki dan. (kuhinja)",
      blanks: [["kuhinju"]],
      translation: "I clean the kitchen every day.",
      wordBank: ["kuhinju", "kuhinji", "kuhinja"],
      explanation: "Thing acted on → ACC: kuhinju.",
    },
    {
      id: "s09",
      type: "fill",
      text: "Pomažem ___. (mama)",
      blanks: [["mami"]],
      translation: "I'm helping mum.",
      wordBank: ["mami", "mamu", "mame"],
      explanation: "Person served → DAT: mami.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Marko pere ___. (the dishes)",
      blanks: [["suđe"]],
      translation: "Marko is washing the dishes.",
      wordBank: ["suđe", "suđu", "suđa"],
      explanation: "suđe is neuter — ACC looks like NOM: perem suđe.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Dajem ___ ključ. (susjed)",
      blanks: [["susjedu"]],
      translation: "I'm giving the neighbour the key.",
      wordBank: ["susjedu", "susjeda", "susjed"],
      explanation: "Receiver → DAT: susjedu (the key holds the red slot).",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Chores, out loud",
      subtitle: "Match the habits, type the contrast, then confess your chores.",
      emoji: "🧺",
      items: [
        { emoji: "🧩", label: "Verb ↔ color", hint: "match each habit" },
        { emoji: "⌨️", label: "Type the contrast", hint: "wash vs help" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Two chores you do", hint: "Perem… i čistim…" },
      ],
    },
    {
      id: "s13",
      type: "match",
      prompt: "Match the verb to its color habit",
      pairs: [
        { a: "čistiti", b: "a thing — ACC 🔴" },
        { a: "pomagati", b: "a person — DAT 🟠" },
        { a: "davati", b: "both — komu što 🟠🔴" },
        { a: "prati (perem)", b: "suđe, rublje, pod 🔴" },
      ],
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I wash the dishes.”",
      answers: ["Perem suđe.", "Perem suđe"],
      hint: "prati is irregular: pe…",
      explanation: "Perem suđe. (prati → perem)",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “Ana helps the neighbour (a woman).”",
      answers: ["Ana pomaže susjedi.", "Ana pomaže susjedi"],
      hint: "susjeda → DAT",
      explanation: "Ana pomaže susjedi. (susjeda → susjedi — person served, DAT)",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Čistim kuhinju svaki dan.",
      explanation: "Čistim kuhinju svaki dan — I clean the kitchen every day.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Marko pere suđe.",
      explanation: "Marko pere suđe — Marko is washing the dishes.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: café objects, reflexives and frequency",
      items: [
        {
          prompt: "Unit 4's red slot: »Perem ___.« (čaša — the glass)",
          options: ["čašu", "čaši", "čaša"],
          correctIndex: 0,
          explanation: "Thing washed → ACC: čašu (f -a → -u, the U4 rule).",
        },
        {
          prompt: "Unit 6 taught »tuširam SE« (I shower myself). Why does »pospremam stan« have no se?",
          options: [
            "the action lands on the flat, not on myself",
            "pospremati is reflexive too — se was forgotten",
            "se is optional on every verb",
          ],
          correctIndex: 0,
          explanation: "se marks action on yourself (tuširam se); chores act on things — pospremam stan, čistim pod.",
        },
        {
          prompt: "Listen (U6 frequency): how often does Tom tidy the flat?",
          tts: "Tom ponekad posprema stan.",
          options: ["sometimes", "always", "never"],
          correctIndex: 0,
          explanation: "ponekad = sometimes (U6 adverb).",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Perem suđe i čistim kuhinju.",
      targetEn: "name two chores you do — I wash the dishes and clean the kitchen.",
      phonetic: "PEH-rem SOO-jeh ee CHEES-teem KOO-hee-nyoo",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Every verb has a color habit:**\n- 🔴 **ACC** — the thing: *čistim kuhinju · pospremam stan · perem suđe/rublje/pod*\n- 🟠 **DAT** — the person: *pomažem baki* (no red at all!)\n- 🟠🔴 **both** — *dajem/pokazujem…: dajem Ani ključ*\n\n**Irregular of the day:** *prati → perem*.\n\nWords tonight: **čistiti, pospremati, prati, suđe, rublje, smeće, pod, kuhinja**.\n\nNext lesson: *Gdje stanuješ?* — flats, rent and moving.",
      vocabIds: [
        "a2u10.cistiti", "a2u10.pospremati", "a2u10.prati", "a2u10.sude",
        "a2u10.rublje", "a2u10.smece", "a2u10.pod", "a2u10.kuhinja",
      ],
    },
  ],
  srsCloze: [
    { front: "Čistim ___. (kuhinja — the thing)", answers: ["kuhinju"], back: "Čistim kuhinju. (thing → ACC)", tts: "Čistim kuhinju." },
    { front: "Pomažem ___. (mama — the person)", answers: ["mami"], back: "Pomažem mami. (person → DAT)", tts: "Pomažem mami." },
    { front: "prati → ja ___ (irregular!)", answers: ["perem"], back: "prati → perem (perem, pereš, pere…)", tts: "Perem suđe." },
    { front: "dishes = ___ (n; perem ___)", answers: ["suđe", "sude"], back: "suđe = dishes; perem suđe.", tts: "suđe" },
    { front: "laundry = ___ (n; perem ___)", answers: ["rublje"], back: "rublje = laundry; perem rublje.", tts: "rublje" },
    { front: "Dajem ___ ključ. (Ana)", answers: ["Ani"], back: "Dajem Ani ključ. (komu što — both colors)", tts: "Dajem Ani ključ." },
  ],
  notes: {
    inOneSentence: {
      en: "Chore verbs act on things (ACC: čistim kuhinju), pomagati serves a person (DAT: pomažem baki), and giving verbs take both (dajem Ani ključ).",
      exampleHr: "Čistim kuhinju. · Pomažem baki. · Dajem Ani ključ.",
    },
    deepDive: [
      {
        title: "Valence — the centrepiece table",
        body:
          "A verb's **valence** is the set of cases it feeds. Croatian children absorb it verb by verb; you get it as a color code:\n\n- **red = the thing touched** (čistiti, pospremati, prati)\n- **orange = the person served** (pomagati — and from L2, sviđati se's liker)\n- **red + orange = transfer verbs** (davati, poslati, pokazati)\n\nWhen you learn any new verb from now on, learn its colors with it — that's one habit that prevents half of all case errors.",
        table: {
          caption: "The habits, complete",
          headers: ["verb", "pattern", "model"],
          rows: [
            ["čistiti / pospremati / prati", "+ ACC", "Čistim kuhinju. Perem pod."],
            ["pomagati", "+ DAT", "Pomažem susjedu."],
            ["davati / poslati / pokazati", "+ DAT + ACC", "Poslat ću baki pismo."],
            ["sviđati se (L2)", "DAT liker + NOM thing", "Sviđa mi se stan."],
          ],
        },
      },
      {
        title: "prati → perem",
        body:
          "The infinitive hides the present (the U4 golden rule): **prati → perem, pereš, pere, peremo, perete, peru**. It joins your irregular hall of fame: *ići→idem, pisati→pišem, kupovati→kupujem, putovati→putujem*.\n\nIts favourite objects: *perem suđe* (dishes), *perem rublje* (laundry), *perem pod* (the floor).",
      },
      {
        title: "»give her the key« — why not a pronoun yet",
        body:
          "English says *give her the key* with a tiny pronoun. Croatian's tiny dative pronouns (*joj, mu, im*) are clitics with strict seating rules — they arrive as a system in **Unit 15**. Until then, use the full noun: **Dajem Ani ključ. Dajem susjedi ključ.** You lose nothing — Croatians do this constantly for clarity.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Pomažem susjeda.",
        right: "Pomažem susjedu.",
        why: "pomagati serves a DAT person — English »help sb« pulls you to ACC; resist.",
      },
      {
        wrong: "Perem suđu.",
        right: "Perem suđe.",
        why: "suđe is neuter: ACC = NOM. No -u ending to add.",
      },
      {
        wrong: "Dajem Anu ključ.",
        right: "Dajem Ani ključ.",
        why: "The receiver is DAT (Ani); only the key sits in the red ACC slot.",
      },
      {
        wrong: "Čistim pod svaki dan → »Živim na drugom podu«",
        right: "pod = the floor you wash; kat = the storey you live on (na drugom katu)",
        why: "Two different »floors« — mixing them is a classic anglophone slip.",
      },
    ],
    memoryHooks: [
      "Red = the thing touched, orange = the person served.",
      "pomagati has no red — help is 100% orange.",
      "perem sounds like »pour 'em« — pouring water over the dishes.",
      "pod you scrub, kat you climb.",
    ],
    connects: [
      { label: "ACC objects — the red slot (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "The dative receiver (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "Next: renting & moving (Unit 10 L4)", lessonId: "a2u10l4" },
    ],
    selfCheck: [
      { q: "“I clean the kitchen every day” = ?", a: "Čistim kuhinju svaki dan." },
      { q: "Why is »Pomažem susjeda« wrong?", a: "pomagati takes the dative: Pomažem susjedu." },
      { q: "Conjugate prati for ja and oni.", a: "ja perem, oni peru." },
      { q: "“Tom gives Ana the key” — with colors?", a: "Tom (NOM) daje Ani (DAT) ključ (ACC)." },
      { q: "pod vs kat?", a: "pod = floor surface (perem pod); kat = storey (na trećem katu)." },
    ],
  },
};
