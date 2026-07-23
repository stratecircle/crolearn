import type { UnitTest } from "@/types/content";

/**
 * A2 U13 unit test (spec: curriculum/A2/unit-13.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: GEN pl + fleeting a (L1), the
 * bracket & quantity words (L2), comparatives incl. the irregular four (L3),
 * naj- and od/nego (L4), the description frame (L5).
 */
export const a2u13test: UnitTest = {
  id: "a2u13t",
  unitId: "a2u13",
  title: "Test — Priroda",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the animals",
          pairs: [
            { a: "konj", b: "horse" },
            { a: "krava", b: "cow" },
            { a: "ovca", b: "sheep" },
            { a: "medvjed", b: "bear" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the landscape",
          pairs: [
            { a: "planina", b: "mountain" },
            { a: "rijeka", b: "river" },
            { a: "šuma", b: "forest" },
            { a: "jezero", b: "lake" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "The coldest season:",
          options: ["zima", "proljeće", "jesen"],
          correctIndex: 0,
          explanation: "zima = winter — najhladnije godišnje doba.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "»Jezero je duboko.« — duboko means…",
          options: ["deep", "wide", "long"],
          correctIndex: 0,
          explanation: "dubok = deep.",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "The view from the mountain is wonderful — »Pogled je ___.«",
          options: ["predivan", "spor", "kratak"],
          correctIndex: 0,
          explanation: "predivan = wonderful (pogled, m).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "pet ___ (mačka)",
          blanks: [["mačaka", "macaka"]],
          translation: "five cats",
          explanation: "5+ → GEN pl with the inserted a: mačaka.",
        },
        {
          id: "s07",
          type: "fill",
          text: "puno ___ (čovjek)",
          blanks: [["ljudi"]],
          translation: "a lot of people",
          explanation: "čovjek → ljudi, always.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "dva ___ (pas)",
          options: ["psa", "pasa", "pas"],
          correctIndex: 0,
          explanation: "2–4 → GEN singular: dva psa.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Zima je ___ od jeseni. (hladan)",
          blanks: [["hladnija"]],
          translation: "Winter is colder than autumn.",
          explanation: "Comparative, feminine: hladnija (+ od + GEN jeseni).",
        },
        {
          id: "s10",
          type: "fill",
          text: "dobar → ___ (better — irregular!)",
          blanks: [["bolji"]],
          translation: "good → better",
          explanation: "The irregular four: bolji.",
        },
        {
          id: "s11",
          type: "mc",
          prompt: "Zagreb je veći ___ Splita.",
          options: ["od", "nego", "iz"],
          correctIndex: 0,
          explanation: "GEN standard → od Splita (nego would need NOM: nego Split).",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "pet pasa",
          explanation: "pet pasa — five dogs (the returned a).",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "najljepše jezero",
          explanation: "najljepše jezero — the most beautiful lake.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen: what happens in winter?",
          tts: "Zimi pada snijeg i dan je kraći.",
          options: [
            "it snows and the day is shorter",
            "it rains and the day is longer",
            "it's warm and sunny",
          ],
          correctIndex: 0,
          explanation: "Zimi pada snijeg i dan je kraći.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: which is warmer?",
          tts: "More je toplije od rijeke.",
          options: ["the sea", "the river", "the lake"],
          correctIndex: 0,
          explanation: "More je toplije od rijeke — the sea is warmer than the river.",
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
            "»Moje najljepše mjesto je selo blizu planina. Tamo ima puno šuma i nekoliko jezera. Zimi je hladno, ali ljeti je toplije nego u gradu. Zrak je svjež i priroda je predivna.«\n\nGdje je to mjesto? (Where is this place?)",
          options: ["blizu planina", "na moru", "u gradu"],
          correctIndex: 0,
          explanation: "»selo blizu planina« — a village near the mountains.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Čega tamo ima puno? (What is there a lot of?)",
          options: ["šuma", "jezera", "ljudi"],
          correctIndex: 0,
          explanation: "»puno šuma i nekoliko jezera« — a lot of forests, only a few lakes.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Kada je toplije nego u gradu? (When is it warmer than in the city?)",
          options: ["ljeti", "zimi", "u jesen"],
          correctIndex: 0,
          explanation: "»ljeti je toplije nego u gradu« — in summer.",
        },
      ],
    },
  ],
};
