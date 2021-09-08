const buttonMinus = document.querySelector(".buttonM")
const buttonPlus = document.querySelector(".buttonP")
const input = document.querySelector(".input")

buttonMinus.style.display = "none"

buttonPlus.addEventListener("click", ()=>{
    input.className = "input active"
    input.style.visibility = "visible"
    buttonPlus.style.display = "none"
    buttonMinus.style.display = "inline"
})
buttonMinus.addEventListener("click", ()=>{
    input.className = "input"
    buttonMinus.style.display = "none"
    buttonPlus.style.display = "inline"
    input.style.visibility = "hidden"
})
