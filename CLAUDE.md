# CLAUDE.md — Operating manual for building CroLearn

CroLearn is a local-first Croatian course app (0 → B2+) for one learner (Noah): slide-deck lessons with embedded quizzes, FSRS review, stories, notes, tests, and AI tutor/grading via the Anthropic API from the browser.

## Golden rules

1. **`curriculum/` is the source of truth.** Never author or edit lesson/story/test/notes content that deviates from `curriculum/00-master-roadmap.md` (what is taught when), `curriculum/01-teaching-method.md` (lesson anatomy, visuals mandate, spec templates), `curriculum/grammar-reference.md` (ground-truth Croatian forms), and the relevant unit spec. If a change seems needed, update the curriculum doc first (ask Noah if it changes the syllabus), then the content.
2. **Never violate the grammar sequence.** Case order NOM→ACC→LOC→GEN→DAT→INS→VOC; content for unit N may only use grammar/vocab taught through unit N.
3. **Croatian correctness is non-negotiable.** Standard Croatian, ijekavian, diacritics always correct in content. Verify every case ending, verb form, and clitic position against `curriculum/grammar-reference.md` — prefer the table over intuition.
4. **The app must always work offline with no API key** — only the three AI features (tutor, free-form grading, exercise generation) may require one. Never hardcode or log the key.
5. **Instruction language is ENGLISH.** The learner starts from zero: all UI chrome, buttons, feedback, and exercise instructions are English. Croatian appears only as the content being learned, or as instruction phrases explicitly taught in an earlier lesson (glossed on first reuse). A1–A2 test/reading questions in simple taught Croatian must carry an English gloss. (A B1+ "Croatian UI" immersion toggle is a future option — never before B1.)

## Before you start any task

- Content authoring for unit N → read: the roadmap's unit N row, `curriculum/<LEVEL>/unit-N.md`, teaching-method §2/§4/§7/§8, the relevant grammar-reference sections, and the exemplar content in `src/content/a1/u1/` (once it exists). Follow teaching-method §10 pipeline.
- App code → check `src/types/content.ts` first; it is the contract everything hangs off.
- New slide type → exactly: one type variant + one component + one grader; `SlideRenderer` stays a single switch on `slide.type`.

## Workflows

### After ANY content change
```
npm run validate:content            # Zod structural validation — must pass before you're done
npm run proofread -- <unitId>       # AI native-Croatian proofread (a1u3 … a1u8)
npm run proofread -- a1checkpoint   # checkpoint exams are supported too
```
The proofread pass (teaching-method §10) sends the unit's/checkpoint's Croatian to a "pedantic native Croatian proofreader" and exits 1 if it reports any ERROR. It reads `ANTHROPIC_API_KEY` from the **process env** (never the app's localStorage; on Windows persist it at User scope with `[Environment]::SetEnvironmentVariable('ANTHROPIC_API_KEY',…,'User')` so freshly-spawned tool shells inherit it). Fix every real error — each verified against `curriculum/grammar-reference.md` — before merging. `WARNING`/`STYLE` notes flagging "preview of a later unit" are **not** errors: leave deliberate recycled/glossed chunks alone (that decision belongs to the unit spec, not the proofreader).

### After code changes
```
npm test        # Vitest — graders, normalizer, SRS wrapper must stay green
npm run dev     # verify the touched flow in the browser before calling it done
```

### Definition of done for a new unit's content
Lesson files + NotesDocs + story + unit test all exist → validate:content passes → proofread pass clean → lesson completes end-to-end in the browser → cards seed into review.

## Conventions

- **Stack:** Vite + React 19 + TypeScript strict + Tailwind · react-router HashRouter · plain React state (no global store) · Dexie/IndexedDB (`cards`, `reviewLog`, `lessonProgress`, `storyProgress`, `testResults`, `tutorSessions`, `errorReports`) · localStorage for settings + API key only · `ts-fsrs` (4-button, retention 0.90, keep full review log)
- **AI:** `@anthropic-ai/sdk`, `dangerouslyAllowBrowser: true` (single-user local app — do not add a proxy). Default model `claude-opus-4-8`, user-selectable in Settings. Tutor = streaming + prompt caching; grading & generation = structured outputs against the same Zod schemas as static content.
- **Content files:** one TS lesson file per lesson in `src/content/<level>/<unit>/`, plus a companion NotesDoc; typed by `src/types/content.ts`. Keep files small enough to review one at a time.
- **Visuals:** use the fixed case colors and required diagrams from teaching-method §4 everywhere; diagrams are structured specs (SVG/Mermaid data), never prose descriptions.
- **Stories:** recurring cast (Tom, Ana, Marko, baka Marija); length caps per level; ≤5 glossed new words.

## Gotchas

- Diacritic tolerance is a **grader setting** for learner input, never a content shortcut — content always has correct č ć đ š ž.
- Clitics: second position; `je` last in the cluster; `se + je` → drop `je` (Zvao se Marko).
- Future I spelling: `pisat ću` (drop -i of -ti) but `doći ću`.
- Means of transport = bare INS (`vlakom`), no `s`.
- TTS voices load async (`speechSynthesis.getVoices()` workaround required); best Croatian voice is on Edge — keep the diagnostics banner working.
- `.gitignore` must keep any local key/config files out if this repo is ever committed.

## Phases

Phase 0 curriculum docs (done → get Noah's sign-off) → Phase 1 app core + hand-reviewed A1 Unit 1 → Phase 2 AI features + generate rest of A1 → Phase 3 tutor + A2 → Phase 4 B1/B2 + writing. Build content strictly in course order; the app must stay usable at every stage. When a phase completes, confirm with Noah before starting the next.
