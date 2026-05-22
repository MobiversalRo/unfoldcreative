"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    { num: "01", title: t("step1_title"), desc: t("step1_desc") },
    { num: "02", title: t("step2_title"), desc: t("step2_desc") },
    { num: "03", title: t("step3_title"), desc: t("step3_desc") },
    { num: "04", title: t("step4_title"), desc: t("step4_desc") },
  ];

  return (
    <section id="process" className="bg-[#111] py-24 lg:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: images stacked */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-72 col-span-2">
              <Image
                src="/images/workshop.jpeg"
                alt="Shoe workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-52">
              <Image
                src="/images/sewing.jpeg"
                alt="Shoe sewing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-52">
              <Image
                src="/images/leather-swatches.jpeg"
                alt="Leather materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 col-span-2">
              <Image
                src="/images/leather-rolls.jpeg"
                alt="Leather rolls"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: steps */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] uppercase whitespace-pre-line mb-16">
              {t("title")}
            </h2>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="group flex gap-8 py-8 border-t border-white/10 hover:border-white/30 transition-colors duration-300 last:border-b"
                >
                  <span className="text-white/20 text-sm font-mono shrink-0 mt-1">{step.num}</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg uppercase tracking-widest mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
