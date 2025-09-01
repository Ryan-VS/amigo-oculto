let listaNomes = [];
let contador = 0;

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ""){
        alert('Por favor, insira um nome.');
    } else {
        listaNomes.push(nomeAmigo);
        contador++;
        exibirListaDeNomes();
        let limparCampo = document.querySelector('input');
        limparCampo.value = "";
    }
}

function exibirListaDeNomes(){
    for(let i = 0; i < listaNomes.length; i++){
        const criarElementoLinha = document.createElement('li');
        const caixaListaAmigos = document.getElementById('listaAmigos');
        criarElementoLinha.innerHTML = listaNomes[contador-1];
        caixaListaAmigos.appendChild(criarElementoLinha);
        break;
    }
}

function sortearAmigo(){
    if(listaNomes.length > 0){
        let indiceAleatorio = Math.round(Math.random() * listaNomes.length);
        let caixaNomeSorteado = document.getElementById('resultado');
        if(indiceAleatorio > listaNomes.length - 1){
            let correcaoIndice = indiceAleatorio - 1;
            caixaNomeSorteado.innerHTML = "O amigo secreto sorteado é: " + listaNomes[correcaoIndice];
        } else {
            caixaNomeSorteado.innerHTML = "O amigo secreto sorteado é: " + listaNomes[indiceAleatorio];
        }
        console.log(indiceAleatorio);
        console.log(listaNomes);
    } else {
        alert('Lista de amigos vazia.')
    }
}
