import tools from "../data/tools.json";
import { ToolExplorer, type Tool } from "./ToolExplorer";

const typedTools = tools as Tool[];
const totalStars = typedTools.reduce((sum, tool) => sum + tool.stars, 0);
const categoryCount = new Set(typedTools.map((tool) => tool.category)).size;

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="AIGC Index 首页">
          <span className="brand-mark">A</span>
          <span>AIGC INDEX</span>
        </a>
        <nav aria-label="主导航">
          <a href="#explore">Explore</a>
          <a href="#method">Method</a>
          <a href="https://github.com/kwokwile/awesome-aigc-tools" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> OPEN-SOURCE CREATIVE RADAR · 开源创作雷达</p>
          <h1>
            Find the right tool
            <span>before your GPU gets cold.</span>
          </h1>
          <p className="hero-lead">
            一份为创作者准备的开源 AIGC 工具索引。真实仓库、双语说明、按任务筛选，
            帮你跳过营销页面，直接找到能用的项目。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#explore">开始探索 / Explore tools</a>
            <a className="text-action" href="https://github.com/kwokwile/awesome-aigc-tools" target="_blank" rel="noreferrer">
              Star on GitHub <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="项目数据概览">
          <div className="panel-label">PUBLIC DATA / DAILY REFRESH</div>
          <div className="signal-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="core">AI</div>
            <span className="signal s1">IMG</span>
            <span className="signal s2">3D</span>
            <span className="signal s3">SND</span>
            <span className="signal s4">MOV</span>
          </div>
          <dl className="hero-stats">
            <div><dt>CURATED</dt><dd>{typedTools.length}</dd><span>open projects</span></div>
            <div><dt>SIGNAL</dt><dd>{(totalStars / 1_000_000).toFixed(1)}M+</dd><span>combined stars</span></div>
            <div><dt>PATHS</dt><dd>{categoryCount}</dd><span>creative categories</span></div>
          </dl>
        </div>
      </section>

      <div className="trust-strip" aria-label="收录原则">
        <span>NO PAID PLACEMENT</span>
        <span>PUBLIC REPOSITORIES</span>
        <span>LICENSE VISIBLE</span>
        <span>BILINGUAL NOTES</span>
      </div>

      <ToolExplorer tools={typedTools} />

      <section className="method" id="method">
        <div>
          <p className="eyebrow">HOW IT WORKS · 收录方法</p>
          <h2>A useful index should help you decide.</h2>
        </div>
        <ol>
          <li><span>01</span><div><h3>Public and inspectable</h3><p>只收录公开可检查的代码仓库，并直接链接原项目。</p></div></li>
          <li><span>02</span><div><h3>Task-first notes</h3><p>不用宣传语，直接说明它解决什么问题、适合谁。</p></div></li>
          <li><span>03</span><div><h3>License stays visible</h3><p>自定义许可证会明确标注，采用前请阅读原项目条款。</p></div></li>
          <li><span>04</span><div><h3>Community maintained</h3><p>欢迎通过 Issue 或 Pull Request 推荐、纠错和更新。</p></div></li>
        </ol>
      </section>

      <section className="contribute">
        <p className="eyebrow">KEEP THE SIGNAL CLEAN</p>
        <h2>Know a tool that deserves a place?</h2>
        <p>推荐真正解决问题的开源项目。无付费排名，不接受复制项目。</p>
        <a href="https://github.com/kwokwile/awesome-aigc-tools/issues/new" target="_blank" rel="noreferrer">
          Recommend a tool ↗
        </a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">A</span><span>AIGC INDEX</span></a>
        <p>Curated with care. Project data belongs to its respective owners.</p>
        <p>MIT © 2026 kwokwile</p>
      </footer>
    </main>
  );
}
