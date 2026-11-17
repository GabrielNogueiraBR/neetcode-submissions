class MinStack {
    arrayStack
    size

    constructor() {
        this.arrayStack = []
        this.size = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arrayStack.push(val)
        this.size += 1
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.size > 0) {
            this.arrayStack.pop()
            this.size -= 1
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.arrayStack[this.size - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = undefined

        for (let i = 0; i < this.size; i++){
            let val = this.arrayStack[i]

            if(min == undefined || val < min){
                min = val
            }
        }

        return min
    }
}
