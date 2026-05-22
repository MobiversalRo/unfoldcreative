"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">
            Unfold<span className="text-white/40">Creative</span>
          </p>
          <p className="text-white/30 text-xs max-w-xs">{t("tagline")}</p>
        </div>
        <p className="text-white/20 text-xs tracking-widest">
          © {year} Unfold Creative. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
