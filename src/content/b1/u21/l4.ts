import type { Lesson } from "@/types/content";

/**
 * B1 U21 L4 — Internet i mi (The da-clause verb network)
 * Spec: curriculum/B1/unit-21.md · grammar-reference §19 "Indirect speech"
 * + §12 clitic order + §6.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The lesson names a set the learner has been collecting since A2 without
 * knowing it was one — reći, misliti, znati, čuti, objasniti, smatrati,
 * tvrditi, vjerovati, sumnjati all take `da` + a clause — and then adds the
 * verbs that make real reporting possible.
 *
 * Two things vary across the network, and both are the lesson:
 *   • **predložiti takes `da` + the PRESENT**, exactly like L2's reported
 *     imperative, because a suggestion is a soft order. *Predložio je da
 *     DOĐEMO u pet*, never *da ćemo doći*. This is the trap inside the set.
 *   • **Some verbs take an INFINITIVE and never join at all** — odbiti (carded
 *     in L2 for exactly this reason), pristati na + ACC, moći, morati, htjeti.
 *     Naming the non-members is what stops the pattern over-generalizing, and
 *     it is the lesson's real value: a learner who generalizes `da` to
 *     everything produces \*odbio je da dođe, which is a real regional form and
 *     is not what this course teaches.
 *
 * `obećati` takes `da` + the FUTURE, because a promise is about later — and
 * *obećao je da dolazi* is grammatical but means something else.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and routed around: ekran (4, inside a previous unit's
 * rejection notice → zaslon), zaboraviti (1, same class), naći (1, same),
 * telefon (0 → mobitel), nitko (rejected by name in b1u19's test header),
 * spremna / spremljen as predicates (participial passive, B2 → «aplikacija
 * radi»). Deferred by unit: no deictic shift (L5), no Future II (U22), no -nje
 * (U23), no full clitic cluster (U23 — two maximum, `da` never counted as one),
 * no participial passive (B2), no comparatives (B2), no `ako` in any reported
 * clause, no `da li` anywhere.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U21 cut-outs exist.
 */
