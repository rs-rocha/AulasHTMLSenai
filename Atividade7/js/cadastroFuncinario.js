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

    console.log(nome)
    console.log(horas)
    console.log(cargo)


    cardFuncionario.innerHTML = 
        "<p><strong>Nome:</strong> " + nome + "</p>" +
        "<p><strong>Cargo:</strong> " + cargo + "</p>" +
        "<p><strong>Carga Horária:</strong> " + horas + "h semanais</p>";
    
    sessaoLista.appendChild(cardFuncionario);

    //sessaoLista.prepend(cardFuncionario);

    document.getElementById("nome-funcionario").value = "";
    document.getElementById("cargo-funcionario").value = "";
    document.getElementById("horas-funcionario").selectedIndex = 0;

}