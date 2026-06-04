"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "./HeroSection";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [fields, setFields] = useState({ name: "", surname: "", firm: "", email: "", message: "" });
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  // Auto-resize textarea as content grows
  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [fields.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacy) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unknown error");
      }
      setStatus("success");
      setFields({ name: "", surname: "", firm: "", email: "", message: "" });
      setPrivacy(false);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  return (
    <section id="contact">

      {/* ── Hero: shared with homepage ── */}
      <HeroSection />

      {/* ── Contact form section ── */}
      <div className="bg-white py-16 lg:py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: heading + company info */}
          <div>
            <h2 className="text-[20px] font-bold mb-10">
              {t("heading")}
            </h2>
            <div className="text-[14px] text-[#5E5E5E] leading-relaxed">

              {/* Company name — full underline */}
              <p className="underline underline-offset-2 mb-4">
                <span>Unfold</span><strong className="text-black">Creative</strong><span> S.R.L.</span>
              </p>

              {/* Address + contact in two columns */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-x-10">
                  <span>Ioan Corneli Nr. 2.</span>
                  <span>info@unfoldcreative-design.com</span>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                  <span>410609 Oradea &nbsp; RO.</span>
                  <div className="flex flex-col">
                    <span>+ 40 778 788 571</span>
                    <span>+ 49 171 44 34 179</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            {/* Row 1: Name + Surname */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("name")}</span>
                <input
                  type="text"
                  value={fields.name}
                  onChange={set("name")}
                  required
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("name")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("surname")}</span>
                <input
                  type="text"
                  value={fields.surname}
                  onChange={set("surname")}
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("surname")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
            </div>

            {/* Row 2: Firm + Email */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("firm")}</span>
                <input
                  type="text"
                  value={fields.firm}
                  onChange={set("firm")}
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("firm")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
              <div className="flex items-center gap-2 border-b border-black/25 pb-2">
                <span className="text-sm text-[#5E5E5E] whitespace-nowrap">{t("email")}</span>
                <input
                  type="email"
                  value={fields.email}
                  onChange={set("email")}
                  required
                  className="flex-1 min-w-0 outline-none text-sm bg-transparent"
                  aria-label={t("email")}
                />
                <Image src="/images/arrow.png" alt="" width={32} height={16} className="flex-shrink-0 opacity-50" />
              </div>
            </div>

            {/* Message */}
            <div className="border-b border-black/25 pb-4">
              <span className="text-sm text-[#5E5E5E] block mb-2">{t("message")}</span>
              <textarea
                ref={messageRef}
                rows={1}
                value={fields.message}
                onChange={set("message")}
                required
                className="w-full outline-none text-sm bg-transparent resize-none overflow-hidden min-h-[100px] caret-black"
                aria-label={t("message")}
              />
            </div>

            {/* Privacy checkbox */}
            <div className="flex items-center gap-3">
              <input
                id="privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                required
                className="w-4 h-4 flex-shrink-0 accent-black cursor-pointer"
              />
              <label htmlFor="privacy" className="text-sm text-[#5E5E5E] cursor-pointer">
                {t("privacy")}{" "}
                <Link href={`/${locale}/privacy`} className="font-bold text-black underline underline-offset-2 hover:opacity-60 transition-opacity">
                  {t("privacyLink")}
                </Link>
              </label>
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-sm text-green-700 font-medium">✓ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
            )}

            {/* Send button */}
            <div className="flex">
              <button
                type="submit"
                disabled={status === "loading" || !privacy}
                className="relative group disabled:opacity-50"
              >
                <Image
                  src="/images/send.png"
                  alt={t("send")}
                  width={70}
                  height={40}
                  className="block"
                />
                <span className="absolute inset-x-0 top-0 h-[77%] flex items-center justify-center text-sm font-bold tracking-widest uppercase">
                  {status === "loading" ? "…" : t("send")}
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
}
