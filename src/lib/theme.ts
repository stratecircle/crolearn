/**
 * Light / dark / system theming.
 *
 * The whole palette lives in CSS custom properties in `src/index.css`; all this
 * module does is toggle `html.dark` and remember the choice. Nothing here
 * touches `crolearn.apiKey` — the key stays in localStorage under its own name
 * and is never part of the theme payload.
 */

export type ThemeMode = "light" | "dark" | "system";

const KEY = "crolearn.theme";
const MODES: ThemeMode[] = ["light", "dark", "system"];

type Listener = (resolved: "light" | "dark", mode: ThemeMode) => void;
const listeners = new Set<Listener>();

let mql: MediaQueryList | null = null;

function media(): MediaQueryList | null {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  if (!mql) mql = window.matchMedia("(prefers-color-scheme: dark)");
  return mql;
}

export function getThemeMode(): ThemeMode {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw && (MODES as string[]).includes(raw)) return raw as ThemeMode;
  } catch {
    /* private mode / storage disabled — fall through to the default */
  }
  return "system";
}

export function systemPrefersDark(): boolean {
  return media()?.matches ?? false;
}

export function resolveTheme(mode: ThemeMode = getThemeMode()): "light" | "dark" {
  if (mode === "system") return systemPrefersDark() ? "dark" : "light";
  return mode;
}

function paint(mode: ThemeMode): "light" | "dark" {
  const resolved = resolveTheme(mode);
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;
  // Keep the browser UI (address bar / form controls) in step.
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = resolved === "dark" ? "#131316" : "#ffffff";
  listeners.forEach((fn) => fn(resolved, mode));
  return resolved;
}

/** Apply the persisted mode. Call once, as early as possible, to avoid a flash. */
export function initTheme(): "light" | "dark" {
  const resolved = paint(getThemeMode());
  media()?.addEventListener?.("change", () => {
    if (getThemeMode() === "system") paint("system");
  });
  // Enables the cross-fade only after first paint, so load isn't animated.
  requestAnimationFrame(() => document.documentElement.classList.add("theme-ready"));
  return resolved;
}

export function setThemeMode(mode: ThemeMode): "light" | "dark" {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* non-fatal: the theme still applies for this session */
  }
  return paint(mode);
}

/** Subscribe to theme changes (used by the Settings toggle to stay in sync). */
export function onThemeChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
