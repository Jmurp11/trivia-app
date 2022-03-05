/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
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
    private modalController: ModalController,
    private toastController: ToastController
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
    this.subSink.add(
      this.quizService
        .getQuiz(event.id, this.difficulty)
        .subscribe(async (q: any) => {
          if (q.results.length === 0) {
            const toast = await this.toastController.create({
              message: `Sorry, looks like there is no ${event.value} quiz at the ${this.difficulty} level!  
                You can add some questions at
                <a target="_blank" rel="noopener noreferrer" href="https://opentdb.com/" style="color: 'slate'">Open Trivia DB</a>`,
              duration: 4000,
              color: 'secondary',
              buttons: [
                {
                  text: 'Dismiss',
                  role: 'cancel',
                },
              ],
            });
            toast.present();
            return;
          }

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
