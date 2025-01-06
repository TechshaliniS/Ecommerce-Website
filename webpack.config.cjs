// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production' based on your needs
  entry: './client/src/index.js', // Specify your entry file here
  // devtool: 'source-map', // Uncomment this line to add source maps for better error tracing
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for the build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JS/JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Specify presets here
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
