class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  const root = new BinaryTree(1)
  root.left = new BinaryTree(2)
  root.left.left = new BinaryTree(4)
  root.left.left.left = new BinaryTree(8)
  root.left.left.right = new BinaryTree(9)
  root.left.right = new BinaryTree(5)
  root.left.right.left = new BinaryTree(10)
  root.right = new BinaryTree(3)
  root.right.left = new BinaryTree(6)
  root.right.right = new BinaryTree(7)

function accumulateSums(root,sumArr,prevVal,runTotal){
    if(!root) return

    runTotal += root.value 
    
    accumulateSums(root.left,sumArr,root.value,runTotal)
    if(!root.right && !root.left){
        sumArr.push(runTotal)
    }
    accumulateSums(root.right,sumArr,root.value,runTotal)
    return 
}

function branchSums(root) {
    const sums = []
    accumulateSums(root,sums,0,0)
    return sums
}
//implement a helper function - done
console.log(branchSums(root))
