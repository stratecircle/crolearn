import type { Lesson } from "@/types/content";

/**
 * B1 U22 L2 — Kad dođeš u Zagreb… (Futur II, and the ban)
 * Spec: curriculum/B1/unit-22.md · grammar-reference §20 "Futur II and time
 * clauses" + §9 Futur I + §11 aspect + §8 the l-participle.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The unit's headline lesson, in two halves and always in this order.
 *
 * ① **THE BAN.** In a time clause after `kad` pointing at the future, **Futur I
 *    is not allowed**. \*Kad ću doći, javit ću ti ❌. The main clause keeps its
 *    Futur I; the time clause loses it. This is not a stylistic preference —
 *    it is simply not Croatian, and it is the error the whole unit exists to
 *    prevent.
 * ② **THE ASPECT FORK.** What goes there instead is decided by the verb:
 *      **perfective → the PRESENT**  (Kad DOĐEM, javit ću ti.)
 *      **imperfective → FUTUR II**   (Dok BUDEM ČEKAO, čitat ću.)
 *    L1 spent a whole lesson making «name the aspect on sight» automatic,
 *    precisely so that this fork costs nothing today.
 *
 * The order matters and the recap says so: a learner who has only the fork will
 * still write *kad ću*; a learner who has only the ban will write *kad budem*
 * for everything, which is merely clumsy. **The ban is the safety rail; the
 * fork is the polish.**
 *
 * THE HEAVY-BUT-LEGAL CASE: *Kad budem došao…* is grammatical, just heavy,
 * because the present already does the job for a perfective. It is marked as
 * **not an error** — the only thing on the unit's trap wall that costs nothing —
 * and the reason is said out loud: over-using *budem* is safe, over-using
 * Futur I is not.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and routed around: petnaesti (0 — the carded ordinals
 * stop at *deseti*, a1u5 L4), stizati (0 — the imperfective of *stići* does not
 * exist in this course, so every long `dok` is built on *čekati* or
 * *razgledati*), comparatives and superlatives (B2 — a castle wants to be
 * *najstariji* and must not be), the participial passive (B2 — the tower is
 * never *zatvorena*), nitko, naći, točno, sjediti, stajati, kasniti, gore /
 * dolje / ovamo, zid (all 0 or previously rejected). Deferred by unit: no čim
 * and no dok ne (L3), no ako-split (L3), no -nje as a productive formation
 * (U23), no full clitic cluster (U23).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U22 cut-outs exist. NOTE for the grind: the
 * four building words must be drawn as a contrasting SET — dvorac (intact,
 * pointed roofs) · tvrđava (squat, thick low walls) · kula (one tall round
 * tower) · ruševine (broken walls, no roof) — because that contrast is the only
 * thing separating them, and the unit test separates them the same way.
 */
