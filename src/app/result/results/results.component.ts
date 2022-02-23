/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

enum MessageOpts {
  PERFECT = 'Trivia Master! Congrats!',
  ABOVE_AVG = 'Impressive!',
  BELOW_AVG = 'Better luck next time!',
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
  score: number;
  message: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.result = this.router.getCurrentNavigation().extras.state.result;
    this.score = (this.result.score / this.result.length) * 100;
    this.message = this.setMessage(this.score);
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

  backToHome() {
    this.router.navigate(['/home']);
  }
}
