#!/usr/bin/env python3
"""QA montage built from the FINAL transparent PNGs in public/img (white backed).
usage: python scripts/qa_png.py out.png word1 word2 ...
"""
import sys, os
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(HERE, 'public', 'img')
out = sys.argv[1]
words = sys.argv[2:]
CELL = 300
COLS = 4
rows = (len(words) + COLS - 1) // COLS
sheet = Image.new('RGB', (COLS * CELL, rows * (CELL + 26)), (255, 255, 255))
d = ImageDraw.Draw(sheet)
for i, w in enumerate(words):
    p = os.path.join(SRC, w + '.png')
    x, y = (i % COLS) * CELL, (i // COLS) * (CELL + 26)
    if os.path.exists(p):
        im = Image.open(p).convert('RGBA').resize((CELL, CELL))
        sheet.paste(im, (x, y), im)
    d.text((x + 6, y + CELL + 6), w, fill=(0, 0, 0))
sheet.save(out)
print('WROTE', out, sheet.size)
