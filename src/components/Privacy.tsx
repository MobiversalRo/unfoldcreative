"use client";

import { useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations("privacy");

  return (
    <section className="bg-white text-black py-24 px-8 md:px-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-[20px] font-bold tracking-wide uppercase mb-12">
          {t("heading")}
        </h1>

        {/* Placeholder — replace with actual privacy policy text */}
        <p className="text-[14px] text-[#5E5E5E] leading-relaxed">
          {t("placeholder")}
        </p>

      </div>
    </section>
  );
}
