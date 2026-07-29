#!/usr/bin/env python3
"""Report split-grid bleed in the transparent PNGs of public/img.

Bleed = an opaque connected component that touches the canvas border AND is
not the image's main (largest) component. A legitimate multi-part illustration
(lightbulb rays, a floating speech bubble) sits inside the canvas, so it never
touches the border; a sliver crumbed in from the neighbouring quadrant of a 2x2
grid capture always does.

usage: python scripts/edge_audit.py [minpx]      (default minpx = 40)
"""
import os, sys, glob
import numpy as np
from PIL import Image
from scipy import ndimage

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, 'public', 'img')
MINPX = int(sys.argv[1]) if len(sys.argv) > 1 else 40


def bleed_of(path):
    im = Image.open(path)
    if im.mode != 'RGBA':
        return None
    a = np.asarray(im)[:, :, 3] > 24
    if not a.any():
        return None
    lbl, n = ndimage.label(a)
    sizes = ndimage.sum(a, lbl, range(1, n + 1))
    main = int(np.argmax(sizes)) + 1
    edge = set(np.unique(np.concatenate([lbl[0, :], lbl[-1, :], lbl[:, 0], lbl[:, -1]])))
    edge.discard(0)
    edge.discard(main)
    bad = [i for i in edge if sizes[i - 1] >= MINPX]
    return sizes[main - 1], bad, sizes


rows = []
for f in sorted(glob.glob(os.path.join(OUT, '*.png'))):
    r = bleed_of(f)
    if not r:
        continue
    big, bad, sizes = r
    if not bad:
        continue
    px = int(sum(sizes[i - 1] for i in bad))
    rows.append((px, os.path.splitext(os.path.basename(f))[0], len(bad), int(big)))

rows.sort(reverse=True)
for px, name, k, big in rows:
    print('%-16s bleedpx=%-7d blobs=%-3d main=%-8d ratio=%.4f' % (name, px, k, big, px / big))
print('TOTAL with bleed >= %dpx: %d' % (MINPX, len(rows)))
