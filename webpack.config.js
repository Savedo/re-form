const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const { mode, devServer } = argv;
  process.env.NODE_ENV = env || mode;
  const isProduction = process.env.NODE_ENV === 'production';

  let plugins = [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      DEBUG: false
    })
  ];

  const devServerPlugins = [
    new HtmlWebpackPlugin({
      title: 'Re-form library demos',
      template: './examples/template.html'
    })
  ];

  let externals = {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  };

  let entry = './src/index.ts';
  if (typeof devServer !== 'undefined') {
    plugins = plugins.concat(devServerPlugins);
    entry ='./examples/index.tsx';
  }

  return {
    mode,
    entry,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 're-form.js',
      libraryTarget: 'umd',
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
      alias: {
        '@reform': path.resolve(__dirname),
        components: path.resolve(__dirname, 'src', 'components')
      }
    },
    devServer: {
      contentBase: './dist',
      port: 9100
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    },
    externals,
    plugins
  };
};
