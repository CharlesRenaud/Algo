const s = [2,3,4,4,2,1,2,5,3,4,4,3,4,1,3,5,4,5,3,1,1,5,4,3,5,3,5,3,4,4,2,4,5,2,3,2,5,3,4,2,4,3,3,4,3,5,2,5,1,3,1,4,2,2,4,3,3,3,3,4,1,1,4,3,1,5,2,5,1,3,5,4,3,3,1,5,3,3,3,4,5,2]
const m = 8
const d = 26
const n = s.length

const ChocoParty = (s,d,m,n) => {
        let count = 0;
         for(let i= 0; i<n;i++){
             let sum = 0;
             for(let j = i; j<i+m; j++){
                 sum = sum+s[j]
                }
             if(sum==d){
                 count++;
             }
         }
         return count;
}
console.log(ChocoParty(s,d,m,n))

// https://www.hackerrank.com/challenges/the-birthday-bar/problem