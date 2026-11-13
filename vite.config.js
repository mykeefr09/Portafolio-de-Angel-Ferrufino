import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: './', // Necesario para GitHub Pages
  plugins: [
    purgecss({
      content: ['./index.html', './**/*.js'],
    })
  ]
});
