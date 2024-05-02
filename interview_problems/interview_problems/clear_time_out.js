const MY_TIMER = {
    timeoutIds: [], //global timeout id arrays
    //create a MY_TIMER's timeout
    setTimeout: function (fn, delay) {
        let id = setTimeout(fn, delay);
        this.timeoutIds.push(id);
        return id;
    },
    //MY_TIMER's clearAllTimeout
    clearAllTimeout: function () {
        while (this.timeoutIds.length) {
            clearTimeout(this.timeoutIds.pop());
        }
    }
};

const id = MY_TIMER.setTimeout(() => { console.log("hello") }, 1000);
console.log(id);
MY_TIMER.clearAllTimeout();
Output:
13 //timeoutId