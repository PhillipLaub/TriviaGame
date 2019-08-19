
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

  {
    "question": "Who is the strongest?",
    "option1": "Superman",
    "option2": "The Terminator",
    "option3": "Waluigi, obviously",
    "option4": "Somthin",
    "answer": "1"
  },


];

// This code will run as soon as the page loads
window.onload = function() {

  $("#start").on("click", start);

};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 5;

function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;

  }
  for (let i =0; i < myQuestions.length; i++ ) {

    $("#question-text").append("Question " + [i+1] + ". " + myQuestions[i].question +" Answer Options: " + "a. " + myQuestions[i].answers.a + "  b. " + myQuestions[i].answers.b + "  c. " + myQuestions[i].answers.c + "  d. " + myQuestions[i].answers.d + " ");


  }

}

function count() {

  if ( time > 0) {
    time--;
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text("Time Remaining: " + converted + " seconds");


  }



}
function timeConverter(t) {

  var minutes = Math.floor(t / 5);
  var seconds = t - (minutes * 5);
  return seconds;
}

$("#score").text("Score: " + score + " points");



var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

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
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
    return;
  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);