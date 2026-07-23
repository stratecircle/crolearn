import type { Lesson } from "@/types/content";

/**
 * A1 U2 L2 — Nisam! Jesi li? (biti negation + yes/no questions)
 * Spec: curriculum/A1/unit-2.md · grammar-reference §6, §15.
 */
export const a1u2l2: Lesson = {
  id: "a1u2l2",
  unitId: "a1u2",
  title: "Nisam! Jesi li?",
  titleEn: "Saying no & asking yes/no questions",
  grammarTags: ["biti-negation", "yes-no-questions"],
  estMinutes: 18,
  vocab: [
    { id: "a1u2.hrvat", hr: "Hrvat", en: "Croat (man)", pos: "noun", gender: "m", icon: "🇭🇷", exampleHr: "Marko je Hrvat.", exampleEn: "Marko is a Croat." },
    { id: "a1u2.hrvatica", hr: "Hrvatica", en: "Croat (woman)", pos: "noun", gender: "f", icon: "🇭🇷", exampleHr: "Ana je Hrvatica.", exampleEn: "Ana is a Croat." },
    { id: "a1u2.kanadanin", hr: "Kanađanin", en: "Canadian (man)", pos: "noun", gender: "m", icon: "🇨🇦", exampleHr: "Tom je Kanađanin.", exampleEn: "Tom is a Canadian." },
    { id: "a1u2.kanadanka", hr: "Kanađanka", en: "Canadian (woman)", pos: "noun", gender: "f", icon: "🇨🇦", exampleHr: "Ona je Kanađanka.", exampleEn: "She is a Canadian." },
    { id: "a1u2.nijemac", hr: "Nijemac", en: "German (man)", pos: "noun", gender: "m", icon: "🇩🇪", exampleHr: "On je Nijemac.", exampleEn: "He is a German." },
    { id: "a1u2.njemica", hr: "Njemica", en: "German (woman)", pos: "noun", gender: "f", icon: "🇩🇪", exampleHr: "Ona je Njemica.", exampleEn: "She is a German." },
    { id: "a1u2.englez", hr: "Englez", en: "Englishman", pos: "noun", gender: "m", icon: "🇬🇧", exampleHr: "On je Englez.", exampleEn: "He is an Englishman." },
    { id: "a1u2.engleskinja", hr: "Engleskinja", en: "Englishwoman", pos: "noun", gender: "f", icon: "🇬🇧", exampleHr: "Ona je Engleskinja.", exampleEn: "She is an Englishwoman." },
    { id: "a1u2.amerikanac", hr: "Amerikanac", en: "American (man)", pos: "noun", gender: "m", icon: "🇺🇸", exampleHr: "On je Amerikanac.", exampleEn: "He is an American." },
    { id: "a1u2.amerikanka", hr: "Amerikanka", en: "American (woman)", pos: "noun", gender: "f", icon: "🇺🇸", exampleHr: "Ona je Amerikanka.", exampleEn: "She is an American." },
    { id: "a1u2.odakle", hr: "odakle", en: "from where", pos: "adv", icon: "❓", exampleHr: "Odakle si? — Iz Kanade.", exampleEn: "Where are you from? — From Canada.", tags: ["question-word"] },
    { id: "a1u2.ali", hr: "ali", en: "but", pos: "conj", icon: "↔️", exampleHr: "Nisam Hrvat, ali sam iz Zagreba.", exampleEn: "I'm not a Croat, but I am from Zagreb." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Nisam! Jesi li?",
      subtitle: "Say no, ask anything: two superpowers in one lesson.",
      emoji: "⚡",
      items: [
        { emoji: "🙅", label: "nisam — “to be” with built-in NO", hint: "one fused word" },
        { emoji: "🌍", label: "Nationalities m/f", hint: "Hrvat/Hrvatica, Kanađanin/Kanađanka…" },
        { emoji: "❓", label: "Jesi li…? — the question flip", hint: "verb + li" },
        { emoji: "🗣️", label: "Ear, voice & review", hint: "answer truthfully!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Saying no: nisam",
      subtitle: "The negative of biti is ONE fused word — never “ne sam”.",
      emoji: "🙅",
      items: [
        { emoji: "🧱", label: "The nisam column", hint: "next to the sam column you know" },
        { emoji: "🌍", label: "Who's what: nationalities", hint: "m/f pairs" },
        { emoji: "🧩", label: "Quick checks", hint: "pick the right form" },
      ],
    },
    {
      id: "s03",
      type: "fill",
      review: true,
      text: "Ja ___ student.",
      blanks: [["sam"]],
      translation: "I am a student. (Unit 1 warm-up)",
      wordBank: ["sam", "si", "je"],
      explanation: "Unit 1 biti: ja → sam. Now meet its negative twin: nisam.",
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u2.hrvat", "a1u2.hrvatica", "a1u2.kanadanin", "a1u2.kanadanka",
        "a1u2.nijemac", "a1u2.njemica", "a1u2.englez", "a1u2.engleskinja",
        "a1u2.amerikanac", "a1u2.amerikanka", "a1u2.odakle", "a1u2.ali",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "nisam — “to be” with a built-in no",
      body:
        "You know **sam, si, je, smo, ste, su**. The negative is the same rhythm with **ni-** welded on the front — **one word, fused**, never ~~ne sam~~.\n\nBonus: unlike little *sam* (which can never stand first), **nisam is strong** — it can open a sentence: *Nisam Hrvat.*",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Fused!",
        text: "ne + sam → nisam (one word). Croatian fuses “to be” with no: nisam, nisi, nije, nismo, niste, nisu.",
      },
      table: {
        caption: "biti — the full system (clitic · stressed · negative)",
        headers: ["person", "clitic (U1)", "stressed", "negative"],
        rows: [
          ["ja", "sam", "jesam", "nisam"],
          ["ti", "si", "jesi", "nisi"],
          ["on / ona / ono", "je", "jest", "nije"],
          ["mi", "smo", "jesmo", "nismo"],
          ["vi", "ste", "jeste", "niste"],
          ["oni", "su", "jesu", "nisu"],
        ],
      },
      examples: [
        { hr: "Nisam Hrvat, Kanađanin sam.", en: "I'm not a Croat — I'm a Canadian." },
        { hr: "Marko nije iz Zagreba, on je iz Splita.", en: "Marko is not from Zagreb, he is from Split.", note: "new city chunks — cities work like L1's countries: memorize whole, dissect in Unit 7" },
        { hr: "Mi nismo iz Njemačke.", en: "We are not from Germany." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: pick the negative",
      items: [
        {
          prompt: "Mi ___ iz Njemačke. (We are NOT from Germany.)",
          options: ["nismo", "nisu", "niste"],
          correctIndex: 0,
          explanation: "mi → nismo (like smo, with ni-).",
        },
        {
          prompt: "Ona ___ studentica. (She is NOT a student.)",
          options: ["nije", "nisi", "nisam"],
          correctIndex: 0,
          explanation: "ona → nije (like je, with ni-).",
        },
        {
          prompt: "Listen: what is he saying?",
          tts: "Nisam umoran.",
          options: ["I'm not tired", "I'm tired", "I'm not happy"],
          correctIndex: 0,
          explanation: "nisam = I am not; umoran = tired (Unit 1).",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Nationalities come in pairs (m / f)",
      body:
        "Every nationality has a **masculine** and a **feminine** form — and they're always written with a **capital letter**.\n\nNo article needed: *Kanađanin sam* = “I'm **a** Canadian”.",
      table: {
        caption: "Country → he is… / she is…",
        headers: ["country", "he is…", "she is…"],
        rows: [
          ["Hrvatska 🇭🇷", "Hrvat", "Hrvatica"],
          ["Kanada 🇨🇦", "Kanađanin", "Kanađanka"],
          ["Njemačka 🇩🇪", "Nijemac", "Njemica"],
          ["Engleska 🇬🇧", "Englez", "Engleskinja"],
          ["Amerika 🇺🇸", "Amerikanac", "Amerikanka"],
        ],
      },
      examples: [
        { hr: "Tom je Kanađanin, a Ana je Hrvatica.", en: "Tom is a Canadian, and Ana is a Croat." },
        { hr: "Odakle si? — Ja sam iz Kanade.", en: "Where are you from? — I'm from Canada.", note: "odakle = from where" },
        { hr: "Nisam Hrvat, ali sam iz Zagreba.", en: "I'm not a Croat, but I am from Zagreb.", note: "ali = but" },
      ],
      ttsChips: ["Hrvat", "Hrvatica", "Kanađanin", "Kanađanka", "Nijemac", "Njemica"],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match him to her: nationality pairs",
      pairs: [
        { a: "Nijemac", b: "Njemica" },
        { a: "Englez", b: "Engleskinja" },
        { a: "Amerikanac", b: "Amerikanka" },
        { a: "Kanađanin", b: "Kanađanka" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Asking: Jesi li…?",
      subtitle: "Flip any statement into a question with the little word li.",
      emoji: "❓",
      items: [
        { emoji: "🔄", label: "The question flip", hint: "Ti si student. → Jesi li student?" },
        { emoji: "💬", label: "Short answers", hint: "Jesam. / Nisam." },
        { emoji: "🏗️", label: "Build questions yourself", hint: "fill, type, reorder" },
      ],
    },
    {
      id: "s10",
      type: "teach",
      title: "The question flip: stressed form + li",
      body:
        "To ask a yes/no question, put the **stressed** form of *biti* first and hook **li** right behind it:\n\nShort answers use the stressed forms — and they CAN stand alone (unlike clitic *sam*): **Jesam.** (I am.) / **Nisam.** (I'm not.)",
      diagram: {
        kind: "contrast",
        left: {
          title: "Statement",
          emoji: "💬",
          lines: [
            { hr: "Ti si student.", en: "You are a student." },
            { hr: "Ona je iz Hrvatske.", en: "She is from Croatia." },
          ],
        },
        right: {
          title: "Question: verb + li",
          emoji: "❓",
          lines: [
            { hr: "Jesi li student?", en: "Are you a student?" },
            { hr: "Je li ona iz Hrvatske?", en: "Is she from Croatia?" },
          ],
        },
      },
      examples: [
        { hr: "Jesi li ti studentica? — Jesam!", en: "Are you a student? — I am!" },
        { hr: "Je li Marko iz Zagreba? — Nije.", en: "Is Marko from Zagreb? — He isn't." },
        { hr: "Jesi li iz Kanade ili iz Amerike? — Iz Kanade.", en: "Are you from Canada or from America? — From Canada.", note: "ili (or) — from L1, now inside a question" },
        { hr: "Jeste li vi iz Amerike? — Nismo.", en: "Are you (pl./formal) from America? — We're not." },
      ],
    },
    {
      id: "s11",
      type: "quiz-set",
      title: "Quick check: build the question",
      items: [
        {
          prompt: "___ li ti Englez?",
          options: ["Jesi", "Je", "Jesu"],
          correctIndex: 0,
          explanation: "ti → jesi: Jesi li ti Englez?",
        },
        {
          prompt: "___ li ona Njemica?",
          options: ["Je", "Jesi", "Jesmo"],
          correctIndex: 0,
          explanation: "ona → je: Je li ona Njemica?",
        },
        {
          prompt: "Listen: did he answer yes or no?",
          tts: "Jesi li ti Kanađanin? — Jesam!",
          options: ["Yes — jesam", "No — nisam", "He didn't answer"],
          correctIndex: 0,
          explanation: "Jesam! = I am! — the native-like short yes.",
        },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "___ li ti Englez?",
      blanks: [["Jesi", "jesi"]],
      translation: "Are you an Englishman?",
      wordBank: ["Jesi", "Je", "Jesu"],
      explanation: "The verb agrees with the subject: ti → Jesi li ti…?",
    },
    {
      id: "s13",
      type: "fill",
      text: "___ li ona iz Francuske?",
      blanks: [["Je", "je"]],
      translation: "Is she from France?",
      wordBank: ["Je", "Jesi", "Jesmo"],
      explanation: "ona → Je li ona…? (iz Francuske — chunk from L1).",
    },
    {
      id: "s14",
      type: "fill",
      text: "Vi ___ iz Engleske.",
      blanks: [["niste"]],
      translation: "You (formal) are not from England.",
      wordBank: ["niste", "nismo", "nisu"],
      explanation: "vi → niste (like ste, with ni-).",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Translate: “I am not a Croat.” (use your own gender)",
      answers: [
        "Nisam Hrvat.", "Nisam Hrvat", "Nisam Hrvatica.", "Nisam Hrvatica",
        "Ja nisam Hrvat.", "Ja nisam Hrvat", "Ja nisam Hrvatica.", "Ja nisam Hrvatica",
      ],
      hint: "nisam can stand first — it's the strong form.",
      explanation: "Nisam Hrvat / Nisam Hrvatica — fused negation, no “ne sam”.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Translate: “Is she from Croatia?”",
      answers: ["Je li ona iz Hrvatske?", "Je li ona iz Hrvatske", "Je li iz Hrvatske?", "Je li iz Hrvatske"],
      hint: "stressed form + li, then the iz-chunk.",
      explanation: "Je li (ona) iz Hrvatske? — verb + li opens the question.",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Jesi", "li", "iz", "Kanade"],
      answers: ["Jesi li iz Kanade?", "Jesi li iz Kanade"],
      en: "Are you from Canada?",
      explanation: "Jesi first, li glued right behind it, then the chunk.",
    },
    {
      id: "s18",
      type: "section",
      title: "Part 3 · Ear, voice & review",
      subtitle: "Hear it, answer it truthfully — then a Unit 1 flashback.",
      emoji: "🗣️",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "negatives & questions" },
        { emoji: "🎤", label: "Answer about yourself", hint: "Jesi li ti Hrvat?" },
        { emoji: "🔁", label: "Unit 1 flashback", hint: "Kako si? vs Jesi li…" },
        { emoji: "🎯", label: "Recap", hint: "12 words to your deck" },
      ],
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Nisam iz Amerike.",
      explanation: "Nisam iz Amerike — I'm not from America.",
    },
    {
      id: "s20",
      type: "listen-type",
      tts: "Jesi li ti Hrvat?",
      answers: ["Jesi li ti Hrvat?", "Jesi li ti Hrvat"],
      explanation: "Jesi li ti Hrvat? — Are you a Croat?",
    },
    {
      id: "s21",
      type: "speak",
      targetHr: "Nisam Hrvat, Kanađanin sam.",
      targetEn: "I'm not a Croat — I'm a Canadian. (Answer truthfully with YOUR nationality; women: Nisam Hrvatica, Kanađanka sam.)",
      phonetic: "NI-sam HR-vat, ka-NA-ja-nin sam",
    },
    {
      id: "s22",
      type: "quiz-set",
      review: true,
      title: "Unit 1 flashback",
      items: [
        {
          prompt: "You meet a friend. Which one asks “How are you?” (Unit 1)",
          options: ["Kako si?", "Jesi li?", "Tko si?"],
          correctIndex: 0,
          explanation: "Kako si? asks HOW you are; Jesi li…? starts a yes/no question.",
        },
        {
          prompt: "Ona ___ studentica. (She IS a student — Unit 1 biti.)",
          options: ["je", "nije", "si"],
          correctIndex: 0,
          explanation: "Affirmative clitic: ona → je.",
        },
        {
          prompt: "Listen: who are you greeting?",
          tts: "Dobar dan, gospođo!",
          options: ["a woman, politely", "a man, politely", "a child"],
          correctIndex: 0,
          explanation: "gospođa = Mrs./madam (Unit 1) — gospođo is its address form, a set phrase for now (the case behind it comes much later).",
        },
      ],
    },
    {
      id: "s23",
      type: "fill",
      review: true,
      text: "Kako ___, gospodine Horvat?",
      blanks: [["ste"]],
      translation: "How are you, Mr. Horvat? (formal Vi)",
      wordBank: ["ste", "si", "su"],
      explanation: "A stranger + Mr. → formal Vi: Kako ste? (Unit 1 courtesy). gospodine = the address form of gospodin — a set phrase for now; the case behind it comes much later.",
    },
    {
      id: "s24",
      type: "recap",
      summary:
        "**Two superpowers unlocked:**\n\n1. **Negation** — one fused word: nisam, nisi, nije, nismo, niste, nisu. Never ~~ne sam~~. *Nisam Hrvat, Kanađanin sam.*\n2. **Yes/no questions** — stressed form + li: *Jesi li student? Je li ona iz Hrvatske?* Short answers: **Jesam. / Nisam.**\n\nPlus 10 nationalities in m/f pairs, **odakle** (from where) and **ali** (but).\n\nNext lesson: adjectives copy the noun's gender — dobar, dobra, dobro.",
      vocabIds: [
        "a1u2.hrvat", "a1u2.hrvatica", "a1u2.kanadanin", "a1u2.kanadanka",
        "a1u2.nijemac", "a1u2.njemica", "a1u2.englez", "a1u2.engleskinja",
        "a1u2.amerikanac", "a1u2.amerikanka", "a1u2.odakle", "a1u2.ali",
      ],
    },
  ],
  // SRS cloze cards flagged by the unit spec (seeded on lesson completion).
  srsCloze: [
    { front: "Ja ___ iz Njemačke. (am not)", answers: ["nisam"], back: "Ja nisam iz Njemačke.", tts: "Ja nisam iz Njemačke." },
    { front: "Ti ___ student. (are not)", answers: ["nisi"], back: "Ti nisi student.", tts: "Ti nisi student." },
    { front: "Ona ___ studentica. (is not)", answers: ["nije"], back: "Ona nije studentica.", tts: "Ona nije studentica." },
    { front: "Mi ___ iz Amerike. (are not)", answers: ["nismo"], back: "Mi nismo iz Amerike.", tts: "Mi nismo iz Amerike." },
    { front: "Vi ___ iz Engleske. (are not)", answers: ["niste"], back: "Vi niste iz Engleske.", tts: "Vi niste iz Engleske." },
    { front: "Oni ___ iz Hrvatske. (are not)", answers: ["nisu"], back: "Oni nisu iz Hrvatske.", tts: "Oni nisu iz Hrvatske." },
    { front: "Jesi li iz Kanade? — Da, ___. (I am)", answers: ["jesam"], back: "Jesi li iz Kanade? — Da, jesam.", tts: "Da, jesam." },
  ],
  notes: {
    inOneSentence: {
      en: "nisam/nisi/nije… is “to be” with a built-in no (one fused word), and the stressed form + li flips any statement into a yes/no question.",
      exampleHr: "Nisam Hrvat. — Jesi li ti Hrvat? — Nisam!",
    },
    deepDive: [
      {
        title: "The complete biti system (all three columns)",
        body:
          "Unit 1 gave you the clitic column; now you own all three:\n\n- **Clitic** (sam, si, je…) — the everyday unstressed form; can never stand first.\n- **Stressed** (jesam, jesi, jest…) — for questions with *li*, for emphatic yes (*Jesam!*), and it CAN stand first.\n- **Negative** (nisam, nisi, nije…) — fused ne+biti; also free to stand first.\n\nCroatian fuses negation only three times in the whole language: **nisam** (biti), **neću** (htjeti, Unit 9) and **nemam** (imati, Unit 3). Everything else is plain *ne + verb*.",
        table: {
          caption: "biti — clitic · stressed · negative",
          headers: ["person", "clitic", "stressed", "negative"],
          rows: [
            ["ja", "sam", "jesam", "nisam"],
            ["ti", "si", "jesi", "nisi"],
            ["on/ona/ono", "je", "jest", "nije"],
            ["mi", "smo", "jesmo", "nismo"],
            ["vi", "ste", "jeste", "niste"],
            ["oni/one/ona", "su", "jesu", "nisu"],
          ],
        },
      },
      {
        title: "The question machine",
        body:
          "Formula: **stressed biti + li + the rest**. The verb agrees with the subject: *Jesi li ti…?* (you), *Je li ona…?* (she), *Jeste li vi…?* (you formal/plural).\n\nShort answers, native-style: **Jesam. / Nisam.** (or for on/ona: **Jest. / Nije.**). Plain *Da./Ne.* is fine too — but the verb-echo answer is what natives actually say.\n\nYou will also hear **Da li si…?** on the street and in Serbian-influenced media — understand it, but this course teaches only the standard-Croatian **Jesi li…?** pattern.",
        diagram: {
          kind: "contrast",
          left: {
            title: "Statement",
            emoji: "💬",
            lines: [{ hr: "Ti si student.", en: "You are a student." }],
          },
          right: {
            title: "Question",
            emoji: "❓",
            lines: [{ hr: "Jesi li student?", en: "Are you a student?" }],
          },
        },
      },
      {
        title: "Nationalities: capital letters, no article, m/f pairs",
        body:
          "Hrvat/Hrvatica · Kanađanin/Kanađanka · Nijemac/Njemica · Englez/Engleskinja · Amerikanac/Amerikanka.\n\n- Always **capitalized** (unlike languages — Unit 2 L5!).\n- No article: *Kanađanin sam* = I'm a Canadian.\n- Spelling watch: **Nijemac** has -ije-, but the country **Njemačka** and the woman **Njemica** have -je-.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ne sam student. / Ja sam ne student.",
        right: "Nisam student.",
        why: "biti fuses with ne into ONE word: nisam.",
      },
      {
        wrong: "Je li ti student?",
        right: "Jesi li ti student?",
        why: "The verb agrees with the subject — ti needs jesi, not je.",
      },
      {
        wrong: "Answering “Jesi li Hrvat?” with just “Da.” every time",
        right: "Jesam! (or Nisam.)",
        why: "Da/Ne isn't wrong, but the verb-echo short answer is the native-like habit worth building now.",
      },
      {
        wrong: "Sam iz Kanade. (starting with the clitic)",
        right: "Iz Kanade sam. / Ja sam iz Kanade. / Nisam iz Kanade.",
        why: "Clitic sam can never stand first; stressed jesam and negative nisam can.",
      },
    ],
    memoryHooks: [
      "ni- + the sam-column = the whole negative: ni+sam, ni+si, ni+je…",
      "li = a tiny spoken question mark, glued right after the verb.",
      "Jesam! is the Croatian “I AM indeed” — short answers echo the verb, not “da”.",
      "Nijemac (the man) keeps the long -ije-; Njemačka and Njemica slim down to -je-.",
    ],
    connects: [
      { label: "biti affirmative + pronouns (Unit 1)", lessonId: "a1u1l3" },
      { label: "Noun gender — why Hrvat/Hrvatica pair up (this unit, L1)", lessonId: "a1u2l1" },
      { label: "govoriti questions: Govoriš li…? (this unit, L5)", lessonId: "a1u2l5" },
    ],
    selfCheck: [
      { q: "Negate: Mi smo iz Engleske.", a: "Mi nismo iz Engleske. (or just: Nismo iz Engleske.)" },
      { q: "Turn into a question: Ti si student.", a: "Jesi li (ti) student?" },
      { q: "Someone asks: Jesi li ti Amerikanac? You're not. Short answer?", a: "Nisam." },
      { q: "Why is “ne sam” wrong?", a: "biti fuses with ne into one word — nisam." },
      { q: "She is a German (woman) — say it in Croatian.", a: "Ona je Njemica." },
    ],
  },
};
