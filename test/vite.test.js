const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');

const { eslintJsConfig, tsconfigToJs } = require('../generators/vite/utils/js');
const { eslintTsConfig, tsconfigToTs } = require('../generators/vite/utils/ts');

describe('scaffolding:vite', function () {
	it('Run scaffolding', function () {
		return helpers
			.run(path.join(__dirname, '../generators/vite'))
			.withOptions({ ts: false });
	});

	it('Verify package.json content', function () {
		assert.file('package.json');
		assert.JSONFileContent('package.json', {
			...eslintJsConfig
		});
	});

	it('Verify vite.config.js content', function () {
		assert.file('vite.config.js');

		const viteConfig = fs.readFileSync(
			path.join(__dirname, '../generators/vite/templates/vite.config.js'),
			'utf8'
		);
		assert.fileContent('vite.config.js', viteConfig);
	});

	it('Verify .prettierignore content', function () {
		assert.file('.prettierignore');

		const prettierIgnore = fs.readFileSync(
			path.join(__dirname, '../generators/vite/templates/.prettierignore'),
			'utf8'
		);
		assert.fileContent('.prettierignore', prettierIgnore);
	});

	it('Verify tsconfig.json content', function () {
		assert.file('tsconfig.json');

		assert.JSONFileContent('tsconfig.json', tsconfigToJs);
	});
});

describe('scaffolding:vite --ts', function () {
	it('Run scaffolding', function () {
		return helpers
			.run(path.join(__dirname, '../generators/vite'))
			.withOptions({ ts: true });
	});

	it('Verify package.json content', function () {
		assert.file('package.json');
		assert.JSONFileContent('package.json', {
			...eslintTsConfig
		});
	});

	it('Verify vite.config.ts content', function () {
		assert.file('vite.config.ts');

		const viteConfig = fs.readFileSync(
			path.join(__dirname, '../generators/vite/templates/vite.config.js'),
			'utf8'
		);
		assert.fileContent('vite.config.ts', viteConfig);
	});

	it('Verify .prettierignore content', function () {
		assert.file('.prettierignore');

		const prettierIgnore = fs.readFileSync(
			path.join(__dirname, '../generators/vite/templates/.prettierignore'),
			'utf8'
		);
		assert.fileContent('.prettierignore', prettierIgnore);
	});

	it('Verify tsconfig.json content', function () {
		assert.file('tsconfig.json');

		assert.JSONFileContent('tsconfig.json', tsconfigToTs);
	});
});
