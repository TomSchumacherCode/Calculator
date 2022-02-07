let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let solutions = document.querySelector("#solutionOutput");
let buttons = document.querySelectorAll('button');
let finalAnswer = document.querySelector(`#finalAnswer`);
let clearButton = document.querySelector("#clearButton");

let currentDisplay = []

buttons.forEach(item => {


    item.addEventListener("click", () => {
        if (!item.id.match("equals")) {
            console.log("It works!")
            currentDisplay.push(item.value)
        }
        if (item.id.match("clearButton")) {
            console.log("clear button clicked")
            currentDisplay=[""]
            finalAnswer.innerHTML="0"
        }

        console.log(currentDisplay)
        solutions.innerHTML=currentDisplay.join("");

        if (item.id.match("equals")){
            finalAnswer.innerHTML=eval(currentDisplay.join(""))
            console.log(eval(currentDisplay.join("")))
        }
    })
})
