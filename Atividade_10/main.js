function maiorN(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    var numero3 = parseFloat(document.getElementById("num3").value);

    var maior = Math.max(numero1, numero2, numero3);
    
    if((numero1 == numero2)  && (numero2 == numero3) && (numero1 == numero3)){
        document.getElementById("resultado").innerHTML = "Os 3 numeros são iguais = " + numero1 ;
    }
    else if(maior){
        document.getElementById("resultado").innerHTML = "O número maior é: " + maior ;
    } 
    else{
        document.getElementById("resultado").innerHTML = "Preencha todos os campos com número";
    } 
}

function cres(){
    var numero1 = parseFloat(document.getElementById("nume1").value);
    var numero2 = parseFloat(document.getElementById("nume2").value);
    var numero3 = parseFloat(document.getElementById("nume3").value);
    
    if(numero1 <= numero2){ 
      if(numero2 <= numero3){
	  document.getElementById("resultado1").innerHTML = "O número menor é: " + numero1;
      document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero2;
      document.getElementById("resultado3").innerHTML = "O número maior é: " + numero3;
	}
      else{ 
          if(numero1 <= numero3){ 
	      document.getElementById("resultado1").innerHTML = "O número menor é: " + numero1;
          document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero3;
          document.getElementById("resultado3").innerHTML = "O número maior é: " + numero2;
	    }else{
            document.getElementById("resultado1").innerHTML = "O número menor é: " + numero3;
            document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero1;
            document.getElementById("resultado3").innerHTML = "O número maior é: " + numero2;
	        }
	    }
    }else{ 
      if(numero1 <= numero3){ 
        document.getElementById("resultado1").innerHTML = "O número menor é: " + numero2;
        document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero1;
        document.getElementById("resultado3").innerHTML = "O número maior é: " + numero3;
	    }else{ 
            if(numero2 <= numero3){
                document.getElementById("resultado1").innerHTML = "O número menor é: " + numero2;
                document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero3;
                document.getElementById("resultado3").innerHTML = "O número maior é: " + numero1;
	        }else{     
          document.getElementById("resultado1").innerHTML = "O número menor é: " + numero3;
          document.getElementById("resultado2").innerHTML = "O número do meio é: " + numero2;
          document.getElementById("resultado3").innerHTML = "O número maior é: " + numero1;
	        }
	    }
    }
}