"use client";

export default function VideoBanner() {
  return (
    <div className="w-full overflow-hidden border-y border-white/10" style={{ height: "140px" }}>
      <video
        src="/videos/banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-70"
      />
    </div>
  );
}
