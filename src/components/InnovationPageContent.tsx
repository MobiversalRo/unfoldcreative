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
    aspect: "307/370",
    imageWidth: "27%",   // 307pt
  },
  {
    wordKey: "pillar2" as const,        // Creativity
    image: "/images/pink-heels.png",
    imageAlt: "Pink dripping heels",
    imageLeft: false,
    aspect: "307/390",
    imageWidth: "27%",   // 307pt
  },
  {
    wordKey: "pillar3" as const,        // Technology
    video: "/videos/anim-7.mp4",
    image: "/images/robot-orange.png",
    imageAlt: "Robot arm technology",
    imageLeft: true,
    aspect: "302/368",
    imageWidth: "26%",   // 302pt
  },
  {
    wordKey: "pillar4" as const,        // Innovation
    image: "/images/innovation-egg.png",
    imageAlt: "Innovation",
    imageLeft: false,
    aspect: "307/316",
    imageWidth: "27%",   // 307pt
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

        /* ════════════════════════════════════════
           MOBILE layout (< lg)
           Image ~85% width, text overlaps bottom
           edge — no flex overflow issues
        ════════════════════════════════════════ */
        const mobileBlock = pillar.imageLeft ? (
          /* image left-aligned 85%, text overlaps bottom-right */
          <div className="lg:hidden px-4 py-8">
            <div className="w-[85%]">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: pillar.aspect }}>
                <PillarMedia pillar={pillar} sizes="85vw" />
              </div>
            </div>
            <h2 className="text-[58px] font-black leading-none tracking-tight text-right -mt-7 relative z-10 pr-1">
              {word}
            </h2>
          </div>
        ) : (
          /* image right-aligned 85%, text overlaps bottom-left */
          <div className="lg:hidden px-4 pb-8 mt-[-6vw]">
            <div className="w-[85%] ml-auto">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: pillar.aspect }}>
                <PillarMedia pillar={pillar} sizes="85vw" />
              </div>
            </div>
            <h2 className="text-[58px] font-black leading-none tracking-tight -mt-7 relative z-10 pl-1">
              {word}
            </h2>
          </div>
        );

        /* ════════════════════════════════════════
           DESKTOP layout (lg+)
           Original side-by-side with large text
        ════════════════════════════════════════ */
        const desktopBlock = pillar.imageLeft ? (
          <div className="hidden lg:flex items-start px-[5%] py-14">
            <div className="flex-shrink-0" style={{ width: pillar.imageWidth }}>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: pillar.aspect }}>
                <PillarMedia pillar={pillar} sizes="30vw" />
              </div>
            </div>
            <div className="flex-1 flex items-start pt-2">
              <h2 className="text-[87px] font-black leading-none tracking-tight relative z-10 -translate-x-[28px]">
                {word}
              </h2>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex items-end px-[5%] pb-14 mt-[-12vw]">
            <div className="flex-1 pb-2 relative z-10 mb-16">
              <h2 className="text-[87px] font-black leading-none tracking-tight text-right translate-x-[32px]">
                {word}
              </h2>
            </div>
            <div className="flex-shrink-0" style={{ width: pillar.imageWidth }}>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: pillar.aspect }}>
                <PillarMedia pillar={pillar} sizes="30vw" />
              </div>
            </div>
          </div>
        );

        return (
          <div key={pillar.wordKey}>
            {mobileBlock}
            {desktopBlock}
          </div>
        );
      })}
    </section>
  );
}
