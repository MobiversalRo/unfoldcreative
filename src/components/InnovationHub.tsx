"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function InnovationHub() {
  const t = useTranslations("innovation");
  const locale = useLocale();

  return (
    <section id="innovation" className="bg-white text-black py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Centred heading */}
        <h2 className="text-center text-[30px] font-bold uppercase mb-10">
          <Link href={`/${locale}/innovation`} className="underline underline-offset-4 hover:opacity-60 transition-opacity">
            {t("heading")}
          </Link>
        </h2>

        {/* 3-column grid — items-end aligns all column bottoms on the same line */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-6 lg:items-end">

          {/* Left: 225×411pt — bottom aligned by grid */}
          <div className="relative w-full aspect-[225/411] overflow-hidden">
            <Image
              src="/images/robot-shoe.png"
              alt="Innovation and technology"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>

          {/* Center: sphere + text pushed to bottom with mt-auto */}
          <div className="flex flex-col lg:px-8 xl:px-12">
            <div className="relative w-full aspect-square">
              <LazyVideo
                src="/videos/data-viz.mp4"
                poster="/images/poster-data-viz.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-auto pt-8 mx-auto w-full">
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
                {t.rich("intro1_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] mt-5 text-center">
                {t.rich("intro2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
            </div>
          </div>

          {/* Right: 225×411pt — bottom aligned by grid */}
          <div className="relative w-full aspect-[225/411] overflow-hidden">
            <Image
              src="/images/pink-heels.png"
              alt="Creative footwear design"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
