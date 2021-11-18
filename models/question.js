export class Question {
    /**
     * 
     * @param {string} question Define la pregunta 
     * @param {string[]} choices Se establecen las posibles opciones
     * @param {string} answer Respuesta de la pregunta
     */
    constructor(question,choices,answer){  //Propiedades
        this.question = question,
        this.choices = choices,
        this.answer = answer
    }
    //Metodos
    /**
     * 
     * @param {string} choice Opcion para evaluar
     * @returns {boolean} regresa un true si la opcion es verdadera
     */
    correctAnswer(choice){
        return choice === this.answer;
    }
}


//const question = new Question("Cual es tal cosa",["a","b","c"],"c");
//console.log(question.correctAnswer("c"));