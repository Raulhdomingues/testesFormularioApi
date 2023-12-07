const botao = document.querySelector('.botao');
const modal = document.querySelector('dialog');
const botaoClose = document.querySelector('dialog button');
const paragrafoModal = document.querySelector('dialog p');
const inputs = document.querySelectorAll('input');
// const nome = document.querySelector('#nome');
// const email = document.querySelector('#email');
// const telefone = document.querySelector('#telefone');
// const pais = document.querySelector('#pais');


botao.onclick = function (e) {
    let mostrouErro = false;

    inputs.forEach((input) => {
        if(input.value !== '') {
            e.preventDefault();
            modal.showModal();
            paragrafoModal.textContent=(`O usuario ${nome.value} foi cadastrado com sucesso!`);
        } else if(!mostrouErro){
            e.preventDefault();
            alert('Porfavor, preencha os campos necessários');
            mostrouErro = true;
        }
    })
}

botaoClose.onclick = function () {
    modal.close();
}

