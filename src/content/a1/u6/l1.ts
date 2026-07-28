import type { Lesson } from "@/types/content";

/**
 * A1 U6 L1 — Budim se rano (Reflexive verbs, the se clitic)
 * Spec: curriculum/A1/unit-6.md · grammar-reference §7 (present classes), §12 (clitic
 * second position).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Run `npm run proofread -- a1u6` and review the Croatian before relying on it.
 *
 * Level guard: no new case. Reflexive verbs = verb + clitic `se`, which obeys the
 * SAME second-position rule the learner already knows from sam/si/je. The U1 chunk
 * »Zovem se…« is finally analysed here. Times (»u sedam«) appear only as a glossed
 * preview — the full clock is L2, so no quiz depends on them.
 * Deviation from spec: the L1 icon-strip drops »doručkujem« (the breakfast verb
 * doručkovati is carded in L5); the evening routine (odmaram se → idem spavati)
 * uses only L1 vocab instead. Noted in curriculum/A1/unit-6.md.
 */
export const a1u6l1: Lesson = {
  id: "a1u6l1",
  unitId: "a1u6",
  title: "Budim se rano",
  titleEn: "My routine — reflexive verbs",
  grammarTags: ["reflexive-verbs", "se-clitic", "present-tense"],
  estMinutes: 18,
  vocab: [
    { id: "a1u6.buditi-se", image: "/img/buditise.png", hr: "buditi se", en: "to wake up (budim se)", pos: "verb", icon: "⏰", exampleHr: "Budim se rano.", exampleEn: "I wake up early." },
    { id: "a1u6.ustajati", image: "/img/ustajati.png", hr: "ustajati", en: "to get up (ustajem — no se)", pos: "verb", icon: "🛏️", exampleHr: "Ustajem rano.", exampleEn: "I get up early." },
    { id: "a1u6.tusirati-se", image: "/img/tusiratise.png", hr: "tuširati se", en: "to shower (tuširam se)", pos: "verb", icon: "🚿", exampleHr: "Tuširam se kasno.", exampleEn: "I shower late." },
    { id: "a1u6.oblaciti-se", image: "/img/oblacitise.png", hr: "oblačiti se", en: "to get dressed (oblačim se)", pos: "verb", icon: "👕", exampleHr: "Oblačim se.", exampleEn: "I get dressed." },
    { id: "a1u6.odmarati-se", image: "/img/odmaratise.png", hr: "odmarati se", en: "to rest (odmaram se)", pos: "verb", icon: "😌", exampleHr: "Odmaram se.", exampleEn: "I rest." },
    { id: "a1u6.ici-spavati", image: "/img/icispavati.png", hr: "ići spavati", en: "to go to bed (chunk)", pos: "phrase", icon: "🌙", exampleHr: "Idem spavati.", exampleEn: "I go to bed.", tags: ["chunk"] },
    { id: "a1u6.spavati", image: "/img/spavati.png", hr: "spavati", en: "to sleep (spavam)", pos: "verb", icon: "😴", exampleHr: "Spavam kasno.", exampleEn: "I sleep late." },
    { id: "a1u6.rano", image: "/img/rano.png", hr: "rano", en: "early", pos: "adv", icon: "🌅", exampleHr: "Budim se rano.", exampleEn: "I wake up early." },
    { id: "a1u6.kasno", image: "/img/kasno.png", hr: "kasno", en: "late", pos: "adv", icon: "🌆", exampleHr: "Idem spavati kasno.", exampleEn: "I go to bed late." },
    { id: "a1u6.zatim", image: "/img/zatim.png", hr: "zatim", en: "then / next", pos: "adv", icon: "➡️", exampleHr: "Budim se, zatim se tuširam.", exampleEn: "I wake up, then I shower." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Budim se rano",
      subtitle: "Your whole day in Croatian — and the mystery of »Zovem se« finally solved.",
      emoji: "⏰",
      items: [
        { emoji: "🔁", label: "se = a clitic", hint: "like sam/si/je — never first" },
        { emoji: "🚿", label: "Routine verbs", hint: "budim se, tuširam se, oblačim se…" },
        { emoji: "🧩", label: "Build & type", hint: "put se in the right spot" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say your morning" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The se clitic",
      subtitle: "You've said »Zovem se« since day one. Today you'll know exactly why it works.",
      emoji: "🔁",
      items: [
        { emoji: "🌉", label: "Bridge from Unit 5", hint: "you can say WHERE — now WHEN" },
        { emoji: "🪞", label: "verb + se", hint: "budim se, tuširam se…" },
        { emoji: "✅", label: "Quick check", hint: "where does se go?" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: you already move around the city (Unit 5)",
      items: [
        {
          prompt: "From Unit 5: Marko ___ na posao. (go)",
          options: ["ide", "idem", "idu"],
          correctIndex: 0,
          explanation: "on → ide. You can already say WHERE you go — today: WHEN, and the whole routine.",
        },
        {
          prompt: "From Unit 4: Ja ___ kavu. (drink)",
          options: ["pijem", "piješ", "piju"],
          correctIndex: 0,
          explanation: "piti → pijem. Coffee is part of everyone's routine.",
        },
        {
          prompt: "Listen. What is this person saying?",
          tts: "Zovem se Tom.",
          options: ["My name is Tom", "I live in Zagreb", "I am tired"],
          correctIndex: 0,
          explanation: "»Zovem se Tom« — a chunk since Unit 1. By the end of this slide you'll see the grammar inside it.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's routine words",
      vocabIds: [
        "a1u6.buditi-se", "a1u6.ustajati", "a1u6.tusirati-se", "a1u6.oblaciti-se",
        "a1u6.odmarati-se", "a1u6.ici-spavati", "a1u6.spavati", "a1u6.rano",
        "a1u6.kasno", "a1u6.zatim",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Reflexive verbs: verb + se (and se is a clitic!)",
      body:
        "Many routine verbs carry a little word **se** (roughly “-self”): **buditi se** (wake up), **tuširati se** (shower), **oblačiti se** (get dressed), **odmarati se** (rest). The verb conjugates normally; **se** just rides along.\n\nAnd here's the payoff: **se is a clitic**, exactly like **sam / si / je** from Unit 1. That means it lives in **second position** — never first.\n\n- Verb first → *Budim* **se** rano.\n- Another word first → *Ana* **se** budi. · *Rano* **se** budim.\n- Never *~~Se budim~~*.\n\nSo **»Zovem se Tom«** — a chunk since Unit 1 — is just *zovem* (I call) + **se** (myself). You've been using a reflexive verb for six units!",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "se is a clitic — never first",
        text: "Like sam/si/je, se sits in SECOND position. »Budim se« (verb first) · »Ana se budi« (name first). Never »Se budim«.",
      },
      table: {
        caption: "buditi se — to wake up (the -im class, with se)",
        headers: ["", "buditi se"],
        rows: [
          ["ja", "budim se"],
          ["ti", "budiš se"],
          ["on / ona", "budi se"],
          ["mi", "budimo se"],
          ["vi", "budite se"],
          ["oni", "bude se"],
        ],
      },
      examples: [
        { hr: "Budim se u sedam.", en: "I wake up at seven.", note: "se is 2nd (u sedam = at seven — a preview; the clock is next lesson)" },
        { hr: "Rano se budim.", en: "I wake up early.", note: "rano first → se still 2nd" },
        { hr: "Ana se budi.", en: "Ana wakes up.", note: "Ana first → se 2nd" },
        { hr: "Zovem se Tom.", en: "My name is Tom.", note: "zovem + se — the Unit 1 chunk, explained!" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: where does se go?",
      items: [
        {
          prompt: "“Ana wakes up early.” Pick the right order:",
          options: ["Ana se budi rano.", "Ana budi se rano.", "Se Ana budi rano."],
          correctIndex: 0,
          explanation: "Ana is first, so se takes second position: Ana se budi rano.",
        },
        {
          prompt: "“I shower.” Pick the right order:",
          options: ["Tuširam se.", "Se tuširam.", "Tuširam."],
          correctIndex: 0,
          explanation: "Verb first → se second. Never start with se; never drop it.",
        },
        {
          prompt: "Which one is WRONG?",
          options: ["Se budim rano.", "Budim se rano.", "Rano se budim."],
          correctIndex: 0,
          explanation: "se can never be the first word. »Se budim« ❌ → »Budim se« ✅.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "The whole routine — and one verb with NO se",
      body:
        "Line up the day. Notice **zatim** (then) starting a clause pushes **se** into second position again:\n\n**Budim se, zatim se tuširam. Oblačim se. Odmaram se i idem spavati.**\n\nWatch one trap: **ustajati** (to get up, *ustajem*) takes **NO se** — *Ustajem rano.* So *buditi se* = wake up (eyes open), *ustajati* = get up (out of bed). And **spavati** (sleep) and **ići spavati** (go to bed) are plain too.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "budim se", emoji: "⏰", example: "I wake up" },
          { label: "tuširam se", emoji: "🚿", example: "I shower" },
          { label: "oblačim se", emoji: "👕", example: "I get dressed" },
          { label: "odmaram se", emoji: "😌", example: "I rest" },
          { label: "idem spavati", emoji: "🌙", example: "I go to bed" },
        ],
      },
      examples: [
        { hr: "Zatim se tuširam.", en: "Then I shower.", note: "zatim first → se 2nd" },
        { hr: "Oblačim se.", en: "I get dressed." },
        { hr: "Ustajem rano.", en: "I get up early.", note: "ustajati — NO se!" },
        { hr: "Odmaram se i idem spavati.", en: "I rest and go to bed." },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the routine verb to English",
      pairs: [
        { a: "budim se", b: "I wake up" },
        { a: "tuširam se", b: "I shower" },
        { a: "oblačim se", b: "I get dressed" },
        { a: "odmaram se", b: "I rest" },
        { a: "idem spavati", b: "I go to bed" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Build, hear & say",
      subtitle: "Put se in the right slot, take dictation, and narrate your own morning.",
      emoji: "🧩",
      items: [
        { emoji: "🧩", label: "Fill the blank", hint: "se or the verb form" },
        { emoji: "🔀", label: "Build sentences", hint: "budim · se · rano" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say your morning", hint: "Budim se…" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Ana ___ budi rano.",
      blanks: [["se"]],
      translation: "Ana wakes up early.",
      wordBank: ["se", "sam", "je"],
      explanation: "Reflexive verb needs se; Ana is first, so se takes second position.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Rano ___ tuširam.",
      blanks: [["se"]],
      translation: "I shower early.",
      wordBank: ["se", "si", "sam"],
      explanation: "tuširati se is reflexive; rano is first, so se comes second.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ se, zatim se tuširam.",
      blanks: [["Budim"]],
      translation: "I wake up, then I shower.",
      wordBank: ["Budim", "Budiš", "Bude"],
      explanation: "ja → budim se. (zatim se tuširam — se in second position of the second clause.)",
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Budim", "se", "rano"],
      answers: ["Budim se rano.", "Budim se rano", "Rano se budim.", "Rano se budim"],
      en: "I wake up early.",
      explanation: "Verb first → »Budim se rano«. Or »Rano se budim« — either way se is second.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Ana", "se", "tušira", "kasno"],
      answers: ["Ana se tušira kasno.", "Ana se tušira kasno"],
      en: "Ana showers late.",
      explanation: "Ana first, so se is second: Ana se tušira kasno.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “I get dressed.”",
      answers: ["Oblačim se.", "Oblačim se", "oblačim se"],
      explanation: "oblačiti se → Oblačim se (verb first, se second).",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ana se budi rano.",
      explanation: "Ana se budi rano — Ana wakes up early (se in second position).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Tuširam se kasno.",
      explanation: "Tuširam se kasno — I shower late (verb first, se second).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Budim se u sedam.",
      targetEn: "say when you wake up — I wake up at seven (u sedam = at seven; the clock comes next lesson)",
      phonetic: "BOO-dim seh oo SEH-dam",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 4–5",
      items: [
        {
          prompt: "Unit 1's »Zovem se Tom« — why the se?",
          options: ["zvati se is reflexive — se is its clitic", "se means Tom", "se is the past tense"],
          correctIndex: 0,
          explanation: "The chunk is now explained: zvati se is a reflexive verb, and se is a second-position clitic.",
        },
        {
          prompt: "From Unit 5: Kamo Ana ide? Listen.",
          tts: "Ana ide na posao.",
          options: ["to work", "to the cinema", "home"],
          correctIndex: 0,
          explanation: "na posao = to work (Unit 5). Her routine starts there.",
        },
        {
          prompt: "From Unit 4: “Then I eat breakfast.” — Zatim ___ doručak.",
          options: ["jedem", "jedeš", "jede"],
          correctIndex: 0,
          explanation: "ja → jedem (jesti, Unit 4). doručak = breakfast (Unit 4).",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen. When does he get up?",
      tts: "Ustaje rano.",
      options: ["early", "late", "at noon"],
      correctIndex: 0,
      explanation: "rano = early; ustajati (get up) takes NO se.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Today's key:** reflexive verbs = **verb + se**, and **se is a clitic** — it sits in **second position**, exactly like sam/si/je.\n\n- Verb first: *Budim se rano.*\n- Other word first: *Ana se budi.* · *Rano se budim.*\n- Never *~~Se budim~~*, never drop the se.\n\nRoutine verbs: **budim se · tuširam se · oblačim se · odmaram se**; plain verbs **ustajem** (no se!), **spavam**, **idem spavati**. And **»Zovem se Tom«** was a reflexive verb all along.\n\nNext lesson: **Koliko je sati?** — telling the time.",
      vocabIds: [
        "a1u6.buditi-se", "a1u6.ustajati", "a1u6.tusirati-se", "a1u6.oblaciti-se",
        "a1u6.odmarati-se", "a1u6.ici-spavati", "a1u6.spavati", "a1u6.rano",
        "a1u6.kasno", "a1u6.zatim",
      ],
    },
  ],
  srsCloze: [
    { front: "Ana ___ budi rano. (reflexive clitic)", answers: ["se"], back: "Ana se budi rano. (se in second position — after Ana).", tts: "Ana se budi rano." },
    { front: "Rano ___ tuširam. (reflexive clitic)", answers: ["se"], back: "Rano se tuširam. (rano first → se second).", tts: "Rano se tuširam." },
    { front: "___ se rano. (I wake up)", answers: ["budim"], back: "Budim se rano. (buditi se → budim se).", tts: "Budim se rano." },
    { front: "Oblačim ___. (I get dressed — reflexive clitic)", answers: ["se"], back: "Oblačim se. (oblačiti se is reflexive).", tts: "Oblačim se." },
    { front: "»Zovem ___ Tom.« (the reflexive clitic)", answers: ["se"], back: "Zovem se Tom. (zvati se — reflexive, now analysed!).", tts: "Zovem se Tom." },
    { front: "»I get up early« (NO se!): ___ rano.", answers: ["ustajem"], back: "Ustajem rano. (ustajati takes no se — unlike buditi se).", tts: "Ustajem rano." },
    { front: "Which is WRONG? »Se budim« or »Budim se«? The wrong one starts with ___", answers: ["se"], back: "»Se budim« ❌ — se can never be first. »Budim se« ✅." },
  ],
  notes: {
    inOneSentence: {
      en: "Reflexive verbs add the clitic se, which — like sam/si/je — must sit in second position, never first.",
      exampleHr: "Budim se rano. · Ana se budi. · Zovem se Tom.",
    },
    deepDive: [
      {
        title: "se is just another second-position clitic",
        body:
          "A reflexive verb is a verb plus the little word **se**. The verb itself conjugates normally (budim, budiš, budi…); **se** is a **clitic** — an unstressed word that must sit in **second position** in the clause, the exact same slot you already know from **sam/si/je** (Unit 1).\n\nSo the order depends on what comes first:\n\n- The **verb** is first → se follows it: *Budim* **se**. *Tuširam* **se**.\n- **Something else** is first (a name, an adverb) → se follows that: *Ana* **se** budi. *Rano* **se** budim. *Zatim* **se** tušira.\n\nTwo things you must never do: start a clause with se (*~~Se budim~~*), or drop it (*~~Budim rano~~* means nothing here).\n\nThe big reveal: **»Zovem se…«** (Unit 1) is *zovem* (from zvati, “to call”) + **se** — “I call myself”. You have been conjugating a reflexive verb since your very first lesson.",
        table: {
          caption: "buditi se — full present (se in second position)",
          headers: ["person", "verb first", "subject/adverb first"],
          rows: [
            ["ja", "Budim se", "Ja se budim · Rano se budim"],
            ["ti", "Budiš se", "Ti se budiš"],
            ["on / ona", "Budi se", "Ana se budi"],
            ["mi", "Budimo se", "Mi se budimo"],
            ["vi", "Budite se", "Vi se budite"],
            ["oni", "Bude se", "Oni se bude"],
          ],
        },
      },
      {
        title: "Reflexive or not?",
        body:
          "Not every routine verb is reflexive. Learn which carry se and which don't — English is no guide here.\n\n**With se:** buditi se (wake up), tuširati se (shower), oblačiti se (get dressed), odmarati se (rest).\n**No se:** ustajati (get up — *ustajem*), spavati (sleep — *spavam*), ići spavati (go to bed — *idem spavati*).\n\nEnglish “I shower” has no “myself”, but Croatian still needs se: *Tuširam se*. Don't translate the English word-for-word.",
        diagram: {
          kind: "contrast",
          left: { title: "With se", emoji: "🪞", lines: [{ hr: "Budim se.", en: "I wake up." }, { hr: "Tuširam se.", en: "I shower." }, { hr: "Oblačim se.", en: "I get dressed." }] },
          right: { title: "No se", emoji: "🚫", lines: [{ hr: "Ustajem.", en: "I get up." }, { hr: "Spavam.", en: "I sleep." }, { hr: "Idem spavati.", en: "I go to bed." }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Budim rano.",
        right: "Budim se rano.",
        why: "buditi se is reflexive — dropping se leaves the verb incomplete.",
      },
      {
        wrong: "Se tuširam.",
        right: "Tuširam se.",
        why: "se is a clitic and can never be the first word of the clause.",
      },
      {
        wrong: "Tuširam me.",
        right: "Tuširam se.",
        why: "The reflexive clitic is se, not me — don't copy English “myself”.",
      },
      {
        wrong: "Ana budi se rano.",
        right: "Ana se budi rano.",
        why: "With a subject first, se jumps to second position — right after Ana.",
      },
    ],
    memoryHooks: [
      "se rides in seat #2 — just like sam/si/je. Whoever boards first, se sits right behind.",
      "»Zovem se Tom« = »I call myself Tom« — you've used a reflexive verb since Unit 1.",
      "Wet ones take se: buditi se, tuširati se, oblačiti se. ustajati (dry, out of bed) does not.",
    ],
    connects: [
      { label: "sam/si/je as second-position clitics (Unit 1 L3)", lessonId: "a1u1l3" },
      { label: "»Zovem se…« introduced as a chunk (Unit 1 L4)", lessonId: "a1u1l4" },
      { label: "Next: telling the time — Koliko je sati? (Unit 6 L2)", lessonId: "a1u6l2" },
    ],
    selfCheck: [
      { q: "How do you say “I wake up early”?", a: "Budim se rano — verb first, se second (or »Rano se budim«)." },
      { q: "Why is »Se budim« wrong?", a: "se is a clitic; it can never be the first word." },
      { q: "How do you say “Ana gets dressed”?", a: "Ana se oblači — Ana first, so se takes second position." },
      { q: "Which of these takes NO se: buditi, tuširati, ustajati?", a: "ustajati (get up) — *Ustajem rano*, no se." },
      { q: "What reflexive verb is hiding inside »Zovem se Tom«?", a: "zvati se (to be called) — zovem + se." },
    ],
  },
};
