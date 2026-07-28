import type { CaseId, Gender } from "@/types/content";

/**
 * Fixed course-wide case colors — curriculum/01-teaching-method.md §4.
 * Never assign these colors to anything else in the UI.
 *
 * The hues live as CSS custom properties (index.css) so they read correctly in
 * both themes; these classes just point at them. `bg` is a translucent wash,
 * `border` a soft line of the case colour.
 */
function caseClasses(token: string) {
  return {
    text: `text-[color:var(${token})]`,
    bg: `bg-[color-mix(in_srgb,var(${token})_7%,transparent)]`,
    border: `border-[color-mix(in_srgb,var(${token})_45%,transparent)]`,
  };
}

export const CASE_COLORS: Record<
  CaseId,
  { name: string; text: string; bg: string; border: string }
> = {
  NOM: { name: "Nominativ", ...caseClasses("--case-nom") },
  ACC: { name: "Akuzativ", ...caseClasses("--case-acc") },
  GEN: { name: "Genitiv", ...caseClasses("--case-gen") },
  DAT: { name: "Dativ", ...caseClasses("--case-dat") },
  LOC: { name: "Lokativ", ...caseClasses("--case-loc") },
  INS: { name: "Instrumental", ...caseClasses("--case-ins") },
  VOC: { name: "Vokativ", ...caseClasses("--case-voc") },
};

/** Gender dot colors for vocab cards (never the only signal — m/f/n letter always shown). */
export const GENDER_COLORS: Record<Gender, string> = {
  m: "bg-[color:var(--case-nom)]",
  f: "bg-[color:var(--case-voc)]",
  n: "bg-[color:var(--orange)]",
};
