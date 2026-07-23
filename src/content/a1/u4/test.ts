import type { UnitTest } from "@/types/content";

/**
 * A1 U4 unit test (spec: curriculum/A1/unit-4.md blueprint).
 * 19 items · 4 sections · no hints · pass ≥ 70%.
 */
export const a1u4test: UnitTest = {
  id: "a1u4t",
  unitId: "a1u4",
  title: "Test — Hrana i kafić",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the food to English",
          pairs: [
            { a: "kruh", b: "bread" },
            { a: "riba", b: "fish" },
            { a: "meso", b: "meat" },
            { a: "juha", b: "soup" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the food/drink to English",
          pairs: [
            { a: "voće", b: "fruit" },
            { a: "povrće", b: "vegetables" },
            { a: "pivo", b: "beer" },
            { a: "sladoled", b: "ice cream" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "povrće = ?",
          options: ["vegetables", "fruit", "meat"],
          correctIndex: 0,
          explanation: "povrće = vegetables (voće = fruit).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "čokolada = ?",
          options: ["chocolate", "cake", "cheese"],
          correctIndex: 0,
          explanation: "čokolada = chocolate (kolač = cake, sir = cheese).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "Morning → midday → evening meals, in order:",
          options: ["doručak, ručak, večera", "večera, ručak, doručak", "ručak, doručak, večera"],
          correctIndex: 0,
          explanation: "doručak (breakfast) → ručak (lunch) → večera (dinner).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Pijem ___.",
          blanks: [["kavu"]],
          translation: "I drink coffee.",
          explanation: "kava is feminine → ACC kavu.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Jedem ___.",
          blanks: [["meso"]],
          translation: "I eat meat.",
          explanation: "meso is neuter → no change in the accusative.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Čekam ___.",
          blanks: [["konobara"]],
          translation: "I am waiting for the waiter.",
          explanation: "konobar is animate masculine → ACC konobara.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Oni ___ vino.",
          blanks: [["piju"]],
          translation: "They drink wine.",
          explanation: "piti, -em class 3pl → piju.",
        },
        {
          id: "s10",
          type: "fill",
          text: "Mi ___ juhu.",
          blanks: [["kuhamo"]],
          translation: "We are cooking soup.",
          explanation: "kuhati, -am class → kuhamo.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Ja ___ sladoled, hoću kolač.",
          blanks: [["neću"]],
          translation: "I don't want ice cream, I want cake.",
          explanation: "htjeti fuses its negative → neću.",
        },
        {
          id: "s12",
          type: "mc",
          prompt: "“Ana doesn't cook meat.”",
          options: ["Ana ne kuha meso.", "Ana nekuha meso.", "Ana nema kuha meso."],
          correctIndex: 0,
          explanation: "Ordinary verbs negate with a separate ne: ne kuha.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s13",
          type: "listen-type",
          tts: "Želim jednu kavu, molim.",
          explanation: "Želim jednu kavu, molim — I'd like one coffee, please.",
        },
        {
          id: "s14",
          type: "listen-type",
          tts: "Volim ribu.",
          explanation: "Volim ribu — I love fish (riba → ribu).",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen. What does it mean?",
          tts: "Ne jedem meso.",
          options: ["I don't eat meat", "I don't drink wine", "I don't want cake"],
          correctIndex: 0,
          explanation: "ne jedem = I don't eat; meso = meat.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen. What is being ordered?",
          tts: "Jednu juhu i jedan sok, molim.",
          options: ["one soup and one juice", "one coffee and one water", "one fish and one salad"],
          correctIndex: 0,
          explanation: "jednu juhu (f) + jedan sok (m).",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s17",
          type: "mc",
          prompt:
            "»Dobar dan! Izvolite?«\n»Dobar dan! Želim jednu juhu i jedan kruh, molim.«\n»Izvolite. Dobar tek!«\n»Hvala! … Račun, molim!«\n\nTko govori »Dobar tek«? (Who says \"Enjoy your meal\"?)",
          options: ["konobar", "gost", "Ana"],
          correctIndex: 0,
          explanation: "The waiter (konobar) serves the food and wishes »Dobar tek!«.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same dialogue: Što želi gost? (What does the guest want?)",
          options: ["juhu i kruh", "kavu i sok", "ribu i salatu"],
          correctIndex: 0,
          explanation: "»Želim jednu juhu i jedan kruh, molim.«",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Same dialogue: Što gost kaže na kraju? (What does the guest say at the end?)",
          options: ["Račun, molim!", "Dobar tek!", "Izvolite!"],
          correctIndex: 0,
          explanation: "»Račun, molim!« — the guest asks for the bill. (na kraju = at the end)",
        },
      ],
    },
  ],
};
