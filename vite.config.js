import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src/",
  plugins: [
    viteStaticCopy({
        targets: [
          { src: 'public/images/tents/**/*', dest: 'images/tents' },
          { src: 'public/json/**/*', dest: 'json' } // <-- add this
        ]
      })
  ],

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
      main: resolve(__dirname, "src/index.html"),
      cart: resolve(__dirname, "src/cart/index.html"),
      checkout: resolve(__dirname, "src/checkout/index.html"),
      product: resolve(__dirname, "src/product_pages/index.html"
      ),
      },
    },
  },
});