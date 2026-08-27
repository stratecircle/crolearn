import type { UnitTest } from "@/types/content";

/**
 * B1 U21 unit test (spec: curriculum/B1/unit-21.md § Unit test blueprint).
 * 20 items · 4 sections (vocab 5 → grammar 8 → listening 4 → reading 3)
 * + the guided writing task · pass ≥ 70% (the writing is AI-graded and never
 * gates the result).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Only machinery drilled ≥2× in L1–L5 is tested: **the no-backshift rule**
 * (L1, and the unit's headline fact — it takes two of the eight grammar
 * items), **reported commands** with their person-match (L2), **`li` versus
 * `ako`** (L3 — two items, because it is the most durable error English
 * speakers make), the **wh-question shape** (L3), and **predložiti + present**
 * (L4).
 *
 * THE ONE DESIGN RULE OF THIS TEST — inherited from U19 and U20:
 * **every distractor is grammatical.** Nothing can be solved by spotting a
 * broken sentence.
 *   s06 «Rekao je da je bio bio tamo.»    — not a Croatian tense at all, but
 *                                           it is the shape English speakers
 *                                           construct, so it earns its place
 *   s09 «Pitala me ako imam vremena.»     — a real, parseable Croatian string
 *                                           that simply never finishes
 *   s10 «Pitao me da li stanujem…»        — real Croatian in other varieties
 *   s12 «Predložio je da ćemo doći.»      — perfectly grammatical, and reports
 *                                           a plan rather than a suggestion
 *
 * Item-by-item map against the blueprint:
 *   VOCAB     s01 match  — zaslon / tipkovnica / korisnik / podatak ↔ one-line
 *                          descriptions of what each thing IS
 *             s02 mc     — preuzeti ‖ spremiti (which brings it from the net?)
 *             s03 mc     — odbiti ‖ pristati (which one is «no»?)
 *             s04 fill   — Moram ___ novu aplikaciju → instalirati
 *             s05 fill   — ___ me je li to istina → Zanima
 *   GRAMMAR   s06 mc     — no-backshift A: a past quote
 *             s07 mc     — no-backshift B: a future quote
 *             s08 fill   — reported command, person-matched → dođem
 *             s09 mc     — **li vs ako**, with `ako` as the trap
 *             s10 mc     — **li vs da li vs ako**, three-way
 *             s11 fill   — reported wh-question → gdje stanujem
 *             s12 mc     — predložiti + the PRESENT
 *             s13 reorder — Pitala me stanujem li u Zagrebu.
 *   LISTENING s14 listen-type — Rekla mi je da dođem u pet.
 *             s15 listen-type — Pitao me imam li lozinku.
 *             s16 mc     — hear «Rekla je da dolazi.» → now, or then? And the
 *                          answer is that Croatian does not say, precisely
 *                          because the tense never moved. This is the unit's
 *                          whole point turned into a comprehension item.
 *             s17 mc     — hear «Rekla je neka Marko dođe.» → who is being
 *                          told? → Marko, who is not in the conversation
 *   READING   s18-s20    — a 7-line group-chat transcript in which one message
 *                          is relayed twice and changes once; the questions
 *                          turn on who originally said what, which relay
 *                          introduced the error, and which line is a question
 *
 * The reading text is a **group chat**, which is the real-world home of this
 * grammar — a chat is almost entirely people relaying what other people said.
 *
 * AUTHORING GUARDS, all verified by grep over learner-facing Croatian only:
 *  • **No backshifting** in any correct answer. Every reported clause was
 *    checked against the quote it reports.
 *  • **`ako` and `da li` appear ONLY as wrong options and inside the reading
 *    text's own error**, never in a correct answer or an explanation's model.
 *    s09's and s10's distractors are the two shapes the unit exists to kill.
 *  • **No participial passive** (B2) · **no comparatives or superlatives**
 *    (B2) · **no Future II** (U22) · **no -nje** beyond section titles ·
 *    **never three clitics in one clause**, and `da` is never counted as one.
 *  • Reasons take **jer** or U20's **budući da**.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and replaced: nitko, naći, točno, sjediti, naglas,
 * zapisati, lagati, nikakav, pogrešan, vlastit, umjesto, sljedeći, idući,
 * kasniti, ekran, telefon, zaboraviti, šutjeti, ranije, plivati (all 0, or
 * non-zero only inside a previous unit's own rejection notice).
 */
