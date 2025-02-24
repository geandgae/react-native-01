// module.exports = {
//   root: true,
//   extends: '@react-native',
//   rules: {
//     quotes: ['error', 'single'],
//   },
// };

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }], // 예외 허용
    'prettier/prettier': ['error', { singleQuote: true, bracketSpacing: true }], // Prettier 설정과 일치
  },
};
