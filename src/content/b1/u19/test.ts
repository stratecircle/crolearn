import type { UnitTest } from "@/types/content";

/**
 * B1 U19 unit test (spec: curriculum/B1/unit-19.md § Unit test blueprint).
 * 20 items · 4 sections (vocab 5 → grammar 8 → listening 4 → reading 3)
 * + the guided writing task · pass ≥ 70% (the writing is AI-graded and never
 * gates the result).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Only machinery drilled ≥2× in L1–L5 is tested: the two-questions rule for
 * `koji` (gender + number from the antecedent, CASE from the relative clause),
 * the m-sg animate/inanimate fork, preposition-in-front-of-koji, the `da`-frame
 * with its clitic in second position, and the L5 discussion register.
 *
 * Every scored koji item is written so the antecedent's ending cannot be
 * copied:
 *   s06 čovjek (NOM m)   → kojeg (ACC m animate)
 *   s07 Grad (NOM m)     → u kojem (LOC m)
 *   s08 Ljudi (NOM pl)   → s kojima (INS pl)
 *   s09 Film (NOM m)     → koji (ACC m INANIMATE — the fork, not a gender slip)
 *   s10 tema (NOM f)     → o kojoj (LOC f)
 *   s12 grad (ACC)       → u kojem (LOC m)
 *   s13 prijatelja (ACC) → koji (NOM m, subject of radi)
 *   s16 čovjek (NOM m)   → kojeg (ACC m animate — heard, not read)
 *   reading: Grad → u kojem · Kolege → s kojima · Prijatelji → koje · Ljudi → koji
 *
 * Level-compliance pass 2026-07-29: every content word greped against the
 * carded headword index. Rejected and replaced: braniti, pitati, razgovarati,
 * sjediti, izbor, zbog, zato što, nitko, tih, čist, opet, brzo.
 */
