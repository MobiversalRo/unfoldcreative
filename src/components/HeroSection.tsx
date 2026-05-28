"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

const COORDINATES = [
  { lat: "27° 18' N", lon: "78° 01' O", top: "26%", left: "37%" },
  { lat: "41° 53' N", lon: "12° 28' O", top: "34%", left: "60%" },
  { lat: "38° 15' N", lon: "0° 41' W",  top: "48%", left: "17%" },
  { lat: "49° 12' N", lon: "07° 36' O", top: "55%", left: "91%" },
  { lat: "41° 09' N", lon: "8° 37' W",  top: "74%", left: "40%"  },
  { lat: "23° 2' N",  lon: "113° 43' O",top: "90%", left: "80%" },
  { lat: "47° 02' N", lon: "21° 55' O", top: "92%", left: "19%" },
];

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-[#111]"
      style={{ minHeight: "52vh" }}
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/videos/hero-bg.mp4"
          poster="/images/poster-hero-bg.jpeg"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[#111]/35" />
      </div>

      {/* Earth globe — right edge, less than half visible */}
      <div
        className="absolute z-[5] pointer-events-none select-none"
        style={{
          left: 0,
          top: "85%",
          width: "300px",
          height: "300px",
          transform: "translateX(70%)",
          opacity: 0.70,
        }}
      >
        <Image
          src="/images/earth.png"
          alt=""
          aria-hidden
          fill
          className="object-contain"
          sizes="300px"
        />
      </div>

      {/* World coordinates */}
      {COORDINATES.map((coord, i) => (
        <span
          key={i}
          className="absolute text-[10px] tracking-widest font-mono font-bold z-10 pointer-events-none select-none leading-snug"
          style={{ top: coord.top, left: coord.left }}
        >
          <span className="text-white block">{coord.lat}</span>
          <span className="text-black block">{coord.lon}</span>
        </span>
      ))}
    </section>
  );
}
