import type { Lesson } from "@/types/content";

/**
 * B1 U18 L5 — Moje obrazovanje (Consolidation + the writing task)
 * Spec: curriculum/B1/unit-18.md · grammar-reference §10 (whole section).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new machinery. All four jobs of Conditional I interleaved in one lesson —
 * wish (L1) · request (L2) · hypothesis (L3) · advice (L4) — plus the ako/da
 * contrast under time pressure, then the unit's exit performance rehearsed
 * on-slide: «Što bih studirao i zašto», 80–150 words, carried by the unit test.
 *
 * AUTHORING NOTES:
 * - The spec's "unit-review quiz-set (6 items)" is delivered as TWO quiz-sets
 *   of 3 (s22 = L1–L2, s23 = L3–L4): slideSchema caps a quiz-set at 4 items.
 * - Avoided as untaught (grep across src/content): povijest (U22 per spec),
 *   ponovno/opet (0), volio (0), barem / ljetni / odabrati (story-glossed only,
 *   never carded), o + LOC (untaught case use), se-passive (U20).
 * - obrazovanje and zanimanje end in -nje but are carded here as lexicalised
 *   nouns, exactly as the spec's L5 set prescribes; productive verbal nouns
 *   remain U23 and are neither taught nor quizzed.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U18 cut-outs exist.
 */
