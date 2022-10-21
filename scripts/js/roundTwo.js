// Functionality for Round 2

// ** ! ROUND TWO: FUNCTIONALLITY ! ** //

// Importing questions:
import placeholderQuestions from "./placeholder-questions.js";
console.log(placeholderQuestions);

//Filters:
// Questions:
let natureQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "Nature"
);
// Array of all nature questions
console.log(natureQuestions2);
// Specific category
console.log(natureQuestions2[0].category);
// Specific nature question
console.log(natureQuestions2[0].question);
// Specific nature answer
console.log(natureQuestions2[0].answer);
let animalsQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "Animals"
);
let computerQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "Computers"
);
let mythologyQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "Mythology"
);
let historyQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "History"
);
let generalQuestions2 = placeholderQuestions.filter(
  (question) => question.category === "General"
);
let finalQuestion = placeholderQuestions.filter(
  (question) => question.category === "Final"
);

// Variable declarations:
// Categories: titles
let roundTwoCategory = document.querySelectorAll("round2, categoryR2");
console.log(roundTwoCategory);
let roundTwoCategoryOne = document.getElementById("category1R2");
let roundTwoCategoryTwo = document.getElementById("category2R2");
let roundTwoCategoryThree = document.getElementById("category3R2");
let roundTwoCategoryFour = document.getElementById("category4R2");
let roundTwoCategoryFive = document.getElementById("category5R2");
let roundTwoCategorySix = document.getElementById("category6R2");
let foundFinal = document.getElementById("Final");
console.log(roundTwoCategoryOne);

// Categories: columns
// Nature:
let nat1R2 = document.getElementById("nature1R2");
let nat2R2 = document.getElementById("nature2R2");
let nat3R2 = document.getElementById("nature3R2");
let nat4R2 = document.getElementById("nature4R2");
let nat5R2 = document.getElementById("nature5R2");
console.log(nat1R2);
// Animals:
let ani1R2 = document.getElementById("animals1R2");
let ani2R2 = document.getElementById("animals2R2");
let ani3R2 = document.getElementById("animals3R2");
let ani4R2 = document.getElementById("animals4R2");
let ani5R2 = document.getElementById("animals5R2");
// Computers:
let com1R2 = document.getElementById("computers1R2");
let com2R2 = document.getElementById("computers2R2");
let com3R2 = document.getElementById("computers3R2");
let com4R2 = document.getElementById("computers4R2");
let com5R2 = document.getElementById("computers5R2");
// Mythology:
let myt1R2 = document.getElementById("mythology1R2");
let myt2R2 = document.getElementById("mythology2R2");
let myt3R2 = document.getElementById("mythology3R2");
let myt4R2 = document.getElementById("mythology4R2");
let myt5R2 = document.getElementById("mythology5R2");
// History:
let his1R2 = document.getElementById("history1R2");
let his2R2 = document.getElementById("history2R2");
let his3R2 = document.getElementById("history3R2");
let his4R2 = document.getElementById("history4R2");
let his5R2 = document.getElementById("history5R2");
// General:
let gen1R2 = document.getElementById("general1R2");
let gen2R2 = document.getElementById("general2R2");
let gen3R2 = document.getElementById("general3R2");
let gen4R2 = document.getElementById("general4R2");
let gen5R2 = document.getElementById("general5R2");

// Other:
let answerBlock = document.getElementsByClassName("answerBlock");
let buttonGroup = document.getElementsByTagName("button");

// ** ROUND TWO: START ** //
start();

function start() {
  start = setTimeout(() => {
    (roundTwoCategoryOne.textContent = natureQuestions2[0].category),
      (roundTwoCategoryTwo.textContent = animalsQuestions2[0].category),
      (roundTwoCategoryThree.textContent = computerQuestions2[0].category),
      (roundTwoCategoryFour.textContent = mythologyQuestions2[0].category),
      (roundTwoCategoryFive.textContent = historyQuestions2[0].category),
      (roundTwoCategorySix.textContent = generalQuestions2[0].category);
  }, 500);
}

