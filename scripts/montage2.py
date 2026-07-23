#!/usr/bin/env python3
"""Enlarged QA montage of specific suspect tiles."""
import os, sys, math
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(HERE, 'public', 'img')
names = sys.argv[1:] or ['baka','majka','otac','sestra','osoba','mali','obitelj','nizak']
cols = 4
cell = 300
pad = 26
rows = math.ceil(len(names)/cols)
sheet = Image.new('RGB', (cols*cell, rows*(cell+pad)), (240,240,240))
draw = ImageDraw.Draw(sheet)
for i, name in enumerate(names):
    r, c = divmod(i, cols)
    x0, y0 = c*cell, r*(cell+pad)
    p = os.path.join(IMG, name+'.png')
    if os.path.exists(p):
        im = Image.open(p).convert('RGBA')
        bg = Image.new('RGBA', (cell, cell), (255,255,255,255))
        im.thumbnail((cell-20, cell-20))
        bg.paste(im, ((cell-im.width)//2, (cell-im.height)//2), im)
        sheet.paste(bg.convert('RGB'), (x0, y0))
    draw.rectangle([x0,y0,x0+cell-1,y0+cell-1], outline=(120,120,120))
    draw.text((x0+8, y0+cell+6), name, fill=(0,0,0))
out = os.path.join(IMG, '_verify.png')
sheet.save(out)
print('wrote', out, sheet.size)