export const b1u18l5: Lesson = {
  id: "b1u18l5",
  unitId: "b1u18",
  title: "Moje obrazovanje",
  titleEn: "My education — all four jobs at once",
  grammarTags: ["conditional-1", "review", "writing"],
  estMinutes: 23,
  vocab: [
    { id: "b1u18.obrazovanje", hr: "obrazovanje", en: "education (the whole path, n)", pos: "noun", gender: "n", icon: "🎓", exampleHr: "Obrazovanje je važno.", exampleEn: "Education is important." },
    { id: "b1u18.stipendija", hr: "stipendija", en: "scholarship", pos: "noun", gender: "f", icon: "💰", exampleHr: "Stipendija je velika prilika.", exampleEn: "A scholarship is a big opportunity." },
    { id: "b1u18.karijera", hr: "karijera", en: "career (the whole arc of your working life)", pos: "noun", gender: "f", icon: "📈", exampleHr: "Moja karijera počinje u Zagrebu.", exampleEn: "My career starts in Zagreb." },
    { id: "b1u18.zanimanje", hr: "zanimanje", en: "occupation / profession (the job you trained for, n)", pos: "noun", gender: "n", icon: "🪪", exampleHr: "Koje je tvoje zanimanje?", exampleEn: "What is your occupation?" },
    { id: "b1u18.marljiv", hr: "marljiv", en: "hardworking / diligent (marljiva, marljivo)", pos: "adj", icon: "🐜", exampleHr: "On je jako marljiv student.", exampleEn: "He is a very diligent student." },
    { id: "b1u18.strpljiv", hr: "strpljiv", en: "patient (strpljiva, strpljivo)", pos: "adj", icon: "🧘", exampleHr: "Dobar profesor je strpljiv.", exampleEn: "A good teacher is patient." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moje obrazovanje",
      subtitle: "Four jobs, one clitic. Today you use all four in the same paragraph — which is exactly what a Croatian does.",
      emoji: "🎓",
      items: [
        { emoji: "🎁", label: "Želja", hint: "Htio bih…" },
        { emoji: "🎩", label: "Molba", hint: "Biste li…?" },
        { emoji: "🚧", label: "Pretpostavka", hint: "Da imam…, …bih" },
        { emoji: "🎛️", label: "Savjet", hint: "Na tvom mjestu bih…" },
        { emoji: "✍️", label: "Writing task", hint: "Što bih studirao i zašto" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · One clitic, four jobs",
      subtitle: "Four lessons taught them one at a time. A real paragraph uses them in any order — and this one ends with you writing that paragraph.",
      emoji: "🎛️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L4 frames, U16 budućnost" },
        { emoji: "🃏", label: "New words", hint: "the small L5 set" },
        { emoji: "🗺️", label: "The whole path", hint: "škola → karijera" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: last lesson's frames, and an old i-noun",
      items: [
        {
          prompt: "L4: »Ana, ___ bi ponoviti te riječi.«",
          options: ["trebala", "trebalo", "trebali"],
          correctIndex: 0,
          explanation: "Ana is the person advised → the participle agrees: trebala bi.",
        },
        {
          prompt: "L4: »___ bi vježbati svaki dan.« (a rule for everyone)",
          options: ["Trebalo", "Trebao", "Trebali"],
          correctIndex: 0,
          explanation: "Nobody is named → the frozen neuter trebalo bi.",
        },
        {
          prompt: "U16: »Moja ___ je u Hrvatskoj.«",
          tts: "Moja budućnost je u Hrvatskoj.",
          options: ["budućnost", "budućnosti", "budućnostu"],
          correctIndex: 0,
          explanation: "Bare nominative — budućnost belongs to the same i-family as L4's riječ: riječ, stvar, noć, budućnost.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words — the whole path in six",
      vocabIds: [
        "b1u18.obrazovanje", "b1u18.stipendija", "b1u18.karijera",
        "b1u18.zanimanje", "b1u18.marljiv", "b1u18.strpljiv",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Four jobs, one clitic 🎛️",
      body:
        "Every conditional you have met this unit is the same two-part machine: *bi* + the l-participle you have owned since Unit 8. What changes is **what you are doing with it**.\n\nPrint this bracket and you have the whole unit. A Croatian paragraph moves between these four without announcing the switch — and so should yours.\n\nOne warning for the writing task at the end of this lesson: a text made **only** of *bih* has no facts in it. Real sentences in the present and past are what the conditionals hang on.",
      diagram: {
        kind: "bracket",
        groups: [
          { label: "🎁 Želja", rule: "wish · L1", example: "Htio bih upisati fakultet." },
          { label: "🎩 Molba", rule: "request · L2", example: "Biste li mi objasnili prijavu?" },
          { label: "🚧 Pretpostavka", rule: "hypothesis · L3", example: "Da imam stipendiju, upisao bih Zagreb." },
          { label: "🎛️ Savjet", rule: "advice · L4", example: "Na tvom mjestu bih učio svaki dan." },
        ],
      },
      examples: [
        { hr: "Studirao bih jezike.", en: "I'd study languages.", note: "Job 1 — a bare wish. No if-clause needed at all." },
        { hr: "Da imam stipendiju, upisao bih sveučilište u Zagrebu.", en: "If I had a scholarship, I'd enrol at the university in Zagreb.", note: "Job 3 — da + present in one half, conditional in the other." },
        { hr: "Marljiv student svaki dan ponovi nove riječi.", en: "A diligent student revises the new words every day.", note: "No conditional at all — and your text needs sentences like this too." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The whole path: škola → karijera 🗺️",
      body:
        "**Obrazovanje** is the path itself, start to finish. Croatian marks its steps with words you now own, and the last two are the ones people actually ask about at a party.\n\n**zanimanje** is the job you trained for — the answer to *Koje je tvoje zanimanje?* **karijera** is the whole arc of it over the years. A **stipendija** is what makes an expensive step on the path possible, which is why it turns up in almost every hypothesis a student says out loud.\n\nAnd the two adjectives: **marljiv** is what a student does, **strpljiv** is what a teacher needs.",
      table: {
        caption: "Put kroz obrazovanje",
        headers: ["korak", "gdje / što", "tko si"],
        rows: [
          ["1", "osnovna škola", "učenik / učenica"],
          ["2", "srednja škola", "učenik / učenica"],
          ["3", "fakultet — na sveučilištu", "student / studentica"],
          ["4", "diploma", "student / studentica"],
          ["5", "zanimanje → karijera", "profesor, liječnik, konobar…"],
        ],
      },
      examples: [
        { hr: "Stipendija je velika prilika.", en: "A scholarship is a big opportunity." },
        { hr: "Dobar student je marljiv, a dobar profesor je strpljiv.", en: "A good student is hardworking, and a good teacher is patient." },
        { hr: "Koje je tvoje zanimanje?", en: "What is your occupation?", note: "zanimanje = the trained job · karijera = the whole arc of it." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Which job is it doing?",
      items: [
        {
          prompt: "»Htio bih upisati fakultet.« — which job?",
          options: ["a wish", "a hypothesis", "advice"],
          correctIndex: 0,
          explanation: "Htio bih = I'd like. The bare wish, L1's first use of the conditional.",
        },
        {
          prompt: "»Biste li mi objasnili prijavu?« — which job?",
          options: ["a polite request", "a wish", "a rule for everyone"],
          correctIndex: 0,
          explanation: "biste + li = the formal request. Bi li…? is the ti version.",
        },
        {
          prompt: "»Da imam stipendiju, ___ sveučilište u Zagrebu.«",
          options: ["upisao bih", "upisat ću", "upisujem"],
          correctIndex: 0,
          explanation: "Unreal condition → conditional in the other half. da + present never pairs with future I.",
        },
        {
          prompt: "»Ako položim ispit, ___ u Zagreb.«",
          tts: "Ako položim ispit, doći ću u Zagreb.",
          options: ["doći ću", "došao bih", "dolazio bih"],
          correctIndex: 0,
          explanation: "Real condition → ako + present, then future I. This one might actually happen.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · All four, one after another",
      subtitle: "Four gaps, one for each job — then you build the sentences yourself.",
      emoji: "✍️",
      items: [
        { emoji: "🎁", label: "Wish", hint: "Htio bih…" },
        { emoji: "🎩", label: "Request", hint: "Biste li…?" },
        { emoji: "🚧", label: "Hypothesis", hint: "Da imam…" },
        { emoji: "🎛️", label: "Advice", hint: "Na tvom mjestu…" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "___ bih studirati jezike.",
      blanks: [["Htio", "Htjela", "htio", "htjela"]],
      translation: "I'd like to study languages.",
      wordBank: ["Htio", "Htjela", "Htjeli"],
      explanation: "Job 1 — the wish: htio / htjela bih + infinitive.",
    },
    {
      id: "s10",
      type: "fill",
      text: "___ li mi objasniti prijavu?",
      blanks: [["Biste", "biste"]],
      translation: "Could you explain the application form to me? (formal)",
      explanation: "Job 2 — the formal request. Vi → Biste li…? To a classmate it would be Bi li…?",
    },
    {
      id: "s11",
      type: "fill",
      text: "Da imam stipendiju, ___ bih sveučilište u Zagrebu.",
      blanks: [["upisao", "upisala"]],
      translation: "If I had a scholarship, I'd enrol at the university in Zagreb.",
      explanation: "Job 3 — the hypothesis: da + present in the if-half, conditional in the other.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Na tvom mjestu ___ počeo s tečajem.",
      blanks: [["bih"]],
      translation: "In your place I'd start with a course.",
      explanation: "Job 4 — the warm advice frame: na tvom mjestu bih + participle.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Say (male speaker): »I'd study languages.«",
      answers: ["Studirao bih jezike.", "Studirao bih jezike"],
      hint: "participle + bih — no if-clause",
      explanation: "Studirao bih jezike. A wish stands on its own; the »if« is understood.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Say (female speaker): »If I had a scholarship, I'd enrol at the university.«",
      answers: [
        "Da imam stipendiju, upisala bih sveučilište.",
        "Da imam stipendiju, upisala bih sveučilište",
        "Da imam stipendiju, upisala bih sveuciliste.",
        "Da imam stipendiju, upisala bih sveuciliste",
      ],
      hint: "da + present … conditional",
      explanation: "Da imam stipendiju, upisala bih sveučilište. Never ✗ Da bih imala — the if-half stays in the present.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "State it as a rule for everyone: »One ought to practise every day.«",
      answers: [
        "Trebalo bi vježbati svaki dan.",
        "Trebalo bi vježbati svaki dan",
        "Trebalo bi vjezbati svaki dan.",
        "Trebalo bi vjezbati svaki dan",
      ],
      hint: "nobody is named",
      explanation: "Trebalo bi vježbati svaki dan. The frozen neuter — a notice, not an instruction to one person.",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Marljiv", "student", "svaki", "dan", "ponovi", "nove", "riječi"],
      answers: ["Marljiv student svaki dan ponovi nove riječi"],
      en: "A diligent student revises the new words every day.",
      explanation: "A plain present-tense fact — the kind of sentence your writing task needs between the conditionals.",
    },
    {
      id: "s17",
      type: "section",
      title: "Part 3 · Say it, then write it",
      subtitle: "Two dictations, your own education out loud, a lap of the whole unit — and then the writing task, rehearsed with a model.",
      emoji: "🎤",
      items: [
        { emoji: "🎧", label: "Listen & type", hint: "the two core sentences" },
        { emoji: "🗣️", label: "Speak", hint: "four sentences, two with bih" },
        { emoji: "🔁", label: "Unit review", hint: "L1 → L4" },
        { emoji: "✍️", label: "Rehearsal", hint: "the scaffold + a model" },
      ],
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Da imam stipendiju, upisao bih sveučilište u Zagrebu.",
      answers: [
        "Da imam stipendiju, upisao bih sveučilište u Zagrebu.",
        "Da imam stipendiju, upisao bih sveučilište u Zagrebu",
        "Da imam stipendiju, upisao bih sveuciliste u Zagrebu.",
        "Da imam stipendiju, upisao bih sveuciliste u Zagrebu",
      ],
      allowSlow: true,
      explanation: "Two halves, two shapes: da + present · conditional. Listen for the comma — it is where the machine turns over.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Studirao bih jezike.",
      answers: ["Studirao bih jezike.", "Studirao bih jezike"],
      allowSlow: true,
      explanation: "Three words, one whole job of the conditional.",
    },
    {
      id: "s20",
      type: "speak",
      targetHr: "Sada studiram engleski. Volim jezike. Da imam više vremena, studirao bih i hrvatski. Da imam stipendiju, upisao bih sveučilište u Zagrebu.",
      targetEn: "your education in four sentences — at least two of them with bih",
      phonetic: "SAH-dah stoo-DEE-ram EN-gleh-skee. VO-leem YEH-zee-keh. dah EE-mam VEE-sheh VREH-meh-na, stoo-DEE-rah-oh beeh ee HR-vat-skee. dah EE-mam stee-PEN-dee-yoo, oo-PEE-sah-oh beeh sveh-oo-CHEE-lee-shteh oo ZAH-greh-boo",
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Integration: Tom is choosing a course",
      items: [
        {
          prompt: "Tom piše Ani: »___ bih upisati tečaj u Zagrebu.«",
          options: ["Htio", "Htjela", "Htjeli"],
          correctIndex: 0,
          explanation: "Tom is male → htio bih. The participle agrees with the speaker, not the listener.",
        },
        {
          prompt: "Ana odgovara: »Na tvom ___ bih upisala tečaj.«",
          options: ["mjestu", "mjesto", "mjesta"],
          correctIndex: 0,
          explanation: "na + LOC → na tvom mjestu — and upisala, because Ana is the one imagining herself there.",
        },
        {
          prompt: "Marko: »Ja ___ učio u restoranu!«",
          tts: "Ja bih učio u restoranu!",
          options: ["bih", "bi", "bismo"],
          correctIndex: 0,
          explanation: "ja → bih, always with the -h. Marko would learn Croatian by talking to guests, not in a classroom.",
        },
      ],
    },
    {
      id: "s22",
      type: "quiz-set",
      review: true,
      title: "Unit review · L1–L2",
      items: [
        {
          prompt: "L1: »Mi ___ to naučili.«",
          options: ["bismo", "bi", "biste"],
          correctIndex: 0,
          explanation: "mi → bismo. vi/Vi → biste. The two easiest forms to swap.",
        },
        {
          prompt: "L1: the negative — »___ to rekao.«",
          options: ["Ne bih", "Nebih", "Bih ne"],
          correctIndex: 0,
          explanation: "Two words, always: ne bih, ne bi, ne bismo.",
        },
        {
          prompt: "L2: to a professor — »___ li mi objasnili raspored?«",
          tts: "Biste li mi objasnili raspored?",
          options: ["Biste", "Bi", "Bismo"],
          correctIndex: 0,
          explanation: "Vi → Biste li…? Using Bi li…? with a professor is the mistake Croatians notice first.",
        },
      ],
    },
    {
      id: "s23",
      type: "quiz-set",
      review: true,
      title: "Unit review · L3–L4",
      items: [
        {
          prompt: "L3: which one is the impossible one?",
          options: [
            "Da imam vremena, došao bih.",
            "Ako imam vremena, doći ću.",
            "Kad imam vremena, dolazim.",
          ],
          correctIndex: 0,
          explanation: "da + conditional = it is not happening. ako + future = it might. kad + present = it regularly does.",
        },
        {
          prompt: "L3 trap: »✗ Ako bih imao vremena…« → ✓ ___",
          options: ["Kad bih imao vremena…", "Ako bih imao vremena…", "Da bih imao vremena…"],
          correctIndex: 0,
          explanation: "ako never takes bih. The unreal openers are kad bih + participle or da + present.",
        },
        {
          prompt: "L4: the genitive of riječ is…",
          options: ["riječi", "riječ", "riječa"],
          correctIndex: 0,
          explanation: "i-declension: five of the six forms are riječi. Only NOM and ACC singular are bare riječ.",
        },
      ],
    },
    {
      id: "s24",
      type: "teach",
      title: "The writing task, rehearsed ✍️",
      body:
        "The unit test ends with 80–150 words: **«Što bih studirao i zašto»**. It is graded on a rubric and it never blocks you — but it is the only place in this unit where all four jobs have to sit in one text.\n\nBuild it from the scaffold, not from an English draft. Translating your own English sentences is how texts end up with word order no Croatian would write.\n\n**Model (~90 words), every conditional marked:**\n\n> Zovem se Tom. Sada studiram engleski u Kanadi. Volim jezike i volim učiti.\n>\n> Da imam više vremena, **studirao bih** i hrvatski. To je težak jezik, ali jako lijep.\n>\n> Da imam stipendiju, **upisao bih** sveučilište u Zagrebu. **Htio bih** živjeti tamo godinu dana i svaki dan govoriti hrvatski. Zagreb je lijep grad i tamo živi moja obitelj.\n>\n> Na tvom mjestu **bih** počeo s tečajem. **Trebalo bi** vježbati pola sata svaki dan. **Mogao bi** i čitati novine. Marljiv student ponovi nove riječi navečer.\n>\n> Ako položim ispit u lipnju, **doći ću** u Zagreb u srpnju.\n\nNotice how many sentences have no *bih* in them at all. That is deliberate: the facts carry the text, the conditionals give it shape.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The scaffold — five moves, 80–150 words",
        text: "1 · what you study now (present, real facts) → 2 · what you WOULD study (Studirao / Studirala bih…) → 3 · what you would need for it (Da imam…, upisao / upisala bih…) → 4 · one piece of advice to someone starting out (Na tvom mjestu bih… / Trebalo bi…) → 5 · one real plan in the future (Ako…, …ću…). Stay in one register the whole way through: pick ti or Vi and do not drift.",
      },
      examples: [
        { hr: "Ako položim ispit u lipnju, doći ću u Zagreb u srpnju.", en: "If I pass the exam in June, I'll come to Zagreb in July.", note: "Move 5 — the one required real condition. It is what stops the text floating away." },
      ],
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**One clitic, four jobs**: 🎁 *Htio bih…* (wish) · 🎩 *Biste li…?* (request) · 🚧 *Da imam…, upisao bih…* (hypothesis) · 🎛️ *Na tvom mjestu bih… / Trebalo bi…* (advice).\n\n**The pair that decides everything**: *ako* + present → future I (it might happen) ‖ *da* + present → conditional (it won't).\n\n**The path**: osnovna škola → srednja škola → fakultet na sveučilištu → diploma → zanimanje → karijera. A **stipendija** is what makes an expensive step possible.\n\nWords tonight: obrazovanje, stipendija, karijera, zanimanje, marljiv, strpljiv.\n\nNext: the story «Tečaj u Zagrebu» — a whole chain of advice — and then the unit test, which ends with your own 80–150 words. The scaffold on the notes page is your checklist.",
      vocabIds: [
        "b1u18.obrazovanje", "b1u18.stipendija", "b1u18.karijera",
        "b1u18.zanimanje", "b1u18.marljiv", "b1u18.strpljiv",
      ],
    },
  ],
  srsCloze: [
    { front: "Da imam stipendiju, ___ bih sveučilište.", answers: ["upisao", "upisala"], back: "da + present in one half, conditional in the other.", tts: "Da imam stipendiju, upisao bih sveučilište u Zagrebu." },
    { front: "Studirao / Studirala bih ___ (your own answer — say it out loud)", answers: ["jezike", "hrvatski"], back: "Any true answer counts. The frame is what you are drilling: participle + bih.", tts: "Studirao bih jezike." },
    { front: "On je jako ___ student — uči svaki dan.", answers: ["marljiv"], back: "marljiv = hardworking. The student's adjective.", tts: "On je jako marljiv student." },
    { front: "patient (of a teacher waiting for an answer) = ___", answers: ["strpljiv", "strpljiva"], back: "strpljiv / strpljiva — the teacher's adjective.", tts: "Dobar profesor je strpljiv." },
    { front: "education, the whole path = ___", answers: ["obrazovanje"], back: "obrazovanje (n).", tts: "Obrazovanje je važno." },
    { front: "scholarship = ___", answers: ["stipendija"], back: "stipendija (f) — ACC stipendiju, the form you will use most.", tts: "Stipendija je velika prilika." },
    { front: "the job you trained for = ___", answers: ["zanimanje"], back: "zanimanje (n) — Koje je tvoje zanimanje?", tts: "Koje je tvoje zanimanje?" },
    { front: "career, the whole arc of it = ___", answers: ["karijera"], back: "karijera (f) — one zanimanje, many years of karijera.", tts: "Moja karijera počinje u Zagrebu." },
    { front: "»If I pass the exam in June, I'll come in July.« → Ako položim ispit u lipnju, ___ u srpnju.", answers: ["doći ću", "doci cu"], back: "Real condition → ako + present, then future I.", tts: "Ako položim ispit u lipnju, doći ću u srpnju." },
  ],
  notes: {
    inOneSentence: {
      en: "Conditional I does four jobs — wish, request, hypothesis and advice — and a real Croatian paragraph moves between them without warning, which is exactly what this unit's 80–150-word writing task asks you to do.",
      exampleHr: "Da imam stipendiju, upisao bih sveučilište u Zagrebu.",
    },
    deepDive: [
      {
        title: "The four-jobs bracket — this unit on one page",
        body:
          "Print this and the unit is done. Each job is the same machine (*bi* + l-participle) pointed at a different target, and the only thing you choose is which one fits the moment.\n\nIf you can name the job before you open your mouth, the form follows automatically — because in every one of them the participle agrees with the person doing the imagining, not the person listening.",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "🎁 Želja", rule: "wish · L1", example: "Htio bih upisati fakultet." },
            { label: "🎩 Molba", rule: "request · L2", example: "Biste li mi objasnili prijavu?" },
            { label: "🚧 Pretpostavka", rule: "hypothesis · L3", example: "Da imam stipendiju, upisao bih Zagreb." },
            { label: "🎛️ Savjet", rule: "advice · L4", example: "Na tvom mjestu bih učio svaki dan." },
          ],
        },
      },
      {
        title: "ako ‖ da — the pair the test will keep asking about",
        body:
          "This is the one contrast in Unit 18 that is genuinely easy to get wrong under time pressure, because both halves have to move together.\n\n**Real** — it might happen: *ako* + **present**, then **future I**. *Ako položim ispit, doći ću u Zagreb.*\n\n**Unreal** — it isn't happening: *da* + **present** (or *kad bih* + participle), then **conditional**. *Da imam stipendiju, upisao bih sveučilište.*\n\nThe forbidden mix is *ako* + *bih*. It looks like the English »if I would« and it does not exist in Croatian.",
        table: {
          caption: "The two conditions, both halves",
          headers: ["", "if-half", "other half", "primjer"],
          rows: [
            ["REAL 🔀", "ako + prezent", "futur I", "Ako položim ispit, doći ću."],
            ["UNREAL 🚧", "da + prezent", "kondicional", "Da imam vremena, došao bih."],
            ["UNREAL 🚧", "kad bih + particip", "kondicional", "Kad bih imao vremena, došao bih."],
            ["✗ NIKAD", "ako + bih", "—", "✗ Ako bih imao vremena…"],
          ],
        },
      },
      {
        title: "The writing task: build it, don't translate it",
        body:
          "The test's writing task is 80–150 words on **«Što bih studirao i zašto»**, graded on a rubric and never gating your progress. Four things sink these texts, and all four are avoidable:\n\n**Writing in English order and translating.** Build from the scaffold instead — five moves, in order, each one a sentence or two.\n\n**Losing register halfway.** Starting with *ti* and finishing with *Vi* (or the reverse) reads as carelessness. Decide before you start.\n\n**Stacking every sentence on bih** until the text has no facts in it. The scaffold's first move is deliberately in the plain present: say what is actually true, then imagine.\n\n**Forgetting the one real condition.** Move 5 is *Ako…, …ću…* — it lands the text on something that will actually happen.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "The scaffold — five moves",
          text: "1 · what you study now → 2 · what you WOULD study → 3 · what you would need for it → 4 · one piece of advice → 5 · one real plan in the future. 80–150 words, one register throughout.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ako bih imao stipendiju, upisao bih sveučilište.",
        right: "Da imam stipendiju, upisao bih sveučilište.",
        why: "ako never takes bih. Unreal conditions open with da + present or kad bih + participle.",
      },
      {
        wrong: "Da imam stipendiju, upisat ću sveučilište.",
        right: "Da imam stipendiju, upisao bih sveučilište.",
        why: "The two halves must match: da + present is unreal, so the other half has to be conditional, not future.",
      },
      {
        wrong: "Htio bih studirati. Trebalo bi učiti. Upisao bih fakultet. Volio bih Zagreb.",
        right: "Sada studiram engleski. Da imam više vremena, studirao bih i hrvatski.",
        why: "A text built only from bih has no facts in it. Alternate real sentences with conditional ones.",
      },
      {
        wrong: "Na tvom mjestu bih upisao tečaj. Biste li mi objasnili prijavu?",
        right: "Na vašem mjestu bih upisao tečaj. Biste li mi objasnili prijavu?",
        why: "Register drift: tvom is ti, Biste is Vi. Pick one and keep it for the whole text.",
      },
    ],
    memoryHooks: [
      "Four jobs, one clitic: wish 🎁 · request 🎩 · hypothesis 🚧 · advice 🎛️. Name the job, and the form follows.",
      "ako marries the future; da marries the conditional. Never let ako near bih.",
      "The path in five words: osnovna → srednja → fakultet → diploma → karijera.",
      "marljiv is the student, strpljiv is the teacher.",
      "A good text breathes: fact, wish, fact, hypothesis, advice, plan.",
    ],
    connects: [
      { label: "Where bih came from (Unit 18 L1)", lessonId: "b1u18l1" },
      { label: "Requests and the politeness ladder (Unit 18 L2)", lessonId: "b1u18l2" },
      { label: "Real vs unreal conditions (Unit 18 L3)", lessonId: "b1u18l3" },
      { label: "The four advice frames (Unit 18 L4)", lessonId: "b1u18l4" },
    ],
    selfCheck: [
      { q: "Name the four jobs of Conditional I and one example of each.", a: "Wish — Htio bih upisati fakultet. Request — Biste li mi objasnili prijavu? Hypothesis — Da imam stipendiju, upisao bih sveučilište. Advice — Na tvom mjestu bih učio svaki dan." },
      { q: "How do the two halves of a REAL condition look?", a: "ako + present, then future I: Ako položim ispit, doći ću u Zagreb." },
      { q: "And an UNREAL one?", a: "da + present (or kad bih + participle), then conditional: Da imam vremena, došao bih." },
      { q: "What are the five moves of the writing scaffold?", a: "What you study now · what you would study · what you would need · one piece of advice · one real plan in the future." },
      { q: "Why should a good text contain sentences with no bih in them?", a: "Because the conditionals need facts to hang on. A text made only of bih says nothing that is actually true." },
    ],
  },
};
