const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');

const { eslintJsConfig, tsconfigToJs } = require('../generators/vite/utils/js');
const { eslintTsConfig, tsconfigToTs } = require('../generators/vite/utils/ts');

describe('scaff:vite for JavaScript', function () {
	const lang = 'js';

	it('scaff:vite js with options', function () {
		return helpers
			.run(path.join(__dirname, '../generators/vite'))
			.withOptions({
				[lang]: true,
				fix: false
			})
			.withPrompts({ fix: false });
	});

	checkResults(lang);

	it('scaff:vite js with prompts', function () {
		return helpers.run(path.join(__dirname, '../generators/vite')).withPrompts({
			lang,
			fix: false
		});
	});

	checkResults(lang);
});

describe('scaffolding:vite for TypeScript', function () {
	const lang = 'ts';
	it('scaff:vite ts with options', function () {
		console.log({ lang });
		return helpers
			.run(path.join(__dirname, '../generators/vite'))
			.withOptions({
				[lang]: true,
				fix: false
			})
			.withPrompts({ fix: false });
	});

	checkResults(lang);

	it('scaff:vite ts with prompts', function () {
		return helpers.run(path.join(__dirname, '../generators/vite')).withPrompts({
			lang,
			fix: false
		});
	});

	checkResults(lang);
});

function checkResults(lang) {
	const eslintConfig = lang === 'ts' ? eslintTsConfig : eslintJsConfig;
	const tsconfig = lang === 'ts' ? tsconfigToTs : tsconfigToJs;
	const viteConfigFile = `vite.config.${lang}`;

	it('Verify package.json content', function () {
		assert.file('package.json');
		assert.JSONFileContent('package.json', {
			...eslintConfig
		});
	});

	it(`Verify ${viteConfigFile} content`, function () {
		assert.file(viteConfigFile);

		const viteConfig = fs.readFileSync(
			path.join(__dirname, '../generators/vite/templates/vite.config.js'),
			'utf8'
		);
		assert.fileContent(viteConfigFile, viteConfig);
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

		assert.JSONFileContent('tsconfig.json', tsconfig);
	});
}
