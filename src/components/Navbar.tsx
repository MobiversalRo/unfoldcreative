"use client";

import { useState, useEffect } from "react";
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
  const [pastHero, setPastHero] = useState(false);

  // Pages with a dark video hero at the top
  const isHeroPage =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === `/${locale}/contact`;

  // Listen to scroll — switch to black once the hero scrolls out of view (~52vh)
  useEffect(() => {
    if (!isHeroPage) return;
    setPastHero(false); // reset on route change
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.45);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroPage, pathname]);

  const isDarkHero = isHeroPage && !pastHero;
  const fg = isDarkHero ? "text-white" : "text-black";

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

  return (
    <>
      {/* ── Top navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* Mobile: two rows — language row on top, logo + menu below */}
        <div className="flex flex-col md:hidden px-6 pt-3 pb-2">
          {/* Row 1: language switcher right-aligned */}
          <div className={`flex justify-end ${fg} text-[10px] font-bold tracking-widest transition-colors duration-300`}>
            <button onClick={() => switchLocale("de")} className={`px-1.5 py-1 transition-opacity ${locale === "de" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>DE</button>
            <span className="opacity-30 py-1">/</span>
            <button onClick={() => switchLocale("en")} className={`px-1.5 py-1 transition-opacity ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>EN</button>
          </div>
          {/* Row 2: logo left, menu right */}
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="drop-shadow-sm">
              <span className={`${fg} leading-tight block transition-colors duration-300`}>
                <span className="text-[20px] font-normal tracking-[0.04em] uppercase">
                  UNFOLD<span className="font-black">CREATIVE</span>
                </span>
                <br />
                <span className="text-[12px] tracking-[0.08em]">
                  <span className="font-bold">Footwear</span>&nbsp;&nbsp;<span className="font-light">Design</span>
                </span>
              </span>
            </Link>
            <button
              className={`flex flex-col items-center gap-1 ${fg} text-[14px] font-bold tracking-widest uppercase transition-colors duration-300`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src="/images/menu-icon.png"
                alt=""
                width={36}
                height={36}
                className={`menu-icon-spin transition-all duration-300 ${isDarkHero ? "invert brightness-200" : ""}`}
                aria-hidden="true"
              />
              <span>{t("menu")}</span>
            </button>
          </div>
        </div>

        {/* Desktop: single row */}
        <div className="hidden md:flex px-6 py-4 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="drop-shadow-sm">
            <span className={`${fg} leading-tight block transition-colors duration-300`}>
              <span className="text-[20px] font-normal tracking-[0.04em] uppercase">
                UNFOLD<span className="font-black">CREATIVE</span>
              </span>
              <br />
              <span className="text-[12px] tracking-[0.08em]">
                <span className="font-bold">Footwear</span>&nbsp;&nbsp;<span className="font-light">Design</span>
              </span>
            </span>
          </Link>

          <div className="flex items-start gap-4">
            {/* Menu button */}
            <button
              className={`flex flex-col items-center gap-1 mt-4 ${fg} text-[14px] font-bold tracking-widest uppercase transition-colors duration-300`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src="/images/menu-icon.png"
                alt=""
                width={36}
                height={36}
                className={`menu-icon-spin transition-all duration-300 ${isDarkHero ? "invert brightness-200" : ""}`}
                aria-hidden="true"
              />
              <span>{t("menu")}</span>
            </button>

            {/* Language switcher */}
            <div className={`flex items-center gap-1 ${fg} text-[10px] font-bold tracking-widest transition-colors duration-300`}>
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
          </div>
        </div>{/* end desktop row */}

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

        {/* 4 pillar image cards — 4 cols on desktop, 2×2 grid on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:flex-none h-full w-full">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="flex flex-col group cursor-pointer border-r border-b border-white/10 last:border-r-0 md:border-b-0 overflow-hidden"
            >
              {/* ── Main image (65% height) with centred label ── */}
              <div className="relative w-full flex-[0_0_65%] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Slight dark overlay for legibility */}
                <div className="absolute inset-0 bg-black/25" />
                {/* Centred label */}
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <span className="text-[#f5ff3c] font-bold text-[22px] md:text-[30px] tracking-[0.1em] uppercase leading-tight text-center drop-shadow-lg">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* ── Mirror reflection (35% height) ── */}
              <div className="relative w-full flex-[0_0_35%] overflow-hidden bg-white">
                {/* Wrapper is 185% tall — Image fills it completely.
                    overflow-hidden on parent clips the bottom 85%.
                    scaleY(-1) on wrapper flips the visible top portion. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 opacity-50"
                  style={{ height: "185%", transform: "scaleY(-1)" }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                {/* Gradient: transparent at top, fully white at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
