import type { Lesson } from "@/types/content";

/**
 * B1 U21 L1 — Moj mobitel (Reported statements — the tense does not move)
 * Spec: curriculum/B1/unit-21.md · grammar-reference §19 "Indirect speech"
 * (new) + §12 clitic order + §9 (the tenses that stay put).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * One install, and the learner's job is to STOP doing something:
 * **Croatian does not backshift.** English relays «Dolazim» as *she said she
 * WAS coming*; Croatian moves nothing at all — *Rekla je da dolazi.*
 *
 * This is a callback, not a first contact. U20 L3 taught exactly this fact with
 * the ownerless frames (*kaže se da je bilo dobro*) and gave the delete-the-
 * frame test with it. L1 opens by naming that debt and cashing it in — the only
 * thing being added today is a named speaker.
 *
 * What DOES move: the **person**. ja → on/ona, moj → njegov/njezin. Deictics
 * (sutra → danas, ovdje → tamo) also move, and are deliberately held back to
 * L5 so that «nothing moves» can be installed cleanly first.
 *
 * Every reported clause in this lesson is a **statement**. Commands are L2 and
 * questions are L3; letting either leak in here would blur the one thing the
 * lesson is trying to make automatic.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and routed around: ekran (4, all inside a previous
 * unit's rejection notice → the carded form here is **zaslon**), telefon (0 —
 * the carded word is mobitel, a2u12), kompjuter (0 — računalo, a2u12),
 * zaboraviti (1, inside b1u18's story rejection list), naći (1, same), nitko
 * (rejected by name in b1u19's test header). Deferred by unit: no reported
 * commands (L2), no reported questions and no `li`-embedding (L3), no `ako` in
 * any reported clause, no `da li` anywhere, no deictic shift (L5), no Future II
 * (U22), no -nje as a productive formation (U23), no full clitic cluster (U23 —
 * two clitics maximum, and `da` is never counted as one), no participial
 * passive (B2), no comparatives (B2).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U21 cut-outs exist.
 */
