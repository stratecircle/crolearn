import type { UnitTest } from "@/types/content";

/**
 * A1 U7 unit test (spec: curriculum/A1/unit-7.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · no hints ·
 * pass ≥ 70%. Only tests points drilled ≥2× across L1–L5.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u7test: UnitTest = {
  id: "a1u7t",
  unitId: "a1u7",
  title: "Test — Kupovina",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the clothing word to English",
          pairs: [
            { a: "majica", b: "t-shirt" },
            { a: "jakna", b: "jacket" },
            { a: "hlače", b: "trousers" },
            { a: "cipele", b: "shoes" },
            { a: "haljina", b: "dress" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the colour to English",
          pairs: [
            { a: "crvena", b: "red" },
            { a: "plava", b: "blue" },
            { a: "zelena", b: "green" },
            { a: "crna", b: "black" },
            { a: "bijela", b: "white" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "tržnica = ?",
          options: ["market", "bakery", "bank"],
          correctIndex: 0,
          explanation: "tržnica = (open-air) market.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "pekarnica = ?",
          options: ["bakery", "shop", "square"],
          correctIndex: 0,
          explanation: "pekarnica = bakery.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s05",
          type: "fill",
          text: "Molim čašu ___.",
          blanks: [["vode"]],
          translation: "A glass of water, please. (voda)",
          explanation: "Quantity → genitive: voda → vode.",
        },
        {
          id: "s06",
          type: "fill",
          text: "Kilogram ___, molim.",
          blanks: [["sira"]],
          translation: "A kilo of cheese, please. (sir)",
          explanation: "sir → sira (masc genitive -a).",
        },
        {
          id: "s07",
          type: "fill",
          text: "Nema ___.",
          blanks: [["kruha"]],
          translation: "There's no bread. (kruh)",
          explanation: "nema + genitive: kruh → kruha.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "dva ___ (two beers)",
          options: ["piva", "pivo", "pive"],
          correctIndex: 0,
          explanation: "2–4 → genitive singular: pivo → piva.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Pet ___, molim.",
          blanks: [["eura"]],
          translation: "Five euros, please. (euro)",
          explanation: "5+ → genitive plural: euro → eura.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Tom je ___ Kanade. (from)",
          options: ["iz", "do", "blizu"],
          correctIndex: 0,
          explanation: "iz = from/out of a place → iz Kanade.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Tražim ___ jaknu.",
          blanks: [["crnu"]],
          translation: "I'm looking for a black jacket. (crn)",
          explanation: "Accusative feminine: crna → crnu, agreeing with jaknu.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Trideset pet eura.",
          answers: ["Trideset pet eura.", "trideset pet eura", "35 eura", "trideset pet"],
          explanation: "trideset pet = 35.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Pet eura i pedeset centi.",
          answers: ["Pet eura i pedeset centi.", "pet eura i pedeset centi", "5 eura i 50 centi"],
          explanation: "€5,50 = pet eura i pedeset centi.",
        },
        {
          id: "s14",
          type: "listen-type",
          tts: "Devedeset devet.",
          answers: ["Devedeset devet.", "devedeset devet", "99"],
          explanation: "devedeset devet = 99.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen. What is the customer asking for?",
          tts: "Imate li plavu majicu?",
          options: ["a blue t-shirt", "a black jacket", "a red dress"],
          correctIndex: 0,
          explanation: "Imate li plavu majicu? — do you have a blue t-shirt?",
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
            "»Dobar dan! Tražim crnu jaknu.«\n»Da, imamo. Jakna košta pedeset eura.«\n»Koliko koštaju cipele?«\n»Cipele koštaju trideset eura.«\n»Dobro. Želim platiti.«\n\nŠto traži gost? (What is the customer looking for?)",
          options: ["a black jacket", "a blue t-shirt", "a white shirt"],
          correctIndex: 0,
          explanation: "»Tražim crnu jaknu.« — a black jacket.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same dialogue: Koliko košta jakna? (How much is the jacket?)",
          options: ["fifty euros", "thirty euros", "fifteen euros"],
          correctIndex: 0,
          explanation: "»Jakna košta pedeset eura.« — fifty euros.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same dialogue: Koliko koštaju cipele? (How much are the shoes?)",
          options: ["thirty euros", "fifty euros", "thirteen euros"],
          correctIndex: 0,
          explanation: "»Cipele koštaju trideset eura.« — thirty euros.",
        },
      ],
    },
  ],
};
