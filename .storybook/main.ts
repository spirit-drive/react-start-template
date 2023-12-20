import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'src': path.resolve(__dirname, '../src'),
    };
    config.plugins.push(new MiniCssExtractPlugin())
    const imageRule = config.module.rules.find((rule) =>
      rule.test?.test(".svg")
    );
    imageRule.exclude = /\.svg$/;
    config.module.rules.push(
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s([ca])ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.s([ca])ss$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              formatter: 'prettier',
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {

                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]'
              },
            }
          }
        ]
      });
    return config;
  },
};

export default config;
