import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/Portafolio-de-Angel-Ferrufino/', 
  plugins: [
    purgecss({
      content: ['./index.html', './**/*.js'],
    })
  ]
});
