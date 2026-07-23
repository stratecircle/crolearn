import type { UnitTest } from "@/types/content";

/**
 * A1 U1 unit test (spec: curriculum/A1/unit-1.md blueprint).
 * 17 items · 4 sections · no hints · pass ≥ 70%.
 */
export const a1u1test: UnitTest = {
  id: "a1u1t",
  unitId: "a1u1",
  title: "Test — Dobar dan!",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match Croatian to English",
          pairs: [
            { a: "jutro", b: "morning" },
            { a: "noć", b: "night" },
            { a: "voda", b: "water" },
            { a: "hvala", b: "thank you" },
            { a: "škola", b: "school" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "“doviđenja” means…",
          options: ["goodbye", "welcome", "good night"],
          correctIndex: 0,
          explanation: "doviđenja = goodbye (formal-neutral).",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "Which word means “friend” (female)?",
          options: ["prijateljica", "prijatelj", "studentica"],
          correctIndex: 0,
          explanation: "prijatelj (m) → prijateljica (f).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "“čovjek” means…",
          options: ["person / man", "pocket", "summer"],
          correctIndex: 0,
          explanation: "čovjek = person/man. (džep = pocket, ljeto = summer)",
        },
        {
          id: "s05",
          type: "match",
          prompt: "Match the situation to the phrase",
          pairs: [
            { a: "someone hands you a coffee", b: "Hvala!" },
            { a: "you're asking for something", b: "Molim…" },
            { a: "you bump into someone", b: "Oprostite!" },
            { a: "someone arrives at your door", b: "Dobrodošli!" },
          ],
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Ja ___ Tom.",
          blanks: [["sam"]],
          translation: "I am Tom.",
          explanation: "ja → sam.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Ona ___ studentica.",
          blanks: [["je"]],
          translation: "She is a student.",
          explanation: "ona → je.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Mi ___ prijatelji.",
          blanks: [["smo"]],
          translation: "We are friends.",
          explanation: "mi → smo.",
        },
        {
          id: "s09",
          type: "reorder",
          words: ["Umoran", "sam", "i", "ja"],
          answers: ["Umoran sam i ja", "Umoran sam i ja.", "I ja sam umoran", "I ja sam umoran.", "Ja sam i umoran", "Ja sam i umoran."],
          en: "I'm tired too.",
          explanation: "sam can never stand first — Umoran sam ✅, Sam umoran ❌.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "You're talking to a 70-year-old woman you don't know. What do you say?",
          options: ["Kako ste?", "Kako si?", "Ćao!"],
          correctIndex: 0,
          explanation: "Stranger + older person → Vi forms: Kako ste?",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s11",
          type: "listen-type",
          tts: "žena",
          explanation: "žena — woman/wife. ž = the “s” in measure.",
        },
        {
          id: "s12",
          type: "listen-type",
          tts: "Dobra večer!",
          explanation: "Dobra večer — good evening (večer is feminine → dobra).",
        },
        {
          id: "s13",
          type: "mc",
          prompt: "Listen. What does it mean?",
          tts: "Drago mi je.",
          options: ["Nice to meet you", "See you", "Good night"],
          correctIndex: 0,
          explanation: "Drago mi je — said when meeting someone.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen to the greeting. When is it used?",
          tts: "Laku noć!",
          options: ["in the evening, before sleep", "in the morning", "at noon"],
          correctIndex: 0,
          explanation: "Laku noć = good night — a farewell before sleep.",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s15",
          type: "mc",
          prompt: "»Dobar dan! Ja sam Ivan.« — »Drago mi je! Ja sam Maja. Kako si?« — »Odlično, hvala!«\n\nTko je Maja? (Who is Maja?)",
          options: ["žena", "gospodin", "đak Ivan"],
          correctIndex: 0,
          explanation: "Maja introduces herself — she's the woman in the dialogue.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Same dialogue: Kako je Ivan? (How is Ivan doing?)",
          options: ["odlično", "loše", "umoran"],
          correctIndex: 0,
          explanation: "»Odlično, hvala!«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same dialogue: are Ivan and Maja using ti or Vi with each other?",
          options: ["ti (Kako si?)", "Vi (Kako ste?)", "you can't tell"],
          correctIndex: 0,
          explanation: "»Kako si?« is the ti-form — informal.",
        },
      ],
    },
  ],
};
