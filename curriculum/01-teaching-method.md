# CroLearn Teaching Method — The Learning-Science Playbook

How every lesson, note, story, and test in CroLearn is built. Companion to [00-master-roadmap.md](00-master-roadmap.md) (what is taught when) and [grammar-reference.md](grammar-reference.md) (ground-truth forms).

## 1. Principles (and where each shows up)

| Principle | Evidence base | Where it lives in CroLearn |
|---|---|---|
| Active recall / retrieval practice | Testing beats re-reading (Roediger & Karpicke) | Quiz slides interleaved INSIDE lessons; wrong answers replayed at deck end until correct |
| Spaced repetition | Forgetting curve; FSRS ≈ 25% fewer reviews than SM-2 | Every lesson seeds FSRS cards; daily review session is step ① of the guided flow |
| Immediate corrective feedback | Errors corrected at the moment of commission stick | Every quiz slide → instant feedback panel: correct answer + one-line why |
| Interleaving | Mixed practice beats blocked practice | Every lesson's quiz set includes 2–3 items from EARLIER units; review mixes card kinds |
| Comprehensible input (i+1) | Krashen; extensive reading research | One graded story per unit, ~95% known vocab, ≤5 glossed new words |
| Testing effect + low-stakes assessment | Frequent low-stakes testing consolidates | Unit tests after every unit; checkpoint exams per level; soft-gated |
| Progressive overload | Cognitive load theory | ONE grammar micro-point per lesson; one case at a time; each recycled ≥2 units |
| Dual coding (verbal + visual) | Paivio; multimedia learning (Mayer) | The visuals mandate (§4): tables, color-coded endings, diagrams on every teachable concept |
| Production practice | Output hypothesis (Swain) | Speak slides, type-answer production cards, writing tasks (B1+), AI tutor conversation |
| Desirable difficulty | Bjork | Production before recognition feels harder and is; diacritic-strict content with tolerant grading |

## 2. Lesson anatomy (every lesson, every level)

A lesson = **15–20 minutes**, one grammar micro-point, ~8 new vocab items. Slide count is NOT a goal — teaching interactions are.

**Classroom-slide principle.** Slides are dense like a good teacher's deck, not atomized like flashcards:
- A **teach slide carries the whole presentation of its point**: rule (minimal prose) + table/diagram + 2–5 worked examples WITH TTS, together on one slide. Standalone example slides are for big example sets only.
- Rapid recognition checks go in **quiz-set batteries**: 2–4 short questions on ONE slide, answered together, checked together (worksheet-style). Never a run of single-MC slides.
- **Activities keep their own slide** — dictation (listen-type), speaking, sentence-building (reorder), matching, fill-with-word-bank — because they need focus and space.
- Quality is measured in **interactions** (a quiz-set of 4 = 4 interactions), enforced by the validator.

