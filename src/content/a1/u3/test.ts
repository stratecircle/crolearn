import type { UnitTest } from "@/types/content";

/**
 * A1 U3 unit test (spec: curriculum/A1/unit-3.md blueprint).
 * 18 items · 4 sections · no hints · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u3test: UnitTest = {
  id: "a1u3t",
  unitId: "a1u3",
  title: "Test — Moja obitelj",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the family word to English",
          pairs: [
            { a: "majka", b: "mother" },
            { a: "otac", b: "father" },
            { a: "brat", b: "brother" },
            { a: "sestra", b: "sister" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the family word to English",
          pairs: [
            { a: "baka", b: "grandma" },
            { a: "djed", b: "grandpa" },
            { a: "sin", b: "son" },
            { a: "kći", b: "daughter" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "kći = ?",
          options: ["daughter", "son", "sister"],
          correctIndex: 0,
          explanation: "kći = daughter (feminine, irregular).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "djeca = ?",
          options: ["children", "parents", "brothers"],
          correctIndex: 0,
          explanation: "djeca = children (braća = brothers, roditelji = parents).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "visok ↔ ?",
          options: ["nizak", "star", "jak"],
          correctIndex: 0,
          explanation: "tall ↔ short = visok ↔ nizak.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "___ obitelj je velika.",
          blanks: [["Naša"]],
          translation: "Our family is big.",
          explanation: "obitelj is feminine → Naša.",
        },
        {
          id: "s07",
          type: "fill",
          text: "___ brat je student.",
          blanks: [["Moj"]],
          translation: "My brother is a student.",
          explanation: "brat is masculine → Moj.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "Ana ima psa. To je ___ pas.",
          options: ["njezin", "njegov", "njihov"],
          correctIndex: 0,
          explanation: "Owner Ana (ona) → njezin; pas is masculine → njezin.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Naša ___ su mala.",
          blanks: [["djeca"]],
          translation: "Our children are small.",
          explanation: "children = djeca (takes -a agreement and plural su).",
        },
        {
          id: "s10",
          type: "fill",
          text: "Moje ___ su mlade.",
          blanks: [["sestre"]],
          translation: "My sisters are young.",
          explanation: "feminine plural: sestra → sestre.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Oni ___ mačku.",
          blanks: [["imaju"]],
          translation: "They have a cat.",
          explanation: "oni → imaju.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Moja sestra je mlada.",
          explanation: "Moja sestra je mlada — my sister is young.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Nemam brata.",
          explanation: "Nemam brata — I don't have a brother.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen. What does it mean?",
          tts: "Njezin muž je liječnik.",
          options: ["Her husband is a doctor", "His wife is a doctor", "Her brother is a doctor"],
          correctIndex: 0,
          explanation: "njezin muž = her husband; liječnik = doctor.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen. What does she have?",
          tts: "Imam dva brata i sestru.",
          options: ["two brothers and a sister", "a brother and two sisters", "two sisters"],
          correctIndex: 0,
          explanation: "dva brata = two brothers, i sestru = and a sister.",
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
            "»Je li to tvoja obitelj?«\n»Da! To su moji roditelji, moj brat i moja sestra. Moja sestra je studentica.«\n»Imaš li psa?«\n»Ne, nemam psa. Imam mačku — mala je i slatka.«\n\nTko je studentica? (Who is a student?)",
          options: ["sestra", "brat", "majka"],
          correctIndex: 0,
          explanation: "»Moja sestra je studentica.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same dialogue: Ima li ta osoba psa? (Does this person have a dog?)",
          options: ["Ne, nema.", "Da, ima.", "Ima dva psa."],
          correctIndex: 0,
          explanation: "»Nemam psa.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same dialogue: Kakva je mačka? (What is the cat like?)",
          options: ["mala i slatka", "velika i stara", "visoka"],
          correctIndex: 0,
          explanation: "»…mala je i slatka.«",
        },
      ],
    },
  ],
};
