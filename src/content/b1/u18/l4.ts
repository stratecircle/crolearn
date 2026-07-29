import type { Lesson } from "@/types/content";

/**
 * B1 U18 L4 — Učenje jezika (Advice: what you'd do in their place)
 * Spec: curriculum/B1/unit-18.md · grammar-reference §10 "Conditional I";
 * U11 L2 (morati / trebati / moći) is the plain-verb baseline this softens.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Four advice frames, ordered most-personal → most-impersonal:
 *   1. Na tvom mjestu bih + participle   (warm — a fixed frame, na + LOC)
 *   2. Trebao / Trebala bi + infinitive  (direct — AGREES with the person advised)
 *   3. Trebalo bi + infinitive           (impersonal — frozen neuter, no subject)
 *   4. Mogao / Mogla bi + infinitive     (gentle — an option)
 *
 * AUTHORING NOTES (spec-mandated):
 * - The title uses **učenje**, a verbal noun. Verbal nouns are U23: the word
 *   appears in the title only. It is never carded and never quizzed.
 * - The spec asks for a "usage-map diagram" for the four frames. The usage-map
 *   renderer hard-prints "When do I use the <case>?" from its required caseId,
 *   which is semantically wrong for four advice frames. Delivered instead as a
 *   BRACKET diagram (label / how-it-lands / example — a 1:1 fit) plus the
 *   four-frame table; a2u13 L2 already ships a 4-group bracket, so the 3-col
 *   grid wrapping to 3+1 is in-pattern.
 * - Avoided as untaught (verified by grep across src/content): znati (2 uses),
 *   pitati (1), razgovarati (0), polako (0), ovaj/ovu (0), možda (0).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U18 cut-outs exist.
 */
