#!/usr/bin/env python3
"""Remove the uniform cream background from CroLearn vocab images.

Usage:
    python scripts/remove-bg.py [SRC_DIR] [OUT_DIR]

Defaults: SRC_DIR = public/img, OUT_DIR = SRC_DIR (in place).
Reads *.jpg / *.png, writes transparent *.png over the same basename.
Images whose border is NOT a uniform cream (full-scene illustrations) are
passed through unchanged (kept opaque) so nothing is destroyed.

Deps: pip install pillow numpy scipy
"""
import os, sys, glob
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

DIST = 46  # colour-distance threshold from the sampled cream background


def remove_bg(path):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im).astype(np.int16)
    frame = np.concatenate([
        a[0:3, :, :].reshape(-1, 3), a[-3:, :, :].reshape(-1, 3),
        a[:, 0:3, :].reshape(-1, 3), a[:, -3:, :].reshape(-1, 3)])
    cream = (frame[:, 0] > 232) & (frame[:, 1] > 200) & (frame[:, 2] > 168) & (frame[:, 0] >= frame[:, 2])
    if cream.mean() < 0.55:
        return im.convert('RGBA'), False  # scene: no uniform bg -> keep full
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


def main():
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, 'public', 'img')
    out = sys.argv[2] if len(sys.argv) > 2 else src
    os.makedirs(out, exist_ok=True)
    files = sorted(glob.glob(os.path.join(src, '*.jpg')) + glob.glob(os.path.join(src, '*.png')))
    cut = scene = 0
    for f in files:
        name = os.path.splitext(os.path.basename(f))[0]
        img, did = remove_bg(f)
        img.save(os.path.join(out, name + '.png'))
        cut += did; scene += (not did)
    print(f'processed {len(files)} images: {cut} cut-outs, {scene} full-scene kept')


if __name__ == '__main__':
    main()
