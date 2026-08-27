import type { Lesson } from "@/types/content";

/**
 * B1 U22 L5 — Moja kulturna ruta (Consolidation + the writing task)
 * Spec: curriculum/B1/unit-22.md · grammar-reference §20 "Futur II and time
 * clauses" §20.5 (the interrogative kad) + §20.6 (the ten traps) + §19.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new machinery. The lesson sorts the system onto one card, names THE ONE
 * LICENSED EXCEPTION, walks the wall of ten traps, and hands over the scaffold.
 *
 * THE CARD (the unit's exit printable):
 *   Main clause → FUTUR I. Coupling → one of four conjunctions. Time clause →
 *   the PRESENT if the verb is perfective, FUTUR II if it is imperfective —
 *   and the aspect chooses, not you.
 *     kad     Kad dođem, javit ću ti.            prezent · svršeno
 *     čim     Čim stignem, kupit ću ulaznicu.    prezent · svršeno
 *     dok     Dok budem čekao, čitat ću.         Futur II · nesvršeno
 *     dok ne  Čekat ću dok ne dođeš.             prezent + a `ne` meaning nothing
 *     ako     Ako budeš imao vremena, javi mi.   Futur II · nesvršeno
 *
 * ★ THE ONE LICENSED FUTUR I ★ — *Pitao me **kad ću doći**.* ✅
 *   That `kad` is not this unit's conjunction at all. It is **Unit 21's
 *   embedded question word**, and the clause IS the thing being asked rather
 *   than naming the time of anything else. It lands one unit after U21 taught
 *   embedded questions, and the timing is the entire point.
 *   THE TEST IS NEVER THE WORD. IT IS WHAT THE CLAUSE IS DOING:
 *     names the time of the main event  → temporal   → prezent / Futur II
 *     is the thing being asked          → question   → FUTUR I
 *   It is taught LAST, after four lessons of the ban, and the notes say
 *   explicitly that meeting it earlier would have undone the rule.
 *
 * THE WALL OF TEN TRAPS (§20.6): (1) Futur I in the time clause — the unit's #1
 * error · (2) budem on a perfective (*kad budem došao*) — HEAVY, NOT WRONG, and
 * the only thing on the wall that costs nothing · (3) a bare present for an
 * imperfective (*dok čekam*) — reports now · (4) dok where dok ne belongs ·
 * (5) the `ne` of dok ne read as a negation · (6) ako ‖ kad confused on
 * certainty · (7) ako carrying a question (U21's error, still live) · (8) the
 * l-participle not agreeing · (9) Futur I removed from the MAIN clause too —
 * a real sentence, but a promise rather than a plan · (10) a comparative or a
 * participial passive reaching in from B2.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and routed around: dio (0 — «one su dio tradicije» is
 * rebuilt as «one su važne za tradiciju»), ući (0), umrijeti (0), slikati (0),
 * petnaesti (0), stizati (0), vrh / kraljica / natpis / stube (the STORY's
 * glossed words, held back), comparatives and superlatives (B2), the
 * participial passive (B2), nitko, naći, točno, sjediti, stajati, kasniti,
 * gore / dolje / ovamo, zid (all 0 or previously rejected).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U22 cut-outs exist (nekadašnji stays
 * icon-only — there is nothing to draw).
 */
