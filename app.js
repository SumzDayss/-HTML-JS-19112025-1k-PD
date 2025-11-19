const humanWeight = document.getElementById("weight")
const humanHeight = document.getElementById("tall")
const mainButton = document.getElementById("button")
const mainOutput = document.getElementById("output")
const HistoryList = document.getElementById("history")

mainButton.addEventListener("click",KMIK)

function KMIK(){
    personWeight = humanWeight.value
    personHeight = humanHeight.value * 2 * 0.01
    BMI = personWeight / personHeight
    console.log(BMI)
    console.log(BMI.toFixed(2))
    if(BMI > 18,5){
     mainOutput.innerText = "Jūsu ĶMI ir " +  BMI.toFixed(2) + " (Nepietiekama ķermeņa masa)"}
    if(BMI <= 18,5){
     mainOutput.innerText = "Jūsu ĶMI ir " +  BMI.toFixed(2) + " (Normāla ķermeņa masa)"}
    if(BMI <= 25 ){
    mainOutput.innerText = "Jūsu ĶMI ir " +  BMI.toFixed(2) + " (Lieka ķermeņa masa)"}
    if(BMI > 30 ){
    mainOutput.innerText = "Jūsu ĶMI ir " +  BMI.toFixed(2) + " (Aptaukošanās)"}
addToHistory(BMI,humanHeight,humanWeight.toFixed(2));
}

function addToHistory(BMI,humanHeight,humanWeight) {
    const li = document.createElement("li");
    li.textContent = addToHistory.BMI + "Augums" + addToHistory.humanHeight + "cm" + "Masa"+ addToHistory.humanWeight + "kg" ;
    history.prepend(li);
}