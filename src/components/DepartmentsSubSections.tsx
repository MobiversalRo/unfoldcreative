"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import HoverImage from "./HoverImage";

interface SubSectionProps {
  heading: string;
  body: React.ReactNode;
  images: { colorSrc: string; bwSrc?: string; alt: string }[];
  reverse?: boolean;
}

function SubSection({ heading, body, images, reverse }: SubSectionProps) {
  return (
    <div
      className={`py-16 border-t border-black/10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Images */}
      <div className={`flex gap-4 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        {images.map((img, i) => (
          <div
            key={i}
            className="relative flex-1 aspect-[4/3] min-h-[240px] overflow-hidden"
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

      {/* Text */}
      <div className={`flex flex-col justify-center ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <h3 className="text-[30px] font-bold uppercase underline underline-offset-4 mb-6">
          {heading}
        </h3>
        <p className="text-[15px] leading-relaxed text-[#5E5E5E]">{body}</p>
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
          body={t.rich("trend.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { colorSrc: "/images/trend-workspace.png", alt: "Trend research workspace" },
          ]}
        />

        {/* ── DESIGN / STYLE — text left, single illustration right ── */}
        <SubSection
          heading={t("design.heading")}
          body={t.rich("design.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { colorSrc: "/images/shoe-sketches.jpeg", alt: "Shoe design sketches" },
          ]}
          reverse
        />

        {/* ── SOURCING — two leather images left, text right ── */}
        <SubSection
          heading={t("sourcing.heading")}
          body={t.rich("sourcing.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { colorSrc: "/images/leather-stacked-color.jpeg", alt: "Stacked leather rolls" },
            { colorSrc: "/images/leather-samples-color.jpeg", alt: "Leather colour samples" },
          ]}
        />

        {/* ── LABORATORY — text left, workshop + sewing images right ── */}
        <SubSection
          heading={t("laboratory.heading")}
          body={t.rich("laboratory.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { colorSrc: "/images/workshop-color.jpeg", alt: "Workshop shoe last" },
            { colorSrc: "/images/sewing-color.jpeg", alt: "Industrial sewing machine" },
          ]}
          reverse
        />

        {/* ── GRAPHICS — sneaker + floral images left, text right ── */}
        <SubSection
          heading={t("graphics.heading")}
          body={t.rich("graphics.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { colorSrc: "/images/sneaker-running-illustration.png", alt: "Running shoe technical illustration" },
            { colorSrc: "/images/graphics-floral.png", alt: "Floral graphic print" },
          ]}
        />

      </div>
    </section>
  );
}
