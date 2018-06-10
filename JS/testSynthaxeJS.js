

var divRegleJeu = document.getElementById('regleJeu');
        
        if (divRegleJeu.style.display = "none") {

            document.getElementById('boutonInterrogation').addEventListener('click', function() { // affiche le panneau regle du jeu qd on clique sur le bouton '?'

        divRegleJeu = document.getElementById('regleJeu');
 
        if (divRegleJeu.style.display == 'none')
        divRegleJeu.style.display = 'block';
        else
        divRegleJeu.style.display = 'none';

        //console.log(window.document.getElementById('regleJeu').style.display)

    });
    };


    rejouer = document.getElementById("boutonRejouer");
     rejouer.addEventListener("click", function () {
       // ici window.location.reload() sert à rafraichir la page
       window.location.reload();
     });