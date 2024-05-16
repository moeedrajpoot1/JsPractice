// //Deeep copying

const array1=[1,2,34,35,36,37,38,[22,34]]

const a=[...array1]
array1[0]=10
console.log(a ,"This is a Deep Copy")
console.log(array1)


// // Shallow copy

// const aray2=[20,23,40,50]
// const[c,...b]=aray2
// console.log(c,"this is a shallow copy Destructuring")




// function hello(a,b){
//     console.log(a,b)
// }


// hello(6,7)

// Looops


// For Each Loop

// let alpha=["a","b","c"]

// const check=alpha.forEach((x,index,alpha)=>{
//     total=x
//     console.log(total)
// }) 
// console.log(check)
// map 



// let alpha2=[20,30,40,50,60]
// total=0

// const checkmap=alpha2.map((x,index)=>{
    
//     total+=x
//     return total
// })

// console.log(checkmap)
