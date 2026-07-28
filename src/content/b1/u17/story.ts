import type { Story } from "@/types/content";

/**
 * B1 U17 story — «Vijest dana» (~320 words)
 * Spec: curriculum/B1/unit-17.md.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The whole point of the story is the aspect spine: the storm and the radio
 * hum along imperfectively while three perfective events land on top of them.
 * »dok« appears 4×. Per the spec, the clitic subtlety of »ju« before »je« is
 * avoided — the broadcast sentence is «…a televizija je vijest prenijela
 * navečer.» Glossary is capped at 5 words.
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
      hr: "Bio je običan utorak u Splitu. Baka Marija sjedila je u kuhinji i slušala radio, kao i svaki dan poslije ručka. Voditelj je govorio o vremenu, a ona je pila kavu i gledala kroz prozor. Vani je bilo sivo. Dok je baka slušala radio, vani je počela oluja.",
      en: "It was an ordinary Tuesday in Split. Grandma Marija was sitting in the kitchen listening to the radio, the way she did every day after lunch. The presenter was talking about the weather, and she was drinking coffee and looking out the window. Outside it was grey. While grandma was listening to the radio, a storm started outside.",
    },
    {
      hr: "U isto vrijeme Marko je radio u konobi na trgu. Gosti su jeli, konobari su nosili tanjure, a vjetar je puhao sve jače. Odjednom je vjetar dignuo stolice ispred konobe. Marko je izašao van, a onda je palo veliko drvo. Palo je točno na trg, dva metra od vrata.",
      en: "At the same time Marko was working in the tavern on the square. Guests were eating, waiters were carrying plates, and the wind was blowing harder and harder. Suddenly the wind lifted the chairs in front of the tavern. Marko went outside, and then a big tree fell. It fell right onto the square, two metres from the door.",
    },
    {
      hr: "Nitko se nije ozlijedio. Marko je odmah nazvao baku. »Jesi li dobro?« pitao je. »Dobro sam«, rekla je baka. »Radio je upravo javio da je pao vjetar od sto kilometara na sat.« Marko je uzeo mobitel i napravio nekoliko fotografija. Zatim ih je poslao Tomu.",
      en: "Nobody was hurt. Marko immediately called grandma. \"Are you all right?\" he asked. \"I'm fine,\" said grandma. \"The radio just reported that a hundred-kilometre-an-hour wind hit.\" Marko took his phone and took a few photographs. Then he sent them to Tom.",
    },
    {
      hr: "Tom je te fotografije stavio na društvene mreže. Za pola sata jedan splitski portal objavio je prvu vijest, a onda su i drugi portali objavljivali nove fotografije cijelo popodne. Novinarka je nazvala Marka i napravila kratak intervju. »Što se točno dogodilo?« pitala je. »Radio sam, čuo sam vjetar, izašao sam — i drvo je palo«, odgovorio je Marko.",
      en: "Tom put those photographs on social media. Within half an hour one Split news site published the first story, and then other sites were publishing new photographs all afternoon. A journalist called Marko and did a short interview. \"What exactly happened?\" she asked. \"I was working, I heard the wind, I went out — and the tree fell,\" Marko answered.",
    },
    {
      hr: "Navečer je Ana gledala vijesti u dnevnoj sobi. Dok je gledala, čula je poznato ime. Na ekranu je bila konoba, drvo na trgu i njezin brat. Portal je vijest objavio u tri, a televizija je vijest prenijela navečer. »Napokon je i Marko na televiziji«, nasmijala se Ana. Baka Marija još je slušala radio i nije ništa rekla. Ona je tu vijest znala već pet sati.",
      en: "In the evening Ana was watching the news in the living room. While she was watching, she heard a familiar name. On the screen were the tavern, the tree on the square, and her brother. The news site had published the story at three, and the TV broadcast the story in the evening. \"Finally Marko's on television too,\" Ana laughed. Grandma Marija was still listening to the radio and said nothing. She had known that piece of news for five hours already.",
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
        "Radila je u konobi.",
        "Spavala je.",
      ],
      correctIndex: 0,
      explanation: "»Dok je baka slušala radio, vani je počela oluja.« — the imperfective slušala is the background; počela is the event.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je vjetar napravio ispred konobe? (What did the wind do in front of the tavern?)",
      options: [
        "Dignuo je stolice.",
        "Otvorio je vrata.",
        "Slomio je prozor.",
        "Ugasio je svjetlo.",
      ],
      correctIndex: 0,
      explanation: "»Odjednom je vjetar dignuo stolice ispred konobe.« — odjednom pulls the perfective dignuti.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Tko je fotografije stavio na društvene mreže? (Who put the photos on social media?)",
      options: ["Tom", "Marko", "Ana", "Baka Marija"],
      correctIndex: 0,
      explanation: "Marko took them and sent them to Tom: »Tom je te fotografije stavio na društvene mreže.«",
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
      prompt: "Zašto baka nije ništa rekla? (Why did grandma say nothing?)",
      options: [
        "Jer je vijest već znala pet sati.",
        "Jer nije gledala televiziju.",
        "Jer je spavala.",
        "Jer se ljutila na Marka.",
      ],
      correctIndex: 0,
      explanation: "»Ona je tu vijest znala već pet sati.« — the radio had told her long before the TV did.",
    },
  ],
};
