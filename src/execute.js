#!/usr/bin/env node

import { executeAdder } from '@svelte-add/core/internal';
import adder from './index.js';

await executeAdder(adder, {
    name: 'svelte-add-adder-template',
    version: '1.0.0',
});
