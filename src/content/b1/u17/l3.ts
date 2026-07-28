import type { Lesson } from "@/types/content";

/**
 * B1 U17 L3 — Slušam radio (suppletive pairs & the habit rule)
 * Spec: curriculum/B1/unit-17.md · grammar-reference §11 "Pair-formation patterns" #4.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The four brute-memorize pairs: govoriti/reći, dolaziti/doći, odlaziti/otići,
 * uzimati/uzeti. Payoff lesson: doći ću (U9), uzeti tabletu (U11) explained.
 * odlaziti appears in the teach table only — recognition, never quizzed for
 * production (not carded).
 */
export const b1u17l3: Lesson = {
  id: "b1u17l3",
  unitId: "b1u17",
  title: "Slušam radio",
  titleEn: "Listening to the radio — the suppletive four",
  grammarTags: ["aspect-formation", "aspect-suppletive", "aspect-habits"],
  estMinutes: 20,
  vocab: [
    { id: "b1u17.radio", image: "/img/radio.png", hr: "radio", en: "radio (m; GEN radija)", pos: "noun", gender: "m", icon: "📻", exampleHr: "Ujutro slušam radio.", exampleEn: "In the morning I listen to the radio." },
    { id: "b1u17.slusatelj", image: "/img/slusatelj.png", hr: "slušatelj", en: "listener (m — the -telj people)", pos: "noun", gender: "m", icon: "🎧", exampleHr: "Slušatelji vole glazbu.", exampleEn: "The listeners love music." },
    { id: "b1u17.reci", image: "/img/reci.png", hr: "reći", en: "to say (pf; rekao/rekla — \"I say\" = kažem)", pos: "verb", icon: "💬", exampleHr: "Baka je rekla: »Dolazim sutra!«", exampleEn: "Grandma said: \"I'm coming tomorrow!\"" },
    { id: "b1u17.dolaziti", image: "/img/dolaziti.png", hr: "dolaziti", en: "to come (impf; dolazim)", pos: "verb", icon: "🚶", exampleHr: "Tom dolazi svaki dan.", exampleEn: "Tom comes every day." },
    { id: "b1u17.doci", image: "/img/doci.png", hr: "doći", en: "to come / arrive (pf; dođem, došao — U9's doći ću!)", pos: "verb", icon: "🏁", exampleHr: "Danas je došao rano.", exampleEn: "Today he came early." },
    { id: "b1u17.otici", image: "/img/otici.png", hr: "otići", en: "to leave (pf; odem, otišao)", pos: "verb", icon: "🚪", exampleHr: "Uzeo sam novine i otišao.", exampleEn: "I took the paper and left." },
    { id: "b1u17.uzimati", image: "/img/uzimati.png", hr: "uzimati", en: "to take (impf; uzimam)", pos: "verb", icon: "✋", exampleHr: "Baka uzima lijek svaki dan.", exampleEn: "Grandma takes her medicine every day." },
    { id: "b1u17.uzeti", image: "/img/uzeti.png", hr: "uzeti", en: "to take (pf; uzmem, uzeo — the U11 chunk!)", pos: "verb", icon: "🤲", exampleHr: "Tom je uzeo novine.", exampleEn: "Tom took the newspaper." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Slušam radio",
      subtitle: "Some pairs weren't built by any machine — they're two different words. You already use four of them.",
      emoji: "📻",
      items: [
        { emoji: "🧬", label: "The suppletive four", hint: "govoriti/reći, dolaziti/doći…" },
        { emoji: "🎁", label: "Old chunks decoded", hint: "doći ću · uzeti tabletu" },
        { emoji: "🔁", label: "The habit rule", hint: "habits = imperfective, ALWAYS" },
        { emoji: "📻", label: "Radio words", hint: "radio (GEN radija!), slušatelj" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · Two words, one action",
      subtitle: "No prefix, no -nu-, no stem to stretch — just memorize these four. They're worth it.",
      emoji: "🧬",
      items: [
        { emoji: "🔥", label: "Warm-up", hint: "machines 1–3" },
        { emoji: "🃏", label: "New words", hint: "the radio eight" },
        { emoji: "🧬", label: "The table", hint: "the only four to brute-learn" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: three machines, one minute",
      items: [
        {
          prompt: "dignuti → which machine built it?",
          options: ["-nuti (machine 2)", "prefix (machine 1)", "stem change (machine 3)"],
          correctIndex: 0,
          explanation: "dizati → dig-nuti. And the past? digao, digla.",
        },
        {
          prompt: "Listen (U11): what must you do?",
          tts: "Morate uzeti tabletu dva puta na dan.",
          options: ["take a pill twice a day", "buy pills at the pharmacy", "call the doctor twice"],
          correctIndex: 0,
          explanation: "uzeti — today you finally meet this verb properly.",
        },
        {
          prompt: "»Danas sam ___ cijeli članak.« (finished)",
          options: ["pročitao", "čitao", "čitam"],
          correctIndex: 0,
          explanation: "Whole article, done → perfective.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "The radio eight",
      vocabIds: [
        "b1u17.radio", "b1u17.slusatelj", "b1u17.reci", "b1u17.dolaziti",
        "b1u17.doci", "b1u17.otici", "b1u17.uzimati", "b1u17.uzeti",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The suppletive four 🧬",
      body:
        "Four pairs share **no stem at all** — and they're among the most common verbs in the language. The table IS the lesson; the past forms are part of the deal:\n\n**Bonus decode**: *reći* has almost no present of its own — everyday \"I say\" is ***kažem*** (from *kazati*). You'll meet it constantly; recognize it for now.",
      table: {
        caption: "Brute-memorize these — nothing else works",
        headers: ["〰️ imperfective", "✅ perfective", "pf present", "pf past"],
        rows: [
          ["govoriti (govorim)", "reći", "(kažem covers \"I say\")", "rekao, rekla"],
          ["dolaziti (dolazim)", "doći", "dođem", "došao, došla"],
          ["odlaziti (odlazim)", "otići", "odem", "otišao, otišla"],
          ["uzimati (uzimam)", "uzeti", "uzmem", "uzeo, uzela"],
        ],
      },
      diagram: {
        kind: "callout",
        tone: "success",
        title: "You've said these for months",
        text: "doći ću (U9 — the -ći spelling rule!) · Morate uzeti tabletu (U11) · Mogu početi odmah (U12). All perfective halves of today's table.",
      },
      examples: [
        { hr: "Tom dolazi svaki dan, ali danas je došao rano.", en: "Tom comes every day, but today he came early." },
        { hr: "Baka je rekla: »Dolazim sutra!«", en: "Grandma said: \"I'm coming tomorrow!\"" },
        { hr: "Uzeo sam novine i otišao.", en: "I took the paper and left." },
      ],
    },
    {
      id: "s06",
      type: "quiz-set",
      title: "Quick check: the four",
      items: [
        {
          prompt: "govoriti → the say-it-once version:",
          options: ["reći", "govorio", "kazati"],
          correctIndex: 0,
          explanation: "govoriti/reći — suppletive. (kazati gives you kažem, the everyday \"I say\".)",
        },
        {
          prompt: "Ana arrived (pf, past, f):",
          options: ["došla je", "dolazila je", "dođem"],
          correctIndex: 0,
          explanation: "doći → došao/došla.",
        },
        {
          prompt: "»I'll leave« with the pf present:",
          options: ["Otići ću.", "Odlazim ću.", "Otišao ću."],
          correctIndex: 0,
          explanation: "otići ću — infinitive + ću (the -ći keeps everything, U9 rule).",
        },
        {
          prompt: "baka said = baka je ___",
          options: ["rekla", "rekao", "reći"],
          correctIndex: 0,
          explanation: "rekao/REKLA — feminine agreement, the U8 rule.",
        },
      ],
    },
    {
      id: "s07",
      type: "section",
      title: "Part 2 · Navika je uvijek 〰️",
      subtitle: "Even when every single act finishes, the HABIT itself never does.",
      emoji: "🔁",
      items: [
        { emoji: "🔁", label: "The habit rule", hint: "svaki dan → imperfective" },
        { emoji: "📻", label: "radio's quirk", hint: "GEN radija, na radiju" },
        { emoji: "✏️", label: "Choose the half", hint: "dolazi or došao?" },
      ],
    },
    {
      id: "s08",
      type: "teach",
      title: "Habits are ALWAYS imperfective 🔁",
      body:
        "*Svaki dan kupujem novine.* — every purchase completes, yet the verb is imperfective. Why? Because the sentence isn't about one purchase: it's about the **repeating pattern**, and patterns are ongoing 〰️.\n\n**Magnet words**: *svaki dan, uvijek, obično, ponekad, ujutro* → imperfective. *danas, jučer + finished result* → perfective.\n\n**radio's quirk**: GEN *radija*, LOC *na radiju* (a j sneaks in before the ending).",
      diagram: {
        kind: "contrast",
        left: {
          title: "the habit 〰️",
          emoji: "🔁",
          lines: [
            { hr: "Ujutro slušam radio.", en: "I listen to the radio in the morning." },
            { hr: "Tom dolazi svaki dan.", en: "Tom comes every day." },
          ],
        },
        right: {
          title: "today's event ✅",
          emoji: "📍",
          lines: [
            { hr: "Danas sam poslušao vijesti.", en: "Today I listened through the news." },
            { hr: "Danas je došao rano.", en: "Today he came early." },
          ],
        },
      },
      examples: [
        { hr: "Ujutro slušam radio.", en: "In the morning I listen to the radio. (habit)" },
        { hr: "Danas sam kupio novine i poslušao vijesti na radiju.", en: "Today I bought the paper and listened through the news on the radio.", note: "na radiju — there's the sneaky j" },
        { hr: "Slušatelji vole glazbu.", en: "The listeners love music.", note: "slušatelj — slušati + -telj, like gledatelj" },
      ],
    },
    {
      id: "s09",
      type: "quiz-set",
      title: "Quick check: habit or event?",
      items: [
        {
          prompt: "»Svaki dan ___ novine.« (kupovati/kupiti)",
          options: ["kupujem", "kupim", "kupio"],
          correctIndex: 0,
          explanation: "Habit → imperfective, even though each purchase completes.",
        },
        {
          prompt: "»Baka ___ lijek svaki dan.« (uzimati/uzeti)",
          options: ["uzima", "uzme", "uzela"],
          correctIndex: 0,
          explanation: "Daily routine → uzimati.",
        },
        {
          prompt: "»Danas je Tom ___ novine i otišao.« (uzimati/uzeti)",
          options: ["uzeo", "uzimao", "uzima"],
          correctIndex: 0,
          explanation: "One grab-and-go → uzeti.",
        },
      ],
    },
    {
      id: "s10",
      type: "fill",
      text: "Svaki dan Tom ___ u kafić. (dolaziti/doći)",
      blanks: [["dolazi"]],
      translation: "Tom comes to the café every day.",
      wordBank: ["dolazi", "dođe", "došao"],
      explanation: "Habit → imperfective dolazi.",
    },
    {
      id: "s11",
      type: "fill",
      text: "Danas je ___ rano. (dolaziti/doći)",
      blanks: [["došao", "dosao"]],
      translation: "Today he came early.",
      wordBank: ["došao", "dolazio", "dođem"],
      explanation: "One arrival today → perfective došao.",
    },
    {
      id: "s12",
      type: "fill",
      text: "Baka ___ lijek svaki dan. (uzimati/uzeti)",
      blanks: [["uzima"]],
      translation: "Grandma takes her medicine every day.",
      wordBank: ["uzima", "uzme", "uzela"],
      explanation: "Routine → uzimati. (U11's »Morate uzeti tabletu« was one dose — perfective.)",
    },
    {
      id: "s13",
      type: "type",
      prompt: "govoriti → pf = ___",
      answers: ["reći", "reci"],
      hint: "past: rekao, rekla",
      explanation: "govoriti/reći — the suppletive say-pair.",
    },
    {
      id: "s14",
      type: "reorder",
      words: ["Uzeo", "sam", "novine", "i", "otišao"],
      answers: ["Uzeo sam novine i otišao."],
      en: "I took the paper and left.",
      explanation: "Two perfectives in a row — a chain of completed events.",
    },
    {
      id: "s15",
      type: "section",
      title: "Part 3 · Uši i glas",
      subtitle: "The four in your ears, then out of your mouth.",
      emoji: "🎧",
      items: [
        { emoji: "🎧", label: "Dictation ×2", hint: "radio · rekla" },
        { emoji: "🎤", label: "Your radio day", hint: "slušam… poslušao sam" },
        { emoji: "🔗", label: "U9/U12 payoffs", hint: "doći ću · javit ću se" },
      ],
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Ujutro slušam radio.",
      explanation: "Ujutro slušam radio — in the morning I listen to the radio.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Baka je rekla: »Dolazim sutra!«",
      explanation: "Baka je rekla: »Dolazim sutra!« — grandma said: \"I'm coming tomorrow!\"",
    },
    {
      id: "s18",
      type: "speak",
      targetHr: "Svaki dan slušam radio. Danas sam poslušao vijesti.",
      targetEn: "habit + today's event — I listen to the radio every day. Today I listened through the news.",
      phonetic: "SVA-kee dan SLOO-sham RA-dee-oh. DA-nas sam po-SLOO-sha-oh vee-YES-tee",
    },
    {
      id: "s19",
      type: "quiz-set",
      review: true,
      title: "Payoffs: three old chunks, decoded",
      items: [
        {
          prompt: "U9 spelling: pisat ću but doći ću — why does doći keep everything?",
          options: [
            "-ći infinitives never drop a letter; only -ti drops the i",
            "doći is irregular",
            "ću forces the full form",
          ],
          correctIndex: 0,
          explanation: "The U9 rule — and now you know doći itself: pf of dolaziti.",
        },
        {
          prompt: "U12: »Javit ću se!« — the javiti here is…",
          options: [
            "a perfective (one call — I'll get in touch once)",
            "an imperfective habit",
            "a noun",
          ],
          correctIndex: 0,
          explanation: "javiti se — perfective. Its pair javljati se stars tomorrow.",
        },
        {
          prompt: "U6 magnet: which word pulls the imperfective?",
          options: ["obično", "danas", "napokon"],
          correctIndex: 0,
          explanation: "obično/uvijek/ponekad = habit magnets → imperfective.",
        },
      ],
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The suppletive four** (brute-memorize): *govoriti/**reći** (rekao, rekla; \"I say\" = kažem) · dolaziti/**doći** (dođem, došao) · odlaziti/**otići** (odem, otišao) · uzimati/**uzeti** (uzmem, uzeo)*.\n\n**The habit rule**: habits are ALWAYS imperfective — *Svaki dan kupujem novine*, even though each act completes.\n\n**radio**: GEN *radija*, LOC *na radiju*.\n\nWords tonight: the radio eight.\n\nNext: aspect becomes storytelling — *Dok je Ana gledala vijesti, Marko je došao.*",
      vocabIds: [
        "b1u17.radio", "b1u17.slusatelj", "b1u17.reci", "b1u17.dolaziti",
        "b1u17.doci", "b1u17.otici", "b1u17.uzimati", "b1u17.uzeti",
      ],
    },
  ],
  srsCloze: [
    { front: "govoriti → pf ___ (rekao/rekla)", answers: ["reći", "reci"], back: "reći — suppletive; everyday \"I say\" = kažem.", tts: "Baka je rekla: »Dolazim sutra!«" },
    { front: "dolaziti → pf ___ (dođem)", answers: ["doći", "doci"], back: "doći — došao, došla. U9's doći ću!", tts: "Danas je došao rano." },
    { front: "Danas je Tom ___ (doći) rano.", answers: ["došao", "dosao"], back: "One arrival → došao.", tts: "Danas je Tom došao rano." },
    { front: "to leave (pf; odem) = ___", answers: ["otići", "otici"], back: "otići — otišao, otišla; impf odlaziti.", tts: "Uzeo sam novine i otišao." },
    { front: "uzimati → pf ___ (uzmem)", answers: ["uzeti"], back: "uzeti — uzeo, uzela. The U11 tablet chunk!", tts: "Tom je uzeo novine." },
    { front: "Svaki dan ___ (kupovati/kupiti) novine.", answers: ["kupujem"], back: "Habits are ALWAYS imperfective.", tts: "Svaki dan kupujem novine." },
    { front: "radio, GEN = ___ (sneaky j!)", answers: ["radija"], back: "radija — na radiju (LOC).", tts: "Ujutro slušam radio." },
    { front: "listener = ___ (the -telj people)", answers: ["slušatelj", "slusatelj"], back: "slušatelj — slušati + -telj.", tts: "Slušatelji vole glazbu." },
  ],
  notes: {
    inOneSentence: {
      en: "Four pairs share no stem — govoriti/reći, dolaziti/doći, odlaziti/otići, uzimati/uzeti — and habits always take the imperfective, even when every single act completes.",
      exampleHr: "Tom dolazi svaki dan, ali danas je došao rano.",
    },
    deepDive: [
      {
        title: "The suppletive table — learn it as four little poems",
        body:
          "These four resist every machine. Each row is impf → pf present → pf past; say each row aloud until it's rhythm, not grammar:",
        table: {
          caption: "Suppletive pairs (grammar-reference §11 #4)",
          headers: ["〰️ imperfective", "✅ perfective", "pf present", "pf past (m/f)"],
          rows: [
            ["govoriti", "reći", "— (kažem serves)", "rekao / rekla"],
            ["dolaziti", "doći", "dođem", "došao / došla"],
            ["odlaziti", "otići", "odem", "otišao / otišla"],
            ["uzimati", "uzeti", "uzmem", "uzeo / uzela"],
          ],
        },
      },
      {
        title: "Where does \"kažem\" come from?",
        body:
          "*reći* is so perfective it barely has a usable present. The everyday \"I say / you say\" comes from a THIRD verb, *kazati*: *kažem, kažeš…* — you've heard it in *Kako se kaže…?* (how do you say…?) since the early units.\n\nDivision of labour:\n- **govorim** = I speak / am speaking (language, manner: *Govorim hrvatski.*)\n- **kažem** = I say (content: *Kažem ti…* — receptive for now)\n- **rekao/rekla sam** = I said (one utterance, done)\n- **reći ću** = I'll say",
      },
      {
        title: "The habit rule — why it can't be otherwise",
        body:
          "A perfective wraps ONE completed whole. A habit is an open series — no single wrapper fits it, so the imperfective (the open, wavy one) is the only choice:\n\n- *Svaki dan **kupujem** novine.* (each purchase completes; the SERIES doesn't)\n- *Baka **uzima** lijek svaki dan.* (vs U11's one dose: *Morate **uzeti** tabletu*)\n- *Tom **dolazi** svaki dan, ali danas je **došao** rano.* — both halves in one breath\n\nMagnets: *svaki dan, uvijek, obično, ponekad, ujutro, navečer* 〰️ · *danas/jučer + result, i onda, napokon* ✅ (L4 completes this table).",
      },
    ],
    commonMistakes: [
      {
        wrong: "Svaki dan kupim novine.",
        right: "Svaki dan kupujem novine.",
        why: "Habits are always imperfective — no exceptions, even for completing acts.",
      },
      {
        wrong: "Došao sam svaki dan prošli tjedan.",
        right: "Dolazio sam svaki dan prošli tjedan.",
        why: "Repeated past arrivals = habit in the past → imperfective dolazio.",
      },
      {
        wrong: "Baka je rekao: »Dolazim sutra!«",
        right: "Baka je rekla: »Dolazim sutra!«",
        why: "Participle agrees: baka (f) → rekla. Suppletives still obey U8 agreement.",
      },
      {
        wrong: "Otišla sam je iz kafića.",
        right: "Otišla sam iz kafića.",
        why: "sam is the only aux here — je belongs to 3rd person. (And otići has no se!)",
      },
    ],
    memoryHooks: [
      "The four suppletives are the language's celebrities — too famous to follow the rules.",
      "doći ću: you've spelled its -ći rule since U9; now you've met the verb behind it.",
      "REĆI has no present because a thing said once is already over — kažem (kazati) covers the now.",
      "dolaziti walks 🚶 (wavy road), doći arrives 🏁 (flag planted).",
      "uzeti = U11's pill: one gulp, done. uzimati = the daily routine of gulps.",
    ],
    connects: [
      { label: "Future I spelling: pisat ću / doći ću (Unit 9 L1)", lessonId: "a2u9l1" },
      { label: "Modals + uzeti — the pill chunk (Unit 11 L4)", lessonId: "a2u11l4" },
      { label: "Next: the story spine — dok + narration (Unit 17 L4)", lessonId: "b1u17l4" },
    ],
    selfCheck: [
      { q: "All four suppletive pairs, from memory?", a: "govoriti/reći · dolaziti/doći · odlaziti/otići · uzimati/uzeti." },
      { q: "Past of doći for Ana? For Tom?", a: "Ana je došla · Tom je došao." },
      { q: "Why is »Svaki dan kupim novine« impossible?", a: "Habits are always imperfective → kupujem." },
      { q: "Who supplies the everyday present \"I say\"?", a: "kažem — from kazati; reći itself barely has a present." },
      { q: "GEN and LOC of radio?", a: "radija · na radiju (the sneaky j)." },
    ],
  },
};
