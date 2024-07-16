import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "apple_website",

  plugins: [react(), sentryVitePlugin({
    org: "shogo-5e",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "shogo-5e",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
});