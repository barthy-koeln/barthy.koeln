import {defineConfig} from 'astro/config';
import vue from "@astrojs/vue";
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [
      ViteYaml()
    ]
  }
});