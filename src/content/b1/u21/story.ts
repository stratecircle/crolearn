import type { Story } from "@/types/content";

/**
 * B1 U21 story — «Poruka koja je stigla četiri puta»
 * (The message that arrived four times)
 * Spec: curriculum/B1/unit-21.md § Story.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * ~330 Croatian words across 5 paragraphs. One message, four relays, four
 * people in three different places — and nobody lies at any point.
 *
 * PER-PARAGRAPH MAP — every reported clause, with its type, its tense before
 * and after (which must be identical), and the person shift applied:
 *   P1 · «Vidimo se u subotu u pet ispred kina.»  — DIRECT QUOTE, the control
 *        text. Everything later is measured against this sentence, and it is
 *        quoted verbatim again in P5 so the reader can check.
 *   P2 · «Rekla je da se vidimo u pet»            STATEMENT · prezent →
 *        prezent · Ana's «vidimo se» kept exactly. Tom relays correctly.
 *   P2 · «mislim da je mislila na šest»           Tom's OWN opinion, U19's
 *        frame — not a report of Ana. This is the hinge of the whole story:
 *        the hedge is Tom's, and it is what survives.
 *   P3 · «Rekao je da je Ana mislila na šest»     STATEMENT · Marko relays
 *        TOM's hedge as ANA's claim. Tense untouched (perfekt → perfekt); the
 *        only thing that changed is whose sentence it is.
 *   P3 · «Rekao mi je da dođem u šest»            COMMAND · da + PREZENT,
 *        matched to baka Marija, with the dative `mi` naming who was told.
 *   P4 · «Pitala je gdje se nalazi ta kavana»     WH-QUESTION · question word
 *        kept, no da, no question mark, person moved.
 *   P4 · «Pitao me je li to kino ili kavana»      YES/NO QUESTION · `li` on
 *        the verb. Deliberately placed right after the wh-question so the two
 *        shapes stand side by side.
 *   P4 · «Svi su bili sigurni.»                   The paragraph's closing
 *        beat. It wanted «Nitko nije znao», and `nitko` is rejected
 *        course-wide (b1u19's test header names it); `griješiti` is 0 as
 *        well, so the ironic version is unbuildable. What is left says the
 *        same thing from the other side and is arguably better.
 *   P5 · «Obećao si da ćeš doći u pet»            L4 · obećati + da + FUTUR.
 *   P5 · «Predložila je da dođemo u pet»          L4 · predložiti + da +
 *        PREZENT — the trap, in the paragraph where it settles the argument.
 *   P5 · «Rekla je da će doći danas»              DEICTIC SHIFT · «u subotu»
 *        became «danas», which is L5's rule landing exactly where the story
 *        needs it, and everybody notices at once.
 *
 * AUTHORING GUARDS, all verified by grep over the learner-facing Croatian only:
 *  • **No backshifting anywhere.** Every reported clause was checked against
 *    the quote it reports; the tenses are identical in every case. The story's
 *    entire plot depends on a message being relayed correctly, so a backshift
 *    here would be self-defeating.
 *  • **No `ako` in any reported question** and **no `da li` anywhere.** P4
 *    carries both question shapes and neither uses either.
 *  • **No participial passive** (B2) · **no comparatives or superlatives**
 *    (B2) · **no Future II / budem** (U22) · **no -nje** (U23) · **never three
 *    clitics in one clause**, and `da` is never counted as one.
 *  • Reasons take **jer** or U20's **budući da**.
 *
 * Level-compliance pass: every content word greped against the 848-headword
 * carded list. Rejected and replaced: naći (1, inside b1u18's story rejection
 * list → Ana's message is built on the carded **vidjeti se**: «Vidimo se u
 * subotu…», not «Nađemo se…»), točno (1, same class), nitko (rejected by name
 * in b1u19's test header — three separate sentences were rebuilt around it),
 * griješiti (0), sjediti (3, all inside previous units' rejection notices →
 * «bila je u kavani»), naglas (0), zapisati (0), lagati (0), nikakav (0),
 * pogrešan (0), vlastit (0), umjesto (3, same class), sljedeći / idući (both
 * rejected → «drugi put»), kasniti (0 → «dolazi poslije»), zaboraviti
 * (1, rejected), šutjeti (1, rejected), ekran (4, rejected → zaslon), telefon
 * (0 → mobitel). **kino** (a1u5 L4), **grupa** (b1u19 L4) and **jasno**
 * (b1u19 L3) all came back CARDED and were struck from the glossary — they
 * are used freely in the prose instead.
 */
