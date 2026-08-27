import type { Lesson } from "@/types/content";

/**
 * B1 U20 L5 — Zeleni grad (Consolidation + the writing task)
 * Spec: curriculum/B1/unit-20.md · grammar-reference §18 "The se-constructions"
 * + §12 · §10 · §17.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new machinery. The lesson sorts all four constructions back together,
 * hands the learner a four-question decision procedure, gathers the five
 * standing traps onto one wall, and ends with the scaffold and the model text
 * for the unit's writing task.
 *
 * THE FOUR-QUESTION SORTER (the unit's exit printable):
 *   1. Is there a THING the sentence is about?   → se-passive, verb AGREES (L1)
 *   2. Is there NO thing at all?                 → impersonal se, verb frozen
 *                                                  3sg / neuter past      (L2)
 *   3. Is it a claim somebody-or-other makes?    → kaže se / smatra se /
 *                                                  zna se DA + original tense (L3)
 *   4. Is it advice or a requirement?            → treba / trebalo bi + inf,
 *                                                  and NO `se`             (L4)
 *
 * THE WALL OF FIVE TRAPS:
 *   (a) verb left singular when the thing is plural — the unit's #1 error
 *   (b) `se` opening a clause
 *   (c) two `se` in one clause (including the invisible kind, where the verb
 *       already owns a lexical one)
 *   (d) a `se` inserted after `treba`
 *   (e) reaching for the PARTICIPIAL PASSIVE — *zabranjeno je*, *zagađeno je* —
 *       which is real Croatian and is B2. The repair is always one of the four.
 *
 * The notes page for this lesson IS the pre-writing checklist and is written as
 * one: six scaffold rows, a model text, and a species reference strip.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and routed around: različit (0), običan (0), dovoljno
 * (0), isti (0 — «na istom planetu» rebuilt as «planet je naš»), učiniti (0 →
 * napraviti), nitko (rejected by name in b1u19's test header), više / manje
 * (comparatives). Deferred by unit: no participial passive except where it is
 * NAMED as the B2 neighbour and repaired, no comparatives, no Future II, no
 * reported speech with a named speaker, no -nje as a productive formation.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U20 cut-outs exist (budući da stays
 * icon-only — there is nothing to draw).
 */
