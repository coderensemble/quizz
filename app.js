//Questions

let score = document.getElementById("score");
let questionElement = document.getElementById("mainQuestion");
let answerElements = [...document.getElementsByClassName("answer")];

let countingScore = 0;
let correctProp;
let currentQuestionIndex = 0;
// Mélanger les questions à chaque initialisation
let shuffledQuestions = quizJS.sort(() => Math.random() - 0.5);

function initialised() {
  score.textContent = countingScore;

  // Vérifiez si toutes les questions ont été posées
  if (currentQuestionIndex >= shuffledQuestions.length) {
    // Toutes les questions ont été posées
    if (countingScore === quizJS.length) {
      window.alert("Félicitations ! Vous avez terminé le quiz.");
      window.location.reload();
    }
    // Réinitialiser l'état du quiz
    currentQuestionIndex = 0;
    countingScore = 0;
    shuffledQuestions = quizJS.sort(() => Math.random() - 0.5);
    return;
  }

  // Sélectionner la première question
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Afficher la question
  questionElement.textContent = currentQuestion.question;

  // Definir la bonne réponse
  const goodAnswer = currentQuestion.resultIndex;
  correctProp = currentQuestion.prop[goodAnswer];
  console.log(correctProp);

  // Mélanger les propositions
  const shuffledProps = currentQuestion.prop.sort(() => Math.random() - 0.5);

  // Afficher les propositions
  answerElements.forEach((answerElement, index) => {
    answerElement.textContent = shuffledProps[index];
  });
}

function verifierReponse(e) {
  let valeurCliquee = e.target.textContent;

  if (valeurCliquee !== correctProp) {
    window.alert(`Dommage, la réponse était : ${correctProp}! Vous avez réussi ${countingScore} questions.`);
    countingScore = 0;
  } else {
    window.alert("Bravo !");
    countingScore++;
  }

  currentQuestionIndex++;
  initialised();
}

answerElements.forEach((answerElement) => {
  answerElement.addEventListener("click", verifierReponse);
});

initialised();
