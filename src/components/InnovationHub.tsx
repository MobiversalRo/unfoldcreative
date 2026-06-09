"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function InnovationHub() {
  const t = useTranslations("innovation");
  const locale = useLocale();

  return (
    <section id="innovation" className="bg-white text-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Centred heading */}
        <h2 className="text-center text-[30px] font-bold uppercase mb-10">
          <Link href={`/${locale}/innovation`} className="hover:opacity-60 transition-opacity">
            {t("heading")}
          </Link>
        </h2>

        {/* Mobile layout — stacked */}
        <div className="flex flex-col gap-6 lg:hidden overflow-hidden">
          <div className="relative w-full aspect-[400/442] overflow-hidden">
            <Image src="/images/robot-shoe.png" alt="Innovation and technology" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="relative w-full aspect-square overflow-hidden" style={{ maskImage: "radial-gradient(circle, black 55%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)" }}>
            <LazyVideo src="/videos/data-viz.mp4" poster="/images/poster-data-viz.png" className="w-full h-full object-cover" />
          </div>
          <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
            {t.rich("intro1_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          </p>
          <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
            {t.rich("intro2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
          </p>
          <div className="relative w-full aspect-[400/507] overflow-hidden">
            <Image src="/images/pink-heels.png" alt="Creative footwear design" fill className="object-cover" sizes="100vw" />
          </div>
        </div>

        {/* Desktop layout — 3-column */}
        <div className="hidden lg:flex items-end justify-center gap-28 overflow-hidden">

          {/* Left: 295×560 — starts at gif midpoint, ends with text */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 295, height: 560 }}>
            <Image
              src="/images/robot-shoe.png"
              alt="Innovation and technology"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

          {/* Center: video 505×505 + text */}
          <div className="flex flex-col" style={{ width: 505 }}>
            <div className="relative overflow-hidden" style={{ width: 505, height: 505, maskImage: "radial-gradient(circle, black 55%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)" }}>
              <LazyVideo
                src="/videos/data-viz.mp4"
                poster="/images/poster-data-viz.png"
                className="w-full h-full object-cover scale-100"
              />
            </div>
            <div className="pt-8">
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
                {t.rich("intro1_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] mt-5 text-center">
                {t.rich("intro2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
            </div>
          </div>

          {/* Right: 295×560 — starts at gif midpoint, ends with text */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 295, height: 560 }}>
            <Image
              src="/images/pink-heels.png"
              alt="Creative footwear design"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