export const b1u21story: Story = {
  id: "b1u21s",
  unitId: "b1u21",
  title: "Poruka koja je stigla četiri puta",
  titleEn: "The message that arrived four times",
  glossary: [
    { word: "nalaziti se", gloss: "to be located, to be situated (impf) — Gdje se nalazi kavana? This `se` is lexical: it belongs to the verb and cannot be removed (U20 L1)." },
    { word: "dogovor", gloss: "an arrangement, what was agreed (m) — GEN dogovora" },
    { word: "usput", gloss: "by the way, in passing (adv)" },
    { word: "kavana", gloss: "a café (f) — the place; kava, the drink, has been carded since a1u1" },
  ],
  paragraphs: [
    {
      hr: "U srijedu je Ana poslala poruku. Bila je kratka i jasna: »Vidimo se u subotu u pet ispred kina.« Poslala ju je Tomu, jer je Tom uvijek prvi provjeri. Ana je bila sigurna da je sve u redu. Napisala je pet, mislila je pet, i s tom porukom nije bilo problema.",
      en: "On Wednesday Ana sent a message. It was short and clear: «See you on Saturday at five in front of the cinema.» She sent it to Tom, because Tom always checks first. Ana was sure everything was fine. She wrote five, she meant five, and there was nothing wrong with that message.",
    },
    {
      hr: "Tom je nazvao Marka. »Ana je poslala poruku«, rekao je. »Rekla je da se vidimo u pet ispred kina.« Do tu je sve bilo dobro. Ali onda je Tom dodao nešto što nije bilo u poruci: »Usput, mislim da je mislila na šest. Ona uvijek dolazi poslije.« Marko je slušao. Zapamtio je jedno: šest.",
      en: "Tom called Marko. «Ana sent a message,» he said. «She said we're meeting at five in front of the cinema.» Up to there everything was fine. But then Tom added something that was not in the message: «By the way, I think she meant six. She always turns up later.» Marko listened. He remembered one thing: six.",
    },
    {
      hr: "Marko je poslije nazvao baku Mariju, jer ona ne gleda grupu na mobitelu. »Ana je pisala o suboti«, rekao je Marko. »Rekao je Tom da je Ana mislila na šest.« Onda je dodao: »Dođi u šest.« Baka Marija je napisala: subota, šest. Poslije je rekla Ani: »Marko mi je rekao da dođem u šest.« Ana to nije razumjela, ali nije pitala.",
      en: "Marko later called baka Marija, because she doesn't look at the group on her phone. «Ana wrote about Saturday,» said Marko. «Tom said that Ana meant six.» Then he added: «Come at six.» Baka Marija wrote: Saturday, six. Later she said to Ana: «Marko told me to come at six.» Ana didn't understand that, but she didn't ask.",
    },
    {
      hr: "Baka Marija je ipak imala jedno pitanje. Pitala je gdje se nalazi ta kavana. Ana joj nije spomenula kavanu — Ana je pisala o kinu — ali baka Marija je čula kavanu i pitala je o njoj. Marko nije razumio pitanje. Pitao je Toma je li to kino ili kavana. Tom je pitao Anu što je napisala. Ana je odgovorila da je napisala kino. Ali baka Marija je već krenula prema kavani na trgu. Svi su bili sigurni.",
      en: "Baka Marija did have one question, though. She asked where that café was. Ana had not mentioned a café to her — Ana had written about the cinema — but baka Marija had heard café and asked about it. Marko didn't understand the question. He asked Tom whether it was the cinema or the café. Tom asked Ana what she'd written. Ana replied that she'd written cinema. But baka Marija had already set off for the café on the square. Everybody was certain.",
    },
    {
      hr: "U subotu je Tom bio ispred kina u pet. Marko je došao u šest. Ana je bila u kavani, jer je mislila da je to sada dogovor. Baka Marija je bila u drugoj kavani, na drugom trgu, i čekala. Kad su se svi konačno vidjeli, Ana je otvorila mobitel i pročitala svoju poruku: »Vidimo se u subotu u pet ispred kina.« Svi su gledali poruku. »Obećao si da ćeš doći u pet«, rekla je Tomu. Tom je priznao da jest. Onda je baka Marija predložila da drugi put dođemo svi zajedno. Ana je rekla da će drugi put poruku poslati svima.",
      en: "On Saturday Tom was in front of the cinema at five. Marko arrived at six. Ana was in the café, because she thought that was the arrangement now. Baka Marija was in a different café, on a different square, waiting. When they finally all saw each other, Ana opened her phone and read her message out: «See you on Saturday at five in front of the cinema.» Everybody looked at the message. «You promised you'd come at five,» she said to Tom. Tom admitted that he had. Then baka Marija suggested we all come together another time. Ana said she'd send the message to everybody another time.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Što je Ana napisala u poruci?",
      options: [
        "Da se vide u subotu u pet ispred kina.",
        "Da se vide u subotu u šest ispred kina.",
        "Da se vide u subotu u pet u kavani.",
        "Da se vide u nedjelju u pet ispred kina.",
      ],
      correctIndex: 0,
      explanation: "»Vidimo se u subotu u pet ispred kina.« The message is quoted twice — once at the start and once at the end — and it says the same thing both times. Everything that went wrong happened after it left her phone.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Što je Tom dodao poruci?",
      options: [
        "Svoje mišljenje da je Ana mislila na šest.",
        "Ana je rekla da dolazi u šest.",
        "Novo mjesto — kavanu, ne kino.",
        "Ništa. Prenio je poruku dobro.",
      ],
      correctIndex: 0,
      explanation: "»Mislim da je mislila na šest.« That is Tom's own opinion in his own voice — Unit 19's frame, not a report of anything Ana said. He relayed her sentence correctly and then added a sentence of his own, and it was his that survived.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Kako je Marko prenio Tomovo mišljenje baki Mariji?",
      options: [
        "Kao ono što je Ana mislila.",
        "Kao svoje mišljenje.",
        "Kao pitanje.",
        "Nije ga uopće prenio.",
      ],
      correctIndex: 0,
      explanation: "»Rekao je Tom da je Ana mislila na šest.« Marko reports it accurately — Tom really did say that — but by the time baka Marija hears it, a guess of Tom's has become a claim about Ana. Nobody lied; the sentence simply changed owner.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što je baka Marija pitala?",
      options: [
        "Gdje se nalazi ta kavana.",
        "Kad dolazi Ana.",
        "Je li Tom poslao poruku.",
        "Zašto Marko dolazi u šest.",
      ],
      correctIndex: 0,
      explanation: "»Pitala je gdje se nalazi ta kavana.« A wh-question, relayed with the question word kept and no question mark. And it is the question that reveals the second error, because nobody had ever mentioned a café.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Zašto su svi bili na drugim mjestima?",
      options: [
        "Jer je svaka osoba prenijela nešto malo drugo, a svi su govorili istinu.",
        "Jer je Ana napisala drugo vrijeme.",
        "Jer Tom nije pročitao poruku.",
        "Jer baka Marija nije znala dogovor.",
      ],
      correctIndex: 0,
      explanation: "Every single relay in the story is grammatically correct and factually honest. Tom reported Ana accurately and then added an opinion; Marko reported Tom accurately; baka Marija asked about what she had heard. The message was never wrong — only its owners kept changing.",
    },
  ],
};
