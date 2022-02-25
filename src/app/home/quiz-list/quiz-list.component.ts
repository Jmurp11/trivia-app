import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Quiz } from '../quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  @Input()
  quizList$: Observable<Quiz[]>;

  @Output()
  quizSelect = new EventEmitter<Quiz>();

  constructor() {}

  ngOnInit() {}

  quizSelected(quiz: Quiz) {
    this.quizSelect.emit(quiz);
  }
}
