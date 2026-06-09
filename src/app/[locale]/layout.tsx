import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const BASE_URL = "https://unfoldcreative-design.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isDE
        ? "Unfold Creative — Schuhdesign Studio"
        : "Unfold Creative — Footwear Design Studio",
      template: isDE
        ? "%s | Unfold Creative"
        : "%s | Unfold Creative",
    },
    description: isDE
      ? "Europäisches Schuhdesign Studio — von Konzept über Prototyp bis zur Produktion. Design, Sourcing, Labor und Grafikentwicklung für globale Brands."
      : "European footwear design studio — from concept to production. Design, sourcing, laboratory and graphics for global brands.",
    keywords: isDE
      ? ["Schuhdesign", "Footwear Design Studio", "Schuhentwicklung", "Prototyping", "Sourcing", "Europa"]
      : ["footwear design", "shoe design studio", "footwear development", "prototyping", "sourcing", "Europe"],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "en": `${BASE_URL}/en`,
        "de": `${BASE_URL}/de`,
      },
    },
    openGraph: {
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      siteName: "Unfold Creative",
      title: isDE
        ? "Unfold Creative — Schuhdesign Studio"
        : "Unfold Creative — Footwear Design Studio",
      description: isDE
        ? "Europäisches Schuhdesign Studio — von Konzept über Prototyp bis zur Produktion."
        : "European footwear design studio — from concept to production.",
      url: `${BASE_URL}/${locale}`,
      images: [{ url: "/images/about-bw.jpeg", width: 1200, height: 630, alt: "Unfold Creative Footwear Design Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isDE ? "Unfold Creative — Schuhdesign Studio" : "Unfold Creative — Footwear Design Studio",
      description: isDE
        ? "Europäisches Schuhdesign Studio — von Konzept über Prototyp bis zur Produktion."
        : "European footwear design studio — from concept to production.",
      images: ["/images/about-bw.jpeg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "de")) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
