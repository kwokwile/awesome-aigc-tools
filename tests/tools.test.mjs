import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const tools = JSON.parse(await readFile(new URL("../data/tools.json", import.meta.url), "utf8"));

test("the index contains a useful first collection", () => {
  assert.ok(tools.length >= 25);
  assert.ok(new Set(tools.map((tool) => tool.category)).size >= 7);
});

test("repository entries are unique and link to GitHub", () => {
  const repositories = tools.map((tool) => tool.repo);
  assert.equal(new Set(repositories).size, repositories.length);
  for (const tool of tools) {
    assert.match(tool.repo, /^[\w.-]+\/[\w.-]+$/);
    assert.match(tool.url, /^https:\/\/github\.com\//);
  }
});

test("every entry contains decision-making metadata", () => {
  for (const tool of tools) {
    assert.ok(tool.stars >= 0);
    assert.ok(tool.language);
    assert.ok(tool.license);
    assert.ok(tool.descriptionZh.length >= 15);
    assert.ok(tool.descriptionEn.length >= 30);
    assert.ok(tool.bestFor.length >= 1 && tool.bestFor.length <= 3);
  }
});
