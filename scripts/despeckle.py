#!/usr/bin/env python3
"""Remove grid-bleed specks from the transparent cut-out PNGs in public/img.

A 2x2 ChatGPT grid never splits perfectly at the exact half, so a sliver of the
neighbouring quadrant's subject can survive the crop. Those slivers are always
(a) a connected blob that is NOT the main subject and (b) touching the outer
edge of the 512x512 canvas. The real subject is centred, so it is either the
largest component or comfortably inside the frame.

Rule: drop a component only if it touches the 2px border AND it is smaller than
10% of the largest component. Everything else is kept untouched.
"""
import os, glob, sys
import numpy as np
from PIL import Image
from scipy import ndimage

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(HERE, 'public', 'img')
BORDER = 2
FRAC = 0.10

targets = sys.argv[1:]
files = ([os.path.join(IMG, t + '.png') for t in targets]
         if targets else sorted(glob.glob(os.path.join(IMG, '*.png'))))

cleaned = 0
for f in files:
    if not os.path.exists(f):
        print('MISSING', os.path.basename(f)); continue
    im = Image.open(f)
    if im.mode != 'RGBA':
        continue
    a = np.asarray(im)
    alpha = a[:, :, 3]
    solid = alpha > 24
    if not solid.any():
        continue
    lbl, n = ndimage.label(solid)
    if n < 2:
        continue
    sizes = ndimage.sum(solid, lbl, range(1, n + 1))
    biggest = sizes.max()
    b = BORDER
    edge = set(np.unique(np.concatenate([
        lbl[:b, :].ravel(), lbl[-b:, :].ravel(),
        lbl[:, :b].ravel(), lbl[:, -b:].ravel()])))
    edge.discard(0)
    drop = [i for i in range(1, n + 1)
            if i in edge and sizes[i - 1] < FRAC * biggest]
    if not drop:
        continue
    mask = np.isin(lbl, drop)
    alpha2 = alpha.copy()
    alpha2[mask] = 0
    out = a.copy()
    out[:, :, 3] = alpha2
    Image.fromarray(out, 'RGBA').save(f)
    cleaned += 1
    print('CLEAN %-18s removed %d blob(s) %s px'
          % (os.path.basename(f), len(drop), [int(sizes[i - 1]) for i in drop]))

print('despeckled %d of %d png(s)' % (cleaned, len(files)))
