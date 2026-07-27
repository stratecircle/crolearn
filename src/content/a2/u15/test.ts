import type { UnitTest } from "@/types/content";

/**
 * A2 U15 unit test (spec: curriculum/A2/unit-15.md blueprint).
 * 19 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills drilled ≥2×: ACC clitics (L1), DAT clitics (L2), cluster
 * order + se/je (L3), registers (L4).
 */
export const a2u15test: UnitTest = {
  id: "a2u15t",
  unitId: "a2u15",
  title: "Test — Komunikacija",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the phone words",
          pairs: [
            { a: "poziv", b: "call" },
            { a: "poruka", b: "message" },
            { a: "odgovor", b: "answer" },
            { a: "vijest", b: "news item" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the internet words",
          pairs: [
            { a: "lozinka", b: "password" },
            { a: "mreža", b: "network" },
            { a: "stranica", b: "page" },
            { a: "objava", b: "post" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "The word you say ONLY on the phone:",
          options: ["halo", "pozdrav", "bok"],
          correctIndex: 0,
          explanation: "halo — phone-only.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "»Dopisujemo se svaki dan.« means…",
          options: ["we text each other every day", "we call each other every day", "we see each other every day"],
          correctIndex: 0,
          explanation: "dopisivati se = to text back and forth.",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "You can't reach Ana — the line says:",
          options: ["Broj je zauzet.", "Broj je hitno.", "Broj je veseo."],
          correctIndex: 0,
          explanation: "zauzet = busy.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Vidim Anu. → Vidim ___.",
          blanks: [["je"]],
          translation: "I see Ana. → I see her.",
          explanation: "her → ACC je.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Zovem Toma i Anu. → Zovem ___.",
          blanks: [["ih"]],
          translation: "I'm calling Tom and Ana. → I'm calling them.",
          explanation: "them → ih.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Šaljem poruku Ani. → Šaljem ___ poruku.",
          blanks: [["joj"]],
          translation: "I send Ana a message. → I send her a message.",
          explanation: "to her → DAT joj.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Odgovorit ću ___ sutra. (to you — a friend)",
          blanks: [["ti"]],
          translation: "I'll answer you tomorrow.",
          explanation: "odgovoriti + DAT ti.",
        },
        {
          id: "s10",
          type: "reorder",
          words: ["Dala", "mu", "ga", "je"],
          answers: ["Dala mu ga je.", "Dala mu ga je"],
          en: "She gave it to him.",
          explanation: "DAT → ACC → je last.",
        },
        {
          id: "s11",
          type: "reorder",
          words: ["Jesi", "li", "mi", "poslao", "poruku"],
          answers: ["Jesi li mi poslao poruku?", "Jesi li mi poslao poruku"],
          en: "Did you send me the message?",
          explanation: "jesi + li + DAT mi.",
        },
        {
          id: "s12",
          type: "mc",
          prompt: "Ana got in touch. Which is correct?",
          options: ["Javila se.", "Javila se je.", "Se javila."],
          correctIndex: 0,
          explanation: "se + je → je drops; clitics never first.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s13",
          type: "listen-type",
          tts: "Javi mi se!",
          explanation: "Javi mi se! — get in touch with me!",
        },
        {
          id: "s14",
          type: "listen-type",
          tts: "nula devet jedan, dva tri dva",
          answers: ["091 232", "091232", "nula devet jedan dva tri dva"],
          explanation: "091 232 — a phone number, digit by digit.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: what is she promising?",
          tts: "Nazvat ću je večeras.",
          options: ["to call her tonight", "to text him tomorrow", "to visit them tonight"],
          correctIndex: 0,
          explanation: "Nazvat ću je — I'll call HER (ACC je).",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen: what happened?",
          tts: "Baka nam je poslala sliku torte.",
          options: [
            "grandma sent us a picture of the cake",
            "grandma baked us a cake",
            "grandma asked us for a picture",
          ],
          correctIndex: 0,
          explanation: "nam je poslala — sent TO US (DAT nam, je-caboose).",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s17",
          type: "mc",
          prompt:
            "»Poštovana gospođo Kovač, javljam Vam se zbog stana. Imam pitanje: kolika je stanarina? Molim Vas, odgovorite mi. Srdačan pozdrav, Ana Horvat«\n\nTko piše e-mail? (Who is writing the e-mail?)",
          options: ["Ana Horvat", "gospođa Kovač", "Tom"],
          correctIndex: 0,
          explanation: "The potpis (signature) says: Ana Horvat.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Komu Ana piše? (To whom is Ana writing?)",
          options: ["gospođi Kovač", "svojoj baki", "šefici"],
          correctIndex: 0,
          explanation: "»Poštovana gospođo Kovač« — the formal opening names her.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Same text: Zašto Ana piše? (Why is Ana writing?)",
          options: ["zbog stana — ima pitanje o stanarini", "zbog posla", "zbog torte"],
          correctIndex: 0,
          explanation: "»javljam Vam se zbog stana… kolika je stanarina?«",
        },
      ],
    },
  ],
};
