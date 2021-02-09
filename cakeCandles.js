cakeCandles = () => {
    const arr = [4,4,1,3];
    var count = 0;

    let maxValue = Math.max(...arr);
    console.log(maxValue)
    // output : 4

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === maxValue) {
            count++;
        }
    }
    return console.log(count);
    //output : 2
}
cakeCandles()