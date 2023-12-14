/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    mockReset: true,
    setupFiles: "./src/test/test-setup.js",
    alias: {
      "@test-utils": path.resolve(__dirname, "./src/test/test-utils.jsx"),
    },
  },
});
