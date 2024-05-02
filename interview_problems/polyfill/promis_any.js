const any = function (promisesArray) {
    const promiseErrors = new Array(promisesArray.length);
    let counter = 0;
    //return a new promise
    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise,idx) => {

            promise.then((val) => {
                resolve(val)
            }) // resolve, when any of the input promise resolves
                .catch((error) => {
                    promiseErrors[idx] = error;
                    counter = counter + 1;
                    if (counter === promisesArray.length) {
                        // all promises rejected, reject outer promise
                        reject(promiseErrors);
                    }
                });
        });
    });
};

const promises = [
    Promise.reject("First promise rejected"),
    Promise.reject("Second promise resolved"),
    Promise.reject("Third promise rejected")
];

any(promises)
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });