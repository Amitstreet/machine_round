function removeCircular(obj, seen = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (seen.has(obj)) {
        return undefined;
    }
    seen.set(obj, true);
    for (const key in obj) {
        obj[key] = removeCircular(obj[key], seen);
    }

    return obj;
}

// Example usage
const obj = {
    a: 1,
    b: {
        c: 2,
        d: 4
    }
};



const cleanedObj = removeCircular(obj);
console.log(cleanedObj);


