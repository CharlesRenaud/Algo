const x1 = 0;
const x2 = 4;
const v1 = 3;
const v2 = 2;

let a = []
let b = []
let yes = null
let no = null

const Kangoo = (x1,v1,x2,v2) => {

    for(let i = 0; i<10000; i++) {
        a.push(x1 + (v1 * i))
        b.push(x2 + (v2 * i))
    }
    for(let u = 0; u < a.length; u++){
        if (a[u] === b[u]){
                yes = "YES";
                return yes
        }else{
                no = "NO"
        }
    } 
    if(no !== null ){
        return no
    } 
}

console.log(Kangoo(x1,v1,x2,v2))

// https://www.hackerrank.com/challenges/kangaroo/problem


