// Function to retry a promise a certain number of times
// function retryPromise(promiseFunction, maxAttempts, delayBetweenAttempts) {
//     return new Promise((resolve, reject) => {
//       let attempts = 0;
//       function executeAttempt() {
//         attempts++;
//         promiseFunction()
//           .then((val)=>{
//             resolve(val)
//           })
//           .catch(error => {
//             if (attempts < maxAttempts) {
//               console.log(`Attempt ${attempts} failed. Retrying...`);
//               setTimeout(executeAttempt, delayBetweenAttempts);
//             } else {
//               reject(`Max attempts (${maxAttempts}) reached. Last error: ${error}`);
//             }
//           });
//       }
  
//       executeAttempt();
//     });
//   }

  // Example usage:
  // Define an asynchronous function to be retried

 const retryPromise=(fn,limit,delay)=>
 {
     return new Promise((resolve,reject)=>{ 
      
      let Attempt=0;
      
      function retry()
      {
        Attempt++;
        fn().then((val)=>{            
          resolve(val)
        }).catch((err)=>{
          setTimeout(()=>{            if(Attempt==limit)
            {

              reject("not get")
            }
            else
            {
              console.log("trying")
            retry();
            }
          },delay)
        })

     }

     retry();


     

     }
    )
 }


  function asyncFunction() {
    return new Promise((resolve, reject) => {
      // Simulate some asynchronous operation
      const randomNumber = Math.random(); 
      if (randomNumber > 0.5) {
        resolve('Async operation succeeded');
      } else {
        reject('Async operation failed');
      }
    });
  }


  
  // Retry the async function 3 times with a delay of 1 second between attempts
  retryPromise(asyncFunction, 3, 1000)
    .then(result => {
      console.log(result); // Logs the result if the operation succeeds within 3 attempts
    })
    .catch(error => {
      console.error(error); // Logs an error if the operation fails after 3 attempts
    });
  