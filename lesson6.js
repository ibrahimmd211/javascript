var name = "ahmeddahir"

function checkstring(param){
    if (typeof param === "string"){
        console.log("passes string condtion")
        chechLength(name)
    }else{
        errorMessage()
    }
}

function checkstring(param){
    if (param.length > 5){
        console.log("pass validation")

        }else{
            errorMessage()
            console.log("error messeage")
        }

        
    }

    checkstring("ahmeddahir")

    var number = 'math.random'

    function randomNumber(){
        let number = Math.random()
        return number
    }

    console.log(`Randomnumber is ${randomNumber()}`)

    var name = "Ibrahim"

    function checkstring(param){
        if (param === "string"){
            console.log ("varaible is a string")
        } else{
            console.log("error");
        }
    }


    checkstring("ibrahim")


    function greet(name){
        console.log(`hello ${name}`)
    }

    greet( "ahmed")

    function idealSleepHour(hour){
        const idealSleepHour = hour*7
        console.log(hour)
    }
    
    idealSleepHour(12)
    
    
    function actualsleepHour (mon,tue,wed,thur,frid,sat,sun){
        const hourSlept =  mon+tue+wed+thur+frid+sat+sun
        console.log(hourSlept)
    }
    actualsleepHour(5,2,5,6,2,3)
    
    function sleepDebt(){
        const hourSlept= actualsleepHour(5,3,1,2,5,6)
        const idealHour =idealSleepHour(7)
    
        if (idealHour > hourSlept){
            var debt =idealHour-hourSlept
            console.log("you have slept enough hours")
        } else{
            (hourSlept<idealHour)
            console.log("did not sleep enough hour")
            var owed = hourSlept - idealHour
        }
    }