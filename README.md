<div align='center'>
 <h2><b>Scaffolding generator</b></h2>
 <p>Powered by <a href='https://github.com/yeoman/generator' target='_blank'>yeoman/generator</a></p>
</div>

## 🚀 What makes:

- ⚙️ Configure eslint, standard, and prettier.
- 🗃️ Configure paths for absolute imports.

## Usage:

install yeoman:

```
npm install -g yo
```

use the scaffolding generator:

```
yo scaffolding:vite
```

by default, scaffolding generator works with js preference, but you can change it to typescript with:

```
yo scaffolding:vite --ts
```

If you want to avoid overwrite questions you can use the `force` flag:

```
yo scaffolding:vite --force
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

- Add more flags to configure the scaffolding generator, for example:

  - `--external` to generate eslint and prettier configs on external files.
  - `--with-tailwind` to generate tailwind configs.

- Add more scaffolding generators, for example:
  - `scaffolding:next` to scaffold a nextjs project with same options.
  - `scaffolding:remix` to scaffold a remix project with same options.

## 🔑 License:

- [MIT License](https://github.com/david-ponc/scaffolding-generator/blob/main/LICENSE).
