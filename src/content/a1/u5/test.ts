import type { UnitTest } from "@/types/content";

/**
 * A1 U5 unit test (spec: curriculum/A1/unit-5.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · no hints · pass ≥ 70%.
 * Only tests forms drilled ≥2× in L1–L5. (Spec's »Novac je u banci« → taught »Tata«.)
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u5test: UnitTest = {
  id: "a1u5t",
  unitId: "a1u5",
  title: "Test — U gradu",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the city place to English",
          pairs: [
            { a: "trg", b: "square" },
            { a: "muzej", b: "museum" },
            { a: "crkva", b: "church" },
            { a: "banka", b: "bank" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the word to English",
          pairs: [
            { a: "kolodvor", b: "station" },
            { a: "kino", b: "cinema" },
            { a: "most", b: "bridge" },
            { a: "stanica", b: "stop" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Which word asks »where to?« (direction)?",
          options: ["kamo", "gdje", "odakle"],
          correctIndex: 0,
          explanation: "kamo = where to (direction). gdje = where (at rest); odakle = from where.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "4. = ?",
          options: ["četvrti", "četiri", "treći"],
          correctIndex: 0,
          explanation: "4th (m) = četvrti (četiri = the number 4).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "Choose the correct preposition: Idem ___ koncert.",
          options: ["na", "u", "iz"],
          correctIndex: 0,
          explanation: "koncert is a na-word (an event) → na koncert.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Živim u ___. (Zagreb)",
          blanks: [["Zagrebu"]],
          translation: "I live in Zagreb.",
          explanation: "Location → LOC: masculine → -u → u Zagrebu.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Tata je u ___. (banka)",
          blanks: [["banci"]],
          translation: "Dad is at the bank.",
          explanation: "banka → u banci (k → c before -i).",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "Moving there: Idem u ___. (cinema)",
          options: ["kino", "kinu", "kina"],
          correctIndex: 0,
          explanation: "kamo → ACC: u kino (kino is neuter, ACC = NOM).",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "At rest: Ana je u ___. (cinema)",
          options: ["kinu", "kino", "kina"],
          correctIndex: 0,
          explanation: "gdje → LOC: u kinu.",
        },
        {
          id: "s10",
          type: "fill",
          text: "Oni ___ na koncert. (go)",
          blanks: [["idu"]],
          translation: "They are going to a concert.",
          explanation: "ići: oni → idu.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Živim na ___ katu. (3.)",
          blanks: [["trećem"]],
          translation: "I live on the third floor.",
          explanation: "treći is soft → na trećem katu (-em).",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Idite ravno, pa skrenite lijevo.",
          explanation: "Idite ravno, pa skrenite lijevo — go straight, then turn left.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Stan je na petom katu.",
          explanation: "Stan je na petom katu — the apartment is on the fifth floor.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen and follow the route. Where is the museum?",
          tts: "Idite ravno, pa skrenite desno. Muzej je na trgu.",
          options: ["on the square", "at the station", "in the park"],
          correctIndex: 0,
          explanation: "»Muzej je na trgu« — on the square.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen. Where is she going?",
          tts: "Idem u banku u centru.",
          options: ["to the bank", "to the museum", "to school"],
          correctIndex: 0,
          explanation: "u banku = to the bank (moving → ACC); u centru = in the centre (LOC, where the bank is).",
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
            "Marko živi u Zagrebu, na trećem katu. Njegov stan je u centru. Blizu je banka i pošta. Marko ide na posao. On čeka tramvaj na stanici. Kino je daleko, ali muzej je blizu, na trgu.\n\nGdje živi Marko? (Where does Marko live?)",
          options: ["na trećem katu", "na prvom katu", "u prizemlju"],
          correctIndex: 0,
          explanation: "»Marko živi… na trećem katu.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Što je blizu? (What is nearby?)",
          options: ["banka i pošta", "kino", "kolodvor"],
          correctIndex: 0,
          explanation: "»Blizu je banka i pošta.« (Kino je daleko.)",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Kamo Marko ide? (Where is Marko going?)",
          options: ["na posao", "u kino", "u muzej"],
          correctIndex: 0,
          explanation: "»Marko ide na posao.«",
        },
      ],
    },
  ],
};
