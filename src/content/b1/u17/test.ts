import type { UnitTest } from "@/types/content";

/**
 * B1 U17 unit test (spec: curriculum/B1/unit-17.md blueprint).
 * 20 items · 4 sections (vocab → grammar → listening → reading) + guided
 * writing task · pass ≥ 70% (the writing is AI-graded and never gates).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests machinery drilled ≥2× in L1–L5: the four formation patterns,
 * aspect in the past, aspect in the future, the suppletive pairs, dok-framing,
 * and the media vocabulary.
 */
export const b1u17test: UnitTest = {
  id: "b1u17t",
  unitId: "b1u17",
  title: "Test — Mediji",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the media word to its meaning",
          pairs: [
            { a: "časopis", b: "magazine" },
            { a: "intervju", b: "interview" },
            { a: "reklama", b: "advertisement" },
            { a: "događaj", b: "event" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "»Voditeljica vodi emisiju.« — what does voditi mean here?",
          options: ["to host / lead", "to watch", "to record", "to interrupt"],
          correctIndex: 0,
          explanation: "voditi = to host or lead — the verb hiding inside voditelj / voditeljica.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Which one is NOT a way of getting the news?",
          options: ["reklama", "portal", "vijesti", "novine"],
          correctIndex: 0,
          explanation: "A reklama is an advertisement — it sells you something, it doesn't report.",
        },
        {
          id: "s04",
          type: "fill",
          text: "objaviti (pf) → the process-version: ___",
          blanks: [["objavljivati"]],
          translation: "to publish (once) → to be publishing",
          explanation: "objaviti / objavljivati — and remember the present is objavljujem.",
        },
        {
          id: "s05",
          type: "fill",
          text: "prenositi (impf) → the done-version: ___",
          blanks: [["prenijeti"]],
          translation: "to be broadcasting → to broadcast (once)",
          explanation: "prenositi / prenijeti — present prenesem, past prenio / prenijela.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "Which pair is built by PREFIX (pattern 1)?",
          options: ["čitati / pročitati", "davati / dati", "govoriti / reći", "dizati / dignuti"],
          correctIndex: 0,
          explanation: "pro- is a prefix bolted onto čitati. The others are suffix, suppletive and -nu- pairs.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "Which pair is SUPPLETIVE — two different roots?",
          options: ["dolaziti / doći", "pisati / napisati", "kupovati / kupiti", "gledati / pogledati"],
          correctIndex: 0,
          explanation: "dolaziti and doći share no root at all. That's the suppletive pattern.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Jučer sam ___ novine cijelo jutro.«",
          options: ["čitao", "pročitao", "čitam", "pročitam"],
          correctIndex: 0,
          explanation: "cijelo jutro = duration → imperfective čitao. No finish line is claimed.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "»Portal je napokon ___ vijest.«",
          options: ["objavio", "objavljivao", "objavljuje", "objavljivati"],
          correctIndex: 0,
          explanation: "napokon marks the end of a wait — a boundary, so perfective objaviti → objavio.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "»Večeras ću ___ jednu emisiju.« (watch one show, all of it)",
          options: ["pogledati", "gledati", "pogledam", "gledam"],
          correctIndex: 0,
          explanation: "One bounded thing, watched through → perfective future pogledati.",
        },
        {
          id: "s11",
          type: "mc",
          prompt: "Which sentence is WRONG?",
          options: [
            "Dok je Marko došao, Ana je čitala.",
            "Dok je Marko dolazio, Ana je čitala.",
            "Kad je Marko došao, Ana je čitala.",
            "Marko je došao dok je Ana čitala.",
          ],
          correctIndex: 0,
          explanation: "dok opens a frame, so its own verb must be imperfective. Use dolazio, or switch dok → kad.",
        },
        {
          id: "s12",
          type: "fill",
          text: "Odjednom je ___ kiša. (početi)",
          blanks: [["počela", "pocela"]],
          translation: "Suddenly it started to rain.",
          explanation: "odjednom + perfective; kiša is feminine → počela.",
        },
        {
          id: "s13",
          type: "fill",
          text: "Taj portal ___ vijesti svaki sat. (objavljivati)",
          blanks: [["objavljuje"]],
          translation: "That portal publishes news every hour.",
          explanation: "Habit → imperfective present, and -iva- becomes -uje-: objavljuje.",
        },
        {
          id: "s14",
          type: "type",
          prompt: "What happened? (in Croatian)",
          answers: ["Što se dogodilo?", "Sto se dogodilo?", "Što se dogodilo", "Sto se dogodilo"],
          hint: "the clitic »se« takes second position",
          explanation: "Što se dogodilo? — perfective dogoditi se, because the event is over.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s15",
          type: "listen-type",
          tts: "Dok je Ana gledala vijesti, Marko je došao.",
          explanation: "Dok je Ana gledala vijesti, Marko je došao — the background frame plus the event.",
        },
        {
          id: "s16",
          type: "listen-type",
          tts: "Novinar je napravio intervju s Markom.",
          explanation: "Novinar je napravio intervju s Markom — s + INSTRUMENTAL for the person you did it with.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Listen: did the portal finish publishing?",
          tts: "Portal je objavio vijest.",
          options: ["yes — the story is out", "no — it was still working on it", "it never started"],
          correctIndex: 0,
          explanation: "objavio (perfective) = the story reached the world.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Listen: is this a habit or a single event?",
          tts: "Televizija prenosi utakmicu svake subote.",
          options: ["a habit — every Saturday", "one single broadcast", "a plan for tomorrow"],
          correctIndex: 0,
          explanation: "prenosi (imperfective) + svake subote = repetition.",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s19",
          type: "mc",
          prompt:
            "»Jučer je bio velik događaj u Splitu. Dok su ljudi radili, vani je puhao jak vjetar. Odjednom je palo drvo na trg. Nitko se nije ozlijedio. Portal je objavio prve fotografije u tri sata. Televizija je vijest prenijela navečer.«\n\nŠto se dogodilo na trgu? (What happened on the square?)",
          options: ["Palo je drvo.", "Počela je utakmica.", "Otvorio se novi kafić.", "Bio je koncert."],
          correctIndex: 0,
          explanation: "»Odjednom je palo drvo na trg.«",
        },
        {
          id: "s20",
          type: "mc",
          prompt: "Same text: Je li se netko ozlijedio? (Was anyone hurt?)",
          options: ["Ne, nitko.", "Da, dvoje ljudi.", "Da, jedan konobar.", "Tekst ne kaže."],
          correctIndex: 0,
          explanation: "»Nitko se nije ozlijedio.«",
        },
        {
          id: "s21",
          type: "mc",
          prompt: "Same text: Tko je prvi objavio fotografije — portal ili televizija?",
          options: ["Portal, u tri sata.", "Televizija, navečer.", "Obojica u isto vrijeme.", "Ni jedno ni drugo."],
          correctIndex: 0,
          explanation: "»Portal je objavio prve fotografije u tri sata«, and the TV only carried it navečer.",
        },
      ],
    },
  ],
  writing: {
    title: "Pisanje — Što sam jučer čitao i gledao",
    task:
      "Write 80–150 words in Croatian about the media in your day. Cover four things: what you usually read, watch or listen to (habits — imperfective); what you finished yesterday (one or two completed things — perfective); one sentence with »dok«; and one plan for tonight in the future tense. This is graded for feedback only — it never blocks your test result.",
    minWords: 80,
    maxWords: 150,
    modelHr:
      "Obično slušam radio ujutro dok doručkujem. Volim vijesti i glazbu, pa radio svira cijelo jutro. Navečer gledam televiziju, ali ne gledam reklame — one su predugačke.\n\nJučer sam čitao novine sat vremena. Nisam pročitao sve, ali sam pročitao jedan dugačak intervju s jednim hrvatskim novinarom. Bio je jako dobar. Poslije sam pogledao jednu emisiju do kraja.\n\nDok sam gledao emisiju, zazvonio je mobitel. Bio je moj brat. Razgovarali smo pola sata i zato nisam vidio kraj.\n\nVečeras ću pogledati jedan film. Neću gledati televiziju cijelu večer — samo jedan film, a onda ću čitati časopis.",
    rubricFocus:
      "Aspect choice above all: imperfective for habits and duration, perfective for finished single events, imperfective after »dok«, and the right aspect in the future. Then perfekt agreement (čitao / čitala) and clitic word order (sam, je, se in second position). Finally, task completion — all four required elements present.",
  },
};
