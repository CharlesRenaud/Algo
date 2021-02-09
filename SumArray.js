SumArray = () => {
    const nums = [1, 2, 3, 4, 5];
    const reducer = (accumulator, item) => accumulator + item; 
    // accumulator + element courant du tableau
    const sum = nums.reduce(reducer, 0); 
    // Deuxieme argument "(reducer, 0)" 
    // est falcutatif (valeur de l'accumulateur pour la première ittération)
    console.log(sum)
    // output: 15
}
SumArray()