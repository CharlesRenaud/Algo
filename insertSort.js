const unsortedArray = [2020, 1998, 2018, 1986, 2006, 1928]

const insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        // La clef correspond a l'index de l'élement courant
        let j = i - 1;
        // j = l'index qui précède l'index de l'élement courant
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
            console.log(j)
        }
      inputArr[j + 1] = key;
    }
    return inputArr;
};

console.log(insertionSort(unsortedArray));