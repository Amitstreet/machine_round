//  const mapserise=(arr,fn)=>{
//     return new Promise((resolve,rjejct)=>
//     {
//            let val1= arr.reduce((curr,acc)=>{
//                 return curr.then((val)=>{
//                     return  new Promise((resolve,reject)=>{
//                         fn(acc,(res)=>{
//                             resolve([...val,res]);
//                         })
//                     })
//                  })
//            },Promise.resolve([]));
//            val1.then((val)=>{
//                 resolve(val)
//            })
//     })
//  }


//    let res=  mapserise([1,2,3,4],(num,callback)=>{

//     setTimeout(() => {
//         let res= num*num;
//         callback(res);
//     }, 1000); 
//      })



//      res.then((val)=>{
//         console.log(val);
//      }).catch((err)=>{
//         console.log(err);
//      })



const async= (num)=>{

  return new Promise((resolve,reject)=>{

   setTimeout(() => {
        resolve(num*num);
   }, 1000);

  })

}

let arr= [1,2,3,4];


   let res_2= arr.map(async)


     let m=   Promise.all(res_2);
     m.then((val)=>{
        console.log(val)
     })