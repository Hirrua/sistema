# Sistema de cadastro de perfil

> Um sistema com formulário de cadastro e perfil, usando HTML, CSS e JavaScript puro.

## Sobre o projeto

Criei esse sistema no intuito de colocar em prática tudo aquilo que venho estudando nos ultimos meses no curso de Udemy de JavaScript. Fiquei muito feliz em conseguir realizar esse desafio que eu me propus a fazer, acabou me dando um animo em seguir meus estudos!

## O que consta?

* Formulário de cadastro com dados como nome, sobrenome, usuário, cpf e senha.
* Validação de campos, caso possua um campo em branco ou inválido.
* Um script separado para validar se o CPF digitado é válido.
* Utilização do localStorage para armazenar os dados `localStorage.setItem('dados', JSON.stringfy(userData))`.
* Utilização de classes em javascript.
* Para mostrar os dados no perfil, usei o `getItem()` do localStorage.
* Desestruturação: `for(let [chave, valor] of Object.entries(dados))`, para facilitar ao visualizar esses dados.
* Mensagens de erro naqueles campos que estão inválidos, atravez de uma função que cria uma div com: `previousElementSibling.innerText` e `insertAdjacentElement`.
* `Windows.location.href` para alterar entre as páginas HTML.
* `DOMContentLoaded` para garantir que toda a página será carregada antes de exibir os dados.

***Um projeto que mostra meu crescimento como desenvolvedor! Agora é continuar meus estudos e melhorar ainda mais!***
