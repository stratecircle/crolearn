import type { Lesson } from "@/types/content";

/**
 * A2 U11 L3 — Loše mi je (DAT experiencer)
 * Spec: curriculum/A2/unit-11.md · grammar-reference §3, §5, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: mi/ti chunks + full DAT nouns only (clitic system = U15).
 * "bolje" is deliberately absent (comparatives = U13) — only dobro/loše.
 * Spec's "Tomu treba lijek" → "Tomu treba odmor" (lijek is L4 vocab;
 * correction noted in unit-11.md).
 */
export const a2u11l3: Lesson = {
  id: "a2u11l3",
  unitId: "a2u11",
  title: "Loše mi je",
  titleEn: "I feel bad — the dative feeling family",
  grammarTags: ["dative-experiencer", "treba-mi", "symptoms"],
  estMinutes: 18,
  vocab: [
    { id: "a2u11.prehlada", image: "/img/prehlada.png", hr: "prehlada", en: "a cold", pos: "noun", gender: "f", icon: "🤧", exampleHr: "Imam prehladu.", exampleEn: "I have a cold." },
    { id: "a2u11.kasalj", image: "/img/kasalj.png", hr: "kašalj", en: "cough", pos: "noun", gender: "m", icon: "😮‍💨", exampleHr: "Imam kašalj i temperaturu.", exampleEn: "I have a cough and a fever." },
    { id: "a2u11.temperatura", image: "/img/temperatura.png", hr: "temperatura", en: "fever / temperature", pos: "noun", gender: "f", icon: "🌡️", exampleHr: "Imam temperaturu.", exampleEn: "I have a fever." },
    { id: "a2u11.glavobolja", image: "/img/glavobolja.png", hr: "glavobolja", en: "headache", pos: "noun", gender: "f", icon: "🤯", exampleHr: "Glavobolja je jaka.", exampleEn: "The headache is strong." },
    { id: "a2u11.muka", image: "/img/muka.png", hr: "muka", en: "nausea (chunk: muka mi je)", pos: "noun", gender: "f", icon: "🤢", exampleHr: "Muka mi je.", exampleEn: "I feel sick / nauseous." },
    { id: "a2u11.slab", image: "/img/slab.png", hr: "slab", en: "weak", pos: "adj", icon: "🫩", exampleHr: "Slab sam i umoran.", exampleEn: "I'm weak and tired." },
    { id: "a2u11.pomoc", image: "/img/pomoc.png", hr: "pomoć", en: "help (a feminine -i noun)", pos: "noun", gender: "f", icon: "🆘", exampleHr: "Treba mi pomoć.", exampleEn: "I need help." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Loše mi je",
      subtitle: "You've said »drago mi je« since day 4 — today you unlock the whole family.",
      emoji: "🤒",
      items: [
        { emoji: "🌡️", label: "The feeling thermometer", hint: "dobro → loše → muka mi je" },
        { emoji: "🔄", label: "Treba mi + NOM", hint: "the third flip" },
        { emoji: "🤧", label: "Symptoms", hint: "prehlada, kašalj, temperatura" },
        { emoji: "🎤", label: "Kako si?", hint: "answer with the family" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The mi-family",
      subtitle: "Feelings don't happen BY you in Croatian — they happen TO you.",
      emoji: "🌡️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "drago mi je, unmasked" },
        { emoji: "🌡️", label: "The thermometer", hint: "loše mi je · muka mi je" },
        { emoji: "🔄", label: "treba mi", hint: "needed thing = subject" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the family you already know",
      items: [
        {
          prompt: "Day 4's »Drago ___ je!« (pleased to meet you)",
          options: ["mi", "me", "ja"],
          correctIndex: 0,
          explanation: "Drago MI je — a dative chunk you've said since Unit 1. Today: its siblings.",
        },
        {
          prompt: "U10's flip: »Sviđa mi se stan.« — what case is mi?",
          options: ["dative (to me)", "accusative", "nominative"],
          correctIndex: 0,
          explanation: "mi = DAT. The whole feeling family runs on it.",
        },
        {
          prompt: "Listen (L1): what hurts — and which little word is it?",
          tts: "Boli me glava.",
          options: ["head — with ME (ACC)", "head — with MI (DAT)", "throat — with MI"],
          correctIndex: 0,
          explanation: "boli me = ACC chunk. Today's loše MI je uses the other one — keep them apart!",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the symptom words",
      vocabIds: [
        "a2u11.prehlada", "a2u11.kasalj", "a2u11.temperatura", "a2u11.glavobolja",
        "a2u11.muka", "a2u11.slab", "a2u11.pomoc",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The feeling thermometer: X mi je",
      body:
        "Feelings land ON you, in the **dative**: **[feeling] + mi + je**:\n\n- *Dobro mi je.* — I'm fine · *Loše mi je.* — I feel bad · *Muka mi je.* — I feel sick\n- also: *Hladno mi je* (I'm cold) · *Dosadno mi je* (I'm bored)\n\nOther people: full DAT nouns — ***Ani** je loše. **Tomu** je muka.*\n\n⚠️ *Hladno je.* = the weather is cold (U8). *Hladno **mi** je.* = I'm cold. One little mi changes whose problem it is.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "😊 dobro mi je", emoji: "🟢", example: "I'm fine" },
          { label: "😕 loše mi je", emoji: "🟡", example: "I feel bad" },
          { label: "🤢 muka mi je", emoji: "🔴", example: "I feel sick" },
        ],
      },
      examples: [
        { hr: "Loše mi je i imam temperaturu.", en: "I feel bad and I have a fever." },
        { hr: "Ani je muka.", en: "Ana feels sick.", highlight: { text: "Ani", caseId: "DAT" } },
        { hr: "Hladno mi je. — A meni je vruće!", en: "I'm cold. — And I'M hot!", note: "meni = stressed DAT, for contrast" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Treba mi odmor — the third flip",
      body:
        "**treba mi + NOM** — the needed thing is the SUBJECT, the needer is dative (the exact sviđa-mi-se shape):\n\n- *Treba mi odmor.* — I need a rest · *Treba mi pomoć.* — I need help\n- *Tomu treba odmor.* — Tom needs a rest\n\nBoth patterns are correct Croatian: *Trebam odmor* (I need, from L2) and *Treba mi odmor* — **pick one per sentence, never mix** (~~Trebam mi odmor~~ ❌).",
      table: {
        caption: "The three flips — one dative soul",
        headers: ["chunk", "literal", "means"],
        rows: [
          ["drago mi je (U1)", "it is dear to me", "pleased!"],
          ["sviđa mi se X (U10)", "X pleases me", "I like X"],
          ["loše mi je · treba mi X (today)", "it's bad to me · X is needed to me", "I feel bad · I need X"],
        ],
      },
      examples: [
        { hr: "Treba mi odmor.", en: "I need a rest.", highlight: { text: "odmor", caseId: "NOM" } },
        { hr: "Treba mi pomoć!", en: "I need help!" },
        { hr: "Slab sam — treba mi čaj i san.", en: "I'm weak — I need tea and sleep." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: who feels what?",
      items: [
        {
          prompt: "»___ mi je.« (I feel bad)",
          options: ["Loše", "Loš", "Loša"],
          correctIndex: 0,
          explanation: "The feeling word stays in its adverb shape: Loše mi je.",
        },
        {
          prompt: "»Ani ___ muka.« (Ana feels sick)",
          options: ["je", "se", "su"],
          correctIndex: 0,
          explanation: "Ani (DAT) + je + muka: Ani je muka.",
        },
        {
          prompt: "»Treba ___ pomoć.« (I need help)",
          options: ["mi", "me", "se"],
          correctIndex: 0,
          explanation: "The needer is DAT: treba mi pomoć.",
        },
        {
          prompt: "»Hladno je« vs »Hladno mi je« — the difference?",
          options: [
            "weather is cold vs I am cold",
            "they mean the same",
            "the first is past tense",
          ],
          correctIndex: 0,
          explanation: "Without mi it's the weather (U8); with mi it's YOUR chill.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Symptoms — tap to hear",
      items: [
        { hr: "Imam prehladu i kašalj.", en: "I have a cold and a cough." },
        { hr: "Glavobolja je jaka — loše mi je.", en: "The headache is strong — I feel bad." },
        { hr: "Slab sam i muka mi je.", en: "I'm weak and I feel nauseous." },
        { hr: "Tomu treba odmor — bolestan je.", en: "Tom needs a rest — he's ill.", highlight: { text: "Tomu", caseId: "DAT" } },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ mi je. (I feel bad)",
      blanks: [["Loše", "loše"]],
      translation: "I feel bad.",
      wordBank: ["Loše", "Loš", "Zdrav"],
      explanation: "Loše mi je — the feeling chunk.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Treba ___ odmor. (I need)",
      blanks: [["mi"]],
      translation: "I need a rest.",
      wordBank: ["mi", "me", "se"],
      explanation: "The needer is DAT: treba mi.",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ je loše. (Ana)",
      blanks: [["Ani"]],
      translation: "Ana feels bad.",
      wordBank: ["Ani", "Ana", "Anu"],
      explanation: "The feeler is DAT: Ani je loše.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · How are you, really?",
      subtitle: "Type the chunks, hear them, then answer Kako si? honestly.",
      emoji: "💬",
      items: [
        { emoji: "⌨️", label: "Type two needs", hint: "help & rest" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "💬", label: "Tom & Ana", hint: "a sick-day dialogue" },
        { emoji: "🎤", label: "Kako si danas?", hint: "answer with the family" },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I need help.”",
      answers: ["Treba mi pomoć.", "Treba mi pomoć"],
      hint: "the needed thing is the subject",
      explanation: "Treba mi pomoć.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I feel sick.” (the muka chunk)",
      answers: ["Muka mi je.", "Muka mi je"],
      explanation: "Muka mi je.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Loše mi je i imam temperaturu.",
      explanation: "Loše mi je i imam temperaturu — I feel bad and I have a fever.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Treba mi odmor.",
      explanation: "Treba mi odmor — I need a rest.",
    },
    {
      id: "s17",
      type: "fill",
      text: "Tom: »Kako si?« — Ana: »___ mi je. Imam prehladu i ___ mi čaj.«",
      blanks: [["Loše", "loše"], ["treba"]],
      translation: "Tom: \"How are you?\" — Ana: \"I feel bad. I have a cold and I need tea.\"",
      wordBank: ["Loše", "treba", "Dobro", "boli"],
      explanation: "Loše mi je + treba mi čaj — the whole family in one answer.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: three units, one dative soul",
      items: [
        {
          prompt: "Line them up — which trio shares the SAME mi?",
          options: [
            "drago mi je (U1) · sviđa mi se (U10) · loše mi je (today)",
            "boli me · vidim te · čekam te",
            "moram · mogu · smijem",
          ],
          correctIndex: 0,
          explanation: "All three are dative-experiencer chunks — one pattern, three units.",
        },
        {
          prompt: "U8 weather vs you: »Vani je hladno, ali ___ nije hladno.« (to ME)",
          options: ["meni", "mene", "ja"],
          correctIndex: 0,
          explanation: "Stressed DAT meni for contrast: the weather is cold, but I'm not.",
        },
        {
          prompt: "Listen (U3 imati + ACC): what does Tom have?",
          tts: "Tom ima prehladu i kašalj.",
          options: ["a cold and a cough", "a fever and a headache", "tea and honey"],
          correctIndex: 0,
          explanation: "imati + ACC: prehladu i kašalj.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Dobro mi je, hvala!",
      targetEn: "answer »Kako si danas?« — I'm fine, thanks! (or honestly: Loše mi je… / Muka mi je…)",
      phonetic: "DO-bro mee yeh, HVA-la",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The dative feeling family:** *dobro/loše mi je · muka mi je · hladno mi je* — feelings land on a DAT person. Others: *Ani je loše. Tomu je muka.*\n\n**The third flip:** *Treba mi odmor / pomoć* — needed thing NOM, needer DAT. (Or *Trebam odmor* — pick a lane, never mix.)\n\n**Keep apart:** *boli ME* (ACC) vs *loše MI je* (DAT) · *Hladno je* (weather) vs *Hladno mi je* (me).\n\nWords tonight: **prehlada, kašalj, temperatura, glavobolja, muka, slab, pomoć**.\n\nNext lesson: *Kod liječnika* — the full doctor's visit, assembled.",
      vocabIds: [
        "a2u11.prehlada", "a2u11.kasalj", "a2u11.temperatura", "a2u11.glavobolja",
        "a2u11.muka", "a2u11.slab", "a2u11.pomoc",
      ],
    },
  ],
  srsCloze: [
    { front: "I feel bad = »___ mi je.«", answers: ["Loše", "loše", "Lose", "lose"], back: "Loše mi je.", tts: "Loše mi je." },
    { front: "I feel sick/nauseous = »___ mi je.«", answers: ["Muka", "muka"], back: "Muka mi je.", tts: "Muka mi je." },
    { front: "Treba ___ odmor. (I need)", answers: ["mi"], back: "Treba mi odmor. (needer = DAT)", tts: "Treba mi odmor." },
    { front: "___ je loše. (Ana feels bad)", answers: ["Ani"], back: "Ani je loše. (feeler = DAT noun)", tts: "Ani je loše." },
    { front: "I'm cold = »Hladno ___ je.« (not the weather!)", answers: ["mi"], back: "Hladno mi je. (Hladno je = the weather)", tts: "Hladno mi je." },
    { front: "help = ___ (f -i; »Treba mi ___«)", answers: ["pomoć", "pomoc"], back: "pomoć = help; Treba mi pomoć.", tts: "Treba mi pomoć." },
    { front: "a cold = ___ (»Imam ___u«)", answers: ["prehlada"], back: "prehlada; Imam prehladu.", tts: "Imam prehladu." },
  ],
  notes: {
    inOneSentence: {
      en: "Feelings take a dative experiencer — loše mi je, muka mi je, hladno mi je — and treba mi + NOM makes the needed thing the subject, exactly like sviđa mi se.",
      exampleHr: "Loše mi je i imam temperaturu. · Treba mi odmor. · Ani je muka.",
    },
    deepDive: [
      {
        title: "The three-panel family poster",
        body:
          "One dative soul, three units apart:\n\n1. **drago mi je** (U1) — *it is dear to me* → pleased to meet you\n2. **sviđa mi se X** (U10) — *X pleases me* → I like X\n3. **loše mi je / treba mi X** (today) — *it's bad to me / X is needed to me*\n\nThe person is never the subject — the dative *mi* is a little radar dish that catches whatever the world throws at it. When the family grows again (U13's *bolje mi je*), you'll recognize it instantly.",
        table: {
          caption: "The mi-family, complete so far",
          headers: ["chunk", "meaning"],
          rows: [
            ["dobro / loše mi je", "I feel fine / bad"],
            ["muka mi je", "I feel nauseous"],
            ["hladno / vruće mi je", "I'm cold / hot"],
            ["dosadno mi je", "I'm bored"],
            ["drago mi je", "I'm pleased"],
            ["sviđa mi se X", "I like X"],
            ["treba mi X", "I need X"],
          ],
        },
      },
      {
        title: "treba: two lanes, both legal",
        body:
          "Croatian gives you two grammatical lanes for need:\n\n- **Personal (L2):** *Trebam odmor.* — I need a rest (ja = subject)\n- **Experiencer (today):** *Treba mi odmor.* — a rest is needed to me (odmor = subject)\n\nBoth are standard. The crash happens when lanes merge: ~~Trebam mi odmor~~ ❌. Pick one wheel and drive.\n\nThird person: *Tomu treba odmor. Ani treba pomoć.* — and with plural things the verb agrees: *Trebaju mi tablete.* (like sviđaju mi se).",
      },
      {
        title: "me vs mi — the two-chunk survival kit",
        body:
          "Unit 11's two flips use DIFFERENT little words:\n\n- **boli ME** — pain grabs you → **accusative**\n- **loše MI je** — feelings land on you → **dative**\n\nDrill the minimal pair aloud: *Boli me glava, i loše mi je.* Both clitics obey second position (U1's oldest law) and will slot into the full clitic train in U15 with zero re-learning.",
        diagram: {
          kind: "contrast",
          left: { title: "ME — ACC", emoji: "🤕", caseId: "ACC", lines: [{ hr: "Boli me glava.", en: "pain grabs" }] },
          right: { title: "MI — DAT", emoji: "🌡️", caseId: "DAT", lines: [{ hr: "Loše mi je.", en: "feeling lands" }] },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ja sam loše.",
        right: "Loše mi je.",
        why: "Feelings use the dative experiencer, not biti + adjective. (Ja sam loš = I'm a bad person!)",
      },
      {
        wrong: "Trebam mi odmor.",
        right: "Trebam odmor. / Treba mi odmor.",
        why: "Two valid patterns — personal or experiencer — but never both in one sentence.",
      },
      {
        wrong: "Loše me je.",
        right: "Loše mi je.",
        why: "The feeling family takes DAT mi; the ACC me belongs to boli me.",
      },
      {
        wrong: "Hladno mi je. (about the weather report)",
        right: "Hladno je.",
        why: "With mi it's YOUR chill; the weather alone drops the mi (U8).",
      },
    ],
    memoryHooks: [
      "mi = to-me radar 📡 — feelings, likes and needs all land on it.",
      "Three-panel poster: drago mi je · sviđa mi se · loše mi je — one soul, three units.",
      "boli ME grabs (ACC) · loše MI je lands (DAT) — say the pair aloud daily.",
      "muka mi je — 'MOO-ka' sounds like how it feels.",
    ],
    connects: [
      { label: "drago mi je — the day-4 seed (Unit 1 L5)", lessonId: "a1u1l5" },
      { label: "sviđa mi se — the first flip (Unit 10 L2)", lessonId: "a2u10l2" },
      { label: "boli me — the ACC sibling (Unit 11 L1)", lessonId: "a2u11l1" },
      { label: "Next: the doctor's visit assembled (Unit 11 L4)", lessonId: "a2u11l4" },
    ],
    selfCheck: [
      { q: "“I feel bad and I have a fever” = ?", a: "Loše mi je i imam temperaturu." },
      { q: "“I need help” — both lanes?", a: "Treba mi pomoć. / Trebam pomoć. (never Trebam mi)" },
      { q: "“Ana feels sick” = ?", a: "Ani je muka. (or Ani je loše)" },
      { q: "Hladno je vs Hladno mi je?", a: "Weather is cold vs I am cold." },
      { q: "Which chunk goes with boli, and which with loše?", a: "boli ME (ACC) · loše MI je (DAT)." },
    ],
  },
};
