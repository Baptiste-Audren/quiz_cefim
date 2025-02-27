// Fonctions de fonctionnement

HTMLElement.prototype.show = function () {
    this.style.display = "block";
};

HTMLElement.prototype.hide = function () {
    this.style.display = "none";
};

function Clear(){
    nextButton.disabled = true;
    answersContainer.innerHTML = "";
}

function ShowError(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function ClearError(){
    errorMessage.style.display = "none";
    errorMessage.innerText = "";
}


// Fonctions utiles au script

function Start(){
    currentQuestionIndex = 0;
    currentAnswer = null;
    score = 0;

    startButton.hide();
    restartButton.hide();
    correctionButton.hide();
    resultList.hide();
    nextButton.show();
    ShowQuestion();
}

function ShowQuestion(){
    Clear();

    questionText.innerText = questions[currentQuestionIndex].question;

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("baptiste", "button", "quiz", "answer");
        button.addEventListener("click", function() { 
            SelectAnswer(this, index); 
        });        
        answersContainer.appendChild(button);
    });
}

function SelectAnswer(button, index){
    const allButtons = document.querySelectorAll(".baptiste.button.quiz.answer");

    allButtons.forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
    nextButton.disabled = false;
    currentAnswer = index;
}

function ShowResult() {
    let maxScore = questions.length;
    let message = "";

    switch (true) {
        case score === maxScore:
            message = "🎉 Félicitations ! Tu as réussi à terminer ce quiz sans aucune erreur. Très bon travail !";
            break;
    
        case score >= maxScore * 0.8:
            message = "👏 Très bien joué ! Tu as obtenu " + score + " sur " + maxScore + ". Encore un petit effort pour le sans-fautes !";
            break;
    
        case score >= maxScore * 0.5:
            message = "🙂 Pas mal ! Tu as eu la note de " + score + " sur " + maxScore + ". Entraine-toi encore un peu pour t'améliorer.";
            break;
    
        default:
            message = "😕 Tu as obtenu " + score + " sur " + maxScore + ". Ne te décourages pas, essaye encore !";
    }
    
    questions.forEach(question => {
        const main = document.createElement("div");
        main.classList.add("baptisteQuiz", "result", "main");
        resultList.appendChild(main);
    
        const q = document.createElement("p");
        q.classList.add("baptisteQuiz", "result", "question");
        q.innerText = question.question;
        main.appendChild(q);
    
        let answers = question.answers;
    
        answers.forEach((answer, index) => {
    
            const a = document.createElement("p");
            a.classList.add("baptisteQuiz", "result", "answer", (index == question.correct ? "good" : ( index == question.answer ? "bad" : null ) ));
            a.innerText = answer;
            main.appendChild(a);
            
        });
    });

    questionText.innerText = "Quiz terminé !";
    resultText.innerText = message;
    answersContainer.innerHTML = "";
    nextButton.hide();
    correctionButton.show();
    restartButton.show();
}