export const b1u21l1: Lesson = {
  id: "b1u21l1",
  unitId: "b1u21",
  title: "Moj mobitel",
  titleEn: "My phone — reported statements, and the tense that never moves",
  grammarTags: ["indirect-speech", "da-clause", "no-backshift", "clitics"],
  estMinutes: 20,
  vocab: [
    { id: "b1u21.zaslon", hr: "zaslon", en: "screen (m) — the standard Croatian word for a device screen", pos: "noun", gender: "m", icon: "📱", exampleHr: "Zaslon je prljav.", exampleEn: "The screen is dirty." },
    { id: "b1u21.tipkovnica", hr: "tipkovnica", en: "keyboard (f)", pos: "noun", gender: "f", icon: "⌨️", exampleHr: "Tipkovnica ne radi.", exampleEn: "The keyboard isn't working." },
    { id: "b1u21.korisnik", hr: "korisnik", en: "user (m; GEN korisnika)", pos: "noun", gender: "m", icon: "👤", exampleHr: "Korisnik ima novu lozinku.", exampleEn: "The user has a new password." },
    { id: "b1u21.podatak", hr: "podatak", en: "a piece of data / a detail (m; GEN podatka — fleeting a; pl podaci)", pos: "noun", gender: "m", icon: "🗂️", exampleHr: "Gdje su moji podaci?", exampleEn: "Where's my data?" },
    { id: "b1u21.preuzeti", hr: "preuzeti", en: "to download (pf preuzmem · impf preuzimati, preuzimam)", pos: "verb", icon: "⬇️", exampleHr: "Rekao je da će preuzeti aplikaciju.", exampleEn: "He said he'd download the app." },
    { id: "b1u21.instalirati", hr: "instalirati", en: "to install (instaliram) — one form does both aspects", pos: "verb", icon: "📦", exampleHr: "Moram instalirati novu aplikaciju.", exampleEn: "I have to install a new app." },
    { id: "b1u21.spremiti", hr: "spremiti", en: "to save (pf spremim · impf spremati, spremam)", pos: "verb", icon: "💾", exampleHr: "Rekla je da je spremila podatke.", exampleEn: "She said she'd saved the data." },
    { id: "b1u21.obrisati", hr: "obrisati", en: "to delete / wipe (pf obrišem · impf brisati, brišem)", pos: "verb", icon: "🗑️", exampleHr: "Rekao je da je obrisao poruku.", exampleEn: "He said he'd deleted the message." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moj mobitel",
      subtitle: "Unit 21 teaches you to carry somebody else's words. There is exactly one hard fact about it, and you already met it last week in a sentence with nobody in it.",
      emoji: "📱",
      items: [
        { emoji: "🗣️", label: "Rekla je da…", hint: "a named speaker at last" },
        { emoji: "⏸️", label: "Nothing moves", hint: "Croatian never backshifts" },
        { emoji: "🔄", label: "The person does", hint: "ja → on, moj → njegov" },
        { emoji: "⌨️", label: "New words", hint: "zaslon, podatak, preuzeti…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The thing you have to stop doing",
      subtitle: "This is a strange grammar lesson: almost all of it is about not doing something your first language does automatically.",
      emoji: "⏸️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U20's frames, U19's da" },
        { emoji: "🃏", label: "New words", hint: "the device eight" },
        { emoji: "⚙️", label: "The rule", hint: "the tense stays put" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: you were given this rule already",
      items: [
        {
          prompt: "U20: the claim was »Bilo je dobro.« How does it go inside the frame?",
          options: [
            "Kaže se da je bilo dobro.",
            "Kaže se da je dobro.",
            "Kaže se da bude dobro.",
          ],
          correctIndex: 0,
          explanation: "The tense does not move — a past claim stays past. Hold that thought for about ninety seconds.",
        },
        {
          prompt: "U19: »Mislim ___ je to istina.«",
          options: ["da", "što", "koji"],
          correctIndex: 0,
          explanation: "da — never optional. Today's frame needs it just as badly.",
        },
        {
          prompt: "U12/U19 clitics: which is right?",
          options: [
            "Rekla je da je to problem.",
            "Rekla je da to je problem.",
          ],
          correctIndex: 0,
          explanation: "The clitic goes into second position OF THE DA-CLAUSE, and `da` counts as slot one. Unchanged since Unit 19.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The device eight",
      vocabIds: [
        "b1u21.zaslon", "b1u21.tipkovnica", "b1u21.korisnik", "b1u21.podatak",
        "b1u21.preuzeti", "b1u21.instalirati", "b1u21.spremiti", "b1u21.obrisati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Rekla je **da**… — the frame 🗣️",
      body:
        "Somebody says something. You pass it on. Croatian builds it exactly the way Unit 19 built opinions and Unit 20 built claims:\n\n> **a verb of saying + `da` + a complete clause**\n\n*«Dolazim.»* → *Rekla je **da dolazi**.*\n\nThe verbs are all ones you already own: **reći** (rekao je / rekla je), **misliti**, **znati**, **čuti**, **objasniti**, **smatrati**, **tvrditi**. And the two rules that ride along are both old:\n\n**`da` is obligatory.** English lets you drop *that*; Croatian never has.\n*Rekla je **da** dolazi.* ✅  ~~*Rekla je dolazi.*~~ ❌\n\n**The clitic goes into second position of the da-clause**, with `da` counting as slot one.\n*Rekla je da **je** bio tamo.* ✅  ~~*Rekla je da bio je tamo.*~~ ❌\n\nSo far, nothing new at all. The new thing is what happens to the **tense** — and the answer is the shortest one in the course.",
      ttsChips: ["Rekla je da dolazi.", "Rekao je da je bio tamo.", "Rekla je da će doći."],
    },
    {
      id: "s06",
      type: "teach",
      title: "**Nothing moves.** ⏸️",
      body:
        "English moves the tense back one step when it reports. You do it without noticing:\n\n> *«I'm coming.»* → she said she **was** coming.\n> *«I was there.»* → he said he **had been** there.\n> *«I'll come.»* → she said she **would** come.\n\n**Croatian moves nothing.** Whatever tense the speaker used, that is the tense inside `da` — permanently.\n\n| što je rekao/rekla | kako to prenosiš |\n|---|---|\n| *«Dolazim.»* (present) | Rekla je da **dolazi**. |\n| *«Bio sam tamo.»* (past) | Rekao je da **je bio** tamo. |\n| *«Doći ću.»* (future) | Rekla je da **će doći**. |\n| *«Ne razumijem.»* | Rekao je da **ne razumije**. |\n\n**The test that always works: delete the frame.** Take off *Rekla je da* and what is left must be a perfectly ordinary Croatian sentence, in the tense the person actually used:\n\n*Rekao je da **je bio** tamo.* → ***Bio je** tamo.* ✅ untouched\n\nYou met this exact test last week, on *kaže se da…*. It was planted there deliberately, in a construction with nothing else going on, so that today it would already be a habit.",
      diagram: {
        kind: "contrast",
        left: {
          title: "ENGLESKI — vrijeme se pomiče",
          emoji: "↩️",
          lines: [
            { hr: "«I'm coming.»", en: "→ she said she WAS coming" },
            { hr: "«I was there.»", en: "→ he said he HAD BEEN there" },
            { hr: "«I'll come.»", en: "→ she said she WOULD come" },
          ],
        },
        right: {
          title: "HRVATSKI — ništa se ne miče",
          emoji: "⏸️",
          lines: [
            { hr: "«Dolazim.» → Rekla je da dolazi.", en: "present stays present" },
            { hr: "«Bio sam tamo.» → Rekao je da je bio tamo.", en: "past stays past" },
            { hr: "«Doći ću.» → Rekla je da će doći.", en: "future stays future" },
          ],
        },
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "What DOES move: the person 🔄",
      body:
        "The tense stays. The **person** does not — pronouns and possessives re-point exactly as they do in English, because the speaker has changed:\n\n*Marko: «**Ja** sam spremio **svoje** podatke.»*\n→ *Marko je rekao da je spremio **svoje** podatke.* (still his own — *svoj* re-points automatically)\n→ *Rekao je da je **on** spremio podatke.* (when you need to be explicit)\n\n*Ana meni: «**Ti** imaš moju lozinku.»*\n→ *Ana je rekla da **ja** imam **njezinu** lozinku.*\n\n| u citatu | kad prenosiš |\n|---|---|\n| ja | on / ona |\n| ti | ja (if you were the one addressed) |\n| moj | njegov / njezin |\n| tvoj | moj |\n\n**Negation stays exactly where it was**, and moving it changes the meaning:\n\n*Rekla je da **ne** dolazi.* → She said she isn't coming.\n***Nije** rekla da dolazi.* → She didn't say she's coming.\n\nThose are two different reports of two different conversations. Keep them apart.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The delete-the-frame test",
        text: "Take off «Rekla je da» and look at what is left. It must be a normal Croatian sentence in the tense the speaker actually used. If it isn't, you moved something you shouldn't have.",
      },
    },
    {
      id: "s08",
      type: "example",
      title: "Passing it on",
      items: [
        { hr: "«Dolazim.» → Rekla je da dolazi.", en: "«I'm coming.» → She said she was coming.", note: "Present stays present. English moves it; Croatian doesn't." },
        { hr: "«Bio sam tamo.» → Rekao je da je bio tamo.", en: "«I was there.» → He said he'd been there.", note: "`je` sits second in the da-clause, right after da." },
        { hr: "«Doći ću sutra.» → Rekla je da će doći sutra.", en: "«I'll come tomorrow.» → She said she'd come tomorrow.", note: "The future stays a future: da će doći." },
        { hr: "«Ne razumijem.» → Rekao je da ne razumije.", en: "«I don't understand.» → He said he didn't understand.", note: "The negation stays inside the reported clause." },
        { hr: "«Spremio sam podatke.» → Rekao je da je spremio podatke.", en: "«I saved the data.» → He said he'd saved the data.", note: "Person moves (ja → on), tense doesn't." },
        { hr: "«Obrisala sam poruku.» → Ana je rekla da je obrisala poruku.", en: "«I deleted the message.» → Ana said she'd deleted the message.", note: "The participle keeps HER gender: obrisala." },
        { hr: "Čuo sam da imaš novi mobitel.", en: "I heard you've got a new phone.", note: "čuti takes da too — the network is bigger than reći." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Report it without touching it",
      subtitle: "Every item from here on rewards leaving the tense exactly where you found it. Three of the next four punish an English reflex.",
      emoji: "🎯",
      items: [
        { emoji: "✅", label: "Quick check", hint: "four quotes, four reports" },
        { emoji: "🔤", label: "Build them", hint: "match, fill, and relay" },
        { emoji: "🔊", label: "Listen", hint: "what tense did they use?" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: don't move it",
      items: [
        {
          prompt: "»Dolazim.« → Rekla je da ___ .",
          options: ["dolazi", "je dolazila", "će doći"],
          correctIndex: 0,
          explanation: "Present stays present. English would give you «was coming»; Croatian gives you dolazi and stops.",
        },
        {
          prompt: "»Bio sam tamo.« → Rekao je da ___ ___ tamo.",
          options: ["je bio", "bude", "je bio bio"],
          correctIndex: 0,
          explanation: "Past stays past: je bio. There is no «had been» in Croatian and none is needed.",
        },
        {
          prompt: "»Doći ću sutra.« → Rekla je da ___ ___ sutra.",
          options: ["će doći", "dolazi", "je došla"],
          correctIndex: 0,
          explanation: "Future stays future: da će doći. Note the clitic će sitting second in the da-clause.",
        },
        {
          prompt: "Marko: »Ja sam spremio podatke.« Kako to prenosiš?",
          options: [
            "Rekao je da je spremio podatke.",
            "Rekao je da sam spremio podatke.",
            "Rekao je da je spremao podatke.",
          ],
          correctIndex: 0,
          explanation: "The tense stays, but the PERSON moves: his «ja sam» becomes «je». Option 2 would mean he said that *I* saved them.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each quote to its report",
      pairs: [
        { a: "«Dolazim.»", b: "Rekla je da dolazi." },
        { a: "«Bio sam tamo.»", b: "Rekao je da je bio tamo." },
        { a: "«Doći ću.»", b: "Rekla je da će doći." },
        { a: "«Ne razumijem.»", b: "Rekao je da ne razumije." },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "«Obrisao sam poruku.» → Rekao je da ___ ___ poruku.",
      blanks: [["je"], ["obrisao"]],
      translation: "«I deleted the message.» → He said he'd deleted the message.",
      explanation: "Past stays past. `je` lands in second position of the da-clause, immediately after da.",
    },
    {
      id: "s13",
      type: "fill",
      text: "«Preuzet ću aplikaciju.» → Rekla je da ___ ___ aplikaciju.",
      blanks: [["će"], ["preuzeti"]],
      translation: "«I'll download the app.» → She said she'd download the app.",
      explanation: "Future stays future: da će preuzeti. The clitic će is second in the da-clause.",
    },
    {
      id: "s14",
      type: "fill",
      text: "«Ne znam lozinku.» → Rekao je da ___ ___ lozinku.",
      blanks: [["ne"], ["zna"]],
      translation: "«I don't know the password.» → He said he didn't know the password.",
      explanation: "The negation stays inside the reported clause, where the speaker put it.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Report it: Ana kaže »Spremila sam sve podatke.« → ",
      answers: [
        "Rekla je da je spremila sve podatke.",
        "Rekla je da je spremila sve podatke",
        "Ana je rekla da je spremila sve podatke.",
      ],
      hint: "Tense unchanged; person moves from ja to ona; the participle keeps her gender.",
      explanation: "Rekla je da je spremila sve podatke. Past stays past, spremila keeps the feminine ending because Ana is still the one who did it.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Report it: Marko kaže »Instalirat ću novu aplikaciju.« → ",
      answers: [
        "Rekao je da će instalirati novu aplikaciju.",
        "Rekao je da će instalirati novu aplikaciju",
        "Marko je rekao da će instalirati novu aplikaciju.",
      ],
      hint: "A future quote stays a future report.",
      explanation: "Rekao je da će instalirati novu aplikaciju. English would say «he said he WOULD install» — Croatian keeps the plain future.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Rekla je da dolazi.",
      answers: ["Rekla je da dolazi.", "Rekla je da dolazi"],
      allowSlow: true,
      explanation: "Present in the quote, present in the report. Four words, and the whole unit is in them.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Rekao je da je obrisao sve podatke.",
      answers: ["Rekao je da je obrisao sve podatke.", "Rekao je da je obrisao sve podatke"],
      allowSlow: true,
      explanation: "Two `je` in one sentence — the first belongs to the main clause, the second to the da-clause. Each is in its own second position.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Rekla je da će preuzeti aplikaciju.",
      targetEn: "She said she'd download the app.",
      phonetic: "REK-la ye da tche pre-OO-ze-tee a-pli-KA-tsee-yoo",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U20 review: what is the difference between »Kaže se da je to problem« and »Rekla je da je to problem«?",
      options: [
        "The first has nobody behind it; the second names who said it.",
        "The first is present, the second is past.",
        "The first is a question, the second is a statement.",
      ],
      correctIndex: 0,
      explanation: "Same clause, same untouched tense — the only difference is whether anyone is on the hook for it. Last week's construction was this one with the person removed.",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "U19 review: »Rekao je da ___ ___ novi zaslon.« (that he had bought a new screen — kupiti, on)",
      options: ["je kupio", "kupio je", "kupi"],
      correctIndex: 0,
      explanation: "je kupio — the clitic takes second position of the da-clause, counting `da` as slot one, so it lands right after da and before the participle.",
      tts: "Rekao je da je kupio novi zaslon.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**The frame:** a verb of saying + **`da`** + a complete clause. *Rekla je da dolazi.* `da` is obligatory, and the clitic sits in **second position of the da-clause**, counting `da` as slot one.\n\n**The rule — and it is the whole unit:**\n\n> ### Croatian does not backshift.\n> *«Dolazim.»* → *Rekla je da **dolazi**.*\n> *«Bio sam tamo.»* → *Rekao je da **je bio** tamo.*\n> *«Doći ću.»* → *Rekla je da **će doći**.*\n\nEnglish moves the tense back a step and you have never noticed yourself doing it. Croatian moves nothing.\n\n**The test:** delete the frame. What's left must be an ordinary Croatian sentence in the speaker's own tense.\n\n**What does move:** the **person** — *ja* → *on*, *moj* → *njegov*. And the negation stays exactly where the speaker put it: *Rekla je da **ne** dolazi* ≠ ***Nije** rekla da dolazi.*\n\nTomorrow: what happens when what you have to relay is an order.",
      vocabIds: [
        "b1u21.zaslon", "b1u21.tipkovnica", "b1u21.korisnik", "b1u21.podatak",
        "b1u21.preuzeti", "b1u21.instalirati", "b1u21.spremiti", "b1u21.obrisati",
      ],
    },
  ],
  srsCloze: [
    { front: "«Dolazim.» → Rekla je da ___ .", answers: ["dolazi"], back: "dolazi — present stays present. Croatian never backshifts.", tts: "Rekla je da dolazi." },
    { front: "«Bio sam tamo.» → Rekao je da ___ ___ tamo.", answers: ["je bio"], back: "je bio — past stays past, and the clitic sits second in the da-clause.", tts: "Rekao je da je bio tamo." },
    { front: "«Doći ću.» → Rekla je da ___ ___ .", answers: ["će doći"], back: "će doći — a future quote stays a future report.", tts: "Rekla je da će doći." },
    { front: "Does Croatian move the tense back when reporting? ___", answers: ["no", "ne", "never", "nikad"], back: "No. Never. The tense inside `da` is the tense the speaker used, and that is the whole unit.", tts: "Rekla je da dolazi." },
    { front: "Rekla je ___ dolazi. (the word English lets you drop)", answers: ["da"], back: "da — obligatory in Croatian, always.", tts: "Rekla je da dolazi." },
    { front: "screen = ___", answers: ["zaslon"], back: "zaslon (m) — Zaslon je prljav.", tts: "Zaslon je prljav." },
    { front: "a piece of data (m; pl podaci) = ___", answers: ["podatak"], back: "podatak — GEN podatka, with a fleeting a. Plural podaci.", tts: "Gdje su moji podaci?" },
    { front: "to download = ___", answers: ["preuzeti", "preuzimati"], back: "preuzeti (pf) / preuzimati (impf) — Rekao je da će preuzeti aplikaciju.", tts: "Rekao je da će preuzeti aplikaciju." },
    { front: "to save (a file) = ___", answers: ["spremiti", "spremati"], back: "spremiti (pf) / spremati (impf) — Rekla je da je spremila podatke.", tts: "Rekla je da je spremila podatke." },
    { front: "to delete = ___", answers: ["obrisati", "brisati"], back: "obrisati (pf, obrišem) / brisati (impf, brišem).", tts: "Rekao je da je obrisao poruku." },
    { front: "user = ___", answers: ["korisnik"], back: "korisnik (m) — Korisnik ima novu lozinku.", tts: "Korisnik ima novu lozinku." },
  ],
  notes: {
    inOneSentence: {
      en: "A verb of saying + DA + a complete clause — and the tense inside that clause is whatever tense the speaker used, because Croatian never backshifts; only the person moves.",
      exampleHr: "Rekla je da je spremila podatke i da će doći sutra.",
    },
    deepDive: [
      {
        title: "The frame (which is entirely old news)",
        body:
          "Reporting speech in Croatian uses machinery you have been building for three units:\n\n> **a verb of saying + `da` + an ordinary complete clause**\n\nThe verbs are already yours: **reći** (*rekao je / rekla je*), **misliti**, **znati**, **čuti**, **objasniti**, **smatrati**, **tvrditi**, **vjerovati**. Unit 19 taught the frame with *your own* opinions (*Mislim da…*); Unit 20 taught it with *nobody's* (*Kaže se da…*); this unit finally attaches a named person to it.\n\nTwo rules ride along unchanged.\n\n**`da` is obligatory.** English deletes *that* freely — *she said she was coming* — and Croatian has never allowed it: ~~*Rekla je dolazi*~~ ❌.\n\n**The clitic takes second position of the da-clause**, counting `da` as slot one:\n*Rekla je da **je** bio tamo.* ✅ ~~*Rekla je da bio je tamo.*~~ ❌\n*Rekla je da **će** doći.* ✅\n\nA sentence like *Rekao je da **je** obrisao poruku* has two `je`, and both are correct — the first belongs to the main clause, the second to the `da`-clause, and each is sitting in its own second position.",
      },
      {
        title: "The rule: nothing moves",
        body:
          "English performs a tense shift when it reports, so consistently that native speakers do not know they are doing it:\n\n> *«I'm coming.»* → she said she **was** coming\n> *«I was there.»* → he said he **had been** there\n> *«I'll come.»* → she said she **would** come\n\n**Croatian performs none of it.** Whatever tense the speaker used goes straight into the `da`-clause and stays there.\n\n| citat | kako prenosiš | engleski (koji se pomiče) |\n|---|---|---|\n| *«Dolazim.»* | Rekla je da **dolazi**. | she said she **was** coming |\n| *«Bio sam tamo.»* | Rekao je da **je bio** tamo. | he said he **had been** there |\n| *«Doći ću.»* | Rekla je da **će doći**. | she said she **would** come |\n| *«Ne razumijem.»* | Rekao je da **ne razumije**. | he said he **didn't** understand |\n\n**The delete-the-frame test.** Take off *Rekla je da* and check what remains:\n\n*Rekao je da **je bio** tamo* → ***Bio je** tamo.* ✅ a perfectly ordinary sentence, in his tense\n\nIf what is left looks odd, or is in a tense the person never used, you backshifted.\n\nYou met this test last week on *kaže se da…*, and that was not an accident: it was planted in a construction with no person in it precisely so that the tense rule could be installed on its own, before anything else was competing for attention.",
        table: {
          caption: "Three tenses in, the same three tenses out",
          headers: ["vrijeme citata", "citat", "kako prenosiš"],
          rows: [
            ["prezent", "«Dolazim.»", "Rekla je da dolazi."],
            ["perfekt", "«Bio sam tamo.»", "Rekao je da je bio tamo."],
            ["futur", "«Doći ću.»", "Rekla je da će doći."],
            ["prezent + negacija", "«Ne razumijem.»", "Rekao je da ne razumije."],
            ["perfekt + objekt", "«Obrisala sam poruku.»", "Rekla je da je obrisala poruku."],
          ],
        },
      },
      {
        title: "What does move: the person",
        body:
          "The tense is frozen; the **person** is not. Pronouns and possessives re-point, exactly as they do in English, because the one doing the speaking has changed:\n\n| u citatu | kad prenosiš |\n|---|---|\n| **ja** | on / ona |\n| **ti** | ja — if you were the one being addressed |\n| **moj** | njegov / njezin |\n| **tvoj** | moj |\n| **mi** | oni |\n\n*Marko: «**Ja** sam spremio podatke.»* → *Rekao je da **je** spremio podatke.*\n*Ana meni: «**Ti** imaš **moju** lozinku.»* → *Rekla je da **ja** imam **njezinu** lozinku.*\n\n**The participle keeps the original speaker's gender**, because it still agrees with them: *Ana je rekla da je **obrisala** poruku* — feminine, because Ana is the one who did the deleting, whoever is now reporting it.\n\n**`svoj` re-points by itself** and usually needs no help: *«Spremio sam **svoje** podatke»* → *Rekao je da je spremio **svoje** podatke* — still his own, automatically.\n\nOne pair to keep apart, because they report two different conversations:\n\n*Rekla je da **ne** dolazi.* — She said she is not coming.\n***Nije** rekla da dolazi.* — She did not say she is coming.",
        diagram: {
          kind: "contrast",
          left: {
            title: "ne miče se — VRIJEME",
            emoji: "⏸️",
            lines: [
              { hr: "«Dolazim.» → …da dolazi", en: "present → present" },
              { hr: "«Bio sam.» → …da je bio", en: "past → past" },
              { hr: "«Doći ću.» → …da će doći", en: "future → future" },
            ],
          },
          right: {
            title: "miče se — OSOBA",
            emoji: "🔄",
            lines: [
              { hr: "«Ja sam…» → …da je on…", en: "ja → on / ona" },
              { hr: "«moja lozinka» → njezina lozinka", en: "moj → njegov / njezin" },
              { hr: "«Ti imaš…» → …da ja imam…", en: "ti → ja" },
            ],
          },
        },
      },
      {
        title: "Why this lesson is short on rules and long on practice",
        body:
          "Most grammar lessons install something. This one mostly asks you to **switch something off**.\n\nThe English tense shift is not a rule you learned; it is a reflex, and it fires before you have finished deciding what to say. That is why this lesson gives you one small rule and then eleven chances to catch yourself — the work is not understanding it, it is noticing the moment you were about to do it anyway.\n\nA practical habit worth building now: **when you are about to report something, say the original sentence to yourself first.** *«Bio sam tamo.»* Then put *Rekao je da* in front of it and change nothing else except the person. That order — quote first, frame second — makes backshifting almost impossible, and it stays useful for the rest of the unit, where the same discipline handles commands and questions too.\n\nOne thing is deliberately missing today. **Time and place words** — *sutra*, *ovdje*, *ovaj*, *sada* — **do** move when you report at a different time or place, and they are the one genuine exception to «nothing moves». They are held back to L5 so that the main rule can go in clean.",
      },
    ],
    commonMistakes: [
      { wrong: "Rekla je da je dolazila.", right: "Rekla je da **dolazi**.", why: "The English reflex, firing. She said «Dolazim» — present — so the report is present. Croatian never moves a tense back." },
      { wrong: "Rekao je da je bio bio tamo.", right: "Rekao je da **je bio** tamo.", why: "There is no pluperfect to reach for. The past he used is the past you report." },
      { wrong: "Rekla je dolazi.", right: "Rekla je **da** dolazi.", why: "`da` is obligatory. English deletes «that»; Croatian never has." },
      { wrong: "Rekla je da bio je tamo.", right: "Rekla je da **je bio** tamo.", why: "The clitic takes second position of the da-clause, and `da` counts as slot one — so it lands immediately after da." },
      { wrong: "Marko je rekao da sam spremio podatke.", right: "Marko je rekao da **je** spremio podatke.", why: "The tense stays but the PERSON moves. As written, this says Marko claimed that *I* saved them." },
      { wrong: "Ana je rekla da je obrisao poruku.", right: "Ana je rekla da je **obrisala** poruku.", why: "The participle still agrees with Ana, who did the deleting — not with whoever is now doing the reporting." },
    ],
    memoryHooks: [
      "**Say the quote first, then put the frame in front of it.** *«Bio sam tamo.»* … *Rekao je da* + that, unchanged. Doing it in that order makes backshifting almost impossible.",
      "**Delete the frame and check.** What's left must be an ordinary sentence in the speaker's own tense.",
      "**Tense frozen, person free.** Those are the only two things happening in this lesson.",
      "**You already had this rule.** Unit 20's *kaže se da je bilo dobro* was the same fact with nobody attached — the person is the only thing that's new.",
      "**Two `je` in one sentence is normal.** *Rekao je da je bio tamo* — one per clause, each in its own second position.",
    ],
    connects: [
      { label: "kaže se da… — the same rule, with nobody on the hook", lessonId: "b1u20l3" },
      { label: "Mislim da… — where the da-frame started", lessonId: "b1u19l1" },
      { label: "Clitics: second position", lessonId: "a2u12l2" },
      { label: "Next: relaying an order", lessonId: "b1u21l2" },
    ],
    selfCheck: [
      { q: "«Dolazim.» → Rekla je da ___ .", a: "dolazi — present stays present." },
      { q: "«Bio sam tamo.» → Rekao je da ___ ___ tamo.", a: "je bio — past stays past, and the clitic goes right after da." },
      { q: "What is the delete-the-frame test?", a: "Take off «Rekla je da» and check that what remains is an ordinary Croatian sentence in the tense the speaker actually used." },
      { q: "Marko says «Ja sam spremio podatke.» Why is «Rekao je da sam spremio podatke» wrong?", a: "The person has to move. As written it says Marko claimed that I saved them — it should be «da je spremio»." },
      { q: "What's the difference between «Rekla je da ne dolazi» and «Nije rekla da dolazi»?", a: "The first reports that she isn't coming. The second reports that she never said she was — two different conversations." },
    ],
  },
};
