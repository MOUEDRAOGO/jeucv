function createShark(largeurEcran) {
    var gestesDuShark = { // je creer un objet qui rassemble tous les gestes de mon personnage
        sharkRun: [{ // je cree un tableau avec toutes les images du geste sharkRun
            largeurMasque: '334px', // je definis la largeur de la fenetre du masque
            hauteurMasque: '225px', // je definis la hauteur de la fenetre du masque
            topDeImage: '-5px', // je definis les coordonnees Top de l'image 0 a inserer
            leftDeImage: '-5px', //* je definis les coordonnees Left de l'image 0 a inserer */

        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-349px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-693px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-1037px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-1381px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-1725px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-2069px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-2413px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-2757px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-3101px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-3445px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-3789px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-4133px',
        }, {
            largeurMasque: '334px',
            hauteurMasque: '225px',
            topDeImage: '-5px',
            leftDeImage: '-4477px',
        }],
    }; // fin du gestesDuShark


    var decalageLeftSharkRun = -5;
    //console.log('decalageLeftSharkRun -5 ok')

    // on definit le decalageTop
    var decalageTop = 200; // doit etre identique au top du css #sharkRunContainer 

    // definit la vitesse de deplacement
    var vitesseShark = 10;
    //console.log('vitesseShark ok')

    // definit la continuité du geste selectionné
    var continuerSharkRun = true;
    //console.log(' var continuerSharkRun ok')	

    var compteurPourAnimationRequin = 0;


    //recupere le masque sharkRunContainer et le sprite sharkRunContenu
    var sharkRunContainerADeplacer = document.getElementById('sharkRunContainer');
    //console.log('var sharkRunContainerADeplacer ok');
    var sharkRunContenuAInserer = document.getElementById('sharkRunContenu');
    //console.log('var sharkRunContenuAInserer ok');

    var animationSharkRun = function(i) {

        // console.log('var animationSharkRun ok');

        sharkRunContainerADeplacer.style.width = gestesDuShark.sharkRun[i].largeurMasque;
        //console.log('gestesDuShark.sharkRun[i].largeurMasque ok')

        sharkRunContainerADeplacer.style.height = gestesDuShark.sharkRun[i].hauteurMasque;
        //console.log('gestesDuShark.sharkRun[i].hauteurMasque ok')

        sharkRunContenuAInserer.style.top = gestesDuShark.sharkRun[i].topDeImage;
        //console.log('gestesDuShark.sharkRun[i].topDeImage ok')

        sharkRunContenuAInserer.style.left = gestesDuShark.sharkRun[i].leftDeImage;
        //console.log('gestesDuShark.sharkRun[i].leftDeImage ok')

        if (i + 1 >= gestesDuShark.sharkRun.length) {
            // Si le i est supérieur au nombre de décomposition pour l'animation,
            // on réinitialise le compteur globalement.
            compteurPourAnimationRequin = 0;
        }

    };


    //ecoute les touches du clavier
    window.addEventListener("keydown", function(event) {

        //recupere le code de la touche
        var code = event.keyCode;

        //39 est le code de la fleche de droite
        if (code === 39) {

            //collison ecran droite = largeur ecran - largeur div shark
            if (decalageLeftSharkRun > largeurEcran - parseFloat(sharkRunContainerADeplacer.style.width)) {

            } else {
                decalageLeftSharkRun += vitesseShark; //incrementation horizontal

            }

        } // fin du if(code === 39)

        if (code === 37) { // touche fleche gauche
            // console.log('*************gauche' + decalageLeftSharkRun);

            if (decalageLeftSharkRun < -1) { // collison ecran gauche  = -1 = decalage hors bordure gauche ecran

            } else {
                decalageLeftSharkRun -= vitesseShark; //decrementation horizontal
            }
        }

        if (code === 40) { // touche fleche bas
            if (decalageTop >= 648) { // collison ecran bas = 648 = limite basse du masqueBackground

            } else {
                decalageTop += vitesseShark;
            }
            // console.log('fleche bas (40)');    
        }

        if (code === 38) { // touche fleche haut

            if (decalageTop <= 50) { // collison ecran haut = 42 = limite haute du masqueBackground

            } else {
                decalageTop -= vitesseShark;
            }
            // console.log('fleche haut (40)');


        }

        animationSharkRun(compteurPourAnimationRequin);
        // On prepare le compteur pour la prochaine fois
        compteurPourAnimationRequin++;

        sharkRunContainerADeplacer.style.left = decalageLeftSharkRun + 'px';
        //console.log('sharkRunContainerADeplacer.style.left ok')

        sharkRunContainerADeplacer.style.top = decalageTop + 'px';
        //console.log('sharkRunContainerADeplacer.style.top ok')

    });
}