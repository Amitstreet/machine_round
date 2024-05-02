function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = func.apply(this, args);
        }
        return cache[key];
    };
}

// Example usage:
function expensiveOperation(n) {
    console.log("Performing expensive operation for", n);
    // Simulating an expensive computation
    return n * n;
}


const memoizedExpensiveOperation = memoize(expensiveOperation);
console.log(memoizedExpensiveOperation(5));  // Logs "Performing expensive operation for 5" and returns 25
console.log(memoizedExpensiveOperation(5));  // Returns 25 without performing the operation again
console.log(memoizedExpensiveOperation(10)); // Logs "Performing expensive operation for 10" and returns 100
console.log(memoizedExpensiveOperation(10)); // Returns 100 without performing the operation again
