const unsortedArray = [2020, 1998, 2018, 1986, 2006, 1928]

const bubbleSort = array => {
  const arrayLength = array.length
  let isSwapped
  do {
    isSwapped = false
    // retourne false, permet de stopper la boucle lorsque la condition
    // n'est plus remplie
    for (let i = 0; i < arrayLength; i++) {
    // On incrémente en fonction de la taille du tableau
      if (array[i] > array[i + 1]) {
    // On vérifie pour chaque index, l'index suivant est plus petit
        const tempLeftValue = array[i]
    // On stock la 1ère valeur qui est la plus grande des deux
        array[i] = array[i + 1]
    // On assigne alors la valeur la plus petite au premier index
        array[i + 1] = tempLeftValue
    // On assigne la valeur la plus grande au second index
        isSwapped = true
    // On retourn true, pour réitérer avec la boucle while
      }
    }
  } while (isSwapped)
  // Continue tout pendant qu'un index est supérieur à l'index suivant
  return array
  //  retourne le tableau trié
}

console.log(bubbleSort(unsortedArray))
// [ 1986, 1998, 2006, 2018, 2020 ]