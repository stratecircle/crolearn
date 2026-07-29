import type { UnitTest } from "@/types/content";

/**
 * B1 U18 unit test (spec: curriculum/B1/unit-18.md § Unit test blueprint).
 * 20 items · 4 sections (vocab 5 → grammar 8 → listening 4 → reading 3)
 * + the guided writing task · pass ≥ 70% (the writing is AI-graded and never
 * gates the result).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Only machinery drilled ≥2× in L1–L5 is tested: the bih/bi/bi/bismo/biste/bi
 * clitic set, participle agreement, the politeness ladder (bi li ⇄ biste li),
 * real ako + present/future I ⇄ unreal da + present / kad bih, the four advice
 * frames, and the education vocabulary.
 *
 * Spec deviation logged: the blueprint's fill item «Dobio je odličnu ___ na
 * ispitu.» carries its own CORRECTION note (dobiti is untaught), so the
 * corrected form «Ima odličnu ___ iz hrvatskog.» → ocjenu is what ships.
 *
 * Level-compliance pass 2026-07-29: every content word greped against the
 * carded list. Rejected and replaced: siguran, objašnjenje, birati, jednom,
 * opet, ponovno, matematika, informatika, provesti, misliti.
 */
export const b1u18test: UnitTest = {
  id: "b1u18t",
  unitId: "b1u18",
  title: "Test — Obrazovanje",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the education word to its meaning",
          pairs: [
            { a: "sveučilište", b: "university" },
            { a: "ocjena", b: "grade / mark" },
            { a: "vještina", b: "skill" },
            { a: "stipendija", b: "scholarship" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "»Moj brat ima deset godina i ide u školu.« Tko je on? (Who is he?)",
          options: ["učenik", "student", "profesor", "gost"],
          correctIndex: 0,
          explanation: "učenik = a pupil, someone at škola. student is reserved for fakultet / sveučilište.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Which sentence says the exam was PASSED? (polagati ‖ položiti)",
          options: [
            "Položio sam ispit.",
            "Polagao sam ispit.",
            "Polažem ispit.",
            "Polagat ću ispit.",
          ],
          correctIndex: 0,
          explanation: "položiti is the perfective — it carries the result. polagati only says you sat there and took it.",
        },
        {
          id: "s04",
          type: "fill",
          text: "Napisao sam pet novih ___ u bilježnicu.",
          blanks: [["riječi", "rijeci"]],
          translation: "I wrote five new words in my notebook.",
          explanation: "riječ is an i-declension noun: five of them is pet riječi — the genitive plural looks exactly like the nominative plural.",
        },
        {
          id: "s05",
          type: "fill",
          text: "Ima odličnu ___ iz hrvatskog.",
          blanks: [["ocjenu"]],
          translation: "She has an excellent grade in Croatian.",
          explanation: "ocjena is feminine, and imati takes the accusative → odličnu ocjenu.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»Mi ___ to naučili.« (We would have learnt that.)",
          options: ["bismo", "biste", "bih", "bi"],
          correctIndex: 0,
          explanation: "mi → bismo. The 1pl is the one with -smo, exactly like the perfekt smo you already know.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»Ana ___ studirala u Zagrebu.« (Ana would study in Zagreb.)",
          options: ["bi", "bih", "bismo", "biste"],
          correctIndex: 0,
          explanation: "Ana is 3sg → bi. Only the participle tells you she is female: studirala.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Ako imam vremena, ___« — finish the REAL condition.",
          options: ["doći ću.", "došao bih.", "dolazio bih.", "da dođem."],
          correctIndex: 0,
          explanation: "ako + present is the fork you can still take, so the other half is future I: doći ću.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "»Da imam vremena, ___« — finish the UNREAL condition.",
          options: ["došao bih.", "doći ću.", "dolazim.", "doći bih."],
          correctIndex: 0,
          explanation: "da + present builds the road with the barrier, so the main clause must be conditional: došao bih. Never mix the halves.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "You are writing to your professor. Which one is right?",
          options: [
            "Biste li mi mogli objasniti prijavu?",
            "Bi li mi mogli objasniti prijavu?",
            "Bi li ti mogao objasniti prijavu?",
            "Htio bih da mi objasnite prijavu.",
          ],
          correctIndex: 0,
          explanation: "Vi takes biste, and the participle stays plural: Biste li mi mogli…? The last option is the U21 da-clause — correct Croatian, just not this unit's tool.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Na tvom ___ bih upisao tečaj.",
          blanks: [["mjestu"]],
          translation: "In your place I'd enrol in the course.",
          explanation: "na + LOCATIVE → na tvom mjestu. ✗ Na tvoj mjesto is the classic slip.",
        },
        {
          id: "s12",
          type: "fill",
          text: "___ li mi mogli objasniti raspored?",
          blanks: [["Biste", "biste"]],
          translation: "Could you explain the timetable to me? (formal Vi)",
          explanation: "mogli is the plural participle, so the clitic has to be the Vi one: Biste li…? — and li comes straight after it.",
        },
        {
          id: "s13",
          type: "type",
          prompt: "Turn »Trebalo bi ponoviti.« into advice aimed at Ana. (in Croatian)",
          answers: [
            "Ana bi trebala ponoviti.",
            "Trebala bi ponoviti.",
            "Ana bi trebala ponoviti",
            "Trebala bi ponoviti",
          ],
          hint: "name a person and the participle has to agree with her",
          explanation: "Impersonal trebalo bi agrees with nobody. The moment Ana is the subject, the participle agrees: Ana bi trebala ponoviti.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s14",
          type: "listen-type",
          tts: "Htio bih upisati tečaj hrvatskog.",
          explanation: "Htio bih upisati tečaj hrvatskog. — the softened wish: htio bih, not želim.",
        },
        {
          id: "s15",
          type: "listen-type",
          tts: "Da imam vremena, došao bih.",
          explanation: "Da imam vremena, došao bih. — da + present in the if-half, conditional in the main half.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen: who is being spoken to?",
          tts: "Biste li mi mogli objasniti raspored?",
          options: ["a professor — formal Vi", "a close friend — ti", "a small child", "the whole class, informally"],
          correctIndex: 0,
          explanation: "biste (not bi) plus the plural participle mogli marks the formal Vi.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Listen: does he have the money?",
          tts: "Kad bih imao novca, upisao bih tečaj.",
          options: [
            "No — that is exactly why it is the conditional.",
            "Yes, and he already paid for the course.",
            "Yes, but he does not want the course.",
            "The sentence does not say.",
          ],
          correctIndex: 0,
          explanation: "kad bih imao is the barrier road: he does not have it. If he did, he would say »Ako imam novca, upisat ću tečaj.«",
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
            "»Poštovani profesore,\nzovem se Tom i student sam iz Kanade. Htio bih upisati ljetni tečaj hrvatskog na sveučilištu.\nBiste li mi mogli objasniti prijavu? Ne razumijem sve riječi na stranici.\nTrebalo bi se prijaviti do lipnja, ali ja sam još u Kanadi.\nAko položim ispit u lipnju, doći ću u Zagreb u srpnju.\nHvala Vam i lijep pozdrav, Tom«\n\nTko bi trebao objasniti prijavu? (Who is being asked to explain the application?)",
          options: ["Profesor.", "Tom.", "Ana.", "Marko."],
          correctIndex: 0,
          explanation: "»Biste li mi mogli objasniti prijavu?« — biste is aimed at the professor, and mi (»to me«) is Tom.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Same note: hoće li Tom doći u Zagreb? (Will Tom come to Zagreb?)",
          options: [
            "Da — ako položi ispit u lipnju.",
            "Ne, nikad.",
            "Da, već je u Zagrebu.",
            "Samo ako dobije stipendiju.",
          ],
          correctIndex: 0,
          explanation: "»Ako položim ispit u lipnju, doći ću u srpnju.« — ako + future I, so this is a real condition: it can actually happen.",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Same note: kako Tom piše profesoru? (How does Tom address the professor?)",
          options: [
            "S »Vi« — Biste li mi mogli…?",
            "S »ti« — Bi li mi mogao…?",
            "Bez pozdrava.",
            "Prvo s »Vi«, a onda s »ti«.",
          ],
          correctIndex: 0,
          explanation: "biste, Vam and Poštovani profesore all mark the formal Vi — and Tom keeps it from the first line to the last.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Što bih studirao i zašto",
    task:
      "Write 80–150 words in Croatian about education. Say what you studied or are studying now, then what you WOULD study if you could (»Studirao / Studirala bih…«) and what you would need for it (»Da imam…, upisao / upisala bih…«). Give one piece of advice to someone starting the same path (»Na tvom mjestu bih… / Trebalo bi…«), and finish with one real plan in the future (»Ako…, …ću…«). Use the L5 scaffold. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    modelHr:
      "Sada studiram njemački i engleski na fakultetu u Kanadi. Studiram već dvije godine. Fakultet je dobar, ali jezici su moja velika želja.\n\nDa imam više vremena, studirao bih i hrvatski. To je težak jezik, ali jako lijep. Da imam stipendiju, upisao bih sveučilište u Zagrebu. Htio bih tamo živjeti godinu dana i svaki dan govoriti hrvatski.\n\nNa tvom mjestu bih odmah počeo s tečajem. Trebalo bi vježbati svaki dan, barem pola sata. Mogao bi i čitati novine na hrvatskom. Marljiv student navečer ponovi nove riječi.\n\nAko položim ispit u lipnju, upisat ću ljetni tečaj u srpnju.",
    rubricFocus:
      "Conditional formation and participle agreement above all (bih + htio / htjela, Ana bi trebala). Then the real-vs-unreal choice: ako + present with future I for what can happen, da + present or kad bih with the conditional for what cannot. Then clitic position — bih sits in second position, never at the end of the sentence, and never opens it. Then register consistency: ti all the way through or Vi all the way through, not both. Finally task completion — all four required elements present: ≥2 conditional sentences, one unreal condition, one advice frame, one real condition in future I.",
  },
};
