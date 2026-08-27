import type { Lesson } from "@/types/content";

/**
 * B1 U20 L4 — Što možemo učiniti? (Impersonal treba + infinitive vs personal trebam)
 * Spec: curriculum/B1/unit-20.md · grammar-reference §18 "The se-constructions"
 * + §10 (conditional) + §6 (verb tables).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The unit's ONLY lesson whose grammar point contains no `se` at all, and it is
 * placed here deliberately: after three lessons of adding `se` to everything,
 * the learner meets an impersonal construction that is impersonal WITHOUT being
 * a se-construction. \*Treba se štedjeti energiju ❌ is the most predictable
 * error in the unit precisely because L1–L3 trained the opposite reflex, and
 * this lesson exists to catch it.
 *
 * Three installs: (1) the fork — a NOUN after it means personal *trebam* + ACC
 * («I need»), an INFINITIVE after it means frozen impersonal *treba* («one
 * should»); (2) *trebalo bi* + infinitive, U18's conditional in the neuter
 * singular, doing exactly what L2's frozen past did, and the softest way to make
 * a demand in Croatian; (3) the strength ladder — mora se ‖ treba ‖ trebalo bi —
 * set beside the already-owned *morati* so the register is visible.
 *
 * Named and NOT taught: *trebam ići* (personal subject + infinitive) is very
 * common in speech and collapses the two constructions the lesson just
 * separated. The lesson says it exists and that it is not being taught yet.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and routed around: učiniti (0 → napraviti, carded
 * a2u16 L1), svjetlo (0 → struja), nitko / nikoga (rejected by name in b1u19's
 * test header → the sentences simply do not need it), izlaziti (0), gasiti as a
 * headword (3, all inside b1u19 rejection notices → carded here as the pf
 * ugasiti with the impf shown on the same card), više / manje (comparatives,
 * avoided even though *više* is carded at a2u13 L5). Deferred by unit: no
 * participial passive (B2), no comparatives, no Future II, no -nje as a
 * productive formation.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U20 cut-outs exist.
 */
