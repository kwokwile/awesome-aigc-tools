"use client";

import { useMemo, useState } from "react";

export type Tool = {
  repo: string;
  category: string;
  stars: number;
  language: string;
  license: string;
  updatedAt: string;
  url: string;
  homepage: string;
  descriptionZh: string;
  descriptionEn: string;
  bestFor: string[];
};

const categoryLabels: Record<string, string> = {
  All: "全部",
  Image: "图像",
  Video: "视频",
  Audio: "音频",
  "3D": "3D",
  Design: "设计",
  Prompt: "提示词",
  Workflow: "工作流",
};

const categoryMarks: Record<string, string> = {
  Image: "IMG",
  Video: "MOV",
  Audio: "SND",
  "3D": "3D",
  Design: "DSN",
  Prompt: "TXT",
  Workflow: "FLOW",
};

function compactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function ToolExplorer({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("stars");

  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];
  const visibleTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return tools
      .filter((tool) => category === "All" || tool.category === category)
      .filter((tool) => {
        if (!normalizedQuery) return true;
        return [
          tool.repo,
          tool.descriptionZh,
          tool.descriptionEn,
          tool.language,
          tool.license,
          ...tool.bestFor,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sort === "updated") {
          return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        }
        if (sort === "name") return a.repo.localeCompare(b.repo);
        return b.stars - a.stars;
      });
  }, [category, query, sort, tools]);

  return (
    <section className="explorer" id="explore" aria-labelledby="explore-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CURATED INDEX · 精选索引</p>
          <h2 id="explore-title">Choose by task, not by hype.</h2>
        </div>
        <p className="section-note">
          搜索用途、语言或许可证。仓库数据由自动化任务每日刷新。
        </p>
      </div>

      <div className="control-deck">
        <label className="search-box">
          <span className="sr-only">搜索工具</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索工具、用途、语言…  Search tools, use cases, languages…"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="清空搜索">
              Clear
            </button>
          ) : null}
        </label>

        <div className="category-row" aria-label="工具分类">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={item === category ? "category active" : "category"}
              onClick={() => setCategory(item)}
              aria-pressed={item === category}
            >
              {categoryLabels[item]} <span>{item}</span>
            </button>
          ))}
        </div>

        <div className="result-bar">
          <p>
            <strong>{visibleTools.length}</strong> tools matched
          </p>
          <label>
            <span>排序</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="stars">Most starred</option>
              <option value="updated">Recently updated</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>
      </div>

      {visibleTools.length ? (
        <div className="tool-grid">
          {visibleTools.map((tool, index) => {
            const [owner, name] = tool.repo.split("/");
            return (
              <article className="tool-card" key={tool.repo}>
                <div className="card-topline">
                  <span className={`category-mark mark-${tool.category.toLowerCase()}`}>
                    {categoryMarks[tool.category]}
                  </span>
                  <span className="card-rank">#{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="repo-name">
                  <span>{owner}/</span>
                  <h3>{name}</h3>
                </div>
                <p className="description-zh">{tool.descriptionZh}</p>
                <p className="description-en">{tool.descriptionEn}</p>

                <div className="tag-list" aria-label="适用场景">
                  {tool.bestFor.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <dl className="repo-meta">
                  <div>
                    <dt>Stars</dt>
                    <dd>★ {compactNumber(tool.stars)}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{tool.language}</dd>
                  </div>
                  <div>
                    <dt>License</dt>
                    <dd>{tool.license}</dd>
                  </div>
                </dl>

                <div className="card-actions">
                  <a href={tool.url} target="_blank" rel="noreferrer">
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                  {tool.homepage ? (
                    <a className="demo-link" href={tool.homepage} target="_blank" rel="noreferrer">
                      Website
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <p>没有匹配的工具 / No tools matched.</p>
          <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