export const b1u18l4: Lesson = {
  id: "b1u18l4",
  unitId: "b1u18",
  title: "Učenje jezika",
  titleEn: "Learning a language — giving advice",
  grammarTags: ["conditional-1", "advice-frames", "i-declension"],
  estMinutes: 21,
  vocab: [
    { id: "b1u18.savjet", image: "/img/savjet.png", hr: "savjet", en: "a piece of advice (m — countable: jedan savjet, dva savjeta)", pos: "noun", gender: "m", icon: "💡", exampleHr: "To je jako dobar savjet.", exampleEn: "That's very good advice." },
    { id: "b1u18.vjestina", image: "/img/vjestina.png", hr: "vještina", en: "skill", pos: "noun", gender: "f", icon: "🛠️", exampleHr: "Govoriti hrvatski je vještina.", exampleEn: "Speaking Croatian is a skill." },
    { id: "b1u18.greska", image: "/img/greska.png", hr: "greška", en: "mistake (f — GEN pl grešaka)", pos: "noun", gender: "f", icon: "❌", exampleHr: "Nije to velika greška.", exampleEn: "That's not a big mistake." },
    { id: "b1u18.recenica", image: "/img/recenica.png", hr: "rečenica", en: "sentence", pos: "noun", gender: "f", icon: "📝", exampleHr: "Ne razumijem tu rečenicu.", exampleEn: "I don't understand that sentence." },
    { id: "b1u18.rijec", image: "/img/rijec.png", hr: "riječ", en: "word (f — i-declension: GEN riječi, pl riječi)", pos: "noun", gender: "f", icon: "🔤", exampleHr: "Svaki dan učim pet novih riječi.", exampleEn: "Every day I learn five new words." },
    { id: "b1u18.razumjeti", image: "/img/razumjeti.png", hr: "razumjeti", en: "to understand (razumijem, razumiješ — the -ije- that the infinitive hides)", pos: "verb", icon: "🧠", exampleHr: "Razumiješ li me?", exampleEn: "Do you understand me?" },
    { id: "b1u18.zapamtiti", image: "/img/zapamtiti.png", hr: "zapamtiti", en: "to memorize / commit to memory (pf; zapamtim)", pos: "verb", icon: "📌", exampleHr: "Moram zapamtiti pet riječi.", exampleEn: "I have to memorize five words." },
    { id: "b1u18.vjezba", image: "/img/vjezba.png", hr: "vježba", en: "exercise / drill (f — the noun beside vježbati)", pos: "noun", gender: "f", icon: "✏️", exampleHr: "Ova vježba nije teška.", exampleEn: "This exercise isn't hard." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Učenje jezika",
      subtitle: "Croatian has four ways to tell someone what to do, and only one of them sounds like an order.",
      emoji: "🎚️",
      items: [
        { emoji: "🤝", label: "Na tvom mjestu bih…", hint: "warm" },
        { emoji: "👉", label: "Trebao bi…", hint: "direct — it agrees" },
        { emoji: "📋", label: "Trebalo bi…", hint: "impersonal — it never does" },
        { emoji: "🪶", label: "Mogao bi…", hint: "gentle" },
        { emoji: "🔤", label: "Language words", hint: "riječ, rečenica, greška…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · One dial, four volumes",
      subtitle: "You already know how to say »you must«. Today you learn how to say the same thing without anyone feeling told off.",
      emoji: "🎚️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L3 conditions, U11 trebati" },
        { emoji: "🃏", label: "New words", hint: "the learner's eight" },
        { emoji: "🎛️", label: "The four frames", hint: "warm → direct → rule → gentle" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: real, unreal, and the blunt baseline",
      items: [
        {
          prompt: "L3: »___ imam vremena, doći ću.« (a real plan — it might happen)",
          options: ["Ako", "Da", "Kad bih"],
          correctIndex: 0,
          explanation: "Real condition → ako + present, and the other half is future I: doći ću.",
        },
        {
          prompt: "L3: »Da imam vremena, ___ .« (but I don't)",
          options: ["došao bih", "doći ću", "dolazim"],
          correctIndex: 0,
          explanation: "Unreal → da + present in the if-half, conditional in the other: došao bih.",
        },
        {
          prompt: "U11: »___ ponoviti sve.« (I need to — plain present, no softening)",
          tts: "Trebam ponoviti sve.",
          options: ["Trebam", "Trebao", "Trebalo"],
          correctIndex: 0,
          explanation: "Plain present trebati = I need to. Put bi behind it and it turns into advice: trebao bih.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words — the language learner's kit",
      vocabIds: [
        "b1u18.savjet", "b1u18.vjestina", "b1u18.greska", "b1u18.recenica",
        "b1u18.rijec", "b1u18.razumjeti", "b1u18.zapamtiti", "b1u18.vjezba",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Four ways to say »you should« 🎛️",
      body:
        "English has one word for this and leans on tone of voice. Croatian has four **frames**, and choosing the right one does the work your tone would do.\n\nThey run from most personal to least: I imagine myself in your shoes → I tell you → I state a rule → I float an idea. Nothing new to conjugate: every one of them is *bi* plus something you already own.\n\nThe **greška** almost every learner makes here is reaching for the plain present — *trebaš ponoviti*. It is not wrong. It is just loud.",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "Na tvom mjestu bih…", rule: "warm", example: "…upisao tečaj." },
          { label: "Trebao / Trebala bi…", rule: "direct · agrees with YOU", example: "…ponoviti te riječi." },
          { label: "Trebalo bi…", rule: "impersonal · agrees with nobody", example: "…vježbati svaki dan." },
          { label: "Mogao / Mogla bi…", rule: "gentle", example: "…zapamtiti pet riječi." },
        ],
      },
      table: {
        caption: "Four volumes of the same advice",
        headers: ["frame", "literally", "how it lands"],
        rows: [
          ["Na tvom mjestu bih + participle", "in your place I would…", "warm — you are not ordering, you are imagining"],
          ["Trebao / Trebala bi + infinitive", "you would need to…", "direct — the everyday »you should«"],
          ["Trebalo bi + infinitive", "it would be needed to…", "impersonal — a rule, nobody is blamed"],
          ["Mogao / Mogla bi + infinitive", "you could…", "gentle — an option, easy to refuse"],
        ],
      },
      examples: [
        { hr: "Na tvom mjestu bih upisao tečaj.", en: "In your place I'd enrol in a course.", note: "na + LOC — na tvom mjestu. Store the block whole.", highlight: { text: "na tvom mjestu", caseId: "LOC" } },
        { hr: "Na vašem mjestu bih učio svaki dan.", en: "In your place I'd study every day.", note: "The Vi version — same frame, one word swapped." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "trebao bi ‖ trebalo bi — the one you must get right",
      body:
        "Two frames, one letter apart, and Croatians hear the difference instantly.\n\n**trebao bi** has a subject. The participle agrees with **the person being advised** — *Ana, trebala bi…*, *Marko bi trebao…*, *Trebali biste…*\n\n**trebalo bi** has no subject at all. It is not a paradigm, it is a frozen block: neuter singular, forever, for everybody. Use it for rules, notices and general truths.\n\nA quick test: if you can name who should do it, use the agreeing form. If the answer is »well… anyone«, use *trebalo bi*.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Ana bi trebala — never ✗ Ana trebalo bi",
        text: "The moment a person appears in the sentence, the participle has to agree with them. trebalo bi is only for sentences with nobody in them.",
      },
      table: {
        caption: "trebati in the conditional",
        headers: ["tko", "oblik", "primjer"],
        rows: [
          ["ja", "trebao bih / trebala bih", "Trebao bih više vježbati."],
          ["ti", "trebao bi / trebala bi", "Ana, trebala bi ponoviti."],
          ["on / ona", "trebao bi / trebala bi", "Marko bi trebao ponoviti."],
          ["mi", "trebali bismo", "Trebali bismo vježbati zajedno."],
          ["vi / Vi", "trebali biste", "Trebali biste ponoviti sve."],
          ["— (nobody)", "trebalo bi", "Trebalo bi vježbati svaki dan."],
        ],
      },
      examples: [
        { hr: "Trebala bi ponoviti te riječi.", en: "You should revise those words. (to a woman)", note: "Personal → f sg participle." },
        { hr: "Trebalo bi vježbati svaki dan.", en: "One ought to practise every day.", note: "No subject → frozen neuter." },
        { hr: "Mogao bi zapamtiti pet riječi na dan.", en: "You could memorize five words a day.", note: "The softest frame — an option, not an instruction." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Which frame — and does it agree?",
      items: [
        {
          prompt: "»Marko, ___ bi ponoviti te riječi.«",
          options: ["trebao", "trebalo", "trebala"],
          correctIndex: 0,
          explanation: "Marko is the one advised → the participle agrees: trebao bi.",
        },
        {
          prompt: "»___ bi vježbati svaki dan.« (a general truth — everybody, nobody in particular)",
          options: ["Trebalo", "Trebao", "Trebali"],
          correctIndex: 0,
          explanation: "No subject at all → the frozen neuter: Trebalo bi.",
        },
        {
          prompt: "»Ana, na tvom ___ bih upisala tečaj.«",
          options: ["mjestu", "mjesto", "mjesta"],
          correctIndex: 0,
          explanation: "na + LOC → na tvom mjestu. You are standing in the place, not moving into it.",
        },
        {
          prompt: "Which one is the softest — the easiest to say no to?",
          options: [
            "Mogao bi zapamtiti pet riječi na dan.",
            "Trebao bi zapamtiti pet riječi na dan.",
            "Zapamti pet riječi na dan!",
          ],
          correctIndex: 0,
          explanation: "Mogao bi = you could, an option. Trebao bi = you should. The bare imperative is an order.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · The learner's own words",
      subtitle: "Two forms in today's set will bite you if you guess them: the verb that grows an -i- in the present, and the feminine noun that ends in a consonant.",
      emoji: "🔤",
      items: [
        { emoji: "🧠", label: "razumjeti", hint: "razum-IJE-m" },
        { emoji: "🔤", label: "riječ", hint: "f, i-declension" },
        { emoji: "✍️", label: "Drills", hint: "match · fill · type" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "razumjeti — the -ije- that the infinitive hides 🧠",
      body:
        "The infinitive shows **-je-**: *razum**je**ti*. The present grows an extra **i**: *razum**ije**m*. Nothing else in the verb moves, and the stress stays put.\n\nThis is the same **je → ije** stretch you have already met in *htjeti → htio* and *vidjeti → vidim*'s cousins — Croatian keeps the short form in the infinitive and the long one where the ending is light.\n\nThe negative is where you will use this verb most, and it is worth over-learning as a single chunk: **Ne razumijem.**",
      table: {
        caption: "razumjeti — prezent",
        headers: ["osoba", "oblik"],
        rows: [
          ["ja", "razumijem"],
          ["ti", "razumiješ"],
          ["on / ona / ono", "razumije"],
          ["mi", "razumijemo"],
          ["vi / Vi", "razumijete"],
          ["oni / one / ona", "razumiju"],
        ],
      },
      examples: [
        { hr: "Ne razumijem tu rečenicu.", en: "I don't understand that sentence.", note: "The single most useful sentence in this lesson." },
        { hr: "Razumiješ li me?", en: "Do you understand me?", note: "li goes first, then the accusative clitic me." },
      ],
    },
    {
      id: "s10",
      type: "teach",
      title: "riječ — feminine, and it ends in a consonant",
      body:
        "Almost every feminine noun you own ends in **-a**. **riječ** does not, and neither do *stvar*, *noć* or *ljubav* — they belong to a small second feminine group (the **i-declension**), and their endings are almost all the same syllable: **-i**.\n\nThat is the good news: five of the six forms you need are just **riječi**. Only the nominative and accusative singular break away, and they are both plain **riječ**.",
      table: {
        caption: "riječ (f) — i-declension",
        headers: ["padež", "jednina", "množina"],
        rows: [
          ["NOM", "riječ", "riječi"],
          ["ACC", "riječ", "riječi"],
          ["GEN", "riječi", "riječi"],
          ["DAT / LOC", "riječi", "riječima"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "When in doubt: riječi",
        text: "pet riječi · te riječi · nove riječi · u riječima. If the form you want is not the bare subject or the bare object, it is riječi.",
      },
      examples: [
        { hr: "Svaki dan učim pet novih riječi.", en: "Every day I learn five new words.", note: "pet + GEN pl → riječi.", highlight: { text: "pet novih riječi", caseId: "GEN" } },
        { hr: "Ne razumijem tu riječ.", en: "I don't understand that word.", note: "Bare object → ACC sg, which is just riječ.", highlight: { text: "tu riječ", caseId: "ACC" } },
        { hr: "Ova vježba nije teška.", en: "This exercise isn't hard.", note: "vježba (f) — the noun that lives beside vježbati." },
      ],
    },
    {
      id: "s11",
      type: "mc",
      prompt: "To your friend Ana: »You should revise those words.«",
      options: [
        "Trebala bi ponoviti te riječi.",
        "Trebalo bi ponoviti te riječi.",
        "Trebali bi ponoviti te riječi.",
      ],
      correctIndex: 0,
      explanation: "Ana is the person advised → trebala bi (f sg). trebalo bi would turn it into a general rule.",
    },
    {
      id: "s12",
      type: "mc",
      prompt: "On a poster in the school corridor: »One ought to practise every day.«",
      tts: "Trebalo bi vježbati svaki dan.",
      options: [
        "Trebalo bi vježbati svaki dan.",
        "Trebao bi vježbati svaki dan.",
        "Trebala bi vježbati svaki dan.",
      ],
      correctIndex: 0,
      explanation: "A poster addresses nobody in particular → the subjectless, frozen neuter trebalo bi.",
    },
    {
      id: "s13",
      type: "match",
      prompt: "Match each frame with how it lands on the person hearing it.",
      pairs: [
        { a: "Na tvom mjestu bih…", b: "warm — I imagine myself in your shoes" },
        { a: "Trebao bi…", b: "direct — the everyday »you should«" },
        { a: "Trebalo bi…", b: "impersonal — a rule, nobody blamed" },
        { a: "Mogao bi…", b: "gentle — an option you may refuse" },
        { a: "Zapamti!", b: "an order — no softening at all" },
      ],
    },
    {
      id: "s14",
      type: "fill",
      text: "Na tvom ___ bih upisao tečaj hrvatskog.",
      blanks: [["mjestu"]],
      translation: "In your place I'd enrol in a Croatian course.",
      wordBank: ["mjesto", "mjestu", "mjesta"],
      explanation: "na + LOC. »na tvom mjestu« / »na vašem mjestu« is stored whole, like a phrase.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Ana, ___ bi ponoviti te riječi.",
      blanks: [["trebala"]],
      translation: "Ana, you should revise those words.",
      explanation: "A person is named → the participle agrees with her: trebala bi.",
    },
    {
      id: "s16",
      type: "fill",
      text: "___ bi vježbati svaki dan.",
      blanks: [["Trebalo", "trebalo"]],
      translation: "One ought to practise every day.",
      explanation: "Nobody is named → the frozen neuter trebalo bi.",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Mogao", "bi", "zapamtiti", "pet", "riječi", "na", "dan"],
      answers: ["Mogao bi zapamtiti pet riječi na dan"],
      en: "You could memorize five words a day.",
      explanation: "Frame first (Mogao bi), then the infinitive, then everything it governs.",
    },
    {
      id: "s18",
      type: "type",
      prompt: "Advise a female friend (ti): »You should practise every day.«",
      answers: [
        "Trebala bi vježbati svaki dan.",
        "Trebala bi vježbati svaki dan",
        "Trebala bi vjezbati svaki dan.",
        "Trebala bi vjezbati svaki dan",
      ],
      hint: "personal frame — it agrees with her",
      explanation: "Trebala bi vježbati svaki dan. Swap to Trebalo bi and you are no longer talking to her.",
    },
    {
      id: "s19",
      type: "type",
      prompt: "Say: »I don't understand that sentence.«",
      answers: [
        "Ne razumijem tu rečenicu.",
        "Ne razumijem tu rečenicu",
        "Ne razumijem tu recenicu.",
        "Ne razumijem tu recenicu",
      ],
      hint: "-ije-, not -je-",
      explanation: "Ne razumijem tu rečenicu. The infinitive hides the i; the present shows it.",
    },
    {
      id: "s20",
      type: "section",
      title: "Part 3 · Say it to a person",
      subtitle: "Advice only works out loud. Two dictations, then you give a beginner three pieces of your own.",
      emoji: "🎤",
      items: [
        { emoji: "🎧", label: "Listen & type", hint: "the two core frames" },
        { emoji: "🗣️", label: "Speak", hint: "advise a beginner" },
        { emoji: "🔁", label: "Interleave", hint: "U11 · U13 · U17" },
      ],
    },
    {
      id: "s21",
      type: "listen-type",
      tts: "Trebala bi ponoviti te riječi.",
      answers: [
        "Trebala bi ponoviti te riječi.",
        "Trebala bi ponoviti te riječi",
        "Trebala bi ponoviti te rijeci.",
        "Trebala bi ponoviti te rijeci",
      ],
      allowSlow: true,
      explanation: "Trebala — the -la ending tells you a woman is being advised before the sentence even finishes.",
    },
    {
      id: "s22",
      type: "listen-type",
      tts: "Trebalo bi vježbati svaki dan.",
      answers: [
        "Trebalo bi vježbati svaki dan.",
        "Trebalo bi vježbati svaki dan",
        "Trebalo bi vjezbati svaki dan.",
        "Trebalo bi vjezbati svaki dan",
      ],
      allowSlow: true,
      explanation: "Trebalo — the -lo ending means nobody in particular. Same melody, different addressee.",
    },
    {
      id: "s23",
      type: "speak",
      targetHr: "Na tvom mjestu bih učio svaki dan. Trebala bi zapamtiti pet novih riječi na dan. Mogla bi čitati novine.",
      targetEn: "advise a beginner (a woman) in three sentences — In your place I'd study every day. You should memorize five new words a day. You could read the newspaper.",
      phonetic: "nah TVOM MYEH-stoo beeh OO-chee-oh SVAH-kee dahn. TREH-bah-lah bee zah-PAM-tee-tee pet NO-veeh REE-yeh-chee nah dahn. MO-glah bee CHEE-tah-tee NO-vee-neh",
    },
    {
      id: "s24",
      type: "quiz-set",
      review: true,
      title: "Interleave & consolidate",
      items: [
        {
          prompt: "»Govoriti hrvatski je ___.« (something you get better at)",
          options: ["vještina", "greška", "rečenica"],
          correctIndex: 0,
          explanation: "vještina = a skill. greška = a mistake. rečenica = a sentence.",
        },
        {
          prompt: "U11 baseline: »___ ponoviti sve.« (I must — the blunt end of the dial)",
          options: ["Moram", "Trebalo", "Mogao"],
          correctIndex: 0,
          explanation: "morati = must · trebao bih = should · mogao bih = could. Same dial, three volumes.",
        },
        {
          prompt: "U13 agreement: »To je jako ___ savjet.«",
          tts: "To je jako dobar savjet.",
          options: ["dobar", "dobra", "dobro"],
          correctIndex: 0,
          explanation: "savjet is masculine → dobar savjet. The adjective never stopped agreeing.",
        },
        {
          prompt: "U17 aspect: »Trebala bi ponoviti te riječi.« — why ponoviti and not ponavljati?",
          options: [
            "one finished pass over the words — perfective",
            "a habit she repeats every day — imperfective",
            "it is the future tense",
          ],
          correctIndex: 0,
          explanation: "Advice about one completed act takes the perfective. A habit would want the imperfective partner.",
        },
      ],
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Four frames, one dial** — warm to gentle:\n\n*Na tvom mjestu bih + participle* (I imagine myself there) · *Trebao / Trebala bi + inf* (you should — **agrees**) · *Trebalo bi + inf* (one ought to — **never agrees**) · *Mogao / Mogla bi + inf* (you could).\n\n**The trap**: name a person and the participle must follow them — *Ana bi trebala ponoviti*, never ~~Ana trebalo bi~~.\n\n**Two forms to over-learn**: *razumijem* (the infinitive hides the i) and *riječ → riječi* (only NOM/ACC sg are riječ).\n\nWords tonight: savjet, vještina, greška, rečenica, riječ, razumjeti, zapamtiti, vježba.\n\nNext: all four jobs of the conditional in one paragraph — and the unit's writing task.",
      vocabIds: [
        "b1u18.savjet", "b1u18.vjestina", "b1u18.greska", "b1u18.recenica",
        "b1u18.rijec", "b1u18.razumjeti", "b1u18.zapamtiti", "b1u18.vjezba",
      ],
    },
  ],
  srsCloze: [
    { front: "Na tvom ___ bih upisao tečaj.", answers: ["mjestu"], back: "na + LOC — na tvom mjestu / na vašem mjestu, stored whole.", tts: "Na tvom mjestu bih upisao tečaj." },
    { front: "✗ Trebalo bi ponoviti — ali Ana? → ___", answers: ["Ana bi trebala ponoviti", "Trebala bi ponoviti", "Ana bi trebala ponoviti.", "Trebala bi ponoviti."], back: "Name a person and the participle agrees: Ana bi trebala ponoviti.", tts: "Ana bi trebala ponoviti." },
    { front: "I don't understand → ___", answers: ["Ne razumijem", "Ne razumijem."], back: "Ne razumijem — infinitive -je-, present -ije-.", tts: "Ne razumijem tu rečenicu." },
    { front: "GEN of riječ → ___", answers: ["riječi", "rijeci"], back: "riječi — only NOM and ACC singular are riječ.", tts: "Svaki dan učim pet novih riječi." },
    { front: "»you could«, to a woman → ___ bi", answers: ["mogla"], back: "Mogla bi — the gentlest of the four frames.", tts: "Mogla bi čitati novine." },
    { front: "a piece of advice = ___", answers: ["savjet"], back: "savjet (m) — countable: jedan savjet, dva savjeta.", tts: "To je jako dobar savjet." },
    { front: "skill = ___", answers: ["vještina", "vjestina"], back: "vještina (f).", tts: "Govoriti hrvatski je vještina." },
    { front: "mistake = ___", answers: ["greška", "greska"], back: "greška (f) — GEN pl grešaka.", tts: "Nije to velika greška." },
    { front: "sentence = ___", answers: ["rečenica", "recenica"], back: "rečenica (f) — made of riječi.", tts: "Ne razumijem tu rečenicu." },
    { front: "to memorize (pf) = ___", answers: ["zapamtiti"], back: "zapamtiti — zapamtim, zapamtiš.", tts: "Moram zapamtiti pet riječi." },
    { front: "exercise / drill (the noun) = ___", answers: ["vježba", "vjezba"], back: "vježba (f) — beside the verb vježbati.", tts: "Ova vježba nije teška." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian softens an instruction by putting bi behind the verb — Na tvom mjestu bih… (warm), Trebao bi… (direct, agrees with you), Trebalo bi… (impersonal, never agrees), Mogao bi… (gentle) — so the frame you pick does the work your tone of voice would do in English.",
      exampleHr: "Trebala bi ponoviti te riječi.",
    },
    deepDive: [
      {
        title: "Four frames, one dial",
        body:
          "Nothing here is a new tense. Each frame is *bi* plus material you already own — a participle in the first, a plain infinitive in the other three — and the choice between them is social, not grammatical.\n\nRead the table left to right and you can hear the volume drop. The first frame does not even mention the listener's duty: it says what *I* would do. That is why it is the safest thing to say to someone who did not ask for advice.",
        table: {
          caption: "Four volumes of the same advice",
          headers: ["frame", "literally", "how it lands"],
          rows: [
            ["Na tvom mjestu bih + participle", "in your place I would…", "warm — you are imagining, not ordering"],
            ["Trebao / Trebala bi + infinitive", "you would need to…", "direct — the everyday »you should«"],
            ["Trebalo bi + infinitive", "it would be needed to…", "impersonal — a rule, nobody blamed"],
            ["Mogao / Mogla bi + infinitive", "you could…", "gentle — an option, easy to refuse"],
          ],
        },
      },
      {
        title: "trebao bi ‖ trebalo bi: the only thing you must get right",
        body:
          "**trebao bi** has a subject and behaves like every other conditional you met in L1: the participle agrees in gender and number with whoever is being advised. *Ana, trebala bi…* · *Marko bi trebao…* · *Trebali biste…*\n\n**trebalo bi** has no subject at all. It is a frozen block — neuter singular, always, for everyone — and it is how Croatian writes rules, notices and general truths.\n\nA usable test: try to name the person who should do it. If you can, the participle has to follow them. If the honest answer is »anyone«, reach for *trebalo bi*. (Impersonal constructions as a system arrive in Unit 20; here this is one frame, not a paradigm.)",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "Ana bi trebala — never ✗ Ana trebalo bi",
          text: "The moment a person appears in the sentence, the participle has to agree with them. trebalo bi is only for sentences with nobody in them.",
        },
      },
      {
        title: "razumjeti and riječ — two forms that will bite you",
        body:
          "**razumjeti** stretches in the present: the infinitive shows *-je-*, every present form shows *-ije-*. Over-learn the negative as one chunk — **Ne razumijem** — because you will say it more than any other sentence in this unit.\n\n**riječ** is feminine but ends in a consonant, which puts it in the small **i-declension** group alongside *stvar*, *noć* and *ljubav*. Five of the six forms you need are simply **riječi**; only the nominative and accusative singular are the bare **riječ**. So: *Ne razumijem tu **riječ*** (bare object) but *pet novih **riječi***, *te **riječi***, *u **riječima***.",
        table: {
          caption: "razumjeti — prezent",
          headers: ["osoba", "oblik"],
          rows: [
            ["ja", "razumijem"],
            ["ti", "razumiješ"],
            ["on / ona / ono", "razumije"],
            ["mi", "razumijemo"],
            ["vi / Vi", "razumijete"],
            ["oni / one / ona", "razumiju"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ana trebalo bi ponoviti.",
        right: "Ana bi trebala ponoviti.",
        why: "The personal frame agrees with the person advised. Only the subjectless frame stays neuter.",
      },
      {
        wrong: "Trebala bi vježbati svaki dan. (meaning: everybody should)",
        right: "Trebalo bi vježbati svaki dan.",
        why: "A general rule has no subject, so the participle has nobody to agree with — frozen neuter.",
      },
      {
        wrong: "Na tvoj mjesto bih upisao tečaj.",
        right: "Na tvom mjestu bih upisao tečaj.",
        why: "na + LOC, not ACC — you are standing in the place, not moving into it. Store the block whole.",
      },
      {
        wrong: "Ne razumim.",
        right: "Ne razumijem.",
        why: "The infinitive hides the i (razumjeti); every present form shows it — razumijem, razumiješ, razumije.",
      },
    ],
    memoryHooks: [
      "One dial, four volumes: Na tvom mjestu bih (warm) → Trebao bi (direct) → Trebalo bi (a rule) → Mogao bi (gentle).",
      "trebao bi has a face; trebalo bi has none. Name a person and the -o has to move.",
      "Na tvom mjestu = standing in your shoes → LOC. You are somewhere, not going somewhere.",
      "razumjeti hides an i: the infinitive says -je-, the mouth says -ije-.",
      "riječ is the word for »word« and it is almost always riječi — five forms out of six.",
    ],
    connects: [
      { label: "Where bih came from (Unit 18 L1)", lessonId: "b1u18l1" },
      { label: "The blunt baseline: morati, trebati, moći (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "Next: all four jobs at once + the writing task (Unit 18 L5)", lessonId: "b1u18l5" },
    ],
    selfCheck: [
      { q: "Which advice frame agrees with the person you are advising?", a: "The personal one: trebao bi / trebala bi / trebali biste. trebalo bi never agrees." },
      { q: "How do you say »one ought to practise every day«?", a: "Trebalo bi vježbati svaki dan. — no subject, frozen neuter." },
      { q: "Why is it na tvom mjestu and not na tvoje mjesto?", a: "na + LOC marks a location. You are standing in the place, not moving into it." },
      { q: "Give the present of razumjeti for ja and ti.", a: "razumijem, razumiješ — the -ije- the infinitive doesn't show." },
      { q: "What is the genitive of riječ?", a: "riječi. Only the nominative and accusative singular are riječ; everything else is riječi." },
    ],
  },
};
