"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const COORDINATES = [
  { text: "27° 18' N / 78° 01' O", top: "10%", left: "5%" },
  { text: "41° 53' N / 12° 28' O", top: "25%", left: "55%" },
  { text: "38° 15' N / 0° 41' W", top: "40%", left: "20%" },
  { text: "49° 12' N / 07° 36' O", top: "55%", left: "70%" },
  { text: "41° 09' N / 8° 37' W", top: "70%", left: "10%" },
  { text: "23° 2' N / 113° 43' O", top: "80%", left: "45%" },
  { text: "47° 02' N / 21° 55' O", top: "60%", left: "38%" },
];

export default function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({
    name: "",
    surname: "",
    firm: "",
    email: "",
    message: "",
    privacy: false,
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#111] text-white py-24 lg:py-36 px-6 overflow-hidden"
    >
      {/* Subtle coordinates in background */}
      {COORDINATES.map((coord, i) => (
        <span
          key={i}
          className="absolute text-white/10 text-xs tracking-widest font-mono pointer-events-none select-none"
          style={{ top: coord.top, left: coord.left }}
        >
          {coord.text}
        </span>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">{t("heading")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: company info */}
          <div className="flex flex-col gap-3 text-white/80 text-base leading-relaxed">
            <p className="font-semibold text-white">{t("company")}</p>
            <p>{t("address1")}</p>
            <p>{t("address2")}</p>
            <a
              href={`mailto:${t("email")}`}
              className="hover:text-white transition-colors"
            >
              {t("email")}
            </a>
            <p>{t("phone1")}</p>
            <p>{t("phone2")}</p>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <p className="text-white text-xl font-light">
                Message sent! We will be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2 text-white/60">
                      {t("name")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white/80 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2 text-white/60">
                      {t("surname")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.surname}
                      onChange={(e) => setForm({ ...form, surname: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white/80 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-white/60">
                    {t("firm")}
                  </label>
                  <input
                    type="text"
                    value={form.firm}
                    onChange={(e) => setForm({ ...form, firm: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white/80 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-white/60">
                    {t("email_label")}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white/80 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 text-white/60">
                    {t("message")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white/80 transition-colors text-sm resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                    className="mt-1 accent-white"
                  />
                  <span className="text-sm text-white/60">{t("privacy")}</span>
                </label>

                <div>
                  <button
                    type="submit"
                    className="border border-white text-white px-10 py-4 text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t("send")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
