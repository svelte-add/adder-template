import { defineAdderTests } from '@svelte-add/core';
import { options } from './options.js';

export const tests = defineAdderTests({
    files: [],
    options,
    optionValues: [{ demoOption: true }],
    tests: [
        {
            name: 'testing test',
            run: async ({ elementExists }) => {
                await elementExists('.test');
            },
        },
    ],
});
