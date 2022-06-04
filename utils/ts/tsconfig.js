const tsconfigToTs = {
	compilerOptions: {
		baseUrl: '.',
		paths: {
			'~/*': ['src/*']
		}
	},
	include: ['src']
};

module.exports = { tsconfigToTs };
