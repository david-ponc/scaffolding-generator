const eslintJsDependencies = [
	'eslint',
	'eslint-config-prettier',
	'eslint-config-standard',
	'eslint-plugin-import',
	'eslint-plugin-n',
	'eslint-plugin-promise',
	'eslint-plugin-react',
	'eslint-plugin-simple-import-sort',
	'prettier',
	'vite-tsconfig-paths'
];

const eslintJsConfig = {
	scripts: {
		format: 'prettier --write .',
		lint: 'eslint --fix . --ext .js,.jsx'
	},
	eslintConfig: {
		env: {
			browser: true,
			es2021: true
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		extends: [
			'plugin:react/recommended',
			'plugin:react/jsx-runtime',
			'standard',
			'prettier'
		],
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			},
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: ['react', 'import', 'simple-import-sort'],
		rules: {
			'react/prop-types': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error'
		}
	},
	prettier: {
		useTabs: true,
		semi: true,
		singleQuote: true,
		jsxSingleQuote: true,
		trailingComma: 'none',
		arrowParens: 'avoid'
	}
};

module.exports = { eslintJsDependencies, eslintJsConfig };
