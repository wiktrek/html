import { resolve } from 'path';
const paths = {
  main: resolve(__dirname, 'index.html'),
  a: resolve(__dirname, 'tag/a.html'),
  p: resolve(__dirname, 'tag/p.html'),
  div: resolve(__dirname, 'tag/div.html'),
  marquee: resolve(__dirname, 'tag/marquee.html'),
  html: resolve(__dirname, 'tag/html.html'),
  head: resolve(__dirname, 'tag/head.html'),
  body: resolve(__dirname, 'tag/body.html'),
};
/** @type {import('vite').UserConfig} */
export default {
  build: {
    rollupOptions: {
      input: paths,
    },
    // ...
  },
};
