class ListNode<T>{
    value: T;
    next: ListNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.next = null
    }
}

class LinkedList<T>{
    head: ListNode<T> | null;
    constructor(){
        this.head = null;
    }

    append(value: T){
        const newNode = new ListNode(value)
        if(this.head === null){
            this.head = newNode
        } else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    length(): number{
            let count = 0;
        if(this.head === null){
            return count
        } else{
            let current = this.head
            count +=1;
            while(current.next !== null){
                current = current.next;
                count += 1;
            }
            return count
        }
    }

    prepend(value: T){
        const newNode = new ListNode(value);
        if(this.head === null){
            this.head === newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    delete(value: T){
        if(this.head === null){
            console.error("Empty list");
            return;
        } else {
            if(this.head.value === value){
                this.head = this.head.next;
            } else {
                let current = this.head;
                while(current.next !== null && current.next.value !== value){
                    current = current.next
                }
                if(current.next !== null){
                    current.next = current.next.next
                } else{
                    console.error("Value not found")
                    return;
                }
            }
        }
    }
    print(){
        if(this.head === null){
            console.log("List empty");
            return;
        } else{
            let current: ListNode<T> | null = this.head ;
            let res = "";
            while(current !== null){
                res += current.value + (current.next ? " --> " :" --> null");
                current = current.next;
            }
            console.log(res)
        }
    }
    
}

const myList = new LinkedList()
myList.append(2);
myList.append(4);
myList.append(6);
const size = myList.length();
console.log("🚀 ~ size:", size)
myList.print()
myList.delete(9)
myList.print()