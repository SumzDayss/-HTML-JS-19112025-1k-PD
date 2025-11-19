const humanWeight = document.getElementById("weight")
const humanHeight = document.getElementById("tall")
const mainButton = document.getElementById("button")
const mainOutput = document.getElementById("output")

mainButton.addEventListener("click",KMIK)

function KMIK(){
    personWeight = humanWeight.value
    personHeight = humanHeight.value * 2 * 0.01
    BMI = personWeight / personHeight
    console.log(BMI)

}