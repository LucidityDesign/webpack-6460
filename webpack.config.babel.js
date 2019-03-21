import webpack from 'webpack'
import path from 'path'

module.exports = (env, options) => {
  console.log(env, options)
  return {
    node: {
      __dirname: true
    },
    entry: {
      index: ['./index.js']
    },
    output: {
      filename: 'js/[name]-[hash].js',
      path: path.resolve('build')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.(js|jsx)?$/,
          use: [
            {
              loader: 'babel-loader',
            }
          ],
          exclude: [
            /node_modules/
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        coms: path.resolve('./coms')
      }
    }
  }
}
