module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@config': './src/config',
          '@contexts': './src/contexts',
          '@layouts': './src/layouts',
          '@components': './src/components',
          '@common': './src/common',
          '@screens': './src/screens',
          '@navigations': './src/navigations',
        },
      },
    ],
  ],
};
