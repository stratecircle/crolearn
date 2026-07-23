import type { UnitTest } from "@/types/content";

/**
 * A1 U8 unit test (spec: curriculum/A1/unit-8.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · no hints · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: participle agreement (L1),
 * perfekt formation (L2), clitic se/je word order (L3), weather (L4), time markers (L1).
 */
export const a1u8test: UnitTest = {
  id: "a1u8t",
  unitId: "a1u8",
  title: "Test — Jučer i danas",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the weather word to English",
          pairs: [
            { a: "sunce", b: "sun" },
            { a: "kiša", b: "rain" },
            { a: "snijeg", b: "snow" },
            { a: "vjetar", b: "wind" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the weather word to English",
          pairs: [
            { a: "sunčano", b: "sunny" },
            { a: "oblačno", b: "cloudy" },
            { a: "toplo", b: "warm" },
            { a: "hladno", b: "cold" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "jučer = ?",
          options: ["yesterday", "today", "tomorrow"],
          correctIndex: 0,
          explanation: "jučer = yesterday (danas = today, sutra = tomorrow).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "sinoć = ?",
          options: ["last night", "last week", "this morning"],
          correctIndex: 0,
          explanation: "sinoć = last night.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s05",
          type: "fill",
          text: "Ana je ___ u školi. (biti)",
          blanks: [["bila"]],
          translation: "Ana was at school.",
          explanation: "Ana (she) → bila.",
        },
        {
          id: "s06",
          type: "fill",
          text: "Jučer je ___ kiša. (padati)",
          blanks: [["padala"]],
          translation: "Yesterday it was raining.",
          explanation: "kiša is feminine → padala.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Što si ___ jučer? (raditi — to a man)",
          blanks: [["radio"]],
          translation: "What did you do yesterday?",
          explanation: "raditi → radio (male).",
        },
        {
          id: "s08",
          type: "fill",
          text: "Mi smo ___ u Split. (putovati)",
          blanks: [["putovali"]],
          translation: "We traveled to Split.",
          explanation: "putovati → putovali.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "Which sentence is correct?",
          options: ["Zvao se Marko.", "Zvao se je Marko.", "Zvao je se Marko."],
          correctIndex: 0,
          explanation: "3rd person + se → je drops: Zvao se Marko.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Which sentence is correct?",
          options: ["Ana se tuširala.", "Ana je se tuširala.", "Se tuširala Ana."],
          correctIndex: 0,
          explanation: "se in second position, and no je: Ana se tuširala.",
        },
        {
          id: "s11",
          type: "mc",
          prompt: "Ask a woman: “Did you watch the film?”",
          options: ["Jesi li gledala film?", "Si li gledala film?", "Li jesi gledala film?"],
          correctIndex: 0,
          explanation: "Past yes/no question: Jesi li + participle.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Bili smo na koncertu.",
          explanation: "Bili smo na koncertu — we were at a concert.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Jučer je padala kiša.",
          explanation: "Jučer je padala kiša — yesterday it was raining.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen: what's the weather like today?",
          tts: "Danas je sunčano i toplo.",
          options: ["sunny and warm", "cold and rainy", "cloudy and windy"],
          correctIndex: 0,
          explanation: "Danas je sunčano i toplo.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: what was Saturday like?",
          tts: "U subotu je bilo hladno i padao je snijeg.",
          options: ["cold with snow", "hot and sunny", "warm with rain"],
          correctIndex: 0,
          explanation: "Bilo je hladno i padao je snijeg — cold and snowing.",
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
            "»Prošli vikend sam bio u Zagrebu. U subotu je bilo sunčano i toplo. Gledao sam nogomet i pio kavu. U nedjelju je padala kiša cijeli dan, pa sam čitao knjigu i pisao zadaću. Bilo je dosadno.«\n\nGdje je bio prošli vikend? (Where was he last weekend?)",
          options: ["u Zagrebu", "u Splitu", "kod kuće"],
          correctIndex: 0,
          explanation: "»…sam bio u Zagrebu.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Kakvo je vrijeme bilo u subotu? (What was Saturday's weather?)",
          options: ["sunčano i toplo", "padala je kiša", "padao je snijeg"],
          correctIndex: 0,
          explanation: "»U subotu je bilo sunčano i toplo.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Što je radio u nedjelju? (What did he do on Sunday?)",
          options: ["čitao knjigu i pisao zadaću", "gledao nogomet", "plesao i pjevao"],
          correctIndex: 0,
          explanation: "»…pa sam čitao knjigu i pisao zadaću.«",
        },
      ],
    },
  ],
};
