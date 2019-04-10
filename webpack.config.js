const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const { mode } = argv;

  process.env.NODE_ENV = env || mode;

  const { NODE_ENV } = process.env;
  const filename = `re-form${NODE_ENV === 'production' ? '.min' : ''}.js`;

  return {
    mode,
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, 'dist'),
      filename,
      library: 'ReForm',
      libraryTarget: 'umd',
    },
    devtool: mode === 'production' ? 'none' : 'cheap-module-eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.json', '.css'],
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    },
    externals: {
      'react': {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom'
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      disableHostCheck: true,
      host: "0.0.0.0",
      port: 9010
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: false
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        minify: {
          minifyJS: false,
          minifyCSS: false,
          removeComments: false,
          useShortDoctype: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true
        }
      })
    ]
  };
};