export const b1u21test: UnitTest = {
  id: "b1u21t",
  unitId: "b1u21",
  title: "Test — Tehnologija",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match each word to what it actually is",
          pairs: [
            { a: "zaslon", b: "ono na čemu gledaš — svijetli dio mobitela" },
            { a: "tipkovnica", b: "ono na čemu pišeš — slova i tipke" },
            { a: "korisnik", b: "osoba koja ima profil i lozinku" },
            { a: "podatak", b: "mali dio informacije — ime, broj, datum" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "Koji glagol znači uzeti nešto s interneta na svoj mobitel?",
          options: ["Preuzeti.", "Spremiti.", "Obrisati.", "Provjeriti."],
          correctIndex: 0,
          explanation:
            "preuzeti — to download. spremiti saves what you already have; obrisati deletes it.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "»___ je doći.« Koji glagol znači da je rekao NE?",
          options: ["Odbio", "Pristao", "Obećao", "Predložio"],
          correctIndex: 0,
          explanation:
            "odbiti — to refuse. And note the shape: odbiti takes an INFINITIVE, never a da-clause. pristati is its opposite and takes na + ACC.",
        },
        {
          id: "s04",
          type: "fill",
          text: "Moram ___ novu aplikaciju.",
          blanks: [["instalirati"]],
          translation: "I have to install a new app.",
          explanation:
            "instalirati — a borrowed verb with one form doing both aspects, like U20's reciklirati.",
        },
        {
          id: "s05",
          type: "fill",
          text: "___ me je li to istina.",
          blanks: [["Zanima"]],
          translation: "I'd like to know whether that's true.",
          explanation:
            "Zanima me… — the soft, indirect way to ask anything. And note the embedded question after it: je li, never ako.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»Bio sam tamo.« → Rekao je da ___ tamo.",
          options: ["je bio", "je bio bio", "bude"],
          correctIndex: 0,
          explanation:
            "je bio — past stays past. English produces «he said he HAD BEEN there» and there is no such tense to reach for in Croatian. The tense you report is the tense they used.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»Doći ću.« → Rekla je da ___ .",
          options: ["će doći", "dolazi", "je došla"],
          correctIndex: 0,
          explanation:
            "će doći — a future quote stays a future report. English says «she said she WOULD come»; Croatian keeps the plain future, with će second in the da-clause.",
        },
        {
          id: "s08",
          type: "fill",
          text: "«Dođi!» (rekla je MENI) → Rekla mi je da ___ .",
          blanks: [["dođem"]],
          translation: "«Come!» → She told me to come.",
          wordBank: ["dođem", "dođeš", "dođi"],
          explanation:
            "dođem — the imperative cannot survive a report. It becomes da + the present, matched to whoever must act, and the dative mi says that person is me.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "»Imaš li vremena?« → Pitala me ___ imam vremena.",
          options: ["— (ništa; »imam li vremena«)", "ako", "da", "kad"],
          correctIndex: 0,
          explanation:
            "The joiner is `li`, and it clips onto the verb: Pitala me **imam li** vremena. `ako` is the CONDITIONAL conjunction — it means if-then and cannot carry a question, so a Croatian listener waits for a consequence that never arrives.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "»Stanuješ li u Zagrebu?« Koja je rečenica dobra?",
          options: [
            "Pitao me stanujem li u Zagrebu.",
            "Pitao me ako stanujem u Zagrebu.",
            "Pitao me da li stanujem u Zagrebu.",
            "Pitao me da stanujem li u Zagrebu.",
          ],
          correctIndex: 0,
          explanation:
            "`li` on the verb, and the verb comes first. Option 2 is the headline error of the unit. Option 3 is real Croatian in other varieties and is not what this course produces. Option 4 stacks a `da` onto a question, which never happens.",
        },
        {
          id: "s11",
          type: "fill",
          text: "«Gdje stanuješ?» → Pitala me ___ ___ .",
          blanks: [["gdje"], ["stanujem"]],
          translation: "«Where do you live?» → She asked me where I live.",
          explanation:
            "The question word does the joining — no `da` — and the person moves from your stanuješ to my stanujem. The question mark goes too: it is a report, not a question.",
        },
        {
          id: "s12",
          type: "mc",
          prompt: "»Predložio je da ___ u pet.« (he suggested we come at five)",
          options: ["dođemo", "ćemo doći", "dolazimo", "smo došli"],
          correctIndex: 0,
          explanation:
            "predložiti takes da + the PRESENT, because a suggestion is a soft order — the same rule as a relayed command. «da ćemo doći» is perfectly grammatical and reports a plan instead of a suggestion.",
        },
        {
          id: "s13",
          type: "reorder",
          words: ["Pitala", "me", "stanujem", "li", "u", "Zagrebu"],
          answers: [
            "Pitala me stanujem li u Zagrebu.",
            "Pitala me stanujem li u Zagrebu",
          ],
          en: "She asked me whether I live in Zagreb.",
          explanation:
            "The verb stands first inside the embedded question and `li` clips onto it. `li` is a clitic and can never lead — and there is no `da` and no `ako` anywhere in the sentence.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s14",
          type: "listen-type",
          tts: "Rekla mi je da dođem u pet.",
          answers: ["Rekla mi je da dođem u pet.", "Rekla mi je da dođem u pet"],
          allowSlow: true,
          explanation: "Dative mi in second position, then da + the present matched to me.",
        },
        {
          id: "s15",
          type: "listen-type",
          tts: "Pitao me imam li lozinku.",
          answers: ["Pitao me imam li lozinku.", "Pitao me imam li lozinku"],
          allowSlow: true,
          explanation: "Verb first, li clipped onto it. No ako, no da.",
        },
        {
          id: "s16",
          type: "mc",
          tts: "Rekla je da dolazi.",
          prompt: "Slušaj. Dolazi li ona sada, ili je dolazila onda? (Listen. Is she coming now, or was she coming then?)",
          options: [
            "Ne može se znati — vrijeme se nije pomaknulo.",
            "Sada — prezent uvijek znači sada.",
            "Onda — prenošenje uvijek znači prošlost.",
            "Sutra — »dolazi« ovdje znači budućnost.",
          ],
          correctIndex: 0,
          explanation:
            "Croatian does not tell you. The tense inside `da` is the tense SHE used, and it never moved — so the sentence is neutral between the two readings. English forces a choice by backshifting; Croatian simply doesn't. This is the whole unit in one item.",
        },
        {
          id: "s17",
          type: "mc",
          tts: "Rekla je neka Marko dođe.",
          prompt: "Slušaj. Tko mora doći? (Listen. Who has to come?)",
          options: [
            "Marko — i on nije u razgovoru.",
            "Ja — jer je rekla meni.",
            "Ona sama.",
            "Svi zajedno.",
          ],
          correctIndex: 0,
          explanation:
            "`neka` is the third-person imperative, and it exists precisely for ordering somebody who is not in the conversation. If she had meant the listener, she would have said «da dođeš» — and there would have been a dative naming them.",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s18",
          type: "mc",
          prompt:
            "»GRUPA — SUBOTA\nAna: Vidimo se u pet ispred kina.\nTom: Ana kaže da se vidimo u pet. Mislim da je mislila na šest.\nMarko: Tom kaže da je Ana mislila na šest.\nBaka Marija: Pitala sam Marka gdje se nalazi kavana.\nMarko: Nisam razumio. Pitao sam Toma je li to kino ili kavana.\nAna: Napisala sam kino. U pet.\nTom: Obećao sam da ću doći u pet, i doći ću.«\n\nŠto je Ana zapravo napisala? (What did Ana actually write?)",
          options: [
            "Kino, u pet.",
            "Kavanu, u pet.",
            "Kino, u šest.",
            "Kavanu, u šest.",
          ],
          correctIndex: 0,
          explanation:
            "Her first line and her last line say the same thing: kino, u pet. Everything between them is other people relaying it — and each relay is grammatically correct.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Isti tekst: tko je prvi rekao »šest«? (Same text: who said «six» first?)",
          options: [
            "Tom — kao svoje mišljenje, ne kao Aninu riječ.",
            "Ana — u prvoj poruci.",
            "Marko — kad je pisao baki Mariji.",
            "Baka Marija — kad je pitala za kavanu.",
          ],
          correctIndex: 0,
          explanation:
            "»Mislim da je mislila na šest« — that is Tom's own opinion in Unit 19's frame, not a report of anything Ana said. Marko then reports Tom accurately, and by that point a guess has become a claim.",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Isti tekst: koja je rečenica pitanje, a ne izjava? (Same text: which line is a question rather than a statement?)",
          options: [
            "»Pitao sam Toma je li to kino ili kavana.«",
            "»Ana kaže da se vidimo u pet.«",
            "»Obećao sam da ću doći u pet.«",
            "»Napisala sam kino.«",
          ],
          correctIndex: 0,
          explanation:
            "It carries `li` on the verb — je li — which is the mark of a relayed yes/no question. Marko's earlier line and baka Marija's both contain reported questions too, but this one is the only option offered here, and `li` is what identifies it.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Razgovor koji sam prenio",
    task:
      "Write 80–150 words in Croatian reporting a conversation or a message exchange — real or invented. You must relay at least ONE STATEMENT (»Rekao je da…«), at least ONE COMMAND or REQUEST (»Rekla mi je da…« or »Neka…«), and at least ONE QUESTION (»Pitao me gdje…« or »Pitala me … li …«). Use at least one verb from the L4 network other than reći — obećati, priznati, predložiti, spomenuti, primijetiti, obavijestiti. Give one reason with jer or budući da. Do NOT move any tense, and do NOT use ako to report a question. Use the L5 scaffold. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    // Model text — every reported clause annotated with its type, its unchanged
    // tense, and the person shift applied:
    //   «Rekla je da ima novi mobitel»          STATEMENT · prezent → prezent
    //   «i da je stari zaslon bio prljav»       STATEMENT · perfekt → perfekt
    //   «Spomenula je da je preuzela…»          L4 verb, not reći · perfekt kept
    //   «pitala imam li vremena»                YES/NO Q · li on the verb
    //   «Pitala me i gdje stanujem»             WH-Q · question word kept, no da
    //   «Rekla mi je da provjerim komentar»     COMMAND · da + PREZENT, matched
    //                                            to me; «moj» → «njezin»
    //   «Predložila je da dođemo u pet»         L4 · predložiti + da + PREZENT
    //   «Obećao sam da ću doći»                 L4 · obećati + da + FUTUR
    //   «rekao neka Marko provjeri link»        NEKA · Marko is not present,
    //                                            and neka takes no da
    //   «jer nije bila sigurna» · «budući da…»  the two reason-words
    // All five required elements present. No backshift anywhere; no ako
    // carrying a question; no da li; no participial passive; no comparative.
    modelHr:
      "Jučer mi je Ana poslala poruku. Rekla je da ima novi mobitel i da je stari zaslon bio prljav. Spomenula je da je preuzela novu aplikaciju.\n\nOnda me pitala imam li vremena u subotu. Pitala me i gdje stanujem sada, jer nije bila sigurna.\n\nRekla mi je da provjerim komentar na njezinu profilu, i predložila je da dođemo u pet.\n\nObećao sam da ću doći. Ali sam joj rekao neka Marko provjeri link, budući da ja ne razumijem taj sadržaj.",
    rubricFocus:
      "The tense above all: for every reported clause, is it in the tense the original speaker used? A backshift is the error this unit exists to prevent and is marked hardest — check «da je dolazila» where «da dolazi» belongs, and any attempt at a pluperfect, which Croatian does not have. Then `ako` carrying a question, marked second-hardest and always with the repair shown (li on the verb): a *Pitala me ako imam vremena* is not a small slip, because a Croatian reader waits for a consequence that never arrives. Then `da li` anywhere. Then the person-match in reported commands, and whether the dative of the person told is present and correctly placed in second position. Then the clitic inside the da-clause, counting `da` as slot one (da JE bio, da ĆE doći). Then the question shapes: a reported wh-question with no question mark, no inversion and no `da`; a reported yes/no question with `li` on the verb (on the auxiliary in compound tenses). Then deictics — sutra / ovdje / ovaj re-pointed if the report is made at a different time or place; noted but weighted lightly, since it depends on a context the writer sets themselves. Finally task completion: one statement, one command or request, one question, one L4 verb other than reći, and one reason with jer or budući da.",
  },
};
