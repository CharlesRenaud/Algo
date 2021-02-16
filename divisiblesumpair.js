const ar = [1,3,2,6,1,2];
const n = ar.length;
const k = 3 ;


const divisible = (ar, n, k) => {
    let count = 0
     for(let i = 0; i < n; i++){
        for(let u = i+1; u < n ; u++){
            if(((ar[i]+ar[u]) % k) == 0){
                count++
            }
        }
    }
    return count;
}
console.log(divisible(ar, n, k))
// output : 5

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem