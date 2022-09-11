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

# Sobre o Projeto

Esse projeto tem o intuito de fornecer uma interface de **"user inputs"** fácil de ser utilizada e implementada!

## ideia inicial

Projetos em Java, C/C++ e Python todos possuem algo em comum, uma maneira simples de pegar dados do `stdin` e tratar-los posteriormente. Porem já o Javascript com NodeJS não possui uma interface tão simples de se compreender quando se está iniciando na programação com Javascript