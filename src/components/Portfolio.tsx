"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const projects = [
  {
    image: "/images/pink-heels.png",
    title: "Editorial Collection",
    tags: ["Art Direction", "Design"],
    size: "large",
  },
  {
    image: "/images/shoe-sketches.jpeg",
    title: "Concept Development",
    tags: ["Sketching", "Prototyping"],
    size: "small",
  },
  {
    image: "/images/robot-shoe.png",
    title: "Future Athletics",
    tags: ["AI Design", "Innovation"],
    size: "small",
  },
  {
    image: "/images/love-shoe.png",
    title: "Love Collection",
    tags: ["Luxury", "Brand Identity"],
    size: "medium",
  },
  {
    image: "/images/hero-sneaker.jpeg",
    title: "Street Culture",
    tags: ["Sneaker", "Lifestyle"],
    size: "medium",
  },
  {
    image: "/images/shoe-lasts-pink.jpeg",
    title: "Production Series",
    tags: ["Manufacturing", "Development"],
    size: "small",
  },
];

export default function Portfolio() {
  const t = useTranslations("work");

  return (
    <section id="work" className="bg-[#0a0a0a] py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] uppercase whitespace-pre-line">
              {t("title")}
            </h2>
          </div>
          <a
            href="#contact"
            className="text-white/50 hover:text-white text-xs tracking-[0.3em] uppercase border-b border-white/20 hover:border-white pb-1 transition-all duration-200 shrink-0"
          >
            {t("view_all")} →
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-[#111] cursor-pointer ${
                project.size === "large" ? "md:col-span-2 lg:col-span-1 h-[500px]" :
                project.size === "medium" ? "h-[380px]" : "h-[280px]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-white/60 text-xs tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white font-semibold text-lg uppercase tracking-wide">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
