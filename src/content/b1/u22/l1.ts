import type { Lesson } from "@/types/content";

/**
 * B1 U22 L1 — Malo povijesti (Past narration with aspect — the fork, warmed up)
 * Spec: curriculum/B1/unit-22.md · grammar-reference §20 "Futur II and time
 * clauses" (new) + §11 aspect + §8 perfekt.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new tense. The lesson re-runs U17's aspect fork in past narration,
 * deliberately, because tomorrow that same fork starts governing a tense the
 * learner has never met and it must be warm before that happens.
 *
 * Three installs, all of them reactivations: (1) background is imperfective and
 * events are perfective, shown on the cleanest possible material — history is
 * nothing but a stack of events laid over a stretch; (2) **some verbs are only
 * ever one aspect** (*trajati* has no useful perfective at B1; *osnovati* has no
 * useful imperfective), which is the fact L2's tense fork will depend on; (3)
 * the PAST `kad`, which behaves completely normally and is here so that L2's ban
 * lands as a change rather than as a rule about the word.
 *
 * ⚠️ The participial passive is named on day one because history writing is
 * full of it and because this lesson cards *osnovati* and *izgraditi*: «Grad je
 * osnovan u desetom stoljeću» is the sentence every learner wants, and it is
 * B2. The unit says «Kralj je osnovao grad» instead — active, with a subject —
 * exactly as U20's L5 taught.
 *
 * NOT ONE SENTENCE in this lesson points at the future. That is the point.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and routed around: comparatives and superlatives (B2 —
 * acute here, because a castle wants to be *najstariji*; the unit says «pet
 * stotina godina» instead), the participial passive (B2), nitko, naći, točno,
 * sjediti, stajati, kasniti, gore / dolje / ovamo, stizati, zid (all 0 or
 * previously rejected). Deferred by unit: no Futur II (L2), no čim / dok ne
 * (L3), no future time clause of any kind, no -nje as a productive formation
 * (U23), no full clitic cluster (U23).
 *
 * ORDINAL NOTE: the spec's «u petnaestom stoljeću» is unbuildable — the carded
 * ordinals stop at *deseti* (a1u5 L4: prvi, drugi, treći, četvrti, peti,
 * deseti), and *petnaesti* has zero occurrences. Every century reference in the
 * unit therefore uses **u desetom stoljeću**, which is both owned and
 * historically unremarkable for a Croatian town.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U22 cut-outs exist.
 */
