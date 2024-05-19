import { defineConfig } from "vite";

export default defineConfig({
  base: "/djsiddz/",
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true
  },
  root: "src",
});
