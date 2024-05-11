class Perfil {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.verificarStorage();
        })
    }

    verificarStorage() {
        const dados_usuarios = JSON.parse(localStorage.getItem('dados'));
        
        if(dados_usuarios) {
            this.mostrarDados(dados_usuarios);
        }else {
            alert('Usuário não encontrado :(');
            window.location.href = 'cadastro.html';
        }
    }

    mostrarDados(dados) {
        const perfil = document.querySelector('.dados');
        if(perfil) {
            for(let [ chave, valor] of Object.entries(dados)) {
                if(chave === 'senha') continue;
                perfil.innerHTML += `<p>${chave}: ${valor}</p>`
            }
        }
    }
}

const meu_perfil = new Perfil();