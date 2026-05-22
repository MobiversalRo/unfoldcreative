"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section className="relative py-32 lg:py-48 px-6 overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/break-rules-neon.jpeg"
          alt="Break the Rules"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
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
