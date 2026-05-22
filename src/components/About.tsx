"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const tAbout = useTranslations("about");
  const tMission = useTranslations("mission");

  return (
    <>
      {/* ABOUT US */}
      <section id="about" className="bg-white text-black py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase underline underline-offset-4 mb-14">
            {tAbout("heading")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/sewing-bw.png"
                alt="Sewing workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: text */}
            <div className="flex items-center">
              <p className="text-lg leading-relaxed text-black/80">
                {tAbout("body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white text-black py-20 lg:py-28 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase underline underline-offset-4 mb-14">
            {tMission("heading")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: text */}
            <div className="flex items-center">
              <p className="text-lg leading-relaxed text-black/80">
                {tMission.rich("body_html", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>

            {/* Right: image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/love-shoe-bw.jpg"
                alt="Love script heel shoe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
