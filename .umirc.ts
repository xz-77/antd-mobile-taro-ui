import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'antd-mobile-taro-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/ui/src'],
  },
  alias: {
    'antd-mobile': path.resolve(__dirname, './packages/ui/src/index.ts'),
    demos: path.resolve(__dirname, './packages/ui/src/demos'),
    // '@/': path.resolve(__dirname, './packages/ui/src/'),
    '@/styles': path.resolve(__dirname, './packages/ui/src/styles'),
    '@/utils': path.resolve(__dirname, './packages/ui/src/utils'),
  },
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  // more config: https://d.umijs.org/config
});
