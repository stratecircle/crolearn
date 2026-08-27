import type { Lesson } from "@/types/content";

/**
 * B1 U22 L4 — Hrvatski velikani (Time clauses in biography)
 * Spec: curriculum/B1/unit-22.md · grammar-reference §20 "Futur II and time
 * clauses" + §11 aspect + §8 perfekt.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * No new machinery. The lesson runs the whole system through BIOGRAPHY, which
 * is where time clauses live most naturally, and it does one genuinely new
 * thing: it puts the system into **both directions of time at once**.
 *
 * ① **Past biography takes past time clauses** and behaves entirely normally —
 *    *Kad je bio mlad, živio je u Zagrebu.* That is L1's `kad`, here to be
 *    contrasted rather than taught.
 * ② **Future biography — a visit, a plan, an anniversary — takes the unit's
 *    rule**: *Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo.*
 * ③ **The two in one paragraph** is the real content, because that is exactly
 *    what a museum label or a guidebook does: it tells you what happened, then
 *    tells you what you will see.
 * ④ **The aspect fork in the wild.** A life is full of stretches (*pisao je
 *    dvadeset godina*) and events (*napisao je jednu knjigu*), and the same
 *    verbs come back in the future clauses where the fork now picks the tense.
 *
 * ⚠️ EVERY historical figure in this lesson is generic — *a writer*, *a
 * painter*, *he* — and NO real named person is used. The unit is a grammar
 * unit and the biography is scaffolding; inventing plausible-sounding facts
 * about a real Croatian figure would be a cost with no teaching benefit, and
 * a learner cannot tell an invented date from a real one.
 *
 * Level-compliance pass: every content word greped against the 888-headword
 * carded list. Rejected and routed around: umrijeti (0), slikati (0), crtati
 * (0), Beč and every other foreign place name (0 — the spec's «živio je u
 * Beču» is rebuilt as «živio je u Zagrebu»), petnaesti (0 → the carded
 * ordinals stop at *deseti*), stizati (0), naći (1, rejected), vrh / kraljica
 * / natpis / stube (the STORY's glossed words, held back), comparatives and
 * superlatives (B2 — «njegovo najpoznatije djelo» is rebuilt as «njegovo prvo
 * djelo»), the participial passive (B2), nitko, točno, sjediti, stajati,
 * kasniti (all 0 or previously rejected). Deferred by unit: no licensed
 * Futur I (L5 — the exception is taught LAST), no -nje (U23), no full clitic
 * cluster (U23).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U22 cut-outs exist.
 */
