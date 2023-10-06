let listaDeNumerosSorteados = [];
let numeroElementos = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){    
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let exibirMensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTexto('h1', 'Parabéns!');
        exibirTexto('p', exibirMensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número escolhido é maior que o número secreto!');
        } else {
            exibirTexto('p', 'O número escolhido é menor que o número secreto!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroElementos + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroElementos){
    listaDeNumerosSorteados = [];
}

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo(){
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}