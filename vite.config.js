import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugin = {
  registerType: "autoUpdate",
  includeAssets: ["vite.svg"],
  manifest: {
    name: "Vite PWA",
    short_name: "Vite PWA",
    description: "Vite PWA example",
    start_url: "/",
    scope: "/",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
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
