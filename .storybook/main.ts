import type { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
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
  "refs": {
    preview: {
      title: "Preview",
      url: "./preview.tsx",
    },
  },
  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {}
    if (!config.plugins) config.plugins = []
    if (!config.module) config.module = {}
    if (!config.module.rules) config.module.rules = []
    config.resolve.alias = {
      ...config.resolve?.alias,
      'src': path.resolve(__dirname, '../src'),
    };
    config.plugins.push(new MiniCssExtractPlugin())
    const imageRule= config.module.rules.find((rule) =>
      //@ts-ignore
      rule?.test?.test(".svg")
    ) as RuleSetRule;
    if( imageRule){
      imageRule.exclude = /\.svg$/;
    }

    config.module.rules.push(
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s([ca])ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
            loader: "css-loader",
            options: {
              modules: {

                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]'
              },
            }
          },
          'sass-loader',
        ]
      });
    return config;
  },
};

export default config;
