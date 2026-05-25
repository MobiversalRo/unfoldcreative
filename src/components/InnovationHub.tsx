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
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase underline underline-offset-4 mb-10">
          {t("heading")}
        </h2>

        {/* 3-column grid — side images aligned to bottom, starting at ~half-sphere height */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 lg:gap-6 items-stretch">

          {/* Left: pushed to bottom so it starts around halfway down the sphere */}
          <div className="flex flex-col justify-end">
            <div className="relative w-full h-[480px] lg:h-[520px] overflow-hidden">
              <Image
                src="/images/robot-shoe.png"
                alt="Innovation and technology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Center: sphere animation + two paragraphs */}
          <div className="flex flex-col lg:px-8 xl:px-12">
            <div className="relative w-full aspect-square">
              <LazyVideo
                src="/videos/data-viz.mp4"
                poster="/images/poster-data-viz.png"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base leading-relaxed text-black/70 mt-8 text-center">
              {t.rich("intro1_html", { strong: (c) => <strong>{c}</strong> })}
            </p>
            <p className="text-base leading-relaxed text-black/70 mt-5 text-center">
              {t.rich("intro2_html", { strong: (c) => <strong>{c}</strong> })}
            </p>
          </div>

          {/* Right: pushed to bottom — same height as left */}
          <div className="flex flex-col justify-end">
            <div className="relative w-full h-[480px] lg:h-[520px] overflow-hidden">
              <Image
                src="/images/pink-heels.png"
                alt="Creative footwear design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
