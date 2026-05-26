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

          {/* Left: shoe lasts — 223×469pt ratio */}
          <div className="relative aspect-[223/469] overflow-hidden">
            <HoverImage
              colorSrc="/images/shoe-lasts-pink.jpeg"
              bwSrc="/images/shoe-lasts-bw.jpeg"
              alt="Shoe lasts"
              sizes="(max-width: 1024px) 100vw, 20vw"
            />
          </div>

          {/* Center: text near top, sketch pinned to bottom */}
          <div className="flex flex-col lg:px-8 lg:pt-16 lg:self-stretch">
            <p className="text-[15px] leading-relaxed text-[#5E5E5E] text-center">
              {t.rich("intro_html", { strong: (chunks) => <strong className="text-black">{chunks}</strong> })}
            </p>
            <div className="relative aspect-[4/3] mt-auto">
              <Image
                src="/images/sneaker-technical-bw.png"
                alt="Shoe technical sketches"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: stretches to match left column height, images fill proportionally */}
          <div className="flex flex-col gap-4 lg:self-stretch">
            <div className="relative overflow-hidden [flex:260]">
              <HoverImage
                colorSrc="/images/tools-color.jpeg"
                bwSrc="/images/tools-bw.jpeg"
                alt="Workshop tools"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <div className="relative overflow-hidden [flex:195]">
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
