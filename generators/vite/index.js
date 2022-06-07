const chalk = require('chalk');
const Generator = require('yeoman-generator');
const {
	eslintJsDependencies,
	eslintJsConfig,
	tsconfigToJs
} = require('./utils/js');
const {
	eslintTsDependencies,
	eslintTsConfig,
	tsconfigToTs
} = require('./utils/ts');

module.exports = class extends Generator {
	prefs = {};

	constructor(args, options) {
		super(args, options);

		this.option('ts');
		this.option('js');
		this.option('fix');
		if (this.options.ts) this.prefs.lang = 'ts';
		if (this.options.js) this.prefs.lang = 'js';
		if (this.options.fix) this.prefs.fix = true;
	}

	async prefsPrompting() {
		if (!this.prefs.lang) {
			const { lang } = await this.prompt({
				type: 'list',
				name: 'lang',
				message: 'Choose a language',
				choices: [
					{ name: 'JavaScript', value: 'js' },
					{ name: 'TypeScript', value: 'ts' }
				],
				loop: true,
				default: 'js'
			});
			this.prefs.lang = lang;
		}

		if (!this.prefs.fix) {
			const { fix } = await this.prompt({
				type: 'confirm',
				name: 'fix',
				message: 'Would you like run lint and format your code?'
			});
			this.prefs.fix = fix;
		}
	}

	init() {
		const language = this.prefs.lang === 'ts' ? 'TypeScript' : 'JavaScript';
		const color = this.prefs.lang === 'ts' ? chalk.blue : chalk.yellow;
		console.log(color(`Scaffolding vite react app with ${language}: \n`));
	}

	addRulesToPackageJson() {
		console.log('🛠️  Adding eslint and prettier rules to package.json');
		const config = this.prefs.lang === 'ts' ? eslintTsConfig : eslintJsConfig;
		this.packageJson.merge(config);
	}

	viteConfigFile() {
		const extension = this.prefs.lang === 'ts' ? 'ts' : 'js';
		console.log(`⚙️  Adding tsconfig paths to vite.config.${extension}`);
		this.fs.copyTpl(
			this.templatePath('vite.config.js'),
			this.destinationPath(`vite.config.${extension}`)
		);
	}

	prettierIgnore() {
		console.log('📃 Creating .prettierignore');
		this.fs.copy(
			this.templatePath('.prettierignore'),
			this.destinationPath('.prettierignore')
		);
	}

	extendTsConfigJson() {
		console.log('🗃️  Defining paths to tsconfig.json');
		const tsconfigRules =
			this.prefs.lang === 'ts' ? tsconfigToTs : tsconfigToJs;
		this.fs.extendJSON(this.destinationPath('tsconfig.json'), tsconfigRules);
	}

	async installDependencies() {
		console.log('📦 Installing dev dependencies:');

		const dependencies =
			this.prefs.lang === 'ts' ? eslintTsDependencies : eslintJsDependencies;

		dependencies.forEach(dependency => {
			console.log(chalk.cyan(`    - ${dependency}`));
		});

		await this.addDevDependencies(dependencies, {
			'save-exact': true
		});
	}

	async end() {
		if (!this.prefs.fix) {
			console.log('\n  Now run:\n');
			console.log(chalk.blue('    npm ') + 'run lint');
			console.log(chalk.blue('    npm ') + 'run format');
			console.log(chalk.cyan('\n  Done.') + " Let's get coding!");
			return;
		}

		console.log('🛠️  Running eslint');
		await this.spawnCommand('npm', ['run', 'lint']);

		console.log('🛠️  Running prettier');
		await this.spawnCommand('npm', ['run', 'format']);

		console.log(chalk.cyan('\n  Done.') + " Let's get coding!");
	}
};
