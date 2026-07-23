import type { UnitTest } from "@/types/content";

/**
 * A1 U2 unit test (spec: curriculum/A1/unit-2.md blueprint).
 * 18 items · 4 sections · no hints · pass ≥ 70%.
 */
export const a1u2test: UnitTest = {
  id: "a1u2t",
  unitId: "a1u2",
  title: "Test — Ja sam iz…",
  passPct: 70,
  sections: [
    {
      title: "Riječi (Vocabulary)",
      slides: [
        {
          id: "s01",
          type: "match",
          prompt: "Match the profession to English",
          pairs: [
            { a: "učitelj", b: "teacher (m)" },
            { a: "liječnica", b: "doctor (f)" },
            { a: "konobar", b: "waiter" },
            { a: "kuharica", b: "cook (f)" },
          ],
        },
        {
          id: "s02",
          type: "match",
          prompt: "Match the profession to English",
          pairs: [
            { a: "inženjer", b: "engineer (m)" },
            { a: "učiteljica", b: "teacher (f)" },
            { a: "liječnik", b: "doctor (m)" },
            { a: "konobarica", b: "waitress" },
          ],
        },
        {
          id: "s03",
          type: "mc",
          prompt: "A Hrvatica is a woman from…",
          options: ["Hrvatska", "Njemačka", "Amerika"],
          correctIndex: 0,
          explanation: "Hrvatica = a Croatian woman, from Hrvatska.",
        },
        {
          id: "s04",
          type: "mc",
          prompt: "A Nijemac is a man from…",
          options: ["Njemačka", "Engleska", "Francuska"],
          correctIndex: 0,
          explanation: "Nijemac = a German man, from Njemačka.",
        },
        {
          id: "s05",
          type: "mc",
          prompt: "šesnaest = ?",
          options: ["16", "6", "17"],
          correctIndex: 0,
          explanation: "šesnaest = 16 (šest = 6, sedamnaest = 17).",
        },
      ],
    },
    {
      title: "Gramatika (Grammar)",
      slides: [
        {
          id: "s06",
          type: "fill",
          text: "Mi ___ iz Engleske.",
          blanks: [["nismo"]],
          translation: "We are not from England.",
          explanation: "mi → nismo (fused negative of biti).",
        },
        {
          id: "s07",
          type: "fill",
          text: "Ona ___ Hrvatica — ona je Njemica.",
          blanks: [["nije"]],
          translation: "She is not a Croat — she is a German.",
          explanation: "ona → nije.",
        },
        {
          id: "s08",
          type: "reorder",
          words: ["Jesi", "li", "ti", "liječnica"],
          answers: ["Jesi li ti liječnica?", "Jesi li ti liječnica"],
          en: "Are you a doctor? (to a woman)",
          explanation: "Stressed form first, li glued right behind: Jesi li ti…?",
        },
        {
          id: "s09",
          type: "fill",
          text: "Kava je ___. (good)",
          blanks: [["dobra"]],
          translation: "The coffee is good.",
          explanation: "kava is feminine → dobra.",
        },
        {
          id: "s10",
          type: "type",
          prompt: "Translate: “She is a good teacher.”",
          answers: ["Ona je dobra učiteljica.", "Ona je dobra učiteljica"],
          explanation: "Feminine noun učiteljica → feminine adjective dobra.",
        },
        {
          id: "s11",
          type: "fill",
          text: "Oni ___ hrvatski.",
          blanks: [["govore"]],
          translation: "They speak Croatian.",
          explanation: "oni → govore (-e ending).",
        },
      ],
    },
    {
      title: "Slušanje (Listening)",
      slides: [
        {
          id: "s12",
          type: "listen-type",
          tts: "petnaest",
          explanation: "petnaest = 15.",
        },
        {
          id: "s13",
          type: "listen-type",
          tts: "osam",
          explanation: "osam = 8.",
        },
        {
          id: "s14",
          type: "mc",
          prompt: "Listen. What is he saying?",
          tts: "Nisam Nijemac, Englez sam.",
          options: [
            "I'm not German — I'm English",
            "I'm not English — I'm German",
            "I'm German and English",
          ],
          correctIndex: 0,
          explanation: "Nisam Nijemac (not a German), Englez sam (I'm an Englishman).",
        },
        {
          id: "s15",
          type: "mc",
          prompt: "Listen. What does it mean?",
          tts: "Govorim malo hrvatski.",
          options: [
            "I speak a little Croatian",
            "I don't speak Croatian",
            "I speak Croatian very well",
          ],
          correctIndex: 0,
          explanation: "govorim = I speak, malo = a little.",
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
            "»Dobar dan! Jeste li vi iz Hrvatske?« — »Nisam, iz Amerike sam. Amerikanka sam.« — »Jeste li učiteljica?« — »Nisam — liječnica sam. Govorim engleski i malo hrvatski.«\n\nOdakle je žena? (Where is the woman from?)",
          options: ["iz Amerike", "iz Hrvatske", "iz Engleske"],
          correctIndex: 0,
          explanation: "»Iz Amerike sam. Amerikanka sam.«",
        },
        {
          id: "s17",
          type: "mc",
          prompt: "Same dialogue: Što je ona? (What is her profession?)",
          options: ["liječnica", "učiteljica", "konobarica"],
          correctIndex: 0,
          explanation: "»Nisam — liječnica sam.« — she's a doctor, not a teacher.",
        },
        {
          id: "s18",
          type: "mc",
          prompt: "Same dialogue: Što ona govori? (What does she speak?)",
          options: ["engleski i malo hrvatski", "njemački i hrvatski", "francuski"],
          correctIndex: 0,
          explanation: "»Govorim engleski i malo hrvatski.«",
        },
      ],
    },
  ],
};
