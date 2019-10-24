//  see https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb 
module.exports = {
  // The parser that will allow ESLint to lint TypeScript code
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react", "import", "react-hooks"],
  extends: [
    "airbnb-typescript", // Uses Airbnb's ESLint config with React and TypeScript support
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin,
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/react"
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react-hooks/exhaustive-deps": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/prop-types": "off"
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      typescript: {}
    }
  },
  env: { // defines global variables that are predefined
    "browser": true,
    "node": true,
    "jest": true
  }
};