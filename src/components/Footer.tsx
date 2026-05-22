"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const navLinks = [
    { label: t("homepage"), href: `/${locale}#top` },
    { label: t("about"), href: `/${locale}#about` },
    { label: t("contact"), href: `/${locale}#contact` },
    { label: t("innovation"), href: `/${locale}#innovation` },
    { label: t("departments"), href: `/${locale}#departments` },
    { label: t("instagram"), href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Nav grid: 3 columns × 2 rows */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-16 max-w-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors"
              {...(link.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div>
          <p className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
            {t("logo")}
          </p>
        </div>
      </div>
    </footer>
  );
}
