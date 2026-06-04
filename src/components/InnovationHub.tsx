"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function InnovationHub() {
  const t = useTranslations("innovation");

  return (
    <section id="innovation" className="bg-white text-black py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Centred heading */}
        <h2 className="text-center text-[30px] font-bold uppercase underline underline-offset-4 mb-10">
          {t("heading")}
        </h2>

        {/* 3-column layout — items-end aligns all column bottoms on the same line */}
        <div className="hidden lg:flex items-end justify-center gap-6">

          {/* Left: 400×442 */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 400, height: 442 }}>
            <Image
              src="/images/robot-shoe.png"
              alt="Innovation and technology"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

          {/* Center: video + text */}
          <div className="flex flex-col" style={{ width: 590 }}>
            <div className="relative overflow-hidden" style={{ width: 590, height: 590 }}>
              <LazyVideo
                src="/videos/data-viz.mp4"
                poster="/images/poster-data-viz.png"
                className="w-full h-full object-cover"
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

          {/* Right: 400×507 */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 400, height: 507 }}>
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
