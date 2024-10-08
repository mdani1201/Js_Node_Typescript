let score = 0;
let currentQuestionIndex = 0;
let quizContainer = document.getElementById("quiz-container");
let result = document.getElementById("result");

let questions = [
  {
    question: "Was ist die Hauptstadt von Ungarn?",
    answers: ["Paris","London","Berlin", "Budapest"],
    correctAnswer: 3
  },
  {
    question: "Welche Farbe hat eine Zitrone?",
    answers: ["Gelb","Blau","Orange", "Grün"],
    correctAnswer: 0
  },
  {
    question: "Wie viele Beine hat ein Hund?",
    answers: ["2","6","4", "8"],
    correctAnswer: 2
  },
];

const displayQuestion = () => {
  if(currentQuestionIndex >= questions.length){
    quizContainer.hidden = true;
    result.hidden = false;
    document.getElementById("score").textContent = score;
    return;
  }

  let question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question; 
  
  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach((a,i) => {
    let answerButton = document.createElement("button");
    answerButton.textContent = a;
    answerButton.onclick = () => checkAnswer(i);
    answersDiv.appendChild(answerButton);
  })
}
displayQuestion();

const checkAnswer = (userAnswer) => {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if(userAnswer == correctAnswer){
      score++;
    }
    nextQuestion();
}

let nextQuestion = () => {
  currentQuestionIndex++;
  displayQuestion();
}

let restart = () => {
  currentQuestionIndex = 0;
  quizContainer.hidden = false;
  result.hidden = true;
  displayQuestion();
}