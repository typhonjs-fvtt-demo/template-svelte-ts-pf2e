import { SvelteApp } from '#runtime/svelte/application';

import BasicAppShell from './BasicAppShell.svelte';

/**
 * Make sure to check out the `BasicApp` namespace below on defining custom options and interface for the `#external`
 * context.
 *
 * Various errors given the TS type checking are commented out for you to explore and understand how TRL exposes types
 * for the mounted app shell component.
 *
 * Note: If you are not extending `options` like this example app class you can use `SvelteApp.Options<BasicAppShell>`
 * as the generic parameter to `SvelteApp`.
 */
class BasicApp extends SvelteApp<BasicApp.Options>
{
   /**
    * Unless you are defining additional options or setup you may omit a constructor.
    *
    * If you need to handle setup in a constructor, but do not need to handle any additional options
    * consider using {@link SvelteApp.OptionsCore}.
    *
    * @param options - BasicApp options to handle.
    */
   constructor(options?: Partial<BasicApp.Options>)
   {
      super(options);
   }

   static get defaultOptions(): BasicApp.Options
   {
      return foundry.utils.mergeObject<SvelteApp.Options, Partial<BasicApp.Options>>(super.defaultOptions, {
         extra: true,   // Typed extra option from `BasicApp.Options` below.
         id: 'template-svelte-ts-pf2e',
         resizable: true,
         minimizable: true,
         width: '25%',  // Just showing off you can use browser window percentages too!
         top: '10%',

         title: 'TemplatePF2E.title',

         svelte: {
            class: BasicAppShell,
            target: document.body,
            context: {
               // TRL handles loading external context to the app shell uniquely. This is loaded into `#external`.
               // This allows easy typing of all external data coming into the mounted app shell component.

               // application: 1,
               TEST: false,
               // bogus: 1
            },
            props: {
               test: true, // Set to something other than a boolean for error.

               /** Unknown prop below */
               // bogus: 1,

               /** Disallowed protected prop; part of application shell contract */
               // elementRoot: document.body,
               // elementContent: document.body,
            }
         }
      });
   }

   _getHeaderButtons(): SvelteApp.HeaderButton[]
   {
      const buttons: SvelteApp.HeaderButton[] = super._getHeaderButtons();

      // Basic data tracking for button below; use another mechanism in your actual code!
      let themeDark: boolean = true;

      buttons.unshift({
         class: 'theme-dark',
         icon: 'fas fa-moon',
         title: 'Dark Mode disable',
         styles: { color: 'lightblue' },
         keepMinimized: true,             // When true the header button remains when app is minimized.

         // The button data can be modified and reactive updates occur after the function completes.
         onPress: ({ button }: { button: SvelteApp.HeaderButton }): void =>
         {
            // Demo of changing the header button title / CSS.
            themeDark = !themeDark;
            button.title = themeDark ? 'Dark Mode disable' : 'Dark Mode enable';
            button.styles = themeDark ? { color: 'lightblue' } : { color: 'white' };
         }

         /**
          * There are several additional button data options available in TRL.
          */
         // keyCode: 'Space',                   // You can provide an alternate key code for button key press.
         // onContextMenu: ({ button, event })  // You can define `onContextMenu` for right click / contextmenu key press.
         // {
         //    console.log(`HeaderButtons - onContextMenu`);
         // },
      });

      return buttons;
   }

   /**
    * Shows how to access the mounted app shell -> `BasicAppShell` from the TS side with types.
    *
    * TRL will limit access to only props and `$set` and `$on`. `$destroy` is considered protected. Use the `close`
    * method to close an app window as per normal; this will destroy the mounted app shell component.
    */
   testingAppShell(): void
   {
      // App shell may be null, but with optional chaining you can access $set and $on.
      this.svelte.appShell?.$set({ test: false });

      // Receive events from the component.
      const unsubscribe = this.svelte.appShell?.$on('click', (): void => console.log('clicked'));

      // Disallowed Svelte component API.
      // this.svelte.appShell?.$destroy();

      // To set accessors directly you need to wrap in a null check.
      if (this.svelte.appShell)
      {
         this.svelte.appShell.test = true;

         // App shell protected props are disallowed.
         // this.svelte.appShell.elementRoot = false;
      }
   }
}

/**
 * A convenient pattern is augmenting the class with types which is valid modern TS. This makes it easier to
 * group additional types along with `BasicApp`.
 */
declare namespace BasicApp {
   /**
    * You may extend the `#external` default context with additional data. Accessed via `getContext('#external')` in
    * the app shell component.
    */
   interface External extends SvelteApp.Context.External<BasicApp> {
      /** From `BasicApp` / additional `#external` data. */
      TEST: boolean
   }

   /**
    * If you are not extending the `#external` context you can just use the following to still type the `application`
    * entry. Extends the SvelteApp `#external` types specifying a concrete application type.
    */
   // type External = SvelteApp.Context.External<BasicApp>;

   /** Extended options that you can define as well as explicit app shell type. */
   interface Options extends SvelteApp.Options<BasicAppShell, External> {
      /** An example of defining additional options */
      extra?: boolean;
   }
}

export { BasicApp }
