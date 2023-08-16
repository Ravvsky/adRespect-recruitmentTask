const path = require('path');
const glob = require('glob'); // Import the glob package

module.exports = {
  mode: 'none',
  entry: getEntryPoints(), // Use a function to get dynamic entry points
  output: {
    filename: '[name].js', // Use [name] placeholder for dynamic bundle names
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/src',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

// Function to generate dynamic entry points based on component folders
function getEntryPoints() {
  const srcDir = path.resolve(__dirname, 'src');
  const tsFiles = glob.sync('**/*.ts', { cwd: srcDir });

  const entryPoints = {};

  tsFiles.forEach((tsFile) => {
    const entryName = tsFile.replace(/\.ts$/, ''); // Remove the ".ts" extension
    entryPoints[entryName] = path.join(srcDir, tsFile);
  });

  return entryPoints;
}
