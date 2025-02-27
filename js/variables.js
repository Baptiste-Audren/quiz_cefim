let currentQuestionIndex = null;
let currentAnswer = null;
let score = 0;

const startButton = document.getElementById("baptisteQuiz_startButton");
const nextButton = document.getElementById("baptisteQuiz_nextButton");
const correctionButton = document.getElementById("baptisteQuiz_correctionButton");
const restartButton = document.getElementById("baptisteQuiz_restartButton");

const questionText = document.getElementById("baptisteQuiz_questionText");
const answersContainer = document.getElementById("baptisteQuiz_answersContainer");

const resultText = document.getElementById("baptisteQuiz_results");
const resultList = document.getElementById("baptisteQuiz_correction");
const resultScore = document.getElementById("baptisteQuiz_score");

const errorMessage = document.getElementById("baptisteQuiz_errorMessage");