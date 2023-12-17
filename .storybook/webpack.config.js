import path from 'path';
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default ({ config }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = [
    new TSConfigPathsPlugin({
      extensions: ['.ts', '.tsx'],
    }),
  ];
  config.module.rules = config.module.rules.map((rule) => {
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg/ };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Create `style` nodes from JS strings
      'style-loader',
      // Translate CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  });

  return config;
};
