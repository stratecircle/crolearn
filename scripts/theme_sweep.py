"""Rewrite hard-coded colour literals in src/ into CSS-custom-property references.

The app has ~60 components that inline the Nativ palette as hex / rgba literals,
both in Tailwind arbitrary values (`border-[rgba(15,23,42,.07)]`) and in inline
style objects (`style={{ color: "#16243D" }}`). Adding `dark:` variants to every
one of those would be unmaintainable, so instead every literal becomes
`var(--token)` and `src/index.css` swaps the token values under `html.dark`.

The same regex handles both contexts because both end up as CSS. Two wrinkles:

* Tailwind can't infer whether a bare `var(--x)` in an arbitrary value is a
  colour or a length, so bracket-exact values get the `[color:...]` type hint.
* Drop shadows must NOT follow --ink-rgb (which inverts in dark mode) or they'd
  turn into white glows, so shadow values are rewritten first to --shadow-rgb.

Idempotent: re-running finds nothing left to change.

usage: python scripts/theme_sweep.py [--check]
"""

import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src")
SKIP_DIRS = {"content"}  # lesson data — prose only, never styling
# theme.ts owns the raw <meta name="theme-color"> values; a meta tag can't take var().
SKIP_FILES = {"theme.ts"}

# rgba(R,G,B, -> rgba(var(--token-rgb),
RGB_TOKENS = {
    "15,23,42": "--ink-rgb",
    "201,52,52": "--primary-rgb",
    "47,125,83": "--green-rgb",
    "224,138,43": "--orange-rgb",
}

HEX_TOKENS = {
    "#16243d": "--ink",
    "#20344f": "--ink-strong",
    "#3f4a5c": "--body",
    "#5b6472": "--body2",
    "#8b93a1": "--muted",
    "#9aa1ad": "--muted2",
    "#a9b0ba": "--muted3",
    "#b6bcc6": "--muted4",
    "#c93434": "--primary",
    "#b32c2c": "--primary-hover",
    "#2f7d53": "--green",
    "#276a46": "--green-strong",
    "#e08a2b": "--orange",
    "#3b6fd4": "--blue",
    "#8b6fc9": "--violet",
    "#3e9fb0": "--teal",
    "#7a4a12": "--brown",
    "#9a5b14": "--brown2",
    "#f7f4f0": "--tint",
    "#f4f6f2": "--tint2",
    "#f1ede7": "--tint3",
    "#f3efe9": "--tint4",
    "#f6f3ef": "--tint5",
    "#fdfcfa": "--card",
    "#efeeea": "--page",
}

# `bg-white` -> card surface, but not `bg-white/40` or `bg-whitespace-…`
BG_WHITE = re.compile(r"\bbg-white\b(?![/\w-])")
HEX_ANY = re.compile(r"#[0-9A-Fa-f]{6}\b")
BRACKET_HEX = re.compile(r"\[(#[0-9A-Fa-f]{6})\]")
SHADOW_CTX = re.compile(r"shadow-\[[^\]]*\]|boxShadow:\s*(?:\"[^\"]*\"|'[^']*'|`[^`]*`)")
RGBA_PREFIX = re.compile(r"rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,")


def rewrite_rgba(text: str, token_map: dict, override: str | None = None) -> str:
    def sub(m: re.Match) -> str:
        key = "%s,%s,%s" % (m.group(1), m.group(2), m.group(3))
        token = override if override and key in token_map else token_map.get(key)
        if not token:
            return m.group(0)
        return "rgba(var(%s)," % token

    return RGBA_PREFIX.sub(sub, text)


def sweep(text: str) -> str:
    # 1. Shadows first — they keep a fixed dark colour in both themes.
    def shadow_sub(m: re.Match) -> str:
        return rewrite_rgba(m.group(0), RGB_TOKENS, override="--shadow-rgb")

    text = SHADOW_CTX.sub(shadow_sub, text)

    # 2. Every other translucent tint follows its semantic token.
    text = rewrite_rgba(text, RGB_TOKENS)

    # 3. Bracket-exact hex needs Tailwind's `color:` type hint.
    def bracket_sub(m: re.Match) -> str:
        token = HEX_TOKENS.get(m.group(1).lower())
        return m.group(0) if not token else "[color:var(%s)]" % token

    text = BRACKET_HEX.sub(bracket_sub, text)

    # 4. Remaining hex (inline styles, multi-part arbitrary values).
    def hex_sub(m: re.Match) -> str:
        token = HEX_TOKENS.get(m.group(0).lower())
        return m.group(0) if not token else "var(%s)" % token

    text = HEX_ANY.sub(hex_sub, text)

    # 5. Opaque white card surfaces.
    text = BG_WHITE.sub("bg-[color:var(--card)]", text)
    return text


def files():
    for dirpath, dirnames, filenames in os.walk(SRC):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in filenames:
            if fn in SKIP_FILES:
                continue
            if fn.endswith((".tsx", ".ts")) and not fn.endswith((".test.ts", ".test.tsx")):
                yield os.path.join(dirpath, fn)


def main() -> int:
    check = "--check" in sys.argv
    changed = 0
    for path in sorted(files()):
        src = io.open(path, encoding="utf-8").read()
        out = sweep(src)
        if out == src:
            continue
        changed += 1
        rel = os.path.relpath(path, ROOT)
        if check:
            print("WOULD REWRITE", rel)
        else:
            io.open(path, "w", encoding="utf-8", newline="").write(out)
            print("REWROTE", rel)
    print(("WOULD REWRITE " if check else "REWROTE ") + str(changed) + " file(s)")
    return 1 if (check and changed) else 0


if __name__ == "__main__":
    raise SystemExit(main())
