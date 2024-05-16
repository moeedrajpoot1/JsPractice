// const time=new Promise((res)=>{
//        setTimeout(()=>{
//        res(new Date())
//        },1000)
//     })
// const time2=new Promise((res)=>{
//       setTimeout(()=>{
//       res(new Date())
//       },2000)
//    })



// const main=async()=>{
//    while (true) {
//      await time.then((res)=>{
//          console.log(res)
//       })
//    }
// }

// main()



const main=async()=>{
   while (true) {
      const promise=new Promise((res)=>{
setTimeout(()=>{
   res(new Date())
},1000)
      })
      await promise.then((res)=>{
          console.log(res)
       })
   }
}
main()