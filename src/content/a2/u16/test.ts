import type { UnitTest } from "@/types/content";

/**
 * A2 U16 unit test (spec: curriculum/A2/unit-16.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills drilled ≥2×: pairs (L1), aspect in past (L2) and future
 * (L3), biography frames (L4).
 */
export const a2u16test: UnitTest = {
  id: "a2u16t",
  unitId: "a2u16",
  title: "Test — Moja priča",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the process to its done-version",
          pairs: [
            { a: "pisati", b: "napisati" },
            { a: "čitati", b: "pročitati" },
            { a: "učiti", b: "naučiti" },
            { a: "raditi", b: "napraviti" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the life words",
          pairs: [
            { a: "djetinjstvo", b: "childhood" },
            { a: "vjenčanje", b: "wedding" },
            { a: "budućnost", b: "future" },
            { a: "uspjeh", b: "success" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "»Odlučio sam!« means…",
          options: ["I've decided!", "I've succeeded!", "I've changed!"],
          correctIndex: 0,
          explanation: "odlučiti = to decide.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "The event where two people say yes:",
          options: ["vjenčanje", "brak", "proslava"],
          correctIndex: 0,
          explanation: "vjenčanje = the wedding (brak = the marriage that follows).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "»Sjećam se djetinjstva.« means…",
          options: ["I remember my childhood", "I miss my childhood", "I dream of childhood"],
          correctIndex: 0,
          explanation: "sjećati se + GEN = to remember.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "mc",
          prompt: "»Jučer sam ___ knjigu cijeli dan.«",
          options: ["čitao", "pročitao", "čitam"],
          correctIndex: 0,
          explanation: "cijeli dan (duration) → imperfective čitao.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "»Ana je ___ knjigu za dva dana.«",
          options: ["pročitala", "čitala", "čita"],
          correctIndex: 0,
          explanation: "za dva dana (within) → perfective pročitala.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»___ cijelo ljeto.« (I'll be working, all summer)",
          options: ["Radit ću", "Napravit ću", "Radim"],
          correctIndex: 0,
          explanation: "Duration ahead → imperfective future.",
        },
        {
          id: "s09",
          type: "mc",
          prompt: "»___ plan do petka.« (it will EXIST by Friday)",
          options: ["Napravit ću", "Radit ću", "Napravim"],
          correctIndex: 0,
          explanation: "Deadline + result → perfective future.",
        },
        {
          id: "s10",
          type: "fill",
          text: "Baka je ___ u Slavoniji. (odrasti)",
          blanks: [["odrasla"]],
          translation: "Grandma grew up in Slavonia.",
          explanation: "odrasti → odrasla (f).",
        },
        {
          id: "s11",
          type: "fill",
          text: "___ ću ti sutra. (odgovoriti)",
          blanks: [["Odgovorit", "odgovorit"]],
          translation: "I'll answer you tomorrow.",
          explanation: "odgovoriti → odgovorit ću (the -ti drops its i).",
        },
        {
          id: "s12",
          type: "fill",
          text: "čitati → the done-version: ___",
          blanks: [["pročitati", "procitati"]],
          translation: "to read → to read to the end",
          explanation: "pro- + čitati.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s13",
          type: "listen-type",
          tts: "Rodio sam se u Kanadi.",
          explanation: "Rodio sam se u Kanadi — I was born in Canada.",
        },
        {
          id: "s14",
          type: "listen-type",
          tts: "Napravit ću plan.",
          explanation: "Napravit ću plan — I'll make a plan.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: is the letter finished?",
          tts: "Napisala je pismo.",
          options: ["yes — it's written", "no — she was still writing", "she never started"],
          correctIndex: 0,
          explanation: "Napisala (perfective) = done, the letter exists.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Listen: is the letter finished?",
          tts: "Pisala je pismo cijelo jutro.",
          options: ["unclear — she was writing all morning", "yes — it's done", "there is no letter"],
          correctIndex: 0,
          explanation: "Pisala (imperfective) + cijelo jutro = the process, no promised result.",
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
            "»Marko se rodio u Splitu. Odrastao je blizu mora. Završio je školu i počeo raditi kao konobar. Radi u restoranu pet godina. Sljedeće godine otvorit će svoj kafić.«\n\nGdje se Marko rodio? (Where was Marko born?)",
          options: ["u Splitu", "u Zagrebu", "u Slavoniji"],
          correctIndex: 0,
          explanation: "»Marko se rodio u Splitu.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Koliko dugo radi u restoranu? (How long has he worked at the restaurant?)",
          options: ["pet godina", "petnaest godina", "pet mjeseci"],
          correctIndex: 0,
          explanation: "»Radi u restoranu pet godina.« — an ongoing wave.",
        },
        {
          id: "s19",
          type: "mc",
          prompt: "Same text: Što će Marko napraviti sljedeće godine? (What will Marko do next year?)",
          options: ["otvorit će svoj kafić", "završit će školu", "preselit će se u Zagreb"],
          correctIndex: 0,
          explanation: "»Sljedeće godine otvorit će svoj kafić.« — a future flag.",
        },
      ],
    },
  ],
};
