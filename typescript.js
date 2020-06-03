module.exports = {
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    }
  },
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      "accessibility": "explicit",
      "overrides": {
        "accessors": "no-public",
        "constructors": "off"
      }
    }],
    "@typescript-eslint/no-parameter-properties": ["off", { "allows": ["private", "readonly"] }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "static-field",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-field",
          "protected-field",
          "private-field",
          "instance-field",
          "field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-method",
          "protected-method",
          "private-method",
          "instance-method",
          "method"
        ]
      }
    ],
  }
}
