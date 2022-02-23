/* eslint-disable @typescript-eslint/naming-convention */
export interface Question {
 category: string;
 type: string;
 difficulty: string;
 question: string;
 correct_answer: string;
 incorrect_answers: string[];
}

export enum AnswerColor {
  default = 'primary',
  correct = 'success',
  incorrect = 'danger'
}
