// simple functions
function hello(){
    console.log("Hello World! First Function")
}
hello()


// Arrow functions


const user=()=>console.log("User Is Registered  second function!")
user()

// One Parameter Functions

function onePara(a){
  console.log(a,"third Function")
}

onePara(10)


const oneParaArrow=(a)=>console.log(a," Arrow Function With One Parameter four function")
oneParaArrow(50)



/// Two Parameter Function

function Twopara(c,d){
    console.log(c+d,"function Number 5")
}
Twopara(10,20)




// Default Parameters 

function defaultpara(x=0,y=0){
    console.log(x+y,"Function Number 6")

}
defaultpara(10,30)









