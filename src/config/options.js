import { defineAdderOptions } from '@svelte-add/core';

export const options = defineAdderOptions({
    demoOption: {
        question: 'Do you want to use demo?',
        type: 'boolean',
        default: false,
    },
});
