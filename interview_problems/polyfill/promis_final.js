// Simulate fetching data from an API

if (!Promise.prototype.finally1) {
    Promise.prototype.finally1 = function (onFinally) {
        return this.then(
            function(value) {
                onFinally();
                    return value;
                
            },
            function(reason) {
                return Promise.resolve(onFinally()).then(function() {
                    throw reason;
                });
            }
        );
    };
}

const fetchData =new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
     
                resolve("Data fetched successfully");
    
    });



// Simulate a function to hide a loading spinner
const hideLoadingSpinner = () => {
    console.log("Loading spinner hidden");
};

// Usage of fetchData with finally
  
Promise.prototype.nfinnaly = function (fn) {
    return this.then(function (val){
            fn()
            return val;
        
    }, 
    function (val2) {
        return Promise.resolve(fn()).then(function() {
            return val2
        })
    })
}

let m = new Promise((resolve, reject) => {
    resolve("88")
})


m.then((val) => {

    console.log(val);
    return val
}).nfinnaly(() => {
    console.log("amit");
}).then((val)=>{
    console.log(val)
})

// m.then(data => {
//     console.log("Fulfilled:", data);
//     return data;
//     // Additional processing with the fetched data
// })
// .nfinnaly(() => {
//     console.log("yes")
// }).then(data=>{
//     console.log(data);
// })
