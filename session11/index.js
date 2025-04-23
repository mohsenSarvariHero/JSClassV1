const html = "html";
const angular = "angular";
const javascript = "javascript";
const react = "react";

// const questionss = [
//     {
//         question : "question 1 ?",
//         answers : [
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : true},
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : false},
//         ]
//     },
//     {
//         question : "question 2 ?",
//         answers : [
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : true},
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : false},
//         ]
//     },
//     {
//         question : "question 1 ?",
//         answers : [
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : true},
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : false},
//         ]
//     },
//     {
//         question : "question 1 ?",
//         answers : [
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : true},
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : false},
//         ]
//     },
//     {
//         question : "question 1 ?",
//         answers : [
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : true},
//             {text : "answer1" , correct : false},
//             {text : "answer1" , correct : false},
//         ]
//     },
//     {

//     },
//     {

//     }
// ]


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
const skipButton = document.getElementById("skip-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0 
    nextButton.innerHTML = "Next" 
    showQuestion();
}

function showQuestion(){
    resetState();
    skipButton.style.display = "block"
    let currentQuestion = questions[currentQuestionIndex];
    /*
    {
        question : " ?"
        answers : [
            {},
            {},
            {},
            {},
        ]
    }

    */
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    // 1. ?
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');//<button></button>
        button.innerHTML = answer.text;//<button>answer1</button>
        button.classList.add("btn");//<button class="btn">answer1</button>
         if(answer.correct){
           //<button class="btn" data-correct="true">JavaScript</button>

            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

startQuiz()


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}



function selectAnswer(e){
    console.log(e)
    const selectedBtn = e.target;
    console.log(selectedBtn)
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect")
    }
    // for(let i = 0; i < answerButton.children.length; i++) {
    //     const button = answerButton.children[i];
    //    
    // }
    //console.log(answerButton.children);
    //console.log(Array.from(answerButton.children));
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
    skipButton.style.display = "none"
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){//3<4
        handleNextButton();
    }else{
        startQuiz();
    }
})

function handleNextButton(){
     currentQuestionIndex++;//4
     if(currentQuestionIndex < questions.length){//4 < 4
        showQuestion();
     }else{
        showScore();
     }
}

skipButton.addEventListener("click",handleNextButton)

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again";
    nextButton.style.display= "block"
}


// startQuiz()


// // const quizeApp = document.querySelector(".quiz")
// // questions.forEach((item)=>{
// //     //console.log(item)
// //     const hTwo = document.createElement('h2');
// //     hTwo.setAttribute("id", "question");

// //     hTwo.innerHTML = `
// //         ${item.question}
// //     `

// //     const divAnswer = document.createElement('div');
// //     divAnswer.innerHTML = `
// //         <button class="btn">${item.answers[0].text}</button>
// //             <button class="btn">${item.answers[1].text}</button>
// //             <button class="btn">${item.answers[2].text}</button>
// //             <button class="btn">${item.answers[3].text}</button>
// //     `;
// //     divAnswer.setAttribute("id", "answer-buttons");

// //     const btnNext = document.createElement('button');
// //     btnNext.innerHTML = "Next";
// //     btnNext.setAttribute("id", "next-btn");

// //     quizeApp.append(hTwo,divAnswer,btnNext)
// // })


// // const btns = document.querySelectorAll('.btn')
// // const nextBtn = document.querySelector("#next-btn")
// // console.log(btns)
// // btns.forEach((item)=>{
// //     item.addEventListener("click",()=>{
// //         nextBtn.style.display = "block"
// //     })
// // })