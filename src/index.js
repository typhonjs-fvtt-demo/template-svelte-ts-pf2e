// Use the following ambient import to include Typescript ambient declarations for `#runtime/svelte/application`.
import '#runtime/svelte/application/ambient-ts';

import BasicApplication from './view/basic/BasicApplication';

Hooks.on('ready', () =>
{
   new BasicApplication().render(true, { focus: true })
});

// The entry point needs to be `index.js` to match the entry point in `module.json` for the dev server. All other
// source files can be Typescript.