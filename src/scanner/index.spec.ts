import { test, expect } from 'vitest';
import { Scanner, input } from '.';
import process from 'process';

test('Scanner.nextBool() must resolve in false if data is "false"', async (ctx) => {
    let inputPromise = Scanner.nextBool('test: ');

    process.stdin.emit('data', 'false');

    await expect(inputPromise).resolves.toBe(false);
});

test('Scanner.nextBool() must reject if data isn\'t "true" or "false"', async (ctx) => {
    let inputPromise = Scanner.nextBool('test: ');

    process.stdin.emit('data', 'John Doe');

    await expect(inputPromise).rejects.toThrow('input cant be converted to bool');
});

test('Scanner.nextInt() must reject if data cant be parse to Integer', async (ctx) => {
    let inputPromise = Scanner.nextInt('test: ');

    process.stdin.emit('data', 'John Doe');

    await expect(inputPromise).rejects.toBeInstanceOf(Error);
});

test('Scanner.nextInt() must resolve in a Integer if data can be parse to Number', async (ctx) => {
    let inputPromise = Scanner.nextInt('test: ');

    process.stdin.emit('data', '450.45');

    let isInteger = Number.isInteger(await inputPromise);

    expect(isInteger).toBeTruthy();
})