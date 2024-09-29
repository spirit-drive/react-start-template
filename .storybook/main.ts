const path = require("path");

// webpackFinal: async (config, { configType }) => {
//   config.resolve.modules.push(path.resolve(__dirname, '../src'));

//   return config;
// },

// webpackFinal: async (config) => {
//   // add SCSS support for CSS Modules
//   config.module.rules.push({
//     test: /\.scss$/,
//     use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
//     include: path.resolve(__dirname, '../'),
//   });

//   return config;
// },

const config = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
