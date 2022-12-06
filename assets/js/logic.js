// timer element
var timerInput = document.getElementById("time");
var addBtn = document.getElementById("start");

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
};


















// call the funtion
addBtn.addEventListener("click", countDown);