class Cadastro {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(evento) {
        evento.preventDefault();
        const campo_valido = this.campoValido();
        const senha_valida = this.senhaValida();

        if(campo_valido && senha_valida) {
            this.salvarDados();
            this.formulario.reset();
        }

    }

    salvarDados() {
        const userData = {
            nome: this.formulario.querySelector('.nome').value,
            sobrenome: this.formulario.querySelector('.sobrenome').value,
            usuario: this.formulario.querySelector('.usuario').value,
            senha: this.formulario.querySelector('.senha').value    
        }
        localStorage.setItem('dados', JSON.stringify(userData));
        window.location.href = 'perfil.html';
    }

    campoValido() {
        let valido = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.pegarErro(campo, `O campo ${label} não pode estar em branco!`);
                valido = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valido = false;  
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valido = false;
            }

        }
        return valido;
    }

    validaUsuario(campo) {
        const user = campo.value;
        let valido = true;
        if(user.length < 3 || user.length > 12) {
            this.pegarErro(campo, 'Usuário precisa ter entre 3 a 12 caracteres!');
            valido = false;
        }

        if(!user.match(/^[a-zA-Z-0-9]+$/g)){
            this.pegarErro(campo, 'Nome do usuário deve conter apenas letras e/ou números!')
            valido = false;
        }

        return valido;
    }

    senhaValida() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const confirmar_senha = this.formulario.querySelector('.confirmar_senha');

        if(senha.value !== confirmar_senha.value) {
            this.pegarErro(senha, 'O campo senha e confirmar senha, precisam ser identicos!');
            this.pegarErro(confirmar_senha, 'O campo senha e confirmar senha, precisam ser identicos!');
            valido = false;
        }

        if(senha.value.length < 6 || senha.value.length > 15) {
            this.pegarErro(senha, 'A senha precisa ter de 6 a 15 caracteres!');
            valido = false;
        }

        return valido;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()) {
            this.pegarErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    pegarErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const form = new Cadastro();