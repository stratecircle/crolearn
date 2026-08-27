import type { Lesson } from "@/types/content";

/**
 * B1 U19 L1 — Mislim da… (Opinion frames + koji in the nominative)
 * Spec: curriculum/B1/unit-19.md · grammar-reference §17 "Relative clauses (koji)"
 * + §4 adjective declension + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Two installs, one lesson. (1) The complementizer `da` — first appearance in the
 * course, restricted here to opinion/knowing frames (reported speech stays in
 * U21, see the spec's scope note). (2) koji as the SUBJECT of its own clause,
 * i.e. always nominative, so the two-questions habit can be drilled while the
 * second question still has only one possible answer.
 *
 * Level-compliance pass 2026-07-29: every content word greped against the
 * 759-headword carded list. Rejected and routed around: tako (L5), ideja (L2),
 * razlog (L2), važan / jasan (L3), imati pravo (untaught idiom), zanimljiv,
 * svatko, isto, zato što (all zero-occurrence).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U19 cut-outs exist (da / možda / naravno stay
 * icon-only — there is nothing to draw).
 */
export const b1u19l1: Lesson = {
  id: "b1u19l1",
  unitId: "b1u19",
  title: "Mislim da…",
  titleEn: "I think that… — opinion frames + koji as subject",
  grammarTags: ["relative-koji", "nominative", "da-complementizer", "clitics"],
  estMinutes: 20,
  vocab: [
    { id: "b1u19.misljenje", hr: "mišljenje", en: "opinion", pos: "noun", gender: "n", icon: "💭", exampleHr: "To je moje mišljenje.", exampleEn: "That's my opinion." },
    { id: "b1u19.misliti", hr: "misliti", en: "to think (mislim, misliš)", pos: "verb", icon: "🤔", exampleHr: "Mislim da je to istina.", exampleEn: "I think that's true." },
    { id: "b1u19.smatrati", hr: "smatrati", en: "to consider / to hold that (smatram) — the flatter twin of misliti", pos: "verb", icon: "⚖️", exampleHr: "Smatram da je hrvatski lijep jezik.", exampleEn: "I consider Croatian a beautiful language." },
    { id: "b1u19.da", hr: "da", en: "that (the word English lets you drop — Croatian never does)", pos: "conj", icon: "🔗", exampleHr: "Mislim da je Zagreb lijep.", exampleEn: "I think that Zagreb is beautiful." },
    { id: "b1u19.cinimise", hr: "čini mi se", en: "it seems to me (a fixed chunk — take it whole)", pos: "phrase", icon: "🤨", exampleHr: "Čini mi se da ne razumiješ.", exampleEn: "It seems to me you don't understand.", tags: ["chunk"] },
    { id: "b1u19.tema", hr: "tema", en: "topic / subject (of talk)", pos: "noun", gender: "f", icon: "📁", exampleHr: "To je dobra tema.", exampleEn: "That's a good topic." },
    { id: "b1u19.istina", hr: "istina", en: "truth", pos: "noun", gender: "f", icon: "🔍", exampleHr: "Je li to istina?", exampleEn: "Is that true?" },
    { id: "b1u19.mozda", hr: "možda", en: "maybe / perhaps", pos: "adv", icon: "🤷", exampleHr: "Možda je to istina.", exampleEn: "Maybe that's true." },
    { id: "b1u19.naravno", hr: "naravno", en: "of course", pos: "adv", icon: "👍", exampleHr: "Naravno! To je istina.", exampleEn: "Of course! That's true." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Mislim da…",
      subtitle: "Unit 19 opens with two words that end the era of short sentences: da, which welds a thought onto an opinion, and koji, which welds one sentence onto another.",
      emoji: "💭",
      items: [
        { emoji: "🔗", label: "da", hint: "the «that» you can't drop" },
        { emoji: "🧵", label: "koji", hint: "two sentences, one weld" },
        { emoji: "🧭", label: "Two questions", hint: "the unit's whole method" },
        { emoji: "💭", label: "Opinion words", hint: "mišljenje, tema, istina…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The word English lets you drop",
      subtitle: "«I think it's true.» English quietly deletes a word there. Croatian refuses — and once you put it back, everything after it is an ordinary sentence.",
      emoji: "🔗",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U3 adjectives, U15 clitics, U18 bih" },
        { emoji: "🃏", label: "New words", hint: "the opinion nine" },
        { emoji: "⚙️", label: "Mislim da…", hint: "frame + clitic slot" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: you already own the endings",
      items: [
        {
          prompt: "U3 adjectives: »Ovo je ___ profesor.« (this is the NEW teacher — the one we mean)",
          options: ["novi", "nova", "novo"],
          correctIndex: 0,
          explanation: "Masculine singular, the pointing-at-one form: novi. Hold on to that -i — today's new word wears exactly the same set of endings.",
        },
        {
          prompt: "U15 clitic train: where does a clitic like je or ga sit?",
          options: [
            "second position — right after the first word of its clause",
            "always at the very end of the clause",
            "always first, before everything",
          ],
          correctIndex: 0,
          explanation: "Second position, never first. Today that law runs one level down — inside a subordinate clause.",
        },
        {
          prompt: "U18: »Ana ___ studirala u Zagrebu.« (Ana would study in Zagreb.)",
          options: ["bi", "bih", "bismo"],
          correctIndex: 0,
          explanation: "3sg → bi. Recognition only today — U19 doesn't ask you to produce the conditional.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The opinion nine",
      vocabIds: [
        "b1u19.misljenje", "b1u19.misliti", "b1u19.smatrati", "b1u19.da", "b1u19.cinimise",
        "b1u19.tema", "b1u19.istina", "b1u19.mozda", "b1u19.naravno",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Mislim **da**… — the frame 🔗",
      body:
        "English gives you a choice: *I think **that** it's true* or *I think it's true.* Croatian gives you none. **`da` is obligatory.**\n\n*Mislim **da** je to istina.* ✅  ~~*Mislim je to istina.*~~ ❌\n\nAfter `da`, everything is an ordinary present-tense clause — nothing gets reordered, nothing changes shape. The one thing to watch is the clitic: it goes into **second position of the da-clause**, and **`da` itself counts as slot one**.\n\n*Mislim da **je** to istina.* ✅  ~~*Mislim da to je istina.*~~ ❌\n\nAnd the negation splits in two places, with two different meanings — keep them apart:\n\n*Ne mislim da je to istina.* → I don't think it's true.\n*Mislim da to nije istina.* → I think it's not true.",
      table: {
        caption: "Four frames, four strengths",
        headers: ["okvir (frame)", "how strong it lands", "primjer"],
        rows: [
          ["Naravno…", "strongest — of course, no argument", "Naravno! To je istina."],
          ["Smatram da…", "flat, slightly formal — I hold that", "Smatram da je hrvatski lijep jezik."],
          ["Mislim da…", "the neutral default — I think", "Mislim da je to istina."],
          ["Čini mi se da…", "hedged — it seems to me", "Čini mi se da ne razumiješ."],
          ["Možda…", "softest — maybe (no da needed)", "Možda je to istina."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "da never disappears — and it takes the first seat",
        text: "`da` is not the optional English «that». Leave it out and the sentence breaks.\n\nBecause `da` occupies slot one of its own clause, the clitic lands immediately after it: **Mislim da je to istina.** · **Mislim da ga poznajem.** · **Čini mi se da se ne slažemo.**\n\n`možda` is different — it is an adverb, not a frame, so it takes no `da` at all: **Možda je to istina.**",
      },
      examples: [
        { hr: "Mislim da je to istina.", en: "I think that's true.", note: "The neutral frame. da, then je in second position of the da-clause." },
        { hr: "Smatram da je hrvatski lijep jezik.", en: "I consider Croatian a beautiful language.", note: "smatrati is flatter and a shade more formal than misliti — the word you use in writing." },
        { hr: "Čini mi se da ne razumiješ.", en: "It seems to me you don't understand.", note: "čini mi se is a fixed chunk. Don't take it apart — just put da after it." },
        { hr: "Ne mislim da je to tema za danas.", en: "I don't think that's a topic for today.", note: "Croatian, like English, prefers to negate the FRAME: Ne mislim da… rather than Mislim da ne…" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Two sentences, one weld: **koji** 🧵",
      body:
        "Everything you have said in Croatian so far has come out one clause at a time:\n\n*Imam prijatelja. On radi u restoranu.*\n\nThat is correct, and it sounds like a list. **koji** welds the two together: take the second sentence, swap its subject for `koji`, and hang it off the noun it describes.\n\n*Imam prijatelja **koji** radi u restoranu.*\n\nThe endings cost you nothing — **koji declines exactly like the definite adjective *novi*** you met in Unit 3. Today only the nominative row is in play, because in every sentence below `koji` is the **subject** of its own little clause.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Two sentences", emoji: "1️⃣", example: "Imam prijatelja. ‖ On radi u restoranu." },
          { label: "Swap the subject for koji", emoji: "🔄", example: "on → koji" },
          { label: "One sentence, one breath", emoji: "🧵", example: "Imam prijatelja koji radi u restoranu." },
        ],
      },
      table: {
        caption: "koji in the nominative — the same endings as novi (§4)",
        headers: ["rod / broj", "nov- (U3)", "koj-"],
        rows: [
          ["m sg", "novi", "koji"],
          ["f sg", "nova", "koja"],
          ["n sg", "novo", "koje"],
          ["m pl", "novi", "koji"],
          ["f pl", "nove", "koje"],
          ["n pl", "nova", "koja"],
        ],
      },
      examples: [
        { hr: "Imam prijatelja koji radi u restoranu.", en: "I have a friend who works in a restaurant.", note: "prijatelja is accusative — but koji is nominative, because inside its own clause he is the one working." },
        { hr: "To je tema koja nije laka.", en: "That's a topic that isn't easy.", note: "tema is feminine singular → koja." },
        { hr: "To je pitanje koje nema odgovora.", en: "That's a question that has no answer.", note: "pitanje is neuter → koje. (nema + GEN: odgovora, U7.)" },
        { hr: "Volim ljude koji govore istinu.", en: "I like people who tell the truth.", note: "ljude is accusative plural; koji is nominative plural. Two different jobs in one sentence." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: da and koji",
      items: [
        {
          prompt: "»Mislim ___ je to istina.«",
          options: ["da", "koji", "što"],
          correctIndex: 0,
          explanation: "da — the complementizer. Croatian never lets you drop it the way English drops «that».",
        },
        {
          prompt: "Which one is correct Croatian?",
          options: ["Mislim da je to istina.", "Mislim da to je istina.", "Mislim je to istina."],
          correctIndex: 0,
          explanation: "da counts as slot one of its own clause, so the clitic je comes straight after it.",
        },
        {
          prompt: "»To je tema ___ nije laka.«",
          options: ["koja", "koji", "koje"],
          correctIndex: 0,
          explanation: "tema is feminine singular, so koji goes feminine singular: koja.",
        },
        {
          prompt: "»Imam prijatelja ___ radi u Zagrebu.«",
          options: ["koji", "koja", "koje"],
          correctIndex: 0,
          explanation: "Gender and number come from prijatelj (m sg). The case comes from his job in his own clause — he is the one doing the working, so nominative: koji.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Dva pitanja",
      subtitle: "One word, two questions — and the answers come from two different places. This is the method for the whole unit, and it starts now while one of the answers is still free.",
      emoji: "🧭",
      items: [
        { emoji: "🧭", label: "The two questions", hint: "rod+broj ‖ padež" },
        { emoji: "🎭", label: "The decoy", hint: "prijatelja koji" },
        { emoji: "🧩", label: "Drills", hint: "match, fills, welding" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "Two questions, two different answers 🧭",
      body:
        "Every time you reach for `koji`, ask two questions — **in this order, and never merge them**:\n\n**1 · Na što pokazuje?** *What does it point back at?* → that noun gives you **gender and number**.\n**2 · Što radi u svojoj rečenici?** *What is its job in its own clause?* → that gives you the **case**.\n\nToday question 2 always has the same answer — `koji` is the subject, so nominative. From L2 on it starts changing, and that is the whole unit.\n\nOne thing to notice now, because it will save you later: **the ending on the noun in front is a decoy.**\n\n*Imam prijatelj**a** koj**i** radi u Zagrebu.*\n\nThe -a and the -i disagree, and they are supposed to. *prijatelja* is accusative because *imam* wants an object; *koji* is nominative because *radi* wants a subject. Cover the noun's ending before you choose.\n\nAnd the comma? **No comma** when the clause tells you *which one* — that is almost everything you will write. A comma only when the thing is already identified and the clause just adds a detail: *Moj brat, koji živi u Splitu, dolazi sutra.*",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Dva pitanja",
        text: "**1 · Na što pokazuje?** → rod + broj — from the noun in front.\n**2 · Što radi u svojoj rečenici?** → padež — from its own clause.\n\nThe two answers come from **two different places**. Nearly every mistake in this unit is one mistake: importing the case from the noun in front instead of reading it off the relative clause.",
      },
      table: {
        caption: "Ask both questions, every time",
        headers: ["noun in front", "1 · rod + broj", "2 · posao u svojoj rečenici", "→"],
        rows: [
          ["prijatelj", "m sg", "subjekt — radi", "koji"],
          ["tema", "f sg", "subjekt — nije laka", "koja"],
          ["pitanje", "n sg", "subjekt — nema odgovora", "koje"],
          ["ljudi", "m pl", "subjekt — govore", "koji"],
          ["teme", "f pl", "subjekt — nisu lake", "koje"],
        ],
      },
      examples: [
        { hr: "Ovo je profesor koji govori hrvatski.", en: "This is the teacher who speaks Croatian.", note: "profesor → m sg; subject of govori → nominative." },
        { hr: "Ovo je studentica koja studira u Zagrebu.", en: "This is the student who studies in Zagreb.", note: "studentica → f sg. Gender comes from her, not from the sentence around her." },
        { hr: "To su teme koje su danas u novinama.", en: "Those are the topics that are in the papers today.", note: "teme → f pl → koje. (u novinama = LOC plural, U15.)" },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match the noun to the phrase that continues it correctly",
      pairs: [
        { a: "prijatelj (m sg)", b: "prijatelj koji radi" },
        { a: "tema (f sg)", b: "tema koja nije laka" },
        { a: "pitanje (n sg)", b: "pitanje koje nema odgovora" },
        { a: "ljudi (m pl)", b: "ljudi koji govore" },
        { a: "teme (f pl)", b: "teme koje nisu lake" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Imam prijatelja ___ radi u Zagrebu.",
      blanks: [["koji"]],
      translation: "I have a friend who works in Zagreb.",
      wordBank: ["koji", "koja", "koje"],
      explanation: "prijatelj → m sg; he is the subject of radi → nominative. The -a on prijatelja is a decoy.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Mislim ___ je to istina.",
      blanks: [["da"]],
      translation: "I think that's true.",
      wordBank: ["da", "koji", "što"],
      explanation: "da is obligatory — and notice where je landed: second position of the da-clause, with da as slot one.",
    },
    {
      id: "s13",
      type: "fill",
      text: "To je tema ___ nije laka.",
      blanks: [["koja"]],
      translation: "That's a topic that isn't easy.",
      wordBank: ["koja", "koji", "koje"],
      explanation: "tema is feminine singular → koja, exactly like nova.",
    },
    {
      id: "s14",
      type: "fill",
      text: "To je pitanje ___ nema odgovora.",
      blanks: [["koje"]],
      translation: "That's a question that has no answer.",
      wordBank: ["koje", "koji", "koja"],
      explanation: "pitanje is neuter → koje, exactly like novo.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Weld into ONE sentence: »Imam prijatelja. Prijatelj radi u Zagrebu.« (in Croatian)",
      answers: [
        "Imam prijatelja koji radi u Zagrebu.",
        "Imam prijatelja koji radi u Zagrebu",
        "Imam prijatelja, koji radi u Zagrebu.",
        "Imam prijatelja, koji radi u Zagrebu",
      ],
      hint: "the second sentence's subject turns into koji",
      explanation: "The second prijatelj is the subject of radi, so it becomes koji — masculine singular, nominative. And koji can never be dropped: ✗ Imam prijatelja radi u Zagrebu.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "»It seems to me that you don't understand.« (in Croatian)",
      answers: [
        "Čini mi se da ne razumiješ.",
        "Čini mi se da ne razumiješ",
        "Cini mi se da ne razumijes.",
        "Cini mi se da ne razumijes",
      ],
      hint: "the chunk stays whole, then da, then an ordinary clause",
      explanation: "Čini mi se da ne razumiješ. — čini mi se is taken whole, da is obligatory, and negation is two words: ne razumiješ.",
    },
    {
      id: "s17",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear where da parks the clitic, then say two opinions of your own — one of them with a koji hanging off it.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "da-frame · koji-weld" },
        { emoji: "🎤", label: "Your opinion", hint: "Mislim da…" },
        { emoji: "🔗", label: "Flashbacks", hint: "U3 · U15 · U18" },
      ],
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Mislim da je to istina.",
      explanation: "Mislim da je to istina. — I think that's true. Four words, and je is exactly where it has to be: right after da.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Imam prijatelja koji radi u restoranu.",
      explanation: "Imam prijatelja koji radi u restoranu. — I have a friend who works in a restaurant. prijatelja is the object of imam; koji is the subject of radi.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Mislim da je hrvatski lijep jezik. Imam prijatelja koji govori hrvatski.",
      targetEn: "give an opinion, then hang a koji on it — I think Croatian is a beautiful language. I have a friend who speaks Croatian.",
      phonetic: "MEES-leem dah yeh HUR-vat-skee LYEH-p YEH-zeek. EE-mahm pree-YAH-teh-lyah KOY-ee GOH-voh-ree HUR-vat-skee",
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the old rules are doing the new work",
      items: [
        {
          prompt: "U3: which set of endings does koji copy?",
          options: [
            "the adjective endings — novi, nova, novo",
            "the noun endings — grad, grada, gradu",
            "the pronoun endings — ja, mene, meni",
          ],
          correctIndex: 0,
          explanation: "koji is an adjective in disguise: koji / koja / koje = novi / nova / novo. You learned the hard part in Unit 3.",
        },
        {
          prompt: "U15: inside »Mislim da je to istina«, why is je in that spot?",
          options: [
            "second position of the da-clause — da counts as slot one",
            "because je always comes after a noun",
            "because je always ends the clause",
          ],
          correctIndex: 0,
          explanation: "The second-position law applies inside every clause separately, and da holds the first seat.",
        },
        {
          prompt: "Listen — is this a flat fact or a hedged opinion?",
          tts: "Čini mi se da ovo nije istina.",
          options: ["a hedged opinion — čini mi se", "a flat fact, stated with certainty", "a question"],
          correctIndex: 0,
          explanation: "Čini mi se da… is the softest frame in the set — it says «this is how it looks to me», not «this is how it is».",
        },
      ],
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**`da` is not optional.** English deletes «that»; Croatian never does — *Mislim **da** je to istina.* And `da` takes slot one of its own clause, so the clitic lands right after it: ~~Mislim da to je istina~~ ❌.\n\n**Four frames, four strengths**: *Naravno* → *Smatram da* → *Mislim da* → *Čini mi se da* → *Možda* (an adverb — no `da`).\n\n**`koji` welds two sentences into one.** Swap the second sentence's subject for `koji` and hang it off the noun: *Imam prijatelja **koji** radi u restoranu.* It can never be dropped.\n\n**The two questions**: *what does it point back at?* → gender + number. *what is its job in its OWN clause?* → case. Today the second answer is always «subject → nominative» — koji / koja / koje, the same endings as *novi / nova / novo*.\n\nWords tonight: mišljenje, misliti, smatrati, da, čini mi se, tema, istina, možda, naravno.\n\nNext: the same man, two sentences, two different words for «who» — and the difference has nothing to do with him.",
      vocabIds: [
        "b1u19.misljenje", "b1u19.misliti", "b1u19.smatrati", "b1u19.da", "b1u19.cinimise",
        "b1u19.tema", "b1u19.istina", "b1u19.mozda", "b1u19.naravno",
      ],
    },
  ],
  srsCloze: [
    { front: "Mislim ___ je to istina. (I think that's true)", answers: ["da"], back: "da — the complementizer, never optional in Croatian.", tts: "Mislim da je to istina." },
    { front: "Imam prijatelja ___ radi u Zagrebu.", answers: ["koji"], back: "koji — m sg from prijatelj, nominative because he is the subject of radi.", tts: "Imam prijatelja koji radi u Zagrebu." },
    { front: "koji, feminine singular → ___", answers: ["koja"], back: "koja — To je tema koja nije laka.", tts: "To je tema koja nije laka." },
    { front: "koji, neuter singular → ___", answers: ["koje"], back: "koje — To je pitanje koje nema odgovora.", tts: "To je pitanje koje nema odgovora." },
    { front: "koji takes its CASE from ___ (the noun in front / its own clause)", answers: ["its own clause", "own clause", "its own clause."], back: "Its own clause. Gender and number come from the noun in front; the case never does.", tts: "Imam prijatelja koji radi u Zagrebu." },
    { front: "opinion (n) = ___", answers: ["mišljenje", "misljenje"], back: "mišljenje (n) — To je moje mišljenje.", tts: "To je moje mišljenje." },
    { front: "it seems to me = ___ (three words)", answers: ["čini mi se", "cini mi se"], back: "čini mi se — a fixed chunk, followed by da.", tts: "Čini mi se da ne razumiješ." },
    { front: "truth = ___", answers: ["istina"], back: "istina (f) — Je li to istina?", tts: "Je li to istina?" },
    { front: "topic / subject of talk = ___", answers: ["tema"], back: "tema (f) — To je dobra tema.", tts: "To je dobra tema." },
    { front: "to consider / hold that (the flatter twin of misliti) = ___", answers: ["smatrati", "smatram"], back: "smatrati — Smatram da je hrvatski lijep jezik.", tts: "Smatram da je hrvatski lijep jezik." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian never drops «that» (Mislim DA je to istina), and koji welds a second sentence onto a noun — taking its gender and number from that noun, but its case from the job it does inside its own clause.",
      exampleHr: "Mislim da imam prijatelja koji zna odgovor.",
    },
    deepDive: [
      {
        title: "The da-frame, and where the clitic lands",
        body:
          "Three verbs of opinion take `da` + an ordinary present-tense clause: **misliti** (mislim — the neutral default), **smatrati** (smatram — flatter, a shade more formal, the one you use in writing), and the fixed chunk **čini mi se** (hedged — «it seems to me»). Two adverbs sit on either end of them and take **no** `da` at all: **naravno** (of course) and **možda** (maybe).\n\nNothing inside the da-clause is reordered. The only thing to get right is the clitic, and the rule is the U15 rule applied one level down: **second position of the da-clause, with `da` counting as the first slot.**\n\n*Mislim da **je** to istina.* · *Mislim da **ga** poznajem.* · *Čini mi se da **se** ne slažemo.*\n\nNegation has two landing places and they mean different things. *Ne mislim da je to istina* negates the frame («I don't think it's true») and is what Croatian normally says; *Mislim da to nije istina* negates the content («I think it's untrue») and is a stronger claim.\n\n⚠️ `da` in this lesson is the **complementizer after verbs of opinion and knowing** — your own proposition, in your own voice. Reporting *somebody else's* words (*Rekla je da dolazi.*) has its own rules and waits for Unit 21.",
        table: {
          caption: "Frames, strength, and whether da is needed",
          headers: ["frame", "how it lands", "da?"],
          rows: [
            ["Naravno.", "strongest — no argument expected", "no (stands alone)"],
            ["Smatram da…", "flat, formal, considered", "yes"],
            ["Mislim da…", "the neutral default", "yes"],
            ["Čini mi se da…", "hedged, cautious", "yes"],
            ["Možda…", "softest — an adverb, not a frame", "no"],
          ],
        },
      },
      {
        title: "koji: one word, two questions",
        body:
          "A relative clause is a whole sentence hung off a noun. To build one, take the second sentence, replace its subject with `koji`, and attach it:\n\n*Imam prijatelja. **On** radi u restoranu.* → *Imam prijatelja **koji** radi u restoranu.*\n\nThe form of `koji` is decided by **two separate questions with two separate sources**:\n\n1. *What does it point back at?* → **gender and number**, taken from that noun.\n2. *What is its job inside its own clause?* → **case**, taken from the relative clause's own verb or preposition.\n\nIn this lesson question 2 always answers «subject», so the case is always nominative and the whole burden falls on question 1. That is deliberate: the habit of asking both is what L2–L4 will cash in.\n\nThe endings themselves are free — `koji` declines exactly like the definite adjective *novi* from Unit 3, with **koj-** in place of **nov-**.\n\nTwo hard limits worth memorizing now: **`koji` can never be dropped** (English says *the man I know*; Croatian cannot), and **the noun in front is a decoy** — *Imam prijatelj**a** koj**i** radi ovdje* is correct precisely because the two endings disagree.",
        table: {
          caption: "Nominative koji ‖ definite novi (grammar-reference §4, §17)",
          headers: ["rod / broj", "nov-", "koj-", "primjer"],
          rows: [
            ["m sg", "novi", "koji", "prijatelj koji radi"],
            ["f sg", "nova", "koja", "tema koja nije laka"],
            ["n sg", "novo", "koje", "pitanje koje nema odgovora"],
            ["m pl", "novi", "koji", "ljudi koji govore"],
            ["f pl", "nove", "koje", "teme koje nisu lake"],
            ["n pl", "nova", "koja", "pitanja koja nemaju odgovora"],
          ],
        },
      },
      {
        title: "The comma, and what koji is NOT",
        body:
          "**The comma follows the job of the clause, not the word `koji`.** No comma when the clause tells you *which one* — restrictive, and that is nearly everything in this unit: *Imam prijatelja koji radi u Zagrebu.* A comma when the thing is already identified and the clause merely adds a detail: *Moj brat, koji živi u Splitu, dolazi sutra.* Default to no comma; both are accepted here.\n\nDon't confuse today's `koji` with two others you already know. The **interrogative** *koji* («which?») has been live since A1 and simply sits in the nominative: *Koji predmet voliš?* And the **question word** *tko / što* is a different pronoun with its own declension (§15) — *Tko je to?*, not ~~Koji je to?~~\n\nOne more that is coming but is not yours yet: **čiji** («whose») relativizes possession and waits for Unit 24; and the relative **što** (*ono što želim*, *sve što znam*) is recognize-only at B1 — you will meet it in reading and should not produce it.",
        diagram: {
          kind: "contrast",
          left: {
            title: "restriktivno — no comma",
            emoji: "🎯",
            lines: [
              { hr: "Imam prijatelja koji radi u Zagrebu.", en: "I have a friend who works in Zagreb. (which friend? that one)" },
              { hr: "To je tema koja nije laka.", en: "That's a topic that isn't easy." },
            ],
          },
          right: {
            title: "dodatna informacija — comma",
            emoji: "➕",
            lines: [
              { hr: "Moj brat, koji živi u Splitu, dolazi sutra.", en: "My brother, who lives in Split, is coming tomorrow. (I have one brother)" },
              { hr: "Zagreb, koji je veliki grad, ima sve.", en: "Zagreb, which is a big city, has everything." },
            ],
          },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Mislim je to istina.",
        right: "Mislim da je to istina.",
        why: "English can delete «that». Croatian cannot — `da` is structural, not decorative.",
      },
      {
        wrong: "Mislim da to je istina.",
        right: "Mislim da je to istina.",
        why: "The clitic sits in second position of the da-clause, and `da` itself is slot one.",
      },
      {
        wrong: "Imam prijatelja radi u Zagrebu.",
        right: "Imam prijatelja koji radi u Zagrebu.",
        why: "`koji` can never be dropped, no matter how naturally English drops it.",
      },
      {
        wrong: "Imam prijatelja koja radi u Zagrebu.",
        right: "Imam prijatelja koji radi u Zagrebu.",
        why: "Gender and number come from prijatelj — masculine singular — not from anything else in the sentence.",
      },
      {
        wrong: "Možda da je to istina.",
        right: "Možda je to istina.",
        why: "`možda` is an adverb, not an opinion frame. Only misliti / smatrati / čini mi se take `da`.",
      },
    ],
    memoryHooks: [
      "koji is an adjective wearing a disguise: koji / koja / koje = novi / nova / novo. You paid for those endings back in Unit 3.",
      "Two questions, two doors: gender and number walk in through the noun in front; the case walks in through the relative clause's own verb.",
      "The ending on the noun in front is a decoy — cover it with your thumb before you choose.",
      "da is a chair, not a decoration: it sits in the first seat of its clause, so the clitic has to take the second.",
      "Frame strength, loudest to softest: Naravno → Smatram da → Mislim da → Čini mi se da → Možda.",
    ],
    connects: [
      { label: "Where those adjective endings came from (Unit 3 L5)", lessonId: "a1u3l5" },
      { label: "The clitic train in full (Unit 15 L3)", lessonId: "a2u15l3" },
      { label: "Next: koji as an object — kojeg vs koji (Unit 19 L2)", lessonId: "b1u19l2" },
    ],
    selfCheck: [
      { q: "Why is «Mislim je to istina» wrong?", a: "`da` is obligatory in Croatian: Mislim da je to istina. English deletes «that»; Croatian never does." },
      { q: "In «Mislim da je to istina», why does je sit where it does?", a: "Second position of the da-clause. `da` occupies slot one, so the clitic takes slot two." },
      { q: "Where does koji get its gender and number from, and where does it get its case?", a: "Gender and number from the noun it points back at; case from the job it does inside its own clause. Two different sources." },
      { q: "«Imam prijatelja ___ radi u Zagrebu» — which form, and why?", a: "koji. Masculine singular from prijatelj, and nominative because he is the subject of radi. The -a on prijatelja is irrelevant." },
      { q: "Which two words in this lesson take no `da` after them?", a: "možda and naravno — they are adverbs, not opinion frames." },
    ],
  },
};
