import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Trocah Blog',
      social: {
        github: 'https://github.com/Troca-Team',
        twitter: 'https://twitter.com/trocahhq?s=20',
        instagram: 'https://www.instagram.com/usetrocah/',
        linkedin: 'https://www.linkedin.com/company/trocah',
      },
      logo: {
        src: '/src/assets/trocah-logo.svg',
        replacesTitle: true,
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
