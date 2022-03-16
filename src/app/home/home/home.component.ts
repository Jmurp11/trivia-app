import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { Quiz, QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  quizList$: Observable<Quiz[]>;
  modalOpen: boolean;
  constructor(
    private quizService: QuizService,
    public routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {
    this.title = 'Trivaster';
  }

  ngOnInit() {
    this.modalOpen = false;
    this.quizList$ = of(
      this.quizService
        .getAvailableQuizzes()
        .sort((a, b) => a.value.localeCompare(b.value))
    );
  }

  async presentModal() {

    const modal = await this.modalController.create({
      component: ModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        quizList$: this.quizList$,
      },
    });
    return await modal.present();
  }
}
