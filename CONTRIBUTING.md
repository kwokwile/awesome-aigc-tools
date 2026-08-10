# Contributing / 参与贡献

Thanks for helping keep the signal useful. 感谢你帮助这份索引保持准确、实用。

## Recommend a repository / 推荐项目

Before opening a pull request, check that the project:

1. has a public GitHub repository and a clear maintainer;
2. solves a concrete image, video, audio, 3D, design, prompt, or AI workflow task;
3. has documentation that lets another person try it;
4. is not a copied or minimally changed repository;
5. discloses a standard license or clearly linked usage terms.

## Add an entry / 添加条目

Edit `data/tools.json` and keep the existing schema. Write `descriptionZh` and `descriptionEn` in your own words. Keep each description factual and short. Use up to three `bestFor` tags.

Do not copy README paragraphs, logos, screenshots, or marketing claims from the source project.

Then run:

```bash
npm run refresh-data
npm test
npm run build
```

## Review standard / 审核标准

We prioritize usefulness, clear documentation, verifiable ownership, and meaningful maintenance. Star count is a discovery signal, not a guarantee of inclusion or ranking.
