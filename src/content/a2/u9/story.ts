import type { Story } from "@/types/content";

/**
 * A2 U9 story — «Put na more» (spec: curriculum/A2/unit-9.md).
 * Unit-9 language: future I throughout with a perfekt frame at the start,
 * GEN prepositions, travel vocab. Cases: NOM/ACC/LOC/GEN sg only. No modals.
 * Cast: Tom, Ana, Marko (baka Marija by phone). 5 glossed words. ~185 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u9story: Story = {
  id: "a2u9s",
  unitId: "a2u9",
  title: "Put na more",
  titleEn: "A trip to the sea",
  glossary: [
    { word: "trajekt", gloss: "ferry" },
    { word: "luka", gloss: "harbour" },
    { word: "uzbuđen", gloss: "excited" },
    { word: "sunčan", gloss: "sunny" },
    { word: "nazvala je", gloss: "she phoned" },
  ],
  paragraphs: [
    {
      hr: "Ljeto je. Tom i Ana planiraju odmor na moru. Prošli tjedan su kupili dvije povratne karte i vodič. Marko sada živi u Splitu i radi u restoranu blizu plaže.",
      en: "It's summer. Tom and Ana are planning a holiday at the seaside. Last week they bought two return tickets and a guidebook. Marko now lives in Split and works in a restaurant near the beach.",
    },
    {
      hr: "Tom je uzbuđen: »Sutra ćemo putovati na more! Hoćeš li rezervirati sobu blizu plaže?« — »Hoću! Hotel je blizu mora i blizu luke«, govori Ana.",
      en: "Tom is excited: \"Tomorrow we'll travel to the seaside! Will you book a room near the beach?\" — \"I will! The hotel is near the sea and near the harbour,\" says Ana.",
    },
    {
      hr: "Večeras Ana pakira: spakirat će velik kovčeg, a Tom će spakirati ruksak. Ali gdje je putovnica? Putovnica nije u ruksaku! Ana govori: »Bez putovnice ne putuješ!« Tom gleda u kovčeg — putovnica je u kovčegu. »Hvala, Ana!«",
      en: "Tonight Ana is packing: she'll pack a big suitcase, and Tom will pack a backpack. But where is the passport? The passport is not in the backpack! Ana says: \"Without a passport you're not travelling!\" Tom looks into the suitcase — the passport is in the suitcase. \"Thanks, Ana!\"",
    },
    {
      hr: "Navečer je baka Marija nazvala Anu. »Kamo ćete putovati?« — »Putujemo iz Zagreba do Splita. Krenut ćemo rano iz Zagreba i stići ćemo u Split u podne. Onda idemo na trajekt — posjetit ćemo i otok!« Baka je sretna: »Krasno! Sretan put!«",
      en: "In the evening grandma Marija phoned Ana. \"Where will you travel to?\" — \"We're travelling from Zagreb to Split. We'll set off early from Zagreb and we'll arrive in Split at noon. Then we're taking the ferry — we'll visit the island too!\" Grandma is happy: \"Wonderful! Have a good trip!\"",
    },
    {
      hr: "Tom i Ana idu spavati. Sutra će biti sunčan i krasan dan — more, plaža i odmor!",
      en: "Tom and Ana go to sleep. Tomorrow will be a sunny and wonderful day — the sea, the beach and a holiday!",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Kamo će Tom i Ana putovati? (Where will Tom and Ana travel to?)",
      options: ["u Split, na more", "u Zagreb", "u Kanadu"],
      correctIndex: 0,
      explanation: "»Putujemo iz Zagreba do Splita… odmor na moru.«",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Gdje će spavati? (Where will they sleep?)",
      options: ["u hotelu blizu mora", "kod bake Marije", "u restoranu"],
      correctIndex: 0,
      explanation: "»Hotel je blizu mora i blizu luke.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Tko radi u restoranu blizu plaže? (Who works in a restaurant near the beach?)",
      options: ["Marko", "Tom", "baka Marija"],
      correctIndex: 0,
      explanation: "»Marko sada živi u Splitu i radi u restoranu blizu plaže.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Gdje je putovnica? (Where is the passport?)",
      options: ["u kovčegu", "u ruksaku", "u hotelu"],
      correctIndex: 0,
      explanation: "»Tom gleda u kovčeg — putovnica je u kovčegu.«",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kada će stići u Split? (When will they arrive in Split?)",
      options: ["u podne", "u devet sati", "navečer"],
      correctIndex: 0,
      explanation: "»…stići ćemo u Split u podne.«",
    },
  ],
};
