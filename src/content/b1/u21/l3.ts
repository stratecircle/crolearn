import type { Lesson } from "@/types/content";

/**
 * B1 U21 L3 — Pitao me… (Reported questions — `li`, and never `ako`)
 * Spec: curriculum/B1/unit-21.md · grammar-reference §19 "Indirect speech"
 * + §15 (question formation) + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The unit's hardest lesson, and the one that carries its headline error.
 *
 * Questions split in two. A **wh-question** keeps its question word and simply
 * stops being a question — no inversion, no question mark, no `da`. A **yes/no
 * question** takes **`li` on the verb**, the same particle the learner has
 * owned since A1's *Je li to istina?*, now doing a new job.
 *
 * ⚠️ THE HEADLINE ERROR OF THE UNIT: English uses *if* for two unrelated
 * things — *if it rains* and *she asked if I live here* — and Croatian splits
 * them absolutely. `ako` is the CONDITIONAL conjunction and cannot carry a
 * question. \*Pitala me ako imam vremena ❌ is not a small slip: a Croatian
 * listener hears a conditional clause dangling with nothing to condition.
 *
 * Per the spec, that error gets SIX separate contacts in this lesson alone: a
 * teach slide of its own (s07), the callout on it, two quiz-set items, one fill
 * item, and one commonMistakes entry — plus two more in the unit test. It is
 * the most durable error English speakers make in Croatian indirect speech and
 * it is not fixed by being mentioned once.
 *
 * `da li` is also out, per the course-wide ban every unit spec has carried
 * since A2. It exists, it is heard, and this course produces `li` on the verb.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and routed around: ekran (4, inside a previous unit's
 * rejection notice → zaslon), zaboraviti (1, same class), naći (1, same),
 * telefon (0 → mobitel), nitko (rejected by name in b1u19's test header).
 * Deferred by unit: no L4 verb network beyond the already-owned reći / pitati /
 * znati, no deictic shift (L5), no Future II (U22), no -nje (U23), no full
 * clitic cluster (U23), no participial passive (B2), no comparatives (B2).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U21 cut-outs exist (ozbiljno and čudno stay
 * icon-only — there is nothing to draw).
 */
