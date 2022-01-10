参考文章
https://juejin.cn/post/6951649464637636622

初始化目录

- `npm init @vitejs/app`
- `vite-vue3-empty`
- `vue -> vue-ts`
- 修改 `vite.config.ts`
- `npm i @types/node -D`

重置默认样式

- `/src/styles/reset.css`

CSS 预编译

- `npm i less -D` // less 好安装一点(

代码规范

EditorConfig

- 安装 `EditorConfig` 插件
- 增加 `.editorconfig` 文件

Prettier

- 安装 `prettier`插件
- `npm i prettier -D`
- 增加 `.prettierrc` 文件

ESLint

- `安装 ESLint 插件`
- `npm i eslint -D`
- `npx eslint --init`
- 修改 `。eslintrc.js` 文件

husky

- npx husky-init && npm install
- 在 `.husky` 目录下进行配置
- 常用的钩子 `pre-commit、commit-msg、pre-push`

lint-staged

- `npm i lint-staged -D`