export const b1u20l4: Lesson = {
  id: "b1u20l4",
  unitId: "b1u20",
  title: "Što možemo učiniti?",
  titleEn: "What can we do? — impersonal treba vs personal trebam",
  grammarTags: ["trebati", "impersonal", "conditional", "environment"],
  estMinutes: 20,
  vocab: [
    { id: "b1u20.stedjeti", hr: "štedjeti", en: "to save / conserve (štedim, štediš) — of energy, water and money alike", pos: "verb", icon: "💧", exampleHr: "Treba štedjeti vodu.", exampleEn: "One should save water." },
    { id: "b1u20.energija", hr: "energija", en: "energy (f)", pos: "noun", gender: "f", icon: "🔋", exampleHr: "Treba štedjeti energiju.", exampleEn: "One should save energy." },
    { id: "b1u20.struja", hr: "struja", en: "electricity (f) — plaćati struju", pos: "noun", gender: "f", icon: "🔌", exampleHr: "Struja je skupa.", exampleEn: "Electricity is expensive." },
    { id: "b1u20.ugasiti", hr: "ugasiti", en: "to turn off / switch off (pf ugasim · impf gasiti, gasim)", pos: "verb", icon: "🎚️", exampleHr: "Treba ugasiti struju.", exampleEn: "One should turn the power off." },
    { id: "b1u20.trositi", hr: "trošiti", en: "to spend / use up (impf trošim · pf potrošiti, potrošim)", pos: "verb", icon: "📉", exampleHr: "Ne treba trošiti vodu.", exampleEn: "One shouldn't waste water." },
    { id: "b1u20.smanjiti", hr: "smanjiti", en: "to reduce (pf smanjim · impf smanjivati, smanjujem)", pos: "verb", icon: "🔽", exampleHr: "Trebalo bi smanjiti otpad.", exampleEn: "Waste ought to be reduced." },
    { id: "b1u20.koristan", hr: "koristan", en: "useful (korisna, korisno; definite korisni) — the exact opposite of štetan", pos: "adj", icon: "👍", exampleHr: "Recikliranje je korisno.", exampleEn: "Recycling is useful." },
    { id: "b1u20.vrecica", hr: "vrećica", en: "plastic bag / small bag (f)", pos: "noun", gender: "f", icon: "🛍️", exampleHr: "Ne treba kupovati vrećice.", exampleEn: "One shouldn't buy bags." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Što možemo učiniti?",
      subtitle: "You have known this verb since A2 and you have been using half of it. Today you get the other half — and it is the half that gives advice.",
      emoji: "🔋",
      items: [
        { emoji: "🚪", label: "Two doors", hint: "a noun, or an infinitive" },
        { emoji: "🧊", label: "treba, frozen", hint: "impersonal — with NO se" },
        { emoji: "🕊️", label: "Trebalo bi…", hint: "the softest demand there is" },
        { emoji: "💧", label: "New words", hint: "štedjeti, struja, smanjiti…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Look at what comes after it",
      subtitle: "«Trebam pomoć» and «Treba pomoći» are the same verb and different sentences. One word decides which: the one that follows.",
      emoji: "🚪",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "the freeze, the frames, morati" },
        { emoji: "🃏", label: "New words", hint: "the saving eight" },
        { emoji: "⚙️", label: "The fork", hint: "noun → personal · inf → frozen" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: three things from this week",
      items: [
        {
          prompt: "L2: »Ovdje se ne ___ bacati staklo.« (glass must not be thrown here)",
          options: ["smije", "smiju", "smijem"],
          correctIndex: 0,
          explanation: "Frozen 3sg + se + infinitive. Today's construction looks a lot like this one — with one important difference you are about to meet.",
        },
        {
          prompt: "L3: »___ se da je plastika štetna.« (it is KNOWN that…)",
          options: ["Zna", "Znaju", "Znalo"],
          correctIndex: 0,
          explanation: "Zna se — frozen, ownerless. Nobody is doing the knowing.",
        },
        {
          prompt: "A2 U11: »___ ići.« (I have to go — a hard obligation, and it is MY obligation)",
          options: ["Moram", "Mora", "Moralo"],
          correctIndex: 0,
          explanation: "Moram — morati agrees with the person, because the obligation belongs to somebody. Keep that beside today's verb.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The saving eight",
      vocabIds: [
        "b1u20.stedjeti", "b1u20.energija", "b1u20.struja", "b1u20.ugasiti",
        "b1u20.trositi", "b1u20.smanjiti", "b1u20.koristan", "b1u20.vrecica",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "One verb, two doors 🚪",
      body:
        "You have been using `trebati` since A2 — and only one of its two ways.\n\n**Door 1 · a NOUN follows → the personal one, «to need».** The person is the subject, the verb agrees with them, and the thing needed goes in the **accusative**:\n\n*Ja **trebam** pomoć.* — I need help.\n*Ti **trebaš** odmor.* — You need a rest.\n*Mi **trebamo** novu kantu.* — We need a new bin.\n\n**Door 2 · an INFINITIVE follows → the impersonal one, «one should».** No subject at all, the verb **frozen in the 3sg**, exactly like L2:\n\n***Treba** štedjeti energiju.* — One should save energy. / Energy should be saved.\n***Treba** odvojiti staklo od papira.* — Glass should be separated from paper.\n*Ne **treba** trošiti vodu.* — Water shouldn't be wasted.\n\nSo the question is never «what do I mean?» — it is **«what word comes next?»** A noun sends you through door 1. An infinitive sends you through door 2.\n\n⚠️ **And here is the trap this lesson exists for.** Door 2 is impersonal, and you have spent three lessons making impersonal sentences with `se`. This one has **no `se`**:\n\n*Treba štedjeti energiju.* ✅  ~~*Treba **se** štedjeti energiju.*~~ ❌\n\nThere is nothing to add. `treba` is already impersonal all by itself.",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "a NOUN follows", rule: "personal — trebam / trebaš / treba / trebamo + ACC", example: "Trebam pomoć. · Trebamo novu kantu." },
          { label: "an INFINITIVE follows", rule: "impersonal — treba, frozen 3sg, NO se", example: "Treba štedjeti energiju." },
          { label: "an INFINITIVE, but softer", rule: "trebalo bi, frozen NEUTER conditional, NO se", example: "Trebalo bi smanjiti otpad." },
        ],
      },
      ttsChips: ["Trebam pomoć.", "Treba štedjeti energiju.", "Trebalo bi smanjiti otpad."],
    },
    {
      id: "s06",
      type: "teach",
      title: "Trebalo bi… — the softest demand in Croatian 🕊️",
      body:
        "There is a third form, and for writing it is the most useful of the three.\n\nTake Unit 18's conditional, put it in the **neuter singular** — exactly what L2's impersonal past did — and add an infinitive:\n\n***Trebalo bi** nešto napraviti.* — Something ought to be done.\n***Trebalo bi** smanjiti otpad.* — Waste ought to be reduced.\n***Trebalo bi** štedjeti struju.* — Electricity ought to be saved.\n\nNot *trebao bih*, not *trebala bi* — **trebalo bi**, frozen, always. There is no subject, so there is no gender to agree with, and the neuter is what Croatian falls back on. You saw the same thing yesterday in *prije se **živjelo** dobro*.\n\n**Why it is worth its weight:** it makes a demand without making anybody responsible for it. That is the register of every polite recommendation, every piece of written advice, and — usefully — the writing task at the end of this unit.\n\n### The ladder\n\nSet against the modals you already own, the three forms make a clean strength ladder. Same sentence, four pressures:",
      table: {
        caption: "One sentence, four levels of pressure",
        headers: ["oblik", "rečenica", "how it lands"],
        rows: [
          ["**mora se** + inf", "Mora se štedjeti energija.", "hardest — it is required"],
          ["**treba** + inf", "Treba štedjeti energiju.", "a plain, ownerless should"],
          ["**trebalo bi** + inf", "Trebalo bi štedjeti energiju.", "softest — one really ought to"],
          ["**moram** + inf", "Moram štedjeti energiju.", "hard, and it is MY obligation"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "No `se` after treba",
        text: "Treba štedjeti energiju ✅ · Trebalo bi smanjiti otpad ✅ — never *treba se*, never *trebalo bi se*. This construction is impersonal without being a se-construction, and after three lessons of adding se to everything, this is where almost everyone slips.",
      },
    },
    {
      id: "s07",
      type: "example",
      title: "Advice, and things people need",
      items: [
        { hr: "Trebam pomoć.", en: "I need help.", note: "Noun follows → personal, and pomoć is accusative." },
        { hr: "Trebamo novu kantu.", en: "We need a new bin.", note: "Personal again — the verb agrees with mi." },
        { hr: "Treba štedjeti energiju.", en: "Energy should be saved.", note: "Infinitive follows → frozen treba, no subject, NO se." },
        { hr: "Treba odvojiti staklo od papira.", en: "Glass should be separated from paper.", note: "od + GEN." },
        { hr: "Ne treba trošiti vodu.", en: "Water shouldn't be wasted.", note: "Negation sits on treba, not on the infinitive." },
        { hr: "Treba ugasiti struju.", en: "The power should be turned off.", note: "Perfective infinitive — one specific act." },
        { hr: "Trebalo bi smanjiti otpad.", en: "Waste ought to be reduced.", note: "Neuter conditional, frozen. Not trebao bih." },
        { hr: "Trebalo bi nešto napraviti.", en: "Something ought to be done.", note: "The single most useful sentence in this lesson for the writing task." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Which door?",
      subtitle: "Noun or infinitive — decide by the next word, never by the meaning. And watch for the se that wants to sneak in.",
      emoji: "🚪",
      items: [
        { emoji: "✅", label: "Quick check", hint: "trebam or treba?" },
        { emoji: "🕊️", label: "Soften it", hint: "mora se → trebalo bi" },
        { emoji: "🔊", label: "Listen", hint: "advice with nobody's name on it" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: which door?",
      items: [
        {
          prompt: "»___ pomoć.« (I need help)",
          options: ["Trebam", "Treba", "Trebalo bi"],
          correctIndex: 0,
          explanation: "A noun follows, so it is the personal one and it agrees with me: Trebam. And pomoć is accusative.",
        },
        {
          prompt: "»___ štedjeti energiju.« (one should save energy)",
          options: ["Treba", "Trebam", "Treba se"],
          correctIndex: 0,
          explanation: "An infinitive follows, so it is the frozen impersonal one — and it takes NO se. «Treba se» is the trap this lesson exists for.",
        },
        {
          prompt: "»___ smanjiti otpad.« (waste ought to be reduced — the soft one)",
          options: ["Trebalo bi", "Trebao bih", "Trebala bi"],
          correctIndex: 0,
          explanation: "Neuter singular, frozen: Trebalo bi. There is no subject, so there is no gender to agree with.",
        },
        {
          prompt: "Which sentence is wrong?",
          options: [
            "Treba se štedjeti energiju.",
            "Treba štedjeti energiju.",
            "Trebalo bi štedjeti energiju.",
          ],
          correctIndex: 0,
          explanation: "`treba` is impersonal on its own — there is nothing for a `se` to do, and no slot for it. The other two are both fine.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each sentence to how hard it pushes",
      pairs: [
        { a: "Mora se štedjeti energija.", b: "hardest — it is required" },
        { a: "Treba štedjeti energiju.", b: "a plain, ownerless «should»" },
        { a: "Trebalo bi štedjeti energiju.", b: "softest — one really ought to" },
        { a: "Moram štedjeti energiju.", b: "hard, and the obligation is mine" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "___ štedjeti vodu.",
      blanks: [["Treba"]],
      translation: "Water should be saved.",
      wordBank: ["Treba", "Trebam", "Treba se"],
      explanation: "An infinitive follows → the frozen impersonal one. And no `se`: treba is already impersonal by itself.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___ novu kantu.",
      blanks: [["Trebamo"]],
      translation: "We need a new bin.",
      wordBank: ["Trebamo", "Treba", "Trebalo bi"],
      explanation: "A noun follows → the personal one, agreeing with mi. kantu is accusative.",
    },
    {
      id: "s13",
      type: "fill",
      text: "___ ___ nešto napraviti.",
      blanks: [["Trebalo"], ["bi"]],
      translation: "Something ought to be done.",
      explanation: "Trebalo bi — neuter singular conditional, frozen. No subject means no gender.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Soften it: »Mora se smanjiti otpad.« → (waste OUGHT to be reduced)",
      answers: ["Trebalo bi smanjiti otpad.", "Trebalo bi smanjiti otpad"],
      hint: "Neuter conditional, and drop the `se` — this construction doesn't take one.",
      explanation: "Trebalo bi smanjiti otpad. The `se` from «mora se» has nowhere to go: `trebalo bi` is impersonal all on its own.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Say it two ways: «I need help» and «one should help».",
      answers: [
        "Trebam pomoć. Treba pomoći.",
        "Trebam pomoć, treba pomoći.",
        "Trebam pomoć. Treba pomoći",
      ],
      hint: "One takes a noun in the accusative, the other takes an infinitive.",
      explanation: "Trebam pomoć. ‖ Treba pomoći. Same verb, and the word after it decides everything: a noun makes it personal, an infinitive makes it frozen.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Treba štedjeti energiju.",
      answers: ["Treba štedjeti energiju.", "Treba štedjeti energiju", "Treba stedjeti energiju."],
      allowSlow: true,
      explanation: "Frozen treba, infinitive after it, no `se` anywhere.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Trebalo bi nešto napraviti.",
      answers: ["Trebalo bi nešto napraviti.", "Trebalo bi nešto napraviti", "Trebalo bi nesto napraviti."],
      allowSlow: true,
      explanation: "Neuter conditional — the softest way in Croatian to say something must change.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Trebalo bi smanjiti otpad.",
      targetEn: "Waste ought to be reduced.",
      phonetic: "tre-BA-lo bee SMAN-yee-tee OT-pad",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "U18 review: why is it »trebalo bi« and never »trebao bih«?",
      options: [
        "there is no subject, so there is no gender — the neuter is the fallback",
        "because bih is only used in questions",
        "because trebati has no masculine participle",
      ],
      correctIndex: 0,
      explanation: "No subject → no gender → neuter. Exactly the same reason «Prije se živjelo dobro» is neuter. «Trebao bih» is a real sentence, but it means «I ought to», with you in it.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "L1 review: »Ovdje se ___ vrećice.« (bags are used here — koristiti… careful, use trošiti)",
      options: ["troše", "troši", "trošimo"],
      correctIndex: 0,
      explanation: "vrećice is the plural subject of a se-passive, so the verb goes plural: troše. Three lessons on, the agreement rule is still the one doing the work.",
      tts: "Ovdje se troše vrećice.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**One verb, and the word after it decides everything.**\n\n- **A NOUN follows** → personal *trebam / trebaš / trebamo* + **accusative**. *Trebam pomoć.*\n- **An INFINITIVE follows** → impersonal *treba*, **frozen 3sg**, no subject. *Treba štedjeti energiju.*\n- **Softer still** → *trebalo bi* + infinitive, the **neuter** conditional, frozen. *Trebalo bi smanjiti otpad.*\n\n⚠️ **No `se` after treba.** This is the one impersonal construction in the unit that isn't a se-construction, and after three lessons of adding `se` to everything, it is where almost everybody slips. ~~*Treba se štedjeti*~~ ❌\n\n**The ladder:** *mora se* (required) → *treba* (should) → *trebalo bi* (ought to). And *moram* sits off to the side — just as hard as *mora se*, but with your name on it.\n\nOne more thing exists and is not yours yet: *trebam ići* — a personal subject with an infinitive. You will hear it constantly. It collapses the two doors you just separated, so leave it alone for now.\n\nTomorrow: all four constructions in one place, and a paragraph to write.",
      vocabIds: [
        "b1u20.stedjeti", "b1u20.energija", "b1u20.struja", "b1u20.ugasiti",
        "b1u20.trositi", "b1u20.smanjiti", "b1u20.koristan", "b1u20.vrecica",
      ],
    },
  ],
  srsCloze: [
    { front: "___ štedjeti energiju. (one should — impersonal)", answers: ["Treba", "treba"], back: "Treba — an infinitive follows, so the frozen impersonal one. And NO se.", tts: "Treba štedjeti energiju." },
    { front: "___ pomoć. (I need)", answers: ["Trebam", "trebam"], back: "Trebam — a noun follows, so the personal one, and pomoć is accusative.", tts: "Trebam pomoć." },
    { front: "___ ___ smanjiti otpad. (waste ought to be reduced)", answers: ["Trebalo bi", "trebalo bi"], back: "Trebalo bi — neuter singular, frozen. No subject means no gender.", tts: "Trebalo bi smanjiti otpad." },
    { front: "»Treba ___ štedjeti energiju.« — what goes in the gap?", answers: ["nothing", "ništa", "nista", "-"], back: "Nothing. `treba` is impersonal on its own, so there is no slot for a `se` and nothing for it to do: *Treba štedjeti energiju.*", tts: "Treba štedjeti energiju." },
    { front: "What decides between trebam and treba? The ___ that follows.", answers: ["word", "riječ"], back: "The word that follows: a NOUN → personal trebam + ACC · an INFINITIVE → frozen treba.", tts: "Trebam pomoć. Treba pomoći." },
    { front: "to save / conserve = ___", answers: ["štedjeti", "stedjeti", "štedim"], back: "štedjeti (štedim) — of energy, water and money alike.", tts: "Treba štedjeti vodu." },
    { front: "electricity = ___", answers: ["struja"], back: "struja (f) — Struja je skupa.", tts: "Struja je skupa." },
    { front: "to turn off = ___", answers: ["ugasiti", "gasiti"], back: "ugasiti (pf) / gasiti (impf) — Treba ugasiti struju.", tts: "Treba ugasiti struju." },
    { front: "to reduce = ___", answers: ["smanjiti", "smanjivati"], back: "smanjiti (pf) / smanjivati (impf) — Trebalo bi smanjiti otpad.", tts: "Trebalo bi smanjiti otpad." },
    { front: "useful ‖ harmful = ___ ‖ ___", answers: ["koristan, štetan", "koristan, stetan", "koristan štetan"], back: "koristan ‖ štetan — Recikliranje je korisno. Plastika je štetna.", tts: "Recikliranje je korisno." },
  ],
  notes: {
    inOneSentence: {
      en: "Look at the word after trebati: a NOUN makes it personal («Trebam pomoć» — I need), an INFINITIVE makes it frozen and impersonal («Treba štedjeti» — one should) — and the impersonal one never takes a «se».",
      exampleHr: "Trebam pomoć, ali treba štedjeti energiju.",
    },
    deepDive: [
      {
        title: "The fork, and how to take it without thinking",
        body:
          "`trebati` is two constructions wearing one verb, and you have been using only the first.\n\n**Personal — «to need».** The person is the subject, the verb agrees with them, and the thing needed is in the **accusative**:\n\n| | |\n|---|---|\n| ja | **trebam** pomoć |\n| ti | **trebaš** odmor |\n| on/ona | **treba** novu kantu |\n| mi | **trebamo** vrećicu |\n\n**Impersonal — «one should».** Nobody is the subject, the verb is **frozen in the 3sg**, and an **infinitive** follows:\n\n*Treba štedjeti energiju.* · *Treba odvojiti staklo.* · *Ne treba trošiti vodu.*\n\nNotice that *treba* appears in both tables. That is not a problem, because you never have to decide by meaning — **you decide by what comes next**. A noun, and you are in the first construction. An infinitive, and you are in the second. Nothing else can happen.\n\nOne small thing worth catching: in the personal one, the noun is **accusative**, so it changes shape. *pomoć* happens to look the same, but *nova kanta* → *nov**u** kant**u***.",
        table: {
          caption: "The same word, two grammars",
          headers: ["što slijedi", "konstrukcija", "primjer", "prijevod"],
          rows: [
            ["imenica (a noun)", "personal, agrees, + ACC", "Trebam pomoć.", "I need help."],
            ["imenica", "personal, agrees, + ACC", "Trebamo novu kantu.", "We need a new bin."],
            ["infinitiv", "frozen 3sg, no subject", "Treba štedjeti energiju.", "One should save energy."],
            ["infinitiv", "frozen NEUTER conditional", "Trebalo bi smanjiti otpad.", "Waste ought to be reduced."],
          ],
        },
      },
      {
        title: "No `se`. None. — the unit's most predictable error",
        body:
          "For three lessons every impersonal sentence you have written has had a `se` in it. *Ovdje se ne baca smeće.* *Kaže se da…* *Kako se živi…* The reflex is now installed, and this lesson is where it fires wrongly.\n\n***Treba* is impersonal all by itself.** There is no `se`, no slot for one, and nothing for one to do:\n\n*Treba štedjeti energiju.* ✅  ~~*Treba **se** štedjeti energiju.*~~ ❌\n*Trebalo bi smanjiti otpad.* ✅  ~~*Trebalo bi **se** smanjiti otpad.*~~ ❌\n\nIt helps to see *why* the two are different. In *ovdje se ne baca smeće*, the `se` is what makes the sentence ownerless — take it away and *ovdje ne baca smeće* is broken. In *treba štedjeti energiju*, the ownerlessness is already carried by *treba* itself, which simply has no person in it. Adding `se` would be adding a second, redundant marker.\n\nCompare the two side by side once and the difference tends to stick:\n\n*Ne smije **se** bacati staklo.* — modal + `se` + infinitive → `se` is doing the work\n*Ne treba bacati staklo.* — treba + infinitive → *treba* is doing the work",
        diagram: {
          kind: "contrast",
          left: {
            title: "SA se — modali",
            emoji: "🔁",
            lines: [
              { hr: "Ne smije se bacati staklo.", en: "Glass must not be thrown." },
              { hr: "Mora se odvojiti otpad.", en: "Waste has to be sorted." },
              { hr: "Kako se može doći?", en: "How can one get there?" },
            ],
          },
          right: {
            title: "BEZ se — trebati",
            emoji: "🚫",
            lines: [
              { hr: "Treba štedjeti energiju.", en: "Energy should be saved." },
              { hr: "Ne treba trošiti vodu.", en: "Water shouldn't be wasted." },
              { hr: "Trebalo bi smanjiti otpad.", en: "Waste ought to be reduced." },
            ],
          },
        },
      },
      {
        title: "Trebalo bi — the neuter conditional",
        body:
          "Unit 18 gave you the conditional and made it agree with people: *ja bih **radio***, *ona bi **radila***. Put it in an impersonal sentence and the same thing happens as in L2's impersonal past — there is nobody to agree with, so it falls back on the **neuter singular** and stays there:\n\n***Trebalo bi** nešto napraviti.* · ***Trebalo bi** štedjeti struju.*\n\nNever *trebao bih*, never *trebala bi* — unless you actually mean **you**, in which case you have left this construction: *Trebao bih štedjeti* means *I ought to save*, with your name firmly on it.\n\n**What it is for.** *Trebalo bi* makes a demand without making anybody responsible for it, which is the register of nearly all written advice. It is a shade softer than *treba*, which is itself softer than *mora se*, and in a piece of writing it is usually the right choice — it recommends rather than instructs.\n\nFor the unit's writing task, one *trebalo bi* sentence is worth having ready.",
      },
      {
        title: "One thing that exists and is not yours yet",
        body:
          "You will hear *trebam ići* — a personal subject with an **infinitive** — constantly, from everybody.\n\nIt is genuinely common in speech. It is also a collapse of the two doors this lesson just separated, and at B1 it will cost you the distinction you have only just built. The recommendation is simply: **recognize it, do not produce it.**\n\nIf you mean *I need something*, use a noun: *Trebam odmor.*\nIf you mean *one should do something*, use the frozen form: *Treba raditi.*\nIf you mean *I ought to do something*, Croatian already gave you the tool in Unit 18: *Trebao bih štedjeti.* / *Moram štedjeti.*\n\nThere is also a regional *treba da radimo* («we should work»), built with a `da`-clause instead of an infinitive. Same advice: you will meet it, especially further east; it is not what this course teaches.",
      },
    ],
    commonMistakes: [
      { wrong: "Treba se štedjeti energiju.", right: "Treba štedjeti energiju.", why: "The most predictable error in the whole unit. `treba` is impersonal on its own — there is no slot for a `se` and nothing for it to do. Three lessons of adding `se` trained the wrong reflex." },
      { wrong: "Trebam štedjeti energiju.", right: "**Treba** štedjeti energiju.", why: "An infinitive follows, so it is the impersonal door. The personal one takes a noun." },
      { wrong: "Trebam pomoći.", right: "Trebam **pomoć**.", why: "The personal construction takes a noun in the accusative, not an infinitive." },
      { wrong: "Trebalo bih nešto napraviti.", right: "**Trebalo bi** nešto napraviti.", why: "Frozen neuter — the conditional has nobody to agree with here. *Trebao bih* is a real sentence, but it means «I ought to»." },
      { wrong: "Treba da štedimo energiju.", right: "**Treba štedjeti** energiju.", why: "A real regional variant, not the standard this course teaches. The infinitive is the form to produce." },
      { wrong: "Trebalo bi se smanjiti otpad.", right: "Trebalo bi smanjiti otpad.", why: "Same trap one form along — *trebalo bi* is impersonal without help too." },
    ],
    memoryHooks: [
      "**Don't decide by meaning — look at the next word.** Noun → *trebam* + ACC. Infinitive → frozen *treba*. There is no third possibility.",
      "**`treba` doesn't need a `se` because it doesn't need anybody.** The impersonality is already inside the word.",
      "**Nobody, so neuter — twice this week.** *Prije se **živjelo** dobro.* · ***Trebalo** bi nešto napraviti.* Same reason both times.",
      "**The ladder: mora se → treba → trebalo bi.** Hardest to softest. For writing, *trebalo bi* is almost always the one you want.",
      "**«Trebam ići» is the one to recognize and not say.** It is everywhere in speech and it undoes the fork you just learned.",
    ],
    connects: [
      { label: "The impersonal se — the freeze this echoes", lessonId: "b1u20l2" },
      { label: "morati / smjeti / moći — the modals on the ladder", lessonId: "a2u11l2" },
      { label: "The conditional, where trebalo bi comes from", lessonId: "b1u18l1" },
      { label: "Next: all four constructions, and a paragraph", lessonId: "b1u20l5" },
    ],
    selfCheck: [
      { q: "»___ štedjeti energiju.« (one should)", a: "Treba — an infinitive follows, so the frozen impersonal one. And no se." },
      { q: "Why is »Treba se štedjeti energiju« wrong?", a: "treba is already impersonal by itself. There is no slot for a se and nothing for it to do." },
      { q: "»___ novu kantu.« (we need)", a: "Trebamo — a noun follows, so the personal one, agreeing with mi. And kantu is accusative." },
      { q: "Why is it always »trebalo bi« and never »trebala bi«?", a: "There is no subject, so there is no gender to agree with. Croatian falls back on the neuter — exactly as it does in «prije se živjelo dobro»." },
      { q: "Order these by how hard they push: treba · trebalo bi · mora se.", a: "mora se (required) → treba (should) → trebalo bi (ought to, softest)." },
    ],
  },
};
