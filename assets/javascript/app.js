
var questions = [
  {
    "question": "What does 'Wubba Lubba Dub Dub' mean?",
    "option1": "Please Leave",
    "option2": "I'm a Genius",
    "option3": "I'm in Great Pain",
    "option4": "Let's Party",
    "answer": "3"
  },

  {
    "question": "What's the name of Morty's Crush?",
    "option1": "Jessica",
    "option2": "Annie",
    "option3": "Summer",
    "option4": "Liz",
    "answer": "1"
  },

  {
    "question": "Who killed Bird-Person at his Wedding?",
    "option1": "Jerry",
    "option2": "Krombopulus Michael",
    "option3": "Beth",
    "option4": "Tammy",
    "answer": "4"
  },

  {
    "question": "What was the name of the theme park Rick built in a homeless man?",
    "option1": "Disneyland",
    "option2": "Rick's Scary Park",
    "option3": "Anatomy Park",
    "option4": "Whirly Dirly",
    "answer": "3"
  },
  {
    "question": "What was Rick's favorite exhibit in the park from the last question?",
    "option1": "Bladder Falls",
    "option2": "Pirates of the Pancreas",
    "option3": "The Bone Train",
    "option4": "Spleen Mountain",
    "answer": "2"
  },
  {
    "question": "What does Rick use to make the Purgers drop their weapons?",
    "option1": "Portal Gun",
    "option2": "Knife",
    "option3": "His words",
    "option4": "Tic Tacs",
    "answer": "4"
  },
  {
    "question": "Who is the character that made Morty feel 'uncomfortable' in the bathroom?",
    "option1": "Mr. Goldenfold",
    "option2": "Jerry",
    "option3": "Mr. Meeseeks",
    "option4": "Mr. Jellybean",
    "answer": "4"
  },
  {
    "question": "What Earth is the main Rick from?",
    "option1": "C-137",
    "option2": "G-163",
    "option3": "B-247",
    "option4": "A-113",
    "answer": "1"
  },
  {
    "question": "Rick modified Morty's DNA so he can transform into what?",
    "option1": "Dog",
    "option2": "Horse",
    "option3": "Bird",
    "option4": "Car",
    "answer": "4"
  },
  {
    "question": "What is Beth's favorite beverage?",
    "option1": "Soda",
    "option2": "Beer",
    "option3": "Wine",
    "option4": "Water",
    "answer": "3"
  },
  {
    "question": "How long did Rick leave Beth?",
    "option1": "10 years",
    "option2": "15 years",
    "option3": "20 years",
    "option4": "25 years",
    "answer": "3"
  },
  {
    "question": "What does Rick use to travel between universes?",
    "option1": "Tardis",
    "option2": "Space Ship",
    "option3": "His Car",
    "option4": "Portal Gun",
    "answer": "4"
  },
  {
    "question": "Rick and Morty, are based off of characters from what movie?",
    "option1": "Frankenstein",
    "option2": "Back to the Future",
    "option3": "Bad Boys",
    "option4": "Equilibrium",
    "answer": "2"
  },
  {
    "question": "What are the names of Ricks two 'Best' friends?",
    "option1": "Summer and Beth",
    "option2": "Slowmobius and Gearhead",
    "option3": "Birdperson and Squanchy",
    "option4": "Photography Raptor and Linkler",
    "answer": "3"
  },
   {
    "question": "What should you never say to a Traflorkian?",
    "option1": "Peace among worlds",
    "option2": "Wubba lubba dub dub",
    "option3": "Hello",
    "option4": "Glip-glop",
    "answer": "4"
  },
  {
    "question": "What ingredient was taken out of the Yummy Yum bars?",
    "option1": "Purgenol",
    "option2": "Hydrophol",
    "option3": "Concentrated Dark Matter",
    "option4": "Sugar",
    "answer": "1"
  },
  {
    "question": "Who are the creators of Rick and Morty?",
    "option1": "Dan Harmon & Justin Roiland",
    "option2": "Jack Black & Kyle Gass",
    "option3": "Ben Stiller & Owen Wilson",
    "option4": "Tom Kenny & Chris Parnell",
    "answer": "1"
  },
  {
    "question": "What is Ricks last name?",
    "option1": "Smith",
    "option2": "Garcia",
    "option3": "Sanchez",
    "option4": "Brown",
    "answer": "3"
  },
  {
    "question": "What does Beth do for a living?",
    "option1": "Teacher",
    "option2": "Horse surgeon",
    "option3": "Advertising",
    "option4": "She's unemployed",
    "answer": "2"
  },
  {
    "question": "Rick and Morty, and family attended what Musical?",
    "option1": "Hello Dolly",
    "option2": "Wicked",
    "option3": "Hulk",
    "option4": "Les Miserables",
    "answer": "3"
  },
];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var intervalId;
var clockRunning = false;
var time = 6;

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
    intervalId = setInterval(count, 1000);
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
  if (!selectedOption) {
    alert("Pick an option!")
  }
  time = 6;//resets the countdown on each question
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


