import type { UnitTest } from "@/types/content";

/**
 * B1 U20 unit test (spec: curriculum/B1/unit-20.md § Unit test blueprint).
 * 20 items · 4 sections (vocab 5 → grammar 8 → listening 4 → reading 3)
 * + the guided writing task · pass ≥ 70% (the writing is AI-graded and never
 * gates the result).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 *
 * Only machinery drilled ≥2× in L1–L5 is tested: **the agreement in a
 * se-passive** (L1, and the unit's headline rule — it takes two of the eight
 * grammar items), **the freeze when there is no subject** (L2, including the
 * neuter past), **the modal stack** (L2), **the kaže se / smatra se / zna se
 * frames** (L3) and **the treba fork with its no-`se` trap** (L4).
 *
 * THE ONE DESIGN RULE OF THIS TEST — inherited from U19 and U21:
 * **every distractor is grammatical.** Nothing can be solved by spotting a
 * broken sentence.
 *   s06 «Ovdje se reciklira novine.»  — a real verb form, wrong agreement
 *   s07 «U ovoj kanti se bacaju staklo.» — likewise, mirrored the other way
 *   s10 «Treba se štedjeti energiju.» — the reflex three lessons installed
 *   s12 «Prije se živjela dobro.»    — a real participle, wrong gender
 *
 * Item-by-item map against the blueprint:
 *   VOCAB     s01 match  — okoliš / otpad / spremnik / zaštita ↔ one-line
 *                          descriptions of what each thing IS, never
 *                          translations
 *             s02 mc     — kanta ‖ spremnik (which one is out on the street?)
 *             s03 mc     — štedjeti ‖ spasiti (which one goes with energiju?)
 *             s04 fill   — Staklo se ___ od papira → odvaja
 *             s05 fill   — Plastika je ___ za okoliš → štetna
 *   GRAMMAR   s06 mc     — agreement A: plural-only subject (novine)
 *             s07 mc     — agreement B: singular subject, plural distractor
 *             s08 mc     — species: is there a subject in «Kako se živi…»?
 *             s09 fill   — the modal stack → smije
 *             s10 mc     — the treba fork, with «Treba se» as the trap. This
 *                          is the item the unit's L4 exists for.
 *             s11 fill   — the L3 frame → da
 *             s12 fill   — the impersonal PAST → živjelo (neuter)
 *             s13 reorder — U našem gradu se odvajaju papir i staklo.
 *   LISTENING s14 listen-type — Ovdje se recikliraju boce.
 *             s15 listen-type — Trebalo bi nešto napraviti.
 *             s16 mc     — hear «Ovdje se recikliraju novine.» → one or
 *                          several? The VERB is the only evidence in the
 *                          sentence, which is the whole unit in one item.
 *             s17 mc     — hear «Treba ugasiti struju.» → is the speaker
 *                          telling ME? → no, nobody is named
 *   READING   s18-s20    — an 8-line notice board from a building entrance,
 *                          the genre written entirely in this unit's grammar:
 *                          what is forbidden, what is merely claimed, and what
 *                          is only a suggestion
 *
 * The reading text is a **notice board**, which is the real-world home of this
 * grammar — a building's rules are a stack of agentless sentences and nothing
 * else. It carries two se-passives with visible plural agreement, one
 * prohibition, one `kaže se` claim and one `trebalo bi` suggestion, and the
 * three questions turn on telling those three forces apart.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * SPEC CORRECTIONS APPLIED — one, forced:
 *  • **The blueprint's agreement item is unbuildable as written.** It asks for
 *    «Ovdje se ___ novine.» with *prodaje / prodaju*, and **`prodavati` has
 *    zero occurrences** in `src/content` — it is neither carded nor in live
 *    use. The item is rebuilt on **`reciklirati`**, this unit's own L1 card,
 *    which keeps everything that made the item good: *novine* is still the
 *    plural-only subject, and the verb still has no singular to fall back on.
 *    The same substitution was applied to the L1 examples and to s16.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * AUTHORING GUARDS, all verified by grep over learner-facing Croatian only:
 *  • **No participial passive** (B2). No *zabranjeno je*, no *zagađen*, no
 *    *zatvorena* — the notice board states its prohibition with the modal
 *    stack, «Ovdje se ne smije bacati otpad na ulicu», which is what L2 and
 *    L5 both trained. A real notice board would say *Zabranjeno je*; this one
 *    deliberately does not.
 *  • **Every `se` was located and classified.** Passive ones name their
 *    subject; impersonal ones are frozen 3sg or neuter past; the only two-`se`
 *    sentences are two-clause and legal. Nothing after `treba` carries one,
 *    except s10's distractor, where it is the thing being tested.
 *  • **No comparatives or superlatives** (B2). No *naj-*, no *više*, no *manje*.
 *  • **No verbal nouns in -nje** beyond the carded plain nouns (recikliranje,
 *    zagađenje, rješenje) · **no `da li`** · **never three clitics in one
 *    clause** · **no reported speech with a named speaker** (U21).
 *  • Reasons take **jer** or L5's **budući da**. No *zbog*, no *zato što*.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and replaced: prodavati (0 → reciklirati), pušiti (0),
 * parkirati (0), obavijest (0 → the notice is headed PRAVILA ZGRADE), svibanj
 * (0 → «još jedan spremnik», no month named), različit (0), učiniti (0 →
 * napraviti), nitko (rejected by name in b1u19's test header), uredan (0),
 * potreban (0). pločnik / poklopac / natpis / staklenka / stanar are the
 * STORY's glossed words and are deliberately kept out of the test, which must
 * stand on carded vocabulary alone.
 */
