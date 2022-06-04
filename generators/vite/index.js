const chalk = require('chalk');
const Generator = require('yeoman-generator');
const {
	eslintJsDependencies,
	eslintJsConfig,
	tsconfigToJs
} = require('../../utils/js');
const {
	eslintTsDependencies,
	eslintTsConfig,
	tsconfigToTs
} = require('../../utils/ts');

module.exports = class extends Generator {
	constructor(args, options) {
		super(args, options);

		this.option('ts');

		const language = this.options.ts ? 'TypeScript' : 'JavaScript';
		console.log(
			chalk.magenta(`Scaffolding vite react app with ${language}: \n`)
		);
	}

	async prompting() {
		const answers = await this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname // Default to current folder name
			},
			{
				type: 'confirm',
				name: 'cool',
				message: 'Would you like to enable the Cool feature?'
			}
		]);
		console.log(answers);
	}

	addRulesToPackageJson() {
		console.log('🛠️  Adding eslint and prettier rules to package.json');
		const config = this.options.ts ? eslintTsConfig : eslintJsConfig;
		this.packageJson.merge(config);
	}

	viteConfigFile() {
		const extension = this.options.ts ? 'ts' : 'js';
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
		const tsconfigRules = this.options.ts ? tsconfigToTs : tsconfigToJs;
		this.fs.extendJSON(this.destinationPath('tsconfig.json'), tsconfigRules);
	}

	installDependencies() {
		console.log('📦 Installing dev dependencies:');

		const dependencies = this.options.ts
			? eslintTsDependencies
			: eslintJsDependencies;

		dependencies.forEach(dependency => {
			console.log(chalk.cyan(`    - ${dependency}`));
		});

		this.addDevDependencies(dependencies, {
			'save-exact': true
		});
	}
};
