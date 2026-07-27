import type { Lesson } from "@/types/content";

/**
 * A2 U16 L2 — Pisao sam / napisao sam (aspect in the past)
 * Spec: curriculum/A2/unit-16.md · grammar-reference §11, §8.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * preseliti se (U10) and ostati (U11) recycled for review. Context magnets use
 * taught sequencers only (i onda U6, na kraju U8) — napokon avoided.
 */
export const a2u16l2: Lesson = {
  id: "a2u16l2",
  unitId: "a2u16",
  title: "Pisao sam / napisao sam",
  titleEn: "Was writing / wrote — aspect in the past",
  grammarTags: ["aspect-past", "perfekt", "life-events"],
  estMinutes: 19,
  vocab: [
    { id: "a2u16.roditise", hr: "roditi se", en: "to be born (pf; rodio/rodila se)", pos: "verb", icon: "👶", exampleHr: "Rodio sam se u Kanadi.", exampleEn: "I was born in Canada." },
    { id: "a2u16.odrasti", hr: "odrasti", en: "to grow up (pf; odrastao/odrasla)", pos: "verb", icon: "🌱", exampleHr: "Baka je odrasla u Slavoniji.", exampleEn: "Grandma grew up in Slavonia." },
    { id: "a2u16.djetinjstvo", hr: "djetinjstvo", en: "childhood", pos: "noun", gender: "n", icon: "🧸", exampleHr: "Moje djetinjstvo je bilo lijepo.", exampleEn: "My childhood was lovely." },
    { id: "a2u16.mladost", hr: "mladost", en: "youth (f — an -i noun)", pos: "noun", gender: "f", icon: "🌼", exampleHr: "Mladost je kratka.", exampleEn: "Youth is short." },
    { id: "a2u16.upoznati", hr: "upoznati", en: "to meet (for the first time; pf)", pos: "verb", icon: "🤝", exampleHr: "Upoznala sam muža na poslu.", exampleEn: "I met my husband at work." },
    { id: "a2u16.promijeniti", hr: "promijeniti", en: "to change (sth; pf)", pos: "verb", icon: "🔄", exampleHr: "Promijenio sam plan.", exampleEn: "I changed the plan." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Pisao sam / napisao sam",
      subtitle: "»Pisao sam pismo« and »Napisao sam pismo« are different mornings. Hear the difference.",
      emoji: "⏳",
      items: [
        { emoji: "〰️", label: "Was writing…", hint: "background, duration" },
        { emoji: "✅", label: "…wrote it!", hint: "done, result exists" },
        { emoji: "🧲", label: "Context magnets", hint: "cijeli dan pulls 〰️" },
        { emoji: "👶", label: "Life events", hint: "rodio se, odrastao…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Two different mornings",
      subtitle: "The perfekt you've owned since U8 — now the verb choice tells the story.",
      emoji: "⏳",
      items: [
        { emoji: "🔁", label: "Warm-up", hint: "perfekt agreement & clitics" },
        { emoji: "📈", label: "Past timeline", hint: "wavy vs point, in the past" },
        { emoji: "👶", label: "Life-event verbs", hint: "6 new" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: perfekt machinery",
      items: [
        {
          prompt: "U8 agreement: Ana ___ pismo. (pisati, perfekt)",
          options: ["je pisala", "je pisao", "pisala"],
          correctIndex: 0,
          explanation: "Ana → pisala + je (second position).",
        },
        {
          prompt: "U15 cluster: »Napisao sam pismo i poslao ___ baki.« (it)",
          options: ["ga", "je", "mu"],
          correctIndex: 0,
          explanation: "pismo (n) → ga — the clitic remembers.",
        },
        {
          prompt: "Listen (U9 chunk): how long did the trip take?",
          tts: "Putovali smo dva sata.",
          options: ["two hours", "two days", "until two"],
          correctIndex: 0,
          explanation: "dva sata — a duration. Durations are about to become magnets.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The life-event verbs",
      vocabIds: [
        "a2u16.roditise", "a2u16.odrasti", "a2u16.djetinjstvo",
        "a2u16.mladost", "a2u16.upoznati", "a2u16.promijeniti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The past timeline — and the context magnets",
      body:
        "In the perfekt, the aspect carries the plot:\n\n- **〰️ imperfective past** = ongoing, background, duration: *Pisao sam pismo cijelo jutro.* (was writing — maybe never finished!)\n- **✅ perfective past** = done, the result exists: *Napisao sam pismo.* (it's written, here it is)\n\nContext words are magnets — they pull one aspect toward them:",
      table: {
        caption: "Context magnets",
        headers: ["magnet words", "pull", "example"],
        rows: [
          ["cijeli dan · cijelo jutro · dva sata · svaki dan", "〰️ imperfective", "Pisao sam cijelo jutro."],
          ["i onda · na kraju · danas (+ result)", "✅ perfective", "Na kraju sam napisao pismo."],
          ["za dva dana (in/within)", "✅ perfective", "Pročitala je knjigu za dva dana."],
        ],
      },
      examples: [
        { hr: "Pisao sam pismo cijelo jutro.", en: "I was writing the letter all morning." },
        { hr: "Napisao sam pismo i poslao ga baki.", en: "I wrote the letter (done!) and sent it to grandma." },
        { hr: "Ana je pročitala knjigu za dva dana.", en: "Ana read the whole book in two days." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Life events — born perfective",
      body:
        "A life event happens ONCE — so these verbs live almost entirely in the perfective:\n\nWatch two forms: *odrasti → **odrastao/odrasla*** (irregular participle) and the se-verbs keep the U15 law: *rodila **se***, *preselila **se*** (se+je → je drops after 3sg!).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "roditi se", emoji: "👶", example: "Rodio sam se u Kanadi." },
          { label: "odrasti", emoji: "🌱", example: "Odrastao sam u Torontu." },
          { label: "upoznati", emoji: "🤝", example: "Upoznala sam muža." },
          { label: "preseliti se", emoji: "📦", example: "Preselili smo se u Zagreb." },
        ],
      },
      examples: [
        { hr: "Rodio sam se u Kanadi.", en: "I was born in Canada." },
        { hr: "Baka je odrasla u Slavoniji.", en: "Grandma grew up in Slavonia." },
        { hr: "Upoznala sam muža na poslu.", en: "I met my husband at work." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: read the magnet",
      items: [
        {
          prompt: "»Jučer sam ___ knjigu cijeli dan.«",
          options: ["čitao", "pročitao", "čitam"],
          correctIndex: 0,
          explanation: "cijeli dan = duration magnet → imperfective čitao.",
        },
        {
          prompt: "»___ sam pismo — evo ga!« (it's done, here it is)",
          options: ["Napisao", "Pisao", "Pišem"],
          correctIndex: 0,
          explanation: "Result in hand → perfective napisao.",
        },
        {
          prompt: "»Ana je ___ knjigu za dva dana.«",
          options: ["pročitala", "čitala", "čita"],
          correctIndex: 0,
          explanation: "za dva dana (within) → perfective pročitala.",
        },
        {
          prompt: "Life events (roditi se, odrasti) are naturally…",
          options: ["perfective — they happen once", "imperfective — they take years", "both equally"],
          correctIndex: 0,
          explanation: "One completed event each — perfective by nature.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Tell the past right",
      subtitle: "Grandmas grow up, letters get written — pick the right half every time.",
      emoji: "✍️",
      items: [
        { emoji: "✏️", label: "Three fills", hint: "odrasla · pisao · pročitala" },
        { emoji: "⌨️", label: "Your first line", hint: "Rodio/Rodila sam se…" },
        { emoji: "🔀", label: "Build a morning", hint: "cijelo jutro" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Baka je ___ u Slavoniji. (odrasti)",
      blanks: [["odrasla"]],
      translation: "Grandma grew up in Slavonia.",
      wordBank: ["odrasla", "odrastao", "odrasti"],
      explanation: "baka (f) → odrasla (irregular participle of odrasti).",
    },
    {
      id: "s10",
      type: "fill",
      text: "Cijeli dan sam ___ poruke. (pisati/napisati?)",
      blanks: [["pisao", "pisala"]],
      translation: "I was writing messages all day.",
      wordBank: ["pisao", "napisao", "pisala"],
      explanation: "cijeli dan → imperfective (pisao or pisala — your gender).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ana je ___ knjigu za dva dana. (čitati/pročitati?)",
      blanks: [["pročitala", "procitala"]],
      translation: "Ana read the book in two days.",
      wordBank: ["pročitala", "čitala", "pročitao"],
      explanation: "za dva dana → perfective, f: pročitala.",
    },
    {
      id: "s12",
      type: "type",
      prompt: "Your first biography line: “I was born in Canada.” (pick your own participle form)",
      answers: ["Rodio sam se u Kanadi.", "Rodila sam se u Kanadi.", "Rodio sam se u Kanadi", "Rodila sam se u Kanadi"],
      hint: "roditi SE — never drop the se",
      explanation: "Rodio/Rodila sam se u Kanadi.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Ana met Marko (for the first time): »Ana je ___ Marka.«",
      answers: ["upoznala"],
      hint: "upoznati, f participle",
      explanation: "Ana je upoznala Marka.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Pisao", "sam", "pismo", "cijelo", "jutro"],
      answers: ["Pisao sam pismo cijelo jutro.", "Pisao sam pismo cijelo jutro"],
      en: "I was writing the letter all morning.",
      explanation: "Duration tail (cijelo jutro) + imperfective pisao.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Ears, voice & flashbacks",
      subtitle: "Hear whether it got finished, then narrate your own yesterday.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "cijelo jutro · za dva dana" },
        { emoji: "🎤", label: "Yesterday, both halves", hint: "pisao — i napisao!" },
        { emoji: "🔗", label: "U8/U15 rails", hint: "agreement & clitics" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Pisao sam pismo cijelo jutro.",
      explanation: "Pisao sam pismo cijelo jutro — was writing, all morning (〰️).",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ana je pročitala knjigu za dva dana.",
      explanation: "Ana je pročitala knjigu za dva dana — read it, in two days (✅).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Pisao sam pismo cijelo jutro — i napisao sam ga!",
      targetEn: "narrate yesterday with both halves — I was writing the letter all morning — and I finished it! (f: pisala/napisala)",
      phonetic: "PEE-sao sam PEES-mo TSEE-ye-lo YOO-tro — ee na-PEE-sao sam ga",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the story so far, aspect-aware",
      items: [
        {
          prompt: "U8 story, re-read: »Pjevali smo cijelu večer.« — why pjevali, not a perfective?",
          options: [
            "cijelu večer = duration → imperfective",
            "songs are always imperfective",
            "the perfekt requires it",
          ],
          correctIndex: 0,
          explanation: "The magnet was there all along: cijelu večer 〰️.",
        },
        {
          prompt: "U15 + today: »Baka nam je poslala sliku.« — finished or ongoing?",
          options: ["finished — the picture arrived", "ongoing — she's still sending", "unclear"],
          correctIndex: 0,
          explanation: "poslati is perfective — sent, done, delivered.",
        },
        {
          prompt: "Listen (U10 + U16): what changed?",
          tts: "Marko se preselio u Split i promijenio posao.",
          options: [
            "he moved to Split and changed jobs",
            "he's moving to Split for a job",
            "he stayed in Split without a job",
          ],
          correctIndex: 0,
          explanation: "preselio se + promijenio — two clean perfective milestones.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Aspect carries the past**: 〰️ *Pisao sam pismo cijelo jutro* (was writing) vs ✅ *Napisao sam pismo* (it's written).\n\n**Magnets**: *cijeli dan, dva sata, svaki dan* → imperfective · *i onda, na kraju, za dva dana* → perfective.\n\n**Life events are born perfective**: *rodio sam se, odrastao/odrasla, upoznala, preselili smo se* (se+je → je drops!).\n\nWords tonight: **roditi se, odrasti, djetinjstvo, mladost, upoznati, promijeniti**.\n\nNext: the same choice, pointed at the future.",
      vocabIds: [
        "a2u16.roditise", "a2u16.odrasti", "a2u16.djetinjstvo",
        "a2u16.mladost", "a2u16.upoznati", "a2u16.promijeniti",
      ],
    },
  ],
  srsCloze: [
    { front: "Cijeli dan sam ___ . (pisati/napisati — which fits?)", answers: ["pisao", "pisala"], back: "Duration → imperfective: pisao/pisala.", tts: "Cijeli dan sam pisao." },
    { front: "Ana je ___ knjigu za dva dana. (čitati/pročitati)", answers: ["pročitala", "procitala"], back: "za dva dana → perfective pročitala.", tts: "Ana je pročitala knjigu za dva dana." },
    { front: "I was born: Rodio sam ___ u Kanadi.", answers: ["se"], back: "roditi SE — never drop the se.", tts: "Rodio sam se u Kanadi." },
    { front: "Baka je ___ u Slavoniji. (odrasti)", answers: ["odrasla"], back: "odrasti → odrastao/odrasla (irregular).", tts: "Baka je odrasla u Slavoniji." },
    { front: "childhood = ___ (n)", answers: ["djetinjstvo"], back: "djetinjstvo (Moje djetinjstvo je bilo lijepo.)", tts: "Moje djetinjstvo je bilo lijepo." },
    { front: "to meet for the first time = ___ (pf)", answers: ["upoznati"], back: "upoznati (Upoznala sam muža na poslu.)", tts: "Upoznala sam muža na poslu." },
    { front: "youth = ___ (f, -i noun)", answers: ["mladost"], back: "mladost (Mladost je kratka.)", tts: "Mladost je kratka." },
  ],
  notes: {
    inOneSentence: {
      en: "In the perfekt the aspect tells the story — imperfective for duration and background (Pisao sam cijelo jutro), perfective for completed milestones (Napisao sam pismo; rodio sam se).",
      exampleHr: "Pisao sam pismo cijelo jutro. · Napisao sam pismo i poslao ga baki.",
    },
    deepDive: [
      {
        title: "The magnet table, in full",
        body:
          "Croatian narration is a rhythm: wavy background, sharp events. The context words tell you which beat you're on:",
        table: {
          caption: "What pulls what",
          headers: ["context", "aspect", "example"],
          rows: [
            ["cijeli dan / cijelo jutro / cijelu večer", "〰️", "Pjevali smo cijelu večer. (U8!)"],
            ["dva sata / trideset godina", "〰️", "Radila je trideset godina."],
            ["svaki dan (habit in the past)", "〰️", "Svaki dan sam pisao poruke."],
            ["i onda / na kraju", "✅", "Na kraju sam napisao pismo."],
            ["za + time (within)", "✅", "Pročitala je knjigu za dva dana."],
            ["a result you can point at", "✅", "Evo pisma — napisao sam ga!"],
          ],
        },
      },
      {
        title: "Life events: one-way verbs",
        body:
          "You're born once, you grow up once — so *roditi se, odrasti, upoznati, preseliti se, promijeniti* work as clean perfective milestones. (Their imperfective partners exist but barely matter at this level.)\n\nGrammar to guard:\n- **roditi SE** — the se is part of the verb: *Rodio sam se.* (never ~~Rodio sam~~)\n- **odrasti → odrastao / odrasla** — the -ao participle, like išao\n- se-verbs in 3sg drop je: *Ana **se rodila** u Zagrebu.* (U15's collision law)",
      },
      {
        title: "One story, both aspects",
        body:
          "A narrated morning shows the dance:\n\n*Jučer sam **pisao** pismo cijelo jutro. **Pio sam** kavu i **gledao** kišu… I onda sam ga **napisao** — i odmah ga **poslao** baki!*\n\nWavy-wavy-wavy… point-point. That's what Croatian storytelling sounds like — and it's exactly how baka Marija will tell her life story after the next lesson.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Napisao sam pismo cijelo jutro.",
        right: "Pisao sam pismo cijelo jutro.",
        why: "A point can't stretch — durations demand the imperfective.",
      },
      {
        wrong: "Jučer sam čitao knjigu za dva sata.",
        right: "Jučer sam pročitao knjigu za dva sata.",
        why: "za + time (within) reports completion → perfective.",
      },
      {
        wrong: "Rodio sam u Kanadi.",
        right: "Rodio sam se u Kanadi.",
        why: "roditi se never drops its se.",
      },
      {
        wrong: "Ana se je preselila u Zagreb.",
        right: "Ana se preselila u Zagreb.",
        why: "se + je → je drops (the U15 collision law).",
      },
    ],
    memoryHooks: [
      "Duration words are stretchy — only the wavy verb stretches with them.",
      "za dva dana = 'in two days' = mission accomplished → perfective.",
      "Life is a line with pins: born 👶, grew 🌱, met 🤝, moved 📦 — every pin is perfective.",
      "Narration rhythm: wavy-wavy-POINT. Background, background, event!",
    ],
    connects: [
      { label: "The perfekt itself (Unit 8 L1)", lessonId: "a1u8l1" },
      { label: "The pair deck (Unit 16 L1)", lessonId: "a2u16l1" },
      { label: "Next: aspect in the future (Unit 16 L3)", lessonId: "a2u16l3" },
    ],
    selfCheck: [
      { q: "»Pisao sam pismo« vs »Napisao sam pismo« — the difference?", a: "Was writing (maybe unfinished) vs wrote it, done." },
      { q: "Which aspect does »cijeli dan« demand?", a: "Imperfective — durations stretch only wavy verbs." },
      { q: "»Ana read the book in two days« = ?", a: "Ana je pročitala knjigu za dva dana." },
      { q: "Why »rodila se« with no je?", a: "se + je → je drops in 3sg perfekt." },
      { q: "Participles of odrasti?", a: "odrastao (m) / odrasla (f)." },
    ],
  },
};
