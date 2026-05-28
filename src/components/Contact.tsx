"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "./HeroSection";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact">

      {/* ── Hero: shared with homepage ── */}
      <HeroSection />

      {/* ── Contact form section ── */}
      <div className="bg-white py-16 lg:py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: heading + company info */}
          <div>
            <h2 className="text-[20px] font-bold mb-10">
              {t("heading")}
            </h2>
            <div className="text-[14px] text-[#5E5E5E] leading-relaxed">

              {/* Company name — full underline */}
              <p className="underline underline-offset-2 mb-4">
                <span>Unfold</span><strong className="text-black">Creative</strong><span> S.R.L.</span>
              </p>

              {/* Address + contact in two columns */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-x-10">
                  <span>Ioan Corneli Nr. 2.</span>
                  <span>info@unfoldcreative.com</span>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                  <span>410609 Oradea &nbsp; RO.</span>
                  <div className="flex flex-col">
                    <span>+ 40 778 788 571</span>
                    <span>+ 49 171 44 34 179</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: form */}
          <form className="flex flex-col gap-6">

            {/* Row 1: Name + Surname */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("name")}</span>
                <input
                  type="text"
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("name")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("surname")}</span>
                <input
                  type="text"
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("surname")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
            </div>

            {/* Row 2: Firm + Email */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("firm")}</span>
                <input
                  type="text"
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("firm")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("email")}</span>
                <input
                  type="email"
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("email")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
            </div>

            {/* Message */}
            <div className="border-b border-black/25 pb-16">
              <span className="text-sm text-[#5E5E5E] block mb-3">{t("message")}</span>
              <textarea
                rows={1}
                className="w-full outline-none text-sm bg-transparent resize-none"
                aria-label={t("message")}
              />
            </div>

            {/* Privacy checkbox */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border border-black/50 flex-shrink-0" />
              <span className="text-sm text-[#5E5E5E]">
                {t("privacy")} <strong>{t("privacyLink")}</strong>
              </span>
            </div>

            {/* Send button */}
            <div className="flex">
              <button type="submit" className="relative group">
                <Image
                  src="/images/send.png"
                  alt={t("send")}
                  width={70}
                  height={40}
                  className="block"
                />
                <span className="absolute inset-x-0 top-0 h-[77%] flex items-center justify-center text-sm font-bold tracking-widest uppercase">
                  {t("send")}
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
}
