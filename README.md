<div align='center'>
 <h2><b>Scaffolding generator</b></h2>
 <p>Powered by <a href='https://github.com/yeoman/generator' target='_blank'>yeoman/generator</a></p>
 <a href='https://github.com/david-ponc/scaffolding-generator/actions/workflows/CI.yml'>
  <img src='https://github.com/david-ponc/scaffolding-generator/actions/workflows/CI.yml/badge.svg?branch=main' alt="test status">
 </a>
</div>

## 🚀 What makes:

- ⚙️ Configure eslint, standard, and prettier.
- 🗃️ Configure paths for absolute imports.

## Usage:

install yeoman:

```
npm install -g yo
```

install generator:

```
npm install -g generator-scaff
```

use the scaffolding generator:

```
yo scaff:vite
```

If you want to avoid overwrite questions you can use the `force` flag:

```
yo scaff:vite --force
```

## 📚 How to use:

Acctually, those are the options you can use.
| Option | Description |
| ------ | ----------- |
| ts | Project with TypeScript |
| js | Project with JavaScript |
| fix | Run lint and format commands |

You can define options with flags or prompts:

```
yo scaff:vite --js --fix
```

If not provides any option, the scaffolding generator will ask you to provide them.

```bash
# Language option
Choose a language:
  JavaScript
  TypeScript

# Fix option
Would you like run lint and format your code? (Y/n)
```

If you decide not to use `fix` option, remember to run:

```
npm run lint && npm run format
```

## 🛠️ Working with:

- ⚡ [Vitejs](https://vitejs.dev/) on Reactjs Projects with JavaScript or TypeScript.

## 📦 Packages:

| Package                                                                                         | Version                                                                                                |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [@typescript-eslint/eslint-plugin]() (Only with TypeScript flag)                                | ![@typescript-eslint/eslint-plugin](https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin.svg) |
| [@typescript-eslint/parser]() (Only with TypeScript flag)                                       | ![@typescript-eslint/parser](https://img.shields.io/npm/v/@typescript-eslint/parser.svg)               |
| [eslint](https://github.com/eslint/eslint)                                                      | ![eslint version](https://img.shields.io/npm/v/eslint.svg)                                             |
| [standard](https://github.com/standard/standard)                                                | ![standard version](https://img.shields.io/npm/v/standard.svg)                                         |
| [prettier](https://github.com/prettier/prettier)                                                | ![prettier version](https://img.shields.io/npm/v/prettier.svg)                                         |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)                    | ![e-c-p version](https://img.shields.io/npm/v/eslint-config-prettier.svg)                              |
| [eslint-config-standard](https://github.com/standard/eslint-config-standard)                    | ![e-c-s version](https://img.shields.io/npm/v/eslint-config-standard.svg)                              |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)                       | ![eslint-plugin-import](https://img.shields.io/npm/v/eslint-plugin-import.svg)                         |
| [eslint-plugin-n](https://github.com/weiran-zsd/eslint-plugin-node)                             | ![eslint-plugin-n](https://img.shields.io/npm/v/eslint-plugin-n.svg)                                   |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                      | ![eslint-plugin-promise](https://img.shields.io/npm/v/eslint-plugin-promise.svg)                       |
| [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)                        | ![eslint-plugin-react](https://img.shields.io/npm/v/eslint-plugin-react.svg)                           |
| [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort/) | ![eslint-plugin-simple-import-sort](https://img.shields.io/npm/v/eslint-plugin-simple-import-sort.svg) |
| [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)                        | ![vite-tsconfig-paths](https://img.shields.io/npm/v/vite-tsconfig-paths.svg)                           |

## Ideas:

- Add more options to configure the scaffolding generator, for example:

  - `external` to generate eslint and prettier configs on external files.
    - `eslintrc.json` or `eslintrc.js`
    - `.prettierrc`
  - `with-tailwind` to install and generate tailwind configs.
    - Using `prettier-plugin-tailwindcss` plugin.

- Add more scaffolding generators, for example:
  - `scaff:next` to scaffold a nextjs project with same options.
  - `scaff:remix` to scaffold a remix project with same options.
  - `scaff:node` to scaffold a vitejs project with same options.

## 🔑 License:

- [MIT License](https://github.com/david-ponc/scaffolding-generator/blob/main/LICENSE).
