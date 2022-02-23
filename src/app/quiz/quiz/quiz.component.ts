import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questions: Question[];
  currentQuestion: Question;
  currentQIndex: number;
  score: number;
  quizLength: number;
  results: {
    question: string;
    selected: string;
    correct: string;
  }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.score = 0;
    this.questions = this.router.getCurrentNavigation().extras.state.quiz;
    this.quizLength = this.questions.length;
    this.setCurrentQuestion();
    console.log(this.questions);
  }

  questionAnswered(event: any): void {
    this.results.push({
      question: this.currentQuestion.question,
      selected: event.selected,
      correct: event.correct
    });
    this.questions = this.removeQuestion(
      this.questions,
      this.questions[this.currentQIndex].question
    );

    this.incrementScore((event.correct === event.selected));
    this.setCurrentQuestion();
  }

  indexOfNextQuestion(q: Question[]): number {
    return Math.floor(Math.random() * q.length);
  }

  setCurrentQuestion() {
    if (this.questions.length <= 0) {
      const result = {
        results: this.results,
        score: this.score,
        length: this.quizLength
      };
      this.router.navigate(['result'], { state: { result } });
      return;
    }
    this.currentQIndex = this.indexOfNextQuestion(this.questions);
    this.currentQuestion = this.questions[this.currentQIndex];
  }

  incrementScore(isTrue: boolean) {
    if (isTrue) {
      this.score = this.score + 1;
    }
  }

  removeQuestion(q: Question[], question: string): Question[] {
    return q.filter((el) => el.question !== question);
  }
}
