class Node {
    constructor (value = null) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor () {
        this.head = null
    }
    * nodes() {
        let node = this.head
        while (node != null){
            yield node
            node = node.next
        }
    }
    isEmpty() {
        if(!this.head) return 1
        return 0
    }
    removeNode(nodeToRemove) {
        if (this.head === nodeToRemove) {
            this.head = this.head.next
            return
        }
        let previous_node = this.head
        for(let node of this.nodes()) {
            if (node === nodeToRemove) {
                previous_node.next = node.next
                return
            }
            previous_node = node
        }
    }
}
const myLinkedList = new LinkedList()
firstNode = new Node(1998)
secondNode = new Node(2006)
badNode = new Node(2020)
thirdNode = new Node(2018)
fourNode = new Node(2020)

firstNode.next = secondNode
secondNode.next = badNode
badNode.next = thirdNode
thirdNode.next = fourNode

myLinkedList.head = firstNode

// front operation
console.log(myLinkedList.head.value)
// isEmpty operation
console.log(myLinkedList.isEmpty())
// return 0 if false, 1 if true

// show linked list
for(let node of myLinkedList.nodes()) {
    console.log(node.value)
}