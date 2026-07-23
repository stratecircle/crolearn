#!/usr/bin/env python3
"""Background-remove ONLY the .jpg captures in public/img/ai-generated,
writing transparent public/img/<name>.png. Leaves the original .png files alone."""
import os, glob
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

DIST = 46
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(HERE, 'public', 'img', 'ai-generated')
OUT = os.path.join(HERE, 'public', 'img')


def remove_bg(path):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im).astype(np.int16)
    frame = np.concatenate([
        a[0:3, :, :].reshape(-1, 3), a[-3:, :, :].reshape(-1, 3),
        a[:, 0:3, :].reshape(-1, 3), a[:, -3:, :].reshape(-1, 3)])
    cream = (frame[:, 0] > 232) & (frame[:, 1] > 200) & (frame[:, 2] > 168) & (frame[:, 0] >= frame[:, 2])
    if cream.mean() < 0.55:
        return im.convert('RGBA'), False
    bg = np.median(frame[cream], axis=0)
    dist = np.sqrt(((a - bg) ** 2).sum(2))
    removable = dist < DIST
    lbl, _ = ndimage.label(removable)
    border = set(np.unique(np.concatenate([lbl[0, :], lbl[-1, :], lbl[:, 0], lbl[:, -1]])))
    border.discard(0)
    keepbg = np.isin(lbl, list(border))
    alpha = np.where(keepbg, 0, 255).astype(np.uint8)
    am = Image.fromarray(alpha).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.7))
    rgba = im.convert('RGBA'); rgba.putalpha(am)
    return rgba, True


files = sorted(glob.glob(os.path.join(SRC, '*.jpg')))
cut = scene = 0
for f in files:
    name = os.path.splitext(os.path.basename(f))[0]
    img, did = remove_bg(f)
    img.save(os.path.join(OUT, name + '.png'))
    cut += did; scene += (not did)
    print(('CUT ' if did else 'SCENE ') + name)
print('processed %d jpgs: %d cut-outs, %d full-scene' % (len(files), cut, scene))
