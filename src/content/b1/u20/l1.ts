import type { Lesson } from "@/types/content";

/**
 * B1 U20 L1 — Priroda oko nas (The se-passive with things)
 * Spec: curriculum/B1/unit-20.md · grammar-reference §18 "The se-constructions"
 * (new) + §12 clitic order.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * One install, and it is the whole unit: the **se-passive**, in which the doer
 * is deleted, `se` takes its place, and the object is promoted to SUBJECT — so
 * the verb agrees with it. *Ovdje se reciklira plastika.* ‖ *Ovdje se
 * recikliraju boce.* Every error the unit exists to prevent is that plural.
 *
 * The subjectless kind (*Kako se živi u Hrvatskoj?*) is L2's entire job and does
 * not leak in here — not once. This lesson always has a thing to agree with, so
 * the agreement can become automatic before the thing is taken away.
 *
 * `se` is the learner's oldest unexamined word (zovem se, a1u1). The lesson
 * opens by naming the species already owned — **lexical** `se`, welded to its
 * verb, deletable never, meaningful never — and sets the new grammatical one
 * beside it.
 *
 * Level-compliance pass: every content word greped against the 808-headword
 * carded list. Rejected and routed around: prodavati (0 — every "is sold"
 * example was rebuilt on reciklirati), graditi (0 — the no-agent rule is
 * demonstrated with čistiti/ulica instead of the usual house-and-builders),
 * pušiti (0), parkirati (0), također (0), okolina (0), cesta (2, both inside
 * b1u19's own rejection notice), gasiti (3, same). Deferred by unit: no
 * impersonal `se` (L2), no kaže se / smatra se (L3), no treba + inf (L4), no
 * participial passive — zagađen / zabranjeno / otvoren as predicates are B2 and
 * are the single most likely error here, no comparatives, no -nje as a
 * productive formation (recikliranje is carded as a plain noun).
 *
 * Images: vocab is authored icon-only; `image:` paths are injected by
 * scripts/wire_images.py once the U20 cut-outs exist.
 */
