function flatten(arr){
    const newArray = []
        for(let j = 0; j < arr.length; j++){
            
            if(typeof arr[j] === 'number'){
                newArray.push(arr[j])
            }else{
                formatArr(arr[j],newArray)
            }
        }
    return newArray
}

function formatArr(srcArr,newArr){
    for(let i = 0; i < srcArr.length; i++){
        if(typeof srcArr[i] === 'number'){
            newArr.push(srcArr[i])
        }else{
            formatArr(srcArr[i],newArr)
        }
    }
    return newArr
}

function formatObj(srcObj,newObj){//for now acts as a flatten function
    let resObj = srcObj
    for(obj in srcObj){
        console.log(obj.toString())
    }
}

let nestedArray = [1,[2,3],4,[5,[[]],[6]]]

let nestedObj = {
    a: 1,
    b:{c:2},
    d:3,
}

nestedArray = flatten(nestedArray)

nestedObj = formatObj(nestedObj)

console.log(...nestedArray)
console.log(nestedObj)