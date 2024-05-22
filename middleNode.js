// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MoreLink extends LinkedList{
    addMany(values) {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
      }
      return this;
    }
  
    getNodesInArray() {
      const nodes = [];
      let current = this;
      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }
      return nodes;
    }
  }

  let theList = new MoreLink().addMany([1,2,3,4,9,7,5])

  function middleNode(linkedList) {
    let curr = linkedList
    if(curr.next){
        // let counter = 0
        let middle = curr.next

        while(curr && curr.next){
            middle = middle.next
            curr = curr.next.next
        }
        return middle
    }
    else

    return curr
  }

  console.log(8/12)
  // 1020155487 vineta dalnice

  //traverse through the entire list, then divide by 2; if list.length % 2 = 0, get the bigger of the
    //two middles