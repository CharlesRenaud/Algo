function aVeryBigSum() {
    const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
    var nbr = 0;
    for(let i = 0; i < ar.length; i++){
        nbr += ar[i];
    }
    console.log(nbr)
}

aVeryBigSum()
