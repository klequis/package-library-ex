import resolve from "rollup-plugin-node-resolve"
import babel from 'rollup-plugin-babel'


export default {
  input: ["src/main.js"],
  output: {
    dir: "dist",
    format: "cjs"
  },
  plugins: [
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
}
