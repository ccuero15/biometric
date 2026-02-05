import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: [ "**/*.{js,mjs,cjs,ts,mts,cts}" ],
    plugins: { js }, extends: [ "js/recommended" ],
    languageOptions: { globals: globals.browser },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.eslint.json", // Update here as well
        },
      },
      rules: {
        // Regla de oro: Prohibido usar 'any'
        "@typescript-eslint/no-explicit-any": "error",
        // Asegura que las importaciones con @/ se resuelvan bien
        "import/no-unresolved": "error",
        // Preferir const sobre let
        "prefer-const": "warn",
      },
    },

    // Ignorar la carpeta de compilación
    ignores: [ "dist/", "node_modules/", "src/generated/", "tsconfig.json", "tsconfig.eslint.json", "eslint.config.ts", "prisma.config.ts" ],
  },
  tseslint.configs.recommended,
]);
