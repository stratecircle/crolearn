import type { Story } from "@/types/content";

/**
 * A2 U13 story — «Izlet na Plitvička jezera» (spec: curriculum/A2/unit-13.md).
 * Unit-13 language: GEN plural + counting, comparatives/superlatives with
 * od/nego, više + GEN — plus perfekt narration (U8) and a future-I close (U9).
 * Cast: baka Marija (opening), Tom, Ana, Marko. ~200 words.
 * Glossary (per 2026-07-23 spec correction): slap, turist, mir, ovdje —
 * izlet was taught in U8 L3, medvjed is now L2 vocab.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u13story: Story = {
  id: "a2u13s",
  unitId: "a2u13",
  title: "Izlet na Plitvička jezera",
  titleEn: "A trip to the Plitvice Lakes",
  glossary: [
    { word: "slap", gloss: "waterfall" },
    { word: "turist", gloss: "tourist" },
    { word: "mir", gloss: "peace (and quiet)" },
    { word: "ovdje", gloss: "here" },
  ],
  paragraphs: [
    {
      hr: "Baka Marija govori: »Plitvička jezera su najljepše mjesto u Hrvatskoj. Tamo je priroda predivna — i tamo je mir.« Tom, Ana i Marko planiraju izlet. »Idemo na Plitvice!« govori Ana.",
      en: "Grandma Marija says: \"The Plitvice Lakes are the most beautiful place in Croatia. Nature there is wonderful — and there is peace there.\" Tom, Ana and Marko plan a trip. \"Let's go to Plitvice!\" says Ana.",
    },
    {
      hr: "U subotu putuju autobusom. Put je dug, ali pogled je predivan: planine, šume i polja. »Gledam krave i konje!« govori Tom. »Na selu ima više životinja nego u gradu«, govori Marko.",
      en: "On Saturday they travel by bus. The journey is long, but the view is wonderful: mountains, forests and fields. \"I'm looking at cows and horses!\" says Tom. \"In the countryside there are more animals than in the city,\" says Marko.",
    },
    {
      hr: "Tamo ima šesnaest jezera i puno slapova. Voda je hladna i svježa. Tom pita: »Je li jezero dublje od mora?« »Nije, more je dublje«, govori Ana, »ali voda je ovdje hladnija!«",
      en: "There are sixteen lakes and a lot of waterfalls there. The water is cold and fresh. Tom asks: \"Is the lake deeper than the sea?\" \"No, the sea is deeper,\" says Ana, \"but the water here is colder!\"",
    },
    {
      hr: "Tom gleda šumu i pita: »Ima li ovdje medvjeda?« »Ovdje ima više turista nego životinja!« govori Ana. Marko govori: »Medvjedi žive na planini, a mi smo blizu slapova.«",
      en: "Tom looks at the forest and asks: \"Are there bears here?\" \"There are more tourists here than animals!\" says Ana. Marko says: \"The bears live on the mountain, and we are near the waterfalls.\"",
    },
    {
      hr: "Poslije izleta su umorni, ali sretni. »Ovo je bio najljepši izlet«, govori Tom. »Plitvice su ljepše nego grad — ovdje je mir.« »A ljeti ćemo ići na more!« govori Marko. »More je toplije od jezera!«",
      en: "After the trip they are tired but happy. \"This was the most beautiful trip,\" says Tom. \"Plitvice is prettier than the city — there's peace here.\" \"And in summer we'll go to the seaside!\" says Marko. \"The sea is warmer than the lake!\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Kamo idu Tom, Ana i Marko? (Where are they going?)",
      options: ["na Plitvička jezera", "na more", "u planine"],
      correctIndex: 0,
      explanation: "»Idemo na Plitvice!« — the trip is to the Plitvice Lakes.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je dublje — jezero ili more? (What is deeper — the lake or the sea?)",
      options: ["more", "jezero", "rijeka"],
      correctIndex: 0,
      explanation: "»More je dublje… ali voda ovdje je hladnija!«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Koliko jezera ima tamo? (How many lakes are there?)",
      options: ["šesnaest", "šest", "sedamnaest"],
      correctIndex: 0,
      explanation: "»Tamo ima šesnaest jezera i puno slapova.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Čega ima više — turista ili životinja? (What are there more of — tourists or animals?)",
      options: ["turista", "životinja", "medvjeda"],
      correctIndex: 0,
      explanation: "»Ovdje ima više turista nego životinja!« — više + GEN pl.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kakva je voda u jezeru? (What is the water in the lake like?)",
      options: ["hladna i svježa", "topla i duboka", "toplija od mora"],
      correctIndex: 0,
      explanation: "»Voda je hladna i svježa.«",
    },
  ],
};
