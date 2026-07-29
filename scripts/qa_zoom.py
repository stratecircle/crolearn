"""Full-size magenta-composite QA of a handful of PNGs (2 per row, native size).

usage: python scripts/qa_zoom.py out.png word1 word2 ...
"""
import sys, os
from PIL import Image, ImageDraw

SRC = r'C:\Users\noahn\OneDrive\Desktop\CroLearn\public\img'
out = sys.argv[1]
words = sys.argv[2:]
CELL = 512
COLS = 2
rows = (len(words) + COLS - 1) // COLS
sheet = Image.new('RGBA', (COLS * CELL, rows * CELL), (255, 0, 255, 255))
d = ImageDraw.Draw(sheet)
for i, w in enumerate(words):
    p = os.path.join(SRC, w + '.png')
    x, y = (i % COLS) * CELL, (i // COLS) * CELL
    im = Image.open(p).convert('RGBA')
    im.thumbnail((CELL, CELL), Image.LANCZOS)
    sheet.alpha_composite(im, (x + (CELL - im.width) // 2, y + (CELL - im.height) // 2))
    d.text((x + 6, y + 6), w, fill=(0, 0, 0))
sheet.convert('RGB').save(out)
print('WROTE', out, sheet.size)
