#!/usr/bin/env node

import { defineAdder } from '@svelte-add/core';
import { composer } from './config/adder.js';
import { checks } from './config/checks.js';
import { tests } from './config/tests.js';

export default defineAdder(composer, checks, tests);
