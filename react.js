module.exports = {
  "plugins": ["react-hooks"],
  "extends": [
    "plugin:react/recommended"
  ],
  "rules": {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true }],
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
    "react/prop-types": "off",
    "react/no-this-in-sfc": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-string-refs": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "off"
  },
  "settings":  {
    "react":  {
      "version":  "detect"
    }
  }
}
