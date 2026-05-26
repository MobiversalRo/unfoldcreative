"use client";

import { useTranslations } from "next-intl";

export default function ContactTeaser() {
  const t = useTranslations("contact");

  return (
    <section className="bg-white py-24 lg:py-32 px-6">
      {/* Base is the full-width reference — lid is inset so base appears wider */}
      <div className="max-w-[960px] mx-auto">

        {/* Lid — no inset on mobile, wide inset on desktop */}
        <div className="mx-0 lg:mx-20">
          {/* Frame — rounded top corners, flat bottom to connect flush with base */}
          <div className="bg-[#D5D5D5] rounded-t-[10px] p-[16px] lg:p-[24px]">
            {/* Screen — natural height on mobile, fixed ratio on desktop */}
            <div className="bg-white lg:aspect-[644/361] flex flex-col items-center justify-center text-center py-12 px-6 md:px-12 lg:py-0 lg:px-20">
              <h2 className="text-[24px] lg:text-[30px] font-bold underline underline-offset-4 mb-8 lg:mb-12">
                {t("teaser_heading")}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#5E5E5E] max-w-sm lg:max-w-md">
                {t("teaser_body1")}
              </p>
              <p className="text-[15px] leading-relaxed text-[#5E5E5E] max-w-sm lg:max-w-md mt-4">
                {t("teaser_body2")}
              </p>
            </div>
          </div>
        </div>

        {/* Base — full container width, flat top connects to lid, rounded bottom */}
        <div className="bg-[#D5D5D5] h-6 lg:h-10 rounded-b-[10px] lg:rounded-b-[14px] -mt-[10px] lg:-mt-[24px]" />

      </div>
    </section>
  );
}
