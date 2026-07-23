import type { Story } from "@/types/content";

/**
 * A2 U11 story — «Tom je bolestan» (spec: curriculum/A2/unit-11.md).
 * Unit-11 language: boli me, mi-chunks, modals, doctor-visit path; present +
 * perfekt + future-free (habits); NOM/ACC/LOC/GEN/DAT sg + taught chunks.
 * No clitic mu/joj (U15) — full nouns (Tomu je loše). Cast: Tom, Ana,
 * baka Marija + unnamed liječnica. 4 glossed words. ~175 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a2u11story: Story = {
  id: "a2u11s",
  unitId: "a2u11",
  title: "Tom je bolestan",
  titleEn: "Tom is ill",
  glossary: [
    { word: "odmah", gloss: "right away" },
    { word: "kamilica", gloss: "chamomile" },
    { word: "med", gloss: "honey" },
    { word: "šalica", gloss: "cup" },
  ],
  paragraphs: [
    {
      hr: "Jutro je. Tom se budi i odmah govori: »Boli me glava, boli me grlo — loše mi je!« Ana govori: »Bolestan si. Idemo k liječnici!«",
      en: "It's morning. Tom wakes up and says right away: \"My head hurts, my throat hurts — I feel bad!\" Ana says: \"You're ill. We're going to the doctor!\"",
    },
    {
      hr: "Kod liječnice: čekaonica je puna. Onda je pregled. Liječnica govori: »Imate prehladu i temperaturu. Morate ležati i piti puno vode. Ne smijete piti kavu!« Tom nije sretan: on voli kavu!",
      en: "At the doctor's: the waiting room is full. Then comes the examination. The doctor says: \"You have a cold and a fever. You must lie down and drink a lot of water. You mustn't drink coffee!\" Tom is not happy: he loves coffee!",
    },
    {
      hr: "Liječnica daje Tomu recept. Ana ide u ljekarnu i kupuje lijek. Tom mora uzeti tabletu dva puta na dan.",
      en: "The doctor gives Tom a prescription. Ana goes to the pharmacy and buys the medicine. Tom has to take a pill twice a day.",
    },
    {
      hr: "Navečer baka Marija ima svoj recept za zdravlje: »Moraš piti čaj od kamilice i jesti med. Moraš ležati i ne smiješ piti kavu — treba ti san!« Tom pije čaj iz velike šalice.",
      en: "In the evening grandma Marija has her own prescription for health: \"You must drink chamomile tea and eat honey. You must lie down and you mustn't drink coffee — you need sleep!\" Tom drinks tea from a big cup.",
    },
    {
      hr: "Tom leži tri dana, pije čaj i dovoljno spava. Sada je zdrav! »Dobro mi je!« govori Tom. Ana je sretna. A Tom? Tom pije jednu malu kavu.",
      en: "Tom lies down for three days, drinks tea and sleeps enough. Now he's healthy! \"I feel good!\" says Tom. Ana is happy. And Tom? Tom drinks one small coffee.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što Toma boli? (What hurts Tom?)",
      options: ["glava i grlo", "trbuh i leđa", "zub"],
      correctIndex: 0,
      explanation: "»Boli me glava, boli me grlo — loše mi je!«",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što Tom ima? (What does Tom have?)",
      options: ["prehladu i temperaturu", "kašalj i glavobolju", "zdravlje"],
      correctIndex: 0,
      explanation: "»Imate prehladu i temperaturu.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom ne smije piti? (What mustn't Tom drink?)",
      options: ["kavu", "čaj", "vodu"],
      correctIndex: 0,
      explanation: "»Ne smijete piti kavu!« — a tragedy for Tom.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Tko kupuje lijek? (Who buys the medicine?)",
      options: ["Ana", "Tom", "baka Marija"],
      correctIndex: 0,
      explanation: "»Ana ide u ljekarnu i kupuje lijek.«",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Što baka Marija savjetuje? (savjetuje = advises — What does grandma advise?)",
      options: ["čaj od kamilice i med", "puno kave", "novi lijek iz ljekarne"],
      correctIndex: 0,
      explanation: "»Moraš piti čaj od kamilice i jesti med.«",
    },
  ],
};
