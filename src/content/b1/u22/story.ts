import type { Story } from "@/types/content";

/**
 * B1 U22 story — «Dvorac koji nas je čekao» (The castle that was waiting for us)
 * Spec: curriculum/B1/unit-22.md § Story.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * ~320 Croatian words across 5 paragraphs. Saturday, a day trip, and a plan in
 * which every single arrangement is a time clause.
 *
 * PER-CLAUSE MAP — every time clause, with its conjunction, its tense and the
 * aspect reason:
 *   P1 · «Kad stignemo, kupit ćemo ulaznice»    kad · PREZENT · stići is
 *        perfective — a moment.
 *   P1 · «Čim vidimo dvorac, idemo u kulu»      čim · PREZENT · vidjeti is
 *        perfective here. ← THE SENTENCE THAT LATER FAILS. Marko quotes it
 *        back at Ana verbatim in P4 so the reader can confirm that nothing
 *        about the grammar was wrong.
 *   P2 · «Ako bude kiše, nećemo ići na vrh»     ako · the bare `bude` of biti ·
 *        uncertain, so ako and not kad.
 *   P2 · «Ako budeš imala vremena, možemo…»     ako · FUTUR II · imati is
 *        imperfective, and the participle agrees with Ana.
 *   P2 · «pitala kad ćemo krenuti»              ★ THE ONE LICENSED FUTUR I ★
 *        INTERROGATIVE kad (§20.5), not temporal. This clause IS the question,
 *        so it is an ordinary future clause and Futur I is REQUIRED. It is the
 *        only ću/ćeš/će/ćemo/ćete after any kad / ako / čim / dok in this file,
 *        it is deliberate, and it lands here so the learner meets the exception
 *        in prose before L5 names it.
 *   P2 · «Dok budemo čekali Marka, razgledat ćemo tvrđavu»
 *                                               dok · FUTUR II · čekati is
 *        imperfective — a stretch. The unit's model sentence.
 *   P3 · «dok su čekali Marka»                  dok · PAST · L1's ordinary past
 *        dok, in the paragraph where the plan is actually being carried out.
 *   P3 · «Kad sam bila mlada, dolazili smo…»    kad · PAST · L1's habitual past.
 *   P4 · «Čim ga je Ana vidjela, krenuli su…»   čim · PAST · the same čim as
 *        P1, one tense back, in the moment the plan breaks.
 *   P5 · «Kad dođemo drugi put, kula je prva»   kad · PREZENT · perfective.
 *   P5 · «dok budemo ovdje, razgledat ćemo grad»
 *                                               dok · FUTUR II (bare budemo).
 *   P5 · «Kad se dođe u dvorac, uvijek nešto ostane»
 *                                               kad · GENERIC/HABITUAL, with
 *        U20's impersonal `se`. The third mode of kad, and its only appearance
 *        in the story — placed in baka Marija's closing line so it reads as a
 *        cadence rather than as a rule.
 *
 * AUTHORING GUARDS, all verified by grep over the learner-facing Croatian only:
 *  • **Exactly ONE Futur I appears after any kad / ako / čim / dok in the whole
 *    file**, it is baka Marija's embedded question in P2, and it is marked ★
 *    above. Every other ću / ćeš / će / ćemo / ćete in the story stands in a
 *    MAIN clause after a comma.
 *  • **No comparatives or superlatives** (B2). The castle wants to be
 *    *najstariji* and is not; «pet stotina godina» does that work.
 *  • **No participial passive** (B2). The tower is never *zatvorena* — the word
 *    `ZATVORENO` appears ONLY as the text on the sign, quoted as an object in
 *    the world, which is the licence U20's own sign wall established.
 *  • **No backshifting** (U21's rule, still live — the story reports three
 *    times) · **no -nje** (U23) · **never three clitics in one clause** (U23).
 *  • Reasons take **jer** or U20's **budući da**.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and replaced: **nitko** (rejected by name in b1u19's
 * test header → «natpis koji Ana nije htjela vidjeti» and «Na vrh se nije
 * išlo», which uses U20's impersonal se and is better anyway), **šutjeti** (1,
 * inside b1u19's rejection list → «Ana nije rekla ništa»), **sljedeći** (3, same
 * class → «drugi put» throughout), **kasniti** (0 → the story says Marko slept
 * until nine and the bus left without him, which is why the spec's «Zašto Marko
 * kasni?» is rewritten), **probuditi se** (0 → Marko is never shown waking),
 * **gore / dolje / ovamo** (0 → «idemo u kulu» and «nećemo ići na vrh»),
 * **stizati** (0), **zid** (0 as a learner word → the sign hangs «na vratima»,
 * and *vrata* is carded a2u10), **naći / točno / sjediti / stajati** (all
 * rejected). **ulaz** came back CARDED (a2u10 L2) and was struck from the
 * glossary — it is used freely in the prose instead, which is a gift, because
 * the sign has to hang somewhere and «Na ulazu su bile stube» needs no gloss.
 */
