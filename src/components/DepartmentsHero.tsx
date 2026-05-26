"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DepartmentsHero() {
  const t = useTranslations("departments");

  return (
    /* Outer wrapper: overflow-visible so the title can hang below */
    <div className="relative">

      {/* Hero image — clipped independently */}
      <div className="relative w-full h-[42vh] min-h-[260px] overflow-hidden">
        <Image
          src="/images/sewing-bw.png"
          alt="Departments"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Very light overlay to slightly dim without hiding the image */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Title — black, anchored at the bottom inside the hero */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 px-4">
        <h1 className="text-black text-[30px] font-bold uppercase tracking-[0.12em] leading-none">
          {t("heading")}
        </h1>
      </div>

    </div>
  );
}
