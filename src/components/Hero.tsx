"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function Hero() {
  const t = useTranslations("hero");

  const marqueeText = "SHOES · ACCESSORIES · DESIGN · FOOTWEAR · CRAFT · INNOVATION · ";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-workspace.png"
          alt="Design workspace"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      {/* Floating data-viz video — top right */}
      <div className="absolute top-16 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 opacity-60 mix-blend-screen pointer-events-none">
        <LazyVideo
          src="/videos/data-viz.mp4"
          poster="/images/poster-data-viz.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 max-w-7xl mx-auto w-full pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 lg:gap-20">
          <div className="flex-1">
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
              Est. 2010 · Footwear Design Studio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight uppercase">
              {t("tagline").split(" ").slice(0, 4).join(" ")}{" "}
              <span className="text-white/30 italic font-light normal-case">
                {t("tagline").split(" ").slice(4).join(" ")}
              </span>
            </h1>
            <div className="mt-12">
              <a
                href="#work"
                className="inline-block border border-white text-white px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                {t("cta")}
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-80 xl:w-96 h-[400px] lg:h-[500px] shrink-0">
            <Image
              src="/images/hero-sneaker.jpeg"
              alt="Featured footwear design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative z-10 border-t border-white/10 py-4 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white/20 text-xs tracking-[0.4em] uppercase mx-8 shrink-0"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
