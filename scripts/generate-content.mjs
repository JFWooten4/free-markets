import { readdirSync, rmSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const sourceDir = join(root, "micro");
const outputDir = join(root, ".generated-content", "micro");
const months = new Map([
  ["Jan", "01"],
  ["Feb", "02"],
  ["Mar", "03"],
  ["Apr", "04"],
  ["May", "05"],
  ["Jun", "06"],
  ["Jul", "07"],
  ["Aug", "08"],
  ["Sep", "09"],
  ["Oct", "10"],
  ["Nov", "11"],
  ["Dec", "12"],
]);

function slugify(title) {
  return title
    .trim()
    .split(/\s+/)
    .slice(0, 6)
    .join(" ")
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function yamlString(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function titleFrom(content, path) {
  const match = content.match(/^#\s+(.+?)\s*$/m);
  if (!match) throw new Error(`Missing H1 heading in ${path}`);
  return match[1].replace(/\s+\{#.*\}$/, "").trim();
}

function dateFrom(path) {
  const [year, monthName, fileName] = relative(sourceDir, path).split("/");
  const month = months.get(monthName);
  if (!month) throw new Error(`Unknown month ${monthName} in ${path}`);
  const day = Number.parseInt(fileName, 10);
  return `${year}-${month}-${String(day).padStart(2, "0")}`;
}

function markdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    if (entry.isFile() && entry.name.endsWith(".md")) return [path];
    return [];
  });
}

rmSync(outputDir, { force: true, recursive: true });
mkdirSync(outputDir, { recursive: true });

const seenSlugs = new Map();
const paths = markdownFiles(sourceDir).sort();

for (const path of paths) {
  const content = readFileSync(path, "utf8");
  const title = titleFrom(content, path);
  const slug = slugify(title);

  if (!slug) throw new Error(`Empty slug generated from ${path}`);
  if (seenSlugs.has(slug)) {
    throw new Error(`Duplicate slug ${slug} for ${path} and ${seenSlugs.get(slug)}`);
  }

  seenSlugs.set(slug, path);

  const frontMatter = [
    "---",
    `title: ${yamlString(title)}`,
    `slug: ${yamlString(slug)}`,
    `date: ${yamlString(dateFrom(path))}`,
    `sourcePath: ${yamlString(relative(root, path))}`,
    "---",
    "",
  ].join("\n");

  writeFileSync(join(outputDir, `${slug}.md`), `${frontMatter}${content}`);
}

console.log(`Generated ${seenSlugs.size} micro posts`);
