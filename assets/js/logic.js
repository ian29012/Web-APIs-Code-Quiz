
var timerInput = document.getElementById("time");
var addBtn = document.getElementById("start");

timerInput.textContent = 100 ;

function countDown() {
    
    timerInput.textContent -= 1;
    
    setTimeout("countDown()",1000);
    
    if ( timerInput.textContent == 0){
        location.href = "highscores.html";
        }

    return;
};

addBtn.addEventListener("click", countDown);