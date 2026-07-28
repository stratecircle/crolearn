import type { Lesson } from "@/types/content";

/**
 * A2 U10 L2 — Sviđa mi se! (DAT prepositions prema/k; sviđati se)
 * Spec: curriculum/A2/unit-10.md · grammar-reference §5, §12, §14.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: only the mi/ti clitic CHUNKS of sviđati se — the full clitic
 * pronoun system waits for U15. zgrada & kat recycled from U5 (not re-taught).
 * Spec's L2 fill used kuhinja (L3 vocab) → balkon substituted (correction
 * noted in unit-10.md). kuhinja/soba examples avoided until L3/L5.
 */
export const a2u10l2: Lesson = {
  id: "a2u10l2",
  unitId: "a2u10",
  title: "Sviđa mi se!",
  titleEn: "I like it! — sviđati se & prema/k",
  grammarTags: ["svidati-se", "dative-prepositions", "dative-singular"],
  estMinutes: 18,
  vocab: [
    { id: "a2u10.svidati-se", image: "/img/svidatise.png", hr: "sviđati se", en: "to be pleasing (sviđa se) — how Croatian says “like”", pos: "verb", icon: "❤️", exampleHr: "Sviđa mi se tvoj stan.", exampleEn: "I like your flat." },
    { id: "a2u10.ulaz", image: "/img/ulaz.png", hr: "ulaz", en: "entrance", pos: "noun", gender: "m", icon: "🚪", exampleHr: "Ulaz je velik.", exampleEn: "The entrance is big." },
    { id: "a2u10.dizalo", image: "/img/dizalo.png", hr: "dizalo", en: "lift / elevator", pos: "noun", gender: "n", icon: "🛗", exampleHr: "Dizalo ne radi.", exampleEn: "The lift isn't working." },
    { id: "a2u10.prozor", image: "/img/prozor.png", hr: "prozor", en: "window", pos: "noun", gender: "m", icon: "🪟", exampleHr: "Prozor je velik i nov.", exampleEn: "The window is big and new." },
    { id: "a2u10.vrata", image: "/img/vrata.png", hr: "vrata", en: "door (a plural-only noun!)", pos: "noun", gender: "n", icon: "🚪", exampleHr: "Vrata su velika.", exampleEn: "The door is big." },
    { id: "a2u10.balkon", image: "/img/balkon.png", hr: "balkon", en: "balcony", pos: "noun", gender: "m", icon: "🌇", exampleHr: "Sviđa mi se balkon.", exampleEn: "I like the balcony." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Sviđa mi se!",
      subtitle: "In Croatian you don't like things — things are pleasing TO you.",
      emoji: "❤️",
      items: [
        { emoji: "🔄", label: "The subject flip", hint: "the flat pleases ME" },
        { emoji: "🧭", label: "prema & k", hint: "toward — with the dative" },
        { emoji: "🏢", label: "The building", hint: "ulaz, dizalo, prozor, vrata" },
        { emoji: "🎤", label: "Say what you like", hint: "Sviđa mi se…" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The flip",
      subtitle: "You've been saying a dative chunk since day 4 — drago MI je. Today it grows.",
      emoji: "🔄",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "yesterday's receivers" },
        { emoji: "🔄", label: "Sviđa mi se + NOM", hint: "the liked thing is the SUBJECT" },
        { emoji: "✅", label: "Quick check", hint: "who likes what?" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: receivers & the building you know",
      items: [
        {
          prompt: "L1: »Dajem ___ poklon.« (baka)",
          options: ["baki", "baku", "bake"],
          correctIndex: 0,
          explanation: "Receiver → DAT: baki. Today the dative gets a new trick.",
        },
        {
          prompt: "Unit 5: »Stan je na trećem ___.« (kat)",
          options: ["katu", "kat", "kata"],
          correctIndex: 0,
          explanation: "na + LOC: na trećem katu. zgrada and kat are your U5 words — they host today's lesson.",
        },
        {
          prompt: "Listen — who does Tom help? (L1)",
          tts: "Tom pomaže susjedu.",
          options: ["the neighbour", "grandma", "Ana"],
          correctIndex: 0,
          explanation: "susjedu (DAT) = the neighbour.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the building words",
      vocabIds: ["a2u10.svidati-se", "a2u10.ulaz", "a2u10.dizalo", "a2u10.prozor", "a2u10.vrata", "a2u10.balkon"],
    },
    {
      id: "s05",
      type: "teach",
      title: "The subject flip: Sviđa mi se stan",
      body:
        "English: **I** like the flat. Croatian flips it: **the flat is pleasing to me**.\n\n- **Sviđa mi se stan.** — the FLAT is the subject (blue, NOM); **mi** (= to me) is the liker in the dative (orange).\n\nThe verb agrees with the THING: *Sviđa mi se **balkon*** but *Sviđa**ju** mi se **prozori*** (windows, plural). For now use the chunks **mi** (to me) and **ti** (to you) — the full pronoun set arrives in Unit 15. For other likers, use the noun in DAT: ***Ani** se sviđa balkon.*",
      diagram: {
        kind: "contrast",
        left: {
          title: "English thinking",
          emoji: "🇬🇧",
          lines: [{ hr: "I ❤ the flat", en: "liker = subject" }],
        },
        right: {
          title: "Croatian flip",
          emoji: "🇭🇷",
          caseId: "DAT",
          lines: [
            { hr: "Sviđa mi se stan.", en: "stan = subject (NOM) · mi = liker (DAT)" },
            { hr: "Ani se sviđa balkon.", en: "Ana likes the balcony." },
          ],
        },
      },
      examples: [
        { hr: "Sviđa mi se tvoj stan.", en: "I like your flat." },
        { hr: "Ani se sviđa balkon.", en: "Ana likes the balcony.", highlight: { text: "Ani", caseId: "DAT" } },
        { hr: "Sviđa li ti se zgrada?", en: "Do you like the building?" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "prema & k — toward, in orange",
      body:
        "Two little prepositions take the dative:\n\n- **prema** = towards: *Idemo prema zgradi.*\n- **k / ka** = to somebody's place, heading TO a person: *Idem k baki.*\n\n⚠️ Don't confuse **k baki** (heading TO her place — DAT) with U9's **kod bake** (AT her place — GEN).\n\nAnd one door-shaped trap: **vrata** (door) is **plural-only** — *Vrata **su** velika.* (never ~~vrata je~~).",
      table: {
        caption: "toward (DAT) vs at (GEN)",
        headers: ["going toward", "being at"],
        colCase: ["DAT", "GEN"],
        rows: [
          ["Idem k baki.", "Ja sam kod bake."],
          ["Idemo prema zgradi.", "Stan je blizu zgrade."],
        ],
      },
      examples: [
        { hr: "Idemo prema zgradi.", en: "We're walking towards the building.", highlight: { text: "zgradi", caseId: "DAT" } },
        { hr: "Idem k susjedi.", en: "I'm going over to the neighbour's (f).", highlight: { text: "susjedi", caseId: "DAT" } },
        { hr: "Vrata su velika, a prozor je malen.", en: "The door is big and the window is small." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: who likes what?",
      items: [
        {
          prompt: "»Sviđa mi se stan.« — who is the SUBJECT of the Croatian sentence?",
          options: ["stan (the flat)", "mi (me)", "se"],
          correctIndex: 0,
          explanation: "The liked thing is the subject; mi is the dative liker.",
        },
        {
          prompt: "»___ se sviđa balkon.« (Ana likes the balcony)",
          options: ["Ani", "Ana", "Anu"],
          correctIndex: 0,
          explanation: "The liker goes DAT: Ani se sviđa balkon.",
        },
        {
          prompt: "Idemo ___ zgradi.",
          options: ["prema", "kod", "iz"],
          correctIndex: 0,
          explanation: "toward → prema + DAT: prema zgradi.",
        },
        {
          prompt: "Which is correct?",
          options: ["Vrata su velika.", "Vrata je velika.", "Vrata je veliko."],
          correctIndex: 0,
          explanation: "vrata is plural-only: Vrata SU velika.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Around the building — tap to hear",
      items: [
        { hr: "Ulaz je velik, a dizalo ne radi.", en: "The entrance is big, and the lift isn't working." },
        { hr: "Sviđa mi se balkon — velik je i krasan!", en: "I like the balcony — it's big and wonderful!" },
        { hr: "Sviđaju mi se prozori.", en: "I like the windows.", note: "plural thing → sviđaJU" },
        { hr: "Idem k baki — ona živi blizu zgrade.", en: "I'm going to grandma's — she lives near the building." },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Sviđa ___ se balkon. (to me)",
      blanks: [["mi"]],
      translation: "I like the balcony.",
      wordBank: ["mi", "ti", "se"],
      explanation: "mi = to me — the dative liker chunk.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Idemo ___ zgradi. (towards)",
      blanks: [["prema"]],
      translation: "We're walking towards the building.",
      wordBank: ["prema", "kod", "bez"],
      explanation: "prema + DAT = towards.",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ se sviđa stan. (Ana)",
      blanks: [["Ani"]],
      translation: "Ana likes the flat.",
      wordBank: ["Ani", "Ana", "Anu"],
      explanation: "The liker is DAT: Ani se sviđa stan.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Like it out loud",
      subtitle: "Build the chunk, type it, hear it, say it.",
      emoji: "🗣️",
      items: [
        { emoji: "🔀", label: "Build the chunk", hint: "sviđa + mi + se…" },
        { emoji: "⌨️", label: "Type two likes", hint: "yours and Ana's" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "One thing you like", hint: "about your home" },
      ],
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Sviđa", "mi", "se", "stan"],
      answers: ["Sviđa mi se stan.", "Sviđa mi se stan"],
      en: "I like the flat.",
      explanation: "The chunk order: Sviđa mi se + the liked thing (NOM).",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I like your flat.”",
      answers: ["Sviđa mi se tvoj stan.", "Sviđa mi se tvoj stan"],
      hint: "the flat is the subject; you are the dative",
      explanation: "Sviđa mi se tvoj stan.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “Ana likes the balcony.”",
      answers: ["Ani se sviđa balkon.", "Ani se sviđa balkon", "Balkon se sviđa Ani.", "Balkon se sviđa Ani"],
      hint: "Ana goes into the dative",
      explanation: "Ani se sviđa balkon. (liker DAT + se + verb + thing NOM)",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Sviđa mi se tvoj stan.",
      explanation: "Sviđa mi se tvoj stan — I like your flat.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Idemo prema zgradi.",
      explanation: "Idemo prema zgradi — we're walking towards the building.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: day 4, floors and agreement",
      items: [
        {
          prompt: "Unit 1's »Drago mi je!« — what was that mi all along?",
          options: [
            "a dative: “it is pleasing TO ME” — same orange as today",
            "an accusative object",
            "just a filler word",
          ],
          correctIndex: 0,
          explanation: "Drago MI je = it's dear to me — you've used the dative since day 4!",
        },
        {
          prompt: "Listen (U5 floors): where is the flat?",
          tts: "Stan je na trećem katu.",
          options: ["on the third floor", "on the second floor", "near the entrance"],
          correctIndex: 0,
          explanation: "na trećem katu = on the third floor.",
        },
        {
          prompt: "U3 agreement, plural-only edition: »Vrata su ___.« (big)",
          options: ["velika", "velik", "velike"],
          correctIndex: 0,
          explanation: "vrata is neuter plural → velika (n pl).",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Sviđa mi se balkon.",
      targetEn: "say one thing you like about your home — I like the balcony. (or: Sviđa mi se prozor / ulaz…)",
      phonetic: "SVEE-ja mee seh BAL-kon",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The flip:** *Sviđa mi se stan.* — the liked thing is the **subject (NOM)**, the liker is **dative** (*mi* = to me, *ti* = to you, or a DAT noun: *Ani se sviđa balkon*). Plural thing → *Sviđa**ju** mi se prozori.*\n\n**Toward, in orange:** *prema zgradi* (towards) · *k baki* (to her place) — and don't confuse *k baki* (going) with *kod bake* (being there, U9).\n\n**Trap:** *vrata* is plural-only — *Vrata su velika.*\n\nWords tonight: **sviđati se, ulaz, dizalo, prozor, vrata, balkon**.\n\nNext lesson: red or orange? — every chore verb has a color habit.",
      vocabIds: ["a2u10.svidati-se", "a2u10.ulaz", "a2u10.dizalo", "a2u10.prozor", "a2u10.vrata", "a2u10.balkon"],
    },
  ],
  srsCloze: [
    { front: "___ mi se stan. (I like the flat)", answers: ["Sviđa", "sviđa", "Svida", "svida"], back: "Sviđa mi se stan. (the flat pleases me)", tts: "Sviđa mi se stan." },
    { front: "Sviđa ___ se balkon. (to me)", answers: ["mi"], back: "Sviđa mi se balkon. (mi = dative liker)", tts: "Sviđa mi se balkon." },
    { front: "___ se sviđa stan. (Ana is the liker)", answers: ["Ani"], back: "Ani se sviđa stan. (liker → DAT)", tts: "Ani se sviđa stan." },
    { front: "Idemo ___ gradu. (towards)", answers: ["prema"], back: "Idemo prema gradu. (prema + DAT)", tts: "Idemo prema gradu." },
    { front: "Idem k ___. (baka — to her place)", answers: ["baki"], back: "Idem k baki. (k + DAT; being there = kod bake, GEN)", tts: "Idem k baki." },
    { front: "Vrata ___ velika. (a plural-only noun!)", answers: ["su"], back: "Vrata su velika. (vrata is always plural)", tts: "Vrata su velika." },
    { front: "plural things: »Sviđa___ mi se prozori.«", answers: ["ju"], back: "Sviđaju mi se prozori. (verb agrees with the things)", tts: "Sviđaju mi se prozori." },
  ],
  notes: {
    inOneSentence: {
      en: "sviđati se flips the sentence — the liked thing is the subject and the liker is dative — and prema/k are the two “toward” prepositions that take the dative.",
      exampleHr: "Sviđa mi se stan. · Ani se sviđa balkon. · Idemo prema zgradi.",
    },
    deepDive: [
      {
        title: "The subject flip, in slow motion",
        body:
          "English puts the liker in charge: *I like the flat.* Croatian hands the sentence to the thing: ***Stan* mi se sviđa** / **Sviđa mi se stan** — “the flat is pleasing to me.”\n\nConsequences:\n\n1. **The verb agrees with the thing**: *Sviđa mi se prozor* → *Sviđa**ju** mi se prozori*.\n2. **The liker is dative**: chunk *mi/ti* for now, or a full noun (*Ani, bratu, susjedi*).\n3. **se always tags along** — it's part of the verb.\n\nIf you know Spanish, this is exactly *me gusta*. And you've secretly used the pattern since Unit 1: *Drago mi je* — “it is dear TO ME.”",
        diagram: {
          kind: "contrast",
          left: { title: "English", emoji: "🇬🇧", lines: [{ hr: "I like the flats", en: "liker rules, thing obeys" }] },
          right: { title: "Croatian", emoji: "🇭🇷", caseId: "DAT", lines: [{ hr: "Sviđaju mi se stanovi", en: "things rule, liker goes orange" }] },
        },
      },
      {
        title: "prema and k — and the k/kod pair",
        body:
          "**prema + DAT** = towards (direction you're facing/heading): *prema gradu, prema zgradi, prema moru*.\n\n**k/ka + DAT** = to a person's place: *k baki, k susjedi*. (ka before k-/g- words: *ka gradu* — rare at this level.)\n\nMini-map of grandma logistics:\n\n- going there: **k baki** (DAT)\n- being there: **kod bake** (GEN, U9)\n- coming back: **od bake** (GEN, U9)",
        table: {
          caption: "Grandma logistics",
          headers: ["phase", "phrase", "case"],
          rows: [
            ["heading there", "Idem k baki.", "DAT"],
            ["being there", "Ja sam kod bake.", "GEN"],
            ["coming from there", "Idem od bake.", "GEN"],
          ],
        },
      },
      {
        title: "vrata — the plural-only door",
        body:
          "A few Croatian nouns exist only in the plural; **vrata** (door) is your first. It's neuter plural, so everything around it agrees plural: *Vrata **su** velik**a**.* — even when you mean one door.\n\nFile it with a mental ⚠️ — the singular ~~vrato~~ does not exist.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "vrata = always plural",
          text: "Vrata su velika. ✅ · ~~Vrata je velika.~~ ❌ — one door, plural grammar.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Sviđam stan. / Ja sviđam se stan.",
        right: "Sviđa mi se stan.",
        why: "The THING is the subject; you are the dative (mi). The verb agrees with stan, not with you.",
      },
      {
        wrong: "Sviđa mi se prozori.",
        right: "Sviđaju mi se prozori.",
        why: "Plural thing → plural verb: sviđaju.",
      },
      {
        wrong: "Idemo prema zgradu.",
        right: "Idemo prema zgradi.",
        why: "prema takes the DATIVE (zgradi), not the accusative.",
      },
      {
        wrong: "Idem kod baki. / Idem k bake.",
        right: "Idem k baki. (going) / Idem kod bake is “I'm at grandma's” territory",
        why: "k + DAT for heading to someone; kod + GEN for being at their place — don't mix the pairs.",
      },
    ],
    memoryHooks: [
      "Spanish speakers: sviđa mi se = me gusta, mirror image included.",
      "Drago mi je (day 4!) was the dative all along — sviđa mi se is its big sibling.",
      "k = key in the door (arriving, DAT) · kod = couch (already there, GEN).",
      "vrata wears plural trousers: Vrata SU velika.",
    ],
    connects: [
      { label: "The dative receiver (Unit 10 L1)", lessonId: "a2u10l1" },
      { label: "kod bake / od bake — the GEN half (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Next: red vs orange — verb valence (Unit 10 L3)", lessonId: "a2u10l3" },
    ],
    selfCheck: [
      { q: "“I like your flat” = ?", a: "Sviđa mi se tvoj stan." },
      { q: "“Ana likes the balcony” = ?", a: "Ani se sviđa balkon." },
      { q: "“I like the windows” — what changes?", a: "Sviđaju mi se prozori — the verb goes plural with the things." },
      { q: "k baki vs kod bake?", a: "k baki = heading to her place (DAT); kod bake = at her place (GEN)." },
      { q: "Why »Vrata su velika« and never »Vrata je velika«?", a: "vrata is a plural-only noun — it always takes plural agreement." },
    ],
  },
};
