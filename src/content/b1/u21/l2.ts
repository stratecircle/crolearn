import type { Lesson } from "@/types/content";

/**
 * B1 U21 L2 — Poruka za tebe (Reported commands and requests)
 * Spec: curriculum/B1/unit-21.md · grammar-reference §19 "Indirect speech"
 * + §10 (imperative) + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * An imperative cannot be reported as an imperative — Croatian has no such
 * form — so it is replaced, and by what depends entirely on **who has to act**.
 *
 * Five installs: (1) the person is IN the conversation → `da` + the **PRESENT**,
 * matched to whoever must do the thing; (2) the person told goes in the
 * **DATIVE**, which is what makes the person-match readable — *Rekla **mi** je
 * da dođem*; (3) the person is NOT there → **`neka`** + 3rd person present,
 * and `neka` takes **no `da`**; (4) requests behave identically — *Molila me da
 * provjerim poruku*; (5) **`odbiti` takes an INFINITIVE**, never a `da`-clause,
 * and is carded here on purpose so the learner meets one non-member before L4
 * generalizes the pattern.
 *
 * The person-match is a comprehension problem before it is a grammar problem,
 * so every single example carries the dative of the person told. Without it the
 * item is unanswerable, and that is by design.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and routed around: ekran (4, all inside a previous
 * unit's rejection notice → zaslon), zaboraviti (1, inside b1u18's story
 * rejection list — which is a pity, because «don't forget» is the natural
 * reported request; it is rebuilt on **podsjetiti**), naći (1, same class),
 * telefon (0 → mobitel, a2u12), nitko (rejected by name in b1u19's test
 * header). Deferred by unit: no reported questions and no `li`-embedding (L3),
 * **no `ako` in any reported clause**, no `da li` anywhere, no L4 verb network
 * beyond moliti / upozoriti / odbiti, no deictic shift (L5), no Future II
 * (U22), no -nje (U23), no full clitic cluster (U23 — two maximum, and `da` is
 * never counted as one), no participial passive (B2), no comparatives (B2).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U21 cut-outs exist (neka stays icon-only —
 * there is nothing to draw).
 */
