import process from 'process';

function input(msg: string): Promise<string> {
    return new Promise((resolve, reject) => {
        process.stdout.write(msg);
        process.stdin.once('data', data => resolve(data.toString('utf-8')));
    });
}

abstract class Scanner {
    static async next(msg: string): Promise<string> {
        let inp = await input(msg);
        return typeof inp === 'string'? inp: (e => {throw e})(new Error('oi')); 
    }

    static async nextInt(msg: string): Promise<number> {
        let inp = Number(await input(msg));
        return inp !== NaN? Math.trunc(inp): (e => {throw e})(new Error('oi'));
    }
    
    static async nextNum(msg: string): Promise<number> {
        let inp = Number(await input(msg));
        return inp !== NaN? inp: (e => {throw e})(new Error('oi'));
    }

    static async nextBool(msg: string): Promise<boolean> {
        let inp = await input(msg);
        return inp === 'true'? true: inp === 'false'? false: (() => {throw new Error('erro')})(); 
    }
} 

async function main(): Promise<number> {
    let x = await Scanner.nextInt('valor x: ')
    let y = Number(await input('valor y: '));

    console.log(x + y);
    return 0;
};

main()
.then(process.exit);