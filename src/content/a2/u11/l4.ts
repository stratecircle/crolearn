import type { Lesson } from "@/types/content";

/**
 * A2 U11 L4 — Kod liječnika (at the doctor's)
 * Spec: curriculum/A2/unit-11.md · grammar-reference §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: no new machinery — assembly of U9 GEN (kod liječnika, bez
 * recepta), U10 DAT of goal (idem liječniku / k liječniku), modals (L2) and
 * boli-me (L1). liječnik/liječnica recycled from U2. Glossed chunks per the
 * spec correction: "jer" (= because, receptive since U8), "uzeti" (take a
 * medicine), "poslije jela" (after meals — label realia). Imperatives wait
 * for U14 — instructions use Morate/Trebate + infinitive.
 */
export const a2u11l4: Lesson = {
  id: "a2u11l4",
  unitId: "a2u11",
  title: "Kod liječnika",
  titleEn: "At the doctor's",
  grammarTags: ["doctor-visit", "genitive-prepositions", "modals"],
  estMinutes: 18,
  vocab: [
    { id: "a2u11.ljekarna", image: "/img/ljekarna.png", hr: "ljekarna", en: "pharmacy", pos: "noun", gender: "f", icon: "💊", exampleHr: "Ljekarna je blizu kolodvora.", exampleEn: "The pharmacy is near the station." },
    { id: "a2u11.lijek", image: "/img/lijek.png", hr: "lijek", en: "medicine", pos: "noun", gender: "m", icon: "💊", exampleHr: "Ne mogu kupiti lijek bez recepta.", exampleEn: "I can't buy the medicine without a prescription." },
    { id: "a2u11.recept", image: "/img/recept.png", hr: "recept", en: "prescription", pos: "noun", gender: "m", icon: "📄", exampleHr: "Izvolite recept.", exampleEn: "Here is the prescription." },
    { id: "a2u11.pregled", image: "/img/pregled.png", hr: "pregled", en: "examination / check-up", pos: "noun", gender: "m", icon: "🩺", exampleHr: "Pregled je u devet sati.", exampleEn: "The examination is at nine." },
    { id: "a2u11.cekaonica", image: "/img/cekaonica.png", hr: "čekaonica", en: "waiting room", pos: "noun", gender: "f", icon: "🪑", exampleHr: "Čekaonica je puna.", exampleEn: "The waiting room is full." },
    { id: "a2u11.tableta", image: "/img/tableta.png", hr: "tableta", en: "pill / tablet", pos: "noun", gender: "f", icon: "💊", exampleHr: "Morate uzeti tabletu dva puta na dan.", exampleEn: "You must take a pill twice a day." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kod liječnika",
      subtitle: "In 15 minutes you can do your half of a doctor's visit.",
      emoji: "🩺",
      items: [
        { emoji: "🚶", label: "The visit path", hint: "čekaonica → pregled → recept → ljekarna" },
        { emoji: "🗣️", label: "Your half", hint: "Boli me… Loše mi je…" },
        { emoji: "📄", label: "The label", hint: "2× na dan, poslije jela" },
        { emoji: "🎤", label: "Two symptoms", hint: "describe them out loud" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The visit path",
      subtitle: "Four stations, and you own the grammar for every one.",
      emoji: "🚶",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "aches, needs & musts" },
        { emoji: "🗺️", label: "The flow", hint: "waiting room to pharmacy" },
        { emoji: "🧭", label: "kod vs k", hint: "AT the doctor's vs TO the doctor" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: everything the visit needs",
      items: [
        {
          prompt: "L1 anamnesis: »___ me grlo.«",
          options: ["Boli", "Bole", "Boljeti"],
          correctIndex: 0,
          explanation: "Boli me grlo — your opening line at the pregled.",
        },
        {
          prompt: "L2 doctor's orders: »___ ležati.« (you MUST, polite vi)",
          options: ["Morate", "Smijete", "Možete"],
          correctIndex: 0,
          explanation: "Morate ležati — obligation, Vi-form.",
        },
        {
          prompt: "Listen (U2): who is she?",
          tts: "Ana je nova liječnica.",
          options: ["a doctor", "a waitress", "a teacher"],
          correctIndex: 0,
          explanation: "liječnica (U2!) = doctor (f) — today she finally gets her office.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the clinic words",
      vocabIds: [
        "a2u11.ljekarna", "a2u11.lijek", "a2u11.recept",
        "a2u11.pregled", "a2u11.cekaonica", "a2u11.tableta",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The visit, station by station",
      body:
        "Every Croatian doctor's visit walks the same path. One direction note: **idem liječniku / k liječniku** = I'm going TO the doctor (DAT, U10) but **kod liječnika** = I'm AT the doctor's (GEN, U9).\n\n*(jer = because — you've seen it in Unit 8's story questions; now it's yours.)*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "čekaonica", emoji: "🪑", example: "Čekam pregled." },
          { label: "pregled", emoji: "🩺", example: "Što Vas boli?" },
          { label: "recept", emoji: "📄", example: "Izvolite recept." },
          { label: "ljekarna", emoji: "💊", example: "Jedan lijek, molim." },
        ],
      },
      examples: [
        { hr: "Idem liječniku jer me boli grlo.", en: "I'm going to the doctor because my throat hurts.", highlight: { text: "liječniku", caseId: "DAT" } },
        { hr: "Tom je kod liječnika.", en: "Tom is at the doctor's.", highlight: { text: "liječnika", caseId: "GEN" } },
        { hr: "Čekaonica je puna, ali pregled je brz.", en: "The waiting room is full, but the examination is quick.", note: "brz = quick — a small bonus adjective" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Doctor's instructions — and the label",
      body:
        "The liječnica speaks in modals (imperatives arrive in U14):\n\n- *Morate **uzeti** tabletu.* — you must take a pill *(uzeti = to take — learn the chunk **uzeti lijek/tabletu**)*\n- *Trebate ležati i piti puno vode.*\n- *Ne smijete piti kavu.*\n\nAnd the pharmacy label reads like a telegram — decode it once, know it forever:",
      table: {
        caption: "📄 The label on the box",
        headers: ["the label says", "it means"],
        rows: [
          ["2× na dan", "twice a day (dva puta na dan)"],
          ["poslije jela", "after meals (a fixed chunk)"],
          ["Ne smijete piti alkohol.", "no alcohol (cognate!)"],
        ],
      },
      examples: [
        { hr: "Morate uzeti tabletu dva puta na dan.", en: "You must take a pill twice a day." },
        { hr: "Trebate ležati i piti puno vode.", en: "You need to lie down and drink a lot of water.", highlight: { text: "vode", caseId: "GEN" } },
        { hr: "Ne mogu kupiti lijek bez recepta.", en: "I can't buy the medicine without a prescription.", highlight: { text: "recepta", caseId: "GEN" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: understand the instructions",
      items: [
        {
          prompt: "»Morate uzeti tabletu dva puta na dan.« — how often?",
          options: ["twice a day", "once a day", "every two days"],
          correctIndex: 0,
          explanation: "dva puta na dan = twice a day.",
        },
        {
          prompt: "»Ne smijete piti kavu.« means:",
          options: ["coffee is forbidden", "you don't have to drink coffee", "you should drink coffee"],
          correctIndex: 0,
          explanation: "ne smijete = mustn't (the L2 traffic light).",
        },
        {
          prompt: "Where do you buy the lijek?",
          options: ["u ljekarni", "u čekaonici", "na pregledu"],
          correctIndex: 0,
          explanation: "ljekarna = pharmacy → u ljekarni (LOC).",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Liječnica: »Što Vas boli?« — Vi: »___ me leđa i glava.«",
      blanks: [["Bole", "bole"]],
      translation: "Doctor: \"What hurts?\" — You: \"My back and head hurt.\"",
      wordBank: ["Bole", "Boli", "Bolim"],
      explanation: "leđa is plural (plus glava) → bole. (Vas = polite 'you', the ACC chunk.)",
    },
    {
      id: "s09",
      type: "fill",
      text: "Liječnica: »Imate li temperaturu?« — Vi: »Imam. I ___ mi je.«",
      blanks: [["loše"]],
      translation: "Doctor: \"Do you have a fever?\" — You: \"I do. And I feel bad.\"",
      wordBank: ["loše", "muka", "dobro"],
      explanation: "loše mi je = I feel bad. (Muka mi je would mean nausea — a different symptom!)",
    },
    {
      id: "s10",
      type: "fill",
      text: "Liječnica: »___ ležati i piti puno vode.« (you need to, vi)",
      blanks: [["Trebate", "trebate"]],
      translation: "Doctor: \"You need to lie down and drink a lot of water.\"",
      wordBank: ["Trebate", "Smijete", "Trebam"],
      explanation: "Trebate + infinitive — the doctor's gentle modal.",
    },
    {
      id: "s11",
      type: "fill",
      text: "U ljekarni: »Ne mogu kupiti lijek bez ___.« (recept)",
      blanks: [["recepta"]],
      translation: "At the pharmacy: \"I can't buy the medicine without a prescription.\"",
      explanation: "bez + GEN (U9): recept → recepta.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Your half of the visit",
      subtitle: "Type it, hear it slow, then say your symptoms.",
      emoji: "🗣️",
      items: [
        { emoji: "⌨️", label: "Type the key lines", hint: "going to the doctor" },
        { emoji: "🎧", label: "Dictation ×2", hint: "one has slow replay" },
        { emoji: "🎤", label: "Two symptoms", hint: "Boli me… i loše mi je." },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I'm going to the doctor.” (DAT of goal)",
      answers: ["Idem liječniku.", "Idem liječniku", "Idem k liječniku.", "Idem k liječniku"],
      hint: "the U10 dative of direction",
      explanation: "Idem liječniku. / Idem k liječniku. (kod liječnika = being there)",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I can't buy the medicine without a prescription.”",
      answers: ["Ne mogu kupiti lijek bez recepta.", "Ne mogu kupiti lijek bez recepta"],
      hint: "ne mogu + infinitive + bez + GEN",
      explanation: "Ne mogu kupiti lijek bez recepta.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Morate uzeti tabletu dva puta na dan.",
      allowSlow: true,
      explanation: "Morate uzeti tabletu dva puta na dan — you must take a pill twice a day.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Pregled je u devet sati.",
      explanation: "Pregled je u devet sati — the examination is at nine.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: quantities, stations and old rules",
      items: [
        {
          prompt: "U7's genitive of quantity: »Trebate piti puno ___.« (voda)",
          options: ["vode", "vodu", "voda"],
          correctIndex: 0,
          explanation: "puno + GEN: puno vode.",
        },
        {
          prompt: "U9 preps at the clinic: »Tom je ___ liječnika.« (AT the doctor's)",
          options: ["kod", "k", "prema"],
          correctIndex: 0,
          explanation: "kod + GEN = at; k + DAT = heading to.",
        },
        {
          prompt: "Listen (U6 time): when is the examination?",
          tts: "Pregled je u osam sati ujutro.",
          options: ["at eight in the morning", "at nine in the evening", "at noon"],
          correctIndex: 0,
          explanation: "u osam sati ujutro — U6 time-telling at the clinic.",
        },
      ],
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Boli me glava i grlo, a imam i temperaturu.",
      targetEn: "describe two symptoms — My head and throat hurt, and I also have a fever.",
      phonetic: "BO-lee meh GLAH-va ee GER-lo",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The visit path:** *čekaonica → pregled → recept → ljekarna* — with **k liječniku** (going, DAT) vs **kod liječnika** (being there, GEN).\n\n**Your half:** *Boli me… · Loše mi je. · Imam temperaturu.* **Their half:** *Morate uzeti tabletu dva puta na dan. Trebate ležati. Ne smijete piti kavu.*\n\n**Label literacy:** *2× na dan · poslije jela.* And no recept, no lijek: *Ne mogu kupiti lijek bez recepta.*\n\nWords tonight: **ljekarna, lijek, recept, pregled, čekaonica, tableta**.\n\nNext lesson: *Zdrave navike* — so you visit the liječnica less often.",
      vocabIds: [
        "a2u11.ljekarna", "a2u11.lijek", "a2u11.recept",
        "a2u11.pregled", "a2u11.cekaonica", "a2u11.tableta",
      ],
    },
  ],
  srsCloze: [
    { front: "twice a day = dva puta ___ dan", answers: ["na"], back: "dva puta na dan (the label chunk)", tts: "dva puta na dan" },
    { front: "Ne mogu kupiti lijek bez ___. (recept)", answers: ["recepta"], back: "bez recepta (bez + GEN)", tts: "Ne mogu kupiti lijek bez recepta." },
    { front: "going TO the doctor: Idem ___ (liječnik, DAT)", answers: ["liječniku", "lijecniku"], back: "Idem liječniku / k liječniku. (kod liječnika = AT)", tts: "Idem liječniku." },
    { front: "pharmacy = ___", answers: ["ljekarna"], back: "ljekarna = pharmacy.", tts: "ljekarna" },
    { front: "prescription = ___", answers: ["recept"], back: "recept = prescription.", tts: "recept" },
    { front: "waiting room = ___", answers: ["čekaonica", "cekaonica"], back: "čekaonica = waiting room.", tts: "čekaonica" },
  ],
  notes: {
    inOneSentence: {
      en: "The doctor's visit is assembled from parts you own: boli-me symptoms, modal instructions, k liječniku (DAT, going) vs kod liječnika (GEN, being there), and bez recepta at the pharmacy.",
      exampleHr: "Idem liječniku jer me boli grlo. · Morate uzeti tabletu dva puta na dan. · Ne mogu kupiti lijek bez recepta.",
    },
    deepDive: [
      {
        title: "The visit flow — with a phrase per station",
        body:
          "Walk it once and it's yours:\n\n1. **čekaonica** — *Čekam pregled.* (I'm waiting for the examination)\n2. **pregled** — *Što Vas boli?* → *Boli me… / Bole me… / Loše mi je. / Imam temperaturu.*\n3. **recept** — *Izvolite recept. Morate uzeti tabletu dva puta na dan.*\n4. **ljekarna** — *Jedan lijek, molim. — Imate li recept?*",
        diagram: {
          kind: "flow",
          steps: [
            { label: "čekaonica", emoji: "🪑", example: "Čekam pregled." },
            { label: "pregled", emoji: "🩺", example: "Boli me grlo." },
            { label: "recept", emoji: "📄", example: "dva puta na dan" },
            { label: "ljekarna", emoji: "💊", example: "bez recepta? Ne!" },
          ],
        },
      },
      {
        title: "kod vs k — the clinic edition",
        body:
          "The grandma-logistics table from U10 works for doctors too:\n\n- going: **idem liječniku / k liječniku** (DAT)\n- there: **kod liječnika** (GEN)\n- back: **od liječnika** (GEN)\n\nYou'll hear colloquial *idem kod liječnika* all over Croatia — recognize it, but the course (and careful standard) writes *idem liječniku*.",
        table: {
          caption: "Doctor logistics",
          headers: ["phase", "phrase", "case"],
          rows: [
            ["going", "Idem liječniku. / k liječniku", "DAT"],
            ["being there", "Tom je kod liječnika.", "GEN"],
            ["returning", "Idem od liječnika u ljekarnu.", "GEN"],
          ],
        },
      },
      {
        title: "Chunk kit for the clinic",
        body:
          "Memorize whole, deploy instantly:\n\n- **Što Vas boli?** — what hurts? (Vas = polite ACC chunk; your answer: *Boli me…*)\n- **dva puta na dan** — twice a day\n- **poslije jela** — after meals (label chunk)\n- **uzeti lijek / tabletu** — to take medicine (uzeti glossed here; its full conjugation uzmem arrives with more perfectives later)\n- **jer** — because: *Idem liječniku jer me boli grlo.* (finally official after its U8 cameo)",
      },
    ],
    commonMistakes: [
      {
        wrong: "Idem kod liječnika.",
        right: "Idem liječniku. / Idem k liječniku.",
        why: "Colloquial but non-standard — kod liječnika means being AT the doctor's, not heading there.",
      },
      {
        wrong: "bez recept",
        right: "bez recepta",
        why: "bez always takes GEN (U9): recepta.",
      },
      {
        wrong: "Morate uzeti tabletu dva puta na danu.",
        right: "…dva puta na dan.",
        why: "The frequency chunk is frozen: na dan (not LOC).",
      },
      {
        wrong: "Boli me grlo i glava. (with boli)",
        right: "Bole me grlo i glava.",
        why: "Two body parts → plural verb bole (L1 agreement).",
      },
    ],
    memoryHooks: [
      "The path rhymes with the pain: čekaonica (wait) → pregled (look) → recept (paper) → ljekarna (pills).",
      "k = key in hand, going · kod = couch, already there — now with doctors.",
      "lijek → ljekarna: the medicine names its own shop.",
      "2× na dan, poslije jela — read any Croatian pillbox forever.",
    ],
    connects: [
      { label: "liječnik/liječnica — professions (Unit 2 L3)", lessonId: "a1u2l3" },
      { label: "The modals that write prescriptions (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "boli me + loše mi je — your anamnesis (Unit 11 L3)", lessonId: "a2u11l3" },
      { label: "Next: healthy habits & unit review (Unit 11 L5)", lessonId: "a2u11l5" },
    ],
    selfCheck: [
      { q: "“I'm going to the doctor because my throat hurts” = ?", a: "Idem liječniku jer me boli grlo." },
      { q: "kod liječnika vs k liječniku?", a: "kod + GEN = at the doctor's; k + DAT = heading to the doctor." },
      { q: "Decode: »2× na dan, poslije jela«", a: "Twice a day, after meals." },
      { q: "“I can't buy the medicine without a prescription” = ?", a: "Ne mogu kupiti lijek bez recepta." },
      { q: "The four stations of the visit?", a: "čekaonica → pregled → recept → ljekarna." },
    ],
  },
};
