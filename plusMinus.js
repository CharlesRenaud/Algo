
plusMinus = () => {
    const ar = [ 1, 2, 3, -1, -2, -3, 0, 0 ]
    let zero = 0
    let positive = 0;
    let negatif = 0;

    for(let i = 0; i < ar.length; i++){
        if(ar[i] === 0 ){
            zero++
        }
        if(ar[i] < 0){
            positive++
        }
        if(ar[i] > 0){
            negatif++
        }
    }
    console.log(positive  + " " + "positifs", negatif+ " " + "negatifs", zero+ " " + "null")
    console.log(positive / ar.length * 100 + " " + "% positif") 
    console.log(negatif / ar.length * 100  + " " + "%  negatif") 
    console.log(zero / ar.length * 100 + " " + "%  null") 
}
plusMinus();