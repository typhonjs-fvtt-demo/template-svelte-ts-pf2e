# template-svelte-ts
[![TyphonJS Discord](https://img.shields.io/discord/737953117999726592?label=TyphonJS%20Discord)](https://typhonjs.io/discord/)
[![Twitch](https://img.shields.io/twitch/status/typhonrt?style=social)](https://www.twitch.tv/typhonrt)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs-fvtt-demo/template-svelte-esm/blob/main/LICENSE)

Provides a barebones [Foundry VTT](https://foundryvtt.com/) module template repo to get set up with using the [TyphonJS Runtime Library](https://github.com/typhonjs-fvtt-lib/runtime), [Svelte](https://svelte.dev/), and [Typescript](https://www.typescriptlang.org/).

The Foundry types being used is [foundry-pf2e](https://github.com/7H3LaughingMan/foundry-pf2e). The League's community
types will work as well if you can find a stable version.

[TRL API docs](https://typhonjs-fvtt-lib.github.io/api-docs/index.html)

Triple licensed under the [CC0](https://github.com/typhonjs-fvtt-demo/template-svelte-esm/blob/main/LICENSE-CC0),
[MIT](https://github.com/typhonjs-fvtt-demo/template-svelte-esm/blob/main/LICENSE-MIT), or
[Unlicense](https://github.com/typhonjs-fvtt-demo/template-svelte-esm/blob/main/LICENSE-UNLICENSE). This repo is
intended as public domain / freely available starter code that you can use for any project you choose and licensed
however you see fit with no restrictions.

## About:
Getting started with a new library or development methodology can be difficult. This template repo contains a
barebones setup suitable to start working on your own module. Certainly do check out
[Essential Svelte (ESM)](https://github.com/typhonjs-fvtt-demo/essential-svelte-esm) for more involved demos that show specific
concepts available with Svelte and TRL. Please stop by the
[![TyphonJS Discord](https://img.shields.io/discord/737953117999726592?label=TyphonJS)](https://typhonjs.io/discord/)
Discord server to ask any questions or receive support on all things TRL / Svelte / Foundry.

## Installation (Requires Foundry VTT version 12):

Don't skip step 9.... You have read this list right?

1. Create your version of the template in a new repo by clicking on the "Use this template" button above. In this process rename
   the repo to your new module name.
2. Install [NodeJS](https://nodejs.org/) if you haven't done this already.
3. Use [WebStorm](https://www.jetbrains.com/webstorm/), [VSCode](https://code.visualstudio.com/), IDE of choice or command line to
   clone your repo into the Foundry VTT `Data/modules` directory (make sure to keep the name
   of your repo as the folder installed in the modules directory).
4. Modify the module `id` in `module.json` to match your new Foundry package ID.
5. You may of course also change the title & description of the module in `module.json`.
6. Rename `template-svelte-ts.lock` to the new ID of your module. This prevents Foundry from overwriting your development
   repo if you have also released your Foundry package.
7. In `./vite.config.ts` update `s_SVELTE_HASH_ID` to provide a short unique hash ID; suggestion: base it off your package ID.
8. Open in your IDE or via command line and proceed to run `npm install`
9. __Run the NPM script `build` to create the production bundle. This is required to initially build assets into `dist/`.__
10. Optionally run the NPM script `dev` to start the Vite dev server which uses `esbuild` &
   HMR (hot module replacement) to dynamically update your running module in real time for all Svelte related components.
   Don't forget to enable language hot reload in the Foundry server admin for hot reloads for language translation files.
11. Restart Foundry VTT. This is necessary for Foundry to load the new module.
12. You should now have a new module installed `Template Svelte (TS)` or whatever title you set in step #4 visible in
   your modules list.
13. Launch a game / world of your choice.
14. Enable your new module under `Manage Modules`.
15. On reload the basic application will appear instantly as it is rendered in the `ready` Foundry hook from the entry.

## Production / release build:
- Increment the version of your module in `module.json` using [SemVer](https://semver.org/).
- Commit to GitHub
- Create a release / GH action will build the package and bundle assets.
  - The following files and folders are included: module.json assets/ dist/ lang/ packs/ LICENSE
  - If necessary modify `.github/workflows/main.yml` to change the bundling process.
- The built package is now available to directly install from your GitHub account by pasting the following link into
  manifest URL field in the add-on modules / install module screen: `https://github.com/<YOUR GITHUB USER NAME>/<YOUR REPO>/releases/latest/download/module.json`.

## Updating types:
- `foundry-pf2e` only provides a direct Github install / linked in `package.json`. Run `npm update` to get the latest.
