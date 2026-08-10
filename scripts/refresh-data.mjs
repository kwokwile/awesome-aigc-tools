import { readFile, writeFile } from "node:fs/promises";

const fileUrl = new URL("../data/tools.json", import.meta.url);
const tools = JSON.parse(await readFile(fileUrl, "utf8"));
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "awesome-aigc-tools-refresh",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

for (const tool of tools) {
  const response = await fetch(`https://api.github.com/repos/${tool.repo}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status} for ${tool.repo}`);
  }

  const repository = await response.json();
  tool.repo = repository.full_name;
  tool.stars = repository.stargazers_count;
  tool.language = repository.language ?? "Unknown";
  tool.license = repository.license?.spdx_id && repository.license.spdx_id !== "NOASSERTION"
    ? repository.license.spdx_id
    : "Custom";
  tool.updatedAt = repository.pushed_at;
  tool.url = repository.html_url;
  tool.homepage = repository.homepage ?? "";
}

await writeFile(fileUrl, `${JSON.stringify(tools, null, 2)}\n`);
console.log(`Refreshed ${tools.length} repositories.`);
