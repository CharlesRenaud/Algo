const array1 = [2, 4];
const array2 = [16, 32, 96];
function getTotalX(a, b) {
    let validCount = 0;
    
    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }
    return validCount;
}
console.log(getTotalX(array1, array2))

// https://www.hackerrank.com/challenges/between-two-sets/problem