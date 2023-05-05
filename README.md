# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Quick Start

1. git clone https://github.com/maple24/vite-vue3-scaffold.git
2. yarn install
3. yarn dev
4. yarn tauri dev

## Features
- [Vite](https://vitejs.dev/)
- [Vue3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vue-router v4](https://router.vuejs.org/)
- [Tailwindcss v3](https://tailwindcss.com/)
- [Vue-i18n-next v9](https://vue-i18n.intlify.dev/)
- [Vueuse v10](https://vueuse.org/)
- [Vitest](https://vitest.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Tauri](https://tauri.app/)
- [DaisyUI](https://daisyui.com/)
  
## Usage
- Theme(DaisyUI)
Add data-theme="cupcake" in HTML tag ,where data-theme is defined in tailwind.config.ts.
- Dark mode (vueuse + tailwindcss)
Uses Tailwind CSS favored dark mode which enables dark mode when class dark is applied to the html tag.
Specify your dark mode style to each element by using 'class="dark:bg-black"'
Example usage in /src/example/darkmode.vue. 
- I18n (vue-i18n-next + intlify/plugin)
All available locales will be pre-compilered automatically, the path of locales is defined in vite.config.ts.
To use i18n, an instance is defined in main.ts to specify messages and locale.
Example usage in /src/example/i18n.vue.

## Q&A

1. How to solve "Cannot find module './App.vue' or its corresponding type declarations.ts"

This is an issue from vscode plugin volar.
To solve this, add content in vite-env.d.ts or create a new file like 'shims.d.ts'
declare module '\*.vue' { import type { DefineComponent } from 'vue' const component: DefineComponent<{}, {}, any> export default component }

2. How to solve "Cannot find name '\_\_dirname' Error in TypeScript"

To solve the error "Cannot find name \_\_dirname", install the node typings by running 'yarn add @types/node'

3. How to enable autocomplete for '@' alias

Add baseUrl and paths into tsconfig.json file

4. How to solve "Could not find a declaration file for module 'vue-i18n'""

Add "noImplicitAny": false to tsconfig.json file

5. How to solve "Cannot find module '@intlify/vite-plugin-vue-i18n/messages' or its corresponding type declarations"

See Q1.