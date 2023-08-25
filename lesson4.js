/*
  lo
    switch
    conditonal statement 
    adding cases 
 */ 


var myAge = 24;
var number = 20;

  if (myAge > number){
     console.log(` ${myAge} is greater than ${number}`)
  }else if (`${myAge} is equal to ${number}`){

  }else{
    console.log (`${number} is greater than ${myAge}`)
  }

  


  var array1 = ["apple"]
  var array2 = ["apple", "banna"]

 if( array1.Length > array2.Length){
     console.log( " the array1 has more items ")
  } else if (  array1.length === array2.Length){
     console.log("array 2 has more items")
      var biggerArray = array1 + array2
      console.log( array1 + "," +  array2)
  }else{
    console.log("array2 has more items ")
  }

var myName = "ibrahim"

console.log(myName)
console.log (myName.toUpperCase())

if(myName.toLocaleUpperCase() === "Ibrahim"){
    console.log("Hello welcome back" + "," + myName.toLocaleUpperCase())
}else{
    console.log("sorry you not allowed entry to the building ")
}

var number1 = 23
var number2 = 85

if(typeof number1==="number" && typeof number2 === "number"){
  if( number1 > number2){
    console.log(number1-number2)
  }else
  console.log(number1 - number2)
}else {
  console.log("both variable are number")
}

var number = -23

if(typeof number === -33){
  if (number > 0){
    console.log(`${number} is a positive`)
  
  }else{
    console.log(`${number} is a negative `)
  }
  }else{
    console.log (" sorry must be a number ")
  }


  var day = "Monday"

  switch (day) {
    case "Monday":
      console.log("today is Monday")
      break;

    case "Tuesday":
      console.log("Today is Tuseday")
      break;

    case "wednesday" :
      console.log ("Today is Wednesday")
      break;

    case "Thursday":
      console.log("Today is Thursday")
      break;

    case "Friday":
      console.log("Today is Friday")
      break;

      default :
      console.log("not a day")
      break;

  }