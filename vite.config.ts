import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://172.20.10.2:80",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
