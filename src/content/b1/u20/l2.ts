import type { Lesson } from "@/types/content";

/**
 * B1 U20 L2 — Kako se živi u Hrvatskoj (The impersonal se)
 * Spec: curriculum/B1/unit-20.md · grammar-reference §18 "The se-constructions"
 * + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The second half of L1. Same word, opposite situation: take the thing away and
 * there is nothing left to be the subject, so the verb has nothing to agree
 * with and **freezes in the 3rd person singular** — neuter singular in the past.
 *
 * Four installs: (1) the frozen form, (2) the three English readings of one
 * Croatian sentence, (3) the modal stack — može se / mora se / **ne smije se** +
 * infinitive, which is the single most useful frame in the unit for anyone
 * actually in Croatia, and (4) the hard limit: **one `se` per clause, ever** —
 * so a verb that already owns a lexical `se` cannot take a second one, and the
 * repair is to put a real subject back in.
 *
 * L1 and L2 are one lesson in two halves and the recap says so. The contrast
 * diagram in s06 is the unit's spine and every later lesson points back at it.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and routed around: pušiti (0 — the canonical «no
 * smoking» sign is rebuilt on baciti/smeće), parkirati (0), osjećati se (0 —
 * the one-`se`-per-clause repair is demonstrated with slagati se + ljudi, both
 * carded, instead of the usual «kako se čovjek osjeća»), prodavati (0),
 * graditi (0), svjetlo (0), također (0), drugačije / drukčije (0), mirno (0),
 * nitko (rejected by name in b1u19's test header), cesta (2, both inside
 * b1u19's own rejection notice), gasiti (3, same). Deferred by unit: no kaže se
 * / smatra se (L3), no treba + inf (L4), no participial passive (B2 — and this
 * lesson is where a learner most wants *zabranjeno je*, so the callout names it),
 * no comparatives, no Future II.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U20 cut-outs exist (javni stays icon-only —
 * there is nothing to draw).
 */
