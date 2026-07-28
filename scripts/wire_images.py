#!/usr/bin/env python3
"""Inject image: "/img/<file>.png" into every vocab item of a unit that has a
matching cut-out PNG in public/img. Idempotent. Usage: python wire_images.py a1u3"""
import os, re, sys, glob, unicodedata

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(HERE, 'public', 'img')
unit = sys.argv[1] if len(sys.argv) > 1 else 'a1u3'
level = unit[:2]           # a1
unum = unit[2:]            # u3
folder = os.path.join(HERE, 'src', 'content', level, unum)

def fold(s):
    s = s.lower()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = s.replace('đ', 'd')  # đ
    s = re.sub(r'[^a-z0-9]+', '', s)
    return s

# never double-inject: skip if this object literal already has an image: prop
pat = re.compile(r'(id:\s*"' + unit + r'\.([^"]+)",)(?![^{}]*\bimage:)')
total = 0
skipped = set()
for f in glob.glob(os.path.join(folder, '*.ts')):
    s = open(f, encoding='utf-8').read()
    def repl(m):
        global total
        whole, slug = m.group(1), m.group(2)
        fn = fold(slug)
        if not os.path.exists(os.path.join(IMG, fn + '.png')):
            skipped.add(slug)
            return whole
        total += 1
        return whole + ' image: "/img/%s.png",' % fn
    ns = pat.sub(repl, s)
    if ns != s:
        open(f, 'w', encoding='utf-8').write(ns)
        print('patched', os.path.basename(f))
print('injected image on %d vocab refs; no-image (skipped): %s' % (total, sorted(skipped)))
