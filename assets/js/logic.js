// timer element
var timerInput = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var addBtn = document.querySelector('#start');
var questions = document.querySelector('#questions')
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var feedBack = document.querySelector('#feedback');

var questionBook = [["You can use the _______ function to find out if an expression (or a variable) is true"],
                    ["JavaScript _______ are for storing and manipulating text"],
                    ["________ Represents both integer and floating-point values"]]

var answerBook = [["Boolean", "Took", "Number", "String"],  //1
                  ["Boolean", "Took", "Number", "String"],  //4
                  ["Boolean", "Took", "Number", "String"]]  //3



// time
timerInput.textContent = 100 ;

// timer function
function countDown() {
    
    timerInput.textContent -= 1;
    
    setTimeout("countDown()",1000);
    
    if ( timerInput.textContent == 0){
        location.href = "highscores.html";
        }

    return;
}


// create a question list
var ul = document.createElement("ul")

for (var i = 0; i < questionBook.length; i++ ) {
     var li = document.createElement("li")

     var answerBtn = document.createElement("button");
     answerBtn.textContent = answerBook[i]

}

function question() {

// go to question1
   startScreen.setAttribute("class", "hide");
   questions.setAttribute("class", "start");
   questionTitle.textContent = questionBook[0];
   choices.textContent = answerBook[i]


   return;
}

// call the funtion
addBtn.addEventListener("click", countDown);
addBtn.addEventListener("click", question);