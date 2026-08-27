import type { Lesson } from "@/types/content";

/**
 * B1 U19 L2 — Čovjek kojeg poznajem (koji in the accusative & genitive)
 * Spec: curriculum/B1/unit-19.md · grammar-reference §17 "Relative clauses (koji)"
 * + §3 masculine animacy.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * L1 drilled the two questions while question 2 always answered "subject →
 * nominative". Here the second answer starts moving, and it brings the animacy
 * split with it: m sg ACC forks animate → kojeg(a) (= GEN) ‖ inanimate → koji
 * (= NOM). That is not a new rule — it is §3's Vidim Marka / Vidim auto, now
 * riding a pronoun. The genitive rides in on the verbs the learner already owns
 * (sjećati se + GEN, U16; nema + GEN, U7).
 *
 * Level-compliance pass 2026-07-29: every content word greped against the
 * carded list. `znati` is uncarded but in live use (9 occurrences across
 * a2u12l5, b1u18l1, b1u18story) — same status as jer / kao / cijeli, so the
 * poznavati ‖ znati contrast is legal without carding znati. Rejected and
 * routed around: važan / jasan (L3), grupa (L4), tako (L5), svatko / zanimljiv /
 * koristiti / zato što (all zero-occurrence), bare `svaki` (only the chunk
 * `svaki dan` is carded).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U19 cut-outs exist.
 */
