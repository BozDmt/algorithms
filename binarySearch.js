function binarySearch(array,target){//return the index of the target if exists, otherwise -1
    return binarySearchHelper(array,target,0,array.length - 1)
}

function binarySearchHelper(array,target,left,right){
    if(left > right)
        return - 1
    const middle = Math.floor((left + right) / 2)
    const match = array[middle]
    if(match == target){
        return middle
    }else if(match > target){
        return binarySearchHelper(array,target,left,middle - 1)
    }else{
        return binarySearchHelper(array,target,middle + 1,right)
    }
}

const arr = [1,2,3,56,2,7,2,12,89,23]

console.log(
    binarySearch(arr,89)
)

