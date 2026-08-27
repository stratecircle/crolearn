import type { Lesson } from "@/types/content";

/**
 * B1 U21 L5 — Digitalni život (Consolidation + the writing task)
 * Spec: curriculum/B1/unit-21.md · grammar-reference §19 "Indirect speech"
 * + §12 · §15.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new machinery. The lesson sorts the three sentence types back together,
 * hands over a three-question decision procedure, and finally delivers the one
 * piece L1–L4 deliberately postponed: **deictics DO move.**
 *
 * THE THREE-QUESTION SORTER (the unit's exit printable):
 *   1. Was it a STATEMENT?            → da + the ORIGINAL tense; only the
 *                                       person moves.
 *   2. Was it a COMMAND or REQUEST?   → da + the PRESENT, matched to whoever
 *                                       must act — or NEKA + 3rd person if
 *                                       they are not in the room.
 *   3. Was it a QUESTION?             → the wh-word if it had one; LI on the
 *                                       verb if it did not. Never ako. Never
 *                                       da li.
 *
 * THE POSTPONED PIECE: *sutra → danas*, *ovdje → tamo*, *ovaj → taj*, *sada →
 * onda*. Held back to L5 on purpose, so that «nothing moves» could be installed
 * cleanly across four lessons first. The rule as the learner should carry it:
 * **tenses never move, deictics always do.**
 *
 * THE WALL OF FIVE TRAPS:
 *   (a) backshifting — the unit's #1 error, and the first thing the rubric
 *       checks
 *   (b) `ako` in a reported question — the headline error, marked second
 *   (c) `da li` anywhere
 *   (d) keeping question word order or a question mark in a reported
 *       wh-question
 *   (e) forgetting to move the person
 *
 * The notes page for this lesson IS the pre-writing checklist and is written as
 * one: six scaffold rows, a fully annotated model text, and the trap wall.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and routed around: ranije / ekran / zaboraviti / naći /
 * telefon / plivati / sljedeći / tada / nitko (all 0, or non-zero only inside a
 * previous unit's own rejection notice). Deferred by unit: no Future II (U22),
 * no -nje as a productive formation (U23 — the five -ost nouns here are carded
 * as ordinary vocabulary with NO morphological commentary, because the
 * productive -ost formation is U24's lesson, exactly as U19 treated mišljenje
 * and U20 treated recikliranje), no full clitic cluster (U23), no participial
 * passive (B2), no comparatives (B2).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U21 cut-outs exist (digitalan stays
 * icon-only — there is nothing to draw).
 */
