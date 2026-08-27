import type { Story } from "@/types/content";

/**
 * B1 U20 story — «Spremnik ispred zgrade» (The container in front of the building)
 * (spec titles it «Kanta ispred zgrade»; renamed because the object in the
 * story is the street CONTAINER, and l2.ts cards kanta and spremnik as a
 * deliberately contrasted pair — using the wrong one in the title would
 * undercut the card.)
 * Spec: curriculum/B1/unit-20.md § Story.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * ~320 Croatian words across 5 paragraphs. Each paragraph carries a different
 * construction, in the order the lessons taught them.
 *
 * PER-PARAGRAPH CONSTRUCTION MAP — every `se` in the story, annotated:
 *   P1 · «Ovdje se bacaju boce i staklenke»   PASSIVE · subject = boce i
 *        staklenke (PLURAL) → bacaju. The sign is the unit's agreement rule
 *        printed on a lid, and the first comprehension question can only be
 *        answered by reading that plural.
 *   P1 · «Papir i plastika se ne bacaju…»     PASSIVE · subject = papir i
 *        plastika (two singulars joined by i = PLURAL) → bacaju.
 *   P2 · «Tu se uvijek sve bacalo»            IMPERSONAL · frozen NEUTER past.
 *        Marko's whole defence is one impersonal verb, which is the point:
 *        he is appealing to what is done, with nobody named to be wrong.
 *   P3 · «Kako se to ovdje radi?»             IMPERSONAL · frozen 3sg. Tom's
 *        question is the question the unit is an answer to, and it is asked
 *        by the one character with no idea what the local rules are.
 *   P3 · «Kaže se da…»                        L3 FRAME · frozen, ownerless.
 *   P3 · «Smatra se da…»                      L3 FRAME · frozen, ownerless.
 *   P3 · «Zna se da se staklo odvaja»         L3 FRAME + an inner IMPERSONAL
 *        se. Two `se` in ONE SENTENCE but TWO CLAUSES — legal, and taught as
 *        legal in l3.ts's fourth deepDive section.
 *   P3 · «da se ovdje ništa ne odvaja»        IMPERSONAL · frozen 3sg.
 *   P4 · «Trebalo bi pitati stanare»          L4 · neuter conditional, NO se.
 *   P4 · «Treba čuvati okoliš»                L4 · frozen treba, NO se.
 *   P5 · «Prije se nije bacalo ništa»         IMPERSONAL · frozen NEUTER past,
 *        placed last so it reads as a closing cadence rather than a rule.
 *   P5 · «Sada se sve baca»                   IMPERSONAL · frozen 3sg — the
 *        deliberate mirror of P5's previous line, one tense forward.
 *   P5 · «kako se to radi»                    IMPERSONAL · frozen 3sg, and a
 *        verbatim callback to Tom's question in P3. The story ends on the
 *        sentence it could not answer.
 *
 * AUTHORING GUARDS, all verified by grep over the learner-facing Croatian only:
 *  • **No participial passive** anywhere. The sign says «Ovdje se bacaju…»,
 *    never «Zabranjeno je…» — which is what a real Croatian sign would say, and
 *    is exactly why this guard was the one most at risk.
 *  • **No two `se` in one CLAUSE**, and no impersonal `se` on a verb that owns
 *    a lexical one. P3's «Zna se da se staklo odvaja» is two clauses.
 *  • **No reported speech** (U21): everybody speaks in direct quotes, and every
 *    second-hand claim takes an L3 frame, never «Rekao je da…».
 *  • **No Future II / budem** (U22). **No comparatives or superlatives** (B2).
 *  • **No -nje** beyond the carded plain nouns.
 *  • Reasons take **jer** or L5's **budući da**.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and replaced: nitko (rejected by name in b1u19's test
 * header → «svi su ga gledali»), zatvoriti (0 → baka simply keeps looking),
 * glasno (0 → «čitala je»), stajati (1, inside b1u19's own rejection notice →
 * «bio je»), kroz (3, same → the window is opened, not looked through),
 * kutija (1, same → vrećice), uredan (0), potreban (0), izlaziti (0 → «bio je
 * na vratima»), ovamo (0 → «u ovaj spremnik»), pušiti / prodavati / trajati /
 * pamtiti / pogriješiti (all 0). zgrada (a1u5 L4) and susjed / susjeda
 * (a2u10 L1) came back CARDED and were struck from the glossary — they are
 * used freely in the prose instead.
 */
