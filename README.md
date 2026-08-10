# Awesome AIGC Tools

> A bilingual, searchable radar for useful open-source creative AI tools.
>
> 面向创作者的双语开源 AIGC 工具雷达：按任务查找，直接访问原仓库，不看营销排名。

![Tools](https://img.shields.io/badge/curated_tools-29-c7ff4a?style=flat-square&labelColor=0a0b0d)
![Categories](https://img.shields.io/badge/categories-7-9c80ff?style=flat-square&labelColor=0a0b0d)
![License](https://img.shields.io/badge/index_license-MIT-f4f1e9?style=flat-square&labelColor=0a0b0d)

## Live demo / 在线演示

[Open Awesome AIGC Tools](https://awesome-aigc-tools.kwokwile.chatgpt.site)

## What this project solves / 它解决什么问题

Creative AI projects are scattered across thousands of repositories. Star counts alone do not tell you which tool fits a real task. This index adds concise bilingual notes, task tags, category filters, language, and visible license metadata so creators can decide faster.

开源 AIGC 项目分散在成千上万个仓库里，Star 数量也不能直接回答“我现在该用哪个”。本项目用简短的中英双语说明、使用场景标签、分类筛选、开发语言和许可证信息，帮创作者更快做选择。

## Included categories / 收录分类

| Category | 用途 | Examples |
| --- | --- | --- |
| Image | 图像生成与控制 | ComfyUI, InvokeAI, Diffusers |
| Video | 文生视频、图生视频 | Wan, CogVideo, Open-Sora |
| Audio | 音乐、语音、音效 | AudioCraft, OpenVoice, Fish Speech |
| 3D | 3D 资产生成与重建 | TRELLIS, Hunyuan3D, threestudio |
| Design | 画布、白板、产品设计 | OpenDesign, Excalidraw, Penpot |
| Prompt | 提示词学习与评测 | prompts.chat, Prompting Guide, promptfoo |
| Workflow | 智能体与可视化流程 | Dify, Flowise, Langflow |

## Why it is different / 不同之处

- Task-first descriptions instead of copied project slogans / 用真实用途说明代替复制宣传语
- Chinese and English notes for every entry / 每个项目都有中英双语说明
- Search and filters that work immediately / 搜索和分类筛选开箱即用
- License information stays visible / 许可证信息始终可见
- Repository metadata can refresh automatically / 仓库数据可自动刷新
- No paid placement / 不接受付费排名

## Run locally / 本地运行

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Refresh repository data / 刷新仓库数据

The curated descriptions and tags are maintained by people. Public GitHub metadata is refreshed by script:

```bash
npm run refresh-data
```

Set `GITHUB_TOKEN` if you need a higher API rate limit. The scheduled GitHub Action refreshes stars, primary language, license label, latest push time, canonical repository URL, and homepage.

## Recommend a tool / 推荐工具

Open an issue or pull request. A recommended project should:

- have a public, inspectable repository;
- solve a clear creative or production task;
- include enough documentation for someone else to try it;
- disclose its license or usage terms;
- not be a copied repository submitted only to collect traffic.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the data format and review checklist.

## Data and licenses / 数据与许可证

Repository metadata is collected from the [GitHub REST API](https://docs.github.com/en/rest/repos/repos#get-a-repository). Descriptions and task notes in this index are original editorial summaries. Every linked project remains owned by its respective maintainers and follows its own license. A `Custom` label means GitHub did not report a standard SPDX license; read that project's terms before adoption.

The code and original editorial content of this index are released under the [MIT License](LICENSE).

---

If this saves you research time, a Star helps more creators find it. 如果它帮你节省了筛选时间，欢迎点 Star 让更多创作者看到。
