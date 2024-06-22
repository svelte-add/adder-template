import { remoteControl } from '@svelte-add/core/internal';
import { testAdder } from '@svelte-add/testing-library';

remoteControl.enable();
/** @type {import('@svelte-add/core/adder/config.js').AdderWithoutExplicitArgs} */
const composer = /** @type {any} */ (await import('./index.js')).default;
remoteControl.disable();

testAdder(composer, {
    outputDirectory: './.outputs',
    headless: true,
    pauseExecutionAfterBrowser: false,
});
