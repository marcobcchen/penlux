module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': [2, { ignore: ["^@/"] }], // 不檢查自訂 import @ 的路徑
    'import/no-extraneous-dependencies': [0], // 不提醒非 dev 的依賴包
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 取消 jsx 格式限制
    'react/jsx-one-expression-per-line': [0], // jsx中的表達式不換行
    'react/prop-types': [0], // 不進行 prop-types 驗證
    'no-unused-vars': [1], // 取消未使用的變數限制
    'max-len': [2, { "code": 180 }],
  },
};
