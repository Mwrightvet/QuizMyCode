
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

// Global variables
var currentQuestionIndex = 0;
var score = 0;
var timer;

// Function to start the game
function startGame() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();
    startTimer();
}

// Function to display a question
function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = currentQuestion.question;

    // Display answer choices based on your HTML structure
    document.getElementById("a").nextSibling.textContent = currentQuestion.choices[0];
    document.getElementById("b").nextSibling.textContent = currentQuestion.choices[1];
    document.getElementById("c").nextSibling.textContent = currentQuestion.choices[2];
    document.getElementById("d").nextSibling.textContent = currentQuestion.choices[3];
}

// Function to check the selected answer
function checkAnswer(choiceIndex) {
    var currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer is correct
    if (choiceIndex === currentQuestion.correct) {
        score++;
    } else {
        // Subtract time from the clock (implement this part)
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        // Display the next question
        showQuestion();
    } else {
        // End the game if all questions are answered
        endGame();
    }
}

// Function to start the timer
function startTimer() {
    // Implement the timer logic here
    timer = setInterval(function () {
        // Update timer display and check if it reaches 0
    }, 1000);
}

// Function to end the game
function endGame() {
    // Stop the timer
    clearInterval(timer);
    document.getElementById("questions").style.display = "none";
    document.getElementById("gameOverContainer").style.display = "block";
    document.getElementById("score").innerText = score;
}

// Function to restart the game
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("gameOverContainer").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
}

// Function to check the selected answer and move to the next question
function checkAndMoveToNext() {
    // Get the selected choices
    var selectedChoices = [];
    if (document.getElementById("a").checked) selectedChoices.push(0);
    if (document.getElementById("b").checked) selectedChoices.push(1);
    if (document.getElementById("c").checked) selectedChoices.push(2);
    if (document.getElementById("d").checked) selectedChoices.push(3);

    // Check if any choice is selected
    if (selectedChoices.length === 0) {
        // Display an alert or handle the case where no choice is selected
        alert("Please select an answer before moving to the next question.");
        return;
    }

    // Check the answers and move to the next question
    selectedChoices.forEach(function (choice) {
        checkAnswer(choice);
    });
}