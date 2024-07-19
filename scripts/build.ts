import esbuild from 'esbuild'

const entrypoint = "./src/index.ts"
const tsconfig = "./tsconfig.json"

const build = async () => {
  await Promise.all([
    // bundle for commonjs
    esbuild.build({
      entryPoints: [entrypoint],
      bundle: true,
      minify: true,
      format: 'cjs',
      outfile: `./dist/index.cjs`,
      platform: 'node',
      treeShaking: true,
      tsconfig,
    }),
  ])
}

build()
