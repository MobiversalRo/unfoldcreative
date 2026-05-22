"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  const items = [
    { num: "01", title: t("item1_title"), desc: t("item1_desc"), video: null },
    { num: "02", title: t("item2_title"), desc: t("item2_desc"), video: null },
    { num: "03", title: t("item3_title"), desc: t("item3_desc"), video: null },
    { num: "04", title: t("item4_title"), desc: t("item4_desc"), video: null },
    { num: "05", title: t("item5_title"), desc: t("item5_desc"), video: null },
    {
      num: "06",
      title: t("item6_title"),
      desc: t("item6_desc"),
      video: "/videos/robot-shoe.mp4",
      poster: "/images/poster-robot.png",
    },
  ];

  return (
    <section id="services" className="bg-[#111] py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] uppercase whitespace-pre-line">
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/10">
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`group relative overflow-hidden p-8 lg:p-10 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300
                ${i % 3 !== 2 ? "lg:border-r border-white/10" : ""}
                ${i % 2 === 0 ? "md:border-r border-white/10 lg:border-r-0" : ""}
                ${i % 3 !== 2 ? "lg:border-r" : ""}
              `}
            >
              {/* Video background for AI card */}
              {item.video && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <video
                    src={item.video}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-white/20 text-xs tracking-widest mb-6 font-mono">{item.num}</p>
              <h3 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
