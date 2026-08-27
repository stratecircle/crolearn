import type { Lesson } from "@/types/content";

/**
 * B1 U19 L3 — Grad u kojem živim (koji in the locative & dative — prepositions in front)
 * Spec: curriculum/B1/unit-19.md · grammar-reference §17 (habit 2) + §14 prepositions
 * by case + §4 definite adjectives (novom / novoj / novima).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * L1 fixed question 2's answer at "subject → nominative". L2 let it move to the
 * accusative and genitive, where the *verb* chose. Here a third party chooses:
 * the **preposition**. And because English strands its prepositions at the end
 * of the clause while Croatian cannot, this is the lesson where the learner's
 * first language actively fights them. The whole lesson is built around one
 * physical move — find the English preposition, pick it up, put it in FRONT of
 * koji — after which the ending follows automatically from §14.
 *
 * `o` (+ LOC) is carded here for the first time in the entire course. It gets a
 * full card with its three collocations (govoriti o, misliti o, knjiga o), not a
 * mention inside a grammar slide, and its arrival retroactively unlocks phrasing
 * that U17 and U18 both had to route around.
 *
 * Level-compliance pass 2026-07-29: all 8 headwords greped against the carded
 * dump — o, stav, tvrditi, država, svijet, promet, važan, jasan are all absent
 * (free). Support vocabulary verified carded: grad a1u2l1 · ulica a1u5l1 ·
 * živjeti a1u5l1 · govoriti a1u2l5 · pisati a1u8l2 · prijatelj a1u1l4 · stol
 * a2u10l5 · knjiga a1u6l3 · žena a1u1l2 · park a1u5l1 · škola a1u1l2 · ići
 * a1u5l3 · dati b1u17l2 · svaki dan (chunk). `problem` and `svi` are
 * uncarded-but-live (5 and 8 occurrences) — the spec's own free list. `raditi`
 * is uncarded as a headword but massively live (306 form occurrences).
 *
 * Deviation 1 logged: the spec asks the two reorder items to seed a *trailing
 * preposition* as a trap tile. `lessonContractIssues()` requires reorder `words`
 * to be an exact permutation of `answers[0]`, so a decoy tile is structurally
 * illegal. The stranding trap is instead carried by s08 item 2, s10, the s05
 * ❌/✅ table and both reorder explanations — the same lesson, enforced by the
 * validator rather than by a tile the learner must leave unused.
 *
 * Deviation 2 logged: the spec's TTS line *Nemam jasan stav o toj temi.* ships
 * as *Nemam jasan stav o prometu.* The demonstrative locative `toj` has **zero**
 * occurrences in src/content (taj is carded nowhere and appears twice, both
 * nominative), so `o toj temi` would smuggle an untaught demonstrative
 * declension into the one lesson whose job is the locative. `o prometu` teaches
 * the same frame using a word this lesson cards.
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U19 cut-outs exist. `o` is one of the seven
 * function words that stay icon-only.
 */
