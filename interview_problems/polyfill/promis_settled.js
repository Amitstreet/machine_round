const allSettled = (promises) => {
    // map the promises to return a custom response.
    const mappedPromises = promises.map((p) => p
        .then((vaL)=>{
            return {s:""};
        }
        )
        .catch((err)=>{
            return "9"
        }
        )
    );

    console.log(mappedPromises)

    

    mappedPromises.forEach(element => {
        element.catch((val)=>{
            console.log(val)
        })
        
    });
    // run all the promises once with .all
    return Promise.all(mappedPromises);
}

const a = new Promise((resolve) => setTimeout(() => { resolve(3) }, 1000));
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));
allSettled([a, b, c]).then((val) => { console.log(val) });