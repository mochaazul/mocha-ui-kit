// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (doesn� t affect exit code)
// 'error' or 1 - turn the rule on as an error (exit code is 1 when triggered)
// eslint-disable-next-line no-undef
module.exports = {
	env: { browser: true },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	settings: { 'react': { 'version': 'detect' } },
	ignorePatterns: 'node_modules',
	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'react/self-closing-comp': 1,
		'react/prop-types': 0,
		'react/jsx-no-bind': 0,
		'react/jsx-no-duplicate-props': 1,
		'react/jsx-uses-vars': 1,
		// 'react/jsx-tag-spacing': [
		//   '1', {
		//     'afterOpening': 'never',
		//     'beforeClosing': 'never',
		//     'beforeSelfClosing': 'never',
		//   }
		// ],
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-curly-spacing': [
			1, {
				when: 'always',
				children: true,
			},
		],
		'object-curly-spacing': [1, 'always'],
		'jsx-quotes': [1, 'prefer-single'],
		quotes: [1, 'single'],
		eqeqeq: 1,
		'no-unused-vars': [
			'warn', {
				'args': 'none',
				'argsIgnorePattern': '^_'
			}
		],
		'no-undef': 1,
		'no-unneeded-ternary': 1,
		'no-extra-bind': 2,
		'no-console': 1,
		'no-trailing-spaces': [1, { skipBlankLines: true }],
		'comma-spacing': [
			1, {
				before: false,
				after: true,
			},
		],
		'semi-style': [1, 'last'],
		semi: 1,
		'semi-spacing': 1,
		'keyword-spacing': 1,
		'key-spacing': 1,
		'array-bracket-spacing': 1,
		'arrow-parens': [1, 'as-needed'],
		'arrow-spacing': 1,
		'block-spacing': 1,
		'func-call-spacing': 1,
		'brace-style': [
			1,
			'1tbs',
			{ allowSingleLine: true }
		],
		'space-before-blocks': 1,
		'space-before-function-paren': [1, 'never'],
		'space-in-parens': 1,
		'space-infix-ops': 1,
		'space-unary-ops': [
			1, {
				words: true,
				nonwords: false,
				overrides: { '+': true },
			},
		],
		'spaced-comment': 1,
		'rest-spread-spacing': 2,
		'prettier/prettier': 0,
		'no-multiple-empty-lines': [
			1, {
				max: 1,
				maxEOF: 0,
			},
		],
		'newline-per-chained-call': 1,
		'object-curly-newline': [
			1, {
				'ImportDeclaration': {
					'multiline': true,
					'minProperties': 5,
				},
				'ExportDeclaration': {
					'multiline': true,
					'minProperties': 5
				}
			}
		],
		indent: [1, 'tab', { 'SwitchCase': 1 }],
	},
};
