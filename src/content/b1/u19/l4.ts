import type { Lesson } from "@/types/content";

/**
 * B1 U19 L4 — Ljudi s kojima radim (koji in the instrumental + the full plural)
 * Spec: curriculum/B1/unit-19.md · grammar-reference §17 (full table) + §4
 * (definite adjectives — novim / novom / novima) + §14 (s/sa for company, bare
 * instrumental for means).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The arc closes here. L1 fixed the case at nominative, L2 let the verb choose,
 * L3 let the preposition choose — and today the last case arrives and the table
 * is assembled on screen for the first time. The lesson is deliberately front-
 * loaded with good news: in the plural, dative, locative and instrumental are
 * **one word**, `kojima`, for all three genders. Three cases, one form. That is
 * the single largest reduction in workload the unit offers and it is taught as a
 * gift rather than as a fourth thing to memorize.
 *
 * The one genuinely new decision is whether a preposition appears in front of
 * `koji` at all. §14's split does the work: `s/sa` for company (*ljudi s kojima
 * radim*), bare instrumental for means (*vlak kojim putujem* — no preposition
 * anywhere). U12 taught exactly this split on ordinary nouns; it now decides the
 * shape of a relative clause.
 *
 * Level-compliance pass 2026-07-29: all 7 headwords greped against the carded
 * dump — rasprava, argument, grupa, generacija, odnos, jednostavan, netko are
 * all absent (free). Support vocabulary verified carded: ljudi a1u3l3 · kolega
 * a2u12l1 · kolegica a2u12l1 · ured a2u12l1 · tim a2u12l1 · sastanak a2u12l1 ·
 * zajedno a2u12l1 · posao a1u5l3 · vlak a2u9l4 · autobus a1u5l3 · bicikl
 * a2u12l2 · putovati a1u8l2 · kava a1u1l1 · piti a1u4l3 · pet a1u2l4 · dobar
 * a1u2l3 · brz a2u13l4 · mlad a1u3l3 · star a1u3l3 · student a1u1l3 · djeca
 * a1u3l3 · obitelj a1u3l1 · prijatelj a1u1l4 · susjed a2u10l1 · govoriti a1u2l5
 * · pisati a1u8l2 · nekoliko a2u13l2 · fakultet a1u5l3 · iskustvo a2u12l5.
 * `problem`, `svi`, `sve` and `jer` are uncarded-but-live (the spec's own free
 * list); `raditi` and `znati` are uncarded as headwords but massively live.
 * Earlier-in-unit vocabulary (tema, istina, smatrati, mišljenje, možda, naravno
 * from L1; razlog, primjer, ideja, poznavati, vjerovati from L2; o, stav,
 * promet, važan, jasan, država, svijet, tvrditi from L3) reports `absent` only
 * because b1u19 is not yet registered in src/content/index.ts.
 *
 * Authoring standard imposed by the spec and honoured item by item: **every
 * drill item must be answerable only by asking both questions — gender+number
 * from the antecedent, case from the relative clause — and no item may be
 * solvable by copying the antecedent's ending.** Each of the sixteen scored
 * items below was written so that the antecedent's own ending is either a
 * different case from the answer or visibly unhelpful:
 *   s11 ljude (ACC pl) → o kojima (LOC pl) · s12 Ljudi (NOM pl) → s kojima (INS
 *   pl) · s13 kolegica (NOM f) → s kojom (INS f) · s14 Vlak (NOM m) → kojim
 *   (bare INS m) · s15 ljude (ACC pl) → o kojima · s16 grupa (NOM f) → u kojoj
 *   (LOC f) · s17 Ljudi (NOM pl) → s kojima · s08/s24 likewise.
 *
 * Deviation 1 logged: the spec's *U grupi u kojoj radim ima pet ljudi.* is kept
 * verbatim as a teach example but is NOT used as a drill answer, because its
 * antecedent (`grupi`, locative) carries the same ending shape as the answer and
 * would be copyable. The drill version moves the antecedent to the nominative —
 * *Grupa u kojoj radim ima pet ljudi.* — so the learner has to re-derive the
 * locative rather than echo it.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U19 cut-outs exist.
 */