export const b1u21l2: Lesson = {
  id: "b1u21l2",
  unitId: "b1u21",
  title: "Poruka za tebe",
  titleEn: "A message for you — reported commands and requests",
  grammarTags: ["indirect-speech", "imperative", "neka", "dative", "clitics"],
  estMinutes: 20,
  vocab: [
    { id: "b1u21.neka", hr: "neka", en: "let / have (him, her, them) — the third-person imperative, for ordering somebody who isn't there", pos: "conj", icon: "➡️", exampleHr: "Neka Marko provjeri link.", exampleEn: "Have Marko check the link." },
    { id: "b1u21.moliti", hr: "moliti", en: "to ask / to request (molim) — the verb behind the «molim» you've said since A1", pos: "verb", icon: "🙏", exampleHr: "Molila me da provjerim poruku.", exampleEn: "She asked me to check the message." },
    { id: "b1u21.podsjetiti", hr: "podsjetiti", en: "to remind (podsjetim; podsjetiti nekoga na + ACC)", pos: "verb", icon: "🧵", exampleHr: "Podsjeti me na to.", exampleEn: "Remind me about that." },
    { id: "b1u21.pozuriti", hr: "požuriti", en: "to hurry (požurim)", pos: "verb", icon: "🏃", exampleHr: "Rekao nam je da požurimo.", exampleEn: "He told us to hurry." },
    { id: "b1u21.ponijeti", hr: "ponijeti", en: "to take along / bring with you (ponesem) — donijeti brings it TO the speaker; ponijeti takes it WITH you", pos: "verb", icon: "🎒", exampleHr: "Rekao mi je da ponesem mobitel.", exampleEn: "He told me to bring my phone." },
    { id: "b1u21.upozoriti", hr: "upozoriti", en: "to warn (upozorim; upozoriti nekoga da…)", pos: "verb", icon: "🚸", exampleHr: "Upozorila me da je lozinka stara.", exampleEn: "She warned me the password was old." },
    { id: "b1u21.link", hr: "link", en: "a link (m)", pos: "noun", gender: "m", icon: "🔗", exampleHr: "Poslao mi je link.", exampleEn: "He sent me a link." },
    { id: "b1u21.odbiti", hr: "odbiti", en: "to refuse / turn down (odbijem) — takes an INFINITIVE, never a da-clause", pos: "verb", icon: "✋", exampleHr: "Odbio je doći.", exampleEn: "He refused to come." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Poruka za tebe",
      subtitle: "An order cannot be relayed as an order — Croatian has no reported imperative. So it becomes something else, and which something depends on who has to do the thing.",
      emoji: "✉️",
      items: [
        { emoji: "🔀", label: "da + present", hint: "matched to whoever must act" },
        { emoji: "👤", label: "The dative", hint: "Rekla MI je…" },
        { emoji: "➡️", label: "neka", hint: "for somebody not in the room" },
        { emoji: "🙏", label: "New words", hint: "moliti, podsjetiti, ponijeti…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Who has to do it?",
      subtitle: "«Dođi!» has no person in it — the imperative hides one. Relaying it means putting that person back, and it is almost never the speaker.",
      emoji: "🔀",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "yesterday's rule, twice" },
        { emoji: "🃏", label: "New words", hint: "the asking eight" },
        { emoji: "⚙️", label: "The swap", hint: "imperative → present" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday, and one older thing",
      items: [
        {
          prompt: "L1: »Dolazim.« → Rekla je da ___ .",
          options: ["dolazi", "je dolazila", "će doći"],
          correctIndex: 0,
          explanation: "Present stays present. Croatian never backshifts — and nothing today changes that.",
        },
        {
          prompt: "L1: »Bio sam tamo.« → Rekao je da ___ ___ tamo.",
          options: ["je bio", "bude", "je bio bio"],
          correctIndex: 0,
          explanation: "Past stays past, clitic second in the da-clause.",
        },
        {
          prompt: "U10 imperative: how do you tell one friend to come?",
          options: ["Dođi!", "Dođem!", "Doći!"],
          correctIndex: 0,
          explanation: "Dođi! — the 2nd person singular imperative. In about two minutes you are going to take that form apart.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The asking eight",
      vocabIds: [
        "b1u21.neka", "b1u21.moliti", "b1u21.podsjetiti", "b1u21.pozuriti",
        "b1u21.ponijeti", "b1u21.upozoriti", "b1u21.link", "b1u21.odbiti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The imperative disappears 🔀",
      body:
        "There is no reported imperative in Croatian. You cannot say ~~*Rekla mi je da dođi*~~ ❌. The imperative has to be replaced, and what replaces it is **`da` + the PRESENT**:\n\n*«Dođi!»* → *Rekla mi je **da dođem**.*\n\nNotice what happened to the person. *Dođi!* is addressed to somebody, and that somebody is **me** — so when I relay it, the verb becomes **first person**: *dođem*. The imperative hid the person; the report has to put them back.\n\n| tko je dobio naredbu | kako prenosiš |\n|---|---|\n| meni | Rekla **mi** je da **dođem**. |\n| tebi | Rekla **ti** je da **dođeš**. |\n| nama | Rekao **nam** je da **požurimo**. |\n| njemu | Rekla **mu** je da **dođe**. |\n\n**The person told goes in the DATIVE**, and it is nearly always a clitic: *mi, ti, mu, joj, nam, vam, im*. It sits in second position, exactly where §12 has always put it — *Rekla **mi** je…* — and it is what makes the sentence readable. Without it, *Rekla je da dođem* is oddly incomplete: who was told?\n\n⚠️ **The tense is the PRESENT, not the future.** *Rekla mi je da **dođem***, never ~~*da ću doći*~~. That is a statement about the future, not a relayed order.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "«Dođi!»", emoji: "❗", example: "an imperative — the person is hidden inside it" },
          { label: "Who was told?", emoji: "👤", example: "meni → so the dative clitic is mi" },
          { label: "da + present, matched", emoji: "🔀", example: "Rekla mi je da dođem." },
        ],
      },
      ttsChips: ["Rekla mi je da dođem.", "Rekao nam je da požurimo.", "Molila me da provjerim poruku."],
    },
    {
      id: "s06",
      type: "teach",
      title: "**neka** — for somebody who isn't there ➡️",
      body:
        "What if the person who has to act is not in the conversation at all? English manages with *have him check it* or *tell him to check it*. Croatian has a dedicated word:\n\n***Neka** Marko provjeri link.* — Have Marko check the link.\n*Rekla je **neka** Marko provjeri link.* — She said to have Marko check the link.\n\n`neka` is a genuine **third-person imperative** — Croatian's only way to give an order to somebody absent — and it has one quirk worth memorizing:\n\n**`neka` takes NO `da`.** ~~*Rekla je neka da dođe*~~ ❌ → *Rekla je **neka dođe**.* ✅\n\nThe verb after it is an ordinary **3rd person present**: *neka dođe*, *neka provjere*, *neka požuri*.\n\n### Requests work the same way\n\n*moliti* relays exactly like *reći* — the softness is in the verb, not the grammar:\n\n*«Molim te, provjeri poruku.»* → *Molila me **da provjerim** poruku.*\n*«Upozori Marka.»* → *Rekla mi je **da upozorim** Marka.*\n\n### And one verb that refuses to join\n\n**`odbiti` takes an INFINITIVE**, never a `da`-clause:\n\n*Odbio je **doći**.* ✅  ~~*Odbio je da dođe.*~~ ❌\n\nThat second form is real Croatian in some regions and it is not what this course teaches. `odbiti` is carded today, one lesson early, precisely so that you meet a non-member before Unit 21's L4 hands you the whole network.",
      table: {
        caption: "Three ways to relay an order",
        headers: ["situacija", "oblik", "primjer"],
        rows: [
          ["the person is in the conversation", "**da** + present, matched", "Rekla mi je da dođem."],
          ["…and it's a request", "**da** + present, with moliti", "Molila me da provjerim poruku."],
          ["the person is NOT there", "**neka** + 3rd person, no da", "Rekla je neka Marko dođe."],
          ["they said no", "**odbiti** + infinitive", "Odbio je doći."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Two things that are never right",
        text: "«Rekla mi je da dođi» — the imperative cannot survive; it becomes a present matched to whoever must act. And «Rekla je neka da dođe» — neka never takes da.",
      },
    },
    {
      id: "s07",
      type: "example",
      title: "Orders, relayed",
      items: [
        { hr: "«Dođi!» → Rekla mi je da dođem.", en: "«Come!» → She told me to come.", note: "She told ME, so I'm the one coming: dođem." },
        { hr: "«Požurite!» → Rekao nam je da požurimo.", en: "«Hurry up!» → He told us to hurry.", note: "Plural you → plural we. The dative nam does the pointing." },
        { hr: "«Provjeri poruku.» → Molila me da provjerim poruku.", en: "«Check the message.» → She asked me to check the message.", note: "A request relays exactly like an order." },
        { hr: "«Ponesi mobitel.» → Rekao mi je da ponesem mobitel.", en: "«Bring your phone.» → He told me to bring my phone.", note: "ponijeti — take it WITH you. donijeti would bring it TO him." },
        { hr: "«Podsjeti me!» → Rekla mi je da je podsjetim.", en: "«Remind me!» → She told me to remind her.", note: "Her «me» becomes «je» — the person moves, as always." },
        { hr: "«Neka Marko provjeri link.» → Rekla je neka Marko provjeri link.", en: "«Have Marko check the link.» → She said to have Marko check the link.", note: "Marko isn't in the conversation, so: neka, and no da." },
        { hr: "Odbio je doći.", en: "He refused to come.", note: "odbiti takes an infinitive. Never «da dođe»." },
        { hr: "Upozorila me da je lozinka stara.", en: "She warned me the password was old.", note: "upozoriti + dative-ish object + da — and the tense inside is untouched." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Match the person",
      subtitle: "Every item from here on asks the same thing first: who was told, and therefore who has to do it?",
      emoji: "👤",
      items: [
        { emoji: "✅", label: "Quick check", hint: "da or neka? whose person?" },
        { emoji: "🔤", label: "Build them", hint: "relay four orders" },
        { emoji: "🔊", label: "Listen", hint: "who is being told?" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: who has to act?",
      items: [
        {
          prompt: "»Dođi!« (rekla je MENI) → Rekla mi je da ___ .",
          options: ["dođem", "dođeš", "dođi"],
          correctIndex: 0,
          explanation: "She told ME, so I'm the one who has to come: dođem. The imperative form dođi cannot survive a report.",
        },
        {
          prompt: "»Požurite!« (rekao je NAMA) → Rekao nam je da ___ .",
          options: ["požurimo", "požurite", "požuri"],
          correctIndex: 0,
          explanation: "He told US, so we're the ones hurrying: požurimo. The dative nam is what tells you.",
        },
        {
          prompt: "Marko nije tu. Kako prenosiš »Neka Marko provjeri link«?",
          options: [
            "Rekla je neka Marko provjeri link.",
            "Rekla je neka da Marko provjeri link.",
            "Rekla je da Marko provjeri li link.",
          ],
          correctIndex: 0,
          explanation: "neka takes NO da. And option 3 is a reported question, which is a different lesson entirely.",
        },
        {
          prompt: "»Ne želim doći.« Kako kažeš da je odbio?",
          options: ["Odbio je doći.", "Odbio je da dođe.", "Odbio je da će doći."],
          correctIndex: 0,
          explanation: "odbiti takes an infinitive. «Odbio je da dođe» is real Croatian in some regions and is not what this course produces.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each order to its report",
      pairs: [
        { a: "«Dođi!» (meni)", b: "Rekla mi je da dođem." },
        { a: "«Požurite!» (nama)", b: "Rekao nam je da požurimo." },
        { a: "«Neka Marko dođe.»", b: "Rekla je neka Marko dođe." },
        { a: "«Ne dolazim.»", b: "Odbio je doći." },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "«Dođi!» → Rekla mi je da ___ .",
      blanks: [["dođem"]],
      translation: "«Come!» → She told me to come.",
      wordBank: ["dođem", "dođeš", "dođi"],
      explanation: "She told ME. The dative mi is the evidence, and the verb matches it: dođem.",
    },
    {
      id: "s12",
      type: "fill",
      text: "«Ponesi mobitel.» → Rekao mi je da ___ mobitel.",
      blanks: [["ponesem"]],
      translation: "«Bring your phone.» → He told me to bring my phone.",
      explanation: "ponijeti → ponesem. Present, first person, because he told me.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Marko nije tu. Rekla je ___ Marko provjeri link.",
      blanks: [["neka"]],
      translation: "Marko isn't here. She said to have Marko check the link.",
      explanation: "neka — the third-person imperative, for somebody who isn't in the conversation. And it takes no da.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Relay it: Ana ti kaže »Provjeri poruku.« → (she ASKED you — use moliti)",
      answers: [
        "Molila me da provjerim poruku.",
        "Molila me da provjerim poruku",
        "Ana me molila da provjerim poruku.",
      ],
      hint: "Dative of the person asked, then da + present matched to them.",
      explanation: "Molila me da provjerim poruku. A request relays with exactly the same machinery as an order — moliti just makes it softer.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Relay it: »Neka korisnik instalira aplikaciju.« → (Rekla je…)",
      answers: [
        "Rekla je neka korisnik instalira aplikaciju.",
        "Rekla je neka korisnik instalira aplikaciju",
      ],
      hint: "neka survives the report intact, and still takes no da.",
      explanation: "Rekla je neka korisnik instalira aplikaciju. The user isn't in the conversation, so neka is the only option — and there is no da anywhere in it.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Rekla mi je da dođem u pet.",
      answers: ["Rekla mi je da dođem u pet.", "Rekla mi je da dođem u pet"],
      allowSlow: true,
      explanation: "Dative mi in second position; da + present matched to me.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Rekla je neka Marko provjeri link.",
      answers: ["Rekla je neka Marko provjeri link.", "Rekla je neka Marko provjeri link"],
      allowSlow: true,
      explanation: "neka + 3rd person present. No da anywhere.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Rekao nam je da požurimo.",
      targetEn: "He told us to hurry.",
      phonetic: "RE-kao nam ye da po-ZHOO-ree-mo",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "L1 review: »Upozorila me da je lozinka ___ .« (that the password WAS old — she said «Lozinka je stara.»)",
      options: ["stara", "bila stara", "bit će stara"],
      correctIndex: 0,
      explanation: "stara — she used the present, so the report uses the present. Yesterday's rule is still running underneath everything today.",
      tts: "Upozorila me da je lozinka stara.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U12 review: where does the dative clitic go in »Rekla ___ je da dođem«?",
      options: [
        "second position — Rekla mi je…",
        "at the end — Rekla je da dođem mi",
        "before the verb — Mi rekla je…",
      ],
      correctIndex: 0,
      explanation: "Second position, right after the first word. Same law as always — and here it carries the information that makes the whole sentence readable.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**An imperative cannot be relayed as an imperative.** It becomes something else, and which something depends on **who has to act**.\n\n- **They're in the conversation** → **`da` + the PRESENT**, matched to them. *«Dođi!»* → *Rekla **mi** je da **dođem**.*\n- **The person told goes in the DATIVE** — *mi, ti, mu, joj, nam, vam, im* — in second position. It is what makes the person-match readable.\n- **They're NOT there** → **`neka`** + 3rd person present, and **`neka` takes no `da`**. *Rekla je **neka Marko dođe**.*\n- **A request is the same machinery**, softer verb: *Molila me da provjerim poruku.*\n- **`odbiti` takes an INFINITIVE** and never joins: *Odbio je **doći**.*\n\n⚠️ Two forms that are never right: ~~*Rekla mi je da **dođi***~~ and ~~*Rekla je **neka da** dođe*~~.\n\nAnd underneath all of it, yesterday's rule is still running: nothing about the tense of a reported **statement** has changed.\n\nTomorrow: questions — and the single most durable mistake English speakers make in Croatian.",
      vocabIds: [
        "b1u21.neka", "b1u21.moliti", "b1u21.podsjetiti", "b1u21.pozuriti",
        "b1u21.ponijeti", "b1u21.upozoriti", "b1u21.link", "b1u21.odbiti",
      ],
    },
  ],
  srsCloze: [
    { front: "«Dođi!» (meni) → Rekla mi je da ___ .", answers: ["dođem"], back: "dođem — she told ME, so I'm the one coming. The imperative cannot survive a report.", tts: "Rekla mi je da dođem." },
    { front: "«Požurite!» (nama) → Rekao nam je da ___ .", answers: ["požurimo", "pozurimo"], back: "požurimo — he told US, so we're the ones hurrying.", tts: "Rekao nam je da požurimo." },
    { front: "Marko nije tu → Rekla je ___ Marko dođe.", answers: ["neka"], back: "neka — the third-person imperative, for somebody who isn't there. It takes NO da.", tts: "Rekla je neka Marko dođe." },
    { front: "A reported command takes da + the ___ , matched to whoever must act.", answers: ["present", "prezent"], back: "The present — never the imperative, and never the future.", tts: "Rekla mi je da dođem." },
    { front: "Odbio je ___ . (to come — careful)", answers: ["doći"], back: "doći — odbiti takes an INFINITIVE, never a da-clause.", tts: "Odbio je doći." },
    { front: "to ask / request = ___", answers: ["moliti", "molim"], back: "moliti — the verb behind the molim you've said since A1.", tts: "Molila me da provjerim poruku." },
    { front: "to remind = ___", answers: ["podsjetiti"], back: "podsjetiti (podsjetim) — podsjetiti nekoga na + ACC.", tts: "Podsjeti me na to." },
    { front: "to take along WITH you (not toward the speaker) = ___", answers: ["ponijeti"], back: "ponijeti (ponesem) — donijeti brings it TO the speaker.", tts: "Rekao mi je da ponesem mobitel." },
    { front: "to warn = ___", answers: ["upozoriti"], back: "upozoriti (upozorim) — upozoriti nekoga da…", tts: "Upozorila me da je lozinka stara." },
    { front: "to refuse = ___", answers: ["odbiti"], back: "odbiti (odbijem) — and it takes an infinitive.", tts: "Odbio je doći." },
  ],
  notes: {
    inOneSentence: {
      en: "An imperative cannot be reported, so it becomes DA + the present, matched to whoever has to act — with the person told in the dative, and NEKA + 3rd person when that person isn't in the room.",
      exampleHr: "Rekla mi je da dođem u pet i neka Marko provjeri link.",
    },
    deepDive: [
      {
        title: "Why the imperative can't survive",
        body:
          "*Dođi!* is addressed to somebody standing in front of you. The moment you relay it, that somebody has changed — and the imperative has no way to say who it now means. So Croatian replaces it:\n\n> **`da` + the PRESENT, in the person of whoever has to act**\n\n*«Dođi!»* → *Rekla mi je **da dođem**.*\n\nThe person is the whole difficulty, and it is a comprehension problem before it is a grammar one: you cannot choose the ending until you know who was told.\n\n| tko je dobio naredbu | dativ | glagol | rečenica |\n|---|---|---|---|\n| meni | **mi** | dođem | Rekla mi je da dođem. |\n| tebi | **ti** | dođeš | Rekla ti je da dođeš. |\n| njemu | **mu** | dođe | Rekla mu je da dođe. |\n| njoj | **joj** | dođe | Rekao joj je da dođe. |\n| nama | **nam** | dođemo | Rekao nam je da dođemo. |\n| vama | **vam** | dođete | Rekla vam je da dođete. |\n\n**The dative is not optional decoration.** It is the only thing in the sentence that says who was told, and without it the report is genuinely ambiguous. It is a clitic, so §12 puts it in second position: *Rekla **mi** je…*, never \\*~~Rekla je mi~~.\n\n⚠️ **The tense is the present, never the future.** *Rekla mi je da **dođem*** is a relayed order. *Rekla mi je da **ću doći*** is a relayed statement about what I will do — a different sentence entirely.",
        table: {
          caption: "The imperative, dismantled",
          headers: ["citat", "tko je dobio naredbu", "kako prenosiš"],
          rows: [
            ["«Dođi!»", "meni", "Rekla **mi** je da **dođem**."],
            ["«Požurite!»", "nama", "Rekao **nam** je da **požurimo**."],
            ["«Provjeri poruku.»", "meni", "Molila **me** da **provjerim** poruku."],
            ["«Ponesi mobitel.»", "meni", "Rekao **mi** je da **ponesem** mobitel."],
            ["«Podsjeti me!»", "meni, o njoj", "Rekla **mi** je da **je podsjetim**."],
          ],
        },
      },
      {
        title: "neka — ordering somebody who isn't there",
        body:
          "If the person who has to act is not in the conversation, `da` + present will not do the job — there is nobody present to match. Croatian has a dedicated third-person imperative:\n\n***Neka** Marko provjeri link.* — Have Marko check the link.\n*Rekla je **neka** Marko provjeri link.*\n***Neka** dođu u pet.* — Have them come at five.\n\nTwo things to fix in memory:\n\n**`neka` takes no `da`.** \\*~~Rekla je neka da dođe~~ ❌ → *Rekla je **neka dođe**.* ✅ The two words do the same job and never stack.\n\n**The verb after `neka` is an ordinary 3rd-person present** — *neka dođe*, *neka provjeri*, *neka požure*. Nothing else changes.\n\n`neka` is also used directly, not only in reports, and it is worth having for its own sake: *Neka ide.* (Let him go.) · *Neka bude tako.* (Let it be so.)",
        diagram: {
          kind: "contrast",
          left: {
            title: "u razgovoru → da + prezent",
            emoji: "👥",
            lines: [
              { hr: "Rekla mi je da dođem.", en: "she told me to come" },
              { hr: "Rekao nam je da požurimo.", en: "he told us to hurry" },
            ],
          },
          right: {
            title: "nije tu → neka + 3. lice",
            emoji: "➡️",
            lines: [
              { hr: "Rekla je neka Marko dođe.", en: "she said to have Marko come" },
              { hr: "Neka provjere link.", en: "have them check the link" },
            ],
          },
        },
      },
      {
        title: "Requests, warnings, and the verb that refuses to join",
        body:
          "**Requests use the same machinery.** The softness lives in the verb, not the grammar:\n\n*Molila me **da provjerim** poruku.* — She asked me to check the message.\n*Upozorila me **da je** lozinka stara.* — She warned me the password was old.\n\nNote the difference between those two. *moliti* relays a **request** — so its `da`-clause takes the **present**, person-matched, exactly like an order. *upozoriti* relays a **statement** — so its `da`-clause keeps whatever tense the warning was in, exactly like L1. The verb tells you which kind of clause follows.\n\n**And one verb refuses to join at all.** `odbiti` takes an **infinitive**:\n\n*Odbio je **doći**.* ✅  \\*~~Odbio je da dođe.~~ ❌\n\nThat second form is genuinely used, especially further east, and you will hear it. It is not what this course produces, and knowing that `odbiti` sits outside the pattern is worth more than it looks — Unit 21's L4 hands you a whole network of `da`-verbs, and the fastest way to over-generalize a pattern is to meet it without ever meeting an exception.\n\nOther infinitive-takers you already own: *moći*, *morati*, *htjeti*, *znati* (in the sense «know how to»).",
      },
    ],
    commonMistakes: [
      { wrong: "Rekla mi je da dođi.", right: "Rekla mi je da **dođem**.", why: "There is no reported imperative in Croatian. It becomes a present, matched to whoever has to act — and she told me, so it's first person." },
      { wrong: "Rekla mi je da dođeš.", right: "Rekla mi je da **dođem**.", why: "She told ME — the dative mi says so — so I'm the one who has to come." },
      { wrong: "Rekla je neka da Marko dođe.", right: "Rekla je **neka** Marko dođe.", why: "`neka` and `da` do the same job and never stack. neka takes no da, ever." },
      { wrong: "Rekla mi je da ću doći.", right: "Rekla mi je da **dođem**.", why: "The future turns it into a relayed statement about what I will do. A relayed order takes the present." },
      { wrong: "Odbio je da dođe.", right: "Odbio je **doći**.", why: "odbiti takes an infinitive. The da-form is real in some regions and is not what this course teaches." },
      { wrong: "Rekla je mi da dođem.", right: "Rekla **mi** je da dođem.", why: "The dative clitic takes second position — §12, unchanged since Unit 12." },
    ],
    memoryHooks: [
      "**Find the dative first.** *Rekla **mi** je…* tells you who was told, and therefore which person the verb has to be. Read it before you choose the ending.",
      "**The imperative hides a person; the report has to name one.** That is the whole lesson in one line.",
      "**neka is the «not here» word.** In the room → *da* + present. Not in the room → *neka* + 3rd person, and no *da*.",
      "**Present, not future.** *da dođem* is an order relayed; *da ću doći* is a plan reported. Two different sentences.",
      "**odbiti is the exception you meet early on purpose.** One non-member now saves you over-generalizing the whole network tomorrow.",
    ],
    connects: [
      { label: "Reported statements — the tense that never moves", lessonId: "b1u21l1" },
      { label: "The imperative, before it gets dismantled", lessonId: "a2u11l4" },
      { label: "Clitics: second position, and the dative", lessonId: "a2u12l2" },
      { label: "Next: reported questions, and the unit's big error", lessonId: "b1u21l3" },
    ],
    selfCheck: [
      { q: "«Dođi!» — she told ME. → Rekla mi je da ___ .", a: "dođem. The dative mi says I was told, so I'm the one coming." },
      { q: "Why is «Rekla je neka da Marko dođe» wrong?", a: "neka takes no da. They do the same job and never stack: «Rekla je neka Marko dođe»." },
      { q: "What's the difference between «Rekla mi je da dođem» and «Rekla mi je da ću doći»?", a: "The first relays an order. The second relays a statement about what I intend to do." },
      { q: "How do you say «He refused to come»?", a: "Odbio je doći — with an infinitive. odbiti never takes a da-clause in this course." },
      { q: "Why does upozoriti keep the original tense while moliti takes a present?", a: "upozoriti relays a statement, so L1's rule applies. moliti relays a request, which behaves like an order — da + present, person-matched." },
    ],
  },
};