export const b1u21l5: Lesson = {
  id: "b1u21l5",
  unitId: "b1u21",
  title: "Digitalni život",
  titleEn: "Digital life — all three types, and a conversation to write up",
  grammarTags: ["indirect-speech", "deictics", "writing", "consolidation"],
  estMinutes: 22,
  vocab: [
    { id: "b1u21.ovisnost", hr: "ovisnost", en: "addiction / dependence (f, i-declension; GEN ovisnosti)", pos: "noun", gender: "f", icon: "⛓️", exampleHr: "To je ovisnost.", exampleEn: "That's an addiction." },
    { id: "b1u21.privatnost", hr: "privatnost", en: "privacy (f)", pos: "noun", gender: "f", icon: "🪟", exampleHr: "Privatnost je važna.", exampleEn: "Privacy is important." },
    { id: "b1u21.sigurnost", hr: "sigurnost", en: "safety / security (f)", pos: "noun", gender: "f", icon: "🔒", exampleHr: "Sigurnost podataka je problem.", exampleEn: "Data security is a problem." },
    { id: "b1u21.stvarnost", hr: "stvarnost", en: "reality (f)", pos: "noun", gender: "f", icon: "🌍", exampleHr: "To nije stvarnost.", exampleEn: "That isn't reality." },
    { id: "b1u21.mogucnost", hr: "mogućnost", en: "possibility / option (f)", pos: "noun", gender: "f", icon: "🔱", exampleHr: "Imamo dvije mogućnosti.", exampleEn: "We've got two options." },
    { id: "b1u21.korist", hr: "korist", en: "benefit / use (f) — imati koristi od", pos: "noun", gender: "f", icon: "📈", exampleHr: "Od toga nemam koristi.", exampleEn: "I get nothing out of that." },
    { id: "b1u21.steta", hr: "šteta", en: "harm / damage (f) — also the interjection Šteta! = «what a pity»", pos: "noun", gender: "f", icon: "💔", exampleHr: "Šteta! Nisam znao.", exampleEn: "What a pity! I didn't know." },
    { id: "b1u21.digitalan", hr: "digitalan", en: "digital (digitalna, digitalno — fleeting a)", pos: "adj", icon: "🔢", exampleHr: "To je digitalni svijet.", exampleEn: "That's the digital world." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Digitalni život",
      subtitle: "Three questions, and the first one is: what kind of sentence was it before you touched it?",
      emoji: "💻",
      items: [
        { emoji: "🧭", label: "The sorter", hint: "three questions, in order" },
        { emoji: "📍", label: "What DOES move", hint: "sutra → danas" },
        { emoji: "🧱", label: "The wall", hint: "five traps, all named" },
        { emoji: "✍️", label: "The scaffold", hint: "six rows and a model" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Sort them",
      subtitle: "Everything this week comes down to one question asked first — and the answer tells you which of three shapes to write.",
      emoji: "🧭",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "one item from each day" },
        { emoji: "🃏", label: "New words", hint: "the digital eight" },
        { emoji: "⚙️", label: "Three questions", hint: "the exit printable" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: one from each day",
      items: [
        {
          prompt: "L1: »Bio sam tamo.« → Rekao je da ___ ___ tamo.",
          options: ["je bio", "bude", "je bio bio"],
          correctIndex: 0,
          explanation: "Past stays past. Croatian never backshifts.",
        },
        {
          prompt: "L2: »Dođi!« (rekla je MENI) → Rekla mi je da ___ .",
          options: ["dođem", "dođeš", "dođi"],
          correctIndex: 0,
          explanation: "She told me, so I'm the one coming. The imperative can't survive.",
        },
        {
          prompt: "L3: »Imaš li vremena?« → Pitala me ___ ___ vremena.",
          options: ["imam li", "ako imam", "da li imam"],
          correctIndex: 0,
          explanation: "li on the verb. `ako` is the conditional conjunction and cannot carry a question.",
        },
        {
          prompt: "L4: »Predložio je da ___ u pet.« (we come)",
          options: ["dođemo", "ćemo doći", "dolazimo"],
          correctIndex: 0,
          explanation: "predložiti takes the present — a suggestion is a soft order.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The digital eight",
      vocabIds: [
        "b1u21.ovisnost", "b1u21.privatnost", "b1u21.sigurnost", "b1u21.stvarnost",
        "b1u21.mogucnost", "b1u21.korist", "b1u21.steta", "b1u21.digitalan",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Three questions, in order 🧭",
      body:
        "Before you report anything, ask what kind of sentence it was to start with. There are only three answers.\n\n**1 · Was it a STATEMENT?**\n→ **`da` + the ORIGINAL tense.** Only the person moves.\n*«Dolazim.»* → *Rekla je **da dolazi**.*\n*«Bio sam tamo.»* → *Rekao je **da je bio** tamo.*\n\n**2 · Was it a COMMAND or a REQUEST?**\n→ **`da` + the PRESENT**, matched to whoever must act. Or **`neka` + 3rd person** if that person isn't in the room — and `neka` takes no `da`.\n*«Dođi!»* → *Rekla **mi** je **da dođem**.*\n*«Neka Marko dođe.»* → *Rekla je **neka Marko dođe**.*\n\n**3 · Was it a QUESTION?**\n→ **the wh-word**, if it had one. → **`li` on the verb**, if it didn't.\n*«Gdje stanuješ?»* → *Pitala me **gdje stanujem**.*\n*«Imaš li vremena?»* → *Pitala me **imam li** vremena.*\n**Never `ako`. Never `da li`.**\n\nThat is the whole unit. Question 1 catches most sentences; the other two catch everything else.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Je li to bila IZJAVA?", emoji: "💬", example: "DA → da + izvorno vrijeme: Rekla je da dolazi." },
          { label: "Je li to bila NAREDBA?", emoji: "❗", example: "DA → da + prezent: Rekla mi je da dođem. / neka + 3. lice." },
          { label: "Je li to bilo PITANJE?", emoji: "❓", example: "DA → upitna riječ, ili LI na glagolu. Nikad ako." },
        ],
      },
      ttsChips: ["Rekla je da dolazi.", "Rekla mi je da dođem.", "Pitala me imam li vremena."],
    },
    {
      id: "s06",
      type: "teach",
      title: "The one thing that **does** move 📍",
      body:
        "For four lessons you have been told that nothing moves. That was true about **tenses**, and it was worth saying cleanly. Here is the exception, and it is a different category entirely.\n\n**Time and place words re-point**, because *you* are somewhere else and it is some other day:\n\n*U petak, Marko: «Doći ću **sutra**.»*\n→ reported on Saturday: *Rekao je da će doći **danas**.*\n\n*Ana, u kavani: «**Ovdje** sam.»*\n→ reported from home: *Rekla je da je **tamo**.*\n\n| u citatu | kad prenosiš |\n|---|---|\n| sutra | danas (or: u subotu) |\n| jučer | danas / prije |\n| ovdje | tamo |\n| ovaj | taj |\n| sada | onda |\n\n**Why this is not a contradiction.** A tense says *when relative to the speaking*, and Croatian keeps the original speaking as the reference point. A deictic says *when and where relative to ME* — and the *me* has changed, so the word has to.\n\nCarry it as one line:\n\n> ### Tenses never move. Deictics always do.\n\nAnd notice the practical consequence: **if you report on the same day, from the same place, nothing changes at all.** Most of the time you will not need this rule — which is exactly why it was safe to leave it until last.",
      table: {
        caption: "Same quote, reported at two different times",
        headers: ["kad prenosiš", "rečenica"],
        rows: [
          ["odmah, u petak", "Rekao je da će doći **sutra**."],
          ["u subotu", "Rekao je da će doći **danas**."],
          ["tjedan poslije", "Rekao je da će doći **u subotu**."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Tenses never move. Deictics always do.",
        text: "The tense keeps the original speaker's reference point, so it stays. «Sutra» and «ovdje» point at whoever is talking now — and that is you, somewhere else, on a different day.",
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "The wall 🧱",
      body:
        "Five traps. The first two carry most of the marks.\n\n**(a) Backshifting.** The unit's number-one error, and the first thing the writing rubric looks for.\n~~*Rekla je da je dolazila.*~~ ❌ → *Rekla je da **dolazi**.* ✅\n\n**(b) `ako` in a reported question.** The headline error, and the second thing the rubric looks for.\n~~*Pitala me ako imam vremena.*~~ ❌ → *Pitala me **imam li** vremena.* ✅\n\n**(c) `da li` anywhere.** You will hear it. This course writes `li` on the verb.\n~~*Pitala me da li imam vremena.*~~ ❌\n\n**(d) A reported wh-question that is still a question.** No question mark, no inversion, and the person moves.\n~~*Pitala me gdje stanuješ?*~~ ❌ → *Pitala me gdje **stanujem**.* ✅\n\n**(e) Forgetting to move the person.** The tense is frozen; the person never is.\n~~*Marko je rekao da sam spremio podatke.*~~ ❌ (that says he claimed *I* saved them) → *…da **je** spremio podatke.* ✅\n\nAnd two smaller ones carried over: **`neka` never takes `da`**, and **`odbiti` never takes a `da`-clause**.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "If you check only two things",
        text: "Did any tense move? And is there an «ako» carrying a question? Those two account for most of what goes wrong in this unit, and both are worth a separate read-through of anything you write.",
      },
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Mixed, then written",
      subtitle: "Mixed practice first — name the sentence type before you answer it — then the scaffold, the model text, and a conversation of your own.",
      emoji: "✍️",
      items: [
        { emoji: "🔀", label: "Mixed practice", hint: "all three, unlabelled" },
        { emoji: "🧱", label: "The traps", hint: "repair four sentences" },
        { emoji: "📝", label: "The scaffold", hint: "six rows and a model" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Mixed: name the type, then answer",
      items: [
        {
          prompt: "»Spremio sam sve podatke.« → Rekao je da ___ ___ sve podatke.",
          options: ["je spremio", "sam spremio", "će spremiti"],
          correctIndex: 0,
          explanation: "A STATEMENT → original tense, and the person moves from his ja to je.",
        },
        {
          prompt: "»Provjeri komentar.« (rekla je MENI) → Rekla mi je da ___ komentar.",
          options: ["provjerim", "provjeriš", "provjeri"],
          correctIndex: 0,
          explanation: "A COMMAND → da + present, matched to me. The dative mi is the evidence.",
        },
        {
          prompt: "»Imaš li novi profil?« → Pitao me ___ ___ novi profil.",
          options: ["imam li", "ako imam", "da imam"],
          correctIndex: 0,
          explanation: "A yes/no QUESTION → li on the verb. Never ako, never da.",
        },
        {
          prompt: "U petak ti je rekao »Doći ću sutra.« Prenosiš to u subotu:",
          options: [
            "Rekao je da će doći danas.",
            "Rekao je da će doći sutra.",
            "Rekao je da je došao jučer.",
          ],
          correctIndex: 0,
          explanation: "The tense stays a future — but «sutra» has become today, so the deictic moves. Tenses never move; deictics always do.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each sentence type to its rule",
      pairs: [
        { a: "izjava (a statement)", b: "da + the original tense" },
        { a: "naredba (a command)", b: "da + the present, matched to whoever must act" },
        { a: "pitanje s upitnom riječi", b: "keep the wh-word; no da, no question mark" },
        { a: "da/ne pitanje", b: "li on the verb — never ako" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "«Obrisala sam poruku.» → Rekla je da ___ ___ poruku.",
      blanks: [["je"], ["obrisala"]],
      translation: "«I deleted the message.» → She said she'd deleted the message.",
      explanation: "Statement → original tense. The participle keeps her gender, because she's still the one who did it.",
    },
    {
      id: "s12",
      type: "fill",
      text: "«Požuri!» (rekao je MENI) → Rekao mi je da ___ .",
      blanks: [["požurim", "pozurim"]],
      translation: "«Hurry up!» → He told me to hurry.",
      explanation: "Command → da + present, matched to me.",
    },
    {
      id: "s13",
      type: "fill",
      text: "«Zašto nisi odgovorio?» → Pitala me ___ ___ odgovorio.",
      blanks: [["zašto", "zasto"], ["nisam"]],
      translation: "«Why didn't you reply?» → She asked me why I hadn't replied.",
      explanation: "Wh-question → keep the word, drop the question mark, move the person.",
    },
    {
      id: "s14",
      type: "fill",
      text: "U petak: «Doći ću sutra.» Prenosiš u subotu → Rekao je da će doći ___ .",
      blanks: [["danas"]],
      translation: "On Friday: «I'll come tomorrow.» Reported on Saturday.",
      explanation: "The future stays a future. But his «sutra» is your «danas» — deictics always move.",
    },
    {
      id: "s15",
      type: "reorder",
      words: ["Pitala", "me", "imam", "li", "vremena"],
      answers: ["Pitala me imam li vremena.", "Pitala me imam li vremena"],
      en: "She asked me whether I had time.",
      explanation: "The verb comes first inside the embedded question and li clips onto it. li can never lead, and there is no ako and no da anywhere in it.",
    },
    {
      id: "s16",
      type: "reorder",
      words: ["Rekla", "mi", "je", "da", "provjerim", "komentar"],
      answers: ["Rekla mi je da provjerim komentar.", "Rekla mi je da provjerim komentar"],
      en: "She told me to check the comment.",
      explanation: "The dative clitic mi takes second position; then da + the present, matched to me.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "Repair it: »Pitala me ako sam spremio podatke.« → ",
      answers: [
        "Pitala me jesam li spremio podatke.",
        "Pitala me jesam li spremio podatke",
      ],
      hint: "`ako` cannot carry a question. Put li on the auxiliary.",
      explanation: "Pitala me jesam li spremio podatke. With a compound tense, li goes on the auxiliary — jesam li spremio, never «spremio li sam».",
    },
    {
      id: "s18",
      type: "type",
      prompt: "Report a two-line exchange: Ana: »Imam novi mobitel.« / Ana: »Provjeri moj profil.« (rekla je TEBI)",
      answers: [
        "Rekla je da ima novi mobitel i rekla mi je da provjerim njezin profil.",
        "Rekla je da ima novi mobitel i da provjerim njezin profil.",
        "Rekla mi je da ima novi mobitel i da provjerim njezin profil.",
      ],
      hint: "One statement (original tense) and one command (present, matched to you).",
      explanation: "Two types in one sentence: «da ima» keeps her present, «da provjerim» is the relayed order matched to me. And «moj» became «njezin».",
    },
    {
      id: "s19",
      type: "listen-type",
      tts: "Pitala me imam li vremena u subotu.",
      answers: ["Pitala me imam li vremena u subotu.", "Pitala me imam li vremena u subotu"],
      allowSlow: true,
      explanation: "li clipped onto the verb, which stands first in the embedded question.",
    },
    {
      id: "s20",
      type: "listen-type",
      tts: "Rekla mi je da provjerim komentar na njezinu profilu.",
      answers: ["Rekla mi je da provjerim komentar na njezinu profilu.", "Rekla mi je da provjerim komentar na njezinu profilu"],
      allowSlow: true,
      explanation: "Dative mi second, da + present matched to me, and «moj» has become «njezin».",
    },
    {
      id: "s21",
      type: "speak",
      targetHr: "Rekla je da ima novi mobitel i pitala me imam li vremena.",
      targetEn: "She said she had a new phone and asked me whether I had time.",
      phonetic: "REK-la ye da EE-ma NO-vee MO-bee-tel ee PEE-ta-la me EE-mam lee VRE-me-na",
    },
    {
      id: "s22",
      type: "teach",
      title: "The scaffold ✍️",
      body:
        "The writing task asks for **80–150 words reporting a conversation or a message exchange** — real or invented. Six rows, and the paragraph writes itself.\n\nThe rubric checks five things, and they map onto the rows exactly: **one reported statement with its tense intact** · **one reported command or request, person-matched** · **one reported question, with a wh-word or `li`** · **one verb from the L4 network other than *reći*** · **one reason with *jer* or *budući da***.",
      table: {
        caption: "Six rows — fill each one",
        headers: ["red", "što tu ide", "model"],
        rows: [
          ["1 · tko i kada", "who said it and when", "Jučer mi je Ana poslala poruku."],
          ["2 · izjava", "**da** + their tense", "Rekla je da ima novi mobitel."],
          ["3 · pitanje", "wh-word or **li** — never *ako*", "Pitala me imam li vremena."],
          ["4 · naredba", "**da** + present, matched", "Rekla mi je da provjerim komentar."],
          ["5 · drugi glagol", "an L4 verb, not *reći*", "Predložila je da dođemo u pet."],
          ["6 · zašto", "**jer** / **budući da**", "…jer nije bila sigurna."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "success",
        title: "Before you hand it in — two passes",
        text: "First pass: look only at tenses. Did any of them move? Second pass: look only for «ako». Is any of them carrying a question? Those two sweeps catch most of what this unit marks down.",
      },
    },
    {
      id: "s23",
      type: "example",
      title: "The model text — every clause labelled",
      items: [
        { hr: "Jučer mi je Ana poslala poruku.", en: "Ana sent me a message yesterday.", note: "1 · who and when — an ordinary sentence, not everything has to be reported" },
        { hr: "Rekla je da ima novi mobitel i da je stari zaslon bio prljav.", en: "She said she had a new phone and that the old screen had been dirty.", note: "2 · STATEMENT ×2 — her present stays present, her past stays past" },
        { hr: "Spomenula je da je preuzela novu aplikaciju.", en: "She mentioned she'd downloaded a new app.", note: "5 · an L4 verb, not reći" },
        { hr: "Onda me pitala imam li vremena u subotu.", en: "Then she asked me whether I had time on Saturday.", note: "3 · yes/no QUESTION — li on the verb, never ako" },
        { hr: "Pitala me i gdje stanujem sada, jer nije bila sigurna.", en: "She also asked me where I live now, because she wasn't sure.", note: "3 · wh-QUESTION + 6 · the jer-reason. No question mark; person moved." },
        { hr: "Rekla mi je da provjerim komentar na njezinu profilu.", en: "She told me to check the comment on her profile.", note: "4 · COMMAND — da + present matched to me; «moj» → «njezin»" },
        { hr: "Predložila je da dođemo u pet.", en: "She suggested we come at five.", note: "5 · predložiti + da + PRESENT" },
        { hr: "Obećao sam da ću doći, ali sam joj rekao neka Marko provjeri link, budući da ja ne razumijem taj sadržaj.", en: "I promised I'd come, but I told her to have Marko check the link, since I don't understand that content.", note: "obećati + da + FUTURE · neka for absent Marko · budući da for the second reason" },
      ],
    },
    {
      id: "s24",
      type: "mc",
      review: true,
      prompt: "Which of these will the writing rubric penalise hardest?",
      options: [
        "Rekla je da je dolazila.",
        "Rekao je da će doći sutra. (said today, about tomorrow)",
        "Pitala me gdje stanujem.",
      ],
      correctIndex: 0,
      explanation: "The first — a backshift, which is the error the whole unit exists to prevent. The second is fine: reported today, «sutra» still means tomorrow. The third is correct.",
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Three questions, asked before you write anything.**\n\n1. **A STATEMENT?** → `da` + **the original tense**. Only the person moves. *Rekla je da dolazi.*\n2. **A COMMAND or REQUEST?** → `da` + **the present**, matched to whoever must act — or **`neka`** + 3rd person if they aren't there, with no `da`. *Rekla mi je da dođem.*\n3. **A QUESTION?** → the **wh-word** if it had one, **`li` on the verb** if it didn't. **Never `ako`. Never `da li`.** *Pitala me imam li vremena.*\n\n**And the one exception, saved for last:**\n\n> ### Tenses never move. Deictics always do.\n\n*«Doći ću **sutra**»*, reported the next day, becomes *…da će doći **danas**.* Same tense, different word for the day.\n\n**The wall:** backshifting · `ako` carrying a question · `da li` · a reported wh-question that still has a question mark · a person left unmoved. Plus: `neka` never takes `da`, and `odbiti` never takes a `da`-clause.\n\n**Before you hand in the paragraph:** two passes. One for tenses, one for `ako`.\n\nWords tonight: ovisnost, privatnost, sigurnost, stvarnost, mogućnost, korist, šteta, digitalan.\n\nNext: one message, four relays, and four people in three different places — none of whom said anything untrue.",
      vocabIds: [
        "b1u21.ovisnost", "b1u21.privatnost", "b1u21.sigurnost", "b1u21.stvarnost",
        "b1u21.mogucnost", "b1u21.korist", "b1u21.steta", "b1u21.digitalan",
      ],
    },
  ],
  srsCloze: [
    { front: "«Dolazim.» → Rekla je da ___ .", answers: ["dolazi"], back: "dolazi — a statement keeps its original tense.", tts: "Rekla je da dolazi." },
    { front: "«Dođi!» (meni) → Rekla mi je da ___ .", answers: ["dođem"], back: "dođem — a command becomes da + present, matched to whoever must act.", tts: "Rekla mi je da dođem." },
    { front: "«Imaš li vremena?» → Pitala me ___ ___ vremena.", answers: ["imam li"], back: "imam li — a yes/no question takes li on the verb. Never ako.", tts: "Pitala me imam li vremena." },
    { front: "U petak: «Doći ću sutra.» Prenosiš u subotu → …da će doći ___ .", answers: ["danas"], back: "danas — the tense stays, but the deictic moves. Tenses never move; deictics always do.", tts: "Rekao je da će doći danas." },
    { front: "Tenses ___ move; deictics ___ move.", answers: ["never, always", "never always", "nikad, uvijek"], back: "Tenses never; deictics always. One line, and it settles the whole unit.", tts: "Rekao je da će doći danas." },
    { front: "addiction / dependence = ___", answers: ["ovisnost"], back: "ovisnost (f, i-declension) — GEN ovisnosti.", tts: "To je ovisnost." },
    { front: "privacy = ___", answers: ["privatnost"], back: "privatnost (f) — Privatnost je važna.", tts: "Privatnost je važna." },
    { front: "safety / security = ___", answers: ["sigurnost"], back: "sigurnost (f) — Sigurnost podataka je problem.", tts: "Sigurnost podataka je problem." },
    { front: "possibility / option = ___", answers: ["mogućnost", "mogucnost"], back: "mogućnost (f) — Imamo dvije mogućnosti.", tts: "Imamo dvije mogućnosti." },
    { front: "benefit ‖ harm = ___ ‖ ___", answers: ["korist, šteta", "korist steta", "korist, steta"], back: "korist ‖ šteta — and Šteta! on its own means «what a pity».", tts: "Šteta! Nisam znao." },
    { front: "reality = ___", answers: ["stvarnost"], back: "stvarnost (f) — To nije stvarnost.", tts: "To nije stvarnost." },
  ],
  notes: {
    inOneSentence: {
      en: "Ask what kind of sentence it was — statement (original tense), command (present, person-matched, or neka), or question (wh-word or li, never ako) — and remember that tenses never move but deictics always do.",
      exampleHr: "Rekla je da ima novi mobitel, pitala me imam li vremena i rekla mi je da provjerim komentar.",
    },
    deepDive: [
      {
        title: "The three-question sorter",
        body:
          "Everything in this unit is one of three shapes, and one question sorts them: **what kind of sentence was it before you touched it?**\n\n**1 · A STATEMENT** → **`da` + the ORIGINAL tense**. Only the person moves.\n*«Dolazim.»* → *Rekla je **da dolazi**.*\n*«Bio sam tamo.»* → *Rekao je **da je bio** tamo.*\n\n**2 · A COMMAND or a REQUEST** → **`da` + the PRESENT**, matched to whoever has to act. The person told goes in the **dative**, and it is what makes the match readable.\n*«Dođi!»* → *Rekla **mi** je **da dođem**.*\nIf the person who must act is **not in the room** → **`neka` + 3rd person**, and `neka` takes **no `da`**.\n*«Neka Marko dođe.»* → *Rekla je **neka Marko dođe**.*\n\n**3 · A QUESTION** → it depends on whether there was a question word.\nWith one → keep it, drop the question mark, no `da`: *Pitala me **gdje stanujem**.*\nWithout one → **`li` on the verb**, and the verb comes first: *Pitala me **imam li** vremena.*\n**Never `ako`. Never `da li`.**\n\nThe one that is genuinely easy to get wrong is 2 versus 1: *Rekla mi je da **dođem*** (an order relayed) against *Rekla mi je da **ću doći*** (a plan reported). The dative and the tense together tell you which.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "1 · IZJAVA?", emoji: "💬", example: "→ da + izvorno vrijeme" },
            { label: "2 · NAREDBA?", emoji: "❗", example: "→ da + prezent (ili neka + 3. lice)" },
            { label: "3 · PITANJE?", emoji: "❓", example: "→ upitna riječ, ili LI na glagolu" },
          ],
        },
      },
      {
        title: "Tenses never move. Deictics always do.",
        body:
          "Four lessons said nothing moves. That was about **tenses**, and it was worth saying without qualification. Here is the exception, and it belongs to a different category.\n\n**Time and place words re-point**, because the person speaking has changed and so has the day:\n\n| u citatu | kad prenosiš |\n|---|---|\n| sutra | danas (or the actual day: *u subotu*) |\n| jučer | prije / the actual day |\n| ovdje | tamo |\n| ovaj | taj |\n| sada | onda |\n| moj | njegov / njezin |\n\n*U petak: «Doći ću **sutra**.»* → reported on Saturday: *Rekao je da će doći **danas**.*\n*U kavani: «**Ovdje** sam.»* → reported from home: *Rekla je da je **tamo**.*\n\n**Why it isn't a contradiction.** A tense measures time from the moment of the original speaking, and Croatian keeps that as the reference point — so it stays. A deictic measures from **whoever is talking now**, and that is you, somewhere else, on a different day. Two different reference points, two different behaviours.\n\n**And the practical consequence is generous:** if you report on the same day, from the same place, **nothing changes at all**. Most reporting happens within minutes of the conversation. That is exactly why this rule could safely be held back to the last lesson.",
        table: {
          caption: "One quote, three moments",
          headers: ["kad prenosiš", "rečenica"],
          rows: [
            ["odmah, isti dan", "Rekao je da će doći **sutra**."],
            ["sutradan", "Rekao je da će doći **danas**."],
            ["tjedan poslije", "Rekao je da će doći **u subotu**."],
          ],
        },
      },
      {
        title: "The wall of five traps",
        body:
          "**(a) Backshifting.** The unit's number-one error and the first thing the rubric checks.\n\\*~~Rekla je da je dolazila~~ ❌ → *Rekla je da **dolazi**.* ✅\nEnglish does this automatically and invisibly. The fix is a habit, not a rule: **say the original sentence to yourself first**, then put the frame in front of it and change only the person.\n\n**(b) `ako` carrying a question.** The headline error, marked second-hardest.\n\\*~~Pitala me ako imam vremena~~ ❌ → *Pitala me **imam li** vremena.* ✅\n`ako` is the conditional conjunction. A Croatian listener hears it and waits for the *then*, which never comes.\n\n**(c) `da li`.** Real, widely heard, and not what this course produces. `li` goes on the verb.\n\n**(d) A reported wh-question that is still a question.** Three things go: the question mark, any inversion, and any temptation to add `da`. One thing changes: the person.\n\\*~~Pitala me gdje stanuješ?~~ ❌ → *Pitala me gdje **stanujem**.* ✅\n\n**(e) A person left unmoved.** The tense is frozen; the person never is.\n\\*~~Marko je rekao da sam spremio podatke~~ ❌ — that reports him claiming *I* saved them → *…da **je** spremio…* ✅\n\nAnd two carried over from earlier lessons: **`neka` never takes `da`**, and **`odbiti` never takes a `da`-clause** (*Odbio je **doći***).\n\n**Two passes before you hand anything in.** One looking only at tenses. One looking only for `ako`. Between them they catch most of what this unit marks down.",
        diagram: {
          kind: "contrast",
          left: {
            title: "nikad se ne miče",
            emoji: "⏸️",
            lines: [
              { hr: "vrijeme u da-rečenici", en: "the tense inside the clause" },
              { hr: "«Bio sam» → da je bio", en: "past stays past" },
            ],
          },
          right: {
            title: "uvijek se miče",
            emoji: "📍",
            lines: [
              { hr: "osoba: ja → on", en: "the person" },
              { hr: "vrijeme i mjesto: sutra → danas", en: "deictics" },
            ],
          },
        },
      },
      {
        title: "The pre-writing checklist",
        body:
          "The task: **80–150 words reporting a conversation or a message exchange**, real or invented. The rubric checks five things. Build the paragraph out of six rows and all five land automatically.\n\n| red | što tu ide | model |\n|---|---|---|\n| 1 · tko i kada | who said it, and when | *Jučer mi je Ana poslala poruku.* |\n| 2 · izjava | **da** + their tense | *Rekla je da ima novi mobitel.* |\n| 3 · pitanje | wh-word or **li** — never *ako* | *Pitala me imam li vremena.* |\n| 4 · naredba | **da** + present, person-matched | *Rekla mi je da provjerim komentar.* |\n| 5 · drugi glagol | an L4 verb, not *reći* | *Predložila je da dođemo u pet.* |\n| 6 · zašto | **jer** / **budući da** | *…jer nije bila sigurna.* |\n\n**Row 3 carries the most risk**, because it is where `ako` wants to appear. Write the question row last if that helps, and check it on its own.\n\n**Row 5 is free marks.** Any of *spomenuti, priznati, primijetiti, obavijestiti, predložiti, obećati* will do, and using one costs nothing.\n\n**Two sweeps at the end.** First: every verb inside a `da`-clause — is it in the tense the speaker actually used? Second: every `ako` — is it setting up a real condition, or is it carrying a question?",
      },
    ],
    commonMistakes: [
      { wrong: "Rekla je da je dolazila.", right: "Rekla je da **dolazi**.", why: "Trap (a) — a backshift. She said «Dolazim», present, so the report is present. This is the error the unit exists to prevent." },
      { wrong: "Pitala me ako imam vremena.", right: "Pitala me **imam li** vremena.", why: "Trap (b) — the headline error. `ako` is the conditional conjunction and cannot carry a question." },
      { wrong: "Pitala me da li imam vremena.", right: "Pitala me **imam li** vremena.", why: "Trap (c). `da li` is real and widely heard; this course writes li on the verb." },
      { wrong: "Pitala me gdje stanuješ?", right: "Pitala me gdje **stanujem**.", why: "Trap (d). It is no longer a question — the question mark goes — and the person moves." },
      { wrong: "Marko je rekao da sam spremio podatke.", right: "Marko je rekao da **je** spremio podatke.", why: "Trap (e). As written it reports Marko claiming that I saved them. The tense is frozen; the person is not." },
      { wrong: "Rekao je da će doći sutra. (said yesterday, about today)", right: "Rekao je da će doći **danas**.", why: "The tense is right, but the deictic isn't. Tenses never move; deictics always do." },
    ],
    memoryHooks: [
      "**Three questions, in order: statement, command, question?** The answer picks the shape and nothing else has to be decided.",
      "**Tenses never move. Deictics always do.** One line, and it resolves the only apparent contradiction in the unit.",
      "**Say the quote to yourself first, then put the frame in front of it.** Doing it in that order makes backshifting almost impossible.",
      "**Two sweeps before you hand it in: tenses, then «ako».** Those two carry most of the marks.",
      "**If you're reporting on the same day from the same place, nothing moves at all** — which is most of the time.",
    ],
    connects: [
      { label: "Reported statements — the tense that never moves", lessonId: "b1u21l1" },
      { label: "Reported commands — da + present, and neka", lessonId: "b1u21l2" },
      { label: "Reported questions — li, and never ako", lessonId: "b1u21l3" },
      { label: "The da-clause verb network", lessonId: "b1u21l4" },
    ],
    selfCheck: [
      { q: "«Provjeri komentar.» — she told ME. → Rekla mi je da ___ komentar.", a: "provjerim — a command becomes da + present, matched to whoever must act." },
      { q: "On Friday he said «Doći ću sutra.» You report it on Saturday. What changes and what doesn't?", a: "The tense doesn't — it stays a future. «Sutra» does — it becomes «danas». Tenses never move; deictics always do." },
      { q: "Why is «Pitala me ako imam vremena» wrong, and what's the repair?", a: "`ako` is the conditional conjunction and cannot carry a question. The repair is li on the verb: «Pitala me imam li vremena»." },
      { q: "Name the five traps.", a: "(a) backshifting · (b) ako carrying a question · (c) da li · (d) a reported wh-question that still has a question mark · (e) a person left unmoved." },
      { q: "What two passes should you make over anything you write in this unit?", a: "One looking only at tenses inside da-clauses, and one looking only for «ako»." },
    ],
  },
};