export const b1u20l1: Lesson = {
  id: "b1u20l1",
  unitId: "b1u20",
  title: "Priroda oko nas",
  titleEn: "The nature around us — the se-passive with things",
  grammarTags: ["se-passive", "agreement", "clitics", "environment"],
  estMinutes: 20,
  vocab: [
    { id: "b1u20.okolis", hr: "okoliš", en: "the environment (m; GEN okoliša — the surroundings taken as one thing, not «nature», which is priroda)", pos: "noun", gender: "m", icon: "🌍", exampleHr: "Okoliš je važan.", exampleEn: "The environment is important." },
    { id: "b1u20.otpad", hr: "otpad", en: "waste (m) — the category word; smeće is the rubbish in your kitchen bin", pos: "noun", gender: "m", icon: "🗑️", exampleHr: "Otpad je veliki problem.", exampleEn: "Waste is a big problem." },
    { id: "b1u20.reciklirati", hr: "reciklirati", en: "to recycle (recikliram, recikliraš) — one form does both aspects", pos: "verb", icon: "♻️", exampleHr: "Ovdje se reciklira plastika.", exampleEn: "Plastic is recycled here." },
    { id: "b1u20.recikliranje", hr: "recikliranje", en: "recycling (n) — the name of the activity", pos: "noun", gender: "n", icon: "🔄", exampleHr: "Recikliranje nije teško.", exampleEn: "Recycling isn't hard." },
    { id: "b1u20.plastika", hr: "plastika", en: "plastic (f)", pos: "noun", gender: "f", icon: "🧴", exampleHr: "Plastika se reciklira.", exampleEn: "Plastic is recycled." },
    { id: "b1u20.staklo", hr: "staklo", en: "glass (n; GEN stakla)", pos: "noun", gender: "n", icon: "🫙", exampleHr: "Staklo ide u drugu kantu.", exampleEn: "Glass goes in a different bin." },
    { id: "b1u20.papir", hr: "papir", en: "paper (m)", pos: "noun", gender: "m", icon: "📄", exampleHr: "Papir se reciklira.", exampleEn: "Paper is recycled." },
    { id: "b1u20.kanta", hr: "kanta", en: "bin (f) — kanta za smeće, the one in your kitchen", pos: "noun", gender: "f", icon: "🪣", exampleHr: "Gdje je kanta za smeće?", exampleEn: "Where's the rubbish bin?" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Priroda oko nas",
      subtitle: "Unit 20 opens by taking the person out of the sentence. You have said «zovem se» a hundred times without ever asking what «se» is doing there — it turns out to be three different words, and today you meet the second.",
      emoji: "🌍",
      items: [
        { emoji: "♻️", label: "se-pasiv", hint: "the doer disappears" },
        { emoji: "🎯", label: "The agreement", hint: "the thing is the subject" },
        { emoji: "🧲", label: "Second position", hint: "se is a clitic — §12 again" },
        { emoji: "🗑️", label: "New words", hint: "otpad, plastika, staklo…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The word that has been hiding",
      subtitle: "«Plastic is recycled here.» Nobody in that sentence is doing anything. Croatian has one word for exactly this — and you already own it.",
      emoji: "♻️",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "U12 clitics, U17 aspect, U19 koji" },
        { emoji: "🃏", label: "New words", hint: "the recycling eight" },
        { emoji: "⚙️", label: "Dropping the doer", hint: "three boxes, one deletion" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: you already own the rules",
      items: [
        {
          prompt: "U12 clitic train: »___ Ana u Zagrebu?« (is Ana in Zagreb?) — where can a clitic NEVER stand?",
          options: [
            "first — a clitic can never open its clause",
            "second — clitics avoid that slot",
            "last — clitics are never final",
          ],
          correctIndex: 0,
          explanation: "Never first. Today's new word is a clitic too, so this one rule tells you where it goes — you learn nothing new about its position.",
        },
        {
          prompt: "U17 aspect: which one describes a HABIT, something done again and again?",
          options: ["nesvršeni (imperfective) — kupujem", "svršeni (perfective) — kupim"],
          correctIndex: 0,
          explanation: "Imperfective. Remember that: today's sentences are all general statements about what usually happens, so they will be imperfective almost without exception.",
        },
        {
          prompt: "U19: »Ovo je grad ___ volim.« (this is the city I love — grad is inanimate)",
          options: ["koji", "kojeg", "kojem"],
          correctIndex: 0,
          explanation: "koji — object of volim, and a city is inanimate, so the accusative looks like the nominative. Recognition only today.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The recycling eight",
      vocabIds: [
        "b1u20.okolis", "b1u20.otpad", "b1u20.reciklirati", "b1u20.recikliranje",
        "b1u20.plastika", "b1u20.staklo", "b1u20.papir", "b1u20.kanta",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Dropping the doer ♻️",
      body:
        "Start with an ordinary sentence. It has somebody in it doing something:\n\n*Ljudi ovdje **recikliraju** plastiku.* — People recycle plastic here.\n\nNow delete the people. Croatian does not leave a hole; it puts **`se`** where they were, and the thing that was the object moves up and becomes the **subject**:\n\n*Ovdje **se reciklira plastika**.* — Plastic is recycled here.\n\nThat is the whole operation. Three things follow from it, and you already know the first.\n\n**1 · `se` is a clitic**, so §12 governs it exactly as it governs *je*, *ga*, *sam*: **second position**, counted from the start of the clause. It can never open a sentence.\n\n*Ovdje **se** reciklira plastika.* ✅\n*Plastika **se** reciklira.* ✅\n~~*Se reciklira plastika.*~~ ❌  ~~*Plastika reciklira se.*~~ ❌\n\n**2 · No doer can be added back.** English can say *the street is cleaned by workers*. Croatian's se-passive cannot take the doer at all — if you want to name them, you already have the ordinary sentence:\n\n*Radnici čiste ulicu.* ✅  ~~*Ulica se čisti od radnika.*~~ ❌\n\nThe construction exists **precisely** for when the doer is unknown, irrelevant, or everybody. That is why it is everywhere on signs, in rules, and in anything written about the environment.",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Start with a doer", emoji: "👥", example: "Ljudi ovdje recikliraju plastiku." },
          { label: "Delete the doer, put se in", emoji: "✂️", example: "Ovdje se reciklira ___" },
          { label: "The object moves up to subject", emoji: "⬆️", example: "Ovdje se reciklira plastika." },
        ],
      },
      ttsChips: ["Ovdje se reciklira plastika.", "Plastika se reciklira.", "Radnici čiste ulicu."],
    },
    {
      id: "s06",
      type: "teach",
      title: "**3 · The verb agrees with the thing** 🎯",
      body:
        "This is the point of the unit, and it is the one an English speaker gets wrong every time.\n\nIn English, *is recycled* looks the same no matter what is being recycled. In Croatian the thing is now the **subject**, and a Croatian verb always agrees with its subject. So the verb changes:\n\n*Ovdje se **reciklira** plastika.* — singular thing, singular verb\n*Ovdje se **recikliraju** boce.* — plural things, **plural verb**\n\nAsk yourself one question before you write the verb: **what is the thing, and how many of it are there?** Then make the verb look at that.\n\n⚠️ Watch out for **novine** — it has no singular at all, so it is *always* plural, and the verb has nowhere to hide:\n\n*Novine se **recikliraju**.* ✅  ~~*Novine se reciklira.*~~ ❌",
      table: {
        caption: "One verb, four subjects — the ending follows the thing",
        headers: ["subjekt (the thing)", "rod / broj", "glagol", "rečenica"],
        rows: [
          ["papir", "m sg", "reciklira", "Papir se reciklira."],
          ["plastika", "f sg", "reciklira", "Plastika se reciklira."],
          ["staklo", "n sg", "reciklira", "Staklo se reciklira."],
          ["boce", "f pl", "**recikliraju**", "Boce se recikliraju."],
          ["novine", "f pl (only)", "**recikliraju**", "Novine se recikliraju."],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The rule the whole unit is built on",
        text: "The thing is the SUBJECT — so the verb agrees with it. Singular thing → singular verb. Plural thing → PLURAL verb. English gives you no warning here, because «is recycled» never changes shape.",
      },
    },
    {
      id: "s07",
      type: "example",
      title: "Heard everywhere in Croatia",
      items: [
        { hr: "Ovdje se reciklira plastika.", en: "Plastic is recycled here.", note: "plastika = f sg subject → reciklira" },
        { hr: "Ovdje se recikliraju boce.", en: "Bottles are recycled here.", note: "boce = f pl subject → recikliraju" },
        { hr: "Papir se reciklira.", en: "Paper is recycled.", note: "The subject can open the sentence — then se is second, right after it." },
        { hr: "Novine se recikliraju ovdje.", en: "Newspapers are recycled here.", note: "novine has no singular, so the verb is always plural." },
        { hr: "U Hrvatskoj se pije puno kave.", en: "A lot of coffee is drunk in Croatia.", note: "kava = f sg → pije. Three words before se? No — «U Hrvatskoj» is one phrase, so se is still second." },
        { hr: "Kruh se kupuje ujutro.", en: "Bread is bought in the morning.", note: "Imperfective, because this is a habit — not one loaf, every morning." },
        { hr: "Staklo se ne baca u tu kantu.", en: "Glass isn't thrown in that bin.", note: "Negative: ne goes with the verb, se still second." },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Make the verb look at the thing",
      subtitle: "One question before every verb: what is the thing, and how many of it are there? Everything else in this lesson follows from the answer.",
      emoji: "🎯",
      items: [
        { emoji: "✅", label: "Quick check", hint: "four subjects, four verbs" },
        { emoji: "🔤", label: "Build them", hint: "match, fill, and rewrite" },
        { emoji: "🔊", label: "Hear the plural", hint: "the -ju is the difference" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: make the verb look at the thing",
      items: [
        {
          prompt: "»Ovdje se ___ staklo.« (glass is recycled here)",
          options: ["reciklira", "recikliraju", "recikliram"],
          correctIndex: 0,
          explanation: "staklo is one neuter thing → singular verb: reciklira.",
        },
        {
          prompt: "»Ovdje se ___ boce.« (bottles are recycled here)",
          options: ["recikliraju", "reciklira", "reciklirati"],
          correctIndex: 0,
          explanation: "boce is plural, and it is the SUBJECT — so the verb goes plural too: recikliraju. This is the error the whole unit exists to stop.",
        },
        {
          prompt: "»Novine se ___ ovdje.« (newspapers are recycled here)",
          options: ["recikliraju", "reciklira", "recikliralo"],
          correctIndex: 0,
          explanation: "novine has no singular form at all, so there is no singular verb available: recikliraju.",
        },
        {
          prompt: "Which sentence puts se in a legal position?",
          options: [
            "Plastika se reciklira.",
            "Se reciklira plastika.",
            "Plastika reciklira se.",
          ],
          correctIndex: 0,
          explanation: "Second position, counted from the start of the clause — §12, unchanged since Unit 12. A clitic can never open a sentence, and «second» means second, not last.",
        },
      ],
    },
    {
      id: "s10",
      type: "match",
      prompt: "Match each subject to the verb form it forces",
      pairs: [
        { a: "papir", b: "se reciklira" },
        { a: "boce", b: "se recikliraju" },
        { a: "novine", b: "se recikliraju (nema jednine)" },
        { a: "plastika", b: "se reciklira (ž. rod, jednina)" },
      ],
    },
    {
      id: "s11",
      type: "fill",
      text: "Novine se ___ .",
      blanks: [["recikliraju"]],
      translation: "Newspapers are recycled.",
      wordBank: ["reciklira", "recikliraju", "recikliram"],
      explanation: "novine is plural-only, so the plural verb is the only option there has ever been.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Ovdje se ___ plastika i staklo.",
      blanks: [["recikliraju"]],
      translation: "Plastic and glass are recycled here.",
      wordBank: ["reciklira", "recikliraju"],
      explanation: "Two things joined by i make a plural subject — so the verb is plural, even though each one on its own is singular.",
    },
    {
      id: "s13",
      type: "fill",
      text: "Papir se ___ u tu kantu.",
      blanks: [["baca"]],
      translation: "Paper is thrown in that bin.",
      wordBank: ["baca", "bacaju", "bacam"],
      explanation: "papir is one masculine thing → baca. (You will card bacati properly in L2; here it is just a verb to agree.)",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Take the doer out: »Ljudi ovdje recikliraju plastiku.« → ",
      answers: ["Ovdje se reciklira plastika.", "Ovdje se reciklira plastika", "Plastika se ovdje reciklira."],
      hint: "Delete «ljudi», put se in second position, and promote plastiku to subject — which changes its ending.",
      explanation: "Ovdje se reciklira plastika. The object plastiku became the subject plastika, and the verb dropped from plural (recikliraju, agreeing with ljudi) to singular (reciklira, agreeing with plastika).",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Take the doer out: »Ljudi ovdje recikliraju boce.« → ",
      answers: ["Ovdje se recikliraju boce.", "Ovdje se recikliraju boce", "Boce se ovdje recikliraju."],
      hint: "Same operation — but check what the verb has to agree with now.",
      explanation: "Ovdje se recikliraju boce. The verb stays plural, but for a completely different reason: before, it agreed with ljudi; now it agrees with boce.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ovdje se reciklira plastika.",
      answers: ["Ovdje se reciklira plastika.", "Ovdje se reciklira plastika"],
      allowSlow: true,
      explanation: "Singular thing, singular verb.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Novine se recikliraju ovdje.",
      answers: ["Novine se recikliraju ovdje.", "Novine se recikliraju ovdje"],
      allowSlow: true,
      explanation: "The plural is audible: recikliraJU. That syllable is the entire difference between right and wrong in this unit.",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "U mom gradu se reciklira papir.",
      targetEn: "Paper is recycled in my town.",
      phonetic: "oo mom GRA-doo se re-tsee-KLEE-ra PA-peer",
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "U19 review: »To je kanta u ___ se baca staklo.« (that's the bin glass is thrown in — kanta is feminine)",
      options: ["kojoj", "kojem", "koju"],
      correctIndex: 0,
      explanation: "kojoj — feminine from kanta, locative because u + LOC means location. And notice se sitting in second position of the relative clause, exactly where §12 puts it.",
      tts: "To je kanta u kojoj se baca staklo.",
    },
    {
      id: "s20",
      type: "mc",
      review: true,
      prompt: "U17 review: today's sentences are general statements about what usually happens. Which aspect carries them?",
      options: [
        "nesvršeni (imperfective) — a habit, repeated",
        "svršeni (perfective) — one completed event",
      ],
      correctIndex: 0,
      explanation: "Imperfective. «Plastic is recycled here» is not one act of recycling; it is what happens, over and over. Almost every se-passive you meet will be imperfective for exactly this reason.",
    },
    {
      id: "s21",
      type: "recap",
      summary:
        "**The doer disappears and `se` takes its place.** *Ljudi recikliraju plastiku* → *Ovdje se reciklira plastika.*\n\n**Three things follow:**\n\n1. **`se` is a clitic** → second position, never first, never last. Nothing new: §12, since Unit 12.\n2. **No doer can be added back.** If you want to name who does it, use the ordinary sentence — *Radnici čiste ulicu.*\n3. **The thing is the SUBJECT, so the verb agrees with it.** *plastika se reciklira* ‖ *boce se **recikliraju***. This is the one the unit is built to drill, and *novine* is the sentence where it can't be avoided.\n\nOne question before every verb: **what is the thing, and how many?**\n\nTomorrow: take the thing away entirely and watch what the verb does.",
      vocabIds: [
        "b1u20.okolis", "b1u20.otpad", "b1u20.reciklirati", "b1u20.recikliranje",
        "b1u20.plastika", "b1u20.staklo", "b1u20.papir", "b1u20.kanta",
      ],
    },
  ],
  srsCloze: [
    { front: "Ovdje se ___ plastika. (reciklirati)", answers: ["reciklira"], back: "reciklira — plastika is one feminine thing, so the verb is singular.", tts: "Ovdje se reciklira plastika." },
    { front: "Ovdje se ___ boce. (reciklirati)", answers: ["recikliraju"], back: "recikliraju — boce is the plural SUBJECT, so the verb goes plural.", tts: "Ovdje se recikliraju boce." },
    { front: "Novine se ___ . (reciklirati)", answers: ["recikliraju"], back: "recikliraju — novine has no singular, so the plural verb is the only one available.", tts: "Novine se recikliraju." },
    { front: "In a se-passive the thing is the ___ , so the verb ___ with it.", answers: ["subject, agrees", "subject and the verb agrees", "subject / agrees"], back: "The SUBJECT — so the verb agrees with it. That single sentence is the whole unit.", tts: "Boce se recikliraju." },
    { front: "Where does `se` stand? ___ position", answers: ["second", "2.", "drugo"], back: "Second, counted from the start of the clause — §12, unchanged since Unit 12. Never first.", tts: "Plastika se reciklira." },
    { front: "the environment = ___", answers: ["okoliš", "okolis"], back: "okoliš (m) — Okoliš je važan.", tts: "Okoliš je važan." },
    { front: "waste (the category word, not the kitchen bin) = ___", answers: ["otpad"], back: "otpad (m) — smeće is what's in your bin; otpad is the whole category.", tts: "Otpad je veliki problem." },
    { front: "glass (the material) = ___", answers: ["staklo"], back: "staklo (n) — Staklo ide u drugu kantu.", tts: "Staklo se reciklira." },
    { front: "plastic = ___", answers: ["plastika"], back: "plastika (f) — Plastika se reciklira.", tts: "Plastika se reciklira." },
    { front: "bin (the one in your kitchen) = ___", answers: ["kanta"], back: "kanta (f) — kanta za smeće.", tts: "Gdje je kanta za smeće?" },
  ],
  notes: {
    inOneSentence: {
      en: "Delete the doer, put «se» in second position, and the object becomes the SUBJECT — which means the verb now agrees with it: plastika se reciklira, but boce se recikliraju.",
      exampleHr: "Ovdje se recikliraju boce, staklo i papir.",
    },
    deepDive: [
      {
        title: "The operation, step by step",
        body:
          "A Croatian sentence normally names who is acting. An enormous amount of adult language does not want to:\n\n> *Plastic is recycled here.* · *Coffee is drunk everywhere.* · *Bread is bought in the morning.*\n\nNobody is named in any of those, and it is not vagueness — it is the point. Croatian builds them with one word.\n\n**Take the ordinary sentence.** *Ljudi ovdje recikliraju plastiku.*\n**Delete the doer and put `se` in.** The people go; `se` stands where the grammar needs something.\n**Promote the object.** *plastiku* (accusative object) becomes *plastika* (nominative subject).\n**Result:** *Ovdje se reciklira plastika.*\n\nTwo hard limits. First, **you cannot put the doer back**. English *cleaned by workers* has no Croatian equivalent inside this construction — \\*~~Ulica se čisti od radnika~~ ❌. If the doer matters, you never wanted this construction; use *Radnici čiste ulicu.* Second, **`se` is a clitic**, so it obeys §12 without exception: second position in its clause, never opening it, never trailing at the end.\n\nWhat counts as «first position» is a whole *phrase*, not a whole *word*: in *U Hrvatskoj se pije puno kave*, the prepositional phrase *u Hrvatskoj* is slot one and `se` is slot two.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "Ljudi recikliraju plastiku.", emoji: "👥" },
            { label: "Doer deleted, se inserted", emoji: "✂️" },
            { label: "plastiku → plastika (subject)", emoji: "⬆️" },
            { label: "Ovdje se reciklira plastika.", emoji: "♻️" },
          ],
        },
      },
      {
        title: "The agreement — the only thing worth memorizing",
        body:
          "English hides this completely. *Is recycled* is *is recycled* whether one bottle or a thousand. Croatian promotes the thing to subject, and Croatian verbs always agree with their subjects, so the verb moves:\n\n| the thing | verb |\n|---|---|\n| plastika (f sg) | se reciklira |\n| staklo (n sg) | se reciklira |\n| papir (m sg) | se reciklira |\n| boce (f pl) | se **recikliraju** |\n| novine (f pl only) | se **recikliraju** |\n\nTwo places where learners are caught even after they know the rule:\n\n**Two things joined by *i* make a plural.** *Ovdje se **recikliraju** plastika i staklo.* Each one alone is singular; together they are not.\n\n**Plural-only nouns give you nowhere to hide.** *novine* (newspapers), *vrata* (door), *leđa* (back) have no singular form at all, so there is no singular verb to reach for. *Novine se recikliraju.*\n\nThe question to ask before writing any verb in this construction: **what is the thing, and how many of it are there?** If you can answer that, the ending follows.",
        table: {
          caption: "The same verb across five subjects",
          headers: ["subjekt", "rod / broj", "glagol", "primjer"],
          rows: [
            ["papir", "m sg", "se reciklira", "Papir se reciklira."],
            ["plastika", "f sg", "se reciklira", "Plastika se reciklira."],
            ["staklo", "n sg", "se reciklira", "Staklo se reciklira."],
            ["boce", "f pl", "se recikliraju", "Boce se recikliraju."],
            ["plastika i staklo", "pl", "se recikliraju", "Recikliraju se plastika i staklo."],
          ],
        },
      },
      {
        title: "Which `se` is this? (the first of three)",
        body:
          "You have owned a `se` since your first lesson, and it is **not** this one. Keeping the species apart is what stops the rest of the unit from blurring.\n\n**Lexical `se`** — welded to its verb, part of the dictionary entry, means nothing on its own and can never be removed: *zvati **se***, *sjećati **se***, *nadati **se***, *sviđati **se***, *slagati **se***. *Zovem se Tom* is not a passive and never was; the verb simply comes with a `se` attached.\n\n**Passive `se`** — today's. It replaces a deleted doer, and the thing becomes the subject: *Plastika **se** reciklira.*\n\n**Impersonal `se`** — tomorrow's. There is no thing at all.\n\nThe test that separates lexical from the other two: **can you take it away and still have a verb?** *Reciklira* is a fine verb on its own (*Ana reciklira*). *Zovem* on its own means something else entirely. That is the line.\n\nOne consequence to file away now, because L2 cashes it in: a verb that already owns a lexical `se` **cannot take a second one**. There is one `se` per clause, ever.",
        diagram: {
          kind: "contrast",
          left: {
            title: "leksički se — part of the verb",
            emoji: "🔒",
            lines: [
              { hr: "Zovem se Tom.", en: "My name is Tom." },
              { hr: "Sjećam se toga.", en: "I remember that." },
              { hr: "Sviđa mi se.", en: "I like it." },
            ],
          },
          right: {
            title: "pasivni se — the doer was deleted",
            emoji: "♻️",
            lines: [
              { hr: "Plastika se reciklira.", en: "Plastic is recycled." },
              { hr: "Boce se recikliraju.", en: "Bottles are recycled." },
              { hr: "Kruh se kupuje ujutro.", en: "Bread is bought in the morning." },
            ],
          },
        },
      },
      {
        title: "Why almost every example is imperfective",
        body:
          "Look back at the examples and you will find hardly a perfective verb among them. That is not an accident and it is worth naming, because it saves you a decision every time.\n\nThe se-passive is overwhelmingly used for **general statements** — what is done, as a rule, in a place. A general statement is a **habit**, and Unit 17 taught you that habits are imperfective. *Ovdje se reciklira plastika* does not report one act of recycling; it reports what happens here, repeatedly, as policy.\n\nSo: *reciklira* (not *reciklirala*), *kupuje* (not *kupi*), *pije* (not *popije*), *baca* (not *baci*).\n\nThe perfective version exists and means something much narrower — a single completed event, usually with a time attached — but it is rare enough at B1 that you should let the imperfective be your default and only leave it when you are describing one specific finished thing.",
      },
    ],
    commonMistakes: [
      { wrong: "Ovdje se reciklira boce.", right: "Ovdje se **recikliraju** boce.", why: "boce is the SUBJECT and it is plural, so the verb must be plural. This is the unit's number-one error, and English gives you no warning because «is recycled» never changes." },
      { wrong: "Novine se reciklira.", right: "Novine se **recikliraju**.", why: "novine has no singular form at all — there is no singular verb available to agree with it." },
      { wrong: "Se reciklira plastika.", right: "**Ovdje se** reciklira plastika. / **Plastika se** reciklira.", why: "`se` is a clitic and a clitic can never open its clause — §12, unchanged since Unit 12. Put something in front of it." },
      { wrong: "Plastika reciklira se.", right: "Plastika **se** reciklira.", why: "Second position means second, not last. The clitic goes straight after the first phrase." },
      { wrong: "Ulica se čisti od radnika.", right: "**Radnici čiste ulicu.**", why: "The se-passive cannot take a doer. If you want to name who does it, you never wanted this construction — use the ordinary sentence." },
      { wrong: "Ovdje se reciklira plastika i staklo.", right: "Ovdje se **recikliraju** plastika i staklo.", why: "Two singular things joined by i add up to a plural subject." },
    ],
    memoryHooks: [
      "**One question, every time: what is the thing, and how many?** Answer that before you write the verb and the ending picks itself.",
      "**`se` is just another clitic.** You have been placing *je*, *ga* and *sam* correctly since Unit 12 — this is that same rule, no extra clause.",
      "**«novine» is the honest sentence.** It has no singular, so it can't be fudged. If you can write *Novine se recikliraju* without thinking, you have the rule.",
      "**Lexical se can't be removed; passive se can't be traced.** *Zovem se* — take the `se` away and the verb changes meaning. *Reciklira se* — take it away and you just need to say who did it.",
      "**Signs and rules are written in this construction**, which is why it looks so familiar once you notice it. Every notice board in Croatia is a se-passive exhibition.",
    ],
    connects: [
      { label: "Clitics: second position (the rule `se` obeys)", lessonId: "a2u12l2" },
      { label: "Aspect: habits are imperfective", lessonId: "b1u17l1" },
      { label: "koji — relative clauses to hang this on", lessonId: "b1u19l1" },
      { label: "Next: take the thing away entirely", lessonId: "b1u20l2" },
    ],
    selfCheck: [
      { q: "»Ovdje se ___ boce.« (reciklirati)", a: "recikliraju — boce is the plural subject." },
      { q: "Why is »Ulica se čisti od radnika« wrong?", a: "The se-passive cannot name a doer. Say Radnici čiste ulicu instead." },
      { q: "Where does `se` go, and where can it never go?", a: "Second position in its clause. Never first, never trailing at the end." },
      { q: "»Novine se ___ .« — why is there only one possible answer?", a: "recikliraju. novine is plural-only, so no singular verb exists to agree with it." },
      { q: "What is the difference between the `se` in »zovem se« and the `se` in »reciklira se«?", a: "The first is lexical — welded to the verb, meaningless alone, never removable. The second is grammatical — it marks that a doer was deleted, and the thing became the subject." },
    ],
  },
};
