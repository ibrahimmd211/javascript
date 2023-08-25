const body = document.body
const head = document.head

const pageTitle = document.createElement('title')
pageTitle.innerText = "DOMS homework 1"

head.append(pageTitle)

const titlePage = document.getElementById('title')
titlePage.innerText = "Homework is all about DOM manipulation"

const h3 = document.querySelector("h3")
var date = new Date()
h3.innerText = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`

const orderdList = document.createElement ('ol')
const h5 = document.createElement ('h5')
h5.innerText = "coding i am learning this year;"


const item1 = document.createElement('Ii')
const item2 = document.createElement('Ii')
const item3 = document.createElement('Ii')
const item4 = document.createElement('Ii')

item1.innerText = 'html'
item2.innerText = 'css'
item3.innerText = 'javascript'
item4.innerText = 'react'

constList.append(h5)
orderdList.append(item1)
orderdList.append(item2)
orderdList.append(item3)
orderdList.append(item4)

const btn = document.createElement(`button`)
btn.innerText = `click Me`


body.append(orderdList)
body.append(btn)

var arrayColor= ["red", "orange","yellow","black","grey"]

h3.addEventListener("mouseover", function(e){
    const radomiser = Math.floor (Math.random()* arrayColor.length)
    console.log(arrayColor*[radomiser])
    body.style.backgroundColor = arrayColor[radomiser]

})

for (let i=0; i=arrayColor.length; i++){
    
}