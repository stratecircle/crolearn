import type { Lesson } from "@/types/content";

/**
 * A1 U8 L4 — Kakvo je vrijeme? (Weather, today & yesterday)
 * Spec: curriculum/A1/unit-8.md · grammar-reference §8 (perfekt, neuter participle).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: weather frames in present + past only. Impersonal neuter »Bilo
 * je …«; »Padala je kiša« (kiša f → padala agrees). »Kakvo je vrijeme?« and
 * »ima vjetra/oblaka« are glossed on-slide. Full past machinery is L1–L3.
 */
export const a1u8l4: Lesson = {
  id: "a1u8l4",
  unitId: "a1u8",
  title: "Kakvo je vrijeme?",
  titleEn: "What's the weather like?",
  grammarTags: ["weather", "perfekt", "impersonal"],
  estMinutes: 18,
  vocab: [
    { id: "a1u8.vrijeme", image: "/img/vrijeme.png", hr: "vrijeme", en: "weather (also = time!)", pos: "noun", gender: "n", icon: "🌦️", exampleHr: "Kakvo je vrijeme danas?", exampleEn: "What's the weather like today?" },
    { id: "a1u8.sunce", image: "/img/sunce.png", hr: "sunce", en: "sun", pos: "noun", gender: "n", icon: "☀️", exampleHr: "Volim sunce i more.", exampleEn: "I love the sun and the sea." },
    { id: "a1u8.kisa", image: "/img/kisa.png", hr: "kiša", en: "rain", pos: "noun", gender: "f", icon: "🌧️", exampleHr: "Pada kiša.", exampleEn: "It's raining." },
    { id: "a1u8.snijeg", image: "/img/snijeg.png", hr: "snijeg", en: "snow", pos: "noun", gender: "m", icon: "❄️", exampleHr: "Pada snijeg.", exampleEn: "It's snowing." },
    { id: "a1u8.vjetar", image: "/img/vjetar.png", hr: "vjetar", en: "wind", pos: "noun", gender: "m", icon: "💨", exampleHr: "Danas ima vjetra.", exampleEn: "It's windy today." },
    { id: "a1u8.oblak", image: "/img/oblak.png", hr: "oblak", en: "cloud", pos: "noun", gender: "m", icon: "☁️", exampleHr: "Ima oblaka.", exampleEn: "There are clouds." },
    { id: "a1u8.suncano", image: "/img/suncano.png", hr: "sunčano", en: "sunny", pos: "adv", icon: "🌞", exampleHr: "Sunčano je.", exampleEn: "It's sunny." },
    { id: "a1u8.oblacno", image: "/img/oblacno.png", hr: "oblačno", en: "cloudy", pos: "adv", icon: "🌥️", exampleHr: "Oblačno je.", exampleEn: "It's cloudy." },
    { id: "a1u8.toplo", image: "/img/toplo.png", hr: "toplo", en: "warm", pos: "adv", icon: "🌡️", exampleHr: "Toplo je.", exampleEn: "It's warm." },
    { id: "a1u8.hladno", image: "/img/hladno.png", hr: "hladno", en: "cold", pos: "adv", icon: "🥶", exampleHr: "Hladno je.", exampleEn: "It's cold." },
    { id: "a1u8.vruce", image: "/img/vruce.png", hr: "vruće", en: "hot", pos: "adv", icon: "🔥", exampleHr: "Vruće je.", exampleEn: "It's hot." },
    { id: "a1u8.padati", image: "/img/padati.png", hr: "padati", en: "to fall (pada kiša = it rains)", pos: "verb", icon: "⬇️", exampleHr: "Padala je kiša.", exampleEn: "It was raining." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kakvo je vrijeme?",
      subtitle: "Sun, rain, snow — and how to say it was that way yesterday.",
      emoji: "🌦️",
      items: [
        { emoji: "☀️", label: "Weather now", hint: "Sunčano je. Pada kiša." },
        { emoji: "⬅️", label: "Weather then", hint: "Bilo je sunčano. Padala je kiša." },
        { emoji: "🌡️", label: "Warm, cold, hot", hint: "toplo · hladno · vruće" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + today's forecast" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · What's the weather?",
      subtitle: "A weather sentence needs no subject — just »___ je«.",
      emoji: "☀️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "se / je from L3" },
        { emoji: "🌦️", label: "Weather frames", hint: "Sunčano je. Pada kiša." },
        { emoji: "🖼️", label: "Match icon ↔ phrase", hint: "☀️ ↔ Sunčano je." },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the shy je (L3)",
      items: [
        {
          prompt: "From L3 — which is correct?",
          options: ["Zvao se Marko.", "Zvao se je Marko.", "Zvao je se Marko."],
          correctIndex: 0,
          explanation: "3rd person + se → je drops: Zvao se Marko.",
        },
        {
          prompt: "From L3: Ana ___ tuširala. (clitic)",
          options: ["se", "se je", "je se"],
          correctIndex: 0,
          explanation: "Just se — never se je.",
        },
        {
          prompt: "Listen: when did they rest?",
          tts: "Odmarali smo se u subotu.",
          options: ["on Saturday", "on Friday", "on Sunday"],
          correctIndex: 0,
          explanation: "u subotu = on Saturday.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's weather words",
      vocabIds: [
        "a1u8.vrijeme", "a1u8.sunce", "a1u8.kisa", "a1u8.snijeg", "a1u8.vjetar",
        "a1u8.oblak", "a1u8.suncano", "a1u8.oblacno", "a1u8.toplo", "a1u8.hladno",
        "a1u8.vruce", "a1u8.padati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Weather now: just »___ je«",
      body:
        "To ask, say **Kakvo je vrijeme?** (What's the weather like?). To answer, weather sentences carry **no subject** — a weather word + **je**:\n\n- *Sunčano je.* (It's sunny) · *Oblačno je.* (cloudy) · *Toplo je.* (warm) · *Hladno je.* (cold) · *Vruće je.* (hot)\n\nFor rain and snow, use **pada** (falls): *Pada kiša.* (It's raining) · *Pada snijeg.* (It's snowing). Wind and clouds use **ima** (there is): *Ima vjetra.* · *Ima oblaka.*\n\n⚠️ **vrijeme** means both *weather* AND *time* (Unit 6) — context tells you which.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "No subject needed",
        text: "Sunčano je. Hladno je. Pada kiša. — a weather word (or »pada …«) + je. That's the whole frame.",
      },
      table: {
        caption: "Weather now",
        headers: ["", "how to say it"],
        rows: [
          ["☀️ sunny", "Sunčano je."],
          ["🌥️ cloudy", "Oblačno je."],
          ["🌧️ rain", "Pada kiša."],
          ["❄️ snow", "Pada snijeg."],
          ["🌡️ warm / cold / hot", "Toplo je. · Hladno je. · Vruće je."],
        ],
      },
      examples: [
        { hr: "Kakvo je vrijeme danas?", en: "What's the weather like today?" },
        { hr: "Danas je sunčano i toplo.", en: "Today it's sunny and warm." },
        { hr: "Pada kiša i hladno je.", en: "It's raining and it's cold." },
        { hr: "Pada snijeg.", en: "It's snowing." },
        { hr: "Danas ima vjetra.", en: "It's windy today." },
      ],
    },
    {
      id: "s06",
      type: "match",
      prompt: "Match the weather to Croatian",
      pairs: [
        { a: "Sunčano je.", b: "It's sunny." },
        { a: "Oblačno je.", b: "It's cloudy." },
        { a: "Pada kiša.", b: "It's raining." },
        { a: "Pada snijeg.", b: "It's snowing." },
        { a: "Vruće je.", b: "It's hot." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Weather yesterday: »Bilo je …« and »Padala je …«",
      body:
        "To put weather in the past, use the perfekt of biti — always the **neuter** *bilo* (there's no subject to agree with):\n\n- *Bilo je sunčano.* · *Bilo je oblačno.* · *Bilo je toplo / hladno / vruće.*\n\nRain and snow use **padati** in the past, and here the participle **agrees with the weather word**:\n- *Padala je kiša.* — **kiša** is feminine → **padala**\n- *Padao je snijeg.* — **snijeg** is masculine → **padao**",
      diagram: {
        kind: "contrast",
        left: {
          title: "Danas (today)",
          emoji: "📅",
          lines: [
            { hr: "Sunčano je.", en: "It's sunny." },
            { hr: "Pada kiša.", en: "It's raining." },
            { hr: "Hladno je.", en: "It's cold." },
          ],
        },
        right: {
          title: "Jučer (yesterday)",
          emoji: "⬅️",
          lines: [
            { hr: "Bilo je sunčano.", en: "It was sunny." },
            { hr: "Padala je kiša.", en: "It was raining." },
            { hr: "Bilo je hladno.", en: "It was cold." },
          ],
        },
      },
      examples: [
        { hr: "Jučer je bilo sunčano i vruće.", en: "Yesterday it was sunny and hot." },
        { hr: "Padala je kiša.", en: "It was raining. (kiša f → padala)" },
        { hr: "Padao je snijeg i bilo je hladno.", en: "It was snowing and it was cold. (snijeg m → padao)" },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: now or then?",
      items: [
        {
          prompt: "“It was sunny yesterday.” =",
          options: ["Jučer je bilo sunčano.", "Jučer je sunčano.", "Jučer bio sunčano."],
          correctIndex: 0,
          explanation: "Past weather → neuter »bilo«: Jučer je bilo sunčano.",
        },
        {
          prompt: "Yesterday it rained: »Jučer je ___ kiša.« (padati)",
          options: ["padala", "padao", "padalo"],
          correctIndex: 0,
          explanation: "kiša is feminine → padala.",
        },
        {
          prompt: "Yesterday it snowed: »___ je snijeg.« (padati)",
          options: ["Padao", "Padala", "Bilo"],
          correctIndex: 0,
          explanation: "snijeg is masculine → padao.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Today & yesterday",
      subtitle: "Switch between now and then — then dictation and today's forecast.",
      emoji: "🔄",
      items: [
        { emoji: "🧩", label: "Fill the frame", hint: "danas je · jučer je bilo" },
        { emoji: "⌨️", label: "Type two forecasts", hint: "»It's cold« · »It was sunny«" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Today's weather", hint: "Danas je sunčano i toplo." },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Danas ___ sunčano i toplo.",
      blanks: [["je"]],
      translation: "Today it's sunny and warm.",
      wordBank: ["je", "bilo", "su"],
      explanation: "Present weather: just »je« — Danas je sunčano.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Jučer je ___ kiša. (padati)",
      blanks: [["padala"]],
      translation: "Yesterday it was raining.",
      wordBank: ["padala", "padao", "padalo"],
      explanation: "kiša is feminine → padala.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Jučer je ___ hladno. (biti)",
      blanks: [["bilo"]],
      translation: "Yesterday it was cold.",
      wordBank: ["bilo", "bio", "bila"],
      explanation: "Weather has no subject → neuter bilo.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “It's cold today.”",
      answers: ["Danas je hladno.", "Danas je hladno", "Hladno je danas.", "Hladno je."],
      explanation: "Danas je hladno — present weather frame.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “It was sunny yesterday.”",
      answers: ["Jučer je bilo sunčano.", "Jučer je bilo sunčano", "Bilo je sunčano jučer.", "Bilo je sunčano."],
      explanation: "Past weather → Jučer je bilo sunčano (neuter bilo).",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Danas je sunčano i toplo.",
      explanation: "Danas je sunčano i toplo — today it's sunny and warm.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Jučer je padala kiša.",
      explanation: "Jučer je padala kiša — yesterday it was raining (kiša f → padala).",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: days (U6) & places (U5)",
      items: [
        {
          prompt: "Unit 6 day: »U ___ je padala kiša.« (on Saturday)",
          options: ["subotu", "subota", "subotom"],
          correctIndex: 0,
          explanation: "»on Saturday« = u + ACC: u subotu.",
        },
        {
          prompt: "Listen (Unit 5 place): where was it sunny?",
          tts: "U Splitu je bilo sunčano.",
          options: ["in Split", "in Zagreb", "in Canada"],
          correctIndex: 0,
          explanation: "U Splitu = in Split (LOC).",
        },
        {
          prompt: "“What's the weather like?” =",
          options: ["Kakvo je vrijeme?", "Gdje je vrijeme?", "Tko je vrijeme?"],
          correctIndex: 0,
          explanation: "Kakvo je vrijeme? — kakvo agrees with neuter vrijeme.",
        },
      ],
    },
    {
      id: "s18",
      type: "mc",
      review: true,
      prompt: "Listen: what was the weather on Sunday?",
      tts: "U nedjelju je bilo hladno i padao je snijeg.",
      options: ["cold with snow", "hot and sunny", "warm with rain"],
      correctIndex: 0,
      explanation: "Bilo je hladno i padao je snijeg — cold and snowing.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Danas je sunčano i toplo.",
      targetEn: "give today's weather — Today it's sunny and warm. (or say what's true where you are!)",
      phonetic: "DAH-nas ye SOON-cha-no ee TOP-lo",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Weather, now and then.** Now: a weather word + **je** — *Sunčano je. Hladno je. Pada kiša.* Then: neuter **bilo** — *Bilo je sunčano.* — and **padati** agreeing with the weather word — *Padala je kiša* (f), *Padao je snijeg* (m).\n\nAsk it with **Kakvo je vrijeme?** And remember: **vrijeme** = weather AND time.\n\nNext lesson: your whole weekend — the A1 capstone, *Moj vikend*.",
      vocabIds: [
        "a1u8.vrijeme", "a1u8.sunce", "a1u8.kisa", "a1u8.snijeg", "a1u8.vjetar",
        "a1u8.oblak", "a1u8.suncano", "a1u8.oblacno", "a1u8.toplo", "a1u8.hladno",
        "a1u8.vruce", "a1u8.padati",
      ],
    },
  ],
  srsCloze: [
    { front: "___ je. (it's sunny)", answers: ["sunčano", "suncano"], back: "Sunčano je. — it's sunny.", tts: "Sunčano je." },
    { front: "Pada ___. (rain)", answers: ["kiša", "kisa"], back: "Pada kiša. — it's raining.", tts: "Pada kiša." },
    { front: "Jučer je ___ sunčano. (biti — weather)", answers: ["bilo"], back: "Jučer je bilo sunčano. (neuter bilo — no subject)", tts: "Jučer je bilo sunčano." },
    { front: "Jučer je ___ kiša. (padati, f)", answers: ["padala"], back: "Jučer je padala kiša. (kiša f → padala)", tts: "Jučer je padala kiša." },
    { front: "Padao je ___. (snow)", answers: ["snijeg"], back: "Padao je snijeg. (snijeg m → padao)", tts: "Padao je snijeg." },
    { front: "___ je vrijeme? (what … like)", answers: ["kakvo"], back: "Kakvo je vrijeme? — What's the weather like?", tts: "Kakvo je vrijeme?" },
    { front: "Danas je ___. (hot)", answers: ["vruće", "vruce"], back: "Danas je vruće. — it's hot today.", tts: "Danas je vruće." },
  ],
  notes: {
    inOneSentence: {
      en: "Weather sentences have no subject: use »___ je« / »pada …« now, and »bilo je …« / »padala je kiša« in the past.",
      exampleHr: "Sunčano je. · Bilo je hladno. · Padala je kiša.",
    },
    deepDive: [
      {
        title: "Subjectless weather frames",
        body:
          "Croatian weather is impersonal — there's no »it« as a subject. You state the condition + **je**: *Sunčano je.*, *Vruće je.* Rain/snow take **pada** (falls): *Pada kiša.*, *Pada snijeg.* Wind/clouds use **ima** (there is): *Ima vjetra.*, *Ima oblaka.*\n\nIn the past, biti appears as the neuter **bilo** (nothing to agree with): *Bilo je sunčano.*, *Bilo je hladno.*",
        table: {
          caption: "Present ↔ past weather frames",
          headers: ["now", "yesterday"],
          rows: [
            ["Sunčano je.", "Bilo je sunčano."],
            ["Oblačno je.", "Bilo je oblačno."],
            ["Hladno / vruće je.", "Bilo je hladno / vruće."],
            ["Pada kiša.", "Padala je kiša."],
            ["Pada snijeg.", "Padao je snijeg."],
          ],
        },
      },
      {
        title: "padati agrees with the weather word",
        body:
          "When the weather has a noun subject (kiša, snijeg), the participle of **padati** agrees with it just like any other l-participle: **kiša** (f) → *padala je kiša*; **snijeg** (m) → *padao je snijeg*. Don't leave the je out (~~Padala kiša~~ ❌ → *Padala je kiša* ✓).",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "vrijeme = weather AND time",
          text: "»Kakvo je vrijeme?« = What's the weather like? · »Koliko je sati?« still asks the time. Same word, context decides.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Padala kiša.",
        right: "Padala je kiša.",
        why: "The past still needs its auxiliary je — Padala je kiša.",
      },
      {
        wrong: "Jučer je bio sunčano.",
        right: "Jučer je bilo sunčano.",
        why: "Weather has no subject → neuter bilo, never bio/bila.",
      },
      {
        wrong: "Padao je kiša.",
        right: "Padala je kiša.",
        why: "kiša is feminine, so padati agrees as padala.",
      },
      {
        wrong: "Sunčano.",
        right: "Sunčano je.",
        why: "Even the shortest weather sentence needs je.",
      },
    ],
    memoryHooks: [
      "Weather has no »it«: Sunčano JE. Hladno JE.",
      "Past weather is always neuter: BILO je sunčano.",
      "The rain agrees: kiša → padALA; snijeg → padAO.",
    ],
    connects: [
      { label: "Perfekt of biti — bilo (Unit 8 L1)", lessonId: "a1u8l1" },
      { label: "Participle agreement (Unit 8 L2)", lessonId: "a1u8l2" },
      { label: "vrijeme as »time« + days (Unit 6 L2)", lessonId: "a1u6l2" },
      { label: "Next: my weekend — the A1 capstone (Unit 8 L5)", lessonId: "a1u8l5" },
    ],
    selfCheck: [
      { q: "How do you ask “What's the weather like?”", a: "Kakvo je vrijeme?" },
      { q: "Say “It's sunny and warm today.”", a: "Danas je sunčano i toplo." },
      { q: "Why is it »bilo je sunčano«, not »bio je«?", a: "Weather is subjectless → the neuter bilo." },
      { q: "Put »Pada kiša« into the past.", a: "Padala je kiša. (kiša f → padala, and keep je)." },
      { q: "What two things can vrijeme mean?", a: "Weather and time." },
    ],
  },
};
