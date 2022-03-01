var numQuizIndex = 0;
var time = questions.length * 15;
var timerId;

var quizEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submit = document.getElementById("submit");
var start = document.getElementById("start");


function startQuiz() {
    var startEl = document.getElementById("intro");
    startEl.setAttribute("id", "hide");

}