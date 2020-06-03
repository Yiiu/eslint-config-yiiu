module.exports = {
  "extends": [
    "../../index",
    "../../react",
    "../../typescript"
  ],
  "rules": {
    "no-undef": 0,
    // "no-unused-locals": 1,
    "no-plusplus": "off",
    "max-len": [
      "error",
      160
    ],
    "no-const-assign": "off"
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
