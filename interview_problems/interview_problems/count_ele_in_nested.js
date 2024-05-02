let countInArray = function (inputArr, test) {
    let count = 0;
    const search = (arr, test) => {
        for (let a of arr) {
          
            if (test(a)) {
                count += 1;
            }
            if (Array.isArray(a)) {
                search(a, test);
            }
        }
    };
    search(inputArr, test);
  return count;
};


const arr = [[ 1 , [ 2 , [ 3 , 4 , "foo" , { a: 1 , b: 2 }]], "bar" ]];
const count = countInArray(arr, (e) => typeof e === "number" );
console .log(count);
Output:
4