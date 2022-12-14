// timer element
var timerInput = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var addBtn = document.querySelector('#start');
var questions = document.querySelector('#questions')
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var feedBack = document.querySelector('#feedback');

var questionBook = ["You can use the _______ function to find out if an expression (or a variable) is true",
                    "JavaScript _______ are for storing and manipulating text",
                    "________ Represents both integer and floating-point values"]

var answerBook = [["Boolean", "Took", "Number", "String"],  //1
                  ["Boolean", "Took", "Number", "String"],  //4
                  ["Boolean", "Took", "Number", "String"]]  //3

var correctAnswer = ["Boolean", "String", "Number"]

// test                
console.log(questionBook[1])
console.log(answerBook[0][0])
console.log(correctAnswer[0])

// time
timerInput.textContent = 20 ;

// timer function
function countDown() {
    
    timerInput.textContent -= 1;
    
    setTimeout("countDown()",1000);
    
    if ( timerInput.textContent == 0){
        location.href = "highscores.html";
        }
}


// call the funtion
addBtn.addEventListener("click", countDown);
