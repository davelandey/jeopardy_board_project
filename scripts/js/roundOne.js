// ** ! ROUND ONE: FUNCTIONALLITY! ** //

// Importing questions:
import placeholderQuestions from "./placeholder-questions.js";
console.log(placeholderQuestions);

//Filters:
// Questions:
let natureQuestions = placeholderQuestions.filter(
  (question) => question.category === "Nature"
);
// Array of all nature questions
console.log(natureQuestions);
// Specific category
console.log(natureQuestions[0].category);
// Specific nature question
console.log(natureQuestions[0].question);
// Specific nature answer
console.log(natureQuestions[0].answer);
let animalsQuestions = placeholderQuestions.filter(
  (question) => question.category === "Animals"
);
let computerQuestions = placeholderQuestions.filter(
  (question) => question.category === "Computers"
);
let mythologyQuestions = placeholderQuestions.filter(
  (question) => question.category === "Mythology"
);
let historyQuestions = placeholderQuestions.filter(
  (question) => question.category === "History"
);
let generalQuestions = placeholderQuestions.filter(
  (question) => question.category === "General"
);
let finalQuestion = placeholderQuestions.filter(
  (question) => question.category === "Final"
);

// Variable declarations:
// Categories: titles
let roundOneCategory = document.querySelectorAll("round1, category");
console.log(roundOneCategory);
let roundOneCategoryOne = document.getElementById("category1");
let roundOneCategoryTwo = document.getElementById("category2");
let roundOneCategoryThree = document.getElementById("category3");
let roundOneCategoryFour = document.getElementById("category4");
let roundOneCategoryFive = document.getElementById("category5");
let roundOneCategorySix = document.getElementById("category6");
let foundFinal = document.getElementById("Final");
console.log(roundOneCategoryOne);

// Categories: columns
// Nature:
let nat1 = document.getElementById("nature1");
let nat2 = document.getElementById("nature2");
let nat3 = document.getElementById("nature3");
let nat4 = document.getElementById("nature4");
let nat5 = document.getElementById("nature5");
console.log(nat1);
// Animals:
let ani1 = document.getElementById("animals1");
let ani2 = document.getElementById("animals2");
let ani3 = document.getElementById("animals3");
let ani4 = document.getElementById("animals4");
let ani5 = document.getElementById("animals5");
// Computers:
let com1 = document.getElementById("computers1");
let com2 = document.getElementById("computers2");
let com3 = document.getElementById("computers3");
let com4 = document.getElementById("computers4");
let com5 = document.getElementById("computers5");
// Mythology:
let myt1 = document.getElementById("mythology1");
let myt2 = document.getElementById("mythology2");
let myt3 = document.getElementById("mythology3");
let myt4 = document.getElementById("mythology4");
let myt5 = document.getElementById("mythology5");
// History:
let his1 = document.getElementById("history1");
let his2 = document.getElementById("history2");
let his3 = document.getElementById("history3");
let his4 = document.getElementById("history4");
let his5 = document.getElementById("history5");
// General:
let gen1 = document.getElementById("general1");
let gen2 = document.getElementById("general2");
let gen3 = document.getElementById("general3");
let gen4 = document.getElementById("general4");
let gen5 = document.getElementById("general5");

// Final:
let fin1 = document.getElementById("final1");

// Other:
let answerBlock = document.getElementsByClassName("answerBlock");
let buttonGroup = document.getElementsByTagName("button");

// ** ROUND ONE: START ** //
start();

function start() {
  start = setTimeout(() => {
    (roundOneCategoryOne.textContent = natureQuestions[0].category),
      (roundOneCategoryTwo.textContent = animalsQuestions[0].category),
      (roundOneCategoryThree.textContent = computerQuestions[0].category),
      (roundOneCategoryFour.textContent = mythologyQuestions[0].category),
      (roundOneCategoryFive.textContent = historyQuestions[0].category),
      (roundOneCategorySix.textContent = generalQuestions[0].category);
  }, 500);
}

