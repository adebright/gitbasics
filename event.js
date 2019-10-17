// An event handling code 
let select = (e) => document.querySelector(e)
let eventTarget = select("#eventTarget")
eventTarget.addEventListener("click" , (e) => {
    let body = select("body")
    body.textContent = "Hello , World !" 
 } , false)
 
