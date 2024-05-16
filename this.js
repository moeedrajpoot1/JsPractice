const obj={
    name:"Rahul",
    age:20,
    city:"Mumbai",
    welcome:function(){
     console.log("welcome ",this.name,"and Your age is",this.age)
    }
}


obj.name="Ali"
obj.age=50
obj.welcome()