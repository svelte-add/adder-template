import { defineAdderConfig, categories } from '@svelte-add/core';
import { options } from './options.js';

export const composer = defineAdderConfig({
    metadata: {
        id: 'adder-template',
        package: 'adder-template',
        version: '1.0.0',
        name: 'Adder Template',
        description: 'This a adder demo template',
        category: categories.css,
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
