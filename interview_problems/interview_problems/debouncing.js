


function debounce(func, delay) {
    let timeoutId;
    return function() {
        console.log(this)
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(context,args); // Call the method with the correct context and arguments
        }, delay);
    };
}


const obj = {
    value: 0,
    increment(value) {
        this.value += value;
        console.log("Incremented value:", this.value);
    }
};

// Debounce the increment method
 obj.debouncedIncrement  =  debounce(obj.increment, 500);

obj.debouncedIncrement()

// Simulate calling the debounced method with arguments



