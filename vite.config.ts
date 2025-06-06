import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "localhost", // можно добавить localhost для локальной разработки
      "dev.mobydick.by",
      "supermerch.medisont.by",
    ],
    proxy: {
      "/api": {
        target: "https://supermerch.medisont.by",
        changeOrigin: true,
      },
    },
    watch: { usePolling: true },
    host: true,
    strictPort: true,
    port: 3000,
  },
  plugins: [react()],
});
