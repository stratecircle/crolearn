import type { Story } from "@/types/content";

/**
 * A2 U16 story — «Priča bake Marije» (spec: curriculum/A2/unit-16.md).
 * Perfekt with contrastive aspect (imperfective decades, perfective
 * milestones) + future I; the cast's backstory clicks into place.
 * Adjective-LOC avoided per the 2026-07-27 spec correction; glossary =
 * unuk, mladić, tvornica, zauvijek, ples (5).
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u16story: Story = {
  id: "a2u16s",
  unitId: "a2u16",
  title: "Priča bake Marije",
  titleEn: "Grandma Marija's story",
  glossary: [
    { word: "unuk", gloss: "grandson" },
    { word: "mladić", gloss: "young man" },
    { word: "tvornica", gloss: "factory" },
    { word: "zauvijek", gloss: "forever" },
    { word: "ples", gloss: "dance (the event)" },
  ],
  paragraphs: [
    {
      hr: "Baka Marija i Tom piju kavu. »Bako, kako je počela tvoja priča?« pita Tom. »Moja priča je duga«, govori baka. »Rodila sam se u selu u Slavoniji. Selo je bilo malo, a obitelj velika: pet sestara i dva brata!«",
      en: "Grandma Marija and Tom are drinking coffee. \"Grandma, how did your story begin?\" Tom asks. \"My story is a long one,\" says grandma. \"I was born in a village in Slavonia. The village was small, and the family big: five sisters and two brothers!\"",
    },
    {
      hr: "»Djetinjstvo je bilo lijepo, ali smo puno radili. Odrasla sam, završila školu i počela raditi. Radila sam u tvornici trideset godina.«",
      en: "\"Childhood was lovely, but we worked a lot. I grew up, finished school and started working. I worked in a factory for thirty years.\"",
    },
    {
      hr: "»Muža sam upoznala na plesu. On je bio veseo mladić! Vjenčali smo se, preselili smo se u grad i imali smo djecu. Onda su djeca odrasla — i sada imam unuka!«",
      en: "\"I met my husband at a dance. He was a cheerful young man! We got married, we moved to the city and we had children. Then the children grew up — and now I have a grandson!\"",
    },
    {
      hr: "Baka gleda Toma: »To je moja priča. A ti, Tom? Što ćeš ti?« Tom se sjeća početka: »Prošle godine sam počeo učiti hrvatski. Sada ga učim svaki dan.«",
      en: "Grandma looks at Tom: \"That's my story. And you, Tom? What about you?\" Tom remembers the beginning: \"Last year I started learning Croatian. Now I study it every day.\"",
    },
    {
      hr: "»Moj plan je velik«, govori Tom. »Naučit ću hrvatski. Sljedeće godine preselit ću se u Hrvatsku — zauvijek! Ovdje je moj život.« Baka je sretna: »To je predivan kraj priče!« »Ne, bako«, govori Tom. »To je početak!«",
      en: "\"My plan is a big one,\" says Tom. \"I will learn Croatian. Next year I'll move to Croatia — forever! My life is here.\" Grandma is happy: \"That's a wonderful end to the story!\" \"No, grandma,\" says Tom. \"It's the beginning!\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Gdje se baka rodila? (Where was grandma born?)",
      options: ["u selu u Slavoniji", "u Zagrebu", "u Splitu"],
      correctIndex: 0,
      explanation: "»Rodila sam se u selu u Slavoniji.«",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Koliko dugo je baka radila u tvornici? (How long did grandma work in the factory?)",
      options: ["trideset godina", "trinaest godina", "tri godine"],
      correctIndex: 0,
      explanation: "»Radila sam u tvornici trideset godina.« — a wavy decade, imperfective.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Gdje je baka upoznala muža? (Where did grandma meet her husband?)",
      options: ["na plesu", "u tvornici", "u školi"],
      correctIndex: 0,
      explanation: "»Muža sam upoznala na plesu.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što Tom planira? (What is Tom planning?)",
      options: [
        "preselit će se u Hrvatsku zauvijek",
        "radit će u tvornici",
        "vratit će se u Kanadu",
      ],
      correctIndex: 0,
      explanation: "»Sljedeće godine preselit ću se u Hrvatsku — zauvijek!«",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Što Tom govori na kraju? (What does Tom say at the end?)",
      options: ["To je početak!", "To je kraj!", "To je tajna!"],
      correctIndex: 0,
      explanation: "»Ne, bako — to je početak!« — the A2 exit line.",
    },
  ],
};
