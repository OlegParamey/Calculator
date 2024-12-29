import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'no-console': 'error',
            'no-debugger': 'error',
            'prettier/prettier': 'error',
        },
    },
    prettierConfig,
];
