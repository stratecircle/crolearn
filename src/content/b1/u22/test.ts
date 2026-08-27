import type { UnitTest } from "@/types/content";

/**
 * B1 U22 unit test (spec: curriculum/B1/unit-22.md § Unit test blueprint).
 * 20 items · 4 sections (vocab 5 → grammar 8 → listening 4 → reading 3)
 * + the guided writing task · pass ≥ 70% (the writing is AI-graded and never
 * gates the result).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Only machinery drilled ≥2× in L1–L5 is tested: **the Futur I ban inside a
 * time clause** (L2, the unit's headline rule — it takes two of the eight
 * grammar items), the **aspect fork** that decides between a perfective present
 * and a Futur II (L2), the **four conjunctions** and the `dok ne` whose `ne`
 * translates to nothing (L3), the **past kad** and its habitual (L1/L4), and
 * **the one interrogative kad that takes Futur I** (L5, §20.5).
 *
 * THE ONE DESIGN RULE OF THIS TEST — inherited from U19–U21 and sharpened here:
 * **every distractor is grammatical.** Nothing can be solved by spotting a
 * broken sentence.
 *   s06 «Kad ću doći, javit ću ti.»   — a real Croatian string; it just cannot
 *                                       be a time clause
 *   s10 «Čekat ću dok dođeš.»         — grammatical, and means *while*
 *   s11 «Ako budeš imao vremena…»     — legal, and claims you might not
 *   s12 «Pitao je kad dođem.»         — the mirror trap: the ONE place where
 *                                       the present is the error
 *
 * Item-by-item map against the blueprint:
 *   VOCAB     s01 match  — dvorac / tvrđava / kula / ruševine ↔ what each thing
 *                          IS, never translations. These four are the unit's
 *                          most confusable set and the images are drawn to
 *                          separate them, so the test separates them the same
 *                          way.
 *             s02 mc     — ulaznica ‖ karta (which one gets you IN?)
 *             s03 mc     — spomenik ‖ kip (which one is a carved figure?)
 *             s04 fill   — Rat je ___ četiri godine → trajao (imperfective by
 *                          nature; a war is a stretch, it does not happen once)
 *             s05 fill   — Ako ___ izložbu → propustim (perfective, present)
 *   GRAMMAR   s06 mc     — the ban, forwards: pick the legal time clause
 *             s07 mc     — the ban again, with `čim` and a plural subject
 *             s08 fill   — aspect fork A: imperfective → FUTUR II (budem radio)
 *             s09 fill   — aspect fork B: perfective → PREZENT (stignem)
 *             s10 mc     — dok ‖ dok ne, decided on meaning alone
 *             s11 mc     — ako ‖ kad, decided on certainty alone
 *             s12 mc     — the two-`kad` item, and the ONLY item in the whole
 *                          section where the future inside the clause is the
 *                          right answer. It is deliberately placed LAST, after
 *                          eleven items that punish exactly that shape.
 *             s13 reorder — Kad se budem pripremio, javit ću ti.
 *   LISTENING s14 listen-type — Čim stignem, javit ću ti.
 *             s15 listen-type — Čekat ću dok ne dođeš.
 *             s16 mc     — Kad budem imao vremena… → WHEN will he call?
 *             s17 mc     — Čekat ću dok ne dođeš. → is he waiting NOW? (yes),
 *                          with the *while you don't come* misreading offered
 *                          as a distractor
 *   READING   s18-s20    — a 9-line Saturday itinerary: what comes first, what
 *                          is conditional on the rain, and which single line
 *                          definitely will not happen
 *
 * The reading text is an **itinerary**, which is the real genre for this
 * grammar — a plan is a stack of time clauses and nothing else. It carries
 * three time clauses (kad · čim · dok), one condition (ako) and one
 * cancellation, and s20 requires holding all nine lines at once, because the
 * cancelled line is the only one with no time clause in it.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * SPEC CORRECTIONS APPLIED — three, all forced:
 *  • **The blueprint's reorder item is unbuildable as written.** It asks for
 *    «Kad se budem **vratio**, javit ću ti se.» and **`vratiti se` is rejected
 *    course-wide**. The item is rebuilt on **`pripremiti se`**, this unit's own
 *    L3 card. The clitic point being tested is unchanged: `se` goes straight
 *    after the conjunction, never after `budem`.
 *  • **The blueprint asks the reorder item to carry a trap tile** ("with a trap
 *    tile placing *se* after *budem*"). `ReorderSlideView` renders
 *    `disabled={pool.length > 0}`, so **a reorder slide cannot ship distractor
 *    tiles** — the learner would be locked out of submitting. The trap is moved
 *    into the explanation, where it is named and shown, and the tiles are the
 *    exact seven words of the answer.
 *  • **«javit ću ti se» is a three-clitic cluster** (ću + ti + se), which is
 *    U23 material. Every occurrence in this test is the two-clitic **«javit ću
 *    ti»** instead. The reflexive adds nothing the item is testing.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * AUTHORING GUARDS, all verified by grep over learner-facing Croatian only:
 *  • **Every `ću / ćeš / će / ćemo / ćete` after a `kad`, `ako`, `čim` or `dok`
 *    was located and classified.** The legal ones are all main clauses standing
 *    after the comma. The in-clause ones appear ONLY as wrong options (s06,
 *    s07, s11) and in s12, where the clause is an interrogative `kad` and the
 *    future is correct.
 *  • **No participial passive** (B2). The cancelled line on the itinerary uses
 *    U20's owned route — «Galerija danas ne radi» — never *Galerija je
 *    zatvorena*, which is what a real notice would say.
 *  • **No comparatives or superlatives** (B2). No *naj-*, no *više*, no *manje*.
 *  • **No verbal nouns in -nje** beyond the section titles and the carded
 *    plain nouns · **no `da li`** · **never three clitics in one clause**.
 *  • Reasons take **jer** or U20's **budući da**.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and replaced: vratiti se (rejected course-wide →
 * pripremiti se), sljedeći (rejected → «drugi put»), otkazati (0 → «ne radi»),
 * stizati (0 → čekati), kasniti (0), petnaesti (0 → the carded ordinals stop at
 * *deseti*), nitko, naći, točno, sjediti, stajati, gore / dolje / ovamo, zid
 * (all 0 or previously rejected). vrh / stube / kraljica / zatvoreno are the
 * STORY's glossed words and are deliberately kept out of the test, which must
 * stand on carded vocabulary alone.
 */
