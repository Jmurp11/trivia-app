/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { Observable, Subscription } from 'rxjs';
import { UtilitiesService } from '../../utilities.service';
import { Quiz, QuizService } from '../quiz.service';

enum Levels {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  quizList$: Observable<Quiz[]>;

  subSink: Subscription = new Subscription();
  difficulty: string;
  difficultyOpts: string[];

  constructor(
    private router: Router,
    private quizService: QuizService,
    public utitlities: UtilitiesService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.difficulty = Levels.EASY;
    this.difficultyOpts = [Levels.EASY, Levels.MEDIUM, Levels.HARD];
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  quizSelected(event: any): void {
    console.log(event);

    this.subSink.add(
      this.quizService
        .getQuiz(event.id, this.difficulty)
        .subscribe((q: any) => {
          this.router.navigate([`/quiz/${event.value}`], {
            state: { quiz: q.results, triviaType: event.value },
          });
        })
    );

    const analytics = getAnalytics();
    logEvent(analytics, 'start game', {
      trivia: event.value,
      difficulty: this.difficulty,
    });
    this.modalController.dismiss();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
