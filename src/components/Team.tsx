"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TEAM_IMAGES = [
  { src: "/images/fashion-illustration.jpeg", alt: "Managing Director" },
  { src: "/images/designer-portrait.jpeg", alt: "Designer" },
  { src: "/images/designer-sketch.png", alt: "Innovation Lab / Graphics" },
  { src: "/images/shoe-sketches.jpeg", alt: "Designer" },
];

export default function Team() {
  const t = useTranslations("team");

  const roles = [t("role1"), t("role2"), t("role3"), t("role4")];

  return (
    <section id="team" className="bg-white text-black py-20 lg:py-28 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TEAM_IMAGES.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="text-sm font-medium tracking-wide text-center text-black/70">
                {roles[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
