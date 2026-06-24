let i = 1;
function soma(){
    let operacao = "soma";
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;

    let resultado = Number(numero1) + Number(numero2);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(operacao, numero1, numero2, resultado);

    i++
    
}

function subtracao(){
    let operacao = "subtracao";
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;

    let resultado = Number(numero1) - Number(numero2);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(operacao, numero1, numero2, resultado);

    i++
    
}

function multiplicacao(){
    let operacao = "multiplicacao";
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;

    let resultado = Number(numero1) * Number(numero2);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(operacao, numero1, numero2, resultado);

    i++
    
}

function divisao(){
    let operacao = "divisao";
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;

    let resultado = Number(numero1) / Number(numero2);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(operacao, numero1, numero2, resultado);

    i++
    
}

function apagar(){
    document.getElementById("primeiro-numero").value = "";
    document.getElementById("segundo-numero").value = "";
    document.getElementById("resultado").innerText = "";
} 

function salvarHistorico(operacao, numero1, numero2, resultado) {
    /*
        Hisórico de função utilizada
        Ex -> Função: soma

        Histórico de números digitados
        Ex -> Primeiro numero: 10, SegundoNumero: 10

        Histórico de resultados obtidos:
        Ex -> 20

        apresentado num console.log
    */
   historico = {
    funcao: operacao,
    num1:numero1,
    num2:numero2,
    resultado:resultado
   }
   console.log(
                i + " | " +
                historico.funcao + " | " +
                historico.num1 + " | "+
                historico.num2 + " | "+
                historico.resultado
   )
}


