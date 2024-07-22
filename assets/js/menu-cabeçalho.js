const menu = document.querySelector('[data-nav]')
const botao = document.querySelector('[data-botao]')
let botoes = [
    document.querySelector('[data-botaoPrincipal]'),
    document.querySelector('[data-botaoCompetencias]'),
    document.querySelector('[data-botaoProjetos]'),
    document.querySelector('[data-botaoFormacoes]'),
    document.querySelector('[data-botaoContato]')
]

let paginas = [
    document.querySelector('[data-principal]'),
    document.querySelector('[data-competencias]'),
    document.querySelector('[data-projetos]'),
    document.querySelector('[data-formacoes]'),
    document.querySelector('[data-contato]')
]

botao.addEventListener('click', () => {
    let menuOculto = menu.className === 'cabecalho__navegacao'
    if(menuOculto){
        menu.classList.toggle("cabecalho__navegacao__aberto")
    }else{
        menu.classList.toggle("cabecalho__navegacao")
    }
})

botoes[1].addEventListener('click', () => {
    resetBgAnimation()
    highlightBtn(1)
})

botoes[2].addEventListener('click', () => {
    resetBgAnimation()
    highlightBtn(2)
})

botoes[3].addEventListener('click', () => {
    resetBgAnimation()
    highlightBtn(3)
})

botoes[4].addEventListener('click', () => {
    resetBgAnimation()
    highlightBtn(4)
})

function resetBgAnimation() {
    let body = document.querySelector('[data-body]')
    body.style.animation = 'none';
    body.offsetHeight;
    body.style.animation = '';
}

function highlightBtn(b) {
    for(var i = 0; i < paginas.length; i++) {
        botoes[i].classList.remove("aberto")
        paginas[i].classList.remove("aberto")
    }
    botoes[b].classList.toggle("aberto")
    paginas[b].classList.toggle("aberto")
}

document.addEventListener('DOMContentLoaded', (event) => {
    const background = document.querySelector('body');
    background.style.opacity = 1;
});