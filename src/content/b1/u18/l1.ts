import type { Lesson } from "@/types/content";

/**
 * B1 U18 L1 — U školi i na fakultetu (Conditional I: formation & the clitic slot)
 * Spec: curriculum/B1/unit-18.md · grammar-reference §10 "Conditional I" + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The cheapest grammar left in the language: the U8 l-participle with a different
 * clitic in front of it. U15 listed `bih` in the clitic train without explaining
 * it — this lesson cashes that preview in.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U18 cut-outs exist (ako/kad stay icon-only).
 */
export const b1u18l1: Lesson = {
  id: "b1u18l1",
  unitId: "b1u18",
  title: "U školi i na fakultetu",
  titleEn: "At school & at university — meet bih",
  grammarTags: ["conditional-1", "clitics"],
  estMinutes: 20,
  vocab: [
    { id: "b1u18.osnovnaskola", hr: "osnovna škola", en: "primary school", pos: "phrase", icon: "🏫", exampleHr: "Moja sestra ide u osnovnu školu.", exampleEn: "My sister goes to primary school." },
    { id: "b1u18.srednjaskola", hr: "srednja škola", en: "secondary school / high school", pos: "phrase", icon: "🎒", exampleHr: "Idem u srednju školu.", exampleEn: "I go to secondary school." },
    { id: "b1u18.sveuciliste", hr: "sveučilište", en: "university (the institution — a fakultet sits inside it)", pos: "noun", gender: "n", icon: "🏛️", exampleHr: "Sveučilište u Zagrebu je veliko.", exampleEn: "The University of Zagreb is big." },
    { id: "b1u18.razred", hr: "razred", en: "class / year-group (also: classroom)", pos: "noun", gender: "m", icon: "🚪", exampleHr: "U razredu ima dvadeset učenika.", exampleEn: "There are twenty pupils in the class." },
    { id: "b1u18.ucenik", hr: "učenik", en: "pupil (m; učenica f) — at school, not university", pos: "noun", gender: "m", icon: "🧑‍🎓", exampleHr: "Moj brat je učenik.", exampleEn: "My brother is a pupil." },
    { id: "b1u18.profesor", hr: "profesor", en: "teacher (secondary/university; profesorica f)", pos: "noun", gender: "m", icon: "👨‍🏫", exampleHr: "Naš profesor je jako dobar.", exampleEn: "Our teacher is very good." },
    { id: "b1u18.nastava", hr: "nastava", en: "classes / teaching (f, ALWAYS singular)", pos: "noun", gender: "f", icon: "🕘", exampleHr: "Nastava počinje u devet.", exampleEn: "Classes start at nine." },
    { id: "b1u18.predmet", hr: "predmet", en: "school subject", pos: "noun", gender: "m", icon: "📚", exampleHr: "Koji predmet voliš?", exampleEn: "Which subject do you like?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "U školi i na fakultetu",
      subtitle: "Unit 18 opens with the cheapest grammar left: the past participle you have owned since Unit 8, wearing a new clitic.",
      emoji: "🎓",
      items: [
        { emoji: "🌤️", label: "Kondicional", hint: "bih · bi · bismo · biste" },
        { emoji: "🔄", label: "One swap", hint: "sam htio → bih htio" },
        { emoji: "🚂", label: "Back to the train", hint: "where bih parks" },
        { emoji: "🏫", label: "School words", hint: "razred, nastava, predmet…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Cash in the preview",
      subtitle: "Back in Unit 15 you saw a word in the clitic train you had never used: bih. Today you cash it in — and it costs you nothing, because you already know the hard half.",
      emoji: "🌤️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U8 participles, U15 clitics" },
        { emoji: "🃏", label: "New words", hint: "the school eight" },
        { emoji: "⚙️", label: "The swap", hint: "bih + l-participle" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: you already own the hard half",
      items: [
        {
          prompt: "U8 perfekt: »Ana ___ studirala u Zagrebu.«",
          options: ["je", "su", "sam"],
          correctIndex: 0,
          explanation: "Ana = 3sg → je + studirala (f sg participle). Hold on to that participle — it is about to be reused.",
        },
        {
          prompt: "U8: »Marko i Ana ___ došli.« (they came)",
          options: ["su", "je", "smo"],
          correctIndex: 0,
          explanation: "3pl → su, and the participle goes plural: došli.",
        },
        {
          prompt: "U15 clitic train: where does an auxiliary clitic sit?",
          options: [
            "second position — right after the first word or phrase",
            "always at the very end of the sentence",
            "always first, before everything",
          ],
          correctIndex: 0,
          explanation: "Second position, never first. Today's new clitic obeys exactly the same law.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The school eight",
      vocabIds: [
        "b1u18.osnovnaskola", "b1u18.srednjaskola", "b1u18.sveuciliste", "b1u18.razred",
        "b1u18.ucenik", "b1u18.profesor", "b1u18.nastava", "b1u18.predmet",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Perfekt with one clitic swapped 🔄",
      body:
        "Conditional I — *«I would…»* — is built from **the l-participle you have been using since Unit 8**. Nothing about the participle changes: same forms, same gender and number agreement (*htio / htjela / htjeli*).\n\nAll you swap is the little word in front:\n\n*Ja **sam** htio kavu.* → I wanted a coffee.\n*Ja **bih** htio kavu.* → I'd like a coffee.\n\nThat is the whole machine. Learn six clitics and you have a new tense.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "perfekt (U8)", emoji: "⏮️", example: "sam htio · je studirala · su došli" },
          { label: "swap the clitic", emoji: "🔄", example: "sam → bih · je → bi · su → bi" },
          { label: "kondicional 🌤️", emoji: "🌤️", example: "bih htio · bi studirala · bi došli" },
        ],
      },
      table: {
        caption: "Kondicional I — bih + l-participle",
        headers: ["osoba", "klitika", "primjer"],
        rows: [
          ["ja", "bih", "Ja bih studirao. / Ja bih studirala."],
          ["ti", "bi  ⚠️", "Ti bi studirao."],
          ["on / ona / ono", "bi  ⚠️", "Ana bi studirala."],
          ["mi", "bismo", "Mi bismo studirali."],
          ["vi / Vi", "biste", "Vi biste studirali."],
          ["oni / one / ona", "bi  ⚠️", "Oni bi studirali."],
        ],
      },
      examples: [
        { hr: "Htio bih upisati fakultet.", en: "I'd like to enrol at the faculty.", note: "upisati = to enrol — you card it in L2; today just hear the bih." },
        { hr: "Ana bi studirala u Zagrebu.", en: "Ana would study in Zagreb.", note: "3sg = bi, and the participle still agrees: Ana → studirala." },
        { hr: "Mi bismo to naučili.", en: "We would learn that.", note: "mi → bismo, plural participle naučili." },
        { hr: "Ne bih to rekao.", en: "I wouldn't say that.", note: "Negation = ne bih. Two words. Always." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Where bih parks — and three cheap traps 🚂",
      body:
        "In Unit 15 you learned the clitic train: everything lines up in second position, in a fixed order. **bih and friends ride in the auxiliary wagon** — the exact seat where *sam* and *ću* sit. You do not learn a new rule; you put a new passenger on the old train.\n\n*Htio bih **vam** objasniti.* → aux, then DAT. Same order as *Dao **sam vam** knjigu.*\n\nAnd note the question form: **Bi li…?** for *ti*, **Biste li…?** for *Vi* — `li` is the one thing that can stand in front of the auxiliary.",
      diagram: {
        kind: "train",
        wagons: [
          { label: "1 · li", items: ["li"], note: "yes/no questions only" },
          { label: "2 · AUX 🆕", items: ["sam si smo ste su", "ću ćeš će ćemo ćete", "bih bi bismo biste bi"], note: "the new wagon — bih sits exactly where sam and ću sit" },
          { label: "3 · DAT", items: ["mi ti mu joj nam vam im"] },
          { label: "4 · ACC/GEN", items: ["me te ga je nas vas ih"] },
          { label: "5 · se", items: ["se"] },
          { label: "6 · je", items: ["je"], note: "the perfekt je always goes last" },
        ],
      },
      table: {
        caption: "Three traps, all cheap",
        headers: ["trap", "❌", "✅"],
        rows: [
          ["1sg keeps its -h", "Ja bi studirao.", "Ja bih studirao."],
          ["negation is two words", "Nebih došao.", "Ne bih došao."],
          ["a clitic never opens a clause", "Bih došao.", "Došao bih. / Ja bih došao."],
          ["ti and on share one form", "— (guessing)", "Ti bi / On bi — name the subject"],
        ],
      },
      examples: [
        { hr: "Ja bih to napisao.", en: "I would write that." },
        { hr: "Napisao bih to.", en: "I'd write it.", note: "No pronoun? Then the participle goes first — bih can never open a clause." },
        { hr: "Bi li ti to napisao?", en: "Would you write that?", note: "Bi li…? = ti · Biste li…? = Vi. More on that in L2." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the clitic",
      items: [
        {
          prompt: "»Mi ___ to naučili.« (we would learn that)",
          options: ["bismo", "biste", "bi"],
          correctIndex: 0,
          explanation: "mi → bismo. (biste belongs to vi/Vi.)",
        },
        {
          prompt: "»Ana ___ studirala u Zagrebu.«",
          options: ["bi", "bih", "bismo"],
          correctIndex: 0,
          explanation: "3sg → bi. The -h form belongs to ja alone.",
        },
        {
          prompt: "Which one is correct Croatian?",
          options: ["Ja bih studirao.", "Ja bi studirao.", "Ja bismo studirao."],
          correctIndex: 0,
          explanation: "ja → bih. Dropping the -h is the single commonest slip in this unit.",
        },
        {
          prompt: "»I wouldn't say that.« =",
          options: ["Ne bih to rekao.", "Nebih to rekao.", "Bih ne to rekao."],
          correctIndex: 0,
          explanation: "ne bih — two separate words, negation first.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Škola ili sveučilište?",
      subtitle: "Croatian keeps school people and university people in separate boxes — and one of these nouns refuses to go plural.",
      emoji: "🏫",
      items: [
        { emoji: "🧑‍🎓", label: "učenik ≠ student", hint: "school vs faculty" },
        { emoji: "🕘", label: "nastava je…", hint: "singular forever" },
        { emoji: "🧩", label: "Match + fills", hint: "make bih stick" },
      ],
    },
    {
      id: "s09",
      type: "teach",
      title: "učenik, student — and a noun with no plural",
      body:
        "1. **osnovna škola** (8 years) → **srednja škola** (4 years) → **fakultet**, which sits inside a **sveučilište**. *Sveučilište* is the whole institution; *fakultet* (U5) is one school within it.\n2. A person at *škola* is an **učenik / učenica**. A person at *fakultet* is a **student / studentica** (U1). Calling a ten-year-old a *student* is the mistake a Croatian will actually correct.\n3. **nastava** is always singular — *Nastava **je** u devet*, never ~~*Nastave su*~~. It is the teaching, not the lessons.\n4. **razred** does double duty: the year-group (*prvi razred*) and the room itself (*u razredu*).",
      table: {
        caption: "Two worlds, two vocabularies",
        headers: ["u školi 🏫", "na fakultetu 🏛️"],
        rows: [
          ["osnovna škola · srednja škola", "sveučilište · fakultet"],
          ["učenik / učenica", "student / studentica"],
          ["razred", "godina"],
          ["učitelj (osnovna) · profesor (srednja)", "profesor / profesorica"],
          ["nastava · predmet", "nastava · predavanje"],
        ],
      },
      examples: [
        { hr: "Moja sestra ide u osnovnu školu.", en: "My sister goes to primary school.", note: "ići u + ACC (U5): školu." },
        { hr: "U razredu ima dvadeset učenika.", en: "There are twenty pupils in the class.", note: "ima + GEN (U7); 5 and up → GEN plural (U13): učenika." },
        { hr: "Nastava počinje u devet.", en: "Classes start at nine.", note: "Singular verb — nastava has no plural." },
        { hr: "Koji predmet voliš?", en: "Which subject do you like?" },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match the subject to its conditional",
      pairs: [
        { a: "ja", b: "bih studirao" },
        { a: "ti", b: "bi studirao" },
        { a: "mi", b: "bismo studirali" },
        { a: "Vi", b: "biste studirali" },
        { a: "Ana i Marko", b: "bi studirali" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Ja ___ studirao u Zagrebu.",
      blanks: [["bih"]],
      translation: "I would study in Zagreb.",
      wordBank: ["bih", "bi", "bismo"],
      explanation: "ja → bih. The -h is what makes it first person.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ana ___ studirala hrvatski.",
      blanks: [["bi"]],
      translation: "Ana would study Croatian.",
      wordBank: ["bi", "bih", "biste"],
      explanation: "3sg → bi, participle agrees with Ana → studirala.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Ne ___ to rekao.",
      blanks: [["bih"]],
      translation: "I wouldn't say that.",
      wordBank: ["bih", "bi", "bismo"],
      explanation: "Negation is ne + bih — two words, and the clitic keeps its -h.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "The conditional clitic for MI = ___",
      answers: ["bismo"],
      hint: "it echoes smo in »mi smo«",
      explanation: "mi bismo — and the participle goes plural: Mi bismo studirali.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "»I wouldn't« — the negative of bih = ___ (two words)",
      answers: ["ne bih"],
      hint: "never glued together",
      explanation: "ne bih. *Nebih is not a word.",
    },
    {
      id: "s16",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Hear the clitic where it lives, then say two things you would do.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "bih in second position" },
        { emoji: "🎤", label: "Your would-be studies", hint: "Studirao bih…" },
        { emoji: "🔗", label: "Flashbacks", hint: "U8 · U15" },
      ],
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Htio bih upisati fakultet.",
      explanation: "Htio bih upisati fakultet — I'd like to enrol at the faculty. Participle first, then bih: the clitic can't open the sentence.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Ne bih to rekao.",
      explanation: "Ne bih to rekao — I wouldn't say that. ne · bih · to · rekao.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Htio bih studirati u Zagrebu. Studirao bih hrvatski i engleski.",
      targetEn: "say two things you would do — I'd like to study in Zagreb. I'd study Croatian and English.",
      phonetic: "HTEE-oh beeh stoo-DEE-ra-tee oo ZAH-greh-boo. stoo-DEE-ra-oh beeh HR-vat-skee ee EN-glehs-kee",
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: the old rules still run the show",
      items: [
        {
          prompt: "U15: which seat does bih take on the clitic train?",
          options: [
            "the auxiliary seat — the same one sam and ću use",
            "the last seat, after se",
            "no seat — it goes first in the sentence",
          ],
          correctIndex: 0,
          explanation: "One new passenger, the same old train.",
        },
        {
          prompt: "U8 agreement: »Ana i Marija ___ došle.« (they would come)",
          options: ["bi", "bih", "bismo"],
          correctIndex: 0,
          explanation: "3pl → bi, and the participle is f pl: došle. The participle rules never changed.",
        },
        {
          prompt: "Listen — what is this?",
          tts: "Ja bih studirao u Zagrebu.",
          options: ["I would study in Zagreb", "I studied in Zagreb", "I will study in Zagreb"],
          correctIndex: 0,
          explanation: "bih = would. sam = did. ću = will. Same participle for two of the three.",
        },
      ],
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**Kondicional I = the U8 participle + a new clitic**: *bih · bi · bi · bismo · biste · bi*. Nothing about the participle changes — it still agrees (*htio / htjela / htjeli*).\n\n**Three traps**: *ja* keeps the **-h** (*Ja bih*, never ~~Ja bi~~) · negation is **ne bih**, two words · a clitic can never open a clause (*Došao bih.* ✅, ~~Bih došao.~~ ❌).\n\n**One shared form**: *ti bi* and *on bi* look identical — always name the subject.\n\nWords tonight: osnovna škola, srednja škola, sveučilište, razred, učenik, profesor, nastava, predmet.\n\nNext: what conditional is actually *for* — asking a stranger for something without sounding blunt.",
      vocabIds: [
        "b1u18.osnovnaskola", "b1u18.srednjaskola", "b1u18.sveuciliste", "b1u18.razred",
        "b1u18.ucenik", "b1u18.profesor", "b1u18.nastava", "b1u18.predmet",
      ],
    },
  ],
  srsCloze: [
    { front: "mi + kondicional → ___", answers: ["bismo"], back: "bismo — Mi bismo studirali.", tts: "Mi bismo to naučili." },
    { front: "Ana ___ studirala u Zagrebu.", answers: ["bi"], back: "3sg → bi (same form as ti bi).", tts: "Ana bi studirala u Zagrebu." },
    { front: "the negative of bih → ___ (two words)", answers: ["ne bih"], back: "ne bih — never *nebih.", tts: "Ne bih to rekao." },
    { front: "primary school = ___", answers: ["osnovna škola", "osnovna skola"], back: "osnovna škola — then srednja škola, then fakultet.", tts: "Moja sestra ide u osnovnu školu." },
    { front: "university (the whole institution) = ___", answers: ["sveučilište", "sveuciliste"], back: "sveučilište (n) — a fakultet sits inside it.", tts: "Sveučilište u Zagrebu je veliko." },
    { front: "pupil at school (not a university student) = ___", answers: ["učenik", "ucenik"], back: "učenik / učenica. A fakultet has studenti.", tts: "Moj brat je učenik." },
    { front: "classes / teaching, always singular = ___", answers: ["nastava"], back: "nastava (f) — Nastava JE u devet, never *nastave su.", tts: "Nastava počinje u devet." },
    { front: "school subject = ___", answers: ["predmet"], back: "predmet (m) — Koji predmet voliš?", tts: "Koji predmet voliš?" },
  ],
  notes: {
    inOneSentence: {
      en: "Conditional I is the past participle you have used since Unit 8 with a different clitic in front of it — bih, bi, bi, bismo, biste, bi — and it rides in the same second-position seat as sam and ću.",
      exampleHr: "Ja sam htio kavu. → Ja bih htio kavu.",
    },
    deepDive: [
      {
        title: "The whole paradigm, and the one collision inside it",
        body:
          "There is no new verb form to learn. The l-participle is identical to the perfekt's, agreement and all — *studirao / studirala / studirali / studirale*. Only the clitic changes.\n\nThe one thing to watch: **bi covers 2sg, 3sg and 3pl**. Croatian is relaxed about this because the subject is nearly always visible — a pronoun, a name, or a plural participle doing the work (*Ti bi došao* / *On bi došao* / *Oni bi došli*).",
        table: {
          caption: "Kondicional I (grammar-reference §10)",
          headers: ["osoba", "klitika", "primjer"],
          rows: [
            ["ja", "bih", "Ja bih studirao / studirala."],
            ["ti", "bi", "Ti bi studirao."],
            ["on / ona / ono", "bi", "Ana bi studirala."],
            ["mi", "bismo", "Mi bismo studirali."],
            ["vi / Vi", "biste", "Vi biste studirali."],
            ["oni / one / ona", "bi", "Oni bi studirali."],
          ],
        },
      },
      {
        title: "bih on the clitic train",
        body:
          "Unit 15 gave you the order and listed *bih* in the auxiliary wagon without saying what it did. Now it has a job — and it changes nothing about the order.\n\n*Htio bih **vam** objasniti raspored.* → aux, then dative, exactly as in *Dao **sam vam** knjigu.*\n\nTwo consequences worth saying out loud: a clitic can **never** open a clause, so *«I would come»* with no pronoun has to be **Došao bih**; and the yes/no question puts `li` — the only thing allowed in front of the auxiliary — first: **Bi li došao?**",
        diagram: {
          kind: "train",
          wagons: [
            { label: "1 · li", items: ["li"] },
            { label: "2 · AUX", items: ["sam si smo ste su", "ću ćeš će ćemo ćete", "bih bi bismo biste bi"], note: "one seat, three tenses" },
            { label: "3 · DAT", items: ["mi ti mu joj nam vam im"] },
            { label: "4 · ACC/GEN", items: ["me te ga je nas vas ih"] },
            { label: "5 · se", items: ["se"] },
            { label: "6 · je", items: ["je"] },
          ],
        },
      },
      {
        title: "The school vocabulary, sorted",
        body:
          "Croatian keeps two parallel vocabularies and mixing them sounds odd rather than wrong. School: **osnovna škola** (8 years) → **srednja škola** (4 years), where the people are **učenik / učenica** and **profesor / profesorica** (in *osnovna* they are still **učitelj / učiteljica**, from U2). University: a **sveučilište** is the institution, a **fakultet** (U5) is one faculty inside it, and the people there are **student / studentica** (U1).\n\n**nastava** is the teaching itself and has no plural: *Nastava je u devet.* **razred** is both the year-group and the room. **predmet** is a school subject — and also, outside school, an object; context sorts it.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ja bi studirao u Zagrebu.",
        right: "Ja bih studirao u Zagrebu.",
        why: "1sg is the only form with -h. Drop it and you have said »he would«.",
      },
      {
        wrong: "Nebih to rekao.",
        right: "Ne bih to rekao.",
        why: "Negation stays a separate word — ne bih, ne bi, ne bismo.",
      },
      {
        wrong: "Bih došao.",
        right: "Došao bih. / Ja bih došao.",
        why: "A clitic can never open a clause (U15). Put the participle or a pronoun in front of it.",
      },
      {
        wrong: "Ana bi studirao.",
        right: "Ana bi studirala.",
        why: "The clitic is new; the participle agreement is not. It still follows the subject's gender and number.",
      },
    ],
    memoryHooks: [
      "Perfekt with the clitic swapped: sam htio → bih htio. You learned the hard half in Unit 8 and didn't know it.",
      "The -h in bih is the first-person fingerprint — the only form that has one.",
      "bi is a shared seat: ti, on and oni all sit in it, so always name who is sitting there.",
      "ne bih never fuses — think »ne mogu«, »ne znam«, »ne bih«.",
    ],
    connects: [
      { label: "Where the participle came from (Unit 8 L1)", lessonId: "a1u8l1" },
      { label: "The clitic train in full (Unit 15 L3)", lessonId: "a2u15l3" },
      { label: "Next: what conditional is for — polite requests (Unit 18 L2)", lessonId: "b1u18l2" },
    ],
    selfCheck: [
      { q: "How do you build conditional I from a verb you know?", a: "Take the l-participle you use for the perfekt and put bih / bi / bi / bismo / biste / bi in front of it." },
      { q: "Which person has the -h, and why does it matter?", a: "Only ja: bih. Without it, »Ja bi« reads as third person." },
      { q: "»I would come« with no pronoun = ?", a: "Došao bih. — a clitic can never start a clause." },
      { q: "Which form do ti, on and oni share?", a: "bi — so name the subject, or let the participle (došao / došli) do the work." },
      { q: "Why is »Nastave su u devet« wrong?", a: "nastava has no plural: Nastava je u devet." },
    ],
  },
};
