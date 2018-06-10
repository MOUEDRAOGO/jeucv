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
    var largeurEcran = window.innerWidth; //recupere automatiquement la valeur de l'ecran du joueur
    var gameHeight = document.getElementById('background').offsetHeight; //definit la hauteur d evolution du jeu
    var topBackground = document.getElementById('background').offsetTop; // definit le top a partir duquel commence la hauteur d 'evolution du jeu

    
    

    document.getElementById('regleJeu').addEventListener('click', function() { // fermeture du panneau regle du jeu et lancement du jeu au clic sur le panneau regle du jeu

        var divRegleJeu = document.getElementById('regleJeu');
        divRegleJeu.style.display = "none"; // fermeture du panneau regle du jeu 

        var delaiCreationFish = 1000; // ttes les 1s = 1 fish
        var delaiCreationMine = 2000; // ttes les 1s = 1 mine

        /////// creation de fish a la volee    /////// 

        var setIntervalEnemies = setInterval(function() {
            var randomHeight = Math.random() * (gameHeight * 0.9 - topBackground) + topBackground; // 0.9 pour reduire la hauteur du ramdom afin que le poisson n apparaisse pas hors du cadre du jeu
            new Constructeurenemies(shark, randomHeight)
        }, delaiCreationFish);


        /////// creation de mines a la volee    /////// 

        // var setIntervalMines = setInterval(function() {
        //     var randomLeft = Math.random() * (largeurEcran)  // random doit rester ds la largeur de l
        //     new ConstructeurMines(shark, randomLeft)
        // }, delaiCreationMine);

        /////// gestion du temps alloué a une partie de jeu   ///////

        var tempsPartie = 30000; // definition en ms de la duree d 'une partie


        /////// gestion de l affichage du temps de jeu restant  ///////

        var tempsRestant = tempsPartie/1000-1; // convertion en seconde
        var setIntervalTempsRestant =  setInterval(function() {
            tempsRestant = tempsRestant-1
            window.document.getElementById('tempsRestant').innerHTML = 'Temps restant : ' + tempsRestant
        }, 1000);

        /////// gestion du win  ///////

        var scoreWin = 10 // definition du score a realiser pour gagner


      /////// gestion du gameover   ///////

        setTimeout(function() {
            //si au bout de 20s, valeur div score <10
            if (window.document.getElementById('score').innerHTML < scoreWin) {
                window.document.getElementById('gameover').style.display = "block"; // affiche le gameover
                window.location.reload();

                window.document.getElementById('gameover').addEventListener("click", function () { // au clic sur gameover, recharge une partie
       
       window.location.reload();
     });
            }
            clearInterval(setIntervalTempsRestant);
            window.document.getElementById('tempsRestant').innerHTML = 'Temps restant : 0'
        }, tempsPartie);

        

    }); // fin du addEventListener creation du jeu


    /////// relancer une partie   ///////

    rejouer = document.getElementById("boutonRejouer"); 
     rejouer.addEventListener("click", function () { // relance une partie au clic sur le bouton rejouer
       window.location.reload();
     });

      /////// afficher les regles du jeu avec le bouton interrogation  ///////

    document.getElementById('boutonInterrogation').addEventListener('click', function() { // affiche le panneau regle du jeu qd on clique sur le bouton '?'

        divRegleJeu = document.getElementById('regleJeu');
 
        if (divRegleJeu.style.display == 'none')
        divRegleJeu.style.display = 'block';
        else
        divRegleJeu.style.display = 'none';

        window.location.reload(); // recharge le jeu qd on clicque sur le bouton regles du jeu 

        //console.log(window.document.getElementById('regleJeu').style.display)

    });


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
}); // fin window.addEventListener touches