"""Remove duplicate `image: "..."` properties inside a single object literal line.
Keeps the FIRST occurrence on each line, drops any later ones.
usage: python scripts/dedupe_image.py <glob> [<glob> ...]
"""
import re, sys, glob, io

PAT = re.compile(r'\s*image:\s*"[^"]*",')

targets = []
for g in sys.argv[1:]:
    targets.extend(glob.glob(g, recursive=True))

total = 0
for f in sorted(set(targets)):
    src = io.open(f, encoding='utf-8').read()
    out_lines = []
    changed = 0
    for line in src.split('\n'):
        hits = list(PAT.finditer(line))
        if len(hits) > 1:
            # drop every match after the first, from the end backwards
            for m in reversed(hits[1:]):
                line = line[:m.start()] + line[m.end():]
                changed += 1
        out_lines.append(line)
    if changed:
        io.open(f, 'w', encoding='utf-8', newline='').write('\n'.join(out_lines))
        print('DEDUPED', f, changed)
        total += changed
print('TOTAL removed', total)
