import {
   SvelteApplication,
   type SvelteApplicationOptions }  from '#runtime/svelte/application';

import BasicAppShell                from './BasicAppShell.svelte';

interface MyOptions extends SvelteApplicationOptions {
   extra: boolean;
}

export default class BasicApplication extends SvelteApplication<MyOptions>
{
   constructor(options?: MyOptions)
   {
      super(options);
   }

   static get defaultOptions(): MyOptions
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         extra: true,
         id: 'template-svelte-ts',
         resizable: true,
         minimizable: true,
         width: 300,
         title: 'TemplateTS.title',

         svelte: {
            class: BasicAppShell,
            target: document.body,
         }
      });
   }
}