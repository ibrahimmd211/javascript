// homework1 

var name = "ibrahim"

console.log(name)
console.log (name.toUpperCase())

if(name.toLocaleUpperCase() === "ibrahim"){
    console.log("Hello welcome back" + "," + name.toLocaleUpperCase())
}else{
    console.log("sorry you not allowed entry to the building ")
}


var myName = "IBRAHIM" + "," + "mark"

console.log(myName)
console.log(myName.toLocaleLowerCase())

if (myName.toLocaleLowerCase() === "ibrahim" + "," + "mark"){
    console.log(` Happy to meet you ${myName.toLocaleLowerCase()}`)
}else{
    console.log("sorry cant let you entre the building not on the guest list")
}

var item = "phone" 
var name = "15 max"

if ( typeof item === "string" && typeof item === "number")
    console.log (`this ${item} is an apple product`)
if (name === "15 max"){
    console.log (` this ${item} is a iphone`)
}

else{
    console.log (`this ${item} is an andriod`)
}


