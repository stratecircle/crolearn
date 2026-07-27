import type { Story } from "@/types/content";

/**
 * A2 U14 story — «Iznenađenje za baku Mariju» (spec: curriculum/A2/unit-14.md).
 * Unit-14 language: imperatives drive the prep, VOC + wish formulas crown the
 * finale, date in GEN, nemoj + infinitive. Perfekt & future recycled.
 * Glossary (per 2026-07-23 spec correction): tajna, ništa, svi, vikati/viču —
 * balon & ukras are now L2 vocab; reći → govoriti.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u14story: Story = {
  id: "a2u14s",
  unitId: "a2u14",
  title: "Iznenađenje za baku Mariju",
  titleEn: "A surprise for Grandma Marija",
  glossary: [
    { word: "tajna", gloss: "secret" },
    { word: "ništa", gloss: "nothing" },
    { word: "svi", gloss: "everyone" },
    { word: "viču", gloss: "(they) shout — from vikati" },
  ],
  paragraphs: [
    {
      hr: "Baka Marija slavi rođendan — ima sedamdeset godina! Ana planira veliko iznenađenje: proslavu. »Proslava je tajna«, govori Ana. »Tom, nemoj ništa govoriti baki!«",
      en: "Grandma Marija is celebrating her birthday — she's turning seventy! Ana is planning a big surprise: a party. \"The party is a secret,\" says Ana. \"Tom, don't tell grandma anything!\"",
    },
    {
      hr: "Marko radi tortu — bakin recept! Ana čita: »Dodaj tri jaja, šećer i brašno. Miješaj deset minuta. Stavi tortu u pećnicu — i nemoj otvoriti vrata!« Torta je velika i lijepa.",
      en: "Marko is making the cake — grandma's own recipe! Ana reads: \"Add three eggs, sugar and flour. Stir for ten minutes. Put the cake in the oven — and don't open the door!\" The cake is big and beautiful.",
    },
    {
      hr: "Tom piše pozivnice: »Draga Ana, dođi u subotu…« Ali koji je datum? Tom piše: »peti svibanj«. »Ne, Tom!« govori Ana. »Datum je petog svibnja! Piši: Proslava je petog svibnja u sedam sati.«",
      en: "Tom is writing the invitations: \"Dear Ana, come on Saturday…\" But what's the date? Tom writes: \"fifth May\". \"No, Tom!\" says Ana. \"The date is petog svibnja! Write: The party is on May 5th at seven o'clock.\"",
    },
    {
      hr: "U subotu su svi kod bake: Tom, Ana, Marko, susjedi i bakino društvo. Baloni i ukrasi su na vratima. Gosti čekaju… Baka dolazi na vrata. »IZNENAĐENJE!« viču svi.",
      en: "On Saturday everyone is at grandma's: Tom, Ana, Marko, the neighbours and grandma's friends. Balloons and decorations are on the door. The guests wait… Grandma comes to the door. \"SURPRISE!\" everyone shouts.",
    },
    {
      hr: "»Bako, sretan rođendan! Želimo ti puno sreće i zdravlja!« viču svi. Baka je vesela: »Hvala, društvo! Torta je predivna — to je moj recept!« Svi pjevaju i plešu. »Živjeli!«",
      en: "\"Grandma, happy birthday! We wish you lots of luck and health!\" everyone shouts. Grandma is delighted: \"Thank you, everyone! The cake is wonderful — that's my recipe!\" Everyone sings and dances. \"Cheers!\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Koliko godina ima baka Marija? (How old is grandma Marija?)",
      options: ["sedamdeset", "šezdeset", "sedamnaest"],
      correctIndex: 0,
      explanation: "»ima sedamdeset godina« — she's turning seventy.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Tko radi tortu? (Who is making the cake?)",
      options: ["Marko", "Ana", "Tom"],
      correctIndex: 0,
      explanation: "»Marko radi tortu — bakin recept!«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom piše? (What is Tom writing?)",
      options: ["pozivnice", "recept", "čestitku"],
      correctIndex: 0,
      explanation: "»Tom piše pozivnice.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Kada je proslava? (When is the party?)",
      options: ["petog svibnja", "peti svibanj", "petog prosinca"],
      correctIndex: 0,
      explanation: "»Proslava je petog svibnja u sedam sati.« — the date in GEN, Tom's hard lesson.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Što viču svi kada baka dolazi? (What does everyone shout when grandma arrives?)",
      options: ["Iznenađenje!", "Živjeli!", "Dođi!"],
      correctIndex: 0,
      explanation: "»IZNENAĐENJE!« viču svi.",
    },
  ],
};
