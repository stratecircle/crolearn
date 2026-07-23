import type { Story } from "@/types/content";

/**
 * A1 U1 story — «Tom u Zagrebu» (spec: curriculum/A1/unit-1.md).
 * Unit-1 language only: biti, nominative, courtesy chunks. ≤5 glossed words.
 */
export const a1u1story: Story = {
  id: "a1u1s",
  unitId: "a1u1",
  title: "Tom u Zagrebu",
  titleEn: "Tom in Zagreb",
  glossary: [
    { word: "zračna luka", gloss: "airport" },
    { word: "grad", gloss: "city" },
    { word: "u Zagrebu", gloss: "in Zagreb (chunk — the case comes in Unit 5!)" },
    { word: "naravno", gloss: "of course" },
    { word: "super", gloss: "great" },
  ],
  paragraphs: [
    {
      hr: "Dobro jutro! Tom je u Zagrebu. Zračna luka… i grad! Zagreb je super.",
      en: "Good morning! Tom is in Zagreb. The airport… and the city! Zagreb is great.",
    },
    {
      hr: "Tu je i Ana. Ana je studentica. »Dobar dan! Ja sam Tom.« — »Drago mi je! Ja sam Ana.«",
      en: "Ana is here too. Ana is a student. \"Good day! I'm Tom.\" — \"Nice to meet you! I'm Ana.\"",
    },
    {
      hr: "Tu je i Marko. »Dobar dan! Kava?« — »Da, kava i voda, molim.« — »Naravno! Izvolite.« — »Hvala!«",
      en: "Marko is here too. \"Good day! Coffee?\" — \"Yes, coffee and water, please.\" — \"Of course! Here you go.\" — \"Thanks!\"",
    },
    {
      hr: "Kava je super. Ana: »Kako si?« Tom: »Odlično! A ti?« — »Dobro, hvala.«",
      en: "The coffee is great. Ana: \"How are you?\" Tom: \"Excellent! And you?\" — \"Good, thanks.\"",
    },
    {
      hr: "Večer je. »Doviđenja, Ana!« — »Vidimo se! Laku noć!«",
      en: "It's evening. \"Goodbye, Ana!\" — \"See you! Good night!\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Tko je Ana? (Who is Ana?)",
      options: ["studentica", "student", "gospođa"],
      correctIndex: 0,
      explanation: "»Ana je studentica.« — the -ica ending marks the female form.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je super? (What is great?)",
      options: ["kava", "voda", "čaj"],
      correctIndex: 0,
      explanation: "»Kava je super.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Kako je Tom? (How is Tom?)",
      options: ["odlično", "loše", "umoran"],
      correctIndex: 0,
      explanation: "Ana asks »Kako si?« and Tom answers »Odlično!«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "What time of day is it at the end of the story?",
      options: ["večer", "jutro", "dan"],
      correctIndex: 0,
      explanation: "»Večer je.« — that's why they say laku noć.",
    },
  ],
};
