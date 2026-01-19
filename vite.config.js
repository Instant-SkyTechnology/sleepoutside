import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src/",
  base: "/sleepoutside/",
  plugins: [
    viteStaticCopy({
  targets: [
        { src: 'public/images/tents/**/*', dest: 'images/tents' },
        { src: 'public/images/logos/**/*', dest: 'images/logos' },
        { src: 'public/json/**/*', dest: 'json' } // Copy JSON files to dist/json/
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