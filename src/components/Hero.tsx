"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

const COORDINATES = [
  { text: "27° 18' N / 78° 01' O", top: "12%", left: "5%" },
  { text: "41° 53' N / 12° 28' O", top: "20%", left: "60%" },
  { text: "38° 15' N / 0° 41' W", top: "35%", left: "15%" },
  { text: "49° 12' N / 07° 36' O", top: "50%", left: "72%" },
  { text: "41° 09' N / 8° 37' W", top: "65%", left: "8%" },
  { text: "23° 2' N / 113° 43' O", top: "75%", left: "50%" },
  { text: "47° 02' N / 21° 55' O", top: "42%", left: "38%" },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#111]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-workspace.png"
          alt="Design workspace"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-[#111]/60" />
      </div>

      {/* World coordinates scattered as text */}
      {COORDINATES.map((coord, i) => (
        <span
          key={i}
          className="absolute text-white/25 text-xs tracking-widest font-mono z-10 pointer-events-none select-none"
          style={{ top: coord.top, left: coord.left }}
        >
          {coord.text}
        </span>
      ))}

      {/* Floating data-viz video */}
      <div className="absolute top-20 right-0 w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 z-10 opacity-50 mix-blend-screen pointer-events-none">
        <LazyVideo
          src="/videos/data-viz.mp4"
          poster="/images/poster-data-viz.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Spacer for full-screen feel */}
      <div className="relative z-10 flex-1" />

      {/* Bottom banner */}
      <div className="relative z-10 w-full bg-black py-5 px-6">
        <p className="text-white font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase text-center">
          {t("banner")}
        </p>
      </div>
    </section>
  );
}