export const b1u20story: Story = {
  id: "b1u20s",
  unitId: "b1u20",
  title: "Spremnik ispred zgrade",
  titleEn: "The container in front of the building",
  glossary: [
    { word: "pločnik", gloss: "the pavement (m) — na pločniku ispred zgrade" },
    { word: "poklopac", gloss: "a lid (m) — GEN poklopca, with a fleeting a, like nedostatak → nedostatka" },
    { word: "natpis", gloss: "a sign, an inscription (m) — the words written on something, not the object itself" },
    { word: "staklenka", gloss: "a jar (f) — glass, with a lid; the thing baka Marija kept for thirty years" },
    { word: "stanar", gloss: "a resident of a building (m; pl stanari) — the people who live in the flats, as opposed to susjedi, who live next to you" },
  ],
  paragraphs: [
    {
      hr: "U ponedjeljak ujutro na pločniku ispred zgrade bio je novi spremnik. Bio je velik i zelen, i svi su ga gledali. Stanari su dolazili i gledali novi spremnik. Ana je došla i čitala natpis na poklopcu. »Ovdje se bacaju boce i staklenke«, čitala je. »Papir i plastika se ne bacaju u ovaj spremnik.« Onda je Ana otvorila poklopac. U spremniku su bile novine, vrećice i plastika.",
      en: "On Monday morning there was a new container on the pavement in front of the building. It was big and green, and everybody was looking at it. Residents kept coming out and looking at the new container. Ana came over and read the sign on the lid. «Bottles and jars are thrown in here,» she read. «Paper and plastic are not thrown in this container.» Then Ana opened the lid. Inside the container there were newspapers, plastic bags and plastic.",
    },
    {
      hr: "Marko je bio na vratima zgrade. »Dobro jutro«, rekao je. Ana mu je pokazala spremnik. »Marko, ovdje se bacaju samo boce i staklenke.« Marko je gledao pločnik. Dva tjedna je u taj spremnik bacao sve — papir, plastiku, smeće. »Ja nisam znao«, rekao je. »Tu se uvijek sve bacalo.«",
      en: "Marko was at the door of the building. «Good morning,» he said. Ana showed him the container. «Marko, only bottles and jars are thrown in here.» Marko looked at the pavement. For two weeks he had been throwing everything into that container — paper, plastic, rubbish. «I didn't know,» he said. «Everything was always thrown in there.»",
    },
    {
      hr: "Tom je došao do ulaza. On je nov u Hrvatskoj i još ne zna sva pravila. »Kako se to ovdje radi?« pitao je. I onda su svi počeli govoriti. »Kaže se da papir ide u plavi spremnik«, rekla je susjeda s prvog kata. »Ne, smatra se da papir i plastika idu zajedno«, rekao je njezin susjed. »Zna se da se staklo odvaja«, rekla je Ana. »A ja mislim da se ovdje ništa ne odvaja dobro«, rekao je Marko. Tom je slušao četiri odgovora i nije razumio ništa. Svaki susjed je bio siguran, i svaki je govorio nešto drugo.",
      en: "Tom came up to the entrance. He is new in Croatia and still doesn't know all the rules. «How is this done here?» he asked. And then everybody started talking. «They say paper goes in the blue container,» said the neighbour from the first floor. «No, paper and plastic are held to go together,» said her neighbour. «It's known that glass is separated,» said Ana. «And I think nothing here is separated properly,» said Marko. Tom listened to four answers and understood nothing. Every neighbour was certain, and every one of them said something different.",
    },
    {
      hr: "Baka Marija je otvorila prozor na prvom katu. »Trebalo bi pitati stanare«, rekla je. »Ili bi trebalo samo čitati natpis.« Svi su gledali spremnik. Natpis je bio na poklopcu cijelo vrijeme. »Treba čuvati okoliš«, rekao je Tom. »Ali prvo treba znati pravila.«",
      en: "Baka Marija opened the window on the first floor. «One ought to ask the residents,» she said. «Or one ought to just read the sign.» Everybody looked at the container. The sign had been on the lid the whole time. «The environment should be looked after,» said Tom. «But first one has to know the rules.»",
    },
    {
      hr: "Baka Marija je dugo gledala spremnik na pločniku. »Kad sam bila mlada, nije bilo spremnika«, rekla je. »Nije bilo ni plastike. Prije se nije bacalo ništa. Staklenka je bila staklenka trideset godina. A sada se kupuje nova svaki tjedan.« Ana je gledala staru staklenku u spremniku. »Sada se sve baca«, rekla je. »I sada se mora učiti kako se to radi.«",
      en: "Baka Marija looked at the container on the pavement for a long time. «When I was young there were no containers,» she said. «There wasn't any plastic either. Nothing used to be thrown away at all. A jar stayed a jar for thirty years. And now a new one gets bought every week.» Ana looked at an old jar inside the container. «Now everything gets thrown away,» she said. «And now one has to learn how it's done.»",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što se baca u novi spremnik?",
      options: [
        "Boce i staklenke.",
        "Papir i plastika.",
        "Smeće.",
        "Novine i vrećice.",
      ],
      correctIndex: 0,
      explanation: "The sign says »Ovdje se **bacaju** boce i staklenke« — and the verb is plural, agreeing with the two things. The other items are what people had actually been putting in, which is the whole problem.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je Marko radio dva tjedna?",
      options: [
        "Bacao je sve u taj spremnik.",
        "Čitao je natpis na poklopcu.",
        "Odvajao je staklo od papira.",
        "Pitao je stanare za pravila.",
      ],
      correctIndex: 0,
      explanation: "»Dva tjedna je u taj spremnik bacao sve.« His defence is an impersonal one — *tu se uvijek sve bacalo* — which names nobody, including himself.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom pita?",
      options: [
        "Kako se to ovdje radi.",
        "Gdje je novi spremnik.",
        "Tko je donio spremnik.",
        "Zašto je Marko bacao smeće.",
      ],
      correctIndex: 0,
      explanation: "»Kako se to ovdje radi?« — the frozen impersonal, and the question this whole unit is an answer to. It is asked by the one person with no idea what the local rules are.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što bi, prema baki Mariji, trebalo napraviti?",
      options: [
        "Trebalo bi pitati stanare ili čitati natpis.",
        "Trebalo bi kupiti novi spremnik.",
        "Trebalo bi zvati susjede s prvog kata.",
        "Trebalo bi baciti sve u kantu.",
      ],
      correctIndex: 0,
      explanation: "»Trebalo bi pitati stanare… Ili bi trebalo samo čitati natpis.« Neuter, frozen, and with no `se` — L4's construction, and the softest way in Croatian to tell four arguing people they missed the obvious.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Čega se baka Marija sjeća?",
      options: [
        "Vremena kad nije bilo plastike ni spremnika.",
        "Vremena kad se sve odvajalo.",
        "Vremena kad je zgrada bila nova.",
        "Vremena kad je bila susjeda s prvog kata.",
      ],
      correctIndex: 0,
      explanation: "»Kad sam bila mlada, nije bilo spremnika. Nije bilo ni plastike. Prije se nije bacalo ništa.« The impersonal past — frozen in the neuter — closes the story, and Ana answers it with the same construction one tense forward: *sada se sve baca*.",
    },
  ],
};
