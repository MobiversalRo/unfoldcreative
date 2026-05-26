"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const tInnovation = useTranslations("innovation");
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
    { href: `/${locale}/about`,       label: t("about"),              image: "/images/about-bw.jpeg" },
    { href: `/${locale}/departments`, label: t("departments"),        image: "/images/workshop-bw.jpeg" },
    { href: `/${locale}/innovation`,  label: tInnovation("heading"),  image: "/images/robot-shoe.png" },
    { href: `/${locale}/contact`,     label: t("contact"),            image: "/images/telephone-art.jpeg" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  // White text on homepage (dark hero bg), black on all sub-pages (white bg)
  const isHomepage = pathname === `/${locale}`;
  const fg = isHomepage ? "text-white" : "text-black";
  const lineBg = isHomepage ? "bg-white" : "bg-black";

  return (
    <>
      {/* ── Top navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo: UNFOLD (light) CREATIVE (bold) */}
          <Link href={`/${locale}`} className="drop-shadow-sm">
            <span className={`${fg} text-sm tracking-[0.18em] uppercase leading-tight`}>
              <span className="font-light">UNFOLD</span>
              <span className="font-bold">CREATIVE</span>
              <br />
              <span className="font-light opacity-70 tracking-[0.22em] text-xs">Footwear&nbsp;&nbsp;Design</span>
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {/* Language switcher */}
            <div className={`flex items-center gap-1 ${fg} text-xs font-medium tracking-widest`}>
              <button
                onClick={() => switchLocale("de")}
                className={`px-1.5 py-1 transition-opacity ${locale === "de" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                DE
              </button>
              <span className="opacity-30">/</span>
              <button
                onClick={() => switchLocale("en")}
                className={`px-1.5 py-1 transition-opacity ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                EN
              </button>
            </div>

            {/* Menu button */}
            <button
              className={`flex items-center gap-2 ${fg} text-sm font-medium tracking-widest uppercase`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span>{t("menu")}</span>
              <span className="relative flex flex-col gap-[5px] justify-center">
                <span className={`block w-5 h-px ${lineBg}`} />
                <span className={`block w-5 h-px ${lineBg}`} />
                <span className={`block w-3 h-px ${lineBg}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen menu overlay ── */}
      <div
        className={`fixed inset-0 z-[100] bg-[#111] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close */}
        <button
          className="absolute top-6 right-6 text-white text-sm tracking-widest uppercase flex items-center gap-2 z-10 hover:opacity-70 transition-opacity"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="relative w-5 h-5">
            <span className="block absolute top-1/2 left-0 w-5 h-px bg-white rotate-45" />
            <span className="block absolute top-1/2 left-0 w-5 h-px bg-white -rotate-45" />
          </span>
          <span className="font-medium">Close</span>
        </button>

        {/* Logo in menu */}
        <div className="absolute top-5 left-6">
          <span className="text-white text-sm tracking-[0.18em] uppercase leading-tight">
            <span className="font-light">UNFOLD</span>
            <span className="font-bold">CREATIVE</span>
            <br />
            <span className="font-light opacity-70 tracking-[0.22em] text-xs">Footwear&nbsp;&nbsp;Design</span>
          </span>
        </div>

        {/* 4 pillar image cards */}
        <div className="flex h-full">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="flex-1 flex flex-col group cursor-pointer border-r border-white/10 last:border-r-0 overflow-hidden"
            >
              {/* ── Main image (65% height) with centred label ── */}
              <div className="relative w-full flex-[0_0_65%] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
                {/* Slight dark overlay for legibility */}
                <div className="absolute inset-0 bg-black/25" />
                {/* Centred label */}
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <span className="text-[#f5ff3c] font-bold text-[30px] tracking-[0.1em] uppercase leading-tight text-center drop-shadow-lg">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* ── Mirror reflection (35% height) ── */}
              <div className="relative w-full flex-[0_0_35%] overflow-hidden bg-white">
                {/* Same image, flipped vertically */}
                <Image
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover object-center opacity-50"
                  style={{ transform: "scaleY(-1)" }}
                  sizes="25vw"
                />
                {/* White gradient: fades from transparent at top to white at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
