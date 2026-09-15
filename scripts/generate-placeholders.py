#!/usr/bin/env python3
"""Generate stable-filename placeholder JPEGs for later photo swaps."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parents[1] / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def vertical_gradient(
    size: tuple[int, int],
    top: tuple[int, int, int],
    bottom: tuple[int, int, int],
) -> Image.Image:
    w, h = size
    base = Image.new("RGB", size, top)
    overlay = Image.new("RGB", size, bottom)
    mask = Image.linear_gradient("L").resize((w, h))
    return Image.composite(overlay, base, mask)


def make_image(
    name: str,
    size: tuple[int, int],
    top: tuple[int, int, int],
    mid: tuple[int, int, int],
    bot: tuple[int, int, int],
    label: str,
    accent: tuple[int, int, int] = (180, 210, 230),
) -> None:
    w, h = size
    upper = vertical_gradient(size, top, mid)
    lower = vertical_gradient(size, mid, bot)
    split = Image.linear_gradient("L").resize((w, h))
    img = Image.composite(lower, upper, split)

    light = Image.new("RGBA", size, (0, 0, 0, 0))
    ldraw = ImageDraw.Draw(light)
    ldraw.ellipse((int(w * 0.42), -int(h * 0.25), int(w * 1.15), int(h * 0.55)), fill=(*accent, 90))
    ldraw.rectangle((0, int(h * 0.58), w, h), fill=(20, 28, 40, 55))
    img = Image.alpha_composite(img.convert("RGBA"), light)

    shade = Image.new("RGB", size, (8, 16, 32))
    vig = Image.new("L", size, 0)
    vdraw = ImageDraw.Draw(vig)
    vdraw.ellipse((-int(w * 0.08), -int(h * 0.12), int(w * 1.08), int(h * 1.08)), fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(radius=70))
    img = Image.composite(img.convert("RGB"), shade, vig)

    bands = Image.new("RGBA", size, (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(bands)
    for i in range(8):
        y0 = int(h * (0.62 + i * 0.045))
        bdraw.rectangle((0, y0, w, y0 + 10), fill=(255, 255, 255, 16 - i))
    img = Image.alpha_composite(img.convert("RGBA"), bands)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", max(20, w // 46))
        small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", max(13, w // 72))
    except OSError:
        font = ImageFont.load_default()
        small = font

    plate = Image.new("RGBA", size, (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(plate)
    title = label
    sub = "Placeholder · will be replaced"
    tb = pdraw.textbbox((0, 0), title, font=font)
    sb = pdraw.textbbox((0, 0), sub, font=small)
    box_w = max(tb[2] - tb[0], sb[2] - sb[0]) + 64
    box_h = (tb[3] - tb[1]) + (sb[3] - sb[1]) + 48
    x0, y0 = 36, h - box_h - 36
    pdraw.rounded_rectangle((x0, y0, x0 + box_w, y0 + box_h), radius=8, fill=(6, 30, 96, 200))
    pdraw.text((x0 + 24, y0 + 14), title, font=font, fill=(255, 255, 255, 255))
    pdraw.text((x0 + 24, y0 + 18 + (tb[3] - tb[1]) + 6), sub, font=small, fill=(27, 189, 255, 255))
    img = Image.alpha_composite(img, plate).convert("RGB")

    dest = OUT / name
    img.save(dest, "JPEG", quality=88, optimize=True)
    print(f"wrote {dest.name} ({w}x{h})")


SPECS: list[tuple] = [
    ("hero.jpg", (1920, 1100), (46, 78, 118), (92, 138, 176), (28, 44, 68), "Hero · water damage interior", (210, 226, 240)),
    ("water-extraction.jpg", (1400, 933), (36, 88, 128), (70, 150, 188), (22, 52, 74), "Water extraction", (170, 220, 240)),
    ("drying-equipment.jpg", (1400, 933), (72, 78, 88), (140, 148, 156), (40, 44, 50), "Drying equipment", (230, 230, 230)),
    ("mold-remediation.jpg", (1400, 933), (48, 86, 70), (88, 140, 108), (28, 48, 38), "Mold remediation", (190, 220, 190)),
    ("rebuild.jpg", (1400, 933), (120, 92, 64), (196, 154, 98), (68, 48, 32), "Rebuild after water damage", (240, 214, 170)),
    ("milwaukee-skyline.jpg", (1600, 1000), (58, 92, 150), (110, 156, 210), (24, 40, 72), "Milwaukee skyline", (200, 220, 250)),
    ("waukesha-street.jpg", (1600, 1000), (96, 100, 104), (168, 172, 176), (52, 54, 58), "Waukesha County street", (230, 230, 230)),
    ("about-crew.jpg", (1400, 933), (54, 72, 110), (96, 122, 168), (30, 40, 62), "Local restoration crew", (210, 220, 240)),
    ("office.jpg", (1400, 933), (110, 114, 120), (186, 190, 196), (58, 60, 64), "Brookfield office", (235, 235, 235)),
    ("og.jpg", (1200, 630), (20, 48, 102), (36, 92, 160), (10, 24, 56), "Milwaukee Water Damage Restoration", (160, 200, 240)),
]

for i in range(1, 7):
    SPECS.append(
        (
            f"gallery-{i}.jpg",
            (1200, 800),
            (40 + i * 8, 70 + i * 6, 100 + i * 4),
            (80 + i * 10, 120 + i * 8, 150 + i * 6),
            (24 + i * 4, 36 + i * 3, 50 + i * 2),
            f"Project gallery {i}",
            (200, 214, 230),
        )
    )


if __name__ == "__main__":
    for spec in SPECS:
        make_image(*spec)
    print(f"generated {len(SPECS)} images in {OUT}")
