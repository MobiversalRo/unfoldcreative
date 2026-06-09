"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import HoverImage from "./HoverImage";

interface SubSectionProps {
  heading: string;
  body: React.ReactNode;
  body2?: React.ReactNode;
  images: { colorSrc: string; bwSrc?: string; alt: string; width?: number; height?: number }[];
  reverse?: boolean;
  imageAspect?: string; // e.g. "403/228"
}

function SubSection({ heading, body, body2, images, reverse, imageAspect }: SubSectionProps) {
  return (
    <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* Images — pushed to right column on reversed sections via order */}
      <div className={`flex gap-4 ${reverse ? "lg:order-2 lg:justify-end" : "lg:order-1"}`}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${img.width ? "" : "flex-1 min-h-[240px]"}`}
            style={
              img.width && img.height
                ? { width: img.width, height: img.height }
                : { aspectRatio: imageAspect ?? "4/3" }
            }
          >
            {img.bwSrc ? (
              <HoverImage
                colorSrc={img.colorSrc}
                bwSrc={img.bwSrc}
                alt={img.alt}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <Image
                src={img.colorSrc}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            )}
          </div>
        ))}
      </div>

      {/* Text — heading nudges over the adjacent image edge */}
      <div className={`flex flex-col ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <h3
          className={`text-[30px] font-bold uppercase mb-8 relative z-10 ${
            reverse
              ? "lg:text-right lg:translate-x-[76px]"  /* text on LEFT, right-aligned → right edge drifts into image */
              : "lg:-translate-x-[76px]"               /* text on RIGHT, left-aligned → left  edge drifts into image */
          }`}
        >
          {heading}
        </h3>
        <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center mt-8">{body}</p>
        {body2 && (
          <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center mt-5">{body2}</p>
        )}
      </div>

    </div>
  );
}

export default function DepartmentsSubSections() {
  const t = useTranslations("departments");

  return (
    <section className="bg-white text-black pt-12 pb-20 lg:pb-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── TRENDRESEARCH — single image left, text right ── */}
        <SubSection
          heading={t("trend.heading")}
          body={t.rich("trend.body_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          body2={t.rich("trend.body2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          images={[
            { colorSrc: "/images/trend-workspace.png", alt: "Trend research workspace" },
          ]}
          imageAspect="403/228"
        />

        {/* ── DESIGN / STYLE — text left, single illustration right ── */}
        <SubSection
          heading={t("design.heading")}
          body={t.rich("design.body_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          body2={t.rich("design.body2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          images={[
            { colorSrc: "/images/shoe-sketches.jpeg", alt: "Shoe design sketches" },
          ]}
          reverse
        />

        {/* ── SOURCING — two leather images left, text right ── */}
        <SubSection
          heading={t("sourcing.heading")}
          body={t.rich("sourcing.body_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          images={[
            { colorSrc: "/images/leather-stacked-color.jpeg", alt: "Stacked leather rolls", width: 336, height: 327 },
            { colorSrc: "/images/leather-samples-color.jpeg", alt: "Leather colour samples", width: 356, height: 327 },
          ]}
        />

        {/* ── LABORATORY — text left, workshop + sewing images right ── */}
        <SubSection
          heading={t("laboratory.heading")}
          body={t.rich("laboratory.body_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          body2={t.rich("laboratory.body2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          images={[
            { colorSrc: "/images/workshop-color.jpeg", alt: "Workshop shoe last", width: 370, height: 340 },
            { colorSrc: "/images/sewing-color.jpeg", alt: "Industrial sewing machine", width: 275, height: 340 },
          ]}
          reverse
        />

        {/* ── GRAPHICS — sneaker + floral images left, text right ── */}
        <SubSection
          heading={t("graphics.heading")}
          body={t.rich("graphics.body_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          images={[
            { colorSrc: "/images/sneaker-running-illustration.jpeg", alt: "Running shoe technical illustration", width: 336, height: 327 },
            { colorSrc: "/images/graphics-floral.png", alt: "Floral graphic print", width: 356, height: 327 },
          ]}
        />

      </div>
    </section>
  );
}
