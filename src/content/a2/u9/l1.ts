import type { Lesson } from "@/types/content";

/**
 * A2 U9 L1 — Sutra ću putovati (Future I: ću/ćeš + infinitive)
 * Spec: curriculum/A2/unit-9.md · grammar-reference §6 (htjeti), §9 (futur I).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: affirmative future I only — questions (hoćeš li) and negation
 * (neću) are L2; GEN prepositions are L3. Vocab recycled, not re-taught:
 * posjetiti & sutra (U8), more (U2), kava (U1), kolodvor (U5). "doći" is
 * glossed as a chunk on the spelling slide (its -ći spelling is spec-mandated);
 * full treatment of doći/ići futures continues through the unit.
 */
export const a2u9l1: Lesson = {
  id: "a2u9l1",
  unitId: "a2u9",
  title: "Sutra ću putovati",
  titleEn: "Tomorrow I'll travel — future I",
  grammarTags: ["future-1", "htjeti-clitic", "future-spelling"],
  estMinutes: 18,
  vocab: [
    { id: "a2u9.putovanje", hr: "putovanje", en: "trip / travel", pos: "noun", gender: "n", icon: "🧳", exampleHr: "Planiram putovanje na more.", exampleEn: "I'm planning a trip to the seaside." },
    { id: "a2u9.put", hr: "put", en: "journey / way", pos: "noun", gender: "m", icon: "🛣️", exampleHr: "Put je dug.", exampleEn: "The journey is long." },
    { id: "a2u9.plan", hr: "plan", en: "plan", pos: "noun", gender: "m", icon: "🗒️", exampleHr: "Imam plan za vikend.", exampleEn: "I have a plan for the weekend." },
    { id: "a2u9.planirati", hr: "planirati", en: "to plan (planiram)", pos: "verb", icon: "🗓️", exampleHr: "Planiram put u Split.", exampleEn: "I'm planning a trip to Split." },
    { id: "a2u9.otok", hr: "otok", en: "island", pos: "noun", gender: "m", icon: "🏝️", exampleHr: "Posjetit ćemo otok.", exampleEn: "We will visit the island." },
    { id: "a2u9.plaza", hr: "plaža", en: "beach", pos: "noun", gender: "f", icon: "🏖️", exampleHr: "Plaža je krasna.", exampleEn: "The beach is wonderful." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Sutra ću putovati",
      subtitle: "You can already say yesterday (Unit 8). After today: tomorrow.",
      emoji: "➡️",
      items: [
        { emoji: "🔩", label: "ću · ćeš · će", hint: "the future clitic — sam's new twin" },
        { emoji: "✂️", label: "pisat ću, doći ću", hint: "one tiny spelling rule" },
        { emoji: "🏝️", label: "Trip words", hint: "putovanje, plan, otok, plaža" },
        { emoji: "🎤", label: "Say a plan", hint: "your first future sentence out loud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · From yesterday to tomorrow",
      subtitle: "»Jučer sam putovao« is Unit 8. Today it becomes »Sutra ću putovati«.",
      emoji: "🔩",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "the perfekt you built in U8" },
        { emoji: "🧲", label: "ću + infinitive", hint: "same second-position seat as sam" },
        { emoji: "✅", label: "Quick check", hint: "pick the right clitic" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the past from Unit 8",
      items: [
        {
          prompt: "Unit 8: »Jučer sam ___ u Split.« (putovati — male speaker)",
          options: ["putovao", "putovati", "putujem"],
          correctIndex: 0,
          explanation: "Perfekt = clitic + participle: putovao. Hold this pattern — the future reuses the clitic seat.",
        },
        {
          prompt: "Which is correct? (the clitic rule from U1/U8)",
          options: ["Bio sam kod kuće.", "Sam bio kod kuće.", "Bio kod kuće sam."],
          correctIndex: 0,
          explanation: "The clitic sam never comes first — second position. Today's ću obeys the same law.",
        },
        {
          prompt: "Listen — when was she in the city?",
          tts: "Jučer sam bila u gradu.",
          options: ["yesterday", "today", "tomorrow"],
          correctIndex: 0,
          explanation: "jučer = yesterday. After this lesson you'll flip it: sutra ću biti…",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's trip words",
      vocabIds: ["a2u9.putovanje", "a2u9.put", "a2u9.plan", "a2u9.planirati", "a2u9.otok", "a2u9.plaza"],
    },
    {
      id: "s05",
      type: "teach",
      title: "The future is one clitic away: ću + infinitive",
      body:
        "To say what **will** happen, take the **infinitive** (the dictionary form you've known since Unit 4) and add the **htjeti-clitic**:\n\n- *Sutra **ću** putovati u Split.* = Tomorrow I **will** travel to Split.\n\nThe clitic changes by person — and it sits **exactly where sam sits**: second position, never first. Same train, new wagon.",
      table: {
        caption: "The future clitic (from htjeti) — 6 persons",
        headers: ["person", "clitic", "example"],
        rows: [
          ["ja", "ću", "Sutra ću putovati."],
          ["ti", "ćeš", "Ti ćeš planirati put."],
          ["on / ona", "će", "Ana će posjetiti otok."],
          ["mi", "ćemo", "Putovat ćemo na more."],
          ["vi", "ćete", "Vi ćete planirati putovanje."],
          ["oni / one", "će", "Oni će doći sutra."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Clitic never first — same law as sam",
        text: "~~Ću putovati.~~ ❌ → Putovat ću. ✅ · Sutra ću putovati. ✅ · Ja ću putovati. ✅",
      },
      examples: [
        { hr: "Sutra ću putovati u Split.", en: "Tomorrow I'll travel to Split." },
        { hr: "Posjetit ću baku Mariju.", en: "I'll visit grandma Marija.", note: "posjetiti — your U8 verb, now pointed forward" },
        { hr: "Ana će planirati putovanje.", en: "Ana will plan the trip." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The spelling card: pisat ću, but doći ću",
      body:
        "When the **verb comes first**, spelling changes a tiny bit:\n\n- **-ti verbs drop the final -i**: pisati → **pisat ću** · putovati → **putovat ću**\n- **-ći verbs keep everything**: doći → **doći ću** · ići → **ići ću**\n\nWhen the clitic comes **earlier** (after sutra, ja, Ana…), the infinitive stays whole: *Sutra ću putovati.* — no cut.\n\n*(doći = to come — you met **došao** in Unit 8; this is its dictionary form.)*",
      table: {
        caption: "Verb-first spelling — two columns, one rule",
        headers: ["-ti → -t ✂️", "-ći stays whole ✅"],
        rows: [
          ["pisati → pisat ću", "doći → doći ću"],
          ["putovati → putovat ću", "ići → ići ću"],
          ["planirati → planirat ću", "stići → stići ću (soon!)"],
        ],
      },
      examples: [
        { hr: "Putovat ću sutra.", en: "I'll travel tomorrow.", note: "verb first → -t" },
        { hr: "Doći ću u hotel u osam sati.", en: "I'll arrive at the hotel at eight.", note: "-ći keeps its shape" },
        { hr: "Sutra ću putovati.", en: "Tomorrow I'll travel.", note: "clitic earlier → full infinitive" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: clitics & spelling",
      items: [
        {
          prompt: "Sutra ___ putovati na more. (mi — we)",
          options: ["ćemo", "ću", "ćete"],
          correctIndex: 0,
          explanation: "mi → ćemo: Sutra ćemo putovati na more.",
        },
        {
          prompt: "Which spelling is correct?",
          options: ["Pisat ću pismo.", "Pisati ću pismo.", "Pišat ću pismo."],
          correctIndex: 0,
          explanation: "-ti verbs drop the -i when the verb comes first: pisat ću.",
        },
        {
          prompt: "Marko ___ posjetiti otok.",
          options: ["će", "ćeš", "ćemo"],
          correctIndex: 0,
          explanation: "on → će: Marko će posjetiti otok.",
        },
        {
          prompt: "Which is correct? (-ći verb)",
          options: ["Doći ću sutra.", "Doć ću sutra.", "Ću doći sutra."],
          correctIndex: 0,
          explanation: "-ći verbs keep everything: doći ću. (And the clitic never opens the sentence.)",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Future plans — tap to hear",
      items: [
        { hr: "Ovo ljeto ćemo putovati na otok.", en: "This summer we'll travel to the island." },
        { hr: "Plaža je krasna — sutra ću biti na plaži cijeli dan.", en: "The beach is wonderful — tomorrow I'll be on the beach all day." },
        { hr: "Tom će planirati put, a Ana će planirati plan za svaki dan.", en: "Tom will plan the journey, and Ana will plan a plan for every day." },
        { hr: "Putovanje će biti dugo, ali krasno.", en: "The trip will be long, but wonderful." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Sutra ___ putovati u Split. (ja)",
      blanks: [["ću"]],
      translation: "Tomorrow I'll travel to Split.",
      wordBank: ["ću", "ćeš", "će"],
      explanation: "ja → ću, sitting in second position after »sutra«.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ti ___ planirati putovanje.",
      blanks: [["ćeš"]],
      translation: "You will plan the trip.",
      wordBank: ["ćeš", "ću", "ćemo"],
      explanation: "ti → ćeš.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana i Marko ___ posjetiti otok.",
      blanks: [["će"]],
      translation: "Ana and Marko will visit the island.",
      wordBank: ["će", "ćemo", "ćete"],
      explanation: "oni → će (same clitic as on/ona).",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Build it & say it",
      subtitle: "Type, build and speak your first future sentences.",
      emoji: "✍️",
      items: [
        { emoji: "🔀", label: "Build sentences", hint: "clitic in second position!" },
        { emoji: "⌨️", label: "Type the future", hint: "»We will visit the island«" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "One plan out loud", hint: "Sutra ću…" },
      ],
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Sutra", "ću", "planirati", "put"],
      answers: ["Sutra ću planirati put.", "Sutra ću planirati put"],
      en: "Tomorrow I'll plan the journey.",
      explanation: "Time word first, clitic second: Sutra ću planirati put.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Putovat", "ćemo", "na", "otok"],
      answers: ["Putovat ćemo na otok.", "Putovat ćemo na otok"],
      en: "We'll travel to the island.",
      explanation: "Verb first → putovat (no -i) + ćemo right behind it.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “We will visit the island.”",
      answers: ["Posjetit ćemo otok.", "Posjetit ćemo otok", "Mi ćemo posjetiti otok.", "Mi ćemo posjetiti otok"],
      hint: "posjetiti → verb-first spelling cuts the -i",
      explanation: "Posjetit ćemo otok. (verb first → posjetit; or: Mi ćemo posjetiti otok.)",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Write it in Croatian: “Tomorrow I will travel.”",
      answers: ["Sutra ću putovati.", "Sutra ću putovati", "Putovat ću sutra.", "Putovat ću sutra"],
      explanation: "Sutra ću putovati. — or verb-first: Putovat ću sutra.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Sutra ću putovati u Split.",
      explanation: "Sutra ću putovati u Split — tomorrow I'll travel to Split.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Posjetit ćemo baku Mariju.",
      explanation: "Posjetit ćemo baku Mariju — we'll visit grandma Marija.",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: old friends in future sentences",
      items: [
        {
          prompt: "Unit 8 said »Jučer sam radio.« Tomorrow: »Sutra ću ___.«",
          options: ["raditi", "radio", "radim"],
          correctIndex: 0,
          explanation: "After ću comes the INFINITIVE: Sutra ću raditi. (The participle radio belongs to the past.)",
        },
        {
          prompt: "Unit 1's kava, pointed forward: »Sutra ću ___ kavu.«",
          options: ["piti", "pijem", "pio"],
          correctIndex: 0,
          explanation: "ću + infinitive: Sutra ću piti kavu.",
        },
        {
          prompt: "Listen (kolodvor is Unit 5): where will they go tomorrow?",
          tts: "Sutra ćemo ići na kolodvor.",
          options: ["to the station", "to the beach", "to the museum"],
          correctIndex: 0,
          explanation: "na kolodvor = to the station; ćemo ići = we will go.",
        },
      ],
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Sutra ću putovati na more.",
      targetEn: "say one plan for tomorrow — Tomorrow I'll travel to the seaside.",
      phonetic: "SOO-tra choo poo-TOH-va-tee na MO-reh",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The future is open!** Future I = **htjeti-clitic + infinitive**: **ću, ćeš, će, ćemo, ćete, će** — and the clitic keeps the second-position law it learned as *sam*.\n\nSpelling: verb first cuts **-ti → -t** (*putovat ću, pisat ću*) but **-ći stays whole** (*doći ću, ići ću*); with the clitic earlier, the infinitive survives intact (*Sutra ću putovati*).\n\nTrip words tonight: **putovanje, put, plan, planirati, otok, plaža**.\n\nNext lesson: asking and refusing — *Hoćeš li doći? Neću!*",
      vocabIds: ["a2u9.putovanje", "a2u9.put", "a2u9.plan", "a2u9.planirati", "a2u9.otok", "a2u9.plaza"],
    },
  ],
  srsCloze: [
    { front: "Sutra ___ putovati u Split. (ja)", answers: ["ću", "cu"], back: "Sutra ću putovati u Split. (ja → ću)", tts: "Sutra ću putovati u Split." },
    { front: "Ti ___ planirati putovanje.", answers: ["ćeš", "ces"], back: "Ti ćeš planirati putovanje. (ti → ćeš)", tts: "Ti ćeš planirati putovanje." },
    { front: "Ana ___ posjetiti otok.", answers: ["će", "ce"], back: "Ana će posjetiti otok. (ona → će)", tts: "Ana će posjetiti otok." },
    { front: "Sutra ___ putovati na more. (mi)", answers: ["ćemo", "cemo"], back: "Sutra ćemo putovati na more. (mi → ćemo)", tts: "Sutra ćemo putovati na more." },
    { front: "Vi ___ planirati put.", answers: ["ćete", "cete"], back: "Vi ćete planirati put. (vi → ćete)", tts: "Vi ćete planirati put." },
    { front: "Tom i Ana ___ doći sutra. (oni)", answers: ["će", "ce"], back: "Tom i Ana će doći sutra. (oni → će)", tts: "Tom i Ana će doći sutra." },
    { front: "pisati → ___ ću (verb-first spelling)", answers: ["pisat"], back: "pisati → pisat ću (-ti drops the -i)", tts: "Pisat ću." },
    { front: "doći → ___ ću (verb-first spelling)", answers: ["doći", "doci"], back: "doći → doći ću (-ći keeps everything)", tts: "Doći ću." },
  ],
  notes: {
    inOneSentence: {
      en: "Future I = the htjeti-clitic (ću, ćeš, će, ćemo, ćete, će) + the infinitive, with the clitic in the same second position sam uses.",
      exampleHr: "Sutra ću putovati u Split. · Putovat ću sutra. · Ana će posjetiti otok.",
    },
    deepDive: [
      {
        title: "One clitic, the whole future",
        body:
          "Croatian's everyday future (**futur I**) needs no new verb forms — just the clitic of **htjeti** plus the infinitive you already know for every verb.\n\nThe clitic obeys the second-position law you've lived with since Unit 1: it can never open the clause. So the sentence starts with a time word (*Sutra ću putovati*), the subject (*Ja ću putovati*), or the verb itself (*Putovat ću*) — anything but the clitic.",
        table: {
          caption: "Future I — full paradigm (putovati)",
          headers: ["person", "clitic-early", "verb-first"],
          rows: [
            ["ja", "Ja ću putovati.", "Putovat ću."],
            ["ti", "Ti ćeš putovati.", "Putovat ćeš."],
            ["on / ona", "On će putovati.", "Putovat će."],
            ["mi", "Mi ćemo putovati.", "Putovat ćemo."],
            ["vi", "Vi ćete putovati.", "Putovat ćete."],
            ["oni / one", "Oni će putovati.", "Putovat će."],
          ],
        },
      },
      {
        title: "The -t / -ći spelling rule",
        body:
          "Only when the **verb stands first** does spelling change: **-ti** infinitives drop the final **-i** in writing (*pisat ću, putovat ću, planirat ću*) — the pronunciation glues together anyway. **-ći** infinitives (doći, ići, stići) change nothing: *doći ću, ići ću*.\n\nWith the clitic earlier in the sentence, the infinitive is always written in full: *Sutra ću pisati.* Never cut it there.",
        table: {
          caption: "Cut or keep?",
          headers: ["infinitive ends in", "verb first", "clitic earlier"],
          rows: [
            ["-ti (pisati)", "pisat ću ✂️", "Sutra ću pisati."],
            ["-ći (doći)", "doći ću ✅", "Sutra ću doći."],
          ],
        },
        diagram: {
          kind: "contrast",
          left: { title: "Verb first → cut -ti", emoji: "✂️", lines: [{ hr: "Putovat ću sutra.", en: "I'll travel tomorrow." }, { hr: "Posjetit ćemo otok.", en: "We'll visit the island." }] },
          right: { title: "-ći / clitic earlier → whole", emoji: "✅", lines: [{ hr: "Doći ću u osam.", en: "I'll come at eight." }, { hr: "Sutra ću putovati.", en: "Tomorrow I'll travel." }] },
        },
      },
      {
        title: "Past · present · future — the triangle is complete",
        body:
          "You now own all three time zones with the same clitic mechanics:\n\n- **Past (U8):** *Jučer sam putovao.* — biti-clitic + participle\n- **Present (U4–U6):** *Danas putujem.* — one word\n- **Future (today):** *Sutra ću putovati.* — htjeti-clitic + infinitive\n\nBoth clitics (sam, ću) sit in second position; only the partner changes (participle ↔ infinitive).",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ću putovati sutra.",
        right: "Putovat ću sutra. / Sutra ću putovati.",
        why: "ću is a clitic — it can never open the sentence, exactly like sam.",
      },
      {
        wrong: "Pisati ću pismo.",
        right: "Pisat ću pismo.",
        why: "When a -ti verb stands first, its final -i is cut in spelling: pisat ću.",
      },
      {
        wrong: "Doć ću sutra.",
        right: "Doći ću sutra.",
        why: "-ći verbs never get cut: doći ću, ići ću, stići ću.",
      },
      {
        wrong: "Idem putovati sutra. (for “I'm going to travel”)",
        right: "Putovat ću sutra.",
        why: "English “going to” is NOT translated with ići — Croatian just uses future I.",
      },
      {
        wrong: "Sutra ću putovao.",
        right: "Sutra ću putovati.",
        why: "ću takes the INFINITIVE (putovati), never the past participle (putovao).",
      },
    ],
    memoryHooks: [
      "Same train, new wagon: ću sits exactly where sam sits — second position, always.",
      "ć-words for the future: ću, ćeš, će, ćemo, ćete, će — six ć's pointing forward ➡️.",
      "Cut -ti, keep -ći: pisat ću ✂️ but doći ću ✅.",
      "Triangle done: Radio sam · Radim · Radit ću — past, present, future in one breath.",
    ],
    connects: [
      { label: "The second-position clitic law (Unit 1 L3, Unit 8 L3)", lessonId: "a1u8l3" },
      { label: "Perfekt — the past half of the triangle (Unit 8 L2)", lessonId: "a1u8l2" },
      { label: "Next: future questions & neću (Unit 9 L2)", lessonId: "a2u9l2" },
    ],
    selfCheck: [
      { q: "How do you say “Tomorrow I'll travel to Split”?", a: "Sutra ću putovati u Split. (or: Putovat ću sutra u Split.)" },
      { q: "Why is »Ću putovati« wrong?", a: "ću is a clitic and can never come first — say Putovat ću or Sutra ću putovati." },
      { q: "pisati and doći — how do they look before ću?", a: "pisat ću (-ti drops the -i) but doći ću (-ći keeps everything)." },
      { q: "All six future clitics?", a: "ću, ćeš, će, ćemo, ćete, će." },
      { q: "“Ana will visit the island” = ?", a: "Ana će posjetiti otok." },
    ],
  },
};
