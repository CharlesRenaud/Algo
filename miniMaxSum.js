// Print two space-separated long integers denoting the respective minimum and maximum values 
// that can be calculated by summing exactly four of the five integers. 

miniMaxSum = () => {
    let arr = [7,69,2,221,8974]; // valeurs init
    var sum = 0; // Somme avant exception
    const result = []; // Résultats de toutes les opérations
        for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; // Addition des valeurs pour récup la somme global
        }
        for (var i = 0; i < arr.length; i++) {
        result.push(sum - arr[i]); // soustraction de la valeur exception à chaque itération
        }
    result.reverse() // Reverse l'ordre du tableau
    let max = Math.max(...result) // isole la valeur la plus haute du tableau
    let min = Math.min(...result) // isole la valeur la plus faible du tableau 
    return console.log(min, max) ; 
}
miniMaxSum()