module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "graphql/template-strings": [
      "error",
      {
        env: "literal",
        projectName: "app",
        schemaJsonFilepath: "schema.json"
      }
    ]
  },

  plugins: ["graphql"]
};
