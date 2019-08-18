

var score = 0;

var myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously",
        d: "Somthin"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best",
        d: "somethin"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
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




