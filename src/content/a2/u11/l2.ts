import type { Lesson } from "@/types/content";

/**
 * A2 U11 L2 — Moram ležati (modals + infinitive)
 * Spec: curriculum/A2/unit-11.md · grammar-reference §6 (moći), §7.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * Level guard: modal + infinitive only; imperatives wait for U14. odmarati se
 * recycled from U6 (not re-taught). The ne-moraš/ne-smiješ semantic contrast
 * is the lesson's crown jewel — drilled ≥3×.
 */
export const a2u11l2: Lesson = {
  id: "a2u11l2",
  unitId: "a2u11",
  title: "Moram ležati",
  titleEn: "I have to lie down — the four modals",
  grammarTags: ["modals", "modal-infinitive", "verb-moci"],
  estMinutes: 18,
  vocab: [
    { id: "a2u11.morati", hr: "morati", en: "must / have to (moram)", pos: "verb", icon: "❗", exampleHr: "Moram ležati.", exampleEn: "I have to lie down." },
    { id: "a2u11.moci", hr: "moći", en: "can / be able (mogu, možeš… mogu)", pos: "verb", icon: "💪", exampleHr: "Ne mogu spavati.", exampleEn: "I can't sleep." },
    { id: "a2u11.smjeti", hr: "smjeti", en: "may / be allowed (smijem)", pos: "verb", icon: "🚦", exampleHr: "Ne smiješ piti kavu.", exampleEn: "You mustn't drink coffee." },
    { id: "a2u11.trebati", hr: "trebati", en: "to need / should (trebam)", pos: "verb", icon: "🧭", exampleHr: "Trebam spavati.", exampleEn: "I need to sleep." },
    { id: "a2u11.lezati", hr: "ležati", en: "to lie (down) (ležim)", pos: "verb", icon: "🛌", exampleHr: "Bolestan sam — ležim.", exampleEn: "I'm ill — I'm lying down." },
    { id: "a2u11.ostati", hr: "ostati", en: "to stay (ostanem)", pos: "verb", icon: "🏠", exampleHr: "Moram ostati kod kuće.", exampleEn: "I have to stay at home." },
    { id: "a2u11.bolestan", hr: "bolestan", en: "ill / sick (f: bolesna)", pos: "adj", icon: "🤒", exampleHr: "Tom je bolestan.", exampleEn: "Tom is ill." },
    { id: "a2u11.zdrav", hr: "zdrav", en: "healthy", pos: "adj", icon: "💚", exampleHr: "Ana je zdrava.", exampleEn: "Ana is healthy." },
  ],
  slides: [
    {
      id: "s01",
      type: "section",
      title: "Moram ležati",
      subtitle: "Doctor's orders — four verbs run every instruction in Croatian.",
      emoji: "🛌",
      items: [
        { emoji: "🪜", label: "The modal ladder", hint: "moraš → trebaš → možeš → smiješ" },
        { emoji: "🧊", label: "One verb freezes", hint: "moram LEŽATI — infinitive" },
        { emoji: "🚦", label: "ne moraš ≠ ne smiješ", hint: "the dangerous swap" },
        { emoji: "🎤", label: "Your obligation", hint: "one thing you must do" },
      ],
    },
    {
      id: "s02",
      type: "section",
      title: "Part 1 · The ladder",
      subtitle: "must, need, can, may — one pattern carries all four.",
      emoji: "🪜",
      items: [
        { emoji: "🔁", label: "Warm-up first", hint: "aches & wishes" },
        { emoji: "🪜", label: "modal + infinitive", hint: "the frozen second verb" },
        { emoji: "📊", label: "mogu … mogu", hint: "moći's odd bookends" },
      ],
    },
    {
      id: "s03",
      type: "quiz-set",
      review: true,
      title: "Warm-up: aches and wishes",
      items: [
        {
          prompt: "L1: »___ me glava.«",
          options: ["Boli", "Bole", "Bolim"],
          correctIndex: 0,
          explanation: "One part → boli. And when your head hurts… moraš ležati!",
        },
        {
          prompt: "Unit 4: »___ juhu.« (I want soup — an old friend of today's pattern)",
          options: ["Želim", "Moram", "Smijem"],
          correctIndex: 0,
          explanation: "željeti + ACC/infinitive (U4) — today's modals bolt onto infinitives the same way.",
        },
        {
          prompt: "Listen (U6): what does she do on Saturday?",
          tts: "U subotu se odmaram.",
          options: ["she rests", "she runs", "she works"],
          correctIndex: 0,
          explanation: "odmarati se (U6) = to rest — a doctor's favourite instruction.",
        },
      ],
    },
    {
      id: "s04",
      type: "vocab-cards",
      title: "Meet the modal words",
      vocabIds: [
        "a2u11.morati", "a2u11.moci", "a2u11.smjeti", "a2u11.trebati",
        "a2u11.lezati", "a2u11.ostati", "a2u11.bolestan", "a2u11.zdrav",
      ],
    },
    {
      id: "s05",
      type: "teach",
      title: "The pattern: modal conjugates, partner freezes",
      body:
        "All four modals work identically: **conjugate the modal, freeze the second verb as an infinitive**:\n\n- *Moram **ležati**.* — I have to lie down\n- *Trebam **spavati**.* — I need to sleep\n- *Ne mogu **doći**.* — I can't come\n\nThe ladder, from strongest to softest:",
      diagram: {
        kind: "flow",
        steps: [
          { label: "moraš — must", emoji: "❗", example: "Moraš ležati." },
          { label: "trebaš — need/should", emoji: "🧭", example: "Trebaš spavati." },
          { label: "možeš — can", emoji: "💪", example: "Možeš ići." },
          { label: "smiješ — may", emoji: "🚦", example: "Smiješ gledati TV." },
        ],
      },
      examples: [
        { hr: "Moram ležati.", en: "I have to lie down." },
        { hr: "Bolestan sam — moram ostati kod kuće.", en: "I'm ill — I have to stay at home." },
        { hr: "Možete li doći sutra?", en: "Can you come tomorrow?", note: "modal + li — the U2/U9 question move" },
      ],
    },
    {
      id: "s06",
      type: "teach",
      title: "moći's odd bookends — and the dangerous swap",
      body:
        "**moći** (can) is irregular at both ends: **mogu**, možeš, može, možemo, možete, **mogu** — ja and oni share the same form!\n\n⚠️ **The most dangerous swap in the unit:**\n- **ne moraš** = you DON'T HAVE TO (relax 🟢)\n- **ne smiješ** = you MUSTN'T (forbidden 🔴)\n\n*Ne moraš raditi* — take the day off. *Ne smiješ raditi* — the doctor forbids it!",
      table: {
        caption: "moći — the full table",
        headers: ["person", "form"],
        rows: [
          ["ja", "mogu ⚠️"],
          ["ti", "možeš"],
          ["on / ona", "može"],
          ["mi", "možemo"],
          ["vi", "možete"],
          ["oni / one", "mogu ⚠️"],
        ],
      },
      examples: [
        { hr: "Ne mogu spavati.", en: "I can't sleep." },
        { hr: "Ne moraš doći — nije problem.", en: "You don't have to come — no problem.", note: "🟢 no obligation" },
        { hr: "Ne smiješ piti kavu!", en: "You mustn't drink coffee!", note: "🔴 forbidden" },
      ],
    },
    {
      id: "s07",
      type: "quiz-set",
      title: "Quick check: pick the modal",
      items: [
        {
          prompt: "The doctor insists: »___ ležati.« (you MUST)",
          options: ["Moraš", "Smiješ", "Možeš"],
          correctIndex: 0,
          explanation: "morati = must: Moraš ležati.",
        },
        {
          prompt: "»Bolestan si. Ne ___ ići na posao.« (it's FORBIDDEN)",
          options: ["smiješ", "moraš", "trebaš"],
          correctIndex: 0,
          explanation: "Forbidden → ne smiješ. (Ne moraš would mean it's merely optional!)",
        },
        {
          prompt: "moći with ja:",
          options: ["mogu", "možem", "možu"],
          correctIndex: 0,
          explanation: "ja mogu — the irregular bookend (oni mogu too).",
        },
        {
          prompt: "»Moram ___ kod kuće.« (stay)",
          options: ["ostati", "ostanem", "ostao"],
          correctIndex: 0,
          explanation: "After a modal comes the INFINITIVE: moram ostati.",
        },
      ],
    },
    {
      id: "s08",
      type: "example",
      title: "Doctor's orders — tap to hear",
      items: [
        { hr: "Tom je bolestan. Mora ležati i ne smije piti kavu.", en: "Tom is ill. He has to lie down and mustn't drink coffee." },
        { hr: "Trebaš spavati. Ne trebaš raditi.", en: "You need to sleep. You don't need to work." },
        { hr: "Mogu li gledati TV? — Možeš!", en: "Can I watch TV? — You can!" },
        { hr: "Ana je zdrava — može trčati svaki dan.", en: "Ana is healthy — she can run every day.", note: "trčati = to run, your L5 word, listen ahead" },
      ],
    },
    {
      id: "s09",
      type: "fill",
      text: "Bolestan sam. ___ ležati. (must)",
      blanks: [["Moram", "moram"]],
      translation: "I'm ill. I have to lie down.",
      wordBank: ["Moram", "Smijem", "Mogu"],
      explanation: "Obligation → moram + infinitive.",
    },
    {
      id: "s10",
      type: "fill",
      text: "Ne ___ piti kavu — liječnica je stroga! (mustn't)",
      blanks: [["smiješ", "smijes"]],
      translation: "You mustn't drink coffee — the doctor is strict!",
      wordBank: ["smiješ", "moraš", "trebaš"],
      explanation: "Forbidden → ne smiješ. (stroga = strict — a bonus word, glossed here.)",
    },
    {
      id: "s11",
      type: "fill",
      text: "Ne ___ spavati. (I can't)",
      blanks: [["mogu"]],
      translation: "I can't sleep.",
      wordBank: ["mogu", "možem", "morat"],
      explanation: "ja → mogu: Ne mogu spavati.",
    },
    {
      id: "s12",
      type: "section",
      title: "Part 2 · Orders, out loud",
      subtitle: "Build, type and hear the modals — then state your own obligation.",
      emoji: "❗",
      items: [
        { emoji: "🔀", label: "Build an order", hint: "moraš + ostati…" },
        { emoji: "⌨️", label: "Type two modals", hint: "can't sleep · must stay" },
        { emoji: "🎧", label: "Dictation ×2", hint: "type what you hear" },
        { emoji: "🎤", label: "One must-do", hint: "Moram… danas" },
      ],
    },
    {
      id: "s13",
      type: "reorder",
      words: ["Moraš", "ostati", "kod", "kuće"],
      answers: ["Moraš ostati kod kuće.", "Moraš ostati kod kuće"],
      en: "You have to stay at home.",
      explanation: "Modal + infinitive + the kod kuće chunk: Moraš ostati kod kuće.",
    },
    {
      id: "s14",
      type: "type",
      prompt: "Write it in Croatian: “I can't sleep.”",
      answers: ["Ne mogu spavati.", "Ne mogu spavati"],
      hint: "moći's odd ja-form",
      explanation: "Ne mogu spavati.",
    },
    {
      id: "s15",
      type: "type",
      prompt: "Write it in Croatian: “I have to stay at home.”",
      answers: ["Moram ostati kod kuće.", "Moram ostati kod kuće"],
      explanation: "Moram ostati kod kuće.",
    },
    {
      id: "s16",
      type: "listen-type",
      tts: "Moram ležati.",
      explanation: "Moram ležati — I have to lie down.",
    },
    {
      id: "s17",
      type: "listen-type",
      tts: "Ne smiješ piti kavu.",
      explanation: "Ne smiješ piti kavu — you mustn't drink coffee.",
    },
    {
      id: "s18",
      type: "quiz-set",
      review: true,
      title: "Flashback: coffee, sleep and wanting",
      items: [
        {
          prompt: "Unit 1's kava meets today's tragedy: »Ne smiješ piti ___.«",
          options: ["kavu", "kava", "kavi"],
          correctIndex: 0,
          explanation: "Object → ACC: kavu (the U4 rule, in a forbidden sentence).",
        },
        {
          prompt: "U4's želim vs today's moram — »___ spavati, ali ne mogu!«",
          options: ["Želim", "Smijem", "Trebam li"],
          correctIndex: 0,
          explanation: "Želim spavati = I WANT to sleep (wish); moram = obligation — same +infinitive pattern.",
        },
        {
          prompt: "Listen (U9 future): what will Tom have to do tomorrow?",
          tts: "Sutra ću morati raditi.",
          options: ["work", "rest", "run"],
          correctIndex: 0,
          explanation: "ću morati raditi — even modals take the future: I'll have to work.",
        },
      ],
    },
    {
      id: "s19",
      type: "speak",
      targetHr: "Danas moram raditi.",
      targetEn: "say one thing you must do today — Today I have to work. (or: Moram učiti / spavati / ležati…)",
      phonetic: "DA-nas MO-ram RA-dee-tee",
    },
    {
      id: "s20",
      type: "recap",
      summary:
        "**The modal four**, strongest to softest: **moram** (must) → **trebam** (need) → **mogu** (can — irregular: mogu…mogu) → **smijem** (may). Pattern: **modal conjugates, partner freezes** as an infinitive: *Moram ležati.*\n\n**The dangerous swap:** *ne moraš* = don't have to 🟢 · *ne smiješ* = mustn't 🔴.\n\nWords tonight: **morati, moći, smjeti, trebati, ležati, ostati, bolestan, zdrav**.\n\nNext lesson: *Loše mi je* — the feeling family that's been hiding in *drago mi je* since day 4.",
      vocabIds: [
        "a2u11.morati", "a2u11.moci", "a2u11.smjeti", "a2u11.trebati",
        "a2u11.lezati", "a2u11.ostati", "a2u11.bolestan", "a2u11.zdrav",
      ],
    },
  ],
  srsCloze: [
    { front: "moći → ja ___ (irregular!)", answers: ["mogu"], back: "ja mogu (and oni mogu — the bookends)", tts: "Ne mogu spavati." },
    { front: "moći → ti ___", answers: ["možeš", "mozes"], back: "ti možeš.", tts: "Možeš ići." },
    { front: "You don't have to work = Ne ___ raditi. (🟢)", answers: ["moraš", "moras"], back: "Ne moraš raditi. (no obligation)", tts: "Ne moraš raditi." },
    { front: "You mustn't work = Ne ___ raditi. (🔴)", answers: ["smiješ", "smijes"], back: "Ne smiješ raditi. (forbidden)", tts: "Ne smiješ raditi." },
    { front: "Moram ___ kod kuće. (stay)", answers: ["ostati"], back: "Moram ostati kod kuće. (modal + infinitive)", tts: "Moram ostati kod kuće." },
    { front: "ill = ___ (m; f: bolesna)", answers: ["bolestan"], back: "bolestan / bolesna = ill.", tts: "Tom je bolestan." },
    { front: "healthy = ___", answers: ["zdrav"], back: "zdrav = healthy.", tts: "Ana je zdrava." },
  ],
  notes: {
    inOneSentence: {
      en: "The four modals — moram, trebam, mogu, smijem — conjugate and take a frozen infinitive, and ne moraš (don't have to) must never be confused with ne smiješ (mustn't).",
      exampleHr: "Moram ležati. · Ne mogu spavati. · Ne smiješ piti kavu.",
    },
    deepDive: [
      {
        title: "All four tables",
        body:
          "morati, trebati and smjeti are regular; moći is the wild one. Note smjeti's ijekavian smij- stem.",
        table: {
          caption: "The modal four — full present",
          headers: ["person", "morati", "trebati", "smjeti", "moći"],
          rows: [
            ["ja", "moram", "trebam", "smijem", "mogu ⚠️"],
            ["ti", "moraš", "trebaš", "smiješ", "možeš"],
            ["on/ona", "mora", "treba", "smije", "može"],
            ["mi", "moramo", "trebamo", "smijemo", "možemo"],
            ["vi", "morate", "trebate", "smijete", "možete"],
            ["oni", "moraju", "trebaju", "smiju", "mogu ⚠️"],
          ],
        },
      },
      {
        title: "The negation traffic light",
        body:
          "Negating a modal changes its MEANING, not just its polarity — and the two reds/greens don't line up with English intuition:\n\n- **ne moram** = I don't have to (obligation removed) 🟢\n- **ne trebam** = I don't need to 🟢\n- **ne mogu** = I can't (unable) 🟡\n- **ne smijem** = I may not / mustn't (forbidden) 🔴\n\nA doctor saying *Ne morate ležati* is releasing you; *Ne smijete ležati* would be an odd ban. Swap them at your peril.",
        diagram: {
          kind: "callout",
          tone: "warn",
          title: "The dangerous swap",
          text: "ne moraš = don't have to 🟢 · ne smiješ = MUSTN'T 🔴 — »Ne moraš raditi« is a gift; »Ne smiješ raditi« is an order.",
        },
      },
      {
        title: "Modal + everything you already own",
        body:
          "Modals stack cleanly with earlier machinery:\n\n- **Question:** *Mogu li gledati TV?* / *Možete li doći sutra?* (li — U2/U9)\n- **Future:** *Sutra ću morati raditi.* (future I + modal + infinitive — a three-verb train!)\n- **Past:** *Morao sam ležati.* / *Nisam mogao spavati.* (perfekt — U8)\n\nOne rule holds the train together: only the FIRST verb conjugates; everything after it is infinitive.",
      },
    ],
    commonMistakes: [
      {
        wrong: "Ne smiješ raditi. (meaning “you don't have to work”)",
        right: "Ne moraš raditi.",
        why: "ne smiješ = FORBIDDEN; ne moraš = no obligation. The unit's most dangerous swap.",
      },
      {
        wrong: "Moram radim.",
        right: "Moram raditi.",
        why: "After a modal the second verb freezes as an infinitive — only the modal conjugates.",
      },
      {
        wrong: "Ja možem doći.",
        right: "Ja mogu doći.",
        why: "moći is irregular: mogu (and oni mogu).",
      },
      {
        wrong: "Moram raditi ne.",
        right: "Ne moram raditi.",
        why: "ne sits directly before the conjugated verb, never at the end.",
      },
    ],
    memoryHooks: [
      "The ladder: MORAš (mandatory) → TREBAš (needed) → MOŽEš (possible) → SMIJEš (permitted).",
      "mogu…mogu — moći's matching bookends: ja and oni share the form.",
      "Traffic light: ne moraš 🟢 relax · ne mogu 🟡 unable · ne smiješ 🔴 forbidden.",
      "One engine per train: Moram ležati — the first verb drives, the rest ride frozen.",
    ],
    connects: [
      { label: "željeti + infinitive — the pattern's ancestor (Unit 4 L3)", lessonId: "a1u4l3" },
      { label: "boli me — why you need the doctor (Unit 11 L1)", lessonId: "a2u11l1" },
      { label: "Next: loše mi je — the feeling family (Unit 11 L3)", lessonId: "a2u11l3" },
    ],
    selfCheck: [
      { q: "“I have to lie down” = ?", a: "Moram ležati." },
      { q: "ne moraš vs ne smiješ?", a: "ne moraš = don't have to (🟢); ne smiješ = mustn't (🔴)." },
      { q: "moći for ja and oni?", a: "mogu — both (the irregular bookends)." },
      { q: "“Can you (vi) come tomorrow?” = ?", a: "Možete li doći sutra?" },
      { q: "Why is »Moram radim« wrong?", a: "After a modal comes the infinitive: Moram raditi." },
    ],
  },
};
