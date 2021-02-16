const stats = [10,5,20,20,4,5,2,25,1];
let pts = 0;
let maxscore= stats[0];
let minscore = stats[0]
let pts2 = 0

const Calcul = () => {
    for(let i = 0; i < stats.length; i++){
        if(stats[i] > maxscore){
            maxscore = stats[i];
            pts++
        }
    }
    for(let u = 0; u < stats.length; u++){
        if(stats[u] < minscore){
            minscore = stats[u]
            pts2++
        }
    }
    return console.log(pts,pts2)
}

Calcul(stats)

// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem