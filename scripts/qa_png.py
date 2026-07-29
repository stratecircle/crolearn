"""QA sheet for the transparent PNGs in public/img.

usage: python scripts/qa_png.py out.png word1 word2 ...
Each PNG is composited over a magenta field so any leftover background
shows up instantly, and drawn at its true relative scale inside the cell.
"""
import sys, os
from PIL import Image, ImageDraw

SRC = r'C:\Users\noahn\OneDrive\Desktop\CroLearn\public\img'
out = sys.argv[1]
words = sys.argv[2:]
CELL = 240
COLS = 5
rows = (len(words) + COLS - 1) // COLS
W = COLS * CELL
H = rows * (CELL + 22)
sheet = Image.new('RGB', (W, H), (255, 0, 255))
d = ImageDraw.Draw(sheet)
for i, w in enumerate(words):
    p = os.path.join(SRC, w + '.png')
    c, r = i % COLS, i // COLS
    x, y = c * CELL, r * (CELL + 22)
    if os.path.exists(p):
        im = Image.open(p).convert('RGBA')
        im.thumbnail((CELL, CELL), Image.LANCZOS)
        cell = Image.new('RGBA', (CELL, CELL), (255, 0, 255, 255))
        cell.alpha_composite(im, ((CELL - im.width) // 2, (CELL - im.height) // 2))
        sheet.paste(cell.convert('RGB'), (x, y))
    else:
        d.text((x + 6, y + 6), 'MISSING', fill=(0, 0, 0))
    d.text((x + 6, y + CELL + 5), w, fill=(0, 0, 0))
sheet.save(out)
print('WROTE', out, sheet.size)
