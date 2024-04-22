import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.jsx"),
      name: "scroll",
      fileName: (format) => `scroll.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
