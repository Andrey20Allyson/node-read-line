import { Scanner } from './scanner';

async function main() {
    let resp: string = await Scanner.next('Olá, tudo bem? ');

    if (resp.toLowerCase() === 'sim') {
        console.log('Ótimo!');
    }
}

main();