export const b1u22l1: Lesson = {
  id: "b1u22l1",
  unitId: "b1u22",
  title: "Malo povijesti",
  titleEn: "A little history — aspect in past narration",
  grammarTags: ["aspect", "past-narration", "kad-past", "history"],
  estMinutes: 20,
  vocab: [
    { id: "b1u22.povijest", hr: "povijest", en: "history (f, i-declension; GEN povijesti)", pos: "noun", gender: "f", icon: "📜", exampleHr: "Volim povijest.", exampleEn: "I like history." },
    { id: "b1u22.stoljece", hr: "stoljeće", en: "century (n) — u desetom stoljeću", pos: "noun", gender: "n", icon: "🗓️", exampleHr: "To je bilo u desetom stoljeću.", exampleEn: "That was in the tenth century." },
    { id: "b1u22.kralj", hr: "kralj", en: "king (m; GEN kralja)", pos: "noun", gender: "m", icon: "👑", exampleHr: "Kralj je osnovao grad.", exampleEn: "The king founded the city." },
    { id: "b1u22.rat", hr: "rat", en: "war (m)", pos: "noun", gender: "m", icon: "⚔️", exampleHr: "Rat je trajao četiri godine.", exampleEn: "The war lasted four years." },
    { id: "b1u22.mir", hr: "mir", en: "peace, quiet (m) — rat i mir", pos: "noun", gender: "m", icon: "🕊️", exampleHr: "Poslije rata došao je mir.", exampleEn: "After the war came peace." },
    { id: "b1u22.osnovati", hr: "osnovati", en: "to found / establish (pf osnujem) — one act, finished", pos: "verb", icon: "🧱", exampleHr: "Kralj je osnovao grad.", exampleEn: "The king founded the city." },
    { id: "b1u22.izgraditi", hr: "izgraditi", en: "to build (pf izgradim · impf graditi, gradim)", pos: "verb", icon: "🏗️", exampleHr: "Dvorac su izgradili u desetom stoljeću.", exampleEn: "They built the castle in the tenth century." },
    { id: "b1u22.trajati", hr: "trajati", en: "to last (impf traje) — imperfective by nature: a war is a stretch, not an event", pos: "verb", icon: "⏳", exampleHr: "Rat je trajao četiri godine.", exampleEn: "The war lasted four years." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Malo povijesti",
      subtitle: "Unit 22 is about the future. It opens entirely in the past — because the thing that decides the future tense is a thing you learned in Unit 17, and it needs to be warm.",
      emoji: "📜",
      items: [
        { emoji: "⏳", label: "Pozadina", hint: "stretches are imperfective" },
        { emoji: "⚡", label: "Događaj", hint: "events are perfective" },
        { emoji: "🔒", label: "One-way verbs", hint: "trajati is only ever one" },
        { emoji: "👑", label: "New words", hint: "povijest, kralj, rat, mir…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The fork you already have",
      subtitle: "Aspect has been quietly describing things for five units. Tomorrow it starts deciding things — so today it gets a workout on the easiest material there is.",
      emoji: "⏳",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U17 aspect, U18 kad, U20 se" },
        { emoji: "🃏", label: "New words", hint: "the history eight" },
        { emoji: "⚙️", label: "Stretch or event?", hint: "one question, two answers" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: three things you own",
      items: [
        {
          prompt: "U17: which aspect describes something that WENT ON for a while?",
          options: ["nesvršeni (imperfective)", "svršeni (perfective)"],
          correctIndex: 0,
          explanation: "Imperfective — a stretch, not a point. Hold on to that: by tomorrow it will be choosing a tense for you.",
        },
        {
          prompt: "U18: »Kad sam bio mlad, ___ svako ljeto.« (we used to come)",
          options: ["dolazili smo", "dolazimo", "doći ćemo"],
          correctIndex: 0,
          explanation: "A past `kad` takes a past. Completely normal — and worth noticing today, because tomorrow `kad` starts behaving very differently.",
        },
        {
          prompt: "U20: how does this unit say «the city was founded in the 10th century»?",
          options: [
            "Kralj je osnovao grad u desetom stoljeću.",
            "Grad je osnovan u desetom stoljeću.",
            "Grad se osnovao u desetom stoljeću.",
          ],
          correctIndex: 0,
          explanation: "With an active verb and a subject. «Grad je osnovan» is the participial passive — correct Croatian, and B2. History writing is full of it, so this guard matters all week.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The history eight",
      vocabIds: [
        "b1u22.povijest", "b1u22.stoljece", "b1u22.kralj", "b1u22.rat",
        "b1u22.mir", "b1u22.osnovati", "b1u22.izgraditi", "b1u22.trajati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Stretch or event? ⏳⚡",
      body:
        "History is the cleanest material there is for aspect, because it is nothing but **events laid over a stretch**.\n\n**The stretch is imperfective.** It went on. It has duration and no edges in view.\n*Rat je **trajao** četiri godine.* · *Ljudi su **živjeli** u miru.* · *Kralj je dugo **vladao**.* → **CORRECTION: vladati is uncarded** → *Kralj je dugo **bio** kralj.*\n\n**The event is perfective.** It happened once and finished.\n*Kralj je **osnovao** grad.* · *Rat je **počeo** u desetom stoljeću.* · *Dvorac su **izgradili**.*\n\nOne question settles it: **did it go on, or did it happen?**\n\nA paragraph of history alternates between the two, and that alternation is what makes it read as narrative rather than as a list:\n\n> *Kralj je **osnovao** grad. (event) Ljudi su tu **živjeli** stotinu godina. (stretch) Onda je **počeo** rat. (event) Rat je **trajao** četiri godine. (stretch) Poslije rata **došao** je mir. (event)*",
      diagram: {
        kind: "contrast",
        left: {
          title: "POZADINA — nesvršeno",
          emoji: "⏳",
          lines: [
            { hr: "Rat je trajao četiri godine.", en: "The war lasted four years." },
            { hr: "Ljudi su živjeli u miru.", en: "People lived in peace." },
            { hr: "→ it went on", en: "duration, no edges in view" },
          ],
        },
        right: {
          title: "DOGAĐAJ — svršeno",
          emoji: "⚡",
          lines: [
            { hr: "Kralj je osnovao grad.", en: "The king founded the city." },
            { hr: "Dvorac su izgradili.", en: "They built the castle." },
            { hr: "→ it happened", en: "one act, finished" },
          ],
        },
      },
      ttsChips: ["Rat je trajao četiri godine.", "Kralj je osnovao grad.", "Poslije rata došao je mir."],
    },
    {
      id: "s06",
      type: "teach",
      title: "Some verbs are only ever one kind 🔒",
      body:
        "This is the small fact that will decide a whole tense tomorrow, so it is worth its own slide.\n\n**Some verbs are imperfective by nature** and have no useful perfective at B1, because what they describe simply cannot be an event:\n\n***trajati*** — a war does not *happen*, it **lasts**. There is no moment at which lasting is completed.\n***čekati*** — waiting is a stretch, always.\n***razgledati*** — looking round takes time by definition. (You card it tomorrow.)\n\n**And some are perfective by nature**, because what they describe is a single completed act:\n\n***osnovati*** — a city is founded once.\n***stići*** — arriving is a moment.\n***doći*** — likewise.\n\nMost verbs have a partner, of course — *izgraditi* has *graditi*, *kupiti* has *kupovati* — and Unit 17 drilled those pairs. What matters today is that you can look at a verb and say **which kind it is**, quickly, without thinking about it.\n\nWhy it matters: tomorrow, in a sentence about the future, **the aspect of the verb will choose the tense** — and you will not get a say.",
      table: {
        caption: "Look at the verb and name its kind",
        headers: ["glagol", "vrsta", "zašto"],
        rows: [
          ["trajati", "**nesvršeni**, uvijek", "lasting has no finishing point"],
          ["čekati", "**nesvršeni**, uvijek", "waiting is a stretch"],
          ["osnovati", "**svršeni**, uvijek", "founding happens once"],
          ["stići · doći", "**svršeni**, uvijek", "arriving is a moment"],
          ["graditi ‖ izgraditi", "par", "the stretch ‖ the finish"],
          ["kupovati ‖ kupiti", "par", "the habit ‖ the one purchase"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Tomorrow this stops being description",
        text: "Today aspect only describes what happened. From tomorrow, in a clause about the future, it chooses the tense — perfective takes the present, imperfective takes a tense you have not met yet. Being able to name a verb's kind on sight is the whole preparation.",
      },
    },
    {
      id: "s07",
      type: "example",
      title: "A place, and what happened to it",
      items: [
        { hr: "Kralj je osnovao grad u desetom stoljeću.", en: "The king founded the city in the tenth century.", note: "Event → perfective. And active, with a subject — not «grad je osnovan»." },
        { hr: "Dvorac su izgradili poslije.", en: "They built the castle afterwards.", note: "Another event. su izgradili — perfective." },
        { hr: "Ljudi su tu živjeli stotinu godina.", en: "People lived there for a hundred years.", note: "A stretch → imperfective, with a duration attached." },
        { hr: "Onda je počeo rat.", en: "Then the war began.", note: "An event, even though what follows it is a stretch." },
        { hr: "Rat je trajao četiri godine.", en: "The war lasted four years.", note: "trajati is imperfective by nature — this is the model sentence." },
        { hr: "Poslije rata došao je mir.", en: "After the war came peace.", note: "Event. rat i mir — the pair." },
        { hr: "Kad sam bio mlad, dolazili smo ovamo svako ljeto.", en: "When I was young, we came here every summer.", note: "→ CORRECTION: ovamo is rejected → «dolazili smo svako ljeto». A past kad takes a past; nothing is odd here yet." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Name the kind",
      subtitle: "Every item asks the same question first: did this go on, or did it happen? Get quick at it — tomorrow the answer picks a tense.",
      emoji: "⚡",
      items: [
        { emoji: "✅", label: "Quick check", hint: "four verbs, two kinds" },
        { emoji: "🔤", label: "Build them", hint: "narrate a place's history" },
        { emoji: "🔊", label: "Listen", hint: "stretches and events" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: stretch or event?",
      items: [
        {
          prompt: "»Rat je ___ četiri godine.« (trajati)",
          options: ["trajao", "trajio", "potrajao"],
          correctIndex: 0,
          explanation: "trajao — and note that there is no perfective to choose from here. A war lasts; it does not happen.",
        },
        {
          prompt: "»Kralj je ___ grad.« (osnovati — one act, finished)",
          options: ["osnovao", "osnivao", "osnuje"],
          correctIndex: 0,
          explanation: "osnovao — perfective. Founding a city is a single completed act, so there is no stretch to describe.",
        },
        {
          prompt: "»Ljudi su tu ___ stotinu godina.« (živjeti)",
          options: ["živjeli", "poživjeli", "žive"],
          correctIndex: 0,
          explanation: "živjeli — a stretch with a duration attached, so imperfective. «Stotinu godina» is the giveaway.",
        },
        {
          prompt: "Which one is NOT something this unit will say?",
          options: [
            "Grad je osnovan u desetom stoljeću.",
            "Kralj je osnovao grad u desetom stoljeću.",
            "Grad su osnovali u desetom stoljeću.",
          ],
          correctIndex: 0,
          explanation: "The first — that is the participial passive, which is correct Croatian and is B2. History writing is full of it, so it will keep offering itself all week. Options 2 and 3 are both this unit's routes.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each verb to what kind it is",
      pairs: [
        { a: "trajati", b: "nesvršeni — uvijek (a stretch, no finish)" },
        { a: "osnovati", b: "svršeni — uvijek (one act, finished)" },
        { a: "graditi ‖ izgraditi", b: "par — the stretch ‖ the finish" },
        { a: "čekati", b: "nesvršeni — uvijek (waiting has no point)" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Rat je ___ četiri godine.",
      blanks: [["trajao"]],
      translation: "The war lasted four years.",
      explanation: "trajati is imperfective by nature. Remember this verb — it is the model for the whole idea.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Kralj je ___ grad u desetom stoljeću.",
      blanks: [["osnovao"]],
      translation: "The king founded the city in the tenth century.",
      explanation: "Perfective, and active. The passive version is B2.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Kad sam ___ mlad, dolazili smo svako ljeto.",
      blanks: [["bio"]],
      translation: "When I was young, we came every summer.",
      explanation: "A past `kad` takes a past — nothing unusual. Note it, because tomorrow `kad` stops being this simple.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Narrate it: the king founded the city, and the war lasted four years. (two sentences)",
      answers: [
        "Kralj je osnovao grad. Rat je trajao četiri godine.",
        "Kralj je osnovao grad, a rat je trajao četiri godine.",
        "Kralj je osnovao grad. Rat je trajao četiri godine",
      ],
      hint: "One event, one stretch — and the aspects have to show which is which.",
      explanation: "Kralj je osnovao grad. Rat je trajao četiri godine. Perfective for the founding, imperfective for the lasting.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Say it without the passive: «The castle was built in the tenth century.»",
      answers: [
        "Dvorac su izgradili u desetom stoljeću.",
        "Dvorac su izgradili u desetom stoljeću",
        "Izgradili su dvorac u desetom stoljeću.",
      ],
      hint: "Use an ordinary active verb with an unnamed «they».",
      explanation: "Dvorac su izgradili u desetom stoljeću. «Dvorac je izgrađen» is the participial passive — real Croatian, and B2. An unnamed plural subject does the job here.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Rat je trajao četiri godine.",
      answers: ["Rat je trajao četiri godine.", "Rat je trajao četiri godine"],
      allowSlow: true,
      explanation: "The unit's model imperfective.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Kralj je osnovao grad u desetom stoljeću.",
      answers: ["Kralj je osnovao grad u desetom stoljeću.", "Kralj je osnovao grad u desetom stoljeću"],
      allowSlow: true,
      explanation: "Perfective, active, with the century in the locative.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Kralj je osnovao grad, a poslije je došao rat.",
      targetEn: "The king founded the city, and afterwards the war came.",
      phonetic: "KRAL ye os-NO-vao grad, a POS-lee-ye ye DO-shao rat",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je grad ___ je kralj osnovao.« (that's the city the king founded — grad is inanimate)",
      options: ["koji", "kojeg", "kojem"],
      correctIndex: 0,
      explanation: "koji — object of osnovao, and a city is inanimate, so the accusative looks like the nominative.",
      tts: "To je grad koji je kralj osnovao.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Which sentence in this lesson points at the FUTURE?",
      options: [
        "None of them — that's deliberate.",
        "«Rat je trajao četiri godine.»",
        "«Kad sam bio mlad, dolazili smo svako ljeto.»",
      ],
      correctIndex: 0,
      explanation: "Not one. The unit's grammar is entirely about the future, and today is entirely about the past — so that tomorrow arrives as a genuine contrast rather than as more of the same.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**One question, all lesson: did it go on, or did it happen?**\n\n- **Went on → imperfective.** *Rat je **trajao** četiri godine.* · *Ljudi su **živjeli** u miru.*\n- **Happened → perfective.** *Kralj je **osnovao** grad.* · *Dvorac su **izgradili**.*\n\n**Some verbs are only ever one kind**, and this is the fact that matters most:\n**trajati, čekati** — imperfective, always. **osnovati, stići, doći** — perfective, always.\n\n**A past `kad` takes a past**, and nothing about it is strange: *Kad sam bio mlad, dolazili smo svako ljeto.* Notice how ordinary that is.\n\n⚠️ **No participial passive.** *Grad je osnovan* is correct Croatian and is B2. This unit says *Kralj je osnovao grad* or *Grad su osnovali* — active, with a subject.\n\n**Nothing in this lesson pointed at the future.** That was on purpose.\n\nTomorrow: the same fork, in a sentence about the future — where it stops describing and starts **choosing a tense for you**.",
      vocabIds: [
        "b1u22.povijest", "b1u22.stoljece", "b1u22.kralj", "b1u22.rat",
        "b1u22.mir", "b1u22.osnovati", "b1u22.izgraditi", "b1u22.trajati",
      ],
    },
  ],
  srsCloze: [
    { front: "Rat je ___ četiri godine. (trajati)", answers: ["trajao"], back: "trajao — imperfective by nature. A war lasts; it does not happen.", tts: "Rat je trajao četiri godine." },
    { front: "Kralj je ___ grad. (osnovati)", answers: ["osnovao"], back: "osnovao — perfective, and active. «Grad je osnovan» is the B2 passive.", tts: "Kralj je osnovao grad." },
    { front: "Background in a story = ___ aspect · an event = ___ aspect", answers: ["imperfective, perfective", "nesvršeni, svršeni", "imperfective perfective"], back: "Background imperfective, event perfective. Tomorrow this same fork chooses a tense.", tts: "Rat je trajao četiri godine, a onda je došao mir." },
    { front: "Kad sam ___ mlad, dolazili smo svako ljeto.", answers: ["bio"], back: "A past kad takes a past. Perfectly ordinary — and worth remembering when tomorrow's kad is not.", tts: "Kad sam bio mlad, dolazili smo svako ljeto." },
    { front: "history = ___", answers: ["povijest"], back: "povijest (f, i-declension) — GEN povijesti.", tts: "Volim povijest." },
    { front: "century = ___ (and «in the 10th century» = ___)", answers: ["stoljeće, u desetom stoljeću", "stoljeće", "stoljece"], back: "stoljeće — u desetom stoljeću, with the ordinal in the locative.", tts: "To je bilo u desetom stoljeću." },
    { front: "war ‖ peace = ___ ‖ ___", answers: ["rat, mir", "rat mir"], back: "rat ‖ mir — Poslije rata došao je mir.", tts: "Poslije rata došao je mir." },
    { front: "to found / establish = ___", answers: ["osnovati"], back: "osnovati (pf, osnujem) — one act, finished.", tts: "Kralj je osnovao grad." },
    { front: "to build = ___", answers: ["izgraditi", "graditi"], back: "izgraditi (pf) / graditi (impf) — the finish ‖ the stretch.", tts: "Dvorac su izgradili u desetom stoljeću." },
    { front: "king = ___", answers: ["kralj"], back: "kralj (m) — GEN kralja.", tts: "Kralj je osnovao grad." },
  ],
  notes: {
    inOneSentence: {
      en: "History is events laid over a stretch — perfective for what happened, imperfective for what went on — and some verbs, like trajati and osnovati, are only ever one kind, which is the fact tomorrow's tense rule depends on.",
      exampleHr: "Kralj je osnovao grad, ljudi su tu živjeli stotinu godina, a onda je počeo rat koji je trajao četiri godine.",
    },
    deepDive: [
      {
        title: "Events laid over a stretch",
        body:
          "Unit 17 taught aspect and it has been running quietly ever since. History is where it shows most clearly, because a historical paragraph is nothing but **events laid over a stretch**:\n\n> *Kralj je **osnovao** grad.* (event) · *Ljudi su tu **živjeli** stotinu godina.* (stretch) · *Onda je **počeo** rat.* (event) · *Rat je **trajao** četiri godine.* (stretch) · *Poslije rata **došao** je mir.* (event)\n\nThat alternation is what makes it read as a narrative rather than as a list. One question sorts every verb:\n\n> **Did it go on, or did it happen?**\n\n**It went on** → imperfective. Duration, no edges in view, and very often a length attached: *stotinu godina*, *četiri godine*, *dugo*.\n**It happened** → perfective. One act, finished, and usually a point in time attached: *u desetom stoljeću*, *onda*, *poslije rata*.\n\nA useful diagnostic: **if you can put a duration on it, it is imperfective**. *Rat je trajao **četiri godine*** ✅. You cannot say \\*~~Kralj je osnovao grad četiri godine~~ — founding has no length.",
        table: {
          caption: "A paragraph of history, verb by verb",
          headers: ["rečenica", "vrsta", "zašto"],
          rows: [
            ["Kralj je **osnovao** grad.", "svršeni", "one act, finished"],
            ["Ljudi su **živjeli** stotinu godina.", "nesvršeni", "a stretch, with a length"],
            ["Onda je **počeo** rat.", "svršeni", "a moment — the start"],
            ["Rat je **trajao** četiri godine.", "nesvršeni", "a stretch, with a length"],
            ["Poslije rata **došao** je mir.", "svršeni", "a moment — the arrival"],
          ],
        },
      },
      {
        title: "The verbs that are only ever one kind",
        body:
          "Most verbs come in pairs — *graditi ‖ izgraditi*, *kupovati ‖ kupiti*, *dolaziti ‖ doći* — and Unit 17 drilled them. **Some do not**, and those are the ones that matter for what is coming.\n\n**Imperfective by nature**, because what they describe has no finishing point:\n\n| glagol | zašto |\n|---|---|\n| **trajati** | lasting cannot be completed — it just stops |\n| **čekati** | waiting is a stretch by definition |\n| **razgledati** | looking round takes time (carded tomorrow) |\n| **živjeti** | living has duration built in |\n\n**Perfective by nature**, because what they describe is a single act:\n\n| glagol | zašto |\n|---|---|\n| **osnovati** | a city is founded once |\n| **stići** · **doći** | arriving is a moment |\n| **propustiti** | missing something happens at one point (carded in L3) |\n\n**Why this is the most important thing on the page.** From tomorrow, in any clause about the future introduced by *kad*, *čim*, *dok* or *ako*, **the aspect of the verb chooses the tense** — a perfective takes the present, an imperfective takes a tense you have not met yet. You will not get a vote. So the skill worth having by the end of today is not *understanding* aspect; it is **naming a verb's kind on sight, fast**.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "The one thing to take into tomorrow",
          text: "Can you look at «čekati» and say «imperfective» without pausing? At «stići» and say «perfective»? That reflex is the entire prerequisite for Futur II, and it is why this lesson exists.",
        },
      },
      {
        title: "The past `kad` — ordinary, and here for contrast",
        body:
          "*Kad sam bio mlad, dolazili smo svako ljeto.*\n\nNothing is odd about that sentence. A `kad` pointing at the past takes an ordinary past tense in both halves, and it has behaved that way since Unit 18 taught it. The aspects inside follow the same rule as everywhere else: *bio* (a stretch — being young lasted), *dolazili* (a habit — repeated, so imperfective).\n\nIt is in this lesson for one reason: **so that tomorrow's ban lands as a change.**\n\nFrom tomorrow, a `kad` pointing at the **future** cannot contain a Futur I, and learners often mis-file that as a rule about the word `kad`. It is not. `kad` is fine. What changes is the direction of time:\n\n| smjer | rečenica | u zavisnoj rečenici |\n|---|---|---|\n| **prošlost** | Kad sam bio mlad, dolazili smo svako ljeto. | an ordinary past |\n| **budućnost** | Kad dođem, javit ću ti. | *(tomorrow)* |\n\nKeep the first row in mind. You will need it as the thing the second row is *different from*.",
      },
      {
        title: "⚠️ The passive that history writing wants",
        body:
          "Read anything about a city and you will meet this shape:\n\n*Grad je **osnovan** u desetom stoljeću.* · *Dvorac je **izgrađen** poslije.* · *Muzej je **otvoren** 1950.*\n\nIt is correct, it is everywhere, and it is the **participial passive** — the construction Unit 20 named as its B2 neighbour. It is not this course's, not yet.\n\nThe reason it matters here more than anywhere else is that this lesson cards *osnovati* and *izgraditi*, which are exactly the verbs that construction is built from. So the temptation arrives with the vocabulary.\n\n**Two repairs, both of which you already own:**\n\n**An unnamed plural subject** — the simplest and the most natural:\n*Dvorac su **izgradili** u desetom stoljeću.* ✅\n\n**A named subject**, when you have one:\n*Kralj je **osnovao** grad.* ✅\n\nAnd Unit 20's `se`-passive is available too, though it fits generic statements better than one-off historical events: *Ovdje se **gradilo** stotinu godina.*",
      },
    ],
    commonMistakes: [
      { wrong: "Rat se dogodio četiri godine.", right: "Rat je **trajao** četiri godine.", why: "A war does not happen; it lasts. And the duration «četiri godine» is itself the giveaway — you can only attach a length to an imperfective." },
      { wrong: "Kralj je osnivao grad.", right: "Kralj je **osnovao** grad.", why: "Founding a city is one completed act, so perfective. The imperfective would suggest he was in the middle of doing it repeatedly." },
      { wrong: "Grad je osnovan u desetom stoljeću.", right: "**Kralj je osnovao** grad. / **Grad su osnovali** u desetom stoljeću.", why: "The participial passive is correct Croatian and is B2. Use an active verb with a named or unnamed subject." },
      { wrong: "Kad sam bio mlad, dolazimo svako ljeto.", right: "Kad sam bio mlad, **dolazili smo** svako ljeto.", why: "A past `kad` takes a past in both halves." },
      { wrong: "Ljudi su poživjeli stotinu godina.", right: "Ljudi su **živjeli** stotinu godina.", why: "A hundred years is a stretch, so the verb has to be imperfective." },
      { wrong: "Dvorac je bio najstariji u zemlji.", right: "Dvorac je **star pet stotina godina**.", why: "Superlatives are B2. Say the number instead — it is more informative anyway." },
    ],
    memoryHooks: [
      "**Did it go on, or did it happen?** One question, and it sorts every verb in a historical paragraph.",
      "**If you can put a length on it, it's imperfective.** *Rat je trajao četiri godine* ✅ · *\\*Kralj je osnovao grad četiri godine* ❌.",
      "**trajati and osnovati are the two poles.** One can only ever be a stretch; the other can only ever be an event. Learn them as a pair.",
      "**A past `kad` is completely ordinary.** Remember how ordinary — you'll need it as the contrast tomorrow.",
      "**When you want «was founded», say who founded it.** Or use an unnamed *su osnovali*. The passive is a level away.",
    ],
    connects: [
      { label: "Aspect — where the fork was built", lessonId: "b1u17l1" },
      { label: "kad in the past, and the conditional ako", lessonId: "b1u18l3" },
      { label: "The participial passive, and its repairs", lessonId: "b1u20l5" },
      { label: "Next: the same fork, choosing a tense", lessonId: "b1u22l2" },
    ],
    selfCheck: [
      { q: "»Rat je ___ četiri godine.« (trajati) — and why can't it be perfective?", a: "trajao. Lasting has no finishing point, and you can only attach a duration to an imperfective." },
      { q: "Why does this unit avoid «Grad je osnovan u desetom stoljeću»?", a: "It's the participial passive — correct Croatian, but B2. Say «Kralj je osnovao grad» or «Grad su osnovali» instead." },
      { q: "Name two verbs that are imperfective by nature and two that are perfective by nature.", a: "Imperfective: trajati, čekati (also živjeti, razgledati). Perfective: osnovati, stići (also doći, propustiti)." },
      { q: "»Kad sam bio mlad, ___ svako ljeto.«", a: "dolazili smo — a past kad takes a past, and a repeated habit is imperfective." },
      { q: "Why is this whole lesson in the past when the unit is about the future?", a: "Because the thing that will decide the future tense is aspect, and it needs to be automatic first. Tomorrow's rule lands as a contrast rather than as more of the same." },
    ],
  },
};
