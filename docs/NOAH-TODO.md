# CroLearn — overnight build log & handoff

_Autonomous Cowork session, night of 2026-07-21→22._

## ✅ Done & VERIFIED (validate:content + build + tests all green)

### 1. Vocab images — all 37, uniform cartoon style, background removed
- One locked cartoon style via ChatGPT; backgrounds removed → **transparent PNGs**
  (people/objects/landmarks cleanly cut out; džep, hrvatska, ucitelj kept full —
  no uniform bg). In `public/img/*.png` **and** `public/img/ai-generated/*.png`;
  old `.jpg` removed; content refs repointed `.jpg → .png`.
- `StaticSlides.tsx`: card image `object-cover → object-contain`.
- Added `scripts/remove-bg.py` (reusable); updated `docs/image-generation-guide.md`
  and `docs/chatgpt-paste-list.md` to the cartoon + bg-removal workflow.

### 2. AI Tutor (Phase 3 feature — was missing)
- `src/lib/claude.ts`: `streamTutor()` — streaming, prompt-cached system prompt,
  ijekavian, English-instruction, level-aware (`learnerLevelContext()`).
- `src/pages/TutorPage.tsx`: streaming chat, Dexie `tutorSessions` persistence,
  graceful no-key state, starter prompts. Wired to `/tutor` route + "🗣️ Tutor" tab.

### 3. Proofread pass (teaching-method §10)
- `src/lib/claude.ts`: `proofreadCroatian()` (structured findings).
- `scripts/proofread.ts` + `npm run proofread -- <unitId>` (reads
  `ANTHROPIC_API_KEY` from env; NOT the app's localStorage key).

### 4. A1 Unit 3 "Moja obitelj" — AUTHORED (draft, structurally validated)
- `src/content/a1/u3/` : l1–l5 + story + test + index, **registered** in the
  content registry. `validate:content` now passes **15 lessons**.
- Coverage per spec: L1 moj/tvoj/naš + agreement · L2 njegov/njezin/njihov + čiji
  · L3 NOM plural + braća/djeca/ljudi · L4 imati + chunk objects · L5 describing
  people + unit review. Story «Velika obitelj» + 18-item test.
- Every form authored against `curriculum/grammar-reference.md`; each lesson passes
  the Zod schema AND the §2 content contract with zero issues.
- ⚠️ **DRAFT — NOT yet proofread.** Do this first:
  `$env:ANTHROPIC_API_KEY="sk-ant-…"; npm run proofread -- a1u3` and read the
  findings. Vocab is **emoji-only** (no images yet) — generate the ~19 family/pet
  pictures through the cartoon→cutout pipeline when you want them.

_(gradeFreeForm + generateExercises were already built before tonight.)_

## ⏳ SAVED FOR YOU
1. **Proofread A1 Unit 3** (`npm run proofread -- a1u3`) and review the Croatian.
2. **Images for Unit 3 vocab** (family/pets) — optional; emoji works meanwhile.
3. **A1 U4–U8, A2, B1, B2** — specs exist; same pipeline, in course order. This is
   multi-session work (each unit = 5 lessons + story + test + ~40 images + proofread).
4. Optional: delete `public/img/CREDITS.md` + leftover replaced photos.
5. Optional: surface `generateExercises()`/`gradeFreeForm()` in the lesson UI.

## Why the content is flagged DRAFT
Croatian correctness is the one thing this app can't get wrong, and the repo
mandates a native proofread pass. I authored Unit 3 carefully against the grammar
reference and validated it structurally, but I couldn't run the proofread pass
while you were away (no API key). Treat it as a strong first draft to review, not
finished content.

## Resume fastest
```
cd CroLearn
npm run build ; npm run validate:content ; npm test   # all green
npm run proofread -- a1u3                              # needs your API key in env
npm run dev                                            # 🗣️ Tutor tab needs the key in Settings
```
