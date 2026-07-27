import type { Story } from "@/types/content";

/**
 * A2 U15 story — «Baka Marija i mobitel» (spec: curriculum/A2/unit-15.md).
 * U14 callback (the birthday gift) → clitics in honest positions throughout:
 * ACC (ga/je/me/te), DAT (mi/ti/joj), the se+je drop, imperative + clitic.
 * Glossary per 2026-07-23 correction: punjač, ekran, uključiti/uključujem,
 * zvoni, gasiti (5). šaljem avoided — poslati everywhere.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u15story: Story = {
  id: "a2u15s",
  unitId: "a2u15",
  title: "Baka Marija i mobitel",
  titleEn: "Grandma Marija and the mobile phone",
  glossary: [
    { word: "punjač", gloss: "charger" },
    { word: "ekran", gloss: "screen" },
    { word: "uključujem", gloss: "(I) switch on — from uključiti" },
    { word: "zvoni", gloss: "(it) rings — from zvoniti" },
    { word: "gasiti", gloss: "to switch off" },
  ],
  paragraphs: [
    {
      hr: "Za rođendan je Tom baki dao poklon: mobitel! »Tom, što ću s mobitelom?« pita baka. »Bako, mobitel je super!« govori Tom. »Nazvat ćeš nas svaki dan!«",
      en: "For her birthday, Tom gave grandma a present: a mobile phone! \"Tom, what will I do with a mobile phone?\" grandma asks. \"Grandma, the phone is great!\" says Tom. \"You'll call us every day!\"",
    },
    {
      hr: "Tom ju uči: »Bako, ovo je ekran. Kada mobitel zvoni, javi se: Halo!« Baka pita: »A kako ga uključujem?« »Prvo stavi punjač! I nemoj ga gasiti — nikad!«",
      en: "Tom teaches her: \"Grandma, this is the screen. When the phone rings, answer: Hello!\" Grandma asks: \"And how do I switch it on?\" \"First put the charger in! And don't switch it off — ever!\"",
    },
    {
      hr: "Poslije dva dana baka zove Anu. »Ano, čuješ li me?« »Čujem te, bako!« govori Ana. »Imam dobru vijest: radim tortu — poslat ću ti sliku!« Baka joj je poslala sliku torte. Ana je vesela: »Predivna je! Sviđa mi se!«",
      en: "Two days later grandma calls Ana. \"Ana, can you hear me?\" \"I hear you, grandma!\" says Ana. \"I have good news: I'm making a cake — I'll send you a picture!\" Grandma sent her a picture of the cake. Ana is delighted: \"It's gorgeous! I love it!\"",
    },
    {
      hr: "Onda baka i Marko imaju video-poziv. »Marko, vidim te! Ti si u Splitu, a ja te vidim!« Marko govori: »I ja tebe vidim, bako!« Baka je sretna: »Mobitel je predivan!«",
      en: "Then grandma and Marko have a video call. \"Marko, I can see you! You're in Split, and I can see you!\" Marko says: \"And I can see YOU, grandma!\" Grandma is happy: \"The phone is wonderful!\"",
    },
    {
      hr: "Sada baka zove Toma, Anu i Marka svaki dan. Zove ih ujutro, zove ih navečer. Tom je sretan — ali baka ga zove i u sedam ujutro! »Bako, molim te… spavam!« »Dobro jutro, Tom! Ustaj — dan je predivan!«",
      en: "Now grandma calls Tom, Ana and Marko every day. She calls them in the morning, she calls them in the evening. Tom is happy — but grandma calls him at seven in the morning too! \"Grandma, please… I'm sleeping!\" \"Good morning, Tom! Get up — it's a wonderful day!\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što je Tom dao baki za rođendan? (What did Tom give grandma for her birthday?)",
      options: ["mobitel", "tortu", "punjač"],
      correctIndex: 0,
      explanation: "»Za rođendan je Tom baki dao poklon: mobitel!«",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Tko uči baku? (Who is teaching grandma?)",
      options: ["Tom", "Ana", "Marko"],
      correctIndex: 0,
      explanation: "»Tom ju uči.« — ju = her (the clash-avoiding variant of je from the L1 notes).",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što je baka poslala Ani? (What did grandma send Ana?)",
      options: ["sliku torte", "poruku", "pozivnicu"],
      correctIndex: 0,
      explanation: "»Baka joj je poslala sliku torte.« — joj = to her.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "S kim baka ima video-poziv? (Who does grandma video-call?)",
      options: ["s Markom", "s Anom", "s Tomom"],
      correctIndex: 0,
      explanation: "»baka i Marko imaju video-poziv« — s Markom (INS, U12).",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kada baka zove Toma? (When does grandma call Tom?)",
      options: ["i u sedam ujutro", "samo navečer", "samo u nedjelju"],
      correctIndex: 0,
      explanation: "»baka ga zove i u sedam ujutro!« — ga = him.",
    },
  ],
};
