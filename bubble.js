function bubbleSort(array){
    let i = array.length - 1
    let changed = true
    let changes = false
    let j = 0
    if(i === 0){
        return array
    }
    while(changed){
        changed = false
        changes = false
            while(i > j){
                if(array[i] < array[i-1]){
                    const temp = array[i]
                    array[i] = array[i-1]
                    array[i-1] = temp
                    changed = true
                    changes = true
                }
                else{
                    changed = false
                }

                i--
            }
            if(i === j && changes === true){
                i = array.length - 1
                changed = true
                changes = false
                j++
                continue
            }else if(i === j && changes === false){
                return array
            }
    }
}

let arr = [8, 5, 2, 9, 5, 6, 3]
let arr2 = [1,3,2]


console.log(bubbleSort(arr))