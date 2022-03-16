import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../home/quiz.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  @Input()
  user: any;

  @Input()
  quiz: Quiz;

  constructor() {}

  ngOnInit() {}
}
