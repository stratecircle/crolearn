import type { Lesson } from "@/types/content";

/**
 * A2 U13 L1 — Genitiv množine (GEN plural: -a, -i, fleeting a)
 * Spec: curriculum/A2/unit-13.md · grammar-reference §3.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: counting 5+ appears only as the U7 fixed pattern (analyzed
 * properly in L2). Recycled for review: otok/plaža (U9), pas/mačka/ptica (U3),
 * riba (U4), puno (U7), more/selo/grad (A1). momak appears in the fleeting-a
 * table only, glossed inline (spec-mandated demo word).
 */
export const a2u13l1: Lesson = {
  id: "a2u13l1",
  unitId: "a2u13",
  title: "Genitiv množine",
  titleEn: "The genitive plural — one ending to count them all",
  grammarTags: ["gen-plural", "fleeting-a"],
  estMinutes: 18,
  vocab: [
    { id: "a2u13.priroda", hr: "priroda", en: "nature", pos: "noun", gender: "f", icon: "🏞️", exampleHr: "Priroda u Hrvatskoj je lijepa.", exampleEn: "Nature in Croatia is beautiful." },
    { id: "a2u13.planina", hr: "planina", en: "mountain", pos: "noun", gender: "f", icon: "⛰️", exampleHr: "Planina je visoka.", exampleEn: "The mountain is high." },
    { id: "a2u13.rijeka", hr: "rijeka", en: "river", pos: "noun", gender: "f", icon: "🏞️", exampleHr: "Blizu sela je rijeka.", exampleEn: "There's a river near the village." },
    { id: "a2u13.jezero", hr: "jezero", en: "lake", pos: "noun", gender: "n", icon: "💧", exampleHr: "Jezero je lijepo.", exampleEn: "The lake is beautiful." },
    { id: "a2u13.suma", hr: "šuma", en: "forest", pos: "noun", gender: "f", icon: "🌲", exampleHr: "U šumi ima ptica.", exampleEn: "There are birds in the forest." },
    { id: "a2u13.polje", hr: "polje", en: "field", pos: "noun", gender: "n", icon: "🌾", exampleHr: "Polje je veliko.", exampleEn: "The field is big." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Genitiv množine",
      subtitle: "One small ending and you can count everything in Croatian.",
      emoji: "⛰️",
      items: [
        { emoji: "🟢", label: "GEN goes plural", hint: "-a across all genders" },
        { emoji: "🅰️", label: "The a comes back", hint: "pas → psa → pasa" },
        { emoji: "🏞️", label: "Landscape words", hint: "planina, rijeka, jezero…" },
        { emoji: "🎤", label: "Nema planina!", hint: "say what's missing" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · One ending, three genders",
      subtitle: "You've owned nema mlijeka since Unit 7. Today: nema pasa, planina, jezera — the plural.",
      emoji: "🟢",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "GEN singular retrieval" },
        { emoji: "🗺️", label: "New landscape", hint: "6 nature words" },
        { emoji: "📊", label: "The -a rule", hint: "plus fleeting a" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: the genitive you already own",
      items: [
        {
          prompt: "Unit 7 flashback: »Nema ___.« (there's no milk)",
          options: ["mlijeka", "mlijeko", "mlijeku"],
          correctIndex: 0,
          explanation: "nema + GEN: mlijeka. Today the same nema learns to go plural.",
        },
        {
          prompt: "Unit 9: »Hotel je blizu ___.« (plaža — one beach)",
          options: ["plaže", "plažu", "plaži"],
          correctIndex: 0,
          explanation: "blizu + GEN sg: plaže. Keep blizu in mind — it takes the plural too.",
        },
        {
          prompt: "Listen (U7): what is she buying?",
          tts: "Kupujem kilogram sira.",
          options: ["cheese", "milk", "bread"],
          correctIndex: 0,
          explanation: "kilogram sira — quantity + GEN. Quantities and the plural meet in this unit.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the landscape",
      vocabIds: [
        "a2u13.priroda", "a2u13.planina", "a2u13.rijeka",
        "a2u13.jezero", "a2u13.suma", "a2u13.polje",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "GEN plural: almost everything ends in -a",
      body:
        "Unit 7 gave you the genitive singular (*nema mlijeka*). The **plural is friendlier**: masculine, neuter AND feminine -a nouns all take **-a**. Only the feminine -i type (noć) keeps **-i**.\n\nShort masculines keep their -ov-/-ev- from the NOM plural: *grad → gradovi → gradova*.",
      table: {
        caption: "GEN plural — the -a hum",
        headers: ["type", "NOM sg", "GEN pl"],
        colCase: [null, "NOM", "GEN"],
        rows: [
          ["masculine (short → -ov-)", "grad", "gradova"],
          ["masculine", "otok", "otoka"],
          ["feminine -a", "planina · šuma", "planina · šuma"],
          ["neuter", "jezero · polje", "jezera · polja"],
          ["feminine -i", "noć", "noći"],
        ],
      },
      diagram: {
        kind: "usage-map",
        caseId: "GEN",
        boxes: [
          { label: "nema + GEN pl (there are no…)", examples: [{ hr: "U parku nema pasa.", en: "There are no dogs in the park." }] },
          { label: "blizu / iz / od + GEN pl", examples: [{ hr: "Selo je blizu planina.", en: "The village is near the mountains." }] },
          { label: "counting & quantity (next lesson!)", examples: [{ hr: "pet jezera · puno ljudi", en: "five lakes · a lot of people" }] },
        ],
      },
      examples: [
        { hr: "Selo je blizu planina.", en: "The village is near the mountains.", highlight: { text: "planina", caseId: "GEN" } },
        { hr: "U jezeru nema riba.", en: "There are no fish in the lake.", highlight: { text: "riba", caseId: "GEN" } },
        { hr: "U šumi ima ptica.", en: "There are birds in the forest.", highlight: { text: "ptica", caseId: "GEN" } },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "The a that vanished… comes back",
      body:
        "Unit 7: *pas → psa* — the little **a** vanished. In the GEN plural it **returns**, and it even squeezes into feminine clusters: *mačka → mačaka*.\n\nTwo words ignore the rules entirely: **čovjek → ljudi** (people) and **djeca → djece** (children).\n\n*(momak = young guy — a classic fleeting-a word.)*",
      table: {
        caption: "The fleeting a — full circle",
        headers: ["NOM sg", "GEN sg (U7)", "GEN pl (today)"],
        colCase: ["NOM", "GEN", "GEN"],
        rows: [
          ["pas", "psa", "pasa"],
          ["mačka", "mačke", "mačaka"],
          ["momak", "momka", "momaka"],
          ["sestra", "sestre", "sestara"],
          ["student", "studenta", "studenata"],
        ],
      },
      examples: [
        { hr: "U parku nema pasa.", en: "There are no dogs in the park.", highlight: { text: "pasa", caseId: "GEN" } },
        { hr: "Baka ima pet mačaka.", en: "Grandma has five cats.", note: "the U7 counting pattern — fully explained next lesson", highlight: { text: "mačaka", caseId: "GEN" } },
        { hr: "Na fakultetu ima puno studenata.", en: "There are a lot of students at the university.", highlight: { text: "studenata", caseId: "GEN" } },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the GEN plural",
      items: [
        {
          prompt: "mačka → »Nema ___.« (no cats)",
          options: ["mačaka", "mačke", "mački"],
          correctIndex: 0,
          explanation: "The a squeezes in: mač-a-ka. Nema mačaka.",
        },
        {
          prompt: "pas → »pet ___« (five dogs)",
          options: ["pasa", "psa", "pse"],
          correctIndex: 0,
          explanation: "GEN pl brings the a back: pasa (psa is GEN sg — dva psa).",
        },
        {
          prompt: "čovjek → »puno ___« (a lot of people)",
          options: ["ljudi", "čovjeka", "čovjeci"],
          correctIndex: 0,
          explanation: "Irregular: čovjek → ljudi, always.",
        },
        {
          prompt: "student → »U kafiću ima ___.« (there are students)",
          options: ["studenata", "studenta", "studenti"],
          correctIndex: 0,
          explanation: "student-a-ta: the a slips into the cluster — studenata.",
        },
      ],
    },
    {
      id: "s08",
      type: "section",
      title: "Part 2 · Build the forms",
      subtitle: "From one to many, with your own hands.",
      emoji: "🛠️",
      items: [
        { emoji: "✏️", label: "Fill the gaps", hint: "nema / blizu + GEN pl" },
        { emoji: "⌨️", label: "One → five", hint: "jezero → pet jezera" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "U parku nema ___. (pas — plural!)",
      blanks: [["pasa"]],
      translation: "There are no dogs in the park.",
      wordBank: ["pasa", "psa", "pas"],
      explanation: "GEN pl with the returned a: pasa.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Selo je blizu ___. (planina — plural!)",
      blanks: [["planina"]],
      translation: "The village is near the mountains.",
      wordBank: ["planina", "planine", "planinu"],
      explanation: "Feminine -a nouns: GEN pl is bare -a — planina (it looks like the NOM sg!).",
    },
    {
      id: "s11",
      type: "fill",
      text: "U jezeru nema ___. (riba — plural!)",
      blanks: [["riba"]],
      translation: "There are no fish in the lake.",
      wordBank: ["riba", "ribe", "ribu"],
      explanation: "riba → GEN pl riba (no cluster, so no inserted a).",
    },
    {
      id: "s12",
      type: "type",
      prompt: "jedno jezero → pet ___",
      answers: ["jezera"],
      hint: "neuter → -a",
      explanation: "pet jezera — neuter GEN pl in -a.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "jedan grad → pet ___ (keep the -ov-!)",
      answers: ["gradova"],
      hint: "grad → gradovi → grad___",
      explanation: "Short masculines keep -ov-: pet gradova.",
    },
    {
      id: "s14",
      type: "section",
      title: "Part 3 · Ears & voice",
      subtitle: "Hear the inserted a, then say what your town is missing.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "pasa, mačaka" },
        { emoji: "🎤", label: "Nema planina!", hint: "your town's missing things" },
        { emoji: "🔗", label: "Story world", hint: "Ana, Tom & the landscape" },
      ],
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "U parku nema pasa.",
      explanation: "U parku nema pasa — there are no dogs in the park. Hear the pa-sa: the a is back.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Baka ima pet mačaka.",
      explanation: "Baka ima pet mačaka — grandma has five cats. mač-a-ka: the inserted a.",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "U gradu nema planina.",
      targetEn: "say what your city has none of — There are no mountains in the city. (or: nema jezera / nema pasa…)",
      phonetic: "oo GRA-doo NEH-ma pla-NEE-na",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Story world: the landscape meets old grammar",
      items: [
        {
          prompt: "Tom kaže: »U Zagrebu nema planina, ali ima parkova.« What is he saying?",
          options: [
            "No mountains in Zagreb, but there are parks",
            "Zagreb has mountains and parks",
            "Zagreb has neither mountains nor parks",
          ],
          correctIndex: 0,
          explanation: "nema planina (none) vs ima parkova (there are some) — both GEN pl.",
        },
        {
          prompt: "Unit 10 flashback: »Sviđa mi se priroda.« means…",
          options: ["I like nature", "I'm in nature", "Nature is mine"],
          correctIndex: 0,
          explanation: "sviđa mi se + NOM subject (U10): nature pleases me → I like nature.",
        },
        {
          prompt: "Listen (U9 future): when are they going to the lake?",
          tts: "Sutra ćemo ići na jezero.",
          options: ["tomorrow", "today", "in winter"],
          correctIndex: 0,
          explanation: "Sutra ćemo ići — future I (U9): tomorrow.",
        },
      ],
    },
    {
      id: "s19",
      type: "recap",
      summary:
        "**The genitive plural — one hum: -a.** *gradova, otoka, planina, šuma, jezera, polja* (fem -i type keeps -i: *noći*).\n\n**The fleeting a returns**: *pas → psa → **pasa***, and squeezes into feminine clusters: *mačka → **mačaka***, *sestra → **sestara***. Irregulars: *čovjek → **ljudi***, *djeca → djece*.\n\nWhere you'll use it: *nema pasa · blizu planina · pet jezera* — and next lesson unlocks the WHOLE counting system.\n\nWords tonight: **priroda, planina, rijeka, jezero, šuma, polje**.",
      vocabIds: [
        "a2u13.priroda", "a2u13.planina", "a2u13.rijeka",
        "a2u13.jezero", "a2u13.suma", "a2u13.polje",
      ],
    },
  ],
  srsCloze: [
    { front: "pet ___ (pas)", answers: ["pasa"], back: "pet pasa — the fleeting a returns in GEN pl.", tts: "pet pasa" },
    { front: "puno ___ (mačka)", answers: ["mačaka", "macaka"], back: "puno mačaka — the a squeezes into the cluster.", tts: "puno mačaka" },
    { front: "nema ___ (čovjek — plural!)", answers: ["ljudi"], back: "nema ljudi — čovjek → ljudi, always irregular.", tts: "Nema ljudi." },
    { front: "pet ___ (jezero)", answers: ["jezera"], back: "pet jezera — neuter GEN pl -a.", tts: "pet jezera" },
    { front: "Selo je blizu ___. (planina — plural)", answers: ["planina"], back: "blizu planina — fem GEN pl is bare -a.", tts: "Selo je blizu planina." },
    { front: "pet ___ (grad — keep the -ov-)", answers: ["gradova"], back: "pet gradova — short masculines keep -ov-.", tts: "pet gradova" },
    { front: "forest = ___ (f; »U ___ ima ptica«)", answers: ["šuma", "suma"], back: "šuma = forest (U šumi ima ptica.)", tts: "U šumi ima ptica." },
  ],
  notes: {
    inOneSentence: {
      en: "The genitive plural ends in -a for all three genders (fem -i nouns keep -i), and consonant clusters get a fleeting a squeezed in — pas → pasa, mačka → mačaka.",
      exampleHr: "U parku nema pasa. · Selo je blizu planina. · pet jezera",
    },
    deepDive: [
      {
        title: "The full genitive story, completed",
        body:
          "Unit 7 taught GEN singular (*mlijeka, sira, plaže*), Unit 9 its prepositions (*iz, do, od, kod, bez, blizu*). Today the plural completes the case: **-a everywhere**, except feminine -i nouns (**-i**: *noći*).\n\nMasculine short words carry their -ov-/-ev- along from the NOM plural: *grad → gradovi → **gradova***, *otok → otoci → **otoka*** (no -ov- — longer word).",
        table: {
          caption: "GEN plural, all genders",
          headers: ["type", "NOM sg", "NOM pl", "GEN pl"],
          colCase: [null, "NOM", "NOM", "GEN"],
          rows: [
            ["masc short", "grad", "gradovi", "gradova"],
            ["masc longer", "otok", "otoci", "otoka"],
            ["fem -a", "planina", "planine", "planina"],
            ["fem -a", "rijeka", "rijeke", "rijeka"],
            ["neuter", "jezero", "jezera", "jezera"],
            ["neuter", "polje", "polja", "polja"],
            ["fem -i", "noć", "noći", "noći"],
          ],
        },
      },
      {
        title: "The fleeting a — the full circle",
        body:
          "In Unit 7 the a VANISHED going into GEN sg (*pas → psa*). In the GEN plural it comes back — and it also invades feminine and masculine clusters that never had it:\n\n- *pas → psa → **pasa*** (back where it started)\n- *mačka → mačke → **mačaka*** (mačk- is a cluster → break it up)\n- *sestra → sestre → **sestara***, *student → studenta → **studenata***\n\nWhy? Croatian avoids heavy consonant clusters before the long-a ending. Say *mačka* vs *mačaka* aloud — the inserted a is doing pronunciation work.",
        diagram: {
          kind: "flow",
          steps: [
            { label: "NOM sg", emoji: "1️⃣", example: "pas · mačka" },
            { label: "GEN sg — a leaves", emoji: "💨", example: "psa · mačke" },
            { label: "GEN pl — a returns", emoji: "🅰️", example: "pasa · mačaka" },
          ],
        },
      },
      {
        title: "Two rebels: ljudi and djeca",
        body:
          "**čovjek** (person) has the suppletive plural **ljudi** — GEN pl also *ljudi*: *puno ljudi, nema ljudi*.\n\n**djeca** (children) is grammatically a feminine SINGULAR (U10 flashback) — its genitive is **djece**: *puno djece*.\n\nBoth appear constantly with quantity words, so they enter tonight's SRS.",
      },
    ],
    commonMistakes: [
      {
        wrong: "pet mačke",
        right: "pet mačaka",
        why: "After 5+ you need GEN PLURAL, not GEN singular — and the cluster takes an inserted a.",
      },
      {
        wrong: "pet psa",
        right: "pet pasa",
        why: "psa is GEN singular (dva psa); 5+ takes GEN plural pasa — the a comes back.",
      },
      {
        wrong: "puno čovjeka",
        right: "puno ljudi",
        why: "čovjek has no regular plural — people is always ljudi.",
      },
      {
        wrong: "puno jezerova",
        right: "puno jezera",
        why: "Only short MASCULINES take -ov- (gradova); neuters just add -a: jezera.",
      },
    ],
    memoryHooks: [
      "One hum for the plural: -aaa — gradova, planina, jezera.",
      "The fleeting a is a boomerang: it flies away in GEN sg (psa) and comes back in GEN pl (pasa).",
      "mačaka, sestara, studenata — say them like a drumroll: the extra a is the beat.",
      "ljudi and djece — the two rebels; no counting without them (puno ljudi, puno djece).",
    ],
    connects: [
      { label: "GEN singular & quantities — where it began (Unit 7 L1)", lessonId: "a1u7l1" },
      { label: "The six GEN prepositions (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Next: the full counting system (Unit 13 L2)", lessonId: "a2u13l2" },
    ],
    selfCheck: [
      { q: "GEN plural of pas — and why is it not psa?", a: "pasa; psa is GEN singular. The fleeting a returns in the plural." },
      { q: "»There are no cats« = ?", a: "Nema mačaka. (inserted a in the cluster)" },
      { q: "GEN plural of grad, jezero, planina?", a: "gradova (keeps -ov-), jezera, planina (bare -a)." },
      { q: "a lot of people = ?", a: "puno ljudi (čovjek → ljudi, irregular)." },
      { q: "Which nouns DON'T take -a in GEN pl?", a: "Feminine -i nouns — they keep -i: noći." },
    ],
  },
};
