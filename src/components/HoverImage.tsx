"use client";

import Image from "next/image";

interface HoverImageProps {
  colorSrc: string;
  bwSrc: string;
  alt: string;
  sizes?: string;
  className?: string;
  /** Extra classes applied to both image layers (e.g. object-cover) */
  imgClassName?: string;
}

/**
 * Shows the colour image by default; the B&W version overlays on hover.
 * Wrap in a sized parent (e.g. relative aspect-[x/y]).
 */
export default function HoverImage({
  colorSrc,
  bwSrc,
  alt,
  sizes = "50vw",
  imgClassName = "object-cover",
}: HoverImageProps) {
  return (
    <div className="group absolute inset-0">
      {/* Colour — always visible underneath */}
      <Image
        src={colorSrc}
        alt={alt}
        fill
        className={imgClassName}
        sizes={sizes}
      />
      {/* B&W — fades in on hover */}
      <Image
        src={bwSrc}
        alt=""
        aria-hidden="true"
        fill
        className={`${imgClassName} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        sizes={sizes}
      />
    </div>
  );
}
