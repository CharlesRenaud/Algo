function staircase() {
    n= 10; //Taille souhaité

    let filledArray = new Array(n).fill(' ');
    // Création d'un tableau de n de longueur, 
    // ajout d'un interligne simple pour chaque element

    while (filledArray.indexOf(' ') !== -1) {
        //La méthode .indexOf () renvoie l'index de n'importe quelle chaîne trouvée dans le tableau, 
        //mais s'il n'en existe pas, elle renverra un -1. 
        //Cette boucle continuera jusqu'à ce qu'il ne reste plus de chaînes à simple interligne.

        filledArray.shift(); //Supprime le premier element du tableau
        filledArray.push('#'); //Ajoute le symbole à la fin du tableau

        console.log(filledArray.join(""));
        //la méthode .join () est le séparateur, 
        //qui séparera chaque élément individuel du tableau
    }
}
staircase()