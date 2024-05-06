function selectionSort(array){
    let min
    let index = 0
    let temp 
    for(let j = 0; j < array.length - 1; j++){
        min = Infinity
        for(let i = j; i < array.length; i++){
            if(array[i] < min){
                min = array[i]
                index = i
            }
        }
        temp = array[j]
        array[j] = min
        array[index] = temp
    }
    return array
}

const arr = [2,1,9,0]

/**find the lowest value in the array, put it in position 1, then search for the lowest value
 * again, this time starting from 1 above the previous index.
 * do double loops, one for finding the lowest value and another for setting the index of its placement
 */

console.log(selectionSort(arr))