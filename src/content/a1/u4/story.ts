import type { Story } from "@/types/content";

/**
 * A1 U4 story — «Dobar tek!» (spec: curriculum/A1/unit-4.md).
 * Unit-4 language: present tense (all 3 classes), ACC singular throughout,
 * htjeti/želim ordering. ≤5 glossed words. ~110 words.
 */
export const a1u4story: Story = {
  id: "a1u4s",
  unitId: "a1u4",
  title: "Dobar tek!",
  titleEn: "Enjoy your meal!",
  glossary: [
    { word: "danas", gloss: "today" },
    { word: "gost", gloss: "guest" },
    { word: "onda", gloss: "then" },
    { word: "nešto", gloss: "something" },
  ],
  paragraphs: [
    {
      hr: "Danas su Tom i Ana u kafiću. Marko je konobar. Marko: »Dobar dan! Izvolite?«",
      en: "Today Tom and Ana are at the café. Marko is the waiter. Marko: \"Good day! What can I get you?\"",
    },
    {
      hr: "Ana gleda jelovnik. Ana: »Želim juhu i kruh, molim.« Tom je jako gladan. Tom: »Ja želim ribu i salatu, molim.«",
      en: "Ana looks at the menu. Ana: \"I'd like soup and bread, please.\" Tom is very hungry. Tom: \"I'd like fish and salad, please.\"",
    },
    {
      hr: "Marko: »Hoćeš li pivo?« Tom: »Ne, hvala. Ja pijem vodu — jako sam žedan.« Onda Marko gleda Toma: »Tvoj hrvatski je jako dobar!«",
      en: "Marko: \"Do you want a beer?\" Tom: \"No, thanks. I'm drinking water — I'm very thirsty.\" Then Marko looks at Tom: \"Your Croatian is very good!\"",
    },
    {
      hr: "Marko ima ribu, salatu, juhu i kruh. »Izvolite! Dobar tek!« — »Hvala!« Marko: »Želite li još nešto?« — »Ne, hvala.«",
      en: "Marko has the fish, salad, soup and bread. \"Here you are! Enjoy your meal!\" — \"Thanks!\" Marko: \"Would you like anything else?\" — \"No, thanks.\"",
    },
    {
      hr: "Tom je dobar gost. »Račun, molim!« Marko: »Izvolite. Doviđenja!« Tom je sretan i govori hrvatski.",
      en: "Tom is a good guest. \"The bill, please!\" Marko: \"Here you are. Goodbye!\" Tom is happy and speaks Croatian.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što želi Ana? (What does Ana want?)",
      options: ["juhu i kruh", "ribu i salatu", "pivo"],
      correctIndex: 0,
      explanation: "»Želim juhu i kruh, molim.« — Ana orders soup and bread.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Je li Tom gladan? (Is Tom hungry?)",
      options: ["Da, jako je gladan.", "Ne, nije gladan.", "Tom je žedan, ne gladan."],
      correctIndex: 0,
      explanation: "»Tom je jako gladan.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom pije? (What does Tom drink?)",
      options: ["vodu", "pivo", "kavu"],
      correctIndex: 0,
      explanation: "»Ne, hvala. Ja pijem vodu.« — Tom drinks water, not beer.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Tko je konobar? (Who is the waiter?)",
      options: ["Marko", "Tom", "Ana"],
      correctIndex: 0,
      explanation: "»Marko je konobar.«",
    },
  ],
};
