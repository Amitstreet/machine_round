function toggle(...args) {
    let index = 0;
    return function() {
        const currentArg = args[index];
        index = (index + 1) % args.length;
        return currentArg;
    };
}

// Example usage
const toggleValues = toggle(true, "Hello", 42); // Toggle between true, "Hello", and 42

console.log(toggleValues()); // Output: true
console.log(toggleValues()); // Output: "Hello"
console.log(toggleValues()); // Output: 42
console.log(toggleValues()); // Output: true (back to the beginning of the cycle)
console.log(toggleValues()); // Output: "Hello"
