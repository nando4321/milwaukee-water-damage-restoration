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
) -> None:
    w, h = size
    upper = vertical_gradient(size, top, mid)
    lower = vertical_gradient(size, mid, bot)
    split = Image.linear_gradient("L").resize((w, h))
    img = Image.composite(lower, upper, split)

    shade = Image.new("RGB", size, (4, 10, 28))
    vig = Image.new("L", size, 0)
    vdraw = ImageDraw.Draw(vig)
    vdraw.ellipse((-int(w * 0.15), -int(h * 0.2), int(w * 1.15), int(h * 1.15)), fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(radius=80))
    img = Image.composite(img, shade, vig)

    bands = Image.new("RGBA", size, (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(bands)
    for i in range(7):
        y0 = int(h * (0.56 + i * 0.065))
        bdraw.rectangle((0, y0, w, y0 + 14), fill=(255, 255, 255, 18 - i * 2))
    img = Image.alpha_composite(img.convert("RGBA"), bands)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", max(22, w // 40))
        small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", max(14, w // 68))
    except OSError:
        font = ImageFont.load_default()
        small = font

    plate = Image.new("RGBA", size, (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(plate)
    title = label
    sub = "Placeholder · will be replaced"
    tb = pdraw.textbbox((0, 0), title, font=font)
    sb = pdraw.textbbox((0, 0), sub, font=small)
    box_w = max(tb[2] - tb[0], sb[2] - sb[0]) + 72
    box_h = (tb[3] - tb[1]) + (sb[3] - sb[1]) + 56
    x0, y0 = 40, h - box_h - 40
    pdraw.rounded_rectangle((x0, y0, x0 + box_w, y0 + box_h), radius=10, fill=(6, 30, 96, 210))
    pdraw.text((x0 + 28, y0 + 18), title, font=font, fill=(255, 255, 255, 255))
    pdraw.text((x0 + 28, y0 + 22 + (tb[3] - tb[1]) + 8), sub, font=small, fill=(27, 189, 255, 255))
    img = Image.alpha_composite(img, plate).convert("RGB")

    dest = OUT / name
    img.save(dest, "JPEG", quality=86, optimize=True)
    print(f"wrote {dest.name} ({w}x{h})")


SPECS: list[tuple] = [
    ("hero.jpg", (1920, 1100), (8, 18, 42), (12, 52, 96), (6, 22, 48), "Hero · water damage interior"),
    ("water-extraction.jpg", (1400, 933), (10, 28, 56), (18, 78, 118), (8, 30, 50), "Water extraction"),
    ("drying-equipment.jpg", (1400, 933), (20, 24, 36), (52, 62, 76), (16, 20, 28), "Drying equipment"),
    ("mold-remediation.jpg", (1400, 933), (22, 36, 30), (40, 78, 58), (16, 28, 24), "Mold remediation"),
    ("rebuild.jpg", (1400, 933), (48, 38, 28), (104, 84, 54), (32, 26, 20), "Rebuild after water damage"),
    ("milwaukee-skyline.jpg", (1600, 1000), (12, 22, 48), (30, 62, 118), (8, 16, 32), "Milwaukee skyline"),
    ("waukesha-street.jpg", (1600, 1000), (36, 40, 44), (84, 88, 94), (24, 26, 30), "Waukesha County street"),
    ("about-crew.jpg", (1400, 933), (18, 26, 44), (36, 56, 86), (12, 18, 32), "Local restoration crew"),
    ("office.jpg", (1400, 933), (40, 44, 50), (94, 98, 104), (28, 30, 34), "Brookfield office"),
    ("og.jpg", (1200, 630), (6, 20, 64), (10, 52, 118), (4, 14, 40), "Milwaukee Water Damage Restoration"),
]

for i in range(1, 7):
    SPECS.append(
        (
            f"gallery-{i}.jpg",
            (1200, 800),
            (10 + i * 3, 22 + i * 2, 40 + i * 2),
            (22 + i * 7, 46 + i * 5, 74 + i * 3),
            (8 + i * 2, 16 + i * 2, 28 + i),
            f"Project gallery {i}",
        )
    )


if __name__ == "__main__":
    for spec in SPECS:
        make_image(*spec)
    print(f"generated {len(SPECS)} images in {OUT}")
