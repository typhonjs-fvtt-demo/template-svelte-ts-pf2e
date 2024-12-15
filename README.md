# template-svelte-ts
Provides a barebones Typescript template repo to get set up with using the [TyphonJS Runtime Library](https://github.com/typhonjs-fvtt-lib/runtime) and [Svelte](https://svelte.dev/).

The Foundry types being used is [foundry-pf2e](https://github.com/7H3LaughingMan/foundry-pf2e). The League's community
types will work as well if you can find a stable version.

[TRL API docs](https://typhonjs-fvtt-lib.github.io/api-docs/index.html)

More info soon.

The basics:
- Install Node
- Run `npm install`
- Run `npm run build` to create initial assets in `dist/`.
- Start the Foundry server
- Optionally run `npm run dev` to start the Vite dev server.
  - Enable hot reload of language assets in Foundry server admin.
  - Allows automatic HMR (hot module reload) for all Svelte components and Foundry language file changes.

Production build:
- Create a production build via `npm run build`.
- Commit to GitHub
- Create a release / GH action will build the package and bundle assets.
  - The following files and folders are included: module.json assets/ dist/ lang/ packs/ LICENSE
  - If necessary modify `.github/workflows/main.yml` to change the bundling process.
