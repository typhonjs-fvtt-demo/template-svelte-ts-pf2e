import {
   SvelteApplication,
   type SvelteApp }     from '#runtime/svelte/application';

import BasicAppShell    from './BasicAppShell.svelte';

// Make sure to check out the `BasicApp` namespace below on defining custom options and interface for the `#external`
// context.

class BasicApp extends SvelteApplication<BasicAppOptions>
{
   constructor(options?: Partial<BasicAppOptions>)
   {
      super(options);
   }

   static get defaultOptions(): BasicAppOptions
   {
      return foundry.utils.mergeObject<SvelteApp.Options, Partial<BasicAppOptions>>(super.defaultOptions, {
         extra: true,   // Typed extra option from `BasicAppOptions` below.
         id: 'template-svelte-ts',
         resizable: true,
         minimizable: true,
         width: '25%',  // Just showing off you can use browser window percentages too!
         top: '10%',

         title: 'TemplateTS.title',

         svelte: {
            class: BasicAppShell,
            target: document.body,
         }
      });
   }
}

// Define the additional types outside the class
export type BasicAppExternal = SvelteApp.Context.External<BasicApp>;

/** Extended options that you can define. */
export interface BasicAppOptions extends SvelteApp.Options {
	/** An example of defining additional options */
	extra?: boolean;
}

export { BasicApp }