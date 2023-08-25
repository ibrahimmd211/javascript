const body = document.body
const titleHeading = document.querySelector("title")

titleHeading.innerText = "Hello welcome to DOMS lesson"

const subheading = document.createElement("h1")
subheading.innerText = 'This is the subheading'
body.append(subheading)

const head = document.head
const title = document.querySelector("title")
title.innerText= " DOMS lesson 1"

body.style.backgroundColor = "pink"

const button = document.createElement("button")
button.innerText = "clickme"

body.append(button)

const box = document.getElementById("box" )
box.style.height = "150px"
box.style.width = "150px"
box.style.border = "thick solid white"
box.style.backgroundColor = "green"
