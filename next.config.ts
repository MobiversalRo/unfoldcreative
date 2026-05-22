import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Force Turbopack to use this project directory as root,
  // ignoring the accidental package-lock.json at ~/package-lock.json
  turbopack: {
    root: path.resolve(__dirname),
  },
} satisfies NextConfig;

export default withNextIntl(nextConfig);