export const b1u22l2: Lesson = {
  id: "b1u22l2",
  unitId: "b1u22",
  title: "Kad dođeš u Zagreb…",
  titleEn: "When you come to Zagreb… — Futur II, and the ban",
  grammarTags: ["futur-2", "time-clause", "aspect", "kad"],
  estMinutes: 22,
  vocab: [
    { id: "b1u22.dvorac", hr: "dvorac", en: "castle (m; GEN dvorca — fleeting a)", pos: "noun", gender: "m", icon: "🏰", exampleHr: "Kad stignemo, razgledat ćemo dvorac.", exampleEn: "When we arrive, we'll look round the castle." },
    { id: "b1u22.tvrdava", hr: "tvrđava", en: "fortress (f) — squat and thick-walled; a dvorac is where somebody lived", pos: "noun", gender: "f", icon: "🧱", exampleHr: "U gradu je stara tvrđava.", exampleEn: "There's an old fortress in the town." },
    { id: "b1u22.kula", hr: "kula", en: "tower (f)", pos: "noun", gender: "f", icon: "🗼", exampleHr: "Kula je stara sto godina.", exampleEn: "The tower is a hundred years old." },
    { id: "b1u22.rusevine", hr: "ruševine", en: "ruins (f, plural only — like novine and vrata)", pos: "noun", gender: "f", icon: "🪨", exampleHr: "Od dvorca su ostale samo ruševine.", exampleEn: "Only ruins are left of the castle." },
    { id: "b1u22.spomenik", hr: "spomenik", en: "monument (m; GEN spomenika) — it commemorates something", pos: "noun", gender: "m", icon: "🗿", exampleHr: "Na trgu je spomenik.", exampleEn: "There's a monument on the square." },
    { id: "b1u22.kip", hr: "kip", en: "statue (m) — a carved figure on a plinth", pos: "noun", gender: "m", icon: "🗽", exampleHr: "Kip je star sto godina.", exampleEn: "The statue is a hundred years old." },
    { id: "b1u22.ulaznica", hr: "ulaznica", en: "entry ticket (f) — gets you IN; a karta gets you a seat or a ride", pos: "noun", gender: "f", icon: "🎟️", exampleHr: "Kad stignemo, kupit ćemo ulaznice.", exampleEn: "When we arrive, we'll buy tickets." },
    { id: "b1u22.razgledati", hr: "razgledati", en: "to look round / go sightseeing (impf razgledam) — imperfective by nature: it takes time", pos: "verb", icon: "🧭", exampleHr: "Dok budem čekao, razgledat ću tvrđavu.", exampleEn: "While I'm waiting, I'll look round the fortress." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Kad dođeš u Zagreb…",
      subtitle: "«When I arrive, I'll call you.» You are about to get that sentence wrong — and so does everybody, because the future is obviously in both halves and Croatian puts it in only one.",
      emoji: "🏰",
      items: [
        { emoji: "🚫", label: "The ban", hint: "no Futur I in the clause" },
        { emoji: "🍴", label: "The fork", hint: "aspect picks the tense" },
        { emoji: "🆕", label: "Futur II", hint: "budem + participle" },
        { emoji: "🎟️", label: "New words", hint: "dvorac, kula, ulaznica…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Where the future is allowed to be",
      subtitle: "One sentence, two clauses, and only one of them may carry a future. Which one is not up for discussion.",
      emoji: "🚫",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "yesterday's aspect, U9's futur" },
        { emoji: "🃏", label: "New words", hint: "the castle eight" },
        { emoji: "⚙️", label: "The ban, then the fork", hint: "always that order" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday, and one older thing",
      items: [
        {
          prompt: "L1: which kind of verb is »čekati«?",
          options: ["nesvršeni — a stretch, always", "svršeni — one act, finished"],
          correctIndex: 0,
          explanation: "Imperfective. Waiting has no finishing point. In about three minutes that fact is going to choose a tense for you.",
        },
        {
          prompt: "L1: which kind of verb is »stići«?",
          options: ["svršeni — a moment", "nesvršeni — a stretch"],
          correctIndex: 0,
          explanation: "Perfective. Arriving happens at a point. Same warning as the last item.",
        },
        {
          prompt: "U9: »___ ti se sutra.« (I'll get in touch tomorrow)",
          options: ["Javit ću", "Javim", "Javio sam"],
          correctIndex: 0,
          explanation: "Javit ću — Futur I, which you have owned since Unit 9. Today's lesson does not touch it. It only says where it may NOT go.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The castle eight",
      vocabIds: [
        "b1u22.dvorac", "b1u22.tvrdava", "b1u22.kula", "b1u22.rusevine",
        "b1u22.spomenik", "b1u22.kip", "b1u22.ulaznica", "b1u22.razgledati",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "🚫 The ban",
      body:
        "Here is the sentence, in English:\n\n> *When I **arrive**, I **will call** you.*\n\nEnglish puts a **present** in the first half and a **future** in the second — and native English speakers do not notice, because it feels like an accident of the language. Learners of Croatian therefore reach for the future in **both** halves, since that is where the future obviously is:\n\n~~*Kad **ću doći**, javit ću ti.*~~ ❌\n\n**That is not Croatian.** Not informally, not in speech, not ever.\n\n> ### In a time clause about the future, Futur I is banned.\n\nThe **main clause** keeps its Futur I, untouched — it is still *javit ću ti*. The **time clause** loses it:\n\n*Kad **dođem**, **javit ću** ti.* ✅\n\nLook at what happened to each half. The main clause did not change at all. The time clause dropped its future and put something else in its place — and what that something is depends on one thing only, which is the next slide.\n\n⚠️ And do not over-correct: *\\*Kad dođem, **javim** ti* removes the future from the **main** clause too. That is a real Croatian sentence, but it is a promise, not a plan.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The ban — the unit's whole point",
        text: "Kad ću doći ❌ · Kad dođem ✅. The future stays in the main clause and is forbidden in the time clause. Everything else this week is detail; this is the rule.",
      },
      table: {
        caption: "One sentence, two clauses, one future",
        headers: ["", "vremenska rečenica", "glavna rečenica"],
        rows: [
          ["❌", "*Kad **ću doći**,*", "*javit ću ti.*"],
          ["✅", "**Kad dođem**,", "**javit ću ti.**"],
          ["⚠️", "Kad dođem,", "*javim ti.* — a promise, not a plan"],
        ],
      },
      ttsChips: ["Kad dođem, javit ću ti.", "Kad stignemo, kupit ćemo ulaznice."],
    },
    {
      id: "s06",
      type: "teach",
      title: "🍴 The fork — and the aspect chooses",
      body:
        "So the future is out of the time clause. What goes in?\n\n**It depends entirely on the aspect of the verb, and you do not get a vote.**\n\n**Perfective → the PRESENT.**\n*Kad **dođem**, javit ću ti.* · *Kad **stignemo**, kupit ćemo ulaznice.* · *Kad **razgledamo** dvorac, idemo u kulu.*\n\nThat present is not a present **meaning**. A perfective verb has no present meaning available at all — Unit 17 taught that — which is exactly why the form is free to do this job.\n\n**Imperfective → FUTUR II.**\n*Dok **budem čekao**, razgledat ću tvrđavu.* · *Kad **budeš imao** vremena, javi mi.*\n\n### Futur II, in one line\n\n> **budem / budeš / bude / budemo / budete / budu** + **the l-participle**\n\nThe participle is the one you have used in every perfekt since A1, and it **agrees** exactly as it does there: *budem **radio*** (m) · *budem **radila*** (f) · *budemo **radili*** (pl).\n\nSo the only genuinely new form in this whole unit is the auxiliary — six words — and you already own everything else.",
      table: {
        caption: "Futur II — budem + the participle you already have",
        headers: ["osoba", "m", "ž", "primjer"],
        rows: [
          ["ja", "budem radio", "budem radila", "Dok budem radio, ti razgledaj grad."],
          ["ti", "budeš radio", "budeš radila", "Kad budeš imao vremena, javi mi."],
          ["on / ona", "bude radio", "bude radila", "Dok bude čekala, čitat će."],
          ["mi", "budemo radili", "budemo radile", "Dok budemo čekali, razgledat ćemo tvrđavu."],
          ["vi", "budete radili", "budete radile", "Kad budete imali vremena…"],
          ["oni / one", "budu radili", "budu radile", "Dok budu razgledali, mi ćemo kupiti ulaznice."],
        ],
      },
      diagram: {
        kind: "bracket",
        groups: [
          { label: "svršeni glagol (dođem, stignem, kupim)", rule: "→ the PRESENT", example: "Kad dođem, javit ću ti." },
          { label: "nesvršeni glagol (čekati, razgledati, imati)", rule: "→ FUTUR II (budem + participle)", example: "Dok budem čekao, razgledat ću tvrđavu." },
          { label: "both, in the main clause", rule: "→ FUTUR I, untouched", example: "…javit ću ti. · …razgledat ću tvrđavu." },
        ],
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "The one thing on the wall that isn't an error 🟡",
      body:
        "*Kad **budem došao**, javit ću ti.*\n\nThat is **grammatical**. It is not marked wrong anywhere in this unit and it will not cost you anything in the writing task.\n\nIt is simply **heavy**. *doći* is perfective, so the present already does the job in four fewer syllables — *kad dođem* — and a Croatian speaker would nearly always say that instead. Think of *kad budem došao* the way you think of *«at such time as I shall have arrived»*: real, correct, and more machinery than the moment needs.\n\n**Why this is worth a slide of its own:** the two ways of getting this wrong are not equally bad.\n\n| what you over-use | result |\n|---|---|\n| **budem** everywhere | heavy, slightly formal, **always correct** |\n| **Futur I** in the clause | **wrong, every time** |\n\nSo if you are unsure in the middle of a sentence, **reach for *budem***. It is the safe error. The fork is what makes you sound native; the ban is what stops you being wrong — and this is why the ban comes first every time.",
      diagram: {
        kind: "callout",
        tone: "info",
        title: "When in doubt, budem",
        text: "Over-using budem makes you sound slightly formal. Over-using Futur I makes you wrong. If the aspect fork deserts you mid-sentence, take the heavy option — it is never an error.",
      },
    },
    {
      id: "s08",
      type: "example",
      title: "A day out, arranged",
      items: [
        { hr: "Kad dođem, javit ću ti.", en: "When I arrive, I'll call you.", note: "doći is perfective → the present. The main clause keeps its Futur I." },
        { hr: "Kad stignemo, kupit ćemo ulaznice.", en: "When we arrive, we'll buy tickets.", note: "stići — perfective again. This is the shape you'll use most." },
        { hr: "Kad razgledamo dvorac, idemo u kulu.", en: "When we've looked round the castle, we're going up the tower.", note: "A present in the main clause too — a plan stated as a fact. Perfectly normal." },
        { hr: "Dok budem čekao, razgledat ću tvrđavu.", en: "While I'm waiting, I'll look round the fortress.", note: "čekati is imperfective → Futur II. budem + čekao, agreeing with a male speaker." },
        { hr: "Dok budemo čekali Marka, razgledat ćemo grad.", en: "While we wait for Marko, we'll look round the town.", note: "Plural: budemo + čekali." },
        { hr: "Kad budeš imao vremena, javi mi.", en: "When you have time, let me know.", note: "imati is imperfective → Futur II. And the main clause is an imperative, which is fine." },
        { hr: "Kad budem u Hrvatskoj, putovat ću tjedan dana.", en: "When I'm in Croatia, I'll travel for a week.", note: "biti has no participle needed here — budem alone. Worth noticing." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Ban first, fork second",
      subtitle: "Every item asks the two questions in order: is there a Futur I where it shouldn't be, and then — what kind of verb is this?",
      emoji: "🍴",
      items: [
        { emoji: "✅", label: "Quick check", hint: "two ban, two fork" },
        { emoji: "🔤", label: "Build them", hint: "arrange a day out" },
        { emoji: "🔊", label: "Listen", hint: "hear budem in the wild" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: the ban, then the fork",
      items: [
        {
          prompt: "»___ , javit ću ti.« (when I arrive)",
          options: ["Kad dođem", "Kad ću doći", "Kad sam došao"],
          correctIndex: 0,
          explanation: "Kad dođem. The future is banned inside the time clause — and doći is perfective, so the present is what goes there.",
        },
        {
          prompt: "»___ , kupit ćemo ulaznice.« (as soon as we arrive)",
          options: ["Kad stignemo", "Kad ćemo stići", "Kad smo stigli"],
          correctIndex: 0,
          explanation: "Kad stignemo. Same rule, same aspect. «Kad ćemo stići» is the error the whole unit exists to prevent.",
        },
        {
          prompt: "»Dok ___ ___ , razgledat ću grad.« (while I wait — čekati, a man speaking)",
          options: ["budem čekao", "čekam", "ću čekati"],
          correctIndex: 0,
          explanation: "budem čekao — čekati is imperfective, so Futur II. «Dok čekam» would report something happening right now.",
        },
        {
          prompt: "Is »Kad budem došao, javit ću ti« wrong?",
          options: [
            "No — just heavy. The present does the job in fewer words.",
            "Yes — budem is only for imperfective verbs.",
            "Yes — you can never use budem after kad.",
          ],
          correctIndex: 0,
          explanation: "Not wrong. doći is perfective so «kad dođem» is what a Croatian speaker would say, but the Futur II version is correct — and over-using budem is the safe error.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each verb to what the time clause needs",
      pairs: [
        { a: "doći · stići · kupiti", b: "svršeni → the PRESENT" },
        { a: "čekati · razgledati · imati", b: "nesvršeni → FUTUR II" },
        { a: "the main clause", b: "FUTUR I, untouched" },
        { a: "budem + ___", b: "the l-participle, agreeing" },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "Kad ___ , javit ću ti. (doći, ja)",
      blanks: [["dođem"]],
      translation: "When I arrive, I'll call you.",
      wordBank: ["dođem", "ću doći", "budem došao"],
      explanation: "dođem — perfective, so the present. («budem došao» is also correct, just heavy; «ću doći» is the one real error.)",
    },
    {
      id: "s13",
      type: "fill",
      text: "Dok ___ ___ , razgledat ću tvrđavu. (čekati, ja — muško)",
      blanks: [["budem"], ["čekao", "cekao"]],
      translation: "While I'm waiting, I'll look round the fortress.",
      explanation: "budem čekao — imperfective, so Futur II, and the participle agrees with a male speaker.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Kad ___ ___ vremena, javi mi. (imati, ti)",
      blanks: [["budeš"], ["imao", "imala"]],
      translation: "When you have time, let me know.",
      explanation: "budeš imao / imala — imati is imperfective. And the main clause here is an imperative, which is perfectly normal.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Arrange it: «When we arrive, we'll buy tickets.» (stići · ulaznice)",
      answers: [
        "Kad stignemo, kupit ćemo ulaznice.",
        "Kad stignemo, kupit ćemo ulaznice",
        "Kad stignemo kupit ćemo ulaznice.",
      ],
      hint: "No future in the first half; stići is perfective.",
      explanation: "Kad stignemo, kupit ćemo ulaznice. Present in the time clause, Futur I in the main clause — the unit's basic shape.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Arrange it: «While we wait for Marko, we'll look round the fortress.» (čekati · razgledati)",
      answers: [
        "Dok budemo čekali Marka, razgledat ćemo tvrđavu.",
        "Dok budemo čekali Marka, razgledat ćemo tvrđavu",
      ],
      hint: "Waiting is a stretch — so Futur II, plural.",
      explanation: "Dok budemo čekali Marka, razgledat ćemo tvrđavu. budemo + čekali for «we», and the main clause keeps its Futur I.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Kad dođem, javit ću ti.",
      answers: ["Kad dođem, javit ću ti.", "Kad dođem, javit ću ti", "Kad dodem, javit cu ti."],
      allowSlow: true,
      explanation: "Four words, and the whole unit is in them.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Dok budemo čekali, razgledat ćemo tvrđavu.",
      answers: ["Dok budemo čekali, razgledat ćemo tvrđavu.", "Dok budemo čekali, razgledat ćemo tvrđavu"],
      allowSlow: true,
      explanation: "budemo čekali — the Futur II you will hear most often, because waiting is the most natural thing to do while something else happens.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Kad stignemo, kupit ćemo ulaznice za dvorac.",
      targetEn: "When we arrive, we'll buy tickets for the castle.",
      phonetic: "kad STIG-ne-mo, KOO-peet tche-mo oo-LAZ-nee-tse za DVO-rats",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "L1 review: »Rat je ___ četiri godine.« (trajati)",
      options: ["trajao", "potrajao", "traje"],
      correctIndex: 0,
      explanation: "trajao — imperfective by nature. And notice: in a future time clause that same verb would force a Futur II. «Dok bude trajao rat…»",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je kula u ___ je bio kralj.« (kula is feminine)",
      options: ["kojoj", "kojem", "koju"],
      correctIndex: 0,
      explanation: "kojoj — feminine from kula, locative because u + LOC is location.",
      tts: "To je kula u kojoj je bio kralj.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**① THE BAN — learn this first.**\n\n> ### In a time clause about the future, Futur I is banned.\n\n~~*Kad **ću doći**, javit ću ti.*~~ ❌ → *Kad **dođem**, javit ću ti.* ✅\n\nThe **main clause** keeps its Futur I. Only the time clause loses it. And don't over-correct: *Kad dođem, **javim** ti* is a promise, not a plan.\n\n**② THE FORK — the aspect chooses, not you.**\n\n- **Perfective → the PRESENT.** *Kad **dođem*** · *Kad **stignemo*** · *Kad **razgledamo***\n- **Imperfective → FUTUR II.** *Dok **budem čekao*** · *Kad **budeš imao** vremena*\n\n**Futur II = budem / budeš / bude / budemo / budete / budu + the l-participle**, agreeing exactly as in the perfekt. The auxiliary is the only new form in the unit; you have had the participle since A1.\n\n**🟡 And one thing that is NOT an error:** *Kad budem došao…* is grammatical, just heavy. **When in doubt, reach for *budem*** — over-using it makes you sound formal; over-using Futur I makes you wrong.\n\nTomorrow: three more conjunctions, and one `ne` that translates to nothing at all.",
      vocabIds: [
        "b1u22.dvorac", "b1u22.tvrdava", "b1u22.kula", "b1u22.rusevine",
        "b1u22.spomenik", "b1u22.kip", "b1u22.ulaznica", "b1u22.razgledati",
      ],
    },
  ],
  srsCloze: [
    { front: "Kad ___ , javit ću ti. (doći, ja)", answers: ["dođem", "dodem"], back: "dođem — perfective, so the present. Never «kad ću doći».", tts: "Kad dođem, javit ću ti." },
    { front: "Dok ___ ___ , čitat ću. (čekati, ja — muško)", answers: ["budem čekao", "budem cekao"], back: "budem čekao — imperfective, so Futur II, participle agreeing.", tts: "Dok budem čekao, čitat ću." },
    { front: "Kad ___ ___ vremena, javi mi. (imati, ti)", answers: ["budeš imao", "budeš imala", "budes imao"], back: "budeš imao / imala — imati is imperfective.", tts: "Kad budeš imao vremena, javi mi." },
    { front: "In a future time clause, ___ is banned.", answers: ["futur I", "futur 1", "the future", "futur"], back: "Futur I. The main clause keeps it; the time clause never has it.", tts: "Kad dođem, javit ću ti." },
    { front: "Futur II = ___ + the l-participle", answers: ["budem", "budem/budeš/bude", "budem, budeš, bude"], back: "budem / budeš / bude / budemo / budete / budu + the participle, agreeing as in the perfekt.", tts: "Dok budemo čekali, razgledat ćemo grad." },
    { front: "Perfective verb in a time clause → the ___ · Imperfective → ___", answers: ["present, futur II", "present, futur 2", "prezent, futur II"], back: "Perfective → the present. Imperfective → Futur II. The aspect chooses, not you.", tts: "Kad stignem, javit ću ti. Dok budem čekao, čitat ću." },
    { front: "Is «Kad budem došao» wrong? ___", answers: ["no", "ne"], back: "No — just heavy, because doći is perfective and the present is shorter. Over-using budem is the safe error.", tts: "Kad dođem, javit ću ti." },
    { front: "castle = ___ (GEN ___ )", answers: ["dvorac, dvorca", "dvorac"], back: "dvorac — GEN dvorca, with a fleeting a.", tts: "Kad stignemo, razgledat ćemo dvorac." },
    { front: "entry ticket = ___ (not the one for a train)", answers: ["ulaznica"], back: "ulaznica gets you IN; karta gets you a seat or a ride.", tts: "Kad stignemo, kupit ćemo ulaznice." },
    { front: "to look round / go sightseeing = ___", answers: ["razgledati"], back: "razgledati (impf) — imperfective by nature, which makes it this unit's workhorse Futur II verb.", tts: "Dok budem čekao, razgledat ću tvrđavu." },
    { front: "ruins = ___ (careful: what number is it?)", answers: ["ruševine", "rusevine"], back: "ruševine — plural only, like novine and vrata.", tts: "Od dvorca su ostale samo ruševine." },
  ],
  notes: {
    inOneSentence: {
      en: "In a time clause about the future Croatian bans Futur I, and what replaces it is decided by aspect alone — the present for a perfective verb, Futur II (budem + the l-participle) for an imperfective one.",
      exampleHr: "Kad stignemo, kupit ćemo ulaznice, a dok budemo čekali Marka, razgledat ćemo tvrđavu.",
    },
    deepDive: [
      {
        title: "① The ban",
        body:
          "English:\n\n> *When I **arrive**, I **will call** you.*\n\nA present in the first half, a future in the second — and English speakers never notice the asymmetry, which is why they do not carry it over. Instead they put the future in **both** halves of the Croatian, because that is where the future obviously is:\n\n\\*~~Kad **ću doći**, javit ću ti.~~ ❌\n\n**This is simply not Croatian.** Not colloquially, not in speech, not in text messages. There is no register in which it is acceptable, which makes it unusually clean as rules go.\n\n> ### In a time clause pointing at the future, Futur I is banned.\n\nThe conjunctions this applies to are **kad**, **čim**, **dok** and **ako** — you meet the last three tomorrow, but the ban is identical for all four.\n\n**Only the time clause is affected.** The main clause keeps its Futur I exactly as Unit 9 built it:\n\n*Kad **dođem**, **javit ću** ti.* ✅\n\nAnd there is an over-correction worth naming now, because it is the mirror error: *Kad dođem, **javim** ti* strips the future out of the **main** clause too. That sentence exists and is fine Croatian — it just means something else. A present in the main clause turns a plan into a promise or a standing arrangement.",
        table: {
          caption: "Where the future may and may not stand",
          headers: ["", "vremenska rečenica", "glavna rečenica", "što je to"],
          rows: [
            ["❌", "Kad **ću doći**,", "javit ću ti.", "not Croatian"],
            ["✅", "Kad **dođem**,", "**javit ću** ti.", "a plan"],
            ["✅", "Kad **dođem**,", "**javim** ti.", "a promise / a standing rule"],
            ["✅", "Kad **budeš imao** vremena,", "**javi** mi.", "a request"],
          ],
        },
      },
      {
        title: "② The fork — and why L1 existed",
        body:
          "The future is out of the time clause. What replaces it is decided by **the aspect of the verb**, and there is no room for preference.\n\n**Perfective → the PRESENT.**\n*Kad **dođem***, *Kad **stignemo***, *Čim **kupim** ulaznicu*, *Kad **razgledamo** dvorac*\n\nThat present form is not a present **meaning**. Unit 17 established that a perfective verb has no present meaning available — you cannot be in the middle of arriving — and that is precisely why the form is unoccupied and free to take this job.\n\n**Imperfective → FUTUR II.**\n*Dok **budem čekao***, *Kad **budeš imao** vremena*, *Dok **budu razgledali***\n\n### Building Futur II\n\n> **budem · budeš · bude · budemo · budete · budu** + **the l-participle**\n\nThe participle is the perfekt's, unchanged, and it **agrees in gender and number** exactly as it does there:\n\n| | m | ž |\n|---|---|---|\n| ja | budem **radio** | budem **radila** |\n| ti | budeš **radio** | budeš **radila** |\n| on / ona | bude **radio** | bude **radila** |\n| mi | budemo **radili** | budemo **radile** |\n| vi | budete **radili** | budete **radile** |\n| oni / one | budu **radili** | budu **radile** |\n\nSo **the only new form in this entire unit is the auxiliary** — six words, and they are transparently *biti*. Everything else you have had since A1.\n\nAnd now you can see why L1 spent a whole lesson on «name the aspect on sight». The fork is not hard; it is only fast. If you have to stop and work out whether *čekati* is perfective, the sentence has already stalled.",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "svršeni — dođem, stignem, kupim, razgledamo", rule: "→ PREZENT", example: "Kad dođem, javit ću ti." },
            { label: "nesvršeni — čekati, razgledati, imati, raditi", rule: "→ FUTUR II", example: "Dok budem čekao, čitat ću." },
            { label: "glavna rečenica — uvijek", rule: "→ FUTUR I", example: "…javit ću ti." },
          ],
        },
      },
      {
        title: "🟡 The heavy option, and why it is worth having",
        body:
          "*Kad **budem došao**, javit ću ti.*\n\n**Grammatical.** Not marked wrong here, not marked wrong in the writing task, not marked wrong by a Croatian speaker.\n\nJust **heavy**. *doći* is perfective, so *kad dođem* says the same thing in fewer syllables, and that is what people actually say. *Kad budem došao* has the flavour of *«at such time as I shall have arrived»* — real, correct, and more machinery than the moment needs.\n\nIt gets its own section for one reason: **the two ways of getting this wrong are not equally bad.**\n\n| what you over-use | what happens |\n|---|---|\n| **budem** everywhere | slightly formal, occasionally clunky — **and always correct** |\n| **Futur I** in the clause | **wrong, every single time** |\n\nSo the practical advice is unambiguous: **if the fork deserts you mid-sentence, take *budem***. You will sound a shade bookish and you will not be wrong.\n\nThis is also why the ban is taught before the fork, every time. The ban is the safety rail — it stops you producing something impossible. The fork is the polish — it makes you sound like somebody who lives there. A learner who has only the fork still writes *kad ću*; a learner who has only the ban writes *kad budem* for everything and is merely clumsy.",
      },
      {
        title: "The two clauses, and what each one is for",
        body:
          "It helps to see the sentence as two jobs rather than as one rule.\n\n**The time clause sets the moment.** It answers *when?* — and because the moment is defined by the main clause's future, it does not need to re-state that the whole thing is in the future. That is the deep reason for the ban: the futurity is already carried once, and Croatian does not carry it twice.\n\n**The main clause carries the future.** *javit ću ti*, *kupit ćemo ulaznice*, *razgledat ću tvrđavu* — Unit 9's Futur I, entirely untouched by anything in this unit.\n\nA useful consequence: **the main clause does not have to be a Futur I at all.** It can be:\n\n*Kad budeš imao vremena, **javi** mi.* — an imperative\n*Kad razgledamo dvorac, **idemo** u kulu.* — a present used for a settled plan\n*Kad dođem, **javim** ti.* — a present as a promise\n\nAll three are fine, and all three leave the time clause exactly as it was. The rule is about the **time clause** and nothing else.\n\nOne more thing worth noticing before tomorrow: **the order of the clauses doesn't matter.**\n\n*Kad dođem, javit ću ti.* = *Javit ću ti kad dođem.*\n\nThe ban follows the conjunction, not the position. If `kad` is in front of it, the clause obeys — wherever in the sentence it happens to sit.",
      },
    ],
    commonMistakes: [
      { wrong: "Kad ću doći, javit ću ti.", right: "**Kad dođem**, javit ću ti.", why: "The unit's number-one error. English puts a present in the first half and a future in the second, and learners carry the future into both. Croatian bans it in the time clause, always." },
      { wrong: "Dok čekam, čitat ću knjigu.", right: "**Dok budem čekao**, čitat ću knjigu.", why: "A bare present with an imperfective verb reports something happening NOW. For a future stretch you need Futur II." },
      { wrong: "Kad dođem, javim ti. (meaning: I'll call you when I get there)", right: "Kad dođem, **javit ću** ti.", why: "The over-correction. Stripping the future from the MAIN clause too turns a plan into a promise — a real sentence, but a different one." },
      { wrong: "Dok budem čekala (said by a man)", right: "Dok budem **čekao**", why: "The l-participle agrees in gender and number, exactly as it does in the perfekt. Futur II changes nothing about that." },
      { wrong: "Kad budem došao, javit ću ti.", right: "Kad **dođem**, javit ću ti. — *(but the original is not an error)*", why: "Grammatical, just heavy: doći is perfective and the present already does the job. Over-using budem is the safe mistake; over-using Futur I is not." },
      { wrong: "Kad dođem, ću ti javiti.", right: "Kad dođem, **javit ću** ti.", why: "A clitic cannot open its clause — §12, unchanged since Unit 12. The main clause is a perfectly ordinary Futur I." },
    ],
    memoryHooks: [
      "**One sentence, one future.** English says it twice; Croatian says it once, in the main clause.",
      "**Ban first, fork second.** The ban stops you being wrong. The fork makes you sound native. In that order, always.",
      "**When in doubt, budem.** Over-using it sounds formal. Over-using Futur I is an error. Take the safe one.",
      "**The auxiliary is the only new thing.** *budem budeš bude budemo budete budu* — and the participle has been yours since your first perfekt.",
      "**Perfective has no present meaning, which is why the present is free.** You cannot be in the middle of arriving, so *dođem* was never doing another job.",
      "**Order doesn't matter.** *Kad dođem, javit ću ti* = *Javit ću ti kad dođem.* The ban follows the conjunction, not the position.",
    ],
    connects: [
      { label: "Aspect — the fork this depends on", lessonId: "b1u22l1" },
      { label: "Futur I, which stays in the main clause", lessonId: "a2u9l5" },
      { label: "The l-participle, from the perfekt", lessonId: "a1u8l1" },
      { label: "Next: čim, dok ne, and the ako split", lessonId: "b1u22l3" },
    ],
    selfCheck: [
      { q: "»___ , javit ću ti.« (when I arrive)", a: "Kad dođem — no future in the time clause, and doći is perfective so the present goes there." },
      { q: "Why is «Dok čekam, čitat ću» wrong?", a: "A bare present with an imperfective verb means it's happening now. A future stretch needs Futur II: «Dok budem čekao»." },
      { q: "Build the Futur II of «raditi» for «mi», feminine.", a: "budemo radile — the auxiliary plus the l-participle, agreeing in gender and number just as in the perfekt." },
      { q: "Is «Kad budem došao, javit ću ti» an error?", a: "No. It's heavy — doći is perfective so «kad dođem» is shorter and more natural — but it is correct, and over-using budem is the safe mistake." },
      { q: "What happens to the main clause under this rule?", a: "Nothing. It keeps its Futur I. And it doesn't even have to be a Futur I — an imperative or a present both work: «Kad budeš imao vremena, javi mi.»" },
    ],
  },
};
