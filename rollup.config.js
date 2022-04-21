import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        // postcss({
        //     modules: true,
        //     extract: true,
        //     include: 'src/.css',
        //   }),
        typescript({
            typescript: require("typescript")
        })
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" }
    ]
  }
];
