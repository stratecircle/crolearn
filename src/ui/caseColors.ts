import type { CaseId, Gender } from "@/types/content";

/**
 * Fixed course-wide case colors — curriculum/01-teaching-method.md §4.
 * Never assign these colors to anything else in the UI.
 */
export const CASE_COLORS: Record<
  CaseId,
  { name: string; text: string; bg: string; border: string }
> = {
  NOM: { name: "Nominativ", text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-600" },
  ACC: { name: "Akuzativ", text: "text-red-600", bg: "bg-red-50", border: "border-red-600" },
  GEN: { name: "Genitiv", text: "text-green-600", bg: "bg-green-50", border: "border-green-600" },
  DAT: { name: "Dativ", text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-600" },
  LOC: { name: "Lokativ", text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-600" },
  INS: { name: "Instrumental", text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-600" },
  VOC: { name: "Vokativ", text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-600" },
};

/** Gender dot colors for vocab cards (never the only signal — m/f/n letter always shown). */
export const GENDER_COLORS: Record<Gender, string> = {
  m: "bg-sky-700",
  f: "bg-rose-700",
  n: "bg-amber-700",
};
