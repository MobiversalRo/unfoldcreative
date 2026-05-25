"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const PILLARS = [
  {
    wordKey: "pillar1" as const,        // Design
    video: "/videos/robot-shoe.mp4",
    image: "/images/break-rules-neon2.jpeg",
    imageAlt: "Break The Rules neon sign",
    imageLeft: true,
  },
  {
    wordKey: "pillar2" as const,        // Creativity
    image: "/images/pink-heels.png",
    imageAlt: "Pink dripping heels",
    imageLeft: false,
  },
  {
    wordKey: "pillar3" as const,        // Technology
    video: "/videos/anim-7.mp4",
    image: "/images/robot-orange.png",
    imageAlt: "Robot arm technology",
    imageLeft: true,
  },
  {
    wordKey: "pillar4" as const,        // Innovation
    image: "/images/innovation-egg.png",
    imageAlt: "Innovation",
    imageLeft: false,
  },
];

function PillarMedia({ pillar, sizes }: {
  pillar: typeof PILLARS[number];
  sizes: string;
}) {
  if (pillar.video) {
    return (
      <video
        src={pillar.video}
        autoPlay
        loop
        muted
        playsInline
        poster={pillar.image}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }
  return (
    <Image
      src={pillar.image}
      alt={pillar.imageAlt}
      fill
      className="object-cover"
      sizes={sizes}
    />
  );
}

export default function InnovationPageContent() {
  const t = useTranslations("innovation");

  return (
    <section className="bg-white text-black overflow-hidden">
      {PILLARS.map((pillar) => {
        const word = t(pillar.wordKey);

        /* ── Image LEFT, word RIGHT ── */
        if (pillar.imageLeft) {
          return (
            <div key={pillar.wordKey} className="flex items-start px-[5%] py-14">
              {/* Media */}
              <div className="w-[34%] flex-shrink-0">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <PillarMedia pillar={pillar} sizes="34vw" />
                </div>
              </div>
              {/* Word */}
              <div className="flex-1 flex items-start pl-6 pt-2">
                <h2 className="text-[11vw] font-black leading-none tracking-tight">
                  {word}
                </h2>
              </div>
            </div>
          );
        }

        /* ── Word LEFT, image RIGHT (extends to edge) ── */
        return (
          <div key={pillar.wordKey} className="flex items-end pl-[5%] py-14">
            {/* Word */}
            <div className="flex-1 pr-6 pb-2">
              <h2 className="text-[11vw] font-black leading-none tracking-tight">
                {word}
              </h2>
            </div>
            {/* Media — flush to right edge */}
            <div className="w-[42%] flex-shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <PillarMedia pillar={pillar} sizes="42vw" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
