const obj={
    name:"Rahul",
    age:20,
    city:"Mumbai",
   
}

const welcome=function(){
    console.log("welcome ",this.name,"and Your age is",this.age)
   }
welcome.call(obj)



const obj1={
    name:"Umair",
    age:30,
    city:"Mumbai",
   
}

welcome.call(obj1)