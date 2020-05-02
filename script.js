//Define variables

var highScoreEl = document.getElementById("highScore")
var timerEl = document.getElementById("timer")

var yesBar = document.getElementById("correctBar")
var noBar = document.getElementById("wrongBar")

var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var recScore = document.getElementById("recordScore")
var dispScore = document.getElementById("displayScore")
var question = document.getElementById("question")

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

var timeLeft = 75;


var questions = [
    {
      question: "This is a test question",
      choiceA:"correct",
      choiceB:"wrong",
      choiceC: "wrong",
      choiceD:"wrong",
      correct: "A"
    },
    {
      question: "Commonly used data types DO NOT include:",
      choiceA:"strings",
      choiceB:"booleans",
      choiceC: "alerts",
      choiceD:"numbers",
      correct: "C"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choiceA:"quotes",
      choiceB:"curly brackets",
      choiceC: "parentheses",
      choiceD:"square brackets",
      correct: "C"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choiceA:"numbers and strings",
      choiceB:"other arrays",
      choiceC: "booleans",
      choiceD:"all of the above",
      correct: "D"
    },
    {
      question:"String values must be enclosed within ____ when being assigned to variables.",
      choiceA:"commas",
      choiceB:"curly brackets",
      choiceC: "quotes",
      choiceD:"parentheses",
      correct: "C"
    },
    {
      question:"A very useful tool used during development and debugging for printing content to the debugger is:",
      choiceA:"JavaScript",
      choiceB:"terminal / bash",
      choiceC: "for loops",
      choiceD:"console.log",
      correct: "D"
    }
  ];

  var lastQI = questions.length-1;
  var currentQI = 0



function showQuestion() {
  var q = questions[currentQI];
  question.textContent = q.question
  choiceA.textContent = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC
  choiceD.innerHTML = q.choiceD
}

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display="none";
  quiz.style.display="block";
  showQuestion();
  setTimer();

}



function checkAnswer(answer) {
  if (answer === questions[currentQI].correct){
    yesBar.style.display="block";
    setTimeout(function () {
      yesBar.style.display='none';
    }, 1000);
  }
  else {
    noBar.style.display="block";
    setTimeout(function () {
      noBar.style.display='none';
    }, 1000);
    timeLeft -=10
  }

  if(currentQI < lastQI) {
    currentQI++;
    showQuestion();
  }

  else {
    showScore();
    quiz.style.display="none"
    //somehow go to record score page
  }

}






function setTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft;

    // if (answerWrong()) {
    //   timeLeft-=10
    // }

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}

function showScore() {
  recScore.style.display="block";
  var score = timeLeft
}

function saveScore() {
  recScore.style.display="none"
  dispScore.style.display="block"
}