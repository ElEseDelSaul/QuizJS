// @ts-check      utiliza el validador de codigo TS  
import { Question } from './question.js';
export class Quiz {
    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions recibe arreglo de objetos Question
     */
    constructor(questions) {
        this.questions = questions;
    }
    /**
     * @returns {Question} regresa la pregunta encontrada
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    /**
     * 
     * @param {string} answer Respuesta de la pregunta
     */
    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    /**
     * @returns {boolean} Verifica si el Quiz ha llegado a su fin
     */
    isEnded(){
        return this.questions.length === this.questionIndex;
    }
}