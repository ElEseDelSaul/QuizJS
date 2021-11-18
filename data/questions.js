import { Question } from '../models/question.js';
import { data } from './data.js';
//Transformar la data a Objetos QUESTION
export const questions = data.map(e => new Question(e.question,e.choices,e.answer));
