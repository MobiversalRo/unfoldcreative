"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] uppercase whitespace-pre-line mb-8">
              {t("title")}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              {t("description")}
            </p>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{t("or")}</p>
            <a
              href="mailto:hello@unfoldcreative.com"
              className="text-white text-lg hover:text-white/70 transition-colors border-b border-white/20 pb-1"
            >
              hello@unfoldcreative.com
            </a>

            <div className="mt-12 flex gap-6">
              <a href="#" className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">Instagram</a>
              <a href="#" className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">LinkedIn</a>
              <a href="#" className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">Behance</a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="h-full flex items-center">
                <p className="text-white text-2xl font-light">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    placeholder={t("name_placeholder")}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm tracking-wide"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("email_placeholder")}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm tracking-wide"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t("message_placeholder")}
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm tracking-wide resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start border border-white text-white px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 mt-2"
                >
                  {t("send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
