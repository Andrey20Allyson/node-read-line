import process from 'process';
import { Scanner } from './scanner';

async function main(argv: string[]): Promise<number> {
    let x = await Scanner.nextInt('valor x: ');
    let y = await Scanner.nextInt('valor y: ');

    console.log(x + y);
    return 0;
};

main(process.argv)
.then(process.exit);