// Event listeners:
// Nature:
nat1.addEventListener("click", nat1Click);
nat2.addEventListener("click", nat2Click);
nat3.addEventListener("click", nat3Click);
nat4.addEventListener("click", nat4Click);
nat5.addEventListener("click", nat5Click);
// Animals:
ani1.addEventListener("click", ani1Click);
ani2.addEventListener("click", ani2Click);
ani3.addEventListener("click", ani3Click);
ani4.addEventListener("click", ani4Click);
ani5.addEventListener("click", ani5Click);
// Computers:
com1.addEventListener("click", com1Click);
com2.addEventListener("click", com2Click);
com3.addEventListener("click", com3Click);
com4.addEventListener("click", com4Click);
com5.addEventListener("click", com5Click);
// Mythology:
myt1.addEventListener("click", myt1Click);
myt2.addEventListener("click", myt2Click);
myt3.addEventListener("click", myt3Click);
myt4.addEventListener("click", myt4Click);
myt5.addEventListener("click", myt5Click);
// History:
his1.addEventListener("click", his1Click);
his2.addEventListener("click", his2Click);
his3.addEventListener("click", his3Click);
his4.addEventListener("click", his4Click);
his5.addEventListener("click", his5Click);
// General:
gen1.addEventListener("click", gen1Click);
gen2.addEventListener("click", gen2Click);
gen3.addEventListener("click", gen3Click);
gen4.addEventListener("click", gen4Click);
gen5.addEventListener("click", gen5Click);

//Guess or Pass buttons
answerBlock.addEventListener("keyup", buttonEnable);

// Click functions:
// Nature:
function nat1Click(event) {
  nat1.innerText = natureQuestions[0].question;
}
function nat2Click(event) {
  nat2.innerText = natureQuestions[1].question;
}
function nat3Click(event) {
  nat3.innerText = natureQuestions[2].question;
}
function nat4Click(event) {
  nat4.innerText = natureQuestions[3].question;
}
function nat5Click(event) {
  nat5.innerText = natureQuestions[4].question;
}

// Animals:
function ani1Click(event) {
  ani1.innerText = animalsQuestions[0].question;
}
function ani2Click(event) {
  ani2.innerText = animalsQuestions[1].question;
}
function ani3Click(event) {
  ani3.innerText = animalsQuestions[2].question;
}
function ani4Click(event) {
  ani4.innerText = animalsQuestions[3].question;
}
function ani5Click(event) {
  ani5.innerText = animalsQuestions[4].question;
}
// Computers:
function com1Click(event) {
  com1.innerText = computerQuestions[0].question;
}
function com2Click(event) {
  com2.innerText = computerQuestions[1].question;
}
function com3Click(event) {
  com3.innerText = computerQuestions[2].question;
}
function com4Click(event) {
  com4.innerText = computerQuestions[3].question;
}
function com5Click(event) {
  com5.innerText = computerQuestions[4].question;
}
// Mythology:
function myt1Click(event) {
  myt1.innerText = mythologyQuestions[0].question;
}
function myt2Click(event) {
  myt2.innerText = mythologyQuestions[1].question;
}
function myt3Click(event) {
  myt3.innerText = mythologyQuestions[2].question;
}
function myt4Click(event) {
  myt4.innerText = mythologyQuestions[3].question;
}
function myt5Click(event) {
  myt5.innerText = mythologyQuestions[4].question;
}
// History:
function his1Click(event) {
  his1.innerText = historyQuestions[0].question;
}
function his2Click(event) {
  his2.innerText = historyQuestions[1].question;
}
function his3Click(event) {
  his3.innerText = historyQuestions[2].question;
}
function his4Click(event) {
  his4.innerText = historyQuestions[3].question;
}
function his5Click(event) {
  his5.innerText = historyQuestions[4].question;
}
// General:
function gen1Click(event) {
  gen1.innerText = generalQuestions[0].question;
}
function gen2Click(event) {
  gen2.innerText = generalQuestions[1].question;
}
function gen3Click(event) {
  gen3.innerText = generalQuestions[2].question;
}
function gen4Click(event) {
  gen4.innerText = generalQuestions[3].question;
}
function gen5Click(event) {
  gen5.innerText = generalQuestions[4].question;
}

// Button disabled/enabled:
function buttonEnable(event) {
  if (event.target.value === "") {
    buttonGroup.disabled = true;
  } else {
    buttonGroup.disbaled = false;
  }
}
