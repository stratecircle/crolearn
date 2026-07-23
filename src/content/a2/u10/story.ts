import type { Story } from "@/types/content";

/**
 * A2 U10 story — «Novi stan» (spec: curriculum/A2/unit-10.md).
 * Unit-10 language: DAT receivers, sviđa mi se, rooms/furniture, renting;
 * present + perfekt + future I; NOM/ACC/LOC/GEN/DAT sg. No VOC (U14), no
 * clitic pronouns beyond the mi/ti chunks (U15). Cast: Tom, Ana, baka Marija.
 * 5 glossed words (nosi added per the spec correction). ~175 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u10story: Story = {
  id: "a2u10s",
  unitId: "a2u10",
  title: "Novi stan",
  titleEn: "The new flat",
  glossary: [
    { word: "kutija", gloss: "box" },
    { word: "kauč", gloss: "sofa" },
    { word: "poruka", gloss: "message" },
    { word: "težak", gloss: "heavy (teške = heavy, pl.)" },
    { word: "nosi", gloss: "carries" },
  ],
  paragraphs: [
    {
      hr: "Ana ima novi stan blizu fakulteta! Stan je na drugom katu, a zgrada ima dizalo. Stanarina nije mala, ali Ani se sviđa stan — velik je i ima balkon.",
      en: "Ana has a new flat near the faculty! The flat is on the second floor, and the building has a lift. The rent isn't small, but Ana likes the flat — it's big and it has a balcony.",
    },
    {
      hr: "Tom pomaže Ani. »Pomažem Ani — sutra će se preseliti u novi stan«, govori Tom susjedi. Danas Tom nosi kutije. Kutije su teške!",
      en: "Tom is helping Ana. \"I'm helping Ana — tomorrow she'll move into the new flat,\" Tom tells the neighbour. Today Tom is carrying boxes. The boxes are heavy!",
    },
    {
      hr: "Sutra je novi dan — i novi stan! Ana je pokazala Tomu svaku sobu: kuhinju, kupaonicu, spavaću sobu i dnevni boravak. »Sviđa mi se dnevni boravak, ali kuhinja je mala«, govori Tom. Gdje je ormar? Tom govori: »Ormar? U hodnik!« Ana govori: »Ne! U spavaću sobu!« Na kraju je ormar u spavaćoj sobi, a kauč je u dnevnom boravku.",
      en: "Tomorrow is a new day — and a new flat! Ana showed Tom every room: the kitchen, the bathroom, the bedroom and the living room. \"I like the living room, but the kitchen is small,\" says Tom. Where does the wardrobe go? Tom says: \"The wardrobe? Into the hallway!\" Ana says: \"No! Into the bedroom!\" In the end the wardrobe is in the bedroom, and the sofa is in the living room.",
    },
    {
      hr: "Baka Marija je poslala Ani velik poklon za novi stan. Ana je poslala baki poruku: »Hvala! Poklon je krasan!« Baka je sretna.",
      en: "Grandma Marija sent Ana a big present for the new flat. Ana sent grandma a message: \"Thank you! The present is wonderful!\" Grandma is happy.",
    },
    {
      hr: "Navečer Tom i Ana piju kavu na balkonu. »Sviđa mi se tvoj novi stan«, govori Tom. Ana je sretna: novi stan, dobar prijatelj i kava na balkonu.",
      en: "In the evening Tom and Ana drink coffee on the balcony. \"I like your new flat,\" says Tom. Ana is happy: a new flat, a good friend and coffee on the balcony.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Komu Tom pomaže? (Who is Tom helping?)",
      options: ["Ani", "baki Mariji", "susjedi"],
      correctIndex: 0,
      explanation: "»Tom pomaže Ani.« — Ani is the dative receiver of the help.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što Tom nosi? (What is Tom carrying?)",
      options: ["kutije", "ormar", "kauč"],
      correctIndex: 0,
      explanation: "»Danas Tom nosi kutije. Kutije su teške!«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Koja soba se Tomu sviđa? (Which room does Tom like?)",
      options: ["dnevni boravak", "kuhinja", "kupaonica"],
      correctIndex: 0,
      explanation: "»Sviđa mi se dnevni boravak, ali kuhinja je mala.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što je baka Marija poslala Ani? (What did grandma Marija send Ana?)",
      options: ["velik poklon", "pismo", "ključ"],
      correctIndex: 0,
      explanation: "»Baka Marija je poslala Ani velik poklon za novi stan.«",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Gdje je ormar na kraju? (Where is the wardrobe in the end?)",
      options: ["u spavaćoj sobi", "u hodniku", "na balkonu"],
      correctIndex: 0,
      explanation: "»Na kraju je ormar u spavaćoj sobi« — Ana won the argument.",
    },
  ],
};
