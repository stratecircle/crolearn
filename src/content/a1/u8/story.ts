import type { Story } from "@/types/content";

/**
 * A1 U8 story — «Vikend u Splitu» (spec: curriculum/A1/unit-8.md).
 * Unit-8 language: perfekt throughout, weather, clitic se/je, all A1 cases.
 * Cast: Tom, Ana, Marko. ≤5 glossed words. ~114 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u8story: Story = {
  id: "a1u8s",
  unitId: "a1u8",
  title: "Vikend u Splitu",
  titleEn: "A weekend in Split",
  glossary: [
    { word: "plaža", gloss: "beach" },
    { word: "povratak", gloss: "return / the way back" },
    { word: "umorni ali sretni", gloss: "tired but happy" },
  ],
  paragraphs: [
    {
      hr: "Prošli vikend su Tom i Ana putovali u Split. Putovali su tri sata. Marko živi u Splitu i bio je jako sretan. »Dobrodošli!«",
      en: "Last weekend Tom and Ana traveled to Split. They traveled for three hours. Marko lives in Split and was very happy. \"Welcome!\"",
    },
    {
      hr: "U subotu je bilo sunčano i vruće. Tom i Ana su šetali na plaži i pili kavu blizu mora. More je bilo lijepo. Bilo je krasno.",
      en: "On Saturday it was sunny and hot. Tom and Ana strolled on the beach and drank coffee near the sea. The sea was beautiful. It was wonderful.",
    },
    {
      hr: "Navečer je Marko kuhao ribu. »Dobar tek!« Jeli su ribu i pili vino. Onda su pjevali i plesali. Bilo je zabavno.",
      en: "In the evening Marko cooked fish. \"Enjoy your meal!\" They ate fish and drank wine. Then they sang and danced. It was fun.",
    },
    {
      hr: "U nedjelju je padala kiša cijeli dan. Bilo je hladno, pa su Tom i Ana bili u muzeju. Bilo je zanimljivo.",
      en: "On Sunday it rained all day. It was cold, so Tom and Ana were at the museum. It was interesting.",
    },
    {
      hr: "Na kraju su putovali u Zagreb. Povratak je bio dosadan, ali vikend je bio krasan. Tom i Ana su bili umorni ali sretni.",
      en: "In the end they traveled to Zagreb. The way back was boring, but the weekend was wonderful. Tom and Ana were tired but happy.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Gdje su Tom i Ana bili prošli vikend? (Where were Tom and Ana last weekend?)",
      options: ["u Splitu", "u Zagrebu", "u Kanadi"],
      correctIndex: 0,
      explanation: "»Prošli vikend su Tom i Ana putovali u Split.«",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Kakvo je vrijeme bilo u subotu? (What was the weather like on Saturday?)",
      options: ["sunčano i vruće", "hladno i kiša", "padao je snijeg"],
      correctIndex: 0,
      explanation: "»U subotu je bilo sunčano i vruće.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što je Marko kuhao? (What did Marko cook?)",
      options: ["ribu", "meso", "juhu"],
      correctIndex: 0,
      explanation: "»Navečer je Marko kuhao ribu.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Zašto su Tom i Ana u nedjelju bili u muzeju? (Why were Tom and Ana at the museum on Sunday?)",
      options: ["jer je padala kiša", "jer je bilo sunčano", "jer su gledali utakmicu"],
      correctIndex: 0,
      explanation: "It rained all day and was cold — »Bilo je hladno, pa su … bili u muzeju.«",
    },
  ],
};
