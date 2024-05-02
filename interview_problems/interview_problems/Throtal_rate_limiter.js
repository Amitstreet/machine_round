function createRateLimiter(limit, interval) {
    let count = 0;
    let lastExecutionTime = 0;
    return function(fn) {
        const now = Date.now();
        if (now - lastExecutionTime > interval) {
            count = 1;
            lastExecutionTime = now;
            fn();
        } else {
            if (count < limit) {
                count++;
                fn();
            } else {
                console.log("Rate limit exceeded. Try again later.");
            }
        }
    };
}

// Example usage
const limitedFunction = createRateLimiter(2, 4000); // Limit to 3 executions every 5 seconds

// Simulate calling the limited function
function myFunction() {
    console.log("Executing limited function");
}

limitedFunction(myFunction); // This will execute successfully
limitedFunction(myFunction); // This will execute successfully
limitedFunction(myFunction); // This will execute successfully
limitedFunction(myFunction); // This will not execute due to rate limiting

// Wait for 5 seconds
setTimeout(() => {
    limitedFunction(myFunction); // This will execute successfully after the interval
}, 3000);
