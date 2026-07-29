#!/usr/bin/env python3
"""Erase split-grid bleed slivers from the transparent PNGs in public/img.

A bleed sliver is an opaque connected component that (a) is not the image's
main subject, (b) touches the canvas border, and (c) only reaches a short way
inward from the border it touches. A legitimate second subject — a floating
clock, a speech bubble, a stack of books — either sits clear of the border or
extends well into the canvas, so it survives.

The sliver is erased from the PNG *and* painted back to cream in the source
public/img/ai-generated/<word>.jpg, so re-running bg_jpgs.py stays clean.

usage: python scripts/debleed.py            # dry run, report only
       python scripts/debleed.py --apply    # write the fixes
"""
import os, sys, glob
import numpy as np
from PIL import Image
from scipy import ndimage

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, 'public', 'img')
SRC = os.path.join(OUT, 'ai-generated')
CREAM = (245, 240, 230)
DEPTH = 48          # px a sliver may reach inward before it counts as real art
MAXFRAC = 0.20      # and it may never be more than this share of the main subject
MINPX = 40

APPLY = '--apply' in sys.argv


def slivers(alpha):
    """Return (mask_of_slivers, [(px, depth)]) for one alpha channel."""
    a = alpha > 24
    H, W = a.shape
    lbl, n = ndimage.label(a)
    if n == 0:
        return None, []
    sizes = ndimage.sum(a, lbl, range(1, n + 1))
    main = int(np.argmax(sizes)) + 1
    edges = set(np.unique(np.concatenate([lbl[0, :], lbl[-1, :], lbl[:, 0], lbl[:, -1]])))
    edges.discard(0)
    edges.discard(main)
    objs = ndimage.find_objects(lbl)
    kill, info = [], []
    for i in edges:
        px = sizes[i - 1]
        if px < MINPX or px > sizes[main - 1] * MAXFRAC:
            continue
        ys, xs = objs[i - 1]
        d = []
        if lbl[0, :].__contains__(i) or (lbl[0, :] == i).any():
            d.append(ys.stop)
        if (lbl[-1, :] == i).any():
            d.append(H - ys.start)
        if (lbl[:, 0] == i).any():
            d.append(xs.stop)
        if (lbl[:, -1] == i).any():
            d.append(W - xs.start)
        if d and min(d) <= DEPTH:
            kill.append(i)
            info.append((int(px), int(min(d))))
    if not kill:
        return None, []
    return np.isin(lbl, kill), info


fixed = 0
for f in sorted(glob.glob(os.path.join(OUT, '*.png'))):
    name = os.path.splitext(os.path.basename(f))[0]
    im = Image.open(f)
    if im.mode != 'RGBA':
        continue
    arr = np.asarray(im).copy()
    mask, info = slivers(arr[:, :, 3])
    if mask is None:
        continue
    fixed += 1
    print('%-16s %s' % (name, ' '.join('%dpx/d%d' % t for t in info)))
    if not APPLY:
        continue
    arr[:, :, 3][mask] = 0
    Image.fromarray(arr, 'RGBA').save(f)
    j = os.path.join(SRC, name + '.jpg')
    if os.path.exists(j):
        grow = ndimage.binary_dilation(mask, iterations=3)
        ja = np.asarray(Image.open(j).convert('RGB')).copy()
        if ja.shape[:2] == grow.shape:
            ja[grow] = CREAM
            Image.fromarray(ja).save(j, quality=92)

print('%s %d png(s)' % ('fixed' if APPLY else 'would fix', fixed))
