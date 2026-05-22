"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "en" ? "de" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#work", label: t("work") },
    { href: "#process", label: t("process") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-white font-bold text-lg tracking-widest uppercase">
          Unfold<span className="text-white/40">Creative</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="text-sm tracking-widest uppercase border border-white/20 hover:border-white/60 text-white/60 hover:text-white px-3 py-1 transition-all duration-200"
          >
            {locale === "en" ? "DE" : "EN"}
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
