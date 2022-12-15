var highScoresID = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

// reviewScore
function reviewScore() {
    var score = localStorage.getItem("score");
    var yourScore = JSON.parse(score);

    for(var i = 0; i < yourScore.length; i++) {
        var scoresLi = document.createElement("li");
        scoresLi.textContent = yourScore[i];
        highScoresID.appendChild(scoresLi);
    }
}
reviewScore();

// clear button controller
function clear() {

    localStorage.clear();

    while (highScoresID.hasChildNodes()) {
        highScoresID.removeChild(highScoresID.firstChild);
    }
};

clearBtn.addEventListener("click", clear);