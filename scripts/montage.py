#!/usr/bin/env python3
"""Build a contact sheet of the AI-generated cut-out PNGs for visual QA."""
import os, glob, math
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(HERE, 'public', 'img', 'ai-generated')
IMG = os.path.join(HERE, 'public', 'img')

names = sorted(os.path.splitext(os.path.basename(f))[0] for f in glob.glob(os.path.join(SRC, '*.jpg')))
cols = 6
cell = 170
pad = 22
rows = math.ceil(len(names) / cols)
W = cols * cell
H = rows * (cell + pad)

def checker(w, h, s=12):
    bg = Image.new('RGB', (w, h), (235, 235, 235))
    d = ImageDraw.Draw(bg)
    for y in range(0, h, s):
        for x in range(0, w, s):
            if (x // s + y // s) % 2 == 0:
                d.rectangle([x, y, x + s, y + s], fill=(210, 210, 210))
    return bg

sheet = Image.new('RGB', (W, H), (255, 255, 255))
draw = ImageDraw.Draw(sheet)
for i, name in enumerate(names):
    r, c = divmod(i, cols)
    x0 = c * cell
    y0 = r * (cell + pad)
    tile = checker(cell, cell)
    p = os.path.join(IMG, name + '.png')
    if os.path.exists(p):
        im = Image.open(p).convert('RGBA')
        im.thumbnail((cell - 16, cell - 16))
        tile.paste(im, ((cell - im.width) // 2, (cell - im.height) // 2), im)
    sheet.paste(tile, (x0, y0))
    draw.rectangle([x0, y0, x0 + cell - 1, y0 + cell - 1], outline=(150, 150, 150))
    draw.text((x0 + 6, y0 + cell + 4), name, fill=(0, 0, 0))

out = os.path.join(IMG, '_montage.png')
sheet.save(out)
print('wrote', out, sheet.size, 'n=', len(names))
