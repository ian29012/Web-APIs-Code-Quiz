// timer section
var timerInput = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var addBtn = document.getElementById("start");
// question section
var questions = document.getElementById("questions")
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var feedBack = document.getElementById("feedback");
// score section
var endScreen = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submit");


var questionBook = ["You can use the _______ function to find out if an expression (or a variable) is true",
                    "JavaScript _______ are for storing and manipulating text",
                    "________ Represents both integer and floating-point values"];

var answerBook = [["Boolean", "Took", "Number", "String"],  //1
                  ["Boolean", "Took", "Number", "String"],  //4
                  ["Boolean", "Took", "Number", "String"]];  //3

var correctAnswer = ["Boolean", "String", "Number"];

// test                
console.log(questionBook[0]);
console.log(answerBook[0][0]);
console.log(correctAnswer[0]);

// time
timerInput.textContent = 100 ;

// timer function
function countDown() {
    
    timerInput.textContent -= 1;
    
    setTimeout("countDown()",1000);
    
    if ( timerInput.textContent == 0){
        location.href = "highscores.html";
        }
};

var startState = startScreen.getAttribute("class")
var questionState = questions.getAttribute("class")

// Question
function question(question, answer, correct) {

   // hidden the start page and show the question
  if ( startState === "start"){
    startState.class = "hide";
    startScreen.setAttribute("class", "hide");

    // display question page
    questionState.class = "show";
    questions.setAttribute("class", "show");

    //display the question
    questionTitle.textContent = questionBook[0];

    var loopAnswerOl = document.createElement("ol");

    // use for loop to display the choices
    for ( var i = 0; i < answerBook[0].length; i++){
        var loopAnswerLi = document.createElement("li");
        var answerBtn = document.createElement("Button")
        answerBtn.textContent = answerBook[0][i];
        choices.appendChild(loopAnswerOl);
        loopAnswerOl.appendChild(loopAnswerLi);
        loopAnswerLi.appendChild(answerBtn);
    }
  // add score and next question when correct / subtracted the time when incorrect
choices.addEventListener("click", function(event) {
    var element = event.target;
    event.preventDefault()
    if (element.matches("button")){
    var answerBtntext = event.target.textContent;
    // console.log(answerBtntext[1].innerHTML)
    if ( answerBtntext == correctAnswer[0]){
        console.log("hi")
    } else { 
        console.log("bye")
    }

      }
     });
    };
   };
 




// call the funtion
addBtn.addEventListener("click", countDown);
addBtn.addEventListener("click", question);