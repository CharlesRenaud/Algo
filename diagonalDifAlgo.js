function main() {

    let matrix = [
        [3],
        [11,2,4],
        [4,5,6],
        [10,8,-12],
    ];
    const result = diagonalDifference(matrix);
    console.log(result)
}
main()


function diagonalDifference(matrix) {
var n = matrix.length;
var diag1 = [];
var diag2 = [];
const reducer = (accumulator, item) => accumulator + item;

for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
        if(i === j) { 
            diag1.push(matrix[i][j]);
        }
        if(i + j === n -1 ){
                diag2.push(matrix[i][j]);
        }
    }
}
    diag1 = diag1.filter(Number) // Enlever les variables null et undefinied du tableau
    const first = diag1.reduce(reducer) // addition de tout les nombres du tableau
    diag2 = diag2.filter(Number);
    const second = diag2.reduce(reducer)
    return first- second; // différence entre diag1 et diag2 (après le filtrage et somme)
}