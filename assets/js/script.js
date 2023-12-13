// Quiz Questions and Choices
var questions = [
    {
        question: "What does the acronym 'JSON' stand for?",
        choices: [
            "JavaScript Object Notation",
            "JavaScript Output Network",
            "Java Standard Object Notation",
            "Java Systematic Output Namespace"
        ],
        correct: 0,
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        choices: [
            "typeOf variable",
            "varType(variable)",
            "typeof variable",
            "checkType(variable)"
        ],
        correct: 2,
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        choices: [
            "array.pop()",
            "array.removeLast()",
            "array.deleteLast()",
            "array.spliceLast()"
        ],
        correct: 0,
    },
    {
        question: "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
        choices: [
            "To stop the event propagation",
            "To cancel the default action of an event",
            "To force an event to occur",
            "To log events to the console"
        ],
        correct: 1,
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        choices: [
            "==",
            "===",
            "=",
            "!="
        ],
        correct: 1,
    },
    {
        question: "Inside of which HTML element do we store the JavaScript?",
        choices: [
        "<javaScript>",
        "<scriptElement>",
        "<js>",
        "<script>"
        ],
        correct: 3,
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        choices: [ 
            "response.write('Hello World')",
            "'Hello World'",
            "document.write('Hello World')",
            "('Hello World')"
        ],
        correct: 2,
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML Below?",
        choices: [ 
            "response.write('Hello World')",
            "'Hello World'",
            "document.write('Hello World')",
            "('Hello World')"
        ],
        correct: 2,
    },
    {
        question: "Where is the correct place to insert javaScript? ",
        choices: [
            "Any section works",
            "The <body> section",
            "The <head> section",
            "The <footer> section"
        ],
        correct: 1,
    },
    {
        question: "What is the syntax for an external script 'xyz.js' ",
        choices: [
            "<script src='xyz.js'",
            "<script href='xyz.js'",
            "<script name='xyx.js'",
            "<script src:'xyx.js'"
        ],
        correct: 0,
    },
    {
        question: "How do you create a function?",
        choices: [
            "function:myFunction()",
            "function= myFunction()",
            "myFunction() function",
            "function myFunction()"
        ],
        correct: 3,
    },
    {
        question: "Inside of which HTML element do we link an external stylesheet?",
        choices: [
            "<link rel='stylesheet' type='text/css' href='styles.css'>",
            "<style src='external.css'>",
            "<css href='external.css'>",
            "<external-styles src='styles.css'>"
        ],
        correct: 0,
    },
    {
        question: "What does the 'DOM' stand for in JavaScript?",
        choices: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Output Mechanism",
            "Digital Object Memory"
        ],
        correct: 0,
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: [
            "var",
            "let",
            "const",
            "variable"
        ],
        correct: 0,
    },
    {
        question: "What is the purpose of the 'console.log()' function in JavaScript?",
        choices: [
            "To print messages to the console",
            "To display alerts",
            "To create a new variable",
            "To define a function"
        ],
        correct: 0,
    },
    {
        question: "How do you comment a single line of code in JavaScript?",
        choices: [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->"
        ],
        correct: 0,
    }
];

var currentQuestionIndex = 0;
var score = 0;
var timerValue = 60; // You can set the initial timer value as per your requirement
var timer;

// Function to start the quiz
function startQuiz() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    setNextQuestion();
    timer = setInterval(function () {
        if (timerValue <= 0 || currentQuestionIndex === questions.length) {
            endGame();
        } else {
            document.getElementById('timerValue').innerText = timerValue;
            timerValue--;
        }
    }, 1000);
}

// Function to set and display the next question
function setNextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById('questionText').innerText = currentQuestion.question;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        document.getElementById('choice' + (i + 1)).innerText = currentQuestion.choices[i];
    }
}

// Function to check user's answer and move to the next question
function checkAndMoveToNext() {
    var userChoice = getSelectedChoice();
    if (userChoice === questions[currentQuestionIndex].correct) {
        score++;
    } else {
        timerValue -= 10; // Deduct 10 seconds for incorrect answers
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        endGame();
    }
}

// Function to get the user's selected choice
function getSelectedChoice() {
    var choices = document.getElementsByName('answer');
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            return i;
        }
    }
    return -1; // Return -1 if no choice is selected
}

// Function to end the quiz
function endGame() {
    clearInterval(timer);
    document.getElementById('questions').style.display = 'none';
    document.getElementById('gameOverContainer').style.display = 'block';
    document.getElementById('finalScore').innerText = score;
}

// Save initials and score
function saveScore() {
    var initials = document.getElementById('initials').value;
    // You can implement logic to save the score and initials as per your requirements
    console.log("Initials: " + initials + ", Score: " + score);
}

// Rrestart the quiz
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    timerValue = 60; // Reset the timer value
    document.getElementById('gameOverContainer').style.display = 'none';
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('initials').value = '';
    startQuiz();
}

// Initial setup
document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('nextBtn').addEventListener('click', checkAndMoveToNext);
document.getElementById('saveBtn').addEventListener('click', saveScore);
document.getElementById('restartBtn').addEventListener('click', restartGame);