import type { Lesson } from "@/types/content";

/**
 * B1 U22 L3 — Ako budeš učio… (čim · dok / dok ne · the ako split)
 * Spec: curriculum/B1/unit-22.md · grammar-reference §20 "Futur II and time
 * clauses" + §19 (the `ako` ≠ question rule) + §11 aspect.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Three more conjunctions, all obeying L2's rule without exception, and one of
 * them with a quirk that has no English counterpart at all.
 *
 * Four installs:
 *   ① **čim** = as soon as. Behaves exactly like `kad`, and is almost always
 *      followed by a perfective present, because «as soon as» is by nature a
 *      completed trigger. New word, no new rule.
 *   ② **dok** = while — the unit's natural home for Futur II, because a
 *      «while» is by nature a stretch and stretches are imperfective.
 *   ③ **dok ne** = until, **and the `ne` means nothing.** There is no negation
 *      in the English and none in the meaning. The contrast with bare `dok` is
 *      the lesson's sharpest item: *Čekat ću dok dođeš* means *I'll wait WHILE
 *      you come*, which nobody wants to say. And `dok ne` takes a perfective
 *      present, because «until» points at a completed arrival.
 *   ④ **ako ‖ kad, decided on certainty alone.** *Ako bude kiše* (it may not
 *      rain) ‖ *Kad budeš imao vremena* (you will have time, we just don't know
 *      when). English blurs this constantly; Croatian does not.
 *
 * ⚠️ And the U21 callback: **`ako` still cannot carry a question.** \*Pitao me
 * ako imam vremena ❌ → *Pitao me imam li vremena* ✅. This unit is the second
 * half of that pair — U21 taught what `ako` cannot do, and U22 teaches what it
 * does instead.
 *
 * SPEC CORRECTION APPLIED — one, forced:
 *  • The spec's natural long-`dok` example is «dok Marko **bude stizao**», and
 *    **`stizati` has zero occurrences** in the course — the imperfective of
 *    *stići* simply does not exist here. Every long `dok` in the unit is
 *    therefore built on **čekati** or **razgledati**, both carded, both
 *    imperfective, and both far more useful: *Dok budemo čekali Marka,
 *    razgledat ćemo tvrđavu.*
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and routed around: stizati (0), petnaesti (0 → the
 * carded ordinals stop at *deseti*), vrh / kraljica / natpis / stube (held back
 * — they are the STORY's glossed words and must not appear in a lesson before
 * the story introduces them), comparatives and superlatives (B2), the
 * participial passive (B2), nitko, naći, točno, sjediti, stajati, kasniti,
 * gore / dolje / ovamo, zid (all 0 or previously rejected). Deferred by unit:
 * no biography framing (L4), no licensed Futur I (L5 — the exception is taught
 * LAST, after four lessons of the ban), no -nje (U23), no full clitic cluster
 * (U23).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U22 cut-outs exist (čim and drevni stay
 * icon-only — there is nothing to draw).
 */
