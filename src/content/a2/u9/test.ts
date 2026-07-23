import type { UnitTest } from "@/types/content";

/**
 * A2 U9 unit test (spec: curriculum/A2/unit-9.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · no hints · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: future clitics & spelling (L1),
 * hoćeš li / neću (L2), GEN prepositions (L3), counter/hotel chunks & timetable
 * sentences (L2/L4), the trip timeline (L5).
 */
export const a2u9test: UnitTest = {
  id: "a2u9t",
  unitId: "a2u9",
  title: "Test — Na putu",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the ticket words to English",
          pairs: [
            { a: "povratna karta", b: "return ticket" },
            { a: "polazak", b: "departure" },
            { a: "dolazak", b: "arrival" },
            { a: "sjedalo", b: "seat" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the travel words to English",
          pairs: [
            { a: "putovnica", b: "passport" },
            { a: "kovčeg", b: "suitcase" },
            { a: "granica", b: "border" },
            { a: "ključ", b: "key" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "You sleep in it at a hotel:",
          options: ["soba", "recepcija", "carina"],
          correctIndex: 0,
          explanation: "soba = room (recepcija = reception, carina = customs).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "odmor = ?",
          options: ["holiday / rest", "luggage", "timetable"],
          correctIndex: 0,
          explanation: "odmor = holiday/rest (prtljaga = luggage, red vožnje = timetable).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "It flies and you catch it at the zračna luka:",
          options: ["avion", "vlak", "ruksak"],
          correctIndex: 0,
          explanation: "avion = plane (at the airport); vlak = train.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Sutra ___ putovati u Split. (ja)",
          blanks: [["ću"]],
          translation: "Tomorrow I'll travel to Split.",
          explanation: "ja → ću, second position after »sutra«.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Nećemo letjeti — ___ ćemo kartu do Splita. (kupiti)",
          blanks: [["kupit"]],
          translation: "We won't fly — we'll buy a ticket to Split.",
          explanation: "Verb-first future cuts -ti: kupit ćemo.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "Which spelling is correct?",
          options: ["Pisat ću razglednicu.", "Pisati ću razglednicu.", "Pišat ću razglednicu."],
          correctIndex: 0,
          explanation: "-ti verbs drop the -i before ću: pisat ću. (razglednica = postcard)",
        },
        {
          id: "s09",
          type: "reorder",
          words: ["hoćeš", "li", "doći"],
          answers: ["Hoćeš li doći?", "hoćeš li doći", "Hoćeš li doći"],
          en: "Will you come?",
          explanation: "Full form + li + infinitive: Hoćeš li doći?",
        },
        {
          id: "s10",
          type: "fill",
          text: "Putujem ___ Zagreba ___ Splita.",
          blanks: [["iz"], ["do"]],
          translation: "I'm travelling from Zagreb to Split.",
          explanation: "iz + start, do + goal — both take the genitive.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Spavat ćemo ___ bake Marije, ali ne putujemo ___ putovnice!",
          blanks: [["kod"], ["bez"]],
          translation: "We'll sleep at grandma Marija's, but we're not travelling without a passport!",
          explanation: "kod + GEN = at sb's place; bez + GEN = without.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Vlak polazi u devet sati.",
          explanation: "Vlak polazi u devet sati — the train departs at nine.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "putovnica",
          explanation: "putovnica = passport.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen to the announcement: when is the departure?",
          tts: "Polazak je u devet sati, a dolazak u podne.",
          options: ["at nine", "at noon", "at ten"],
          correctIndex: 0,
          explanation: "Polazak je u devet sati — departure at nine (arrival at noon).",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: what will she do tonight?",
          tts: "Večeras ću spakirati kovčeg i ruksak.",
          options: ["pack the suitcase and backpack", "book a room", "buy a return ticket"],
          correctIndex: 0,
          explanation: "spakirati kovčeg i ruksak = pack the suitcase and backpack.",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s16",
          type: "mc",
          prompt:
            "»Ovo je moj plan za odmor. Večeras ću spakirati kovčeg i ruksak. Sutra ću krenuti rano iz Zagreba i stići ću u Split u podne. Spavat ću u hotelu blizu mora, a u subotu ću posjetiti otok.«\n\nKada će krenuti iz Zagreba? (When will he set off from Zagreb?)",
          options: ["sutra rano", "večeras", "u subotu"],
          correctIndex: 0,
          explanation: "»Sutra ću krenuti rano iz Zagreba.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Gdje će spavati? (Where will he sleep?)",
          options: ["u hotelu blizu mora", "kod bake", "na plaži"],
          correctIndex: 0,
          explanation: "»Spavat ću u hotelu blizu mora.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Što će posjetiti u subotu? (What will he visit on Saturday?)",
          options: ["otok", "muzej", "restoran"],
          correctIndex: 0,
          explanation: "»…u subotu ću posjetiti otok.«",
        },
      ],
    },
  ],
};
