import type { Story } from "@/types/content";

/**
 * A1 U2 story — «Odakle je Tom?» (spec: curriculum/A1/unit-2.md).
 * Unit-2 language only: biti (± nisam, jesi li), NOM, flagged iz-chunks,
 * govoriti, numbers 1–10. ≤5 glossed words. ~115 words.
 */
export const a1u2story: Story = {
  id: "a1u2s",
  unitId: "a1u2",
  title: "Odakle je Tom?",
  titleEn: "Where is Tom from?",
  glossary: [
    { word: "turist", gloss: "tourist" },
    { word: "daleko", gloss: "far (away)" },
    { word: "sada", gloss: "now" },
    { word: "polako", gloss: "slowly" },
  ],
  paragraphs: [
    {
      hr: "Jutro je. Tom i Ana su tu i kava je tu. »Dobro jutro, Tom! Kako si?« — »Odlično, hvala! A ti?« — »Dobro, hvala.«",
      en: "It's morning. Tom and Ana are here, and the coffee is here. \"Good morning, Tom! How are you?\" — \"Excellent, thanks! And you?\" — \"Good, thanks.\"",
    },
    {
      hr: "»Tom, odakle si?« — »Ja sam iz Kanade. A ti?« — »Ja sam Hrvatica, iz Zagreba. Je li Kanada daleko?« — »Da, jako daleko!«",
      en: "\"Tom, where are you from?\" — \"I'm from Canada. And you?\" — \"I'm a Croatian, from Zagreb. Is Canada far?\" — \"Yes, very far!\"",
    },
    {
      hr: "»Jesi li ti turist, Tom?« — »Ne, nisam turist. Student sam i sada govorim malo hrvatski.« Ana govori i govori… Tom: »Molim, polako! Ne razumijem.«",
      en: "\"Are you a tourist, Tom?\" — \"No, I'm not a tourist. I'm a student, and now I speak a little Croatian.\" Ana talks and talks… Tom: \"Slowly, please! I don't understand.\"",
    },
    {
      hr: "Marko je tu. »Izvolite — kava je tu!« Ana: »Marko, jesi li ti iz Zagreba?« — »Nisam!« Marko nije iz Zagreba — on je iz Splita.",
      en: "Marko is here. \"Here you go — the coffee is here!\" Ana: \"Marko, are you from Zagreb?\" — \"I'm not!\" Marko is not from Zagreb — he is from Split.",
    },
    {
      hr: "Ana: »Tom — jedan, dva, tri… ti sada!« Tom govori polako: »Jedan, dva, tri, četiri, pet, šest, sedam, osam, devet… i deset!« — »Odlično, Tom!« Tom je sretan.",
      en: "Ana: \"Tom — one, two, three… you now!\" Tom speaks slowly: \"One, two, three, four, five, six, seven, eight, nine… and ten!\" — \"Excellent, Tom!\" Tom is happy.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Odakle je Tom? (Where is Tom from?)",
      options: ["Iz Kanade.", "Iz Splita.", "Iz Zagreba."],
      correctIndex: 0,
      explanation: "»Ja sam iz Kanade.« — Tom is from Canada.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Je li Tom turist? (Is Tom a tourist?)",
      options: ["Ne — student je.", "Da, turist je.", "Ne — konobar je."],
      correctIndex: 0,
      explanation: "»Ne, nisam turist. Student sam.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Odakle je Marko? (Where is Marko from?)",
      options: ["Iz Splita.", "Iz Zagreba.", "Iz Kanade."],
      correctIndex: 0,
      explanation: "Marko nije iz Zagreba — on je iz Splita.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što Tom govori? (What does Tom speak?)",
      options: ["malo hrvatski", "njemački", "francuski"],
      correctIndex: 0,
      explanation: "»Sada govorim malo hrvatski.« — and he counts to ten to prove it!",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kako je Tom sada? (How is Tom now?)",
      options: ["sretan", "umoran", "loš"],
      correctIndex: 0,
      explanation: "»Tom je sretan.« — he counted to ten!",
    },
  ],
};
