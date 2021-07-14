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
        correct: b 
    },
    {
        question: `Which is not a JavaScript Data type?`,
        a: 'Number',
        b: 'Letters',
        c: 'Boolean',
        d: 'Undefined',
        correct: b
    },
    {
        question: `Console is a property of _____?` ,
        a: 'The DOM',
        b: 'The Internet',
        c: 'The JavaScript File',
        d: 'The Window',
        correct: d 
    },
    {
        question: 'Which is not a math operation in JavaScript?' ,
        a: `+`,
        b: `%`,
        c: `~`,
        d: `/`,
        correct: c
    },
    {
        question: `What does the this keyword refer to`  ,
        a: 'This test',
        b: 'The parent object',
        c: 'The parent function',
        d: 'This this',
        correct: b 
    },
    {
        question: `How do you write comments in JavaScript?` ,
        a: '//',
        b: '/* */',
        c: '<!-- -->',
        d: `a & b`,
        correct: d 
    }
]

var start = document.querySelector('.start');


function startQuiz() {
    
};

start.addEventListener('click', startQuiz())