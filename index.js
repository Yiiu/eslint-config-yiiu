module.exports = {
  'root': true,
  "plugins": ["import"],
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "experimentalObjectRestSpread": true,
      "jsx":  true
    }
  },
  "rules": {
    "quotes": ["error", "single"],
    "spaced-comment": ["error", "always", { "markers": ["/"] }],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "no-empty-function": ["error", { "allow": ["constructors"] }],
    "no-param-reassign": "off",
    "arrow-parens": ["error", "as-needed", {
      "requireForBlockBody": true
    }],
    "no-nested-ternary": "off",
    "max-len": ["error", { "code": 120 }],
    "no-underscore-dangle": "off",
    "implicit-arrow-linebreak": ["error", "beside"],
    "no-return-assign": "off",
    "no-console": "off",
    "indent": "off"
  }
}