// Event listeners:
// Nature:
nat1R2.addEventListener("click", nat1R2Click);
nat2R2.addEventListener("click", nat2R2Click);
nat3R2.addEventListener("click", nat3R2Click);
nat4R2.addEventListener("click", nat4R2Click);
nat5R2.addEventListener("click", nat5R2Click);
// Animals:
ani1R2.addEventListener("click", ani1R2Click);
ani2R2.addEventListener("click", ani2R2Click);
ani3R2.addEventListener("click", ani3R2Click);
ani4R2.addEventListener("click", ani4R2Click);
ani5R2.addEventListener("click", ani5R2Click);
// Computers:
com1R2.addEventListener("click", com1R2Click);
com2R2.addEventListener("click", com2R2Click);
com3R2.addEventListener("click", com3R2Click);
com4R2.addEventListener("click", com4R2Click);
com5R2.addEventListener("click", com5R2Click);
// Mythology:
myt1R2.addEventListener("click", myt1R2Click);
myt2R2.addEventListener("click", myt2R2Click);
myt3R2.addEventListener("click", myt3R2Click);
myt4R2.addEventListener("click", myt4R2Click);
myt5R2.addEventListener("click", myt5R2Click);
// History:
his1R2.addEventListener("click", his1R2Click);
his2R2.addEventListener("click", his2R2Click);
his3R2.addEventListener("click", his3R2Click);
his4R2.addEventListener("click", his4R2Click);
his5R2.addEventListener("click", his5R2Click);
// General:
gen1R2.addEventListener("click", gen1R2Click);
gen2R2.addEventListener("click", gen2R2Click);
gen3R2.addEventListener("click", gen3R2Click);
gen4R2.addEventListener("click", gen4R2Click);
gen5R2.addEventListener("click", gen5R2Click);

//Guess or Pass buttons
answerBlock.addEventListener("keyup", buttonEnable);

// Click functions:
// Nature:
function nat1R2Click(event) {
  nat1R2.innerText = natureQuestions2[5].question;
}
function nat2R2Click(event) {
  nat2R2.innerText = natureQuestions2[6].question;
}
function nat3R2Click(event) {
  nat3R2.innerText = natureQuestions2[7].question;
}
function nat4R2Click(event) {
  nat4R2.innerText = natureQuestions2[8].question;
}
function nat5R2Click(event) {
  nat5R2.innerText = natureQuestions2[9].question;
}

// Animals:
function ani1R2Click(event) {
  ani1R2.innerText = animalsQuestions2[5].question;
}
function ani2R2Click(event) {
  ani2R2.innerText = animalsQuestions2[6].question;
}
function ani3R2Click(event) {
  ani3R2.innerText = animalsQuestions2[7].question;
}
function ani4R2Click(event) {
  ani4R2.innerText = animalsQuestions2[8].question;
}
function ani5R2Click(event) {
  ani5R2.innerText = animalsQuestions2[9].question;
}
// Computers:
function com1R2Click(event) {
  com1R2.innerText = computerQuestions2[5].question;
}
function com2R2Click(event) {
  com2R2.innerText = computerQuestions2[6].question;
}
function com3R2Click(event) {
  com3R2.innerText = computerQuestions2[7].question;
}
function com4R2Click(event) {
  com4R2.innerText = computerQuestions2[8].question;
}
function com5R2Click(event) {
  com5R2.innerText = computerQuestions2[9].question;
}
// Mythology:
function myt1R2Click(event) {
  myt1R2.innerText = mythologyQuestions2[5].question;
}
function myt2R2Click(event) {
  myt2R2.innerText = mythologyQuestions2[6].question;
}
function myt3R2Click(event) {
  myt3R2.innerText = mythologyQuestions2[7].question;
}
function myt4R2Click(event) {
  myt4R2.innerText = mythologyQuestions2[8].question;
}
function myt5R2Click(event) {
  myt5R2.innerText = mythologyQuestions2[9].question;
}
// History:
function his1R2Click(event) {
  his1R2.innerText = historyQuestions2[5].question;
}
function his2R2Click(event) {
  his2R2.innerText = historyQuestions2[6].question;
}
function his3R2Click(event) {
  his3R2.innerText = historyQuestions2[7].question;
}
function his4R2Click(event) {
  his4R2.innerText = historyQuestions2[8].question;
}
function his5R2Click(event) {
  his5R2.innerText = historyQuestions2[9].question;
}
// General:
function gen1R2Click(event) {
  gen1R2.innerText = generalQuestions2[5].question;
}
function gen2R2Click(event) {
  gen2R2.innerText = generalQuestions2[6].question;
}
function gen3R2Click(event) {
  gen3R2.innerText = generalQuestions2[7].question;
}
function gen4R2Click(event) {
  gen4R2.innerText = generalQuestions2[8].question;
}
function gen5R2Click(event) {
  gen5R2.innerText = generalQuestions2[9].question;
}

// Button disabled/enabled:
function buttonEnable(event) {
  if (event.target.value === "") {
    buttonGroup.disabled = true;
  } else {
    buttonGroup.disbaled = false;
  }
}
