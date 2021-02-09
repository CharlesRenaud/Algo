let grades = [5, 45, 38, 78, 77, 73, 27, 26, 33]
let transformed = []

const graduation = (grades) => {
    for (let i = 0; i<grades.length; i++){
        if(grades[i] >= 38) {
            if(Math.ceil(grades[i]/5)*5 - grades[i] <= 2 ){
                transformed.push(Math.ceil(grades[i]/5)*5);
            }else{
                transformed.push(grades[i]);
            }
        }else{
            transformed.push(grades[i]);
        }
    } return transformed
}

console.log(graduation(grades))

// https://www.hackerrank.com/challenges/grading/problem