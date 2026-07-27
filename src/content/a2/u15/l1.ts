import type { Lesson } from "@/types/content";

/**
 * A2 U15 L1 — Vidim ga! (ACC clitic pronouns)
 * Spec: curriculum/A2/unit-15.md · grammar-reference §5, §12.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * vidjeti & zvati (koga) added per the 2026-07-23 spec correction. Full forms
 * (mene, njega…) shown for stress only, not drilled. DAT clitics are L2;
 * clusters are L3.
 */
export const a2u15l1: Lesson = {
  id: "a2u15l1",
  unitId: "a2u15",
  title: "Vidim ga!",
  titleEn: "I see it! — accusative clitic pronouns",
  grammarTags: ["acc-clitics", "second-position"],
  estMinutes: 19,
  vocab: [
    { id: "a2u15.poziv", hr: "poziv", en: "(phone) call", pos: "noun", gender: "m", icon: "📞", exampleHr: "Imam poziv od bake.", exampleEn: "I have a call from grandma." },
    { id: "a2u15.poruka", hr: "poruka", en: "message / text", pos: "noun", gender: "f", icon: "💬", exampleHr: "Pišem poruku.", exampleEn: "I'm writing a message." },
    { id: "a2u15.nazvati", hr: "nazvati", en: "to call up (nazovem)", pos: "verb", icon: "📲", exampleHr: "Nazvat ću baku večeras.", exampleEn: "I'll call grandma tonight." },
    { id: "a2u15.zvati", hr: "zvati", en: "to call sb (zovem — vs zvati se!)", pos: "verb", icon: "🔔", exampleHr: "Marko zove Anu.", exampleEn: "Marko is calling Ana." },
    { id: "a2u15.cuti", hr: "čuti", en: "to hear (čujem)", pos: "verb", icon: "👂", exampleHr: "Ne čujem dobro.", exampleEn: "I can't hear well." },
    { id: "a2u15.primiti", hr: "primiti", en: "to receive (primim)", pos: "verb", icon: "📥", exampleHr: "Primio sam tvoju poruku.", exampleEn: "I received your message." },
    { id: "a2u15.vidjeti", hr: "vidjeti", en: "to see (vidim)", pos: "verb", icon: "👀", exampleHr: "Vidim more!", exampleEn: "I can see the sea!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Vidim ga!",
      subtitle: "»Where's my phone? I can't see it.« — one tiny word does “it”.",
      emoji: "📱",
      items: [
        { emoji: "🔴", label: "me te ga je…", hint: "the little ACC words" },
        { emoji: "🚂", label: "The train appears", hint: "clitics ride 2nd position" },
        { emoji: "⚠️", label: "Never first!", hint: "the U1 law returns" },
        { emoji: "🎤", label: "Čuješ li me?", hint: "answer out loud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The little words",
      subtitle: "You've obeyed the second-position law since »Zvao se Marko«. Now it gets seven new passengers.",
      emoji: "🔴",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "zvati se & animate ACC" },
        { emoji: "📱", label: "Phone words", hint: "7 new" },
        { emoji: "📊", label: "The clitic grid", hint: "full ↔ short forms" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the old laws you'll need",
      items: [
        {
          prompt: "U1: »Zovem se Ana.« means…",
          options: ["My name is Ana", "I'm calling Ana", "Call me, Ana"],
          correctIndex: 0,
          explanation: "zvati SE = to be called. Today: zvati + object = to call SOMEONE.",
        },
        {
          prompt: "U8 second position: »Zvao ___ Marko.« (his name was Marko)",
          options: ["se", "je se", "se je"],
          correctIndex: 0,
          explanation: "se rides second position — and se+je drops the je. Today's words obey the same law.",
        },
        {
          prompt: "U4 animate ACC: »Vidim ___.« (Marko)",
          options: ["Marka", "Marko", "Marku"],
          correctIndex: 0,
          explanation: "Animate ACC = GEN: Marka. In a minute: Vidim ga.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Phone words",
      vocabIds: [
        "a2u15.poziv", "a2u15.poruka", "a2u15.nazvati", "a2u15.zvati",
        "a2u15.cuti", "a2u15.primiti", "a2u15.vidjeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The ACC clitics: me, te, ga, je, nas, vas, ih",
      body:
        "Once a thing is known, Croatian replaces it with a tiny unstressed word — an **ACC clitic**:\n\n*Vidim Marka → Vidim **ga**. · Vidim Anu → Vidim **je**. · Vidim mobitel → Vidim **ga**.*\n\nThey ride the same **second-position train** as sam/je/ću — for now, one wagon:",
      table: {
        caption: "Full form ↔ clitic (ACC, red)",
        headers: ["person", "full (stressed)", "clitic"],
        colCase: [null, "ACC", "ACC"],
        rows: [
          ["me / you", "mene / tebe", "me / te"],
          ["him, it (m/n)", "njega", "ga"],
          ["her, it (f)", "nju", "je"],
          ["us / you (pl)", "nas / vas", "nas / vas"],
          ["them", "njih", "ih"],
        ],
      },
      diagram: {
        kind: "train",
        wagons: [
          { label: "🚂 first word(s)", items: ["Gdje…", "Ne vidim", "Čuješ li"], note: "the engine — any stressed opener" },
          { label: "ACC clitic", items: ["me", "te", "ga", "je", "nas", "vas", "ih"], note: "the first wagon — more coming in L2–L3" },
        ],
      },
      examples: [
        { hr: "Gdje je mobitel? Ne vidim ga.", en: "Where's the phone? I can't see it.", highlight: { text: "ga", caseId: "ACC" } },
        { hr: "Čuješ li me?", en: "Can you hear me?", highlight: { text: "me", caseId: "ACC" } },
        { hr: "Marko me zove svaki dan.", en: "Marko calls me every day.", highlight: { text: "me", caseId: "ACC" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Never first — and when to use the big forms",
      body:
        "Clitics are leaners — they **can NEVER stand first** (the same law that banned *Sam Ana* in Unit 1):\n\n❌ *Ga vidim.* → ✅ ***Vidim ga.***\n\nThe **full forms** (mene, tebe, njega, nju, njih) exist for **stress and contrast** — recognize them, don't reach for them by default:\n\n*A njega? **Njega** ne vidim!* (HIM I can't see!)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Never first!",
        text: "❌ Ga vidim · ❌ Me čuješ? — a clitic can't start the sentence. Something stressed must come first: Vidim ga. Čuješ li me?",
      },
      examples: [
        { hr: "Vidim Marka. → Vidim ga.", en: "I see Marko. → I see him.", highlight: { text: "ga", caseId: "ACC" } },
        { hr: "Vidim Anu. → Vidim je.", en: "I see Ana. → I see her.", highlight: { text: "je", caseId: "ACC" } },
        { hr: "A njega? Njega ne vidim!", en: "And him? HIM I can't see!", note: "full form = contrast/stress" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: shrink the object",
      items: [
        {
          prompt: "Vidim Anu. → Vidim ___",
          options: ["je", "ga", "ju? Both je and ju exist — pick the default"],
          correctIndex: 0,
          explanation: "her (f) → je. (ju exists as a variant — notes.)",
        },
        {
          prompt: "Vidim Marka. → Vidim ___",
          options: ["ga", "je", "ih"],
          correctIndex: 0,
          explanation: "him → ga.",
        },
        {
          prompt: "Baka zove Toma i Anu. → Baka ___ zove.",
          options: ["ih", "je", "ga"],
          correctIndex: 0,
          explanation: "them → ih.",
        },
        {
          prompt: "Which is correct?",
          options: ["Vidim ga.", "Ga vidim.", "Both"],
          correctIndex: 0,
          explanation: "Clitics never stand first — Vidim ga.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Replace everything",
      subtitle: "Numbers, phones, people — shrink them all to one syllable.",
      emoji: "🔧",
      items: [
        { emoji: "✏️", label: "Three fills", hint: "ga · je · ih" },
        { emoji: "⌨️", label: "Two swaps", hint: "type the clitic" },
        { emoji: "🔀", label: "Build the question", hint: "Čuješ li me?" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Imaš li broj? — Da, imam ___. (it, m)",
      blanks: [["ga"]],
      translation: "Do you have the number? — Yes, I have it.",
      wordBank: ["ga", "je", "ih"],
      explanation: "broj (m) → ga.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Vidiš li Anu? — Ne, ne vidim ___. (her)",
      blanks: [["je"]],
      translation: "Do you see Ana? — No, I don't see her.",
      wordBank: ["je", "ga", "nas"],
      explanation: "Anu (f) → je.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Baka zove Toma i Anu — zove ___ svaki dan. (them)",
      blanks: [["ih"]],
      translation: "Grandma calls Tom and Ana — she calls them every day.",
      wordBank: ["ih", "je", "vas"],
      explanation: "them → ih.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Shrink it: »Primio sam poruku.« → »Primio sam ___.« (it, f)",
      answers: ["je"],
      hint: "poruka is feminine",
      explanation: "poruku (f) → je: Primio sam je.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "»I can't hear you« (to a friend, unstressed): »Ne čujem ___.«",
      answers: ["te"],
      hint: "tebe → the short form",
      explanation: "Ne čujem te.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Čuješ", "li", "me"],
      answers: ["Čuješ li me?", "Čuješ li me"],
      en: "Can you hear me?",
      explanation: "verb + li + ACC clitic — me can't stand first.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "Hear the little words — they're fast! — then answer the call.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "ga · me" },
        { emoji: "🎤", label: "Answer the call", hint: "Čujem te!" },
        { emoji: "🔗", label: "zvati vs zvati se", hint: "one se, two meanings" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ne vidim ga.",
      explanation: "Ne vidim ga — I can't see it/him.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Marko me zove svaki dan.",
      explanation: "Marko me zove svaki dan — Marko calls me every day.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Čujem te!",
      targetEn: "someone asks »Čuješ li me?« — answer aloud: I hear you!",
      phonetic: "CHOO-yem teh",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: one little se apart",
      items: [
        {
          prompt: "Which one means »My name is Marko«?",
          options: ["Zovem se Marko.", "Zovem Marka.", "Marko me zove."],
          correctIndex: 0,
          explanation: "zvati SE = be called (U1); Zovem Marka = I'm calling Marko (today); Marko me zove = Marko calls ME.",
        },
        {
          prompt: "U8: why is it »Zvao se Marko« and not »Se zvao Marko«?",
          options: [
            "se is a clitic — it can't stand first",
            "se always follows the name",
            "it's an exception",
          ],
          correctIndex: 0,
          explanation: "The never-first law — the same one today's me/te/ga obey.",
        },
        {
          prompt: "Listen (U12 chunk): what does Tom promise?",
          tts: "Javit ću se!",
          options: ["I'll be in touch", "I'll call you back — you specifically", "I'll answer the question"],
          correctIndex: 0,
          explanation: "javiti se — the U12 chunk. Next lesson adds WHO to it: Javi MI se!",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**ACC clitics — the little object words**: *me, te, **ga** (m/n), **je** (f), nas, vas, **ih*** — *Vidim Marka → Vidim ga. Vidim Anu → Vidim je.*\n\n**The law**: clitics ride **second position** and **never stand first** (❌ *Ga vidim*). Full forms (*mene, njega, nju*) are for stress only: *Njega ne vidim!*\n\n**zvati** (call someone) vs **zvati se** (be called) — one se apart.\n\nWords tonight: **poziv, poruka, nazvati, zvati, čuti, primiti, vidjeti**.\n\nNext: the TO-words — *Javi **mi** se!*",
      vocabIds: [
        "a2u15.poziv", "a2u15.poruka", "a2u15.nazvati", "a2u15.zvati",
        "a2u15.cuti", "a2u15.primiti", "a2u15.vidjeti",
      ],
    },
  ],
  srsCloze: [
    { front: "Vidim Anu. → Vidim ___.", answers: ["je"], back: "her → je.", tts: "Vidim je." },
    { front: "Vidim Marka. → Vidim ___.", answers: ["ga"], back: "him → ga.", tts: "Vidim ga." },
    { front: "Ne čujem ___. (tebe — unstressed)", answers: ["te"], back: "Ne čujem te.", tts: "Ne čujem te." },
    { front: "Zovem Toma i Anu. → Zovem ___.", answers: ["ih"], back: "them → ih.", tts: "Zovem ih." },
    { front: "Ringing Marko (not naming yourself!): »Zovem ___.«", answers: ["Marka"], back: "Zovem Marka — animate ACC. (Zovem se Marko = my name is Marko.)", tts: "Zovem Marka." },
    { front: "message / text = ___ (f)", answers: ["poruka"], back: "poruka (Pišem poruku.)", tts: "Pišem poruku." },
    { front: "to hear = ___ (čujem)", answers: ["čuti", "cuti"], back: "čuti — Čuješ li me?", tts: "Čuješ li me?" },
  ],
  notes: {
    inOneSentence: {
      en: "Known objects shrink to unstressed ACC clitics — me, te, ga (m/n), je (f), nas, vas, ih — which ride second position and can never stand first.",
      exampleHr: "Gdje je mobitel? Ne vidim ga. · Čuješ li me?",
    },
    deepDive: [
      {
        title: "The full pronoun table — big and small",
        body:
          "Every person has a stressed FULL form and an unstressed CLITIC. The clitic is the everyday one; the full form appears for contrast, after prepositions, or standing alone (*Koga zoveš? — Njega!*).",
        table: {
          caption: "ACC pronouns: full ↔ clitic",
          headers: ["", "full", "clitic", "example"],
          colCase: [null, "ACC", "ACC", null],
          rows: [
            ["ja", "mene", "me", "Čuješ li me?"],
            ["ti", "tebe", "te", "Ne čujem te."],
            ["on/ono", "njega", "ga", "Vidim ga."],
            ["ona", "nju", "je (ju)", "Vidim je."],
            ["mi", "nas", "nas", "Baka nas zove."],
            ["vi", "vas", "vas", "Čujem vas."],
            ["oni/one", "njih", "ih", "Zovem ih."],
          ],
        },
      },
      {
        title: "je the pronoun vs je the verb — and the ju escape hatch",
        body:
          "Croatian has TWO little je's: the verb (*Ana je učiteljica*) and now the pronoun her (*Vidim je*). Context separates them — the pronoun je always sits next to a verb that already has its subject.\n\nWhen the two would collide (her + is in one cluster), Croatian often swaps the pronoun to **ju** — *Vidio ju je.* (He saw her.) For now just RECOGNIZE ju; the cluster mechanics arrive in L3.",
      },
      {
        title: "English 'it' is three Croatian words",
        body:
          "English flattens everything to *it*. Croatian keeps gender:\n\n- *mobitel* (m) → **ga**: *Ne vidim ga.*\n- *poruka* (f) → **je**: *Primio sam je.*\n- *pismo* (n) → **ga**: *Poslao sam ga.*\n\nThe clitic remembers the noun's gender even after the noun is long gone — that's how Croatians track what \"it\" is.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "mobitel (m)", emoji: "📱", example: "→ ga" },
            { label: "poruka (f)", emoji: "💬", example: "→ je" },
            { label: "pismo (n)", emoji: "✉️", example: "→ ga" },
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ga vidim.",
        right: "Vidim ga.",
        why: "Clitics can never stand first — the U1 law (❌ Sam Ana) applies to all of them.",
      },
      {
        wrong: "Vidim njega. (no contrast intended)",
        right: "Vidim ga.",
        why: "Unstressed full forms sound pushy — default to the clitic; njega only under stress.",
      },
      {
        wrong: "Vidim poruku → Vidim ga.",
        right: "Vidim je.",
        why: "poruka is feminine — 'it' must be je. English 'it' hides the gender; Croatian doesn't.",
      },
      {
        wrong: "Zovem se Anu.",
        right: "Zovem Anu. / Zovem se Ana.",
        why: "zvati + ACC = call someone; zvati se + NOM = be called. Don't mix the two frames.",
      },
    ],
    memoryHooks: [
      "Clitics are leaners — they need a wall (a stressed word) to lean on. No wall first = no clitic first.",
      "ga = guy (m), je = jenny (f), ih = the whole gang (pl).",
      "One se changes everything: Zovem Marka (phone) vs Zovem se Marko (name).",
      "English 'it' is a disguise — Croatian unmasks it: ga or je, by gender.",
    ],
    connects: [
      { label: "Second-position clitics — the original law (Unit 8 L3)", lessonId: "a1u8l3" },
      { label: "Animate ACC — Vidim Marka (Unit 4 L4)", lessonId: "a1u4l4" },
      { label: "Next: the DAT clitics — Javi mi se! (Unit 15 L2)", lessonId: "a2u15l2" },
    ],
    selfCheck: [
      { q: "Replace: Vidim Anu / Vidim Marka / Zovem Toma i Anu.", a: "Vidim je. / Vidim ga. / Zovem ih." },
      { q: "Why can't you say »Ga vidim«?", a: "Clitics never stand first — something stressed must open the sentence." },
      { q: "When do you use njega instead of ga?", a: "For stress/contrast: Njega ne vidim! — or after prepositions." },
      { q: "»Can you hear me?« = ?", a: "Čuješ li me?" },
      { q: "poruka → 'I received it' = ?", a: "Primio/Primila sam je. (f → je)" },
    ],
  },
};
