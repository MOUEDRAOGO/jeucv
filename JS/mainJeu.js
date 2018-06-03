// Gestion de la compatibilité
if (!window.document.getElementsByClassName) {
    // Si la méthode getElementsByClassName n'existe pas sur le navigateur
    window.document.getElementsByClassName = function(nomDeClasse) {
        // Ma propre implémentation de la méthode getElementsByClassName
    }
}

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(aExecuter) {
        window.setTimeout(function() {
            aExecuter(new Date().getTime());
        }, 1)
    };

window.addEventListener('DOMContentLoaded', function() {
    var shark = new ConstructeurShark(); // est execute une fois que le DOM est charge
    console.log(shark);
    var largeurEcran = window.innerWidth; //recupere automatiquement la valeur de chaque ecran
    var gameHeight = document.getElementById('background').offsetHeight; //definit la hauteur d evolution du jeu
    var topBackground = document.getElementById('background').offsetTop; // definit le top a partir duquel commence la hauteur d 'evolution du jeu

    //creation ennemies a la volee 
    var setIntervalEnemies = setInterval(function() {
        var randomHeight = Math.random() * (gameHeight * 0.9 - topBackground) + topBackground; // 0.9 pour reduire la hauteur du ramdom afin que le poisson n apparaisse pas hors du cadre du jeu
        new Constructeurenemies(shark, randomHeight)
    }, 1000);

    // timing du gameover
    setTimeout(function() {
        //si au bout de 20s, valeur div score <10
        if (window.document.getElementById('score').innerHTML < 10) {
            window.document.getElementById('gameover').style.display = "block";
        }
    }, 20000);

    //ecoute les touches du clavier
    window.addEventListener("keydown", function(event) {

        //recupere le code de la touche
        this.code = event.keyCode;

        //39 est le code de la fleche de droite
        if (this.code === 39) {

            //collison ecran droite = largeur ecran - largeur div shark
            if (shark.decalageLeftShark > largeurEcran - parseFloat(shark.sharkContainerADeplacer.style.width)) {

            } else {
                shark.decalageLeftShark += shark.vitesseShark; //incrementation horizontal
            }

        } // fin du if(code === 39)

        if (this.code === 37) { // touche fleche gauche
            // console.log('*************gauche' + decalageLeftShark);

            if (shark.decalageLeftShark < 0) { // collison ecran gauche  = 0 = decalage hors bordure gauche ecran

            } else {
                shark.decalageLeftShark -= shark.vitesseShark; //decrementation horizontal
            }
        }

        if (this.code === 40) { // touche fleche bas
            if (shark.decalageTop >= 648) { // collison ecran bas = 648 = limite basse du masqueBackground

            } else {
                shark.decalageTop += shark.vitesseShark;
            }
            // console.log('fleche bas (40)');    
        }

        if (this.code === 38) { // touche fleche haut

            if (shark.decalageTop <= 50) { // collison ecran haut = 42 = limite haute du masqueBackground

            } else {
                shark.decalageTop -= shark.vitesseShark;
            }
            // console.log('fleche haut (40)');
        }

        shark.animationSharkRun(shark.compteurPourAnimationRequin);
        // On prepare le compteur pour la prochaine fois
        shark.compteurPourAnimationRequin++;

        shark.sharkContainerADeplacer.style.left = shark.decalageLeftShark + 'px';
        //console.log('sharkContainerADeplacer.style.left ok')

        shark.sharkContainerADeplacer.style.top = shark.decalageTop + 'px';
        //console.log('sharkContainerADeplacer.style.top ok')
    });
}); // fin window.addEventListener