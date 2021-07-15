/* Create an object that contains the questions, answers and correct answer
quiz = {
    question:  ,
    a: ,
    b: ,
    c: ,
    d: ,
    correct: a 
}
set the correct answer with id of correct. then an if statement that says if button clicked has id of correct, then correct answer, else, wrong answer. 

start on quiz start, when button is clicked you clear all elements within the body tag. so all of bodys children. load quiz on first question. when last questoin of quiz is answered, then we stop the timer and display finished page which shows score based on correct answers, (stretch, also time left and then difficulty). can enter initials on finished page, once entered takes you to high score page. on high score page can either clear or go back to start. 

stretch goals: have user decide how many questions, maybe have a easy, medium and difficulty. different difficulties have multipliers to the score. 
*/

var quiz = [
    
    {
        question: `JavaScript is a client-side and server-side scripting language inserted into ____ pages and is understood by web browsers. `,
        a: 'CSS',
        b: 'HTML',
        c: 'JavaScript',
        d: 'Web',
        correct: 'answ-b' 
    },
    {
        question: `Which is not a JavaScript Data type?`,
        a: 'Number',
        b: 'Letters',
        c: 'Boolean',
        d: 'Undefined',
        correct: 'answ-b'
    },
    {
        question: `Console is a property of _____?`,
        a: 'The DOM',
        b: 'The Internet',
        c: 'The JavaScript File',
        d: 'The Window',
        correct: 'answ-d' 
    },
    {
        question: 'Which is not a math operation in JavaScript?' ,
        a: `+`,
        b: `%`,
        c: `~`,
        d: `/`,
        correct: 'answ-c'
    },
    {
        question: `What does the this keyword refer to`  ,
        a: 'This test',
        b: 'The parent object',
        c: 'The parent function',
        d: 'This this',
        correct: 'answ-b' 
    },
    {
        question: `How do you write comments in JavaScript?` ,
        a: '//',
        b: '/* */',
        c: '<!-- -->',
        d: `a & b`,
        correct: 'answ-d' 
    },
    {
        question: `What is JavaScript?` ,
        a: 'Something Groovy',
        b: 'A Scribe',
        c: 'Object Based Programming Language',
        d: `A Reading Language`,
        correct: 'answ-c'
    },
    {
        question: `x*y is what kind of math operation?` ,
        a: 'Multiplication',
        b: 'Division',
        c: 'Addition',
        d: `Subtraction`,
        correct: 'answ-a'
    }, 
    {
        question: `How do you target an id element on a HTML page in Javascript?` ,
        a: 'grabElement',
        b: 'getElementById',
        c: 'getId',
        d: `idGetByElement`,
        correct: 'answ-b'
    },
    {
        question: `What does return do?` ,
        a: 'Stops the function',
        b: 'Returns a value',
        c: 'Goes back to the start',
        d: `a & b`,
        correct: 'answ-d'
    }, 
];
var bodyEl = document.querySelector('body');
var start = document.querySelector('.start');
var initialScreen = document.querySelector('#start-screen');
var quizContainer = document.getElementById('quiz-container');
var finishedScreen = document.querySelector('.finished');
var timeLeft = document.querySelector('.time-left');
var rightWrong = document.querySelector('.right-wrong');

var nextQuestionTimer = 2;
var timer = 60;
var right = 0;
var wrong = 0;
var currentQuestion = 0;


var qQ = document.getElementById('quiz-question');
var answA = document.getElementById('answ-a');
var answB = document.getElementById('answ-b');
var answC = document.getElementById('answ-c');
var answD = document.getElementById('answ-d');

var quizButton = document.querySelectorAll('.quiz-button');



function setTime() {

    var timeInterval = setInterval(function() {
        if(timer > 0){
        timer--;
        timeLeft.textContent = timer;
        } else {
            
            clearInterval(timeInterval)
        }
        }, 1000)   
    }

function nextQuestion() {
        var nextQuestionTimer = 2;
        setInterval(function(){
            nextQuestionTimer--
            if(nextQuestionTimer === 0 && currentQuestion < quiz.length -1 ){
                currentQuestion++;
                rightWrong.setAttribute('data-state', 'hidden')
                loadQuiz();
                } else if(nextQuestionTimer === 0 && currentQuestion === quiz.length -1) {
                timeLeftFinal = timer;
                console.log(timeLeftFinal);
                quizContainer.setAttribute('data-state', 'hidden');
                finishedScreen.setAttribute('data-state', 'shown');
                }
            clearInterval(nextQuestion)
        }, 1000)
    }

function startQuiz() {
    // while(bodyEl.firstChild) {
    //     bodyEl.removeChild(bodyEl.firstChild);
    // }
    if (initialScreen.getAttribute('data-state') === "shown"){
        initialScreen.setAttribute('data-state', 'hidden')
        quizContainer.setAttribute('data-state', 'shown')
        setTime();
        loadQuiz();
    } else {
        return
    }
}

function change(event){
    var targetEl = event.target;
    if (targetEl.getAttribute('data-is') === "true"){
        rightWrong.setAttribute('data-state', 'shown')
        rightWrong.textContent = "Right";
        right++;
        
    } else {
        rightWrong.setAttribute('data-state', 'shown')
        rightWrong.textContent = "Wrong"
        wrong++;
    }
    for (var i = 0; i < quizButton.length; i++) {
    quizButton[i].setAttribute('data-is', "wrong")
    }
    nextQuestion();
    }


function loadQuiz() {
    var currentQuiz = quiz[currentQuestion];
    console.log(currentQuiz)
    var isCorrect = document.getElementById(currentQuiz.correct);
    console.log(isCorrect)

    qQ.textContent = currentQuiz.question;
    answA.textContent = currentQuiz.a;
    answB.textContent = currentQuiz.b;
    answC.textContent = currentQuiz.c;
    answD.textContent = currentQuiz.d;

    isCorrect.setAttribute('data-is', 'true');


    
}

quizButton[0].addEventListener('click', change);
quizButton[1].addEventListener('click', change);
quizButton[2].addEventListener('click', change);
quizButton[3].addEventListener('click', change);
start.addEventListener('click', startQuiz)
