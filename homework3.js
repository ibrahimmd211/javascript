//1- write a coditional statement to state if hero is dc or marvel 


var name  = "superman"

if (name === "flash" || name === "batman"|| name.toUpperCase() === "SUPERMAN") {
    console.log (`this character is part of the justice leage and he is in the dc universe ${name} `)
}else{
    console.log("this character is not in the dc universe")
}


//write a conditional statement taking age as variable and what year group they will be in a school (i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). (if this does not make sense please watch the summary video or the youtube video pasted above)

var  age  = 13;

if (age>=13 && age <=16){
    console.log = ("secoundary school")
} else if  ( age>=16 && age <=18){
    console.log = ("college")
} else if ( age >=18){
    console.log = ("optional education")
}