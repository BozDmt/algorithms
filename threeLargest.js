function findThreeLargestNumbers(array) {
    /*find the largest number and then discard it*/
    const newArr = Array(3).fill(null)
    let i = 0
    let j = 2
    let max = -Infinity
    let prev = Infinity
    while(j >= 0){
      max = -Infinity
      i = 0
      while(i < array.length){
        if(array[i] > max && array[i] < prev){
            max = array[i]
        }
        i++
    }
    prev = max
    
      if(max === -Infinity)
        newArr[j] = newArr[j + 1]
      else
        newArr[j] = prev

      j--
    }
    return newArr
}