export const b1u20l5: Lesson = {
  id: "b1u20l5",
  unitId: "b1u20",
  title: "Zeleni grad",
  titleEn: "The green city — all four constructions, and a paragraph to write",
  grammarTags: ["se-passive", "impersonal-se", "trebati", "writing", "environment"],
  estMinutes: 22,
  vocab: [
    { id: "b1u20.cuvati", hr: "čuvati", en: "to look after / protect / keep (čuvam) — čuvati okoliš, čuvati prirodu", pos: "verb", icon: "🤲", exampleHr: "Treba čuvati okoliš.", exampleEn: "The environment should be looked after." },
    { id: "b1u20.zastita", hr: "zaštita", en: "protection (f) — zaštita okoliša is the standing collocation", pos: "noun", gender: "f", icon: "🛡️", exampleHr: "Zaštita okoliša je važna.", exampleEn: "Protecting the environment is important." },
    { id: "b1u20.rjesenje", hr: "rješenje", en: "solution (n)", pos: "noun", gender: "n", icon: "🔑", exampleHr: "To nije rješenje.", exampleEn: "That isn't a solution." },
    { id: "b1u20.promjena", hr: "promjena", en: "change (f) — the noun beside the verb promijeniti", pos: "noun", gender: "f", icon: "🔃", exampleHr: "Promjena je važna.", exampleEn: "Change is important." },
    { id: "b1u20.unistiti", hr: "uništiti", en: "to destroy (pf uništim · impf uništavati, uništavam)", pos: "verb", icon: "💥", exampleHr: "Ne smije se uništiti priroda.", exampleEn: "Nature must not be destroyed." },
    { id: "b1u20.spasiti", hr: "spasiti", en: "to save / rescue (spasim) — of something in danger; money and energy take štedjeti", pos: "verb", icon: "🆘", exampleHr: "Treba spasiti rijeku.", exampleEn: "The river should be saved." },
    { id: "b1u20.zeleni", hr: "zeleni", en: "green in the environmental sense (zelena, zeleno) — zeleni grad, zelena politika", pos: "adj", icon: "🌿", exampleHr: "Zagreb je zeleni grad.", exampleEn: "Zagreb is a green city." },
    { id: "b1u20.buducida", hr: "budući da", en: "since / given that — a fixed connector, a second reason-word beside jer", pos: "conj", icon: "➰", exampleHr: "Budući da je planet naš, treba ga čuvati.", exampleEn: "Since the planet is ours, it should be looked after.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Zeleni grad",
      subtitle: "Four constructions, one question: is there a thing in this sentence? Today you sort them, walk the wall of traps, and write a paragraph.",
      emoji: "🌿",
      items: [
        { emoji: "🧭", label: "The sorter", hint: "four questions, in order" },
        { emoji: "🧱", label: "The wall", hint: "five traps, all named" },
        { emoji: "✍️", label: "The scaffold", hint: "six rows to fill" },
        { emoji: "🛡️", label: "New words", hint: "čuvati, zaštita, rješenje…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Sort them",
      subtitle: "Everything this week comes down to one question asked in the right order — and the answer tells you which of four shapes to write.",
      emoji: "🧭",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "one item from each lesson" },
        { emoji: "🃏", label: "New words", hint: "the protection eight" },
        { emoji: "⚙️", label: "Four questions", hint: "the exit printable" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: one from each day",
      items: [
        {
          prompt: "L1: »Ovdje se ___ boce i staklo.« (bottles and glass are recycled here)",
          options: ["recikliraju", "reciklira", "reciklirati"],
          correctIndex: 0,
          explanation: "Two things joined by i make a plural subject → plural verb.",
        },
        {
          prompt: "L2: »Ovdje se ne ___ bacati otpad.«",
          options: ["smije", "smiju", "smijemo"],
          correctIndex: 0,
          explanation: "Frozen 3sg — no subject anywhere in the sentence.",
        },
        {
          prompt: "L3: »Kaže se ___ je to problem.«",
          options: ["da", "što", "koji"],
          correctIndex: 0,
          explanation: "da — obligatory, always.",
        },
        {
          prompt: "L4: »___ štedjeti energiju.« (one should)",
          options: ["Treba", "Treba se", "Trebam"],
          correctIndex: 0,
          explanation: "Treba — an infinitive follows, and this construction takes NO se.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The protection eight",
      vocabIds: [
        "b1u20.cuvati", "b1u20.zastita", "b1u20.rjesenje", "b1u20.promjena",
        "b1u20.unistiti", "b1u20.spasiti", "b1u20.zeleni", "b1u20.buducida",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Four questions, in order 🧭",
      body:
        "Every sentence this week can be sorted by asking four questions, and you stop at the first one that answers yes.\n\n**1 · Is there a THING the sentence is about?**\n→ se-passive. The thing is the **subject**, so the **verb agrees with it**.\n*Ovdje se **recikliraju boce**.* · *Papir se **reciklira**.*\n\n**2 · Is there NO thing at all?**\n→ impersonal se. Nothing is the subject, so the verb **freezes in the 3sg** — **neuter** in the past.\n*Ovdje se ne baca smeće.* · *Kako se živi u Hrvatskoj?* · *Prije se živjelo dobro.*\n\n**3 · Is it a claim somebody-or-other makes?**\n→ *kaže se / smatra se / zna se* **+ da +** a clause **in its original tense**.\n*Kaže se da je zagađenje veliki problem.*\n\n**4 · Is it advice or a requirement?**\n→ *treba* / *trebalo bi* **+ infinitive**, and **no `se`**.\n*Treba štedjeti energiju.* · *Trebalo bi smanjiti otpad.*\n\nThat is the entire unit. Question 1 catches most sentences; question 2 catches most of the rest.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Ima li stvari?", emoji: "🎯", example: "DA → se-pasiv, glagol se slaže: Boce se recikliraju." },
          { label: "Nema stvari?", emoji: "🧊", example: "DA → bezlični se, 3. lice jednine: Ovdje se ne baca smeće." },
          { label: "Netko to tvrdi?", emoji: "🗣️", example: "DA → kaže se / smatra se / zna se DA + rečenica." },
          { label: "Savjet ili obveza?", emoji: "🕊️", example: "DA → treba / trebalo bi + infinitiv, BEZ se." },
        ],
      },
      ttsChips: ["Boce se recikliraju.", "Ovdje se ne baca smeće.", "Kaže se da je to problem.", "Trebalo bi smanjiti otpad."],
    },
    {
      id: "s06",
      type: "teach",
      title: "The wall 🧱",
      body:
        "Five traps. Four of them make a sentence wrong; the fifth makes it the wrong unit.\n\n**(a) The verb left singular when the thing is plural.** The unit's number-one error, by a distance, and the first thing the writing rubric checks.\n~~*Ovdje se reciklira boce.*~~ ❌ → *Ovdje se **recikliraju** boce.* ✅\n\n**(b) `se` opening a clause.** It is a clitic; §12 has forbidden this since Unit 12.\n~~*Se reciklira plastika.*~~ ❌ → ***Plastika se** reciklira.* ✅\n\n**(c) Two `se` in one clause** — including the invisible kind, where the verb already owns a lexical one.\n~~*Ovdje se se slaže.*~~ ❌ → *Ovdje se **ljudi** slažu.* ✅\n\n**(d) A `se` after `treba`.** Three lessons trained the reflex; this construction has no slot for it.\n~~*Treba se štedjeti energiju.*~~ ❌ → *Treba štedjeti energiju.* ✅\n\n**(e) Reaching for the participial passive.** *Zabranjeno je…*, *Zagađeno je…*, *Otvoreno je…* — this is **real Croatian** and you will see it on signs everywhere. It is also **B2**, and it is not what this unit teaches. Whenever you want it, one of the four constructions above will do the job:\n\n| you want to say | not yet | this unit |\n|---|---|---|\n| glass must not be thrown here | *Zabranjeno je bacati staklo.* | **Ne smije se** bacati staklo. |\n| the gallery is closed today | *Galerija je zatvorena.* | Galerija danas **ne radi**. |\n| the river is polluted | *Rijeka je zagađena.* | *Rijeku* **zagađuju** ljudi. / **Zagađenje** je problem. |",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "If you remember one thing",
        text: "Before every verb in this unit, ask: what is the thing, and how many of it are there? A plural thing that got a singular verb is the single most common error, and it is the one that costs most in the writing task.",
      },
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Sort, then write",
      subtitle: "Mixed practice first — name the construction before you answer it — and then the scaffold, the model text, and a paragraph of your own.",
      emoji: "✍️",
      items: [
        { emoji: "🔀", label: "Mixed practice", hint: "all four, unlabelled" },
        { emoji: "🧱", label: "The traps", hint: "repair the B2 sentence" },
        { emoji: "📝", label: "The scaffold", hint: "six rows and a model" },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Mixed: name the construction, then answer",
      items: [
        {
          prompt: "»U mom gradu se ___ ulice svaki dan.« (the streets are cleaned every day — čistiti)",
          options: ["čiste", "čisti", "čistilo"],
          correctIndex: 0,
          explanation: "Question 1: there IS a thing — ulice — and it is plural, so the verb agrees: čiste.",
        },
        {
          prompt: "»U ovom gradu se dobro ___ .« (one lives well in this town — živjeti)",
          options: ["živi", "žive", "živjelo"],
          correctIndex: 0,
          explanation: "Question 2: no thing at all, so the verb freezes in the 3sg: živi.",
        },
        {
          prompt: "»___ se da je promjena važna.« (it is HELD that change is important)",
          options: ["Smatra", "Smatraju", "Smatralo"],
          correctIndex: 0,
          explanation: "Question 3: a claim with nobody behind it. The frame is frozen — there is no *smataju se*.",
        },
        {
          prompt: "»___ ___ čuvati okoliš.« (the environment ought to be looked after)",
          options: ["Trebalo bi", "Trebala bi", "Treba se"],
          correctIndex: 0,
          explanation: "Question 4: advice → trebalo bi + infinitive, neuter and frozen, with no se.",
        },
      ],
    },
    {
      id: "s09",
      type: "match",
      prompt: "Match each sentence to the question that catches it",
      pairs: [
        { a: "Boce se recikliraju.", b: "1 · there IS a thing → the verb agrees" },
        { a: "Ovdje se ne baca smeće.", b: "2 · no thing → the verb freezes" },
        { a: "Zna se da je plastika štetna.", b: "3 · a claim with nobody behind it" },
        { a: "Trebalo bi smanjiti otpad.", b: "4 · advice → treba + inf, no se" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "U mom gradu se ___ otpad.",
      blanks: [["odvaja"]],
      translation: "Waste is sorted in my town.",
      explanation: "otpad is the object of an ownerless verb, not the subject — delete it and the sentence still stands. So the verb freezes.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ulice se ___ svaki dan.",
      blanks: [["čiste", "ciste"]],
      translation: "The streets are cleaned every day.",
      explanation: "ulice IS the subject here, and it is plural — so the verb agrees. Compare the item before this one and the difference is the whole unit.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Kaže se ___ je zaštita okoliša važna.",
      blanks: [["da"]],
      translation: "Protecting the environment is said to be important.",
      explanation: "da — obligatory. And notice the tense inside is untouched.",
    },
    {
      id: "s13",
      type: "fill",
      text: "___ čuvati prirodu.",
      blanks: [["Treba"]],
      translation: "Nature should be looked after.",
      wordBank: ["Treba", "Treba se", "Trebam"],
      explanation: "An infinitive follows → the frozen impersonal one, and it takes no se.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["U", "našem", "gradu", "se", "odvajaju", "papir", "i", "staklo"],
      answers: ["U našem gradu se odvajaju papir i staklo.", "U našem gradu se odvajaju papir i staklo"],
      en: "Paper and glass are sorted in our town.",
      explanation: "«U našem gradu» is one phrase and fills slot one, so `se` is slot two. And papir i staklo is a plural subject — hence odvajaju, not odvaja.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Ovdje", "se", "ne", "smije", "uništiti", "priroda"],
      answers: ["Ovdje se ne smije uništiti priroda.", "Ovdje se ne smije uništiti priroda"],
      en: "Nature must not be destroyed here.",
      explanation: "The modal stack: frozen ne smije, se in second position, infinitive after. Ovdje fills slot one.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Translate: «Waste ought to be reduced, since plastic is harmful.» (use budući da)",
      answers: [
        "Trebalo bi smanjiti otpad, budući da je plastika štetna.",
        "Trebalo bi smanjiti otpad budući da je plastika štetna.",
        "Budući da je plastika štetna, trebalo bi smanjiti otpad.",
      ],
      hint: "trebalo bi + infinitive for the advice; budući da + an ordinary clause for the reason.",
      explanation: "Either order works. budući da behaves like jer — an ordinary clause follows it, and the clitic je sits in second position of that clause.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "Repair the B2 sentence: »Zabranjeno je bacati staklo ovdje.« → say it this unit's way.",
      answers: [
        "Ovdje se ne smije bacati staklo.",
        "Ne smije se bacati staklo ovdje.",
        "Ovdje se ne smije bacati staklo",
      ],
      hint: "The participial passive becomes the modal stack.",
      explanation: "Ovdje se ne smije bacati staklo. The original is perfectly good Croatian and you will see it on real signs — it is simply a construction from a later level.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "U našem gradu se odvajaju papir i staklo.",
      answers: ["U našem gradu se odvajaju papir i staklo.", "U našem gradu se odvajaju papir i staklo"],
      allowSlow: true,
      explanation: "Plural subject, plural verb — the syllable -ju is the whole difference.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Trebalo bi čuvati okoliš.",
      answers: ["Trebalo bi čuvati okoliš.", "Trebalo bi čuvati okoliš", "Trebalo bi cuvati okolis."],
      allowSlow: true,
      explanation: "Neuter conditional, frozen, and no se anywhere.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "U mom gradu se odvaja otpad i ulice su čiste.",
      targetEn: "Waste is sorted in my town and the streets are clean.",
      phonetic: "oo mom GRA-doo se OD-va-ya OT-pad ee OO-lee-tse soo CHEE-ste",
    },
    {
      id: "s21",
      type: "teach",
      title: "The scaffold ✍️",
      body:
        "The writing task at the end of this unit asks for 80–150 words on **how the environment is looked after where you live**. Six rows, one construction each — fill them and the paragraph writes itself.\n\nThe rubric checks five things, and they map onto the rows exactly: **two se-passives, at least one with a plural subject** · **one impersonal `se` with no subject at all** · **one *kaže se / smatra se / zna se* frame** · **one *treba* or *trebalo bi* + infinitive** · **one reason with *jer* or *budući da***.",
      table: {
        caption: "Six rows — fill each one",
        headers: ["red", "što tu ide", "model"],
        rows: [
          ["1 · gdje", "where you live", "U mom gradu…"],
          ["2 · što se radi", "se-passive, **plural subject**", "Boce se recikliraju. Ulice se čiste."],
          ["3 · što se ne smije", "impersonal se, no subject", "Ovdje se ne smije bacati staklo u kantu."],
          ["4 · što se kaže", "kaže se / smatra se / zna se da…", "Kaže se da je recikliranje korisno."],
          ["5 · što bi trebalo", "treba / trebalo bi + inf, **no se**", "Trebalo bi smanjiti plastiku."],
          ["6 · zašto", "jer / budući da", "…jer je plastika štetna."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "success",
        title: "Before you hand it in",
        text: "Go through every verb once, and only look for one thing: is there a thing it should be agreeing with, and did it agree? That single pass catches the error that costs the most marks.",
      },
    },
    {
      id: "s22",
      type: "example",
      title: "The model text — every construction labelled",
      items: [
        { hr: "U mom gradu se čuva okoliš.", en: "The environment is looked after in my town.", note: "1 · se-passive · okoliš = m sg subject → čuva" },
        { hr: "Kod nas se odvaja otpad, a boce se recikliraju.", en: "We sort our waste, and bottles are recycled.", note: "otpad → frozen (object); boce → PLURAL subject → recikliraju" },
        { hr: "Ulice se čiste svaki dan, jer je zaštita okoliša važna.", en: "The streets are cleaned every day, because protecting the environment is important.", note: "2 · plural se-passive + the jer-reason" },
        { hr: "Ovdje se ne smije bacati staklo u kantu za smeće.", en: "Glass must not be thrown in the rubbish bin here.", note: "3 · impersonal se, no subject at all" },
        { hr: "Kaže se da je recikliranje korisno, i ja mislim da je to istina.", en: "Recycling is said to be useful, and I think that's true.", note: "4 · the ownerless frame, then U19's owned one — the register pair in one sentence" },
        { hr: "Ali zagađenje je još uvijek veliki problem.", en: "But pollution is still a big problem.", note: "An ordinary sentence — not everything has to be a construction" },
        { hr: "Trebalo bi smanjiti plastiku i štedjeti struju.", en: "Plastic ought to be reduced and electricity saved.", note: "5 · trebalo bi + two infinitives, and no se" },
        { hr: "Budući da je planet naš, treba ga čuvati.", en: "Since the planet is ours, it should be looked after.", note: "6 · budući da + a clause, then treba + inf. ga is the clitic for planet." },
      ],
    },
    {
      id: "s23",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je grad u ___ se odvaja otpad.«",
      options: ["kojem", "koji", "kojeg"],
      correctIndex: 0,
      explanation: "kojem — masculine from grad, locative because u + LOC. Relative clauses are where these constructions live in real writing.",
      tts: "To je grad u kojem se odvaja otpad.",
    },
    {
      id: "s24",
      type: "mc",
      review: true,
      prompt: "Which of these will the writing rubric penalise hardest?",
      options: [
        "Ovdje se reciklira boce.",
        "Zabranjeno je bacati staklo.",
        "Trebam štedjeti energiju.",
      ],
      correctIndex: 0,
      explanation: "The first — a plural thing with a singular verb is the unit's core error. The second is correct Croatian from a later level and is only flagged as the wrong unit; the third is a fork mistake, marked but smaller.",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Four questions, asked in order. Stop at the first yes.**\n\n1. **Is there a thing?** → se-passive, **verb agrees**. *Boce se recikliraju.*\n2. **No thing at all?** → impersonal se, **frozen 3sg**, neuter in the past. *Ovdje se ne baca smeće.*\n3. **A claim with nobody behind it?** → *kaže se / smatra se / zna se* **da** + the **original tense**. *Kaže se da je to problem.*\n4. **Advice or a requirement?** → *treba* / *trebalo bi* + infinitive, **no `se`**. *Trebalo bi smanjiti otpad.*\n\n**The wall:** plural thing with a singular verb (the big one) · `se` opening a clause · two `se` in one clause · a `se` after `treba` · reaching for *zabranjeno je*, which is real Croatian and is B2.\n\n**Before you hand in the paragraph:** one pass through every verb, looking only for whether it agreed with something it should have.\n\nWords tonight: čuvati, zaštita, rješenje, promjena, uništiti, spasiti, zeleni, budući da.\n\nNext: a new container appears on the pavement, nobody knows what goes in it, and four people give four different answers.",
      vocabIds: [
        "b1u20.cuvati", "b1u20.zastita", "b1u20.rjesenje", "b1u20.promjena",
        "b1u20.unistiti", "b1u20.spasiti", "b1u20.zeleni", "b1u20.buducida",
      ],
    },
  ],
  srsCloze: [
    { front: "U mom gradu se ___ otpad. (odvajati)", answers: ["odvaja"], back: "odvaja — otpad is the object of an ownerless verb, so the verb freezes.", tts: "U mom gradu se odvaja otpad." },
    { front: "Ulice se ___ svaki dan. (čistiti)", answers: ["čiste", "ciste"], back: "čiste — ulice IS the subject here, and it is plural, so the verb agrees.", tts: "Ulice se čiste svaki dan." },
    { front: "Boce se ___ u taj spremnik. (bacati)", answers: ["bacaju"], back: "bacaju — plural subject, plural verb. The unit's whole point in one card.", tts: "Boce se bacaju u taj spremnik." },
    { front: "___ ___ čuvati okoliš. (the environment ought to be looked after)", answers: ["Trebalo bi", "trebalo bi"], back: "Trebalo bi — neuter, frozen, no se.", tts: "Trebalo bi čuvati okoliš." },
    { front: "«Zabranjeno je bacati staklo» → say it this unit's way: Ovdje se ne ___ bacati staklo.", answers: ["smije"], back: "ne smije — the participial passive is B2; the modal stack is this unit's route.", tts: "Ovdje se ne smije bacati staklo." },
    { front: "to look after / protect = ___", answers: ["čuvati", "cuvati"], back: "čuvati (čuvam) — Treba čuvati okoliš.", tts: "Treba čuvati okoliš." },
    { front: "protection (zaštita ___ ) — the standing collocation", answers: ["okoliša", "okolisa"], back: "zaštita okoliša — environmental protection.", tts: "Zaštita okoliša je važna." },
    { front: "solution = ___", answers: ["rješenje", "rjesenje"], back: "rješenje (n) — To nije rješenje.", tts: "To nije rješenje." },
    { front: "change (the noun) = ___", answers: ["promjena"], back: "promjena (f) — beside the verb promijeniti you already own.", tts: "Promjena je važna." },
    { front: "since / given that (two words, a fixed connector) = ___", answers: ["budući da", "buduci da"], back: "budući da — behaves like jer; an ordinary clause follows.", tts: "Budući da je planet naš, treba ga čuvati." },
    { front: "to destroy ‖ to save (from danger) = ___ ‖ ___", answers: ["uništiti, spasiti", "unistiti, spasiti"], back: "uništiti ‖ spasiti — and note that saving MONEY or energy is štedjeti, not spasiti.", tts: "Treba spasiti rijeku." },
  ],
  notes: {
    inOneSentence: {
      en: "Ask in order: is there a thing (verb agrees) · is there no thing (verb freezes) · is it a claim (kaže se da + original tense) · is it advice (treba + infinitive, no se) — and stop at the first yes.",
      exampleHr: "U mom gradu se odvaja otpad, boce se recikliraju, i trebalo bi smanjiti plastiku.",
    },
    deepDive: [
      {
        title: "The four-question sorter",
        body:
          "Everything in this unit is one of four shapes, and four questions asked in order will always tell you which. **Stop at the first yes.**\n\n**1 · Is there a THING the sentence is about?**\nThen it is a **se-passive**, the thing is the **subject**, and the **verb agrees with it**.\n*Ovdje se **recikliraju** boce.* · *Papir se **reciklira**.* · *Ulice se **čiste**.*\n\n**2 · Is there NO thing at all?**\nThen it is the **impersonal se**, nothing is the subject, and the verb **freezes in the 3rd person singular** — **neuter singular** in the past.\n*Ovdje se ne baca smeće.* · *Kako se živi u Hrvatskoj?* · *Prije se živjelo dobro.*\n\n**3 · Is it a claim somebody-or-other makes?**\nThen it is a **frame**: *kaže se / smatra se / zna se / misli se / vjeruje se* **+ da +** a clause **in its original tense**.\n*Kaže se da je zagađenje veliki problem.*\n\n**4 · Is it advice or a requirement?**\nThen it is ***treba*** or ***trebalo bi*** **+ an infinitive**, and there is **no `se`**.\n*Treba štedjeti energiju.* · *Trebalo bi smanjiti otpad.*\n\nThe hard part is only ever question 1 versus question 2, and there is a reliable test for it: **try deleting the noun.** If the sentence survives, the noun was never the subject and you are in case 2.\n\n*Ovdje se ne baca smeće* → *Ovdje se ne baca.* ✅ survives → case 2, frozen verb\n*Ovdje se recikliraju boce* → *Ovdje se recikliraju.* — leaves you asking «what?» → case 1, the verb agrees",
        diagram: {
          kind: "flow",
          steps: [
            { label: "1 · Ima li stvari?", emoji: "🎯", example: "→ se-pasiv, glagol se slaže" },
            { label: "2 · Nema stvari?", emoji: "🧊", example: "→ bezlični se, 3. l. jd." },
            { label: "3 · Netko to tvrdi?", emoji: "🗣️", example: "→ kaže se DA + izvorno vrijeme" },
            { label: "4 · Savjet?", emoji: "🕊️", example: "→ treba / trebalo bi + inf, BEZ se" },
          ],
        },
      },
      {
        title: "The wall of five traps",
        body:
          "**(a) The verb left singular when the thing is plural.** The unit's number-one error and the first thing the rubric checks. English gives you no warning, because *is recycled* never changes shape.\n~~*Ovdje se reciklira boce.*~~ → *Ovdje se **recikliraju** boce.*\n\n**(b) `se` opening a clause.** It is a clitic. §12 has forbidden this since Unit 12, and nothing here changed it.\n~~*Se reciklira plastika.*~~ → ***Plastika se** reciklira.*\n\n**(c) Two `se` in one clause.** One per clause, ever — including the invisible case, where the verb already owns a lexical one.\n~~*Ovdje se se slaže.*~~ → *Ovdje se **ljudi** slažu.*\nNote: one per **clause**, not per sentence. *Kaže se da se ovdje recikliraju boce* is two clauses and perfectly correct.\n\n**(d) A `se` after `treba`.** Three lessons trained the reflex and this construction has no slot for it.\n~~*Treba se štedjeti energiju.*~~ → *Treba štedjeti energiju.*\n\n**(e) Reaching for the participial passive.** *Zabranjeno je…*, *Zagađena je…*, *Otvoreno je…* This is **real, correct, everywhere Croatian** — and it is **B2**. It is the other way the language makes passives, and it is not this unit. Every time you want it, one of the four constructions covers you.",
        table: {
          caption: "When you want the B2 shape — what this unit says instead",
          headers: ["što želiš reći", "B2 (not yet)", "ova cjelina"],
          rows: [
            ["glass must not be thrown here", "Zabranjeno je bacati staklo.", "**Ne smije se** bacati staklo."],
            ["the shop is closed", "Trgovina je zatvorena.", "Trgovina **ne radi**."],
            ["the river is polluted", "Rijeka je zagađena.", "**Zagađenje** je problem. / Ljudi **zagađuju** rijeku."],
            ["waste is sorted here", "Otpad je odvojen.", "Otpad **se odvaja**."],
          ],
        },
      },
      {
        title: "The pre-writing checklist",
        body:
          "The task: **80–150 words on how the environment is looked after where you live.** The rubric checks five things. Build the paragraph out of six rows and all five land automatically.\n\n| red | što tu ide | model |\n|---|---|---|\n| 1 · gdje | where you live | *U mom gradu…* |\n| 2 · što se radi | **se-passive, plural subject** | *Boce se recikliraju.* |\n| 3 · što se ne smije | **impersonal se**, no subject | *Ovdje se ne smije bacati staklo.* |\n| 4 · što se kaže | **kaže se / smatra se / zna se da…** | *Kaže se da je recikliranje korisno.* |\n| 5 · što bi trebalo | **treba / trebalo bi + inf**, no se | *Trebalo bi smanjiti plastiku.* |\n| 6 · zašto | **jer / budući da** | *…jer je plastika štetna.* |\n\n**Row 2 is the one that carries the marks.** Make sure at least one se-passive has a **plural** subject, so the agreement is actually visible — *boce se recikliraju*, *ulice se čiste*, *papir i staklo se odvajaju*. A paragraph in which every verb happens to be singular proves nothing.\n\n**The final pass.** Read it once looking at nothing but the verbs. For each one: *is there a thing this should be agreeing with, and did it?* That single sweep catches the error that costs most.",
        diagram: {
          kind: "callout",
          tone: "success",
          title: "One sweep, one question",
          text: "Go through every verb once and ask only: is there a thing it should agree with, and did it agree? Everything else in the rubric is worth less than this.",
        },
      },
      {
        title: "The three `se`s, one last time",
        body:
          "A reference strip worth keeping. Every `se` you meet is one of three things, and the test is what happens when you take it away.\n\n**Lexical** — part of the verb, in the dictionary entry, never removable. Take it away and the verb means something else or nothing.\n*zvati **se***, *sjećati **se***, *nadati **se***, *sviđati **se***, *slagati **se***\n\n**Passive** — a doer was deleted and the thing became the subject. Take it away and you simply need to name who did it.\n*Plastika **se** reciklira.* → *Ljudi recikliraju plastiku.*\n\n**Impersonal** — there is no thing at all and the verb is frozen. Take it away and the sentence breaks.\n*Ovdje **se** ne baca smeće.* → ~~*Ovdje ne baca smeće.*~~\n\nAnd one construction in this unit has **no `se` at all**, which is exactly why it gets its own lesson: *treba* / *trebalo bi* + infinitive.",
        diagram: {
          kind: "train",
          wagons: [
            { label: "leksički", items: ["zovem se", "sjećam se", "slažem se"], note: "welded to the verb" },
            { label: "pasivni", items: ["reciklira se", "odvaja se", "čiste se"], note: "the doer was deleted" },
            { label: "bezlični", items: ["živi se", "ne baca se", "kaže se"], note: "no subject at all" },
            { label: "bez se", items: ["treba", "trebalo bi"], note: "impersonal on its own" },
          ],
        },
      },
    ],
    commonMistakes: [
      { wrong: "Ovdje se reciklira boce.", right: "Ovdje se **recikliraju** boce.", why: "Trap (a), the unit's biggest. A plural thing is a plural subject and takes a plural verb." },
      { wrong: "Se odvaja otpad u našem gradu.", right: "**U našem gradu se** odvaja otpad.", why: "Trap (b). `se` is a clitic and can never open a clause — §12, since Unit 12." },
      { wrong: "Ovdje se se slaže.", right: "Ovdje se **ljudi** slažu.", why: "Trap (c). One `se` per clause; slagati se already owns its one, so a real subject goes in." },
      { wrong: "Treba se čuvati okoliš.", right: "Treba **čuvati** okoliš.", why: "Trap (d). `treba` is impersonal on its own and has no slot for a `se`." },
      { wrong: "Zabranjeno je bacati staklo.", right: "**Ne smije se** bacati staklo.", why: "Trap (e). Correct Croatian, wrong level — the participial passive is B2. The modal stack is this unit's route to the same meaning." },
      { wrong: "Kaže se da je bilo → reported as present", right: "Kaže se da **je bilo** dobro.", why: "The tense inside a da-clause never moves. Croatian does not backshift, and Unit 21 is built on that fact." },
    ],
    memoryHooks: [
      "**Four questions, stop at the first yes.** Thing? → agree. No thing? → freeze. A claim? → kaže se da. Advice? → treba + inf, no se.",
      "**The delete test settles question 1 vs 2.** Take the noun out. If the sentence survives, it was never the subject.",
      "**One `se` per CLAUSE — not per sentence.** *Kaže se da se ovdje recikliraju boce* is entirely correct.",
      "**`treba` is the odd one out on purpose.** It is the only impersonal in the unit with no `se`, and that is why it got its own day.",
      "**When you want *zabranjeno je*, you want *ne smije se*.** Same meaning, one level earlier, and it is the one you can defend.",
      "**Before handing in: one pass, verbs only.** Did each one agree with the thing it should have? Nothing else in the rubric is worth as much.",
    ],
    connects: [
      { label: "The se-passive and the agreement rule", lessonId: "b1u20l1" },
      { label: "The impersonal se and the modal stack", lessonId: "b1u20l2" },
      { label: "kaže se / smatra se / zna se da…", lessonId: "b1u20l3" },
      { label: "treba vs trebam — the one without a se", lessonId: "b1u20l4" },
    ],
    selfCheck: [
      { q: "»Ulice se ___ svaki dan.« (čistiti) — and why?", a: "čiste. ulice IS the subject and it is plural, so the verb agrees. Question 1." },
      { q: "»U mom gradu se ___ otpad.« (odvajati) — and why is this different from the last one?", a: "odvaja. Here otpad is the object, not the subject — delete it and the sentence survives. Question 2, so the verb freezes." },
      { q: "Say «glass must not be thrown here» without using the participial passive.", a: "Ovdje se ne smije bacati staklo." },
      { q: "Is »Kaže se da se ovdje recikliraju boce« legal?", a: "Yes. One `se` per clause, and that is two clauses." },
      { q: "Name the five traps.", a: "(a) singular verb with a plural thing · (b) `se` opening a clause · (c) two `se` in one clause · (d) a `se` after treba · (e) reaching for the B2 participial passive." },
    ],
  },
};
