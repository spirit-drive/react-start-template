const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 2233;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = (_, args) => {
  return {
    entry: './index.tsx',
    devtool: 'source-map',
    context: src,
    devServer: {
      open: true,
      port,
      hot: true,
      historyApiFallback: true,
      host,
      static: [
        {
          directory: path.join(__dirname, 'src', 'assets', 'svgs', 'products'),
          publicPath: '/assets/svgs/products',
        },
      ],
    },
    output: {
      publicPath: '/',
      path: dist,
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        src,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
        {
          test: /\.svg$/,
          exclude: /src\/assets\/svgs\/products/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.svg$/,
          include: /src\/assets\/svgs\/products/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/svgs/products/[name].[ext]',
              },
            },
          ],
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
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: 'camelCaseOnly',
                  localIdentName: '[local]__[contenthash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.svg',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.join(__dirname, 'tsconfig.json'),
        },
      }),
    ],
  };
};
