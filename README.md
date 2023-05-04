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
2. yarn i
3. yarn dev

## Feature

1. vite: yarn create vite
2. vue3
3. Typescript
4. vue-router
5. tailwindcss
6. i18n

## Q&A

1. How to solve "Cannot find module './App.vue' or its corresponding type declarations.ts"

This is an issue from vscode plugin volar.
To solve this, add content in vite-env.d.ts or create a new file like 'shims.d.ts'
declare module '\*.vue' { import type { DefineComponent } from 'vue' const component: DefineComponent<{}, {}, any> export default component }

2. How to solve "Cannot find name '\_\_dirname' Error in TypeScript"

To solve the error "Cannot find name \_\_dirname", install the node typings by running 'yarn add @types/node'
