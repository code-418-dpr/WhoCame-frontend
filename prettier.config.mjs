import sortImportsPlugin from "@trivago/prettier-plugin-sort-imports";

const prettierConfig = {
    singleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    semi: true,
    tabWidth: 4,
    printWidth: 120,
    endOfLine: "auto",

    plugins: [sortImportsPlugin],
    importOrder: ["^react", "^next", "^@", "^[.]", "^[.][.]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["jsx", "typescript"],
};

export default prettierConfig;
