"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface HoverImageProps {
  colorSrc: string;
  bwSrc: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Desktop: B&W overlays on hover.
 * Mobile:  starts B&W, transitions to colour when scrolled into view.
 */
export default function HoverImage({
  colorSrc,
  bwSrc,
  alt,
  sizes = "50vw",
  imgClassName = "object-cover",
}: HoverImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // trigger once only
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="group absolute inset-0">
      {/* Colour — always underneath */}
      <Image
        src={colorSrc}
        alt={alt}
        fill
        className={imgClassName}
        sizes={sizes}
      />
      {/* B&W layer:
          - Mobile:   visible by default → fades out when in view
          - Desktop:  hidden by default  → fades in on hover         */}
      <Image
        src={bwSrc}
        alt=""
        aria-hidden="true"
        fill
        className={`${imgClassName} transition-opacity duration-700
          ${inView ? "opacity-0" : "opacity-100"}
          md:opacity-100 md:group-hover:opacity-0`}
        sizes={sizes}
      />
    </div>
  );
}
