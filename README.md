<div align='center'>
    <h1>Node Read Line</h1>
    <p>Não imaginei que eu faria isso com o Node</p>
</div>

[![NPM](https://img.shields.io/badge/license-MIT-green)](https://github.com/Andrey20Allyson/node-read-line/blob/main/LICENSE)

```ts
import { Scanner } from './scanner';

async function main() {
    let resp: string = await Scanner.next('Olá, tudo bem? ');

    if (resp.toLowerCase() === 'sim') {
        console.log('Ótimo!');
    }
}

main();
```

<div align='center'>
    <img src='./screenshots/test.png' alt='test'>
</div>