import type { Story } from "@/types/content";

/**
 * B1 U17 story — «Vijest dana» (~320 words)
 * Spec: curriculum/B1/unit-17.md.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The whole point of the story is the aspect spine: the radio and the evening
 * hum along imperfectively while the perfective events land on top of them.
 * »dok« frames both storm and reveal. Per the spec, the clitic subtlety of
 * »ju« before »je« is avoided — the broadcast sentence is «…a televizija je
 * vijest prenijela navečer.» Glossary capped at 5; level-compliance pass
 * 2026-07-28 replaced untaught vocab (konoba→restoran, sjediti/kroz/vani/
 * nitko/ozlijediti/ekran/pitati/čuti/izaći removed; dignuo→digao per L2;
 * cast fix: Marko is not Ana's brother).
 */
export const b1u17story: Story = {
  id: "b1u17s",
  unitId: "b1u17",
  title: "Vijest dana",
  titleEn: "The news of the day",
  glossary: [
    { word: "oluja", gloss: "storm" },
    { word: "vjetar", gloss: "wind" },
    { word: "drvo", gloss: "tree" },
    { word: "pasti / palo", gloss: "to fall / fell" },
    { word: "fotografija", gloss: "photograph" },
  ],
  paragraphs: [
    {
      hr: "Bio je utorak. Baka Marija je bila u kuhinji i slušala radio, kao i svaki dan poslije ručka. Voditelj je čitao vijesti, a baka je pila kavu. »U Splitu je vrijeme jako loše«, rekao je voditelj. Dok je baka slušala radio, u Splitu je počela oluja.",
      en: "It was Tuesday. Grandma Marija was in the kitchen listening to the radio, the way she is every day after lunch. The presenter was reading the news, and grandma was drinking her coffee. \"In Split the weather is very bad,\" said the presenter. While grandma was listening to the radio, a storm began in Split.",
    },
    {
      hr: "Marko je radio u restoranu na trgu. Gosti su jeli i pili. Odjednom se digao vjetar. Digao je stolice i stolove! Marko je otišao na trg — a onda je palo veliko, staro drvo. Palo je na trg, blizu vrata restorana.",
      en: "Marko was working in the restaurant on the square. Guests were eating and drinking. Suddenly the wind rose and lifted the chairs and tables. Marko went out to the square — and then a big old tree fell. It fell onto the square, near the restaurant's door.",
    },
    {
      hr: "Ljudi su bili dobro — samo stolice nisu! Marko je odmah nazvao baku. »Bako, jesi li dobro?« — »Dobro sam«, rekla je baka. »Radio je već javio vijest. Radio je uvijek prvi!« Marko je uzeo mobitel i napravio nekoliko fotografija. Zatim ih je poslao Tomu.",
      en: "The people were fine — only the chairs weren't! Marko immediately called grandma. \"Grandma, are you all right?\" — \"I'm fine,\" said grandma. \"The radio already reported the story. The radio is always first!\" Marko took his phone and took a few photographs. Then he sent them to Tom.",
    },
    {
      hr: "Tom je fotografije stavio na društvene mreže. Za pola sata jedan portal je objavio prvu vijest, a onda su i drugi portali objavljivali nove fotografije cijelo popodne. Novinarka je nazvala Marka i napravila kratak intervju. »Što se dogodilo?« — »Radio sam u restoranu. Odjednom se digao vjetar — i drvo je palo«, rekao je Marko.",
      en: "Tom put the photographs on social media. Within half an hour one news site published the first story, and then other sites were publishing new photographs all afternoon. A journalist called Marko and did a short interview. \"What happened?\" — \"I was working in the restaurant. Suddenly the wind rose — and the tree fell,\" said Marko.",
    },
    {
      hr: "Navečer je Ana u Zagrebu gledala vijesti na televiziji. Dok je gledala emisiju, odjednom je na televiziji bio Markov restoran — i Marko! Portal je vijest objavio u tri, a televizija je vijest prenijela navečer. »Napokon je i Marko na televiziji«, rekla je Ana. A baka Marija? Ona je još slušala radio. Ona je vijest znala već pet sati — radio je bio prvi. Kao i uvijek.",
      en: "In the evening, Ana in Zagreb was watching the news on television. While she was watching the show, suddenly Marko's restaurant was on TV — and Marko! The news site had published the story at three, and the TV carried the story in the evening. \"Finally Marko's on television too,\" said Ana. And grandma Marija? She was still listening to the radio. She had known the news for five hours already — the radio was first. As always.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što je baka radila kad je počela oluja? (What was grandma doing when the storm started?)",
      options: [
        "Slušala je radio u kuhinji.",
        "Gledala je vijesti na televiziji.",
        "Radila je u restoranu.",
        "Spavala je.",
      ],
      correctIndex: 0,
      explanation: "»Dok je baka slušala radio, u Splitu je počela oluja.« — the imperfective slušala is the background; počela is the event.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je vjetar napravio na trgu? (What did the wind do on the square?)",
      options: [
        "Digao je stolice i stolove.",
        "Otvorio je vrata restorana.",
        "Uzeo je novine.",
        "Prenio je vijest.",
      ],
      correctIndex: 0,
      explanation: "»Odjednom je vjetar digao stolice i stolove.« — odjednom pulls the perfective, and the standard participle is digao.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Tko je fotografije stavio na društvene mreže? (Who put the photos on social media?)",
      options: ["Tom", "Marko", "Ana", "Baka Marija"],
      correctIndex: 0,
      explanation: "Marko took them and sent them to Tom: »Tom je fotografije stavio na društvene mreže.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Kada je televizija prenijela vijest? (When did the TV broadcast the story?)",
      options: ["Navečer", "U tri sata", "Ujutro", "Sljedeći dan"],
      correctIndex: 0,
      explanation: "»Portal je vijest objavio u tri, a televizija je vijest prenijela navečer.«",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Zašto je baka vijest znala prva? (Why did grandma know the news first?)",
      options: [
        "Jer je slušala radio — radio je javio vijest prvi.",
        "Jer je gledala televiziju.",
        "Jer je čitala portal.",
        "Jer je bila u Splitu na trgu.",
      ],
      correctIndex: 0,
      explanation: "»Radio je već javio vijest. Radio je uvijek prvi!« — she had known for five hours.",
    },
  ],
};
