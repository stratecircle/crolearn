import type { UnitTest } from "@/types/content";

/**
 * A2 U11 unit test (spec: curriculum/A2/unit-11.md blueprint).
 * 19 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: boli/bole agreement (L1), modal
 * meanings & the ne-moraš/ne-smiješ contrast (L2), DAT experiencer (L3),
 * visit chunks (L4).
 */
export const a2u11test: UnitTest = {
  id: "a2u11t",
  unitId: "a2u11",
  title: "Test — Zdravlje",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the body part to English",
          pairs: [
            { a: "glava", b: "head" },
            { a: "zub", b: "tooth" },
            { a: "grlo", b: "throat" },
            { a: "trbuh", b: "stomach" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the body part to English",
          pairs: [
            { a: "ruka", b: "arm / hand" },
            { a: "noga", b: "leg / foot" },
            { a: "oko", b: "eye" },
            { a: "uho", b: "ear" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "You buy medicine there:",
          options: ["ljekarna", "čekaonica", "pregled"],
          correctIndex: 0,
          explanation: "ljekarna = pharmacy.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "glavobolja = ?",
          options: ["headache", "a cold", "fever"],
          correctIndex: 0,
          explanation: "glava + boljeti → glavobolja = headache.",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "The opposite of bolestan:",
          options: ["zdrav", "slab", "umoran"],
          correctIndex: 0,
          explanation: "bolestan = ill ↔ zdrav = healthy.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "___ me oči.",
          blanks: [["Bole", "bole"]],
          translation: "My eyes hurt.",
          explanation: "oči is plural → bole.",
        },
        {
          id: "s07",
          type: "fill",
          text: "___ me trbuh.",
          blanks: [["Boli", "boli"]],
          translation: "My stomach hurts.",
          explanation: "One part → boli.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Bolestan si. ___ ići na posao.« (it's forbidden)",
          options: ["Ne smiješ", "Ne moraš", "Nećeš"],
          correctIndex: 0,
          explanation: "Forbidden → ne smiješ. (Ne moraš = you don't have to.)",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "“You don't have to come” = ?",
          options: ["Ne moraš doći.", "Ne smiješ doći.", "Ne možeš doći."],
          correctIndex: 0,
          explanation: "No obligation → ne moraš (ne smiješ would forbid it).",
        },
        {
          id: "s10",
          type: "fill",
          text: "Moram ___. (ležati)",
          blanks: [["ležati", "lezati"]],
          translation: "I have to lie down.",
          explanation: "Modal + INFINITIVE: moram ležati.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Treba ___ odmor. (I need)",
          blanks: [["mi"]],
          translation: "I need a rest.",
          explanation: "The needer is DAT: treba mi.",
        },
        {
          id: "s12",
          type: "fill",
          text: "Ani ___ loše. (Ana feels bad)",
          blanks: [["je"]],
          translation: "Ana feels bad.",
          explanation: "Ani (DAT) + je + loše: Ani je loše.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s13",
          type: "listen-type",
          tts: "Boli me trbuh.",
          explanation: "Boli me trbuh — my stomach hurts.",
        },
        {
          id: "s14",
          type: "listen-type",
          tts: "glavobolja",
          explanation: "glavobolja = headache.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen to the doctor: what must the patient do?",
          tts: "Morate ležati i piti puno vode.",
          options: ["lie down and drink a lot of water", "run every day", "take three pills"],
          correctIndex: 0,
          explanation: "Morate ležati i piti puno vode.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen: what is forbidden?",
          tts: "Ne smijete piti kavu.",
          options: ["drinking coffee", "drinking tea", "sleeping"],
          correctIndex: 0,
          explanation: "Ne smijete piti kavu — coffee is off the table.",
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
            "»Tableta: dva puta na dan, poslije jela. — Liječnica: Imate prehladu. Morate ležati tri dana. Ne smijete raditi. Trebate piti puno vode i čaja.«\n\nHow often must the patient take the pill?",
          options: ["twice a day", "once a day", "three times a day"],
          correctIndex: 0,
          explanation: "»dva puta na dan« = twice a day.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same note: Što pacijent ima? (pacijent = the patient — What do they have?)",
          options: ["prehladu", "temperaturu", "glavobolju"],
          correctIndex: 0,
          explanation: "»Imate prehladu.«",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Same note: what is the patient NOT allowed to do?",
          options: ["work", "lie down", "drink tea"],
          correctIndex: 0,
          explanation: "»Ne smijete raditi.« — working is forbidden.",
        },
      ],
    },
  ],
};
