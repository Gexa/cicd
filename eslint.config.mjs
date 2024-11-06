// @ts-check
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
    },
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          loadTypeScriptPlugins: true,
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ["**/*.{ts,tsx}"],
    ignores: ['./dist', './node_modules']
  },
);