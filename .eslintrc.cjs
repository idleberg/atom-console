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
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "semi": [2, "always"],
    "no-prototype-builtins": "off"
  },
  "ignorePatterns": ["node_modules/", "lib/"],
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
}