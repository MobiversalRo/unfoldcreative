"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface SubSectionProps {
  heading: string;
  body: React.ReactNode;
  images: { src: string; alt: string }[];
  reverse?: boolean;
}

function SubSection({ heading, body, images, reverse }: SubSectionProps) {
  return (
    <div className={`py-16 border-t border-black/10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${reverse ? "lg:[direction:rtl]" : ""}`}>
      {/* Images */}
      <div className={`flex gap-4 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        {images.map((img, i) => (
          <div key={i} className="relative flex-1 aspect-[3/4] min-h-[280px]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-bold uppercase underline underline-offset-4 mb-6">
          {heading}
        </h3>
        <p className="text-base leading-relaxed text-black/75">{body}</p>
      </div>
    </div>
  );
}

export default function Departments() {
  const t = useTranslations("departments");

  return (
    <section id="departments" className="bg-white text-black py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase underline underline-offset-4 mb-10">
          {t("heading")}
        </h2>

        {/* Intro text */}
        <p className="text-lg leading-relaxed text-black/75 mb-12 max-w-3xl">
          {t.rich("intro_html", { strong: (chunks) => <strong>{chunks}</strong> })}
        </p>

        {/* Intro 3-image row */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { src: "/images/shoe-lasts-pink.jpeg", alt: "Shoe lasts" },
            { src: "/images/shoe-sketches.jpeg", alt: "Shoe sketches" },
            { src: "/images/leather-swatches.jpeg", alt: "Leather swatches" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        {/* TRENDRESEARCH */}
        <SubSection
          heading={t("trend.heading")}
          body={t("trend.body")}
          images={[
            { src: "/images/design-workspace.png", alt: "Design workspace" },
            { src: "/images/shoe-sketches.jpeg", alt: "Shoe sketches" },
          ]}
        />

        {/* DESIGN / STYLE */}
        <SubSection
          heading={t("design.heading")}
          body={t.rich("design.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { src: "/images/shoe-sketches.jpeg", alt: "Shoe sketches" },
            { src: "/images/designer-sketch.png", alt: "Designer sketch" },
          ]}
          reverse
        />

        {/* SOURCING */}
        <SubSection
          heading={t("sourcing.heading")}
          body={t("sourcing.body")}
          images={[
            { src: "/images/leather-rolls.jpeg", alt: "Leather rolls" },
            { src: "/images/leather-swatches.jpeg", alt: "Leather swatches" },
          ]}
        />

        {/* LABORATORY */}
        <SubSection
          heading={t("laboratory.heading")}
          body={t.rich("laboratory.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { src: "/images/workshop.jpeg", alt: "Workshop" },
            { src: "/images/tools.jpeg", alt: "Tools" },
          ]}
          reverse
        />

        {/* GRAPHICS */}
        <SubSection
          heading={t("graphics.heading")}
          body={t.rich("graphics.body_html", { strong: (c) => <strong>{c}</strong> })}
          images={[
            { src: "/images/robot-shoe.png", alt: "Robot shoe" },
            { src: "/images/design-workspace.png", alt: "Design workspace" },
          ]}
        />
      </div>
    </section>
  );
}
