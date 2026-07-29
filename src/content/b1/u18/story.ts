import type { Story } from "@/types/content";

/**
 * B1 U18 story — «Tečaj u Zagrebu» (~350 words)
 * Spec: curriculum/B1/unit-18.md § Story.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The story is a **chain of advice**: every paragraph carries Conditional I in
 * a different function, so the comprehension questions can only be answered by
 * tracking WHO would do WHAT.
 *   P1 Tom     — želja      (htio bih …)          ← L1
 *   P2 Ana     — savjet     (na tvom mjestu bih …, trebalo bi …, mogao bi …) ← L4
 *   P3 Marko   — savjet     (ja bih učio …)       ← L4, warm disagreement
 *   P4 baka    — the beat   (Da sam ja imala tu priliku…)
 *   P5 Tom     — molba + real condition (bi li mi objasnila…? · ako položim, doći ću)
 *
 * Authoring guards honoured verbatim from the spec:
 *  • `koji` appears EXACTLY ONCE, in the fixed nominative «…ali ne znam koji.»
 *    (undeclined — U19 is the unit that declines it). Verified by grep.
 *  • Baka's «Da sam ja imala tu priliku…» is her ONE counterfactual-past line.
 *    It is left unfinished on purpose (»Baka nije završila rečenicu.«), is
 *    rendered as a set phrase in the English, and is NEVER echoed in the
 *    comprehension questions or drilled anywhere — it is Conditional-II-adjacent
 *    and belongs to B2.
 *  • No `se`-passive anywhere. «trebalo bi se prijaviti» is the reflexive verb
 *    prijaviti se under an impersonal trebalo bi — the spec's own sentence.
 *  • Direct quotes only — never «rekla je da …» (that is U21).
 *  • **ispit**, never *test* (test is uncarded).
 *  • lipanj / srpanj are taught (a2u14 L4) and used freely.
 *  • **iskustvo** (a2u12 L5) and **mladost** (a2u16 L2) are already carded, so
 *    they are used plainly and NOT glossed.
 *
 * Level-compliance pass 2026-07-29: every content word was greped against the
 * 1623-headword carded list before it was allowed in. Rejected and replaced:
 * misliti, izbor, naći/našao, složiti se, drugačije, nitko, takav/takvu,
 * zadnji/posljednji, razgovarati, učionica, zaboraviti, provesti, ovaj/ovo,
 * "u pravu", o + LOC.
 */
