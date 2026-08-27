import type { Lesson } from "@/types/content";

/**
 * B1 U20 L3 — Problemi planeta (Kaže se / smatra se / zna se da…)
 * Spec: curriculum/B1/unit-20.md · grammar-reference §18 "The se-constructions"
 * + §12 clitic order (clitics inside a da-clause) + §17 (the da-frame, U19).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * L2's frozen 3sg applied to verbs of SAYING and THINKING, which produces the
 * one honest way to report a claim you are not vouching for. The lesson must
 * not present this as new machinery — it is L2's construction with a different
 * verb in it — only as a new use.
 *
 * Four installs: (1) the frame `3sg + se + da + an ordinary clause`, (2) `da` is
 * obligatory and the clitic goes into second position OF THE DA-CLAUSE with
 * `da` counting as slot one (U19's rule, unchanged), (3) **the tense inside the
 * da-clause does not move** — planted here deliberately, at zero cost, because
 * it is the single most important fact in Unit 21, and (4) the register pair:
 * U19's *Mislim da…* puts your name on it, *Smatra se da…* takes it off.
 *
 * `kaže` is legal here because b1u17 L3 established it receptively by name
 * ("everyday «I say» is kažem, from kazati — you'll meet it constantly;
 * recognize it"). That is exactly what this frame cashes in.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and routed around: trajati (0 — «plastic lasts a long
 * time» was rebuilt as «plastika je štetna»), rasti (0 — the unit makes no
 * claim about levels going up, because «sve više» is a comparative and B2),
 * drugačije / drukčije (0), čišće (comparative, B2), dio (0), nitko (rejected
 * by name in b1u19's test header), također (0). Deferred by unit: NO reported
 * speech with a named speaker — *Rekao je da…* is U21 L1 and does not appear
 * here at all; no treba + inf (L4); no participial passive (B2); no
 * comparatives or superlatives; no -nje as a productive formation (zagađenje
 * and recikliranje are carded plain nouns, exactly as U19 carded mišljenje).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U20 cut-outs exist.
 */
