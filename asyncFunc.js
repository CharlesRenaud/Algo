async function print(n) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000 - n * 100));
    // Création de la promesse de nombre et de son timeout
    console.log(n);
    //Affiche le nombre dans la console a chaque itération
  }
  Array.prototype.forEachAsync = function (fn) {
    return this.reduce((promise, n) => promise.then(() => fn(n)), Promise.resolve());
    //exécution du la fonction print a chaque promesse résolue
    //avec timeout de plus en plus rapide
  };
  async function test() {
    await [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEachAsync(print);
    // Chaque nombre est envoyé dans la variable "n", de print succesivement
  }
  test();