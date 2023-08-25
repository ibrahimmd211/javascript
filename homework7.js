const body = document.body
const buttom = document.getElementById(`city`)
const citybtn = document.getElementById(`ul`)
const list = document. querySelector("ul")

citybtn.addEventListener("click", addToList)


var array = []

function addToList(){
    var item = document.createElement(`li`)
    item.innerText = prompt ("what city would you like to add")
    console.log(item.innerText)
}

for(let i=0; i<list.children.length; i++){
    if (list.children(i).innerText.toLowerCase() === item.toLowerCase()){
        console.log(`${item.innerText}already in the list`)
        return false
    }
}
list.append(item)

darkMode.addEventListener("click", function(){
    body.classList.toggle("darkMode")
if(body.classList.contains("darkMode")){
    darkMode.innerText = "Light Mode"}
else{darkMode.innerText = "Dark Mode"}})

const nameEl = document.getElementById ('name')
const emailEl = document.getElementById("email")
const form = document.querySelector('form')

console.log(nameEL.value)

nameEl.addEventListener(`keyup`,function(){
    console.log(nameEl.value)

})

function checkName(){
    let valid = false
    if(nameEl.value){
        console.log(nameEl.value)
        valid = true
    }
    return valid
}

function checkEmail(){
    let valid = false
    if(emailEl.value){
        console.log(emailEl.value)
        valid = true
    }
    return valid
}

function regexName (name){
    const re = /[a-Za-Z]+$/;
    return re.test(name)
}
form.addEventListener('submit',function(){
    let validName = checkName()
    console.log(`form is ${validName}`)
    let validEmail = checkEmail()
    console.log(`form is a ${validEmail}`)

    let formvalid = validName && validEmail
    console.log (`so that mean form ${formIsvalid}`)

    if(formvalid){
        console.log("form was submitted successfully")
       
        }else{
            emailEl.preventDefault()
            alert("form incomplete")
        }
    })

   
