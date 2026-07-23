import type { Lesson } from "@/types/content";

/**
 * A1 U4 L5 — U kafiću (Ordering: Želim/Molim + ACC, unit review)
 * Spec: curriculum/A1/unit-4.md · grammar-reference §3, §7.
 *
 * Level guard: no new machinery — the café transaction script with Želim/Molim
 * + ACC and jedan/jednu/jedno agreement. »U kafiću« itself is a set phrase
 * (the location case arrives in Unit 5). nešto appears once, glossed (spec).
 */
export const a1u4l5: Lesson = {
  id: "a1u4l5",
  unitId: "a1u4",
  title: "U kafiću",
  titleEn: "At the café — ordering",
  grammarTags: ["ordering", "accusative", "review"],
  estMinutes: 18,
  vocab: [
    { id: "a1u4.jelovnik", hr: "jelovnik", en: "menu", pos: "noun", gender: "m", icon: "📋", exampleHr: "Jelovnik, molim.", exampleEn: "The menu, please." },
    { id: "a1u4.racun", hr: "račun", en: "bill / check", pos: "noun", gender: "m", icon: "🧾", exampleHr: "Račun, molim!", exampleEn: "The bill, please!" },
    { id: "a1u4.kafic", hr: "kafić", en: "café", pos: "noun", gender: "m", icon: "☕", exampleHr: "Marko je u kafiću.", exampleEn: "Marko is at the café." },
    { id: "a1u4.restoran", hr: "restoran", en: "restaurant", pos: "noun", gender: "m", icon: "🍽️", exampleHr: "Restoran je nov.", exampleEn: "The restaurant is new." },
    { id: "a1u4.jos", hr: "još", en: "more / another", pos: "adv", icon: "➕", exampleHr: "Još jednu kavu, molim.", exampleEn: "One more coffee, please." },
    { id: "a1u4.dobar-tek", hr: "Dobar tek!", en: "enjoy your meal!", pos: "phrase", icon: "😋", exampleHr: "Dobar tek! — Hvala!", exampleEn: "Enjoy your meal! — Thanks!" },
    { id: "a1u4.zivjeli", hr: "Živjeli!", en: "cheers!", pos: "phrase", icon: "🥂", exampleHr: "Živjeli!", exampleEn: "Cheers!" },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "U kafiću",
      subtitle: "Your first complete real-world win: order, eat, pay — all in Croatian.",
      emoji: "☕",
      items: [
        { emoji: "🗺️", label: "The café script", hint: "order → Izvolite → Dobar tek → Račun" },
        { emoji: "1️⃣", label: "jedan · jednu · jedno", hint: "one kava? one sok? one pivo?" },
        { emoji: "🎭", label: "Marko's café", hint: "the story cast serves you" },
        { emoji: "🎯", label: "Whole-unit sweep", hint: "ACC · verbs · htjeti" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The café script",
      subtitle: "Five lines carry the whole transaction — learn the loop.",
      emoji: "🗺️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "hoću/neću + konobara from L4" },
        { emoji: "🗣️", label: "Želim…, molim", hint: "the polite ordering frame" },
        { emoji: "🎧", label: "Hear the whole exchange", hint: "then say it yourself" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: wants & waiters",
      items: [
        {
          prompt: "From L4: “I don't want cake” — Ne, ___ kolač.",
          options: ["neću", "ne hoću", "nemam"],
          correctIndex: 0,
          explanation: "htjeti fuses: neću.",
        },
        {
          prompt: "From L4: Čekam ___. (konobar)",
          options: ["konobara", "konobar", "konobaru"],
          correctIndex: 0,
          explanation: "A person → animate ACC -a.",
        },
        {
          prompt: "Listen: is she hungry or thirsty?",
          tts: "Jako sam žedna.",
          options: ["thirsty", "hungry", "tired"],
          correctIndex: 0,
          explanation: "žedna = thirsty (f) — the fleeting-a pair of žedan.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet today's café words",
      vocabIds: [
        "a1u4.jelovnik", "a1u4.racun", "a1u4.kafic", "a1u4.restoran",
        "a1u4.jos", "a1u4.dobar-tek", "a1u4.zivjeli",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The café script — five lines, one loop",
      body:
        "In a **kafić** (café) or **restoran**, one polite frame does everything: **Želim + [thing in ACC], molim.** — *Želim jednu kavu i jedan sok, molim.*\n\n**jedan** (one) agrees like everything else: **jednu** kavu (f) · **jedan** sok (m) · **jedno** pivo (n). Ask for the **jelovnik** (menu), wish **Dobar tek!** (enjoy!), clink with **Živjeli!** (cheers!), want more? **Još jednu kavu, molim.** And to finish: **Račun, molim!**",
      diagram: {
        kind: "flow",
        steps: [
          { label: "Greet & order", emoji: "🗣️", example: "Dobar dan! Želim jednu kavu, molim." },
          { label: "Served", emoji: "🤲", example: "Izvolite! — Hvala!" },
          { label: "Enjoy", emoji: "😋", example: "Dobar tek! · Živjeli!" },
          { label: "Pay & go", emoji: "🧾", example: "Račun, molim! — Doviđenja!" },
        ],
      },
      table: {
        caption: "jedan agrees with the thing you order (ACC)",
        headers: ["gender", "order it", "example"],
        rows: [
          ["feminine", "jednu ___", "Jednu kavu / juhu, molim."],
          ["masculine", "jedan ___", "Jedan sok / kolač, molim."],
          ["neuter", "jedno ___", "Jedno pivo, molim."],
        ],
      },
      examples: [
        { hr: "Želim jednu kavu i jedan sok, molim.", en: "I'd like one coffee and one juice, please.", highlight: { text: "jednu kavu", caseId: "ACC" } },
        { hr: "Jelovnik, molim.", en: "The menu, please." },
        { hr: "Račun, molim!", en: "The bill, please!" },
      ],
    },
    {
      id: "s06",
      type: "example",
      title: "Hear the whole exchange",
      items: [
        { hr: "Konobar: Dobar dan! Izvolite?", en: "Waiter: Good day! What can I get you?" },
        { hr: "Tom: Dobar dan! Želim jednu juhu i jedan kruh, molim.", en: "Tom: Good day! I'd like one soup and one bread, please." },
        { hr: "Konobar: Izvolite. Dobar tek!", en: "Waiter: Here you are. Enjoy your meal!" },
        { hr: "Tom: Hvala! … Račun, molim!", en: "Tom: Thanks! … The bill, please!" },
        { hr: "Konobar: Izvolite. Doviđenja!", en: "Waiter: Here you are. Goodbye!" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: the polite order",
      items: [
        {
          prompt: "The politest way to order a coffee:",
          options: ["Želim kavu, molim.", "Hoću kavu!", "Kava!"],
          correctIndex: 0,
          explanation: "želim + molim is the café register; hoću sounds blunt.",
        },
        {
          prompt: "The waiter says »Dobar tek!« — you say:",
          options: ["Hvala!", "Doviđenja!", "Izvolite!"],
          correctIndex: 0,
          explanation: "Answer a wish with thanks — Hvala!",
        },
        {
          prompt: "Everyone raises a glass. You say:",
          options: ["Živjeli!", "Dobar tek!", "Račun, molim!"],
          correctIndex: 0,
          explanation: "Živjeli! = cheers!",
        },
      ],
    },
    {
      id: "s08",
      type: "match",
      prompt: "Match the café word to English",
      pairs: [
        { a: "jelovnik", b: "menu" },
        { a: "račun", b: "bill" },
        { a: "kafić", b: "café" },
        { a: "restoran", b: "restaurant" },
      ],
    },
    {
      id: "s09",
      type: "section",
      title: "Part 2 · Order & review",
      subtitle: "Run the script yourself — then a sweep of the whole unit.",
      emoji: "🎯",
      items: [
        { emoji: "🧩", label: "Cloze the dialogue", hint: "Izvolite · Želim · Račun" },
        { emoji: "🔀", label: "Build an order", hint: "želim · jednu · juhu · molim" },
        { emoji: "🎤", label: "Order a meal aloud", hint: "from the jelovnik" },
        { emoji: "🔁", label: "Whole-unit sweep", hint: "ACC · 3 verb classes · htjeti" },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Konobar: ___! Gost: Hvala!",
      blanks: [["Izvolite"]],
      translation: "Waiter: Here you are! Guest: Thanks!",
      wordBank: ["Izvolite", "Živjeli", "Doviđenja"],
      explanation: "Izvolite = “here you are / what can I get you” (Unit 1).",
    },
    {
      id: "s11",
      type: "fill",
      text: "___ jednu juhu, molim.",
      blanks: [["Želim"]],
      translation: "I'd like one soup, please.",
      wordBank: ["Želim", "Hoću", "Volim"],
      explanation: "The polite café frame: Želim…, molim.",
    },
    {
      id: "s12",
      type: "fill",
      text: "___, molim!",
      blanks: [["Račun"]],
      translation: "The bill, please!",
      wordBank: ["Račun", "Jelovnik", "Kolač"],
      explanation: "Finish the meal with Račun, molim!",
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Želim", "jednu", "juhu", "molim"],
      answers: ["Želim jednu juhu, molim.", "Želim jednu juhu molim"],
      en: "I'd like one soup, please.",
      explanation: "The ordering frame: Želim + jednu juhu (ACC) + molim.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Order it in Croatian: “One beer, please.”",
      answers: ["Jedno pivo, molim.", "Jedno pivo, molim", "jedno pivo molim"],
      explanation: "pivo is neuter → jedno pivo (no ACC change).",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “The bill, please.”",
      answers: ["Račun, molim.", "Račun, molim", "račun molim"],
      explanation: "Račun, molim! — the classic exit line.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Želite li još nešto?",
      explanation: "Želite li još nešto? — Would you like anything else? (nešto = something; još = more)",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Jednu kavu i jedan sok, molim.",
      explanation: "Jednu kavu i jedan sok, molim — jednu (f) but jedan (m).",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Želim jednu juhu i jedno pivo, molim.",
      targetEn: "order a full meal aloud — I'd like one soup and one beer, please.",
      phonetic: "ZHEH-leem YED-noo YOO-hoo ee YED-no PEE-vo, MO-leem",
    },
    {
      id: "s19",
      type: "quiz-set",
      title: "At Marko's café",
      items: [
        {
          prompt: "Marko: »Izvolite?« Tom wants soup. He says:",
          options: ["Želim jednu juhu, molim.", "Juha!", "Imam juhu."],
          correctIndex: 0,
          explanation: "Polite frame + ACC: Želim jednu juhu, molim.",
        },
        {
          prompt: "Ana finishes and wants to pay. She says:",
          options: ["Račun, molim!", "Dobar tek!", "Živjeli!"],
          correctIndex: 0,
          explanation: "Račun, molim! = the bill, please.",
        },
      ],
    },
    {
      id: "s20",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep",
      items: [
        {
          prompt: "L1: Pijem ___. (kava)",
          options: ["kavu", "kava", "kave"],
          correctIndex: 0,
          explanation: "Feminine -a → -u.",
        },
        {
          prompt: "L2: Mi ___ ručak. (kuhati)",
          options: ["kuhamo", "kuhaju", "kuhate"],
          correctIndex: 0,
          explanation: "mi → kuhamo (-am class).",
        },
        {
          prompt: "L3: Oni ___ vino. (piti)",
          options: ["piju", "pijaju", "pije"],
          correctIndex: 0,
          explanation: "-em class 3pl → piju.",
        },
        {
          prompt: "L4: Ana gleda ___. (Marko)",
          options: ["Marka", "Marko", "Marku"],
          correctIndex: 0,
          explanation: "Names are animate → Marka.",
        },
      ],
    },
    {
      id: "s21",
      type: "quiz-set",
      review: true,
      title: "Whole-unit sweep II",
      items: [
        {
          prompt: "L1: Jedem ___. (meso)",
          options: ["meso", "mesu", "mesa"],
          correctIndex: 0,
          explanation: "Neuter — no ACC change.",
        },
        {
          prompt: "L2: “I'm not cooking” =",
          options: ["ne kuham", "nekuham", "nisam kuham"],
          correctIndex: 0,
          explanation: "ne + verb, two words.",
        },
        {
          prompt: "L4: “I don't want cake” =",
          options: ["Neću kolač.", "Ne hoću kolač.", "Nemam kolač."],
          correctIndex: 0,
          explanation: "The fused neću.",
        },
        {
          prompt: "Listen: what does she order?",
          tts: "Želim jednu čokoladu i jedan sladoled, molim.",
          options: ["a chocolate and an ice cream", "a cake and a coffee", "a soup and bread"],
          correctIndex: 0,
          explanation: "čokoladu (f → -u) + sladoled (m, unchanged).",
        },
      ],
    },
    {
      id: "s22",
      type: "recap",
      summary:
        "**Unit 4 complete — and you can survive a Croatian café!** The script: *Dobar dan! Želim jednu kavu i jedan sok, molim. — Izvolite! — Hvala! Dobar tek! … Račun, molim!*\n\nYou now own the **whole ACC singular** (kavu · konobara · sok/meso unchanged), **all three verb classes** (-am, -im, -em + jedem), and the **fused trio** (nisam, nemam, neću).\n\nNext unit: WHERE things happen — the **locative** (u kafiću, u Zagrebu) — the phrase in this lesson's title, explained.",
      vocabIds: [
        "a1u4.jelovnik", "a1u4.racun", "a1u4.kafic", "a1u4.restoran",
        "a1u4.jos", "a1u4.dobar-tek", "a1u4.zivjeli",
      ],
    },
  ],
  srsCloze: [
    { front: "___ jednu kavu, molim. (I'd like)", answers: ["želim"], back: "Želim jednu kavu, molim. (the polite frame)", tts: "Želim jednu kavu, molim." },
    { front: "Konobar: ___! — Hvala! (here you are)", answers: ["izvolite"], back: "Izvolite! — Hvala!", tts: "Izvolite!" },
    { front: "___, molim! (the bill)", answers: ["račun"], back: "Račun, molim!", tts: "Račun, molim!" },
    { front: "Jednu kavu i ___ sok, molim. (one — m)", answers: ["jedan"], back: "jedan sok — jedan agrees: jednu (f), jedan (m), jedno (n).", tts: "Jednu kavu i jedan sok, molim." },
    { front: "___ pivo, molim. (one — n)", answers: ["jedno"], back: "Jedno pivo, molim.", tts: "Jedno pivo, molim." },
    { front: "Waiter wishes »Dobar ___!« before you eat.", answers: ["tek"], back: "Dobar tek! — answer with Hvala!", tts: "Dobar tek!" },
    { front: "Glasses up: »___!« (cheers)", answers: ["živjeli"], back: "Živjeli! = cheers!", tts: "Živjeli!" },
    { front: "One MORE coffee: »___ jednu kavu, molim.«", answers: ["još"], back: "Još jednu kavu, molim.", tts: "Još jednu kavu, molim." },
  ],
  notes: {
    inOneSentence: {
      en: "Order with Želim + accusative + molim, agree jedan/jednu/jedno with the thing, and close with Račun, molim.",
      exampleHr: "Želim jednu kavu i jedan sok, molim. · Račun, molim!",
    },
    deepDive: [
      {
        title: "The transaction script",
        body:
          "The whole café visit runs on lines you own: greet (*Dobar dan!*), order (**Želim + ACC, molim** — or just *Jednu kavu, molim*), receive (*Izvolite* → *Hvala*), enjoy (*Dobar tek!* → *Hvala!*; *Živjeli!* with drinks), extend (*Još jednu kavu, molim*), pay (*Račun, molim!*), leave (*Doviđenja!*).\n\n**jedan** agrees with the ordered thing in ACC: **jednu** kavu/juhu (f), **jedan** sok/kolač (m), **jedno** pivo (n).\n\nNote: the title *U kafiću* is a set phrase for now — the u + location machinery is Unit 5's opening act.",
        table: {
          caption: "Ordering frames",
          headers: ["frame", "example"],
          rows: [
            ["Želim + ACC, molim", "Želim jednu juhu, molim."],
            ["[ACC], molim", "Jednu kavu, molim. · Račun, molim."],
            ["Još + ACC, molim", "Još jedan sok, molim."],
          ],
        },
      },
      {
        title: "Register: želim vs hoću (and real-life NOM orders)",
        body:
          "**Želim…, molim** is the course's ordering voice — polite everywhere. **Hoću kavu** is grammatical but blunt at a counter. In real cafés you'll also *hear* nominative orders (*Jedna kava, molim*) — understand them, but the course pattern stays **Jednu kavu, molim** (ACC), which is always correct.",
        diagram: {
          kind: "callout",
          tone: "info",
          title: "Heard ≠ taught",
          text: "You'll hear »Jedna kava, molim« in the wild. Fine to understand — but say »Jednu kavu, molim«.",
        },
      },
    ],
    commonMistakes: [
      {
        wrong: "Želim kava",
        right: "Želim kavu",
        why: "The ordered thing is a direct object → accusative (kava → kavu).",
      },
      {
        wrong: "Jedan kavu, molim",
        right: "Jednu kavu, molim",
        why: "jedan agrees with the noun: kava is feminine → jednu.",
      },
      {
        wrong: "(silence after »Dobar tek!«)",
        right: "Hvala!",
        why: "A wish gets thanks — answering with silence reads as cold.",
      },
      {
        wrong: "Kava! (ordering without molim)",
        right: "Jednu kavu, molim.",
        why: "Without molim the order sounds abrupt — molim is the politeness engine.",
      },
    ],
    memoryHooks: [
      "The loop: order → Izvolite → Hvala → Dobar tek → Račun, molim → Doviđenja.",
      "jedan/jednu/jedno — “one” dresses to match what you order.",
      "još = the more-button: Još jednu kavu, molim.",
    ],
    connects: [
      { label: "Izvolite / Hvala / Doviđenja — the Unit 1 courtesy loop", lessonId: "a1u1l5" },
      { label: "The ACC these orders ride on (Unit 4 L1 & L4)", lessonId: "a1u4l1" },
      { label: "Next unit: u kafiću explained — the locative (A1 U5)", lessonId: "a1u5l1" },
    ],
    selfCheck: [
      { q: "Order “one coffee and one juice” politely.", a: "Želim jednu kavu i jedan sok, molim." },
      { q: "The waiter says »Dobar tek!« — what do you say?", a: "Hvala!" },
      { q: "How do you ask for the bill?", a: "Račun, molim!" },
      { q: "Why jednu kavu but jedno pivo?", a: "jedan agrees: kava is feminine (ACC jednu), pivo neuter (jedno)." },
      { q: "How do you ask for one more juice?", a: "Još jedan sok, molim." },
    ],
  },
};
