
class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList {
    constructor(head=null){
        this.head = head
        this.tail = null
    }

    size() {
        let count = 0;
        let node = this.head
        while(node != null){
            count ++;
            node = node.next
        }
        return count 
    }

    getLas(){
        return this.tail
    }

    isEmpty() {
        return this.head === null
    }
}
let list = new LinkedList();
let vinson = new Node('vinson')
list.head = vinson;
list.tail = vinson;
let ben = new Node('ben')
vinson.next = ben;
list.tail = ben;
let latisha = new Node('latisha')
vinson.next.next = latisha
list.tail = latisha 
let dionte = new Node('dionte')
vinson.next.next.next = dionte
list.tail = dionte