export const b1u21l4: Lesson = {
  id: "b1u21l4",
  unitId: "b1u21",
  title: "Internet i mi",
  titleEn: "The internet and us — the da-clause verb network",
  grammarTags: ["indirect-speech", "da-clause", "verb-network", "infinitive"],
  estMinutes: 20,
  vocab: [
    { id: "b1u21.obecati", hr: "obećati", en: "to promise (obećam) — obećati DA + the future, because a promise is about later", pos: "verb", icon: "🤝", exampleHr: "Obećao je da će doći.", exampleEn: "He promised he'd come." },
    { id: "b1u21.priznati", hr: "priznati", en: "to admit (priznam)", pos: "verb", icon: "🙇", exampleHr: "Priznala je da nije provjerila poruku.", exampleEn: "She admitted she hadn't checked the message." },
    { id: "b1u21.predloziti", hr: "predložiti", en: "to suggest (predložim) — predložiti DA + the PRESENT, like a command", pos: "verb", icon: "💡", exampleHr: "Predložio je da dođemo u pet.", exampleEn: "He suggested we come at five." },
    { id: "b1u21.spomenuti", hr: "spomenuti", en: "to mention (spomenem)", pos: "verb", icon: "☝️", exampleHr: "Spomenuo je da ima novi mobitel.", exampleEn: "He mentioned he had a new phone." },
    { id: "b1u21.primijetiti", hr: "primijetiti", en: "to notice (primijetim)", pos: "verb", icon: "👁️", exampleHr: "Primijetio sam da je zaslon prljav.", exampleEn: "I noticed the screen was dirty." },
    { id: "b1u21.obavijestiti", hr: "obavijestiti", en: "to inform / notify (obavijestim; obavijestiti nekoga da…)", pos: "verb", icon: "📣", exampleHr: "Obavijestili su me da aplikacija radi.", exampleEn: "They informed me the app was working." },
    { id: "b1u21.pristati", hr: "pristati", en: "to agree / consent (pristanem) — pristati NA + ACC, never a da-clause", pos: "verb", icon: "👌", exampleHr: "Pristao je na to.", exampleEn: "He agreed to it." },
    { id: "b1u21.ispricati", hr: "ispričati", en: "to recount / tell the whole of (ispričam) — for relaying a story, not one sentence", pos: "verb", icon: "📖", exampleHr: "Ispričala mi je što se dogodilo.", exampleEn: "She told me what happened." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Internet i mi",
      subtitle: "You have been collecting these verbs for two levels without knowing they were a set. Here is the set — and the two members that break it.",
      emoji: "🌐",
      items: [
        { emoji: "🕸️", label: "The network", hint: "nine verbs you already own" },
        { emoji: "💡", label: "predložiti", hint: "takes the PRESENT" },
        { emoji: "✋", label: "The refusers", hint: "odbiti, pristati — infinitive" },
        { emoji: "🤝", label: "New words", hint: "obećati, priznati, spomenuti…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · One shape, many verbs",
      subtitle: "«Rekao je da…» was never special. It is one member of a set you have been building since A2 — and today you get the rest of it.",
      emoji: "🕸️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "li vs ako, twice" },
        { emoji: "🃏", label: "New words", hint: "the reporting eight" },
        { emoji: "⚙️", label: "What follows?", hint: "da, present, or infinitive" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's big one, twice",
      items: [
        {
          prompt: "L3: »Imaš li vremena?« → Pitala me ___ ___ vremena.",
          options: ["imam li", "ako imam", "da li imam"],
          correctIndex: 0,
          explanation: "imam li — the verb first, li clipped onto it. `ako` is the conditional conjunction and cannot carry a question.",
        },
        {
          prompt: "L3: which one is wrong?",
          options: [
            "Pitao me ako je to istina.",
            "Pitao me je li to istina.",
            "Ako je to istina, javi mi.",
          ],
          correctIndex: 0,
          explanation: "The first. Option 3 is `ako` doing its real job — a condition — and is perfectly fine.",
        },
        {
          prompt: "L2: »Ne želim doći.« Kako kažeš da je odbio?",
          options: ["Odbio je doći.", "Odbio je da dođe.", "Odbio je neka dođe."],
          correctIndex: 0,
          explanation: "odbiti takes an infinitive. Hold on to that — today it turns out to be part of a bigger pattern.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The reporting eight",
      vocabIds: [
        "b1u21.obecati", "b1u21.priznati", "b1u21.predloziti", "b1u21.spomenuti",
        "b1u21.primijetiti", "b1u21.obavijestiti", "b1u21.pristati", "b1u21.ispricati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The set you already had 🕸️",
      body:
        "*Rekao je da…* was never a special construction. It is one member of a **network** you have been building since A2 — verbs that take **`da` + a complete clause**:\n\n**reći · misliti · znati · čuti · objasniti · smatrati · tvrditi · vjerovati · sumnjati**\n\nNine verbs, all carded, all behaving identically. Naming them as a set is most of today's work, because once you see the shape you can pour any of them into it.\n\nAnd here are the ones that make real reporting possible:\n\n- ***priznati*** *da…* — to admit. *Priznala je **da nije provjerila** poruku.*\n- ***spomenuti*** *da…* — to mention. *Spomenuo je **da ima** novi mobitel.*\n- ***primijetiti*** *da…* — to notice. *Primijetio sam **da je** zaslon prljav.*\n- ***obavijestiti*** *nekoga* **da**… — to inform. *Obavijestili su me **da aplikacija radi**.*\n- ***upozoriti*** *nekoga* **da**… — to warn (you carded this in L2).\n\n**And one that is fussy about tense.** *obećati* takes **`da` + the FUTURE**, because a promise is about later:\n\n*Obećao je **da će doći**.* ✅ — he promised he'd come\n*Obećao je da dolazi.* — grammatical, but it means he promised that he *is* coming, right now, which is a different claim.\n\n**The clitic rule, one last time:** inside a `da`-clause, **`da` is slot one**, so the clitic lands immediately after it — *Obećao je da **će** doći*, *Priznao je da **ga** nije vidio*.",
      table: {
        caption: "The network — what each verb takes",
        headers: ["glagol", "što slijedi", "primjer"],
        rows: [
          ["reći / misliti / znati / čuti", "**da** + any tense", "Rekao je da dolazi."],
          ["objasniti / smatrati / tvrditi", "**da** + any tense", "Objasnio je da ne radi."],
          ["priznati / spomenuti / primijetiti", "**da** + any tense", "Priznala je da nije provjerila."],
          ["obavijestiti / upozoriti", "**nekoga** + **da**…", "Obavijestili su me da aplikacija radi."],
          ["**obećati**", "**da** + the FUTURE", "Obećao je da će doći."],
        ],
      },
      ttsChips: ["Obećao je da će doći.", "Priznala je da nije provjerila poruku.", "Spomenuo je da ima novi mobitel."],
    },
    {
      id: "s06",
      type: "teach",
      title: "Two ways to break the pattern 💡✋",
      body:
        "### 1 · **predložiti** takes the PRESENT\n\nA suggestion is a soft order, so it behaves like L2's reported imperative — **`da` + the present**, matched to whoever would be doing the thing:\n\n*Predložio je **da dođemo** u pet.* ✅ — he suggested we come at five\n~~*Predložio je da ćemo doći u pet.*~~ ❌\n\nThat second one is not a suggestion at all; it is a claim about what we are going to do. This is the trap inside the set, and it is worth remembering by its logic rather than as a fact: **anything that tells somebody to do something takes the present.**\n\n### 2 · Some verbs never take `da` at all\n\nThese take an **infinitive**, and putting a `da`-clause after them is exactly the over-generalization this lesson exists to prevent:\n\n| glagol | što slijedi | primjer |\n|---|---|---|\n| **odbiti** | infinitive | *Odbio je **doći**.* |\n| **pristati** | **na** + ACC | *Pristao je **na to**.* |\n| moći · morati · htjeti | infinitive | *Mora **doći**.* |\n| znati (= know how) | infinitive | *Zna **govoriti** hrvatski.* |\n\n~~*Odbio je da dođe.*~~ ❌ — real Croatian in some regions, not what this course produces.\n~~*Pristao je da to.*~~ ❌ → *Pristao je **na to**.* ✅\n\n### 3 · And one that takes a whole story\n\n*ispričati* does not take a `da`-clause either — it takes **what happened**:\n\n*Ispričala mi je **što se dogodilo**.* — She told me what happened.\n\nUse *reći da…* for one sentence, *ispričati* for the whole thing.",
      diagram: {
        kind: "usage-map",
        caseId: "NOM",
        boxes: [
          {
            label: "da + ANY tense — the big group",
            examples: [
              { hr: "Rekao je da dolazi.", en: "He said he was coming." },
              { hr: "Priznala je da nije provjerila.", en: "She admitted she hadn't checked." },
            ],
          },
          {
            label: "da + the PRESENT — suggestions & orders",
            examples: [
              { hr: "Predložio je da dođemo u pet.", en: "He suggested we come at five." },
              { hr: "Rekla mi je da dođem.", en: "She told me to come." },
            ],
          },
          {
            label: "an INFINITIVE — never da",
            examples: [
              { hr: "Odbio je doći.", en: "He refused to come." },
              { hr: "Pristao je na to.", en: "He agreed to it." },
            ],
          },
        ],
      },
    },
    {
      id: "s07",
      type: "example",
      title: "The network at work",
      items: [
        { hr: "Obećao je da će doći.", en: "He promised he'd come.", note: "obećati + da + FUTURE. A promise is about later." },
        { hr: "Priznala je da nije provjerila poruku.", en: "She admitted she hadn't checked the message.", note: "The negation and the tense both stay exactly as she said them." },
        { hr: "Predložio je da dođemo u pet.", en: "He suggested we come at five.", note: "predložiti + da + PRESENT. Not «da ćemo doći»." },
        { hr: "Spomenuo je da ima novi mobitel.", en: "He mentioned he had a new phone.", note: "Present in his mouth, present in the report." },
        { hr: "Obavijestili su me da aplikacija radi.", en: "They informed me the app was working.", note: "obavijestiti takes an object (me) and then da." },
        { hr: "Primijetio sam da je zaslon prljav.", en: "I noticed the screen was dirty.", note: "`je` sits second in the da-clause, right after da." },
        { hr: "Odbio je doći.", en: "He refused to come.", note: "Infinitive. Never «da dođe»." },
        { hr: "Ispričala mi je što se dogodilo.", en: "She told me what happened.", note: "ispričati takes the whole story, not a da-clause." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · What follows the verb?",
      subtitle: "One question per sentence: does this verb want a clause, a present, or an infinitive? The verb decides, not you.",
      emoji: "🔀",
      items: [
        { emoji: "✅", label: "Quick check", hint: "four verbs, four demands" },
        { emoji: "🔤", label: "Build them", hint: "report with five verbs" },
        { emoji: "🔊", label: "Listen", hint: "promises and suggestions" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: what does this verb want?",
      items: [
        {
          prompt: "»Predložio je da ___ u pet.« (he suggested we come)",
          options: ["dođemo", "ćemo doći", "dolazimo"],
          correctIndex: 0,
          explanation: "predložiti takes da + the PRESENT, like a command — a suggestion is a soft order. «da ćemo doći» would be a claim about our plans.",
        },
        {
          prompt: "»Obećao je da ___ ___ .« (he promised he'd come)",
          options: ["će doći", "dolazi", "je došao"],
          correctIndex: 0,
          explanation: "obećati takes da + the FUTURE. A promise is about later, so «da dolazi» would claim something different.",
        },
        {
          prompt: "»Odbio je ___ .« (he refused to come)",
          options: ["doći", "da dođe", "da će doći"],
          correctIndex: 0,
          explanation: "odbiti takes an infinitive and never joins the da-network. Option 2 is real in some regions and isn't what this course produces.",
        },
        {
          prompt: "»Pristao je ___ ___ .« (he agreed to it)",
          options: ["na to", "da to", "to"],
          correctIndex: 0,
          explanation: "pristati na + ACC. No clause at all — it is the counterpart to odbiti and behaves the same way: outside the network.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each verb to what has to follow it",
      pairs: [
        { a: "obećati", b: "da + the FUTURE" },
        { a: "predložiti", b: "da + the PRESENT" },
        { a: "priznati", b: "da + whatever tense they used" },
        { a: "odbiti", b: "an infinitive, never da" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Obećao je ___ ___ doći.",
      blanks: [["da"], ["će"]],
      translation: "He promised he'd come.",
      explanation: "da + the future. And `će` lands in second position of the da-clause, counting da as slot one.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Predložila je da ___ u pet. (doći, mi)",
      blanks: [["dođemo"]],
      translation: "She suggested we come at five.",
      wordBank: ["dođemo", "ćemo doći", "dolazimo"],
      explanation: "The present — predložiti behaves like a relayed command, and a suggestion is a soft order.",
    },
    {
      id: "s13",
      type: "fill",
      text: "___ je da nije provjerila poruku. (priznati, ona)",
      blanks: [["Priznala"]],
      translation: "She admitted she hadn't checked the message.",
      explanation: "Priznala — and everything inside the da-clause is exactly what she said, negation and tense included.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Report it with obećati: Marko kaže »Doći ću u pet.« → ",
      answers: [
        "Obećao je da će doći u pet.",
        "Obećao je da će doći u pet",
        "Marko je obećao da će doći u pet.",
      ],
      hint: "obećati wants a future inside the da-clause.",
      explanation: "Obećao je da će doći u pet. His future stays a future — and with obećati it has to be one anyway.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Report it with predložiti: Ana kaže »Dođimo u pet.« → ",
      answers: [
        "Predložila je da dođemo u pet.",
        "Predložila je da dođemo u pet",
        "Ana je predložila da dođemo u pet.",
      ],
      hint: "A suggestion is a soft order — so the present, matched to us.",
      explanation: "Predložila je da dođemo u pet. Not «da ćemo doći» — that would report a plan rather than a suggestion.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Obećao je da će doći u pet.",
      answers: ["Obećao je da će doći u pet.", "Obećao je da će doći u pet"],
      allowSlow: true,
      explanation: "da + future, with će second in the da-clause.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Predložila je da dođemo u pet.",
      answers: ["Predložila je da dođemo u pet.", "Predložila je da dođemo u pet"],
      allowSlow: true,
      explanation: "da + present. Compare it with the item before — same time, two different constructions.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Priznala je da nije provjerila poruku.",
      targetEn: "She admitted she hadn't checked the message.",
      phonetic: "PREEZ-na-la ye da NEE-ye pro-VYE-ree-la PO-roo-koo",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "L1 review: Marko said »Nisam obrisao poruku.« How do you report it with priznati?",
      options: [
        "Priznao je da nije obrisao poruku.",
        "Priznao je da nije bio obrisao poruku.",
        "Priznao je da neće obrisati poruku.",
      ],
      correctIndex: 0,
      explanation: "The tense and the negation both stay exactly as he said them. Every verb in the network inherits L1's rule — none of them moves a tense.",
      tts: "Priznao je da nije obrisao poruku.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "L3 review: how do you report »Jesi li spremio podatke?« with the verb pitati?",
      options: [
        "Pitao me jesam li spremio podatke.",
        "Pitao me ako sam spremio podatke.",
        "Pitao me da sam spremio podatke.",
      ],
      correctIndex: 0,
      explanation: "`li` on the auxiliary, person moved from jesi to jesam. `pitati` never takes `da` for a yes/no question, and `ako` cannot carry a question at all.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The network was already yours.** *reći · misliti · znati · čuti · objasniti · smatrati · tvrditi · vjerovati · sumnjati* all take **`da` + a clause**, and today's new verbs join them: *priznati*, *spomenuti*, *primijetiti*, *obavijestiti nekoga da*, *upozoriti nekoga da*.\n\n**Two members break the pattern, and that is the lesson:**\n\n- **`predložiti` takes `da` + the PRESENT** — a suggestion is a soft order. *Predložio je da **dođemo** u pet.* Not *da ćemo doći*.\n- **`obećati` takes `da` + the FUTURE** — a promise is about later. *Obećao je da **će doći**.*\n\n**And some verbs never join at all.** They take an **infinitive**, and generalizing `da` to them is the error this lesson exists to prevent:\n\n*Odbio je **doći**.* ✅ ~~*Odbio je da dođe.*~~ ❌\n*Pristao je **na to**.* ✅ ~~*Pristao je da to.*~~ ❌\n\nSame for *moći*, *morati*, *htjeti*. And *ispričati* takes a whole story rather than a clause: *Ispričala mi je **što se dogodilo**.*\n\n**Underneath all of it, nothing has changed:** `da` is slot one for the clitic, and no tense ever moves.\n\nTomorrow: all three sentence types in one place, the one thing that *does* move, and a conversation to write up.",
      vocabIds: [
        "b1u21.obecati", "b1u21.priznati", "b1u21.predloziti", "b1u21.spomenuti",
        "b1u21.primijetiti", "b1u21.obavijestiti", "b1u21.pristati", "b1u21.ispricati",
      ],
    },
  ],
  srsCloze: [
    { front: "Obećao je ___ ___ doći. (he promised he'd come)", answers: ["da će"], back: "da će — obećati takes da + the FUTURE, because a promise is about later.", tts: "Obećao je da će doći." },
    { front: "Predložio je da ___ u pet. (doći, mi)", answers: ["dođemo"], back: "dođemo — predložiti takes da + the PRESENT. A suggestion is a soft order.", tts: "Predložio je da dođemo u pet." },
    { front: "Odbio je ___ . (to come)", answers: ["doći"], back: "doći — an INFINITIVE. odbiti never joins the da-network.", tts: "Odbio je doći." },
    { front: "Pristao je ___ ___ . (he agreed to it)", answers: ["na to"], back: "na to — pristati takes na + ACC, never a clause.", tts: "Pristao je na to." },
    { front: "to admit = ___", answers: ["priznati"], back: "priznati (priznam) — Priznala je da nije provjerila poruku.", tts: "Priznala je da nije provjerila poruku." },
    { front: "to mention = ___", answers: ["spomenuti"], back: "spomenuti (spomenem) — Spomenuo je da ima novi mobitel.", tts: "Spomenuo je da ima novi mobitel." },
    { front: "to notice = ___", answers: ["primijetiti"], back: "primijetiti (primijetim) — Primijetio sam da je zaslon prljav.", tts: "Primijetio sam da je zaslon prljav." },
    { front: "to inform / notify someone = ___", answers: ["obavijestiti"], back: "obavijestiti (obavijestim) — obavijestiti nekoga DA…", tts: "Obavijestili su me da aplikacija radi." },
    { front: "to recount the whole story = ___", answers: ["ispričati"], back: "ispričati (ispričam) — takes what happened, not a da-clause.", tts: "Ispričala mi je što se dogodilo." },
    { front: "to suggest = ___ , and it takes da + the ___", answers: ["predložiti, present", "predložiti prezent", "predloziti, present"], back: "predložiti + da + the PRESENT — a suggestion behaves like a command.", tts: "Predložio je da dođemo u pet." },
  ],
  notes: {
    inOneSentence: {
      en: "Nine verbs you already own take DA + a clause, and today's new ones join them — except predložiti, which takes the present; obećati, which takes the future; and odbiti / pristati, which take an infinitive and never join at all.",
      exampleHr: "Obećao je da će doći, ali je predložio da dođemo u pet.",
    },
    deepDive: [
      {
        title: "The set you had without knowing it",
        body:
          "*Rekao je da…* is not a special construction. It is one member of a network you have been assembling since A2:\n\n**reći · misliti · znati · čuti · objasniti · smatrati · tvrditi · vjerovati · sumnjati**\n\nAll nine take **`da` + a complete clause**, all nine behave identically, and once you see the shape you can pour any verb of saying or thinking into it. Today's additions slot straight in:\n\n| glagol | primjer |\n|---|---|\n| **priznati** | *Priznala je **da nije provjerila** poruku.* |\n| **spomenuti** | *Spomenuo je **da ima** novi mobitel.* |\n| **primijetiti** | *Primijetio sam **da je** zaslon prljav.* |\n| **obavijestiti** *nekoga* | *Obavijestili su me **da aplikacija radi**.* |\n| **upozoriti** *nekoga* | *Upozorila me **da je** lozinka stara.* |\n\nNote that *obavijestiti* and *upozoriti* take an **object first** — you inform *somebody* that something — and then the `da`-clause.\n\n**Nothing about the clause itself has changed.** `da` is still obligatory, the clitic still takes second position of the `da`-clause with `da` counting as slot one, and the tense inside is still whatever the speaker used:\n\n*Obećao je da **će** doći.* · *Priznao je da **ga** nije vidio.* · *Primijetio sam da **je** zaslon prljav.*",
      },
      {
        title: "The two that are fussy about tense",
        body:
          "**`obećati` wants the FUTURE**, because a promise is about what will happen:\n\n*Obećao je **da će doći**.* — he promised he'd come\n*Obećao je da dolazi.* — grammatical, but it reports him promising that he *is* coming, right now. A different claim.\n\n**`predložiti` wants the PRESENT**, because a suggestion is a soft order — and L2 already taught you that anything telling somebody to do something takes the present:\n\n*Predložio je **da dođemo** u pet.* ✅ — he suggested we come at five\n\\*~~Predložio je da ćemo doći u pet.~~ ❌ — this reports a plan, not a suggestion\n\nThat parallel is the way to remember it. Look at what the sentence is *doing*, not at the verb:\n\n| što rečenica radi | vrijeme u da-rečenici |\n|---|---|\n| reports a statement | whatever tense they used |\n| **tells somebody to do something** | **the present** (rekla mi je da dođem · predložio je da dođemo) |\n| **promises something** | **the future** (obećao je da će doći) |\n\nSo *predložiti* is not really an exception at all — it is L2's rule, arriving in a new lesson.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Don't memorize the verb — read the sentence",
          text: "Anything that tells somebody to do something takes the present: rekla mi je da dođem, predložio je da dođemo, molila me da provjerim. Anything that promises takes the future. Everything else keeps the speaker's own tense.",
        },
      },
      {
        title: "The verbs that never join — and why they matter most",
        body:
          "A learner who meets a pattern without ever meeting an exception will apply it to everything. So the most valuable part of this lesson is the list of verbs that **do not take `da` at all**:\n\n| glagol | što slijedi | primjer |\n|---|---|---|\n| **odbiti** | infinitiv | *Odbio je **doći**.* |\n| **pristati** | **na** + ACC | *Pristao je **na to**.* |\n| **moći** | infinitiv | *Ne može **doći**.* |\n| **morati** | infinitiv | *Mora **doći**.* |\n| **htjeti** | infinitiv | *Hoće **doći**.* |\n| **znati** (= know how) | infinitiv | *Zna **govoriti** hrvatski.* |\n\n\\*~~Odbio je da dođe.~~ ❌ — you will hear this, especially further east. It is a real form in a real variety of the language, and it is not what this course produces.\n\\*~~Pristao je da to.~~ ❌ → *Pristao je **na to**.* ✅\n\n`odbiti` was carded a lesson early, in L2, for exactly this reason: so that you would meet one non-member **before** meeting the network, rather than after.\n\n**And one verb takes a whole story.** *ispričati* does not want a `da`-clause; it wants what happened:\n\n*Ispričala mi je **što se dogodilo**.* — She told me what happened.\n*Ispričao je **cijeli razgovor**.* — He recounted the whole conversation.\n\nRule of thumb: **`reći da…` for one sentence, `ispričati` for the whole thing.**",
        table: {
          caption: "Members and non-members",
          headers: ["u mreži (da + rečenica)", "izvan mreže (infinitiv / na + ACC)"],
          rows: [
            ["reći, misliti, znati, čuti", "odbiti + inf"],
            ["objasniti, smatrati, tvrditi", "pristati **na** + ACC"],
            ["priznati, spomenuti, primijetiti", "moći, morati, htjeti + inf"],
            ["obavijestiti / upozoriti *nekoga* da", "ispričati + **što se dogodilo**"],
            ["obećati (da + futur) · predložiti (da + prezent)", "znati = «know how» + inf"],
          ],
        },
      },
    ],
    commonMistakes: [
      { wrong: "Predložio je da ćemo doći u pet.", right: "Predložio je da **dođemo** u pet.", why: "A suggestion is a soft order, so it takes the present — exactly like L2's relayed command. The future version reports a plan instead." },
      { wrong: "Odbio je da dođe.", right: "Odbio je **doći**.", why: "odbiti takes an infinitive and never joins the da-network. The da-form is real in some regions and is not what this course teaches." },
      { wrong: "Pristao je da to.", right: "Pristao je **na to**.", why: "pristati takes na + accusative — no clause at all." },
      { wrong: "Obećao je da dolazi.", right: "Obećao je **da će doći**.", why: "Grammatical, but it reports him promising that he is coming right now. obećati is about later, so it takes the future." },
      { wrong: "Obavijestili su me da je aplikacija spremna.", right: "Obavijestili su me da **aplikacija radi**.", why: "*spremna* here is a participial passive — correct Croatian, and B2. This unit's route is an ordinary verb." },
      { wrong: "Ispričala mi je da se dogodilo.", right: "Ispričala mi je **što** se dogodilo.", why: "ispričati takes the whole story, not a da-clause. Use reći da… for a single sentence." },
    ],
    memoryHooks: [
      "**Read what the sentence is doing, not which verb it uses.** Telling somebody to act → present. Promising → future. Everything else → the speaker's own tense.",
      "**The network was already yours.** Nine verbs since A2, all with the same shape. Today just adds members and names it.",
      "**Two verbs walk out of the room: odbiti and pristati.** Infinitive and *na* + ACC. Learn them beside the members, not after them.",
      "**«Odbio je da dođe» is real Croatian and not your Croatian.** You'll hear it. Recognize it, don't write it.",
      "**reći da… for one sentence, ispričati for the whole story.**",
    ],
    connects: [
      { label: "Reported statements — where da-clauses started", lessonId: "b1u21l1" },
      { label: "Reported commands — where the present rule comes from", lessonId: "b1u21l2" },
      { label: "Opinion frames — the same network, a unit early", lessonId: "b1u19l1" },
      { label: "Next: all three types, and the one thing that moves", lessonId: "b1u21l5" },
    ],
    selfCheck: [
      { q: "»Predložio je da ___ u pet.« (we come)", a: "dođemo — predložiti takes the present, because a suggestion is a soft order." },
      { q: "Why does obećati take the future?", a: "A promise is about later. «Obećao je da dolazi» would report him promising that he's coming right now." },
      { q: "How do you say «He refused to come»?", a: "Odbio je doći — an infinitive. odbiti never takes a da-clause in this course." },
      { q: "What follows pristati?", a: "na + accusative: «Pristao je na to.» No clause at all." },
      { q: "When do you use ispričati rather than reći da…?", a: "When you're relaying a whole story rather than a single sentence: «Ispričala mi je što se dogodilo.»" },
    ],
  },
};
