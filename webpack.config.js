const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let entry = './src/index.ts';

let plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
    DEBUG: false
  })
];

const devServerPlugins = [
  new HtmlWebpackPlugin({
  title: 'Re-form library',
  template: './demo/template.html'
  })
];

let externals = {
  'react': {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs: 'react-dom',
    commonjs2: 'react-dom'
  },
  'yup': {
    root: 'yup',
    commonjs: 'yup',
    commonjs2: 'yup'
  }
};

module.exports = (env, argv) => {
  const { mode, devServer } = argv;

  process.env.NODE_ENV = env || mode;

  const { NODE_ENV } = process.env;
  const filename = `re-form${NODE_ENV === 'production' ? '.min' : ''}.js`;

  if (typeof devServer !== 'undefined') {
    plugins = plugins.concat(devServerPlugins);
    externals = {};
    entry ='./demo/index.tsx';
  }

  return {
    mode,
    entry: entry,
    output: {
      path: path.join(__dirname, 'dist'),
      filename,
      libraryTarget: 'umd',
    },
    devtool: 'none',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.json', '.css'],
      alias: {
        '@reform': path.resolve(__dirname, 'index.d.ts')
      }
    },
    devServer: {
      contentBase: './dist',
      port: 9100,
      disableHostCheck: true,
      host: '0.0.0.0',
      public: 'local.savedo.ch:9100'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    },
    externals: externals,
    plugins: plugins
  };
};
