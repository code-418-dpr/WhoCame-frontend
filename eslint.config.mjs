import path from "path";
import tseslint from "typescript-eslint";

import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const tsConfig = {
    files: ["**/*.ts"],
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    extends: [eslint.configs.recommended, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    rules: {
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-extraneous-class": "off",
    },
};

const jsConfig = {
    files: ["**/*.js"],
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    extends: [eslint.configs.recommended],
};

export default tseslint.config(
    includeIgnoreFile(gitignorePath),
    tsConfig,
    jsConfig,
    ...compat.extends("next/core-web-vitals", "next/typescript"),
);
