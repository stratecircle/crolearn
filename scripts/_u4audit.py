import os
W = "kruh sir jabuka juha salata riba meso mlijeko sok gledati kuhati cekati rucati vecerati dorucak rucak vecera piti jesti voljeti zeljeti pivo vino voce povrce htjeti gladan zedan kolac sladoled cokolada jelovnik racun kafic restoran jos dobartek zivjeli".split()
ROOT = r"C:\Users\noahn\OneDrive\Desktop\CroLearn\public\img"
AI = os.path.join(ROOT, "ai-generated")
nojpg, nopng, both = [], [], []
for w in W:
    j = os.path.exists(os.path.join(AI, w + ".jpg"))
    p = os.path.exists(os.path.join(ROOT, w + ".png"))
    if not j:
        nojpg.append(w)
    if not p:
        nopng.append(w)
    if j and p:
        both.append(w)
print("TOTAL", len(W))
print("NO_JPG", " ".join(nojpg) or "-")
print("NO_PNG", " ".join(nopng) or "-")
print("OK", len(both))
