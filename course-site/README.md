# 流体力学（1）课程网站

重庆大学土木工程学院《流体力学（1）》课程网站，基于 Docusaurus 构建，目标 GitHub Pages 地址：

```text
https://Jason-S-Liu.github.io/FM_tutorials/
```

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

如果开发模式在当前环境触发 Node 内存限制，可先执行 `npm run build`，再用任意静态服务器预览 `build` 目录。

## Build

```bash
npm run build
```

此命令会生成可部署到 GitHub Pages 的静态文件到 `build` 目录。

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

仓库设置中使用 `gh-pages` 分支发布：

```text
Settings -> Pages -> Deploy from a branch -> gh-pages / root
```
