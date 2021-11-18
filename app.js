//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/ui.js";

/**
 * 
 * @param {Quiz} quiz objeto Quiz principal
 * @param {UI} ui objeto UI
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.getScore(quiz.score, quiz.questions.length);
    } else {
        ui.showQuestion(quiz.getQuestionIndex().question);
        ui.showChoices(quiz.getQuestionIndex().choices, (e) => {
            console.log(quiz.guess(e));
            renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex, quiz.questions.length);
    }
}

function main() {

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz, ui);

}

main();