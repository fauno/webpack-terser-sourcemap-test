module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './pack.js'
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: false
  }
};
