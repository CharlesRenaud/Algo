let maison = {
    s : 7,
    t : 10
}
let arbres = {
    a : 4,
    b : 12,
}
let nombres = {
    m : 3,
    n : 3,
}
let drop = {
    apples : [2, 3, -4],
    oranges : [3, 3, -4]
}
let compte = {
    hitPommes : 0,
    hitOranges : 0,
}
const Pommes = drop.apples
const Oranges = drop.oranges

const PommeChecker = (fruits, fruits1) => {
    for(let i = 0; i < nombres.m; i++) { 
        if(arbres.a + fruits[i] >= maison.s && arbres.a + fruits[i] <= maison.t){
            compte.hitPommes++
       }
    }
    for(let u = 0; u < nombres.m; u++) { 
        if(arbres.b + fruits1[u] >= maison.s && arbres.b + fruits1[u] <= maison.t){
            compte.hitOranges++
        }
}return compte
}

console.log(PommeChecker(Pommes,Oranges))

//https://www.hackerrank.com/challenges/apple-and-orange/problem