import { useEffect } from "react";

/** True when the event came from somewhere a keystroke means text, not a command. */
export function isTypingTarget(t: EventTarget | null): boolean {
  const el = t as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

/**
 * Window-level keyboard shortcuts.
 *
 * `map` is keyed by a normalised chord: lowercased `event.key`, optionally
 * prefixed with `mod+` (⌘ on macOS, Ctrl elsewhere) — e.g. `"escape"`, `"1"`,
 * `" "`, `"mod+k"`. Handlers fire only when focus isn't in a text field, unless
 * the chord carries `mod+` (those are commands anywhere).
 *
 * The map is read through a ref-free closure on every event, so callers can
 * pass a freshly-built object each render without re-binding listeners — but
 * they must keep `deps` honest for the handlers to see current state.
 */
export function useHotkeys(map: Record<string, (e: KeyboardEvent) => void>, deps: unknown[] = []) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      const key = e.key.toLowerCase();
      const chord = mod ? `mod+${key}` : key;
      const handler = map[chord];
      if (!handler) return;
      if (!mod && isTypingTarget(e.target)) return;
      // A bare letter/number chord must not swallow ⌘R, Alt+Tab and friends.
      if (!mod && (e.altKey || e.metaKey || e.ctrlKey)) return;
      handler(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** "⌘K" on Apple platforms, "Ctrl K" elsewhere — for shortcut hints in the UI. */
export const MOD_LABEL = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl";
