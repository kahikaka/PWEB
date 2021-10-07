function aluno1(){
    var aluno 
        name: "Lívia";
        ra: 1234;
}

function aluno1(){
    var aluno 
    var nome = "Lívia";
    var ra = 1234;
    
   if(aluno){

    } 
    else{
        document.getElementById("resultado").innerHTML = "O aluno é: " + nome ;
        document.getElementById("resultado1").innerHTML = "RA: " + ra ;
    } 
}

function aluno2(){
    var objeto = {};
    var aluno = 'nome';
    var ra = 'ra'
    objeto[aluno] = 'O aluno é: Camila';
    objeto[ra] = 'RA: 4567';
    alert(objeto.nome);
    alert(objeto.ra);

}

function aluno3(){
    var objeto = {};
    var objeto1 = {};
    objeto["nome"] = "O aluno é: Carlos"
    objeto1["ra"] = "RA: 0987";
    alert(objeto.nome);
    alert(objeto1.ra);

}






