"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TEAM_IMAGES = [
  { src: "/images/team-1.png", alt: "Managing Director" },
  { src: "/images/team-2.jpeg", alt: "Designer" },
  { src: "/images/team-3.jpeg", alt: "Innovation Lab / Graphics" },
  { src: "/images/team-4.png", alt: "Designer" },
];

export default function Team() {
  const t = useTranslations("team");
  const roles = [t("role1"), t("role2"), t("role3"), t("role4")];

  return (
    <section id="team" className="bg-white text-black py-20 lg:py-28 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
          {TEAM_IMAGES.map((member, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Photo card — 122×256pt ratio, elliptical bottom shadow */}
              <div
                className="relative w-full aspect-[122/256] overflow-hidden"
                style={{
                  boxShadow: "0 28px 28px -12px rgba(0,0,0,0.30)",
                }}
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Role label */}
              <p className="mt-8 text-[15px] font-bold tracking-wide text-center text-black">
                {roles[i]}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
