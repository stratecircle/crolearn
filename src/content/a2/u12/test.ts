import type { UnitTest } from "@/types/content";

/**
 * A2 U12 unit test (spec: curriculum/A2/unit-12.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: INS forms & s/sa (L1), the
 * s-vs-bare judgment (L2 — THE trap), kao + NOM (L3), studirati (L4),
 * interview chunks (L5).
 */
export const a2u12test: UnitTest = {
  id: "a2u12t",
  unitId: "a2u12",
  title: "Test — Posao",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "fill",
          text: "vozač → the woman is ___",
          blanks: [["vozačica", "vozacica"]],
          translation: "driver (m) → driver (f)",
          explanation: "+ -ica: vozačica.",
        },
        {
          id: "s02",
          type: "fill",
          text: "programer → the woman is ___",
          blanks: [["programerica"]],
          translation: "programmer (m) → programmer (f)",
          explanation: "+ -ica: programerica.",
        },
        {
          id: "s03",
          type: "match",
          prompt: "Match the profession to the workplace",
          pairs: [
            { a: "kuhar", b: "restoran" },
            { a: "učiteljica", b: "škola" },
            { a: "prodavačica", b: "trgovina" },
            { a: "vozač", b: "autobus" },
          ],
        },
        {
          id: "s04",
          type: "mc",
          prompt: "You study there, surrounded by books:",
          options: ["knjižnica", "čekaonica", "ured"],
          correctIndex: 0,
          explanation: "knjižnica = library.",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s05",
          type: "fill",
          text: "Radim s ___. (kolega)",
          blanks: [["kolegom"]],
          translation: "I work with a colleague.",
          explanation: "s + INS: kolegom.",
        },
        {
          id: "s06",
          type: "fill",
          text: "Pišem ___. (olovka)",
          blanks: [["olovkom"]],
          translation: "I write with a pencil.",
          explanation: "Tool → bare INS: olovkom.",
        },
        {
          id: "s07",
          type: "mc",
          prompt: "Which sentence is correct?",
          options: ["Idem na posao autobusom.", "Idem na posao s autobusom.", "Idem na posao na autobusu."],
          correctIndex: 0,
          explanation: "Means → bare INS, no s: autobusom.",
        },
        {
          id: "s08",
          type: "mc",
          prompt: "»Idem u kino ___ Markom.«",
          options: ["s", "— (nothing)", "sa"],
          correctIndex: 0,
          explanation: "A person → s + INS: s Markom.",
        },
        {
          id: "s09",
          type: "fill",
          text: "Razgovaram ___ šeficom. (s or sa?)",
          blanks: [["sa"]],
          translation: "I'm talking with the boss.",
          explanation: "sa before š: sa šeficom.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "»Radim ___ konobar.«",
          options: ["kao", "s", "za"],
          correctIndex: 0,
          explanation: "raditi kao + NOM: Radim kao konobar.",
        },
        {
          id: "s11",
          type: "mc",
          prompt: "Give the key TO the colleague — which is right?",
          options: ["Dajem kolegi ključ.", "Dajem kolegom ključ.", "Dajem s kolegom ključ."],
          correctIndex: 0,
          explanation: "Receiver → DAT kolegi (U10); kolegom would be INS (with).",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Putujem vlakom u Split.",
          explanation: "Putujem vlakom u Split — I travel to Split by train.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Radim s kolegicom.",
          explanation: "Radim s kolegicom — I work with a colleague (f).",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen to the interview: what is the question about?",
          tts: "Kada možete početi?",
          options: ["when you can start", "how much you earn", "where you live"],
          correctIndex: 0,
          explanation: "Kada možete početi? = when can you start?",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: what is Ana's job?",
          tts: "Ana radi kao učiteljica u školi.",
          options: ["teacher", "driver", "shop assistant"],
          correctIndex: 0,
          explanation: "radi kao učiteljica = works as a teacher.",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s16",
          type: "mc",
          prompt:
            "»OGLAS: Tvrtka u Zagrebu treba prodavača. Posao je u trgovini u centru grada. Plaća je dobra. — Tom piše: Dobar dan! Imam iskustvo — radio sam kao prodavač dvije godine. Mogu početi u ponedjeljak. Javit ću se!«\n\nKoga tvrtka treba? (Who does the company need?)",
          options: ["prodavača", "vozača", "učitelja"],
          correctIndex: 0,
          explanation: "»Tvrtka treba prodavača.« (animate ACC = GEN form)",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same ad: Gdje je posao? (Where is the job?)",
          options: ["u trgovini u centru grada", "u uredu blizu kolodvora", "u školi"],
          correctIndex: 0,
          explanation: "»Posao je u trgovini u centru grada.«",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same ad: Kada Tom može početi? (When can Tom start?)",
          options: ["u ponedjeljak", "odmah", "u subotu"],
          correctIndex: 0,
          explanation: "»Mogu početi u ponedjeljak.«",
        },
      ],
    },
  ],
};
