import type { Story } from "@/types/content";

/**
 * B1 U19 story — «Grad ili selo?» (~330 words)
 * Spec: curriculum/B1/unit-19.md § Story.
 *
 * ⚠️ DRAFT — authored autonomously; structurally validated but NOT yet run
 * through the native proofread pass.
 *
 * The story is a **case parade**: every paragraph carries `koji` in the case the
 * matching lesson taught, in lesson order.
 *   P1 Tom + Ana   — NOM          ← L1  (koji as the subject of its own clause)
 *   P2 Marko       — ACC and GEN  ← L2  (+ iz + GEN)
 *   P3 the traffic — LOC          ← L3  (o + LOC, u + LOC ×2)
 *   P4 Tom         — INS          ← L4  (s + INS, sg and pl)
 *   P5 baka Marija — plural       ← L4  (ACC pl off a LOC pl antecedent)
 *
 * Every relative clause, with the two-questions audit written out. Gender and
 * number come from the antecedent; the CASE comes from the clause's own verb or
 * preposition. Nine of the ten pairs deliberately disagree in ending, so no
 * clause is solvable by copying the antecedent:
 *   1. prijatelja (ACC m sg) → koji        — subject of `ide`            → NOM m sg
 *   2. Ljudi (NOM pl)        → koji        — subject of `žive`           → NOM pl
 *   3. Gosti (NOM pl)        → koje        — object of `volim`           → ACC pl
 *   4. Selo (NOM n sg)       → iz kojeg    — `iz` +                      → GEN n sg
 *   5. problem (NOM m sg)    → o kojem     — `govoriti o` +              → LOC m sg
 *   6. grad (NOM m sg)       → u kojem     — `živjeti u` +               → LOC m sg
 *   7. Ulica (NOM f sg)      → u kojoj     — `biti u` +                  → LOC f sg
 *   8. ljudi (NOM pl)        → s kojima    — `raditi s` +                → INS pl
 *   9. osoba (NOM f sg)      → s kojom     — `učiti s` +                 → INS f sg
 *  10. ljudima (LOC pl)      → koje        — object of `poznavala`       → ACC pl
 *
 * Authoring guards honoured verbatim from the spec:
 *  • **No impersonal or passive `se`** (that is U20) — the story contains no
 *    `se` at all. Verified by grep.
 *  • **No reported speech** (U21): direct quotes only, and opinions are framed
 *    in the speaker's own voice (»Mislim o ljudima…«), never »Rekla je da…«.
 *  • Reasons take **jer** — one only, »…jer je stan u gradu skup.« No `zbog`,
 *    no `zato što`.
 *  • No `čiji`, no `ono što` / `sve što`.
 *  • `tako` is carded in L5, so it may appear here — it does not, because it
 *    was not needed.
 *  • The last line is an **opinion, not a resolution**: baka reframes the
 *    question instead of answering it, and nobody at the table agrees.
 *
 * Level-compliance pass 2026-07-29: every content word greped against the
 * carded headword index before it was allowed in. Rejected and replaced:
 * braniti (→ »Ljudi koji žive u gradu imaju sve«), pitati (→ govori),
 * razgovarati, sjediti, stajati, cesta, tih/tiho, čist, opet, brzo, kroz,
 * nitko, isti, obje, sljedeći, šutjeti, gotov, dućan, vrt, pun.
 *
 * The five glossed words are the spec's five, all confirmed absent from the
 * carded headword index: mir, buka, gužva, miran, dosadan. (`dosadno`, the
 * adverb, IS carded — a1u8 L5 — so the story shows the masculine adjective
 * `dosadan` explicitly, which is the form that hides a fleeting a.)
 */
