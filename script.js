//Define variables

var highScoreEl = document.getElementById("highScore")
var timerEl = document.getElementById("timer")

var yesBar = document.getElementById("correctBar")
var noBar = document.getElementById("wrongBar")

var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var recScore = document.getElementById("recordScore")
var displayScore = document.getElementById("displayScore")
var question = document.getElementById("question")

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

var timeLeft = 75;

var timerInterval = -1

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


  //running the quiz


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
  }

}

//Timer

function setTimer() {
    timerInterval = setInterval(function() {
    if(timeLeft <=0){
      clearInterval(timerInterval);
      timerEl.innerHTML = "Timer: 0";
      showScore();
    }
    else {
      timerEl.innerHTML = "Timer: " + timeLeft
    }
    timeLeft-= 1;
  }, 1000);
}


function showScore() {
  clearInterval(timerInterval);
  timerInterval = -1;
  quiz.style.display="none";
  recScore.style.display="block";
  //var score = timeLeft
}

function logScore() {
  recScore.style.display="none";
  displayScore.style.display="block";


  var scoreText = scoreInput.value.trim();

  if (scoreText === "") {
    return;
  }

  scores.push(scoreText);
  scoreInput.value = "";

  storescores();
  renderscores();
}





//loggin high scores


var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");

var scores = [];

init();

function renderscores() {
  scoreList.innerHTML = "";

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }
}

function init() {
  var storedscores = JSON.parse(localStorage.getItem("scores"));
  if (storedscores !== null) {
    scores = storedscores;
  }
  renderscores();
}

function storescores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  return
});






function clearScores() {
  localStorage.clear();
  scores=[]
  storescores();
  renderscores();
}


function restartQuiz() {
  location.reload();
}















//logging high scores

// function renderScores() {
//   scoreList.innerHTML = "";
//   for (var i = 0; i < scores.length; i++) {
//     var score = scores[i];
//     var li = document.createElement("li");
//     li.textContent = score;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Remove";

//     li.appendChild(button);
//     scoreList.appendChild(li);
//   }
// }

// function init() {
//   var storedScores = JSON.parse(localStorage.getItem("scores"));
//   if (storedScores !== null) {
//     scores = storedScores;
//   }
//   renderScores();
// }

// function storeScores() {
//   localStorage.setItem("scores", JSON.stringify(scores));
// }


// function onClick() {
//   var scoreText = scoreInput.value.trim();
//   if (scoreText === "") {
//     return;
//   }
//   scores.push(scoreText);
//   scoreInput.value = "";
//   storeScores();
//   renderScores();
//   init();
// }


// submit.addEventListener("click", function(event) {
//   event.preventDefault();
//   var scoreText = scoreInput.value.trim();
//   if (scoreText === "") {
//     return;
//   }
//   scores.push(scoreText);
//   scoreInput.value = "";
//   storeScores();
//   renderScores();
// });