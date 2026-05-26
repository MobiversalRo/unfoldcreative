"use client";

import { useTranslations } from "next-intl";

export default function ContactTeaser() {
  const t = useTranslations("contact");

  return (
    <section className="bg-white py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-3xl">

          {/* Screen lid */}
          <div className="bg-[#d0d0d0] rounded-[20px] p-[10px] shadow-2xl">
            <div className="bg-[#f0f0f0] rounded-[12px] overflow-hidden">
              <div className="bg-white flex flex-col items-center justify-center text-center py-20 px-10 md:px-24 min-h-[380px]">
                <h2 className="text-[30px] font-bold underline underline-offset-4 mb-12">
                  {t("teaser_heading")}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#5E5E5E] max-w-md">
                  {t("teaser_body1")}
                </p>
                <p className="text-[15px] leading-relaxed text-[#5E5E5E] max-w-md mt-4">
                  {t("teaser_body2")}
                </p>
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div className="bg-[#c0c0c0] h-[6px] mx-1" />

          {/* Base */}
          <div className="bg-[#d0d0d0] h-7 rounded-b-[14px] flex items-center justify-center">
            <div className="w-20 h-[5px] rounded-full bg-[#b8b8b8]" />
          </div>

        </div>
      </div>
    </section>
  );
}
