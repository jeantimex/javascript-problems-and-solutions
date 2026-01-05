import babelParser from "@babel/eslint-parser";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  prettierRecommended,
  {
    languageOptions: {
      parser: babelParser,
      sourceType: "module",
      parserOptions: {
        requireConfigFile: true,
        babelOptions: {
          configFile: "./.babelrc",
        },
      },
    },
  },
];
