"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TEAM_IMAGES = [
  { src: "/images/team-3.jpeg", alt: "Innovation Lab / Graphics" },
  { src: "/images/team-4.png", alt: "Designer" },
  { src: "/images/team-1.png", alt: "Managing Director" },
  { src: "/images/team-2.jpeg", alt: "Designer" },
];

export default function Team() {
  const t = useTranslations("team");
  const roles = [t("role1"), t("role2"), t("role3"), t("role4")];

  return (
    <section id="team" className="bg-white text-black py-20 lg:py-28 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 lg:gap-28">
          {TEAM_IMAGES.map((member, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Frame — white bg, gray border, 6 px mat around the image */}
              <div
                className="relative w-full"
                style={{
                  zIndex: 1,
                  padding: "8px",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.18)",
                  boxShadow:
                    "-8px 6px 10px -4px rgba(0,0,0,0.22), 8px 6px 10px -4px rgba(0,0,0,0.22)",
                }}
              >
                {/* Image inside the frame */}
                <div className="relative w-full aspect-[122/256] overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Bottom crescent shadow — thin, starts directly at image edge */}
              <div style={{ position: "relative", width: "100%", height: "40px", marginTop: "-12px", overflow: "hidden" }}>
                {/* Radial shadow: darkest at top-center (image bottom), fades down + sideways */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(0,0,0,0.38) 0%, transparent 100%)",
                }} />
                {/* White ellipse from below — clips crescent at ~8 px, matching design */}
                <div style={{
                  position: "absolute",
                  bottom: "-68%",
                  left: "-10%",
                  width: "120%",
                  height: "130%",
                  borderRadius: "50%",
                  background: "white",
                }} />
              </div>

              {/* Role label */}
              <p className="mt-24 text-[18px] font-bold tracking-wide text-center text-black">
                {roles[i]}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