export const b1u22test: UnitTest = {
  id: "b1u22t",
  unitId: "b1u22",
  title: "Test — Kultura i povijest",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match each building to what it actually is",
          pairs: [
            { a: "dvorac", b: "velika stara kuća u kojoj je živio kralj" },
            { a: "tvrđava", b: "gradili su je za rat, a ne za život" },
            { a: "kula", b: "jedna visoka zgrada, i ništa oko nje" },
            { a: "ruševine", b: "samo stari kamen; zgrade nema" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "Što kupuješ na ulazu u muzej?",
          options: ["Ulaznicu.", "Kartu.", "Knjigu.", "Sliku."],
          correctIndex: 0,
          explanation:
            "ulaznica — it gets you IN. A karta gets you a seat or a ride: karta za vlak, karta za koncert.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Koji od ovih je čovjek od kamena?",
          options: ["Spomenik.", "Kip.", "Kula.", "Tvrđava."],
          correctIndex: 1,
          explanation:
            "kip — a carved human figure. A spomenik commemorates something and is often just stone with a name on it; a kip of a person is usually also a spomenik, but plenty of spomenici are not kipovi.",
        },
        {
          id: "s04",
          type: "fill",
          text: "Rat je ___ četiri godine.",
          blanks: [["trajao"]],
          translation: "The war lasted four years.",
          explanation:
            "trajao — trajati is imperfective by nature. A war does not happen; it lasts. And you can only attach a duration to an imperfective.",
        },
        {
          id: "s05",
          type: "fill",
          text: "Ako ___ izložbu, doći ću drugi put.",
          blanks: [["propustim"]],
          translation: "If I miss the exhibition, I'll come another time.",
          explanation:
            "propustim — perfective, so the present, even after ako. And ako is right here because missing it is only a possibility.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»___ , javit ću ti.« Koja je rečenica dobra?",
          options: [
            "Kad dođem",
            "Kad ću doći",
            "Kad budem doći",
            "Kad sam došao",
          ],
          correctIndex: 0,
          explanation:
            "Kad dođem. The ban: no Futur I inside a time clause about the future. «Kad ću doći» is a real Croatian string — it simply cannot be a time clause — and it is the error this whole unit exists to prevent.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»___ , kupit ćemo ulaznice.« Koja je rečenica dobra?",
          options: [
            "Čim stignemo",
            "Čim ćemo stići",
            "Čim smo stigli",
            "Čim budemo stići",
          ],
          correctIndex: 0,
          explanation:
            "Čim stignemo. The ban applies to čim exactly as it applies to kad, and stići is perfective, so the present goes in the clause.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Dok ___ ___ sutra, ti razgledaj grad. (raditi, ja)",
          blanks: [["budem"], ["radio", "radila"]],
          translation: "While I'm working tomorrow, you go and look round the town.",
          explanation:
            "budem radio / radila — raditi is imperfective, so Futur II, and the l-participle agrees with whoever is speaking. «Dok radim» would report something happening right now.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Čim ___ , javit ću ti. (stići, ja)",
          blanks: [["stignem"]],
          translation: "As soon as I arrive, I'll call you.",
          explanation:
            "stignem — stići is perfective, so the present. čim nearly always works this way, because «as soon as» names a completed trigger.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Želiš reći: »I'll wait UNTIL you come.« Koja je rečenica dobra?",
          options: [
            "Čekat ću dok ne dođeš.",
            "Čekat ću dok dođeš.",
            "Čekat ću čim dođeš.",
            "Čekat ću kad dođeš.",
          ],
          correctIndex: 0,
          explanation:
            "dok ne = until, and the `ne` is not a negation — there is none in the English and none in the meaning. «Čekat ću dok dođeš» is perfectly grammatical and means «I'll wait WHILE you come», which is a few seconds and not a plan.",
        },
        {
          id: "s11",
          type: "mc",
          prompt: "Znaš da će on sigurno imati vremena — samo ne znaš kad. Koja je rečenica dobra?",
          options: [
            "Kad budeš imao vremena, javi mi.",
            "Ako budeš imao vremena, javi mi.",
            "Kad ćeš imati vremena, javi mi.",
            "Ako ćeš imati vremena, javi mi.",
          ],
          correctIndex: 0,
          explanation:
            "kad — you know it will happen. Option 2 is perfectly legal Croatian and says something different: that you doubt he will ever have time. Options 3 and 4 break the ban as well.",
        },
        {
          id: "s12",
          type: "mc",
          prompt: "»Pitao je kad ___ doći.« Koja je riječ dobra?",
          options: ["ću", "dođem", "budem", "dolazim"],
          correctIndex: 0,
          explanation:
            "★ ću — and this is the only item in the section where the future inside the clause is right. That `kad` is Unit 21's embedded question word, not this unit's conjunction: the clause is not naming the time of anything, it IS the thing being asked. The test is never the word; it is what the clause is doing.",
        },
        {
          id: "s13",
          type: "reorder",
          words: ["Kad", "se", "budem", "pripremio", "javit", "ću", "ti"],
          answers: [
            "Kad se budem pripremio, javit ću ti.",
            "Kad se budem pripremio javit ću ti.",
            "Kad se budem pripremio, javit ću ti",
          ],
          en: "When I've got ready, I'll let you know.",
          explanation:
            "The `se` goes into second position of its own clause — straight after `Kad` — and never after `budem`. \\*Kad budem se pripremio ❌ is the trap here. And this is the heavy-but-legal option: pripremiti se is perfective, so «Kad se pripremim» is what people actually say.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s14",
          type: "listen-type",
          tts: "Čim stignem, javit ću ti.",
          answers: ["Čim stignem, javit ću ti.", "Čim stignem, javit ću ti"],
          allowSlow: true,
          explanation: "čim + perfective present, then Futur I in the main clause.",
        },
        {
          id: "s15",
          type: "listen-type",
          tts: "Čekat ću dok ne dođeš.",
          answers: ["Čekat ću dok ne dođeš.", "Čekat ću dok ne dođeš", "Cekat cu dok ne dodes."],
          allowSlow: true,
          explanation: "dok ne — until. The `ne` negates nothing.",
        },
        {
          id: "s16",
          type: "mc",
          tts: "Kad budem imao vremena, javit ću ti.",
          prompt: "Slušaj. Kad će se javiti? (Listen. When will he get in touch?)",
          options: [
            "Kad nešto drugo prvo bude gotovo — kad bude imao vremena.",
            "Odmah, danas.",
            "Nikad — rekao je da neće.",
            "Sutra ujutro.",
          ],
          correctIndex: 0,
          explanation:
            "«Kad budem imao vremena» — imati is imperfective, so Futur II, and the whole point of the clause is that the calling waits on something else. He has not named a day and is not promising one.",
        },
        {
          id: "s17",
          type: "mc",
          tts: "Čekat ću dok ne dođeš.",
          prompt: "Slušaj. Čeka li on sada? (Listen. Is he waiting now?)",
          options: [
            "Da, i čekat će sve dok ne dođeš.",
            "Ne — čekat će samo ako ne dođeš.",
            "Ne — prestat će čekati kad dođeš, pa sada ne čeka.",
            "Ne može se znati.",
          ],
          correctIndex: 0,
          explanation:
            "Yes. `dok ne` means «until», so the waiting is happening and will go on up to the moment you arrive. Option 2 is the misreading the `ne` invites — «as long as you don't come» — and it is exactly what the `ne` does NOT mean.",
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
            "»PLAN — SUBOTA\n1. Vlak za Split ide u sedam.\n2. Kad stignemo, kupit ćemo ulaznice za muzej.\n3. Čim kupimo ulaznice, idemo u muzej.\n4. Ručak u jedan, u restoranu na trgu.\n5. Dok budemo čekali Anu, razgledat ćemo stari grad.\n6. Ako bude kiše, nećemo ići na otok.\n7. Galerija danas ne radi.\n8. Koncert je navečer u devet.\n9. Vlak za Zagreb ide u jedanaest.«\n\nŠto će prvo napraviti kad stignu? (What will they do first when they arrive?)",
          options: [
            "Kupit će ulaznice za muzej.",
            "Ići će u muzej.",
            "Ručat će u restoranu.",
            "Razgledat će stari grad.",
          ],
          correctIndex: 0,
          explanation:
            "Line 2: »Kad stignemo, kupit ćemo ulaznice.« Line 3 then hangs off it — *čim kupimo ulaznice* — so the museum comes second. The two time clauses put the order beyond doubt.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Isti tekst: što neće biti ako bude kiše? (Same text: what won't happen if it rains?)",
          options: [
            "Odlazak na otok.",
            "Ručak u restoranu.",
            "Koncert navečer.",
            "Vlak za Zagreb.",
          ],
          correctIndex: 0,
          explanation:
            "Line 6: »Ako bude kiše, nećemo ići na otok.« It is the only line with an `ako` in it — and `ako` is precisely the word that marks something as conditional rather than planned.",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Isti tekst: koja se stvar sigurno neće dogoditi? (Same text: which one definitely will not happen?)",
          options: [
            "Posjet galeriji.",
            "Posjet muzeju.",
            "Koncert navečer.",
            "Odlazak na otok.",
          ],
          correctIndex: 0,
          explanation:
            "Line 7: »Galerija danas ne radi.« It is the only line on the list stated as a plain fact about today, with no time clause and no condition — everything else is either planned (2, 3, 5, 8) or conditional (6). Noticing that requires holding all nine lines at once.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Moja kulturna ruta",
    task:
      "Write 80–150 words in Croatian planning a cultural route through Croatia. Say what you will do WHEN you arrive (»Kad stignem…«), what you will do AS SOON AS something happens (»Čim…«), what you will do WHILE something else is going on (»Dok budem…«), one thing that depends on a CONDITION (»Ako…«), and one thing you will not do UNTIL something happens (»…dok ne…«). Use at least one perfective present time clause and at least one Futur II with the participle agreeing. Give one reason with jer or budući da. Do NOT put a Futur I inside any time clause. Use the L5 scaffold. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    // Model text — every time clause annotated with its conjunction, its tense
    // and the aspect reason:
    //   «Kad budem u Hrvatskoj»        kad · FUTUR II · biti is imperfective;
    //                                   budem stands alone, no participle
    //   «Kad stignem»                  kad · PREZENT · stići is perfective
    //   «Čim kupim ulaznicu»           čim · PREZENT · kupiti is perfective
    //   «Ako izložba bude trajala»     ako · FUTUR II · trajati is imperfective,
    //                                   participle agreeing with izložba (f)
    //   «Ako ne bude»                  ako · the bare bude of biti
    //   «Dok budem putovao vlakom»     dok · FUTUR II · putovati is imperfective,
    //                                   participle agreeing with a male writer
    //   «dok ne vidim more»            dok ne · PREZENT · vidjeti is perfective
    //   «pitala me kad ću doći»        ★ THE LICENSED FUTUR I · an embedded
    //                                   question (U21), so it keeps its future
    // All five required elements present. No Futur I in any temporal clause; no
    // comparative; no participial passive; no -nje.
    modelHr:
      "Kad budem u Hrvatskoj, putovat ću tjedan dana. Prvo idem u Zagreb. Kad stignem, posjetit ću galeriju koja je blizu trga. Čim kupim ulaznicu, idem gledati kipove. U galeriji ću vidjeti i nošnje, jer su one važne za tradiciju.\n\nAko izložba bude trajala do subote, ostat ću još jedan dan. Ako ne bude, krenut ću odmah u Split. Dok budem putovao vlakom, čitat ću knjigu o hrvatskoj povijesti. U Splitu ću razgledati staru tvrđavu i neću otići dok ne vidim more.\n\nAna mi je rekla da je Split lijep, i pitala me kad ću doći. Mislim da je ovo dobra ruta, jer svaki grad ima nešto svoje.",
    rubricFocus:
      "The ban first and hardest: is there a Futur I inside any temporal clause? That is the error the unit exists to prevent. But carve out the exception explicitly — an embedded question (»pitala me kad ću doći«) is CORRECT and should be praised rather than marked, because recognising it is one of the unit's can-do objectives. Then the aspect fork, and note that the two ways of getting it wrong are not equal: a `budem` on a perfective verb (»kad budem došao«) is HEAVY, NOT WRONG, and should be noted without penalty; a bare present on an imperfective (»dok čekam, čitat ću«) IS wrong, because it reports something happening now. Then `dok ne`: a perfective present, and no negation anywhere in the meaning. Then participle agreement in every Futur II — this is the trap that hides, because the sentence is otherwise perfect. Then conjunction variety: a paragraph that uses only `kad` has not shown the system, and row 5 of the scaffold is the one that forces a Futur II. Finally task completion: a perfective-present clause, a Futur II, an `ako` condition, a `dok` or `dok ne` clause, and one reason with jer or budući da.",
  },
};
