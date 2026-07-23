import type { Story } from "@/types/content";

/**
 * A1 U7 story — «Na tržnici» (spec: curriculum/A1/unit-7.md).
 * Unit-7 language only: genitive (quantities, nema, iz/od/do/blizu), the number
 * bracket, prices to 1000, colours + clothes, the shopping script. Present tense.
 * ≤5 glossed words, each of which appears; no unglossed new word. ~127 words.
 * Cast: Tom, baka Marija, Ana.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u7story: Story = {
  id: "a1u7s",
  unitId: "a1u7",
  title: "Na tržnici",
  titleEn: "At the market",
  glossary: [
    { word: "rajčica", gloss: "tomato" },
    { word: "svjež", gloss: "fresh" },
    { word: "skupo", gloss: "expensive (it's expensive)" },
    { word: "sitniš", gloss: "small change (coins)" },
    { word: "štand", gloss: "stall" },
  ],
  paragraphs: [
    {
      hr: "Baka Marija i Tom su na tržnici. Tržnica je blizu trga i tu je puno ljudi. Baka Marija kupuje puno povrća. »Molim kilogram rajčica i dvije boce vode.« Rajčice su svježe i jeftine. Kupuje i litru mlijeka. Mlijeko košta dva eura.",
      en: "Grandma Marija and Tom are at the market. The market is near the square and there are a lot of people here. Grandma Marija is buying a lot of vegetables. \"A kilo of tomatoes and two bottles of water, please.\" The tomatoes are fresh and cheap. She also buys a litre of milk. The milk costs two euros.",
    },
    {
      hr: "Tom traži kruh. Ali nema kruha! Baka Marija: »Pekarnica je blizu.« Na štandu je sir i povrće. Tom kupuje pola kilograma sira.",
      en: "Tom is looking for bread. But there's no bread! Grandma Marija: \"The bakery is near.\" At the stall there's cheese and vegetables. Tom buys half a kilo of cheese.",
    },
    {
      hr: "»Koliko košta sir?« Žena: »Pet eura.« Tom: »To je skupo!« Ali baka Marija ima sitniš — pet eura i pedeset centi. Tom želi platiti.",
      en: "\"How much is the cheese?\" The woman: \"Five euros.\" Tom: \"That's expensive!\" But grandma Marija has change — five euros and fifty cents. Tom wants to pay.",
    },
    {
      hr: "Blizu tržnice je trgovina. Tom traži plavu majicu. »Imate li plavu majicu?« »Da, izvolite.« Plava majica košta dvadeset eura. Tom kupuje majicu. Ana je tu. Ana traži crvene cipele. Cipele koštaju trideset eura. Ana: »Tom, ti dobro kupuješ!« Tom je sretan.",
      en: "Near the market there's a shop. Tom is looking for a blue t-shirt. \"Do you have a blue t-shirt?\" \"Yes, here you are.\" The blue t-shirt costs twenty euros. Tom buys the t-shirt. Ana is there. Ana is looking for red shoes. The shoes cost thirty euros. Ana: \"Tom, you shop well!\" Tom is happy.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što Tom kupuje? (What does Tom buy?)",
      options: ["cheese and a t-shirt", "bread and wine", "shoes and a jacket"],
      correctIndex: 0,
      explanation: "Tom buys pola kilograma sira (half a kilo of cheese) and a plava majica (blue t-shirt).",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Čega nema na tržnici? (What is there none of at the market?)",
      options: ["bread", "milk", "water"],
      correctIndex: 0,
      explanation: "»Ali nema kruha!« — there's no bread.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Koliko košta sir? (How much does the cheese cost?)",
      options: ["five euros", "twenty euros", "fifty cents"],
      correctIndex: 0,
      explanation: "Žena: »Pet eura.« — the cheese is five euros.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Kakva je majica? (What is the t-shirt like?)",
      options: ["blue", "black", "red"],
      correctIndex: 0,
      explanation: "Tom traži i kupuje plavu majicu — a blue t-shirt.",
    },
  ],
};
