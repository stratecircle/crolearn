import type { UnitTest } from "@/types/content";

/**
 * A2 U14 unit test (spec: curriculum/A2/unit-14.md blueprint).
 * 18 items · 4 sections (vocab → grammar → listening → reading) · pass ≥ 70%.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 * Only tests skills the lessons drilled ≥2×: VOC (L1), imperative ti/Vi (L2),
 * nemoj + infinitive & jaja (L3), dates in GEN (L4), wish formulas (L5).
 */
export const a2u14test: UnitTest = {
  id: "a2u14t",
  unitId: "a2u14",
  title: "Test — Proslave",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the party words",
          pairs: [
            { a: "proslava", b: "celebration" },
            { a: "poklon", b: "gift" },
            { a: "gost", b: "guest" },
            { a: "pozivnica", b: "invitation" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the holidays & dates",
          pairs: [
            { a: "Božić", b: "Christmas" },
            { a: "Uskrs", b: "Easter" },
            { a: "blagdan", b: "holiday" },
            { a: "datum", b: "date" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "You do this to cake batter for ten minutes:",
          options: ["miješati", "staviti", "otvoriti"],
          correctIndex: 0,
          explanation: "miješati = to stir (Miješaj deset minuta!).",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "The white powder every torta needs:",
          options: ["brašno", "šećer", "jaje"],
          correctIndex: 0,
          explanation: "brašno = flour (šećer is sugar — also needed, but it's not the powder that makes dough!).",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "Raising a glass, Croatians say:",
          options: ["Živjeli!", "Dodaj!", "Iznenađenje!"],
          correctIndex: 0,
          explanation: "Živjeli! = cheers!",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Ivan → »___, dođi!«",
          blanks: [["Ivane", "ivane"]],
          translation: "Ivan → \"Ivan, come!\"",
          explanation: "VOC -e: Ivane!",
        },
        {
          id: "s07",
          type: "fill",
          text: "gospođa → »Dobar dan, ___!«",
          blanks: [["gospođo"]],
          translation: "madam → \"Good day, madam!\"",
          explanation: "fem -a → VOC -o: gospođo!",
        },
        {
          id: "s08",
          type: "fill",
          text: "doći, ti-form → »___ na proslavu!«",
          blanks: [["Dođi", "dođi", "Dodi"]],
          translation: "Come to the party!",
          explanation: "The rebel four: dođi!",
        },
        {
          id: "s09",
          type: "fill",
          text: "otvoriti, Vi-form → »___ poklon!«",
          blanks: [["Otvorite", "otvorite"]],
          translation: "Open the present! (polite)",
          explanation: "Vi → -ite: otvorite.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Nemoj ___ tortu prije proslave!",
          options: ["jesti", "jedi", "jedeš"],
          correctIndex: 0,
          explanation: "nemoj + INFINITIVE: nemoj jesti.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Božić je dvadeset petog ___. (prosinac)",
          blanks: [["prosinca"]],
          translation: "Christmas is on December 25th.",
          explanation: "Date = GEN, fleeting a out: prosinca.",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "Dođite na proslavu!",
          explanation: "Dođite na proslavu! — come to the party (Vi).",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "Proslava je petog svibnja.",
          explanation: "Proslava je petog svibnja — the party is on May 5th.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen: what must you NOT do?",
          tts: "Nemoj otvoriti pećnicu!",
          options: ["open the oven", "eat the cake", "stir the batter"],
          correctIndex: 0,
          explanation: "Nemoj otvoriti pećnicu! — don't open the oven.",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen: which occasion is being celebrated?",
          tts: "Sretna Nova godina! Živjeli!",
          options: ["New Year", "Christmas", "a birthday"],
          correctIndex: 0,
          explanation: "Sretna Nova godina — New Year (feminine agreement!).",
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
            "»Draga Ana! U subotu slavimo bakin rođendan. Proslava je petog svibnja u sedam sati, kod bake Marije. Dođi i donesi glazbu! Proslava je iznenađenje — nemoj govoriti baki!«\n\nKada je proslava? (When is the party?)",
          options: ["petog svibnja u sedam sati", "u petak u sedam sati", "petog prosinca"],
          correctIndex: 0,
          explanation: "»Proslava je petog svibnja u sedam sati.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Gdje je proslava? (Where is the party?)",
          options: ["kod bake Marije", "kod Ane", "u restoranu"],
          correctIndex: 0,
          explanation: "»kod bake Marije« — kod + GEN (U9).",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same text: Što Ana mora donijeti? (What must Ana bring?)",
          options: ["glazbu", "tortu", "balone"],
          correctIndex: 0,
          explanation: "»Dođi i donesi glazbu!«",
        },
      ],
    },
  ],
};