export const b1u20test: UnitTest = {
  id: "b1u20t",
  unitId: "b1u20",
  title: "Test — Okoliš",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match each word to what it actually is",
          pairs: [
            { a: "okoliš", b: "sve oko nas — zrak, voda, priroda, grad" },
            { a: "otpad", b: "kategorija — papir, staklo, plastika, smeće" },
            { a: "spremnik", b: "velika kanta na ulici, za cijelu zgradu" },
            { a: "zaštita", b: "kad se priroda čuva od zagađenja" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "Koja je velika i koja je na ulici, za cijelu zgradu?",
          options: ["Spremnik.", "Kanta.", "Vrećica.", "Staklenka."],
          correctIndex: 0,
          explanation:
            "spremnik — the big communal one outside. kanta is the one in your kitchen, and the two were carded together in L2 precisely so this would be an easy choice.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "»___ energiju.« Koji glagol ide s energijom?",
          options: ["Štedjeti", "Spasiti", "Uništiti", "Bacati"],
          correctIndex: 0,
          explanation:
            "štedjeti — of energy, water and money. spasiti is for something in danger: *spasiti rijeku*, never *spasiti energiju*.",
        },
        {
          id: "s04",
          type: "fill",
          text: "Staklo se ___ od papira.",
          blanks: [["odvaja"]],
          translation: "Glass is separated from paper.",
          explanation:
            "odvaja — staklo is one neuter thing, so the verb is singular. And *odvajati otpad* is what sorting your rubbish is actually called in Croatia.",
        },
        {
          id: "s05",
          type: "fill",
          text: "Plastika je ___ za okoliš.",
          blanks: [["štetna", "stetna"]],
          translation: "Plastic is harmful to the environment.",
          explanation:
            "štetna — feminine, agreeing with plastika. Its opposite is koristan: *Recikliranje je korisno.*",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»Ovdje se ___ novine.« Koji je oblik dobar?",
          options: ["recikliraju", "reciklira", "reciklirala"],
          correctIndex: 0,
          explanation:
            "recikliraju — *novine* is the SUBJECT and it is plural-only, so there is no singular verb available to fall back on. This is the unit's core rule in the sentence where it cannot be dodged.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»U ovoj kanti se ___ staklo.« Koji je oblik dobar?",
          options: ["baca", "bacaju", "bacamo"],
          correctIndex: 0,
          explanation:
            "baca — *staklo* is one neuter thing and it is the subject, so the verb is singular. The mirror of the item before it: the rule is the same, the answer is the opposite.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Kako se živi u Hrvatskoj?« Ima li ta rečenica subjekt?",
          options: [
            "Nema — zato je glagol u 3. licu jednine.",
            "Ima — subjekt je »Hrvatska«.",
            "Ima — subjekt je »se«.",
            "Ima — subjekt je skriven, ali je množina.",
          ],
          correctIndex: 0,
          explanation:
            "No subject at all, so the verb has nothing to agree with and freezes in the 3sg. *Hrvatska* is inside a prepositional phrase, and `se` is a clitic, never a subject.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Ovdje se ne ___ bacati staklo.",
          blanks: [["smije"]],
          translation: "Glass must not be thrown here.",
          wordBank: ["smije", "smiju", "smijem"],
          explanation:
            "smije — the modal stack: frozen 3sg, `se` in second position, infinitive after. Nothing in the sentence is a subject.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "»___ štedjeti energiju.« (one should save energy)",
          options: ["Treba", "Treba se", "Trebam", "Trebaju"],
          correctIndex: 0,
          explanation:
            "Treba — an infinitive follows, so the frozen impersonal one, and it takes NO `se`. *Treba se* is the trap this unit's L4 exists for: three lessons of adding `se` install exactly the wrong reflex, and this construction has no slot for it.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Kaže se ___ je zagađenje veliki problem.",
          blanks: [["da"]],
          translation: "Pollution is said to be a big problem.",
          explanation:
            "da — never optional in Croatian, exactly as in Unit 19's opinion frames. And note the clitic *je* sitting in second position of the da-clause, with da counting as slot one.",
        },
        {
          id: "s12",
          type: "fill",
          text: "Prije se ___ dobro. (živjeti)",
          blanks: [["živjelo", "zivjelo"]],
          translation: "Life used to be good.",
          wordBank: ["živjelo", "živio", "živjela"],
          explanation:
            "živjelo — NEUTER singular. With no subject there is no gender to agree with, and the neuter is what Croatian falls back on. This is the only place in the language where a past tense has nobody to agree with.",
        },
        {
          id: "s13",
          type: "reorder",
          words: ["U", "našem", "gradu", "se", "odvajaju", "papir", "i", "staklo"],
          answers: [
            "U našem gradu se odvajaju papir i staklo.",
            "U našem gradu se odvajaju papir i staklo",
          ],
          en: "Paper and glass are sorted in our town.",
          explanation:
            "Two things: «U našem gradu» is ONE phrase filling slot one, so `se` is slot two — a clitic can never open a clause. And *papir i staklo* is a plural subject, which is why the verb is odvajaju and not odvaja.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s14",
          type: "listen-type",
          tts: "Ovdje se recikliraju boce.",
          answers: ["Ovdje se recikliraju boce.", "Ovdje se recikliraju boce"],
          allowSlow: true,
          explanation: "Plural subject, plural verb — the -ju is the whole difference.",
        },
        {
          id: "s15",
          type: "listen-type",
          tts: "Trebalo bi nešto napraviti.",
          answers: ["Trebalo bi nešto napraviti.", "Trebalo bi nešto napraviti", "Trebalo bi nesto napraviti."],
          allowSlow: true,
          explanation: "Neuter conditional, frozen, and no `se` anywhere.",
        },
        {
          id: "s16",
          type: "mc",
          tts: "Ovdje se recikliraju novine.",
          prompt: "Slušaj. Što nam glagol govori o broju? (Listen. What does the verb tell us about the number?)",
          options: [
            "Ništa — »novine« nema jedninu, pa je množina jedini oblik.",
            "Da su jedne novine.",
            "Da ih ima točno dvoje.",
            "Da ih nema — rečenica kaže da se ne recikliraju.",
          ],
          correctIndex: 0,
          explanation:
            "A trick with a real point. *novine* is plural-only, so the plural verb tells you nothing about the count — it is simply the only verb form the noun allows. In every other sentence this week the verb WOULD have told you; that is why this one is worth asking.",
        },
        {
          id: "s17",
          type: "mc",
          tts: "Treba ugasiti struju.",
          prompt: "Slušaj. Govori li govornik meni? (Listen. Is the speaker telling ME to do it?)",
          options: [
            "Ne — u rečenici nema osobe.",
            "Da — »treba« znači »ti trebaš«.",
            "Da — govori svima u sobi.",
            "Ne može se znati bez konteksta.",
          ],
          correctIndex: 0,
          explanation:
            "No. `treba` is frozen and ownerless — it names nobody, which is the whole point of it. If they meant you, Croatian has *trebaš*, or the imperative *ugasi*, and both sound quite different.",
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
            "»PRAVILA ZGRADE\n1. Papir, staklo i plastika se odvajaju.\n2. Boce i staklenke se bacaju u zeleni spremnik.\n3. Staklo se ne baca u kantu za smeće.\n4. Ovdje se ne smije bacati otpad na ulicu.\n5. Ulice ispred zgrade se čiste svaki ponedjeljak.\n6. Kaže se da će doći još jedan spremnik.\n7. Trebalo bi štedjeti struju.\n8. Za pitanja: stanari s prvog kata.«\n\nŠto se NE SMIJE raditi? (What is forbidden?)",
          options: [
            "Bacati otpad na ulicu.",
            "Bacati boce u zeleni spremnik.",
            "Odvajati papir i staklo.",
            "Čistiti ulice u ponedjeljak.",
          ],
          correctIndex: 0,
          explanation:
            "Line 4 is the only prohibition on the board: *Ovdje se ne smije bacati otpad na ulicu.* Line 3 is a plain statement of what is done, which is a weaker thing — it describes rather than forbids.",
        },
        {
          id: "s19",
          type: "mc",
          prompt:
            "Isti tekst: koja rečenica NIJE pravilo? (Same text: which line is not a rule, only something people say?)",
          options: [
            "Da će doći još jedan spremnik.",
            "Da se staklo ne baca u kantu.",
            "Da se ulice čiste u ponedjeljak.",
            "Da se papir i plastika odvajaju.",
          ],
          correctIndex: 0,
          explanation:
            "Line 6 opens with *Kaže se da…* — a claim with nobody behind it. Everything else on the board is stated flatly, as what is done. Reading a notice well means noticing which sentences are frames and which are facts.",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Isti tekst: koja rečenica je samo savjet? (Same text: which line is only a suggestion?)",
          options: [
            "Trebalo bi štedjeti struju.",
            "Ovdje se ne smije bacati otpad na ulicu.",
            "Boce i staklenke se bacaju u zeleni spremnik.",
            "Papir, staklo i plastika se odvajaju.",
          ],
          correctIndex: 0,
          explanation:
            "*Trebalo bi* is the softest form in the unit — it recommends and stops there. *Ne smije se* forbids; the two se-passives simply report what is done. Three different forces on one board, and telling them apart is the whole reading skill this unit builds.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Kako se u mom gradu čuva okoliš",
    task:
      "Write 80–150 words in Croatian about how the environment is looked after where you live. Say what IS DONE (»Kod nas se…«), what IS NOT ALLOWED (»Ne smije se…«), what PEOPLE SAY about it (»Kaže se da…« / »Smatra se da…«), and what SHOULD BE DONE (»Trebalo bi…«). At least one of your se-passives must have a PLURAL subject, so the agreement is actually visible. Give one reason with jer or budući da. Use the L5 scaffold. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    // Model text — every `se` species-labelled, every passive's subject named:
    //   «se čuva okoliš»            PASSIVE · subject okoliš (m sg) → čuva
    //   «se odvaja otpad»           IMPERSONAL · otpad is the OBJECT → frozen 3sg
    //   «boce se recikliraju»       PASSIVE · subject boce (f PL) → recikliraju  ← the required plural
    //   «ulice se čiste»            PASSIVE · subject ulice (f PL) → čiste       ← a second plural
    //   «se ne smije bacati»        IMPERSONAL · modal stack, no subject
    //   «Kaže se da…»               L3 FRAME · frozen, ownerless
    //   «Trebalo bi smanjiti…»      L4 · neuter conditional, NO se
    //   «Budući da…»                the reason, L5's second connector
    // Five required elements present and identifiable; no participial passive,
    // no comparative, no -nje beyond recikliranje.
    modelHr:
      "U mom gradu se čuva okoliš, ali ne uvijek dobro. Kod nas se odvaja otpad: papir, staklo i plastika idu u tri spremnika ispred zgrade. Boce se recikliraju, a smeće se baca u kantu. Ulice se čiste svaki dan.\n\nOvdje se ne smije bacati staklo u kantu za smeće. To je pravilo i svi ga znaju.\n\nKaže se da je recikliranje korisno, i ja mislim da je to istina. Ali zagađenje je još uvijek veliki problem.\n\nTrebalo bi smanjiti plastiku i štedjeti struju. Budući da je planet naš, treba ga čuvati.",
    rubricFocus:
      "The agreement above all: in every se-passive, does the verb match the thing, and is there at least one PLURAL subject where that agreement is actually visible? A paragraph in which every verb happens to be singular proves nothing and should be marked down even if nothing in it is wrong. Then the species discipline: exactly one `se` per clause (two per sentence is fine if there are two clauses), never sentence-initial, and never after treba or trebalo bi. Then the frames: `da` present and not deleted, and the tense inside the da-clause unmoved from the original claim. Then the absence of the participial passive — a *zabranjeno je* or *zagađena je* is correct Croatian and should not be marked wrong as language, but should be named as a later level with the repair shown (*ne smije se* / *zagađenje je problem*). Finally task completion: what is done, what is not allowed, what people say, what should be done, and one reason with jer or budući da.",
  },
};
