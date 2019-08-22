
var questions = [
  {
    "question": "Who is the strongest?",
    "option1": "Superman",
    "option2": "The Terminator",
    "option3": "Waluigi, obviously",
    "option4": "Somthin",
    "answer": "1"
  },

  {
    "question": "Who is the fastest?",
    "option1": "Quicksilver",
    "option2": "Flash",
    "option3": "Superman",
    "option4": "Batman",
    "answer": "2"
  },

  {
    "question": "Who is the strongest?",
    "option1": "Superman",
    "option2": "The Terminator",
    "option3": "Waluigi, obviously",
    "option4": "Somthin",
    "answer": "1"
  },

  {
    "question": "Who is the strongest?",
    "option1": "Superman",
    "option2": "The Terminator",
    "option3": "Waluigi, obviously",
    "option4": "Somthin",
    "answer": "1"
  },


];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var intervalId;
var clockRunning = false;
var time = 5;

var container = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");
var resultCont2 = document.getElementById("result2");
var resetButton = document.getElementById("resetButton")

$("#resetButton").on("click", start);
$("#score").text("Score: " + score + " points");

window.onload = function () {
  $("#start").on("click", start);
};


function start() {

  if (!clockRunning) {
    intervalId = setInterval(count, 100000);
    clockRunning = true;

  }

  $(".option").css("display", "block");
  $("#nextButton").css("display", "inline");
  $("#start").css("display", "none");

  currentQuestion = 0;
  loadQuestion(currentQuestion);
  time = 5;
  score = 0;

  $("#result").css("display", "none");
  $("#result2").css("display", "none");
  $("#resetButton").css("display", "none");
  $("#quizContainer").css("display", "block");

  nextButton.textContent = "Next Question";
}

function count() {

  if (time > 0) {
    time--;
    var converted = timeConverter(time);
    $("#display").text("Time Remaining: " + converted);
  }

  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
    if (time == 0) {
      
    var incorrect = questions.length - score;
      alert("Time is up. \r\n You're all done!");
      time = 9999;
      $("#quizContainer").css("display", "none");
      var incorrect = questions.length - score;
      resultCont.textContent = "Answers Correct: " + score;
      resultCont2.textContent = "You Missed: " + incorrect;
      $("#result").css("display", "block");
      $("#result2").css("display", "block");
      $("#resetButton").css("display", "inline");
    }

  }

  else if (time == 0 && currentQuestion < totQuestions - 1) {
    alert("Time is up... \r\n(You gotta be quicker than that!)");
    currentQuestion++;
    loadQuestion(currentQuestion);
    time = 6;

  }
}

function timeConverter(t) {
  var minutes = Math.floor(t / 6);
  var seconds = t - (minutes * 6);
  return seconds;
}

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionElement.textContent = (questionIndex + 1) + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  time = 5;//resets the countdown on each question
  var answer = selectedOption.value;

  if (questions[currentQuestion].answer == answer) {
    score += 1;
  }

  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }

  if (currentQuestion == totQuestions) {
    var incorrect = questions.length - score;
    container.style.display = "none";
    resultCont.style.display = "";
    $("#result").css("display", "block");
    resultCont.textContent = "Answers Correct: " + score;
    resultCont2.style.display = "";
    $("#result2").css("display", "block");
    resultCont2.textContent = "You Missed: " + incorrect;
    $("#resetButton").css("display", "inline");

    return;
  }

  else {
    loadQuestion(currentQuestion);
  }
}


