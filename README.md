# FM_tutorials

重庆大学土木工程学院《流体力学（1）》课程材料与课程网站。

课程网站源码位于 `course-site/`，基于 Docusaurus 构建。

目标 GitHub Pages 地址：

```text
https://Jason-S-Liu.github.io/FM_tutorials/
```

## 本地构建

```bash
cd course-site
npm install
npm run build
```

## 部署

课程网站通过 `gh-pages` 分支发布。GitHub Pages 设置建议：

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

## 公开范围

公开仓库只包含课程网站、教学计划、公开讲义和必要模板文件。`Ref/` 中的备课参考文献、书籍和 PPT 不提交到 GitHub。
