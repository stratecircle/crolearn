import type { Lesson } from "@/types/content";

/**
 * A1 U4 L4 — Čekam konobara (masc animate ACC + htjeti)
 * Spec: curriculum/A1/unit-4.md · grammar-reference §3 (ACC anim = GEN), §6 (htjeti).
 *
 * Level guard: animate masculine ACC -a (people & animals); inanimate stays
 * = NOM (L1). htjeti (hoću…hoće) + the third fused negative neću. Register
 * note only for želim (full café use is L5).
 */
export const a1u4l4: Lesson = {
  id: "a1u4l4",
  unitId: "a1u4",
  title: "Čekam konobara",
  titleEn: "People as objects + htjeti",
  grammarTags: ["accusative-animate", "htjeti"],
  estMinutes: 18,
  vocab: [
    { id: "a1u4.htjeti", image: "/img/htjeti.png", hr: "htjeti", en: "to want (hoću — direct)", pos: "verb", icon: "✋", exampleHr: "Hoću sladoled.", exampleEn: "I want ice cream." },
    { id: "a1u4.gladan", image: "/img/gladan.png", hr: "gladan", en: "hungry (gladna f)", pos: "adj", icon: "😋", exampleHr: "Jako sam gladan.", exampleEn: "I am very hungry." },
    { id: "a1u4.zedan", image: "/img/zedan.png", hr: "žedan", en: "thirsty (žedna f)", pos: "adj", icon: "🥵", exampleHr: "Jesi li žedan?", exampleEn: "Are you thirsty?" },
    { id: "a1u4.kolac", image: "/img/kolac.png", hr: "kolač", en: "cake", pos: "noun", gender: "m", icon: "🍰", exampleHr: "Hoćeš li kolač?", exampleEn: "Do you want cake?" },
    { id: "a1u4.sladoled", image: "/img/sladoled.png", hr: "sladoled", en: "ice cream", pos: "noun", gender: "m", icon: "🍦", exampleHr: "Hoću sladoled.", exampleEn: "I want ice cream." },
    { id: "a1u4.cokolada", image: "/img/cokolada.png", hr: "čokolada", en: "chocolate", pos: "noun", gender: "f", icon: "🍫", exampleHr: "Volim čokoladu.", exampleEn: "I love chocolate." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Čekam konobara",
      subtitle: "One last piece of ACC: people. Čekam konobara — not konobar.",
      emoji: "🧍",
      items: [
        { emoji: "🔴", label: "Alive? → -a", hint: "konobar → konobara · Marko → Marka" },
        { emoji: "✋", label: "htjeti: hoću…neću", hint: "the third fused negative" },
        { emoji: "🍰", label: "Treats & states", hint: "kolač, sladoled · gladan, žedan" },
        { emoji: "👂", label: "Ear & voice", hint: "dictation + answer truthfully" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · People as objects",
      subtitle: "Alive → add -a. Thing → leave it alone. That's the whole rule.",
      emoji: "🔴",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "verbs from L3" },
        { emoji: "🧍", label: "The animate rule", hint: "čekam konobarA" },
        { emoji: "✅", label: "Quick check", hint: "alive or thing?" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: yesterday's verbs",
      items: [
        {
          prompt: "From L3: Oni ___ pivo. (drink)",
          options: ["piju", "pijaju", "pije"],
          correctIndex: 0,
          explanation: "-em class 3pl → piju.",
        },
        {
          prompt: "From L3: Ja ___ ribu. (eat)",
          options: ["jedem", "jedim", "jedam"],
          correctIndex: 0,
          explanation: "jesti → jedem (irregular -em).",
        },
        {
          prompt: "Listen: what does she love?",
          tts: "Volim ribu i juhu.",
          options: ["fish and soup", "bread and cheese", "wine and beer"],
          correctIndex: 0,
          explanation: "volim + ACC: ribu, juhu.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's words",
      vocabIds: [
        "a1u4.htjeti", "a1u4.gladan", "a1u4.zedan",
        "a1u4.kolac", "a1u4.sladoled", "a1u4.cokolada",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "Alive? Add -a. A thing? No change.",
      body:
        "The last piece of the accusative: **masculine nouns for people and animals take -a**: konobar → konobar**a**, prijatelj → prijatelj**a**, Marko → Mark**a**, pas → ps**a**.\n\nMasculine **things** still don't change (*Gledam grad*, *Imam sok*). So ask one question: **is it alive?** Alive → -a. Thing → leave it.\n\nAnd yes — this finally explains Unit 3's *Imam brata* and *Imam psa*!",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Masculine object?", emoji: "🚹", example: "konobar · grad" },
          { label: "Alive? 🧍🐕", emoji: "❓", example: "person or animal → -a" },
          { label: "A thing? 🍞", emoji: "📦", example: "no change (= NOM)" },
        ],
      },
      table: {
        caption: "Masculine ACC: animate vs inanimate",
        headers: ["", "NOM", "ACC"],
        colCase: [null, "NOM", "ACC"],
        rows: [
          ["waiter (alive)", "konobar", "konobara"],
          ["friend (alive)", "prijatelj", "prijatelja"],
          ["dog (alive)", "pas", "psa (fleeting a!)"],
          ["city (thing)", "grad", "grad"],
          ["juice (thing)", "sok", "sok"],
        ],
      },
      examples: [
        { hr: "Čekam konobara.", en: "I am waiting for the waiter.", note: "konobar → konobara", highlight: { text: "konobara", caseId: "ACC" } },
        { hr: "Ana gleda Marka.", en: "Ana is looking at Marko.", note: "Marko → Marka", highlight: { text: "Marka", caseId: "ACC" } },
        { hr: "Tom čeka prijatelja.", en: "Tom is waiting for a friend.", note: "prijatelj → prijatelja", highlight: { text: "prijatelja", caseId: "ACC" } },
        { hr: "Gledam grad.", en: "I am looking at the city.", note: "grad is a thing — no change" },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: alive or thing?",
      items: [
        {
          prompt: "Gledam ___. (brat)",
          options: ["brata", "brat", "bratu"],
          correctIndex: 0,
          explanation: "brat is alive → brata.",
        },
        {
          prompt: "Čekam ___. (konobar)",
          options: ["konobara", "konobar", "konobaru"],
          correctIndex: 0,
          explanation: "konobar is a person → konobara.",
        },
        {
          prompt: "Gledam ___. (grad)",
          options: ["grad", "grada", "gradu"],
          correctIndex: 0,
          explanation: "grad is a thing → no change.",
        },
      ],
    },
    {
      id: "s07",
      type: "teach",
      title: "htjeti — hoću… and the third fused negative: neću",
      body:
        "**htjeti** (to want): **hoću, hoćeš, hoće, hoćemo, hoćete, hoće**. The negative fuses — **neću, nećeš, neće…** — completing the trio: *nisam, nemam, neću*.\n\n**hoću** is direct (“I want”); **želim** (L3) is the politer “I'd like” — that's your café voice in the next lesson.\n\nNew states & treats: **gladan/gladna** (hungry), **žedan/žedna** (thirsty — the same fleeting a as *sretan/sretna*), **kolač**, **sladoled**, **čokolada**.",
      diagram: {
        kind: "callout",
        tone: "warn",
        title: "The fused trio is complete",
        text: "nisam (biti) · nemam (imati) · neću (htjeti). Everything else: ne + verb.",
      },
      table: {
        caption: "htjeti — want / won't",
        headers: ["", "want", "won't"],
        rows: [
          ["ja", "hoću", "neću"],
          ["ti", "hoćeš", "nećeš"],
          ["on / ona", "hoće", "neće"],
          ["mi", "hoćemo", "nećemo"],
          ["vi", "hoćete", "nećete"],
          ["oni", "hoće", "neće"],
        ],
      },
      examples: [
        { hr: "Hoćeš li kolač? — Ne, neću kolač, hoću sladoled.", en: "Do you want cake? — No, I don't want cake, I want ice cream." },
        { hr: "Jako sam gladan.", en: "I am very hungry.", note: "gladna for a woman" },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match to English",
      pairs: [
        { a: "kolač", b: "cake" },
        { a: "sladoled", b: "ice cream" },
        { a: "čokolada", b: "chocolate" },
        { a: "gladan", b: "hungry" },
        { a: "žedan", b: "thirsty" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Write, hear & say",
      subtitle: "People with -a, wants with hoću/neću — then answer for yourself.",
      emoji: "✍️",
      items: [
        { emoji: "🧩", label: "Fill the form", hint: "Hoćeš · neću · konobara" },
        { emoji: "⌨️", label: "Type two sentences", hint: "Čekam brata · Hoću sladoled" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "Answer truthfully", hint: "Jesi li gladan? Jesi li žedan?" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "___ li kolač?",
      blanks: [["Hoćeš"]],
      translation: "Do you want cake?",
      wordBank: ["Hoćeš", "Hoću", "Hoće"],
      explanation: "ti → hoćeš (+ li for the question).",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ne, ___ kolač, hoću sladoled.",
      blanks: [["neću"]],
      translation: "No, I don't want cake, I want ice cream.",
      wordBank: ["neću", "ne hoću", "nemam"],
      explanation: "htjeti fuses its negative: neću — never “ne hoću”.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Čekam ___.",
      blanks: [["konobara"]],
      translation: "I am waiting for the waiter.",
      wordBank: ["konobara", "konobar", "konobaru"],
      explanation: "konobar is a person → animate ACC konobara.",
    },
    {
      id: "s13",
      type: "type",
      prompt: "Write it in Croatian: “I am waiting for my brother.”",
      answers: ["Čekam brata.", "Čekam brata", "čekam brata"],
      explanation: "brat → brata (animate). The possessive can stay implied.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I want ice cream.”",
      answers: ["Hoću sladoled.", "Hoću sladoled", "hoću sladoled", "Želim sladoled.", "Želim sladoled"],
      explanation: "hoću (direct) or želim (politer); sladoled is a thing — no change.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Hoćeš li sok ili vodu?",
      explanation: "Hoćeš li sok ili vodu? — Do you want juice or water? (sok unchanged, voda → vodu)",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Čekam konobara.",
      explanation: "Čekam konobara — I'm waiting for the waiter (animate -a).",
    },
    {
      id: "s17",
      type: "speak",
      targetHr: "Da, gladan sam i žedan sam.",
      targetEn: "answer “Jesi li gladan? Jesi li žedan?” truthfully — Yes, I'm hungry and thirsty.",
      phonetic: "dah, GLAH-dan sam ee ZHEH-dan sam",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: Units 2–3",
      items: [
        {
          prompt: "Unit 3's “Imam brata” — why brata?",
          options: ["brat is alive → animate ACC -a", "it's plural", "brat is feminine"],
          correctIndex: 0,
          explanation: "The chunk is now explained: animate masculine ACC takes -a.",
        },
        {
          prompt: "From Unit 2: “We are waiting for the doctor.” — Čekamo ___.",
          options: ["liječnika", "liječnik", "liječnica"],
          correctIndex: 0,
          explanation: "liječnik is a person → liječnika.",
        },
        {
          prompt: "From Unit 1: sretan → sretna. Today the same fleeting a appears in…",
          options: ["gladan → gladna", "kolač → kolača", "hoću → neću"],
          correctIndex: 0,
          explanation: "gladan/gladna and žedan/žedna drop the a exactly like sretan/sretna.",
        },
      ],
    },
    {
      id: "s19",
      type: "mc",
      review: true,
      prompt: "Listen: whom is Ana watching?",
      tts: "Ana gleda Marka.",
      options: ["Marko", "her brother", "the waiter"],
      correctIndex: 0,
      explanation: "Marko → Marka (animate ACC).",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Animate ACC:** masculine people & animals take **-a** — čekam konobar**a**, gledam Mark**a**, imam ps**a** (Unit 3's chunks, finally explained). Things stay unchanged.\n\n**htjeti:** hoću, hoćeš, hoće… negative **neću** — the fused trio *nisam · nemam · neću* is complete. hoću is direct; **želim** is the polite café voice.\n\nNext lesson: put it ALL together and order like a local — **U kafiću**.",
      vocabIds: [
        "a1u4.htjeti", "a1u4.gladan", "a1u4.zedan",
        "a1u4.kolac", "a1u4.sladoled", "a1u4.cokolada",
      ],
    },
  ],
  srsCloze: [
    { front: "Ja ___ sladoled. (want)", answers: ["hoću"], back: "Hoću sladoled.", tts: "Hoću sladoled." },
    { front: "___ li kolač? (do you want)", answers: ["hoćeš"], back: "Hoćeš li kolač?", tts: "Hoćeš li kolač?" },
    { front: "Oni ___ čokoladu. (want)", answers: ["hoće"], back: "Oni hoće čokoladu. (3pl = 3sg for htjeti)", tts: "Oni hoće čokoladu." },
    { front: "Neću kolač — “I don't want” is one word: ___", answers: ["neću"], back: "neću — the third fused negative (nisam, nemam, neću)." },
    { front: "Čekam ___. (konobar)", answers: ["konobara"], back: "Čekam konobara. (animate → -a)", tts: "Čekam konobara." },
    { front: "Čekam ___. (prijatelj)", answers: ["prijatelja"], back: "Čekam prijatelja.", tts: "Čekam prijatelja." },
    { front: "Gledam ___. (pas)", answers: ["psa"], back: "Gledam psa. (fleeting a: pas → psa)", tts: "Gledam psa." },
    { front: "The three fused negatives: nisam, nemam, ___", answers: ["neću"], back: "nisam (biti) · nemam (imati) · neću (htjeti)." },
  ],
  notes: {
    inOneSentence: {
      en: "Masculine people and animals take -a as direct objects (čekam konobara); htjeti conjugates hoću…hoće with the fused negative neću.",
      exampleHr: "Čekam konobara. · Hoću sladoled, neću kolač.",
    },
    deepDive: [
      {
        title: "The animate rule",
        body:
          "Masculine **animate** nouns (people and animals) take **-a** in the accusative singular: konobar→konobara, prijatelj→prijatelja, brat→brata, Marko→Marka, pas→psa (fleeting a), liječnik→liječnika. Masculine **inanimate** nouns are unchanged (grad, sok, kruh, jelovnik). This -a form is doing double duty: the same shape returns as the genitive in Unit 7.\n\nFeminine and neuter are untouched by animacy: sestra→sestru either way, dijete→dijete.",
        table: {
          caption: "The whole ACC singular, finished",
          headers: ["gender", "NOM", "ACC"],
          colCase: [null, "NOM", "ACC"],
          rows: [
            ["feminine -a", "kava, sestra", "kavu, sestru"],
            ["masc. animate", "konobar, pas", "konobara, psa"],
            ["masc. inanimate", "grad, sok", "grad, sok"],
            ["neuter", "meso, dijete", "meso, dijete"],
          ],
        },
      },
      {
        title: "htjeti and the fused trio",
        body:
          "**htjeti**: hoću, hoćeš, hoće, hoćemo, hoćete, hoće (3sg = 3pl). Negative: **neću, nećeš, neće…** — fused, like nisam and nemam. That's the complete fused set; every other verb takes a separate *ne*.\n\nRegister: **hoću** is direct and can sound blunt; **želim** (L3) is the politer “I'd like” — in the café you'll say *Želim jednu kavu, molim* (L5).",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "hoću vs želim",
          text: "hoću = I want (direct). želim = I'd like (polite — use it when ordering).",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Čekam konobar",
        right: "Čekam konobara",
        why: "konobar is a person — animate masculine ACC takes -a.",
      },
      {
        wrong: "Gledam Marko",
        right: "Gledam Marka",
        why: "Names are animate too: Marko → Marka.",
      },
      {
        wrong: "Gledam grada",
        right: "Gledam grad",
        why: "Animacy applies to people/animals only — things stay unchanged.",
      },
      {
        wrong: "ne hoću",
        right: "neću",
        why: "htjeti fuses its negative — neću, the third of the fused trio.",
      },
    ],
    memoryHooks: [
      "Alive → -a: konobara, prijatelja, Marka, psa. Thing → leave it: grad, sok.",
      "The fused trio is complete: niSAM · neMAM · neĆU.",
      "gladan/žedan drop their a like sretan: gladna, žedna, sretna.",
    ],
    connects: [
      { label: "Imam brata / psa — the Unit 3 chunks explained", lessonId: "a1u3l4" },
      { label: "ACC part 1: fem -u, things unchanged (Unit 4 L1)", lessonId: "a1u4l1" },
      { label: "Next: order at the café (Unit 4 L5)", lessonId: "a1u4l5" },
    ],
    selfCheck: [
      { q: "How do you say “I'm waiting for the waiter”?", a: "Čekam konobara — animate → -a." },
      { q: "Why is it “Gledam grad” with no ending?", a: "grad is inanimate — only people/animals take -a." },
      { q: "Conjugate htjeti for ja and oni.", a: "ja hoću, oni hoće." },
      { q: "What are the three fused negatives?", a: "nisam, nemam, neću." },
      { q: "What is the ACC of pas, and why?", a: "psa — animate -a plus the fleeting a drops." },
    ],
  },
};
