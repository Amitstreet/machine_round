function add(...current) {
    let sum = current;
    function resultFn(...rest) {
        sum = [...sum, ...rest];
        return resultFn;
    }
    resultFn.valueOf = function () {
        return sum.reduce((acc, current) => acc + current, 0);
    };
    resultFn.value = resultFn.valueOf;
    return resultFn;
}

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);
