const bird = [1,2,3,4,5,4,3,2,1,3,4]
const taille = bird.length
let count = []
let test = []
let counter = 0

const BirdCount = (bird, taille, count) => {
    for(let i = 0; i < taille; i++){
        for(let u = i+1; u < taille; u++){
            if(bird[i] === bird[u]){
                test.push([bird[i]])
                if(test[i] === test[u])
                counter++
            }
        }
    } 
    console.log(test)
    return counter
}
console.log(BirdCount(bird, taille, count))