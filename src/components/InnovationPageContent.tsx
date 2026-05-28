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
    imageWidth: "27%",   // 307pt — same physical width as pillar1
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

        /* ── Image LEFT, word RIGHT ── */
        if (pillar.imageLeft) {
          return (
            <div key={pillar.wordKey} className="flex items-start px-[5%] py-14">
              {/* Media */}
              <div className="flex-shrink-0" style={{ width: pillar.imageWidth }}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: pillar.aspect }}
                >
                  <PillarMedia pillar={pillar} sizes="(max-width: 768px) 90vw, 30vw" />
                </div>
              </div>
              {/* Word — left edge nudges over image right edge */}
              <div className="flex-1 flex items-start pt-2">
                <h2 className="text-[87px] font-black leading-none tracking-tight relative z-10 lg:-translate-x-[28px]">
                  {word}
                </h2>
              </div>
            </div>
          );
        }

        /* ── Word LEFT, image RIGHT — staggered up to overlap previous section ── */
        return (
          <div key={pillar.wordKey} className="flex items-end px-[5%] pb-14 mt-[-12vw]">
            {/* Word — right-aligned so its right edge sits at the column boundary,
                then a small translate pushes it over the image left edge */}
            <div className="flex-1 pb-2 relative z-10 mb-16">
              <h2 className="text-[87px] font-black leading-none tracking-tight text-right lg:translate-x-[32px]">
                {word}
              </h2>
            </div>
            {/* Media */}
            <div className="flex-shrink-0" style={{ width: pillar.imageWidth }}>
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: pillar.aspect }}
              >
                <PillarMedia pillar={pillar} sizes="(max-width: 768px) 90vw, 30vw" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
