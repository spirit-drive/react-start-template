const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // webpackFinal: async (config: { module: { rules: any; }; }) => {
  //   let custom = {
  //     module: {
  //       rules: [
  //         {
  //           test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
  //           type: 'asset/resource',
  //           generator: { filename: 'static/media/[path][name][ext]' },
  //           exclude: /\.svg$/
  //         },
  //
  //         {
  //           test: /\.svg$/,
  //           use: ['@svgr/webpack'],
  //         },
  //       ]
  //     }
  //   };
  //
  //   return {
  //     ...config,
  //     module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
  //   };
  // },

  webpackFinal: async (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
    const imageRule = config.module.rules.find((rule) =>
        rule.test?.test(".svg")
    );
    // @ts-ignore
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // console.log(config.module.rules)
    return config;
  }
};
export default config;
