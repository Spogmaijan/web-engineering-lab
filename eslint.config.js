const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        document: "readonly",
        require: "readonly",
        module: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