export const b1u20l3: Lesson = {
  id: "b1u20l3",
  unitId: "b1u20",
  title: "Problemi planeta",
  titleEn: "The planet's problems — kaže se / smatra se / zna se da…",
  grammarTags: ["impersonal-se", "da-clause", "clitics", "environment"],
  estMinutes: 20,
  vocab: [
    { id: "b1u20.planet", hr: "planet", en: "planet (m; GEN planeta)", pos: "noun", gender: "m", icon: "🌎", exampleHr: "Planet ima problem.", exampleEn: "The planet has a problem." },
    { id: "b1u20.klima", hr: "klima", en: "climate (f)", pos: "noun", gender: "f", icon: "🌡️", exampleHr: "Klima se mijenja.", exampleEn: "The climate is changing." },
    { id: "b1u20.zagadenje", hr: "zagađenje", en: "pollution (n)", pos: "noun", gender: "n", icon: "🏭", exampleHr: "Zagađenje je veliki problem.", exampleEn: "Pollution is a big problem." },
    { id: "b1u20.zagadivati", hr: "zagađivati", en: "to pollute (impf zagađujem · pf zagaditi, zagadim)", pos: "verb", icon: "🛢️", exampleHr: "Ne smije se zagađivati rijeka.", exampleEn: "The river must not be polluted." },
    { id: "b1u20.posljedica", hr: "posljedica", en: "consequence (f)", pos: "noun", gender: "f", icon: "🁣", exampleHr: "To ima posljedice.", exampleEn: "That has consequences." },
    { id: "b1u20.utjecaj", hr: "utjecaj", en: "influence / impact (m; GEN utjecaja) — imati utjecaj na + ACC", pos: "noun", gender: "m", icon: "⚖️", exampleHr: "To ima utjecaj na okoliš.", exampleEn: "That has an impact on the environment." },
    { id: "b1u20.opasan", hr: "opasan", en: "dangerous (opasna, opasno; definite opasni)", pos: "adj", icon: "⚠️", exampleHr: "To je opasno za životinje.", exampleEn: "That's dangerous for animals." },
    { id: "b1u20.stetan", hr: "štetan", en: "harmful (štetna, štetno) — the exact opposite of koristan", pos: "adj", icon: "☠️", exampleHr: "Plastika je štetna.", exampleEn: "Plastic is harmful." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Problemi planeta",
      subtitle: "There is a way to say something out loud without being the one who said it. Croatian builds it out of yesterday's frozen verb and Unit 19's «da».",
      emoji: "🌎",
      items: [
        { emoji: "🗣️", label: "Kaže se da…", hint: "apparently, without a source" },
        { emoji: "🔗", label: "da is obligatory", hint: "U19's rule, still running" },
        { emoji: "⏸️", label: "The tense stays", hint: "Croatian never backshifts" },
        { emoji: "🏭", label: "New words", hint: "klima, zagađenje, posljedica…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Saying it without signing it",
      subtitle: "«Mislim da…» puts your name on the claim. Take the name off and you get the register that news, science and every opinion in a café are written in.",
      emoji: "🗣️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "the freeze, and U19's da" },
        { emoji: "🃏", label: "New words", hint: "the planet eight" },
        { emoji: "⚙️", label: "The frame", hint: "3sg + se + da + a clause" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: two rules you already have",
      items: [
        {
          prompt: "L2: »U Hrvatskoj se puno ___ .« (people walk a lot)",
          options: ["hoda", "hodaju", "hodalo"],
          correctIndex: 0,
          explanation: "No subject → frozen 3sg. Today's whole lesson is this same freeze, with a verb of saying inside it.",
        },
        {
          prompt: "U19: »Mislim ___ je to istina.« (I think that's true)",
          options: ["da", "što", "koji"],
          correctIndex: 0,
          explanation: "da — never optional in Croatian. Today's frames need it just as badly.",
        },
        {
          prompt: "U19 clitics: which is right?",
          options: [
            "Mislim da je to problem.",
            "Mislim da to je problem.",
          ],
          correctIndex: 0,
          explanation: "The clitic goes into second position OF THE DA-CLAUSE, and `da` itself counts as slot one. That rule is about to run again, unchanged.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The planet eight",
      vocabIds: [
        "b1u20.planet", "b1u20.klima", "b1u20.zagadenje", "b1u20.zagadivati",
        "b1u20.posljedica", "b1u20.utjecaj", "b1u20.opasan", "b1u20.stetan",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Kaže **se** da… 🗣️",
      body:
        "Take yesterday's frozen verb. Put a verb of **saying** or **thinking** in it. You get the construction for reporting a claim without owning it:\n\n*Kaže **se da** je zagađenje veliki problem.* — Pollution is said to be a big problem. / Apparently pollution is a big problem.\n*Smatra **se da** recikliranje pomaže.* — Recycling is held to help.\n*Zna **se da** je plastika štetna.* — It's known that plastic is harmful.\n\nNothing here is new machinery. It is **exactly** L2's construction — frozen 3sg, `se` in second position, nobody named — with a different verb inside it. What is new is only what you can do with it.\n\n**The frame, in three parts:**\n\n> **frozen 3sg verb + `se`** + **`da`** + **an ordinary, complete clause**\n\nAnd `da` is **obligatory**, exactly as it was in Unit 19. English lets you drop *that*; Croatian never has:\n\n*Kaže se **da** je to problem.* ✅  ~~*Kaže se je to problem.*~~ ❌\n\nThe clitic inside the da-clause goes into **second position of that clause**, with `da` counting as slot one — again, U19's rule, unchanged:\n\n*Kaže se da **je** to problem.* ✅  ~~*Kaže se da to je problem.*~~ ❌\n\n⚠️ These frames are **frozen**. There is no *kažu se*, no *smatraju se* — nothing here can go plural, because there is nobody to be plural.",
      table: {
        caption: "Five frames, weakest to strongest",
        headers: ["okvir", "how strongly it lands", "primjer"],
        rows: [
          ["**Misli se da…**", "people think — soft, unattributed", "Misli se da je klima problem."],
          ["**Kaže se da…**", "it's said — hearsay, no source", "Kaže se da je zagađenje veliki problem."],
          ["**Vjeruje se da…**", "it's believed — a shared belief", "Vjeruje se da ljudi mogu promijeniti okoliš."],
          ["**Smatra se da…**", "it's held — considered, weighed", "Smatra se da recikliranje pomaže."],
          ["**Zna se da…**", "it's known — presented as fact", "Zna se da je plastika štetna."],
        ],
      },
    },
    {
      id: "s06",
      type: "teach",
      title: "The tense inside does not move ⏸️",
      body:
        "This is small, it costs you nothing today, and it is the most important thing in this lesson for what comes later.\n\nEnglish moves a tense back when it reports something. *«It was good»* → *they said it **had been** good.* You do it so automatically that you have never noticed it.\n\n**Croatian moves nothing.** Whatever tense the claim was made in, that is the tense inside the `da`-clause — permanently:\n\n*Kaže se da **je** to problem.* — the claim is present, the clause is present\n*Kaže se da **je bilo** dobro.* — the claim is past, the clause is past\n\nSo the clause inside `da` is always a normal Croatian sentence that would stand perfectly well on its own. Take *Kaže se da je bilo dobro*, delete the frame, and *Bilo je dobro* is untouched.\n\n**Why it matters now:** in Unit 21 you will learn to report what a named person said — *Rekla je da dolazi* — and the single biggest error English speakers make there is backshifting the tense. You are meeting the rule here, in a construction where there is nothing else to think about, so that it is already a habit when it counts.\n\n⚠️ **Not this unit:** *Rekao je da…* — a **named** speaker — is Unit 21 and has its own rules. Everything here is deliberately ownerless.",
      diagram: {
        kind: "usage-map",
        caseId: "NOM",
        boxes: [
          {
            label: "I am on the hook (U19)",
            examples: [
              { hr: "Mislim da je to problem.", en: "I think it's a problem." },
              { hr: "Smatram da recikliranje pomaže.", en: "I hold that recycling helps." },
            ],
          },
          {
            label: "Everybody and nobody is on the hook (today)",
            examples: [
              { hr: "Kaže se da je to problem.", en: "It's said to be a problem." },
              { hr: "Smatra se da recikliranje pomaže.", en: "Recycling is held to help." },
            ],
          },
          {
            label: "Nobody is on the hook — it's simply true",
            examples: [
              { hr: "Zna se da je plastika štetna.", en: "It's known that plastic is harmful." },
            ],
          },
        ],
      },
      ttsChips: ["Kaže se da je to problem.", "Kaže se da je bilo dobro.", "Zna se da je plastika štetna."],
    },
    {
      id: "s07",
      type: "example",
      title: "Claims with nobody behind them",
      items: [
        { hr: "Kaže se da je zagađenje veliki problem.", en: "Pollution is said to be a big problem.", note: "Frozen kaže + se + da + a normal present clause." },
        { hr: "Smatra se da recikliranje pomaže.", en: "Recycling is held to help.", note: "No clitic needed in the da-clause here — pomaže is a full verb." },
        { hr: "Zna se da je plastika štetna.", en: "It's known that plastic is harmful.", note: "`je` sits second in the da-clause, right after da." },
        { hr: "Misli se da klima ima utjecaj na sve.", en: "The climate is thought to affect everything.", note: "utjecaj na + ACC." },
        { hr: "Vjeruje se da ljudi mogu promijeniti okoliš.", en: "It's believed people can change the environment.", note: "The da-clause has its own subject — ljudi — and that's fine. The freeze is outside it." },
        { hr: "Kaže se da je prije bilo dobro.", en: "They say it used to be good.", note: "Past claim → past clause. Nothing moves." },
        { hr: "Zna se da otpad ima posljedice.", en: "It's known that waste has consequences.", note: "posljedice — accusative plural." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Build the frame",
      subtitle: "Frozen verb, then da, then an ordinary clause that keeps its own tense. Three moving parts, and only one of them can go wrong.",
      emoji: "🧩",
      items: [
        { emoji: "✅", label: "Quick check", hint: "da, clitic, frozen verb" },
        { emoji: "🙋", label: "Take the name off", hint: "Mislim da → Kaže se da" },
        { emoji: "🔊", label: "Listen", hint: "claims with nobody behind them" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: build the frame",
      items: [
        {
          prompt: "»Kaže se ___ je to opasno.«",
          options: ["da", "što", "koje"],
          correctIndex: 0,
          explanation: "da — obligatory, exactly as in Unit 19. English can drop «that»; Croatian cannot.",
        },
        {
          prompt: "Which is right?",
          options: [
            "Smatra se da je recikliranje korisno.",
            "Smatra se da recikliranje je korisno.",
          ],
          correctIndex: 0,
          explanation: "The clitic `je` goes into second position of the da-clause, and `da` counts as slot one. U19's rule, unchanged.",
        },
        {
          prompt: "»___ se da je plastika štetna.« (it is KNOWN that…)",
          options: ["Zna", "Znaju", "Znalo"],
          correctIndex: 0,
          explanation: "Frozen 3sg. There is no plural here to make, because there is nobody to be plural — no *znaju se*.",
        },
        {
          prompt: "The claim was: »Bilo je dobro.« How does it go inside the frame?",
          options: [
            "Kaže se da je bilo dobro.",
            "Kaže se da je dobro.",
            "Kaže se da bude dobro.",
          ],
          correctIndex: 0,
          explanation: "The tense does not move. A past claim stays past inside the da-clause — Croatian never backshifts, and this is the fact Unit 21 is built on.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each frame to how strongly it lands",
      pairs: [
        { a: "Misli se da…", b: "people think — soft, unattributed" },
        { a: "Kaže se da…", b: "it's said — hearsay, no source at all" },
        { a: "Smatra se da…", b: "it's held — considered, weighed" },
        { a: "Zna se da…", b: "it's known — presented as plain fact" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Smatra se ___ je to štetno.",
      blanks: [["da"]],
      translation: "That is held to be harmful.",
      explanation: "da is never optional in Croatian.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ se da je zagađenje veliki problem.",
      blanks: [["Kaže", "Kaze"]],
      translation: "Pollution is said to be a big problem.",
      wordBank: ["Kaže", "Kažu", "Kazalo"],
      explanation: "Frozen 3sg. There is no plural available — nobody is doing the saying.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Zna se da ___ plastika štetna.",
      blanks: [["je"]],
      translation: "It's known that plastic is harmful.",
      explanation: "je goes into second position of the da-clause, counting da as slot one — so it lands right after da, before the subject.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Take your name off it: »Mislim da je zagađenje veliki problem.« → (it is SAID that…)",
      answers: [
        "Kaže se da je zagađenje veliki problem.",
        "Kaže se da je zagađenje veliki problem",
        "Kaze se da je zagađenje veliki problem.",
      ],
      hint: "Swap the frame only. Everything after `da` stays exactly as it is.",
      explanation: "Kaže se da je zagađenje veliki problem. Notice that the whole da-clause is untouched — only the frame changed owner.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "The claim was: »Prije je bilo dobro.« Report it with «kaže se».",
      answers: [
        "Kaže se da je prije bilo dobro.",
        "Kaže se da je prije bilo dobro",
        "Kaze se da je prije bilo dobro.",
      ],
      hint: "The tense stays exactly where it was.",
      explanation: "Kaže se da je prije bilo dobro. English would move the tense back a step; Croatian moves nothing, ever.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Kaže se da je zagađenje veliki problem.",
      answers: ["Kaže se da je zagađenje veliki problem.", "Kaže se da je zagađenje veliki problem", "Kaze se da je zagadenje veliki problem."],
      allowSlow: true,
      explanation: "Frame frozen, da obligatory, je in second position of the da-clause.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Zna se da je plastika štetna.",
      answers: ["Zna se da je plastika štetna.", "Zna se da je plastika štetna", "Zna se da je plastika stetna."],
      allowSlow: true,
      explanation: "The strongest frame in the set — presented as fact, with nobody's name on it.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Smatra se da recikliranje pomaže.",
      targetEn: "Recycling is held to help.",
      phonetic: "SMA-tra se da re-tsee-KLEE-ra-nye PO-ma-zhe",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "L1 review: »Kaže se da se ovdje ___ boce.« (that bottles are recycled here)",
      options: ["recikliraju", "reciklira", "reciklirati"],
      correctIndex: 0,
      explanation: "boce is the subject of the inner clause, so the agreement rule still runs inside it. Two `se`s in the sentence — but in two different clauses, which is legal. One per clause is the rule.",
      tts: "Kaže se da se ovdje recikliraju boce.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U17 review: »Klima se ___ .« (the climate is changing — mijenjati, imperfective)",
      options: ["mijenja", "promijeni", "mijenjati"],
      correctIndex: 0,
      explanation: "mijenja — an ongoing process, so imperfective. (And that is a se-passive with klima as its subject: L1's rule, still running.)",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Yesterday's frozen verb, with a verb of saying inside it.**\n\n> **frozen 3sg + `se`** + **`da`** + **an ordinary complete clause**\n\n*Kaže se da je zagađenje veliki problem.* · *Smatra se da recikliranje pomaže.* · *Zna se da je plastika štetna.*\n\n**Three things to hold on to:**\n\n1. **`da` is obligatory**, and the clitic goes into **second position of the da-clause**, with `da` as slot one — Unit 19's rule, unchanged.\n2. **The frame is frozen.** No *kažu se*, no *smatraju se*. Nobody is there to be plural.\n3. **The tense inside does not move.** A past claim stays past: *Kaže se da je bilo dobro.* Croatian never backshifts — remember that sentence, because Unit 21 is built on it.\n\n**The register pair:** *Mislim da…* signs your name to it. *Smatra se da…* takes the name off. Same clause, different owner — or no owner at all.\n\nTomorrow: a verb you have owned since A2, of which you have been using exactly half.",
      vocabIds: [
        "b1u20.planet", "b1u20.klima", "b1u20.zagadenje", "b1u20.zagadivati",
        "b1u20.posljedica", "b1u20.utjecaj", "b1u20.opasan", "b1u20.stetan",
      ],
    },
  ],
  srsCloze: [
    { front: "Kaže se ___ je to problem.", answers: ["da"], back: "da — obligatory. English drops «that»; Croatian never does.", tts: "Kaže se da je to problem." },
    { front: "___ se da je plastika štetna. (it is KNOWN)", answers: ["Zna", "zna"], back: "Zna se — the strongest frame, presented as plain fact.", tts: "Zna se da je plastika štetna." },
    { front: "Smatra se da ___ recikliranje korisno.", answers: ["je"], back: "je — second position of the da-clause, with da counting as slot one.", tts: "Smatra se da je recikliranje korisno." },
    { front: "The claim was «Bilo je dobro.» → Kaže se da ___ ___ dobro.", answers: ["je bilo", "je bilo."], back: "je bilo — the tense does not move. Croatian never backshifts, and Unit 21 is built on that.", tts: "Kaže se da je prije bilo dobro." },
    { front: "Frozen or not? These frames can NEVER go ___ , because nobody is there to be it.", answers: ["plural", "množina", "u množinu"], back: "Plural. There is no *kažu se*, no *smatraju se* — the frames are frozen in the 3sg precisely because nobody is doing the saying.", tts: "Kaže se da je to problem." },
    { front: "pollution = ___", answers: ["zagađenje", "zagadenje"], back: "zagađenje (n) — Zagađenje je veliki problem.", tts: "Zagađenje je veliki problem." },
    { front: "consequence = ___", answers: ["posljedica"], back: "posljedica (f) — To ima posljedice.", tts: "To ima posljedice." },
    { front: "influence / impact = ___ (+ na + ACC)", answers: ["utjecaj"], back: "utjecaj (m) — To ima utjecaj na okoliš.", tts: "To ima utjecaj na okoliš." },
    { front: "harmful = ___", answers: ["štetan", "stetan", "štetna"], back: "štetan (štetna, štetno) — Plastika je štetna.", tts: "Plastika je štetna." },
    { front: "dangerous = ___", answers: ["opasan", "opasna"], back: "opasan (opasna, opasno) — To je opasno za životinje.", tts: "To je opasno za životinje." },
    { front: "climate = ___", answers: ["klima"], back: "klima (f) — Klima se mijenja.", tts: "Klima se mijenja." },
  ],
  notes: {
    inOneSentence: {
      en: "Put a verb of saying or thinking into yesterday's frozen slot and you can report a claim without owning it — kaže se / smatra se / zna se + DA + an ordinary clause whose tense never moves.",
      exampleHr: "Kaže se da je zagađenje veliki problem.",
    },
    deepDive: [
      {
        title: "The frame, and why it is not new",
        body:
          "Nothing in this lesson is new machinery. It is L2's impersonal `se` — frozen 3sg, `se` in second position, nobody named — with a verb of **saying** or **thinking** in the slot:\n\n> **frozen 3sg verb + `se`** + **`da`** + **an ordinary, complete clause**\n\n*Kaže se da je zagađenje veliki problem.*\n*Smatra se da recikliranje pomaže.*\n*Zna se da je plastika štetna.*\n\nWhat is new is what it lets you do: state something that is *in the air* without claiming it as yours. There is no single word for *apparently* at B1 — there is this frame, and it does the job better.\n\n**Two rules ride along from Unit 19, both unchanged.** `da` is **obligatory** — Croatian has never allowed the English deletion. And the clitic inside the da-clause takes **second position of that clause**, with `da` itself counting as slot one:\n\n*Kaže se da **je** to problem.* ✅ ~~*Kaže se da to je problem.*~~ ❌\n\n**The frames cannot be pluralized.** There is no *kažu se*, no *smataju se*, no *znaju se* in this construction. They are frozen because there is nobody there to be plural — that is the whole point of using them.",
        table: {
          caption: "The five frames, ordered by how much weight they carry",
          headers: ["okvir", "engleski", "how strong"],
          rows: [
            ["Misli se da…", "people think that…", "softest — unattributed opinion"],
            ["Kaže se da…", "it is said that… / apparently", "hearsay, no source"],
            ["Vjeruje se da…", "it is believed that…", "a shared belief"],
            ["Smatra se da…", "it is held / considered that…", "weighed, considered"],
            ["Zna se da…", "it is known that…", "strongest — presented as fact"],
          ],
        },
      },
      {
        title: "The tense does not move (and why you are learning it here)",
        body:
          "English backshifts. *«It was good»* becomes *they said it **had been** good*; *«I'm coming»* becomes *she said she **was** coming*. English speakers do this without noticing, which is exactly why it needs naming.\n\n**Croatian moves nothing.** The clause inside `da` sits in whatever tense the claim was made in, and stays there:\n\n| the claim | inside the frame |\n|---|---|\n| *To je problem.* | Kaže se da **je** to problem. |\n| *Bilo je dobro.* | Kaže se da **je bilo** dobro. |\n| *Plastika je štetna.* | Zna se da **je** plastika štetna. |\n\nThe test is simple and always works: **delete the frame and see whether a good Croatian sentence is left.** *Kaže se da je prije bilo dobro* → *Prije je bilo dobro.* Untouched. If deleting the frame leaves you with something odd, you moved a tense you should not have.\n\n**You are meeting this rule here on purpose.** In Unit 21 you learn to report what a *named* person said, and backshifting is the single most predictable error English speakers make there. Here there is nothing else to think about, so the habit forms cheaply.\n\n⚠️ *Rekao je da…* — a named speaker — is **not** this unit. Everything here is deliberately ownerless.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "The delete-the-frame test",
          text: "Take off «kaže se da» and look at what is left. If it is a perfectly normal Croatian sentence in its original tense, the frame is right. Croatian never backshifts — not here, and not in Unit 21 either.",
        },
      },
      {
        title: "Your name on it, or off it",
        body:
          "Unit 19 gave you the frames that **sign** a claim:\n\n*Mislim da je to problem.* — I think so, and I am saying so.\n*Smatram da recikliranje pomaže.* — I hold this, considered.\n\nThis lesson gives you the same clauses with the owner removed:\n\n*Kaže se da je to problem.* — somebody says so; not necessarily me.\n*Smatra se da recikliranje pomaže.* — this is the received view.\n\nThe pair is the whole unit in miniature — one construction with a person in it, one without — and the choice between them is rhetorical, not grammatical. You reach for the ownerless one when you want to report the state of an argument without entering it, which is why it is the natural register for news, for science writing, and for any conversation where you would rather not be pinned down.\n\nA useful move for writing: **state the received view first, then your own.** *Kaže se da je recikliranje dovoljno. Ja mislim da nije.* Two frames, two owners, and the contrast does the work.",
        diagram: {
          kind: "contrast",
          left: {
            title: "s imenom — U19",
            emoji: "🙋",
            lines: [
              { hr: "Mislim da je to problem.", en: "I think that's a problem." },
              { hr: "Smatram da recikliranje pomaže.", en: "I hold that recycling helps." },
            ],
          },
          right: {
            title: "bez imena — danas",
            emoji: "👥",
            lines: [
              { hr: "Kaže se da je to problem.", en: "It's said to be a problem." },
              { hr: "Smatra se da recikliranje pomaže.", en: "Recycling is held to help." },
            ],
          },
        },
      },
      {
        title: "Two `se`s in one sentence — legal, and when",
        body:
          "L2 gave you a hard rule: **one `se` per clause, ever.** That is per **clause**, not per sentence — and this lesson is where the difference finally matters.\n\n*Kaže **se** da **se** ovdje recikliraju boce.* ✅\n\nThat sentence has two `se`s and both are correct, because they belong to two different clauses. The first is the frozen frame; the second is an ordinary L1 se-passive sitting inside the `da`-clause, with *boce* as its subject and the verb agreeing with it.\n\nThe inner clause behaves exactly as it would on its own. All of L1's and L2's rules keep running in there:\n\n*Kaže se da se ovdje **recikliraju** boce.* — plural subject, plural verb\n*Kaže se da se ovdje **ne baca** smeće.* — no subject, frozen verb\n\nWhat you may never do is stack them inside a single clause: ~~*Kaže se se…*~~ ❌ stays impossible.",
      },
    ],
    commonMistakes: [
      { wrong: "Kaže se je to problem.", right: "Kaže se **da** je to problem.", why: "`da` is obligatory in Croatian. English deletes «that» freely; Croatian has never allowed it." },
      { wrong: "Kaže se da to je problem.", right: "Kaže se da **je** to problem.", why: "The clitic takes second position of the da-clause, and `da` counts as slot one — so it lands directly after da." },
      { wrong: "Kažu se da je to problem.", right: "**Kaže** se da je to problem.", why: "The frame is frozen in the 3sg. Nobody is doing the saying, so there is nobody to be plural." },
      { wrong: "Kaže se da je dobro. (reporting «Bilo je dobro.»)", right: "Kaže se da **je bilo** dobro.", why: "The tense inside never moves. A past claim stays past — Croatian does not backshift, and Unit 21 depends on that." },
      { wrong: "Rekao se da je to problem.", right: "**Kaže se** da je to problem.", why: "*Rekao je da…* needs a named speaker and no `se` — that is Unit 21. These frames are deliberately ownerless." },
      { wrong: "Smatra se o tome da je štetno.", right: "Smatra se **da** je štetno.", why: "These frames take a `da`-clause directly. `o + LOC` takes a noun, not a clause — U19's rule, still running." },
    ],
    memoryHooks: [
      "**It's yesterday's sentence with a talking verb in it.** Nothing new is being installed — only a new use for the freeze.",
      "**The delete-the-frame test.** Take off *kaže se da* and what's left must be an ordinary Croatian sentence in its original tense. If it isn't, you moved something.",
      "**Weakest to strongest: misli se → kaže se → vjeruje se → smatra se → zna se.** Pick by how much weight you want the claim to carry.",
      "**Frozen means frozen.** There is no *kažu se*. If you catch yourself pluralizing the frame, you have accidentally put people back into a sentence built to have none.",
      "**One `se` per CLAUSE, not per sentence.** *Kaže se da se ovdje recikliraju boce* is two clauses and two perfectly legal `se`s.",
    ],
    connects: [
      { label: "The impersonal se — the freeze this is built on", lessonId: "b1u20l2" },
      { label: "Mislim da… — the same clause with your name on it", lessonId: "b1u19l1" },
      { label: "The se-passive, still running inside the da-clause", lessonId: "b1u20l1" },
      { label: "Next: trebati, of which you own half", lessonId: "b1u20l4" },
    ],
    selfCheck: [
      { q: "»Smatra se ___ je to štetno.«", a: "da — obligatory, always." },
      { q: "Report «Prije je bilo dobro» with kaže se.", a: "Kaže se da je prije bilo dobro. The tense does not move." },
      { q: "Why is »Kažu se da…« wrong?", a: "The frame is frozen in the 3sg. There is nobody doing the saying, so there is no plural to make." },
      { q: "Is »Kaže se da se ovdje recikliraju boce« legal? Why?", a: "Yes — two clauses, one `se` each. The rule is one per clause, not one per sentence." },
      { q: "What's the difference between «Mislim da je to problem» and «Kaže se da je to problem»?", a: "The owner. The first signs the claim as yours; the second reports it with nobody's name on it." },
    ],
  },
};
