module.exports = {
  // JS Files
  "root": true,
  "env": {
    "atomtest": true,
    "es6": true,
    "node": true,
    "browser": true,
    "jasmine": true
  },
  "globals": { "atom": "readonly"},
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "semi": [2, "always"],
    "no-prototype-builtins": "off"
  },
  "ignorePatterns": [
    "lib/",
    "node_modules/"
  ],
  "overrides": [
    {
      // JSON files
      "files": ["*.json"],
      "plugins": ["json"],
      "extends": ["plugin:json/recommended"],
      "rules": {
        "json/*": ["error", {"allowComments": true}]
      }
    }
  ]
};
