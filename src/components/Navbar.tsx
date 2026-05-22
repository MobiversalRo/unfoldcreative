"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (targetLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    router.push(segments.join("/") || "/");
  };

  const menuItems = [
    { href: "#about", label: t("about"), image: "/images/sewing-bw.png" },
    { href: "#departments", label: t("departments"), image: "/images/workshop.jpeg" },
    { href: "#innovation", label: t("innovation"), image: "/images/robot-shoe.png" },
    { href: "#contact", label: t("contact"), image: "/images/telephone-art.jpeg" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="px-6 py-5 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-white font-bold text-base tracking-widest uppercase drop-shadow-lg"
          >
            UNFOLDCREATIVE{" "}
            <span className="font-normal opacity-70">/ Footwear Design</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white text-sm font-medium tracking-widest">
              <button
                onClick={() => switchLocale("de")}
                className={`px-2 py-1 transition-opacity ${locale === "de" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                DE
              </button>
              <span className="opacity-30">/</span>
              <button
                onClick={() => switchLocale("en")}
                className={`px-2 py-1 transition-opacity ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                EN
              </button>
            </div>

            <button
              className="flex items-center gap-2 text-white text-sm font-medium tracking-widest uppercase"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span>{t("menu")}</span>
              <span className="flex flex-col gap-1 justify-center">
                <span className="block w-5 h-px bg-white" />
                <span className="block w-5 h-px bg-white" />
                <span className="block w-3 h-px bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#111] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white text-sm tracking-widest uppercase flex items-center gap-2 z-10"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="relative w-5 h-5">
            <span className="block absolute top-1/2 left-0 w-5 h-px bg-white rotate-45" />
            <span className="block absolute top-1/2 left-0 w-5 h-px bg-white -rotate-45" />
          </span>
        </button>

        {/* Logo in menu */}
        <div className="absolute top-6 left-6 text-white font-bold text-base tracking-widest uppercase">
          UNFOLDCREATIVE{" "}
          <span className="font-normal opacity-70">/ Footwear Design</span>
        </div>

        {/* 4 image cards */}
        <div className="flex h-full">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="flex-1 relative overflow-hidden group cursor-pointer border-r border-white/10 last:border-r-0"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  sizes="25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-12 left-0 right-0 text-center">
                <span className="text-white font-bold text-lg tracking-[0.2em] uppercase">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