export const b1u19l2: Lesson = {
  id: "b1u19l2",
  unitId: "b1u19",
  title: "Čovjek kojeg poznajem",
  titleEn: "The man I know — koji in the accusative & genitive",
  grammarTags: ["relative-koji", "accusative", "genitive", "animacy"],
  estMinutes: 22,
  vocab: [
    { id: "b1u19.poznavati", hr: "poznavati", en: "to know a person or a place (poznajem, poznaješ)", pos: "verb", icon: "🤝", exampleHr: "Poznajem čovjeka koji radi ovdje.", exampleEn: "I know the man who works here." },
    { id: "b1u19.poznat", hr: "poznat", en: "well-known / famous (poznata, poznato)", pos: "adj", icon: "🌟", exampleHr: "Zagreb je poznat grad.", exampleEn: "Zagreb is a well-known city." },
    { id: "b1u19.vjerovati", hr: "vjerovati", en: "to believe (vjerujem, vjeruješ)", pos: "verb", icon: "🙏", exampleHr: "Vjerujem da je to istina.", exampleEn: "I believe that's true." },
    { id: "b1u19.sumnjati", hr: "sumnjati", en: "to doubt (sumnjam) — the mirror of vjerovati", pos: "verb", icon: "🧐", exampleHr: "Sumnjam da je to dobra ideja.", exampleEn: "I doubt that's a good idea." },
    { id: "b1u19.razlog", hr: "razlog", en: "reason (GEN razloga)", pos: "noun", gender: "m", icon: "🪧", exampleHr: "Imam dobar razlog.", exampleEn: "I have a good reason." },
    { id: "b1u19.primjer", hr: "primjer", en: "example — and the chunk na primjer (for example)", pos: "noun", gender: "m", icon: "👉", exampleHr: "Na primjer, Zagreb je velik grad.", exampleEn: "For example, Zagreb is a big city." },
    { id: "b1u19.ideja", hr: "ideja", en: "idea", pos: "noun", gender: "f", icon: "💡", exampleHr: "To je dobra ideja.", exampleEn: "That's a good idea." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Čovjek kojeg poznajem",
      subtitle: "Same man. Two sentences. Two different words for «who» — and the difference has nothing to do with him.",
      emoji: "🎭",
      items: [
        { emoji: "🎭", label: "koji ‖ kojeg", hint: "subject vs object" },
        { emoji: "🍴", label: "Živo ili neživo?", hint: "the masculine fork" },
        { emoji: "🎣", label: "The decoy", hint: "čovjeka koji" },
        { emoji: "🔍", label: "Genitiv", hint: "koje, kojeg, kojih" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Isti čovjek, dva oblika",
      subtitle: "Question 1 hasn't changed — gender and number still come from the noun in front. Question 2 is where today happens.",
      emoji: "🎭",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L1 koji · U4 animacy" },
        { emoji: "🃏", label: "New words", hint: "knowing, believing, reasons" },
        { emoji: "⚙️", label: "Three teach slides", hint: "ACC · fork · GEN" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's koji, and an old accusative rule",
      items: [
        {
          prompt: "L1: »Imam prijatelja ___ radi u Zagrebu.«",
          options: ["koji", "koja", "koje"],
          correctIndex: 0,
          explanation: "m sg from prijatelj; nominative because he is the subject of radi. The -a on prijatelja is a decoy — and today that decoy gets much louder.",
        },
        {
          prompt: "L1: »To je tema ___ nije laka.«",
          options: ["koja", "koji", "koje"],
          correctIndex: 0,
          explanation: "tema is feminine singular → koja. Gender always comes from the noun in front. That half of the rule never changes.",
        },
        {
          prompt: "U4 accusative: which pair is correct?",
          options: [
            "Vidim Marka. ‖ Vidim auto.",
            "Vidim Marko. ‖ Vidim auta.",
            "Vidim Marka. ‖ Vidim auta.",
          ],
          correctIndex: 0,
          explanation: "Masculine singular splits in the accusative: ALIVE takes the genitive form (Marka), NOT ALIVE stays as it is (auto). Hold that rule — in ten slides it comes back wearing koji.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Knowing, believing, doubting",
      vocabIds: [
        "b1u19.poznavati", "b1u19.poznat", "b1u19.vjerovati", "b1u19.sumnjati",
        "b1u19.razlog", "b1u19.primjer", "b1u19.ideja",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Isti čovjek, dva oblika 🎭",
      body:
        "One man. Two sentences about him.\n\n*Ovo je čovjek **koji** radi ovdje.* — he **does** something. He is the **subject** of *radi*. → nominative, **koji**.\n*Ovo je čovjek **kojeg** poznajem.* — something is done **to** him. He is the **object** of *poznajem*. → accusative, **kojeg**.\n\nSame man, same gender, same number. The only thing that changed is **his job inside the relative clause** — and that is exactly what question 2 asks.\n\nToday's verb for that job is **poznavati** (*poznajem, poznaješ*), and it is not interchangeable with *znati*. **poznavati** takes a **person or a place**; **znati** takes a **fact, an answer, or a whole `da`-clause**.",
      table: {
        caption: "poznavati ‖ znati — two English «know»s, two Croatian verbs",
        headers: ["", "poznavati — poznajem", "znati — znam"],
        rows: [
          ["what it takes", "a person or a place", "a fact, an answer, a da-clause"],
          ["✅", "Poznajem čovjeka koji radi ovdje.", "Znam odgovor."],
          ["✅", "Poznajem Zagreb dobro.", "Znam da je to istina."],
          ["❌", "Poznajem odgovor.", "Znam Zagreb dobro."],
        ],
      },
      diagram: {
        kind: "contrast",
        left: {
          title: "koji — on nešto radi",
          emoji: "🏃",
          caseId: "NOM",
          lines: [
            { hr: "Čovjek koji radi ovdje.", en: "The man who works here. (he is the one working — subject)" },
            { hr: "Prijatelj koji zna odgovor.", en: "The friend who knows the answer." },
          ],
        },
        right: {
          title: "kojeg — njega netko zna",
          emoji: "🎯",
          caseId: "ACC",
          lines: [
            { hr: "Čovjek kojeg poznajem.", en: "The man I know. (he is the one known — object)" },
            { hr: "Prijatelj kojeg sam vidio jučer.", en: "The friend I saw yesterday." },
          ],
        },
      },
      examples: [
        { hr: "Ovo je čovjek kojeg poznajem.", en: "This is the man I know.", note: "He is the object of poznajem → accusative. čovjek is alive, so the m sg accusative borrows the genitive form: kojeg." },
        { hr: "Poznajem čovjeka koji radi ovdje.", en: "I know the man who works here.", note: "The same man — but here he is the subject of radi → nominative koji. Read the RELATIVE clause, never the noun in front." },
        { hr: "Vjerujem da je to dobra ideja.", en: "I believe that's a good idea.", note: "vjerovati → vjerujem. And L1's da is back: it is still obligatory." },
        { hr: "Sumnjam da je to istina.", en: "I doubt that's true.", note: "sumnjati is vjerovati pointed the other way — same da-frame, opposite direction." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Živo ili neživo? 🍴",
      body:
        "Feminine, neuter and all the plurals are mechanical: **koju** (f), **koje** (n), and in the plural **koje / koje / koja**. Nothing to decide.\n\n**Masculine singular is the one that forks**, and it forks on exactly the rule you learned in Unit 4:\n\n- **alive → kojeg(a)** — it borrows the genitive form, the way *Marko* becomes *Marka*.\n- **not alive → koji** — it stays as it is, the way *auto* stays *auto*.\n\n*Čovjek **kojeg** poznajem.* ‖ *Film **koji** gledam.*\n\nBoth are accusative. Both are masculine singular. The only difference is that one of them breathes.\n\n⚠️ When you get *film kojeg gledam* wrong, the mistake is **not** gender — *film* is masculine, and you were right about that. The mistake is treating a film as alive.",
      diagram: {
        kind: "usage-map",
        caseId: "ACC",
        boxes: [
          {
            label: "m sg ACC · ŽIVO (alive) → kojeg(a)",
            examples: [
              { hr: "Ovo je čovjek kojeg poznajem.", en: "This is the man I know." },
              { hr: "To je prijatelj kojeg sam vidio jučer.", en: "That's the friend I saw yesterday." },
              { hr: "Ovo je gost kojeg čekamo.", en: "This is the guest we're waiting for." },
            ],
          },
          {
            label: "m sg ACC · NEŽIVO (not alive) → koji",
            examples: [
              { hr: "Film koji gledam je dobar.", en: "The film I'm watching is good." },
              { hr: "Ne razumijem razlog koji si dao.", en: "I don't understand the reason you gave." },
              { hr: "Grad koji volim je Zagreb.", en: "The city I love is Zagreb." },
            ],
          },
          {
            label: "f · n · množina → no fork, no decision",
            examples: [
              { hr: "Ovo je knjiga koju čitam.", en: "This is the book I'm reading. (f sg ACC → koju)" },
              { hr: "To je pitanje koje ne razumijem.", en: "That's a question I don't understand. (n sg ACC → koje)" },
              { hr: "Ovo su ljudi koje poznajem.", en: "These are the people I know. (m pl ACC → koje)" },
            ],
          },
        ],
      },
      table: {
        caption: "koji in the accusative",
        headers: ["rod / broj", "ACC", "primjer"],
        rows: [
          ["m sg — živo", "kojeg (kojega)", "čovjek kojeg poznajem"],
          ["m sg — neživo", "koji", "film koji gledam"],
          ["f sg", "koju", "knjiga koju čitam"],
          ["n sg", "koje", "pitanje koje ne razumijem"],
          ["m pl", "koje", "ljudi koje poznajem"],
          ["f pl", "koje", "knjige koje čitam"],
          ["n pl", "koja", "pitanja koja ne razumijem"],
        ],
      },
      examples: [
        { hr: "Film koji gledam je dobar.", en: "The film I'm watching is good.", note: "Accusative — but a film is not alive, so the form is identical to the nominative. Nothing to change." },
        { hr: "Ovo je knjiga koju čitam.", en: "This is the book I'm reading.", note: "knjiga → f sg; object of čitam → ACC koju. Feminine never forks." },
        { hr: "Ovo su ljudi koje poznajem.", en: "These are the people I know.", note: "Accusative plural → koje. Compare: ljudi koji rade — nominative plural, koji." },
        { hr: "Na primjer, Zagreb je grad koji svi znaju.", en: "For example, Zagreb is a city everyone knows.", note: "na primjer is a chunk. And grad is not alive → koji, even though it is the object of znaju." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Genitiv — i zamka ispred 🎣",
      body:
        "Some verbs demand the genitive, and you already own two of them: **sjećati se** (U16) and **nema** (U7). When one of those verbs runs the relative clause, `koji` goes genitive:\n\n*To je knjiga **koje** se sjećam.* — the book I remember.\n*To su prijatelji **kojih** se sjećam.* — the friends I remember.\n\nThe forms: **kojeg(a)** (m/n), **koje** (f), plural **kojih** — for all three genders.\n\nNotice that masculine genitive **kojeg** is the same word as masculine animate accusative **kojeg**. That is not a coincidence and it is not something to memorize twice: the m sg animate accusative *is* the genitive form, borrowed.\n\nAnd now the trap this lesson is really about. **The ending on the noun in front is a decoy.**\n\n*Poznajem čovjek**a** koj**i** radi ovdje.*\n\nThose two endings disagree, and they are supposed to. *čovjeka* is accusative because *poznajem* wants an object. *koji* is nominative because *radi* wants a subject. Two clauses, two separate jobs, two separate answers. **Cover the noun's ending with your thumb before you choose.**",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Nastavak ispred je mamac — the ending in front is bait",
        text: "**Poznajem čovjeka koji radi ovdje.** ✅ — *-a* and *-i* disagree on purpose.\n\nThe noun in front tells you **gender and number only**. It never, ever tells you the case.\n\nTest yourself with the pair: *Poznajem čovjeka **koji** radi ovdje* (he works — subject) ‖ *Ovo je čovjek **kojeg** poznajem* (I know him — object). The man never changed. The clause did.",
      },
      table: {
        caption: "koji in the genitive",
        headers: ["rod / broj", "GEN", "primjer"],
        rows: [
          ["m sg", "kojeg (kojega)", "prijatelj kojeg se sjećam"],
          ["f sg", "koje", "knjiga koje se sjećam"],
          ["n sg", "kojeg (kojega)", "pitanje kojeg se sjećam"],
          ["množina — svi rodovi", "kojih", "prijatelji kojih se sjećam"],
        ],
      },
      examples: [
        { hr: "To je knjiga koje se sjećam.", en: "That's the book I remember.", note: "sjećati se takes the genitive (U16), so koji has to go genitive too: knjiga → f → koje." },
        { hr: "To su prijatelji kojih se sjećam.", en: "Those are the friends I remember.", note: "Genitive plural is one form for all three genders: kojih." },
        { hr: "Ne razumijem razlog koji si dao.", en: "I don't understand the reason you gave.", note: "Accusative, not genitive — razumjeti takes a plain object. And razlog is not alive → koji." },
        { hr: "Poznajem čovjeka koji zna odgovor.", en: "I know the man who knows the answer.", note: "The decoy in full: čovjeka is accusative, koji is nominative, and both are right." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: which job, which form?",
      items: [
        {
          prompt: "»Ovo je čovjek ___ poznajem.«",
          options: ["kojeg", "koji", "koja"],
          correctIndex: 0,
          explanation: "He is the object of poznajem → accusative. čovjek is alive, so the m sg accusative borrows the genitive form: kojeg.",
        },
        {
          prompt: "»Film ___ gledam je dobar.«",
          options: ["koji", "kojeg", "koje"],
          correctIndex: 0,
          explanation: "Also accusative — but a film is not alive, so the accusative looks exactly like the nominative: koji.",
        },
        {
          prompt: "Why is it kojeg in »čovjek kojeg poznajem« but koji in »film koji gledam«?",
          options: [
            "čovjek is alive and film isn't — the U4 accusative fork",
            "čovjek is masculine and film is neuter",
            "kojeg is accusative and koji is nominative",
          ],
          correctIndex: 0,
          explanation: "Both are masculine, and both are accusative. The only difference is animacy — the same rule that gives Vidim Marka but Vidim auto.",
        },
        {
          prompt: "»Poznajem čovjeka ___ radi ovdje.«",
          options: ["koji", "kojeg", "kojem"],
          correctIndex: 0,
          explanation: "The trap. čovjeka is accusative because poznajem wants an object — but inside the relative clause he is the subject of radi, so koji is nominative. Cover the -a before you choose.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Vježba",
      subtitle: "Every item below is built so that copying the ending from the noun in front gives you the wrong answer. Ask both questions.",
      emoji: "🧩",
      items: [
        { emoji: "🎯", label: "Choose the form", hint: "mc ×2 · match" },
        { emoji: "✏️", label: "Fills", hint: "ACC · ACC · GEN · NOM" },
        { emoji: "🧱", label: "Build it", hint: "reorder · type ×2" },
      ],
    },
    {
      id: "s10",
      type: "mc",
      prompt: "»To je knjiga ___ se sjećam.« (That's the book I remember.)",
      options: ["koje", "koju", "koja"],
      correctIndex: 0,
      explanation: "sjećati se demands the genitive (U16). knjiga is feminine, so the feminine genitive: koje. (koju would be accusative — but sjećati se never takes an accusative.)",
    },
    {
      id: "s11",
      type: "mc",
      prompt: "»Ne razumijem razlog ___ si dao.« (I don't understand the reason you gave.)",
      options: ["koji", "kojeg", "kojem"],
      correctIndex: 0,
      explanation: "razlog is the object of si dao → accusative. A reason is not alive, so the m sg accusative is unchanged: koji.",
    },
    {
      id: "s12",
      type: "match",
      prompt: "Match each phrase to the job koji is doing inside its own clause",
      pairs: [
        { a: "čovjek koji radi ovdje", b: "subjekt — NOM (he does something)" },
        { a: "čovjek kojeg poznajem", b: "objekt, živo — ACC (borrows the genitive)" },
        { a: "film koji gledam", b: "objekt, neživo — ACC (looks like the nominative)" },
        { a: "knjiga koju čitam", b: "objekt, ženski rod — ACC koju" },
        { a: "knjiga koje se sjećam", b: "genitiv — the verb demands it" },
      ],
    },
    {
      id: "s13",
      type: "fill",
      text: "Ovo je čovjek ___ poznajem.",
      blanks: [["kojeg", "kojega"]],
      translation: "This is the man I know.",
      wordBank: ["kojeg", "koji", "koje"],
      explanation: "Object of poznajem → accusative; čovjek is alive → kojeg.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Film ___ gledam je dobar.",
      blanks: [["koji"]],
      translation: "The film I'm watching is good.",
      wordBank: ["koji", "kojeg", "koju"],
      explanation: "Object of gledam → accusative; a film is not alive → koji, identical to the nominative.",
    },
    {
      id: "s15",
      type: "fill",
      text: "To je knjiga ___ se sjećam.",
      blanks: [["koje"]],
      translation: "That's the book I remember.",
      wordBank: ["koje", "koju", "koja"],
      explanation: "sjećati se + GEN → feminine genitive koje.",
    },
    {
      id: "s16",
      type: "fill",
      text: "Poznajem čovjeka ___ radi ovdje.",
      blanks: [["koji"]],
      translation: "I know the man who works here.",
      wordBank: ["koji", "kojeg", "kojem"],
      explanation: "The decoy item. čovjeka is accusative, but koji is the subject of radi — nominative. The two endings disagree and both are correct.",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Ovo", "je", "čovjek", "kojeg", "sam", "vidio", "jučer"],
      answers: ["Ovo je čovjek kojeg sam vidio jučer"],
      en: "This is the man I saw yesterday.",
      explanation: "kojeg opens its own clause, so it takes slot one — and the clitic sam lands immediately after it. ✗ kojeg vidio sam. Same second-position law as always, one level down.",
    },
    {
      id: "s18",
      type: "type",
      prompt: "»This is the man I know.« (in Croatian)",
      answers: [
        "Ovo je čovjek kojeg poznajem.",
        "Ovo je čovjek kojeg poznajem",
        "Ovo je covjek kojeg poznajem.",
        "Ovo je covjek kojeg poznajem",
        "Ovo je čovjek kojega poznajem.",
        "Ovo je čovjek kojega poznajem",
      ],
      hint: "poznavati for people — and he is the one being known",
      explanation: "Ovo je čovjek kojeg poznajem. — object of poznajem → accusative, and čovjek is alive → kojeg. English drops the «whom»; Croatian cannot drop kojeg.",
    },
    {
      id: "s19",
      type: "type",
      prompt: "»The film I'm watching is good.« (in Croatian)",
      answers: [
        "Film koji gledam je dobar.",
        "Film koji gledam je dobar",
        "Film koji gledam dobar je.",
        "Film koji gledam dobar je",
      ],
      hint: "still accusative — but is a film alive?",
      explanation: "Film koji gledam je dobar. — accusative, yes, but not animate, so nothing changes: koji.",
    },
    {
      id: "s20",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Two dictations that differ by one letter of meaning, then describe two people you actually know.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "kojeg · koji" },
        { emoji: "🎤", label: "Someone you know", hint: "kojeg / koju" },
        { emoji: "🔗", label: "Flashbacks", hint: "U8 · U16 · L1" },
      ],
    },
    {
      id: "s21",
      type: "listen-type",
      tts: "Ovo je čovjek kojeg poznajem.",
      explanation: "Ovo je čovjek kojeg poznajem. — This is the man I know. He is the one being known, and he is alive: kojeg.",
    },
    {
      id: "s22",
      type: "listen-type",
      tts: "Film koji gledam je dobar.",
      explanation: "Film koji gledam je dobar. — The film I'm watching is good. Same accusative job as kojeg above, but a film doesn't breathe: koji.",
    },
    {
      id: "s23",
      type: "speak",
      targetHr: "Imam prijatelja kojeg dobro poznajem. Vjerujem da on ima dobar razlog.",
      targetEn: "introduce someone and back them up — I have a friend I know well. I believe he has a good reason.",
      phonetic: "EE-mahm pree-YAH-teh-lyah KOY-eg DOH-bro POZ-nah-yem. VYEH-roo-yem dah on EE-mah DOH-bar RAZ-log",
    },
    {
      id: "s24",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: old rules doing new work",
      items: [
        {
          prompt: "U8 + U15: »Ovo je čovjek ___ vidio jučer.«",
          options: ["kojeg sam", "kojeg", "sam kojeg"],
          correctIndex: 0,
          explanation: "kojeg opens the relative clause, so it holds slot one and the clitic sam takes slot two. ✗ kojeg vidio sam — a clitic never drifts to the end.",
        },
        {
          prompt: "U16: which of these verbs forces the genitive onto koji?",
          options: [
            "sjećati se — sjećam se knjige",
            "gledati — gledam film",
            "poznavati — poznajem čovjeka",
          ],
          correctIndex: 0,
          explanation: "sjećati se has always taken the genitive. Now that it can run a relative clause, it drags koji into the genitive with it: knjiga koje se sjećam.",
        },
        {
          prompt: "Listen — does the speaker believe it or doubt it?",
          tts: "Sumnjam da je to dobra ideja.",
          options: ["doubts it — sumnjam", "believes it — vjerujem", "is completely certain"],
          correctIndex: 0,
          explanation: "Sumnjam da… — I doubt that… Same L1 da-frame, and the clitic je is still sitting right behind da.",
        },
      ],
    },
    {
      id: "s25",
      type: "recap",
      summary:
        "**Question 2 finally moved.** Gender and number still come from the noun in front; the case still comes from the relative clause — but that case is no longer always nominative.\n\n**Accusative**: *Ovo je čovjek **kojeg** poznajem.* ‖ *Film **koji** gledam.* Both accusative. The masculine singular forks on **animacy**, exactly as in Unit 4: alive borrows the genitive form (*kojeg*), not-alive stays put (*koji*). Feminine **koju**, neuter **koje**, plural **koje / koje / koja** — no decisions there.\n\n**Genitive**: *knjiga **koje** se sjećam* · *prijatelji **kojih** se sjećam*. The verb demands it — *sjećati se* (U16) and *nema* (U7) already did this to nouns; now they do it to `koji`.\n\n**The decoy**: *Poznajem čovjek**a** koj**i** radi ovdje.* The endings disagree because the two clauses have separate jobs. Cover the noun's ending with your thumb.\n\n**poznavati ≠ znati**: people and places take *poznajem*; facts, answers and `da`-clauses take *znam*.\n\nWords tonight: poznavati, poznat, vjerovati, sumnjati, razlog, primjer, ideja.\n\nNext: «the city I live **in**» — Croatian will not let you end a sentence like that.",
      vocabIds: [
        "b1u19.poznavati", "b1u19.poznat", "b1u19.vjerovati", "b1u19.sumnjati",
        "b1u19.razlog", "b1u19.primjer", "b1u19.ideja",
      ],
    },
  ],
  srsCloze: [
    { front: "Ovo je čovjek ___ poznajem.", answers: ["kojeg", "kojega"], back: "kojeg — object of poznajem (ACC), and čovjek is animate, so the accusative borrows the genitive form.", tts: "Ovo je čovjek kojeg poznajem." },
    { front: "Film ___ gledam je dobar.", answers: ["koji"], back: "koji — also accusative, but a film is inanimate, so the form is unchanged.", tts: "Film koji gledam je dobar." },
    { front: "m sg ACC, animate (čovjek, prijatelj, gost) → ___", answers: ["kojeg", "kojega"], back: "kojeg — the genitive form, borrowed. Same rule as Vidim Marka.", tts: "Ovo je gost kojeg čekamo." },
    { front: "m sg ACC, inanimate (film, grad, razlog) → ___", answers: ["koji"], back: "koji — unchanged, identical to the nominative. Same rule as Vidim auto.", tts: "Grad koji volim je Zagreb." },
    { front: "To je knjiga ___ se sjećam. (sjećati se + ___)", answers: ["koje"], back: "koje — sjećati se takes the genitive, so koji goes genitive: feminine koje.", tts: "To je knjiga koje se sjećam." },
    { front: "❌ čovjek koji poznajem → ✅ ___", answers: ["čovjek kojeg poznajem", "covjek kojeg poznajem"], back: "čovjek kojeg poznajem — he is the OBJECT here, not the subject.", tts: "Ovo je čovjek kojeg poznajem." },
    { front: "poznavati, 1sg → ___", answers: ["poznajem"], back: "poznajem — Poznajem čovjeka koji radi ovdje. For people and places only.", tts: "Poznajem čovjeka koji radi ovdje." },
    { front: "vjerovati, 1sg → ___", answers: ["vjerujem"], back: "vjerujem — Vjerujem da je to istina.", tts: "Vjerujem da je to istina." },
    { front: "reason (m) = ___", answers: ["razlog"], back: "razlog (m), GEN razloga — Imam dobar razlog.", tts: "Imam dobar razlog." },
    { front: "idea (f) = ___", answers: ["ideja"], back: "ideja (f) — To je dobra ideja.", tts: "To je dobra ideja." },
  ],
  notes: {
    inOneSentence: {
      en: "koji's case comes from its job in the relative clause — object → accusative, and in the masculine singular that accusative forks on animacy (kojeg for people, koji for things) — while the ending on the noun in front stays a decoy.",
      exampleHr: "Poznajem čovjeka koji radi ovdje, ali ovo je čovjek kojeg poznajem najbolje.",
    },
    deepDive: [
      {
        title: "The accusative, and the fork that is not new",
        body:
          "When `koji` is the **object** of its own clause, it goes accusative. Four of the seven cells are mechanical and require no thought: feminine **koju**, neuter **koje**, and in the plural **koje** (m), **koje** (f), **koja** (n).\n\nThe masculine singular is the only decision, and you already made it once, in Unit 4. Croatian masculine singular nouns split in the accusative: **animate** borrows the genitive (*Vidim Mark**a***, *Poznajem čovjek**a***), **inanimate** stays identical to the nominative (*Vidim auto*, *Gledam film*). `koji` obeys that same split:\n\n*Čovjek **kojeg** poznajem.* — alive → **kojeg** (genitive form, borrowed)\n*Film **koji** gledam.* — not alive → **koji** (nominative form, unchanged)\n\nBoth sentences are accusative. Neither is an exception. The longer form **kojega** exists and is equally correct — it turns up in careful writing and when the rhythm of the sentence wants an extra syllable — but **kojeg** is what you will hear.\n\nA warning about how this error gets diagnosed: when a learner writes ~~*film kojeg gledam*~~, the instinct is to say «wrong gender». It is not. *film* is masculine and the learner got that right. The mistake is treating a film as **alive** — a category error, not an agreement error, and worth naming correctly so it gets fixed at the source.",
        table: {
          caption: "The same fork, twice — nouns (U4) and koji (U19)",
          headers: ["m sg accusative", "živo (alive)", "neživo (not alive)"],
          rows: [
            ["nouns (U4)", "Vidim Marka. / Poznajem čovjeka.", "Vidim auto. / Gledam film."],
            ["form borrowed from", "the genitive", "the nominative"],
            ["koji (U19)", "čovjek kojeg poznajem", "film koji gledam"],
            ["also correct", "čovjek kojega poznajem", "— (no long form)"],
          ],
        },
      },
      {
        title: "The genitive, and why kojeg appears twice",
        body:
          "Croatian has a handful of verbs and structures that demand the genitive outright, and you already own the two that matter here: **sjećati se** (U16 — *sjećam se knjige*) and **nema** (U7 — *nema odgovora*). When one of them runs the relative clause, it drags `koji` into the genitive:\n\n*To je knjiga **koje** se sjećam.* — the book I remember\n*To su prijatelji **kojih** se sjećam.* — the friends I remember\n\nThe genitive forms are **kojeg(a)** for masculine and neuter, **koje** for feminine, and a single **kojih** for the whole plural.\n\nYou will have noticed that **kojeg** now means two things — masculine genitive *and* masculine animate accusative. Do not memorize it twice. There is only one form, and the accusative is **borrowing** it, exactly the way *čovjeka* is simultaneously the genitive and the animate accusative of *čovjek*. One shape, two jobs, and Croatian has been doing this since Unit 4.\n\nOne collision to keep straight while you are learning: feminine **koje** (genitive: *knjiga koje se sjećam*) vs feminine **koju** (accusative: *knjiga koju čitam*). The verb decides. *sjećati se* → genitive. *čitati* → accusative.",
        table: {
          caption: "ACC ‖ GEN side by side",
          headers: ["rod / broj", "ACC", "GEN", "što ih razdvaja"],
          rows: [
            ["m sg — živo", "kojeg", "kojeg", "identical — the ACC borrows the GEN"],
            ["m sg — neživo", "koji", "kojeg", "here they differ"],
            ["f sg", "koju", "koje", "koju čitam ‖ koje se sjećam"],
            ["n sg", "koje", "kojeg", "pitanje koje ne razumijem ‖ pitanje kojeg se sjećam"],
            ["množina", "koje / koje / koja", "kojih", "one genitive form for all genders"],
          ],
        },
      },
      {
        title: "The decoy, and the clitic that follows koji",
        body:
          "This lesson's real difficulty is not the endings — it is the pull of the noun standing in front of `koji`. That noun is wearing a case ending of its own, from its own clause, and it is **irrelevant** to your choice:\n\n*Poznajem čovjek**a** koj**i** radi ovdje.*\n\n*čovjeka* is accusative because *poznajem* wants an object. *koji* is nominative because *radi* wants a subject. The endings disagree, and the sentence is perfect. Cover the noun's ending with your thumb, read only the relative clause, and choose from that.\n\nThe drill that makes it stick is the minimal pair, said out loud, twice:\n\n*Poznajem čovjeka **koji** radi ovdje.* → he works — subject — nominative\n*Ovo je čovjek **kojeg** poznajem.* → I know him — object — accusative\n\nSame man. Same gender. Different clause, different case.\n\nSecond, smaller point, and one learners consistently miss: **`koji` opens its own clause, so it occupies slot one — and clitics take slot two.** The §12 second-position law applies inside every clause separately, including this one.\n\n*Ovo je čovjek **kojeg sam** vidio jučer.* ✅\n~~*Ovo je čovjek kojeg vidio sam jučer.*~~ ❌\n\nIt is exactly what `da` did in L1. A subordinator holds the first seat; the clitic sits down next to it.",
        diagram: {
          kind: "contrast",
          left: {
            title: "NOM — on radi",
            emoji: "🏃",
            caseId: "NOM",
            lines: [
              { hr: "Poznajem čovjeka koji radi ovdje.", en: "I know the man who works here. (he is the worker)" },
              { hr: "Vidim prijatelja koji zna odgovor.", en: "I see the friend who knows the answer." },
            ],
          },
          right: {
            title: "ACC — njega poznajem",
            emoji: "🎯",
            caseId: "ACC",
            lines: [
              { hr: "Ovo je čovjek kojeg poznajem.", en: "This is the man I know. (he is the known one)" },
              { hr: "Ovo je prijatelj kojeg sam vidio.", en: "This is the friend I saw. (clitic right behind kojeg)" },
            ],
          },
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ovo je čovjek koji poznajem.",
        right: "Ovo je čovjek kojeg poznajem.",
        why: "He is the object of poznajem, not its subject. Object → accusative, and čovjek is animate → kojeg.",
      },
      {
        wrong: "Film kojeg gledam je dobar.",
        right: "Film koji gledam je dobar.",
        why: "The gender was right — film is masculine. The error is treating a film as alive: inanimate m sg accusative is unchanged.",
      },
      {
        wrong: "Poznajem čovjeka kojeg radi ovdje.",
        right: "Poznajem čovjeka koji radi ovdje.",
        why: "Copying the -a from čovjeka. Inside the relative clause he is the subject of radi, so nominative koji.",
      },
      {
        wrong: "Ovo je čovjek kojeg vidio sam jučer.",
        right: "Ovo je čovjek kojeg sam vidio jučer.",
        why: "kojeg holds slot one of its own clause, so the clitic sam takes slot two — the same rule da follows.",
      },
      {
        wrong: "Poznajem odgovor.",
        right: "Znam odgovor.",
        why: "poznavati is for people and places. Facts, answers and da-clauses take znati.",
      },
    ],
    memoryHooks: [
      "kojeg is for things that breathe. Films, cities and reasons don't — they keep koji.",
      "Cover the noun's ending with your thumb. Whatever it says, it is not talking to you.",
      "Same man, two sentences: koji RADI ‖ kojeg POZNAJEM. Say the pair out loud and the rule installs itself.",
      "kojeg appears twice in the table because the animate accusative is borrowing the genitive — one form, two jobs, since Unit 4.",
      "poznavati meets people; znati knows things. You can't be introduced to an answer.",
    ],
    connects: [
      { label: "Where the animacy fork came from (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "sjećati se and the genitive it demands (Unit 16 L5)", lessonId: "a2u16l5" },
      { label: "Back to koji as subject (Unit 19 L1)", lessonId: "b1u19l1" },
      { label: "Next: the preposition moves to the front (Unit 19 L3)", lessonId: "b1u19l3" },
    ],
    selfCheck: [
      { q: "«Ovo je čovjek ___ poznajem» — which form, and why?", a: "kojeg. He is the object of poznajem → accusative, and čovjek is animate, so the m sg accusative borrows the genitive form." },
      { q: "Why is «film kojeg gledam» wrong, and what is the mistake actually about?", a: "It should be film koji gledam. The gender is fine — film is masculine. The error is animacy: a film is not alive, so its accusative is unchanged." },
      { q: "In «Poznajem čovjeka koji radi ovdje», why do the two endings disagree?", a: "They belong to different clauses. čovjeka is the object of poznajem; koji is the subject of radi. The noun in front never supplies the case." },
      { q: "Which verb in this lesson forces koji into the genitive, and what does it produce for a feminine noun?", a: "sjećati se. Feminine genitive is koje — To je knjiga koje se sjećam." },
      { q: "Where does the clitic go in «Ovo je čovjek kojeg sam vidio jučer»?", a: "Right after kojeg. The relative pronoun opens its clause and takes slot one, so the clitic takes slot two." },
    ],
  },
};
