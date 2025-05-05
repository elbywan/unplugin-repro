import rspack from "@rspack/core";
import fs from "node:fs";
import type { Compiler, RspackOptions, Stats } from "@rspack/core";
import { MyPlugin } from "./plugin.ts";

const common = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
} satisfies RspackOptions;

const build = (compiler: Compiler) => {
  return new Promise<Stats | undefined>((resolve, reject) => {
    compiler.run((err, stats) => {
      compiler.close((closeErr) => {
        if (closeErr) {
          console.error(closeErr);
        }
        if (err) {
          return reject(err);
        }
        if (stats?.hasErrors()) {
          console.error(stats.toString({
            colors: true,
            chunks: false,
            modules: false,
            errors: true
          }))
          return reject(new Error("Build failed"));
        }
        resolve(stats);
      });
    });
  });
};

const printStats = (stats: Stats | undefined) => {
  console.log(
    stats?.toString({
      colors: true,
      chunks: false,
      modules: false,
    }) ?? "No stats"
  );
};

const buildMultiple = (compilers: Compiler[]) => {
  return Promise.all(compilers.map(build)).then((statsArray) => {
    statsArray.forEach(printStats);
  });
};

const compiler = rspack({
  ...common,
  entry: {
    main: "./src/index.ts",
  },
  plugins: [MyPlugin.rspack({ delay: 100 })],
});
const compiler2 = rspack({
  ...common,
  entry: {
    main2: "./src/index2.ts",
  },
  plugins: [MyPlugin.rspack({ delay: 10_000 })],
});

await buildMultiple([compiler, compiler2]);

