import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      bi: ["github", "youtube", "linkedin", "envelope-fill", "file-earmark-text-fill"], // (Default) Loads entire Material Design Icon set
    },
  })]
});