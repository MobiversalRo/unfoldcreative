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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-14">
          {TEAM_IMAGES.map((member, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Photo card with paper-like drop shadow */}
              <div
                className="relative w-full aspect-[3/4] overflow-hidden"
                style={{
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.12), 0 20px 50px rgba(0,0,0,0.10)",
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
