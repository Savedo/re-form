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
    title: 'Re-form library demos',
    template: './examples/template.html'
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
  }
};

module.exports = (env, argv) => {
  const { mode, devServer } = argv;

  process.env.NODE_ENV = env || mode;

  const { NODE_ENV } = process.env;
  const isProduction = NODE_ENV === 'production';
  const filename = `re-form${isProduction ? '.min' : ''}.js`;

  if (typeof devServer !== 'undefined') {
    plugins = plugins.concat(devServerPlugins);
    externals = {};
    entry ='./examples/index.tsx';
  }

  return {
    mode,
    entry: entry,
    output: {
      path: path.join(__dirname, 'dist'),
      filename,
      libraryTarget: 'umd',
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
      alias: {
        '@reform': path.resolve(__dirname),
        components: path.resolve(__dirname, 'src', 'components')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9100,
      watchContentBase: true
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
    externals: externals,
    plugins: plugins
  };
};
