import type { Lesson } from "@/types/content";

/**
 * A1 U8 L1 — Bio sam u gradu (Perfekt of biti + the l-participle)
 * Spec: curriculum/A1/unit-8.md · grammar-reference §8 (perfekt), §12 (clitics).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: perfekt = biti-clitic (sam/si/je…) + l-participle of biti
 * (bio/bila/bilo/bili/bile/bila), which agrees like a U3 adjective. Ordinary
 * verbs' participles are L2; the je-drop cluster is L3; weather is L4.
 * "kod kuće" (at home) is used as a glossed fixed chunk (kod + GEN is A2).
 */
export const a1u8l1: Lesson = {
  id: "a1u8l1",
  unitId: "a1u8",
  title: "Bio sam u gradu",
  titleEn: "I was in the city — perfekt of biti",
  grammarTags: ["perfekt", "biti-past", "l-participle"],
  estMinutes: 18,
  vocab: [
    { id: "a1u8.jucer", hr: "jučer", en: "yesterday", pos: "adv", icon: "⬅️", exampleHr: "Jučer sam bio u gradu.", exampleEn: "Yesterday I was in the city." },
    { id: "a1u8.danas", hr: "danas", en: "today", pos: "adv", icon: "📅", exampleHr: "Danas sam kod kuće.", exampleEn: "Today I am at home." },
    { id: "a1u8.sutra", hr: "sutra", en: "tomorrow (you'll use the future in A2)", pos: "adv", icon: "➡️", exampleHr: "Danas, jučer, sutra.", exampleEn: "Today, yesterday, tomorrow." },
    { id: "a1u8.vikend", hr: "vikend", en: "weekend", pos: "noun", gender: "m", icon: "🎉", exampleHr: "Vikend je bio krasan.", exampleEn: "The weekend was wonderful." },
    { id: "a1u8.sinoc", hr: "sinoć", en: "last night", pos: "adv", icon: "🌙", exampleHr: "Sinoć sam bila umorna.", exampleEn: "Last night I was tired." },
    { id: "a1u8.vec", hr: "već", en: "already", pos: "adv", icon: "✅", exampleHr: "Već sam bio u muzeju.", exampleEn: "I have already been to the museum." },
    { id: "a1u8.prosli-tjedan", hr: "prošli tjedan", en: "last week (chunk)", pos: "phrase", icon: "📆", exampleHr: "Prošli tjedan sam bio u Splitu.", exampleEn: "Last week I was in Split.", tags: ["chunk"] },
    { id: "a1u8.prosle-godine", hr: "prošle godine", en: "last year (chunk)", pos: "phrase", icon: "🗓️", exampleHr: "Prošle godine sam bila u Kanadi.", exampleEn: "Last year I was in Canada.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Bio sam u gradu",
      subtitle: "Everything you can say about today, you're about to say about yesterday.",
      emoji: "🕰️",
      items: [
        { emoji: "🧱", label: "The past = two pieces", hint: "sam + bio = I was" },
        { emoji: "🚻", label: "bio / bila / bilo", hint: "it agrees like an adjective" },
        { emoji: "⬅️", label: "Time words", hint: "jučer, sinoć, prošli tjedan" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say where you were" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Yesterday, with biti",
      subtitle: "You've said »Ana je u školi« for units. Today it becomes »Ana je bila u školi«.",
      emoji: "🧱",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "biti now + a place (LOC)" },
        { emoji: "🧱", label: "sam + bio", hint: "clitic + participle = past" },
        { emoji: "✅", label: "Quick check", hint: "pick bio or bila" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: biti now, and where (Units 1 & 5)",
      items: [
        {
          prompt: "Right now: »Ana ___ u školi.« (biti, present)",
          options: ["je", "su", "sam"],
          correctIndex: 0,
          explanation: "on/ona → je. Hold that »je« — in a moment it turns »Ana je BILA u školi«.",
        },
        {
          prompt: "From Unit 5: »Živim u ___.« (Zagreb — where I live)",
          options: ["Zagrebu", "Zagreb", "Zagreba"],
          correctIndex: 0,
          explanation: "Location → LOC: u Zagrebu. You'll reuse LOC places all lesson, now in the past.",
        },
        {
          prompt: "Listen — from Unit 7, how much is it?",
          tts: "Pet eura.",
          options: ["five euros", "two euros", "a hundred euros"],
          correctIndex: 0,
          explanation: "pet eura = five euros (5+ → GEN pl). A quick nod back to shopping.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's time words",
      vocabIds: [
        "a1u8.jucer", "a1u8.danas", "a1u8.sutra", "a1u8.vikend",
        "a1u8.sinoc", "a1u8.vec", "a1u8.prosli-tjedan", "a1u8.prosle-godine",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The past is two pieces: clitic + bio/bila",
      body:
        "To say **I was / you were / she was**, snap together two words you already own:\n\n**biti-clitic** (sam, si, je, smo, ste, su — Unit 1) **+ the l-participle of biti** (bio, bila, bilo…).\n\n- *Bio sam u gradu.* = I was in the city (male speaker)\n- *Bila sam u gradu.* = I was in the city (female speaker)\n\nThe participle **agrees like an adjective** (exactly the Unit 3 skill): pick the ending from the speaker/subject. And the clitic keeps its Unit 1 rule — **never first**: *Bio sam…* ✓ (not ~~Sam bio~~).\n\n*(kod kuće = at home — a fixed phrase for now.)*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "1 · Pick the clitic", emoji: "🔩", example: "sam · si · je · smo · ste · su" },
          { label: "2 · Add bio/bila", emoji: "🧱", example: "bio (m) · bila (f) · bilo (n)" },
          { label: "3 · = the past!", emoji: "✅", example: "Bio sam u gradu." },
        ],
      },
      table: {
        caption: "l-participle of biti — agrees like an adjective (U3)",
        headers: ["", "masculine", "feminine", "neuter"],
        rows: [
          ["singular", "bio", "bila", "bilo"],
          ["plural", "bili", "bile", "bila"],
        ],
      },
      examples: [
        { hr: "Jučer sam bio kod kuće.", en: "Yesterday I was at home. (male)", note: "bio — male speaker" },
        { hr: "Jučer sam bila kod kuće.", en: "Yesterday I was at home. (female)", note: "bila — female speaker" },
        { hr: "Ana je bila u školi.", en: "Ana was at school.", highlight: { text: "školi", caseId: "LOC" } },
        { hr: "Bili smo na koncertu.", en: "We were at a concert.", highlight: { text: "koncertu", caseId: "LOC" } },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: bio or bila?",
      items: [
        {
          prompt: "Ana je ___ u školi. (Ana = she)",
          options: ["bila", "bio", "bilo"],
          correctIndex: 0,
          explanation: "Ana is female → bila.",
        },
        {
          prompt: "Marko je ___ u gradu. (Marko = he)",
          options: ["bio", "bila", "bili"],
          correctIndex: 0,
          explanation: "Marko is male → bio.",
        },
        {
          prompt: "Tom i Ana su ___ na koncertu. (they)",
          options: ["bili", "bila", "bile"],
          correctIndex: 0,
          explanation: "A mixed / male group → bili (bile is for a female-only group).",
        },
      ],
    },
    {
      id: "s07",
      type: "example",
      title: "More past sentences — tap to hear",
      items: [
        { hr: "Sinoć sam bio na utakmici.", en: "Last night I was at the match." },
        { hr: "Prošli tjedan sam bila u Splitu.", en: "Last week I was in Split." },
        { hr: "Već smo bili u muzeju.", en: "We have already been to the museum." },
        { hr: "Gdje si bio jučer? — Bio sam u parku.", en: "Where were you yesterday? — I was in the park." },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Jučer sam ___ u gradu. (male speaker)",
      blanks: [["bio"]],
      translation: "Yesterday I was in the city.",
      wordBank: ["bio", "bila", "bilo"],
      explanation: "Male speaker → bio.",
    },
    {
      id: "s09",
      type: "fill",
      text: "Ana je ___ u školi.",
      blanks: [["bila"]],
      translation: "Ana was at school.",
      wordBank: ["bila", "bio", "bili"],
      explanation: "Ana (she) → bila.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Tom i Marko su ___ na koncertu.",
      blanks: [["bili"]],
      translation: "Tom and Marko were at a concert.",
      wordBank: ["bili", "bile", "bila"],
      explanation: "A male/mixed group → bili.",
    },
    {
      id: "s11",
      type: "section",
      title: "Part 2 · Say it & hear it",
      subtitle: "Build the past yourself — then dictation and one out-loud line.",
      emoji: "✍️",
      items: [
        { emoji: "⌨️", label: "Type two pasts", hint: "»I was at home« · »We were…«" },
        { emoji: "🔀", label: "Build a sentence", hint: "clitic never first!" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say where you were", hint: "Jučer sam bio/bila…" },
      ],
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I was at home.” (kod kuće = at home)",
      answers: ["Bio sam kod kuće.", "Bila sam kod kuće.", "Bio sam kod kuće", "Bila sam kod kuće", "Jučer sam bio kod kuće."],
      explanation: "Bio sam / Bila sam kod kuće — clitic »sam« comes second, never first.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “We were at a concert.”",
      answers: ["Bili smo na koncertu.", "Bile smo na koncertu.", "Bili smo na koncertu", "Bile smo na koncertu"],
      explanation: "Bili smo (m/mixed) / Bile smo (f only) + na koncertu (LOC).",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Jučer", "sam", "bio", "u", "gradu"],
      answers: ["Jučer sam bio u gradu.", "Jučer sam bio u gradu"],
      en: "Yesterday I was in the city.",
      explanation: "Time word first, then the clitic »sam« in second position: Jučer sam bio…",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Ana je bila u školi.",
      explanation: "Ana je bila u školi — Ana was at school.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Bili smo na koncertu.",
      explanation: "Bili smo na koncertu — we were at a concert.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: places from Unit 5 — now in the past",
      items: [
        {
          prompt: "»Idem u kino« was Unit 5. Yesterday: »Jučer sam ___ u kinu.«",
          options: ["bio", "idem", "bili"],
          correctIndex: 0,
          explanation: "Past of »I am« → bio/bila; u kinu stays LOC (location).",
        },
        {
          prompt: "Listen: where was Tom?",
          tts: "Tom je bio na trgu.",
          options: ["at the square", "at the station", "at the bank"],
          correctIndex: 0,
          explanation: "na trgu = at the square (trg + LOC).",
        },
        {
          prompt: "»Naša obitelj je ___ na moru.« (we/it — the family) ",
          options: ["bila", "bio", "bili"],
          correctIndex: 0,
          explanation: "obitelj is feminine singular → bila (Unit 3 agreement, in the past).",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen (Unit 6 days): on which day was she at school?",
      tts: "U ponedjeljak je bila u školi.",
      options: ["Monday", "Saturday", "Sunday"],
      correctIndex: 0,
      explanation: "U ponedjeljak = on Monday; bila = she was.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Jučer sam bio u gradu.",
      targetEn: "say where you were yesterday — Yesterday I was in the city. (female: Jučer sam bila u gradu.)",
      phonetic: "YOO-cher sam BEE-o oo GRAH-doo",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The past tense is open!** Perfekt of biti = **clitic + l-participle**: *Bio sam u gradu. Ana je bila u školi. Bili smo na koncertu.*\n\nThe participle **agrees like a U3 adjective** — **bio (m) · bila (f) · bilo (n) · bili/bile (pl)** — matching the speaker/subject. The clitic keeps its Unit 1 seat: **second, never first**.\n\nTime words: **jučer, sinoć, prošli tjedan, prošle godine, već**.\n\nNext lesson: the past of *all* verbs — *Što si radio jučer?*",
      vocabIds: [
        "a1u8.jucer", "a1u8.danas", "a1u8.sutra", "a1u8.vikend",
        "a1u8.sinoc", "a1u8.vec", "a1u8.prosli-tjedan", "a1u8.prosle-godine",
      ],
    },
  ],
  srsCloze: [
    { front: "Jučer ___ bio u gradu. (I — clitic)", answers: ["sam"], back: "Jučer sam bio u gradu. (clitic sam, second position)", tts: "Jučer sam bio u gradu." },
    { front: "Ana je ___ u školi. (biti, she)", answers: ["bila"], back: "Ana je bila u školi. (she → bila)", tts: "Ana je bila u školi." },
    { front: "Marko je ___ u gradu. (biti, he)", answers: ["bio"], back: "Marko je bio u gradu. (he → bio)", tts: "Marko je bio u gradu." },
    { front: "Bili ___ na koncertu. (we — clitic)", answers: ["smo"], back: "Bili smo na koncertu. (mi → smo)", tts: "Bili smo na koncertu." },
    { front: "Tom i Ana su ___ na moru. (biti, mixed group)", answers: ["bili"], back: "Tom i Ana su bili na moru. (mixed group → bili)", tts: "Tom i Ana su bili na moru." },
    { front: "»Naša obitelj je ___ zajedno.« (biti, f sg)", answers: ["bila"], back: "Naša obitelj je bila zajedno. (obitelj f sg → bila)" },
    { front: "yesterday = ___", answers: ["jučer"], back: "jučer = yesterday.", tts: "jučer" },
    { front: "last night = ___", answers: ["sinoć", "sinoc"], back: "sinoć = last night.", tts: "sinoć" },
  ],
  notes: {
    inOneSentence: {
      en: "The past of biti is a clitic (sam/si/je…) plus the l-participle bio/bila/bilo, which agrees like an adjective.",
      exampleHr: "Bio sam u gradu. · Ana je bila u školi. · Bili smo na koncertu.",
    },
    deepDive: [
      {
        title: "Two pieces you already own",
        body:
          "Perfekt (the everyday past) is built, not memorized: **biti-clitic + l-participle**. For »to be«, the participle is **bio/bila/bilo** in the singular and **bili/bile/bila** in the plural — the same three-gender shape as any U3 adjective (moj/moja/moje, dobar/dobra/dobro).\n\nThe clitic obeys the Unit 1 second-position rule: it can't open the clause. So you get *Bio sam…* (participle first) or *Jučer sam bio…* (time word first) — but never ~~Sam bio~~.\n\nThe participle agrees with the **subject/speaker**: a man says *Bio sam*, a woman says *Bila sam*; »we« is *bili* (male/mixed) or *bile* (female only).",
        table: {
          caption: "biti in the past — full agreement",
          headers: ["person", "masculine", "feminine"],
          rows: [
            ["ja (I)", "bio sam", "bila sam"],
            ["ti (you)", "bio si", "bila si"],
            ["on / ona (he/she)", "bio je", "bila je"],
            ["mi (we)", "bili smo", "bile smo"],
            ["vi (you pl)", "bili ste", "bile ste"],
            ["oni / one (they)", "bili su", "bile su"],
          ],
        },
      },
      {
        title: "Word order — the clitic still sits second",
        body:
          "Nothing new about the clitic: it lives in second position, exactly as in Unit 1. What changes is that a participle now rides with it.\n\nStart with the participle (*Bio sam u gradu.*) or with a time word / subject (*Jučer sam bio u gradu.* / *Ana je bila u školi.*). Questions flip the auxiliary out front: *Gdje si bio?* / *Jesi li bio u gradu?*",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Clitic-first is the classic slip",
          text: "~~Sam bio u gradu~~ ❌ → Bio sam u gradu ✅. The clitic (sam/si/je…) never opens the sentence.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Sam bio u gradu.",
        right: "Bio sam u gradu.",
        why: "The clitic sam can't be first — put the participle (or a time word) ahead of it.",
      },
      {
        wrong: "Bila sam u gradu. (said by a man)",
        right: "Bio sam u gradu.",
        why: "The participle matches the SPEAKER's gender: a male speaker says bio.",
      },
      {
        wrong: "Ja sam bio jučer u grad.",
        right: "Ja sam bio jučer u gradu.",
        why: "»Where I was« is location → LOC (u gradu), not the ACC direction form (u grad).",
      },
      {
        wrong: "Ana je bio u školi.",
        right: "Ana je bila u školi.",
        why: "Ana is feminine → bila; the participle agrees with the subject.",
      },
    ],
    memoryHooks: [
      "Perfekt = LEGO: [clitic] + [bio/bila]. Two known bricks, one new sentence.",
      "The participle dresses to match the speaker: he = biO, she = bilA.",
      "Same clitic, same seat: second position, since Unit 1.",
    ],
    connects: [
      { label: "biti clitics sam/si/je (Unit 1 L3)", lessonId: "a1u1l3" },
      { label: "Adjective-style agreement moj/moja/moje (Unit 3 L1)", lessonId: "a1u3l1" },
      { label: "LOC places: u gradu, na trgu (Unit 5 L1)", lessonId: "a1u5l1" },
      { label: "Next: the past of ordinary verbs (Unit 8 L2)", lessonId: "a1u8l2" },
    ],
    selfCheck: [
      { q: "How does a man say “I was in the city”?", a: "Bio sam u gradu. (a woman: Bila sam u gradu.)" },
      { q: "Why is »Sam bio u gradu« wrong?", a: "The clitic sam can't be first — it must sit in second position." },
      { q: "How do you say “Ana was at school”?", a: "Ana je bila u školi. (Ana is feminine → bila; location → LOC školi.)" },
      { q: "What are the two pieces of the perfekt of biti?", a: "The biti-clitic (sam/si/je…) + the l-participle (bio/bila/bilo…)." },
      { q: "“We were at a concert” — mixed group?", a: "Bili smo na koncertu. (female-only group: Bile smo.)" },
    ],
  },
};
