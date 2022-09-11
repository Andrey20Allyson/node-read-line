import process, { stdin, stdout } from "process";

const exp = /\n|\r\n/g;

export function input(msg: string): Promise<string> {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(msg);
        stdin.once('data', data => {
            resolve(data.toString('utf-8').replaceAll(exp, ''));
            stdin.pause();
        });
    });
}

export abstract class Scanner {
    static async next(msg: string): Promise<string> {
        let inp = await input(msg);
        return typeof inp === 'string'? inp: (e => {throw e})(new Error('oi')); 
    }

    static async nextInt(msg: string): Promise<number> {
        let inp = Number(await input(msg));
        return !Number.isNaN(inp)? Math.trunc(inp): (e => {throw e})(new Error('oi'));
    }
    
    static async nextNum(msg: string): Promise<number> {
        let inp = Number(await input(msg));
        return !Number.isNaN(inp)? inp: (e => {throw e})(new Error('oi'));
    }

    static async nextBool(msg: string): Promise<boolean> {
        let inp = await input(msg);
        return inp === 'true'? true: inp === 'false'? false: (() => {throw new Error(`input cant be converted to bool`)})(); 
    }
} 