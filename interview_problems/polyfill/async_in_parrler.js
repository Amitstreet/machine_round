const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 reject');
    }, 100);
});




const myPromiseAll = function (taskList) {
    //to store results
    const results = [];
    //to track how many promises have completed
    let promisesCompleted = 0;
    // return new promise
    return new Promise((resolve, reject) => {
        taskList.forEach((promise, index) => {
            //if promise passes
            promise.then((val) => {
                //store its outcome and increment the count
                console.log(val)
                
            })
                //if any promise fails, reject.
                .catch(error => {
                    console.log(error)
                })
        })
    });
}

myPromiseAll([promise1,promise2,promise3])

