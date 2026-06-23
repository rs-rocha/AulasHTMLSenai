let i = localStorage.length

function totalRegistrosAtuais(){
    //pode explodir por falta de verificação se o localstorage é vazia
    alert("Total de itens armazenados: " + localStorage.length + "\n" + 
        "Dados do funcionario do primeiro registro: " + 
        "\nNome: "+ JSON.parse(localStorage.getItem(0)).nome + 
        "\nHoras: " + JSON.parse(localStorage.getItem(0)).horas + 
        "\nCargo: " + JSON.parse(localStorage.getItem(0)).cargo
    );
}

function cadastrarFuncionario() {    

    let nome = document.getElementById("nome-funcionario").value;
    let horas = document.getElementById("horas-funcionario").value;
    let cargo = document.getElementById("cargo-funcionario").value;

     /*
        Registre os funcionários cadastrados e mostre cada funcionário cadastrado na
        sua página HTML

        Pode inseri-los dentro de uma sessão, tabela, paragrafo... A sua escolha.
    */

    if (nome.trim() === "" || cargo.trim() === ""){
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    console.log("Cadastrando: ", nome, horas, cargo);

    let sessaoLista = document.getElementById("lista-funcionarios");
    let cardFuncionario = document.createElement("div");

    cardFuncionario.style.border = "1px solid #ccc";
    cardFuncionario.style.padding = "10px";
    cardFuncionario.style.margin = "10px 0";
    cardFuncionario.style.borderRadius = "5px";

    //alert(console.log(localStorage.key(i-1).nome));

    cardFuncionario.innerHTML = 
        "<p><strong>Nome:</strong> " + nome + "</p>" +
        "<p><strong>Cargo:</strong> " + cargo + "</p>" +
        "<p><strong>Carga Horária:</strong> " + horas + "h semanais</p>";
    
    sessaoLista.appendChild(cardFuncionario);

    //sessaoLista.prepend(cardFuncionario);

    salvarCadastro(i, nome, horas, cargo)

    document.getElementById("nome-funcionario").value = "";
    document.getElementById("cargo-funcionario").value = "";
    document.getElementById("horas-funcionario").selectedIndex = 0;

    i++
    //Colocado aqui para garantir que haverá pelo menos um registro para ser executado
    totalRegistrosAtuais()
}

function salvarCadastro(i, nome, horas, cargo){
    //let valorDigitado = document.getElementById("texto-inserido").value;
    let objetoFuncionario = {
        nome: nome, 
        horas: horas,
        cargo: cargo
    };
    let textoJSON = JSON.stringify(objetoFuncionario);
    
    localStorage.setItem(i, textoJSON);
    //document.getElementById("nome-salvo").innerText = valorDigitado;
}
