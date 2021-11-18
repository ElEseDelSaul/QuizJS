export class UI {
    constructor() { }
    /**
     * 
     * @param {string} text recibe la question
     */
    showQuestion(question) {
        //Seleccionando la etiqueta HTML
        const questionTitle = document.getElementById("question");
        //Asignar valor de question
        questionTitle.innerHTML = question;
    }

    /**
     * 
     * @param {string[]} choices opciones de la pregunta
     */
    showChoices(choices, callback) {
        const choiceContainer = document.getElementById("choices");
        //Resetear container
        choiceContainer.innerHTML = '';
        choices.forEach(e => {
            const btnChoice = document.createElement("button");
            btnChoice.innerText = e;
            btnChoice.className = "button";
            btnChoice.addEventListener('click', () => { callback(e) });
            choiceContainer.append(btnChoice);
            //console.log(e);
        });
    }
    /**
     * 
     * @param {number} score puntaje de quiz
     * @param {number} total valor total de questions
     */
    getScore(score, total) {
        const quizElement = `
            <h1>Result</h1>
            <h2>Your score: ${score} of ${total}</h2>
        `;
        const quizMain = document.getElementById("quiz");
        quizMain.innerHTML = quizElement;
    }
    /**
     * 
     * @param {number} currentIndex posicion actual del Quiz
     * @param {number} total valor de numero total de quesitons
     */
    showProgress(currentIndex, total){
        const scoreContainer = document.getElementById('progress');
        const element = `Question ${currentIndex +1} of ${total}`;
        scoreContainer.innerHTML = element;
    }

}