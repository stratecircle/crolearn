"""Split a 2x2 grid capture into four square vocab jpgs.

usage: python scripts/split_grid.py <gridfile.jpg> tl tr bl br
Each quadrant is re-letterboxed onto cream #F5F0E6 at 512x512 and written to
public/img/ai-generated/<word>.jpg. Pass "-" for a quadrant to skip it.
"""
import sys, os
from PIL import Image

DST = r'C:\Users\noahn\OneDrive\Desktop\CroLearn\public\img\ai-generated'
CREAM = (245, 240, 230)
OUT = 512

src = sys.argv[1]
names = sys.argv[2:6]
im = Image.open(src).convert('RGB')
W, H = im.size
hw, hh = W // 2, H // 2
boxes = [(0, 0, hw, hh), (hw, 0, W, hh), (0, hh, hw, H), (hw, hh, W, H)]

for name, box in zip(names, boxes):
    if name == '-':
        continue
    q = im.crop(box)
    canvas = Image.new('RGB', (OUT, OUT), CREAM)
    sc = min(OUT / q.width, OUT / q.height)
    q = q.resize((max(1, int(q.width * sc)), max(1, int(q.height * sc))), Image.LANCZOS)
    canvas.paste(q, ((OUT - q.width) // 2, (OUT - q.height) // 2))
    p = os.path.join(DST, name + '.jpg')
    canvas.save(p, quality=92)
    print('SPLIT', name, os.path.getsize(p))
print('DONE')
