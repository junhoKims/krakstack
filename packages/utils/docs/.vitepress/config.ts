import { parse, resolve } from 'path';
import { defineConfig } from 'vitepress';
import { globSync } from 'glob';

const srcDir = resolve(import.meta.dirname, '../../');
const srcExclude = [resolve(import.meta.dirname, '../../*.md')];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir,
  srcExclude,
  title: '@krakstack/utils',
  description: 'simple utils library',
  rewrites: {
    'docs/:page1': ':page1',
    'src/:page1/:page2': ':page1/:page2',
  },
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/junhoKims/krakstack/tree/main/packages/utils' }],
  },
});

function getMdItems(genre: string) {
  const curPath = resolve(import.meta.dirname, `../../src/${genre}`);

  return globSync(resolve(curPath, '**/*.md')).map((file: string) => {
    const { name } = parse(file);
    const relativePath = file.split('/packages/utils/src')[1]?.replace(/\.md$/, '');

    if (!relativePath) {
      throw new Error(`"relativePath" is not found: ${name}`);
    }

    return {
      text: name,
      link: relativePath,
    };
  });
}
