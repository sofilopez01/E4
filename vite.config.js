import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 6060,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://pokeapi.co",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  publicDir: path.resolve(__dirname, "assets"),
});
