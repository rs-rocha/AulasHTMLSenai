function salvarNome(){
    /*
    Inspecionar pagina
    Menu Application
    Storage>>local storage
    formato chave:valor [JSON]
    */


    let valorDigitado = document.getElementById("texto-inserido").value;
    let objetoNome = {
        nome: valorDigitado
    };
    let textoJSON = JSON.stringify(objetoNome);
    

    localStorage.setItem(1, textoJSON);
    document.getElementById("nome-salvo").innerText = valorDigitado;
    
}

function apagarTudo(){
    localStorage.clear()
}