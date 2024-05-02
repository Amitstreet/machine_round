function deepFlatten(obj) {
    let flattened = {};

    function flattenHelper(obj, prefix = '') {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenHelper(obj[key], prefix + key + '.');
            } else {
                flattened[prefix + key] = obj[key];
            }
        }
    }

    flattenHelper(obj);
    return flattened;
}

// Example usage:
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    },
    h: {
        i: {
            j: 5
        }
    }
};

const flattenedObject = deepFlatten(nestedObject);
console.log(flattenedObject);
