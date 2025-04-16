
const html = "html";
const angular = "angular";
const javascript = "javascript";
const react = "react";
const questions = [
    {
        question: "which is the language programmings?",
        answers: [
            { text: html, correct: false },
            { text: javascript, correct: true },
            { text: angular, correct: false },
            { text: react, correct: false },
        ]
    },
    {
        question: "which assign not to be change?",
        answers: [
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "nothing", correct: false },
        ]
    },
    {
        question: "which is the loop in array?",
        answers: [
            { text: "forEach", correct: false },
            { text:  "for", correct: false },
            { text: "map", correct: false },
            { text: "all of them", correct: true },
        ]
    },
    {
        question: "which is return array?",
        answers: [
            { text: "querySelector", correct: false },
            { text: "querySelectorAll", correct: true },
            { text: "getElementById", correct: false },
            { text: "getElementsByClassName", correct: true },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again";
    nextButton.style.display= "block"
}

function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
        showQuestion();
     }else{
        showScore();
     }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})




function startQuiz(){
    currentQuestionIndex = 0;
    score = 0 
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}


function resetState(){
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild)
        }
}

startQuiz()


// const quizeApp = document.querySelector(".quiz")
// questions.forEach((item)=>{
//     //console.log(item)
//     const hTwo = document.createElement('h2');
//     hTwo.setAttribute("id", "question");

//     hTwo.innerHTML = `
//         ${item.question}
//     `

//     const divAnswer = document.createElement('div');
//     divAnswer.innerHTML = `
//         <button class="btn">${item.answers[0].text}</button>
//             <button class="btn">${item.answers[1].text}</button>
//             <button class="btn">${item.answers[2].text}</button>
//             <button class="btn">${item.answers[3].text}</button>
//     `;
//     divAnswer.setAttribute("id", "answer-buttons");

//     const btnNext = document.createElement('button');
//     btnNext.innerHTML = "Next";
//     btnNext.setAttribute("id", "next-btn");

//     quizeApp.append(hTwo,divAnswer,btnNext)
// })


// const btns = document.querySelectorAll('.btn')
// const nextBtn = document.querySelector("#next-btn")
// console.log(btns)
// btns.forEach((item)=>{
//     item.addEventListener("click",()=>{
//         nextBtn.style.display = "block"
//     })
// })