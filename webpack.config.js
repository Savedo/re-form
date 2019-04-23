const webpack = require('webpack');
const path = require('path');

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
      libraryTarget: 'umd',
    },
    devtool: 'none',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.json', '.css'],
      alias: {
        '@reform': path.resolve(__dirname, 'index.d.ts')
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
      },
      'yup': {
        root: 'yup',
        commonjs: 'yup',
        commonjs2: 'yup'
      }
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: false
      })
    ]
  };
};
