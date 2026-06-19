function crachaDeFuncionario(){
   let nome = document.getElementById("nome").value;    
   let idade = document.getElementById("idade").value;    
   let cargo = document.getElementById("cargo").value;    
   let departamento = document.getElementById("departamento").value;
   let acessoRestrito = document.getElementById("acessoRestrito").checked;    
    
   console.log(
       "Nome: " + nome + "\n" + 
       "Idade: " + idade + "\n" +
       "Cargo: " + cargo + "\n" +
       "Departamento: " + departamento + "\n" +
       "Acesso Restrito: " + acessoRestrito + "\n" +
       "\n"
   )

   alert(
        "Nome: " + nome + "\n" + 
        "Idade: " + idade + "\n" +
        "Cargo: " + cargo + "\n" +
        "Departamento: " + departamento + "\n" +
        "Acesso Restrito: " + acessoRestrito + "\n" +
        "\n" 
   );
   
   if (acessoRestrito){
      window.location.href = "pages/gerente.html";
   }else{
      window.location.href = "pages/funcionario.html";
   }
}

