let score = 0;
let currentQuestionIndex = 0;

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
    if(userAnswer = currentQuestionIndex){
      score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}