export const b1u21l3: Lesson = {
  id: "b1u21l3",
  unitId: "b1u21",
  title: "Pitao me…",
  titleEn: "He asked me… — reported questions, `li`, and never `ako`",
  grammarTags: ["indirect-speech", "questions", "li", "clitics"],
  estMinutes: 22,
  vocab: [
    { id: "b1u21.zanimati", hr: "zanimati", en: "to interest — Zanima me… = I'd like to know…, the softest way to ask", pos: "verb", icon: "🤔", exampleHr: "Zanima me je li to istina.", exampleEn: "I'd like to know whether that's true." },
    { id: "b1u21.provjeriti", hr: "provjeriti", en: "to check (provjerim)", pos: "verb", icon: "🔍", exampleHr: "Pitao me jesam li provjerila poruku.", exampleEn: "He asked me whether I'd checked the message." },
    { id: "b1u21.glasina", hr: "glasina", en: "a rumour (f) — the noun that only exists because people relay things", pos: "noun", gender: "f", icon: "💬", exampleHr: "To je samo glasina.", exampleEn: "That's just a rumour." },
    { id: "b1u21.profil", hr: "profil", en: "a profile (m)", pos: "noun", gender: "m", icon: "🪪", exampleHr: "Ima novi profil.", exampleEn: "He's got a new profile." },
    { id: "b1u21.komentar", hr: "komentar", en: "a comment (m)", pos: "noun", gender: "m", icon: "🗨️", exampleHr: "Pročitala sam komentar.", exampleEn: "I read the comment." },
    { id: "b1u21.sadrzaj", hr: "sadržaj", en: "content (m; GEN sadržaja)", pos: "noun", gender: "m", icon: "📰", exampleHr: "Sadržaj stranice je nov.", exampleEn: "The page's content is new." },
    { id: "b1u21.ozbiljno", hr: "ozbiljno", en: "seriously — Ozbiljno? / Mislim ozbiljno.", pos: "adv", icon: "😐", exampleHr: "Pitao me mislim li ozbiljno.", exampleEn: "He asked me whether I was serious." },
    { id: "b1u21.cudno", hr: "čudno", en: "strangely / oddly — Čudno je da…", pos: "adv", icon: "🌀", exampleHr: "Čudno je da nije odgovorio.", exampleEn: "It's odd that he didn't reply." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Pitao me…",
      subtitle: "English uses one word — «if» — for two completely different things. Croatian has never confused them, and today is the day you stop.",
      emoji: "❓",
      items: [
        { emoji: "🔤", label: "Wh-questions", hint: "keep the word, drop the question" },
        { emoji: "🧲", label: "li on the verb", hint: "for yes/no questions" },
        { emoji: "🚫", label: "Never ako", hint: "the unit's biggest error" },
        { emoji: "💬", label: "New words", hint: "glasina, komentar, sadržaj…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Two kinds of question",
      subtitle: "Before you can report a question you have to know what kind it was — because the two kinds behave completely differently.",
      emoji: "🔤",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L1, L2, and A1's Je li…?" },
        { emoji: "🃏", label: "New words", hint: "the asking eight" },
        { emoji: "⚙️", label: "The split", hint: "wh-word ‖ li" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: two days, and one very old friend",
      items: [
        {
          prompt: "L1: »Bio sam tamo.« → Rekao je da ___ ___ tamo.",
          options: ["je bio", "bude", "je bio bio"],
          correctIndex: 0,
          explanation: "Past stays past. The no-backshift rule runs under everything in this unit, questions included.",
        },
        {
          prompt: "L2: »Dođi!« (rekla je MENI) → Rekla mi je da ___ .",
          options: ["dođem", "dođeš", "dođi"],
          correctIndex: 0,
          explanation: "She told me, so I'm the one coming. The imperative can't survive a report.",
        },
        {
          prompt: "A1: how do you ask «Is that true?» in Croatian?",
          options: ["Je li to istina?", "Ako je to istina?", "Da to je istina?"],
          correctIndex: 0,
          explanation: "Je li to istina? — you have used that `li` since your first weeks. Today it gets a second job.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The asking eight",
      vocabIds: [
        "b1u21.zanimati", "b1u21.provjeriti", "b1u21.glasina", "b1u21.profil",
        "b1u21.komentar", "b1u21.sadrzaj", "b1u21.ozbiljno", "b1u21.cudno",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "A wh-question stops being a question 🔤",
      body:
        "If the question had a **question word** in it — *gdje, kad, tko, što, kako, zašto, koji* — that word does all the joining by itself. Nothing is added:\n\n*«**Gdje** stanuješ?»* → *Pitala me **gdje stanujem**.*\n*«**Kad** dolaziš?»* → *Pitao me **kad dolazim**.*\n*«**Zašto** nisi odgovorio?»* → *Pitala me **zašto nisam odgovorio**.*\n\nThree things go away and one thing changes:\n\n- **No `da`.** The question word is already the joiner. ~~*Pitala me da gdje stanujem*~~ ❌\n- **No question mark.** It is not a question any more; it is a report of one. ~~*Pitala me gdje stanujem?*~~ ❌\n- **No inversion, no special order.** The clause after the question word is an ordinary statement.\n- **The person moves**, exactly as in L1: her *stanuješ* becomes my *stanujem*.\n\nAnd the tense, as always, does not move at all.",
      table: {
        caption: "Wh-questions — the word does the joining",
        headers: ["pitanje", "kako prenosiš"],
        rows: [
          ["«Gdje stanuješ?»", "Pitala me **gdje stanujem**."],
          ["«Kad dolaziš?»", "Pitao me **kad dolazim**."],
          ["«Tko je to napisao?»", "Pitala me **tko je to napisao**."],
          ["«Što si rekao?»", "Pitala me **što sam rekao**."],
          ["«Zašto nisi odgovorio?»", "Pitala me **zašto nisam odgovorio**."],
          ["«Koji je tvoj profil?»", "Pitao me **koji je moj profil**."],
        ],
      },
      ttsChips: ["Pitala me gdje stanujem.", "Pitao me kad dolazim.", "Pitala me zašto nisam odgovorio."],
    },
    {
      id: "s06",
      type: "teach",
      title: "A yes/no question takes **li** on the verb 🧲",
      body:
        "If there was **no question word** — if the answer would be *da* or *ne* — then Croatian needs a joiner, and it uses one you already own.\n\n*«Stanuješ li u Zagrebu?»* → *Pitala me **stanujem li** u Zagrebu.*\n*«Imaš li lozinku?»* → *Pitao me **imam li** lozinku.*\n*«Je li to istina?»* → *Zanima me **je li** to istina.*\n\n**The shape:** the **verb comes first** inside the embedded clause, and **`li` clips onto it**. Everything else follows.\n\n| citat | kako prenosiš |\n|---|---|\n| «**Stanuješ li** u Zagrebu?» | Pitala me **stanujem li** u Zagrebu. |\n| «**Imaš li** mobitel?» | Pitao me **imam li** mobitel. |\n| «**Je li** to glasina?» | Pitala me **je li** to glasina. |\n| «**Jesi li** provjerio poruku?» | Pitala me **jesam li** provjerio poruku. |\n\nNotice that `li` **cannot lead** — it is a clitic and clips onto the word in front of it: ~~*Pitala me li stanujem*~~ ❌ → *…**stanujem li**…* ✅\n\nAnd there is **no `da`** here either: ~~*Pitala me da stanujem li*~~ ❌\n\n**The softener worth having:** *Zanima me…* + an embedded question is how you ask something politely and indirectly in Croatian — *Zanima me je li to istina*, *Zanima me gdje stanuješ*. It is worth more socially than it looks.",
      diagram: {
        kind: "train",
        wagons: [
          { label: "1", items: ["Pitala me", "Pitao me", "Zanima me"], note: "the frame" },
          { label: "2", items: ["stanujem", "imam", "je", "jesam"], note: "the VERB comes first" },
          { label: "3", items: ["li"], note: "clips straight onto it — never leads" },
          { label: "4", items: ["u Zagrebu", "lozinku", "to istina"], note: "everything else" },
        ],
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "⚠️ **ako** is not «if» 🚫",
      body:
        "This is the most durable mistake English speakers make in Croatian, and it comes from a real accident of English.\n\nEnglish uses **one word** for two completely unrelated jobs:\n\n> ***If** it rains, we're staying home.* — a **condition**\n> *She asked **if** I live in Zagreb.* — an **embedded question**\n\nCroatian has never merged those. **`ako` is the conditional conjunction only.** It means *if-then*, and it cannot carry a question:\n\n~~*Pitala me **ako** stanujem u Zagrebu.*~~ ❌\n*Pitala me **stanujem li** u Zagrebu.* ✅\n\nThis is not a small slip. A Croatian listener hears *ako stanujem u Zagrebu…* and waits for the other half — *…then what?* — which never comes. The sentence does not sound slightly off; it sounds unfinished.\n\n**The repair is always the same: `li` on the verb.**\n\n| što želiš reći | ❌ | ✅ |\n|---|---|---|\n| she asked if I have time | Pitala me ako imam vremena | Pitala me **imam li** vremena |\n| he asked if it's true | Pitao me ako je istina | Pitao me **je li** istina |\n| I'd like to know if he replied | Zanima me ako je odgovorio | Zanima me **je li** odgovorio |\n\n**And `ako` is still perfectly fine when it really is a condition:** *Ako imam vremena, doći ću.* ✅ — that one has never been in question.\n\n⚠️ **`da li` is also out.** You will hear it, especially outside Croatia, and it is not what this course produces. `li` goes on the verb.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "One English word, two Croatian jobs",
        text: "ako = if-then, a condition. li = whether, an embedded question. They are not interchangeable, and swapping them does not make a small mistake — it makes a sentence that sounds unfinished.",
      },
    },
    {
      id: "s08",
      type: "example",
      title: "Questions, relayed",
      items: [
        { hr: "«Gdje stanuješ?» → Pitala me gdje stanujem.", en: "«Where do you live?» → She asked me where I live.", note: "No da, no question mark, no inversion. The person moves." },
        { hr: "«Kad dolaziš?» → Pitao me kad dolazim.", en: "«When are you coming?» → He asked me when I was coming.", note: "English shifts the tense here; Croatian doesn't." },
        { hr: "«Stanuješ li u Zagrebu?» → Pitala me stanujem li u Zagrebu.", en: "«Do you live in Zagreb?» → She asked me whether I live in Zagreb.", note: "No question word, so li clips onto the verb." },
        { hr: "«Imaš li lozinku?» → Pitao me imam li lozinku.", en: "«Do you have the password?» → He asked me whether I had the password.", note: "The verb comes first, then li." },
        { hr: "«Je li to istina?» → Zanima me je li to istina.", en: "«Is that true?» → I'd like to know whether that's true.", note: "Zanima me — the polite, indirect way to ask." },
        { hr: "«Jesi li provjerio poruku?» → Pitala me jesam li provjerio poruku.", en: "«Did you check the message?» → She asked me whether I'd checked the message.", note: "jesi li → jesam li: the person moves, li stays put." },
        { hr: "Pitala me je li to glasina.", en: "She asked me whether it was a rumour.", note: "je li — the shape you've been using since A1." },
        { hr: "Čudno je da nije odgovorio.", en: "It's odd that he didn't reply.", note: "Not a question at all — čudno je DA, an ordinary da-clause." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · li, and never ako",
      subtitle: "Two of the next four items exist for one purpose: to catch the English «if» before it reaches the page.",
      emoji: "🚫",
      items: [
        { emoji: "✅", label: "Quick check", hint: "wh-word or li?" },
        { emoji: "🔤", label: "Build them", hint: "relay four questions" },
        { emoji: "🔊", label: "Listen", hint: "what was actually asked?" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: which joiner?",
      items: [
        {
          prompt: "»Imaš li vremena?« → Pitala me ___ ___ vremena.",
          options: ["imam li", "ako imam", "da li imam"],
          correctIndex: 0,
          explanation: "imam li — the verb first, then li clipped onto it. `ako` is the conditional conjunction and cannot carry a question; `da li` is not what this course produces.",
        },
        {
          prompt: "»Gdje stanuješ?« → Pitala me ___ ___ .",
          options: ["gdje stanujem", "gdje stanuješ", "da gdje stanujem"],
          correctIndex: 0,
          explanation: "The question word joins it by itself — no da — and the person moves from your stanuješ to my stanujem.",
        },
        {
          prompt: "Which one is wrong?",
          options: [
            "Pitao me ako je to istina.",
            "Pitao me je li to istina.",
            "Ako je to istina, javi mi.",
          ],
          correctIndex: 0,
          explanation: "The first. `ako` can only mean if-then, so a Croatian listener waits for the other half of the condition. Option 3 shows ako doing its real job, and it is perfectly fine.",
        },
        {
          prompt: "»Jesi li provjerio poruku?« → Pitala me ___ ___ provjerio poruku.",
          options: ["jesam li", "ako sam", "li jesam"],
          correctIndex: 0,
          explanation: "jesam li — the person moves (jesi → jesam), li stays clipped to the verb. And li can never lead.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each question to its report",
      pairs: [
        { a: "«Gdje stanuješ?»", b: "Pitala me gdje stanujem." },
        { a: "«Stanuješ li u Zagrebu?»", b: "Pitala me stanujem li u Zagrebu." },
        { a: "«Je li to istina?»", b: "Zanima me je li to istina." },
        { a: "«Zašto nisi odgovorio?»", b: "Pitala me zašto nisam odgovorio." },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "«Imaš li mobitel?» → Pitala me ___ ___ mobitel.",
      blanks: [["imam"], ["li"]],
      translation: "«Have you got a phone?» → She asked me whether I had a phone.",
      explanation: "The verb comes first, then li clips onto it. Never ako, and never da li.",
    },
    {
      id: "s13",
      type: "fill",
      text: "«Kad dolaziš?» → Pitao me ___ ___ .",
      blanks: [["kad"], ["dolazim"]],
      translation: "«When are you coming?» → He asked me when I was coming.",
      explanation: "The question word joins it — no da needed. The person moves; the tense does not.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Zanima me ___ ___ to glasina.",
      blanks: [["je"], ["li"]],
      translation: "I'd like to know whether that's a rumour.",
      wordBank: ["je", "li", "ako", "da"],
      explanation: "je li — the exact shape you've used since A1's «Je li to istina?», now embedded. `ako` in this slot would make the sentence sound unfinished.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Relay it: Ana pita »Jesi li obrisao poruku?« → (Pitala me…)",
      answers: [
        "Pitala me jesam li obrisao poruku.",
        "Pitala me jesam li obrisao poruku",
        "Ana me pitala jesam li obrisao poruku.",
      ],
      hint: "No question word, so the verb comes first and li clips onto it. The person moves.",
      explanation: "Pitala me jesam li obrisao poruku. jesi li → jesam li — li never moves off the verb, and there is no da and no ako anywhere in it.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Repair it: »Pitala me ako imam vremena.« → ",
      answers: [
        "Pitala me imam li vremena.",
        "Pitala me imam li vremena",
      ],
      hint: "`ako` is the conditional conjunction. Put the joiner where it belongs.",
      explanation: "Pitala me imam li vremena. This is the unit's headline error and the repair is always the same: li, clipped onto the verb.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Pitala me stanujem li u Zagrebu.",
      answers: ["Pitala me stanujem li u Zagrebu.", "Pitala me stanujem li u Zagrebu"],
      allowSlow: true,
      explanation: "Verb first, li clipped onto it, then the rest.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Zanima me je li to istina.",
      answers: ["Zanima me je li to istina.", "Zanima me je li to istina"],
      allowSlow: true,
      explanation: "The polite indirect question — and the A1 shape «je li» doing a new job.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Pitao me imam li lozinku.",
      targetEn: "He asked me whether I had the password.",
      phonetic: "PEE-tao me EE-mam lee LO-zeen-koo",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "L1 review: »Pitala me kad ___ .« (when I was coming — she asked «Kad dolaziš?»)",
      options: ["dolazim", "sam dolazio", "ću doći"],
      correctIndex: 0,
      explanation: "dolazim — she used the present, so the report uses the present. English says «when I WAS coming»; Croatian doesn't move it.",
      tts: "Pitala me kad dolazim.",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "Is »Ako imam vremena, doći ću« correct?",
      options: [
        "Yes — that's ako doing its real job: a condition.",
        "No — it should be «Imam li vremena, doći ću».",
        "No — ako is never correct in Croatian.",
      ],
      correctIndex: 0,
      explanation: "Perfectly correct. `ako` was never the problem — using it to carry a QUESTION is. As a conditional conjunction it is exactly right, and you have owned it since Unit 18.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Two kinds of question, two completely different reports.**\n\n**1 · It had a question word** — *gdje, kad, tko, što, kako, zašto, koji* → keep the word, and it does the joining. No `da`, no question mark, no inversion.\n*«Gdje stanuješ?»* → *Pitala me **gdje stanujem**.*\n\n**2 · It didn't** — the answer would be *da* or *ne* → **`li` clips onto the verb**, and the verb comes first.\n*«Imaš li lozinku?»* → *Pitao me **imam li** lozinku.*\n\n⚠️ **Never `ako`.** English uses *if* for both a condition and an embedded question; Croatian has never merged them. `ako` means **if-then** and nothing else.\n~~*Pitala me **ako** imam vremena*~~ ❌ → *Pitala me **imam li** vremena* ✅\nA Croatian listener hears the first one and waits for the other half of the condition. It doesn't sound slightly wrong — it sounds unfinished.\n\n⚠️ **And never `da li`.** You will hear it. This course writes `li` on the verb.\n\n**`ako` is still fine when it really is a condition:** *Ako imam vremena, doći ću.* ✅\n\n**The softener worth stealing:** *Zanima me je li to istina.* — the polite way to ask anything indirectly.\n\nTomorrow: the whole network of verbs that take a `da`-clause — and the two that refuse to join it.",
      vocabIds: [
        "b1u21.zanimati", "b1u21.provjeriti", "b1u21.glasina", "b1u21.profil",
        "b1u21.komentar", "b1u21.sadrzaj", "b1u21.ozbiljno", "b1u21.cudno",
      ],
    },
  ],
  srsCloze: [
    { front: "«Gdje stanuješ?» → Pitala me ___ ___ .", answers: ["gdje stanujem"], back: "gdje stanujem — the question word joins it, no da, no question mark, and the person moves.", tts: "Pitala me gdje stanujem." },
    { front: "«Imaš li lozinku?» → Pitao me ___ ___ lozinku.", answers: ["imam li"], back: "imam li — verb first, li clipped onto it.", tts: "Pitao me imam li lozinku." },
    { front: "A reported yes/no question takes ___ , never ___ .", answers: ["li, ako", "li not ako", "li / ako"], back: "li on the verb — never ako. `ako` is the conditional conjunction and cannot carry a question.", tts: "Pitala me imam li vremena." },
    { front: "Repair: «Pitala me ako imam vremena.» → Pitala me ___ ___ vremena.", answers: ["imam li"], back: "imam li — the unit's headline error, and the repair is always the same.", tts: "Pitala me imam li vremena." },
    { front: "Zanima me ___ ___ to istina. (whether that's true)", answers: ["je li"], back: "je li — the A1 shape, now embedded. The politest way to ask indirectly.", tts: "Zanima me je li to istina." },
    { front: "Is «Ako imam vremena, doći ću» correct? ___", answers: ["yes", "da"], back: "Yes. `ako` doing its real job — a condition. Only a QUESTION is off-limits to it.", tts: "Ako imam vremena, doći ću." },
    { front: "a rumour = ___", answers: ["glasina"], back: "glasina (f) — To je samo glasina.", tts: "To je samo glasina." },
    { front: "Zanima me… = ___ (what it does)", answers: ["I'd like to know", "id like to know", "i would like to know"], back: "zanimati — «Zanima me…» is the soft, indirect way to ask anything.", tts: "Zanima me je li to istina." },
    { front: "content (of a page) = ___", answers: ["sadržaj", "sadrzaj"], back: "sadržaj (m) — Sadržaj stranice je nov.", tts: "Sadržaj stranice je nov." },
    { front: "to check = ___", answers: ["provjeriti"], back: "provjeriti (provjerim) — Pitao me jesam li provjerila poruku.", tts: "Pitao me jesam li provjerila poruku." },
  ],
  notes: {
    inOneSentence: {
      en: "A reported wh-question keeps its question word and stops being a question; a reported yes/no question takes LI clipped onto the verb — and never ako, which is Croatian's conditional conjunction and cannot carry a question at all.",
      exampleHr: "Pitala me gdje stanujem i imam li vremena.",
    },
    deepDive: [
      {
        title: "Two kinds of question, and how to tell them apart",
        body:
          "Before you can report a question you have to know which kind it was, and the test is simple: **could it be answered with *da* or *ne*?**\n\n**If NO — it had a question word.** *gdje, kad, tko, što, kako, zašto, koji, koliko.* Keep the word; it does all the joining by itself.\n\n*«Gdje stanuješ?»* → *Pitala me **gdje stanujem**.*\n\nThree things disappear: the **question mark** (it is no longer a question), any **inversion** (the clause is an ordinary statement), and any temptation to add **`da`** (the question word is already the joiner). One thing changes: the **person**.\n\n**If YES — there was no question word.** Then Croatian needs a joiner, and it uses **`li`**, clipped onto the verb, with the verb standing first in the embedded clause.\n\n*«Imaš li lozinku?»* → *Pitao me **imam li** lozinku.*\n\n`li` is a clitic, so it can never lead: \\*~~Pitala me li imam~~ ❌. And there is no `da` in this construction either.",
        table: {
          caption: "The two shapes side by side",
          headers: ["kakvo pitanje", "spojnica", "citat", "kako prenosiš"],
          rows: [
            ["s upitnom riječi", "the wh-word itself", "«Gdje stanuješ?»", "Pitala me **gdje stanujem**."],
            ["s upitnom riječi", "the wh-word itself", "«Zašto nisi odgovorio?»", "Pitala me **zašto nisam odgovorio**."],
            ["da/ne", "**li** on the verb", "«Imaš li mobitel?»", "Pitao me **imam li** mobitel."],
            ["da/ne", "**li** on the verb", "«Je li to istina?»", "Zanima me **je li** to istina."],
            ["da/ne", "**li** on the verb", "«Jesi li provjerio?»", "Pitala me **jesam li** provjerio."],
          ],
        },
      },
      {
        title: "⚠️ ako is not «if» — the unit's headline error",
        body:
          "English merged two unrelated things into one word, and every English speaker learning Croatian brings the merger with them.\n\n> ***If** it rains, we're staying home.* → a **condition**: if X, then Y.\n> *She asked **if** I live in Zagreb.* → an **embedded question**: whether or not.\n\nCroatian has never merged them, and the two Croatian words are not interchangeable in either direction.\n\n**`ako` is the conditional conjunction. Only.** It means *if-then*, and it always sets up a second half.\n\n\\*~~Pitala me **ako** stanujem u Zagrebu.~~ ❌\n*Pitala me **stanujem li** u Zagrebu.* ✅\n\nIt is worth being precise about why the wrong version is so bad. It is not slightly unnatural — a Croatian listener parses *ako stanujem u Zagrebu…* as the opening of a condition and then **waits for the consequence**, which never arrives. The sentence lands as unfinished rather than as foreign.\n\n**The repair is always `li` on the verb**, and it never varies:\n\n| što želiš reći | ❌ | ✅ |\n|---|---|---|\n| she asked if I have time | *Pitala me ako imam vremena* | Pitala me **imam li** vremena |\n| he asked if it's true | *Pitao me ako je istina* | Pitao me **je li** istina |\n| I want to know if he replied | *Zanima me ako je odgovorio* | Zanima me **je li** odgovorio |\n| she checked whether I'd saved it | *Provjerila je ako sam spremio* | Provjerila je **jesam li** spremio |\n\n**`ako` remains completely correct when it really is a condition** — that was never in question, and you have owned it since Unit 18: *Ako imam vremena, doći ću.* ✅\n\n**And `da li` is out too.** It exists and you will hear it, particularly outside Croatia. This course produces `li` on the verb, consistently, in every unit.",
        diagram: {
          kind: "contrast",
          left: {
            title: "ako — UVJET (if-then)",
            emoji: "🔀",
            lines: [
              { hr: "Ako imam vremena, doći ću.", en: "If I have time, I'll come. ✅" },
              { hr: "Ako bude kiše, ostajemo doma.", en: "If it rains, we stay home. ✅" },
              { hr: "→ uvijek ima drugi dio", en: "→ it always sets up a consequence" },
            ],
          },
          right: {
            title: "li — UGRAĐENO PITANJE (whether)",
            emoji: "❓",
            lines: [
              { hr: "Pitala me imam li vremena.", en: "She asked whether I have time. ✅" },
              { hr: "Zanima me je li to istina.", en: "I wonder whether that's true. ✅" },
              { hr: "→ ne treba drugi dio", en: "→ it needs no second half" },
            ],
          },
        },
      },
      {
        title: "Where `li` sits, and the person that moves",
        body:
          "`li` is a clitic and behaves like every clitic you have met since Unit 12: it clips onto the word in front of it and can never open a clause.\n\nIn an embedded yes/no question, the word in front of it is **the verb**, which is why the verb moves to the front of the clause:\n\n*Pitala me **stanujem li** u Zagrebu.*\n*Pitala me **jesam li** provjerio poruku.*\n*Zanima me **je li** to glasina.*\n\nWith compound tenses, `li` goes on the **auxiliary**, not on the participle: *jesam li **provjerio***, never \\*~~provjerio li sam~~.\n\n**The person moves exactly as in L1 and L2.** Whoever was being asked becomes whoever is now reporting:\n\n| citat | kako prenosiš |\n|---|---|\n| «**Stanuješ** li…?» | Pitala me **stanujem** li… |\n| «**Imaš** li…?» | Pitao me **imam** li… |\n| «**Jesi** li provjerio?» | Pitala me **jesam** li provjerio… |\n\nAnd the tense, as ever, does not move: *«Kad dolaziš?»* → *Pitao me kad **dolazim**.* English would say *when I **was** coming*; Croatian keeps the present.\n\n**The softener.** *Zanima me* + an embedded question is the polite, indirect way to ask almost anything, and it works with both kinds:\n\n*Zanima me **gdje stanuješ**.* · *Zanima me **je li** to istina.*\n\nIt is softer than a direct question and much softer than *Reci mi…*, and it is the single most socially useful thing in this lesson.",
      },
    ],
    commonMistakes: [
      { wrong: "Pitala me ako imam vremena.", right: "Pitala me **imam li** vremena.", why: "THE headline error of the unit. `ako` is the conditional conjunction — it means if-then and cannot carry a question. A Croatian listener waits for the second half of the condition and it never comes." },
      { wrong: "Pitala me da li imam vremena.", right: "Pitala me **imam li** vremena.", why: "`da li` exists and is widely heard, but this course produces `li` clipped onto the verb, consistently." },
      { wrong: "Pitala me gdje stanuješ?", right: "Pitala me gdje **stanujem**.", why: "Two things: the person moves (she asked me, so it's my stanujem), and it is no longer a question, so the question mark goes." },
      { wrong: "Pitala me da gdje stanujem.", right: "Pitala me **gdje** stanujem.", why: "The question word is already the joiner. Adding `da` doubles it." },
      { wrong: "Pitala me li stanujem u Zagrebu.", right: "Pitala me **stanujem li** u Zagrebu.", why: "`li` is a clitic and can never lead. It clips onto the verb, which is why the verb comes first." },
      { wrong: "Pitala me jesi li provjerio poruku.", right: "Pitala me **jesam li** provjerio poruku.", why: "She asked ME, so the person moves: jesi → jesam. `li` stays exactly where it was." },
    ],
    memoryHooks: [
      "**Ask yourself: could it be answered with da or ne?** Yes → `li` on the verb. No → it had a question word, so keep it and change nothing else.",
      "**«ako» always promises a second half.** If your sentence has no *then*, `ako` is the wrong word — and that is the entire test.",
      "**`li` clips onto the verb, so the verb goes first.** *stanujem li*, *imam li*, *jesam li*. It can never lead.",
      "**You have been saying «je li» since A1.** Embedding it is the same two words in a longer sentence.",
      "**Zanima me… is worth stealing.** It softens any question, works with both kinds, and makes you sound considerably more fluent than a direct one.",
    ],
    connects: [
      { label: "Reported statements — the tense that never moves", lessonId: "b1u21l1" },
      { label: "Reported commands — da + present, and neka", lessonId: "b1u21l2" },
      { label: "ako doing its real job: the conditional", lessonId: "b1u18l3" },
      { label: "Next: the whole da-clause verb network", lessonId: "b1u21l4" },
    ],
    selfCheck: [
      { q: "«Imaš li vremena?» → Pitala me ___ ___ vremena.", a: "imam li — verb first, li clipped onto it, person moved." },
      { q: "Why is «Pitala me ako imam vremena» wrong?", a: "`ako` is the conditional conjunction. It sets up an if-then and the listener waits for a consequence that never comes. The joiner for an embedded question is `li` on the verb." },
      { q: "Is «Ako imam vremena, doći ću» correct?", a: "Yes, completely. That's ako doing its real job. Only using it to carry a question is wrong." },
      { q: "«Gdje stanuješ?» → how does it come out, and what disappears?", a: "Pitala me gdje stanujem. The question mark goes, no da is added, and the person moves." },
      { q: "Where does li go with a compound tense?", a: "On the auxiliary: «jesam li provjerio», never «provjerio li sam»." },
    ],
  },
};
