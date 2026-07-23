import type { Story } from "@/types/content";

/**
 * A1 U3 story — «Velika obitelj» (spec: curriculum/A1/unit-3.md).
 * Unit-3 language only: NOM, possessives (moj/njezin…), NOM plurals,
 * imati + chunk objects. ≤5 glossed words. ~110 words.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated, NOT yet proofread.
 */
export const a1u3story: Story = {
  id: "a1u3s",
  unitId: "a1u3",
  title: "Velika obitelj",
  titleEn: "A big family",
  glossary: [
    { word: "fotografija", gloss: "photo" },
    { word: "zajedno", gloss: "together" },
    { word: "slatka", gloss: "cute (f)" },
    { word: "samo", gloss: "only" },
  ],
  paragraphs: [
    {
      hr: "Jutro je. Tom i Ana su zajedno. Ana ima fotografiju. »Tom, to je moja obitelj!«",
      en: "It's morning. Tom and Ana are together. Ana has a photo. \"Tom, this is my family!\"",
    },
    {
      hr: "»To su moji roditelji. To je moj brat — on je visok i mlad.« — »A tko je to?« — »To je moja baka, baka Marija. Ona je iz Slavonije.«",
      en: "\"These are my parents. This is my brother — he is tall and young.\" — \"And who is that?\" — \"That is my grandma, grandma Marija. She is from Slavonia.\"",
    },
    {
      hr: "»Baka Marija je stara, ali jako dobra. Ona ima mačku.« Mačka je mala i slatka.",
      en: "\"Grandma Marija is old, but very kind. She has a cat.\" The cat is small and cute.",
    },
    {
      hr: "Tom: »Ja imam samo sestru. I ona je Kanađanka. Ali nemam psa i nemam mačku.«",
      en: "Tom: \"I have only a sister. She is also Canadian. But I don't have a dog and I don't have a cat.\"",
    },
    {
      hr: "Ana: »Moja obitelj je velika, a tvoja je mala!« Tom: »Da, ali moja sestra je jako dobra!« Tom je sretan.",
      en: "Ana: \"My family is big, and yours is small!\" Tom: \"Yes, but my sister is really great!\" Tom is happy.",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Čija je baka Marija? (Whose grandma is Marija?)",
      options: ["Ana's", "Tom's", "Marko's"],
      correctIndex: 0,
      explanation: "»To je moja baka« — Ana is showing HER family, so Marija is Ana's grandma.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Odakle je baka Marija? (Where is grandma Marija from?)",
      options: ["iz Slavonije", "iz Zagreba", "iz Kanade"],
      correctIndex: 0,
      explanation: "»Ona je iz Slavonije.«",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Ima li Tom psa? (Does Tom have a dog?)",
      options: ["Ne, nema psa.", "Da, ima psa.", "Ima mačku."],
      correctIndex: 0,
      explanation: "»Nemam psa i nemam mačku.« — Tom has neither.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Je li Anin brat visok? (Is Ana's brother tall?)",
      options: ["Da, visok je.", "Ne, nizak je.", "On je star."],
      correctIndex: 0,
      explanation: "»To je moj brat — on je visok i mlad.«",
    },
  ],
};
