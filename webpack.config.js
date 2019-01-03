module.exports = {
  entry: './app.js',
  output: { 
    path: __dirname, 
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\css\/.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}