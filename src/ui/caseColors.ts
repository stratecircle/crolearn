import type { CaseId, Gender } from "@/types/content";

/**
 * Fixed course-wide case colors — curriculum/01-teaching-method.md §4.
 * Never assign these colors to anything else in the UI.
 *
 * The hues live as CSS custom properties (index.css) so they read correctly in
 * both themes; these classes just point at them. `bg` is a translucent wash,
 * `border` a soft line of the case colour.
 *
 * IMPORTANT — these class strings MUST be written out as complete static
 * literals. Tailwind v4 extracts candidates by scanning raw source text, so a
 * class name assembled from a template literal with the token interpolated in
 * is never seen by the scanner and the utility is silently never generated —
 * the case colors then render with no color at all. Do not refactor these back
 * into a helper that builds the name around an interpolated token.
 */
export const CASE_COLORS: Record<
  CaseId,
  { name: string; text: string; bg: string; border: string }
> = {
  NOM: {
    name: "Nominativ",
    text: "text-[color:var(--case-nom)]",
    bg: "bg-[color-mix(in_srgb,var(--case-nom)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-nom)_45%,transparent)]",
  },
  ACC: {
    name: "Akuzativ",
    text: "text-[color:var(--case-acc)]",
    bg: "bg-[color-mix(in_srgb,var(--case-acc)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-acc)_45%,transparent)]",
  },
  GEN: {
    name: "Genitiv",
    text: "text-[color:var(--case-gen)]",
    bg: "bg-[color-mix(in_srgb,var(--case-gen)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-gen)_45%,transparent)]",
  },
  DAT: {
    name: "Dativ",
    text: "text-[color:var(--case-dat)]",
    bg: "bg-[color-mix(in_srgb,var(--case-dat)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-dat)_45%,transparent)]",
  },
  LOC: {
    name: "Lokativ",
    text: "text-[color:var(--case-loc)]",
    bg: "bg-[color-mix(in_srgb,var(--case-loc)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-loc)_45%,transparent)]",
  },
  INS: {
    name: "Instrumental",
    text: "text-[color:var(--case-ins)]",
    bg: "bg-[color-mix(in_srgb,var(--case-ins)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-ins)_45%,transparent)]",
  },
  VOC: {
    name: "Vokativ",
    text: "text-[color:var(--case-voc)]",
    bg: "bg-[color-mix(in_srgb,var(--case-voc)_7%,transparent)]",
    border: "border-[color-mix(in_srgb,var(--case-voc)_45%,transparent)]",
  },
};

/** Gender dot colors for vocab cards (never the only signal — m/f/n letter always shown). */
export const GENDER_COLORS: Record<Gender, string> = {
  m: "bg-[color:var(--case-nom)]",
  f: "bg-[color:var(--case-voc)]",
  n: "bg-[color:var(--orange)]",
};
