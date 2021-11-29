import { SvelteApplication }  from '@typhonjs-fvtt/runtime/svelte/application';

import BasicAppShell          from './BasicAppShell.svelte';

export default class BasicApplication extends SvelteApplication
{
   /**
    * @inheritDoc
    */
   constructor(options?: Partial<Application.Options>) { super(options); }

   static override get defaultOptions(): Application.Options
   {
      // @ts-ignore
      return foundry.utils.mergeObject(super.defaultOptions, {
         id: 'template-svelte-ts',
         resizable: true,
         minimizable: true,
         width: 500,
         height: 320,
         title: 'Template Svelte (TS)',

         svelte: {
            class: BasicAppShell,
            target: document.body,
            intro: true,
            props: {
               message: 'Foundry'
            }
         }
      });
   }
}