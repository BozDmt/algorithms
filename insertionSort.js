function insertionSort(array){
    for(i in array){
        let val = array[i]
        let j = i
        while(j > 0 && array[j-1] > val){
            array[j] = array[j - 1]
            j--
        }
        array[j] = val
    }
    return array
}

const arr = [7,3,4,5,1,2]

console.log(insertionSort(arr))