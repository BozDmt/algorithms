//find the least amount of socks that have to be pulled out of the drawer to find a pair
function getRandom(max,min){
    return Math.ceil(Math.random() * (max-min) + min)
}
let x 
while(x > 15){
    x = getRandom(20,15)
}
console.log('x became 15!')
function shuffleDrawer(drawer){
    let j
    for(let i = drawer.length - 1; i > 0; i--){
        do {
            j = Math.ceil(Math.random() * (i + 1))
        }
        while(drawer[i] === drawer[j])
            
        if (
            (undefined !== drawer[j - 1] && drawer[i] === drawer[j - 1]) 
            || (undefined !== drawer[j + 1] && drawer[i] === drawer[j + 1]) 
            || (undefined !== drawer[i - 1] && drawer[j] === drawer[i - 1]) 
            || (undefined !== drawer[i + 1] &&  drawer[j] === drawer[i + 1])
        ){
            continue
        }
        const temp = drawer[i]
        drawer[i] = drawer[j]
        drawer[j] = temp
    }
    return drawer
}

function nonRepeatingSocks(max){
    let numbers = []

    for(let j = 0; j < 2; j++){
        for(let i = 1; i <= max; i ++){
            numbers.push(i)
        }
    }
    let shuffledSocks = shuffleDrawer(numbers)
    let index = 0
    
    return function(){
        if(index >= numbers.length){
            shuffledSocks = shuffleDrawer(numbers)
            index = 0
        }
        return shuffledSocks
    }
}

function populateDrawer(amt)
{
    const arrLen = amt * 2 
    let allSocks 

    const source = []

    let prev = 0
    let randNum = null
    let j = 0
    for(let a = 1; a <= amt; a++){
        source.push(a)
    }
    
    allSocks = source

    for(let i = 0; i < amt; i++){
        j = getRandom(amt, prev + 1)
        // if(i !== j)
        allSocks[i] = allSocks[j]
        allSocks[j] = source[i]
        prev = j
    }
    
    // for(let j = 0; j < amt; j++){
    //     while(prev === randNum){
    //         randNum = getRandom(arrLen,1)
    //     }
    //     if(j !== ){
    //         allSocks[j] = randNum
            
    //     }
        
    //     allSocks[j] = randNum
    //     allSocks[arrLen - j - 1] = randNum
    //     prev = randNum
    // }
    console.log(allSocks)
    // return findPairOfSocks(allSocks)
}
function findPairOfSocks(socksDrawer){
    
    // const allSocks = populateDrawer(num)
    //involves loop 
    //compare element on current index with previous elements
    //this would indeed require an inner loop
    let i = 0
    // let matchFound = false
    let stored = []
    while(stored !== null){
        stored = compareSocks(stored,socksDrawer[i])
        i++
    }
    return i
}

function compareSocks(socksArr, sock){
    for(i in socksArr){
        if(socksArr[i] === sock){
            return null
        }    
    }
    socksArr.push(sock)
    return socksArr
}

const socks = [1,2,3,1,2,3]
// populateDrawer(10)
let randomGenerator
let arr = []
randomGenerator = nonRepeatingSocks(10)
arr = randomGenerator()
// for(let i = 0; i < 20; i++){
//     arr.push(randomGenerator())
// }
console.log(arr)
console.log(findPairOfSocks(arr))

// console.log(randomGenerator())