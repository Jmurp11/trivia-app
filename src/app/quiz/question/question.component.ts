import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../Question';
import { UtilitiesService } from '../../utilities.service';

interface OutputVal {
  question: string;
  selected: string;
  correct: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input()
  question: Question;

  @Input()
  questionNum: number;

  @Output()
  newAnswerEvent = new EventEmitter<OutputVal>();

  answerList: string[];

  constructor(public utilities: UtilitiesService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question) {
      this.question.question = this.utilities.cleanText(this.question.question);
      this.answerList = this.shuffleArray([
        ...this.question.incorrect_answers,
        this.question.correct_answer
      ]);
    }
  }

  answerSelected(answer: string) {
    this.newAnswerEvent.emit({
      question: this.question.question,
      selected: this.utilities.cleanText(answer),
      correct: this.utilities.cleanText(this.question.correct_answer)
    });
  }

  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
