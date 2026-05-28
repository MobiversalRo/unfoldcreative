"use client";

import { useTranslations } from "next-intl";
import HeroSection from "./HeroSection";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <HeroSection />
      <div className="w-full bg-black py-8 px-6">
        <p className="text-white font-light text-2xl md:text-4xl lg:text-[36px] tracking-[0.12em] uppercase text-center">
          {t("bannerLine1")}<br />{t("bannerLine2")}
        </p>
      </div>
    </>
  );
}
