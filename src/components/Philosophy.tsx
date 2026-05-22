"use client";

import { useTranslations } from "next-intl";
import LazyVideo from "./LazyVideo";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section className="relative py-32 lg:py-48 px-6 overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/videos/break-rules.mp4"
          poster="/images/poster-break-rules.jpeg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-10">
          {t("label")}
        </p>

        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] uppercase whitespace-pre-line mb-12 max-w-4xl">
          {t("title")}
        </h2>

        <div className="max-w-2xl">
          <p className="text-white/50 text-lg leading-relaxed">{t("description")}</p>
        </div>
      </div>
    </section>
  );
}
