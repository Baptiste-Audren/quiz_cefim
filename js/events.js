// Bouton "Commencer !" cliqué :
startButton.addEventListener("click", Start);

// Bouton "Question suivante" cliqué :
nextButton.addEventListener("click", function(e) {
    e.preventDefault();

    if(currentAnswer == null){
        ShowError("Vous devez choisir une réponse avant de valider");
    }else{
        ClearError();

        questions[currentQuestionIndex].answer = currentAnswer;

        if(currentAnswer == questions[currentQuestionIndex].correct){
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            ShowQuestion();
        } else {
            ShowResult();
        }

    }

});

// Bouton "Afficher la correction" cliqué :
correctionButton.addEventListener("click", function(e) {
    if(this.dataset.state == "opened"){
        resultList.hide();
        this.dataset.state = "closed";
        this.innerText = "Voir la correction";
    }else{
        resultList.show();
        this.dataset.state = "opened";
        this.innerText = "Fermer la correction";
    }
});

// Bouton "Recommencer" cliqué :
restartButton.addEventListener("click", function(e) {
    e.preventDefault();

    resultText.innerText = "";

    Start();
});