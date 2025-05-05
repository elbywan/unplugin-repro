import path from "node:path";
import fs from "node:fs";

const base = path.resolve(import.meta.dirname, "src/imports");

fs.mkdirSync(base, { recursive: true });

for (let i = 1; i <= 10_000; i++) {
  const file = path.resolve(base, `${i}.ts`);
  fs.writeFileSync(file, `import a from 'a?virtual${i}';`);
}
