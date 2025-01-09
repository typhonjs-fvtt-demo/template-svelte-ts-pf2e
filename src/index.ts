import { BasicApp } from './view/basic/BasicApp';

// Creates and renders BasicApp on the Foundry `ready` hook.
Hooks.on('ready', (): void =>
{
   new BasicApp().render(true, { focus: true })
});
