module.exports = {
    "extends": "airbnb-base",
    rules: {
        indent: [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    VariableDeclarator: true,
                    AssignmentExpression: true,
                },
            },
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-underscore-dangle': ['warn'],
        'arrow-body-style': ['warn'],
        'no-use-before-define': ['error', { functions: false, classes: true }],
        'object-shorthand': ['error', 'consistent'],
        'prefer-template': 'off',
        'prefer-arrow-callback': 'off',
    },
};
