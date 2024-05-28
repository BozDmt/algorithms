      function findClosestValueHelper(tree,target,diff){
        if (!tree)
          return;

        const curDIff = Math.abs(tree.value - target);

        if(curDIff < diff.closest){
          diff.closest = curDIff;
          diff.lastVal = tree.value;
        }
        
        if (tree.value > target){
          //go to the left
          findClosestValueHelper(tree.left,target,diff);
        }
        else if (tree.value < target){
          //go to the right
          findClosestValueHelper(tree.right,target,diff);
        }     
      }

      function findClosestValueInBst(tree, target){
        const diff = {lastVal: null, closest: Infinity};
        findClosestValueHelper(tree,target,diff);
        return diff.lastVal;
      }

      class BST {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      }

      const tgt = 14
      
      const btree = new BST(10);
      btree.left = new BST(5);
      btree.left.left = new BST(2);
      btree.left.left.left = new BST(1);
      btree.left.right = new BST(5);
      btree.left.right.left = new BST(33);
      btree.right = new BST(15);
      btree.right.left = new BST(13);
      btree.right.left.right = new BST(14);
      btree.right.right = new BST(22);

      console.log(findClosestValueInBst(btree,tgt));