import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      services: "/src/services",
      contexts:"/src/contexts",
    },
  },
});
