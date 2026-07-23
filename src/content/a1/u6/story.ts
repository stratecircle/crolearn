import type { Story } from "@/types/content";

/**
 * A1 U6 story — «Tipičan dan» (spec: curriculum/A1/unit-6.md).
 * Unit-6 language only: reflexives + telling time + ACC plural + days & frequency,
 * over Units 1–5 vocab. ≤5 glossed words; ~106 words; present tense.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Note: names are left in the nominative in address (»Bok, Tom!«) — the vocative is
 * deferred to A2 U14, so no VOC form appears. No instrumental (»s Anom«) either —
 * replaced by »Ana i ja«, since INS arrives in A2 U12.
 */
export const a1u6story: Story = {
  id: "a1u6s",
  unitId: "a1u6",
  title: "Tipičan dan",
  titleEn: "A typical day",
  glossary: [
    { word: "rano ujutro", gloss: "early in the morning" },
    { word: "zauzeta", gloss: "busy (f)" },
    { word: "život", gloss: "life" },
  ],
  paragraphs: [
    {
      hr: "Zovem se Tom i živim u Zagrebu. Svaki dan se budim rano ujutro, u sedam sati. Prvo se tuširam, zatim se oblačim. Onda doručkujem.",
      en: "My name is Tom and I live in Zagreb. Every day I wake up early in the morning, at seven o'clock. First I shower, then I get dressed. Then I have breakfast.",
    },
    {
      hr: "U pola devet idem na kavu. Marko je konobar u kafiću. »Bok, Tom! Jedna kava?« — »Da, molim!« Marko je uvijek dobar.",
      en: "At 8:30 I go for a coffee. Marko is a waiter at the café. \"Hi, Tom! One coffee?\" — \"Yes, please!\" Marko is always nice.",
    },
    {
      hr: "Prijepodne učim hrvatski — učim svaki dan! Popodne se odmaram, a navečer Ana i ja gledamo serije. Volim filmove i serije.",
      en: "Before noon I study Croatian — I study every day! In the afternoon I rest, and in the evening Ana and I watch series. I like films and series.",
    },
    {
      hr: "Danas je subota. U subotu se odmaram i idem spavati kasno.",
      en: "Today is Saturday. On Saturday I rest and go to bed late.",
    },
    {
      hr: "Baka Marija živi na selu. Ona se budi u pet ujutro — jako rano! Život na selu počinje rano. Baka je uvijek zauzeta. Ja nikad ne ustajem u pet!",
      en: "Grandma Marija lives in a village. She wakes up at five in the morning — very early! Life in the village begins early. Grandma is always busy. I never get up at five!",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Kada se Tom budi? (When does Tom wake up?)",
      options: ["u sedam", "u pet", "u devet"],
      correctIndex: 0,
      explanation: "»Budim se rano ujutro, u sedam sati.« — Tom wakes up at seven.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Gdje je Marko? (Where is Marko?)",
      options: ["u kafiću", "u muzeju", "na poslu"],
      correctIndex: 0,
      explanation: "»Marko je konobar u kafiću.« — Marko is at the café.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom gleda navečer? (What does Tom watch in the evening?)",
      options: ["serije", "vijesti", "sport"],
      correctIndex: 0,
      explanation: "»Navečer Ana i ja gledamo serije.« — they watch series.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Koliko često Tom uči hrvatski? (How often does Tom study Croatian?)",
      options: ["svaki dan", "u subotu", "nikad"],
      correctIndex: 0,
      explanation: "»Učim hrvatski — učim svaki dan!« — every day.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kada se baka Marija budi? (When does grandma Marija wake up?)",
      options: ["u pet ujutro", "u sedam", "u pola devet"],
      correctIndex: 0,
      explanation: "»Ona se budi u pet ujutro — jako rano!« — at five in the morning.",
    },
  ],
};
