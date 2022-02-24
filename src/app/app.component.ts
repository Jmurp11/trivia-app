/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAegNEma9m891YOgVKXCkK__OAn-hOvIf4',
      authDomain: 'trivaster-app.firebaseapp.com',
      databaseURL: 'https://trivaster-app-default-rtdb.firebaseio.com',
      projectId: 'trivaster-app',
      storageBucket: 'trivaster-app.appspot.com',
      messagingSenderId: '56697378698',
      appId: '1:56697378698:web:61646edae8552a8ede9a73',
      measurementId: 'G-N131N9CD3R',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
