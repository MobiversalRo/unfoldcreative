"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const PILLARS = [
  { image: "/images/break-rules-neon.jpeg", key: "pillar1" },
  { image: "/images/pink-heels.png", key: "pillar2" },
  { image: "/images/robot-shoe.png", key: "pillar3" },
  { image: "/images/poster-robot.png", key: "pillar4" },
];

export default function InnovationHub() {
  const t = useTranslations("innovation");

  return (
    <section id="innovation" className="bg-white text-black py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase underline underline-offset-4 mb-10">
          {t("heading")}
        </h2>

        <p className="text-lg leading-relaxed text-black/75 mb-16 max-w-3xl">
          {t.rich("intro_html", { strong: (chunks) => <strong>{chunks}</strong> })}
        </p>

        {/* 4 pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {PILLARS.map((pillar, i) => (
            <div key={i} className="relative aspect-[2/3] overflow-hidden group">
              <Image
                src={pillar.image}
                alt={t(pillar.key as "pillar1" | "pillar2" | "pillar3" | "pillar4")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl md:text-3xl tracking-[0.15em] uppercase drop-shadow-lg">
                  {t(pillar.key as "pillar1" | "pillar2" | "pillar3" | "pillar4")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
