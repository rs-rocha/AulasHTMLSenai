function retiraHifen(cepDigitado){
    
    if(cepDigitado.includes("-") ){
        cepDigitado = cepDigitado.replace("-", "");
    }    
    return cepDigitado
}

function buscarCep(){
    let cepDigitado = document.getElementById("cep").value;
    
    if (cepDigitado === ""){
        return;
    }

    cepDigitado = retiraHifen(cepDigitado);

    let numeroCaracterer = cepDigitado.length == 8

    if (numeroCaracterer) {
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
        
    } else {
        alert("Cep possui quantidade diferente de 8 algarismos")
        return;
    }
        
}

const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep);
