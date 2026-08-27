import type { Lesson } from "@/types/content";

/**
 * B1 U19 L5 — Debata (agreeing, conceding, disagreeing, concluding + the writing task)
 * Spec: curriculum/B1/unit-19.md · grammar-reference §17 (whole section) + §14
 * (s/sa + INS for company) + §18 (conditional, U18) + §16 (future, U16).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new grammar machinery. L1 fixed koji at the nominative, L2 let the verb
 * choose, L3 let the preposition choose, L4 closed the table — and today all six
 * cases are interleaved under the only pressure that matters at B1, which is
 * having to hold an opinion while you decline. The register is the other half:
 * four moves (agree · half-agree · disagree · conclude), taught as a set rather
 * than as a phrasebook, because the ordering between them is the culturally
 * loaded part. Croatian disagreement lands harder than learners expect, so the
 * unit teaches the concession BEFORE it teaches the refusal.
 *
 * The lesson ends on the unit's exit performance: the guided writing task
 * «Tema o kojoj imam jasan stav», rehearsed on-slide (scaffold + model text)
 * before the test carries it for real. The scaffold requires two relative
 * clauses in two different cases, so register and grammar are graded together.
 *
 * Level-compliance pass 2026-07-29: all 10 headwords greped against the carded
 * dump — slagati (se), tako, siguran, prednost, nedostatak, strana, zaključak,
 * iako, ipak, protiv are all absent (free). Support vocabulary verified carded:
 * pitanje a2u15l2 · život a2u16l4 · lak b1u18l3 · težak b1u18l3 · pisati a1u8l2 ·
 * riječ b1u18l4 · selo a1u2l1 · kazalište a1u5l3 · park a1u5l1 · centar a1u5l1 ·
 * posao a1u5l3 · fakultet a1u5l3 · mjesto a2u13l5 · više a2u13l5 · skup a1u7l3 ·
 * jeftin a1u7l3 · velik a1u3l3 · mlad a1u3l3 · ljudi a1u3l3 · djeca a1u3l3 ·
 * kolega a2u12l1 · kolegica a2u12l1 · prijatelj a1u1l4 · njihov a1u3l2 · moj
 * a1u3l1 · voljeti a1u4l3 · vidjeti a2u15l1 · čuti a2u15l1 · često a1u6l4 ·
 * uvijek a1u6l4 · ovdje a1u5l2 · odgovor a2u15l2 · razumjeti b1u18l4 · moći
 * a2u11l2 · morati a2u11l2 · trebati a2u11l2 · nema a1u7l2 · otići b1u17l3.
 * `jer` (136), `ali` (486), `svi` (223), `sve` (67), `cijeli` (51), `problem`
 * (22), `bolji` (48), `mene` (11), `sada` (38), `tome` (2) are uncarded-but-live
 * (the unit spec's free list); `biti`, `raditi`, `znati` and `misliti` are
 * uncarded as headwords but massively live. Earlier-in-unit vocabulary (tema,
 * istina, mišljenje, smatrati, možda, naravno, da, čini mi se from L1; razlog,
 * primjer, ideja, poznavati, poznat, vjerovati, sumnjati from L2; o, stav,
 * promet, važan, jasan, država, svijet, tvrditi from L3; rasprava, argument,
 * grupa, generacija, odnos, jednostavan, netko from L4) reports `absent` only
 * because b1u19 is not yet registered in src/content/index.ts.
 *
 * Deliberately avoided as untaught (verified zero- or near-zero-occurrence by
 * grep): lakše / lakši / teže (comparatives of the U18 pair, 0), izbor (0),
 * griješiti (0), zato (0), čist (0), tih (0), dvije (0), obje (0), manje (0),
 * pitati (0), razgovarati (0), sloboda (0). Also held back for the unit story:
 * mir, buka, gužva, miran, dosadan — all five are the story's glossed words and
 * must not appear before it.
 *
 * Two forms are taught explicitly on-slide because they are needed by the
 * spec's own phrase list and are zero-occurrence in the corpus: **tobom** (INS
 * of `ti`, beside U12's fixed `sa mnom`) and **toga** (GEN of `to`, required by
 * `protiv`). Both are given as chunks on the collocation table of s07 and are
 * never quizzed as productions on their own.
 *
 * Deviation 1 logged: the spec asks for a "usage-map diagram — four moves in a
 * discussion". The usage-map renderer hard-prints "When do I use the <case>?"
 * from its required `caseId`, which is semantically wrong for four discussion
 * moves — the same clash b1u18l4 hit and resolved the same way. Delivered
 * instead as a BRACKET diagram (label / how-it-lands / phrases — a 1:1 fit)
 * carrying all four moves, PLUS a four-row table listing every phrase, so no
 * content from the spec's map is lost.
 *
 * Deviation 2 logged: the spec's slide arc lists the two-sides bracket and the
 * fleeting-a genitives on one teach slide, and the writing scaffold with the
 * koji reference strip on another. A TeachSlide accepts at most ONE table and
 * ONE diagram, so the concession warning (iako without ali) and the
 * collocation table (slagati se s + INS · protiv + GEN) are split onto their own
 * teach slide, s07. Four teach slides rather than three; nothing is dropped.
 *
 * Authoring standard imposed by the spec and honoured item by item: **every
 * drill item must be answerable only by asking both questions — gender+number
 * from the antecedent, case from the relative clause — and no item may be
 * solvable by copying the antecedent's ending.** Every scored koji item below
 * was written so the antecedent sits in a different case from the answer:
 *   s11 ljude (ACC pl) → koji (NOM pl) · s12 prijatelj (NOM m) → kojeg (ACC m
 *   animate) · s13 tema (NOM f) → o kojoj (LOC f) · s14 kolegice (ACC pl) → s
 *   kojima (INS pl) · s20 ljudima (INS pl) → koji (NOM pl) · s25+s26 six
 *   flashbacks, each with a nominative or accusative antecedent and a different
 *   answer case. (The six flashbacks sit in two quiz-sets because the schema
 *   caps a quiz-set at four items.)
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U19 cut-outs exist. `iako`, `ipak` and `tako`
 * stay icon-only — they are function words with nothing to draw.
 */
