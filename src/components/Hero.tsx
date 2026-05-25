"use client";

import { useTranslations } from "next-intl";
import LazyVideo from "./LazyVideo";

const COORDINATES = [
  { lat: "27° 18' N", lon: "78° 01' O", top: "12%", left: "5%" },
  { lat: "41° 53' N", lon: "12° 28' O", top: "20%", left: "60%" },
  { lat: "38° 15' N", lon: "0° 41' W", top: "35%", left: "15%" },
  { lat: "49° 12' N", lon: "07° 36' O", top: "50%", left: "72%" },
  { lat: "41° 09' N", lon: "8° 37' W", top: "65%", left: "8%" },
  { lat: "23° 2' N", lon: "113° 43' O", top: "75%", left: "50%" },
  { lat: "47° 02' N", lon: "21° 55' O", top: "42%", left: "38%" },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#111]" style={{ minHeight: "62vh" }}>
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/videos/hero-bg.mp4"
          poster="/images/poster-hero-bg.jpeg"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[#111]/35" />
      </div>

      {/* World coordinates — two-line format matching Figma */}
      {COORDINATES.map((coord, i) => (
        <span
          key={i}
          className="absolute text-white/30 text-[11px] tracking-widest font-mono z-10 pointer-events-none select-none leading-snug"
          style={{ top: coord.top, left: coord.left }}
        >
          {coord.lat}
          <br />
          {coord.lon}
        </span>
      ))}

      {/* Spacer */}
      <div className="relative z-10 flex-1" />

      {/* Bottom banner */}
      <div className="relative z-10 w-full bg-black py-6 px-6">
        <p className="text-white font-bold text-base md:text-lg lg:text-xl tracking-[0.12em] uppercase text-center">
          {t("banner")}
        </p>
      </div>
    </section>
  );
}