**Sections — the book-chapter structure.** Every lesson is split into **3–4 named parts**, and every part opens with a **section-overview slide**: a visual "what's inside" spread (big emoji, one-line motivator, 2–6 icon-chip entries — like a book's chapter opener/appendix), never paragraphs. The lesson itself opens with a **lesson-menu section slide** listing all its parts the same way. The player shows the current part's name above the deck. Purpose: no endless-wall-of-slides feeling — the learner always knows where they are, what's coming, and what's done.

Fixed arc (distributed across the parts):

1. **Hook** (1 teach slide) — what you'll be able to DO after this lesson, in one sentence, with one example
2. **Teach I** (1–2 teach slides) — the grammar micro-point, minimal prose, MAXIMUM table/diagram (see §4)
3. **Examples** (1–2 example slides) — 3–5 sentences each, TTS button per sentence, target endings color-highlighted
4. **Mini-quiz I** (3–4 quiz slides) — recognition first: multiple-choice, match-pairs on the new material
5. **Teach II / vocab** (1–2 slides) — new vocab presented with icons, gender-colored articles, example sentence each
6. **Mini-quiz II** (4–6 quiz slides) — production: type-answer, fill-blank, reorder; includes **2–3 interleaved items from earlier units**
7. **Listening & speaking** (2–4 slides) — listen-and-type (normal + slow TTS), speak slides (STT or self-assess)
8. **Integration** (2–3 quiz slides) — combine today's point with the running story-world characters
9. **Recap** (1 slide) — summary table of the point, list of vocab entering SRS tonight, link to the lesson's Notes page

Quiz share ≥ 60% of slides. Never two teach slides in a row after slide 4. Every Croatian utterance on any slide has a TTS play button.

**Instruction language:** English for every instruction, prompt, explanation, and all UI chrome — the learner starts from zero. Croatian in a prompt is allowed only when that exact phrase was taught in an earlier lesson (gloss it on first reuse). A1–A2 comprehension questions in simple taught Croatian carry an English gloss.

### Minimum content contract (enforced by `npm run validate:content`)

Every lesson file MUST contain, or it fails validation:

| Requirement | Minimum |
|---|---|
| Total slides | 18 (max 34, incl. section overviews) — the shipped A1 U1/U2 density (20–32) is the norm, not the ceiling |
| Visual vocab spread (`vocab-cards` slide) | 1 (standard-policy lessons; placed BEFORE the first teach slide that uses the words) |
| Section slides | 3 (lesson menu as slide 1 + ≥2 part openers), each with 2–6 visual items |
| Quiz **interactions** (quiz-set items count individually) | 12 |
| Quiz-type slides as share of non-section slides | ≥ 50% |
| Distinct quiz types used | 4 |
| Listening interactions (listen-type slides or audio-prompted quizzes) | 2 |
| Speaking slides | 1 |
| Production quizzes (type/fill/reorder — not recognition-only) | 5 |
| Interleaved items from earlier units (tagged `review: true`) | 2 (except A1 U1 L1) |
| New vocab items | 6–12, each appearing in ≥ 2 different slides |
| Example sentences with TTS | 6 |
| Teach slides with a table or diagram spec | every teach slide that introduces grammar |
| Companion NotesDoc | all 7 sections (§5), ≥ 1 table, ≥ 1 diagram, ≥ 3 common mistakes, 5 self-check questions |

A lesson meeting only the minimums is a floor, not a target — the unit specs' slide arcs describe the intended richness. Anything thinner than the spec's arc is a content bug.

Two declared exemptions (the lesson file must set `vocabPolicy`):
- **`closed-set`** — lessons teaching a closed series (numbers 1–20, days of the week, ordinals): the set counts as the lesson's vocab even if it exceeds 12 items (cap 24); listening-priority SRS applies.
- **`grammar-only`** — a lesson whose unit spec explicitly says "none new — pure grammar drill" (e.g. A2 U15 L3 clitic order): 0 new vocab allowed; everything else in the contract still applies.

### Slide types (the full set)

`teach` · `example` · `vocab-cards` (picture spread of the lesson's new words) · `mc` (multiple choice) · `type` (type the answer) · `listen-type` · `speak` · `match` (pairs) · `fill` (fill-in-blank, optional word bank) · `reorder` (sentence builder) · `recap`

Typed answers: accepted-variant lists; diacritic-tolerant mode marks c/č/ć etc. slips as "correct, mind the diacritic" (never silently correct, never wrong); on-screen `č ć đ š ž` buttons always available.

## 2b. Progression & load rules (no cliffs)

The difficulty curve must feel like stairs, not a wall. Binding rules for every lesson and unit:

1. **One new thing at a time.** Exactly one grammar micro-point per lesson; a lesson that introduces a case NEVER also introduces a verb pattern (and vice versa). New vocab ≤12 (closed sets exempt).
2. **No surprise material.** Every quiz prompt, option, distractor, tile, and expected answer uses ONLY (a) material taught earlier in the course, (b) this lesson's own taught material, or (c) explicitly glossed items. A learner should never lose a point to a word or form they've never seen.
3. **Warm-up before new input.** Of each lesson's ≥2 interleaved review slides, at least one sits EARLY (Part 1) — retrieval of yesterday's material warms up the brain before today's point (mirrors the daily flow §9: review → learn).
4. **Recognition before production.** The first exercises after a teach beat are recognition (mc/match/quiz-set); typing/building comes after. Production of a form always follows ≥2 recognition encounters of it.
5. **Chunk first, analyze later.** Anything useful-but-early appears as a flagged unanalyzed chunk, and the analyzing lesson explicitly calls back to it ("you've said this since Unit 1 — here's why it works"). Payoffs are motivating; surprises are not.
6. **Unit bridges.** Every unit's L1 opens (right after the lesson menu) by explicitly building on the previous unit — a bridge beat: "you already know X; today X becomes Y" — plus early review items drawn from the previous unit's core.
7. **Tests trail teaching.** A unit test may only test what its lessons drilled ≥2 times; checkpoint exams sample what unit tests already tested. Tests are NEVER the first place a skill is demanded.
8. **Difficulty telemetry.** First-attempt accuracy < 60% on a lesson ⇒ the app recommends replaying it and reading its notes before continuing (soft, never blocking). Persistent low accuracy across lessons is a curriculum bug, not a learner failure — capture it via the 🚩 reports and fix the content.
9. **Learn before test.** A lesson never opens on a scored quiz about new material: the first non-section content beat is a teach/vocab-cards/example slide (the only thing allowed before it is a `review: true` warm-up from earlier material, per rule 3). Within each part, new material gets at least one full presentation beat before the first quiz on it. The player supports stepping BACK through cleared slides at any time (browse-only — nothing re-grades) so the learner can re-read a rule before answering.

## 3. The retry rule

A quiz slide answered wrong: show feedback, then push the slide onto the deck-end **retry queue**. The lesson is complete only when every quiz slide has been answered correctly once. Retried slides shuffle order. Accuracy recorded = first-attempt accuracy.

## 4. Visuals mandate (non-negotiable, applies to slides AND notes)

**Case colors — fixed for the entire course:**

| Case | Color | Tailwind token |
|---|---|---|
| Nominativ (NOM) | blue | `blue-600` |
| Akuzativ (ACC) | red | `red-600` |
| Genitiv (GEN) | green | `green-600` |
| Dativ (DAT) | orange | `orange-600` |
| Lokativ (LOC) | purple | `purple-600` |
| Instrumental (INS) | teal | `teal-600` |
| Vokativ (VOC) | pink | `pink-600` |

Gender colors for vocab: masculine `sky-700`, feminine `rose-700`, neuter `amber-700` (dot/border on vocab cards, never the only signal — gender letter m/f/n always shown too).

**Required visual per grammar-point type** (content authors must include the matching visual; the unit spec names which):

| Grammar-point type | Required visual |
|---|---|
| Any case introduction | Declension table (color-coded endings) + a **usage-map diagram** (when do I use this case? boxes with arrows to example phrases) |
| Direction vs location (ACC/LOC) | Arrow diagram: person → 🏠 "u kuću (ACC)" vs person inside 🏠 "u kući (LOC)" |
| Verb conjugation | Conjugation table (6 persons), endings bolded and colored |
| Clitic order | **Train-carriage diagram**: fixed slots li → aux → DAT → ACC/GEN → se → je as coupled wagons |
| Aspect | **Timeline diagram**: wavy ongoing line (imperfective) vs point/checkmark (perfective) |
| Word order / question formation | Before→after transformation with moving-word highlight |
| Numbers + case government | Bracket diagram: 1 → NOM sg, 2–4 → GEN sg, 5+ → GEN pl |
| Vocab sets | Generated image per item (no emoji — §4 picture power); semantic grouping grids (food plate, family tree, city map) |
| Endings in examples | Target morpheme highlighted in the case color, always |

Diagrams are authored as structured specs (SVG-friendly data or Mermaid) in content files, not as prose descriptions.

**Picture power (dual coding, binding):**

1. **Generated images only — no emoji as content imagery, ever (Noah's rule, 2026-07-22): EVERY vocab item carries an AI-generated image** in the locked house style (docs/image-generation-guide.md: flat cartoon, transparent PNG, background removed via scripts/remove-bg.py) via the `image` field — a BUNDLED local asset under `/public/img/` (never a remote URL; the app is offline-first). Abstract/function words get concept-gesture images; numbers get big 3D numerals (the one digits exception to "no text"). Emoji never appear as vocab/content imagery — a word whose image isn't generated yet renders as a neutral letter tile. Generating each unit's full image set is part of its content pipeline (§10).
2. **Every standard-policy lesson opens its vocabulary with a `vocab-cards` spread**: big picture + Croatian + English + TTS + gender color/letter per word, placed before the first teach slide that uses the words. See it → hear it → only then analyze it.
3. **Picture↔word connection beats**: at least the alphabet/phonics lessons (and any lesson whose vocab is concrete objects) include a `match` slide pairing pictures with Croatian words — the learner binds sound-spelling-image, not translation pairs alone.
4. Closed-set lessons (numbers, days) are exempt from the vocab-cards spread — their grids and dictation ARE the visual treatment — but their vocab items still carry generated images (numerals etc.) for cards and review.

## 5. NotesDoc anatomy (one per lesson)

The lesson's companion study notes — deeper than slides, browsable in the Notebook, printable. Sections, in order:

1. **U jednoj rečenici** — the point in one sentence (EN + one HR example)
2. **Deep dive** — full explanation with ALL relevant tables (complete paradigm even if the slide showed a partial one) and the required diagram(s)
3. **Vocab table** — every new word: HR (gender-colored) | gender | EN | example sentence HR/EN
4. **Common mistakes** — 3–5 typical errors (❌ wrong → ✅ right, one-line why), anglophone-learner-specific
5. **Memory hooks** — mnemonics, patterns, cognates
6. **Povezano (connects to)** — links to related earlier/later notes
7. **Mini samoprovjera** — 5 self-check questions with hidden answers

## 6. SRS rules

- Completing a lesson seeds its vocab: **recognition** (HR→EN) + **production** (EN→type HR) cards immediately; **listening** (TTS→type) card added after the item's 2nd successful review; **cloze** cards for grammar patterns flagged in the unit spec
- New-card throughput target: 8–12/day (matches ~8 vocab/lesson at 1 lesson/day)
- FSRS, 4-button rating (Again/Hard/Good/Easy), target retention 0.90, full review log kept for later parameter optimization
- Review session is ALWAYS step ① of the day (retrieval before new input)
- Leeches (8+ lapses): flagged in stats + surfaced to "Practice more" AI exercise generation

## 7. Story constraints (graded readers)

- One per unit, using ONLY vocab/grammar taught through that unit + ≤5 new words (tap-glossed)
- Length by level: A1 60–150 · A2 150–300 · B1 300–500 · B2 500–800 words
- A recurring **story-world cast** carries the whole course (continuity = motivation): Ana (studentica iz Zagreba), Marko (konobar iz Splita), baka Marija (Slavonija), Tom (Kanađanin koji uči hrvatski — the learner's proxy). B1/B2 texts widen to adapted articles/literature but the cast recurs
- Every paragraph: TTS button. Every story: 4–6 comprehension questions (MC), answerable only by understanding, not word-matching

## 8. Test design

- **Unit test** (after story): 15–20 items, quiz slides only, no hints, first-attempt scoring, sections: vocab → grammar → listening → reading micro-passage. Pass ≥ 70%; soft gate (warn, allow proceed; wrong items become priority SRS cards)
- **B1+ per-unit writing task**: from Unit 17 on, every unit test carries a guided WritingTask (80–150 words, prompt set by the unit spec) presented after the quiz sections — AI rubric-graded (task/grammar/vocab/coherence) when a key is present, plain self-check against the model text otherwise; it NEVER gates the test pass (same key-optional rule as checkpoint speaking/writing)
- **Checkpoint exam** (per level): 4 skills — listening (TTS passages), reading, grammar/vocab cloze, speaking prompts (AI-graded vs rubric); A2+ adds writing. 40–60 items, ~45 min, pass ≥ 70%
- Wrong test items auto-generate targeted practice via the AI exercise generator

## 9. The guided daily session (beginning → end, no decisions required)

Dashboard leads with ONE "Today's session" card:

1. **① Review** — FSRS due cards (~10–15 min). Skippable only if zero due
2. **② Learn** — next step on the path: lesson → lesson → … → story → unit test → next unit
3. **③ Strengthen** (pick-one, auto-recommended by weakness): listening drill · speaking drill · re-read weakest note · story re-read · AI tutor chat (A2+) · "Practice more" generated exercises

Streak counts any day with ① + ② done. The Study menu exposes every mode for free choice, but the guided card is the front door.

## 10. Content pipeline (how units get authored)

1. Read: roadmap entry + unit spec + this doc + grammar-reference tables + the A1 U1 exemplar content files
2. Generate lesson/story/test/notes content files against the TS schema
3. `npm run validate:content` (Zod, structural)
4. **Proofread pass**: separate AI call, "pedantic native Croatian proofreader" persona, receives only the content + grammar tables, returns structured error list (case endings, aspect, clitic order, unnatural phrasing) → regenerate until clean
5. Human spot-check → merge. Content is then frozen (fixes via the in-app "report error on this slide" queue)

## 11. Unit spec template (`curriculum/<LEVEL>/unit-N.md`)

Every unit spec MUST contain, in order:

```markdown
# <Level> Unit <N> — <Croatian title> (<English theme>)
## Overview — 2–3 sentences: where this sits in the spine, what it unlocks
## Can-do objectives — 3–5 "I can…" statements
## New vocabulary (~40 items) — table: HR | gender/POS | EN, grouped by lesson
## Lessons L1–L5 — for each:
   - Grammar micro-point (+ pointer into grammar-reference.md)
   - New vocab subset (8±2 items)
   - Required visuals (from §4 table)
   - Slide-arc outline (which slide types where, per §2 anatomy; 6–10 bullet beats
     with 2–3 concrete example sentences HR/EN that MUST appear)
   - Interleaving: which earlier-unit items to recycle
   - SRS: which cloze/grammar cards to seed
## Story — title, synopsis (3–4 sentences), cast members used, the ≤5 new glossed words, 2 sample sentences
## Unit test blueprint — section-by-section item counts + example items
## Writing task (B1+ only) — title, English task instruction, word range (80–150), model text HR, rubric focus
## NotesDoc focus — what each lesson's notes must emphasize (esp. common-mistakes list)
```
