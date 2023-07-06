module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb-typescript'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        project: './tsconfig.json'
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        'react/prop-types': ['off'],
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'linebreak-style': 'off',
        'no-nested-ternary': 'off',
        'no-console': ["warn", { allow: ["warn", "error"] }],
        "@typescript-eslint/lines-between-class-members": "off",
    },
};
