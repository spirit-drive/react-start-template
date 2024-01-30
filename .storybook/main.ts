import type { StorybookConfig } from '@storybook/react-webpack5';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
    // Required
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    // Optional
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        // "@storybook/preset-scss",
        // '@storybook/addon-onboarding',
    ],
    docs: {
        autodocs: 'tag',
    },

    async webpackFinal(config, { configType }) {
        const customConfig = { ...config };
        const imageRule= customConfig.module.rules.find((rule) =>
            // @ts-ignore
            rule?.test?.test(".svg")
        ) as RuleSetRule;
        if(imageRule){
            imageRule.exclude = /\.svg$/;
        }

        customConfig.module.rules.push(
            // {
            //   test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
            //   type: 'asset/resource',
            //   generator: { filename: 'static/media/[path][name][ext]' },
            //   exclude: /\.svg$/
            // },

            {
              test: /\.svg$/,
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
                                localIdentName: '[local]',
                            },
                        },
                    },
                    'sass-loader',

                ],
            },
        );

        customConfig.plugins.push(
            new MiniCssExtractPlugin()
        );

        return customConfig;
    },
};
export default config;