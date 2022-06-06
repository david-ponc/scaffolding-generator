const tsconfigToJs = {
	compilerOptions: {
		allowJs: true,
		baseUrl: '.',
		paths: {
			'~/*': ['src/*']
		}
	},
	include: ['src']
};

module.exports = { tsconfigToJs };
