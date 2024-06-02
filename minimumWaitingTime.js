//idea: iterate through the array, calucating a running sum of the elements by a
//fibonacci like seq for each element for the previous elements, so in the case of 
//3,5,7,9,2,1,4, sort the array with the smallest numbers first and on each iteration,
//calculate the running total by summing the elements before the current one
function minimumWaitingTime(queries) {
    let res = 0
    let fin = 0
    queries.sort((a,b) => a-b)

    for(const num of queries){
        fin += res
        res += num
    }

    return fin;
  }

const queryArr = [3,5,7,9,2,1,4]

console.log(minimumWaitingTime(queryArr))