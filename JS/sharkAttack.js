function createSharkAttack(largeurEcran) {
    var gestesDuShark = { // je creer un objet qui rassemble tous les gestes de mon personnage
        sharkAttack: [{ // je cree un tableau avec toutes les images du geste sharkAttack
            largeurMasque: '340px', // je definis la largeur de la fenetre du masque
            hauteurMasque: '259px', // je definis la hauteur de la fenetre du masque
            topDeImage: '-5px', // je definis les coordonnees Top de l'image 0 a inserer
            leftDeImage: '-5px', //* je definis les coordonnees Left de l'image 0 a inserer */

        }, {
            largeurMasque: '340px', // je definis la largeur de la fenetre du masque
            hauteurMasque: '259px', // je definis la hauteur de la fenetre du masque
            topDeImage: '-5px', // je definis les coordonnees Top de l'image 1 a inserer
            leftDeImage: '-355px', // je definis les coordonnees Left de l'image 1 a inserer'
        }, {
            largeurMasque: '340px', // je definis la largeur de la fenetre du masque
            hauteurMasque: '259px', // je definis la hauteur de la fenetre du masque
            topDeImage: '-5px', // je definis les coordonnees Top de l'image 2 a inserer
            leftDeImage: '-705px', // je definis les coordonnees Left de l'image 2 a inserer
        }, {
            largeurMasque: '340px', // je definis la largeur de la fenetre du masque
            hauteurMasque: '259px', // je definis la hauteur de la fenetre du masque
            topDeImage: '-5px', // je definis les coordonnees Top de l'image 3 a inserer
            leftDeImage: '-1055px', // je definis les coordonnees Left de l'image 3 a inserer
        }]
    }; // fin du gestesDuSharkAttack 

    //met le compteur et le nombre de pixel a 0
    var decalageLeftSharkAttack = -5;
    //console.log('decalageLeftSharkAttack -5 ok')

    // on definit le decalageTopSharkAttack
    var decalageTopSharkAttack = 200; // doit etre identique au top du css #sharkAttackContainer 

    // definit la vitesse de deplacement
    var vitesseSharkAttack = 10;
    //console.log('vitesseSharkAttack ok')

    // definit la continuité du geste selectionné
    var continuerSharkAttack = true;
    //console.log(' var continuerSharkAttack ok')	

    var compteurSharkAttack = 0;


    //recupere le masque sharkAttackContainer et le sprite sharkAttackRevenu
    var sharkAttackContainerADeplacer = document.getElementById('sharkAttackContainer');
    //console.log('var sharkAttackContainerADeplacer ok');
    var sharkAttackContenuADeplacer = document.getElementById('sharkAttackRevenu');
    //console.log('var sharkAttackContenuADeplacer ok');

    var animationSharkAttack = function(i) {

        // console.log('var animationSharkAttack ok');

        sharkAttackContainerADeplacer.style.width = gestesDuShark.sharkAttack[i].largeurMasque;
        //console.log('gestesDuShark.sharkAttack[i].largeurMasque ok')

        sharkAttackContainerADeplacer.style.height = gestesDuShark.sharkAttack[i].hauteurMasque;
        //console.log('gestesDuShark.sharkAttack[i].hauteurMasque ok')

        sharkAttackContenuADeplacer.style.top = gestesDuShark.sharkAttack[i].topDeImage;
        //console.log('gestesDuShark.sharkAttack[i].topDeImage ok')

        sharkAttackContenuADeplacer.style.left = gestesDuShark.sharkAttack[i].leftDeImage;
        //console.log('gestesDuShark.sharkAttack[i].leftDeImage ok')

        if (i + 1 >= gestesDuShark.sharkAttack.length) {
            // Si le i est supérieur au nombre de décomposition pour l'animation,
            // on réinitialise le compteur globalement.
            compteurSharkAttack = 0;
        }

    };

    // Ce compteur est initialisé à 0 à l'extérieur de la fonction animationSharkAttack un seule fois au chargement du document.

    //ecoute les touches du clavier
    window.addEventListener("keydown", function(event) {

        //recupere le code de la touche
        var code = event.keyCode;

        //39 est le code de la fleche de droite
        if (code === 39) {

            //collison ecran droite = largeur ecran - largeur div shark
            if (decalageLeftSharkAttack > largeurEcran - parseFloat(sharkAttackContainerADeplacer.style.width)) {

            } else {
                decalageLeftSharkAttack += vitesseSharkAttack; //incrementation horizontal

            }

        } // fin du if(code === 39)

        if (code === 37) { // touche fleche gauche
            // console.log('*************gauche' + decalageLeftSharkAttack);

            if (decalageLeftSharkAttack < -1) { // collison ecran gauche  = -1 = decalage hors bordure gauche ecran

            } else {
                decalageLeftSharkAttack -= vitesseSharkAttack; //decrementation horizontal
            }
        }

        if (code === 40) { // touche fleche bas
            if (decalageTopSharkAttack >= 648) { // collison ecran bas = 648 = limite basse du masqueBackground

            } else {
                decalageTopSharkAttack += vitesseSharkAttack;
            }
            // console.log('fleche bas (40)');    
        }

        if (code === 38) { // touche fleche haut

            if (decalageTopSharkAttack <= 50) { // collison ecran haut = 42 = limite haute du masqueBackground

            } else {
                decalageTopSharkAttack -= vitesseSharkAttack;
            }
            // console.log('fleche haut (40)');


        }

        animationSharkAttack(compteurSharkAttack);
        // On prepare le compteur pour la prochaine fois
        compteurSharkAttack++;

        sharkAttackContainerADeplacer.style.left = decalageLeftSharkAttack + 'px';
        //console.log('sharkAttackContainerADeplacer.style.left ok')

        sharkAttackContainerADeplacer.style.top = decalageTopSharkAttack + 'px';
        //console.log('sharkAttackContainerADeplacer.style.top ok')

    });

}