export const b1u20l2: Lesson = {
  id: "b1u20l2",
  unitId: "b1u20",
  title: "Kako se živi u Hrvatskoj",
  titleEn: "How one lives in Croatia — the impersonal se",
  grammarTags: ["impersonal-se", "modal-stack", "clitics", "environment"],
  estMinutes: 20,
  vocab: [
    { id: "b1u20.nacin", hr: "način", en: "way / manner (m) — na taj način, na koji način", pos: "noun", gender: "m", icon: "🛤️", exampleHr: "To je dobar način.", exampleEn: "That's a good way." },
    { id: "b1u20.pravilo", hr: "pravilo", en: "rule (n)", pos: "noun", gender: "n", icon: "📋", exampleHr: "To je novo pravilo.", exampleEn: "That's a new rule." },
    { id: "b1u20.cist", hr: "čist", en: "clean (čista, čisto; definite čisti)", pos: "adj", icon: "✨", exampleHr: "Park je čist.", exampleEn: "The park is clean." },
    { id: "b1u20.prljav", hr: "prljav", en: "dirty (prljava, prljavo)", pos: "adj", icon: "🟤", exampleHr: "Ulica je prljava.", exampleEn: "The street is dirty." },
    { id: "b1u20.baciti", hr: "baciti", en: "to throw / throw away (pf bacim · impf bacati, bacam)", pos: "verb", icon: "🤾", exampleHr: "Ne baca se staklo u tu kantu.", exampleEn: "Glass isn't thrown in that bin." },
    { id: "b1u20.odvojiti", hr: "odvojiti", en: "to separate / sort (pf odvojim · impf odvajati, odvajam) — odvajati otpad is what sorting your rubbish is called", pos: "verb", icon: "↔️", exampleHr: "Kod nas se odvaja otpad.", exampleEn: "We sort our waste where I live." },
    { id: "b1u20.spremnik", hr: "spremnik", en: "container (m) — the big one out on the street; kanta is the one in your kitchen", pos: "noun", gender: "m", icon: "🗄️", exampleHr: "Spremnik je ispred zgrade.", exampleEn: "The container is in front of the building." },
    { id: "b1u20.javni", hr: "javni", en: "public (javna, javno) — javni prijevoz; the adverb javno = publicly", pos: "adj", icon: "🏛️", exampleHr: "Javni prijevoz je dobar.", exampleEn: "Public transport is good." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kako se živi u Hrvatskoj",
      subtitle: "Yesterday the verb agreed with the thing. Today there is no thing. Watch what the verb does — and then stops doing.",
      emoji: "🇭🇷",
      items: [
        { emoji: "🧊", label: "The frozen verb", hint: "nothing to agree with" },
        { emoji: "🚫", label: "Ne smije se…", hint: "every rule in the country" },
        { emoji: "☝️", label: "One se per clause", hint: "ever, no exceptions" },
        { emoji: "📋", label: "New words", hint: "pravilo, spremnik, čist…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Take the thing away",
      subtitle: "«Ovdje se recikliraju boce» has a subject. «Kako se živi u Hrvatskoj?» has none at all — and that changes exactly one thing.",
      emoji: "🧊",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "yesterday's agreement, twice" },
        { emoji: "🃏", label: "New words", hint: "the rules eight" },
        { emoji: "⚙️", label: "The freeze", hint: "3sg — and neuter in the past" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday, twice",
      items: [
        {
          prompt: "»Ovdje se ___ boce.« (bottles are recycled here)",
          options: ["recikliraju", "reciklira", "recikliram"],
          correctIndex: 0,
          explanation: "boce is the plural subject, so the verb is plural. Hold on to that — in five minutes you will meet a sentence where the verb has nothing at all to look at.",
        },
        {
          prompt: "»Papir se ___ .« (paper is recycled)",
          options: ["reciklira", "recikliraju", "reciklirati"],
          correctIndex: 0,
          explanation: "papir is one masculine thing → singular. So far the verb has always had something to agree with.",
        },
        {
          prompt: "U12: where does the clitic `se` stand?",
          options: [
            "second position in its clause",
            "immediately before the verb, wherever that is",
            "at the end of the clause",
          ],
          correctIndex: 0,
          explanation: "Second position. Nothing in today's lesson changes that — the only thing changing is the verb's ending.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The rules eight",
      vocabIds: [
        "b1u20.nacin", "b1u20.pravilo", "b1u20.cist", "b1u20.prljav",
        "b1u20.baciti", "b1u20.odvojiti", "b1u20.spremnik", "b1u20.javni",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Nothing to agree with 🧊",
      body:
        "Yesterday every sentence had a **thing** in it, and the verb agreed with that thing. Now take the thing away:\n\n*Ovdje se **ne baca** smeće.* — Rubbish isn't thrown here.\n*Kako se **živi** u Hrvatskoj?* — How does one live in Croatia?\n*U Hrvatskoj se puno **hoda**.* — People walk a lot in Croatia.\n\nThere is no subject in any of those. *Smeće* is not the subject — it is the object of an ownerless verb, and you can tell because the sentence works fine without it (*Ovdje se ne baca.*). With no subject, the verb has nothing to look at, so it **freezes in the 3rd person singular** and stays there no matter what else happens in the sentence.\n\n**In the past it freezes in the NEUTER singular**, which looks wrong to you after two levels of making participles agree:\n\n*Prije se **živjelo** dobro.* — Life used to be good. / People used to live well.\n\nNot *živio*, not *živjela* — **živjelo**. There is no subject to be masculine or feminine, so Croatian falls back on the neuter. This is the only place in the language where a past tense has nobody to agree with.",
      diagram: {
        kind: "contrast",
        left: {
          title: "IMA STVARI — there is a thing",
          emoji: "🎯",
          lines: [
            { hr: "Ovdje se recikliraju boce.", en: "Bottles are recycled here." },
            { hr: "Papir se reciklira.", en: "Paper is recycled." },
            { hr: "→ subjekt postoji, glagol se slaže", en: "→ the thing is the subject, so the verb agrees with it" },
          ],
        },
        right: {
          title: "NEMA STVARI — there is no thing",
          emoji: "🧊",
          lines: [
            { hr: "Ovdje se ne baca smeće.", en: "Rubbish isn't thrown here." },
            { hr: "Kako se živi u Hrvatskoj?", en: "How does one live in Croatia?" },
            { hr: "→ nema subjekta, glagol je zamrznut", en: "→ no subject, so the verb freezes in the 3rd person singular" },
          ],
        },
      },
      ttsChips: ["Ovdje se ne baca smeće.", "Kako se živi u Hrvatskoj?", "Prije se živjelo dobro."],
    },
    {
      id: "s06",
      type: "teach",
      title: "One Croatian sentence, three English ones 🔁",
      body:
        "*Ovdje se ne baca smeće.*\n\nThat single sentence is all three of these at once:\n\n- *Rubbish isn't thrown here.* (a passive)\n- *You can't throw rubbish here.* (a generic **you** — not you personally)\n- *One doesn't throw rubbish here.* (an indefinite **one**)\n\nEnglish makes you choose. Croatian does not, and refusing to pick a favourite is the fastest way to stop translating and start recognizing the shape.\n\nThis is why the construction is **everywhere on signs and in rules** — a rule is precisely a statement about what is done, addressed to nobody in particular. Which brings us to the frame you will use more than any other in this unit:\n\n### The modal stack\n\nA modal verb in the frozen 3sg, `se` in second position, and an **infinitive** after it:\n\n*Ovdje se **ne smije** bacati staklo.* — Glass must not be thrown here.\n*Kako se **može** doći do parka?* — How can one get to the park?\n*To se **mora** odvojiti.* — That has to be sorted.\n\nYou carded **smjeti** back in A2 and it has been waiting for exactly this.\n\n⚠️ A real Croatian sign often says *Zabranjeno je…* instead. That is the **participial passive** — real Croatian, a different construction, and B2. Everything in this unit is built the other way.",
      table: {
        caption: "The modal stack — frozen modal + se + infinitive",
        headers: ["okvir", "značenje", "primjer"],
        rows: [
          ["**mora se** + inf", "has to be done", "To se mora odvojiti."],
          ["**ne smije se** + inf", "must not be done", "Ovdje se ne smije bacati staklo."],
          ["**može se** + inf", "can be done", "Kako se može doći do parka?"],
          ["**ne može se** + inf", "cannot be done", "To se ne može reciklirati."],
        ],
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "One `se` per clause. Ever. ☝️",
      body:
        "Here is the limit that keeps the whole system honest.\n\nSome verbs already **own** a `se` — it is part of the dictionary entry and cannot be removed: *zvati **se***, *sjećati **se***, *nadati **se***, *sviđati **se***, *slagati **se***. You met them as vocabulary long before you met any of this.\n\nNow suppose you want to say, impersonally, *here, people agree*. You reach for `slagati se` and add an impersonal `se`… and you cannot, because there is no room:\n\n~~*Ovdje se se slaže.*~~ ❌ — two `se` in one clause. Croatian never does this.\n~~*Ovdje se slaže.*~~ ❌ — grammatical, but it means *he agrees here*. The `se` you wrote got used up by the verb.\n\n**Croatian repairs it by putting a real subject back in:**\n\n*Ovdje se **ljudi** slažu.* ✅ — People agree here.\n\nSo the rule, in five words: **one `se` per clause, ever.** And a useful thing falls out of it backwards — it explains why *zovem se* could never have been a passive. That `se` was already spoken for.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "One se per clause",
        text: "A verb that already owns a lexical se cannot take an impersonal one. There is no second slot. When you need one anyway, put a real subject into the sentence — ljudi, čovjek, svi — and use an ordinary sentence instead.",
      },
    },
    {
      id: "s08",
      type: "example",
      title: "How things are done here",
      items: [
        { hr: "Ovdje se ne baca smeće.", en: "Rubbish isn't thrown here.", note: "No subject → frozen 3sg. smeće is the object." },
        { hr: "U Hrvatskoj se puno hoda.", en: "People walk a lot in Croatia.", note: "Nothing at all after the verb. Nowhere for a subject to hide." },
        { hr: "Kako se živi u tom gradu?", en: "What's it like living in that town?", note: "The question the whole unit is an answer to." },
        { hr: "Ovdje se ne smije bacati staklo.", en: "Glass must not be thrown here.", note: "Modal stack: frozen ne smije + se second + infinitive." },
        { hr: "Kako se može doći do centra?", en: "How can one get to the centre?", note: "može frozen; doći in the infinitive." },
        { hr: "Kod nas se odvaja otpad.", en: "We sort our waste where I live.", note: "otpad is the object, not the subject — the verb stays 3sg." },
        { hr: "Prije se živjelo dobro.", en: "Life used to be good.", note: "Past → NEUTER singular. Not živio, not živjela." },
        { hr: "Ovdje se ljudi slažu.", en: "People agree here.", note: "slagati se already owns its se, so a real subject goes back in." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Is there a thing?",
      subtitle: "Two lessons, one question. Every sentence from here on gets sorted by whether anything in it can be the subject.",
      emoji: "🧭",
      items: [
        { emoji: "✅", label: "Quick check", hint: "frozen or agreeing?" },
        { emoji: "🚫", label: "Write a rule", hint: "ne smije se + infinitive" },
        { emoji: "🔊", label: "Listen", hint: "signs, rules, and questions" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: is there a thing?",
      items: [
        {
          prompt: "»Ovdje se ___ novine.« (newspapers are recycled here)",
          options: ["recikliraju", "reciklira", "reciklirala"],
          correctIndex: 0,
          explanation: "There IS a thing — novine — and it is the subject, so the verb agrees. Yesterday's rule, still running.",
        },
        {
          prompt: "»U Hrvatskoj se puno ___ .« (people walk a lot in Croatia)",
          options: ["hoda", "hodaju", "hodalo"],
          correctIndex: 0,
          explanation: "No thing anywhere → frozen 3sg: hoda. There is no plural to make, because there is nobody to be plural.",
        },
        {
          prompt: "»Prije se ___ dobro.« (life used to be good — živjeti, past)",
          options: ["živjelo", "živio", "živjela"],
          correctIndex: 0,
          explanation: "Neuter singular. With no subject there is no gender to agree with, so Croatian falls back on the neuter.",
        },
        {
          prompt: "You want to say «people agree here». Which is right?",
          options: [
            "Ovdje se ljudi slažu.",
            "Ovdje se se slaže.",
            "Ovdje se slaže.",
          ],
          correctIndex: 0,
          explanation: "slagati se already owns a se, and there is only ever one per clause. The repair is to put a real subject back in: ljudi.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each Croatian sentence to what it actually claims",
      pairs: [
        { a: "Ovdje se ne baca smeće.", b: "a rule: rubbish is not thrown here" },
        { a: "Ovdje se recikliraju boce.", b: "a fact about bottles — they are the subject" },
        { a: "Prije se živjelo dobro.", b: "how things used to be, with nobody named" },
        { a: "Ovdje se ljudi slažu.", b: "people agree — a real subject, because the verb owns its se" },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "Ovdje se ne ___ bacati otpad.",
      blanks: [["smije"]],
      translation: "Waste must not be thrown here.",
      wordBank: ["smije", "smiju", "smijem"],
      explanation: "Frozen 3sg — there is no subject anywhere in the sentence. otpad is the object of bacati.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Kod nas se ___ otpad.",
      blanks: [["odvaja"]],
      translation: "We sort our waste where I live.",
      wordBank: ["odvaja", "odvajaju", "odvajam"],
      explanation: "otpad is the object, not the subject — so the verb freezes in the 3sg. Compare: «Kod nas se odvajaju boce» would agree, because boce IS the subject there.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Prije se u ovom gradu ___ dobro. (živjeti)",
      blanks: [["živjelo", "zivjelo"]],
      translation: "Life used to be good in this town.",
      explanation: "Neuter singular past. No subject → no gender → neuter.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write the rule: «Glass must not be thrown in that container.» (staklo · spremnik)",
      answers: [
        "U taj spremnik se ne smije bacati staklo.",
        "U taj spremnik se ne smije bacati staklo",
        "Staklo se ne smije bacati u taj spremnik.",
        "Ne smije se bacati staklo u taj spremnik.",
      ],
      hint: "Modal stack: ne smije frozen, se in second position, then the infinitive.",
      explanation: "Any of these work. The fixed parts: ne smije stays 3sg, se sits second, and bacati stays an infinitive.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Ask it: «How does one live in Croatia?»",
      answers: ["Kako se živi u Hrvatskoj?", "Kako se živi u Hrvatskoj", "Kako se živi u Hrvatskoj ?"],
      hint: "Kako is slot one, so `se` is slot two — then the frozen verb.",
      explanation: "Kako se živi u Hrvatskoj? — the question this whole lesson is named after, and the most natural way in Croatian to ask what a place is like to be in.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ovdje se ne baca smeće.",
      answers: ["Ovdje se ne baca smeće.", "Ovdje se ne baca smeće", "Ovdje se ne baca smece."],
      allowSlow: true,
      explanation: "Frozen 3sg — smeće is the object, not the subject.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Kako se živi u Hrvatskoj?",
      answers: ["Kako se živi u Hrvatskoj?", "Kako se živi u Hrvatskoj", "Kako se zivi u Hrvatskoj?"],
      allowSlow: true,
      explanation: "No subject at all — which is exactly why it can be asked about a whole country.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Ovdje se ne smije bacati staklo.",
      targetEn: "Glass must not be thrown here.",
      phonetic: "OV-dye se ne SMEE-ye BA-tsa-tee STA-klo",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je grad u ___ se dobro živi.« (that's a town one lives well in)",
      options: ["kojem", "koji", "kojeg"],
      correctIndex: 0,
      explanation: "kojem — masculine from grad, locative because u + LOC is location. And there is today's frozen verb inside the relative clause: živi, with nobody living.",
      tts: "To je grad u kojem se dobro živi.",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "Yesterday or today? »Ovdje se odvajaju plastika i staklo.«",
      options: [
        "yesterday's — plastika i staklo is a plural subject, so the verb agrees",
        "today's — the verb is frozen and there is no subject",
      ],
      correctIndex: 0,
      explanation: "Two things joined by i make a plural subject, so the verb agrees: odvajaju. The single question «is there a thing?» sorts every sentence in this unit.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Take the thing away and the verb stops moving.**\n\n- **A thing is there** → it is the subject → the verb **agrees**. *Boce se recikliraju.* (L1)\n- **No thing at all** → nothing is the subject → the verb **freezes in the 3sg**. *Ovdje se ne baca smeće.* · *Kako se živi u Hrvatskoj?*\n- **In the past it freezes in the NEUTER**: *Prije se živjelo dobro.* Not *živio*, not *živjela*.\n\n**The modal stack** is the frame you will actually use: frozen modal + `se` second + infinitive. *Ovdje se ne smije bacati staklo.* · *Kako se može doći do centra?*\n\n**One `se` per clause, ever.** A verb that already owns one — *slagati se*, *sjećati se*, *zvati se* — has no second slot. Put a real subject back in: *Ovdje se **ljudi** slažu.*\n\nThese two lessons are one lesson. Anyone who can answer **«is there a thing in this sentence?»** now owns the unit.\n\nTomorrow: what happens when the verb is one of *saying* — and you want to report a claim without signing your name to it.",
      vocabIds: [
        "b1u20.nacin", "b1u20.pravilo", "b1u20.cist", "b1u20.prljav",
        "b1u20.baciti", "b1u20.odvojiti", "b1u20.spremnik", "b1u20.javni",
      ],
    },
  ],
  srsCloze: [
    { front: "Ovdje se ne ___ smeće. (bacati)", answers: ["baca"], back: "baca — no subject, so the verb freezes in the 3sg. smeće is the object.", tts: "Ovdje se ne baca smeće." },
    { front: "Kako se ___ u Hrvatskoj? (živjeti)", answers: ["živi", "zivi"], back: "živi — frozen 3sg, nobody living.", tts: "Kako se živi u Hrvatskoj?" },
    { front: "Prije se ___ dobro. (živjeti, prošlo vrijeme)", answers: ["živjelo", "zivjelo"], back: "živjelo — NEUTER singular. No subject means no gender to agree with.", tts: "Prije se živjelo dobro." },
    { front: "Ovdje se ne ___ bacati staklo. (smjeti)", answers: ["smije"], back: "smije — the modal stays frozen in the 3sg and the infinitive follows.", tts: "Ovdje se ne smije bacati staklo." },
    { front: "How many `se` can one clause have? ___", answers: ["one", "1", "jedan", "jedno"], back: "One. Ever. A verb that already owns a lexical se has no second slot — put a real subject in instead.", tts: "Ovdje se ljudi slažu." },
    { front: "Kod nas se ___ otpad. (odvajati)", answers: ["odvaja"], back: "odvaja — otpad is the object here, so nothing agrees and the verb freezes.", tts: "Kod nas se odvaja otpad." },
    { front: "rule = ___", answers: ["pravilo"], back: "pravilo (n) — To je novo pravilo.", tts: "To je novo pravilo." },
    { front: "way / manner = ___", answers: ["način", "nacin"], back: "način (m) — na taj način.", tts: "To je dobar način." },
    { front: "the big container out on the street = ___", answers: ["spremnik"], back: "spremnik (m) — kanta is the one in your kitchen.", tts: "Spremnik je ispred zgrade." },
    { front: "clean ‖ dirty = ___ ‖ ___", answers: ["čist, prljav", "cist, prljav", "čist prljav"], back: "čist ‖ prljav — Park je čist. Ulica je prljava.", tts: "Park je čist, a ulica je prljava." },
    { front: "to sort / separate (waste) = ___", answers: ["odvojiti", "odvajati"], back: "odvojiti (pf) / odvajati (impf) — odvajati otpad is what Croatia calls sorting rubbish.", tts: "Kod nas se odvaja otpad." },
  ],
  notes: {
    inOneSentence: {
      en: "With no thing in the sentence there is nothing to be the subject, so the verb freezes in the 3rd person singular — neuter singular in the past — and one clause never carries more than a single «se».",
      exampleHr: "Ovdje se ne smije bacati staklo.",
    },
    deepDive: [
      {
        title: "The freeze",
        body:
          "Yesterday every sentence had a thing in it and the verb agreed with that thing. Remove the thing and the machinery has nothing to grip:\n\n*Ovdje se **ne baca** smeće.* · *U Hrvatskoj se puno **hoda**.* · *Kako se **živi** u tom gradu?*\n\nNone of those has a subject. It is worth being sure about *smeće*, because it looks like one: it is the **object** of an ownerless verb, and you can prove it by deleting it — *Ovdje se ne baca* is still a complete Croatian sentence. A subject cannot be deleted like that.\n\nWith nothing to agree with, the verb settles into the **3rd person singular** and stays there. In the past it settles into the **neuter singular**, which is the form that will feel wrong to you longest:\n\n*Prije se **živjelo** dobro.* — not *živio*, not *živjela*, not *živjeli*.\n\nTwo levels of Croatian have trained you to make past participles agree with somebody. Here there is nobody, and the neuter is what the language falls back on when there is no gender to be had. This is the **only** place in Croatian where a past tense has nothing to agree with.",
        diagram: {
          kind: "contrast",
          left: {
            title: "ima stvari → glagol se slaže",
            emoji: "🎯",
            lines: [
              { hr: "Boce se recikliraju.", en: "Bottles are recycled. (pl subject)" },
              { hr: "Papir se reciklira.", en: "Paper is recycled. (sg subject)" },
            ],
          },
          right: {
            title: "nema stvari → zamrznuto",
            emoji: "🧊",
            lines: [
              { hr: "Ovdje se ne baca smeće.", en: "Rubbish isn't thrown here." },
              { hr: "Prije se živjelo dobro.", en: "Life used to be good. (neuter!)" },
            ],
          },
        },
      },
      {
        title: "Three English sentences, one Croatian one",
        body:
          "*Ovdje se ne baca smeće* is simultaneously:\n\n> *Rubbish isn't thrown here.* — a passive\n> *You can't throw rubbish here.* — a generic **you**, meaning anybody\n> *One doesn't throw rubbish here.* — an indefinite **one**\n\nEnglish forces a choice between three constructions; Croatian has one shape that covers all three. The practical advice is to **stop translating it**. If you go looking for which English sentence it «really» is, you will hesitate every time. Learn the shape — *`se` + frozen verb* — and read it as *this is what happens here*.\n\nThe generic **you** is worth one extra warning, because it is the reading English speakers reach for and it can mislead. *Ovdje se ne baca smeće* is **not** addressed to you. Nobody has been told off. If a Croatian speaker wants to tell *you* specifically, they have the imperative (*Ne bacaj to tu!*) or a personal verb (*Ne smiješ to baciti tu.*) — and both sound quite different.",
        table: {
          caption: "Same shape, three English readings",
          headers: ["hrvatski", "engleski #1", "engleski #2", "engleski #3"],
          rows: [
            ["Ovdje se ne baca smeće.", "rubbish isn't thrown here", "you can't throw rubbish here", "one doesn't throw rubbish here"],
            ["U Hrvatskoj se puno hoda.", "a lot of walking is done", "you walk a lot", "people walk a lot"],
            ["Kako se živi u Hrvatskoj?", "how is life lived?", "what's it like living there?", "how does one live?"],
          ],
        },
      },
      {
        title: "The modal stack — the most useful frame in the unit",
        body:
          "Put a modal verb into the frozen slot and an infinitive after it, and you can state any rule in the country:\n\n**frozen modal + `se` (second position) + infinitive**\n\n*Ovdje se **ne smije** bacati staklo.* — Glass must not be thrown here.\n*To se **mora** odvojiti.* — That has to be sorted.\n*Kako se **može** doći do centra?* — How can one get to the centre?\n*To se **ne može** reciklirati.* — That can't be recycled.\n\nThe modal never changes shape: *smije*, *mora*, *može* — 3sg, always. Only the infinitive after it changes.\n\nYou carded **smjeti** back in A2 U11 and have barely used it since. This is the construction it was waiting for, and *ne smije se* is worth more to a traveller than almost anything else in this unit.\n\n⚠️ **What the real sign says.** A genuine Croatian notice will often read *Zabranjeno je bacanje otpada* — that is the **participial passive**, a completely different construction, and it is B2. It is not wrong; it is simply not this unit. Whenever you feel yourself reaching for *zabranjeno je*, the repair is **ne smije se**.",
        diagram: {
          kind: "train",
          wagons: [
            { label: "1", items: ["Ovdje", "Kako", "To"], note: "slot one — anything at all" },
            { label: "2", items: ["se"], note: "the clitic, always second" },
            { label: "3", items: ["ne smije", "mora", "može"], note: "frozen 3sg, never changes" },
            { label: "4", items: ["bacati", "odvojiti", "doći"], note: "infinitive" },
          ],
        },
      },
      {
        title: "One `se` per clause — and why zovem se was never a passive",
        body:
          "Some verbs come with a `se` already attached. It is part of the dictionary entry, means nothing by itself, and can never be removed: *zvati **se***, *sjećati **se***, *nadati **se***, *sviđati **se***, *slagati **se***.\n\nThose verbs cannot take a second `se`, because **a Croatian clause never carries two**. So an impersonal statement built on one of them is simply unavailable:\n\n~~*Ovdje se se slaže.*~~ ❌ — two `se`. Croatian does not do this.\n~~*Ovdje se slaže.*~~ ❌ — legal, but it means *he agrees here*: the verb ate the `se` you meant as impersonal.\n\n**The repair is always the same: put a real subject back in.**\n\n*Ovdje se **ljudi** slažu.* ✅ · *Ovdje se **svi** slažu.* ✅\n\nRead backwards, this explains something you have been doing since your first lesson without knowing why. *Zovem se Tom* could never have been a passive or an impersonal, because that `se` was already spoken for. It belongs to *zvati se*, and there was never a second slot for anything else.",
      },
    ],
    commonMistakes: [
      { wrong: "Ovdje se ne bacaju smeće.", right: "Ovdje se ne **baca** smeće.", why: "smeće is the object of an ownerless verb, not the subject — you can delete it and the sentence still stands. Nothing to agree with, so 3sg." },
      { wrong: "Prije se živjela dobro.", right: "Prije se **živjelo** dobro.", why: "Neuter singular. With no subject there is no gender to agree with, and the neuter is what Croatian falls back on." },
      { wrong: "Ovdje se se slaže.", right: "Ovdje se **ljudi slažu**.", why: "One `se` per clause, ever. slagati se already owns its one, so a real subject goes back in." },
      { wrong: "Ovdje ne se smije bacati staklo.", right: "Ovdje **se ne** smije bacati staklo.", why: "The clitic takes second position, in front of ne smije — §12, unchanged since Unit 12." },
      { wrong: "Ovdje se ne smije bacanje stakla.", right: "Ovdje se ne smije **bacati** staklo.", why: "The modal stack takes an infinitive, not a noun." },
      { wrong: "Zabranjeno je bacati staklo.", right: "**Ne smije se** bacati staklo.", why: "Zabranjeno je is the participial passive — real Croatian, and B2. Every rule in this unit is built with ne smije se instead." },
    ],
    memoryHooks: [
      "**One question sorts every sentence in this unit: is there a thing in it?** Thing → the verb agrees. No thing → the verb freezes.",
      "**Test for a fake subject: try deleting it.** *Ovdje se ne baca smeće* → *Ovdje se ne baca.* Still a sentence, so *smeće* was never the subject.",
      "**Nobody, so neuter.** The past has no gender available, so it takes the one that means «none of the above»: *živjelo*, *radilo*, *govorilo*.",
      "**ne smije se is the most portable phrase in the unit.** Learn it as one block and you can state or ask about any rule in the country.",
      "**One `se` per clause.** If the verb brought its own, there is no room for yours — put a subject in instead.",
    ],
    connects: [
      { label: "The se-passive: when there IS a thing", lessonId: "b1u20l1" },
      { label: "smjeti / morati / moći — the modals this stack uses", lessonId: "a2u11l2" },
      { label: "Clitics: second position", lessonId: "a2u12l2" },
      { label: "Next: reporting a claim without signing it", lessonId: "b1u20l3" },
    ],
    selfCheck: [
      { q: "»U Hrvatskoj se puno ___ .« (hodati)", a: "hoda — no subject anywhere, so the verb freezes in the 3sg." },
      { q: "Why is »Prije se živjela dobro« wrong?", a: "There is no subject, so there is no gender to agree with. The past freezes in the neuter: živjelo." },
      { q: "Is »smeće« the subject of »Ovdje se ne baca smeće«?", a: "No — it's the object. Delete it and «Ovdje se ne baca» is still a sentence, which a subject would never allow." },
      { q: "How do you say «people agree here», given that slagati se already owns a se?", a: "Ovdje se ljudi slažu. One se per clause, so you put a real subject back in." },
      { q: "A sign says «Zabranjeno je bacati staklo». How would this unit say it?", a: "Ne smije se bacati staklo. The sign uses the participial passive, which is B2 — the modal stack is this unit's route." },
    ],
  },
};