export const b1u22l4: Lesson = {
  id: "b1u22l4",
  unitId: "b1u22",
  title: "Hrvatski velikani",
  titleEn: "Great Croatians — time clauses in biography",
  grammarTags: ["futur-2", "time-clause", "aspect", "biography"],
  estMinutes: 20,
  vocab: [
    { id: "b1u22.umjetnost", hr: "umjetnost", en: "art (f, i-declension; GEN umjetnosti)", pos: "noun", gender: "f", icon: "🎨", exampleHr: "Volim umjetnost.", exampleEn: "I love art." },
    { id: "b1u22.umjetnik", hr: "umjetnik", en: "artist (m; GEN umjetnika)", pos: "noun", gender: "m", icon: "🧑‍🎨", exampleHr: "Bio je poznat umjetnik.", exampleEn: "He was a well-known artist." },
    { id: "b1u22.slikar", hr: "slikar", en: "painter (m)", pos: "noun", gender: "m", icon: "🖌️", exampleHr: "Slikar je živio u ovom gradu.", exampleEn: "The painter lived in this town." },
    { id: "b1u22.pisac", hr: "pisac", en: "writer (m; GEN pisca — fleeting a)", pos: "noun", gender: "m", icon: "✍️", exampleHr: "Pisac je radio i kao učitelj.", exampleEn: "The writer also worked as a teacher." },
    { id: "b1u22.pjesnik", hr: "pjesnik", en: "poet (m)", pos: "noun", gender: "m", icon: "📝", exampleHr: "Pjesnik je pisao dvadeset godina.", exampleEn: "The poet wrote for twenty years." },
    { id: "b1u22.djelo", hr: "djelo", en: "a work (n) — a book, a painting, a building", pos: "noun", gender: "n", icon: "🖼️", exampleHr: "To je njegovo prvo djelo.", exampleEn: "That's his first work." },
    { id: "b1u22.naslijede", hr: "naslijeđe", en: "heritage (n) — kulturno naslijeđe", pos: "noun", gender: "n", icon: "🏛️", exampleHr: "To je naše kulturno naslijeđe.", exampleEn: "That's our cultural heritage." },
    { id: "b1u22.sloboda", hr: "sloboda", en: "freedom (f)", pos: "noun", gender: "f", icon: "🕊️", exampleHr: "Pisao je o slobodi.", exampleEn: "He wrote about freedom." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Hrvatski velikani",
      subtitle: "A life is a stack of time clauses. So is a plan. The only difference is which way they point — and today you write both in the same paragraph.",
      emoji: "🎨",
      items: [
        { emoji: "⬅️", label: "Past biography", hint: "kad + a past, entirely normal" },
        { emoji: "➡️", label: "Future visit", hint: "kad + the unit's rule" },
        { emoji: "🔁", label: "Same verb, twice", hint: "pisao je ‖ bude pisao" },
        { emoji: "🖼️", label: "New words", hint: "umjetnost, pisac, djelo…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Two directions, one system",
      subtitle: "A museum label does both in four lines: here is what he did, and here is what you will see. Same conjunctions, opposite tenses.",
      emoji: "🔁",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "the ban, dok ne, aspect" },
        { emoji: "🃏", label: "New words", hint: "the artists eight" },
        { emoji: "⚙️", label: "Past ‖ future", hint: "side by side" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: three days, three rules",
      items: [
        {
          prompt: "L2: »___ , javit ću ti.« (when I arrive)",
          options: ["Kad dođem", "Kad ću doći", "Kad sam došao"],
          correctIndex: 0,
          explanation: "The ban, then the fork. Still the rule under everything.",
        },
        {
          prompt: "L3: »Čekat ću ___ dođeš.« (until you come)",
          options: ["dok ne", "dok", "čim"],
          correctIndex: 0,
          explanation: "dok ne = until, and the `ne` negates nothing.",
        },
        {
          prompt: "L1: »Pjesnik je ___ dvadeset godina.« (pisati — a stretch)",
          options: ["pisao", "napisao", "piše"],
          correctIndex: 0,
          explanation: "pisao — imperfective, because twenty years is a stretch. «Napisao je jednu knjigu» would be the event.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The artists eight",
      vocabIds: [
        "b1u22.umjetnost", "b1u22.umjetnik", "b1u22.slikar", "b1u22.pisac",
        "b1u22.pjesnik", "b1u22.djelo", "b1u22.naslijede", "b1u22.sloboda",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "A life, in time clauses ⬅️",
      body:
        "Biography is where time clauses are most at home, because a life is nothing but *when X, then Y* repeated:\n\n*Kad je **bio** mlad, **živio** je u Zagrebu.*\n*Dok je **pisao**, **radio** je i kao učitelj.*\n*Kad je **završio** školu, **počeo** je pisati.*\n*Poslije rata **napisao** je svoje prvo djelo.*\n\n**Nothing here is new.** A past `kad` takes a past — L1 said so — and the aspects inside follow L1's fork exactly:\n\n- ***bio*** — being young is a **stretch** → imperfective\n- ***pisao*** — writing for years is a **stretch** → imperfective\n- ***završio*** — finishing school is an **event** → perfective\n- ***napisao*** — finishing one book is an **event** → perfective\n\nNotice the pair in the middle: ***pisao*** and ***napisao*** are the same verb in its two aspects, and a biography needs both in the same paragraph. *Pisao je dvadeset godina* (the stretch of a career) · *Napisao je jednu knjigu* (the one book that came out of it).\n\nThat is the whole of past biography, and you have owned it since Unit 17.",
      table: {
        caption: "A life, verb by verb",
        headers: ["rečenica", "vrsta", "zašto"],
        rows: [
          ["Kad je **bio** mlad, živio je u Zagrebu.", "nesvršeni", "being young is a stretch"],
          ["Kad je **završio** školu, počeo je pisati.", "svršeni", "finishing is an event"],
          ["Dok je **pisao**, radio je i kao učitelj.", "nesvršeni", "a career is a stretch"],
          ["**Napisao** je svoje prvo djelo.", "svršeni", "one book, finished"],
          ["Pisao je o **slobodi** dvadeset godina.", "nesvršeni", "twenty years — a stretch"],
        ],
      },
      ttsChips: ["Kad je bio mlad, živio je u Zagrebu.", "Dok je pisao, radio je i kao učitelj."],
    },
    {
      id: "s06",
      type: "teach",
      title: "…and the same life, pointed forward ➡️",
      body:
        "Now turn the page. A museum label does not only say what he did; it says what **you** will see.\n\n*Kad **dođeš** u muzej, **vidjet ćeš** njegovo prvo djelo.*\n*Čim **dođeš**, **vidjet ćeš** njegov kip.* → *(the spec's «čim uđeš» is unbuildable — **ući** has zero occurrences)*\n*Dok **budeš razgledao** muzej, **čut ćeš** njegove pjesme.*\n\n**Exactly the unit's rule**, unchanged: no Futur I in the time clause, and the aspect picks the tense.\n\n### The two in one paragraph\n\nThis is what the lesson is actually for, because it is what real writing about a place does:\n\n> *Pisac je **živio** u ovom gradu. Kad je **bio** mlad, **radio** je kao učitelj. **Napisao** je svoje prvo djelo poslije rata. — **Kad dođete** u muzej, **vidjet ćete** to djelo. **Dok budete razgledali**, **čut ćete** i priču o njegovu životu.*\n\nFour sentences in the past, two in the future, and the conjunctions never change. Only the direction does — and with it, what each clause is allowed to contain.",
      diagram: {
        kind: "contrast",
        left: {
          title: "PROŠLOST — obično",
          emoji: "⬅️",
          lines: [
            { hr: "Kad je bio mlad, živio je u Zagrebu.", en: "past clause, past main clause" },
            { hr: "Dok je pisao, radio je kao učitelj.", en: "nothing is banned here" },
          ],
        },
        right: {
          title: "BUDUĆNOST — pravilo",
          emoji: "➡️",
          lines: [
            { hr: "Kad dođeš, vidjet ćeš njegovo djelo.", en: "present clause, Futur I main" },
            { hr: "Dok budeš razgledao, vidjet ćeš slike.", en: "Futur II clause, Futur I main" },
          ],
        },
      },
    },
    {
      id: "s07",
      type: "teach",
      title: "The same verb, two clauses, two tenses 🔁",
      body:
        "Take one verb through both directions and the system becomes visible.\n\n**pisati** (imperfective — a stretch):\n*Dok je **pisao**, radio je kao učitelj.* — past\n*Dok **bude pisao**, neće imati vremena.* — future → **Futur II**\n\n**napisati** (perfective — an event):\n*Kad je **napisao** knjigu, bio je star.* — past\n*Kad **napiše** knjigu, javit će nam.* — future → **the present**\n\n**doći** (perfective):\n*Kad je **došao**, svi su ga čekali.* — past\n*Kad **dođeš**, vidjet ćeš djelo.* — future → **the present**\n\n**razgledati** (imperfective):\n*Dok je **razgledao**, ništa nije rekao.* — past\n*Dok **budeš razgledao**, vidjet ćeš slike.* — future → **Futur II**\n\n> **In the past, the aspect only describes. In the future, the same aspect chooses the tense.**\n\nThat sentence is the whole unit, and it is why L1 spent a day on aspect before L2 touched a future.",
      table: {
        caption: "One verb, both directions",
        headers: ["glagol", "vrsta", "u prošlosti", "u budućnosti"],
        rows: [
          ["pisati", "nesvršeni", "dok je **pisao**", "dok **bude pisao**"],
          ["napisati", "svršeni", "kad je **napisao**", "kad **napiše**"],
          ["doći", "svršeni", "kad je **došao**", "kad **dođe**"],
          ["razgledati", "nesvršeni", "dok je **razgledao**", "dok **bude razgledao**"],
          ["čekati", "nesvršeni", "dok je **čekao**", "dok **bude čekao**"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "The line worth keeping",
        text: "In the past, aspect only describes what happened. In the future, the same aspect chooses the tense. That is why L1 came before L2.",
      },
    },
    {
      id: "s08",
      type: "example",
      title: "A writer, and a visit",
      items: [
        { hr: "Kad je bio mlad, živio je u ovom gradu.", en: "When he was young, he lived in this town.", note: "Past kad, past main clause. Entirely ordinary." },
        { hr: "Dok je pisao, radio je i kao učitelj.", en: "While he was writing, he also worked as a teacher.", note: "A stretch alongside a stretch — both imperfective." },
        { hr: "Kad je završio školu, počeo je pisati.", en: "When he finished school, he began to write.", note: "Two events: završio, počeo." },
        { hr: "Napisao je svoje prvo djelo poslije rata.", en: "He wrote his first work after the war.", note: "One completed book — perfective. And «prvo», not a superlative." },
        { hr: "Pisao je o slobodi dvadeset godina.", en: "He wrote about freedom for twenty years.", note: "Twenty years is a stretch, so imperfective." },
        { hr: "Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo.", en: "When you come to the museum, you'll see his first work.", note: "Future: doći is perfective → the present. Main clause keeps Futur I." },
        { hr: "Dok budeš razgledao muzej, vidjet ćeš i njegove slike.", en: "While you're looking round the museum, you'll also see his paintings.", note: "razgledati is imperfective → Futur II." },
        { hr: "To je naše kulturno naslijeđe.", en: "That's our cultural heritage.", note: "naslijeđe — carded as a plain noun; the -đe ending is not analyzed." },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Turn it round",
      subtitle: "Each item gives you a life in the past and asks for the visit in the future — or the other way round. The conjunction never changes.",
      emoji: "🔄",
      items: [
        { emoji: "✅", label: "Quick check", hint: "past clause or future?" },
        { emoji: "🔤", label: "Build them", hint: "flip four sentences" },
        { emoji: "🔊", label: "Listen", hint: "a museum label" },
      ],
    },
    {
      id: "s10",
      type: "quiz-set",
      title: "Quick check: which direction, which tense?",
      items: [
        {
          prompt: "»Kad je bio mlad, ___ u Zagrebu.« (živjeti — past)",
          options: ["živio je", "živi", "bude živio"],
          correctIndex: 0,
          explanation: "A past kad takes a past. Nothing about this unit's rule applies backwards.",
        },
        {
          prompt: "»Kad ___ u muzej, vidjet ćeš djelo.« (doći, ti — future)",
          options: ["dođeš", "ćeš doći", "si došao"],
          correctIndex: 0,
          explanation: "Future → the ban applies, and doći is perfective → the present.",
        },
        {
          prompt: "»Dok ___ ___ muzej, vidjet ćeš slike.« (razgledati, ti — muško)",
          options: ["budeš razgledao", "razgledaš", "ćeš razgledati"],
          correctIndex: 0,
          explanation: "razgledati is imperfective → Futur II. «Dok razgledaš» would report something happening now.",
        },
        {
          prompt: "»Pjesnik je ___ dvadeset godina, a onda je ___ jednu knjigu.« (pisati / napisati)",
          options: ["pisao … napisao", "napisao … pisao", "pisao … pisao"],
          correctIndex: 0,
          explanation: "The stretch first, the event second. Twenty years of writing, then one finished book.",
        },
      ],
    },
    {
      id: "s11",
      type: "match",
      prompt: "Match each verb to the future time clause it forces",
      pairs: [
        { a: "doći (svršeni)", b: "kad dođeš — the present" },
        { a: "razgledati (nesvršeni)", b: "dok budeš razgledao — Futur II" },
        { a: "napisati (svršeni)", b: "kad napiše — the present" },
        { a: "pisati (nesvršeni)", b: "dok bude pisao — Futur II" },
      ],
    },
    {
      id: "s12",
      type: "fill",
      text: "Kad ___ u muzej, vidjet ćeš njegovo prvo djelo. (doći, ti)",
      blanks: [["dođeš", "dodes"]],
      translation: "When you come to the museum, you'll see his first work.",
      explanation: "dođeš — perfective, so the present. The main clause keeps its Futur I.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Dok je ___ , radio je i kao učitelj. (pisati)",
      blanks: [["pisao"]],
      translation: "While he was writing, he also worked as a teacher.",
      explanation: "A past dok takes a past, and a career is a stretch — imperfective.",
    },
    {
      id: "s14",
      type: "fill",
      text: "Dok ___ ___ muzej, vidjet ćeš i njegove slike. (razgledati, ti — muško)",
      blanks: [["budeš"], ["razgledao"]],
      translation: "While you're looking round the museum, you'll also see his paintings.",
      explanation: "budeš razgledao — imperfective, so Futur II, with the participle agreeing.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Turn it forward: »Kad je došao u muzej, vidio je njegovo djelo.« → (when YOU come, you'll see)",
      answers: [
        "Kad dođeš u muzej, vidjet ćeš njegovo djelo.",
        "Kad dođeš u muzej, vidjet ćeš njegovo djelo",
      ],
      hint: "Same conjunction. The time clause takes the present, the main clause takes Futur I.",
      explanation: "Kad dođeš u muzej, vidjet ćeš njegovo djelo. Notice that only the tenses moved — the structure of the sentence is identical.",
    },
    {
      id: "s16",
      type: "type",
      prompt: "Turn it forward: »Dok je razgledao, vidio je slike.« → (while YOU look round, you'll see)",
      answers: [
        "Dok budeš razgledao, vidjet ćeš slike.",
        "Dok budeš razgledao, vidjet ćeš slike",
        "Dok budeš razgledala, vidjet ćeš slike.",
      ],
      hint: "razgledati is imperfective, so the future clause needs Futur II.",
      explanation: "Dok budeš razgledao, vidjet ćeš slike. The past used a plain past; the future needs budem + the participle.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo.",
      answers: ["Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo.", "Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo"],
      allowSlow: true,
      explanation: "A museum label in one sentence.",
    },
    {
      id: "s18",
      type: "listen-type",
      tts: "Dok je pisao, radio je i kao učitelj.",
      answers: ["Dok je pisao, radio je i kao učitelj.", "Dok je pisao, radio je i kao učitelj"],
      allowSlow: true,
      explanation: "Past dok, past main clause, both imperfective — two stretches running together.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Kad je bio mlad, pisac je radio kao učitelj.",
      targetEn: "When he was young, the writer worked as a teacher.",
      phonetic: "kad ye bee-o mlad, PEE-sats ye RA-dee-o kao oo-CHEE-tel",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je pisac ___ je živio u ovom gradu.«",
      options: ["koji", "kojeg", "kojem"],
      correctIndex: 0,
      explanation: "koji — he is the subject of živio, so nominative. Biography is where relative clauses earn their keep.",
      tts: "To je pisac koji je živio u ovom gradu.",
    },
    {
      id: "s21",
      type: "mc",
      review: true,
      prompt: "Why does this lesson never name a real Croatian writer?",
      options: [
        "Because it's a grammar lesson, and you couldn't tell an invented date from a real one.",
        "Because Croatian writers are B2 material.",
        "Because names don't decline.",
      ],
      correctIndex: 0,
      explanation: "The biography is scaffolding for the tenses. Attaching plausible-sounding facts to a real person would teach you nothing about Croatian and might teach you something false about Croatia.",
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**A life is a stack of time clauses. So is a plan.** The conjunctions are the same; only the direction changes.\n\n**⬅️ Pointing back — entirely ordinary.**\n*Kad je **bio** mlad, **živio** je u Zagrebu.* · *Dok je **pisao**, **radio** je i kao učitelj.*\nA past `kad` takes a past. Nothing is banned, and the aspects follow L1's fork: stretches imperfective, events perfective.\n\n**➡️ Pointing forward — the unit's rule.**\n*Kad **dođeš** u muzej, **vidjet ćeš** njegovo djelo.* · *Dok **budeš razgledao**, **vidjet ćeš** slike.*\nNo Futur I in the clause, and the aspect picks between the present and Futur II.\n\n**🔁 And the line worth keeping:**\n\n> **In the past, aspect only describes. In the future, the same aspect chooses the tense.**\n\nThat is why L1 came before L2, and it is the whole architecture of the unit in one sentence.\n\nTomorrow: everything on one card, the wall of ten traps, and the single sentence that breaks every rule on it — legally.",
      vocabIds: [
        "b1u22.umjetnost", "b1u22.umjetnik", "b1u22.slikar", "b1u22.pisac",
        "b1u22.pjesnik", "b1u22.djelo", "b1u22.naslijede", "b1u22.sloboda",
      ],
    },
  ],
  srsCloze: [
    { front: "Kad je ___ mlad, živio je u Zagrebu. (biti)", answers: ["bio"], back: "bio — a past kad takes a past. This unit's rule only applies forwards.", tts: "Kad je bio mlad, živio je u Zagrebu." },
    { front: "Kad ___ u muzej, vidjet ćeš djelo. (doći, ti)", answers: ["dođeš", "dodes"], back: "dođeš — future, perfective, so the present. No Futur I in the clause.", tts: "Kad dođeš u muzej, vidjet ćeš njegovo prvo djelo." },
    { front: "Dok ___ ___ muzej, vidjet ćeš slike. (razgledati, ti — muško)", answers: ["budeš razgledao", "budes razgledao"], back: "budeš razgledao — imperfective, so Futur II.", tts: "Dok budeš razgledao muzej, vidjet ćeš i njegove slike." },
    { front: "In the past aspect ___ ; in the future the same aspect ___ .", answers: ["describes, chooses the tense", "describes, chooses", "only describes, chooses the tense"], back: "In the past it only describes. In the future it chooses the tense. That is the whole architecture of the unit.", tts: "Dok je pisao, radio je kao učitelj. Dok bude pisao, neće imati vremena." },
    { front: "Pjesnik je ___ dvadeset godina, a onda je ___ jednu knjigu. (pisati / napisati)", answers: ["pisao, napisao", "pisao napisao"], back: "pisao … napisao — the stretch, then the event.", tts: "Pisao je dvadeset godina, a onda je napisao jednu knjigu." },
    { front: "art = ___", answers: ["umjetnost"], back: "umjetnost (f, i-declension) — GEN umjetnosti.", tts: "Volim umjetnost." },
    { front: "writer = ___ (GEN ___ )", answers: ["pisac, pisca", "pisac"], back: "pisac — GEN pisca, with a fleeting a.", tts: "Pisac je radio i kao učitelj." },
    { front: "a work (a book, a painting, a building) = ___", answers: ["djelo"], back: "djelo (n) — To je njegovo prvo djelo.", tts: "To je njegovo prvo djelo." },
    { front: "heritage = ___", answers: ["naslijeđe", "naslijede"], back: "naslijeđe (n) — kulturno naslijeđe.", tts: "To je naše kulturno naslijeđe." },
    { front: "freedom = ___", answers: ["sloboda"], back: "sloboda (f) — Pisao je o slobodi.", tts: "Pisao je o slobodi." },
  ],
  notes: {
    inOneSentence: {
      en: "A biography and a plan are the same stack of time clauses pointed in opposite directions — backwards everything is an ordinary past, forwards the ban and the aspect fork take over.",
      exampleHr: "Pisac je živio u ovom gradu, a kad dođeš u muzej, vidjet ćeš njegovo prvo djelo.",
    },
    deepDive: [
      {
        title: "Backwards: nothing is banned",
        body:
          "A past time clause takes an ordinary past tense in both halves, and nothing about this unit applies to it:\n\n*Kad je **bio** mlad, **živio** je u Zagrebu.*\n*Dok je **pisao**, **radio** je i kao učitelj.*\n*Kad je **završio** školu, **počeo** je pisati.*\n\nWhat *does* apply is L1's aspect fork, and biography is the ideal place to see it because a life alternates constantly between the two:\n\n| rečenica | vrsta | zašto |\n|---|---|---|\n| Kad je **bio** mlad | nesvršeni | being young is a stretch |\n| Kad je **završio** školu | svršeni | finishing is one event |\n| Dok je **pisao** | nesvršeni | a career is a stretch |\n| **Napisao** je prvo djelo | svršeni | one book, finished |\n\nThe pair worth staring at is ***pisao*** and ***napisao***. Same verb, two aspects, and a biography needs both in the same paragraph: *Pisao je dvadeset godina* is the career; *Napisao je jednu knjigu* is what came out of it. Neither sentence can do the other's job.",
      },
      {
        title: "Forwards: the unit's rule, unchanged",
        body:
          "Turn the same life towards the reader and every clause pointing at the future obeys L2 and L3:\n\n*Kad **dođeš** u muzej, **vidjet ćeš** njegovo prvo djelo.*\n*Čim **dođeš**, **vidjet ćeš** njegov kip.*\n*Dok **budeš razgledao** muzej, **vidjet ćeš** i njegove slike.*\n\n**No Futur I in the time clause. Aspect picks between the present and Futur II.** Nothing new — this lesson only gives it somewhere natural to live.\n\n**And the reason it is worth a lesson is that real writing does both at once.** A museum label, a guidebook paragraph, a plaque on a wall — all of them tell you what happened and then tell you what you will see:\n\n> *Pisac je **živio** u ovom gradu. Kad je **bio** mlad, **radio** je kao učitelj. **Napisao** je svoje prvo djelo poslije rata.*\n> *— **Kad dođete** u muzej, **vidjet ćete** to djelo. **Dok budete razgledali**, **vidjet ćete** i njegove slike.*\n\nSix sentences, two directions, and the conjunctions — *kad*, *dok* — never change. Only what the clause is allowed to contain does.",
        table: {
          caption: "The same paragraph, both ways",
          headers: ["smjer", "vremenska rečenica", "glavna rečenica"],
          rows: [
            ["⬅️ prošlost", "Kad je **bio** mlad,", "**živio** je u Zagrebu."],
            ["⬅️ prošlost", "Dok je **pisao**,", "**radio** je kao učitelj."],
            ["➡️ budućnost", "Kad **dođeš**,", "**vidjet ćeš** djelo."],
            ["➡️ budućnost", "Dok **budeš razgledao**,", "**vidjet ćeš** slike."],
          ],
        },
      },
      {
        title: "One verb, both directions — the line worth keeping",
        body:
          "Run a single verb through both and the architecture of the whole unit becomes visible:\n\n| glagol | vrsta | u prošlosti | u budućnosti |\n|---|---|---|---|\n| **pisati** | nesvršeni | dok je **pisao** | dok **bude pisao** |\n| **napisati** | svršeni | kad je **napisao** | kad **napiše** |\n| **doći** | svršeni | kad je **došao** | kad **dođe** |\n| **razgledati** | nesvršeni | dok je **razgledao** | dok **bude razgledao** |\n| **čekati** | nesvršeni | dok je **čekao** | dok **bude čekao** |\n\nLook down the two right-hand columns. In the **past** column, the aspect makes no difference to the *tense* — everything is a perfekt, and the aspect only tells you whether it was a stretch or an event. In the **future** column, the aspect **is** the tense: perfective gets a present, imperfective gets a Futur II.\n\n> ### In the past, aspect only describes. In the future, the same aspect chooses.\n\nThat single line is the reason this unit opened with a lesson entirely in the past. L1 was not a detour; it was the prerequisite.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "U17: aspect exists", emoji: "🔎", example: "pisati ‖ napisati" },
            { label: "L1: aspect describes the past", emoji: "⬅️", example: "pisao je ‖ napisao je" },
            { label: "L2–L3: aspect chooses the future tense", emoji: "➡️", example: "bude pisao ‖ napiše" },
            { label: "L4: both in one paragraph", emoji: "🔁", example: "a museum label" },
          ],
        },
      },
      {
        title: "Why nobody here has a name",
        body:
          "Every figure in this lesson is *a writer*, *a painter*, *a poet*, *he*. No real Croatian person is named, and no dates are given beyond the century.\n\nThat is deliberate, and it is worth saying why, because a language course about culture is exactly the place where invented facts do damage.\n\n**A learner cannot tell an invented date from a real one.** If a lesson says a named poet was born in a particular year and wrote a particular book, a learner will remember it — and if it is wrong, the course has taught them something false about a country they are trying to enter. The grammatical benefit of using a real name over *pisac* is precisely zero.\n\nSo the biography here is **scaffolding**: enough shape for the time clauses to hang on, and no more. If you want the real people, they are worth reading about properly — and by the end of this unit you will be able to read a museum label in Croatian, which is a better way to meet them than through a grammar exercise.\n\nThe same principle governs **kulturno naslijeđe** as a phrase: it is carded because it is genuinely useful and appears on signs everywhere, not because the unit is making claims about what belongs in it.",
      },
    ],
    commonMistakes: [
      { wrong: "Kad je bio mlad, živi je u Zagrebu.", right: "Kad je bio mlad, **živio je** u Zagrebu.", why: "A past kad takes a past in both halves. This unit's rule does not apply backwards." },
      { wrong: "Kad ćeš doći u muzej, vidjet ćeš djelo.", right: "**Kad dođeš** u muzej, vidjet ćeš djelo.", why: "The ban. It applies in biography exactly as it applies anywhere else." },
      { wrong: "Dok je pisao, napisao je jednu knjigu. (meaning: over his career)", right: "**Pisao je** dvadeset godina, a onda je **napisao** jednu knjigu.", why: "Two perfectives cannot describe a stretch. The career is imperfective; the book is the event that came out of it." },
      { wrong: "Dok razgledaš muzej, vidjet ćeš slike.", right: "Dok **budeš razgledao** muzej, vidjet ćeš slike.", why: "A bare present with an imperfective verb reports something happening now. A future stretch needs Futur II." },
      { wrong: "To je njegovo najpoznatije djelo.", right: "To je njegovo **prvo** djelo.", why: "Superlatives are B2. «Prvo» carries the same weight in a museum label and is entirely owned." },
      { wrong: "Njegovo djelo je napisano poslije rata.", right: "**Napisao je** svoje djelo poslije rata.", why: "The participial passive is B2. History and biography writing are full of it, which is exactly why the guard matters here." },
    ],
    memoryHooks: [
      "**A life and a plan are the same stack of clauses.** One points back, one points forward, and the conjunctions never notice.",
      "**In the past, aspect describes. In the future, aspect chooses.** One line, and it explains why L1 came first.",
      "**pisao ‖ napisao — the career and the book.** Every biography needs both, in that order.",
      "**A museum label does both directions in four lines.** Once you can read one, you can write one.",
      "**«prvo djelo», never «najpoznatije».** Superlatives are a level away, and «first» is more informative anyway.",
    ],
    connects: [
      { label: "Aspect in past narration", lessonId: "b1u22l1" },
      { label: "The ban and the fork", lessonId: "b1u22l2" },
      { label: "čim, dok ne, and the ako split", lessonId: "b1u22l3" },
      { label: "Next: the card, the wall, and the one exception", lessonId: "b1u22l5" },
    ],
    selfCheck: [
      { q: "»Kad je bio mlad, ___ u Zagrebu.« (živjeti)", a: "živio je — a past kad takes a past, and the unit's rule doesn't apply backwards." },
      { q: "»Dok ___ ___ muzej, vidjet ćeš slike.« (razgledati, ti)", a: "budeš razgledao / razgledala — imperfective, so Futur II." },
      { q: "What's the difference between «Pisao je dvadeset godina» and «Napisao je jednu knjigu»?", a: "The first is the career — a stretch, imperfective. The second is the book that came out of it — an event, perfective. A biography needs both." },
      { q: "What does aspect do in the past that it doesn't do in the future — and vice versa?", a: "In the past it only describes whether something was a stretch or an event. In the future it chooses the tense: present for perfective, Futur II for imperfective." },
      { q: "Why doesn't this lesson name any real Croatian writers?", a: "It's a grammar lesson, and a learner can't tell an invented date from a real one. The biography is scaffolding; using a real name would add nothing grammatically and could teach something false." },
    ],
  },
};
