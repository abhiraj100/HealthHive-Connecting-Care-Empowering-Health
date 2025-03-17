// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add paths to your files
//   theme: {
//     extend: {
//       colors: {
//         primary: "#5f6FFF",
//       },
//       gridTemplateColumns: {
//         auto: "repeat(auto-fill, minmax(200px, 1fr))",
//       },
//     },
//   },
//   plugins: [],
// };

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
});
