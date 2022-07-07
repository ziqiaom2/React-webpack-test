module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        // "eslint:recommended",
        // "plugin:react/recommended"
    ],
    parserOptions: {
        parser: 'babel-eslint',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true,
            modules: true,
            legacyDecorators: true,
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
    }
}
