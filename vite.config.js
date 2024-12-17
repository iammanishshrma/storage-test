import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugin = {
  registerType: "autoUpdate",
  includeAssets: ["vite.svg"],
  manifest: {
    name: "vite pwa",
    short_name: "vite pwa",
    description: "vite pwa",
    icons: [
      {
        src: "/vite.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/vite.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  },
};

export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
