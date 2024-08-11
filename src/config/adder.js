import { defineAdderConfig } from '@svelte-add/core';
import { options } from './options.js';

export const composer = defineAdderConfig({
    metadata: {
        id: 'adder-template',
        name: 'Adder Template',
        description: 'This a adder demo template',
        environments: { kit: true, svelte: true },
    },
    options,
    integrationType: 'inline',
    packages: [],
    files: [
        {
            name: () => 'asd.svelte',
            contentType: 'svelte',
            content: ({ js }) => {
                js.imports.addEmpty(js.ast, './app.scss');
            },
        },
    ],
});
