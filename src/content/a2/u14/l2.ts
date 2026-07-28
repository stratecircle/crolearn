import type { Lesson } from "@/types/content";

/**
 * A2 U14 L2 — Dođi na proslavu! (the imperative)
 * Spec: curriculum/A2/unit-14.md · grammar-reference §10.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * balon & ukras promoted from the story glossary per the 2026-07-23 spec
 * correction. Negative imperative (nemoj) is L3. »s nama« appears once as a
 * spec-mandated chunk, glossed inline (full pronoun forms are U15 territory).
 */
export const a2u14l2: Lesson = {
  id: "a2u14l2",
  unitId: "a2u14",
  title: "Dođi na proslavu!",
  titleEn: "Come to the party! — the imperative",
  grammarTags: ["imperative", "imperative-formation"],
  estMinutes: 19,
  vocab: [
    { id: "a2u14.pozvati", image: "/img/pozvati.png", hr: "pozvati", en: "to invite (pozovem!)", pos: "verb", icon: "💌", exampleHr: "Pozovi Anu na proslavu!", exampleEn: "Invite Ana to the party!" },
    { id: "a2u14.donijeti", image: "/img/donijeti.png", hr: "donijeti", en: "to bring (donesem!)", pos: "verb", icon: "🎁", exampleHr: "Donesi poklon!", exampleEn: "Bring the gift!" },
    { id: "a2u14.otvoriti", image: "/img/otvoriti.png", hr: "otvoriti", en: "to open (otvorim)", pos: "verb", icon: "🔓", exampleHr: "Otvori poklon!", exampleEn: "Open the present!" },
    { id: "a2u14.glazba", image: "/img/glazba.png", hr: "glazba", en: "music", pos: "noun", gender: "f", icon: "🎶", exampleHr: "Volim glazbu.", exampleEn: "I love music." },
    { id: "a2u14.balon", image: "/img/balon.png", hr: "balon", en: "balloon", pos: "noun", gender: "m", icon: "🎈", exampleHr: "Balon je velik i crven.", exampleEn: "The balloon is big and red." },
    { id: "a2u14.ukras", image: "/img/ukras.png", hr: "ukras", en: "decoration", pos: "noun", gender: "m", icon: "✨", exampleHr: "Kupujemo ukrase za proslavu.", exampleEn: "We're buying decorations for the party." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Dođi na proslavu!",
      subtitle: "Today you learn to boss people around — nicely.",
      emoji: "🎉",
      items: [
        { emoji: "❗", label: "The imperative", hint: "Dođi! Otvori! Pjevajte!" },
        { emoji: "🕵️", label: "Steal from ONI", hint: "3pl is the secret stem" },
        { emoji: "🎈", label: "Party prep", hint: "baloni, ukrasi, glazba" },
        { emoji: "🎤", label: "Invite someone", hint: "Dođi na proslavu!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Steal the stem from ONI",
      subtitle: "You know every present tense. The command form is hiding inside the ONI row.",
      emoji: "🕵️",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "na + ACC, modals" },
        { emoji: "📊", label: "The formation table", hint: "-j / -i, three persons" },
        { emoji: "⭐", label: "Four rebels", hint: "budi · dođi · jedi · pij" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: directions & pressure",
      items: [
        {
          prompt: "U5: »Idem ___ koncert.« (to the concert)",
          options: ["na", "u", "od"],
          correctIndex: 0,
          explanation: "na + ACC for events — today: dođi NA proslavu, same track.",
        },
        {
          prompt: "U11 modals: »Moraš doći!« means…",
          options: ["You must come!", "Come!", "You may come!"],
          correctIndex: 0,
          explanation: "morati = must. Today you get the more direct tool: Dođi!",
        },
        {
          prompt: "Listen (U8): what did they do all evening?",
          tts: "Pjevali smo cijelu večer.",
          options: ["sang", "danced", "cooked"],
          correctIndex: 0,
          explanation: "pjevali smo — perfekt of pjevati. Today: Pjevajte! (command!)",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Party-prep words",
      vocabIds: [
        "a2u14.pozvati", "a2u14.donijeti", "a2u14.otvoriti",
        "a2u14.glazba", "a2u14.balon", "a2u14.ukras",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The imperative: steal the stem from ONI",
      body:
        "Take the **oni** (3pl) form, drop its ending — what's left is the command stem:\n\n- 3pl in **-aju** → command in **-aj**: *pjevaju → **pjevaj!*** (Vi: *pjevajte!*)\n- 3pl in **-e/-u** → command in **-i**: *otvore → **otvori!*** (Vi: *otvorite!*), *plešu → **pleši!*** (the š comes along!)\n\nThree persons: **ti** (*otvori!*), **mi** = let's (*otvorimo!*), **Vi/vi** (*otvorite!*).",
      table: {
        caption: "Steal from ONI",
        headers: ["infinitive", "oni…", "ti!", "mi! (let's)", "Vi!"],
        rows: [
          ["pjevati", "pjevaju", "pjevaj!", "pjevajmo!", "pjevajte!"],
          ["plesati", "plešu", "pleši!", "plešimo!", "plešite!"],
          ["otvoriti", "otvore", "otvori!", "otvorimo!", "otvorite!"],
          ["doći", "dođu", "dođi!", "dođimo!", "dođite!"],
        ],
      },
      examples: [
        { hr: "Dođi na proslavu!", en: "Come to the party!" },
        { hr: "Otvori poklon!", en: "Open the present!" },
        { hr: "Pjevajte s nama!", en: "Sing with us!", note: "s nama = with us (s + INS — the pronoun form arrives in U15)" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The rebels — and your party verbs",
      body:
        "Four commands to memorize whole: **budi!** (biti), **jedi!** (jesti), **pij!** (piti), **dođi!** (doći).\n\nTwo of today's verbs change stems in the present — steal from THEIR oni row too:\n\n- *pozvati → pozovu → **pozovi!*** (invite!)\n- *donijeti → donesu → **donesi!*** (bring!)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Never command from the infinitive",
        text: "❌ pjevati! as a command · ❌ dojdi — the forms are pjevaj! and dođi! Steal from oni, not from the dictionary.",
      },
      examples: [
        { hr: "Budi veseo — proslava je!", en: "Be cheerful — it's a party!" },
        { hr: "Pozovi Anu i Marka!", en: "Invite Ana and Marko!", note: "Marka — animate ACC (U4)" },
        { hr: "Donesi balone i ukrase!", en: "Bring the balloons and decorations!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: form the command",
      items: [
        {
          prompt: "otvoriti — to the Vi person: »___ vrata!«",
          options: ["Otvorite", "Otvori", "Otvorete"],
          correctIndex: 0,
          explanation: "Vi → -ite: Otvorite vrata!",
        },
        {
          prompt: "pjevati — Vi form?",
          options: ["Pjevajte!", "Pjevate!", "Pjevati!"],
          correctIndex: 0,
          explanation: "3pl pjevaju → pjevaj + te: Pjevajte! (Pjevate = you sing, a statement.)",
        },
        {
          prompt: "doći — ti form?",
          options: ["Dođi!", "Dojdi!", "Doći!"],
          correctIndex: 0,
          explanation: "dođu → dođi! (dojdi is a common learner slip — đ, not jd).",
        },
        {
          prompt: "piti — ti form?",
          options: ["Pij!", "Piji!", "Pi!"],
          correctIndex: 0,
          explanation: "One of the four rebels: pij!",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Run the party prep",
      subtitle: "Give the orders: bring, invite, open — then build the invitation line.",
      emoji: "🎈",
      items: [
        { emoji: "⌨️", label: "Three commands", hint: "donesi · pozovi · dođi" },
        { emoji: "✏️", label: "Prep dialogue", hint: "fill the orders in" },
        { emoji: "🔀", label: "The invitation", hint: "dođi + na + proslavu" },
      ],
    },
    {
      id: "s09",
      type: "type",
      prompt: "Tell a friend: “Bring the gift!” (donijeti)",
      answers: ["Donesi poklon!", "Donesi poklon", "donesi poklon"],
      hint: "steal from donesu",
      explanation: "Donesi poklon! — donijeti → donesu → donesi.",
    },
    {
      id: "s10",
      type: "type",
      prompt: "Tell a friend: “Invite Ana!” (pozvati)",
      answers: ["Pozovi Anu!", "Pozovi Anu", "pozovi Anu", "pozovi anu"],
      hint: "pozovu → … + ACC Anu",
      explanation: "Pozovi Anu! — pozovi + ACC.",
    },
    {
      id: "s11",
      type: "type",
      prompt: "The one-word invitation: “Come!” (ti)",
      answers: ["Dođi!", "Dođi", "dođi", "Dodi"],
      hint: "one of the rebels",
      explanation: "Dođi!",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ana: »___ balone! (donijeti, ti)« Tom: »Evo!«",
      blanks: [["Donesi", "donesi"]],
      translation: "Ana: \"Bring the balloons!\" Tom: \"Here!\"",
      wordBank: ["Donesi", "Donesite", "Donijeti"],
      explanation: "ti-command: donesi (Vi would be donesite).",
    },
    {
      id: "s13",
      type: "fill",
      text: "Gosti su tu! ___ vrata! (otvoriti, Vi)",
      blanks: [["Otvorite", "otvorite"]],
      translation: "The guests are here! Open the door!",
      wordBank: ["Otvorite", "Otvori", "Otvaraju"],
      explanation: "Vi-command: otvorite (vrata — the U10 plural-only door).",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Dođi", "na", "proslavu"],
      answers: ["Dođi na proslavu!", "Dođi na proslavu"],
      en: "Come to the party!",
      explanation: "imperative + na + ACC (direction): na proslavu.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears, voice & two ways to push",
      subtitle: "Hear the commands, give one yourself, then weigh Dođi! against Moraš doći!",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "Dođite! · Otvori!" },
        { emoji: "🎤", label: "Invite out loud", hint: "Dođi na proslavu!" },
        { emoji: "⚖️", label: "Command vs modal", hint: "U11 meets today" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Dođite na proslavu!",
      explanation: "Dođite na proslavu! — come to the party (Vi/plural).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Otvori poklon!",
      explanation: "Otvori poklon! — open the present (ti).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Dođi na proslavu!",
      targetEn: "invite someone out loud — Come to the party! (then upgrade it: Dođi i donesi glazbu!)",
      phonetic: "DO-jee na PRO-sla-voo",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: two ways to push, one way to carry",
      items: [
        {
          prompt: "U11 vs today — which is the DIRECT command?",
          options: ["Dođi!", "Moraš doći!", "Možeš doći."],
          correctIndex: 0,
          explanation: "Dođi! commands; Moraš doći! obliges (modal); Možeš doći just permits.",
        },
        {
          prompt: "Listen (U12 + today): what should you do?",
          tts: "Dođi tramvajem i donesi glazbu!",
          options: [
            "come by tram and bring music",
            "buy a tram ticket and dance",
            "come on foot and bring a cake",
          ],
          correctIndex: 0,
          explanation: "tramvajem — bare INS of means (U12) + donesi — bring!",
        },
        {
          prompt: "Marko: »Pozovimo susjede!« What is he suggesting?",
          options: [
            "Let's invite the neighbours!",
            "Invite the neighbours! (to one friend)",
            "The neighbours are invited.",
          ],
          correctIndex: 0,
          explanation: "-imo = let's: pozovimo (susjede — ACC pl, U6).",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The imperative — steal the stem from ONI**: *pjevaju → **pjevaj!*** · *otvore → **otvori!*** · *plešu → **pleši!*** Three persons: ti (*-j/-i*), mi = let's (*-jmo/-imo*), Vi (*-jte/-ite*).\n\n**The rebels**: *budi! jedi! pij! dođi!* — plus stem-changers *pozovi!* (pozvati) and *donesi!* (donijeti).\n\nNever command from the infinitive — and next lesson: how to say DON'T (*nemoj!*).\n\nWords tonight: **pozvati, donijeti, otvoriti, glazba, balon, ukras**.",
      vocabIds: [
        "a2u14.pozvati", "a2u14.donijeti", "a2u14.otvoriti",
        "a2u14.glazba", "a2u14.balon", "a2u14.ukras",
      ],
    },
  ],
  srsCloze: [
    { front: "doći → »___!« (come, ti)", answers: ["Dođi", "dođi", "Dodi"], back: "Dođi! — one of the rebel four.", tts: "Dođi!" },
    { front: "otvoriti → »___ vrata!« (Vi)", answers: ["Otvorite", "otvorite"], back: "Otvorite! — Vi takes -ite.", tts: "Otvorite vrata!" },
    { front: "piti → »___!« (drink, ti)", answers: ["Pij", "pij"], back: "Pij! — rebel four.", tts: "Pij!" },
    { front: "biti → »___ veseo!« (be cheerful)", answers: ["Budi", "budi"], back: "Budi veseo! — rebel four.", tts: "Budi veseo!" },
    { front: "Marko, ___ glazbu! (donijeti)", answers: ["donesi"], back: "Marko, donesi glazbu! — VOC-name + imperative.", tts: "Marko, donesi glazbu!" },
    { front: "pozvati → »___ Anu!« (invite, ti)", answers: ["Pozovi", "pozovi"], back: "Pozovi Anu! — pozovu → pozovi.", tts: "Pozovi Anu!" },
    { front: "music = ___ (f)", answers: ["glazba"], back: "glazba (Volim glazbu.)", tts: "Volim glazbu." },
  ],
  notes: {
    inOneSentence: {
      en: "Commands are built from the oni-stem — pjevaju → pjevaj!, otvore → otvori! — with -jte/-ite for Vi and -jmo/-imo for let's; budi, jedi, pij, dođi are memorized whole.",
      exampleHr: "Dođi na proslavu! · Otvorite vrata! · Pjevajmo!",
    },
    deepDive: [
      {
        title: "The full formation table",
        body:
          "The oni row is the one place the true stem shows. Drop its ending, read off the command:\n\nThe **-aju class keeps j** (pjevaj), everything else takes **-i** (otvori, pleši, donesi). Notice *plešu → pleši* — whatever consonant oni uses, the command keeps.",
        table: {
          caption: "All six imperative forms you'll meet",
          headers: ["verb", "oni", "ti!", "mi!", "Vi!"],
          rows: [
            ["pjevati (sing)", "pjevaju", "pjevaj", "pjevajmo", "pjevajte"],
            ["gledati (watch)", "gledaju", "gledaj", "gledajmo", "gledajte"],
            ["plesati (dance)", "plešu", "pleši", "plešimo", "plešite"],
            ["otvoriti (open)", "otvore", "otvori", "otvorimo", "otvorite"],
            ["pozvati (invite)", "pozovu", "pozovi", "pozovimo", "pozovite"],
            ["donijeti (bring)", "donesu", "donesi", "donesimo", "donesite"],
            ["doći (come)", "dođu", "dođi", "dođimo", "dođite"],
          ],
        },
      },
      {
        title: "ti or Vi — the register carries over",
        body:
          "The U1 ti/Vi split applies to every command:\n\n- to a friend: *Dođi! Otvori! Donesi!*\n- to gospodin Horvat (or any group): *Dođite! Otvorite! Donesite!*\n\nAnd the **mi** form is an invitation to act together: *Pjevajmo! Plešimo!* = let's sing, let's dance. Pair commands with L1's vocative for full Croatian party mode: *Marko, donesi glazbu! Bako, dođi!*",
        diagram: {
          kind: "contrast",
          left: { title: "ti — friends & family", emoji: "🧑", lines: [{ hr: "Dođi! · Donesi poklon!", en: "Come! · Bring the gift!" }] },
          right: { title: "Vi — polite / plural", emoji: "🎩", lines: [{ hr: "Dođite! · Donesite poklon!", en: "Come! · Bring the gift!" }] },
        },
      },
      {
        title: "Three levels of push",
        body:
          "Croatian gives you a dial:\n\n1. *Možeš doći.* — you can come (permission, U11)\n2. *Moraš doći!* — you must come (obligation, U11)\n3. ***Dođi!*** — come! (direct command, today)\n\nThe imperative isn't rude — with a name and a smile (*Ivane, dođi!*) it's how friends actually talk. Politeness lives in the ti/Vi choice, not in avoiding commands.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Pjevati s nama!",
        right: "Pjevajte s nama!",
        why: "English uses the base form as a command — Croatian never commands with the infinitive.",
      },
      {
        wrong: "Dojdi!",
        right: "Dođi!",
        why: "The sound is đ (one letter), not j+d — dođi, dođite.",
      },
      {
        wrong: "Otvorete vrata!",
        right: "Otvorite vrata!",
        why: "Vi-imperative is -ite (otvorite); otvorete isn't a form at all.",
      },
      {
        wrong: "Donesaj poklon!",
        right: "Donesi poklon!",
        why: "Only -aju verbs keep j (pjevaj); donesu → donesi takes -i.",
      },
    ],
    memoryHooks: [
      "Steal from ONI: the oni row is the stem donor for every command.",
      "The rebel four rhyme-march: budi – jedi – pij – dođi.",
      "-jmo/-imo = let's — the party form: Pjevajmo! Plešimo!",
      "Commands + vocative = Croatian hosting: Marko, donesi glazbu!",
    ],
    connects: [
      { label: "The vocative — who you're commanding (Unit 14 L1)", lessonId: "a2u14l1" },
      { label: "Modals — the softer pushes (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "Next: DON'T — nemoj + infinitive (Unit 14 L3)", lessonId: "a2u14l3" },
    ],
    selfCheck: [
      { q: "Command forms of pjevati (ti) and otvoriti (Vi)?", a: "Pjevaj! · Otvorite!" },
      { q: "Where does the imperative stem come from?", a: "The oni (3pl) present form — drop its ending." },
      { q: "The four irregular commands?", a: "budi, jedi, pij, dođi." },
      { q: "»Let's dance!« = ?", a: "Plešimo! (plešu → pleš- + -imo)" },
      { q: "“Bring the balloons!” to a friend?", a: "Donesi balone!" },
    ],
  },
};
