let calcJs = document.getElementById('calcJs');

calcJs.addEventListener('click', startCalcJs);


function startCalcJs(){
    let operation;
let test = true;
let test2 = true;
let resultat;
let nb1;
let nb2;

try {
    do{
        do {

            operation = prompt('Que souhaitez-vous faire ?'
            + '\n \n1 - Addiition' 
            + '\n2 - Multiplication'
            + '\n3 - Soustraction'
            + '\n4 - Division \n\n');

            if(operation == null){
                return;
            }
        
        } while (operation != 1 && operation != 2 && operation != 3 && operation != 4)
        
        do {
            nb1 = prompt("Veuillez entrez le premier nombre");
            nb2 = prompt("Veuillez entrez le deuxièmme nombre");
        
        } while (!(((nb1 != "" && nb1 != null ) && !isNaN(nb1)) && ((nb2 != "" && nb2 != null ) && !isNaN(nb2))))
        
        nb1 = parseInt(nb1);
        nb2 = parseInt(nb2);

        function additon (nb1, nb2) {
        
            let resultat = nb1 + nb2;
            return resultat;
        
        }
        
        
        function multiplication (nb1, nb2) {
        
            let resultat = nb1 * nb2;
            return resultat;
            
        }
        
        function soustraction (nb1, nb2) {
            
            let resultat = nb1 - nb2;
            return resultat;
        
        }
        
        function division (nb1, nb2) {
        
            if (nb2 == 0) {
                throw new Error("Il est interdit de diviser par 0.")
            }
            let resultat = nb1 / nb2
            return resultat;
            
        }
        
        switch (operation) {
            case "1":
                resultat = additon(nb1, nb2);
                break;
                
            case "2":
                resultat = multiplication(nb1, nb2);
                break;
            
            case "3":
                resultat = soustraction(nb1, nb2);
                break;
        
            case "4":
                resultat = division(nb1, nb2);
                break;
            default:
                throw new Error("Une erreur est survenue.");
        }
        alert("Le resultat de votre calcul est : " +resultat);
    } while(confirm("Voullez vous faire un autre calcul"))
     
} catch (error) {
    alert(error);
}
}