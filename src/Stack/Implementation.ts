class Stack<T>{
    stack: T[];

    constructor() {
        this.stack = []
    }

    push(value: T){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length === 0){
            console.error("Stack already Empty");
            return;
        } else {
            this.stack.pop();
        }
    }
    find(value: T){
        if(this.stack.length === 0){
            console.error("Stack is Empty");
            return;
        } else {
            for(let i = 0; i< this.stack.length; i++){
                if(this.stack[i] === value){
                    return i
                }
            }
            console.error("Value not found");
            return;
        }
    }

    print(){
        if(this.stack.length === 0){
            console.error("Stack is Empty");
            return;
        } else{
            console.log(this.stack)
        }
    }

}

const myStack = new Stack<number>
myStack.push(1)
myStack.push(3)
myStack.push(5)
myStack.print()
myStack.pop()
myStack.print()
