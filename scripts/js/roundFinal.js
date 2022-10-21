// ** FINAL ROUND: functionallity ** //

// Importing questions:
import placeholderQuestions from "./placeholder-questions.js";
console.log(placeholderQuestions);

//Filters:
// Questions:
let finalQuestion = placeholderQuestions.filter(
  (question) => question.category === "Final"
);

// Variable declarations:
// Categories: titles
let roundFinal = document.getElementById("Final");
console.log(roundFinal);

// Categories: columns
// Final:
let fin1 = document.getElementById("Final");

// Other:
let answerBlock = document.getElementsByClassName("answerBlock");
let buttonGroup = document.getElementsByTagName("button");

// ** FINAL ROUND: START ** //
start();

function start() {
  start = setTimeout(() => {
    roundFinal.textContent = finalQuestion[0].category;
  }, 500);
}

// Event listeners:
fin1.addEventListener("click", fin1Click);

//Guess or Pass buttons
answerBlock.addEventListener("keyup", buttonEnable);

// Click functions:
function fin1Click(event) {
  fin1.innerText = finalQuestion[0].question;
}

// Button disabled/enabled:
function buttonEnable(event) {
  if (event.target.value === "") {
    buttonGroup.disabled = true;
  } else {
    buttonGroup.disbaled = false;
  }
}
