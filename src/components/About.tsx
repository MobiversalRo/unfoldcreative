"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-16">
          {t("label")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] uppercase whitespace-pre-line mb-8">
              {t("title")}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              {t("description")}
            </p>
            <blockquote className="border-l-2 border-white/30 pl-6">
              <p className="text-white text-xl italic font-light">&ldquo;{t("quote")}&rdquo;</p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-white text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 col-span-2">
              <Image
                src="/images/designer-portrait.jpeg"
                alt="Unfold Creative designer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="/images/fashion-illustration.jpeg"
                alt="Fashion illustration"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="/images/designer-sketch.png"
                alt="Designer at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
