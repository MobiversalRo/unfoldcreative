"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const navLinks = [
    { label: t("homepage"),    href: `/${locale}` },
    { label: t("about"),       href: `/${locale}/about` },
    { label: t("contact"),     href: `/${locale}/contact` },
    { label: t("innovation"),  href: `/${locale}/innovation` },
    { label: t("departments"), href: `/${locale}/departments` },
    { label: t("instagram"),   href: "https://www.instagram.com/unfoldcreative__?utm_source=qr" },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Nav grid: 3 columns × 2 rows, centered */}
        <div className="grid grid-cols-3 gap-x-16 gap-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white text-[13px] md:text-[16px] tracking-wide transition-colors"
              {...(link.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
