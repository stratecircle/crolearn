import sys, os
from PIL import Image, ImageDraw

SRC = r'C:\Users\noahn\OneDrive\Desktop\CroLearn\public\img\ai-generated'
words = sys.argv[2:]
out = sys.argv[1]
CELL = 300
COLS = 4
rows = (len(words) + COLS - 1) // COLS
W = COLS * CELL
H = rows * (CELL + 26)
sheet = Image.new('RGB', (W, H), (255, 255, 255))
d = ImageDraw.Draw(sheet)
for i, w in enumerate(words):
    p = os.path.join(SRC, w + '.jpg')
    c, r = i % COLS, i // COLS
    x, y = c * CELL, r * (CELL + 26)
    if os.path.exists(p):
        im = Image.open(p).convert('RGB').resize((CELL, CELL))
        sheet.paste(im, (x, y))
    d.text((x + 6, y + CELL + 6), w, fill=(0, 0, 0))
sheet.save(out)
print('WROTE', out, sheet.size)
