/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizService } from '../quiz.service';
import { UtilitiesService } from '../../utilities.service';
import { ModalController } from '@ionic/angular';
import { getAnalytics, logEvent } from 'firebase/analytics';

enum Levels {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  @Input()
  quizList: Quiz[];

  difficulty: string;
  difficultyOpts: string[];

  constructor(
    private router: Router,
    private quizService: QuizService,
    public utitlities: UtilitiesService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.quizList = this.quizList
      .map((q) => ({ id: q.id, value: this.utitlities.cleanText(q.value) }))
      .sort((a, b) => a.value.localeCompare(b.value));
    this.difficulty = Levels.EASY;
    this.difficultyOpts = [Levels.EASY, Levels.MEDIUM, Levels.HARD];
  }

  selectQuizType(selection: Quiz): void {
    this.quizService
      .getQuiz(selection.id, this.difficulty)
      .subscribe((q: any) => {
        this.router.navigate([`/quiz/${selection.value}`], {
          state: { quiz: q.results, triviaType: selection.value },
        });
      });

    const analytics = getAnalytics();
    logEvent(analytics, 'start game', {
      trivia: selection.value,
      difficulty: this.difficulty,
    });
    this.modalController.dismiss();
  }
}
