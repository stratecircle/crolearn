import type { Story } from "@/types/content";

/**
 * A2 U12 story — «Tomov prvi posao» (spec: curriculum/A2/unit-12.md).
 * Unit-12 language: both INS jobs woven throughout, kao + NOM, interview
 * Vi-register, perfekt experience, futur promises. No VOC (U14), no clitic
 * pronouns (U15 — spec's "Piše ga računalom" rephrased with the full noun).
 * Cast: Tom, Ana, Marko + šefica. 5 glossed words. ~185 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u12story: Story = {
  id: "a2u12s",
  unitId: "a2u12",
  title: "Tomov prvi posao",
  titleEn: "Tom's first job",
  glossary: [
    { word: "škola stranih jezika", gloss: "language school (lit. school of foreign languages)" },
    { word: "nervozan", gloss: "nervous" },
    { word: "uspjeh", gloss: "success" },
    { word: "čestita", gloss: "congratulates" },
    { word: "šlag", gloss: "whipped cream" },
  ],
  paragraphs: [
    {
      hr: "Tom želi raditi u Zagrebu. Škola stranih jezika ima posao: škola treba učitelja engleskog! Tom govori: »Ovo je velika prilika. Želim se zaposliti!«",
      en: "Tom wants to work in Zagreb. A language school has a job opening: the school needs an English teacher! Tom says: \"This is a big opportunity. I want to get hired!\"",
    },
    {
      hr: "Ana pomaže Tomu — zajedno pišu životopis računalom. Životopis je dobar: Tom je radio kao učitelj engleskog u Kanadi dvije godine.",
      en: "Ana helps Tom — together they write the CV on the computer. The CV is good: Tom worked as an English teacher in Canada for two years.",
    },
    {
      hr: "U ponedjeljak Tom putuje tramvajem na razgovor za posao. Nervozan je! Kod šefice: »Dobar dan! Imate li iskustvo?« — »Imam. Radio sam kao učitelj engleskog u Kanadi«, govori Tom šefici. »Kada možete početi?« — »Mogu početi odmah!«",
      en: "On Monday Tom travels by tram to the job interview. He's nervous! At the boss's office: \"Good day! Do you have experience?\" — \"I do. I worked as an English teacher in Canada,\" Tom tells the boss. \"When can you start?\" — \"I can start right away!\"",
    },
    {
      hr: "Šefica govori: »Hvala! Javit ću se.« Tom čeka jedan dan, dva dana… Onda se šefica javila: »Imate posao! Počinjete u ponedjeljak.«",
      en: "The boss says: \"Thank you! I'll be in touch.\" Tom waits one day, two days… Then the boss got in touch: \"You have the job! You start on Monday.\"",
    },
    {
      hr: "To je velik uspjeh! Tom i Marko idu u kafić. Marko čestita Tomu i kupuje kavu sa šlagom. Tom je sretan: u ponedjeljak počinje raditi — i putovat će tramvajem!",
      en: "That's a big success! Tom and Marko go to a café. Marko congratulates Tom and buys a coffee with whipped cream. Tom is happy: on Monday he starts working — and he'll travel by tram!",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Čime Tom putuje na razgovor? (čime = by what — How does Tom travel to the interview?)",
      options: ["tramvajem", "autom", "biciklom"],
      correctIndex: 0,
      explanation: "»Tom putuje tramvajem na razgovor za posao.« — bare INS.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "S kim Tom razgovara? (s kim = with whom — Who does Tom talk with?)",
      options: ["sa šeficom", "s Markom", "s kolegom"],
      correctIndex: 0,
      explanation: "The interview is with the šefica — sa šeficom (s → sa before š).",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što je Tom radio u Kanadi? (What did Tom do in Canada?)",
      options: ["radio je kao učitelj engleskog", "radio je kao konobar", "studirao je medicinu"],
      correctIndex: 0,
      explanation: "»Radio sam kao učitelj engleskog u Kanadi.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Tko čestita Tomu? (Who congratulates Tom?)",
      options: ["Marko", "Ana", "šefica"],
      correctIndex: 0,
      explanation: "»Marko čestita Tomu i kupuje kavu sa šlagom.« — Tomu = DAT.",
    },
  ],
};
