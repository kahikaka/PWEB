function res(){
            var nome = document.getElementById("addNome").value;
           
            var score1 = document.getElementById("addNota1").value;
            var score2 = document.getElementById('addNota2').value;
            var score3 = document.getElementById('addNota3').value;
           var media = parseFloat((parseFloat(score1) + parseFloat(score2) + parseFloat(score3))/3).toFixed(2);
        
            document.getElementById('resultado').innerHTML = media;
            
        }