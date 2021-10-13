const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "react/jsx-props-no-spreading": RULES.OFF,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
