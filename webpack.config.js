const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const port = 2233;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';
const exts = ['.js', '.jsx', '.ts', '.tsx', '.json'];

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
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: exts,
      plugins: [
        new TSConfigPathsPlugin({
          extensions: exts,
        }),
      ],
    },
    output: {
      path: dist,
      publicPath:
        args.mode === 'development' ? `http://${host}:${port}/` : undefined /* <- прописать данные своего github */,
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
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
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              // options: {
              //   modules: {
              //     localIdentName: '[name]_[local]-[hash:base64:5]',
              //   },
              // },
            },
            'sass-loader',
          ],
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