export const b1u22story: Story = {
  id: "b1u22s",
  unitId: "b1u22",
  title: "Dvorac koji nas je čekao",
  titleEn: "The castle that was waiting for us",
  glossary: [
    { word: "vrh", gloss: "the top (m) — GEN vrha; na vrhu kule, ići na vrh" },
    { word: "stube", gloss: "steps, stairs (f, plural only — like vrata and novine)" },
    { word: "kraljica", gloss: "queen (f) — beside kralj, which L1 cards" },
    { word: "zatvoreno", gloss: "CLOSED — the word written on the sign. Quoted here as an object in the world, the way a sign is read, and never as something anybody says." },
  ],
  paragraphs: [
    {
      hr: "U subotu ujutro Ana je imala plan. Na stolu je bila stara slika dvorca koji su htjeli razgledati. »Kad stignemo, kupit ćemo ulaznice«, rekla je Ana. »Čim vidimo dvorac, idemo u kulu. S vrha se vidi cijeli grad.« Tom i baka Marija su slušali. Marko nije slušao, jer Marko još nije bio tu.",
      en: "On Saturday morning Ana had a plan. On the table was an old picture of the castle they wanted to look round. «When we arrive, we'll buy tickets,» said Ana. «As soon as we see the castle, we're going up the tower. You can see the whole town from the top.» Tom and baka Marija were listening. Marko wasn't listening, because Marko wasn't there yet.",
    },
    {
      hr: "Tom je gledao nebo. Bilo je puno oblaka. »Ako bude kiše, nećemo ići na vrh«, rekao je. »Ako budeš imala vremena, možemo doći i u nedjelju.« Baka Marija je onda pitala kad ćemo krenuti. Ana joj je rekla da autobus ide u devet i da će Marko doći na stanicu. »Dok budemo čekali Marka, razgledat ćemo tvrđavu«, rekla je Ana.",
      en: "Tom was looking at the sky. There were a lot of clouds. «If it rains, we won't go up to the top,» he said. «If you have time, we could come on Sunday as well.» Baka Marija then asked when we'd be setting off. Ana told her the bus went at nine and that Marko would come to the stop. «While we wait for Marko, we'll look round the fortress,» said Ana.",
    },
    {
      hr: "Marko je te subote spavao do devet. Autobus je krenuo bez njega. Nazvao je Anu i rekao da će doći drugim autobusom. Ana, Tom i baka Marija stigli su u pola jedanaest. Kupili su ulaznice i onda su razgledali tvrđavu dok su čekali Marka. Baka Marija je hodala i govorila o dvorcu. Pokazala im je kulu u kojoj je bila kraljica. »Kralj ga je osnovao«, rekla je. »Poslije je došao rat. Rat je trajao četiri godine. Kad sam bila mlada, dolazili smo svako ljeto.«",
      en: "That Saturday Marko slept until nine. The bus left without him. He rang Ana and said he'd come on the next bus. Ana, Tom and baka Marija arrived at half past ten. They bought tickets and then looked round the fortress while they waited for Marko. Baka Marija walked and talked about the castle. She showed them the tower the queen had lived in. «A king founded it,» she said. «Then the war came. The war lasted four years. When I was young, we came every summer.»",
    },
    {
      hr: "Marko je stigao u dvanaest. Čim ga je Ana vidjela, krenuli su prema kuli. Na ulazu su bile stube, a na vratima natpis koji Ana nije htjela vidjeti. Na natpisu je pisalo: »ZATVORENO«. Na vrh se toga dana nije išlo. »Ali rekla si: čim vidimo dvorac, idemo u kulu«, rekao je Marko. Ana nije rekla ništa. Onda je rekla: »Vidjeli smo dvorac. Kula nas nije čekala.«",
      en: "Marko arrived at twelve. As soon as Ana saw him, they set off towards the tower. There were steps at the entrance, and on the door a sign Ana didn't want to see. The sign read: «CLOSED». Nobody went up to the top that day. «But you said: as soon as we see the castle, we're going up the tower,» said Marko. Ana said nothing. Then she said: «We've seen the castle. The tower wasn't waiting for us.»",
    },
    {
      hr: "»Dobro«, rekla je Ana. »Novi plan. Kad dođemo drugi put, kula je prva. A dok budemo ovdje, razgledat ćemo grad.« Baka Marija je dugo gledala kulu. »Kad se dođe u dvorac, uvijek nešto ostane za drugi put«, rekla je. »Dvorac nas je čekao pet stotina godina. Čekat će i drugi put.«",
      en: "«All right,» said Ana. «New plan. When we come another time, the tower is first. And while we're here, we'll look round the town.» Baka Marija looked at the tower for a long time. «When you come to a castle, there's always something left for another time,» she said. «The castle waited five hundred years for us. It'll wait another time too.»",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što će Ana kupiti kad stignu?",
      options: [
        "Ulaznice.",
        "Karte za autobus.",
        "Sliku dvorca.",
        "Knjigu o povijesti.",
      ],
      correctIndex: 0,
      explanation: "»Kad stignemo, kupit ćemo ulaznice.« A perfective present in the time clause, a Futur I in the main clause — the unit's basic shape, in the story's first arrangement.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što će biti ako bude kiše?",
      options: [
        "Neće ići na vrh.",
        "Neće kupiti ulaznice.",
        "Doći će u ponedjeljak.",
        "Marko neće doći.",
      ],
      correctIndex: 0,
      explanation: "»Ako bude kiše, nećemo ići na vrh.« Tom uses ako and not kad, because rain is genuinely uncertain — that choice is the whole difference between the two words.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Zašto Marko nije došao autobusom u devet?",
      options: [
        "Jer je spavao do devet i autobus je krenuo bez njega.",
        "Jer je bila kiša.",
        "Jer nije imao ulaznicu.",
        "Jer je bio u tvrđavi.",
      ],
      correctIndex: 0,
      explanation: "»Marko je te subote spavao do devet. Autobus je krenuo bez njega.« He rings and says he'll come on the next one — a reported statement with its tense untouched, exactly as Unit 21 taught.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što je baka Marija radila kad je bila mlada?",
      options: [
        "Dolazila je u dvorac svako ljeto.",
        "Radila je u tvrđavi.",
        "Živjela je u kuli.",
        "Nije nikad bila u dvorcu.",
      ],
      correctIndex: 0,
      explanation: "»Kad sam bila mlada, dolazili smo svako ljeto.« A past kad with a past main clause, and an imperfective verb because it was a habit — L1's rule, and nothing about this unit's ban applies backwards.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Zašto nisu išli na vrh kule?",
      options: [
        "Jer je na natpisu pisalo »ZATVORENO«.",
        "Jer je počela kiša.",
        "Jer je Marko došao prekasno.",
        "Jer nisu imali ulaznice.",
      ],
      correctIndex: 0,
      explanation: "The sign on the door said CLOSED. And notice the joke the whole story is built on: the arrangement that failed is the one with a **čim** in it — Marko quotes Ana's own clause back at her, word for word, and there was never anything wrong with the grammar.",
    },
  ],
};