export const b1u22l3: Lesson = {
  id: "b1u22l3",
  unitId: "b1u22",
  title: "Ako budeš učio…",
  titleEn: "If you study… — čim, dok / dok ne, and the ako split",
  grammarTags: ["futur-2", "time-clause", "cim", "dok-ne", "ako"],
  estMinutes: 22,
  vocab: [
    { id: "b1u22.cim", hr: "čim", en: "as soon as (conj) — behaves exactly like kad, and nearly always takes a perfective present", pos: "conj", icon: "⚡", exampleHr: "Čim stignem, javit ću ti.", exampleEn: "As soon as I arrive, I'll call you." },
    { id: "b1u22.pripremitise", hr: "pripremiti se", en: "to get ready (pf pripremim se)", pos: "verb", icon: "🎒", exampleHr: "Kad se budem pripremio, javit ću ti.", exampleEn: "When I've got ready, I'll let you know." },
    { id: "b1u22.propustiti", hr: "propustiti", en: "to miss / let slip (pf propustim)", pos: "verb", icon: "🚪", exampleHr: "Ako propustim vlak, doći ću drugi put.", exampleEn: "If I miss the train, I'll come another time." },
    { id: "b1u22.ruta", hr: "ruta", en: "a route (f)", pos: "noun", gender: "f", icon: "🗺️", exampleHr: "Ovo je moja ruta.", exampleEn: "This is my route." },
    { id: "b1u22.posjet", hr: "posjet", en: "a visit (m) — ići u posjet + DAT", pos: "noun", gender: "m", icon: "🚶", exampleHr: "Idemo u posjet baki.", exampleEn: "We're going to visit grandma." },
    { id: "b1u22.odmoritise", hr: "odmoriti se", en: "to rest (pf odmorim se)", pos: "verb", icon: "🛋️", exampleHr: "Čim se odmorim, idemo u muzej.", exampleEn: "As soon as I've rested, we'll go to the museum." },
    { id: "b1u22.znamenitost", hr: "znamenitost", en: "a sight, a landmark (f, i-declension; pl znamenitosti)", pos: "noun", gender: "f", icon: "📍", exampleHr: "Grad ima puno znamenitosti.", exampleEn: "The town has a lot of sights." },
    { id: "b1u22.drevni", hr: "drevni", en: "ancient (drevna, drevno)", pos: "adj", icon: "🏺", exampleHr: "To je drevni grad.", exampleEn: "That's an ancient city." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Ako budeš učio…",
      subtitle: "Three more words, one rule you already have — and one «ne» that translates to nothing at all.",
      emoji: "⚡",
      items: [
        { emoji: "⚡", label: "čim", hint: "as soon as — new word only" },
        { emoji: "⏳", label: "dok", hint: "while — Futur II's home" },
        { emoji: "🛑", label: "dok ne", hint: "until — and the ne means nothing" },
        { emoji: "🎲", label: "ako ‖ kad", hint: "decided on certainty" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Same rule, three more doors",
      subtitle: "Yesterday's ban and yesterday's fork apply to every one of these without exception. What's new is what each word means.",
      emoji: "🚪",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "the ban, the fork, U21's ako" },
        { emoji: "🃏", label: "New words", hint: "the route eight" },
        { emoji: "⚙️", label: "Four conjunctions", hint: "and one quirk" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday, and one thing from Unit 21",
      items: [
        {
          prompt: "L2: »___ , javit ću ti.« (when I arrive)",
          options: ["Kad dođem", "Kad ću doći", "Kad budem doći"],
          correctIndex: 0,
          explanation: "The ban, then the fork: no Futur I in the clause, and doći is perfective so the present goes there.",
        },
        {
          prompt: "L2: »Dok ___ ___ , čitat ću.« (while I wait — čekati, a man)",
          options: ["budem čekao", "čekam", "ću čekati"],
          correctIndex: 0,
          explanation: "čekati is imperfective → Futur II. Today you'll meet the conjunction that makes this shape the normal one.",
        },
        {
          prompt: "U21: »Pitala me ___ imam vremena.«",
          options: ["— (ništa; »imam li vremena«)", "ako", "da"],
          correctIndex: 0,
          explanation: "`li` on the verb. `ako` cannot carry a question — and today you finally get the full picture of what `ako` DOES do.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The route eight",
      vocabIds: [
        "b1u22.cim", "b1u22.pripremitise", "b1u22.propustiti", "b1u22.ruta",
        "b1u22.posjet", "b1u22.odmoritise", "b1u22.znamenitost", "b1u22.drevni",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "čim and dok — no new rule at all ⚡⏳",
      body:
        "### **čim** = as soon as\n\nIt behaves **exactly** like `kad`. The ban applies, the fork applies, nothing is different:\n\n*Čim **stignem**, kupit ću ulaznicu.*\n*Čim se **odmorim**, idemo u muzej.*\n*Čim **razgledamo** dvorac, idemo u kulu.*\n\nAnd it is **almost always followed by a perfective present**, because *as soon as* is by nature a **completed trigger** — you cannot say *as soon as I am in the middle of arriving*. So *čim* is the easy one: perfective, present, done.\n\n### **dok** = while\n\nThe mirror image, and the unit's natural home for **Futur II** — because a *while* is by nature a **stretch**, and stretches are imperfective:\n\n*Dok **budem čekao**, razgledat ću tvrđavu.*\n*Dok **budemo čekali** Marka, razgledat ćemo grad.*\n*Dok **budeš razgledao** znamenitosti, ja ću se odmoriti.*\n\nSo the two words tend to pull in opposite directions, and it is not a coincidence:\n\n| veznik | što znači | što obično traži | zašto |\n|---|---|---|---|\n| **čim** | as soon as | **prezent, svršeno** | a trigger is a moment |\n| **dok** | while | **Futur II, nesvršeno** | a «while» is a stretch |\n\nThat is a tendency, not a law — the **aspect of the actual verb** still decides. But it is a good sanity check: if you find yourself writing *čim budem…*, look twice.",
      diagram: {
        kind: "contrast",
        left: {
          title: "čim — jedan trenutak",
          emoji: "⚡",
          lines: [
            { hr: "Čim stignem, kupit ću ulaznicu.", en: "As soon as I arrive, I'll buy a ticket." },
            { hr: "Čim se odmorim, idemo u muzej.", en: "As soon as I've rested, we'll go to the museum." },
            { hr: "→ prezent, svršeno", en: "a trigger is a moment" },
          ],
        },
        right: {
          title: "dok — cijelo vrijeme",
          emoji: "⏳",
          lines: [
            { hr: "Dok budem čekao, razgledat ću grad.", en: "While I wait, I'll look round the town." },
            { hr: "Dok budemo čekali, čitat ćemo.", en: "While we wait, we'll read." },
            { hr: "→ Futur II, nesvršeno", en: "a «while» is a stretch" },
          ],
        },
      },
      ttsChips: ["Čim stignem, javit ću ti.", "Dok budem čekao, razgledat ću tvrđavu."],
    },
    {
      id: "s06",
      type: "teach",
      title: "🛑 **dok ne** — and the `ne` means nothing",
      body:
        "This one has no English counterpart and it surprises everybody.\n\n***dok ne*** **= until.** And the `ne` in it is **not a negation**. There is no *not* in the English, and there is no *not* in the meaning:\n\n*Čekat ću **dok ne dođeš**.* — **I'll wait until you come.**\n\nNot *«until you don't come»*. Not *«as long as you don't come»*. Just **until you come**. The `ne` is simply part of how Croatian builds the word *until*, and the cleanest thing you can do is stop translating it and learn **`dok ne`** as one item.\n\n### Why it matters: bare `dok` means something else entirely\n\n| rečenica | što znači |\n|---|---|\n| *Čekat ću **dok ne dođeš**.* | I'll wait **until** you come. ✅ |\n| *Čekat ću **dok dođeš**.* | I'll wait **while** you come. — a real sentence nobody wants |\n\nThat second one is grammatical and simply useless: it says you will wait during the process of somebody's arrival. It is the sharpest contrast in the unit and the fastest way to feel what `dok ne` is for.\n\n### And it takes a perfective present\n\n*Čekat ću dok ne **dođeš**.* · *Neću otići dok ne **vidim** more.* · *Ostat ćemo dok ne **razgledamo** sve.*\n\nThat follows from the meaning: *until* points at a **completed** arrival, so the verb is perfective — and a perfective in a time clause takes the present. Yesterday's fork, still running.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The `ne` that translates to nothing",
        text: "dok ne = until. There is no negation in it — not in the English, not in the meaning. Learn «dok ne» as one word, and remember that bare «dok» means «while», which is a completely different sentence.",
      },
      table: {
        caption: "Four conjunctions, and what each one wants",
        headers: ["veznik", "engleski", "obično traži", "primjer"],
        rows: [
          ["**kad**", "when", "prezent (svršeno) / Futur II", "Kad dođem, javit ću ti."],
          ["**čim**", "as soon as", "**prezent, svršeno**", "Čim stignem, kupit ću ulaznicu."],
          ["**dok**", "while", "**Futur II, nesvršeno**", "Dok budem čekao, čitat ću."],
          ["**dok ne**", "until", "**prezent, svršeno** + a `ne` that means nothing", "Čekat ću dok ne dođeš."],
        ],
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "🎲 **ako** or **kad** — decided on certainty alone",
      body:
        "Both take exactly the same forms — the ban applies, the fork applies. What separates them is **whether the thing is going to happen.**\n\n**`ako` = if it happens. It might not.**\n*Ako **bude kiše**, nećemo ići na vrh.* — it may not rain\n*Ako **propustim** vlak, doći ću drugi put.* — I may not miss it\n\n**`kad` = when it happens. It will; we just don't know when.**\n*Kad **budeš imao** vremena, javi mi.* — you will have time\n*Kad **dođem** u Hrvatsku, putovat ću tjedan dana.* — I am going\n\nEnglish blurs this constantly — *«when I get round to it»* and *«if I get round to it»* are used almost interchangeably — and Croatian does not. Choosing `ako` where `kad` belongs quietly tells your listener you are not sure the thing will happen at all, which is sometimes exactly the wrong message.\n\n> **Ask yourself: is this going to happen, or might it?**\n\n⚠️ **And one thing `ako` still cannot do**, unchanged since Unit 21: **carry a question.**\n\n~~*Pitao me **ako** imam vremena.*~~ ❌ → *Pitao me **imam li** vremena.* ✅\n\nSo `ako` has exactly one job — the condition — and it does it in every tense the unit teaches. Unit 21 told you what it is not for; this lesson is the other half of the pair.",
      diagram: {
        kind: "contrast",
        left: {
          title: "ako — možda se dogodi",
          emoji: "🎲",
          lines: [
            { hr: "Ako bude kiše, nećemo ići.", en: "If it rains, we won't go." },
            { hr: "Ako propustim vlak, doći ću drugi put.", en: "If I miss the train, I'll come another time." },
          ],
        },
        right: {
          title: "kad — sigurno se dogodi",
          emoji: "📅",
          lines: [
            { hr: "Kad budeš imao vremena, javi mi.", en: "When you have time, let me know." },
            { hr: "Kad dođem u Hrvatsku, putovat ću.", en: "When I get to Croatia, I'll travel." },
          ],
        },
      },
    },
    {
      id: "s08",
      type: "example",
      title: "A route, planned",
      items: [
        { hr: "Čim stignem, javit ću ti.", en: "As soon as I arrive, I'll call you.", note: "čim + perfective present. The easy one." },
        { hr: "Čim se odmorim, idemo u muzej.", en: "As soon as I've rested, we'll go to the museum.", note: "odmoriti se — perfective, and the `se` stays right after čim." },
        { hr: "Dok budem čekao, razgledat ću znamenitosti.", en: "While I wait, I'll see the sights.", note: "dok + Futur II. čekati is imperfective." },
        { hr: "Čekat ću dok ne dođeš.", en: "I'll wait until you come.", note: "dok ne = until. The `ne` is not a negation." },
        { hr: "Neću otići dok ne vidim more.", en: "I won't leave until I've seen the sea.", note: "Two negatives in the English, only one meaning them in Croatian." },
        { hr: "Ako bude kiše, nećemo ići na kulu.", en: "If it rains, we won't go up the tower.", note: "ako — it might not rain." },
        { hr: "Ako budeš imao vremena, posjeti drevni grad.", en: "If you have time, visit the ancient city.", note: "imati is imperfective → Futur II, even after ako." },
        { hr: "Kad se budem pripremio, javit ću ti.", en: "When I've got ready, I'll let you know.", note: "pripremiti se is perfective, so this is the heavy-but-legal option — «kad se pripremim» is lighter." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Meaning, then form",
      subtitle: "Two questions per item: which conjunction does this actually mean, and then what does that conjunction want?",
      emoji: "🎲",
      items: [
        { emoji: "✅", label: "Quick check", hint: "dok ‖ dok ne, ako ‖ kad" },
        { emoji: "🔤", label: "Build them", hint: "plan a route" },
        { emoji: "🔊", label: "Listen", hint: "until, and while" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: which word, which form?",
      items: [
        {
          prompt: "»Čekat ću ___ dođeš.« (I'll wait UNTIL you come)",
          options: ["dok ne", "dok", "čim"],
          correctIndex: 0,
          explanation: "dok ne = until, and the `ne` means nothing at all. «Dok dođeš» would mean «while you come», which is a real sentence nobody wants.",
        },
        {
          prompt: "»___ , nećemo ići na kulu.« (if it rains — it might not)",
          options: ["Ako bude kiše", "Kad bude kiše", "Čim bude kiše"],
          correctIndex: 0,
          explanation: "ako — the rain may not happen. `kad` would claim it definitely will.",
        },
        {
          prompt: "»___ , javi mi.« (when you have time — you will have some)",
          options: ["Kad budeš imao vremena", "Ako budeš imao vremena", "Čim ćeš imati vremena"],
          correctIndex: 0,
          explanation: "kad — you will have time; we just don't know when. And imati is imperfective, so Futur II. Option 3 also breaks the ban.",
        },
        {
          prompt: "»___ stignem, kupit ću ulaznicu.« (as soon as)",
          options: ["Čim", "Dok", "Dok ne"],
          correctIndex: 0,
          explanation: "čim — a completed trigger. «Dok stignem» would mean «while I arrive», and «dok ne stignem» would mean «until I arrive», which is a different plan.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each conjunction to what it means",
      pairs: [
        { a: "čim", b: "as soon as — a completed trigger" },
        { a: "dok", b: "while — a stretch running alongside" },
        { a: "dok ne", b: "until — and the ne means nothing" },
        { a: "ako", b: "if — it might not happen at all" },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "Čim ___ , javit ću ti. (stići, ja)",
      blanks: [["stignem"]],
      translation: "As soon as I arrive, I'll call you.",
      explanation: "stignem — perfective, so the present. čim almost always works this way.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Čekat ću ___ ___ dođeš.",
      blanks: [["dok"], ["ne"]],
      translation: "I'll wait until you come.",
      explanation: "dok ne — until. There is no negation in the meaning; learn the two words as one item.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Dok ___ ___ , ti razgledaj grad. (raditi, ja — muško)",
      blanks: [["budem"], ["radio"]],
      translation: "While I'm working, you go and look round the town.",
      explanation: "budem radio — raditi is imperfective, so Futur II, and the participle agrees with a male speaker.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Ako ___ vlak, doći ću drugi put. (propustiti, ja)",
      blanks: [["propustim"]],
      translation: "If I miss the train, I'll come another time.",
      explanation: "propustim — perfective, so the present, even after ako. And ako is right here because missing it is only a possibility.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Plan it: «While we wait for Marko, we'll see the sights.» (čekati · znamenitosti)",
      answers: [
        "Dok budemo čekali Marka, razgledat ćemo znamenitosti.",
        "Dok budemo čekali Marka, razgledat ćemo znamenitosti",
      ],
      hint: "Waiting is a stretch, and there are several of us.",
      explanation: "Dok budemo čekali Marka, razgledat ćemo znamenitosti. budemo + čekali, and the main clause keeps its Futur I.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "Say it: «I won't leave until I've seen the sea.»",
      answers: [
        "Neću otići dok ne vidim more.",
        "Neću otići dok ne vidim more",
        "Ne idem dok ne vidim more.",
      ],
      hint: "dok ne + a perfective present. The Croatian has only one real negative in it.",
      explanation: "Neću otići dok ne vidim more. English has «won't» and «until»; Croatian has «neću» and a `ne` that is not doing any negating at all.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Čekat ću dok ne dođeš.",
      answers: ["Čekat ću dok ne dođeš.", "Čekat ću dok ne dođeš", "Cekat cu dok ne dodes."],
      allowSlow: true,
      explanation: "Until you come — and he is waiting already.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Čim stignemo, kupit ćemo ulaznice.",
      answers: ["Čim stignemo, kupit ćemo ulaznice.", "Čim stignemo, kupit ćemo ulaznice"],
      allowSlow: true,
      explanation: "čim + perfective present, then Futur I in the main clause.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Ako bude kiše, nećemo ići na kulu.",
      targetEn: "If it rains, we won't go up the tower.",
      phonetic: "A-ko BOO-de KEE-she, NE-tche-mo EE-tchee na KOO-loo",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "U21 review: »Pitao me ___ imam vremena.«",
      options: ["— (ništa; »imam li vremena«)", "ako", "da", "kad"],
      correctIndex: 0,
      explanation: "`li` on the verb. `ako` has exactly one job — the condition — and carrying a question is not it. Unit 21 taught what it can't do; today you saw what it does.",
    },
    {
      id: "s22",
      type: "mc",
      review: true,
      prompt: "L2 review: is »Čim budem stigao, javit ću ti« wrong?",
      options: [
        "No — just heavy. stići is perfective, so «čim stignem» is what people say.",
        "Yes — čim can never take budem.",
        "Yes — čim only takes the past.",
      ],
      correctIndex: 0,
      explanation: "Not wrong, just heavy — the same judgement as «kad budem došao». If you find yourself writing «čim budem», look twice, because čim nearly always wants a perfective present.",
    },
    {
      id: "s23",
      type: "recap",
      summary:
        "**Three more conjunctions, and yesterday's rule applies to every one of them.**\n\n| veznik | znači | obično traži |\n|---|---|---|\n| **kad** | when | prezent (svršeno) / Futur II |\n| **čim** | as soon as | **prezent, svršeno** — a trigger is a moment |\n| **dok** | while | **Futur II, nesvršeno** — a «while» is a stretch |\n| **dok ne** | **until** | **prezent, svršeno** + a `ne` that means nothing |\n\n**🛑 The `ne` in *dok ne* is not a negation.** *Čekat ću **dok ne dođeš*** = I'll wait **until** you come. Bare *dok* means *while*, which is a completely different sentence — *Čekat ću dok dođeš* says you'll wait during somebody's arrival.\n\n**🎲 `ako` or `kad`? Ask whether it's going to happen.**\n*Ako bude kiše…* — it might not. · *Kad budeš imao vremena…* — you will.\n\n⚠️ **And `ako` still cannot carry a question** — U21's rule, unchanged. *Pitao me **imam li** vremena*, never *ako imam*.\n\nTomorrow: the whole system in biography, where a life and a plan turn out to be the same stack of clauses pointed different ways.",
      vocabIds: [
        "b1u22.cim", "b1u22.pripremitise", "b1u22.propustiti", "b1u22.ruta",
        "b1u22.posjet", "b1u22.odmoritise", "b1u22.znamenitost", "b1u22.drevni",
      ],
    },
  ],
  srsCloze: [
    { front: "Čim ___ , javit ću ti. (stići, ja)", answers: ["stignem"], back: "stignem — čim takes a perfective present, because a trigger is a moment.", tts: "Čim stignem, javit ću ti." },
    { front: "Čekat ću ___ ___ dođeš. (until you come)", answers: ["dok ne"], back: "dok ne = until, and the `ne` is not a negation. Learn the two words as one.", tts: "Čekat ću dok ne dođeš." },
    { front: "The `ne` in «dok ne» means ___ .", answers: ["nothing", "ništa", "nista"], back: "Nothing at all. It is part of how Croatian builds «until».", tts: "Čekat ću dok ne dođeš." },
    { front: "«Čekat ću dok dođeš» means ___ (not «until»)", answers: ["while", "dok = while"], back: "«while you come» — a real sentence, and one nobody wants. Bare dok is «while».", tts: "Čekat ću dok ne dođeš." },
    { front: "___ bude kiše, nećemo ići. (if — it might not rain)", answers: ["Ako", "ako"], back: "Ako — the condition may not happen. kad would claim it definitely will.", tts: "Ako bude kiše, nećemo ići." },
    { front: "Dok ___ ___ , ti razgledaj grad. (raditi, ja — muško)", answers: ["budem radio"], back: "budem radio — dok is the natural home of Futur II, because a «while» is a stretch.", tts: "Dok budem radio, ti razgledaj grad." },
    { front: "as soon as = ___", answers: ["čim", "cim"], back: "čim — and it nearly always takes a perfective present.", tts: "Čim stignem, javit ću ti." },
    { front: "to get ready = ___", answers: ["pripremiti se", "pripremitise"], back: "pripremiti se (pf) — Kad se budem pripremio, javit ću ti.", tts: "Kad se budem pripremio, javit ću ti." },
    { front: "to miss / let slip = ___", answers: ["propustiti"], back: "propustiti (pf) — Ako propustim vlak, doći ću drugi put.", tts: "Ako propustim vlak, doći ću drugi put." },
    { front: "a sight / landmark = ___", answers: ["znamenitost"], back: "znamenitost (f, i-declension) — pl znamenitosti.", tts: "Grad ima puno znamenitosti." },
  ],
  notes: {
    inOneSentence: {
      en: "čim, dok and ako all obey yesterday's ban and yesterday's aspect fork — what's new is that čim wants a perfective moment, dok wants an imperfective stretch, «dok ne» means UNTIL with a «ne» that negates nothing, and ako differs from kad only on whether the thing will actually happen.",
      exampleHr: "Čim stignemo, kupit ćemo ulaznice, a dok budemo čekali Marka, razgledat ćemo znamenitosti — ako ne bude kiše.",
    },
    deepDive: [
      {
        title: "čim and dok — the same rule, pulling opposite ways",
        body:
          "Neither word brings a new rule. Yesterday's **ban** applies (no Futur I in the clause) and yesterday's **fork** applies (perfective → present, imperfective → Futur II). What is new is only what each word *means*, and the meanings happen to load the fork differently.\n\n**`čim` = as soon as.** It names a **completed trigger** — the moment something is done. You cannot be *in the middle of* a trigger, so *čim* nearly always takes a **perfective present**:\n\n*Čim **stignem**, kupit ću ulaznicu.* · *Čim se **odmorim**, idemo u muzej.* · *Čim **razgledamo** dvorac, idemo u kulu.*\n\n**`dok` = while.** It names a **stretch** running alongside the main event — so it is the natural home of **Futur II**:\n\n*Dok **budem čekao**, razgledat ću tvrđavu.* · *Dok **budemo čekali** Marka, razgledat ćemo grad.*\n\n**This is a tendency, not a law.** The aspect of the actual verb still decides, and both words can take either form when the meaning requires it. But it makes a good sanity check: **if you catch yourself writing *čim budem…*, look twice** — you are probably reaching for a stretch where a trigger belongs.",
        table: {
          caption: "The pull of each word",
          headers: ["veznik", "znači", "priroda", "obično"],
          rows: [
            ["**čim**", "as soon as", "a moment", "prezent, svršeno"],
            ["**dok**", "while", "a stretch", "Futur II, nesvršeno"],
            ["**kad**", "when", "either", "whichever the verb is"],
            ["**dok ne**", "until", "a moment (the end)", "prezent, svršeno"],
          ],
        },
      },
      {
        title: "🛑 dok ne — the `ne` that translates to nothing",
        body:
          "There is nothing like this in English, so it is worth being blunt about it.\n\n> ***dok ne*** **= until. The `ne` is not a negation.**\n\n*Čekat ću **dok ne dođeš**.* — I'll wait **until** you come.\n\nNot *until you don't come*. Not *as long as you don't come*. Not *unless you come*. Just **until you come**. The `ne` is part of the word, in the same way that the *to* in *to and fro* is not really a preposition. **Learn `dok ne` as a single item and stop translating the pieces.**\n\n**The reason it matters is that bare `dok` is a real word with a real, different meaning:**\n\n| rečenica | što znači | korisno? |\n|---|---|---|\n| *Čekat ću **dok ne dođeš**.* | I'll wait **until** you come. | ✅ what you meant |\n| *Čekat ću **dok dođeš**.* | I'll wait **while** you come. | grammatical, useless |\n\nThe second sentence says you will wait during the process of somebody's arrival — which is a period of a few seconds and not a thing anyone plans. Reading those two side by side is the fastest way to feel what `dok ne` is for.\n\n**And it takes a perfective present**, which follows from the meaning: *until* points at a **completed** arrival.\n\n*Čekat ću dok ne **dođeš**.* · *Neću otići dok ne **vidim** more.* · *Ostat ćemo dok ne **razgledamo** sve.*\n\nOne pleasing side-effect: English sentences of this shape usually have two negatives (*I **won't** leave **until**…*) and Croatian has one real one plus a decorative `ne`: *Neću otići dok ne vidim more.*",
        diagram: {
          kind: "contrast",
          left: {
            title: "dok ne — DO trenutka",
            emoji: "🛑",
            lines: [
              { hr: "Čekat ću dok ne dođeš.", en: "I'll wait UNTIL you come. ✅" },
              { hr: "Neću otići dok ne vidim more.", en: "I won't leave until I've seen the sea. ✅" },
            ],
          },
          right: {
            title: "dok — ZA VRIJEME",
            emoji: "⏳",
            lines: [
              { hr: "Čekat ću dok dođeš.", en: "I'll wait WHILE you come. — nobody wants this" },
              { hr: "Dok budem čekao, čitat ću.", en: "While I wait, I'll read. ✅" },
            ],
          },
        },
      },
      {
        title: "🎲 ako or kad — one question settles it",
        body:
          "Grammatically these two are identical. The ban applies to both, the fork applies to both, and the forms are the same. The difference is entirely about **certainty**.\n\n> **`ako` = if it happens — and it might not.**\n> **`kad` = when it happens — and it will; we just don't know when.**\n\n*Ako **bude kiše**, nećemo ići na vrh.* — the rain is genuinely uncertain\n*Ako **propustim** izložbu, doći ću drugi put.* — I may well catch it\n*Kad **budeš imao** vremena, javi mi.* — you will have time eventually\n*Kad **dođem** u Hrvatsku, putovat ću tjedan dana.* — I'm going\n\nEnglish blurs this constantly. *«Give me a shout if you're free»* and *«…when you're free»* are used almost interchangeably, and the choice carries very little. In Croatian it carries something: choosing `ako` where `kad` belongs quietly signals that you doubt the thing will happen at all, which can be an odd message to send to somebody who has just promised to come.\n\n**The one-question test: is this going to happen, or might it?**\n\n⚠️ **And the thing `ako` cannot do**, unchanged since Unit 21: it cannot **carry a question**.\n\n\\*~~Pitao me **ako** imam vremena.~~ ❌ → *Pitao me **imam li** vremena.* ✅\n\nSo `ako` has exactly one job — the condition — and now you have seen both halves of the picture. Unit 21 told you what it is not; this lesson told you what it is.",
      },
    ],
    commonMistakes: [
      { wrong: "Čekat ću dok dođeš.", right: "Čekat ću **dok ne** dođeš.", why: "Bare `dok` means «while», so that sentence says you'll wait during somebody's arrival. «Until» is `dok ne`, and the `ne` negates nothing." },
      { wrong: "Čekat ću dok ne dođeš. → read as «until you don't come»", right: "«I'll wait **until you come**.»", why: "The `ne` is part of how Croatian builds «until». Learn `dok ne` as one item and stop translating the pieces." },
      { wrong: "Čim ću stići, kupit ću ulaznicu.", right: "**Čim stignem**, kupit ću ulaznicu.", why: "The ban applies to čim exactly as it applies to kad. No Futur I in a time clause, ever." },
      { wrong: "Ako budeš imao vremena, javi mi. (when you're certain they will)", right: "**Kad** budeš imao vremena, javi mi.", why: "`ako` says it might not happen. If you know it will, `kad` is the honest word — and the difference is audible." },
      { wrong: "Dok čekam, razgledat ću grad.", right: "**Dok budem čekao**, razgledat ću grad.", why: "A bare present with an imperfective verb reports something happening now. A future stretch needs Futur II." },
      { wrong: "Pitao me ako imam vremena.", right: "Pitao me **imam li** vremena.", why: "U21's rule, still live. `ako` is the conditional conjunction and cannot carry a question — a Croatian listener waits for a consequence that never comes." },
    ],
    memoryHooks: [
      "**čim is a moment; dok is a stretch.** That is why one pulls the present and the other pulls Futur II — and if you write *čim budem*, look twice.",
      "**`dok ne` is one word.** Stop translating the `ne`. It means «until» and it negates nothing.",
      "**«Dok dođeš» vs «dok ne dođeš»** — «while you arrive» vs «until you arrive». Read them together once and the difference sticks.",
      "**ako or kad? Is it going to happen, or might it?** One question, and it is about the world, not about the grammar.",
      "**English has two negatives, Croatian has one and a decoration.** *I won't leave until I see the sea* → *Neću otići dok ne vidim more.*",
    ],
    connects: [
      { label: "The ban and the aspect fork", lessonId: "b1u22l2" },
      { label: "ako as the conditional — where it started", lessonId: "b1u18l3" },
      { label: "Why ako can't carry a question", lessonId: "b1u21l3" },
      { label: "Next: the system in biography", lessonId: "b1u22l4" },
    ],
    selfCheck: [
      { q: "»Čekat ću ___ dođeš.« (until)", a: "dok ne — and the `ne` means nothing at all." },
      { q: "What does «Čekat ću dok dođeš» actually mean?", a: "«I'll wait while you come» — grammatical, and not a thing anyone plans to say." },
      { q: "»___ , javi mi.« — you know they'll have time eventually.", a: "Kad budeš imao vremena. `ako` would suggest you doubt it will ever happen." },
      { q: "Why does čim nearly always take a perfective present?", a: "Because «as soon as» names a completed trigger, and you can't be in the middle of a trigger." },
      { q: "Can `ako` report a question?", a: "No — that's still U21's rule. «Pitao me imam li vremena», never «ako imam»." },
    ],
  },
};
