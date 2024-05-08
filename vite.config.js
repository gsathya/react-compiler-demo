import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        // plugins: [
        //   ["babel-plugin-react-forget", { enableUseMemoCachePolyfill: true }],
        // ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname),
      },
      {
        find: "react-forget-runtime",
        replacement: path.resolve(
          __dirname,
          "./node_modules/react-forget-runtime",
        ),
      },
    ],
  },
  build: {
    minify: "false",
  },
});
