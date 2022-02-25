/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ResultDetailComponent } from '../result-detail/result-detail.component';

enum MessageOpts {
  PERFECT = 'Trivia Master! Congrats!',
  ABOVE_AVG = 'Impressive!',
  BELOW_AVG = 'Feels bad man...',
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
  };
  score: number;
  message: string;
  isPassing: boolean;

  constructor(
    private router: Router,
    public routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.result = this.router.getCurrentNavigation().extras.state.result;
    this.details = this.router.getCurrentNavigation().extras.state.details;
    this.score = (this.result.score / this.result.length) * 100;
    this.message = this.setMessage(this.score);
    this.isPassing = this.score >= 70 ? true : false;
  }

  setMessage(score: number) {
    if (score === 100) {
      return MessageOpts.PERFECT;
    } else if (score >= 70) {
      return MessageOpts.ABOVE_AVG;
    } else if (score < 70) {
      return MessageOpts.BELOW_AVG;
    } else {
      return MessageOpts.BELOW_AVG;
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
    return await modal.present();
  }

  backToHome() {
    this.router.navigate(['/home']);
  }
}
