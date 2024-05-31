import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://brapoprod.github.io',
  base: 'herderrock-site',
  integrations: [react()]
});