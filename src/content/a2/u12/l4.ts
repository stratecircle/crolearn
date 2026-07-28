import type { Lesson } from "@/types/content";

/**
 * A2 U12 L4 — Na fakultetu (university & studying)
 * Spec: curriculum/A2/unit-12.md · grammar-reference §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: studirati + ACC vs učiti; položiti ispit as a chunk (aspect
 * analysis waits for U16); no se-passive. fakultet (U5), student/ica (U1/U2),
 * učiti (U6) recycled. Majors medicina/ekonomija are glossed cognates; the
 * spec's "Treba mi pauza" interleave uses odmor instead (pauza untaught —
 * correction noted in unit-12.md).
 */
export const a2u12l4: Lesson = {
  id: "a2u12l4",
  unitId: "a2u12",
  title: "Na fakultetu",
  titleEn: "At university — exams, lectures, the library",
  grammarTags: ["studirati-acc", "university", "chunk-poloziti-ispit"],
  estMinutes: 18,
  vocab: [
    { id: "a2u12.ispit", image: "/img/ispit.png", hr: "ispit", en: "exam", pos: "noun", gender: "m", icon: "📝", exampleHr: "Sutra imam ispit.", exampleEn: "Tomorrow I have an exam." },
    { id: "a2u12.predavanje", image: "/img/predavanje.png", hr: "predavanje", en: "lecture", pos: "noun", gender: "n", icon: "🎓", exampleHr: "Predavanje počinje u devet.", exampleEn: "The lecture starts at nine." },
    { id: "a2u12.zadatak", image: "/img/zadatak.png", hr: "zadatak", en: "task / assignment", pos: "noun", gender: "m", icon: "📋", exampleHr: "Zadatak nije težak.", exampleEn: "The assignment isn't hard." },
    { id: "a2u12.knjiznica", image: "/img/knjiznica.png", hr: "knjižnica", en: "library", pos: "noun", gender: "f", icon: "📚", exampleHr: "Učim u knjižnici.", exampleEn: "I study in the library." },
    { id: "a2u12.studirati", image: "/img/studirati.png", hr: "studirati", en: "to study (a major) (studiram + ACC)", pos: "verb", icon: "🎓", exampleHr: "Ana studira medicinu.", exampleEn: "Ana studies medicine." },
    { id: "a2u12.poloziti", image: "/img/poloziti.png", hr: "položiti ispit", en: "to pass an exam (chunk: položim)", pos: "phrase", icon: "✅", exampleHr: "Moram položiti ispit.", exampleEn: "I have to pass the exam.", tags: ["chunk"] },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Na fakultetu",
      subtitle: "Ana's exam week — lectures, the library, and one big ispit.",
      emoji: "🎓",
      items: [
        { emoji: "⚖️", label: "studirati vs učiti", hint: "major vs activity" },
        { emoji: "📝", label: "Exam week", hint: "ispit, predavanje, zadatak" },
        { emoji: "📚", label: "The library", hint: "učim u knjižnici s kolegicom" },
        { emoji: "🎤", label: "Your studies", hint: "Studiram… / Učim hrvatski!" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Two kinds of studying",
      subtitle: "studirati is your major; učiti is what you do tonight.",
      emoji: "⚖️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "na fakultet & učiti (old friends)" },
        { emoji: "⚖️", label: "The contrast", hint: "Studiram medicinu · Učim hrvatski" },
        { emoji: "📅", label: "Exam frames", hint: "imam ispit, moram položiti" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: campus machinery you own",
      items: [
        {
          prompt: "Unit 5 na-words: »Idem ___ fakultet.«",
          options: ["na", "u", "do"],
          correctIndex: 0,
          explanation: "fakultet is a na-word: na fakultet (ACC direction), na fakultetu (LOC).",
        },
        {
          prompt: "Unit 6: »___ hrvatski svaki dan.« (I study/learn)",
          options: ["Učim", "Studiram", "Radim"],
          correctIndex: 0,
          explanation: "učiti (U6) = to study/learn as an activity — today it gets a sibling.",
        },
        {
          prompt: "Listen (U6 times): when does it start?",
          tts: "Počinje u devet sati.",
          options: ["at nine", "at eight", "at noon"],
          correctIndex: 0,
          explanation: "u devet sati — lecture timetables run on U6 clockwork.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the campus words",
      vocabIds: ["a2u12.ispit", "a2u12.predavanje", "a2u12.zadatak", "a2u12.knjiznica", "a2u12.studirati", "a2u12.poloziti"],
    },
    {
      id: "s05",
      type: "teach",
      title: "studirati vs učiti — major vs activity",
      body:
        "Two verbs, two jobs:\n\n- **studirati + ACC** — be enrolled in a MAJOR: *Ana studira medicinu.* (medicina = medicine, ekonomija = economics — friendly cognates)\n- **učiti** — the ACTIVITY of studying/learning anything: *Učim hrvatski svaki dan. Večeras učim za ispit.*\n\nYou *studiraš* for years; you *učiš* tonight.",
      table: {
        caption: "The contrast card",
        headers: ["verb", "what it takes", "example"],
        rows: [
          ["studirati", "the major (ACC)", "Studiram ekonomiju."],
          ["učiti", "anything, anytime", "Učim hrvatski. Učim za ispit."],
        ],
      },
      examples: [
        { hr: "Ana studira medicinu.", en: "Ana studies medicine.", highlight: { text: "medicinu", caseId: "ACC" } },
        { hr: "Učim hrvatski svaki dan.", en: "I study Croatian every day." },
        { hr: "Sutra imam ispit.", en: "Tomorrow I have an exam." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Exam week frames",
      body:
        "The student survival kit — every frame recycled machinery:\n\n- *Sutra imam **ispit**.* — U3's imati\n- *Moram **položiti ispit**.* — U11 modal + the pass-the-exam chunk\n- *Učit ću u **knjižnici** s kolegicom.* — U9 future + U5 LOC + L1 INS\n- ***Predavanje** počinje u devet.* — U6 times\n- *Ovaj **zadatak** nije težak.* — (težak = hard, from the U10 story)",
      diagram: {
        kind: "flow",
        steps: [
          { label: "predavanje", emoji: "🎓", example: "počinje u devet" },
          { label: "knjižnica", emoji: "📚", example: "učim s kolegicom" },
          { label: "ispit", emoji: "📝", example: "moram položiti!" },
        ],
      },
      examples: [
        { hr: "Moram položiti ispit.", en: "I have to pass the exam." },
        { hr: "Učit ću u knjižnici s kolegicom.", en: "I'll study in the library with a colleague.", highlight: { text: "kolegicom", caseId: "INS" } },
        { hr: "Predavanje počinje u devet, a završava u podne.", en: "The lecture starts at nine and ends at noon." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: which verb, which frame?",
      items: [
        {
          prompt: "»Ana ___ medicinu.« (is enrolled in it)",
          options: ["studira", "uči", "radi"],
          correctIndex: 0,
          explanation: "The major → studirati: Ana studira medicinu.",
        },
        {
          prompt: "»Večeras ___ za ispit.« (tonight's activity)",
          options: ["učim", "studiram", "polažem"],
          correctIndex: 0,
          explanation: "Tonight's cramming → učiti: učim za ispit.",
        },
        {
          prompt: "»Moram ___ ispit.« (pass it!)",
          options: ["položiti", "položim", "položio"],
          correctIndex: 0,
          explanation: "Modal + infinitive: moram položiti ispit.",
        },
        {
          prompt: "Gdje učiš? — »U ___.« (the library)",
          options: ["knjižnici", "knjižnicu", "knjižnica"],
          correctIndex: 0,
          explanation: "Location → LOC: u knjižnici.",
        },
      ],
    },
    {
      id: "s08",
      type: "fill",
      text: "Ana ___ medicinu na fakultetu.",
      blanks: [["studira"]],
      translation: "Ana studies medicine at university.",
      wordBank: ["studira", "uči", "radi"],
      explanation: "Major → studirati + ACC.",
    },
    {
      id: "s09",
      type: "fill",
      text: "Predavanje počinje ___ devet sati.",
      blanks: [["u"]],
      translation: "The lecture starts at nine o'clock.",
      wordBank: ["u", "na", "od"],
      explanation: "u + time (U6): u devet sati.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Moram ___ ispit u petak. (pass)",
      blanks: [["položiti", "poloziti"]],
      translation: "I have to pass the exam on Friday.",
      wordBank: ["položiti", "položim", "učiti"],
      explanation: "The chunk: položiti ispit (modal + infinitive).",
    },
    {
      id: "s11",
      type: "section",
      title: "Part 2 · Exam week, out loud",
      subtitle: "Type, build, listen — then say what you study.",
      emoji: "📝",
      items: [
        { emoji: "⌨️", label: "Type your major", hint: "Studiram ekonomiju" },
        { emoji: "🔀", label: "Build the plan", hint: "Učit ću s kolegom…" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Your studies", hint: "Studiram… / Učim…" },
      ],
    },
    {
      id: "s12",
      type: "type",
      prompt: "Write it in Croatian: “I study economics.” (ekonomija = economics)",
      answers: ["Studiram ekonomiju.", "Studiram ekonomiju"],
      hint: "the major goes ACC",
      explanation: "Studiram ekonomiju. (f -a → -u)",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “We're studying in the library.” (the activity)",
      answers: ["Učimo u knjižnici.", "Učimo u knjižnici"],
      hint: "učiti + u + LOC",
      explanation: "Učimo u knjižnici.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Učit", "ću", "s", "kolegom", "navečer"],
      answers: ["Učit ću s kolegom navečer.", "Učit ću s kolegom navečer"],
      en: "I'll study with a colleague in the evening.",
      explanation: "Future I (učit ću) + s + INS (kolegom) + U6 navečer.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Sutra imam ispit.",
      explanation: "Sutra imam ispit — tomorrow I have an exam.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Učim u knjižnici s kolegicom.",
      explanation: "Učim u knjižnici s kolegicom — I'm studying in the library with a colleague.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: needs, times and na-words",
      items: [
        {
          prompt: "U11 experiencer, exam-week edition: »Učim pet sati — treba mi ___!« (a rest)",
          options: ["odmor", "ispit", "zadatak"],
          correctIndex: 0,
          explanation: "Treba mi odmor — the U11 flip, in the library at 2 a.m.",
        },
        {
          prompt: "Listen (U6): when does the lecture END?",
          tts: "Predavanje završava u podne.",
          options: ["at noon", "at nine", "in the evening"],
          correctIndex: 0,
          explanation: "završava u podne (U6's završavati + telling time).",
        },
        {
          prompt: "U5 na-word check: »Studenti su ___ predavanju.«",
          options: ["na", "u", "kod"],
          correctIndex: 0,
          explanation: "Events are na-words: na predavanju (LOC).",
        },
      ],
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Učim hrvatski svaki dan.",
      targetEn: "say what you study — I study Croatian every day. (or: Studiram ekonomiju / medicinu…)",
      phonetic: "OO-cheem HER-vat-skee SVA-kee dan",
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**Two studies:** *studirati + ACC* = the MAJOR (*Studiram ekonomiju*) · *učiti* = the ACTIVITY (*Učim hrvatski / za ispit*).\n\n**Exam kit:** *Sutra imam ispit. Moram **položiti ispit**. Učit ću u knjižnici s kolegicom. Predavanje počinje u devet.*\n\n**Campus geography:** *na fakultetu, na predavanju* (na-words) but *u knjižnici*.\n\nWords tonight: **ispit, predavanje, zadatak, knjižnica, studirati, položiti ispit**.\n\nNext lesson: the grand finale — *Razgovor za posao*, your first Croatian job interview.",
      vocabIds: ["a2u12.ispit", "a2u12.predavanje", "a2u12.zadatak", "a2u12.knjiznica", "a2u12.studirati", "a2u12.poloziti"],
    },
  ],
  srsCloze: [
    { front: "Ana ___ medicinu. (her major)", answers: ["studira"], back: "Ana studira medicinu. (studirati + ACC)", tts: "Ana studira medicinu." },
    { front: "Večeras ___ za ispit. (the activity)", answers: ["učim", "ucim"], back: "Učim za ispit. (učiti = the activity)", tts: "Učim za ispit." },
    { front: "Moram ___ ispit. (pass it)", answers: ["položiti", "poloziti"], back: "Moram položiti ispit. (the chunk)", tts: "Moram položiti ispit." },
    { front: "library = ___ (»Učim u ___i«)", answers: ["knjižnica", "knjiznica"], back: "knjižnica; učim u knjižnici.", tts: "Učim u knjižnici." },
    { front: "lecture = ___ (n; »___ počinje u devet«)", answers: ["predavanje"], back: "predavanje = lecture.", tts: "Predavanje počinje u devet." },
    { front: "exam = ___ (»Sutra imam ___«)", answers: ["ispit"], back: "ispit = exam.", tts: "Sutra imam ispit." },
  ],
  notes: {
    inOneSentence: {
      en: "studirati + ACC names your major (Studiram ekonomiju) while učiti is the act of studying, and the exam-week frames all run on recycled machinery.",
      exampleHr: "Ana studira medicinu. · Učim hrvatski svaki dan. · Moram položiti ispit.",
    },
    deepDive: [
      {
        title: "studirati vs učiti, precisely",
        body:
          "- **studirati** = to be enrolled in / major in: *Studiram medicinu / ekonomiju / pravo.* The subject of study goes in the **accusative** — never ~~studiram na medicini~~.\n- **učiti** = to study/learn as an activity: *Učim hrvatski. Učim za ispit. Učim u knjižnici.*\n\nBoth can be true at once: *Studiram medicinu i večeras učim za ispit.* — I'm a medicine major and tonight I'm cramming.\n\n(*Učim medicinu na fakultetu* is grammatical but means you're learning the material, not stating your enrolment — a nuance, not an error.)",
        table: {
          caption: "Who says what",
          headers: ["situation", "verb", "sentence"],
          rows: [
            ["your enrolment", "studirati + ACC", "Studiram ekonomiju."],
            ["tonight's session", "učiti", "Večeras učim za ispit."],
            ["a language", "učiti + ACC", "Učim hrvatski."],
          ],
        },
      },
      {
        title: "položiti ispit — a chunk with a secret",
        body:
          "*Moram položiti ispit* (pass the exam) vs *učim za ispit* (studying for it) — you're using a perfective/imperfective contrast correctly without knowing it. The aspect machinery gets its reveal in **U16**; until then, the chunk is simply the right thing to say.\n\nRelated exam-speak you'll hear (recognize, don't produce yet): *pasti na ispitu* (to fail), *prijaviti ispit* (to register).",
      },
      {
        title: "Campus geography",
        body:
          "The U5 na-list quietly covers campus life: institutions and events are **na-words**:\n\n- *na fakultetu, na predavanju, na ispitu* (at the exam!)\n- but buildings-as-rooms take u: *u knjižnici, u uredu*\n\nDirection flips to ACC as always: *Idem na fakultet, na predavanje, u knjižnicu.*",
      },
    ],
    commonMistakes: [
      {
        wrong: "Studiram na medicini.",
        right: "Studiram medicinu.",
        why: "The major is a direct object (ACC) — no preposition.",
      },
      {
        wrong: "Moram položim ispit.",
        right: "Moram položiti ispit.",
        why: "Modal + infinitive (U11's oldest rule).",
      },
      {
        wrong: "Učim u fakultetu.",
        right: "Učim na fakultetu.",
        why: "fakultet is a na-word (U5).",
      },
      {
        wrong: "Idem u predavanje.",
        right: "Idem na predavanje.",
        why: "Events take na: na predavanje (direction), na predavanju (location).",
      },
    ],
    memoryHooks: [
      "studirati = the diploma, učiti = the desk lamp.",
      "The major is a direct hit: Studiram ekonomijU (ACC).",
      "položiti ispit — lay the exam down flat ✅ (položiti ≈ to lay).",
      "Campus is na-land: na fakultetu, na predavanju, na ispitu — but u knjižnici.",
    ],
    connects: [
      { label: "na-words & city geography (Unit 5 L3)", lessonId: "a1u5l3" },
      { label: "učiti in the daily routine (Unit 6 L3)", lessonId: "a1u6l3" },
      { label: "Modals for exam season (Unit 11 L2)", lessonId: "a2u11l2" },
      { label: "Next: the job interview (Unit 12 L5)", lessonId: "a2u12l5" },
    ],
    selfCheck: [
      { q: "“Ana studies medicine” = ?", a: "Ana studira medicinu." },
      { q: "studirati vs učiti?", a: "studirati + ACC = your major; učiti = the studying activity." },
      { q: "“I have to pass the exam” = ?", a: "Moram položiti ispit." },
      { q: "“I'll study in the library with a colleague” = ?", a: "Učit ću u knjižnici s kolegicom." },
      { q: "na or u: fakultet, predavanje, knjižnica?", a: "na fakultetu, na predavanju — but u knjižnici." },
    ],
  },
};
