#!/usr/bin/env node
import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { validate } from "skills-ref";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = join(root, "skills");

const entries = await readdir(skillsRoot, { withFileTypes: true });
const skillDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

if (skillDirs.length === 0) {
  console.error("No skill directories found under skills/");
  process.exit(1);
}

let failed = 0;

for (const name of skillDirs.sort()) {
  const skillPath = join(skillsRoot, name);
  const problems = await validate(skillPath);
  if (!problems || problems.length === 0) {
    console.log(`OK  ${name}`);
    continue;
  }
  failed += 1;
  console.error(`FAIL ${name}`);
  for (const problem of problems) {
    console.error(`  - ${problem}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} skill(s) failed validation`);
  process.exit(1);
}

console.log(`\nValidated ${skillDirs.length} skill(s)`);
