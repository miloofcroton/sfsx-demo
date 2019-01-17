/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = env => {
  const isProd = env === 'production';

  const devPlugins = isProd ? [] : [
    // new BundleAnalyzerPlugin()
    new HtmlPlugin({ template: './src/index.html' }),
  ];

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.[hash].js',
      publicPath: '/'
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 8080,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:7890',
          secure: false
        }
      }
    },
    plugins: [
      new CleanPlugin('./dist/bundle.*.js'),
      ...devPlugins
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-nested')(),
                  require('postcss-simple-vars')()
                ]
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'url-loader', // use file-loader if bundle size needs optimization
            options: { limit: 1000 },
          },
        }
      ]
    }

  };

};
