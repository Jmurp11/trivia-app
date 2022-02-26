/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { ResultDetailComponent } from '../result-detail/result-detail.component';

enum MessageOpts {
  PERFECT = 'Trivia Master! Congrats!',
  ABOVE_AVG = 'Impressive!',
  BELOW_AVG = 'Might be time to start studying...',
  BAD = 'Feels bad man...',
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result: {
    score: number;
    type: string;
    length: number;
  };
  details: {
    question: string;
    selected: string;
    correct: string;
  }[];
  score: number;
  message: string;
  isPassing: string;
  messageOpts: string[] = [];

  constructor(
    private router: Router,
    public routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    if (!this.router.getCurrentNavigation().extras.state) {
      this.backToHome();
    }
    this.result = this.router.getCurrentNavigation().extras.state.result;
    this.details = this.router.getCurrentNavigation().extras.state.details;

    this.score = (this.result.score / this.result.length) * 100;
    this.message = this.setMessage(this.score);
    this.messageOpts = [
      MessageOpts.PERFECT,
      MessageOpts.ABOVE_AVG,
      MessageOpts.BELOW_AVG,
      MessageOpts.BAD,
    ];
  }

  setMessage(score: number) {
    if (score === 100) {
      return MessageOpts.PERFECT;
    } else if (score >= 80 && score < 100) {
      return MessageOpts.ABOVE_AVG;
    } else if (score >= 60 && score < 80) {
      return MessageOpts.BELOW_AVG;
    } else if (score < 60) {
      return MessageOpts.BAD;
    } else {
      return;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultDetailComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        details: this.details,
      },
    });

    const analytics = getAnalytics();
    logEvent(analytics, 'check results');

    return await modal.present();
  }

  backToHome() {
    this.router.navigate(['/home']);
  }
}
