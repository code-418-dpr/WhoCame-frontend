import path from "path";

import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript"), includeIgnoreFile(gitignorePath)];

export default eslintConfig;
