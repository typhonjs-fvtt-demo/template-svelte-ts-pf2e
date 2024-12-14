import { BasicApp } from './view/basic/BasicApp';

// Creates and renders the BasicApplication on the Foundry `ready` hook.
Hooks.on('ready', () =>
{
   new BasicApp().render(true, { focus: true })
});
