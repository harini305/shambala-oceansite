"""
Build optimised web derivatives from the original site assets.

Reads only from docs/source-audit/original-assets/ (never modified) and writes
cropped / resized WebP files (plus one JPEG fallback each) to public/images/,
and a JSON manifest (src/data/images.json) with intrinsic sizes and the source
file and crop box of every derivative. Only derivatives the pages use are listed.

Many originals are multi-photo collage strips or banners with baked-in text;
the crop boxes below isolate single real photographs and exclude the text.

Run:  python scripts/build-images.py
"""
import json
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "original-assets")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")
WIDTHS = [480, 800, 1200, 1600]  # 1600 covers the widest column on 2x screens
FALLBACK_WIDTH = 800  # single JPEG for the rare browser without WebP

# name: (source path, crop box (left, top, right, bottom) or None)
DERIVATIVES = {
    # Banner AAA-BANNER-SHAMBALA-OCEAN.jpg: three photos above a text bar
    "villa-night": ("images/AAA-BANNER-SHAMBALA-OCEAN.jpg", (1440, 0, 2000, 555)),
    "villa-interior": ("images/AAA-BANNER-SHAMBALA-OCEAN.jpg", (615, 0, 1430, 535)),
    # Banner AAA-BANNER ROOMSKRISHNA 2000.jpg ("Shambala Villas" text excluded)
    "villa-living": ("images/AAA-BANNER ROOMSKRISHNA 2000.jpg", (432, 0, 995, 678)),
    "villa-bed": ("images/AAA-BANNER ROOMSKRISHNA 2000.jpg", (1042, 0, 1565, 540)),
    # Banner AAA-BANNER BABAJ.jpg (House on Stilts)
    "babaji-veranda": ("images/AAA-BANNER BABAJ.jpg", (1150, 100, 2330, 860)),
    # Strip rate-img4.png (2-level octagon villas, garden view)
    "octagon-garden": ("images/rate-img4.png", (400, 0, 673, 282)),
    "octagon-bedroom": ("images/rate-img4.png", (675, 0, 1069, 282)),
    # Strip rate-img14.png (single-story octagon bungalows)
    "bungalow-exterior": ("images/rate-img14.png", (570, 0, 849, 287)),
    # Strip rate-img6.png (meditation and yoga hall)
    "hall-interior": ("images/rate-img6.png", (0, 0, 330, 331)),
    "hall-meditation": ("images/rate-img6.png", (332, 0, 697, 331)),
    # Strip LongStay/images/groupbooking-img12.jpg
    "ocean-scarf": ("LongStay/images/groupbooking-img12.jpg", (0, 0, 398, 442)),
    "sea-yoga": ("LongStay/images/groupbooking-img12.jpg", (399, 0, 737, 442)),
    "offering": ("LongStay/images/groupbooking-img12.jpg", (738, 0, 1327, 442)),
    # Strip temple-img2.jpg (Les waterfall)
    "waterfall": ("images/temple-img2.jpg", (658, 0, 1326, 282)),
    # Strip activities-img4.jpg (temple ceremony)
    "ceremony": ("images/activities-img4.jpg", (562, 0, 1326, 431)),
    # Banner DOLPHINS & SUNRISE (headline text excluded)
    "dolphins": ("images2/banners/DOLPHINS & SUNRISE at SHAMBALA-1.jpg", (1000, 210, 2000, 765)),
    "fishing-boats": ("images2/banners/DOLPHINS & SUNRISE at SHAMBALA-1.jpg", (0, 210, 990, 765)),
    # Single photographs (no crop)
    "welcome-ceremony": ("images/AAA-COUPLE ENTERING SHAMBALA BANNER(1).jpg", None),
    "pool": ("images/pool.jpeg", None),
    "flower-bath": ("images2/FLOWER BATH.jpg", None),
    "yoga-sumane": ("images/YOGA SUMANE2022.jpg", None),
    "road-sign": ("images/AAA-ROAD SIGN Shambala.png", None),
    "site-map": ("images/GOOGLE SHAMBALA OVERVIEW.jpg", None),
}


def save(im, name):
    w, h = im.size
    cap = min(w, WIDTHS[-1])
    sizes = sorted({x for x in WIDTHS if x < cap} | {cap})
    resized = lambda sw: im if sw == w else im.resize((sw, round(h * sw / w)), Image.LANCZOS)
    for sw in sizes:
        resized(sw).save(os.path.join(OUT, f"{name}-{sw}.webp"), "WEBP", quality=78, method=6)
    fallback = min(w, FALLBACK_WIDTH)
    resized(fallback).save(os.path.join(OUT, f"{name}-{fallback}.jpg"), "JPEG", quality=78, optimize=True, progressive=True)
    return {"width": w, "height": h, "sizes": sizes, "fallback": fallback}


def main():
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    manifest = {}
    for name, (rel, box) in DERIVATIVES.items():
        im = Image.open(os.path.join(SRC, rel)).convert("RGB")
        if box:
            im = im.crop(box)
        manifest[name] = {**save(im, name), "source": rel, "crop": box}
    # Logo: shown at 48px in the header; one 96px WebP is sharp on 2x screens
    logo = Image.open(os.path.join(SRC, "images/logo.png")).convert("RGB")
    logo.resize((96, 96), Image.LANCZOS).save(os.path.join(OUT, "logo-96.webp"), "WEBP", quality=90, method=6)
    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    print(f"{len(manifest)} derivatives written to {OUT}")


if __name__ == "__main__":
    main()
