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

// Set up the sound
var correctSound = new Audio("./assets/sfx/correct.wav");
var incorrectSound = new Audio("./assets/sfx/incorrect.wav");

// time
timerInput.textContent = 100 ;

// timer function
function setTime() {
  var timerInterval = setInterval(function countDown() {
    
    timerInput.textContent -= 1;
    
    if ( timerInput.textContent <= 0){
      questionsID.setAttribute("class", "hide");
      endScreenID.setAttribute("class", "start");
      feedBack.setAttribute("class", "hide");
      scoreID.textContent = markScore;
      timerInput.textContent = 0;
      clearInterval(timerInterval);
        }
}, 1000);
}
// Score and the queation number setup
var startState = startScreenID.getAttribute("class");
var questionindexNumber = 0 ;
var markScore = 0 ;
var fullScore = 99 ;

// Question controller || i not know why can't directly execute when i click it
function askQuestion() {
  if ( markScore == fullScore ){
    endPage()
  } else {
    showQuestion(questionindexNumber)
  }
};

// Question display
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

    // Add the score to the array
    yourScore.push(initialsInput.value + ": " + markScore);

    //add the values to localStorage
    localStorage.setItem("score", JSON.stringify(yourScore));

    location.href="highscores.html"
}

// call the funtion
addBtn.addEventListener("click", setTime);
addBtn.addEventListener("click", askQuestion);
submitBtn.addEventListener("click", submitName);