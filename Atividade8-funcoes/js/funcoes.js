function soma(){
    let numero1 = document.getElementById("primeiro-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;

    let sum = Number(numero1) + Number(numero2);

    document.getElementById("resultado").innerText = sum;
    
}