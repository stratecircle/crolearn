import type { UnitTest } from "@/types/content";

/**
 * A2 U10 unit test (spec: curriculum/A2/unit-10.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · no hints · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: DAT receivers (L1), ACC-vs-DAT
 * valence (L3), sviđa mi se (L2), renting chunks & se-perfekt (L4), rooms (L5).
 */
export const a2u10test: UnitTest = {
  id: "a2u10t",
  unitId: "a2u10",
  title: "Test — Kod kuće",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the rooms to English",
          pairs: [
            { a: "kupaonica", b: "bathroom" },
            { a: "spavaća soba", b: "bedroom" },
            { a: "dnevni boravak", b: "living room" },
            { a: "hodnik", b: "hallway" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the chore words to English",
          pairs: [
            { a: "prati", b: "to wash" },
            { a: "čistiti", b: "to clean" },
            { a: "pospremati", b: "to tidy" },
            { a: "suđe", b: "dishes" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "You sleep on it:",
          options: ["krevet", "ormar", "stolica"],
          correctIndex: 0,
          explanation: "krevet = bed (ormar = wardrobe, stolica = chair).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "It takes you up the building:",
          options: ["dizalo", "ulaz", "prozor"],
          correctIndex: 0,
          explanation: "dizalo = lift (ulaz = entrance, prozor = window).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "stanarina = ?",
          options: ["monthly rent", "landlord", "flatmate"],
          correctIndex: 0,
          explanation: "stanarina = the monthly rent (vlasnik = landlord, cimer = flatmate).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Dajem ___ poklon. (sestra)",
          blanks: [["sestri"]],
          translation: "I'm giving my sister a present.",
          explanation: "Receiver → DAT: sestra → sestri.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Pomažem ___. (brat)",
          blanks: [["bratu"]],
          translation: "I'm helping my brother.",
          explanation: "pomagati + DAT: bratu.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Poslala sam ___ pismo. (baka)",
          blanks: [["baki"]],
          translation: "I sent grandma a letter.",
          explanation: "Receiver → DAT: baki.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "Which is correct?",
          options: ["Pomažem susjedu.", "Pomažem susjeda.", "Pomažem susjed."],
          correctIndex: 0,
          explanation: "pomagati serves a DAT person: susjedu.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Tom daje ključ ___.",
          options: ["cimeru", "cimera", "cimer"],
          correctIndex: 0,
          explanation: "The receiver is DAT: cimeru (the key is the ACC thing).",
        },
        {
          id: "s11",
          type: "reorder",
          words: ["sviđa", "mi", "se", "stan"],
          answers: ["Sviđa mi se stan.", "sviđa mi se stan", "Sviđa mi se stan"],
          en: "I like the flat.",
          explanation: "The chunk: Sviđa mi se + the liked thing (NOM).",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Perem suđe u kuhinji.",
          explanation: "Perem suđe u kuhinji — I'm washing the dishes in the kitchen.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "kupaonica",
          explanation: "kupaonica = bathroom.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen: which room is being described?",
          tts: "U sobi su krevet i ormar.",
          options: ["the bedroom", "the kitchen", "the hallway"],
          correctIndex: 0,
          explanation: "A bed and a wardrobe → spavaća soba (the bedroom).",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: how much is the rent?",
          tts: "Stanarina je petsto eura.",
          options: ["500 euros", "300 euros", "50 euros"],
          correctIndex: 0,
          explanation: "petsto = 500.",
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
            "»STAN ZA NAJAM: Stan je u centru grada, na trećem katu. Zgrada ima dizalo. Stan ima kuhinju, kupaonicu, spavaću sobu i dnevni boravak. Balkon je velik. Stanarina je petsto eura.«\n\nGdje je stan? (Where is the flat?)",
          options: ["u centru grada", "blizu fakulteta", "kod bake"],
          correctIndex: 0,
          explanation: "»Stan je u centru grada, na trećem katu.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same ad: does the building have a lift?",
          options: ["yes — Zgrada ima dizalo", "no — nema dizala", "the ad doesn't say"],
          correctIndex: 0,
          explanation: "»Zgrada ima dizalo.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same ad: Kolika je stanarina? (How much is the rent?)",
          options: ["petsto eura", "tristo eura", "pedeset eura"],
          correctIndex: 0,
          explanation: "»Stanarina je petsto eura.«",
        },
      ],
    },
  ],
};
