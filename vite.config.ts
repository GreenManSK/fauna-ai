import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000, // Inline assets to prevent separate files
    rollupOptions: {
      output: {
        format: "iife", // Immediately Invoked Function Expression (good for single-file output)
        inlineDynamicImports: true, // Ensures everything is in one file
      },
      external: [], // Forces everything to be included in the bundle
    },
  },
});