export const b1u19test: UnitTest = {
  id: "b1u19t",
  unitId: "b1u19",
  title: "Test — Mišljenja i rasprava",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the discussion word to its meaning",
          pairs: [
            { a: "mišljenje", b: "opinion" },
            { a: "prednost", b: "advantage" },
            { a: "nedostatak", b: "drawback" },
            { a: "rasprava", b: "discussion / debate" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "Which verb goes with a PERSON? (poznavati ‖ znati)",
          options: [
            "Poznajem tog čovjeka.",
            "Znam tog čovjeka.",
            "Poznajem odgovor.",
            "Poznajem da je to istina.",
          ],
          correctIndex: 0,
          explanation:
            "poznavati is for people and places you are acquainted with; znati is for facts and skills. So: Poznajem tog čovjeka, but Znam odgovor. And poznavati never takes a da-clause.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Which sentence AGREES with the speaker?",
          options: ["Slažem se.", "Ne slažem se.", "Nisam siguran.", "Ja sam protiv."],
          correctIndex: 0,
          explanation:
            "Only Slažem se agrees. Nisam siguran looks soft in English but it is already a full Croatian no — it is the polite way to disagree, not a maybe.",
        },
        {
          id: "s04",
          type: "fill",
          text: "Nemam jasan ___ o toj temi.",
          blanks: [["stav"]],
          translation: "I don't have a clear position on that topic.",
          explanation:
            "stav = a position you take, the thing you can defend. mišljenje is the softer «what I think». imati takes the accusative, and stav is inanimate masculine, so it looks like the nominative.",
        },
        {
          id: "s05",
          type: "fill",
          text: "Svaka ideja ima prednosti i ___.",
          blanks: [["nedostatke"]],
          translation: "Every idea has advantages and drawbacks.",
          explanation:
            "imati → accusative plural. nedostatak drops its a in every form but the nominative singular: nedostatka, nedostaci, nedostatke — exactly like sastanak → sastanka (U12).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»Ovo je čovjek ___ poznajem.« (This is the man I know.)",
          options: ["kojeg", "koji", "kojem", "kojim"],
          correctIndex: 0,
          explanation:
            "kojeg — AKUZATIV. Cover up čovjek and ask the clause's own question: poznajem KOGA? He is the object, and čovjek is animate, so the masculine singular accusative borrows the genitive form.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»Grad ___ ___ živim je lijep.« (The city I live in is beautiful.)",
          options: ["u kojem", "u koji", "koji … u", "kojem"],
          correctIndex: 0,
          explanation:
            "u kojem — LOKATIV. živjeti u answers gdje?, so locative, not accusative. And the preposition stands in FRONT: Croatian has no stranded «…which I live in», and it can never be dropped.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Ljudi ___ ___ radim su dobri.« (The people I work with are good.)",
          options: ["s kojima", "s kojim", "s kojih", "kojima"],
          correctIndex: 0,
          explanation:
            "s kojima — INSTRUMENTAL plural. In the plural, dative, locative and instrumental all collapse into kojima; the preposition in front is what tells you which one you meant, and for company it is s. s kojim is the masculine SINGULAR.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "»Film ___ gledam je dobar.« (The film I'm watching is good.)",
          options: ["koji", "kojeg", "kojem", "kojim"],
          correctIndex: 0,
          explanation:
            "koji — AKUZATIV, but a film is NEŽIVO. Inanimate masculine accusative looks exactly like the nominative. kojeg is wrong here not because of gender — the gender is right — but because it treats a film as alive.",
        },
        {
          id: "s10",
          type: "fill",
          text: "To je tema ___ ___ svi govore.",
          blanks: [["o"], ["kojoj"]],
          translation: "That's a topic everyone is talking about.",
          wordBank: ["o", "kojoj", "koju", "kojom", "u"],
          explanation:
            "govoriti needs o, and o takes the LOKATIV. tema is feminine singular, so o kojoj. ✗ tema koju svi govore drops the preposition the English never shows you.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Mislim ___ je to dobra ideja.",
          blanks: [["da"]],
          translation: "I think that's a good idea.",
          explanation:
            "da is not optional the way English «that» is. And the clitic goes into second position of the da-clause, counting da as slot one: Mislim da JE to… ✗ Mislim da to je…",
        },
        {
          id: "s12",
          type: "type",
          prompt: "Translate: »the city I live in« (in Croatian)",
          answers: ["grad u kojem živim", "Grad u kojem živim", "grad u kojemu živim", "Grad u kojemu živim"],
          hint: "find the English preposition, pick it up, put it in front of koji",
          explanation:
            "grad u kojem živim. English leaves «in» at the end; Croatian never does. Pick the preposition up, move it in front of koji, and let it choose the case — živjeti u → locative.",
        },
        {
          id: "s13",
          type: "type",
          prompt: "Weld into one sentence: »Imam prijatelja. Prijatelj radi u Zagrebu.« (in Croatian)",
          answers: [
            "Imam prijatelja koji radi u Zagrebu.",
            "Imam prijatelja koji radi u Zagrebu",
            "imam prijatelja koji radi u zagrebu",
          ],
          hint: "the repeated noun turns into koji — but which case?",
          explanation:
            "Imam prijatelja koji radi u Zagrebu. Two questions: prijatelj is masculine singular, so koj-; but inside the clause he is the one doing the working, so NOMINATIV → koji. ✗ …prijatelja kojeg radi copies the antecedent's ending.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s14",
          type: "listen-type",
          tts: "Ljudi s kojima radim su dobri.",
          explanation:
            "Ljudi s kojima radim su dobri. — plural instrumental after s. Listen for the s: without it the sentence would mean something else entirely.",
        },
        {
          id: "s15",
          type: "listen-type",
          tts: "To je tema o kojoj svi govore.",
          explanation: "To je tema o kojoj svi govore. — govoriti o + LOKATIV, feminine singular → o kojoj.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen: who knows whom?",
          tts: "Ovo je čovjek kojeg poznajem.",
          options: [
            "The speaker knows the man.",
            "The man knows the speaker.",
            "They know each other equally.",
            "Neither one knows the other.",
          ],
          correctIndex: 0,
          explanation:
            "kojeg is the accusative, so the man is the OBJECT: poznajem njega. If the man were doing the knowing, the clause would need the nominative — čovjek koji me poznaje.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Listen: does the speaker agree?",
          tts: "Iako je to istina, ipak mislim da nije tako.",
          options: [
            "No — the concession comes first, then the disagreement.",
            "Yes, completely.",
            "Yes, but only about one part.",
            "The sentence does not say.",
          ],
          correctIndex: 0,
          explanation:
            "iako grants the point, and ipak takes it straight back. That is the Croatian order: concede, then object. And note there is no ali after iako — Croatian never doubles the concession.",
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
            "»Ja sam student i živim u Zagrebu već tri godine.\nGrad u kojem živim ima sve: fakultet, kazalište i park.\nKolege s kojima radim žive blizu, pa uvijek imamo vremena za kavu.\nPrijatelji koje sam imao na selu sada svi rade u gradu.\nIako je promet velik nedostatak, ipak mislim da je prednost veća.\nLjudi koji žive na selu imaju mir, ali za mene bi to bilo dosadno.«\n\n»Grad u kojem živim ima sve.« — na koju riječ pokazuje koji? (Which word does koji point back at?)",
          options: ["Grad.", "Zagreb.", "Fakultet.", "Student."],
          correctIndex: 0,
          explanation:
            "koji always points at the noun right in front of it — Grad. Zagreb is in the line above and is not the antecedent. The case (u kojem, locative) comes from živjeti u, not from Grad.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Isti tekst: tko živi blizu? (Same text: who lives nearby?)",
          options: [
            "Kolege s kojima autor radi.",
            "Prijatelji sa sela.",
            "Ljudi koji žive na selu.",
            "Autorova obitelj.",
          ],
          correctIndex: 0,
          explanation:
            "»Kolege s kojima radim žive blizu.« The antecedent is Kolege, so they are the ones living nearby. The friends from the village appear a line later, and they now work in the city.",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Isti tekst: što autor misli o prometu? (Same text: what does the writer think about the traffic?)",
          options: [
            "Promet je nedostatak, ali autor je ipak za grad.",
            "Promet nije problem.",
            "Promet je razlog da autor ode na selo.",
            "Autor ne piše o prometu.",
          ],
          correctIndex: 0,
          explanation:
            "»Iako je promet velik nedostatak, ipak mislim da je prednost veća.« He concedes the drawback and then keeps his position — that is the whole point of the iako … ipak pair.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Tema o kojoj imam jasan stav",
    task:
      "Write 80–150 words in Croatian about something you have an opinion on — city or village, work or study, anything from the unit. Name the topic (»Tema o kojoj želim pisati je…«), state your position with a reason (»Mislim da…, jer…«), give one advantage and one drawback (»S jedne strane… s druge strane…« or prednost / nedostatak), concede one point to the other side (»Iako…« / »Ipak…«), and finish with a conclusion (»Zaključak je…«). You must use at least TWO relative clauses with koji, in two different cases. Use the L5 scaffold. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    // Model text — every koji form audited: o kojoj (LOC f, off «Tema» NOM f) ·
    // u kojem (LOC m, off «grad» NOM m) · s kojima (INS pl, off «ljude» ACC pl) ·
    // o kojem (LOC m, off «problem» NOM m) · koji (NOM pl, off «ljude» ACC pl).
    // Five clauses, three cases — the task asks for two of each.
    modelHr:
      "Tema o kojoj želim pisati je život u gradu. Mislim da je grad dobro mjesto za mlade ljude, jer ovdje ima posla i fakulteta.\n\nS jedne strane, prednost je jasna: grad u kojem živim ima kazalište, park i ljude s kojima volim raditi. Uvijek ima nešto novo.\n\nS druge strane, nedostatak je promet. To je problem o kojem svi govore, a ujutro čekam pola sata u autu. Poznajem ljude koji ne vole grad i razumijem ih.\n\nIako je promet velik nedostatak, ipak mislim da su prednosti veće. Zaključak je jasan: za mene je grad bolji od sela.",
    rubricFocus:
      "The form of koji above all: gender and number agreeing with the antecedent, case coming from the relative clause's own verb or preposition (the two-questions rule), and the m-sg animate/inanimate fork. Then preposition placement — in front of koji, never stranded at the end, never dropped. Then the da-frame: da present and not deleted, and the clitic in second position of the da-clause (Mislim da JE to…). Then discussion register: concession before disagreement, no ali after iako, and a consistent ti or Vi throughout. Finally task completion — all five required elements present: ≥2 relative clauses with koji in two different cases, one da-framed opinion with a jer-reason, one advantage and one drawback, one concession, one closing conclusion.",
  },
};
