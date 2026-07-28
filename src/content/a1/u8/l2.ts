import type { Lesson } from "@/types/content";

/**
 * A1 U8 L2 — Što si radio? (Perfekt of ordinary verbs)
 * Spec: curriculum/A1/unit-8.md · grammar-reference §8 (l-participle), §15 (questions).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: l-participle from the INFINITIVE (drop -ti, add -o/-la/-lo/
 * -li/-le/-la). Only the three A1 irregulars: išao (ići), jeo (jesti), htio
 * (htjeti). The clitic-cluster je-drop is L3; »Tuširao sam se« appears only as
 * a recognition preview of L3's se. igrati/nogomet are L3.
 */
export const a1u8l2: Lesson = {
  id: "a1u8l2",
  unitId: "a1u8",
  title: "Što si radio?",
  titleEn: "What did you do? — perfekt of verbs",
  grammarTags: ["perfekt", "l-participle", "questions"],
  estMinutes: 19,
  vocab: [
    { id: "a1u8.putovati", image: "/img/putovati.png", hr: "putovati", en: "to travel (putovao)", pos: "verb", icon: "🧳", exampleHr: "Putovali smo u Split.", exampleEn: "We traveled to Split." },
    { id: "a1u8.posjetiti", image: "/img/posjetiti.png", hr: "posjetiti", en: "to visit (posjetio)", pos: "verb", icon: "🚪", exampleHr: "Posjetili smo baku.", exampleEn: "We visited grandma." },
    { id: "a1u8.setati", image: "/img/setati.png", hr: "šetati", en: "to walk / stroll (šetao)", pos: "verb", icon: "🚶", exampleHr: "Šetali smo u parku.", exampleEn: "We strolled in the park." },
    { id: "a1u8.plesati", hr: "plesati", en: "to dance (plesao)", pos: "verb", icon: "💃", exampleHr: "Ana je plesala.", exampleEn: "Ana danced." },
    { id: "a1u8.pjevati", hr: "pjevati", en: "to sing (pjevao)", pos: "verb", icon: "🎤", exampleHr: "Pjevali smo cijelu večer.", exampleEn: "We sang all evening." },
    { id: "a1u8.citati", hr: "čitati", en: "to read (čitao)", pos: "verb", icon: "📖", exampleHr: "Čitao sam knjigu.", exampleEn: "I read a book." },
    { id: "a1u8.pisati", hr: "pisati", en: "to write (pisao — not pišao!)", pos: "verb", icon: "✍️", exampleHr: "Pisao sam zadaću.", exampleEn: "I wrote my homework." },
    { id: "a1u8.kupiti", hr: "kupiti", en: "to buy (kupio)", pos: "verb", icon: "🛍️", exampleHr: "Kupili smo kruh.", exampleEn: "We bought bread." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Što si radio?",
      subtitle: "biti was the warm-up. Now every verb gets a past.",
      emoji: "⏮️",
      items: [
        { emoji: "🏭", label: "The participle factory", hint: "chop -ti, add -o/-la/-li" },
        { emoji: "🔴", label: "Three irregulars", hint: "išao · jeo · htio" },
        { emoji: "❓", label: "Asking about the past", hint: "Što si radio? Jesi li…?" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + say what you did" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Every verb has a past",
      subtitle: "The recipe never changes: infinitive → chop -ti → add the ending.",
      emoji: "🏭",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "bio / bila from L1" },
        { emoji: "🏭", label: "The factory", hint: "gledati → gledao / gledala" },
        { emoji: "✅", label: "Quick check", hint: "pick the participle" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday with biti (L1)",
      items: [
        {
          prompt: "From L1: Ana je ___ u školi. (she was)",
          options: ["bila", "bio", "bili"],
          correctIndex: 0,
          explanation: "Ana → bila. Today the same -la/-o endings ride on every verb.",
        },
        {
          prompt: "From L1: which is correct?",
          options: ["Bio sam u gradu.", "Sam bio u gradu.", "Bio u gradu sam."],
          correctIndex: 0,
          explanation: "Clitic »sam« sits second — Bio sam…, never Sam bio.",
        },
        {
          prompt: "Listen: where were they?",
          tts: "Bili smo na koncertu.",
          options: ["at a concert", "at school", "at the market"],
          correctIndex: 0,
          explanation: "Bili smo na koncertu — we were at a concert.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's verbs",
      vocabIds: [
        "a1u8.putovati", "a1u8.posjetiti", "a1u8.setati", "a1u8.plesati",
        "a1u8.pjevati", "a1u8.citati", "a1u8.pisati", "a1u8.kupiti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The participle factory: chop -ti, add the ending",
      body:
        "Every regular verb makes its l-participle the same way: take the **infinitive**, drop **-ti**, and add **-o (m) / -la (f) / -lo (n)** in the singular, **-li / -le / -la** in the plural. Then put a biti-clitic in front — same as L1.\n\n- *gledati* → gleda**o** / gleda**la** → *Gledao sam film.*\n- *čitati* → čita**o** / čita**la** → *Ana je čitala knjigu.*\n- *putovati* → putova**o** / putova**li** → *Putovali smo u Split.*\n\n⚠️ Build from the **infinitive**, not the present tense: *pisati* → **pisao** (never ~~pišao~~), *putovati* → **putovao** (never ~~putujao~~).",
      diagram: {
        kind: "flow",
        steps: [
          { label: "1 · Infinitive", emoji: "📄", example: "gledati · čitati · putovati" },
          { label: "2 · Chop -ti", emoji: "✂️", example: "gleda- · čita- · putova-" },
          { label: "3 · Add -o / -la / -li", emoji: "🏭", example: "gledao · čitala · putovali" },
        ],
      },
      table: {
        caption: "Regular l-participles (from the infinitive)",
        headers: ["infinitive", "on (m)", "ona (f)", "oni (pl)"],
        rows: [
          ["gledati (watch)", "gledao", "gledala", "gledali"],
          ["čitati (read)", "čitao", "čitala", "čitali"],
          ["putovati (travel)", "putovao", "putovala", "putovali"],
          ["pisati (write)", "pisao", "pisala", "pisali"],
        ],
      },
      examples: [
        { hr: "Gledala je film.", en: "She watched a film.", note: "gledati → gledala" },
        { hr: "Ana je čitala knjigu.", en: "Ana read a book.", note: "čitati → čitala" },
        { hr: "Putovali smo u Split.", en: "We traveled to Split.", note: "putovati → putovali" },
        { hr: "Kupili smo kruh i sir.", en: "We bought bread and cheese.", note: "kupiti → kupili" },
        { hr: "Šetali smo u parku.", en: "We strolled in the park.", note: "šetati → šetali" },
        { hr: "Pisao sam zadaću.", en: "I wrote my homework.", note: "pisati → pisao (not pišao!)" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the participle",
      items: [
        {
          prompt: "Ana je ___ knjigu. (čitati — she)",
          options: ["čitala", "čitao", "čita"],
          correctIndex: 0,
          explanation: "čitati → čita- + -la (she) = čitala.",
        },
        {
          prompt: "Mi smo ___ u Split. (putovati)",
          options: ["putovali", "putujali", "putovala"],
          correctIndex: 0,
          explanation: "Build from the infinitive: putova- + -li = putovali.",
        },
        {
          prompt: "Ja sam ___ zadaću. (pisati — male speaker)",
          options: ["pisao", "pišao", "pisala"],
          correctIndex: 0,
          explanation: "pisati → pisa- + -o = pisao (never pišao — that's the present stem).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Three irregulars + asking about the past",
      body:
        "Only **three** A1 verbs don't follow the chop-and-add rule — memorize them:\n\n- *ići* (go) → **išao / išla** (never ~~ićao~~)\n- *jesti* (eat) → **jeo / jela**\n- *htjeti* (want) → **htio / htjela**\n\nTo **ask** about the past, front the auxiliary: **Što si radio/radila?** (What did you do?) · **Jesi li gledao film?** (Did you watch the film?) · **Je li Ana čitala?** (Did Ana read?)",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The only A1 irregulars",
        text: "išao (ići) · jeo (jesti) · htio (htjeti). Everything else: chop -ti, add the ending.",
      },
      table: {
        caption: "Irregular l-participles",
        headers: ["infinitive", "on (m)", "ona (f)"],
        rows: [
          ["ići (go)", "išao", "išla"],
          ["jesti (eat)", "jeo", "jela"],
          ["htjeti (want)", "htio", "htjela"],
        ],
      },
      examples: [
        { hr: "Išao sam u školu.", en: "I went to school.", note: "ići → išao" },
        { hr: "Jeo sam ribu i kruh.", en: "I ate fish and bread.", note: "jesti → jeo" },
        { hr: "Što si radio jučer?", en: "What did you do yesterday?", note: "the past question frame" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the verb to English",
      pairs: [
        { a: "putovati", b: "to travel" },
        { a: "šetati", b: "to stroll" },
        { a: "pjevati", b: "to sing" },
        { a: "plesati", b: "to dance" },
        { a: "kupiti", b: "to buy" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Build & hear the past",
      subtitle: "Make the participles yourself — then dictation and one out-loud line.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the participle", hint: "čitala · putovali · pisao" },
        { emoji: "⌨️", label: "Type two pasts", hint: "»Ana read…« · »We traveled…«" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Say what you did", hint: "Jučer sam gledao/gledala…" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Ana je ___ knjigu. (čitati)",
      blanks: [["čitala"]],
      translation: "Ana read a book.",
      wordBank: ["čitala", "čitao", "čitali"],
      explanation: "Ana (she) → čitala.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Mi smo ___ u Split. (putovati)",
      blanks: [["putovali"]],
      translation: "We traveled to Split.",
      wordBank: ["putovali", "putovala", "putujali"],
      explanation: "From the infinitive: putova- + -li = putovali.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ja sam ___ zadaću. (pisati, male speaker)",
      blanks: [["pisao"]],
      translation: "I wrote my homework.",
      wordBank: ["pisao", "pisala", "pišao"],
      explanation: "pisati → pisao (male). Never pišao.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Oni su ___ film. (gledati)",
      blanks: [["gledali"]],
      translation: "They watched a film.",
      wordBank: ["gledali", "gledale", "gledala"],
      explanation: "A male/mixed group → gledali.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “Ana read a book.”",
      answers: ["Ana je čitala knjigu.", "Ana je čitala knjigu", "ana je čitala knjigu"],
      explanation: "čitati → čitala (Ana = she); knjiga → knjigu (ACC).",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “We traveled to Split.”",
      answers: ["Putovali smo u Split.", "Putovali smo u Split", "Putovale smo u Split.", "putovali smo u split"],
      explanation: "putovati → putovali; u Split = direction (ACC).",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Jesi", "li", "gledala", "film"],
      answers: ["Jesi li gledala film?", "Jesi li gledala film"],
      en: "Did you watch the film? (to a woman)",
      explanation: "Past yes/no question: auxiliary + li up front — Jesi li gledala…?",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Putovali smo u Split.",
      explanation: "Putovali smo u Split — we traveled to Split.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Išao sam u školu.",
      explanation: "Išao sam u školu — I went to school (ići → išao).",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 4 & 6 verbs, now in the past",
      items: [
        {
          prompt: "Unit 4: »Jedem ribu« → yesterday: »___ sam ribu.« (jesti, male)",
          options: ["Jeo", "Jedao", "Jela"],
          correctIndex: 0,
          explanation: "jesti → jeo (irregular).",
        },
        {
          prompt: "Unit 6: »Učim hrvatski« → »Jučer sam ___ hrvatski.« (učiti, she)",
          options: ["učila", "učio", "učil"],
          correctIndex: 0,
          explanation: "učiti → uči- + -la = učila.",
        },
        {
          prompt: "Listen: what did they drink?",
          tts: "Pili smo vino i sok.",
          options: ["wine and juice", "beer and water", "coffee and tea"],
          correctIndex: 0,
          explanation: "piti → pili; vino i sok = wine and juice.",
        },
      ],
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "Listen (a peek at next lesson's »se«): when did he shower?",
      tts: "Tuširao sam se navečer.",
      options: ["in the evening", "in the morning", "at noon"],
      correctIndex: 0,
      explanation: "Tuširao sam se navečer — I showered in the evening. Reflexive »se« gets its full rules in L3.",
    },
    {
      id: "s21",
      type: "speak",
      targetHr: "Jučer sam gledao film.",
      targetEn: "say what you did yesterday — Yesterday I watched a film. (female: Jučer sam gledala film.)",
      phonetic: "YOO-cher sam GLEH-da-o film",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Every verb now has a past.** Regular recipe: infinitive → chop **-ti** → add **-o / -la / -lo / -li / -le / -la**, then a biti-clitic in front: *Gledao sam film. Ana je čitala knjigu. Putovali smo u Split.*\n\nBuild from the **infinitive** (pisao, not pišao). Only three irregulars: **išao · jeo · htio**. Ask with **Što si radio?** / **Jesi li gledala…?**\n\nNext lesson: the clitic cluster and its famous trick — *Zvao se Marko* (where did »je« go?).",
      vocabIds: [
        "a1u8.putovati", "a1u8.posjetiti", "a1u8.setati", "a1u8.plesati",
        "a1u8.pjevati", "a1u8.citati", "a1u8.pisati", "a1u8.kupiti",
      ],
    },
  ],
  srsCloze: [
    { front: "Ana je ___ knjigu. (čitati)", answers: ["čitala", "citala"], back: "Ana je čitala knjigu. (čitati → čitala)", tts: "Ana je čitala knjigu." },
    { front: "Mi smo ___ u Split. (putovati)", answers: ["putovali"], back: "Putovali smo u Split. (putova- + -li)", tts: "Putovali smo u Split." },
    { front: "Ja sam ___ zadaću. (pisati, m)", answers: ["pisao"], back: "Pisao sam zadaću. (pisati → pisao, NOT pišao)", tts: "Pisao sam zadaću." },
    { front: "___ sam u školu. (ići, m)", answers: ["išao", "isao"], back: "Išao sam u školu. (ići → išao, irregular)", tts: "Išao sam u školu." },
    { front: "___ sam ribu. (jesti, m)", answers: ["jeo"], back: "Jeo sam ribu. (jesti → jeo, irregular)", tts: "Jeo sam ribu." },
    { front: "Što si ___ jučer? (raditi, to a man)", answers: ["radio"], back: "Što si radio jučer? — the past question frame.", tts: "Što si radio jučer?" },
    { front: "Kupili ___ kruh. (we — clitic)", answers: ["smo"], back: "Kupili smo kruh. (mi → smo)", tts: "Kupili smo kruh." },
    { front: "___ li gledao film? (did you — to a man)", answers: ["jesi"], back: "Jesi li gledao film? (past yes/no question)", tts: "Jesi li gledao film?" },
  ],
  notes: {
    inOneSentence: {
      en: "Make the l-participle from the infinitive (drop -ti, add -o/-la/-lo/-li/-le/-la) and pair it with a biti-clitic; only išao, jeo, htio are irregular.",
      exampleHr: "Gledao sam film. · Ana je čitala knjigu. · Išao sam u školu.",
    },
    deepDive: [
      {
        title: "The factory — always from the infinitive",
        body:
          "Regular participles are mechanical: chop **-ti** off the infinitive and add the agreement ending. The stem you keep is the **infinitive** stem, not the present-tense one — this matters for verbs whose present looks different: *pisati* (present *pišem*) still gives **pisao**, and *putovati* (present *putujem*) gives **putovao**.\n\nThe ending agrees with the subject just like L1's bio/bila.",
        table: {
          caption: "The six participle endings (raditi)",
          headers: ["", "masculine", "feminine", "neuter"],
          rows: [
            ["singular", "radio", "radila", "radilo"],
            ["plural", "radili", "radile", "radila"],
          ],
        },
      },
      {
        title: "The three irregulars & questions",
        body:
          "Only three A1 verbs break the pattern: **ići → išao/išla**, **jesti → jeo/jela**, **htjeti → htio/htjela**. Learn them as whole forms.\n\nQuestions front the auxiliary: *Što si radio?* / *Jesi li putovala?* / *Je li Ana čitala?* — the same li-question you met in Unit 2, now over a participle.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Agreement in »we« forms",
          text: "bili/gledali smo = male or mixed group · bile/gledale smo = a female-only group.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "pišao / putujao",
        right: "pisao / putovao",
        why: "Participles come from the INFINITIVE stem (pisa-, putova-), not the present (piše-, putuje-).",
      },
      {
        wrong: "ićao sam u školu",
        right: "išao sam u školu",
        why: "ići is irregular: išao / išla.",
      },
      {
        wrong: "radioti / gledalati",
        right: "radio / gledala",
        why: "You drop -ti before adding the ending — don't keep it.",
      },
      {
        wrong: "Ana je gledao film.",
        right: "Ana je gledala film.",
        why: "The participle agrees with the subject: Ana is feminine → gledala.",
      },
    ],
    memoryHooks: [
      "Factory line: infinitive in → chop -ti → -o/-la/-li out.",
      "The irregular trio: iŠAO, JEO, HTIO — say them as a little chant.",
      "Build from the infinitive, and pišem can never sneak into pisao.",
    ],
    connects: [
      { label: "Perfekt of biti: bio/bila (Unit 8 L1)", lessonId: "a1u8l1" },
      { label: "li-questions: Jesi li…? (Unit 2 L2)", lessonId: "a1u2l2" },
      { label: "The verbs jesti / piti / htjeti (Unit 4)", lessonId: "a1u4l3" },
      { label: "Next: the clitic cluster & je-drop (Unit 8 L3)", lessonId: "a1u8l3" },
    ],
    selfCheck: [
      { q: "How do you make the participle of čitati for “she”?", a: "čita- + -la = čitala." },
      { q: "Why is »pišao« wrong?", a: "The participle uses the infinitive stem pisa-, so it's pisao." },
      { q: "Give the three irregular participles (masculine).", a: "išao (ići), jeo (jesti), htio (htjeti)." },
      { q: "How do you ask a woman “Did you travel?”", a: "Jesi li putovala?" },
      { q: "“They (mixed) watched a film.”", a: "Gledali su film." },
    ],
  },
};
