Array.prototype.multiFilter = function (test) {
    const originalArray = this;
    const filter = (arr, test) => {
        const result = [];
        for (let a of arr) {
            if (Array.isArray(a)) {
                const output = filter(a, test);
                result.push(output);
            } else {
                if (test(a)) {
                    result.push(a);
                }
            }
        }
        return result;
    };
    return filter(originalArray, test);
};

const arr = [[ 1 , [ 2 , [ 3 , "foo" , { a: 1 , b: 2 }]], "bar" ]];
const filtered = arr.multiFilter(( e ) => typeof e === "string" );

console .log( JSON .stringify(filtered));