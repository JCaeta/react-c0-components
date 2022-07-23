import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        typescript({
            typescript: require("typescript")
        }),
        postcss({
          extensions:['.css']
      }),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" }
    ]
  }
];