export const b1u19story: Story = {
  id: "b1u19s",
  unitId: "b1u19",
  title: "Grad ili selo?",
  titleEn: "City or village?",
  glossary: [
    { word: "mir", gloss: "peace, quiet — na selu je mir" },
    { word: "buka", gloss: "noise (f) — GEN buke, nema buke" },
    { word: "gužva", gloss: "crowd, rush, jam (f) — GEN gužve" },
    { word: "miran", gloss: "calm, quiet (mirna, mirno)" },
    { word: "dosadan", gloss: "boring (dosadna — the a falls out: dosadna, dosadno)" },
  ],
  paragraphs: [
    {
      // koji ×2 — both NOMINATIVE (L1): each one is the subject of its own verb.
      // «prijatelja» is accusative out in Tom's sentence, but inside the clause
      // the friend is the one doing the leaving.
      hr: "Nedjelja je. Cijela obitelj je kod bake Marije: Tom, Ana i Marko. Ručak je bio dobar, a sada je na stolu kava. »Imam prijatelja koji za mjesec dana ide iz Zagreba«, govori Tom. »Kupio je malu kuću na selu, jer je stan u gradu skup.« »Ja ga ne razumijem«, govori Ana. »Ljudi koji žive u gradu imaju sve: posao, fakultet, kazalište, park. Na selu nema posla.«",
      en: "It's Sunday. The whole family is at grandma Marija's: Tom, Ana and Marko. Lunch was good, and now there's coffee on the table. \"I have a friend who's leaving Zagreb in a month,\" says Tom. \"He bought a small house in the village, because a flat in the city is expensive.\" \"I don't understand him,\" says Ana. \"People who live in the city have everything: work, a university, a theatre, a park. In the village there's no work.\"",
    },
    {
      // koje — ACCUSATIVE plural (L2): the guests are the object of «volim».
      // iz kojeg — GENITIVE (L2/§17): «iz» takes the genitive, and «selo» is
      // neuter singular, so kojeg.
      hr: "Marko cijeli tjedan radi u restoranu, pa on gleda drugu stranu. »Gosti koje najviše volim dolaze sa sela«, govori Marko. »Oni imaju vremena i vole govoriti. Selo iz kojeg su moji roditelji je malo, ali tamo svi znaju sve. Na selu je kuća jeftina, a ovdje je stan skup: moji roditelji imaju veliku kuću, a ja imam mali stan. Ja bih sutra otišao iz Zagreba. I zrak je tamo bolji.«",
      en: "Marko works in the restaurant all week, so he sees the other side. \"The guests I like best come in from villages,\" says Marko. \"They have time, and they like to talk. The village my parents are from is small, but everyone there knows everything. In the village a house is cheap, and here a flat is expensive: my parents have a big house, and I have a small flat. I'd leave Zagreb tomorrow. And the air is better there.\"",
    },
    {
      // o kojem / u kojem / u kojoj — all LOCATIVE (L3). The preposition stands
      // in FRONT of koji every time: govoriti o, živjeti u, biti u.
      hr: "»A promet?« govori Ana. »Ti svaki dan čekaš u autu.« »Da«, govori Marko. »Promet je problem o kojem svi u Zagrebu govore. Ujutro čekam pola sata, navečer još pola sata. Promet, buka, gužva — to je moj dan.« »Promet je nedostatak, to je istina«, govori Ana. »Ali grad u kojem živim ima kazalište, fakultet i park. Ulica u kojoj je moj stan je mirna, i tamo nema buke.«",
      en: "\"And the traffic?\" says Ana. \"You wait in the car every day.\" \"Yes,\" says Marko. \"The traffic is a problem everyone in Zagreb talks about. In the morning I wait half an hour, in the evening another half hour. Traffic, noise, crowds — that's my day.\" \"The traffic is a drawback, that's true,\" says Ana. \"But the city I live in has a theatre, a university and a park. The street my flat is on is quiet, and there's no noise there.\"",
    },
    {
      // s kojima — INSTRUMENTAL plural (L4); s kojom — INSTRUMENTAL feminine
      // singular. Both are company, so «s» appears. Gender still comes from the
      // antecedent even when the case does not.
      hr: "Tom sluša i pije kavu. »S jedne strane, razumijem Marka«, govori Tom. »Na selu je mir i nema gužve. S druge strane, ljudi s kojima radim su ovdje, u gradu. Ana je osoba s kojom svaki tjedan učim hrvatski. Iako je selo mirno, za mene bi život na selu bio dosadan. Zaključak je jasan: ja sam za grad — ali razumijem i Marka.«",
      en: "Tom listens and drinks his coffee. \"On one hand, I understand Marko,\" says Tom. \"In the village there's peace and there's no crowding. On the other hand, the people I work with are here, in the city. Ana is the person I study Croatian with every week. Although the village is quiet, for me life in the village would be boring. The conclusion is clear: I'm for the city — but I understand Marko too.\"",
    },
    {
      // koje — ACCUSATIVE plural (L4) off a LOCATIVE plural antecedent
      // («o ljudima»): the two endings disagree, and that is the whole point.
      hr: "Baka Marija sluša i ne govori ništa. Onda pije kavu i gleda Marka. »Ja sam živjela i u gradu i na selu«, govori baka Marija. »Ne mislim o selu. Mislim o ljudima koje sam poznavala. Njih više nema — ni u gradu ni na selu.« Svi je gledaju. »Grad ili selo, to nije dobro pitanje«, govori baka Marija. »Pitanje je s kim ćeš tamo piti kavu.«",
      en: "Grandma Marija listens and says nothing. Then she drinks her coffee and looks at Marko. \"I've lived both in the city and in the village,\" says grandma Marija. \"I don't think about the village. I think about the people I knew. They're gone — neither in the city nor in the village.\" Everyone looks at her. \"City or village, that isn't the right question,\" says grandma Marija. \"The question is who you'll be drinking coffee with there.\"",
    },
  ],
  questions: [
    {
      id: "s01",
      type: "mc",
      prompt: "Tko misli da je grad bolji? (Who thinks the city is better?)",
      options: ["Ana.", "Marko.", "Baka Marija.", "Tomov prijatelj."],
      correctIndex: 0,
      explanation:
        "»Ljudi koji žive u gradu imaju sve… Ali grad u kojem živim ima kazalište, fakultet i park.« Ana is the one defending the city from the first paragraph to the third. Tom half-agrees with her at the end, but he is not the one who opens the case.",
    },
    {
      id: "s02",
      type: "mc",
      prompt: "Zašto bi Marko otišao iz Zagreba? (Why would Marko leave Zagreb?)",
      options: [
        "Jer svaki dan čeka u prometu.",
        "Jer u gradu nema posla.",
        "Jer njegovi roditelji žive u Zagrebu.",
        "Jer je stan na selu skup.",
      ],
      correctIndex: 0,
      explanation:
        "»Ujutro čekam pola sata, navečer još pola sata. Promet, buka, gužva — to je moj dan.« The traffic is his reason, and Croatian gives reasons with jer. Careful with the third option: his parents are from the village, not from Zagreb.",
    },
    {
      id: "s03",
      type: "mc",
      prompt: "Što Tom misli o gradu i o selu? (What does Tom think about the city and the village?)",
      options: [
        "Razumije i grad i selo, ali on je za grad.",
        "Misli da je selo bolje od grada.",
        "Misli da je promet dobar.",
        "Ne zna ništa o selu.",
      ],
      correctIndex: 0,
      explanation:
        "Tom does the L5 move in full: »S jedne strane, razumijem Marka… S druge strane, ljudi s kojima radim su ovdje.« He concedes first (iako je selo mirno) and only then states his position: »ja sam za grad«.",
    },
    {
      id: "s04",
      type: "mc",
      prompt: "Gdje je baka Marija živjela? (Where has grandma Marija lived?)",
      options: [
        "I u gradu i na selu.",
        "Samo na selu.",
        "Samo u gradu.",
        "U Zagrebu i u Kanadi.",
      ],
      correctIndex: 0,
      explanation: "»Ja sam živjela i u gradu i na selu.« The i… i… frame means both, not either — which is why her opinion carries weight at that table.",
    },
    {
      id: "s05",
      type: "mc",
      prompt: "O čemu baka Marija misli? (What is grandma Marija thinking about?)",
      options: [
        "O ljudima koje je poznavala.",
        "O selu i o kući.",
        "O prometu u Zagrebu.",
        "O kavi i o ručku.",
      ],
      correctIndex: 0,
      explanation:
        "»Ne mislim o selu. Mislim o ljudima koje sam poznavala.« Two things at once: misliti takes o + LOKATIV (so o čemu?, o ljudima), and inside the clause the people are the OBJECT of poznavala, so koje — accusative plural, even though the antecedent ljudima is locative.",
    },
  ],
};
