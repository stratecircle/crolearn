import type { Lesson } from "@/types/content";

/**
 * A2 U13 L3 — Toplije i hladnije (comparatives)
 * Spec: curriculum/A2/unit-13.md · grammar-reference §4.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: comparisons WITHOUT a standard only — od + GEN / nego + NOM is
 * L4. The U8 weather ADVERBS (toplo/hladno/vruće) are the recycled hook for
 * the new adjective forms. »Danas mi je bolje« = the promised U11 payoff.
 * još glossed on first use (još + comparative = even …er).
 */
export const a2u13l3: Lesson = {
  id: "a2u13l3",
  unitId: "a2u13",
  title: "Toplije i hladnije",
  titleEn: "Warmer and colder — comparatives",
  grammarTags: ["comparatives", "irregular-comparatives", "seasons"],
  estMinutes: 19,
  vocab: [
    { id: "a2u13.proljece", image: "/img/proljece.png", hr: "proljeće", en: "spring", pos: "noun", gender: "n", icon: "🌸", exampleHr: "Proljeće je lijepo.", exampleEn: "Spring is beautiful." },
    { id: "a2u13.jesen", image: "/img/jesen.png", hr: "jesen", en: "autumn (f — an -i noun!)", pos: "noun", gender: "f", icon: "🍂", exampleHr: "U jesen pada kiša.", exampleEn: "In autumn it rains." },
    { id: "a2u13.zima", image: "/img/zima.png", hr: "zima", en: "winter", pos: "noun", gender: "f", icon: "❄️", exampleHr: "Zima je hladna.", exampleEn: "Winter is cold." },
    { id: "a2u13.godisnjedoba", image: "/img/godisnjedoba.png", hr: "godišnje doba", en: "season (of the year)", pos: "phrase", gender: "n", icon: "🗓️", exampleHr: "U Hrvatskoj ima četiri godišnja doba.", exampleEn: "Croatia has four seasons." },
    { id: "a2u13.topao", image: "/img/topao.png", hr: "topao", en: "warm (topla, toplo)", pos: "adj", icon: "🌡️", exampleHr: "Ljeto je toplo.", exampleEn: "Summer is warm." },
    { id: "a2u13.hladan", image: "/img/hladan.png", hr: "hladan", en: "cold (hladna, hladno)", pos: "adj", icon: "🥶", exampleHr: "Danas je hladan dan.", exampleEn: "Today is a cold day." },
    { id: "a2u13.vruc", image: "/img/vruc.png", hr: "vruć", en: "hot (vruća, vruće)", pos: "adj", icon: "🔥", exampleHr: "Ljeti je vruće.", exampleEn: "In summer it's hot." },
    { id: "a2u13.svjez", image: "/img/svjez.png", hr: "svjež", en: "fresh / cool (svježa, svježe)", pos: "adj", icon: "🍃", exampleHr: "Voda je svježa.", exampleEn: "The water is fresh." },
    { id: "a2u13.ljeti", image: "/img/ljeti.png", hr: "ljeti", en: "in summer (fixed adverb)", pos: "adv", icon: "☀️", exampleHr: "Ljeti idemo na more.", exampleEn: "In summer we go to the seaside.", tags: ["chunk"] },
    { id: "a2u13.zimi", image: "/img/zimi.png", hr: "zimi", en: "in winter (fixed adverb)", pos: "adv", icon: "⛷️", exampleHr: "Zimi pada snijeg.", exampleEn: "In winter it snows.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Toplije i hladnije",
      subtitle: "Winter is cold. Autumn is colder. Now you can rank the world.",
      emoji: "🌡️",
      items: [
        { emoji: "➕", label: "-iji: the comparer", hint: "star → stariji" },
        { emoji: "⭐", label: "The irregular four", hint: "bolji · gori · veći · manji" },
        { emoji: "🍂", label: "The seasons wheel", hint: "proljeće → ljeto → jesen → zima" },
        { emoji: "🎤", label: "Danas je toplije!", hint: "compare today & yesterday" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Making \"colder\"",
      subtitle: "You've said Toplo je since Unit 8. One suffix turns it into a ranking machine.",
      emoji: "➕",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "U8 weather retrieval" },
        { emoji: "📊", label: "The -iji rule", hint: "plus a sneak peek at -ši" },
        { emoji: "⭐", label: "Four rebels", hint: "no dobriji, ever" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the weather you already speak",
      items: [
        {
          prompt: "Listen (U8): what's the weather like?",
          tts: "Danas je sunčano i toplo.",
          options: ["sunny and warm", "cloudy and cold", "rainy and windy"],
          correctIndex: 0,
          explanation: "sunčano i toplo — the U8 adverbs. Today they grow comparative forms.",
        },
        {
          prompt: "U3 adjectives: the opposite of star is…",
          options: ["mlad", "malen", "nizak"],
          correctIndex: 0,
          explanation: "star ↔ mlad. Both get comparatives today: stariji, mlađi.",
        },
        {
          prompt: "U8 perfekt: »Jučer je padala kiša.« means…",
          options: ["It rained yesterday", "It's raining today", "It will rain tomorrow"],
          correctIndex: 0,
          explanation: "padala je kiša — past narration. Keep it: today we compare jučer and danas.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Seasons & temperature words",
      vocabIds: [
        "a2u13.proljece", "a2u13.jesen", "a2u13.zima", "a2u13.godisnjedoba",
        "a2u13.topao", "a2u13.hladan", "a2u13.vruc", "a2u13.svjez",
        "a2u13.ljeti", "a2u13.zimi",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The comparative: add -iji",
      body:
        "Most adjectives compare with **-iji**:\n\n*star → **stariji** · hladan → **hladniji** · topao → **topliji*** (the o slips out, like a fleeting a!) *· svjež → **svježiji** · nov → **noviji***\n\nA short-adjective family instead mutates and takes **-ši/-i** — meet two now, more tomorrow: *lijep → **ljepši***, *visok → **viši***.\n\nComparatives **decline like adjectives** (stariji/starija/starije), and the neuter doubles as the \"it\" form: *Danas je **hladnije**.* — just like *Hladno je* (U8), one level up.\n\n*(još + comparative = even …er: **još viša** = even higher.)*",
      diagram: {
        kind: "contrast",
        left: {
          title: "positive",
          emoji: "🌡️",
          lines: [
            { hr: "star · hladan · topao", en: "old · cold · warm" },
          ],
        },
        right: {
          title: "+ -iji = comparative",
          emoji: "📈",
          lines: [
            { hr: "stariji · hladniji · topliji", en: "older · colder · warmer" },
          ],
        },
      },
      table: {
        caption: "The -iji machine",
        headers: ["adjective", "comparative", "meaning"],
        rows: [
          ["star", "stariji", "older"],
          ["hladan", "hladniji", "colder"],
          ["topao (o out!)", "topliji", "warmer"],
          ["svjež", "svježiji", "fresher"],
          ["lijep (mutates)", "ljepši", "prettier"],
          ["visok (mutates)", "viši", "higher / taller"],
        ],
      },
      examples: [
        { hr: "Danas je hladnije.", en: "It's colder today." },
        { hr: "Velebit je visok, a Dinara je još viša.", en: "Velebit is high, and Dinara is even higher.", note: "još + comparative = even …er" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The irregular four — and a promise kept",
      body:
        "Four everyday adjectives refuse -iji. Chant them: **bolji – gori – veći – manji**.\n\nAnd the payoff promised in Unit 11: the feeling family grows its comparative — ***Danas mi je bolje.*** (I feel better today.) Same dative radar dish, one level up from *dobro mi je*.",
      table: {
        caption: "The irregular four",
        headers: ["adjective", "comparative", "meaning"],
        rows: [
          ["dobar", "bolji", "better"],
          ["loš", "gori", "worse"],
          ["velik", "veći", "bigger"],
          ["malen / mali", "manji", "smaller"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Never build these by rule",
        text: "❌ dobriji · ❌ lošiji (say gori) · ❌ velikiji · ❌ maliji — the four rebels only: bolji, gori, veći, manji.",
      },
      examples: [
        { hr: "Kava u Zagrebu je dobra, ali kava kod bake je bolja.", en: "Coffee in Zagreb is good, but coffee at grandma's is better." },
        { hr: "Danas mi je bolje.", en: "I feel better today.", note: "the U11 dative family, one level up" },
        { hr: "Moj stan je malen, ali Anin stan je manji.", en: "My flat is small, but Ana's flat is smaller." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: build the comparative",
      items: [
        {
          prompt: "star → ?",
          options: ["stariji", "starši", "više star"],
          correctIndex: 0,
          explanation: "Default machine: star + -iji = stariji. (Croatian never says »više star«.)",
        },
        {
          prompt: "hladan → ?",
          options: ["hladniji", "hladši", "hladnii"],
          correctIndex: 0,
          explanation: "hladniji — plain -iji.",
        },
        {
          prompt: "dobar → ?",
          options: ["bolji", "dobriji", "boljiji"],
          correctIndex: 0,
          explanation: "Irregular: dobar → bolji. dobriji does not exist.",
        },
        {
          prompt: "lijep → ?",
          options: ["ljepši", "lijepiji", "ljepiji"],
          correctIndex: 0,
          explanation: "Mutation family: lijep → ljepši (ije shrinks to je).",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · The seasons wheel",
      subtitle: "Four seasons to compare — and two little adverbs, ljeti and zimi.",
      emoji: "🍂",
      items: [
        { emoji: "🎡", label: "proljeće → zima", hint: "the wheel turns" },
        { emoji: "☀️", label: "ljeti / zimi", hint: "in summer / in winter" },
        { emoji: "🧩", label: "Match & build", hint: "adjectives to comparatives" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "Godišnja doba — the seasons wheel",
      body:
        "Meet the year: **proljeće** 🌸 → **ljeto** ☀️ (U1!) → **jesen** 🍂 → **zima** ❄️. Together: četiri **godišnja doba**.\n\nTwo fixed little adverbs do heavy lifting: **ljeti** (in summer) and **zimi** (in winter): *Ljeti je vruće, zimi je hladno.*\n\nNote **jesen** is a feminine -i noun (like noć): *u jesen* = in autumn.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "proljeće", emoji: "🌸", example: "svježe" },
          { label: "ljeto", emoji: "☀️", example: "vruće — ljeti" },
          { label: "jesen", emoji: "🍂", example: "pada kiša" },
          { label: "zima", emoji: "❄️", example: "hladno — zimi" },
        ],
      },
      examples: [
        { hr: "Ljeti je vruće, a zimi je hladno.", en: "In summer it's hot, and in winter it's cold." },
        { hr: "Zimi pada snijeg.", en: "In winter it snows." },
        { hr: "U Hrvatskoj ima četiri godišnja doba.", en: "Croatia has four seasons." },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match the adjective to its comparative",
      pairs: [
        { a: "dobar", b: "bolji" },
        { a: "loš", b: "gori" },
        { a: "velik", b: "veći" },
        { a: "mali", b: "manji" },
        { a: "star", b: "stariji" },
      ],
    },
    {
      id: "s11",
      type: "type",
      prompt: "It's warmer today: »Danas je ___.« (topao — the 'it' form)",
      answers: ["toplije"],
      hint: "neuter comparative — and the o slips out",
      explanation: "Danas je toplije — topao → topliji, neuter toplije.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "My grandpa is older: »Moj djed je ___.« (star)",
      answers: ["stariji"],
      hint: "masculine -iji",
      explanation: "Moj djed je stariji.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Winter is colder: »Zima je ___.« (hladan — feminine!)",
      answers: ["hladnija"],
      hint: "comparatives decline: -iji / -ija / -ije",
      explanation: "Zima je hladnija — feminine hladnija.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Bio sam bolestan, ali danas mi je ___. (the U11 feeling, one level up)",
      blanks: [["bolje"]],
      translation: "I was sick, but today I feel better.",
      wordBank: ["bolje", "dobro", "bolji"],
      explanation: "Danas mi je bolje — dative feeling + neuter comparative bolje.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Sviđa mi se proljeće, ali ljeto je ___. (dobar — comparative, neuter!)",
      blanks: [["bolje"]],
      translation: "I like spring, but summer is better.",
      wordBank: ["bolje", "bolja", "dobrije"],
      explanation: "ljeto (n) → bolje. The irregular four decline like any adjective.",
    },
    {
      id: "s16",
      type: "section",
      title: "Part 3 · Ears, voice & flashbacks",
      subtitle: "Hear the comparatives, then rank your own week.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "hladnije · bolja" },
        { emoji: "🎤", label: "Danas je toplije", hint: "today vs yesterday" },
        { emoji: "🔗", label: "Weather stories", hint: "U8 + U10 meet -iji" },
      ],
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Danas je hladnije.",
      explanation: "Danas je hladnije — it's colder today.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Kava kod bake je bolja.",
      explanation: "Kava kod bake je bolja — coffee at grandma's is better.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Danas je toplije.",
      targetEn: "compare today with yesterday, out loud — It's warmer today. (or: hladnije / ljepše…)",
      phonetic: "DA-nas ye TOP-lee-ye",
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: weather stories & feelings",
      items: [
        {
          prompt: "Listen (U8 + today): what happened?",
          tts: "Jučer je padala kiša, danas je hladnije.",
          options: [
            "It rained yesterday, and today is colder",
            "It's raining today and it's cold",
            "It will rain tomorrow and be colder",
          ],
          correctIndex: 0,
          explanation: "Perfekt narration (U8) + today's comparative: danas je hladnije.",
        },
        {
          prompt: "U10 flashback: »Sviđa mi se jesen.« means…",
          options: ["I like autumn", "Autumn suits me better", "I'm sad in autumn"],
          correctIndex: 0,
          explanation: "sviđa mi se + NOM: autumn pleases me → I like autumn.",
        },
        {
          prompt: "Marko: »Zimi je more hladno, ali ljeti je toplo.« When is the sea warm?",
          options: ["in summer", "in winter", "never"],
          correctIndex: 0,
          explanation: "ljeti = in summer (the fixed adverb).",
        },
      ],
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Comparative = adjective + -iji**: *stariji, hladniji, topliji* (o slips out), *svježiji*. A short family mutates instead: *ljepši, viši* (more tomorrow).\n\n**The irregular four — chant it**: *bolji – gori – veći – manji*. Never *dobriji*.\n\nComparatives **decline** (*stariji/starija/starije*), and neuter is the \"it\" form: *Danas je hladnije. Danas mi je **bolje*** (the U11 payoff!).\n\n**The wheel**: proljeće → ljeto → jesen → zima; *ljeti / zimi* = in summer / in winter.\n\nWords tonight: **proljeće, jesen, zima, godišnje doba, topao, hladan, vruć, svjež, ljeti, zimi**.",
      vocabIds: [
        "a2u13.proljece", "a2u13.jesen", "a2u13.zima", "a2u13.godisnjedoba",
        "a2u13.topao", "a2u13.hladan", "a2u13.vruc", "a2u13.svjez",
        "a2u13.ljeti", "a2u13.zimi",
      ],
    },
  ],
  srsCloze: [
    { front: "dobar → ___ (better)", answers: ["bolji"], back: "dobar → bolji (irregular four).", tts: "Kava kod bake je bolja." },
    { front: "loš → ___ (worse)", answers: ["gori"], back: "loš → gori (irregular four).", tts: "gori" },
    { front: "velik → ___ (bigger)", answers: ["veći", "veci"], back: "velik → veći (irregular four).", tts: "veći" },
    { front: "mali → ___ (smaller)", answers: ["manji"], back: "mali/malen → manji (irregular four).", tts: "manji" },
    { front: "visok → ___ (higher — mutation!)", answers: ["viši", "visi"], back: "visok → viši.", tts: "viši" },
    { front: "topao → ___ (warmer, m — the o slips out)", answers: ["topliji"], back: "topao → topliji.", tts: "topliji" },
    { front: "I feel better today: Danas ___ je bolje.", answers: ["mi"], back: "Danas mi je bolje — the dative feeling family.", tts: "Danas mi je bolje." },
    { front: "in winter = ___ (fixed adverb)", answers: ["zimi"], back: "zimi (Zimi pada snijeg.)", tts: "Zimi pada snijeg." },
    { front: "autumn = ___ (f, -i noun)", answers: ["jesen"], back: "jesen (U jesen pada kiša.)", tts: "U jesen pada kiša." },
  ],
  notes: {
    inOneSentence: {
      en: "Add -iji to compare (stariji, hladniji, topliji); a short family mutates (ljepši, viši); and four rebels are memorized whole — bolji, gori, veći, manji.",
      exampleHr: "Danas je hladnije. · Kava kod bake je bolja.",
    },
    deepDive: [
      {
        title: "The full formation table",
        body:
          "Three roads to the comparative:\n\n1. **-iji** — the default, always safe to try first: *star→stariji, hladan→hladniji, svjež→svježiji, spor→sporiji, nov→noviji*. Watch *topao → topliji* — the o vanishes like a fleeting a.\n2. **-ši / -i with mutation** — a closed set of short, common adjectives: *lijep→ljepši, visok→viši, jak→jači, mlad→mlađi, skup→skuplji* (L4 adds *dublji, kraći, brži, širi, niži, dulji/duži*).\n3. **Irregular** — the four rebels: *dobar→bolji, loš→gori, velik→veći, malen/mali→manji*.\n\nAll comparatives **decline like adjectives**: *stariji brat, starija sestra, starije selo; stariji ljudi*.",
        table: {
          caption: "Comparative formation",
          headers: ["road", "examples"],
          rows: [
            ["-iji (default)", "stariji · hladniji · topliji · svježiji · sporiji"],
            ["mutation + -ši/-i", "ljepši · viši · mlađi · jači"],
            ["irregular four", "bolji · gori · veći · manji"],
          ],
        },
      },
      {
        title: "No »more cold« in Croatian",
        body:
          "English has two roads (colder / more interesting). Croatian has ONE: the suffix. *više hladan* is not Croatian — the comparative is always built into the word: *hladniji*.\n\nThe neuter form doubles as the impersonal \"it\" form, upgrading your U8 weather talk: *Hladno je* → *Danas je **hladnije***. And the U11 dative feelings upgrade the same way: *dobro mi je* → ***bolje** mi je*.",
        diagram: {
          kind: "contrast",
          left: { title: "U8 / U11 — plain", emoji: "🌤️", lines: [{ hr: "Toplo je. · Dobro mi je.", en: "It's warm. · I feel fine." }] },
          right: { title: "today — compared", emoji: "📈", lines: [{ hr: "Danas je toplije. · Danas mi je bolje.", en: "It's warmer today. · I feel better today." }] },
        },
      },
      {
        title: "jesen, doba, and the two little adverbs",
        body:
          "**jesen** joins noć in the feminine -i family: *u jesen* (in autumn), GEN *jeseni*.\n\n**doba** (era/season) is an unusual neuter that doesn't change: *godišnje doba, četiri godišnja doba*.\n\n**ljeti** and **zimi** are fossilized one-word adverbs — no preposition needed: *Ljeti idemo na more. Zimi pada snijeg.* (For spring and autumn you say *u proljeće, u jesen*.)",
      },
    ],
    commonMistakes: [
      {
        wrong: "više dobar / više hladan",
        right: "bolji / hladniji",
        why: "Croatian has no analytic comparison — the suffix does everything.",
      },
      {
        wrong: "dobriji",
        right: "bolji",
        why: "dobar is one of the irregular four: bolji-gori-veći-manji.",
      },
      {
        wrong: "velikiji",
        right: "veći",
        why: "velik is irregular too — veći.",
      },
      {
        wrong: "Zima je hladnije.",
        right: "Zima je hladnija.",
        why: "Comparatives agree: zima is feminine → hladnija. (hladnije = neuter/'it' form.)",
      },
    ],
    memoryHooks: [
      "The chant: BOLJI – GORI – VEĆI – MANJI. March it, four beats.",
      "topao drops its o exactly like pas drops its a — Croatian trims before it builds: topliji.",
      "-iji sounds like 'ee-yee' — the sound of one-upping: stariji, hladniji.",
      "ljeti/zimi: the two seasons Croats live in get their own one-word adverbs.",
    ],
    connects: [
      { label: "Weather adverbs — the base layer (Unit 8 L4)", lessonId: "a1u8l4" },
      { label: "The dative feeling family (Unit 11 L3)", lessonId: "a2u11l3" },
      { label: "Next: superlatives + od/nego (Unit 13 L4)", lessonId: "a2u13l4" },
    ],
    selfCheck: [
      { q: "Comparatives of star, topao, dobar?", a: "stariji, topliji (o out), bolji (irregular)." },
      { q: "»It's colder today« = ?", a: "Danas je hladnije. (neuter 'it' form)" },
      { q: "The irregular four?", a: "bolji, gori, veći, manji (dobar, loš, velik, mali)." },
      { q: "»I feel better today« = ?", a: "Danas mi je bolje. (dative + neuter comparative)" },
      { q: "in summer / in winter, one word each?", a: "ljeti / zimi." },
    ],
  },
};
