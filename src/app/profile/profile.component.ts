import { Component, OnInit } from '@angular/core';
import { QuizService } from '../home/quiz.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(public quiz: QuizService) { }

  ngOnInit() {
    this.user = {
      username: 'murphyj1011',
      streak: 2,
      averageScore: 70,
      gamesPlayed: 20,
      mostPlayedCat: 'Mythology',
      bestCat: 'History',
      created: 'MAR 3, 2022'
    };
  }

}
