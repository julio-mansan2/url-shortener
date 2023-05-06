# Desafio Encurtador de URL - Frontend-Mentor

Este é um desafio de um encurtador de URL, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile

````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/url-shortener/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript
- API 

<br>

### O que aprendi

<br>

- Adicionar elementos ao HTML com JavaScript:

````javascript

const shortenedLink = document.createElement("div");
      shortenedLink.innerHTML = `
              <p class='original-links'>${res.result.original_link}</p>
              <div class="shortened-links">
                <p class="result">${res.result.short_link}</p>
                <button class='copy-btn'>Copy</button>
            </div>`;

shortenedLinksContainer.appendChild(shortenedLink);

````

- Utilizar a função de uma API:

````javascript

async function fetchLink(val) {
  const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${val}`);
  const res = await data.json();
  return res;
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.log(error);
  }
};

````
<br>

### Possíveis evoluções

<br>

- Códigos mais compactos;
- Compreender melhor acerca de funções de JavaScript e API.

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>