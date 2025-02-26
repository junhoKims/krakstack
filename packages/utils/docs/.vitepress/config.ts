import { parse, resolve } from 'path';
import { defineConfig } from 'vitepress';
import { globSync } from 'glob';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'krakstack - utils',
  description: 'simple utility library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/commons-docs' },
    ],

    sidebar: [
      {
        text: 'Commons',
        items: [
          {
            text: 'introdution',
            link: '/commons-docs',
          },
          ...getMdItems('commons'),
        ],
      },
      {
        text: 'React',
        items: [
          {
            text: 'introdution',
            link: '/react-docs',
          },
          ...getMdItems('react'),
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});

function getMdItems(genre: string) {
  const curPath = resolve(__dirname, `../../src/${genre}`);

  return globSync(resolve(curPath, '**/*.md')).map((file: string) => {
    const filePath = parse(file);
    return {
      text: filePath.name,
      link: file.replace(/^\.\.\/\.\.\/src/, '').replace(/\.md$/, ''),
    };
  });
}
