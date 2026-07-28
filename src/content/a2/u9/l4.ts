import type { Lesson } from "@/types/content";

/**
 * A2 U9 L4 — Vlakom ili avionom? Ne — vlak ili avion! (travel phrases;
 * putovati & letjeti). Spec: curriculum/A2/unit-9.md · grammar-reference §7.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: consolidation lesson — no new grammar machinery. "By train"
 * (bare INS vlakom) is DELIBERATELY deferred to U12; transport nouns appear
 * only as subject/object here, and the INS forms are preview-flagged as
 * heard-but-not-taught. hotel & zračna luka recycled from U5 (not re-taught);
 * "za dvije noći" is glossed as a fixed hotel chunk.
 */
export const a2u9l4: Lesson = {
  id: "a2u9l4",
  unitId: "a2u9",
  title: "Vlak ili avion?",
  titleEn: "Train or plane? — travel phrases, putovati & letjeti",
  grammarTags: ["present-tense-ujem", "travel-chunks", "verb-letjeti"],
  estMinutes: 18,
  vocab: [
    { id: "a2u9.vlak", image: "/img/vlak.png", hr: "vlak", en: "train", pos: "noun", gender: "m", icon: "🚆", exampleHr: "Vlak polazi u devet sati.", exampleEn: "The train departs at nine." },
    { id: "a2u9.avion", image: "/img/avion.png", hr: "avion", en: "plane", pos: "noun", gender: "m", icon: "✈️", exampleHr: "Avion je velik.", exampleEn: "The plane is big." },
    { id: "a2u9.let", image: "/img/let.png", hr: "let", en: "flight", pos: "noun", gender: "m", icon: "🛫", exampleHr: "Naš let je u deset sati.", exampleEn: "Our flight is at ten." },
    { id: "a2u9.letjeti", image: "/img/letjeti.png", hr: "letjeti", en: "to fly (letim)", pos: "verb", icon: "🕊️", exampleHr: "Letimo u Dubrovnik u petak.", exampleEn: "We fly to Dubrovnik on Friday." },
    { id: "a2u9.recepcija", image: "/img/recepcija.png", hr: "recepcija", en: "reception (desk)", pos: "noun", gender: "f", icon: "🛎️", exampleHr: "Gdje je recepcija?", exampleEn: "Where is the reception?" },
    { id: "a2u9.soba", image: "/img/soba.png", hr: "soba", en: "room", pos: "noun", gender: "f", icon: "🛏️", exampleHr: "Imate li sobu?", exampleEn: "Do you have a room?" },
    { id: "a2u9.kljuc", image: "/img/kljuc.png", hr: "ključ", en: "key", pos: "noun", gender: "m", icon: "🔑", exampleHr: "Izvolite ključ od sobe.", exampleEn: "Here is the key to the room." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Vlak ili avion?",
      subtitle: "Buy the ticket, catch the flight, check into the hotel — all in Croatian.",
      emoji: "🚆",
      items: [
        { emoji: "🔁", label: "putujem · letim", hint: "two travel verbs, conjugated" },
        { emoji: "🎫", label: "Jednu kartu do…, molim", hint: "the magic counter phrase" },
        { emoji: "🛎️", label: "Hotel check-in", hint: "recepcija → ključ → soba" },
        { emoji: "🎤", label: "Order a ticket", hint: "out loud, start to finish" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Checking in",
      subtitle: "First hear the whole hotel scene — then take the verbs apart.",
      emoji: "🛎️",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "kupujem — the U7 pattern returns" },
        { emoji: "🗣️", label: "The check-in dialogue", hint: "recepcija → ključ → soba" },
        { emoji: "📊", label: "putujem & letim", hint: "full tables, endings bolded" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: a pattern you already own",
      items: [
        {
          prompt: "Unit 7: kupovati (to buy) → »Ja ___ kartu.«",
          options: ["kupujem", "kupovam", "kupim"],
          correctIndex: 0,
          explanation: "-ovati → -ujem: kupujem. Today putovati does exactly the same trick.",
        },
        {
          prompt: "L3 route check: »Putujemo iz Zagreba ___ Splita.«",
          options: ["do", "od", "bez"],
          correctIndex: 0,
          explanation: "iz + start … do + goal.",
        },
        {
          prompt: "Listen — what will he book? (L2 verb)",
          tts: "Rezervirat ću sjedalo.",
          options: ["a seat", "a ticket", "a room"],
          correctIndex: 0,
          explanation: "sjedalo = seat; rezervirat ću = I'll book.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the transport & hotel words",
      vocabIds: ["a2u9.vlak", "a2u9.avion", "a2u9.let", "a2u9.letjeti", "a2u9.recepcija", "a2u9.soba", "a2u9.kljuc"],
    },
    {
      id: "s05",
      type: "teach",
      title: "Hotel check-in — hear the whole scene",
      body:
        "Every check-in in Croatia runs on these four lines. *(za dvije noći = for two nights — a fixed chunk for now; hotel and zračna luka you know from Unit 5.)*",
      diagram: {
        kind: "flow",
        steps: [
          { label: "recepcija", emoji: "🛎️", example: "Dobar dan! Imate li sobu?" },
          { label: "ključ", emoji: "🔑", example: "Izvolite ključ od sobe." },
          { label: "soba", emoji: "🛏️", example: "Soba je krasna!" },
        ],
      },
      examples: [
        { hr: "Dobar dan! Imate li sobu za dvije noći?", en: "Good day! Do you have a room for two nights?", note: "za dvije noći — the fixed chunk" },
        { hr: "Imamo. Soba je blizu recepcije.", en: "We do. The room is near the reception.", highlight: { text: "recepcije", caseId: "GEN" } },
        { hr: "Izvolite ključ od sobe.", en: "Here is the key to the room.", note: "ključ od sobe — od + GEN" },
        { hr: "Hvala! Gdje je recepcija? — Recepcija je tu.", en: "Thanks! Where is the reception? — The reception is here." },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "putujem & letim — the two travel verbs",
      body:
        "**putovati** behaves exactly like U7's *kupovati*: **-ovati → -ujem**. **letjeti** is a clean **-im** verb.\n\nAnd the lesson title? *Vlakom ili avionom* (“by train or by plane”) needs a case you meet in **Unit 12** — until then, keep transport as subject or object: *Vlak polazi… Avion leti… Čekam vlak.*",
      table: {
        caption: "putovati (-ujem) · letjeti (-im)",
        headers: ["person", "putovati → putujem", "letjeti → letim"],
        rows: [
          ["ja", "putujem", "letim"],
          ["ti", "putuješ", "letiš"],
          ["on / ona", "putuje", "leti"],
          ["mi", "putujemo", "letimo"],
          ["vi", "putujete", "letite"],
          ["oni / one", "putuju", "lete"],
        ],
      },
      examples: [
        { hr: "Letimo u Dubrovnik u petak.", en: "We fly to Dubrovnik on Friday." },
        { hr: "Putujem u Split, a Ana putuje na otok.", en: "I'm travelling to Split, and Ana is travelling to the island." },
        { hr: "Avion leti u deset sati.", en: "The plane flies at ten o'clock." },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: verbs & the counter phrase",
      items: [
        {
          prompt: "putovati → »Mi ___ na more.«",
          options: ["putujemo", "putovamo", "putimo"],
          correctIndex: 0,
          explanation: "-ovati → -ujemo: putujemo (like kupujemo).",
        },
        {
          prompt: "letjeti → »Oni ___ u Dubrovnik.«",
          options: ["lete", "letiju", "letaju"],
          correctIndex: 0,
          explanation: "-im class, 3rd plural lete (like vole).",
        },
        {
          prompt: "Which is correct — for now?",
          options: ["Putujem u Split.", "Putujem s vlakom u Split.", "Putujem na vlak u Split."],
          correctIndex: 0,
          explanation: "»By train« (vlakom) needs the instrumental — that's Unit 12. Until then: Putujem u Split, and let vlak be the subject: Vlak polazi u devet.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "At the counter and the gate — tap to hear",
      items: [
        { hr: "Jednu kartu do Splita, molim.", en: "One ticket to Split, please.", highlight: { text: "Splita", caseId: "GEN" } },
        { hr: "Vlak polazi u devet sati, a avion leti u deset.", en: "The train departs at nine, and the plane flies at ten." },
        { hr: "Naš let je u deset sati.", en: "Our flight is at ten o'clock." },
        { hr: "Zračna luka je blizu grada.", en: "The airport is near the city.", highlight: { text: "grada", caseId: "GEN" } },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Dobar dan! Imate li ___ za dvije noći? (a room)",
      blanks: [["sobu"]],
      translation: "Good day! Do you have a room for two nights?",
      wordBank: ["sobu", "soba", "sobe"],
      explanation: "Object of imati → ACC: soba → sobu.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Izvolite ___ od sobe. (the key)",
      blanks: [["ključ"]],
      translation: "Here is the key to the room.",
      wordBank: ["ključ", "ključa", "recepciju"],
      explanation: "ključ (m inanimate) — ACC looks like NOM: Izvolite ključ.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Jednu kartu ___ Splita, molim.",
      blanks: [["do"]],
      translation: "One ticket to Split, please.",
      wordBank: ["do", "od", "iz"],
      explanation: "do + GEN = to/as far as: do Splita — the counter formula.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Your turn to travel",
      subtitle: "Order, check in, listen — then say it at the counter.",
      emoji: "🎫",
      items: [
        { emoji: "⌨️", label: "Type the phrases", hint: "ticket & room" },
        { emoji: "🎧", label: "Dictation ×2", hint: "one has a slow replay" },
        { emoji: "🔀", label: "Build the order", hint: "Jednu kartu…" },
        { emoji: "🎤", label: "Order out loud", hint: "the whole phrase" },
      ],
    },
    {
      id: "s13",
      type: "type",
      prompt: "Order at the counter: “One ticket to Split, please.”",
      answers: ["Jednu kartu do Splita, molim.", "Jednu kartu do Splita molim", "Jednu kartu do Splita, molim"],
      hint: "jedna karta → ACC + do + GEN",
      explanation: "Jednu kartu do Splita, molim.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Ask at the hotel: “Do you have a room?” (polite vi)",
      answers: ["Imate li sobu?", "Imate li sobu"],
      explanation: "Imate li sobu? — imati + ACC (sobu), li right after the verb.",
    },
    {
      id: "s15",
      type: "listen-type",
      tts: "Zračna luka je blizu grada.",
      allowSlow: true,
      explanation: "Zračna luka je blizu grada — the airport is near the city.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Letimo u Dubrovnik u petak.",
      explanation: "Letimo u Dubrovnik u petak — we fly to Dubrovnik on Friday.",
    },
    {
      id: "s17",
      type: "quiz-set",
      review: true,
      title: "Flashback: courtesy, prices and directions",
      items: [
        {
          prompt: "Unit 1 courtesy at the counter — the clerk hands you the ticket and says:",
          options: ["Izvolite!", "Molim?", "Oprostite!"],
          correctIndex: 0,
          explanation: "Izvolite! = here you are (U1). You answer: Hvala!",
        },
        {
          prompt: "Listen (U7 prices): how much is the ticket?",
          tts: "Karta košta deset eura.",
          options: ["ten euros", "nine euros", "five euros"],
          correctIndex: 0,
          explanation: "deset eura = ten euros (5+ → GEN pl, the U7 pattern).",
        },
        {
          prompt: "Unit 5 directions: »Idemo ___ otok.« (TO the island)",
          options: ["na", "u", "do"],
          correctIndex: 0,
          explanation: "otok is a na-word: na otok (direction → ACC).",
        },
      ],
    },
    {
      id: "s18",
      type: "reorder",
      words: ["Jednu", "kartu", "do", "Splita", "molim"],
      answers: ["Jednu kartu do Splita, molim.", "Jednu kartu do Splita molim", "Jednu kartu do Splita, molim"],
      en: "One ticket to Split, please.",
      explanation: "The counter formula: Jednu kartu + do + GEN + molim.",
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Jednu kartu do Splita, molim.",
      targetEn: "order a ticket out loud — One ticket to Split, please.",
      phonetic: "YED-noo KAR-too do SPLEE-ta, MO-leem",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**Two travel verbs:** putovati → **putujem** (the U7 -ovati → -ujem pattern) · letjeti → **letim** (clean -im class, oni **lete**).\n\n**Three chunks that carry a whole trip:** *Jednu kartu do…, molim.* · *Imate li sobu (za dvije noći)?* · *Gdje je recepcija?*\n\n**Deliberately parked:** “by train” = *vlakom* needs the instrumental — Unit 12. Until then transport is subject/object: *Vlak polazi u devet.*\n\nWords tonight: **vlak, avion, let, letjeti, recepcija, soba, ključ**.\n\nNext lesson: plan the whole trip — *spakirati → krenuti → stići*.",
      vocabIds: ["a2u9.vlak", "a2u9.avion", "a2u9.let", "a2u9.letjeti", "a2u9.recepcija", "a2u9.soba", "a2u9.kljuc"],
    },
  ],
  srsCloze: [
    { front: "putovati → ja ___ (I travel)", answers: ["putujem"], back: "putovati → putujem (-ovati → -ujem, like kupujem)", tts: "Putujem u Split." },
    { front: "letjeti → mi ___ (we fly)", answers: ["letimo"], back: "letjeti → letimo (-im class)", tts: "Letimo u Dubrovnik." },
    { front: "letjeti → oni ___ (they fly)", answers: ["lete"], back: "oni lete (3rd plural of -im verbs)", tts: "Oni lete u petak." },
    { front: "Jednu kartu ___ Splita, molim. (to)", answers: ["do"], back: "Jednu kartu do Splita, molim. (do + GEN)", tts: "Jednu kartu do Splita, molim." },
    { front: "Imate li ___ za dvije noći? (a room)", answers: ["sobu"], back: "Imate li sobu za dvije noći? (ACC sobu)", tts: "Imate li sobu za dvije noći?" },
    { front: "ključ ___ sobe (the key to the room)", answers: ["od"], back: "ključ od sobe (od + GEN)", tts: "ključ od sobe" },
  ],
  notes: {
    inOneSentence: {
      en: "putovati conjugates as putujem (-ovati → -ujem) and letjeti as letim, and three fixed chunks handle tickets, rooms and reception.",
      exampleHr: "Jednu kartu do Splita, molim. · Imate li sobu? · Gdje je recepcija?",
    },
    deepDive: [
      {
        title: "The -ovati → -ujem family grows",
        body:
          "Unit 7 gave you *kupovati → kupujem*. **putovati** joins the same family: the -ova- of the infinitive becomes **-uje-** in the present.\n\n**letjeti** is a straightforward **-im** verb (like *voljeti → volim*): letim, letiš, leti… oni **lete**.\n\nRemember the golden rule from Unit 4: the infinitive doesn't predict the class — learn the 1sg with each verb (*putovati/putujem*, *letjeti/letim*).",
        table: {
          caption: "The full tables",
          headers: ["person", "putovati", "letjeti"],
          rows: [
            ["ja", "putujem", "letim"],
            ["ti", "putuješ", "letiš"],
            ["on / ona", "putuje", "leti"],
            ["mi", "putujemo", "letimo"],
            ["vi", "putujete", "letite"],
            ["oni / one", "putuju", "lete"],
          ],
        },
      },
      {
        title: "The check-in map",
        body: "Croatian hotels run the same three-beat script every time — walk it with the diagram:",
        diagram: {
          kind: "flow",
          steps: [
            { label: "recepcija", emoji: "🛎️", example: "Imate li sobu za dvije noći?" },
            { label: "ključ", emoji: "🔑", example: "Izvolite ključ od sobe." },
            { label: "soba", emoji: "🛏️", example: "Soba je blizu recepcije." },
          ],
        },
      },
      {
        title: "Why not »vlakom« yet",
        body:
          "You WILL hear Croatians say *Putujem vlakom* (“I travel by train”) — that bare-instrumental construction is the star of **Unit 12**. Until then the course keeps transport in cases you own:\n\n- subject: *Vlak polazi u devet.* / *Avion leti u deset.*\n- object: *Čekam vlak.* (čekati = to wait — coming soon)\n- and your route: *Putujem u Split.* / *Letimo u Dubrovnik.*\n\nFlag it as heard-but-not-taught: recognize it, don't produce it yet.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Putovam u Split.",
        right: "Putujem u Split.",
        why: "-ovati verbs flip to -ujem in the present: putovati → putujem (like kupujem).",
      },
      {
        wrong: "Oni letiju u Dubrovnik.",
        right: "Oni lete u Dubrovnik.",
        why: "-im verbs take -e in the 3rd plural: lete (like vole).",
      },
      {
        wrong: "Putujem s vlakom u Split.",
        right: "Putujem u Split. (vlakom — wait for Unit 12)",
        why: "»By train« is a bare instrumental (no s!) that arrives in U12; until then keep vlak as subject/object.",
      },
      {
        wrong: "Jedna karta do Splita, molim.",
        right: "Jednu kartu do Splita, molim.",
        why: "You're asking for the ticket — object → ACC: jednu kartu.",
      },
    ],
    memoryHooks: [
      "kupujem, putujem — the -ovati verbs all -uju together.",
      "letim sounds like a jet taking off: leeee-tim ✈️.",
      "Counter formula: Jednu kartu + do + city-GEN + molim — four slots, never changes.",
      "Check-in beat: recepcija → ključ → soba (ask → receive → sleep).",
    ],
    connects: [
      { label: "kupovati → kupujem (Unit 7 L5)", lessonId: "a1u7l5" },
      { label: "GEN prepositions for routes (Unit 9 L3)", lessonId: "a2u9l3" },
      { label: "Next: plan the whole trip (Unit 9 L5)", lessonId: "a2u9l5" },
    ],
    selfCheck: [
      { q: "Conjugate putovati for mi and oni.", a: "mi putujemo, oni putuju." },
      { q: "“We fly to Dubrovnik on Friday” = ?", a: "Letimo u Dubrovnik u petak." },
      { q: "Order one ticket to Split.", a: "Jednu kartu do Splita, molim." },
      { q: "Why is »Putujem s vlakom« flagged for later?", a: "»By train« is the bare instrumental (vlakom) — it arrives in Unit 12; for now keep transport as subject/object." },
      { q: "Ask if they have a room for two nights.", a: "Imate li sobu za dvije noći?" },
    ],
  },
};
