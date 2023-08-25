function helloMessage(){
    console.group("hello world")
}
helloMessage();



function combineArray (){
    const array1 =["car","bike"]
    const array2 =["apple", "bananna"]

    console.log(array1.concat(array2))
}
combineArray("apple" ,"car")


function combineArray(array1,array2){
    console.log(array1.concat(array2))
}

var items = ["car", "bikes"]
var clothes = ["tops" , "trousers"]

combineArray(items ,clothes )

function oddOrEven(number){
    if (number/2 ===0){
        console.log("number is even")

    }else{
        console.log("number is odd")
    }
}
oddOrEven(13)

54321