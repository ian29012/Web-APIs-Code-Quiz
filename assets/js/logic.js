// timer section
var timerInput = document.querySelector("#time");
var startScreenID = document.querySelector("#start-screen");
var addBtn = document.querySelector("#start");
// question section
var questionsID = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var feedBack = document.querySelector("#feedback");
// score section
var endScreenID = document.querySelector("#end-screen");
var scoreID = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");


var questionBook = ["You can use the _______ function to find out if an expression (or a variable) is true",
                    "JavaScript _______ are for storing and manipulating text",
                    "________ Represents both integer and floating-point values"];

var answerBook = [["Boolean", "Took", "Number", "String"],  //1
                  ["Boolean", "Took", "Number", "String"],  //4
                  ["Boolean", "Took", "Number", "String"]];  //3

var correctAnswer = ["Boolean", "String", "Number"];

// Set up the sound
var correctSound = new Audio("./assets/sfx/correct.wav");
var incorrectSound = new Audio("./assets/sfx/incorrect.wav");

// test                
// console.log(questionBook[0]);
// console.log(answerBook[0][0]);
// console.log(correctAnswer[0]);

// time
timerInput.textContent = 100 ;

// timer function
function countDown() {
    
    timerInput.textContent -= 1;
    
    setTimeout("countDown()",1000);
    
    if ( timerInput.textContent <= 0){
      questionsID.setAttribute("class", "hide");
      endScreenID.setAttribute("class", "start");
      feedBack.setAttribute("class", "hide");
      scoreID.textContent = markScore
        }
};

var startState = startScreenID.getAttribute("class");
var questionindexNumber = 0 ;
var markScore = 0 ;
var fullScore = 99 ;

// Question

function askQuestion() {
  if ( markScore == fullScore ){

    endPage()

  } else {

    showQuestion(questionindexNumber)
  }
};

function showQuestion(questionNumber) {

     //clear the page 
    while (choices.hasChildNodes()) {
           choices.removeChild(choices.firstChild);
           questionTitle.textContent = "";
        }

   // hidden the start page and show the question
  if ( startState === "start"){
    startScreenID.setAttribute("class", "hide");

    // display question page
    questionsID.setAttribute("class", "show");

    //display the question
    questionTitle.textContent = questionBook[questionNumber];

    var loopAnswerOl = document.createElement("ol");

    // use for loop to display the choices
    for ( var i = 0; i < answerBook[questionNumber].length; i++){
        var loopAnswerLi = document.createElement("li");
        var answerBtn = document.createElement("Button")
        answerBtn.textContent = answerBook[questionNumber][i];
        choices.appendChild(loopAnswerOl);
        loopAnswerOl.appendChild(loopAnswerLi);
        loopAnswerLi.appendChild(answerBtn);
    }
  }
};
  // add score and next question when correct / subtracted the time when incorrect
choices.addEventListener("click", function(event) {
    var element = event.target;
    event.preventDefault()

    if (element.matches("button")){
    var answerBtntext = event.target.textContent;
    // console.log(answerBtntext[1].innerHTML)
    
    // display feedBack
    feedBack.class = "feedback";
    feedBack.setAttribute("class", "feedback");

    if ( answerBtntext == correctAnswer[questionindexNumber]){
        questionindexNumber++ ;
        markScore += 33;
        correctSound.play();
        console.log("correct") ;
        console.log(markScore) ;
        feedBack.textContent = "Correct!! + 33Score";
        askQuestion(questionindexNumber);
    } else { 
        timerInput.textContent -= 30 ;
        incorrectSound.play();
        console.log("wrong");
        feedBack.textContent = "Wrong Answer and time - 30s"
        
    }
    }
    });
  
// Endpage 
function endPage(){

  questionsID.setAttribute("class", "hide");
  endScreenID.setAttribute("class", "start");
  feedBack.setAttribute("class", "hide");
  timerInput.textContent = 0
  scoreID.textContent = markScore
};

function submitName(){
  var score = localStorage.getItem("score")
  var yourScore = JSON.parse(score) || [];

    // Add the current score to the array
    yourScore.push(initialsInput.value + ": " + markScore);

    //Get values from page and add them to localStorage
    localStorage.setItem("score", JSON.stringify(yourScore));

    location.href="highscores.html"
}


// call the funtion
addBtn.addEventListener("click", countDown);
addBtn.addEventListener("click", askQuestion);
submitBtn.addEventListener("click", submitName);