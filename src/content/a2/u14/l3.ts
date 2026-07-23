import type { Lesson } from "@/types/content";

/**
 * A2 U14 L3 — Bakin recept (negative imperative + recipes)
 * Spec: curriculum/A2/unit-14.md · grammar-reference §10.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * pećnica added per the 2026-07-23 spec correction (the spec's own step strip
 * needs it). recept recycled from U11 — the prescription/recipe double meaning
 * is taught explicitly. jaje → jaja plural warning per spec.
 */
export const a2u14l3: Lesson = {
  id: "a2u14l3",
  unitId: "a2u14",
  title: "Bakin recept",
  titleEn: "Grandma's recipe — don't! and how to bake",
  grammarTags: ["negative-imperative", "imperative", "recipes"],
  estMinutes: 19,
  vocab: [
    { id: "a2u14.torta", hr: "torta", en: "cake (big, layered)", pos: "noun", gender: "f", icon: "🎂", exampleHr: "Radimo tortu za rođendan.", exampleEn: "We're making a cake for the birthday." },
    { id: "a2u14.secer", hr: "šećer", en: "sugar", pos: "noun", gender: "m", icon: "🍬", exampleHr: "Pijem kavu sa šećerom.", exampleEn: "I drink coffee with sugar." },
    { id: "a2u14.brasno", hr: "brašno", en: "flour", pos: "noun", gender: "n", icon: "🌾", exampleHr: "Kupujem brašno za tortu.", exampleEn: "I'm buying flour for the cake." },
    { id: "a2u14.jaje", hr: "jaje", en: "egg (pl jaja!)", pos: "noun", gender: "n", icon: "🥚", exampleHr: "Imam tri jaja.", exampleEn: "I have three eggs." },
    { id: "a2u14.dodati", hr: "dodati", en: "to add (dodaj!)", pos: "verb", icon: "➕", exampleHr: "Dodaj šećer i brašno!", exampleEn: "Add the sugar and flour!" },
    { id: "a2u14.mijesati", hr: "miješati", en: "to stir / mix (miješaj!)", pos: "verb", icon: "🥄", exampleHr: "Miješaj pet minuta!", exampleEn: "Stir for five minutes!" },
    { id: "a2u14.staviti", hr: "staviti", en: "to put (stavi!)", pos: "verb", icon: "📥", exampleHr: "Stavi tortu u pećnicu!", exampleEn: "Put the cake in the oven!" },
    { id: "a2u14.pecnica", hr: "pećnica", en: "oven", pos: "noun", gender: "f", icon: "🔥", exampleHr: "Torta je u pećnici.", exampleEn: "The cake is in the oven." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Bakin recept",
      subtitle: "Baka Marija's cake — you'll follow every word. And learn to say DON'T.",
      emoji: "🎂",
      items: [
        { emoji: "⛔", label: "nemoj + infinitive", hint: "the polite DON'T" },
        { emoji: "🥚", label: "Recipe kitchen", hint: "jaja, brašno, šećer" },
        { emoji: "📋", label: "Five steps", hint: "dodaj → miješaj → stavi" },
        { emoji: "🎤", label: "Read a step aloud", hint: "Dodaj šećer i miješaj!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The DON'T machine",
      subtitle: "Yesterday you commanded. Today you forbid — with one plug-in word.",
      emoji: "⛔",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "yesterday's commands + GEN amounts" },
        { emoji: "🔌", label: "nemoj + infinitive", hint: "any verb plugs in" },
        { emoji: "🍰", label: "Kitchen words", hint: "8 new" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: commands & quantities",
      items: [
        {
          prompt: "Yesterday: doći → the ti-command is…",
          options: ["Dođi!", "Dojdi!", "Doći!"],
          correctIndex: 0,
          explanation: "Dođi! — the rebel four. Today: how to say DON'T come.",
        },
        {
          prompt: "U7/U13 quantities: »malo ___« (a little sugar — šećer)",
          options: ["šećera", "šećer", "šećeru"],
          correctIndex: 0,
          explanation: "malo + GEN: malo šećera. Recipes run on genitive amounts.",
        },
        {
          prompt: "Listen (U4): what does she ask for?",
          tts: "Molim kruh i mlijeko.",
          options: ["bread and milk", "cake and coffee", "eggs and flour"],
          correctIndex: 0,
          explanation: "kruh i mlijeko — U4 food. Today the kitchen grows: brašno, jaja, šećer.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The kitchen counter",
      vocabIds: [
        "a2u14.torta", "a2u14.secer", "a2u14.brasno", "a2u14.jaje",
        "a2u14.dodati", "a2u14.mijesati", "a2u14.staviti", "a2u14.pecnica",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "nemoj — the socket every infinitive plugs into",
      body:
        "The negative command doesn't touch yesterday's forms. It's a plug-in system:\n\n**nemoj** (ti) / **nemojmo** (let's not) / **nemojte** (Vi) **+ INFINITIVE**\n\n*Nemoj otvoriti! Nemojte čekati! Nemojmo pjevati!*\n\nThe infinitive — the plain dictionary form — is exactly what goes in the socket. Never the imperative: ❌ *nemoj jedi* → ✅ ***nemoj jesti***.",
      diagram: {
        kind: "contrast",
        left: {
          title: "DO — imperative",
          emoji: "✅",
          lines: [
            { hr: "Jedi! · Otvori poklon!", en: "Eat! · Open the present!" },
          ],
        },
        right: {
          title: "DON'T — nemoj + infinitive",
          emoji: "⛔",
          lines: [
            { hr: "Nemoj jesti! · Nemoj otvoriti poklon!", en: "Don't eat! · Don't open the present!" },
          ],
        },
      },
      examples: [
        { hr: "Nemoj jesti tortu prije proslave!", en: "Don't eat the cake before the party!", note: "prije + GEN (U9)" },
        { hr: "Nemojte čekati — dođite!", en: "Don't wait — come!" },
        { hr: "Nemoj otvoriti pećnicu!", en: "Don't open the oven!" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Bakin recept — five steps",
      body:
        "Recipes are the imperative's natural habitat. Baka Marija's torta:\n\nOne warning before you crack anything: **jaje → jaja** in the plural (*tri jaja, pet jaja*) — no -e plural here.\n\nAnd meet an old friend: **recept** was your U11 *prescription* — the same word is a *recipe*. One word, two kinds of instructions.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "1 · Dodaj tri jaja i šećer", emoji: "🥚", example: "add three eggs and sugar" },
          { label: "2 · Dodaj brašno i mlijeko", emoji: "🌾", example: "add flour and milk" },
          { label: "3 · Miješaj deset minuta", emoji: "🥄", example: "stir for ten minutes" },
          { label: "4 · Stavi tortu u pećnicu", emoji: "🔥", example: "put the cake in the oven" },
          { label: "5 · Nemoj otvoriti pećnicu!", emoji: "⛔", example: "don't open the oven!" },
        ],
      },
      examples: [
        { hr: "Dodaj šećer i brašno.", en: "Add the sugar and flour." },
        { hr: "Miješaj pet minuta.", en: "Stir for five minutes.", note: "pet minuta — GEN pl (U13!)" },
        { hr: "Stavi tortu u pećnicu.", en: "Put the cake in the oven.", note: "u + ACC — direction (U5)" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: the socket takes only infinitives",
      items: [
        {
          prompt: "Nemoj ___ tortu!",
          options: ["jesti", "jedi", "jedeš"],
          correctIndex: 0,
          explanation: "nemoj + INFINITIVE: nemoj jesti.",
        },
        {
          prompt: "To a group: »___ čekati!«",
          options: ["Nemojte", "Nemoj", "Nemojmo"],
          correctIndex: 0,
          explanation: "Vi/plural → nemojte čekati.",
        },
        {
          prompt: "»Let's not open the presents yet« starts with…",
          options: ["Nemojmo", "Nemojte", "Nemoj"],
          correctIndex: 0,
          explanation: "-mo = let's: nemojmo otvoriti.",
        },
        {
          prompt: "three eggs = tri ___",
          options: ["jaja", "jaje", "jajeve"],
          correctIndex: 0,
          explanation: "jaje → jaja: tri jaja.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Bake it yourself",
      subtitle: "Fill the steps, build the warning, read it all aloud.",
      emoji: "📋",
      items: [
        { emoji: "✏️", label: "Complete the recipe", hint: "three fills" },
        { emoji: "🔀", label: "Build the DON'T", hint: "nemoj + otvoriti + poklon" },
        { emoji: "🎧", label: "Kitchen dictation", hint: "dodaj tri jaja" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ tri jaja i šećer. (dodati, ti)",
      blanks: [["Dodaj", "dodaj"]],
      translation: "Add three eggs and the sugar.",
      wordBank: ["Dodaj", "Dodajte", "Dodati"],
      explanation: "dodati → dodaju → dodaj!",
    },
    {
      id: "s10",
      type: "fill",
      text: "___ deset minuta. (miješati, ti)",
      blanks: [["Miješaj", "miješaj", "Mijesaj"]],
      translation: "Stir for ten minutes.",
      wordBank: ["Miješaj", "Miješi", "Miješati"],
      explanation: "miješati → miješaju → miješaj!",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ tortu u pećnicu — i nemoj ___ vrata! (staviti, ti · otvoriti)",
      blanks: [["Stavi", "stavi"], ["otvoriti"]],
      translation: "Put the cake in the oven — and don't open the door!",
      explanation: "stavi! (command) but nemoj + otvoriti (infinitive).",
    },
    {
      id: "s12",
      type: "reorder",
      words: ["Nemoj", "otvoriti", "poklon"],
      answers: ["Nemoj otvoriti poklon!", "Nemoj otvoriti poklon"],
      en: "Don't open the present!",
      explanation: "nemoj + infinitive + object.",
    },
    {
      id: "s20",
      type: "type",
      prompt: "Tell a group: “Don't wait!” (čekati)",
      answers: ["Nemojte čekati!", "Nemojte čekati", "nemojte čekati", "Nemojte cekati"],
      hint: "the Vi socket + infinitive",
      explanation: "Nemojte čekati! — nemojte + infinitive.",
    },
    {
      id: "s13",
      type: "listen-type",
      tts: "Dodaj tri jaja.",
      explanation: "Dodaj tri jaja — add three eggs (jaje → jaja).",
    },
    {
      id: "s14",
      type: "listen-type",
      tts: "Nemoj jesti tortu!",
      explanation: "Nemoj jesti tortu! — don't eat the cake!",
    },
    {
      id: "s15",
      type: "speak",
      targetHr: "Dodaj šećer i miješaj!",
      targetEn: "read a recipe step aloud — Add the sugar and stir!",
      phonetic: "DO-dai SHEH-cher ee mee-YEH-shai",
    },
    {
      id: "s16",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: amounts & the kitchen of Unit 4",
      items: [
        {
          prompt: "U13 quantities: »Dodaj tristo grama ___.« (brašno)",
          options: ["brašna", "brašno", "brašnu"],
          correctIndex: 0,
          explanation: "Amount + GEN: tristo grama brašna.",
        },
        {
          prompt: "U9 preposition: »Nemoj jesti tortu ___ proslave!« (before)",
          options: ["prije", "poslije", "blizu"],
          correctIndex: 0,
          explanation: "prije + GEN = before: prije proslave.",
        },
        {
          prompt: "Listen (U12 chunk): how does she take her coffee?",
          tts: "Pijem kavu sa šećerom.",
          options: ["with sugar", "with milk", "without sugar"],
          correctIndex: 0,
          explanation: "sa šećerom — sa before š (U12). Today šećer joined your vocab officially.",
        },
      ],
    },
    {
      id: "s17",
      type: "recap",
      summary:
        "**DON'T = nemoj / nemojmo / nemojte + INFINITIVE**: *Nemoj jesti tortu! Nemojte čekati!* — the imperative never enters the socket.\n\n**The recipe register**: *dodaj → miješaj → stavi* … *nemoj otvoriti pećnicu!* Amounts ride on the genitive (*malo šećera, tristo grama brašna, pet minuta*).\n\n**Watch**: *jaje → jaja* (tri jaja) · *recept* = prescription AND recipe.\n\nWords tonight: **torta, šećer, brašno, jaje, dodati, miješati, staviti, pećnica**.",
      vocabIds: [
        "a2u14.torta", "a2u14.secer", "a2u14.brasno", "a2u14.jaje",
        "a2u14.dodati", "a2u14.mijesati", "a2u14.staviti", "a2u14.pecnica",
      ],
    },
  ],
  srsCloze: [
    { front: "Nemoj ___ tortu! (jesti or jedi?)", answers: ["jesti"], back: "nemoj + INFINITIVE: nemoj jesti.", tts: "Nemoj jesti tortu!" },
    { front: "tri ___ (jaje)", answers: ["jaja"], back: "jaje → jaja (tri jaja, pet jaja).", tts: "tri jaja" },
    { front: "dodati → »___ šećer!« (ti)", answers: ["Dodaj", "dodaj"], back: "Dodaj! — from dodaju.", tts: "Dodaj šećer!" },
    { front: "Stavi tortu u ___. (the oven — direction!)", answers: ["pećnicu", "pecnicu"], back: "u pećnicu — u + ACC direction.", tts: "Stavi tortu u pećnicu." },
    { front: "To a group: »___ čekati!« (don't wait)", answers: ["Nemojte", "nemojte"], back: "nemojte + infinitive.", tts: "Nemojte čekati!" },
    { front: "flour = ___ (n)", answers: ["brašno", "brasno"], back: "brašno (tristo grama brašna).", tts: "Kupujem brašno za tortu." },
    { front: "to stir = ___ (miješaj!)", answers: ["miješati", "mijesati"], back: "miješati — Miješaj pet minuta!", tts: "Miješaj pet minuta!" },
  ],
  notes: {
    inOneSentence: {
      en: "The negative command is nemoj/nemojmo/nemojte + infinitive — never the imperative — and recipes chain positive imperatives (dodaj, miješaj, stavi) with genitive amounts.",
      exampleHr: "Nemoj jesti tortu prije proslave! · Dodaj tri jaja i miješaj!",
    },
    deepDive: [
      {
        title: "The nemoj paradigm, complete",
        body:
          "nemoj is historically a command of its own (\"don't want!\"), which is why IT carries the person endings while the main verb stays in the infinitive:",
        table: {
          caption: "The DON'T socket",
          headers: ["person", "form", "example"],
          rows: [
            ["ti", "nemoj + inf", "Nemoj otvoriti poklon!"],
            ["mi (let's not)", "nemojmo + inf", "Nemojmo čekati!"],
            ["Vi / vi", "nemojte + inf", "Nemojte jesti prije proslave!"],
          ],
        },
      },
      {
        title: "Recipes: the imperative's natural habitat",
        body:
          "A Croatian recipe is a chain of ti-imperatives with genitive amounts:\n\n*Dodaj **tristo grama brašna**, **dvjesto grama šećera** i **tri jaja**. Miješaj **deset minuta**. Stavi u pećnicu.*\n\nEvery amount is Unit 7/13 machinery: *grama* (GEN pl of gram), *jaja* (the irregular plural), *minuta* (GEN pl). Cooking is secretly a case workout.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "dodaj", emoji: "🥚", example: "+ GEN amounts" },
            { label: "miješaj", emoji: "🥄", example: "+ time in GEN pl" },
            { label: "stavi", emoji: "🔥", example: "+ u/na + ACC" },
            { label: "nemoj otvoriti", emoji: "⛔", example: "+ infinitive" },
          ],
        },
      },
      {
        title: "jaje, jaja — and the recept twins",
        body:
          "**jaje** is a neuter with an irregular plural: *jaje → **jaja*** (tri jaja, pet jaja — the paucal and GEN pl look the same here, lucky you).\n\n**recept** is one word with two lives: the U11 doctor hands you one (prescription), baka Marija writes you one (recipe). Both are instructions to follow exactly.\n\nRegional note: you may hear *nemoj da…* constructions in the wider region — standard Croatian says **nemoj + infinitive**.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Nemoj jedi tortu!",
        right: "Nemoj jesti tortu!",
        why: "After nemoj comes the INFINITIVE, never the imperative.",
      },
      {
        wrong: "Nemoj da jedeš tortu.",
        right: "Nemoj jesti tortu.",
        why: "nemoj da + present is regional — standard Croatian plugs in the infinitive.",
      },
      {
        wrong: "tri jaje / tri jajeva",
        right: "tri jaja",
        why: "jaje has the irregular plural jaja.",
      },
      {
        wrong: "Stavi tortu u pećnici.",
        right: "Stavi tortu u pećnicu.",
        why: "Putting something somewhere is DIRECTION → u + ACC (pećnicu); u pećnici (LOC) is where it already sits.",
      },
    ],
    memoryHooks: [
      "nemoj is a socket ⚡ — any infinitive plugs in, no rewiring.",
      "DO commands change the verb; DON'T freezes it: Jedi! but Nemoj jesti!",
      "jaja — the word even LOOKS like two eggs.",
      "recept: the doctor's and baka's are the same word — instructions you don't argue with.",
    ],
    connects: [
      { label: "The imperative — yesterday's machine (Unit 14 L2)", lessonId: "a2u14l2" },
      { label: "Quantities + GEN — the recipe amounts (Unit 13 L2)", lessonId: "a2u13l2" },
      { label: "recept as prescription (Unit 11 L4)", lessonId: "a2u11l4" },
    ],
    selfCheck: [
      { q: "»Don't open the present!« = ?", a: "Nemoj otvoriti poklon! (nemoj + infinitive)" },
      { q: "The three nemoj forms?", a: "nemoj (ti), nemojmo (let's not), nemojte (Vi/vi)." },
      { q: "three eggs = ?", a: "tri jaja (irregular plural)." },
      { q: "Why »u pećnicu« with stavi but »u pećnici« with je?", a: "stavi = direction → ACC; being inside = location → LOC." },
      { q: "Give the first two steps of baka's recipe.", a: "Dodaj tri jaja i šećer. Miješaj deset minuta." },
    ],
  },
};
