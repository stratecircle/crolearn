import type { Story } from "@/types/content";

/**
 * A1 U5 story — «Tom traži muzej» (spec: curriculum/A1/unit-5.md).
 * Unit-5 language only: NOM + ACC + LOC, ići, u/na destinations, direction chunks.
 * ≤5 glossed words (karta, ulaz, katedrala, zatvoreno). ~110 words, present tense.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Note: »traži« appears only in the title (glossed by titleEn); it is never used
 * in the body, so no untaught word appears in the paragraphs.
 */
export const a1u5story: Story = {
  id: "a1u5s",
  unitId: "a1u5",
  title: "Tom traži muzej",
  titleEn: "Tom looks for the museum",
  glossary: [
    { word: "karta", gloss: "ticket" },
    { word: "katedrala", gloss: "cathedral" },
    { word: "ulaz", gloss: "entrance" },
    { word: "zatvoreno", gloss: "closed" },
  ],
  paragraphs: [
    {
      hr: "Tom je u Zagrebu. On ide u muzej. »Ana, gdje je muzej?« — »Muzej je u centru. Nije daleko. Tamo je i katedrala.«",
      en: "Tom is in Zagreb. He is going to the museum. \"Ana, where is the museum?\" — \"The museum is in the centre. It's not far. The cathedral is there too.\"",
    },
    {
      hr: "Tramvaj je na stanici. Tom čeka tramvaj. On ima kartu — karta je tu. Tom je u tramvaju i gleda grad. Grad je velik i lijep.",
      en: "The tram is at the stop. Tom waits for the tram. He has a ticket — the ticket is here. Tom is in the tram and watches the city. The city is big and beautiful.",
    },
    {
      hr: "Tom je na trgu. »Oprostite, gdje je muzej?« — »Idite ravno, pa skrenite desno.« — »Je li daleko?« — »Ne, muzej je blizu.« — »Hvala!«",
      en: "Tom is on the square. \"Excuse me, where is the museum?\" — \"Go straight, then turn right.\" — \"Is it far?\" — \"No, the museum is near.\" — \"Thanks!\"",
    },
    {
      hr: "Muzej je tamo, na trgu. Tom gleda ulaz. Ali ovdje je zatvoreno! Tom nije u muzeju.",
      en: "The museum is there, on the square. Tom looks at the entrance. But it's closed here! Tom isn't in the museum.",
    },
    {
      hr: "Tom ide na kavu, na trg. On pije kavu i gleda katedralu. Kava je dobra i Tom je sretan!",
      en: "Tom goes for a coffee, on the square. He drinks coffee and looks at the cathedral. The coffee is good and Tom is happy!",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Kamo Tom ide? (Where is Tom going?)",
      options: ["u muzej", "na kolodvor", "u banku"],
      correctIndex: 0,
      explanation: "»On ide u muzej.« — Tom is heading to the museum.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Gdje je muzej? (Where is the museum?)",
      options: ["u centru, na trgu", "na kolodvoru", "u parku"],
      correctIndex: 0,
      explanation: "»Muzej je u centru« and later »Muzej je tamo, na trgu.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Je li muzej daleko? (Is the museum far?)",
      options: ["Ne, blizu je.", "Da, jako daleko.", "Da, u drugom gradu."],
      correctIndex: 0,
      explanation: "»Je li daleko? — Ne, muzej je blizu.«",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Što Tom čeka? (What is Tom waiting for?)",
      options: ["tramvaj", "autobus", "Anu"],
      correctIndex: 0,
      explanation: "»Tom čeka tramvaj« — he waits for the tram at the stop.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "Kamo Tom ide na kraju? (Where does Tom go in the end? — na kraju = in the end)",
      options: ["na kavu", "u muzej", "na kolodvor"],
      correctIndex: 0,
      explanation: "The museum is closed, so »Tom ide na kavu« — he goes for a coffee instead.",
    },
  ],
};
