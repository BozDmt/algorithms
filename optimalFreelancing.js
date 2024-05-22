function optimalFreelancing(jobs) {
    let deadLine = 7
    let paymentAmount = 0
    let tracking = new Set()
    
    //so, for the given schedule(in this case 3 days), prioritize the jobs with the lowest deadline
    //and highest amount first
    while(deadLine > 0){
        let bestJob = {payment:0}
        for (const elem of jobs){
            const {deadline, payment} = elem
            if (tracking.has(elem))
                continue
            if(deadline < deadLine){
                continue
            }    
            else if(payment < bestJob.payment)
                continue
            else
                bestJob = elem
        }

        if(bestJob.payment !== 0) tracking.add(bestJob)
        paymentAmount += bestJob.payment
        
        deadLine --
    }
    return paymentAmount;
  }
//the struct array contains taken jobs and the deadline is already expiring
//calculate the max profit; each job takes 1 day to complete; calculate for 1 week available

const opportunities = [
    {"deadline":1, "payment":2},
    {"deadline":3,"payment":6},
    {"deadline":2,"payment":4},
    {"deadline":2,"payment":5},
    {"deadline":4,"payment":5}//in this case pos 0 should be avoided
]

// to sort array of objects by key: arr.sort((a,b) => a.key - b.key)

console.log(optimalFreelancing(opportunities))
// opportunities.forEach(element =>{
//     element.
// })