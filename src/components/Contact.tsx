"use client";

import { useTranslations } from "next-intl";
import LazyVideo from "./LazyVideo";

const COORDINATES = [
  { lat: "27° 18' N", lon: "78° 01' O",  top: "18%", left: "32%" },
  { lat: "11° 53' N", lon: "12° 28' O",  top: "28%", left: "62%" },
  { lat: "38° 15' N", lon: "0° 41' W",   top: "42%", left: "14%" },
  { lat: "41° 09' N", lon: "8° 37' W",   top: "58%", left: "40%" },
  { lat: "49° 12' N", lon: "07° 36' O",  top: "38%", left: "84%" },
  { lat: "23° 2' N",  lon: "113° 43' O", top: "68%", left: "74%" },
  { lat: "47° 02' N", lon: "21° 55' O",  top: "72%", left: "12%", circle: true },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact">

      {/* ── Hero: same video as homepage ── */}
      <div className="relative overflow-hidden bg-[#111]" style={{ minHeight: "52vh" }}>
        <div className="absolute inset-0 z-0">
          <LazyVideo
            src="/videos/hero-bg.mp4"
            poster="/images/poster-hero-bg.jpeg"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-[#111]/35" />
        </div>

        {/* Coordinates */}
        {COORDINATES.map((coord, i) => (
          <span
            key={i}
            className="absolute z-10 pointer-events-none select-none"
            style={{ top: coord.top, left: coord.left }}
          >
            {coord.circle ? (
              /* Oradea — circled */
              <span className="relative inline-block">
                <span
                  className="absolute border border-white/50 rounded-full"
                  style={{ inset: "-18px", width: "80px", height: "80px" }}
                />
                <span className="text-white text-[11px] tracking-widest font-mono leading-snug block">
                  {coord.lat}
                  <br />
                  <strong>{coord.lon}</strong>
                </span>
              </span>
            ) : (
              <span className="text-white/40 text-[11px] tracking-widest font-mono leading-snug block">
                {coord.lat}
                <br />
                {coord.lon}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* ── Contact form section ── */}
      <div className="bg-white py-16 lg:py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: heading + company info */}
          <div>
            <h2 className="text-[30px] font-bold mb-10">
              {t("heading")}
            </h2>
            <div className="text-[15px] text-[#5E5E5E] space-y-1 leading-relaxed">
              <p className="mb-3">
                <span className="font-normal">Unfold</span>
                <strong className="underline underline-offset-2">Creative</strong>
                <span> S.R.L.</span>
              </p>
              <p>Ioan Corneli Nr. 2.</p>
              <p className="mb-5">410609 Oradea &nbsp; RO.</p>
              <p>info@unfoldcreative.com</p>
              <p>+ 40 778 788 571</p>
              <p>+ 49 171 44 34 179</p>
            </div>
          </div>

          {/* Right: form */}
          <form className="flex flex-col gap-6">

            {/* Row 1: Name + Surname */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("name")}</span>
                <span className="text-black/30 text-xs">········→</span>
                <input
                  type="text"
                  className="flex-1 outline-none text-sm bg-transparent"
                  aria-label={t("name")}
                />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("surname")}</span>
                <span className="text-black/30 text-xs">········→</span>
                <input
                  type="text"
                  className="flex-1 outline-none text-sm bg-transparent"
                  aria-label={t("surname")}
                />
              </div>
            </div>

            {/* Row 2: Firm + Email */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("firm")}</span>
                <span className="text-black/30 text-xs">········→</span>
                <input
                  type="text"
                  className="flex-1 outline-none text-sm bg-transparent"
                  aria-label={t("firm")}
                />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("email")}</span>
                <span className="text-black/30 text-xs">········→</span>
                <input
                  type="email"
                  className="flex-1 outline-none text-sm bg-transparent"
                  aria-label={t("email")}
                />
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

            {/* Send button — monitor frame */}
            <div className="flex">
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className="border border-black px-8 py-2 text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                >
                  {t("send")}
                </button>
                {/* Monitor stand */}
                <div className="w-[2px] h-3 bg-black/40 mx-auto" />
                <div className="w-10 h-[3px] bg-black/40" />
              </div>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
}
