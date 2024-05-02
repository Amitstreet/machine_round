const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2');
    }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3');
    }, 100);
});

// Promise.all([promise1, promise2, promise3])
//     .then(values => {
//         console.log(values); // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
//     })
//     .catch(error => {
//         console.error(error); // This will not execute as all promises are resolved
//     });


const my_promise= (arr)=>{
    return new Promise((resolve,reject)=>{
        let res=[];
        let completed=0;
      arr.forEach((ele,idx)=>{
        ele.then((val)=>{
            res[idx]=val;
            completed++;
            if(completed ==arr.length)
            {
                resolve(res);
            }
        })
        .catch((err)=>{
            reject(err);
        })
    })

    })
}



my_promise([promise1, promise2, promise3]).then((val)=>{
    console.log(val);
})