export const b1u18story: Story = {
  id: "b1u18s",
  unitId: "b1u18",
  title: "Tečaj u Zagrebu",
  titleEn: "A course in Zagreb",
  glossary: [
    { word: "barem", gloss: "at least / if only" },
    { word: "ljetni", gloss: "summer- (adj) — ljetni tečaj = summer course" },
    { word: "prijaviti se", gloss: "to apply, to sign up (built on prijava, U18 L2)" },
    { word: "odabrati", gloss: "to choose (pf) — odabrao / odabrala" },
    { word: "savršen", gloss: "perfect" },
  ],
  paragraphs: [
    {
      hr: "Tom je bio u Kanadi. Već dvije godine uči hrvatski, ali samo kod kuće — s knjigom i s mobitelom. Jedno jutro je Ani napisao dugu poruku. »Draga Ana, htio bih upisati tečaj hrvatskog u Zagrebu, ali ne znam koji. Na internetu su tri: prvi je jako skup, drugi je jako kratak, a treći je ljetni tečaj na sveučilištu. Ti živiš u Zagrebu — što bi ti napravila na mom mjestu?«",
      en: "Tom was in Canada. He has been learning Croatian for two years now, but only at home — with a book and with his phone. One morning he wrote Ana a long message. \"Dear Ana, I'd like to enrol in a Croatian course in Zagreb, but I don't know which one. There are three of them online: the first is very expensive, the second is very short, and the third is a summer course at the university. You live in Zagreb — what would you do in my place?\"",
    },
    {
      hr: "Ana je odgovorila navečer. »Na tvom mjestu bih upisala ljetni tečaj — trebalo bi se prijaviti do lipnja. Taj tečaj je savršen za tebe: svaki dan tri sata, a profesori su jako dobri. Ne bih upisala prvi tečaj — on je jako skup, a nije bolji. Trebao bi odmah pisati na sveučilište. Mogao bi barem pročitati stranicu tečaja — tamo piše sve. I sveučilište daje stipendiju za dobre studente!«",
      en: "Ana answered in the evening. \"In your place I'd enrol in the summer course — you'd have to apply by June. That course is perfect for you: three hours every day, and the teachers are very good. I wouldn't enrol in the first course — it's very expensive and it isn't any better. You should write to the university right away. You could at least read the course page — everything is written there. And the university gives a scholarship to good students!\"",
    },
    {
      hr: "Marko je imao drugi savjet. »Tečaj? Ja bih učio u restoranu, s gostima!« napisao je. »Kod nas svaki dan dolazi puno ljudi. Ja sam naučio engleski u restoranu, ne u školi. Na tvom mjestu bih radio kod mene i govorio hrvatski cijeli dan. To je najbolja vježba, a nije skupo. Tečaj je dobar, ali restoran je bolji!«",
      en: "Marko had different advice. \"A course? I'd learn in the restaurant, with the guests!\" he wrote. \"Loads of people come to our place every day. I learnt English in a restaurant, not at school. In your place I'd work at mine and speak Croatian all day long. That's the best practice, and it isn't expensive. A course is good, but a restaurant is better!\"",
    },
    {
      hr: "Baka Marija je slušala i pila kavu. »Kad sam ja bila mlada, tečajeva nije bilo«, rekla je. »Nije bilo ni stipendija. U moje vrijeme škola je bila kratka, a posao dug. Da sam ja imala tu priliku…« Baka nije završila rečenicu. »Idi u Zagreb. Mladost je kratka, a iskustvo je zauvijek.«",
      en: "Grandma Marija was listening and drinking her coffee. \"When I was young, there were no courses,\" she said. \"There were no scholarships either. In my day school was short and work was long. If I had had that chance…\" Grandma didn't finish the sentence. \"Go to Zagreb. Youth is short, but experience is forever.\"",
    },
    {
      hr: "Tom je čitao sve poruke tri dana. Onda je odabrao. »Hvala vam! Upisat ću ljetni tečaj na sveučilištu. Ana, bi li mi objasnila prijavu? Ne razumijem sve riječi. Marko, navečer bih radio kod tebe — barem dva sata. I bako, hvala ti: to je moja prilika. Ako položim ispit u lipnju, doći ću u srpnju.« Ana je odmah odgovorila: »Savršeno! Vidimo se u srpnju.«",
      en: "Tom read all the messages for three days. Then he chose. \"Thank you all! I'm going to enrol in the summer course at the university. Ana, would you explain the application to me? I don't understand all the words. Marko, in the evenings I'd work at yours — at least two hours. And grandma, thank you: this is my chance. If I pass the exam in June, I'll come in July.\" Ana answered right away: \"Perfect! See you in July.\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što bi Tom htio upisati? (What would Tom like to enrol in?)",
      options: [
        "Tečaj hrvatskog u Zagrebu.",
        "Tečaj engleskog u Kanadi.",
        "Fakultet u Splitu.",
        "Ljetni posao u restoranu.",
      ],
      correctIndex: 0,
      explanation: "»Htio bih upisati tečaj hrvatskog u Zagrebu, ali ne znam koji.« — htio bih is the wish (L1), and the problem is only which one.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Koji tečaj bi Ana upisala na Tomovu mjestu? (Which course would Ana enrol in, in Tom's place?)",
      options: [
        "Ljetni tečaj na sveučilištu.",
        "Prvi tečaj, jer je najbolji.",
        "Kratak tečaj od dva tjedna.",
        "Tečaj u restoranu kod Marka.",
      ],
      correctIndex: 0,
      explanation: "»Na tvom mjestu bih upisala ljetni tečaj — trebalo bi se prijaviti do lipnja.« She explicitly rules the first one out: »Ne bih upisala prvi tečaj.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Gdje bi Marko učio hrvatski? (Where would Marko learn Croatian?)",
      options: [
        "U restoranu, s gostima.",
        "Na sveučilištu u Zagrebu.",
        "Kod kuće, s knjigom.",
        "U školi u Kanadi.",
      ],
      correctIndex: 0,
      explanation: "»Ja bih učio u restoranu, s gostima!« — same frame as Ana's, opposite advice. Watch the participle: Marko is m, so učio.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što baka Marija nije imala kad je bila mlada? (What didn't grandma Marija have when she was young?)",
      options: [
        "Tečajeve i stipendije.",
        "Kavu i novine.",
        "Obitelj u Splitu.",
        "Posao i stan.",
      ],
      correctIndex: 0,
      explanation: "»Kad sam ja bila mlada, tečajeva nije bilo. Nije bilo ni stipendija.« — after nije bilo the nouns go into the genitive: tečajeva, stipendija.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kada će Tom doći ako položi ispit? (When will Tom come if he passes the exam?)",
      options: ["U srpnju.", "U lipnju.", "U rujnu.", "Sljedeće godine."],
      correctIndex: 0,
      explanation: "»Ako položim ispit u lipnju, doći ću u srpnju.« — a real condition, so ako + present and future I. The exam is in June; the trip is in July.",
    },
  ],
};
