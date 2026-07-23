import type { UnitTest } from "@/types/content";

/**
 * A1 U6 unit test (spec: curriculum/A1/unit-6.md blueprint).
 * 17 items · 4 sections (vocab → grammar → listening → reading) · no hints · pass ≥ 70%.
 * Only tests points drilled ≥2× in L1–L5.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u6test: UnitTest = {
  id: "a1u6t",
  unitId: "a1u6",
  title: "Test — Moj dan",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the day to English",
          pairs: [
            { a: "ponedjeljak", b: "Monday" },
            { a: "srijeda", b: "Wednesday" },
            { a: "petak", b: "Friday" },
            { a: "subota", b: "Saturday" },
            { a: "nedjelja", b: "Sunday" },
          ],
        },
        {
          id: "s02",
          type: "mc",
          prompt: "budim se = ?",
          options: ["I wake up", "I get dressed", "I rest"],
          correctIndex: 0,
          explanation: "buditi se = to wake up.",
        },
        {
          id: "s03",
          type: "mc",
          prompt: "tuširam se = ?",
          options: ["I shower", "I sleep", "I have breakfast"],
          correctIndex: 0,
          explanation: "tuširati se = to shower.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "nikad = ?",
          options: ["never", "always", "sometimes"],
          correctIndex: 0,
          explanation: "nikad = never (uvijek = always, ponekad = sometimes).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s05",
          type: "reorder",
          words: ["budi", "se", "Ana", "rano"],
          answers: ["Ana se budi rano.", "Ana se budi rano"],
          en: "Ana wakes up early.",
          explanation: "Ana first → se second: Ana se budi rano.",
        },
        {
          id: "s06",
          type: "reorder",
          words: ["se", "Tom", "oblači"],
          answers: ["Tom se oblači.", "Tom se oblači"],
          en: "Tom gets dressed.",
          explanation: "Tom first → se second: Tom se oblači.",
        },
        {
          id: "s07",
          type: "fill",
          text: "Gledam ___. (film — plural)",
          blanks: [["filmove"]],
          translation: "I watch films.",
          explanation: "Masculine ACC plural → -e: filmove.",
        },
        {
          id: "s08",
          type: "fill",
          text: "Slušam ___. (pjesma — plural)",
          blanks: [["pjesme"]],
          translation: "I listen to songs.",
          explanation: "Feminine ACC plural = NOM plural: pjesme.",
        },
        {
          id: "s09",
          type: "fill",
          text: "U ___ učim hrvatski. (srijeda)",
          blanks: [["srijedu"]],
          translation: "On Wednesday I study Croatian.",
          explanation: "»on a day« = u + ACC; srijeda → u srijedu.",
        },
        {
          id: "s10",
          type: "mc",
          prompt: "Nikad ___ pijem kavu navečer. (never)",
          options: ["ne", "se", "je"],
          correctIndex: 0,
          explanation: "nikad requires the double negative: Nikad ne pijem…",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s11",
          type: "listen-type",
          tts: "Sedam je sati.",
          answers: ["Sedam je sati.", "Sedam je sati", "7:00", "7"],
          explanation: "Sedam je sati = it's 7 o'clock.",
        },
        {
          id: "s12",
          type: "listen-type",
          tts: "Budim se u pola osam.",
          answers: ["Budim se u pola osam.", "Budim se u pola osam", "7:30"],
          explanation: "u pola osam = at 7:30 (half TO eight — the pola trap!).",
        },
        {
          id: "s13",
          type: "mc",
          prompt: "Listen. What does it mean?",
          tts: "Nikad ne učim navečer.",
          options: ["I never study in the evening", "I always study in the evening", "I study every day"],
          correctIndex: 0,
          explanation: "nikad ne = never; navečer = in the evening.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen. What does she like?",
          tts: "Voli filmove i serije.",
          options: ["films and series", "songs and news", "sport and books"],
          correctIndex: 0,
          explanation: "filmove i serije = films and series (ACC plural).",
        },
      ],
    },
    {
      title: "Čitanje (Reading)",
      slides: [
        {
          id: "s15",
          type: "mc",
          prompt:
            "Ana se budi u pola sedam. Prvo se tušira, zatim doručkuje. U ponedjeljak ide na posao. Navečer gleda serije i ide spavati u jedanaest.\n\nKada se Ana budi? (When does Ana wake up?)",
          options: ["u pola sedam", "u sedam", "u pet"],
          correctIndex: 0,
          explanation: "»Ana se budi u pola sedam.« — at 6:30.",
        },
        {
          id: "s16",
          type: "mc",
          prompt: "Same text: Što Ana radi prvo? (What does Ana do first?)",
          options: ["tušira se", "doručkuje", "gleda serije"],
          correctIndex: 0,
          explanation: "»Prvo se tušira, zatim doručkuje.« — first she showers.",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same text: Kada Ana ide na posao? (When does Ana go to work?)",
          options: ["u ponedjeljak", "u subotu", "u nedjelju"],
          correctIndex: 0,
          explanation: "»U ponedjeljak ide na posao.« — on Monday.",
        },
      ],
    },
  ],
};