export const b1u22l5: Lesson = {
  id: "b1u22l5",
  unitId: "b1u22",
  title: "Moja kulturna ruta",
  titleEn: "My cultural route — the card, the wall, and one legal exception",
  grammarTags: ["futur-2", "time-clause", "writing", "consolidation"],
  estMinutes: 24,
  vocab: [
    { id: "b1u22.kultura", hr: "kultura", en: "culture (f)", pos: "noun", gender: "f", icon: "🎭", exampleHr: "Zanima me hrvatska kultura.", exampleEn: "I'm interested in Croatian culture." },
    { id: "b1u22.tradicija", hr: "tradicija", en: "tradition (f)", pos: "noun", gender: "f", icon: "🪡", exampleHr: "To je stara tradicija.", exampleEn: "That's an old tradition." },
    { id: "b1u22.galerija", hr: "galerija", en: "gallery (f)", pos: "noun", gender: "f", icon: "🖼️", exampleHr: "Kad stignem, posjetit ću galeriju.", exampleEn: "When I arrive, I'll visit the gallery." },
    { id: "b1u22.izlozba", hr: "izložba", en: "exhibition (f)", pos: "noun", gender: "f", icon: "🏺", exampleHr: "Ako propustim izložbu, doći ću drugi put.", exampleEn: "If I miss the exhibition, I'll come another time." },
    { id: "b1u22.nosnja", hr: "nošnja", en: "folk costume (f; ACC nošnju) — kept and worn on the day, not what anyone wears now", pos: "noun", gender: "f", icon: "👗", exampleHr: "Nošnja je važna za tradiciju.", exampleEn: "The folk costume matters to the tradition." },
    { id: "b1u22.obicaj", hr: "običaj", en: "a custom (m; GEN običaja)", pos: "noun", gender: "m", icon: "🔄", exampleHr: "To je stari običaj.", exampleEn: "That's an old custom." },
    { id: "b1u22.narod", hr: "narod", en: "a people, a nation (m)", pos: "noun", gender: "m", icon: "👥", exampleHr: "Svaki narod ima svoje običaje.", exampleEn: "Every people has its own customs." },
    { id: "b1u22.nekadasnji", hr: "nekadašnji", en: "former (nekadašnja, nekadašnje)", pos: "adj", icon: "🕰️", exampleHr: "To je nekadašnji dvorac.", exampleEn: "That's a former castle." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moja kulturna ruta",
      subtitle: "One card, four conjunctions — and one sentence that breaks every rule on it, legally.",
      emoji: "🗺️",
      items: [
        { emoji: "🃏", label: "The card", hint: "the whole unit, one table" },
        { emoji: "★", label: "The exception", hint: "kad ću — and it's fine" },
        { emoji: "🧱", label: "The wall", hint: "ten traps, one harmless" },
        { emoji: "✍️", label: "The scaffold", hint: "six rows and a model" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The card",
      subtitle: "Everything from four lessons fits on one table. Learn the table and the unit is yours.",
      emoji: "🃏",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "one item from each day" },
        { emoji: "🃏", label: "New words", hint: "the culture eight" },
        { emoji: "⚙️", label: "Five rows", hint: "the exit printable" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: one from each day",
      items: [
        {
          prompt: "L1: »Rat je ___ četiri godine.« (trajati)",
          options: ["trajao", "potrajao", "traje"],
          correctIndex: 0,
          explanation: "Imperfective by nature — a war lasts, it doesn't happen.",
        },
        {
          prompt: "L2: »___ , javit ću ti.« (when I arrive)",
          options: ["Kad dođem", "Kad ću doći", "Kad budem doći"],
          correctIndex: 0,
          explanation: "The ban, then the fork.",
        },
        {
          prompt: "L3: »Čekat ću ___ dođeš.« (until)",
          options: ["dok ne", "dok", "čim"],
          correctIndex: 0,
          explanation: "dok ne = until, and the `ne` means nothing.",
        },
        {
          prompt: "L4: »Dok ___ ___ muzej, vidjet ćeš slike.« (razgledati, ti — muško)",
          options: ["budeš razgledao", "razgledaš", "ćeš razgledati"],
          correctIndex: 0,
          explanation: "Imperfective → Futur II. Same rule pointing forward.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The culture eight",
      vocabIds: [
        "b1u22.kultura", "b1u22.tradicija", "b1u22.galerija", "b1u22.izlozba",
        "b1u22.nosnja", "b1u22.obicaj", "b1u22.narod", "b1u22.nekadasnji",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "🃏 The card",
      body:
        "Four lessons, one table.\n\n> **Main clause → FUTUR I.**\n> **Coupling → one of four conjunctions.**\n> **Time clause → the PRESENT if the verb is perfective, FUTUR II if it is imperfective — and the aspect chooses, not you.**\n\nThat is the entire unit. Everything else has been detail, examples and drill.\n\nOne thing worth saying once more before the table: **the main clause does not have to be a Futur I.** It can be an imperative (*Kad budeš imao vremena, **javi** mi*) or a present used for a settled plan (*Kad razgledamo dvorac, **idemo** u kulu*). The rule is about the **time clause** and nothing else.",
      table: {
        caption: "The card — the unit's exit printable",
        headers: ["veznik", "primjer", "što traži"],
        rows: [
          ["**kad**", "Kad **dođem**, javit ću ti.", "prezent · svršeno"],
          ["**čim**", "Čim **stignem**, kupit ću ulaznicu.", "prezent · svršeno"],
          ["**dok**", "Dok **budem čekao**, čitat ću knjigu.", "Futur II · nesvršeno"],
          ["**dok ne**", "Čekat ću **dok ne dođeš**.", "prezent + a `ne` that means nothing"],
          ["**ako**", "Ako **budeš imao** vremena, javi mi.", "Futur II · nesvršeno"],
        ],
      },
      diagram: {
        kind: "flow",
        steps: [
          { label: "U kojoj sam rečenici?", emoji: "🧭", example: "glavna → FUTUR I · vremenska → dalje" },
          { label: "Kakav je glagol?", emoji: "🍴", example: "svršeni → prezent · nesvršeni → Futur II" },
          { label: "Gotovo.", emoji: "✅", example: "Kad dođem, javit ću ti." },
        ],
      },
      ttsChips: ["Kad dođem, javit ću ti.", "Čim stignem, kupit ću ulaznicu.", "Čekat ću dok ne dođeš."],
    },
    {
      id: "s06",
      type: "teach",
      title: "★ The one licensed Futur I",
      body:
        "For four lessons you have been told that a Futur I after `kad` is always wrong. Here is the sentence where it is **right**:\n\n> ***Pitao me kad ću doći.*** ✅ — He asked me when I'd come.\n\nNothing has been contradicted. That `kad` is **not this unit's conjunction at all** — it is **Unit 21's embedded question word**, and it is doing a completely different job.\n\nLook at what each clause is *for*:\n\n*Kad **dođem**, javit ću ti.* — the clause **names the time** of the calling. It is an adverbial: *at the moment of my arriving*.\n*Pitao me kad **ću doći**.* — the clause **is the question**. It is not naming the time of anything; it is the content of what he asked.\n\n> ### The test is never the word. It is what the clause is doing.\n> **names the time of the main event** → temporal → **prezent / Futur II**\n> **is the thing being asked, or not known** → question → **FUTUR I**\n\nSo the same three letters do two unrelated jobs, exactly as `ako` did in Unit 21. And the two units fit together: **U21 taught you to embed a question; U22 tells you that an embedded question keeps its own future.**\n\n⚠️ This is deliberately the **last** thing in the unit. Meeting it in L2 would have undone the ban before it had a chance to settle — and the ban is the rule you need ninety-nine times out of a hundred.",
      diagram: {
        kind: "contrast",
        left: {
          title: "VREMENSKI kad — pravilo",
          emoji: "🕐",
          lines: [
            { hr: "Kad dođem, javit ću ti.", en: "names WHEN the calling happens" },
            { hr: "Kad stignemo, kupit ćemo ulaznice.", en: "→ prezent / Futur II" },
          ],
        },
        right: {
          title: "UPITNI kad — Futur I ✅",
          emoji: "❓",
          lines: [
            { hr: "Pitao me kad ću doći.", en: "the clause IS the question" },
            { hr: "Ne znam kad ću stići.", en: "→ FUTUR I, correctly" },
          ],
        },
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "🧱 The wall of ten",
      body:
        "Nine of these make a sentence wrong. One does not, and it is marked.\n\n**1 · Futur I in the time clause.** The unit's #1 error and the first thing the rubric checks.\n~~*Kad ću doći, javit ću ti.*~~ ❌ → *Kad **dođem**…* ✅\n\n**2 · 🟡 *budem* on a perfective verb.** *Kad **budem došao**…* — **NOT AN ERROR.** Just heavy. The only thing on this wall that costs nothing.\n\n**3 · A bare present for an imperfective.** ~~*Dok čekam, čitat ću.*~~ ❌ — reports something happening now → *Dok **budem čekao**…* ✅\n\n**4 · `dok` where `dok ne` belongs.** ~~*Čekat ću dok dođeš.*~~ — grammatical, and means *while you come*.\n\n**5 · Reading the `ne` of `dok ne` as a negation.** It means nothing. *Čekat ću dok ne dođeš* = *until you come*.\n\n**6 · `ako` ‖ `kad` confused on certainty.** *Ako budeš imao vremena* says you might not.\n\n**7 · `ako` carrying a question.** U21's error, still live. ~~*Pitao me ako imam vremena*~~ ❌ → *…**imam li** vremena* ✅\n\n**8 · The participle not agreeing.** ~~*budem radila*~~ said by a man → *budem **radio*** ✅\n\n**9 · Futur I removed from the MAIN clause too.** *Kad dođem, **javim** ti* — a real sentence, but a promise rather than a plan.\n\n**10 · A comparative or a participial passive from B2.** ~~*najstariji dvorac*~~ → *dvorac star pet stotina godina* · ~~*dvorac je izgrađen*~~ → *dvorac su izgradili*\n\n**If you check only two things:** is there a Futur I where the ban forbids it (1), and did every participle agree (8)?",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Nine wrong, one harmless",
        text: "Trap 2 — «kad budem došao» — is the only item on this wall that is not an error. It is heavy, not wrong, and over-using budem is the safe mistake. Over-using Futur I is not.",
      },
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Mixed, then written",
      subtitle: "Mixed practice first — name the clause before you answer it — then the scaffold, the model text, and a route of your own.",
      emoji: "✍️",
      items: [
        { emoji: "🔀", label: "Mixed practice", hint: "all four, unlabelled" },
        { emoji: "★", label: "The exception", hint: "spot the licensed one" },
        { emoji: "📝", label: "The scaffold", hint: "six rows and a model" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Mixed: name the clause, then answer",
      items: [
        {
          prompt: "»___ , kupit ćemo ulaznice.« (as soon as we arrive)",
          options: ["Čim stignemo", "Čim ćemo stići", "Čim smo stigli"],
          correctIndex: 0,
          explanation: "čim + perfective present. The ban applies to all four conjunctions.",
        },
        {
          prompt: "»Dok ___ ___ sutra, ti razgledaj grad.« (raditi, ja — žensko)",
          options: ["budem radila", "radim", "ću raditi"],
          correctIndex: 0,
          explanation: "raditi is imperfective → Futur II, and the participle agrees with a female speaker.",
        },
        {
          prompt: "»Pitao je kad ___ doći.« (he asked when I'd come)",
          options: ["ću", "dođem", "budem"],
          correctIndex: 0,
          explanation: "★ The licensed exception. That kad is an embedded QUESTION — the clause is the thing being asked, not the time of anything — so it keeps its Futur I. This is the only item in the section where the in-clause future is right.",
        },
        {
          prompt: "Which of these is NOT an error?",
          options: [
            "Kad budem došao, javit ću ti.",
            "Kad ću doći, javit ću ti.",
            "Dok čekam, čitat ću.",
          ],
          correctIndex: 0,
          explanation: "The first — heavy, but correct. The second breaks the ban. The third puts a bare present on an imperfective, which reports something happening now.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each conjunction to what it demands",
      pairs: [
        { a: "čim", b: "prezent, svršeno — a completed trigger" },
        { a: "dok", b: "Futur II, nesvršeno — a stretch" },
        { a: "dok ne", b: "prezent + a `ne` that means nothing" },
        { a: "upitni kad (Pitao me kad…)", b: "★ FUTUR I — the clause IS the question" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Kad ___ u Hrvatskoj, putovat ću tjedan dana. (biti, ja)",
      blanks: [["budem"]],
      translation: "When I'm in Croatia, I'll travel for a week.",
      explanation: "budem — biti is imperfective, so Futur II. And with biti the auxiliary stands alone; there is no participle to add.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Čim ___ ulaznicu, idem gledati kipove. (kupiti, ja)",
      blanks: [["kupim"]],
      translation: "As soon as I buy a ticket, I'm going to look at the statues.",
      explanation: "kupim — perfective, so the present. And the main clause is a present too, used for a settled plan.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Pitala me kad ___ doći.",
      blanks: [["ću"]],
      translation: "She asked me when I'd come.",
      explanation: "★ The licensed exception. This kad is Unit 21's embedded question word — the clause is the thing being asked, so it keeps its Futur I.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Neću otići ___ ___ vidim more.",
      blanks: [["dok"], ["ne"]],
      translation: "I won't leave until I've seen the sea.",
      explanation: "dok ne — until. English has two negatives here; Croatian has one real one and a `ne` that negates nothing.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Kad", "se", "budem", "pripremio", "javit", "ću", "ti"],
      answers: ["Kad se budem pripremio, javit ću ti.", "Kad se budem pripremio, javit ću ti"],
      en: "When I've got ready, I'll let you know.",
      explanation: "The `se` goes straight after the conjunction — second position in its clause — never after budem. And this is the heavy-but-legal option: pripremiti se is perfective, so «kad se pripremim» is lighter.",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Dok", "budemo", "čekali", "Marka", "razgledat", "ćemo", "tvrđavu"],
      answers: ["Dok budemo čekali Marka, razgledat ćemo tvrđavu.", "Dok budemo čekali Marka, razgledat ćemo tvrđavu"],
      en: "While we wait for Marko, we'll look round the fortress.",
      explanation: "budemo + čekali for «we», then Futur I in the main clause. This is the unit's model Futur II sentence.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "Repair it: »Kad ću doći u Zagreb, posjetit ću galeriju.« → ",
      answers: [
        "Kad dođem u Zagreb, posjetit ću galeriju.",
        "Kad dođem u Zagreb, posjetit ću galeriju",
      ],
      hint: "The ban. Only the main clause may carry a future.",
      explanation: "Kad dođem u Zagreb, posjetit ću galeriju. Trap 1, the unit's number-one error — and the repair never varies.",
    },
    {
      id: "s18",
      type: "type",
      prompt: "Say it: «If the exhibition lasts until Saturday, I'll stay another day.» (izložba · trajati · ostati)",
      answers: [
        "Ako izložba bude trajala do subote, ostat ću još jedan dan.",
        "Ako izložba bude trajala do subote, ostat ću još jedan dan",
      ],
      hint: "trajati is imperfective — and it may not last that long, so which conjunction?",
      explanation: "Ako izložba bude trajala do subote, ostat ću još jedan dan. ako because it's uncertain; Futur II because trajati is imperfective; and the participle agrees with izložba.",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Kad budem u Hrvatskoj, putovat ću tjedan dana.",
      answers: ["Kad budem u Hrvatskoj, putovat ću tjedan dana.", "Kad budem u Hrvatskoj, putovat ću tjedan dana"],
      allowSlow: true,
      explanation: "budem alone — with biti there is no participle to add.",
    },
    {
      id: "s20",
      type: "listen-type",
      tts: "Pitala me kad ću doći.",
      answers: ["Pitala me kad ću doći.", "Pitala me kad ću doći"],
      allowSlow: true,
      explanation: "★ The licensed Futur I. An embedded question keeps its own future.",
    },
    {
      id: "s21",
      type: "speak",
      targetHr: "Čim stignem u Split, razgledat ću staru tvrđavu.",
      targetEn: "As soon as I get to Split, I'll look round the old fortress.",
      phonetic: "cheem STIG-nem oo split, raz-GLE-dat tchoo STA-roo TVR-jaa-voo",
    },
    {
      id: "s22",
      type: "teach",
      title: "The scaffold ✍️",
      body:
        "The writing task asks for **80–150 words planning a cultural route through Croatia**. Six rows, and the paragraph writes itself.\n\nThe rubric checks five things, and they map onto the rows exactly: **≥1 perfective-present time clause** · **≥1 Futur II, participle agreeing** · **≥1 condition with *ako*** · **≥1 *dok* or *dok ne* clause** · **one reason with *jer* or *budući da***.",
      table: {
        caption: "Six rows — fill each one",
        headers: ["red", "što tu ide", "model"],
        rows: [
          ["1 · kamo", "where you're going", "*Kad budem u Hrvatskoj, putovat ću tjedan dana.*"],
          ["2 · dolazak", "**kad / čim + prezent, svršeno**", "*Kad stignem, posjetit ću galeriju.*"],
          ["3 · odmah zatim", "**čim + prezent**", "*Čim kupim ulaznicu, idem gledati kipove.*"],
          ["4 · uvjet", "**ako** + prezent or Futur II", "*Ako izložba bude trajala do subote, ostat ću.*"],
          ["5 · usporedo", "**dok + Futur II** or **dok ne**", "*Dok budem putovao vlakom, čitat ću knjigu.*"],
          ["6 · zašto", "**jer** / **budući da**", "*…jer svaki grad ima nešto svoje.*"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "success",
        title: "Two sweeps before you hand it in",
        text: "First: every time clause — is there a Futur I in any of them? Second: every Futur II — does the participle agree with whoever is doing it? Those two catch most of what this unit marks down.",
      },
    },
    {
      id: "s23",
      type: "example",
      title: "The model text — every clause labelled",
      items: [
        { hr: "Kad budem u Hrvatskoj, putovat ću tjedan dana.", en: "When I'm in Croatia, I'll travel for a week.", note: "1 · biti is imperfective → Futur II. budem stands alone." },
        { hr: "Kad stignem, posjetit ću galeriju koja je blizu trga.", en: "When I arrive, I'll visit the gallery near the square.", note: "2 · stići is perfective → the present. Plus a U19 relative clause." },
        { hr: "Čim kupim ulaznicu, idem gledati kipove.", en: "As soon as I buy a ticket, I'm going to look at the statues.", note: "3 · čim + perfective present, and a present main clause for a settled plan." },
        { hr: "U galeriji ću vidjeti i nošnje, jer su one važne za tradiciju.", en: "In the gallery I'll also see folk costumes, because they matter to the tradition.", note: "6 · the jer-reason. An ordinary Futur I sentence — not everything has to be a time clause." },
        { hr: "Ako izložba bude trajala do subote, ostat ću još jedan dan.", en: "If the exhibition lasts until Saturday, I'll stay another day.", note: "4 · ako because it's uncertain; trajati is imperfective → Futur II, agreeing with izložba." },
        { hr: "Dok budem putovao vlakom, čitat ću knjigu o hrvatskoj povijesti.", en: "While I'm travelling by train, I'll read a book about Croatian history.", note: "5 · dok + Futur II. putovati is imperfective." },
        { hr: "U Splitu ću razgledati staru tvrđavu i neću otići dok ne vidim more.", en: "In Split I'll look round the old fortress and I won't leave until I've seen the sea.", note: "5 · dok ne + perfective present. One real negative, one decorative." },
        { hr: "Ana mi je rekla da je Split lijep, i pitala me kad ću doći.", en: "Ana told me Split is lovely, and asked me when I'd come.", note: "★ The licensed Futur I — a U21 embedded question, keeping its own future." },
      ],
    },
    {
      id: "s24",
      type: "mc",
      review: true,
      prompt: "Which of these will the writing rubric penalise hardest?",
      options: [
        "Kad ću doći u Zagreb, posjetit ću galeriju.",
        "Kad budem došao u Zagreb, posjetit ću galeriju.",
        "Pitala me kad ću doći.",
      ],
      correctIndex: 0,
      explanation: "The first — a Futur I in a temporal clause, which is the error the whole unit exists to prevent. The second is heavy but correct. The third is the licensed exception and should be praised, not marked.",
    },
    {
      id: "s25",
      type: "mc",
      review: true,
      prompt: "U21 review: »Pitala me ___ imam vremena.«",
      options: ["— (ništa; »imam li vremena«)", "ako", "kad", "da"],
      correctIndex: 0,
      explanation: "`li` on the verb. And notice how neatly the two units sit together: U21 says an embedded yes/no question takes li, and U22 says an embedded kad-question keeps its Futur I. Both are about what the clause is DOING.",
    },
    {
      id: "s26",
      type: "recap",
      summary:
        "**🃏 The card.**\n\n> **Main clause → FUTUR I. Coupling → one of four conjunctions. Time clause → the PRESENT if the verb is perfective, FUTUR II if it is imperfective — and the aspect chooses, not you.**\n\n| veznik | primjer | što traži |\n|---|---|---|\n| **kad** | Kad dođem, javit ću ti. | prezent · svršeno |\n| **čim** | Čim stignem, kupit ću ulaznicu. | prezent · svršeno |\n| **dok** | Dok budem čekao, čitat ću. | Futur II · nesvršeno |\n| **dok ne** | Čekat ću dok ne dođeš. | prezent + a `ne` meaning nothing |\n| **ako** | Ako budeš imao vremena, javi mi. | Futur II · nesvršeno |\n\n**★ And the one exception, which is not an exception at all.**\n*Pitao me **kad ću doći**.* ✅ — because that `kad` is Unit 21's question word, not this unit's conjunction. The clause is not naming the time of anything; the clause **is** the thing being asked.\n\n> **The test is never the word. It is what the clause is doing.**\n\n**🧱 The wall:** ten traps, nine of which make a sentence wrong. The exception is trap 2 — *kad budem došao* — which is only heavy. The two that survive longest are **#1**, a Futur I creeping into the time clause, and **#8**, a participle that has quietly stopped agreeing.\n\n**Before you hand in the paragraph: two sweeps.** One for Futur I in time clauses. One for participle agreement.\n\nWords tonight: kultura, tradicija, galerija, izložba, nošnja, običaj, narod, nekadašnji.\n\nNext: a castle, four people, one day trip — and every single arrangement in it is a time clause.",
      vocabIds: [
        "b1u22.kultura", "b1u22.tradicija", "b1u22.galerija", "b1u22.izlozba",
        "b1u22.nosnja", "b1u22.obicaj", "b1u22.narod", "b1u22.nekadasnji",
      ],
    },
  ],
  srsCloze: [
    { front: "Kad ___ , javit ću ti. (doći, ja)", answers: ["dođem", "dodem"], back: "dođem — perfective → the present. The ban never lifts for a temporal kad.", tts: "Kad dođem, javit ću ti." },
    { front: "Dok ___ ___ , čitat ću. (čekati, ja — muško)", answers: ["budem čekao", "budem cekao"], back: "budem čekao — imperfective → Futur II.", tts: "Dok budem čekao, čitat ću." },
    { front: "Čekat ću ___ ___ dođeš. (until)", answers: ["dok ne"], back: "dok ne — and the `ne` means nothing at all.", tts: "Čekat ću dok ne dođeš." },
    { front: "★ Pitao me kad ___ doći. (the licensed exception)", answers: ["ću"], back: "ću — that kad is U21's embedded question word. The clause IS the question, so it keeps its Futur I.", tts: "Pitao me kad ću doći." },
    { front: "Temporal kad → ___ · Interrogative kad → ___", answers: ["prezent / futur II, futur I", "present or futur II, futur I", "prezent, futur I"], back: "Temporal → the present or Futur II. Interrogative → Futur I. The test is what the clause is DOING, never the word.", tts: "Kad dođem, javit ću ti. Pitao me kad ću doći." },
    { front: "Kad ___ u Hrvatskoj, putovat ću tjedan dana. (biti, ja)", answers: ["budem"], back: "budem — with biti the auxiliary stands alone; there is no participle to add.", tts: "Kad budem u Hrvatskoj, putovat ću tjedan dana." },
    { front: "culture ‖ tradition = ___ ‖ ___", answers: ["kultura, tradicija", "kultura tradicija"], back: "kultura ‖ tradicija.", tts: "Zanima me hrvatska kultura." },
    { front: "exhibition = ___", answers: ["izložba", "izlozba"], back: "izložba (f) — Ako propustim izložbu, doći ću drugi put.", tts: "Ako propustim izložbu, doći ću drugi put." },
    { front: "folk costume = ___ (ACC ___ )", answers: ["nošnja, nošnju", "nošnja", "nosnja"], back: "nošnja · nošnju — the embroidered clothes of a region, worn on the day.", tts: "Nošnja je važna za tradiciju." },
    { front: "a custom ‖ a people = ___ ‖ ___", answers: ["običaj, narod", "obicaj, narod"], back: "običaj ‖ narod — Svaki narod ima svoje običaje.", tts: "Svaki narod ima svoje običaje." },
    { front: "former = ___", answers: ["nekadašnji", "nekadasnji"], back: "nekadašnji (nekadašnja, nekadašnje) — To je nekadašnji dvorac.", tts: "To je nekadašnji dvorac." },
  ],
  notes: {
    inOneSentence: {
      en: "Main clause Futur I, time clause the present for a perfective and Futur II for an imperfective — with one licensed exception, the embedded question from Unit 21, where kad keeps its own future because the clause IS the question.",
      exampleHr: "Kad stignem, kupit ću ulaznicu, a Ana me pitala kad ću doći.",
    },
    deepDive: [
      {
        title: "🃏 The card",
        body:
          "Four lessons fit on one table, and the table is the thing to keep.\n\n> **Main clause → FUTUR I.**\n> **Coupling → one of four conjunctions.**\n> **Time clause → the PRESENT if the verb is perfective, FUTUR II if it is imperfective — and the aspect chooses, not you.**\n\n| veznik | primjer | što traži |\n|---|---|---|\n| **kad** | *Kad **dođem**, javit ću ti.* | prezent · svršeno |\n| **čim** | *Čim **stignem**, kupit ću ulaznicu.* | prezent · svršeno |\n| **dok** | *Dok **budem čekao**, čitat ću knjigu.* | Futur II · nesvršeno |\n| **dok ne** | *Čekat ću **dok ne dođeš**.* | prezent + a `ne` that means nothing |\n| **ako** | *Ako **budeš imao** vremena, javi mi.* | Futur II · nesvršeno |\n\n**Two things the table doesn't say and should.**\n\n**The main clause need not be a Futur I.** It can be an imperative (*Kad budeš imao vremena, **javi** mi*), or a present used for a settled plan (*Kad razgledamo dvorac, **idemo** u kulu*). The rule governs the time clause and nothing else.\n\n**The order of the clauses doesn't matter.** *Kad dođem, javit ću ti* = *Javit ću ti kad dođem.* The ban follows the conjunction, not the position in the sentence.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "1 · Which clause am I in?", emoji: "🧭", example: "glavna → Futur I · vremenska → next question" },
            { label: "2 · What kind of verb is it?", emoji: "🍴", example: "svršeni → prezent · nesvršeni → Futur II" },
            { label: "3 · Does the participle agree?", emoji: "✅", example: "budem radio ‖ budem radila" },
          ],
        },
      },
      {
        title: "★ The one licensed Futur I",
        body:
          "Four lessons said a Futur I after `kad` is always wrong. Here is where it is right:\n\n> ***Pitao me kad ću doći.*** ✅\n> ***Ne znam kad ću stići.*** ✅\n\nNothing has been contradicted, because **that `kad` is not this unit's word at all.** It is **Unit 21's embedded question word**, and it is doing an unrelated job.\n\nCompare what the two clauses are *for*:\n\n| rečenica | što zavisna rečenica radi | vrijeme |\n|---|---|---|\n| *Kad **dođem**, javit ću ti.* | names **when** the calling happens | prezent |\n| *Pitao me kad **ću doći**.* | **is** the question he asked | **Futur I** |\n| *Dok **budem čekao**, čitat ću.* | names **while what** the reading happens | Futur II |\n| *Ne znam kad **ću stići**.* | **is** the thing I don't know | **Futur I** |\n\n> ### The test is never the word. It is what the clause is doing.\n> **names the time of the main event** → temporal → prezent / Futur II\n> **is the thing being asked, or the thing not known** → question → **Futur I**\n\nThe pattern will look familiar, because Unit 21 had exactly the same shape: `ako` is one word doing two jobs in English and only one in Croatian. Here it is one Croatian word doing two jobs, and the clause's function is what separates them.\n\n**And the two units interlock.** U21 taught you to embed a question — *pitao me **gdje stanujem***, *pitao me **imam li** vremena*. U22 adds the last piece: an embedded question **keeps its own tense**, including a future. That is not a new rule at all; it is U21's no-backshift rule, still running.\n\n⚠️ **Why it is taught last.** Meeting this in L2 would have given you a licensed *kad ću* before the ban had settled, and the ban is what you need ninety-nine times in a hundred. Four lessons of «never» first, then the one place it is «yes».",
      },
      {
        title: "🧱 The wall of ten",
        body:
          "**1 · Futur I in the time clause.** The unit's number-one error, and the first thing the rubric checks.\n\\*~~Kad ću doći, javit ću ti.~~ ❌ → *Kad **dođem**, javit ću ti.* ✅\n\n**2 · 🟡 `budem` on a perfective verb — NOT AN ERROR.** *Kad **budem došao**…* is grammatical, just heavy. The only item on this wall that costs nothing, and the reason is worth repeating: over-using *budem* makes you sound formal; over-using Futur I makes you wrong.\n\n**3 · A bare present for an imperfective.** \\*~~Dok čekam, čitat ću.~~ ❌ — that reports something happening now → *Dok **budem čekao**…* ✅\n\n**4 · `dok` where `dok ne` belongs.** *Čekat ću dok dođeš* is grammatical and means *while you come*.\n\n**5 · Reading the `ne` of `dok ne` as a negation.** It negates nothing. *dok ne* is one item meaning *until*.\n\n**6 · `ako` ‖ `kad` confused on certainty.** *Ako budeš imao vremena* quietly says you might not.\n\n**7 · `ako` carrying a question.** U21's error, still live: \\*~~Pitao me ako imam vremena~~ ❌ → *…**imam li** vremena* ✅\n\n**8 · The participle not agreeing.** \\*~~budem radila~~ said by a man → *budem **radio***. This one survives longest, because it hides: the sentence is otherwise perfect.\n\n**9 · Futur I removed from the MAIN clause too.** *Kad dođem, **javim** ti* — a real sentence, and a promise rather than a plan. The over-correction.\n\n**10 · A comparative or a participial passive from B2.** \\*~~najstariji dvorac~~ → *dvorac star pet stotina godina* · \\*~~dvorac je izgrađen~~ → *dvorac su izgradili*.\n\n**If you check only two things: #1 and #8.** A Futur I where the ban forbids it, and a participle that stopped agreeing. Between them they account for most of what this unit marks down.",
        table: {
          caption: "The wall, sorted by what it costs you",
          headers: ["zamka", "koliko košta"],
          rows: [
            ["1 · Futur I u vremenskoj rečenici", "**most** — the unit's core error"],
            ["8 · particip se ne slaže", "**a lot** — and it hides"],
            ["7 · ako nosi pitanje", "a lot — sounds unfinished"],
            ["3 · goli prezent za nesvršeni", "changes the meaning to «now»"],
            ["4–5 · dok ‖ dok ne", "changes the meaning"],
            ["9 · nema futura ni u glavnoj", "changes plan → promise"],
            ["6 · ako ‖ kad", "changes how certain you sound"],
            ["10 · komparativ / pasiv", "right language, wrong level"],
            ["**2 · budem na svršenom**", "🟡 **nothing — it is not an error**"],
          ],
        },
      },
      {
        title: "The pre-writing checklist",
        body:
          "The task: **80–150 words planning a cultural route through Croatia.** The rubric checks five things; six rows produce all of them.\n\n| red | što tu ide | model |\n|---|---|---|\n| 1 · kamo | where you're going | *Kad budem u Hrvatskoj, putovat ću tjedan dana.* |\n| 2 · dolazak | **kad / čim + prezent, svršeno** | *Kad stignem, posjetit ću galeriju.* |\n| 3 · odmah zatim | **čim + prezent** | *Čim kupim ulaznicu, idem gledati kipove.* |\n| 4 · uvjet | **ako** + prezent or Futur II | *Ako izložba bude trajala do subote, ostat ću.* |\n| 5 · usporedo | **dok + Futur II** or **dok ne** | *Dok budem putovao vlakom, čitat ću knjigu.* |\n| 6 · zašto | **jer** / **budući da** | *…jer svaki grad ima nešto svoje.* |\n\n**Row 5 carries the most marks**, because it is the only row that forces a Futur II — and a paragraph with no Futur II in it has not shown the system. Make sure the participle agrees with whoever is doing it.\n\n**Row 4 is where `ako` belongs and nowhere else.** Do not use it to report a question; that is still U21's error and it is on this unit's wall too.\n\n**Two sweeps at the end.** First: read every time clause and look for a Futur I. Second: read every *budem* and check the participle's gender and number. Nothing else in the rubric is worth as much as those two.",
        diagram: {
          kind: "callout",
          tone: "success",
          title: "One paragraph, two readings",
          text: "Read it once for Futur I in time clauses. Read it again for participle agreement. Those are traps 1 and 8, and they cost more than the other eight put together.",
        },
      },
    ],
    commonMistakes: [
      { wrong: "Kad ću doći, javit ću ti.", right: "**Kad dođem**, javit ću ti.", why: "Trap 1, the unit's core error. The future lives in the main clause only." },
      { wrong: "Dok čekam, čitat ću knjigu.", right: "Dok **budem čekao**, čitat ću knjigu.", why: "Trap 3. A bare present with an imperfective verb reports something happening now." },
      { wrong: "Čekat ću dok dođeš.", right: "Čekat ću **dok ne** dođeš.", why: "Trap 4. Bare dok means «while»; «until» is dok ne, and the ne negates nothing." },
      { wrong: "Dok budem radila (said by a man)", right: "Dok budem **radio**", why: "Trap 8 — the one that hides. The l-participle agrees in gender and number exactly as in the perfekt." },
      { wrong: "Pitao me kad dođem. (meaning: he asked when I'd come)", right: "Pitao me kad **ću doći**.", why: "★ The licensed exception, in reverse. That kad is an embedded question, so the clause keeps its own future — the present makes it read as a temporal clause instead." },
      { wrong: "Posjetit ću najstariji dvorac u Hrvatskoj.", right: "Posjetit ću dvorac **star pet stotina godina**.", why: "Trap 10. Superlatives are B2, and the number is more informative anyway." },
    ],
    memoryHooks: [
      "**One sentence, one future — except when the clause IS the question.** That single sentence holds the rule and its exception together.",
      "**The test is never the word. It is what the clause is doing.** Names the time → temporal. Is the question → Futur I.",
      "**When in doubt, budem.** Trap 2 is the only harmless one on the wall, and it is the safe way to be unsure.",
      "**Check two things: #1 and #8.** A Futur I where it's banned, and a participle that stopped agreeing.",
      "**U21 and U22 interlock.** U21: an embedded question keeps its tense. U22: including a future. It was never two rules.",
      "**Row 5 of the scaffold is the one that proves you've got it** — it's the only row that forces a Futur II.",
    ],
    connects: [
      { label: "Aspect in the past — the prerequisite", lessonId: "b1u22l1" },
      { label: "The ban and the fork", lessonId: "b1u22l2" },
      { label: "čim, dok ne, and the ako split", lessonId: "b1u22l3" },
      { label: "Embedded questions — where the exception comes from", lessonId: "b1u21l3" },
    ],
    selfCheck: [
      { q: "»___ , kupit ćemo ulaznice.« (as soon as we arrive)", a: "Čim stignemo — perfective, so the present, and the ban applies to čim exactly as to kad." },
      { q: "Why is «Pitao me kad ću doći» correct when «Kad ću doći, javit ću ti» is not?", a: "The first kad is an embedded question — the clause IS what he asked. The second names the time of the calling, so it's a temporal clause and the ban applies." },
      { q: "Which trap on the wall is not an error?", a: "Trap 2 — «kad budem došao». Heavy, because doći is perfective and the present is shorter, but correct." },
      { q: "»Dok ___ ___ sutra, ti razgledaj grad.« (raditi, ja — a woman speaking)", a: "budem radila — imperfective so Futur II, participle agreeing with a female speaker." },
      { q: "What two things should you check before handing in the writing task?", a: "Every time clause for a stray Futur I (trap 1), and every Futur II for participle agreement (trap 8)." },
    ],
  },
};
