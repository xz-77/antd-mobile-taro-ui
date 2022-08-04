// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md

const env = process.env.NODE_ENV;
module.exports =
  env === 'components'
    ? {}
    : {
        presets: [
          [
            'taro',
            {
              framework: 'react',
              ts: true,
            },
          ],
        ],
      };
