import {
    generateTestCases,
    prepareTests,
    finalizeTests,
    runTestCases,
} from '@svelte-add/testing-library';
import { join } from 'node:path';
import { beforeAll, afterAll, describe, test } from 'vitest';
import adder from './index.js';

/** @type {import("@svelte-add/testing-library").TestOptions} */
const testOptions = {
    headless: true,
    pauseExecutionAfterBrowser: false,
    outputDirectory: join(process.cwd(), '.outputs'),
};

const adders = [adder];
const testCasesPerAdder = generateTestCases(adders);

beforeAll(async () => {
    await prepareTests(testOptions, adders, testCasesPerAdder, testOptions);
});

afterAll(async () => {
    await finalizeTests();
});

runTestCases(testCasesPerAdder, testOptions, describe, test.concurrent);
