Array.prototype.chop = function (size) {
    //temp array
    const temp = [...this];
    //if size is not defined
    if (!size) {
        return temp;
    }
    //output
    const output = [];
    let i = 0;
    //iterate the array
    while (i < temp.length) {
        //slice the sub-array of given size
        //and push them in output array
        output.push(temp.slice(i, i + size));
        i = i + size;
    }
    return output;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = arr.chop(3);
console.log(output);
Output:
[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]