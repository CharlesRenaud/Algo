

timeConversion = () => {
    const s = "08:40:22PM";
    // Date de test
    const checker = s[s.length -2];
    // Point de repère pour identifier Matin / Aprem
    const checker2 = s.slice(0, 2);
    // Point de repère pour savoir si l'heure commence par 12.

    if (checker2 === "12"){
        if(checker === "A"){
            const removed = s.slice(0, -2);
            // On enlève le AM
            const start = removed.substr(0, 2);
            // On isole le 12.
            return console.log(removed.replace(start, "00"));
            // On remplace le "12" par "00"
        }else{
            const remove = s.slice(0, -2);
            //remove PM
            return console.log(remove)
            // On retourne sans modifications
        }
    }
    if(checker === "P") {
        const remove = s.slice(0, -2);
        // remove PM
        const start = remove.substr(0, 2);
        // On isole les 2 premiers nombre
        const startNumber = parseInt(start)
        // On tranforme la chaine de caractère en nombre entier
        const number = startNumber + 12;
        // On ajoute 12 pour passer au format 24heures
       return console.log(remove.replace(start, number));
        // On retourne la chaine de caractère en remplaçant les chiffres
        // du début par la nouvelle valeur additionné.
    }
    if (checker === "A") {
        const remove = s.slice(0, -2);
        //remove AM
        return console.log(remove)
    }
}


    
timeConversion();