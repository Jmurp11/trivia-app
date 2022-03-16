import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  profile = 'profile';

  constructor(public router: Router) {}

  ngOnInit() {
    this.title = 'Trivaster';
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  checkLogin() {
    if (true) {
      this.navigate(this.profile);
    } else {
      this.navigate('auth');
    }
  }
}