export const b1u19l3: Lesson = {
  id: "b1u19l3",
  unitId: "b1u19",
  title: "Grad u kojem živim",
  titleEn: "The city I live in — koji in the locative & dative",
  grammarTags: ["relative-koji", "locative", "dative", "prepositions"],
  estMinutes: 23,
  vocab: [
    { id: "b1u19.o", hr: "o", en: "about (+ LOC) — govoriti o, misliti o, knjiga o", pos: "prep", icon: "💬", exampleHr: "Svi govore o prometu.", exampleEn: "Everyone is talking about the traffic." },
    { id: "b1u19.stav", hr: "stav", en: "stance / position / attitude — imati jasan stav", pos: "noun", gender: "m", icon: "🧍", exampleHr: "Imam jasan stav o prometu.", exampleEn: "I have a clear position on the traffic." },
    { id: "b1u19.tvrditi", hr: "tvrditi", en: "to claim / to assert (tvrdim) — stronger than smatrati", pos: "verb", icon: "📢", exampleHr: "Tvrdim da je to istina.", exampleEn: "I claim that's true." },
    { id: "b1u19.drzava", hr: "država", en: "state / country — the political unit, beside zemlja", pos: "noun", gender: "f", icon: "🏛️", exampleHr: "Hrvatska je mala država.", exampleEn: "Croatia is a small country." },
    { id: "b1u19.svijet", hr: "svijet", en: "world (LOC svijetu)", pos: "noun", gender: "m", icon: "🌍", exampleHr: "To je najbolji grad na svijetu.", exampleEn: "That's the best city in the world." },
    { id: "b1u19.promet", hr: "promet", en: "traffic", pos: "noun", gender: "m", icon: "🚦", exampleHr: "Promet je velik problem.", exampleEn: "Traffic is a big problem." },
    { id: "b1u19.vazan", hr: "važan", en: "important (važna, važno — definite važni)", pos: "adj", icon: "⭐", exampleHr: "To je važna tema.", exampleEn: "That's an important topic." },
    { id: "b1u19.jasan", hr: "jasan", en: "clear (jasna, jasno — the adverb jasno doubles as «clearly / of course»)", pos: "adj", icon: "🪟", exampleHr: "To je jasan odgovor.", exampleEn: "That's a clear answer." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Grad u kojem živim",
      subtitle: "«The city I live in.» Croatian will not let you end a sentence like that. The little word has to go to the front — and once it does, it tells you which ending to use.",
      emoji: "🚚",
      items: [
        { emoji: "🚚", label: "Prijedlog ide naprijed", hint: "never stranded" },
        { emoji: "📍", label: "Lokativ", hint: "kojem · kojoj · kojima" },
        { emoji: "✉️", label: "Dativ", hint: "same forms, no preposition" },
        { emoji: "🚶", label: "Idem u grad ‖ Živim u gradu", hint: "the U5 fork, still alive" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Prijedlog ide naprijed",
      subtitle: "In L2 the verb picked the case. Today a third party picks it — and it is standing in the wrong place in your head, at the end of the English sentence.",
      emoji: "🚚",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "L2 kojeg / koje · U5 u grad ‖ u gradu" },
        { emoji: "🃏", label: "New words", hint: "o, and what people argue about" },
        { emoji: "⚙️", label: "Three teach slides", hint: "the move · LOC/DAT · the fork" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's koji, and a rule from Unit 5",
      items: [
        {
          prompt: "L2: »Ovo je čovjek ___ poznajem.«",
          options: ["kojeg", "koji", "kojem"],
          correctIndex: 0,
          explanation: "Object of poznajem → accusative, and čovjek is animate, so the m sg accusative borrows the genitive form: kojeg.",
        },
        {
          prompt: "L2: »To je knjiga ___ se sjećam.«",
          options: ["koje", "koju", "kojoj"],
          correctIndex: 0,
          explanation: "sjećati se demands the genitive (U16), and knjiga is feminine → koje. Note kojoj sitting there as a decoy — that is today's form, and it needs a preposition or an indirect object to earn its place.",
        },
        {
          prompt: "U5: which pair is correct?",
          options: [
            "Idem u grad. ‖ Živim u gradu.",
            "Idem u gradu. ‖ Živim u grad.",
            "Idem u grad. ‖ Živim u grad.",
          ],
          correctIndex: 0,
          explanation: "Motion → accusative (u grad). Location → locative (u gradu). Same preposition, two cases, and the verb decides. Hold that — in fifteen slides it comes back wearing koji.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "About, and what people argue about",
      vocabIds: [
        "b1u19.o", "b1u19.stav", "b1u19.tvrditi", "b1u19.drzava",
        "b1u19.svijet", "b1u19.promet", "b1u19.vazan", "b1u19.jasan",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Riječ koja ne smije ostati na kraju 🚚",
      body:
        "English does something Croatian simply cannot do: it leaves the preposition dangling at the end.\n\n*the city I live **in*** · *the topic we're talking **about*** · *the table the book is **on***\n\nCroatian marches that preposition to the **front**, where it stands immediately before `koji`:\n\n*grad **u kojem** živim* · *tema **o kojoj** govorimo* · *stol **na kojem** je knjiga*\n\nAnd there is a bonus hiding in the move. Once the preposition is in front, **it** picks the case — you no longer have to work it out from the verb. *u* meaning location takes the locative, so `koji` goes locative. That is §14, unchanged, doing exactly what it has always done.\n\nTwo failures to avoid, and only the first one feels wrong to an English speaker:\n\n❌ *grad koji živim **u*** — stranded. Croatian has no such structure.\n❌ *grad koji živim* — the preposition simply deleted. This one sounds fine in your head and means nothing at all.\n\nSo: **find the English preposition, pick it up, put it in front.** Three moves, every time.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Start with the English", emoji: "🇬🇧", example: "the city I live IN" },
          { label: "Find the preposition — it is stranded at the end", emoji: "🔎", example: "the city I live · IN ←" },
          { label: "Pick it up and put it in FRONT of koji", emoji: "🚚", example: "grad U KOJEM živim" },
          { label: "The preposition now picks the case (§14): u + location → LOC", emoji: "🎯", example: "u kojem · u kojoj · u kojima" },
        ],
      },
      table: {
        caption: "English strands it · Croatian fronts it",
        headers: ["English", "❌ nikad", "✅ uvijek"],
        rows: [
          ["the city I live in", "grad koji živim u", "grad u kojem živim"],
          ["the topic we're talking about", "tema koju govorimo o", "tema o kojoj govorimo"],
          ["the table the book is on", "stol koji je knjiga na", "stol na kojem je knjiga"],
          ["the friend I write to", "prijatelj koji pišem", "prijatelj kojem pišem (DAT, no preposition)"],
        ],
      },
      examples: [
        { hr: "Grad u kojem živim je lijep.", en: "The city I live in is beautiful.", note: "The preposition u opens the relative clause, koji follows it in the locative: u kojem. English puts that u last; Croatian puts it first." },
        { hr: "To je tema o kojoj svi govore.", en: "That's the topic everyone is talking about.", note: "govoriti o — the collocation from today's o card. tema is feminine, so the feminine locative: kojoj." },
        { hr: "Promet je problem o kojem svi govore.", en: "Traffic is a problem everyone talks about.", note: "Same frame, masculine antecedent → kojem. Notice the ending on koji tracks the noun's gender, never the noun's own case." },
        { hr: "Ovo je stol na kojem je knjiga.", en: "This is the table the book is on.", note: "na for location → locative, exactly as in na stolu. The preposition never waits until the end." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "Lokativ i dativ — kojem, kojoj, kojima 📍",
      body:
        "The forms are almost embarrassingly few:\n\n**kojem** (m and n) · **kojoj** (f) · **kojima** (the whole plural, all three genders)\n\nThe longer masculine variants **kojemu / kojeme** exist and are equally correct; **kojem** is what you will hear. And, as always in this unit, these are just the definite adjective `nov` with *koj-* pasted on: novom → kojem, novoj → kojoj, novima → kojima. Nothing new was memorized today.\n\n**Locative** never appears without a preposition — that is the whole definition of the case. *u kojem* · *na kojem* · *o kojoj*.\n\n**Dative** uses the very same forms with **no** preposition, for the person something is given, written or said to: *prijatelj **kojem** pišem* · *žena **kojoj** sam dao knjigu*.\n\nSo when you see `kojem` standing bare, look left: if there is a preposition, it is locative; if there is none, it is dative. You never have to choose between them — the sentence has already chosen.\n\n⚠️ One warning about today's new word. **`o` takes a noun, never a clause.** *Mislim **o svijetu**.* ✅ · ~~*Mislim o da je to dobra ideja.*~~ ❌ — for a clause you want plain `da` from L1: *Mislim **da** je to dobra ideja.* ✅",
      table: {
        caption: "koji u lokativu i dativu",
        headers: ["rod / broj", "LOC = DAT", "s prijedlogom → lokativ", "bez prijedloga → dativ"],
        rows: [
          ["m sg", "kojem (kojemu)", "grad u kojem živim", "prijatelj kojem pišem"],
          ["f sg", "kojoj", "tema o kojoj govorimo", "žena kojoj sam dao knjigu"],
          ["n sg", "kojem (kojemu)", "pitanje o kojem govorimo", "selo kojem se sve to događa — rijetko"],
          ["množina — svi rodovi", "kojima", "ljudi o kojima govoriš", "ljudi kojima pišem"],
          ["usporedba: nov (§4)", "novom / novoj / novima", "isti nastavci", "koj- umjesto nov-"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "info",
        title: "Prijedlog bira padež — the preposition picks the case",
        text: "**u / na** (location, *gdje?*) + koji → **LOC**: *grad u kojem živim* · *stol na kojem je knjiga*\n**o** (about) + koji → **LOC**, always: *tema o kojoj govorimo*\n**u / na** (motion, *kamo?*) + koji → **ACC**: *grad u koji idem*\n**s / sa** (with) + koji → **INS**: *ljudi s kojima radim* — that one is L4\n**bez / protiv** + koji → **GEN**: *stvar bez koje ne mogu*\n\nNo preposition at all, and the verb wants an indirect object → **DAT**: *prijatelj kojem pišem*.",
      },
      examples: [
        { hr: "To je tema o kojoj svi govore.", en: "That's the topic everyone is talking about.", note: "o + LOC, feminine → kojoj. This is the single most useful relative clause in the whole unit — opinions are always about something." },
        { hr: "Imam prijatelja kojem svaki dan pišem.", en: "I have a friend I write to every day.", note: "Dative, no preposition: pisati wants an indirect object. And prijatelja is accusative — the L2 decoy again, still irrelevant." },
        { hr: "Ovo je žena kojoj sam dao knjigu.", en: "This is the woman I gave the book to.", note: "Dative feminine → kojoj, and the clitic sam sits in slot two, right behind it. English strands that «to»; Croatian has no room for it." },
        { hr: "Nemam jasan stav o prometu.", en: "I don't have a clear position on the traffic.", note: "Three of today's words at once — jasan, stav, promet — and o + LOC on a plain noun, which is where o lives." },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "Idem u grad ‖ Živim u gradu 🚶",
      body:
        "One preposition you have known since Unit 5 refuses to settle on a case, and it does not stop misbehaving just because `koji` arrived.\n\n*Idem **u grad**.* — motion, *kamo?* → **accusative**\n*Živim **u gradu**.* — location, *gdje?* → **locative**\n\nPut a relative clause around each and the fork survives intact:\n\n*Grad **u koji** idem je Split.* — the city I'm going **to**\n*Grad **u kojem** živim je lijep.* — the city I live **in**\n\nSame noun, same preposition, two different forms of `koji`, and **the verb inside the relative clause decides** — *idem* moves, *živim* sits still. Ask *kamo?* or *gdje?* about the relative clause and the answer falls out.\n\n`o` never has this problem. It is locative and only locative, in every sentence you will ever write.\n\nAnd one thing that has not changed since L1: the comma. When the clause tells you *which one*, there is no comma — *Grad u kojem živim je lijep.* A comma only when the thing is already identified and the clause just adds a remark — *Zagreb, u kojem živim, je velik grad.* Production defaults to no comma.",
      diagram: {
        kind: "contrast",
        left: {
          title: "u + ACC — kretanje",
          emoji: "🚶",
          caseId: "ACC",
          lines: [
            { hr: "Grad u koji idem je Split.", en: "The city I'm going to is Split. (kamo? — motion)" },
            { hr: "Ovo je škola u koju idem.", en: "This is the school I go to." },
          ],
        },
        right: {
          title: "u + LOC — mjesto",
          emoji: "📍",
          caseId: "LOC",
          lines: [
            { hr: "Grad u kojem živim je lijep.", en: "The city I live in is beautiful. (gdje? — location)" },
            { hr: "Ovo je škola u kojoj radim.", en: "This is the school I work at." },
          ],
        },
      },
      table: {
        caption: "isti prijedlog, dva padeža — glagol odlučuje",
        headers: ["glagol u odnosnoj rečenici", "pitanje", "padež", "primjer"],
        rows: [
          ["ići, putovati, doći", "kamo?", "ACC", "grad u koji idem"],
          ["živjeti, raditi, biti", "gdje?", "LOC", "grad u kojem živim"],
          ["govoriti, misliti, pisati + o", "—", "LOC uvijek", "tema o kojoj govorimo"],
          ["pisati, dati (komu?)", "—", "DAT, bez prijedloga", "prijatelj kojem pišem"],
        ],
      },
      examples: [
        { hr: "Grad u koji idem je Split.", en: "The city I'm going to is Split.", note: "idem is motion → accusative. Feminine would be u koju: škola u koju idem." },
        { hr: "Država u kojoj živim je mala.", en: "The country I live in is small.", note: "država is feminine, and živjeti sits still → feminine locative kojoj." },
        { hr: "To je najbolji grad na svijetu.", en: "That's the best city in the world.", note: "na svijetu — the locative of svijet, and a fixed collocation worth learning whole. No koji here; just the word in its natural home." },
        { hr: "Tvrdim da je promet najveći problem u gradu.", en: "I claim traffic is the biggest problem in the city.", note: "tvrditi is smatrati with the volume up, and it takes the same L1 da-frame. Note the clitic je in slot two of the da-clause." },
      ],
    },
    {
      id: "s08",
      type: "quiz-set",
      title: "Quick check: where does the preposition go, and what does it do?",
      items: [
        {
          prompt: "»Grad ___ živim je lijep.« (The city I live in is beautiful.)",
          options: ["u kojem", "koji … u", "u koji"],
          correctIndex: 0,
          explanation: "The preposition goes in front, and u for location takes the locative: u kojem. Croatian cannot strand it at the end the way English does.",
        },
        {
          prompt: "Which sentence is impossible in Croatian?",
          options: [
            "Grad koji živim u je lijep.",
            "Grad u kojem živim je lijep.",
            "Zagreb je grad u kojem živim.",
          ],
          correctIndex: 0,
          explanation: "A stranded preposition. Croatian has no structure that ends a relative clause with u — the preposition has to stand in front of koji.",
        },
        {
          prompt: "»To je tema ___ svi govore.« (That's the topic everyone is talking about.)",
          options: ["o kojoj", "o kojem", "koju"],
          correctIndex: 0,
          explanation: "govoriti o + LOC, and tema is feminine → kojoj. koju would be accusative, which nothing in this sentence asks for.",
        },
        {
          prompt: "»Grad ___ idem je Split.« (The city I'm going to is Split.)",
          options: ["u koji", "u kojem", "kojem"],
          correctIndex: 0,
          explanation: "idem is motion — kamo? — so u takes the accusative, and grad is inanimate, so the accusative is unchanged: u koji. The U5 fork, now riding koji.",
        },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Vježba",
      subtitle: "Every item below needs two decisions: where the preposition goes, and which ending it then demands. Neither one can be copied from the noun in front.",
      emoji: "🧩",
      items: [
        { emoji: "🎯", label: "Choose the form", hint: "mc ×2 · match" },
        { emoji: "✏️", label: "Fills", hint: "u kojem · o kojoj · DAT · na kojem" },
        { emoji: "🧱", label: "Build it", hint: "reorder ×2 · type ×2" },
      ],
    },
    {
      id: "s10",
      type: "mc",
      prompt: "»Ovo je škola ___ radim.« (This is the school I work at.)",
      options: ["u kojoj", "u koju", "kojoj"],
      correctIndex: 0,
      explanation: "raditi sits still — gdje? — so u takes the locative, and škola is feminine → u kojoj. u koju would mean you are walking into the building right now.",
    },
    {
      id: "s11",
      type: "mc",
      prompt: "»Imam prijatelja ___ svaki dan pišem.« (I have a friend I write to every day.)",
      options: ["kojem", "o kojem", "kojeg"],
      correctIndex: 0,
      explanation: "Dative, and dative takes no preposition — pisati komu? → kojem. Note that prijatelja is accusative (object of imam); as always, that ending has nothing to say about koji.",
    },
    {
      id: "s12",
      type: "match",
      prompt: "Match each phrase to what put koji in that case",
      pairs: [
        { a: "grad u kojem živim", b: "u + mjesto → lokativ" },
        { a: "grad u koji idem", b: "u + kretanje → akuzativ" },
        { a: "tema o kojoj govorimo", b: "o → lokativ, uvijek" },
        { a: "prijatelj kojem pišem", b: "bez prijedloga, neizravni objekt → dativ" },
        { a: "čovjek kojeg poznajem", b: "izravni objekt, živo → akuzativ (L2)" },
      ],
    },
    {
      id: "s13",
      type: "fill",
      text: "Grad ___ živim je lijep.",
      blanks: [["u kojem", "u kojemu"]],
      translation: "The city I live in is beautiful.",
      wordBank: ["u kojem", "u koji", "koji"],
      explanation: "The preposition goes in front, and u for location takes the locative: u kojem.",
    },
    {
      id: "s14",
      type: "fill",
      text: "To je tema ___ svi govore.",
      blanks: [["o kojoj"]],
      translation: "That's the topic everyone is talking about.",
      wordBank: ["o kojoj", "o kojem", "koju"],
      explanation: "govoriti o + LOC; tema is feminine → o kojoj.",
    },
    {
      id: "s15",
      type: "fill",
      text: "Imam prijatelja ___ svaki dan pišem.",
      blanks: [["kojem", "kojemu"]],
      translation: "I have a friend I write to every day.",
      wordBank: ["kojem", "o kojem", "kojeg"],
      explanation: "Dative — pisati takes an indirect object and no preposition. The -a on prijatelja is the standing decoy.",
    },
    {
      id: "s16",
      type: "fill",
      text: "Ovo je stol ___ je knjiga.",
      blanks: [["na kojem", "na kojemu"]],
      translation: "This is the table the book is on.",
      wordBank: ["na kojem", "na koji", "koji"],
      explanation: "na for location → locative, exactly as in na stolu. English ends the sentence with «on»; Croatian starts the clause with it.",
    },
    {
      id: "s17",
      type: "reorder",
      words: ["Grad", "u", "kojem", "živim", "je", "lijep"],
      answers: ["Grad u kojem živim je lijep"],
      en: "The city I live in is beautiful.",
      explanation: "u and kojem travel together, and they travel to the FRONT of the relative clause. ✗ Grad kojem živim u je lijep — there is no such sentence in Croatian.",
    },
    {
      id: "s18",
      type: "reorder",
      words: ["To", "je", "tema", "o", "kojoj", "svi", "govore"],
      answers: ["To je tema o kojoj govore svi", "To je tema o kojoj svi govore"],
      en: "That's the topic everyone is talking about.",
      explanation: "o kojoj opens the relative clause as one unit. ✗ tema kojoj svi govore o — the preposition can never be left behind.",
    },
    {
      id: "s19",
      type: "type",
      prompt: "»The city I live in is beautiful.« (in Croatian)",
      answers: [
        "Grad u kojem živim je lijep.",
        "Grad u kojem živim je lijep",
        "Grad u kojem zivim je lijep.",
        "Grad u kojem zivim je lijep",
        "Grad u kojemu živim je lijep.",
        "Grad u kojemu živim je lijep",
      ],
      hint: "the English preposition is at the end — move it",
      explanation: "Grad u kojem živim je lijep. — pick «in» up off the end of the English and set it down in front of koji, then let it choose the locative.",
    },
    {
      id: "s20",
      type: "type",
      prompt: "»That's the topic everyone is talking about.« (in Croatian)",
      answers: [
        "To je tema o kojoj svi govore.",
        "To je tema o kojoj svi govore",
        "To je tema o kojoj govore svi.",
        "To je tema o kojoj govore svi",
      ],
      hint: "govoriti takes o, and tema is feminine",
      explanation: "To je tema o kojoj svi govore. — o is locative and only locative, so the feminine locative kojoj, with o standing in front of it.",
    },
    {
      id: "s21",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "Two dictations where the preposition arrives before you expect it, then say something true about where you live.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "u kojem · o kojoj" },
        { emoji: "🎤", label: "Your city, your topic", hint: "two relative clauses" },
        { emoji: "🔗", label: "Flashbacks", hint: "U5 · U13 · U18" },
      ],
    },
    {
      id: "s22",
      type: "listen-type",
      tts: "Grad u kojem živim je lijep.",
      explanation: "Grad u kojem živim je lijep. — The city I live in is beautiful. Listen for u arriving early: u kojem, one breath, before the verb.",
    },
    {
      id: "s23",
      type: "listen-type",
      tts: "To je tema o kojoj svi govore.",
      explanation: "To je tema o kojoj svi govore. — That's the topic everyone is talking about. o kojoj comes as a single unit; nothing is left at the end.",
    },
    {
      id: "s24",
      type: "speak",
      targetHr: "Grad u kojem živim je lijep. Promet je tema o kojoj svi govore.",
      targetEn: "your city and one thing people argue about — The city I live in is beautiful. Traffic is the topic everyone is talking about.",
      phonetic: "grahd oo KOY-em ZHEE-veem yeh LYEP. PROH-met yeh TEH-mah o KOY-oy svee GOH-vo-reh",
    },
    {
      id: "s25",
      type: "quiz-set",
      review: true,
      title: "Flashbacks: old rules with a preposition on the front",
      items: [
        {
          prompt: "U5 again, one level down: »Ovo je škola ___ idem.«",
          options: ["u koju", "u kojoj", "koju"],
          correctIndex: 0,
          explanation: "ići is motion → accusative, and škola is feminine → u koju. Swap idem for radim and the answer becomes u kojoj.",
        },
        {
          prompt: "U13: »Država ___ živim je mala.«",
          options: ["u kojoj", "u koju", "kojoj"],
          correctIndex: 0,
          explanation: "država is feminine and živjeti sits still → u kojoj. The adjective mala agrees with država, not with koji — two separate agreements running side by side.",
        },
        {
          prompt: "Listen — is the speaker stating a position or moving somewhere?",
          tts: "Nemam jasan stav o prometu.",
          options: ["stating a position", "moving somewhere", "asking a question"],
          correctIndex: 0,
          explanation: "Nemam jasan stav o prometu. — I don't have a clear position on the traffic. o is locative and never motion; and nemam still takes the genitive it has taken since U7.",
        },
      ],
    },
    {
      id: "s26",
      type: "recap",
      summary:
        "**The move.** Find the English preposition sitting at the end, pick it up, put it in **front** of koji. *the city I live **in*** → *grad **u kojem** živim*. Never ~~grad koji živim u~~, and never ~~grad koji živim~~ with the preposition simply deleted.\n\n**The forms** are three: **kojem** (m/n) · **kojoj** (f) · **kojima** (the entire plural). They are *novom / novoj / novima* with koj- on the front — §4, borrowed whole.\n\n**Locative** always has a preposition standing in front of it (*u kojem*, *na kojem*, *o kojoj*). **Dative** has the same forms with **no** preposition, for the person you write, give or say something to (*prijatelj kojem pišem*). You never choose between them — look left, and the sentence has already chosen.\n\n**The fork survives.** *Grad **u koji** idem* (kamo? → ACC) ‖ *Grad **u kojem** živim* (gdje? → LOC). The verb inside the relative clause decides, exactly as it has since Unit 5.\n\n**o** is finally yours, and it is locative in every sentence you will ever write: *govoriti **o***, *misliti **o***, *knjiga **o***. It takes a **noun**, never a clause — for a clause you still want plain `da`.\n\nWords tonight: o, stav, tvrditi, država, svijet, promet, važan, jasan.\n\nNext: the last case, and a gift — in the plural, three of them turn out to be the same word.",
      vocabIds: [
        "b1u19.o", "b1u19.stav", "b1u19.tvrditi", "b1u19.drzava",
        "b1u19.svijet", "b1u19.promet", "b1u19.vazan", "b1u19.jasan",
      ],
    },
  ],
  srsCloze: [
    { front: "Grad ___ živim je lijep. (the city I live IN)", answers: ["u kojem", "u kojemu"], back: "u kojem — the preposition goes in FRONT, and u for location takes the locative.", tts: "Grad u kojem živim je lijep." },
    { front: "To je tema ___ svi govore. (the topic everyone talks ABOUT)", answers: ["o kojoj"], back: "o kojoj — o is always locative, and tema is feminine.", tts: "To je tema o kojoj svi govore." },
    { front: "❌ grad koji živim u → ✅ ___", answers: ["grad u kojem živim", "grad u kojemu živim", "grad u kojem zivim"], back: "grad u kojem živim — Croatian never strands a preposition at the end of a relative clause.", tts: "Grad u kojem živim je lijep." },
    { front: "o + ___ (which case?)", answers: ["lokativ", "LOC", "locative"], back: "Locative, always — govoriti o prometu, misliti o svijetu, knjiga o Hrvatskoj.", tts: "Svi govore o prometu." },
    { front: "koji, ženski rod, lokativ → ___", answers: ["kojoj"], back: "kojoj — the same shape as novoj. Tema o kojoj govorimo.", tts: "To je tema o kojoj govorimo." },
    { front: "Imam prijatelja ___ svaki dan pišem. (DAT — no preposition)", answers: ["kojem", "kojemu"], back: "kojem — dative for the person written to, and dative takes no preposition.", tts: "Imam prijatelja kojem svaki dan pišem." },
    { front: "množina, DAT = LOC → ___", answers: ["kojima"], back: "kojima — one form for all three genders, exactly like novima. Ljudi o kojima govoriš.", tts: "Ne poznajem ljude o kojima govoriš." },
    { front: "Grad ___ idem je Split. (motion — kamo?)", answers: ["u koji"], back: "u koji — motion takes the accusative, and grad is inanimate, so the form is unchanged.", tts: "Grad u koji idem je Split." },
    { front: "stance / position (m) = ___", answers: ["stav"], back: "stav (m) — imati jasan stav o nečemu. Nemam jasan stav o prometu.", tts: "Nemam jasan stav o prometu." },
    { front: "to claim / assert, 1sg → ___", answers: ["tvrdim"], back: "tvrdim — tvrditi, the loud version of smatrati. Tvrdim da je to istina.", tts: "Tvrdim da je to istina." },
    { front: "traffic = ___", answers: ["promet"], back: "promet (m) — Promet je problem o kojem svi govore.", tts: "Promet je problem o kojem svi govore." },
  ],
  notes: {
    inOneSentence: {
      en: "Croatian never leaves a preposition stranded at the end of a relative clause — it stands in front of koji, and it is the preposition (not the verb) that then picks the case: u/na for location and o always give the locative kojem / kojoj / kojima, while the same forms without any preposition are the dative.",
      exampleHr: "Grad u kojem živim ima problem o kojem svi govore.",
    },
    deepDive: [
      {
        title: "The move, and why English makes it hard",
        body:
          "English is unusual among European languages in letting a preposition sit at the end of its clause with nothing after it: *the city I live **in***, *the topic we're talking **about***, *the people I work **with***. Speakers of English do this so automatically that they do not experience the preposition as having moved at all — it simply lives there.\n\nCroatian has no such structure. The preposition is welded to the word it governs, and since `koji` opens the relative clause, the preposition opens it too, standing immediately in front:\n\n*grad **u kojem** živim* · *tema **o kojoj** govorimo* · *ljudi **s kojima** radim*\n\nThere are two failure modes, and they need separating because only one of them feels wrong:\n\n1. **Stranding** — ~~*grad koji živim u*~~. Learners produce this early and hear immediately that it is broken. Cheap to fix.\n2. **Deletion** — ~~*grad koji živim*~~. This one is dangerous. It is a well-formed Croatian sentence in shape, it sounds fluent, and it means something like «the city that I live» — which is nothing. Because nothing snags, learners keep producing it for months.\n\nThe drill that fixes both is the same three-step move, done consciously until it stops needing to be conscious: **find the preposition in the English, pick it up, put it in front.** Say the English sentence, physically point at the stranded word, then say the Croatian starting from it.\n\nAnd the move pays for itself. Once the preposition is in front, you no longer have to reason about the case from the verb — §14 has already decided. *u* location → LOC. *o* → LOC. *s* → INS. *bez* → GEN. The preposition is not an obstacle; it is the answer key.",
        table: {
          caption: "Three ways to say it — one of them is Croatian",
          headers: ["", "example", "verdict"],
          rows: [
            ["stranded", "grad koji živim u", "❌ no such structure — but at least it sounds wrong"],
            ["deleted", "grad koji živim", "❌ sounds fluent, means nothing — the dangerous one"],
            ["fronted", "grad u kojem živim", "✅ the only option"],
            ["English original", "the city I live in", "the preposition is at the end — that is the tell"],
          ],
        },
      },
      {
        title: "Locative, dative, and how to tell them apart without thinking",
        body:
          "The locative and dative of `koji` are **identical** in every cell:\n\n| | m sg | f sg | n sg | plural |\n|---|---|---|---|---|\n| DAT | kojem(u) | kojoj | kojem(u) | kojima |\n| LOC | kojem(u) | kojoj | kojem(u) | kojima |\n\nThis is not a coincidence to be memorized — the noun and adjective systems do the same thing (*novom* is both, *gradu* is both). Croatian has been quietly merging these two cases for centuries.\n\nSo you never have to *choose* between locative and dative. You only have to read what is standing to the left of `koji`:\n\n- **Preposition present** → locative. *grad **u kojem** živim* · *stol **na kojem** je knjiga* · *tema **o kojoj** govorimo*. The locative in Croatian cannot appear without one; that is the definition of the case, not a tendency.\n- **No preposition** → dative, and the verb wants an indirect object. *prijatelj **kojem** pišem* · *žena **kojoj** sam dao knjigu* · *ljudi **kojima** sve govorim*.\n\nThe verbs that produce a bare dative here are the small, well-worn set the learner already owns: **pisati** (write **to**), **dati** (give **to**), **reći** (say **to**), **govoriti** (speak **to**, when there is no *o*). Notice that English marks all four with «to» — and strands it. *the friend I write **to***. Same move as before, except that in Croatian the «to» disappears entirely rather than moving, because the dative ending is already doing that job.\n\nThe forms themselves cost nothing new. `koji` is the definite adjective `nov` with a different stem, and it has been since L1:\n\n*novom gradu* → *kojem* · *novoj temi* → *kojoj* · *novim**a*** *ljudima* → *kojima*",
        diagram: {
          kind: "bracket",
          groups: [
            { label: "s prijedlogom", rule: "→ lokativ", example: "grad u kojem živim · tema o kojoj govorimo", caseId: "LOC" },
            { label: "bez prijedloga", rule: "→ dativ (neizravni objekt)", example: "prijatelj kojem pišem · žena kojoj sam dao knjigu", caseId: "DAT" },
            { label: "isti oblici u oba slučaja", rule: "kojem · kojoj · kojima", example: "ne biraš — rečenica je već odabrala", caseId: "LOC" },
          ],
        },
      },
      {
        title: "o, and the sentence it cannot enter",
        body:
          "`o` is carded here for the first time in the entire course, which is later than it sounds — U17 and U18 both had to route around it, and the story of U18 deliberately wrote *studirao bih jezike* rather than *govorio bih o jezicima*. Opinion talk is built on it, so this is where it finally arrives.\n\nThree collocations carry almost all of its work:\n\n- **govoriti o** — *Svi govore o prometu.* (to talk **about**)\n- **misliti o** — *Mislim o svijetu.* (to think **about** — note that this is *ponder*, not *have an opinion*)\n- **knjiga o** — *knjiga o Hrvatskoj* (a book **about**)\n\nIt takes the locative and nothing else. There is no motion/location fork with `o`, no animacy fork, no second reading. Of all the prepositions in §14 it is the least trouble you will ever have.\n\nOne genuine trap, and it comes from the fact that English «about» happily takes a clause. **`o` takes a noun. It cannot take a clause.**\n\n~~*Mislim o da je to dobra ideja.*~~ ❌\n*Mislim **da** je to dobra ideja.* ✅ — plain `da` from L1, no preposition anywhere.\n\nAnd the near-miss worth naming, because both halves are correct Croatian and they mean different things:\n\n*Mislim **o** prometu.* — I am thinking about the traffic. (turning it over in my head)\n*Mislim **da** je promet problem.* — I think traffic is a problem. (I hold this opinion)\n\nThe first is a mental activity. The second is a claim. `misliti o` and `misliti da` are not variants of one another, and once you have both, *tvrditi da* — today's louder verb — slots straight into the second frame: *Tvrdim da je promet najveći problem u gradu.*",
        table: {
          caption: "o — three collocations, one case, one thing it cannot do",
          headers: ["frame", "example", "note"],
          rows: [
            ["govoriti o + LOC", "Svi govore o prometu.", "the workhorse — opinions are always about something"],
            ["misliti o + LOC", "Mislim o svijetu.", "ponder, turn over — NOT «I think that…»"],
            ["knjiga / tema / stav o + LOC", "Nemam jasan stav o prometu.", "any noun can be about something"],
            ["misliti DA + clause", "Mislim da je promet problem.", "the opinion frame from L1 — no o anywhere"],
            ["❌ o + clause", "Mislim o da je to dobra ideja.", "impossible — o governs nouns only"],
          ],
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Grad koji živim u je lijep.",
        right: "Grad u kojem živim je lijep.",
        why: "English strands its prepositions; Croatian cannot. u moves to the front, immediately before koji, and then hands koji the locative.",
      },
      {
        wrong: "Grad koji živim je lijep.",
        right: "Grad u kojem živim je lijep.",
        why: "The dangerous one — deleting the preposition instead of moving it. The sentence sounds fluent and means nothing.",
      },
      {
        wrong: "To je tema o koju svi govore.",
        right: "To je tema o kojoj svi govore.",
        why: "o is locative, never accusative. koju is the accusative form, and o has no use for it.",
      },
      {
        wrong: "Imam prijatelja o kojem svaki dan pišem.",
        right: "Imam prijatelja kojem svaki dan pišem.",
        why: "pisati komu? takes a bare dative — no preposition at all. o kojem would mean you write ABOUT him to somebody else.",
      },
      {
        wrong: "Mislim o da je to dobra ideja.",
        right: "Mislim da je to dobra ideja.",
        why: "o governs a noun, never a clause. For a clause you want plain da, exactly as in L1.",
      },
    ],
    memoryHooks: [
      "Find it, pick it up, put it in front. Three moves, and the preposition hands you the ending for free.",
      "If a preposition is standing to the left of koji, you are in the locative. If nothing is, you are in the dative. You never choose — the sentence chose.",
      "kojem · kojoj · kojima = novom · novoj · novima. Same endings since Unit 4; only the stem changed.",
      "kamo? → u koji. gdje? → u kojem. The verb inside the relative clause answers the question.",
      "o is the easy one: locative, always, forever — but it eats nouns, not clauses.",
    ],
    connects: [
      { label: "Where u + ACC ‖ u + LOC came from (Unit 5 L2)", lessonId: "a1u5l2" },
      { label: "The locative itself, first contact (Unit 5 L1)", lessonId: "a1u5l1" },
      { label: "Back to koji as object (Unit 19 L2)", lessonId: "b1u19l2" },
      { label: "Next: the instrumental, and the plural gift (Unit 19 L4)", lessonId: "b1u19l4" },
    ],
    selfCheck: [
      { q: "«The city I live in is beautiful» — where does the preposition go, and what does it do once it gets there?", a: "It goes in front of koji: Grad u kojem živim je lijep. And it picks the case — u for location takes the locative, so kojem." },
      { q: "Why is «grad koji živim» worse than «grad koji živim u», even though the second one sounds more obviously broken?", a: "Both are wrong, but the deleted version sounds fluent and means nothing, so nothing snags and learners keep producing it. The stranded version at least announces itself." },
      { q: "How do you tell locative from dative when the forms are identical?", a: "Look to the left of koji. A preposition means locative; no preposition means dative with an indirect object. The choice has already been made for you." },
      { q: "What is the difference between «Mislim o prometu» and «Mislim da je promet problem»?", a: "The first is a mental activity — I'm turning the traffic over in my head. The second is a claim — I hold that opinion. o + noun ≠ da + clause, and o can never take a clause at all." },
      { q: "Which form of koji goes with «Ovo je škola ___ idem», and why not the locative?", a: "u koju. ići is motion — kamo? — so u takes the accusative, and škola is feminine. Swap idem for radim and it becomes u kojoj." },
    ],
  },
};
