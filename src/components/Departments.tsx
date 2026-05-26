"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import HoverImage from "./HoverImage";

export default function Departments() {
  const t = useTranslations("departments");

  return (
    <section id="departments" className="bg-white text-black pt-20 lg:pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[30px] font-bold uppercase underline underline-offset-4 mb-16">
          {t("heading")}
        </h2>

        {/* ── 3-column editorial intro: narrow | wide | narrow ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-6 items-start">

          {/* Left: shoe lasts — colour default, B&W on hover */}
          <div className="relative aspect-[2/3] min-h-[360px] overflow-hidden">
            <HoverImage
              colorSrc="/images/shoe-lasts-pink.jpeg"
              bwSrc="/images/shoe-lasts-bw.jpeg"
              alt="Shoe lasts"
              sizes="(max-width: 1024px) 100vw, 20vw"
            />
          </div>

          {/* Center: intro text + technical shoe sketch */}
          <div className="flex flex-col gap-8 lg:px-8">
            <p className="text-[15px] leading-relaxed text-[#5E5E5E] text-center">
              {t.rich("intro_html", { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/sneaker-technical-bw.png"
                alt="Shoe technical sketches"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: two stacked images — colour default, B&W on hover */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <HoverImage
                colorSrc="/images/tools-color.jpeg"
                bwSrc="/images/tools-bw.jpeg"
                alt="Workshop tools"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <HoverImage
                colorSrc="/images/sneaker-fabric-color.jpeg"
                bwSrc="/images/sneaker-fabric-bw.jpeg"
                alt="Sneaker on fabric"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