export const b1u19l5: Lesson = {
  id: "b1u19l5",
  unitId: "b1u19",
  title: "Debata",
  titleEn: "Debate — agreeing, conceding, disagreeing, concluding (+ the writing task)",
  grammarTags: ["relative-koji", "discussion-register", "concession", "writing"],
  estMinutes: 28,
  vocab: [
    { id: "b1u19.slagatise", hr: "slagati se", en: "to agree (slažem se, slažeš se) — s + INS with a person, u tome / o tome with a point", pos: "verb", icon: "🤝", exampleHr: "Slažem se s tobom.", exampleEn: "I agree with you.", tags: ["chunk"] },
    { id: "b1u19.tako", hr: "tako", en: "so / that way — I ja tako mislim = I think so too", pos: "adv", icon: "↔️", exampleHr: "I ja tako mislim.", exampleEn: "I think so too." },
    { id: "b1u19.siguran", hr: "siguran", en: "sure / certain (sigurna, sigurno) — Nisam siguran is the polite Croatian «no»", pos: "adj", icon: "🎯", exampleHr: "Nisam siguran da je to istina.", exampleEn: "I'm not sure that's true." },
    { id: "b1u19.prednost", hr: "prednost", en: "advantage (f, i-declension: GEN prednosti, pl prednosti)", pos: "noun", gender: "f", icon: "➕", exampleHr: "Prednost grada je posao.", exampleEn: "The advantage of the city is work." },
    { id: "b1u19.nedostatak", hr: "nedostatak", en: "drawback / disadvantage (GEN nedostatka — the a falls out)", pos: "noun", gender: "m", icon: "➖", exampleHr: "Promet je velik nedostatak.", exampleEn: "Traffic is a big drawback." },
    { id: "b1u19.strana", hr: "strana", en: "side — s jedne strane…, s druge strane… = on one hand…, on the other…", pos: "noun", gender: "f", icon: "⚖️", exampleHr: "S jedne strane, grad je skup.", exampleEn: "On one hand, the city is expensive." },
    { id: "b1u19.zakljucak", hr: "zaključak", en: "conclusion (GEN zaključka — the a falls out, like sastanak)", pos: "noun", gender: "m", icon: "🏁", exampleHr: "Zaključak je jasan.", exampleEn: "The conclusion is clear." },
    { id: "b1u19.iako", hr: "iako", en: "although — and Croatian never adds ali after it", pos: "conj", icon: "🔀", exampleHr: "Iako je to istina, mislim da nije tako jednostavno.", exampleEn: "Although that's true, I think it's not that simple." },
    { id: "b1u19.ipak", hr: "ipak", en: "still / nevertheless — the word that takes the concession back", pos: "adv", icon: "↩️", exampleHr: "Ipak mislim da nije tako.", exampleEn: "Still, I think it's not so." },
    { id: "b1u19.protiv", hr: "protiv", en: "against (+ GEN) — Ja sam protiv toga.", pos: "prep", icon: "🚫", exampleHr: "Ja sam protiv toga.", exampleEn: "I'm against that." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Debata",
      subtitle: "Croatians disagree with each other constantly and stay friends. The trick is four phrases — and the first one agrees with you.",
      emoji: "🗣️",
      items: [
        { emoji: "🤝", label: "Četiri poteza", hint: "slažem se · da, ali · ne slažem se · zaključak" },
        { emoji: "⚖️", label: "S jedne strane…", hint: "prednost ‖ nedostatak" },
        { emoji: "🔀", label: "Iako bez ali", hint: "Croatian never doubles the concession" },
        { emoji: "✍️", label: "Pisanje", hint: "the unit's writing task, rehearsed" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Četiri poteza",
      subtitle: "No new endings today. Six cases of koji, ten words of debate register, and the order you are supposed to put them in.",
      emoji: "🗣️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L4 kojima ‖ kojim · L1 da-frame" },
        { emoji: "🃏", label: "New words", hint: "agree, concede, object, conclude" },
        { emoji: "⚙️", label: "Three teach slides", hint: "the moves · the balance · the traps" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's instrumental, and the frame from Monday",
      items: [
        {
          prompt: "Ljudi ___ radim su dobri. (the people I work with)",
          tts: "Ljudi s kojima radim su dobri.",
          options: ["s kojima", "s kojim", "kojima", "o kojima"],
          correctIndex: 0,
          explanation: "s kojima — people are company, so s appears, and the plural instrumental is kojima for every gender.",
        },
        {
          prompt: "Vlak ___ putujem je brz. (the train I travel by)",
          tts: "Vlak kojim putujem je brz.",
          options: ["kojim", "s kojim", "kojem", "koji"],
          correctIndex: 0,
          explanation: "kojim, with nothing in front. A train is a means, not company — §14's bare instrumental. s kojim would send the train travelling beside you.",
        },
        {
          prompt: "Mislim ___ je to dobra ideja.",
          tts: "Mislim da je to dobra ideja.",
          options: ["da", "— (nothing)", "što", "koji"],
          correctIndex: 0,
          explanation: "da. English can drop «that»; Croatian cannot. And the clitic je goes into second position of the da-clause, counting da as slot one.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Deset riječi za raspravu",
      vocabIds: [
        "b1u19.slagatise",
        "b1u19.tako",
        "b1u19.siguran",
        "b1u19.prednost",
        "b1u19.nedostatak",
        "b1u19.strana",
        "b1u19.zakljucak",
        "b1u19.iako",
        "b1u19.ipak",
        "b1u19.protiv",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Četiri poteza u raspravi 🗣️",
      body:
        "A Croatian discussion is not four opinions taking turns. It is four **moves**, and they have an order.\n\nMove 1 is agreement, and it is the most common opening in the language — *Slažem se*, *Naravno*, *To je istina*, *I ja tako mislim*. Learners skip it because in English you can open with the objection and still sound reasonable. In Croatian, opening cold with *Ne slažem se* is grammatically perfect and socially expensive.\n\nSo the real workhorse is move 2: **give the point away, then take it back**. *S jedne strane…, s druge strane…* · *Iako je to istina, …* · *Možda, ali…* You have agreed, you have shown you listened, and only then does your own position arrive.\n\nMove 3 is the objection itself. Note how soft the standard forms are: *Nisam siguran* — «I'm not sure» — is a full disagreement in Croatian, not a hedge.\n\nMove 4 closes. *Zaključak je jasan.* · *Ja sam za* / *protiv.* · *Po mome mišljenju…* (take that last one whole — it is an old locative chunk and you never need to build it).\n\n**slagati se** is one of the lexical *se* verbs, like *sviđati se* and *sjećati se*. The *se* is part of the word, not a passive: *Slažem se.* · *Slažeš se?* · *Slažemo se.*",
      table: {
        caption: "Rasprava — četiri poteza i njihove fraze",
        headers: ["potez", "fraze", "how it lands"],
        rows: [
          ["1 · SLAŽEM SE", "Slažem se (s tobom). · Naravno. · To je istina. · I ja tako mislim.", "warm and fast — the normal way to start"],
          ["2 · DA, ALI…", "S jedne strane…, s druge strane… · Iako je to istina, … · Ipak, … · Možda, ali…", "a scale: you give a point, then take it back"],
          ["3 · NE SLAŽEM SE", "Ne slažem se. · Nisam siguran. · Mislim da nije tako.", "harder than it looks — concede first"],
          ["4 · ZAKLJUČAK", "Zaključak je jasan. · Po mome mišljenju… · Ja sam za / protiv.", "closes the topic instead of opening a new one"],
        ],
      },
      diagram: {
        kind: "bracket",
        groups: [
          { label: "1 · Slažem se", rule: "AGREE — you are on their side, and in Croatian you say so first", example: "Slažem se s tobom. · Naravno. · I ja tako mislim." },
          { label: "2 · Da, ali…", rule: "HALF-AGREE — hand the point over, then take it back", example: "S jedne strane…, s druge strane… · Iako je to istina, …" },
          { label: "3 · Ne slažem se", rule: "DISAGREE — the polite forms are softer than they look", example: "Nisam siguran. · Mislim da nije tako." },
          { label: "4 · Zaključak", rule: "CONCLUDE — close it, do not open a new topic", example: "Zaključak je jasan. · Ja sam protiv toga." },
        ],
      },
      examples: [
        { hr: "Slažem se s tobom, ali imam jedno pitanje.", en: "I agree with you, but I have one question." },
        { hr: "Naravno! To je istina.", en: "Of course! That's true." },
        { hr: "I ja tako mislim.", en: "I think so too." },
        { hr: "Zaključak je jasan: svi imaju dobar razlog.", en: "The conclusion is clear: everyone has a good reason." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "S jedne strane, s druge strane ⚖️",
      body:
        "The half-agreeing move has a fixed skeleton, and it is a balance with a pan on each side:\n\n*S jedne **strane**, grad je skup. S druge **strane**, ovdje ima posla.*\n\n`strana` is a plain feminine noun and both halves sit in the **genitive** after *s* in this frozen chunk — *s jedne strane* — so learn the whole phrase as one block and you never have to think about it again.\n\nWhat goes in the pans are today's two nouns: **prednost** (advantage) and **nedostatak** (drawback). They are opposites in meaning and opposites in grammar too, which makes them easy to keep apart:\n\n- **prednost** is feminine and belongs to the **i-declension** — the small class with no ending in the nominative at all. Genitive *prednosti*, plural *prednosti*. It barely moves.\n- **nedostatak** is masculine with a **fleeting a**: the second *a* falls out the moment an ending arrives. *nedostatak → nedostat**k**a*. You met this exactly once before, in Unit 12: *sastanak → sastanka*.\n\n**zaključak** does the same thing — *zaključak → zaključka*. Two of today's three masculine nouns drop their *a*, so treat it as the default for -ak words rather than as a surprise.",
      table: {
        caption: "Nestalo a — isti trik kao sastanak → sastanka",
        headers: ["riječ", "GEN jednine", "množina (NOM / ACC)"],
        rows: [
          ["nedostatak (m)", "nedostatka", "nedostaci / nedostatke"],
          ["zaključak (m)", "zaključka", "zaključci / zaključke"],
          ["sastanak (m) · U12", "sastanka", "sastanci / sastanke"],
          ["prednost (ž · i-sklonidba)", "prednosti", "prednosti / prednosti"],
          ["strana (ž)", "strane", "strane / strane"],
        ],
        colCase: [null, "GEN", null],
      },
      diagram: {
        kind: "bracket",
        groups: [
          { label: "S jedne strane… ➕", rule: "PREDNOST — the pan that goes down first, because you concede the other side is right about something", example: "S jedne strane, grad ima posao i fakultet." },
          { label: "S druge strane… ➖", rule: "NEDOSTATAK — the pan that carries your own position", example: "S druge strane, nedostatak je promet o kojem svi govore." },
        ],
      },
      examples: [
        { hr: "S jedne strane život u gradu je dobar, s druge strane promet je težak.", en: "On one hand life in the city is good, on the other the traffic is hard." },
        { hr: "Svaki dan ima prednosti i nedostatke.", en: "Every day has advantages and drawbacks." },
        { hr: "Ne razumijem zaključak koji si dao.", en: "I don't understand the conclusion you gave." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Iako bez ali — i s kim se slažeš ⚠️",
      body:
        "Three collocations, and one trap that costs learners a sentence every time.\n\n**The trap first.** English speakers say «Although that's true, **but** I think…» all the time in casual speech. Croatian never doubles the concession. One concession word per sentence:\n\n*Iako je to istina, mislim da nije tako.* ✅\n*Iako je to istina, **ali** mislim da nije tako.* ❌\n\n**ipak** is the exception, and it is not a second «but» — it is the word that picks the sentence back up after you gave a point away: *Iako je to istina, **ipak** mislim da nije tako.* ✅\n\n**The collocations.** *slagati se* takes **s / sa + instrumental** for the *person* — *Slažem se **s tobom***, *Slažem se **s Anom*** — and *u tome* / *o tome* for the *point*. `tobom` is simply the instrumental of *ti*, the partner of Unit 12's fixed *sa mnom*; take both as chunks.\n\n**protiv** takes the **genitive**, and it is the unit's only new preposition-plus-case pair after `o`. *Ja sam **protiv toga***. *protiv **te ideje***. Its opposite, *za*, takes the accusative: *Ja sam **za to***. `toga` is the genitive of *to*, and it is worth memorizing whole — *protiv toga* is the entire phrase you will actually say.",
      table: {
        caption: "Tko traži koji padež",
        headers: ["riječ", "traži", "primjer"],
        rows: [
          ["slagati se (osoba)", "s / sa + INS", "Slažem se s tobom. · Slažem se s Anom."],
          ["slagati se (tema)", "u tome · o tome", "U tome se slažemo."],
          ["protiv", "GEN", "Ja sam protiv toga. · protiv te ideje"],
          ["za", "ACC", "Ja sam za to."],
          ["siguran", "da… (rečenica)", "Nisam siguran da je to istina."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "Iako ≠ «although… but»",
        text: "Croatian does not double the concession.\n\n❌ Iako je to istina, **ali** mislim da nije tako.\n✅ Iako je to istina, mislim da nije tako.\n✅ Iako je to istina, **ipak** mislim da nije tako.\n\nOne concession word opens the sentence. **ipak** is allowed after it because it is not a second «but» — it is the hinge that swings the sentence back to your own position.",
      },
      examples: [
        { hr: "Iako je to istina, ipak mislim da nije tako jednostavno.", en: "Although that's true, I still think it's not that simple." },
        { hr: "Ja sam protiv toga.", en: "I'm against that." },
        { hr: "Nisam siguran da je to dobar argument.", en: "I'm not sure that's a good argument." },
        { hr: "U tome se slažemo.", en: "On that we agree." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Koji je ovo potez?",
      items: [
        {
          prompt: "Which move is this?",
          tts: "Naravno! I ja tako mislim.",
          options: ["AGREE", "HALF-AGREE / concede", "DISAGREE", "CONCLUDE"],
          correctIndex: 0,
          explanation: "Naravno + I ja tako mislim — pure agreement, the normal Croatian opening.",
        },
        {
          prompt: "Which move is this?",
          tts: "Možda, ali promet je velik problem.",
          options: ["AGREE", "HALF-AGREE / concede", "DISAGREE", "CONCLUDE"],
          correctIndex: 1,
          explanation: "Možda gives the point away and ali takes it straight back — move 2, the workhorse.",
        },
        {
          prompt: "Which move is this?",
          tts: "Nisam siguran da je to istina.",
          options: ["AGREE", "HALF-AGREE / concede", "DISAGREE", "CONCLUDE"],
          correctIndex: 2,
          explanation: "Nisam siguran looks like a hedge in English. In Croatian it IS the disagreement — the polite full stop.",
        },
        {
          prompt: "Which move is this?",
          tts: "Zaključak je jasan: svi imaju dobar razlog.",
          options: ["AGREE", "HALF-AGREE / concede", "DISAGREE", "CONCLUDE"],
          correctIndex: 3,
          explanation: "Zaključak je jasan closes the topic. It is the last thing you say, not the first.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Vježba",
      subtitle: "The four moves against the six cases of koji, mixed on purpose. Nothing here tells you which case it wants — you have to ask.",
      emoji: "🎯",
      items: [
        { emoji: "🔗", label: "Match", hint: "phrase ↔ move" },
        { emoji: "✍️", label: "Fill ×4", hint: "one per case family" },
        { emoji: "🔤", label: "Type ×3", hint: "opine · concede · conclude" },
        { emoji: "🧩", label: "Reorder", hint: "s + INS, and a koji that refuses to copy" },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Spoji frazu s potezom — match each phrase to the move it makes.",
      pairs: [
        { a: "Slažem se s tobom.", b: "AGREE — you are on their side, and you say so first" },
        { a: "S jedne strane…, s druge strane…", b: "HALF-AGREE — you weigh both pans" },
        { a: "Iako je to istina, ipak…", b: "CONCEDE — give a point, then take it back" },
        { a: "Nisam siguran.", b: "DISAGREE — the polite Croatian no" },
        { a: "Zaključak je jasan.", b: "CONCLUDE — you close the debate" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Poznajem ljude ___ ne vole grad.",
      blanks: [["koji"]],
      translation: "I know people who don't like the city.",
      wordBank: ["koji", "koje", "kojima", "kojih"],
      explanation: "koji — nominative plural. Cover the antecedent: ljude is accusative because it is the object of poznajem, out in the main sentence. Inside the relative clause koji is the subject of vole, so it is nominative. The two endings disagree and both are right.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ovo je prijatelj ___ dobro poznajem.",
      blanks: [["kojeg", "kojega"]],
      translation: "This is the friend I know well.",
      wordBank: ["koji", "kojeg", "kojem", "kojim"],
      explanation: "kojeg — he is the OBJECT of poznajem, so accusative, and prijatelj is animate, so the masculine singular accusative borrows the genitive form. The antecedent's own nominative is no help at all.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Tema ___ ___ danas govorimo je važna.",
      blanks: [["o"], ["kojoj"]],
      translation: "The topic we're talking about today is important.",
      wordBank: ["o", "u", "kojoj", "koju", "koja"],
      explanation: "o kojoj — govoriti demands o, o demands the locative, and tema is feminine, so kojoj. The preposition goes in FRONT of koji; Croatian never leaves it stranded at the end the way English does.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Volim kolegice ___ ___ radim.",
      blanks: [["s"], ["kojima"]],
      translation: "I like the colleagues I work with.",
      wordBank: ["s", "o", "kojima", "kojim", "kojoj"],
      explanation: "s kojima — colleagues are company, so s appears, and the plural instrumental is kojima for every gender, feminine included. kolegice is accusative (object of volim) and tells you only that the antecedent is plural.",
    },
    {
      id: "s15",
      type: "mc",
      prompt: "Which sentence AGREES with the speaker?",
      options: ["Slažem se s tobom.", "Nisam siguran.", "Mislim da nije tako.", "Ja sam protiv toga."],
      correctIndex: 0,
      explanation: "Slažem se s tobom is the only agreement. The other three are all disagreements — and note how mild they sound: Nisam siguran is a full no in Croatian.",
    },
    {
      id: "s16",
      type: "mc",
      prompt: "Iako je to istina, ___ mislim da nije tako jednostavno.",
      tts: "Iako je to istina, ipak mislim da nije tako jednostavno.",
      options: ["ipak", "ali", "i", "ili"],
      correctIndex: 0,
      explanation: "ipak. Croatian does not double the concession — iako has already done the «although», so ali would be a second «but» in the same sentence. ipak is the hinge that swings you back to your own position.",
    },
    {
      id: "s17",
      type: "type",
      prompt: "»I think that the city is a good place for young people.« (in Croatian)",
      answers: [
        "Mislim da je grad dobro mjesto za mlade ljude.",
        "Mislim da je grad dobro mjesto za mlade ljude",
        "Smatram da je grad dobro mjesto za mlade ljude.",
      ],
      hint: "the da-frame, and the clitic goes into second position of the da-clause",
      explanation: "Mislim da je grad dobro mjesto za mlade ljude. — da is not optional, and je sits right after it, counting da as slot one. ✗ Mislim da grad je…",
    },
    {
      id: "s18",
      type: "type",
      prompt: "»Although that's true, I still think it's not so simple.« (in Croatian)",
      answers: [
        "Iako je to istina, ipak mislim da nije tako jednostavno.",
        "Iako je to istina, ipak mislim da nije tako jednostavno",
        "Iako je to istina ipak mislim da nije tako jednostavno.",
      ],
      hint: "one concession word opens it — and ipak is not a second «but»",
      explanation: "Iako je to istina, ipak mislim da nije tako jednostavno. — no ali anywhere. iako concedes, ipak takes it back, and the da-frame carries your actual opinion.",
    },
    {
      id: "s19",
      type: "type",
      prompt: "»The conclusion is clear: everyone has a good reason.« (in Croatian)",
      answers: [
        "Zaključak je jasan: svi imaju dobar razlog.",
        "Zaključak je jasan: svi imaju dobar razlog",
        "Zaključak je jasan, svi imaju dobar razlog.",
      ],
      hint: "the closing move — and jasan agrees with zaključak",
      explanation: "Zaključak je jasan: svi imaju dobar razlog. — masculine subject, masculine adjective. This is move 4, and it goes last.",
    },
    {
      id: "s20",
      type: "reorder",
      words: ["Slažem", "se", "s", "ljudima", "koji", "vole", "grad"],
      answers: ["Slažem se s ljudima koji vole grad"],
      en: "I agree with the people who love the city.",
      explanation: "s + instrumental gives ljudima — but koji is the SUBJECT of vole, so it stays nominative plural. ✗ Slažem se s ljudima kojima vole grad — that is copying the antecedent's ending instead of asking what the pronoun does inside its own clause.",
    },
    {
      id: "s21",
      type: "section",
      title: "Part 3 · Uši, glas i pero",
      subtitle: "Two dictations from the four moves, one argument out loud, six flashbacks — and then the writing task, rehearsed with a model in front of you.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "slažem se · iako … ipak" },
        { emoji: "🎤", label: "Grad ili selo?", hint: "pick a side, four sentences, two relative clauses" },
        { emoji: "🔗", label: "Cijela jedinica", hint: "six flashbacks, one per case" },
        { emoji: "✍️", label: "Pisanje", hint: "the scaffold + a model text" },
      ],
    },
    {
      id: "s22",
      type: "listen-type",
      tts: "Slažem se s tobom, ali imam jedno pitanje.",
      answers: ["Slažem se s tobom, ali imam jedno pitanje.", "Slažem se s tobom ali imam jedno pitanje."],
      allowSlow: true,
      explanation: "The unstressed s in front of tobom is easy to lose. Slažem se s tobom — the reflexive se and the preposition s are two different words that happen to sit next to each other.",
    },
    {
      id: "s23",
      type: "listen-type",
      tts: "Iako je to istina, ipak mislim da nije tako.",
      answers: ["Iako je to istina, ipak mislim da nije tako.", "Iako je to istina ipak mislim da nije tako."],
      allowSlow: true,
      explanation: "iako … ipak, and no ali between them. Both words start with i and neither one is a «but».",
    },
    {
      id: "s24",
      type: "speak",
      targetHr: "S jedne strane, grad u kojem živim ima posao i fakultet. S druge strane, promet je velik nedostatak. Iako je selo jeftino, ipak sam za grad. Zaključak je jasan: ljudi s kojima radim su ovdje.",
      targetEn: "argue one side of «grad ili selo» — On one hand, the city I live in has work and a university. On the other, the traffic is a big drawback. Although the village is cheap, I'm still for the city. The conclusion is clear: the people I work with are here.",
      phonetic: "s YED-neh STRAH-neh grahd oo KOY-em ZHEE-veem EE-mah POH-sao ee fah-kool-TET · s DROO-geh STRAH-neh PROH-met yeh VEH-leek neh-doh-STAH-tak · EE-ah-koh yeh SEH-loh YEF-tee-noh EE-pak sahm zah grahd",
    },
    {
      id: "s25",
      type: "quiz-set",
      review: true,
      title: "Cijela jedinica (1/2): tko radi, koga poznajem",
      items: [
        {
          prompt: "L1 · Imam prijatelja ___ radi u Zagrebu.",
          tts: "Imam prijatelja koji radi u Zagrebu.",
          options: ["koji", "kojeg", "kojem", "kojim"],
          correctIndex: 0,
          explanation: "koji — NOMINATIV. prijatelja is accusative out in the main sentence, but inside the clause the friend is the one doing the working. Subject → nominative.",
        },
        {
          prompt: "L2 · Ovo je čovjek ___ poznajem.",
          tts: "Ovo je čovjek kojeg poznajem.",
          options: ["kojeg", "koji", "kojem", "kojim"],
          correctIndex: 0,
          explanation: "kojeg — AKUZATIV. He is the object of poznajem, and čovjek is animate, so the masculine singular accusative borrows the genitive form.",
        },
        {
          prompt: "L2 · Film ___ gledam je dobar.",
          tts: "Film koji gledam je dobar.",
          options: ["koji", "kojeg", "kojem", "kojim"],
          correctIndex: 0,
          explanation: "koji — AKUZATIV too, but a film is NEŽIVO. Inanimate masculine accusative looks exactly like the nominative. The mistake in kojeg is not gender, it is treating a film as alive.",
        },
      ],
    },
    {
      id: "s26",
      type: "quiz-set",
      review: true,
      title: "Cijela jedinica (2/2): gdje živim, s kim radim",
      items: [
        {
          prompt: "L3 · Grad ___ ___ živim je lijep.",
          tts: "Grad u kojem živim je lijep.",
          options: ["u kojem", "u koji", "koji … u", "o kojem"],
          correctIndex: 0,
          explanation: "u kojem — LOKATIV. živjeti u answers gdje?, so location, so the locative. And the preposition goes in front: Croatian has no «the city I live in».",
        },
        {
          prompt: "L4 · To je kolegica ___ ___ pijem kavu.",
          tts: "To je kolegica s kojom pijem kavu.",
          options: ["s kojom", "s kojim", "s kojima", "o kojoj"],
          correctIndex: 0,
          explanation: "s kojom — INSTRUMENTAL. She is company, so s appears; she is feminine singular, so kojom. Gender still comes from the antecedent even when the case does not.",
        },
        {
          prompt: "L4 · Ljudi ___ ___ radim su dobri.",
          tts: "Ljudi s kojima radim su dobri.",
          options: ["s kojima", "s kojim", "kojima", "koji"],
          correctIndex: 0,
          explanation: "s kojima — plural INSTRUMENTAL. In the plural dative, locative and instrumental are all kojima; what stands in front tells you which one you meant, and here it is s.",
        },
      ],
    },
    {
      id: "s27",
      type: "teach",
      title: "Tema o kojoj imam jasan stav ✍️",
      body:
        "The test carries this task for real. Here it is once, with a model in front of you.\n\n**Zadatak:** write 80–150 words in Croatian about something you have an opinion on. Use the six-step scaffold in the box, and **at least two relative clauses with koji, in two different cases** — the rubric checks the forms, so a paragraph without a single koji loses half its marks no matter how good the Croatian is.\n\n---\n\n**Model text — «Grad ili selo?» (~90 riječi)**\n\n*Tema o kojoj želim pisati je život u gradu.* ①\n*Mislim da je grad dobro mjesto za mlade ljude, jer ovdje ima posla.*\n*Grad u kojem živim ima fakultet, kazalište i park.* ②\n*Prednost je jasna: imam kolege s kojima volim raditi i prijatelje koje često vidim.* ③④\n*S druge strane, nedostatak je promet o kojem svi govore.* ⑤\n*Iako je to velik problem, ipak mislim da prednosti nisu male.*\n*Poznajem ljude koji ne vole grad.* ⑥\n*Njihov argument je jednostavan: selo je jeftino, a grad je skup.*\n*Zaključak je jasan: za mene je grad bolji.*\n\n**Svaki koji, s padežom:**\n\n① *o kojoj* — ž jd. **LOKATIV** · antecedent *tema* (ž), case from *o* · ② *u kojem* — m jd. **LOKATIV** · antecedent *grad* (m), case from *u* + *živim* · ③ *s kojima* — mn. **INSTRUMENTAL** · antecedent *kolege* (mn.), case from *s* · ④ *koje* — mn. **AKUZATIV** · antecedent *prijatelje* (mn.), case from *vidim* · ⑤ *o kojem* — m jd. **LOKATIV** · antecedent *promet* (m), case from *o* · ⑥ *koji* — mn. **NOMINATIV** · antecedent *ljude* (AKUZATIV!), case from *vole* — the one place where the endings disagree, and both are right.\n\nFive cases in nine sentences, and every single one was decided by the relative clause, never by the noun in front of it.",
      table: {
        caption: "koji — referentna traka za pisanje",
        headers: ["padež", "jednina (m / ž / s)", "množina"],
        rows: [
          ["NOM", "koji / koja / koje", "koji / koje / koja"],
          ["GEN", "kojeg(a) / koje / kojeg(a)", "kojih"],
          ["DAT", "kojem(u) / kojoj / kojem(u)", "kojima"],
          ["ACC", "koji · kojeg(a) / koju / koje", "koje / koje / koja"],
          ["LOC", "kojem(u) / kojoj / kojem(u)", "kojima"],
          ["INS", "kojim / kojom / kojim", "kojima"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Šest koraka — the scaffold",
        text: "**1 · Name the topic** — *Tema o kojoj želim pisati je…*\n**2 · State your position with a reason** — *Mislim da…, jer…*\n**3 · One advantage** — *Prednost je…*\n**4 · One drawback** — *S druge strane, nedostatak je…*\n**5 · Concede one point** — *Iako…* or *Ipak…*\n**6 · Close** — *Zaključak je…*\n\nStep 1 hands you a relative clause for free. Find a second one in step 3 or 4 — *ljudi s kojima…*, *promet o kojem…* — and the grammar half of the rubric is already done.",
      },
      examples: [
        { hr: "Tema o kojoj želim pisati je život u gradu.", en: "The topic I want to write about is life in the city.", highlight: { text: "o kojoj", caseId: "LOC" } },
        { hr: "Prednost je jasna: imam kolege s kojima volim raditi.", en: "The advantage is clear: I have colleagues I like working with.", highlight: { text: "s kojima", caseId: "INS" } },
        { hr: "Poznajem ljude koji ne vole grad.", en: "I know people who don't like the city.", highlight: { text: "koji", caseId: "NOM" } },
      ],
      ttsChips: [
        "Tema o kojoj želim pisati je život u gradu.",
        "S druge strane, nedostatak je promet o kojem svi govore.",
        "Zaključak je jasan: za mene je grad bolji.",
      ],
    },
    {
      id: "s28",
      type: "recap",
      summary:
        "**Four moves, and they have an order.** *Slažem se* → *S jedne strane…, s druge strane…* / *Iako…, ipak…* → *Nisam siguran* → *Zaključak je jasan*. Croatian concedes before it objects, and *Nisam siguran* is already a full no.\n\n**Two traps.** Croatian never doubles the concession — *Iako…, **ali**…* ❌, *Iako…, ipak…* ✅. And *protiv* takes the **genitive**: *Ja sam **protiv toga***, never *protiv to*.\n\n**Two nouns that drop an a.** *nedostatak → nedostat**k**a*, *zaključak → zaključ**k**a* — the same trick as U12's *sastanak → sastanka*. *prednost* is i-declension and barely moves at all.\n\n**The unit closes.** Six cases of koji, all decided the same way: gender and number from the antecedent, case from the relative clause. Next up is the story «Grad ili selo?» and the test, which carries the writing task you just rehearsed.\n\nWords tonight: **slagati se, tako, siguran, prednost, nedostatak, strana, zaključak, iako, ipak, protiv**.",
      vocabIds: [
        "b1u19.slagatise",
        "b1u19.tako",
        "b1u19.siguran",
        "b1u19.prednost",
        "b1u19.nedostatak",
        "b1u19.strana",
        "b1u19.zakljucak",
        "b1u19.iako",
        "b1u19.ipak",
        "b1u19.protiv",
      ],
    },
  ],
  srsCloze: [
    { front: "___ se s tobom. (I agree with you)", answers: ["Slažem", "slažem"], back: "Slažem se s tobom. — slagati se + s/sa + INS for the person.", tts: "Slažem se s tobom." },
    { front: "S jedne ___, s druge strane… (on one hand…)", answers: ["strane"], back: "S jedne strane, s druge strane… — a frozen chunk; both halves are genitive after s.", tts: "S jedne strane, s druge strane." },
    { front: "___ je to istina, ipak mislim da nije tako. (although)", answers: ["Iako", "iako"], back: "Iako je to istina, ipak mislim da nije tako. — one concession word, and no ali.", tts: "Iako je to istina, ipak mislim da nije tako." },
    { front: "Iako je to istina, ___ mislim da nije tako. (still / nevertheless)", answers: ["ipak"], back: "ipak — the hinge that swings you back to your own position. Not a second «but».", tts: "Iako je to istina, ipak mislim da nije tako." },
    { front: "I'm against it → Ja sam ___ ___.", answers: ["protiv toga"], back: "Ja sam protiv toga. — protiv takes the GENITIVE; toga is the genitive of to.", tts: "Ja sam protiv toga." },
    { front: "GEN of nedostatak → ___", answers: ["nedostatka"], back: "nedostatka — the fleeting a falls out, exactly like sastanak → sastanka.", tts: "Nemam nedostatka." },
    { front: "GEN of zaključak → ___", answers: ["zaključka"], back: "zaključka — another fleeting a. Two of today's three -ak nouns drop it.", tts: "Ne razumijem zaključka." },
    { front: "Nisam ___ da je to istina. (sure)", answers: ["siguran", "sigurna"], back: "Nisam siguran / sigurna da je to istina. — in Croatian this is a full disagreement, not a hedge.", tts: "Nisam siguran da je to istina." },
    { front: "advantage = ___ (ž, i-sklonidba)", answers: ["prednost"], back: "prednost — GEN prednosti, plural prednosti. The i-declension barely moves.", tts: "Prednost grada je posao." },
    { front: "I think so too → I ja ___ mislim.", answers: ["tako"], back: "I ja tako mislim. — move 1, agreement.", tts: "I ja tako mislim." },
    { front: "___ je jasan: svi imaju dobar razlog. (conclusion)", answers: ["Zaključak", "zaključak"], back: "Zaključak je jasan: svi imaju dobar razlog. — move 4, and it goes last.", tts: "Zaključak je jasan: svi imaju dobar razlog." },
    { front: "Volim kolegice ___ ___ radim. (the colleagues I work with)", answers: ["s kojima"], back: "s kojima — company takes s, and the plural instrumental is kojima for every gender.", tts: "Volim kolegice s kojima radim." },
  ],
  notes: {
    inOneSentence: {
      en: "A Croatian argument is four moves in a fixed order — agree, concede, object, conclude — and the concession comes before the objection, not after it.",
      exampleHr: "Iako je to istina, ipak mislim da nije tako jednostavno.",
    },
    deepDive: [
      {
        title: "Why the concession comes first",
        body:
          "This is the only part of Unit 19 that is not grammar, and it is the part learners get wrong most reliably.\n\nIn English you can open an objection cold — «I don't think that's right» — and still sound collaborative, because the tone does the softening. Croatian has fewer tonal softeners in this position, so the same move lands as a flat contradiction. What does the softening instead is **structure**: you concede something first, out loud, and only then say what you think.\n\nThat is why the four moves have an order and why move 2 is the one you will actually use most. *S jedne strane…, s druge strane…* is not a fancy phrase for essays; it is the everyday shape of a Croatian disagreement.\n\nNotice how mild the standard objections are:\n\n- *Nisam siguran.* — literally «I'm not sure», and it is a complete disagreement.\n- *Mislim da nije tako.* — «I think it's not so», the da-frame from L1 doing register work.\n- *Ne slažem se.* — the direct one, and it is direct. Fine among friends; abrupt with a stranger unless something has been conceded first.\n\nThe conclusion move matters too, and it is the one learners drop. A Croatian discussion usually gets closed by somebody: *Zaključak je jasan.* · *Po mome mišljenju…* · *Ja sam za / protiv.* Without it a conversation just stops, which reads as the argument having gone badly.\n\nOne register note on the writing task: pick *ti* or *Vi* and stay with it. Mixing them inside one text is the single most visible register error at B1, and the rubric checks for it.",
        table: {
          caption: "Četiri poteza — redoslijed nije proizvoljan",
          headers: ["potez", "fraze", "when you use it"],
          rows: [
            ["1 · Slažem se", "Slažem se (s tobom). · Naravno. · To je istina. · I ja tako mislim.", "the default opening, even when you are about to object"],
            ["2 · Da, ali…", "S jedne strane…, s druge strane… · Iako…, ipak… · Možda, ali…", "the workhorse — 80% of real disagreements live here"],
            ["3 · Ne slažem se", "Ne slažem se. · Nisam siguran. · Mislim da nije tako.", "after something has been conceded, not before"],
            ["4 · Zaključak", "Zaključak je jasan. · Po mome mišljenju… · Ja sam za / protiv.", "closes the topic; dropping it reads as the argument failing"],
          ],
        },
        diagram: {
          kind: "flow",
          steps: [
            { label: "Slušaj", emoji: "👂", example: "…" },
            { label: "Priznaj", emoji: "🤝", example: "Slažem se s tobom / S jedne strane…" },
            { label: "Okreni", emoji: "↩️", example: "…s druge strane / ipak…" },
            { label: "Zaključi", emoji: "🏁", example: "Zaključak je jasan." },
          ],
        },
      },
      {
        title: "prednost ‖ nedostatak — two nouns, two different problems",
        body:
          "Today's two content nouns are opposites in meaning, and conveniently they are opposites in grammar too, which makes them easy to file.\n\n**prednost** is feminine and belongs to the **i-declension** — the class with a bare consonant in the nominative and *-i* almost everywhere else. You have met it before without being told: *riječ*, *stvar*, *noć*, *ljubav*. Genitive *prednosti*, nominative plural *prednosti*, accusative plural *prednosti*. It is the least work of any noun in the lesson.\n\n**nedostatak** is masculine with a **fleeting a** — the *a* in the last syllable exists only when nothing follows it. The moment an ending arrives it falls out:\n\n*nedostatak* → GEN *nedostat**k**a* → NOM pl *nedostat**c**i* → ACC pl *nedostat**k**e*\n\n(The *k* → *c* in the nominative plural is the same softening you saw in *sastanak → sastanci*, *učenik → učenici*. It only happens in that one slot.)\n\n**zaključak** behaves identically: *zaključka*, *zaključci*, *zaključke*.\n\nThe useful generalisation: for masculine nouns ending in **-ak**, assume the *a* is fleeting and drop it before every ending. You will be right far more often than wrong, and the two examples the unit gives you — plus U12's *sastanak* — are the pattern.\n\nThe test's vocab section asks for *Svaka ideja ima prednosti i ___* → **nedostatke**, which needs exactly this: accusative plural, *a* gone.",
        table: {
          caption: "Nestalo a — cijela paradigma",
          headers: ["", "nedostatak (m)", "zaključak (m)", "prednost (ž · i)"],
          rows: [
            ["NOM jd.", "nedostatak", "zaključak", "prednost"],
            ["GEN jd.", "nedostatka", "zaključka", "prednosti"],
            ["ACC jd.", "nedostatak", "zaključak", "prednost"],
            ["NOM mn.", "nedostaci", "zaključci", "prednosti"],
            ["ACC mn.", "nedostatke", "zaključke", "prednosti"],
          ],
          colCase: [null, null, null, null],
        },
      },
      {
        title: "Six cases, one question — the unit in one page",
        body:
          "Everything Unit 19 taught reduces to two questions asked in the right order, and today's job was to ask them fast.\n\n**Question 1 — who is it?** Look at the antecedent, the noun in front. Take its **gender** and its **number**. Nothing else.\n\n**Question 2 — what does it do in here?** Look inside the relative clause only. Is the pronoun the subject? The object? Does a preposition stand in front of it? That, and only that, gives you the **case**.\n\nThe reason the unit needed five lessons is that question 2 keeps changing shape:\n\n- **L1** — the pronoun is the subject. NOM. *prijatelj **koji** radi*.\n- **L2** — the verb takes it as an object. ACC, forking on animacy in the masculine singular. *čovjek **kojeg** poznajem* ‖ *film **koji** gledam*.\n- **L3** — a preposition claims it, and moves in front. LOC or DAT. *grad **u kojem** živim* · *tema **o kojoj** govorimo*.\n- **L4** — the instrumental, with the §14 split deciding whether a preposition appears at all. *ljudi **s kojima** radim* ‖ *vlak **kojim** putujem*.\n- **L5** — all of them, mixed, while you are also trying to hold an opinion.\n\nThe sentence that proves whether it has landed is the one where the two answers disagree:\n\n*Ne poznajem ljude **koji** rade ovdje.*\n\n*ljude* is accusative — it is the object of *poznajem*, out in the main sentence. *koji* is nominative — it is the subject of *rade*, inside the clause. Different endings, both correct, because the two clauses assign case independently. A learner who has been quietly matching endings will fix the «error» and break the sentence.\n\nWrite that one out by hand before the test.",
        table: {
          caption: "Cijela jedinica na jednom mjestu",
          headers: ["lekcija", "što bira padež", "primjer", "padež"],
          rows: [
            ["L1", "koji je subjekt", "prijatelj koji radi u Zagrebu", "NOM"],
            ["L2", "glagol uzima objekt", "čovjek kojeg poznajem · film koji gledam", "ACC"],
            ["L3", "prijedlog ispred", "grad u kojem živim · tema o kojoj govorimo", "LOC"],
            ["L4", "s = društvo · goli INS = sredstvo", "ljudi s kojima radim · vlak kojim putujem", "INS"],
            ["L5", "sve zajedno, pod pritiskom", "Slažem se s ljudima koji vole grad.", "INS + NOM"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Ne slažem se. (as the first thing you say)",
        right: "Slažem se s tobom, ali… / Iako je to istina, …",
        why: "Grammatically perfect, socially expensive. Croatian softens a disagreement by conceding first, not by tone. Open with move 1 or move 2 and the objection lands as a contribution rather than a contradiction.",
      },
      {
        wrong: "Iako je to istina, ali mislim da nije tako.",
        right: "Iako je to istina, mislim da nije tako.",
        why: "Croatian does not double the concession. iako has already done the work of «although»; ali would be a second «but» in the same sentence. ipak is allowed, because it is a hinge, not a conjunction.",
      },
      {
        wrong: "Slažem se s ti.",
        right: "Slažem se s tobom.",
        why: "s takes the instrumental, and the instrumental of ti is tobom — the partner of Unit 12's fixed sa mnom. Learn both as chunks.",
      },
      {
        wrong: "Ja sam protiv to.",
        right: "Ja sam protiv toga.",
        why: "protiv takes the genitive, and toga is the genitive of to. Its opposite za takes the accusative — Ja sam za to — which is why the two look different.",
      },
      {
        wrong: "Grad je bolji. Ima posla. Volim ga. (a whole paragraph with no koji)",
        right: "Grad u kojem živim ima posla, i ljudi s kojima radim su ovdje.",
        why: "The writing rubric requires at least two relative clauses in two different cases. A text can be flawless Croatian and still lose half its marks by never using the structure the unit is testing.",
      },
    ],
    memoryHooks: [
      "Four moves, and the first one agrees with you: SLAŽEM SE → DA, ALI → NE SLAŽEM SE → ZAKLJUČAK.",
      "Nisam siguran is not a hedge. In Croatian it is the whole no, said politely.",
      "iako opens, ipak turns. Never ali in between — one concession word per sentence.",
      "-ak drops its a: nedostatak → nedostatka, zaključak → zaključka, sastanak → sastanka. Three for one rule.",
      "protiv toga ‖ za to. The preposition you are against takes the genitive; the one you are for takes the accusative.",
      "Step 1 of the scaffold hands you a relative clause for free: Tema o kojoj želim pisati je…",
    ],
    connects: [
      { label: "Where the da-frame started (Unit 19 L1)", lessonId: "b1u19l1" },
      { label: "The locative and the moved preposition (Unit 19 L3)", lessonId: "b1u19l3" },
      { label: "The instrumental and the full table (Unit 19 L4)", lessonId: "b1u19l4" },
      { label: "s / sa + instrumental, where it came from (Unit 12 L1)", lessonId: "a2u12l1" },
    ],
    selfCheck: [
      { q: "Why does a Croatian disagreement usually start by agreeing?", a: "Because the softening is structural rather than tonal. Conceding a point first — Slažem se…, ali… or S jedne strane… — is what keeps the objection collaborative. Opening cold with Ne slažem se is correct but abrupt." },
      { q: "What is wrong with «Iako je to istina, ali mislim da nije tako»?", a: "It doubles the concession. iako already means «although», so ali is a second «but» in one sentence. Either drop ali, or replace it with ipak, which is a hinge rather than a conjunction." },
      { q: "What case does protiv take, and what is the phrase you will actually say?", a: "The genitive. Ja sam protiv toga — toga is the genitive of to. Its opposite za takes the accusative: Ja sam za to." },
      { q: "Give the genitive singular and accusative plural of nedostatak, and say why.", a: "nedostatka and nedostatke. The a in the last syllable is fleeting: it exists only when no ending follows. Same for zaključak → zaključka / zaključke, and for U12's sastanak → sastanka." },
      { q: "In «Poznajem ljude koji ne vole grad», why is koji nominative when ljude is accusative?", a: "Because the two clauses assign case independently. ljude is the object of poznajem, out in the main sentence. koji is the subject of vole, inside the relative clause. Gender and number come from the antecedent; the case never does." },
    ],
  },
};