export const b1u19l4: Lesson = {
  id: "b1u19l4",
  unitId: "b1u19",
  title: "Ljudi s kojima radim",
  titleEn: "The people I work with — koji in the instrumental & the full plural",
  grammarTags: ["relative-koji", "instrumental", "plural", "declension-table"],
  estMinutes: 24,
  vocab: [
    { id: "b1u19.rasprava", hr: "rasprava", en: "discussion / debate — rasprava o nečemu", pos: "noun", gender: "f", icon: "🗣️", exampleHr: "Rasprava o prometu je važna.", exampleEn: "The discussion about traffic is important." },
    { id: "b1u19.argument", hr: "argument", en: "argument / point — the reason you give, not the quarrel", pos: "noun", gender: "m", icon: "♟️", exampleHr: "Imaš dobar argument.", exampleEn: "You have a good argument." },
    { id: "b1u19.grupa", hr: "grupa", en: "group (LOC u grupi)", pos: "noun", gender: "f", icon: "👥", exampleHr: "Grupa ima pet ljudi.", exampleEn: "The group has five people." },
    { id: "b1u19.generacija", hr: "generacija", en: "generation", pos: "noun", gender: "f", icon: "👨‍👩‍👧", exampleHr: "Ovo je generacija koja sve zna.", exampleEn: "This is the generation that knows everything." },
    { id: "b1u19.odnos", hr: "odnos", en: "relationship / relation — odnos s nekim", pos: "noun", gender: "m", icon: "🔗", exampleHr: "Imamo dobar odnos.", exampleEn: "We have a good relationship." },
    { id: "b1u19.jednostavan", hr: "jednostavan", en: "simple (jednostavna, jednostavno — definite jednostavni)", pos: "adj", icon: "🟢", exampleHr: "To je jednostavan argument.", exampleEn: "That's a simple argument." },
    { id: "b1u19.netko", hr: "netko", en: "someone / anyone (ACC nekoga, DAT nekome)", pos: "pron", icon: "🙋", exampleHr: "Netko govori o prometu.", exampleEn: "Someone is talking about the traffic." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Ljudi s kojima radim",
      subtitle: "Three cases left in the plural — and they are all the same word. After four lessons of Croatian asking for more, it is finally giving something back.",
      emoji: "🤝",
      items: [
        { emoji: "🤝", label: "Instrumental", hint: "kojim · kojom · kojima" },
        { emoji: "🚆", label: "s + društvo ‖ goli INS", hint: "does a preposition appear at all?" },
        { emoji: "📋", label: "Cijela tablica", hint: "six cases, assembled" },
        { emoji: "🎁", label: "kojima", hint: "DAT = LOC = INS in the plural" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Zadnji padež",
      subtitle: "One new set of forms, one old §14 decision about whether a preposition shows up, and then the table closes.",
      emoji: "🤝",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L3 u kojem / kojem · U12 s kolegom ‖ vlakom" },
        { emoji: "🃏", label: "New words", hint: "groups, generations, arguments" },
        { emoji: "⚙️", label: "Three teach slides", hint: "INS · the full table · koji ‖ koje" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's prepositions, and a split from Unit 12",
      items: [
        {
          prompt: "L3: »Grad ___ živim je lijep.«",
          options: ["u kojem", "koji … u", "u koji"],
          correctIndex: 0,
          explanation: "The preposition marches to the front, and u for location takes the locative: u kojem. Nothing may be left stranded at the end.",
        },
        {
          prompt: "L3: »Imam prijatelja ___ svaki dan pišem.«",
          options: ["kojem", "o kojem", "u kojem"],
          correctIndex: 0,
          explanation: "Dative — pisati komu? — and the dative takes no preposition at all. Bare kojem, with nothing standing to its left.",
        },
        {
          prompt: "U12: which pair is correct?",
          options: [
            "Idem na posao s kolegom. ‖ Idem na posao vlakom.",
            "Idem na posao kolegom. ‖ Idem na posao s vlakom.",
            "Idem na posao s kolegom. ‖ Idem na posao s vlakom.",
          ],
          correctIndex: 0,
          explanation: "Company takes s (s kolegom — with a colleague). Means of transport takes the bare instrumental with no preposition (vlakom — by train). Hold on to that split: in ten slides it decides whether anything stands in front of koji.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Groups, generations and the things they argue about",
      vocabIds: [
        "b1u19.rasprava", "b1u19.argument", "b1u19.grupa", "b1u19.generacija",
        "b1u19.odnos", "b1u19.jednostavan", "b1u19.netko",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "S kim radim? — instrumental jednine 🤝",
      body:
        "The last case, and the forms are exactly where you would guess by now:\n\n**kojim** (m and n) · **kojom** (f) · **kojima** (the whole plural)\n\nStill `nov` with a new stem — *novim* → **kojim**, *novom* → **kojom**, *novima* → **kojima**. Five lessons, one paradigm, borrowed whole from §4.\n\nWhat is actually new today is not a form. It is a question you have to ask **before** you write the form: **does a preposition appear at all?**\n\n**s / sa + INS — company.** Somebody or something is *with* you.\n\n*kolegica **s kojom** pijem kavu* — the colleague I have coffee with\n*ljudi **s kojima** radim* — the people I work with\n\n**Bare INS — means.** The thing you travel by, write with, do something through. No preposition anywhere — that is §14's transport rule from U12, and it survives intact into the relative clause.\n\n*vlak **kojim** putujem* — the train I travel by\n*autobus **kojim** idem na posao* — the bus I take to work\n\nEnglish blurs these two: *with* covers both *with a colleague* and, loosely, *going with the train*. Croatian does not. Ask whether the noun is **keeping you company** or **being used** — company gets `s`, use gets nothing.\n\nAnd `sa` rather than `s` only before **s, š, z, ž** and before *mnom*. None of today's forms trigger it: *s kojim*, *s kojom*, *s kojima*, always plain `s`.",
      table: {
        caption: "koji u instrumentalu — i pitanje ide li prijedlog ispred",
        headers: ["rod / broj", "oblik", "s + INS — društvo", "goli INS — sredstvo"],
        colCase: [null, "INS", "INS", "INS"],
        rows: [
          ["m jd.", "kojim", "kolega s kojim radim", "vlak kojim putujem"],
          ["ž jd.", "kojom", "kolegica s kojom pijem kavu", "olovka kojom pišem"],
          ["s jd.", "kojim", "dijete s kojim se igram — rijetko", "auto kojim idem"],
          ["množina — svi rodovi", "kojima", "ljudi s kojima radim", "bicikli kojima idemo"],
          ["usporedba: nov (§4)", "novim / novom / novima", "isti nastavci", "koj- umjesto nov-"],
        ],
      },
      diagram: {
        kind: "contrast",
        left: {
          title: "s + INS — društvo",
          emoji: "🤝",
          caseId: "INS",
          lines: [
            { hr: "Ljudi s kojima radim su dobri.", en: "The people I work with are good. (they are with me)" },
            { hr: "To je kolegica s kojom pijem kavu.", en: "That's the colleague I have coffee with." },
          ],
        },
        right: {
          title: "goli INS — sredstvo",
          emoji: "🚆",
          caseId: "INS",
          lines: [
            { hr: "Vlak kojim putujem je brz.", en: "The train I travel by is fast. (it is used, not company)" },
            { hr: "Autobus kojim idem na posao je star.", en: "The bus I take to work is old." },
          ],
        },
      },
      examples: [
        { hr: "Ljudi s kojima radim su dobri.", en: "The people I work with are good.", note: "Company → s, and the plural instrumental is kojima. Notice the antecedent ljudi is nominative and the relative pronoun is instrumental — two different cases in one breath, as usual." },
        { hr: "To je kolegica s kojom pijem kavu.", en: "That's the colleague I have coffee with.", note: "kolegica is feminine, so s kojom. English strands that «with» at the end; Croatian puts it in front, exactly as in L3." },
        { hr: "Vlak kojim putujem je brz.", en: "The train I travel by is fast.", note: "Means, not company — so no preposition at all. This is the one place in the whole unit where nothing stands in front of koji and the case is still not nominative." },
        { hr: "Imam dobar odnos s ljudima s kojima radim.", en: "I have a good relationship with the people I work with.", note: "Two instrumentals in a row: s ljudima on the noun, s kojima on the pronoun. odnos s nekim is the collocation worth keeping whole." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Cijela tablica — i poklon u množini 📋",
      body:
        "Six cases, four columns. This is the whole of `koji`, and every cell in it has already been taught in this unit:\n\nRead the plural column and something jumps out. **DAT, LOC and INS are all `kojima`** — one form doing three jobs, in all three genders. This is not an accident and it is not a shortcut you are being allowed to take: it is the actual Croatian plural, the same collapse that gives *novima*, *ljudima*, *gradovima*. Three cases you would otherwise have to keep apart have already merged.\n\nSo in the plural you do not have to decide between dative, locative and instrumental at all. You write **kojima**, and whatever is standing in front of it — nothing, `o`, `s` — tells the reader which of the three you meant:\n\n*ljudi **kojima** pišem* — nothing in front → dative, the people I write **to**\n*ljudi **o kojima** govoriš* — `o` in front → locative, the people you're talking **about**\n*ljudi **s kojima** radim* — `s` in front → instrumental, the people I work **with**\n\nOne word, three sentences, three different meanings, and the preposition carries all of it. That is a large amount of grammar you are simply not required to produce.\n\nThe singular is where the work still lives — six distinct forms in the masculine, five in the feminine — and the two questions from L1 still run the whole thing: **gender and number from the antecedent, case from the relative clause.** From today on both questions have hard answers every single time.",
      table: {
        caption: "koji — cijela deklinacija · DAT = LOC = INS = kojima u množini",
        headers: ["padež", "muški jd.", "ženski jd.", "srednji jd.", "množina (m / ž / s)"],
        rows: [
          ["NOM · L1", "koji", "koja", "koje", "koji / koje / koja"],
          ["GEN · L2", "kojeg(a)", "koje", "kojeg(a)", "kojih"],
          ["DAT · L3", "kojem(u)", "kojoj", "kojem(u)", "kojima"],
          ["ACC · L2", "koji (neživo) · kojeg(a) (živo)", "koju", "koje", "koje / koje / koja"],
          ["LOC · L3", "kojem(u)", "kojoj", "kojem(u)", "kojima"],
          ["INS · danas", "kojim", "kojom", "kojim", "kojima"],
        ],
      },
      diagram: {
        kind: "bracket",
        groups: [
          { label: "kojima · ništa ispred", rule: "→ dativ (komu?)", example: "ljudi kojima pišem — the people I write to", caseId: "DAT" },
          { label: "kojima · o / u / na ispred", rule: "→ lokativ (gdje? o komu?)", example: "ljudi o kojima govoriš — the people you're talking about", caseId: "LOC" },
          { label: "kojima · s / sa ispred", rule: "→ instrumental (s kim?)", example: "ljudi s kojima radim — the people I work with", caseId: "INS" },
        ],
      },
      examples: [
        { hr: "Ne poznajem ljude o kojima govoriš.", en: "I don't know the people you're talking about.", note: "ljude is accusative — object of poznajem — and kojima is locative. The two endings have nothing to do with each other, and this item exists to prove it." },
        { hr: "Ovo su ljudi kojima svaki dan pišem.", en: "These are the people I write to every day.", note: "Same word, no preposition → dative. Look left of kojima and the sentence has already told you which case is running." },
        { hr: "Grupa u kojoj radim ima pet ljudi.", en: "The group I work in has five people.", note: "Singular feminine locative — u kojoj — and pet ljudi takes the genitive plural from U13. Two old rules and one new pronoun in eight words." },
        { hr: "Rasprava o kojoj svi govore je jednostavna.", en: "The discussion everyone is talking about is simple.", note: "rasprava is feminine, o is always locative → o kojoj. jednostavna agrees with rasprava, not with koji — two separate agreements running side by side." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Množina: koji ‖ koje 👥",
      body:
        "The plural gave you three cases for free. It charges you for exactly one thing in return, and it is worth naming clearly because learners meet it constantly.\n\n**Nominative plural** still splits by gender: **koji** (m) · **koje** (ž) · **koja** (s).\n**Accusative plural** splits differently: **koje** (m) · **koje** (ž) · **koja** (s).\n\nSo in the masculine plural — by far the most common case of the two, because groups of people are masculine by default in Croatian — the subject form and the object form are **different words**:\n\n*ljudi **koji** rade* — the people **who** work · they are doing it\n*ljude **koje** poznajem* — the people **whom** I know · it is being done to them\n\nEnglish has the same distinction and has almost entirely abandoned it: *who* versus *whom*, with *who* eating the other one alive. Croatian has not, and will not.\n\nThe test is the one from L1, unchanged. Look inside the relative clause and ask: **is koji doing the verb, or is the verb being done to koji?**\n\n*ljudi koji **rade*** — they do the working → subject → **koji**\n*ljude koje **poznajem*** — I do the knowing, to them → object → **koje**\n\nAnd note what does *not* help: the antecedent. *ljudi* and *ljude* are two forms of the same noun, and neither of them tells you a thing about the pronoun that follows. Cover the antecedent's ending and the answer is still there, inside the clause.",
      table: {
        caption: "množina — subjekt ‖ objekt",
        headers: ["", "muški", "ženski", "srednji"],
        rows: [
          ["NOM — koji radi?", "koji", "koje", "koja"],
          ["ACC — koga poznajem?", "koje", "koje", "koja"],
          ["primjer NOM", "ljudi koji rade", "žene koje rade", "djeca koja se igraju"],
          ["primjer ACC", "ljude koje poznajem", "žene koje poznajem", "djecu koju poznajem — zbirna imenica"],
          ["DAT = LOC = INS", "kojima", "kojima", "kojima"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "koji ‖ koje — subjekt i objekt u množini",
        text: "**Ljudi koji rade su umorni.** — *koji* does the working. Subject → NOM pl m → **koji**.\n**Ljude koje poznajem su dobri ljudi.** ❌ — careful, that sentence is broken; the object version needs its own frame:\n**Ne poznajem ljude koje si vidio.** — *koje* is what I know. Object → ACC pl m → **koje**.\n\nThe antecedent is no help: *ljudi* and *ljude* are the same noun, and the pronoun after them takes its case from **its own clause**, never from them.\n\nIn the feminine the two collapse anyway (*koje* both times) — so the fork only ever bites in the masculine plural, which is exactly where you will need it most.",
      },
      examples: [
        { hr: "Ovo je generacija koja sve zna.", en: "This is the generation that knows everything.", note: "generacija is feminine singular, and koja is the subject of zna → feminine nominative. A singular noun that names a whole group is still singular." },
        { hr: "Ljudi koji rade u mojoj grupi su mladi.", en: "The people who work in my group are young." , note: "Subject inside the relative clause → nominative plural masculine → koji. Swap the verb for poznajem and it becomes koje." },
        { hr: "Ne poznajem ljude koje si vidio.", en: "I don't know the people you saw.", note: "Object of vidio → accusative plural masculine → koje, and the clitic si sits in slot two of the relative clause, right behind koje — the U8 rule from L2." },
        { hr: "Netko u našoj grupi ima jednostavan argument.", en: "Someone in our group has a simple argument.", note: "netko is always singular and always masculine for agreement, which is why ima and not imaju. Its accusative is nekoga, its dative nekome." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: which job is kojima doing, and does a preposition show up?",
      items: [
        {
          prompt: "»Ljudi ___ radim su dobri.« (The people I work with are good.)",
          options: ["s kojima", "kojima", "o kojima"],
          correctIndex: 0,
          explanation: "Company → s + instrumental, and the plural instrumental is kojima. Bare kojima would be the dative — the people I write to — and o kojima the locative.",
        },
        {
          prompt: "»Vlak ___ putujem je brz.« (The train I travel by is fast.)",
          options: ["kojim", "s kojim", "u kojem"],
          correctIndex: 0,
          explanation: "Means of transport takes the bare instrumental — no preposition at all, exactly as in putujem vlakom. s kojim would make the train your travelling companion.",
        },
        {
          prompt: "In »ljudi kojima svaki dan pišem«, which case is kojima?",
          options: ["dativ", "instrumental", "lokativ"],
          correctIndex: 0,
          explanation: "Nothing is standing in front of it and pisati wants an indirect object → dative. The form would be identical for all three; the preposition (or its absence) is the only signal.",
        },
        {
          prompt: "»___ rade u mojoj grupi su mladi.« (The people who work in my group are young.)",
          options: ["Ljudi koji", "Ljude koje", "Ljudi koje"],
          correctIndex: 0,
          explanation: "koji is the subject of rade → nominative plural masculine → koji, and the antecedent is therefore also the subject of su → ljudi. Both halves are nominative here for different reasons.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Vježba",
      subtitle: "Nothing below can be solved by copying the ending in front of it. Every item makes you ask both questions.",
      emoji: "🧩",
      items: [
        { emoji: "🎯", label: "The three jobs of kojima", hint: "match · mc ×2" },
        { emoji: "✏️", label: "Fills", hint: "s kojom · kojim · o kojima · u kojoj" },
        { emoji: "🧱", label: "Build it", hint: "reorder · type ×2" },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each phrase to the case koji is in — and to what put it there",
      pairs: [
        { a: "ljudi s kojima radim", b: "s ispred → instrumental" },
        { a: "ljudi o kojima govoriš", b: "o ispred → lokativ" },
        { a: "ljudi kojima pišem", b: "ništa ispred → dativ" },
        { a: "ljudi koji rade", b: "subjekt u množini → nominativ" },
        { a: "ljude koje poznajem", b: "objekt u množini → akuzativ" },
      ],
    },
    {
      id: "s11",
      type: "mc",
      prompt: "»Ne poznajem ljude ___ govoriš.« (I don't know the people you're talking about.)",
      options: ["o kojima", "s kojima", "koje"],
      correctIndex: 0,
      explanation: "govoriti o + locative, and the plural locative is kojima. The antecedent ljude is accusative — object of poznajem — and it has nothing to say about the pronoun's case.",
    },
    {
      id: "s12",
      type: "mc",
      prompt: "»To je tim ___ radim već pet godina.« (That's the team I've been working with for five years.)",
      options: ["s kojim", "kojim", "u kojim"],
      correctIndex: 0,
      explanation: "A team keeps you company rather than being used, so s + instrumental, and tim is masculine singular → s kojim. Bare kojim would make the team a means of transport.",
    },
    {
      id: "s13",
      type: "fill",
      text: "To je kolegica ___ pijem kavu.",
      blanks: [["s kojom"]],
      translation: "That's the colleague I have coffee with.",
      wordBank: ["s kojom", "s kojim", "kojom"],
      explanation: "Company → s, and kolegica is feminine singular → s kojom. English leaves «with» at the end; Croatian will not.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Vlak ___ putujem je brz.",
      blanks: [["kojim"]],
      translation: "The train I travel by is fast.",
      wordBank: ["kojim", "s kojim", "u kojem"],
      explanation: "Means, not company — the bare instrumental, with no preposition anywhere. Same rule as putujem vlakom from U12.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Ne poznajem ljude ___ govoriš.",
      blanks: [["o kojima"]],
      translation: "I don't know the people you're talking about.",
      wordBank: ["o kojima", "s kojima", "kojima"],
      explanation: "govoriti o + LOC → o kojima. Cover the -e on ljude before you choose; it is the wrong case and it is there on purpose.",
    },
    {
      id: "s16",
      type: "fill",
      text: "Grupa ___ radim ima pet ljudi.",
      blanks: [["u kojoj"]],
      translation: "The group I work in has five people.",
      wordBank: ["u kojoj", "s kojom", "u koju"],
      explanation: "raditi sits still — gdje? — so u takes the locative, and grupa is feminine → u kojoj. u koju would mean you are walking into the group right now.",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Ljudi", "s", "kojima", "radim", "su", "dobri"],
      answers: ["Ljudi s kojima radim su dobri"],
      en: "The people I work with are good.",
      explanation: "s and kojima travel together to the front of the relative clause. ✗ Ljudi kojima radim s su dobri — Croatian never leaves the preposition behind.",
    },
    {
      id: "s18",
      type: "type",
      prompt: "»The people I work with are good.« (in Croatian)",
      answers: [
        "Ljudi s kojima radim su dobri.",
        "Ljudi s kojima radim su dobri",
        "Ljudi s kojima radim su dobri ljudi.",
      ],
      hint: "company takes s, and the plural is one word for three cases",
      explanation: "Ljudi s kojima radim su dobri. — plural instrumental kojima, with s in front because they are company rather than a means.",
    },
    {
      id: "s19",
      type: "type",
      prompt: "»That's the colleague I have coffee with.« (in Croatian)",
      answers: [
        "To je kolegica s kojom pijem kavu.",
        "To je kolegica s kojom pijem kavu",
        "To je kolegica s kojom pijem kavu.",
        "Ovo je kolegica s kojom pijem kavu.",
      ],
      hint: "kolegica is feminine — and the «with» belongs at the front",
      explanation: "To je kolegica s kojom pijem kavu. — feminine instrumental kojom after s. Move the English «with» off the end before you start.",
    },
    {
      id: "s20",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Two dictations that hang on a single unstressed s, then describe the people you actually work or study with.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "s kojima · o kojima" },
        { emoji: "🎤", label: "Your group", hint: "three sentences, two relative clauses" },
        { emoji: "🔗", label: "Flashbacks", hint: "U12 · U13 · §4" },
      ],
    },
    {
      id: "s21",
      type: "listen-type",
      tts: "Ljudi s kojima radim su dobri.",
      explanation: "Ljudi s kojima radim su dobri. — The people I work with are good. The s is a single unstressed consonant leaning on kojima; listen for skojima as one word.",
    },
    {
      id: "s22",
      type: "listen-type",
      tts: "Ne poznajem ljude o kojima govoriš.",
      explanation: "Ne poznajem ljude o kojima govoriš. — I don't know the people you're talking about. Two different cases in six words: ljude accusative, kojima locative.",
    },
    {
      id: "s23",
      type: "speak",
      targetHr: "Ljudi s kojima radim su dobri. Imam dobar odnos s grupom u kojoj radim.",
      targetEn: "the people you work or study with — The people I work with are good. I have a good relationship with the group I work in.",
      phonetic: "LYOO-dee s KOY-ee-mah RAH-deem soo DOH-bree. EE-mahm DOH-bar OD-nos s GROO-pom oo KOY-oy RAH-deem",
    },
    {
      id: "s24",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the split that decides whether a preposition appears",
      items: [
        {
          prompt: "U12 again, one level down: »Bicikl ___ idem na fakultet je nov.«",
          options: ["kojim", "s kojim", "na kojem"],
          correctIndex: 0,
          explanation: "A bicycle you ride is a means → bare instrumental, no preposition. idem biciklom → bicikl kojim idem. The rule never changed; only the pronoun is new.",
        },
        {
          prompt: "§4: which adjective form is kojima copying?",
          options: ["novima", "novim", "novoj"],
          correctIndex: 0,
          explanation: "novima — the plural DAT/LOC/INS of the definite adjective, which collapses into one form exactly as kojima does. Five lessons, one paradigm, no new endings anywhere.",
        },
        {
          prompt: "Listen — is the speaker describing company or a means?",
          tts: "Autobus kojim idem na posao je star.",
          options: ["a means", "company", "a place"],
          correctIndex: 0,
          explanation: "Autobus kojim idem na posao je star. — The bus I take to work is old. No preposition in front of kojim, so it is the bare instrumental of means. With an s it would be a bus riding along beside you.",
        },
      ],
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**The last case.** **kojim** (m/n) · **kojom** (f) · **kojima** (the whole plural) — *novim / novom / novima* with koj- on the front, so nothing new was memorized today.\n\n**The question that comes first** is not which ending, but whether a preposition shows up at all. **s / sa** for company — *ljudi **s kojima** radim*, *kolegica **s kojom** pijem kavu*. **Bare instrumental** for means — *vlak **kojim** putujem*, *autobus **kojim** idem na posao*, with nothing standing in front. That is §14's split from Unit 12, now deciding the shape of a whole clause.\n\n**The gift.** In the plural, **DAT = LOC = INS = kojima**, in all three genders. One word, three jobs, and the thing standing in front of it tells you which one is running: nothing → dative (*ljudi kojima pišem*), `o` → locative (*ljudi o kojima govoriš*), `s` → instrumental (*ljudi s kojima radim*).\n\n**The one bill the plural sends.** Nominative and accusative still split: *ljudi **koji** rade* (they do it) ‖ *ljude **koje** poznajem* (it is done to them). The antecedent cannot help you — *ljudi* and *ljude* are the same noun.\n\n**The table is closed.** Six cases, four columns, every cell taught inside this unit. And the two questions from L1 still run all of it: gender and number from the antecedent, case from the relative clause.\n\nWords tonight: rasprava, argument, grupa, generacija, odnos, jednostavan, netko.\n\nNext: no new machinery at all — all six cases at once, in an actual argument.",
      vocabIds: [
        "b1u19.rasprava", "b1u19.argument", "b1u19.grupa", "b1u19.generacija",
        "b1u19.odnos", "b1u19.jednostavan", "b1u19.netko",
      ],
    },
  ],
  srsCloze: [
    { front: "Ljudi ___ radim su dobri. (the people I work WITH)", answers: ["s kojima"], back: "s kojima — company takes s, and the plural instrumental is kojima.", tts: "Ljudi s kojima radim su dobri." },
    { front: "To je kolegica ___ pijem kavu. (WITH whom I have coffee)", answers: ["s kojom"], back: "s kojom — feminine instrumental after s.", tts: "To je kolegica s kojom pijem kavu." },
    { front: "množina: DAT = LOC = INS → ___", answers: ["kojima"], back: "kojima — one form, three cases, all three genders. Exactly like novima.", tts: "Ljudi s kojima radim su dobri." },
    { front: "ljudi ___ rade ‖ ljude ___ poznajem", answers: ["koji / koje", "koji koje"], back: "koji (subject, NOM pl m) ‖ koje (object, ACC pl m). The antecedent is no help — same noun both times.", tts: "Ne poznajem ljude koje si vidio." },
    { front: "Vlak ___ putujem je brz. (means — no preposition!)", answers: ["kojim"], back: "kojim — bare instrumental for means of transport, exactly as in putujem vlakom.", tts: "Vlak kojim putujem je brz." },
    { front: "Ne poznajem ljude ___ govoriš. (the people you talk ABOUT)", answers: ["o kojima"], back: "o kojima — o is always locative, and the plural locative is kojima.", tts: "Ne poznajem ljude o kojima govoriš." },
    { front: "koji, ženski rod, instrumental → ___", answers: ["kojom"], back: "kojom — the shape of novom's instrumental partner. Kolegica s kojom pijem kavu.", tts: "To je kolegica s kojom pijem kavu." },
    { front: "s + ___ (which case?)", answers: ["instrumental", "INS"], back: "Instrumental — but only for company. For a means, the instrumental comes bare, with no s at all.", tts: "Ljudi s kojima radim su dobri." },
    { front: "discussion / debate (f) = ___", answers: ["rasprava"], back: "rasprava (f) — rasprava o nečemu. Rasprava o prometu je važna.", tts: "Rasprava o prometu je važna." },
    { front: "relationship / relation (m) = ___", answers: ["odnos"], back: "odnos (m) — odnos s nekim. Imam dobar odnos s ljudima s kojima radim.", tts: "Imam dobar odnos s ljudima s kojima radim." },
    { front: "someone / anyone = ___", answers: ["netko"], back: "netko — always singular, ACC nekoga, DAT nekome. Netko govori o prometu.", tts: "Netko govori o prometu." },
  ],
  notes: {
    inOneSentence: {
      en: "The instrumental of koji is kojim / kojom / kojima, and the real decision it forces is whether a preposition appears at all — s/sa for company, nothing at all for a means — while in the plural dative, locative and instrumental have already collapsed into the single form kojima for every gender.",
      exampleHr: "Ljudi s kojima radim znaju ljude o kojima govoriš.",
    },
    deepDive: [
      {
        title: "Company or means — the question that comes before the ending",
        body:
          "Every other case in this unit asked one question: which ending? The instrumental asks a different one first, and if you answer it wrong the ending will not save you.\n\n**Is the noun keeping you company, or are you using it?**\n\nCompany takes **s / sa**. Use takes **nothing** — the bare instrumental, the case ending doing the whole job on its own.\n\n*Idem na posao **s kolegom**.* — with a colleague, who is a person walking beside me\n*Idem na posao **vlakom**.* — by train, which is a thing I am using\n\nEnglish papers over the difference because *with* is enormously flexible: *I went with my colleague* and *I wrote with a pen* use the same word, and *I went by train* only swaps prepositions because English happens to have one lying around. Croatian marks the distinction in the grammar itself, by the presence or absence of `s`.\n\nInside a relative clause the same decision decides what the clause looks like:\n\n*kolega **s kojim** radim* — a person → company → s appears\n*vlak **kojim** putujem* — a thing being used → means → nothing appears\n\nThe bare-instrumental relative clause is worth staring at, because it is the only structure in the whole unit where `koji` stands with **nothing** in front of it and is still not in the nominative. Learners read *vlak kojim putujem* and want it to be *vlak koji putujem*, because bare usually means subject. It does not here: the ending -im is carrying the entire message.\n\nA rough test that holds up well: **could the noun get bored?** People, colleagues, friends, dogs — company, take `s`. Trains, buses, pens, bicycles — means, take nothing. It is not a rule a grammarian would write down, but it produces the right answer nearly every time at this level.\n\nOne genuine edge worth knowing rather than drilling: *putujem **s prijateljem** vlakom* — I travel with a friend, by train. Both instrumentals, in one sentence, one with `s` and one without, because they are doing different jobs.",
        table: {
          caption: "s + INS ‖ goli INS — isti padež, dvije uloge",
          headers: ["uloga", "prijedlog", "imenica (U12)", "odnosna rečenica"],
          rows: [
            ["društvo — a person or animal is with you", "s / sa", "Idem s kolegom.", "kolega s kojim radim"],
            ["društvo — plural", "s / sa", "Radim s ljudima.", "ljudi s kojima radim"],
            ["sredstvo — transport", "—", "Putujem vlakom.", "vlak kojim putujem"],
            ["sredstvo — tool", "—", "Pišem olovkom.", "olovka kojom pišem"],
            ["oboje u jednoj rečenici", "s + —", "Putujem s prijateljem vlakom.", "prijatelj s kojim putujem vlakom"],
          ],
        },
      },
      {
        title: "kojima — one form, three cases, and why that is not laziness",
        body:
          "In the plural, `koji` has **one** form for the dative, the locative and the instrumental: **kojima**, in all three genders. It looks like a gap in the system. It is not — it is the system.\n\nCroatian nouns and adjectives do exactly the same thing, and they have been doing it for a very long time:\n\n- *ljudima* — to the people (DAT), about the people (LOC), with the people (INS)\n- *gradovima* — to the cities, in the cities, by the cities\n- *novima* — to the new ones, about the new ones, with the new ones\n\nThe three cases were distinct in Old Church Slavonic and merged in the plural across most of the South Slavic area. Modern Croatian preserves the split in the singular (*gradu* DAT/LOC but *gradom* INS) and has given it up entirely in the plural. `koji`, being an adjective in disguise, inherits the merger without comment.\n\nWhat this means in practice is that **the plural is easier than the singular**, which is the reverse of what a learner expects and worth saying out loud. Six singular forms in the masculine; four in the plural, two of which (*kojih*, *kojima*) cover four cases between them.\n\nAnd because one word covers three jobs, the **preposition becomes the carrier of meaning**, not a decoration:\n\n*Ljudi **kojima** pišem su moji prijatelji.* — I write **to** them. Dative. Nothing in front.\n*Ljudi **o kojima** pišem su moji prijatelji.* — I write **about** them. Locative. `o` in front.\n*Ljudi **s kojima** pišem su moji prijatelji.* — I write **with** them, side by side. Instrumental. `s` in front.\n\nThree completely different situations, one identical pronoun, and the whole distinction resting on a syllable — or on nothing at all. This is why the L3 habit of looking **left** of `koji` before deciding anything is not a beginner's crutch you will grow out of. In the plural it is the only available evidence.",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "ništa ispred", rule: "dativ — komu?", example: "ljudi kojima pišem", caseId: "DAT" },
            { label: "o · u · na ispred", rule: "lokativ — o komu? gdje?", example: "ljudi o kojima govoriš · gradovi u kojima živimo", caseId: "LOC" },
            { label: "s · sa ispred", rule: "instrumental — s kim?", example: "ljudi s kojima radim", caseId: "INS" },
          ],
        },
      },
      {
        title: "koji ‖ koje: the last fork, and the one the antecedent cannot solve",
        body:
          "The plural charges you for its generosity in exactly one place. Nominative and accusative do **not** merge:\n\n| | m | ž | s |\n|---|---|---|---|\n| NOM | koji | koje | koja |\n| ACC | koje | koje | koja |\n\nThe feminine and neuter are identical in both rows, so the fork only ever bites in the **masculine plural** — which is where it bites hardest, because Croatian defaults mixed groups of people to masculine. *ljudi*, *studenti*, *prijatelji*, *kolege*, *susjedi* — all masculine plural, all extremely common antecedents for a relative clause.\n\n*Ljudi **koji** rade su umorni.* — they do the working. Subject. NOM.\n*Ne poznajem ljude **koje** si vidio.* — you did the seeing, to them. Object. ACC.\n\nHere is why this item is the cleanest test of whether the unit has landed. Look at the antecedents: **ljudi** and **ljude**. Same noun, two cases, and — this is the point — the antecedent's case is set by the **outer** sentence (*ljudi* is the subject of *su umorni*; *ljude* is the object of *ne poznajem*) while the pronoun's case is set by the **inner** clause. They happen to agree in the first sentence and disagree in the second, and neither agreement means anything.\n\nA learner who has internalized the two questions solves both instantly. A learner who has been quietly pattern-matching endings — *ljudi → koji, ljude → koje*, which works here — will be destroyed by the very next sentence:\n\n*Ne poznajem ljude **koji** rade ovdje.* — I don't know the people who work here.\n\n`ljude` is accusative. `koji` is nominative. The endings disagree, and both are correct, because the pronoun is the subject of *rade* no matter what happened to the noun outside. That sentence is the whole unit in seven words.\n\nOne small note on `netko`, today's last word. It is **always singular and always masculine** for agreement purposes, even when the person could obviously be anyone: *Netko **je** ovdje.*, never *netko su*. Its relative clause therefore takes the singular: *netko **koji** to zna*. In practice Croatian usually prefers *onaj koji* or just *tko* for that meaning, so treat *netko* as a subject and object word — *Netko govori.* · *Poznajem nekoga.* — and leave the relative clauses to the nouns.",
        table: {
          caption: "Isti antecedent, različiti padeži — i to je u redu",
          headers: ["rečenica", "antecedent", "koji", "zašto"],
          rows: [
            ["Ljudi koji rade su umorni.", "ljudi — NOM", "koji — NOM", "subjekt vanjske i unutarnje rečenice"],
            ["Ne poznajem ljude koje si vidio.", "ljude — ACC", "koje — ACC", "objekt u obje — slučajnost"],
            ["Ne poznajem ljude koji rade ovdje.", "ljude — ACC", "koji — NOM", "nastavci se ne slažu, i oba su točna"],
            ["Ljudi s kojima radim su dobri.", "ljudi — NOM", "kojima — INS", "vanjski subjekt, unutarnje društvo"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Vlak s kojim putujem je brz.",
        right: "Vlak kojim putujem je brz.",
        why: "A train is a means, not company. The bare instrumental carries the whole meaning — s would make the train travel alongside you as a companion.",
      },
      {
        wrong: "Ljudi kojima radim su dobri.",
        right: "Ljudi s kojima radim su dobri.",
        why: "People are company, so s has to appear. Bare kojima is the dative — the people I write or give something to.",
      },
      {
        wrong: "Ne poznajem ljude koji si vidio.",
        right: "Ne poznajem ljude koje si vidio.",
        why: "koji is the object of vidio, so the accusative plural: koje. koji would make them the ones doing the seeing.",
      },
      {
        wrong: "Ljude koje rade ovdje su dobri.",
        right: "Ljudi koji rade ovdje su dobri.",
        why: "Both words are subjects here — the people are the subject of su, and koji is the subject of rade. Two nominatives, arrived at independently.",
      },
      {
        wrong: "Ljudi s kojim radim su dobri.",
        right: "Ljudi s kojima radim su dobri.",
        why: "kojim is singular. The antecedent is plural, so number comes from it: kojima. The case still comes from s.",
      },
    ],
    memoryHooks: [
      "Could the noun get bored? Then it is company — put s in front. If it could only be used, put nothing.",
      "kojima is one word doing three jobs. Whatever stands to its left — nothing, o, s — is the job description.",
      "kojim · kojom · kojima = novim · novom · novima. Same endings since §4; only the stem changed.",
      "ljudi koji rade ‖ ljude koje poznajem. They do it ‖ it is done to them. The noun in front is no help at all.",
      "Vlak kojim putujem — nothing in front, and still not the nominative. The -im is doing all the work.",
    ],
    connects: [
      { label: "Where s + instrumental came from (Unit 12 L1)", lessonId: "a2u12l1" },
      { label: "The bare instrumental for transport (Unit 12 L2)", lessonId: "a2u12l2" },
      { label: "Back to the locative and dative (Unit 19 L3)", lessonId: "b1u19l3" },
      { label: "Next: all six cases at once, in an argument (Unit 19 L5)", lessonId: "b1u19l5" },
    ],
    selfCheck: [
      { q: "«The people I work with» and «the train I travel by» both end in a preposition in English. Why does only one of them get a preposition in Croatian?", a: "Because Croatian splits company from means. People are company → s kojima. A train is a means → bare kojim, with no preposition at all." },
      { q: "In the plural, how do you tell the dative, locative and instrumental of koji apart?", a: "You don't tell them apart by the form — all three are kojima. You look at what is standing in front: nothing → dative, o/u/na → locative, s/sa → instrumental." },
      { q: "Why is «Ne poznajem ljude koji rade ovdje» correct even though ljude and koji have different endings?", a: "ljude is accusative because it is the object of poznajem, in the outer sentence. koji is nominative because it is the subject of rade, in the relative clause. The two clauses assign case independently." },
      { q: "Which form of koji goes with «ljudi ___ rade» and which with «ljude ___ poznajem»?", a: "koji for the first — subject, nominative plural masculine. koje for the second — object, accusative plural masculine. The feminine collapses both into koje, so the fork only bites in the masculine." },
      { q: "What does kojima have in common with novima, and why does that matter?", a: "Both are the plural DAT/LOC/INS of a definite adjective, collapsed into one form for all three genders. koji has been the adjective nov with a different stem since L1, so no ending in this unit was ever actually new." },
    ],
  },
};
