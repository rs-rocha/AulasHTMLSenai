//função criada para retirar o hifen
function retiraHifen(cepDigitado){
    
    if(cepDigitado.includes("-") ){ //verifica se o cep digitado possui hifen
        cepDigitado = cepDigitado.replace("-", ""); //retira o hifen na string
    }    
    return cepDigitado //retorna o novo valor do cep digitado, caso não tenha hifen retorna o valor recebido
}

function buscarCep(){
    let cepDigitado = document.getElementById("cep").value;
    
    if (cepDigitado === ""){
        return;
    }
    
    cepDigitado = retiraHifen(cepDigitado); //chama a função retiraHifen e renomeia a variavel cepDigitado 

    /* 
    declara a variavel numeroCaracter e e atribui o valor boleano se o cepDigitado tem 8 caracteres
    */
    let numeroCaracterer = cepDigitado.length == 8 

    if (numeroCaracterer) { //se numero de caracter for verdadeiro, ou seja, possui 8 caracteres, executa a busca
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.erro){
                alert("CEP não encontrado");
                return;
            }
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("uf").value = dados.uf;
        })
        
    } else { // caso o número de caracteres for diferente de 8, não executa a busca e envia mensagem de alerta
        alert("Cep possui quantidade diferente de 8 algarismos")
        return;
    }
        
}

const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep);
