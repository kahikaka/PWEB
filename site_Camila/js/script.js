var aberto = false;

function divOver(idClasse){
    const ada = document.getElementById(idClasse).style.display = 'block';
}
function divOut(idClasse){
    document.getElementById(idClasse).style.display = 'none';
}
function menu(){
    if(aberto){
        document.getElementById("dropdown").style.display = 'none';
        aberto = false;
    }else{
        document.getElementById("dropdown").style.display = 'flex';
        aberto = true;
    }   
}