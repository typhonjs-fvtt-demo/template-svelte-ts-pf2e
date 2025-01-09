<script lang=ts>
   import { getContext }         from 'svelte';

   import { ApplicationShell }   from '#runtime/svelte/component/application';

   import type { BasicApp }      from './BasicApp';

   /**
    * Application shell contract. Export the `elementRoot` from `ApplicationShell`. This is how `SvelteApp`
    * can automatically find the root element to bind to the element on the JS side.
    */
   export let elementRoot: HTMLElement;

   /**
    * A test boolean prop.
    */
   export let test: boolean = false;

   // You can use `SvelteApp.Context.External` from `#runtime/svelte/application` to get the basic
   // `SvelteApplication` `#external` context. Here we use an extended type defining `application`
   // as `BasicApp`.
   const { TEST, application } = getContext<BasicApp.External>('#external');

   // Shows that you can get the additional external context data defined in `BasicApp`.
   if (TEST) { /* no-op */ }

   // Shows that you can get the extra options defined in `BasicApp`.
   if (application.options.extra) { /* no-op */ }

   // Reactive statement that logs whenever `test` is `true`.
   $: if (test) { console.log(`'test' is true.`); }
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <!-- Put you content in here; this goes in `.window-content` of the app shell -->
   <main>
      <h1>Basic Application</h1>
   </main>
</ApplicationShell>

<style lang=scss>
   main {
      text-align: center;
      display: flex;
      flex-direction: column;
   }
</style>
