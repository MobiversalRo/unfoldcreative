"use client";

import LazyVideo from "./LazyVideo";

export default function VideoBanner() {
  return (
    <div className="w-full overflow-hidden border-y border-white/10" style={{ height: "140px" }}>
      <LazyVideo
        src="/videos/banner.mp4"
        className="w-full h-full object-cover opacity-70"
      />
    </div>
  );
}
