import type { Lesson } from "@/types/content";

/**
 * A2 U11 L1 — Boli me glava (boli me + NOM)
 * Spec: curriculum/A2/unit-11.md · grammar-reference §3, §5.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: only the me/te ACC chunks (ga/ju wait for U15); third persons
 * use full ACC nouns (Toma boli zub, Anu boli glava). The mi/me contrast is
 * cross-linked but the mi-experiencer family is L3. The spec's tappable body
 * diagram is realized as vocab-cards + ttsChips + a picture-free match.
 * 11 vocab items (within the 12 cap; the closed body set stays together).
 */
export const a2u11l1: Lesson = {
  id: "a2u11l1",
  unitId: "a2u11",
  title: "Boli me glava",
  titleEn: "My head hurts — boli me + nominative",
  grammarTags: ["boli-me", "body-parts", "irregular-plurals"],
  estMinutes: 18,
  vocab: [
    { id: "a2u11.glava", hr: "glava", en: "head", pos: "noun", gender: "f", icon: "🙂", exampleHr: "Boli me glava.", exampleEn: "My head hurts." },
    { id: "a2u11.ruka", hr: "ruka", en: "arm / hand", pos: "noun", gender: "f", icon: "💪", exampleHr: "Boli me ruka.", exampleEn: "My arm hurts." },
    { id: "a2u11.noga", hr: "noga", en: "leg / foot", pos: "noun", gender: "f", icon: "🦵", exampleHr: "Boli me noga.", exampleEn: "My leg hurts." },
    { id: "a2u11.oko", hr: "oko", en: "eye (plural: oči!)", pos: "noun", gender: "n", icon: "👁️", exampleHr: "Bole me oči.", exampleEn: "My eyes hurt." },
    { id: "a2u11.uho", hr: "uho", en: "ear (plural: uši!)", pos: "noun", gender: "n", icon: "👂", exampleHr: "Boli me uho.", exampleEn: "My ear hurts." },
    { id: "a2u11.zub", hr: "zub", en: "tooth", pos: "noun", gender: "m", icon: "🦷", exampleHr: "Toma boli zub.", exampleEn: "Tom's tooth hurts." },
    { id: "a2u11.grlo", hr: "grlo", en: "throat", pos: "noun", gender: "n", icon: "🗣️", exampleHr: "Boli me grlo.", exampleEn: "My throat hurts." },
    { id: "a2u11.trbuh", hr: "trbuh", en: "stomach / belly", pos: "noun", gender: "m", icon: "🫃", exampleHr: "Boli me trbuh.", exampleEn: "My stomach hurts." },
    { id: "a2u11.leda", hr: "leđa", en: "back (a plural-only noun!)", pos: "noun", gender: "n", icon: "🧍", exampleHr: "Bole me leđa.", exampleEn: "My back hurts." },
    { id: "a2u11.srce", hr: "srce", en: "heart", pos: "noun", gender: "n", icon: "❤️", exampleHr: "Srce je zdravo.", exampleEn: "The heart is healthy." },
    { id: "a2u11.boljeti", hr: "boljeti", en: "to hurt (boli / bole)", pos: "verb", icon: "🤕", exampleHr: "Što te boli?", exampleEn: "What hurts you?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Boli me glava",
      subtitle: "In Croatian, the body part does the hurting — and you're just in its way.",
      emoji: "🤕",
      items: [
        { emoji: "🔄", label: "The flip, part 2", hint: "glava is the SUBJECT" },
        { emoji: "🧍", label: "The body", hint: "glava, ruka, noga, zub…" },
        { emoji: "👀", label: "oči, uši, leđa", hint: "three tricky plurals" },
        { emoji: "🎤", label: "Što te boli?", hint: "answer like a local" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The hurting flip",
      subtitle: "U10 flipped liking (sviđa mi se). Today the same flip hits pain.",
      emoji: "🔄",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "the sviđa-mi-se flip" },
        { emoji: "🩻", label: "Boli me + NOM", hint: "the body part is blue" },
        { emoji: "✅", label: "boli or bole?", hint: "agreement quick check" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: flips and feelings you know",
      items: [
        {
          prompt: "Unit 10's flip: »Sviđa ___ se stan.« (I like it)",
          options: ["mi", "me", "ja"],
          correctIndex: 0,
          explanation: "Sviđa MI se — the DAT liker. Today's flip uses a different little word: me.",
        },
        {
          prompt: "Unit 1: a natural answer to »Kako si?« when you're not great:",
          options: ["Umoran sam.", "Dobar dan.", "Molim?"],
          correctIndex: 0,
          explanation: "Umoran sam = I'm tired — today you'll upgrade to real symptoms.",
        },
        {
          prompt: "Listen (U10 DAT): who gets the present?",
          tts: "Dajem baki poklon.",
          options: ["grandma", "mum", "the neighbour"],
          correctIndex: 0,
          explanation: "baki (DAT) = to grandma.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the body",
      vocabIds: [
        "a2u11.glava", "a2u11.ruka", "a2u11.noga", "a2u11.oko", "a2u11.uho",
        "a2u11.zub", "a2u11.grlo", "a2u11.trbuh", "a2u11.leda", "a2u11.srce", "a2u11.boljeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The flip: Boli me glava — the head does the hurting",
      body:
        "English: *my head hurts (me)*. Croatian: **Boli me glava** — literally *“the head hurts me”*:\n\n- **glava** is the grammatical **subject** (blue, NOM — no possessive needed!)\n- **me** (= me) is a fixed **ACC chunk** — it already says whose head it is\n- asking back: **Što te boli?** — *what hurts you?*\n\nThird persons take a full ACC noun: **Toma boli zub. Anu boli glava.** (the tiny ga/ju words arrive in U15).",
      diagram: {
        kind: "contrast",
        left: {
          title: "English thinking",
          emoji: "🇬🇧",
          lines: [{ hr: "MY head hurts", en: "possessive + subject-me" }],
        },
        right: {
          title: "Croatian flip",
          emoji: "🇭🇷",
          caseId: "NOM",
          lines: [
            { hr: "Boli me glava.", en: "glava = subject (NOM) · me = ACC chunk" },
            { hr: "Toma boli zub.", en: "Tom's tooth hurts (Toma = ACC)" },
          ],
        },
      },
      examples: [
        { hr: "Boli me glava.", en: "My head hurts.", highlight: { text: "glava", caseId: "NOM" } },
        { hr: "Boli me grlo.", en: "My throat hurts.", highlight: { text: "grlo", caseId: "NOM" } },
        { hr: "Toma boli zub.", en: "Tom's tooth hurts.", note: "Toma = ACC (animate), zub = the blue subject" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "boli or bole? The verb obeys the body part",
      body:
        "Since the body part is the subject, **the verb agrees with it**:\n\n- one part → **boli**: *Boli me glava.*\n- several parts → **bole**: *Bole me noge.*\n\nThree parts wear plural disguises:\n- **oko → oči** (eyes) · **uho → uši** (ears) — irregular plurals\n- **leđa** (back) — always plural, like vrata (U10): *Bole me leđa.*",
      table: {
        caption: "The agreement strip",
        headers: ["what hurts", "verb", "example"],
        rows: [
          ["one part (sg)", "boli", "Boli me trbuh."],
          ["several parts (pl)", "bole", "Bole me noge."],
          ["oči / uši (irregular pl)", "bole", "Bole me oči."],
          ["leđa (always pl!)", "bole", "Bole me leđa."],
        ],
      },
      examples: [
        { hr: "Bole me leđa.", en: "My back hurts.", note: "leđa = plural-only → bole" },
        { hr: "Bole me oči.", en: "My eyes hurt.", note: "oko → oči" },
        { hr: "Boli me uho. — A mene bole uši!", en: "My ear hurts. — And MY ears hurt!", note: "mene = stressed “me”, for contrast" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: boli or bole?",
      items: [
        {
          prompt: "___ me grlo.",
          options: ["Boli", "Bole", "Bolim"],
          correctIndex: 0,
          explanation: "grlo is one part (sg) → boli.",
        },
        {
          prompt: "___ me leđa.",
          options: ["Bole", "Boli", "Bolimo"],
          correctIndex: 0,
          explanation: "leđa is plural-only → bole.",
        },
        {
          prompt: "___ me oči.",
          options: ["Bole", "Boli", "Boliš"],
          correctIndex: 0,
          explanation: "oči (eyes, plural) → bole.",
        },
        {
          prompt: "Whose tooth hurts? »Toma boli zub.«",
          options: ["Tom's", "mine", "the doctor's"],
          correctIndex: 0,
          explanation: "Toma = ACC of Tom — the sufferer; zub is the subject.",
        },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the body part to English",
      pairs: [
        { a: "glava", b: "head" },
        { a: "zub", b: "tooth" },
        { a: "grlo", b: "throat" },
        { a: "trbuh", b: "stomach" },
        { a: "srce", b: "heart" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ me grlo. (hurts)",
      blanks: [["Boli", "boli"]],
      translation: "My throat hurts.",
      wordBank: ["Boli", "Bole", "Bolim"],
      explanation: "One part → boli.",
    },
    {
      id: "s10",
      type: "fill",
      text: "___ me oči. (hurt)",
      blanks: [["Bole", "bole"]],
      translation: "My eyes hurt.",
      wordBank: ["Bole", "Boli", "Bolite"],
      explanation: "oči is plural → bole.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Boli ___ glava. (me — the sufferer)",
      blanks: [["me"]],
      translation: "My head hurts.",
      wordBank: ["me", "mi", "ja"],
      explanation: "The sufferer is the ACC chunk me (not mi — that one belongs to loše MI je, coming in L3).",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Say where it hurts",
      subtitle: "Type it, hear it, and answer the doctor's first question.",
      emoji: "🗣️",
      items: [
        { emoji: "⌨️", label: "Type two aches", hint: "head & back" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🕰️", label: "Yesterday's ache", hint: "the perfekt returns" },
        { emoji: "🎤", label: "Što te boli?", hint: "answer out loud" },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “My head hurts.”",
      answers: ["Boli me glava.", "Boli me glava"],
      hint: "the head is the subject",
      explanation: "Boli me glava.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “My back hurts.” (careful — plural!)",
      answers: ["Bole me leđa.", "Bole me leđa"],
      hint: "leđa is always plural",
      explanation: "Bole me leđa. (leđa → bole)",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Bole me oči.",
      explanation: "Bole me oči — my eyes hurt.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Toma boli zub.",
      explanation: "Toma boli zub — Tom's tooth hurts.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: yesterday's aches & an old friend",
      items: [
        {
          prompt: "U8 perfekt + clitics: which is the correct past?",
          options: ["Jučer me je boljela glava.", "Jučer je me boljela glava.", "Jučer me boljela je glava."],
          correctIndex: 0,
          explanation: "Clitic order: me (ACC) before je — and je always last in the cluster (U8).",
        },
        {
          prompt: "Listen (U3 imati): what does she have? (a preview of L3)",
          tts: "Imam temperaturu.",
          options: ["a fever", "a headache", "a cold"],
          correctIndex: 0,
          explanation: "temperatura = fever/temperature — imati + ACC, your U3 verb at the doctor's.",
        },
        {
          prompt: "U10 sibilarization echo: dajem ___ (ruka → DAT — the same k→c you saw in majci)",
          options: ["ruci", "ruki", "ruku"],
          correctIndex: 0,
          explanation: "ruka → ruci (k→c before -i) — body parts decline like any noun.",
        },
      ],
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Boli me glava.",
      targetEn: "answer »Što te boli?« (What hurts?) — My head hurts. (or: Boli me grlo / Bole me leđa…)",
      phonetic: "BO-lee meh GLAH-va",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The hurting flip:** the body part is the **subject** — *Boli me glava. Bole me leđa.* The sufferer is the fixed ACC chunk **me/te** (*Što te boli?*), and third persons take full ACC nouns: *Toma boli zub, Anu boli glava.*\n\n**Agreement:** one part → **boli**, plural parts → **bole** — with the tricky trio **oko→oči, uho→uši, leđa** (always plural).\n\nBody words tonight: **glava, ruka, noga, oko, uho, zub, grlo, trbuh, leđa, srce** + **boljeti**.\n\nNext lesson: doctor's orders — *Moram ležati!*",
      vocabIds: [
        "a2u11.glava", "a2u11.ruka", "a2u11.noga", "a2u11.oko", "a2u11.uho",
        "a2u11.zub", "a2u11.grlo", "a2u11.trbuh", "a2u11.leda", "a2u11.srce", "a2u11.boljeti",
      ],
    },
  ],
  srsCloze: [
    { front: "___ me glava. (hurts — sg)", answers: ["Boli", "boli"], back: "Boli me glava. (one part → boli)", tts: "Boli me glava." },
    { front: "___ me leđa. (hurt — pl!)", answers: ["Bole", "bole"], back: "Bole me leđa. (leđa is plural-only)", tts: "Bole me leđa." },
    { front: "Boli ___ glava. (the sufferer chunk)", answers: ["me"], back: "Boli me glava. (me = ACC chunk, not mi)", tts: "Boli me glava." },
    { front: "oko → plural ___", answers: ["oči", "oci"], back: "oko → oči (irregular plural)", tts: "Bole me oči." },
    { front: "uho → plural ___", answers: ["uši", "usi"], back: "uho → uši (irregular plural)", tts: "Bole me uši." },
    { front: "»Tom's tooth hurts« = ___ boli zub.", answers: ["Toma"], back: "Toma boli zub. (sufferer = full ACC noun)", tts: "Toma boli zub." },
    { front: "What hurts (you)? = »Što ___ boli?«", answers: ["te"], back: "Što te boli? (te = ACC chunk for you)", tts: "Što te boli?" },
    { front: "throat = ___ (n; »Boli me ___«)", answers: ["grlo"], back: "grlo = throat.", tts: "grlo" },
  ],
  notes: {
    inOneSentence: {
      en: "In boli me + NOM the body part is the grammatical subject and the sufferer is the fixed accusative chunk me/te — with bole for plural parts (oči, uši, leđa).",
      exampleHr: "Boli me glava. · Bole me leđa. · Toma boli zub.",
    },
    deepDive: [
      {
        title: "The flip family grows",
        body:
          "Croatian loves putting the *cause* in charge and demoting the person:\n\n- U10: *Sviđa **mi** se stan.* — liker in **DAT**\n- today: *Boli **me** glava.* — sufferer in **ACC**\n- L3 (next door): *Loše **mi** je.* — feeler in **DAT**\n\nThe crucial detail: **boli takes me (ACC), not mi (DAT)** — memorize the pair *boli ME · loše MI je* together and you'll never swap them.\n\nNo possessive appears: ~~Boli me moja glava~~ is redundant — *me* already says whose head it is.",
        diagram: {
          kind: "contrast",
          left: { title: "boli + ME (ACC)", emoji: "🤕", caseId: "ACC", lines: [{ hr: "Boli me glava.", en: "pain grabs you — accusative" }] },
          right: { title: "loše + MI (DAT) — L3", emoji: "🤢", caseId: "DAT", lines: [{ hr: "Loše mi je.", en: "feelings land on you — dative" }] },
        },
      },
      {
        title: "Agreement + the tricky trio",
        body:
          "The verb tracks the body part: **boli** (sg) / **bole** (pl). Croatian's oldest body parts keep ancient plurals:\n\n- **oko → oči** (eyes) · **uho → uši** (ears)\n- **leđa** — plural-only, like vrata (U10): *Bole me leđa*, *Leđa su zdrava*\n\nIn the past tense, boljeti agrees like any verb: *Jučer me **je boljela** glava* (glava → boljela, f sg) / *Bolje**le** su me noge* — and the clitic cluster keeps its U8 law: je last (*me je*).",
        table: {
          caption: "boljeti through the tenses",
          headers: ["tense", "singular part", "plural part"],
          rows: [
            ["present", "Boli me glava.", "Bole me leđa."],
            ["past", "Boljela me je glava.", "Boljele su me noge."],
            ["future (U9)", "Boljet će me glava.", "Boljet će me leđa."],
          ],
        },
      },
      {
        title: "Third persons — full nouns for now",
        body:
          "For *his/her X hurts*, put the person in the **accusative**: *Toma boli zub. Anu boli glava. Baku bole leđa.* (Animate masc ACC = GEN form — your U4 rule.)\n\nThe tiny clitics *ga/ju* (him/her) exist and you'll hear them, but their seating rules come with the full clitic system in **Unit 15**. Full nouns are always correct.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Moja glava boli.",
        right: "Boli me glava.",
        why: "No possessive — the me chunk already says whose. Croatian leads with the verb.",
      },
      {
        wrong: "Boli me leđa.",
        right: "Bole me leđa.",
        why: "leđa is plural-only → plural verb bole.",
      },
      {
        wrong: "Boli mi glava.",
        right: "Boli me glava.",
        why: "boli takes the ACC chunk me; mi (DAT) belongs to the loše-mi-je family (L3).",
      },
      {
        wrong: "Bole me oko.",
        right: "Boli me oko. / Bole me oči.",
        why: "Match the number: one eye → boli oko; both eyes → bole oči.",
      },
    ],
    memoryHooks: [
      "The body part does the hurting — glava is the boss, you're just in the way.",
      "boli ME (pain grabs you, ACC) · loše MI je (feelings land on you, DAT — L3).",
      "oči i uši — the ancient pair: eyes and ears kept their thousand-year-old plurals.",
      "leđa wears plural trousers, like vrata: Bole me leđa.",
    ],
    connects: [
      { label: "sviđa mi se — the first flip (Unit 10 L2)", lessonId: "a2u10l2" },
      { label: "Animate ACC = GEN form (Unit 4 L4)", lessonId: "a1u4l4" },
      { label: "Clitic order, je last (Unit 8 L3)", lessonId: "a1u8l3" },
      { label: "Next: Moram ležati — the modals (Unit 11 L2)", lessonId: "a2u11l2" },
    ],
    selfCheck: [
      { q: "“My head hurts” = ?", a: "Boli me glava." },
      { q: "“My back hurts” — and why bole?", a: "Bole me leđa — leđa is plural-only." },
      { q: "Plurals of oko and uho?", a: "oči, uši." },
      { q: "“Tom's tooth hurts” = ?", a: "Toma boli zub. (Toma = ACC)" },
      { q: "boli me vs loše mi je — which chunk goes with which?", a: "boli takes ME (ACC); the feeling family (L3) takes MI (DAT)." },
    ],
  },
};
