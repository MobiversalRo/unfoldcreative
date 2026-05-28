"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const tAbout = useTranslations("about");
  const tMission = useTranslations("mission");
  const locale = useLocale();

  return (
    <>
      {/* ABOUT US */}
      <section id="about" className="bg-white text-black py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: blurry B&W image — 442×254pt ratio */}
            <div className="relative w-full aspect-[442/254]">
              <Image
                src="/images/about-bw.jpeg"
                alt="Footwear craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right: heading right-aligned, body centred */}
            <div className="flex flex-col">
              <h2 className="text-right text-[30px] font-bold uppercase mb-10">
                <Link href={`/${locale}/about`} className="underline underline-offset-4 hover:opacity-60 transition-opacity">
                  {tAbout("heading")}
                </Link>
              </h2>
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center mb-6">
                {tAbout.rich("body1_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
              <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
                {tAbout.rich("body2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white text-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* Left: heading centred + two centred paragraphs */}
          <div className="flex flex-col px-6 lg:px-16 py-10 lg:py-0 justify-center">
            <h2 className="text-center text-[30px] font-bold uppercase underline underline-offset-4 mb-14">
              {tMission("heading")}
            </h2>
            <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center mb-8">
              {tMission.rich("body1_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
            </p>
            <p className="text-[20px] leading-relaxed text-[#5E5E5E] text-center">
              {tMission.rich("body2_html", { strong: (c) => <strong className="text-black">{c}</strong> })}
            </p>
          </div>

          {/* Right: gold divider + shoe hover effect (B&W → colour) */}
          <div className="group relative flex items-center justify-center px-6 lg:px-16 py-10 lg:py-0">
            {/* Colour image — always underneath */}
            <Image
              src="/images/love-shoe.png"
              alt="Love script heel shoe"
              width={520}
              height={600}
              className="object-contain max-h-[560px] w-auto relative z-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* B&W image — sits on top, fades away on hover */}
            <Image
              src="/images/love-shoe-bw.jpg"
              alt=""
              aria-hidden="true"
              width={520}
              height={600}
              className="absolute inset-0 w-full h-full object-contain max-h-[560px] z-10
                         opacity-100 group-hover:opacity-0 transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
